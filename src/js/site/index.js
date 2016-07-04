const React = require('react');
const ReactDOM = require('react-dom');
const TweetList = require('../components/tweet-list');

const tweets = JSON.parse(window.config.componentData);
const username = window.config.username;

ReactDOM.render(
  React.createElement(TweetList, {tweets, username}),
  document.getElementById('tweets')
);
