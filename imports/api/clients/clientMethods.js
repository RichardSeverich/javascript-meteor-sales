import { Meteor } from "meteor/meteor";
import { Clients } from "./clients";
import { Sales } from "./../sales/sales";
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
    let clientSchema = {
      id_card: client.idCard,
      name: client.name,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    };
    if (client._id) {
      Clients.update({ _id: client._id }, clientSchema);
    } else {
      Clients.insert(clientSchema);
    }
  },

  "clientMethods.remove"(id) {
    check(id, String);
    let sales = Sales.findOne({ client_id: id });
    if (sales) {
      return false;
    }
    Clients.remove(id);
    return true;
  },

  "clientMethods.finedOne"(id) {
    check(id, String);
    return Clients.findOne(id);
  }
});
