import { Meteor } from "meteor/meteor";
import { Products } from "./products";
import { SalesProducts } from "./../sales-products/salesProducts";
import { check } from "meteor/check";

// This means that the code only is going to run in the server side.
// Only publish tasks that are public or belong to the current user
if (Meteor.isServer) {
  Meteor.publish("products", function publication() {
    return Products.find();
  });
}

Meteor.methods({
  "productMethods.insert"(product) {
    check(product.name, String);
    check(product.price, Number);
    check(product.quantity, Number);
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Products.insert({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },

  "productMethods.remove"(id) {
    check(id, String);
    let salesProducts = SalesProducts.findOne({ product_id: id });
    if (salesProducts) {
      return false;
    }
    Products.remove(id);
    return true;
  },

  "productMethods.finedOne"(id) {
    check(id, String);
    return Products.findOne(id);
  }
});
