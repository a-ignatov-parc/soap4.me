define([
	'jquery',
	'backbone',
	'react',
	'router',
	'jsx!layout/main',
	'jsx!components/404',
	'jsx!components/series',
	'jsx!components/series/description',
], function($, Backbone, React, Router, MainLayout, NotFound, Series, Description) {
	return {
		init: function(container) {
			this.container = container;
			this.router = new Router({
				routes: {
					'': function() {
						this.router.navigate('series', {
							trigger: true,
							replace: true
						});
					}.bind(this),
					'series/:id': this.description.bind(this),
					'series': this.series.bind(this),
					'*route': this.unknown.bind(this)
				}
			});
			Backbone.history.start();
		},

		description: function(id) {
			React.renderComponent(
				<MainLayout page="description">
					<Description id={id} />
				</MainLayout>
			, this.container);
		},

		series: function() {
			React.renderComponent(
				<MainLayout page="series">
					<Series />
				</MainLayout>
			, this.container);
		},

		unknown: function(page) {
			React.renderComponent(
				<MainLayout page={page}>
					<NotFound />
				</MainLayout>
			, this.container);

			this.router.navigate('404', {
				replace: true
			});
		}
	};
});
