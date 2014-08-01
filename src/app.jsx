define([
	'jquery',
	'react',
	'jsx!components/hello',
	'api/soap'
], function($, React, Hello, soapApi) {
	return {
		init: function(container) {
			React.renderComponent(<Hello name="World" />, container);

			// Попытка авторизоваться через api soap4.me
			soapApi.login();
		}
	};
});