
const https = require('https');
const { URL } = require('url');
const QueryString = require('querystring');

const API_URL = 'https://api.justwatch.com';
const APIS_URL = 'https://apis.justwatch.com';

class JustWatch
{
	constructor(locale)
	{
		this._locale = locale;
	}

	request(method, url, params)
	{
		return new Promise((resolve, reject) => {
			params = Object.assign({}, params);
			// build request data
			url = new URL(url);
			var reqData = {
				protocol: url.protocol,
				hostname: url.hostname,
				port: url.port,
				path: url.pathname,
				method: method,
				headers: {}
			};
			var body = null;
			// add query string if necessary
			if(method==='GET')
			{
				if(Object.keys(params) > 0)
				{
					reqData.path = reqData.path+'?'+QueryString.stringify(params);
				}
			}
			else
			{
				body = JSON.stringify(params);
				reqData.headers['Content-Type'] = 'application/json';
			}

			// send request
			const req = https.request(reqData, (res) => {
				// build response
				let buffers = [];
				res.on('data', (chunk) => {
					buffers.push(chunk);
				});

				res.on('end', () => {
					// check if response 
					var output = null;
					try
					{
						output = Buffer.concat(buffers);
						output = output.toString();
						output = JSON.parse(output);
					}
					catch(error)
					{
						if(res.statusCode !== 200)
						{
							reject(new Error("request failed with status "+res.statusCode+": "+res.statusMessage));
						}
						else
						{
							reject(error);
						}
						return;
					}
					
					if(output.error)
					{
						reject(new Error(output.error));
					}
					else
					{
						resolve(output);
					}
				});
			});

			// handle error
			req.on('error', (error) => {
				reject(error);
			});

			// send
			if(method !== 'GET' && body)
			{
				req.write(body);
			}
			req.end();
		});
	}

	async search(options={})
	{
		if(typeof options === 'string')
		{
			options = {query: options};
		}
		else
		{
			options = Object.assign({}, options);
		}
		// build default params
		var params = {
			'content_types': null,
			'presentation_types': null,
			'providers': null,
			'genres': null,
			'languages': null,
			'release_year_from': null,
			'release_year_until': null,
			'monetization_types': null,
			'min_price': null,
			'max_price': null,
			'scoring_filter_types': null,
			'cinema_release': null,
			'query': null,
			'page': null,
			'page_size': null
		};
		var paramKeys = Object.keys(params);
		// validate options
		for(const key in options)
		{
			if(paramKeys.indexOf(key) === -1)
			{
				throw new Error("invalid option '"+key+"'");
			}
			else
			{
				params[key] = options[key];
			}
		}
		// send request
		return await this.request('POST', API_URL+'/titles/'+encodeURIComponent(this._locale)+'/popular', params);
	}
}

module.exports = JustWatch;
