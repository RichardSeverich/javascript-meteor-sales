import { Meteor } from "meteor/meteor";
import { Products } from "./products";
import { check } from "meteor/check";

// This means that the code only is going to run in the server side.
// Only publish tasks that are public or belong to the current user
if (Meteor.isServer) {
  Meteor.publish("products", function tasksPublication() {
    return Products.find();
  });
}

Meteor.methods({
  "productMethods.insert"(product) {
    check(product.name, String);
    check(product.value, Integer);
    check(product.quantity, Integer);
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Products.insert({
      name: product.name,
      value: product.value,
      quantity: product.quantity,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },

  "productMethods.remove"(id) {
    check(id, String);
    Products.remove(id);
  }
});
