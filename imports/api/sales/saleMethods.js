import { Meteor } from "meteor/meteor";
import { Sales } from "./sales";
import { Clients } from "./../clients/clients";
import { check } from "meteor/check";

// This means that the code only is going to run in the server side.
// Only publish tasks that are public or belong to the current user
if (Meteor.isServer) {
  Meteor.publish("sales", function publication() {
    return Sales.find();
  });
}

Meteor.methods({
  "saleMethods.insert"(data) {
    check(data.idCard, Number);
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    let client = Clients.findOne({ id_card: data.idCard });
    if (!client) {
      throw new Meteor.Error("client-dont-exist");
    }
    let sale = {
      client_id: client._id,
      client_id_card: client.id_card,
      client_name: client.name,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    };
    Sales.insert(sale);
  },

  "saleMethods.remove"(id) {
    check(id, String);
    Sales.remove(id);
  }
});
