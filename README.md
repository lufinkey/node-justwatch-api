# JustWatch API

The justwatch.com API for node js.

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

#### jw.getEpisodes(show_id, page)

- `show_id` [\<integer>] The ID of the TV show
- `page` [\<integer>] The page number, optional
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
