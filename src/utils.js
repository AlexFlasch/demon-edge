var axios = require('axios');

module.exports = {
	daedalusUrl: 'localhost',
	daedalusPort: 80,
	log(message) {
		console.error(`CRIT: ${message}`);
	},

	clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	},

	// concatenates all the urlSegments into one http url
	// could probably be done a bit more cleanly, but this will work for now
	generateEndpointRequestUrl(urlSegments) {
		// 0 = apiUrl
		// 1 = schemaUrl
		// 2 = endpointUrl
		const requestUrl =
			`${urlSegments[0]}/${urlSegments[1]}/${urlSegments[2]}`;

		return requestUrl;
	},

	// concatenates all the urlSegments into one http url with query parameters
	generateRequestUrl(urlSegments, parameters) {
		var requestUrl = this.daedalusUrl

		var parameterNames = Object.keys(parameters);

		requestUrl += '?';

		// append parameters as such: &<param_name>=<param_value>
		for (let i = 0; i < parameterNames.length; i++) {
			if(i !== 0) {
				requestUrl += '&';
			}
			requestUrl += `${parameterNames[i]}=${parameters[parameterNames[i]]}`;
		}

		return requestUrl;
	},

	// sends a vanilla js xhr request, but wrapped in an ES6 promise
	// in order to allow for contacting a separate api server, CORS has to be enabled
	// return the promise object for the user to resolve when needed
	sendXHR(url, params) {
		const promise = new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			console.log(`http://${daedalusUrl}/${url}`);

			xhr.open('POST', `http://${daedalusUrl}/${url}`, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			xhr.onload = function onload() {
				if (this.status >= 200 && this.status <= 300) {
					resolve(this.response);
				} else {
					reject(this.statusText);
				}
			};

			xhr.onerror = function onerror() {
				reject(this.statusText);
			};

			xhr.send(params);
		});

		return axios.post(`http://${daedalusUrl}/${url}`, )

		return promise;
	}
};
