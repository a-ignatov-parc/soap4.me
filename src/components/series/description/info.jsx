define([
	'react',
	'data/series-list'
], function(React, SeriesList) {
	return React.createClass({
		getInitialState: function() {
			return SeriesList.get(this.props.id).getInfo();
		},

		render: function() {
			return (
				<div className="soap-series-desc-info">
					<p className="soap-desc">Статус: {this.state.info.status}</p>
					<p className="soap-desc">Год выхода: {this.state.info.year}</p>
				</div>
			);
		}
	});
});
