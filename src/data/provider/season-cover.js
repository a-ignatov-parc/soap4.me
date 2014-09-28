define([
	'jquery',
	'react'
], function($, React) {
	return {
		fetch: function(data, children) {
			var deferred = $.Deferred(),
				img = new Image();

			img.src = 'https://soap4.me/assets/covers/season/' + data.id + '.jpg';

			function resolve(succeed) {
				if (succeed) {
					React.Children.forEach(children, function(child) {
						if (child._store.props.ref === 'cover') {
							if ('url' in child._owner.state) {
								child._owner.state.url = img.src;
							}
							child._store.props.src = img.src;
						}
					});
				}
				deferred.resolve();
			}

			if (img.complete) {
				resolve(true);
			} else {
				img.onload = function() {
					resolve(true);
				};
				img.onerror = function() {
					resolve();
				};
			}
			return deferred;
		}
	};
});
