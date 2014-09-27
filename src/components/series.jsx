define([
	'react',
	'data/series-list',
	'jsx!components/series/card',
], function(React, SeriesList, Card) {
	var IDLE = 'idle',
		LOADING = 'loading';

	SeriesList.fetch();

	return React.createClass({
		series: SeriesList,

		getInitialState: function() {
			return {
				state: IDLE,
				list: this.series.toJSON()
			};
		},

		componentDidMount: function() {
			this.series
				.on('request', function() {
					this.setState({
						state: LOADING
					});
				}, this)
				.on('sync', function() {
					this.setState({
						state: IDLE,
						list: this.series.toJSON()
					});
				}, this);
		},

		render: function() {
			return (
				<div className="soap-layout">
					<div className="soap-series">
						{this.state.list.map(function(series) {
							return <Card key={series.sid} id={series.sid} />;
						})}
					</div>
				</div>
			);
		}
	});
});
