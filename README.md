# Express app to render tweets

## Installation

* `npm install`
* `npm run build`
* `npm start`

App will be running at localhost and port 3000

## Development

In separate terminals run the following watch tasks

* `npm run watch-css`
* `npm run watch-server`
* `npm run watch-client`

## Twitter Auth

Requires a `config.js` in the root of the directory that exports Twitter Oauth
credentials:

```js
module.exports = {
  consumer_key: 'aa',
  consumer_secret: 'aa',
  access_token_key: 'aa',
  access_token_secret: 'aa',
};

```
