define([
	'react'
], function(React) {
	return React.createClass({
		render: function() {
			return (
				<div className="soap-layout">
					<div>
						Season #{this.props.season}
					</div>
				</div>
			);
		}
	});
});
