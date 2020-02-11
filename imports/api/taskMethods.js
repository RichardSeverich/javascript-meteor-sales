import { Meteor } from 'meteor/meteor';
import { Tasks } from './tasks';
import { check } from 'meteor/check';


/*if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('taskMethods', function tasksPublication() {
    return Tasks.find();
  });
}*/

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
      checked: false
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
});
