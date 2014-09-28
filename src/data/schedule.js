define([
	'backbone',
	'data/schedule-record'
], function(Backbone, Record) {
	var cache = {};

	return function(sid) {
		if (!cache[sid]) {
			cache[sid] = new (Backbone.Collection.extend({
				url: '/api/series/' + sid + '/schedule',
				model: Record
			}));
		}
		return cache[sid];
	}
});
