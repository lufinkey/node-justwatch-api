
const JustWatch = require('./');

var justwatch = new JustWatch('en_US');
justwatch.search({query: 'always sunny'}).then((result) => {
	console.log(JSON.stringify(result, null, 4));
}).catch((error) => {
	console.error(error);
});
