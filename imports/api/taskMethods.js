import { Meteor } from 'meteor/meteor';
import { Tasks } from './tasks';
import { check } from 'meteor/check';


// This means that the code only is going to run in the server side.
 // Only publish tasks that are public or belong to the current user
if (Meteor.isServer) {
  Meteor.publish('taskMethods', function tasksPublication() {
    return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
    //return Tasks.find();
  });
}

Meteor.methods({
  'taskMethods.insert'(taskName) {
    check(taskName, String);
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.insert({
      taskName,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      checked: false,
      private: false
      //username: Meteor.user().username
    });
  },
  'taskMethods.remove'(taskId) {
    check(taskId, String);
    Tasks.remove(taskId);
  },
  'taskMethods.setChecked'(taskId, isChecked) {
    check(taskId, String);
    check(isChecked, Boolean);
    Tasks.update(taskId, { $set: { checked: isChecked } });
  },
  'taskMethods.setPrivate'(taskId, setToPrivate) {
    check(taskId, String);
    check(setToPrivate, Boolean);
    const task = Tasks.findOne(taskId);
    // Make sure only the task owner can make a task private
    if (task.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.update(taskId, { $set: { private: setToPrivate } });
  },
});
