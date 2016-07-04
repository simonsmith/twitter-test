const React = require('react');

const User = ({image, username}) => {
  const profileUrl = `https://twitter.com/${username}`;

  return (
    <div className="User">
      <img className="User-img" src={image} />
      <p className="User-name">
        <a className="User-link" href={profileUrl}>@{username}</a>
      </p>
    </div>
  );
};

User.displayName = 'User';
User.propTypes = {
  tweet: React.PropTypes.string,
  image: React.PropTypes.string,
};

module.exports = User;

