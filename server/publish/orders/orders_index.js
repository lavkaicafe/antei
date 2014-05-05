/*****************************************************************************/
/* OrdersIndex Publish Functions
/*****************************************************************************/

Meteor.publish('orders_index', function () {
  return Orders.find({user_id: this.userId});
});
