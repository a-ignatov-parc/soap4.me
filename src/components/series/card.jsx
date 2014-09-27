define([
	'react',
	'data/series-list'
], function(React, SeriesList) {
	return React.createClass({
		getInitialState: function() {
			var model = SeriesList.get(this.props.id);

			return model ? model.toJSON() : {};
		},

		render: function() {
			return (
				<a href={'#series/' + this.state.sid} className="soap-series-card">
					<div className="soap-series-card-img"></div>
					<div className="soap-series-card-title">
						{this.state.title}
					</div>
				</a>
			);
		}
	});
});
