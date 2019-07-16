# Unofficial JustWatch API

The justwatch.com API for node js.

##  Disclaimer
This is not the official JustWatch API. JustWatch doesn't offer an open API and doesn't plan to do this in the future.

The work of many developers went and is still going into the development and maintenance of the data and the API. JustWatch's main business is to operate a [streaming guide](https://www.justwatch.com/) with apps for iOS and Android. They offer the data for business intelligence and marketing. Therefore it is prohibited to use the API for commercial use (consumer service, data science, business intelligence, etc.). It is ok to use the API for private projects, but please be respectful with your API calls to not put too much load on the API. The API is not supported in any way and will change frequently without warning.

If you would like to work with JustWatch and use the data/API please get in contact with them via [info@justwatch.com](mailto:info@justwatch.com). Currently, JustWatch can only work with bigger partners and clients.
JustWatch is also hiring: https://www.justwatch.com/us/talent and has some interesting open source projects:

- [JustWatch on Github](https://github.com/justwatchcom)
- [GoPass Password Manager](https://github.com/gopasspw/gopass)

## Install

```bash
npm install --save justwatch-api
```

## API Reference

```javascript
const JustWatch = require('justwatch-api');
```

### Class: JustWatch

#### new JustWatch([options])

- `options` [\<Object>]
	- `locale` [\<string>] The locale to use when performing requests. **Default:** `en_US`

#### jw.request(method, endpoint[, params])

- `method` [\<string>] The HTTP method for the request
- `endpoint` [\<string>] The API endpoint
- `params` [\<Object>] Parameters to send with the request
- Returns: [\<Promise>] A promise that resolves to the response

Send a general request to the JustWatch API.

#### jw.search([options])

- `options` [\<Object>]
	- `query` [\<string>] the term to search for
- Returns: [\<Promise>] A promise that resolves to the response

Search for a title.

#### jw.getProviders()

- Returns: [\<Promise>] A promise that resolves to the response

Get a list of available providers.

#### jw.getGenres()

- Returns: [\<Promise>] A promise that resolves to the response

Get a list of available genres.

#### jw.getSeasons(season_id)

- `season_id` [\<integer>] The ID of the Season. Can be obtaines from the getTitle('show', {ID of the TV show})
- Returns: [\<Promise>] A promise that resolves to the response

Get a list of season details and lists all episodes for a given TV show's season

#### jw.getEpisodes(show_id)

- `show_id` [\<integer>] The ID of the TV show
- Returns: [\<Promise>] A promise that resolves to the response

Get a list of episodes for a given TV show. For a complete list of episodes for a season, use getSeasons above.

#### jw.getTitle(content_type, title_id)

- `content_type` [\<string>] `movie` or `show`
- `title_id` [\<integer>] The ID of the title to get
- Returns: [\<Promise>] A promise that resolves to the response

Gets a specified title

#### jw.getPerson(person_id)

- `person_id` [\<integer>] the ID of the person to get
- Returns: [\<Promise>] A promise that resolves to the response

Get a person by their ID.



[\<boolean>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[\<number>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[\<integer>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[\<string>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[\<Object>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[\<Array>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[\<Function>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[\<Promise>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[\<Error>]: https://nodejs.org/api/errors.html#errors_class_error
