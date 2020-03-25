import { Meteor } from "meteor/meteor";
import { Clients } from "./clients";
import { check } from "meteor/check";

// This means that the code only is going to run in the server side.
// Only publish tasks that are public or belong to the current user
if (Meteor.isServer) {
  Meteor.publish("clients", function publication() {
    return Clients.find();
  });
}

Meteor.methods({
  "clientMethods.insert"(client) {
    check(client.idCard, Number);
    check(client.name, String);
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Clients.insert({
      id_card: client.idCard,
      name: client.name,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },

  "clientMethods.remove"(id) {
    check(id, String);
    Clients.remove(id);
  }
});
