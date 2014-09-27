define([
	'react'
], function(React) {
	return React.createClass({
		render: function() {
			return (
				<div className="soap-search" onSubmit={this.onSubmit}>
					<form className="soap-search-form">
						<div className="soap-search-input">
							<input type="reset" value="" tabIndex="2" className="soap-icon soap-icon--cancel" />
							<div className="soap-search-input-indent">
								<input ref="search" type="text" placeholder="Поиск" tabIndex="1" className="soap-search-inputfield" />
							</div>
						</div>
					</form>
				</div>
			);
		},

		onSubmit: function(event) {
			event.preventDefault();
			console.log('Search', this.refs.search.getDOMNode().value.trim());
		}
	});
});
