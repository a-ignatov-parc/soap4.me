define([
	'backbone',
	'data/series'
], function(Backbone, Series) {
	return Backbone.Collection.extend({
		url: '/api/series',
		model: Series
	});
});
