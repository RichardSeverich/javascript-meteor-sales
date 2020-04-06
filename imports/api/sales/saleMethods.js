import { Meteor } from "meteor/meteor";
import { Sales } from "./sales";
import { Clients } from "./../clients/clients";
import { SalesProducts } from "./../sales-products/salesProducts";
import { check } from "meteor/check";

// This means that the code only is going to run in the server side.
// Only publish tasks that are public or belong to the current user
if (Meteor.isServer) {
  Meteor.publish("sales", function publication() {
    return Sales.find();
  });
}

Meteor.methods({
  "saleMethods.insert"(sale) {
    check(sale.idCard, Number);
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    let client = Clients.findOne({ id_card: sale.idCard });
    if (!client) {
      throw new Meteor.Error("client-dont-exist");
    }
    let saleSchema = {
      client_id: client._id,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    };

    if (sale._id) {
      Sales.update({ _id: sale._id }, saleSchema);
    } else {
      Sales.insert(saleSchema);
    }
  },

  "saleMethods.remove"(id) {
    check(id, String);
    let salesProducts = SalesProducts.findOne({ sale_id: id });
    if (salesProducts) {
      return false;
    }
    Sales.remove(id);
    return true;
  }
});
