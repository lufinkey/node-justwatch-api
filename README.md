# Unofficial JustWatch API

The justwatch.com API for node js.

## Disclaimer

**This is not the official JustWatch API.**

The work of many developers went and is still going into the development and maintenance of the data and the API. The main business of JustWatch is to operate a streaming guide with apps for iOS, Android and TV that offers the data for business intelligence and marketing. Therefore it is prohibited to use the API for commercial purposes, meaning all purposes intended for, or directed towards, commercial advantage or monetization by an individual or organization (consumer service, data science, business intelligence etc.). The API may be used for non-commercial purposes such as private projects, but please be respectful with your API calls to prevent an overload on the API.

JustWatch does not warrant that the API is free of inaccuracies, errors, bugs, malicious code or interruptions or that it is reliable, flawless, complete or otherwise valid. JustWatch does not warrant that the API will meet your requirements, will be available without interruption, or that the results from its use will be accurate or reliable, the quality of the products, services, information or other materials received through the API meets your expectations, and errors regarding the API are corrected. Use of the API is at your sole discretion and risk. You are solely responsible for any damages resulting from your use of the API, including damage to its system or loss of data. JustWatch can disable and change the API at any time without notice and without giving any reason. JustWatch excludes any liability to the extent permitted for direct, indirect or incidental damages, consequential damages, lost profits, quantifiable pecuniary losses arising out of or in connection with the use of the API.
Incorrect or prohibited use of the API, for example for commercial use, may result in a claim for damages by JustWatch.

If you would like to work with JustWatch and use the official Data API take a look at JustWatch Media and contact us at data-partner@justwatch.com. Currently, JustWatch can only work with bigger partners and clients. JustWatch is also hiring: https://www.justwatch.com/us/talent and has some interesting open source projects on GitHub.

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
