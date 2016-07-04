const Twitter = require('twitter');
const rootPath = require('app-root-path').require;
const bluebird = require('bluebird');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const assign = require('lodash/fp/assign');
const map = require('lodash/fp/map');
const pick = require('lodash/fp/pick');
const get = require('lodash/fp/get');
const flow = require('lodash/fp/flow');

let config = {};
try {
  config = rootPath('./config');
} catch (e) {
  console.warn('Missing config file!'); // eslint-disable-line
}

const twitter = new Twitter(config);

const TweetList = require('../js/components/tweet-list');

const getApiParams = flow(
  get('params'),
  pick('screen_name'),
  assign({
    count: 10,
    include_rts: true
  })
);

const extractTweetData = flow(
  map(pick([
  'created_at',
  'id',
  'text',
  'extended_entities',
  'user',
  'retweet_count',
  'retweeted'
  ]))
);

function renderComponent(tweets, username) {
  const tweetlist = React.createElement(TweetList, {tweets, username});
  return ReactDOMServer.renderToString(tweetlist);
}

function fetchTweets(params) {
  return new bluebird((resolve, reject) => {
    twitter.get('statuses/user_timeline', params, (err, tweets) => {
      if (err) {return reject(err);}
      resolve(tweets);
    });
  });
}

function screenNameRoute(req, res) {
  const params = getApiParams(req);

  fetchTweets(params)
    .then(response => {
      const tweets = extractTweetData(response);
      const {screen_name} = req.params;

      res.render('index', {
        componentData: JSON.stringify(tweets),
        componentHtml: renderComponent(tweets, screen_name),
        username: screen_name
      });
    })
    .catch(err => {
      console.error(err); // eslint-disable-line
      res.status(404).send('Unable to get tweets for that user');
    });
}

module.exports = screenNameRoute;
