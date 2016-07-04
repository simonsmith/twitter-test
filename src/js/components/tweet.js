const React = require('react');
const User = require('./user');
const classNames = require('classnames');
const format = require('date-fns/format');

function linkifyTweetText(text) {
  return text
    .replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1'>$1</a>")
    .replace(/(^|\s)@(\w+)/g, '$1<a href="http://www.twitter.com/$2">@$2</a>')
    .replace(/(^|\s)#(\w+)/g, '$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>');
}

const Tweet = ({tweet}) => {
  return (
    <div className={classNames('Tweet', {'is-retweet': tweet.retweeted})}>
      <div className="Tweet-user">
        <User image={tweet.user.profile_image_url} username={tweet.user.screen_name} />
      </div>
      <p className="Tweet-text" dangerouslySetInnerHTML={{__html: linkifyTweetText(tweet.text)}} />
      <p className="Tweet-timestamp">{format(tweet.created_at, 'H:mma - D MMM YYYY')}</p>
    </div>
  );
};

Tweet.displayName = 'Tweet';
Tweet.propTypes = {
  tweet: React.PropTypes.object
};

module.exports = Tweet;
