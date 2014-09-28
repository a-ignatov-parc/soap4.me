define([
	'jquery',
	'data/schedule'
], function($, ScheduleFactory) {
	return {
		fetch: function(data) {
			var collection = ScheduleFactory(data.id || 'global');

			if (collection.length) {
				return $.Deferred().resolve();
			}
			return collection.fetch();
		}
	};
});
