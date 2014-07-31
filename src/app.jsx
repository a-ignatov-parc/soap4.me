define([
	'jquery',
	'react',
	'jsx!components/hello'
], function($, React, Hello) {
	return {
		init: function(container) {
			React.renderComponent(<Hello name="World" />, container);
		}
	};
});