define([
	'jquery'
], function($) {
	var baseUrl = 'https://soap4.me',
		resourceMap = {
			login: {
				path: 'login',
				type: 'POST'
			}
		},
		token;

	function sendRequest(apiResource, data, callback) {
		var resource = resourceMap[apiResource],
			url = [baseUrl];

		if (!apiResource) {
			console.error('No resource was specified');
			return false;
		}

		if (typeof(data) === 'function' && !callback) {
			callback = data;
			data = void(0);
		}

		if (!resource) {
			console.error('No resource was found related to "' + apiResource + '"');
			return false;
		}
		url = url.concat(resource.path.split('/'));

		if (url[url.length - 1] !== '') {
			url.push('');
		}

		return $.ajax({
			url: url.join('/'),
			type: resource.type,
			headers: {
				'x-api-token': token
			},
			data: data
		});
	}

	return {
		login: function() {
			return sendRequest('login', {
				login: '',
				password: ''
			});
		}
	};
});