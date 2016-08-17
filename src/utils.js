module.exports = {
	daedalusUrl: 'localhost',
	daedalusPort: 7575,
	log(message) {
		console.error(`CRIT: ${message}`);
	},

	clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	},

	// concatenates all the urlSegments into one http url
	// could probably be done a bit more cleanly, but this will work for now
	generateEndpointRequestUrl(urlSegments) {
		// 0 = baseUrl
		// 1 = schemaUrl
		// 2 = endpointUrl
		// 3 = apiVersion
		const requestUrl =
			`${urlSegments[0]}/${urlSegments[1]}/${urlSegments[2]}/${urlSegments[3]}`;

		return requestUrl;
	},

	// concatenates all the urlSegments into one http url with query parameters
	generateRequestUrl(urlSegments, parameters) {
		var requestUrl = this.daedalusUrl

		var parameterNames = Object.keys(parameters);

		// append parameters as such: &<param_name>=<param_value>
		for (let i = 0; i < parameterNames.length; i++) {
			requestUrl += `&${parameterNames[i]}=${parameters[parameterNames[i]]}`;
		}

		return requestUrl;
	},

	// sends a vanilla js xhr request, but wrapped in an ES6 promise
	// in order to allow for contacting a separate api server, CORS has to be enabled
	// return the promise object for the user to resolve when needed
	sendXHRRequest(url, params) {
		const promise = new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			xhr.setRequestHeader("Access-Control-Allow-Origin", `${this.daedalusUrl}:${this.daedalusPort}/${url}`);

			console.log(`${this.daedalusUrl}:${this.daedalusPort}/${url}`);

			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);

			xhr.onload = function() {
				if (this.status >= 200 && this.status <= 300) {
					resolve(this.response);
				} else {
					reject(this.statusText);
				}
			};

			xhr.onerror = function() {
				reject(this.statusText);
			};
		});

		return promise;
	}
};
