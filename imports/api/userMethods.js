import { Meteor } from 'meteor/meteor';
import { Users } from './users';
import { check } from 'meteor/check';

// This means that the code only is going to run in the server side.
 // Only publish tasks that are public or belong to the current user
if (Meteor.isServer) {
  Meteor.publish('userMethods', function () {
    return Meteor.users.find({});
    //return Meteor.users.find({}, {fields:{profile: true}});
  });
}

Meteor.methods({
  'userMethods.insert'(userLocal) {
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
  },
  'userMethods.remove'(userId) {
    check(userId, String);
    Users.remove(userId);
  }
  
});
