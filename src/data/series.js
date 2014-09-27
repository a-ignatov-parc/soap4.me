define([
	'backbone'
], function(Backbone) {
	var statuses = {
			IN_PROGRESS: 'in_progress',
			FINISHED: 'finished',
			CANCELED: 'canceled'
		},
		privateProps = {};

	return Backbone.Model.extend({
		idAttribute: 'sid',

		statuses: statuses,

		defaults: {
			sid: null,
			title: '',
			title_ru: '',
			description: '',
			year: 1970,
			imdb_rating: 0,
			imdb_votes: 0,
			subscribers: 0,
			subscribed: false,
			status: statuses.FINISHED,
			reviews_count: 0
		},

		initialize: function() {
			privateProps[this.cid] = {
				reviews: null
			}
		}
	});
});
