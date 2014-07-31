define([
	'react'
], function(React) {
	return React.createClass({
		render: function() {
			return <div>Hello {this.props.name}</div>;
		}
	});
});