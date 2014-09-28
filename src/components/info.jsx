define([
	'react'
], function(React) {
	return React.createClass({
		render: function() {
			return (
				<div className="soap-info">
					<ul className="soap-info-tabs">
						{this.props.tabs.map(function(item, i) {
							var classNames = ['soap-info-tab'];

							if (item.active) {
								classNames.push('soap-info-tab--active');
							}
							return (
								<li key={i} className={classNames.join(' ')}>
									<a href={item.link} className="soap-info-tab-trigger">{item.title}</a>
								</li>
							);
						}.bind(this))}
					</ul>
					<div className="soap-info-content">
						{this.props.children}
					</div>
				</div>
			);
		}
	});
});
