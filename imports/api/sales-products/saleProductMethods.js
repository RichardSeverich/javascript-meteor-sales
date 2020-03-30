import { Meteor } from "meteor/meteor";
import { SalesProducts } from "./salesProducts";
import { check } from "meteor/check";

// This means that the code only is going to run in the server side.
// Only publish tasks that are public or belong to the current user
if (Meteor.isServer) {
  Meteor.publish("salesProducts", function publication() {
    return SalesProducts.find();
  });
}

Meteor.methods({
  "saleProductMethods.insert"(data) {
    check(data.sale_id, String);
    check(data.product_id, String);
    check(data.quantity, Number);
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    let saleProduct = {
      sale_id: data.sale_id,
      product_id: data.product_id,
      quantity: data.quantity
    };
    SalesProducts.insert(saleProduct);
  },

  /* "saleProductMethods.findBySaleId"(saleId) {
    check(saleId, String);
    return SalesProducts.find({ sale_id: saleId });
  },*/

  "saleProductMethods.remove"(id) {
    check(id, String);
    saleProduct.remove(id);
  }
});
