/*****************************************************************************/
/* OrdersIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.OrdersIndex.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
	'click #create_order': function (e, tmpl) {
		e.preventDefault();

		var year = App.menuDate().year(), month = App.menuDate().month(), date = App.menuDate().date(), weekDay = App.menuDate().isoWeekday();


		if (Orders.find({year: year, month: month, date: date}).count() === 0) {

			Orders.insert({
				year: year,
				month: month,
				date: date,
				user_id: Meteor.userId(),
				created_at: new Date,
				menu: Menu.findOne({weekDay: weekDay})
			});

		};
	}
});

Template.OrdersIndex.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
	justPlaying: function () {
		return App.menuDate().format('dddd, LL');
	},

	currentMenu: function () {
		return Menu.findOne({weekDay: App.menuDate().isoWeekday()});
	},

	currentOrder: function () {
		return Orders.find({year: App.menuDate().year(), month: App.menuDate().month(), date: App.menuDate().date()});
	}
});

/*****************************************************************************/
/* OrdersIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.OrdersIndex.created = function () {
};

Template.OrdersIndex.rendered = function () {
};

Template.OrdersIndex.destroyed = function () {
};
