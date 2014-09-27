define([
	'react'
], function(React) {
	return React.createClass({
		render: function() {
			return (
				<a href={'#series/' + this.props.data.sid} className="soap-series-card">
					<div className="soap-series-card-img"></div>
					<div className="soap-series-card-title">
						{this.props.data.title}
					</div>
				</a>
			);
		}
	});
});
