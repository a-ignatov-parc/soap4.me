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
				<div className="soap-layout">
					<div className="soap-series-desc">
						<h1>{this.state.title} ({this.state.title_ru})</h1>
						<p>{this.state.description}</p>
					</div>
				</div>
			);
		}
	});
});
