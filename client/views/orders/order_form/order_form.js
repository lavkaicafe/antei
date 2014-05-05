/*****************************************************************************/
/* OrderForm: Event Handlers and Helpers */
/*****************************************************************************/
Template.OrderForm.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
	'click #delete_order': function (e, tmpl) {
		e.preventDefault();

		Orders.remove(this._id);
	},

	'submit form': function (e) {
		e.preventDefault();

		var id = this._id;
		var updatedOrder = {
			soupIndex: $(e.target).find('[id=soup]').val(), 
			mainIndex: $(e.target).find('[id=main]').val(), 
			saladIndex: $(e.target).find('[id=salad]').val(),
			updated_at: new Date
		};

		Orders.update(id, { $set: updatedOrder });

		$('#save_alert').removeClass('hidden');
	}
});

Template.OrderForm.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
	currentOrderOne: function () {
		return Orders.findOne({year: App.menuDate().year(), month: App.menuDate().month(), date: App.menuDate().date()});
	}
});

/*****************************************************************************/
/* OrderForm: Lifecycle Hooks */
/*****************************************************************************/
Template.OrderForm.created = function () {
};

Template.OrderForm.rendered = function () {
	$('#soup').val(this.data.soupIndex).trigger('change');
	$('#main').val(this.data.mainIndex).trigger('change');
	$('#salad').val(this.data.saladIndex).trigger('change');
};

Template.OrderForm.destroyed = function () {
};
