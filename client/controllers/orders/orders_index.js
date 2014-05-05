OrdersIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('orders_index');
    Meteor.subscribe('menu_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
