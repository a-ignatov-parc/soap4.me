define([
	'react',
	'jsx!components/loader'
], function(React, Loader) {
	return React.createClass({
		getInitialState: function() {
			return {
				url: '/img/icons/cancel.png'
			};
		},

		render: function() {
			var data = {
					id: this.props.id
				},
				provider = '';

			switch (this.props.type) {
				case 'series':
					provider = 'series-cover';
					break;
				case 'season':
					provider = 'season-cover';
					break;
			}

			return (
				<a href={this.props.url} className={'soap-series-card soap-series-card--' + this.props.type}>
					<div className="soap-series-card-cover">
						<Loader provider={provider} data={data}>
							<img ref="cover" className="soap-series-card-cover-img" src={this.state.url} width="100" height="100" />
						</Loader>
					</div>
					<div className="soap-series-card-title">
						{this.props.title}
					</div>
				</a>
			);
		}
	});
});
