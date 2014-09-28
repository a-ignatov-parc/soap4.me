define([
	'backbone'
], function(Backbone) {
	var viewed = {
			YES: '1',
			NO: '0'
		};

	return Backbone.Model.extend({
		idAttribute: 'eid',

		viewed: viewed,

		defaults: {
			'eid': null,
			'sid': null,
			'episode': 0,
			'season': 0,
			'quality': null,
			'translate': null,
			'hash': null,
			'title_en': '',
			'title_ru': '',
			'spoiler': '',
			'season_id': 0,
			'watched': viewed.NO
		}
	});
});
