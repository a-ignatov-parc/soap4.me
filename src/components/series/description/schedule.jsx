define([
	'react',
	'data/series-list'
], function(React, SeriesList) {
	return React.createClass({
		getInitialState: function() {
			return SeriesList.get(this.props.id).getSchedule();
		},

		render: function() {
			return (
				<div className="soap-series-desc-schedule">
					<h2 className="soap-subtitle">Официальное расписание выхода серий:</h2>
					<ul>
						{this.state.schedule.map(function(record) {
							return <li key={record.episode}>{record.date} – {record.episode} – {record.title}</li>;
						})}
					</ul>
				</div>
			);
		}
	});
});
