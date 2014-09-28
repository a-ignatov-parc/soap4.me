define([
	'underscore',
	'backbone',
	'data/episodes',
	'data/schedule'
], function(_, Backbone, EpisodesFactory, ScheduleFactory) {
	var status = {
			IN_PROGRESS: '0',
			FINISHED: '1',
			CLOSED: '2'
		},
		viewed = {
			YES: '1',
			NO: '0'
		},
		statusMap = ['снимается', 'закончен', 'закрыт'],
		privateProps = {};

	return Backbone.Model.extend({
		idAttribute: 'sid',

		status: status,
		viewed: viewed,

		defaults: {
			sid: null,
			title: '',
			title_ru: '',
			description: '',
			year: '1970',
			imdb_rating: '0.0',
			imdb_votes: 0,
			tvdb_id: '',
			imdb_id: '',
			status: status.CLOSED,
			viewed: viewed.NO,
			unwatched: 0
		},

		initialize: function() {
			privateProps[this.cid] = {
				reviews: null,
				schedule: ScheduleFactory(this.id),
				episodes: EpisodesFactory(this.id),
				recomendations: null
			}
		},

		parse: function(data) {
			data.sid = parseInt(data.sid, 10);
			data.unwatched || (data.unwatched = 0);
			return data;
		},

		getInfo: function() {
			return {
				info: {
					status: statusMap[this.get('status')],
					year: this.get('year')
				}
			}
		},

		getEpisodes: function() {
			return {
				episodes: privateProps[this.cid].episodes.toJSON()
			};
		},

		getSchedule: function() {
			return {
				schedule: privateProps[this.cid].schedule.toJSON()
			};
		},

		getSeasons: function() {
			var seasons = [];

			_.each(privateProps[this.cid].episodes.toJSON(), function(episode) {
				var index = +episode.season - 1;

				if (!seasons[index]) {
					seasons[index] = {
						id: episode.season_id,
						season: episode.season,
						tags: {
							hd: false,
							sd: false,
							subs: false
						},
						unwatched: 0
					};
				}

				switch (episode.quality.toLowerCase()) {
					case 'sd':
						seasons[index].tags.sd = true;
						break;
					case '720p':
						seasons[index].tags.hd = true;
						break;
				}

				if (episode.watched == 0) {
					seasons[index].unwatched++;
				}
			});

			return {
				seasons: seasons
			};
		}
	});
});
