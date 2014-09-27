define([
	'react',
	'jsx!components/header/menu',
	'jsx!components/header/search',
	'jsx!components/userbar'
], function(React, Menu, Search, Userbar) {
	return React.createClass({
		render: function() {
			return (
				<div className="soap-header">
					<Search />
					<Menu page={this.props.page} type="inline" />
					<Userbar />
				</div>
			);
		}
	});
});
