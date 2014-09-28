define([
	'backbone'
], function(Backbone) {
	return Backbone.Model.extend({
		idAttribute: 'episode',

		defaults: {
			'episode': '',
			'title': '',
			'date': ''
		}
	});
});
