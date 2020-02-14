import { Meteor } from 'meteor/meteor';
import { Users } from './users';
import { check } from 'meteor/check';

// This means that the code only is going to run in the server side.
 // Only publish tasks that are public or belong to the current user
if (Meteor.isServer) {
  Meteor.publish('userLocalMethods', function tasksPublication() {
    return Users.find();
  });
}

Meteor.methods({
  'userLocalMethods.insert'(userLocal) {
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
  },
  'userLocalMethods.remove'(userId) {
    check(userId, String);
    Users.remove(userId);
  }
});
