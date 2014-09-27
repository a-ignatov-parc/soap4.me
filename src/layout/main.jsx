define([
	'react',
	'jsx!components/header',
	'jsx!components/footer',
], function(React, Header, Footer) {
	return React.createClass({
		render: function() {
			return (
				<div className="page">
					<div className="page-section">
						<div className="page-header">
							<Header page={this.props.page} />
						</div>
					</div>
					<div className="page-section">
						<div className="page-content">
							<div className="soap">
								{this.props.children}
							</div>
						</div>
					</div>
					<div className="page-section">
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			);
		}
	});
});
