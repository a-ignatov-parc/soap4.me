define([
	'react',
	'jsx!components/spinner',
], function(React, Spinner) {
	var IDLE = 'idle',
		LOADING = 'loading',
		ERROR = 'error';

	return React.createClass({
		getInitialState: function() {
			return {
				data: LOADING
			};
		},

		componentDidMount: function() {
			if (this.props.provider == null) {
				this.setState({
					data: ERROR
				});
			} else {
				require(['data/provider/' + this.props.provider], function(provider) {
					provider
						.fetch(this.props.data, this.props.children)
						.then(function() {
							if (this.isMounted()) {
								this.setState({
									data: IDLE
								});
							}
						}.bind(this), function() {
							if (this.isMounted()) {
								this.setState({
									data: ERROR
								});
							}
						}.bind(this));
				}.bind(this), function() {
					if (this.isMounted()) {
						this.setState({
							data: ERROR
						});
					}
				}.bind(this));
			}
		},

		render: function() {
			switch (this.state.data) {
				case LOADING:
					return (
						<div className="soap-loader">
							<Spinner />
						</div>
					);
					break;
				case ERROR:
					return (
						<div className="soap-loader">
							<p className="soap-desc">Что-то пошло не так!</p>
						</div>
					);
					break;
				case IDLE:
					return this.props.children;
					break;
			}
		}
	});
});
