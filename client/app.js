/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
	menuDate: function () {
		moment.lang('ru');
		var m = moment();
		switch (true) {
			case m.isoWeekday() > 4:
				m.isoWeekday(8);
				break;
			default:
				m.isoWeekday(m.isoWeekday() + 1);
		};

		return m;
	}
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});
