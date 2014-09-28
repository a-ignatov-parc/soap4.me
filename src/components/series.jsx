define([
	'react',
	'data/series-list',
	'jsx!components/series/card'
], function(React, SeriesList, Card) {
	return React.createClass({
		getInitialState: function() {
			return {
				list: SeriesList.toJSON()
			};
		},

		render: function() {
			return (
				<div className="soap-layout">
					<div className="soap-series">
						{this.state.list.map(function(series) {
							return <Card key={series.sid} id={series.sid} url={'#series/' + series.sid} title={series.title} type="series" />;
						})}
					</div>
				</div>
			);
		}
	});
});
