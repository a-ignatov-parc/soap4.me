define([
	'backbone',
	'data/series'
], function(Backbone, Series) {
	return new (Backbone.Collection.extend({
		url: '/api/series',
		model: Series
	}));
});
