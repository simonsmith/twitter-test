const React = require('react');
const Tweet = require('./tweet');
const map = require('lodash/fp/map');

const renderTweets = map(tweet => {
  return (
    <li className="TweetList-item" key={tweet.id}>
      <Tweet tweet={tweet} />
    </li>
  );
});

const TweetList = ({tweets, username}) => {
  const profileUrl = `https://twitter.com/${username}`;

  return (
    <div className="TweetList">
      <h1 className="TweetList-title">
        Latest tweets from <a href={profileUrl}>@{username}</a>
      </h1>
      <ul className="TweetList-list">
        {renderTweets(tweets)}
      </ul>
    </div>
  );
};

TweetList.displayName = 'TweetList';
TweetList.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.object),
};

module.exports = TweetList;
