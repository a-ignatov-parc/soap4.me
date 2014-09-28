define([
	'jquery',
	'data/episodes'
], function($, EpisodesFactory) {
	return {
		fetch: function(data) {
			var collection = EpisodesFactory(data.id);

			if (collection.length) {
				return $.Deferred().resolve();
			}
			return collection.fetch();
		}
	};
});
