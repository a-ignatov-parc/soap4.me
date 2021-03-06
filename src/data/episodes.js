define([
	'backbone',
	'data/episode'
], function(Backbone, Episode) {
	var cache = {};

	return function(sid) {
		if (!cache[sid]) {
			cache[sid] = new (Backbone.Collection.extend({
				url: '/api/series/' + sid + '/episodes',
				model: Episode
			}));
		}
		return cache[sid];
	}
});
