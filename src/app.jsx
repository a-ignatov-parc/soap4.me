define([
	'jquery',
	'backbone',
	'react',
	'router',
	'jsx!layout/main',
	'jsx!components/loader'
], function($, Backbone, React, Router, MainLayout, Loader) {
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
					'series/:id/seasons/:season': this.seasons.bind(this),
					'series/:id(/:section)': this.descriptions.bind(this),
					'series': this.series.bind(this),
					'404': this.unknown.bind(this),
					'*route': function() {
						this.router.navigate('404', {
							trigger: true,
							replace: true
						});
					}.bind(this)
				}
			});
			Backbone.history.start();
		},

		descriptions: function(id, section) {
			require(['jsx!components/series/description'], function(Description) {
				React.renderComponent(
					<MainLayout page="description">
						<Loader provider="series">
							<Description id={id} section={section} />
						</Loader>
					</MainLayout>
				, this.container);
			}.bind(this));
		},

		series: function() {
			require(['jsx!components/series'], function(Series) {
				React.renderComponent(
					<MainLayout page="series">
						<Loader provider="series">
							<Series />
						</Loader>
					</MainLayout>
				, this.container);
			}.bind(this));
		},

		seasons: function(id, season) {
			require(['jsx!components/series/season/episodes'], function(Episodes) {
				React.renderComponent(
					<MainLayout page="seasons">
						<Loader provider="series">
							<Episodes id={id} season={season} />
						</Loader>
					</MainLayout>
				, this.container);
			}.bind(this));
		},

		unknown: function() {
			require(['jsx!components/404'], function(NotFound) {
				React.renderComponent(
					<MainLayout page="404">
						<NotFound />
					</MainLayout>
				, this.container);
			}.bind(this));
		}
	};
});
