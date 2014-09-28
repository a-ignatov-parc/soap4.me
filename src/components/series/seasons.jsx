define([
	'underscore',
	'react',
	'data/series-list',
	'jsx!components/series/card'
], function(_, React, SeriesList, Card) {
	return React.createClass({
		getInitialState: function() {
			return SeriesList.get(this.props.id).getSeasons();
		},

		render: function() {
			var cards = this.state.seasons.map(function(season) {
					var title = (<span>
							Сезон {season.season} 
							{_.map(season.tags, function(value, key) {
								if (value) {
									return <span key={key} className="soap-tag">{key}</span>;
								}
							})}
						</span>);

					return <Card key={season.id} id={season.id} url={'#series/' + this.props.id + '/seasons/' + season.season} title={title} type="season" />;
				}.bind(this));

			return (
				<div className="soap-series-seasons">
					{cards}
				</div>
			);
		}
	});
});
