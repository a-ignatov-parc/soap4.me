define([
	'react',
	'data/series-list',
	'jsx!components/info',
	'jsx!components/loader',
	'jsx!components/series/seasons',
	'jsx!components/series/description/info',
	'jsx!components/series/description/schedule',
	'jsx!components/series/description/recomendations',
	'jsx!components/series/description/reviews'
], function(React, SeriesList, InfoBlock, Loader, Seasons, Info, Schedule, Recomendations, Reviews) {
	return React.createClass({
		getInitialState: function() {
			var model = SeriesList.get(this.props.id);

			return model ? model.toJSON() : {};
		},

		render: function() {
			var tabs = [{
					title: 'Информация',
					link: '#series/' + this.props.id
				}, {
					title: 'Расписание',
					link: '#series/' + this.props.id + '/schedule'
				}, {
					title: 'Рекомендации',
					link: '#series/' + this.props.id + '/recomendations'
				}, {
					title: 'Рецензии',
					link: '#series/' + this.props.id + '/reviews'
				}],
				content;

			switch (this.props.section) {
				case null:
					tabs[0].active = true;
					content = <Info id={this.props.id} />;
					break;
				case 'schedule':
					tabs[1].active = true;
					content = (
						<Loader provider="schedule" data={{id:this.props.id}}>
							<Schedule id={this.props.id} />
						</Loader>
					);
					break;
				case 'recomendations':
					tabs[2].active = true;
					content = <Recomendations id={this.props.id} />;
					break;
				case 'reviews':
					tabs[3].active = true;
					content = <Reviews id={this.props.id} />;
					break;
			}

			return (
				<div className="soap-layout">
					<div className="soap-series-desc">
						<h1 className="soap-title">{this.state.title} <span className="soap-series-desc-subtitle">({this.state.title_ru})</span></h1>
						<p className="soap-desc soap-desc--top_indent">{this.state.description}</p>
						<InfoBlock tabs={tabs}>
							{content}
						</InfoBlock>
						<Loader provider="episodes" data={{id:this.props.id}}>
							<Seasons id={this.props.id} />
						</Loader>
					</div>
				</div>
			);
		}
	});
});
