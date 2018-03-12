# JustWatch API

The justwatch.com API for node js.

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
- `params` [<Object>] Parameters to send with the request

Send a general request to the JustWatch API.

#### jw.search([options])

- `options` [\<Object>]
	- `query` [\<string>] the term to search for

Search for a title.

#### jw.getProviders()

Get a list of available providers.

#### jw.getGenres()

Get a list of available genres.

#### jw.getEpisodes(show_id)

- `show_id` [\<integer>] The ID of the TV show

Get a list of episodes for a given TV show

#### jw.getTitle(content_type, title_id)

- `content_type` [\<string>] `movie` or `show`
- `title_id` [\<integer>] The ID of the title to get

#### jw.getPerson(person_id)

- `person_id` [\<integer>] the ID of the person to get

Get a person by their ID.
