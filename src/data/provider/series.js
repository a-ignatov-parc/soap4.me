define([
	'data/series-list',
], function(SeriesList) {
	return {
		fetch: function() {
			return SeriesList.fetch();
		}
	};
});
