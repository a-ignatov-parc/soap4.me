define([
	'react'
], function(React) {
	return React.createClass({
		getInitialState: function() {
			return {
				page: null,
				menu: [{
					title: 'Сериалы',
					link: '#series'
				}, {
					title: 'Новое',
					link: '#new'
				}, {
					title: 'Расписание',
					link: '#schedule'
				}]
			};
		},

		render: function() {
			return (
				<ul className={'soap-menu' + (this.props.type != null ? ' soap-menu--' + this.props.type : '')}>
					{this.state.menu.map(function(item, i) {
						var classNames = ['soap-menu-item'];

						if ('#' + this.props.page === item.link) {
							classNames.push('soap-menu-item--active');
						}
						return (
							<li key={i} className={classNames.join(' ')}>
								<a href={item.link} className="soap-link">{item.title}</a>
							</li>
						);
					}.bind(this))}
				</ul>
			);
		}
	});
});
