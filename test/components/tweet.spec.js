const React = require('react');
const rootPath = require('app-root-path').require;
const expect = require('chai').expect;
const sd = require('skin-deep');

const Tweet = rootPath('/src/js/components/tweet');

describe('React component: Tweet', () => {
    describe('rendering a Tweet', () => {
        const props = {
          retweeted: true,
          user: {
            profile_image_url: 'url',
            screen_name: 'tester'
          },
          text: 'This is text with a #hashtag',
          created_at: 'Fri Jul 01 18:48:33 +0000 2016'
        };
        let tree = sd.shallowRender(React.createElement(Tweet, {tweet: props}));

        it('should add a class if it\'s a retweet', () => {
          expect(tree.props.className).to.contain('is-retweet');
        });

        it('should parse links in the tweet text', () => {
          expect(
            tree.subTree('.Tweet-text').props.dangerouslySetInnerHTML.__html
          ).to.equal('This is text with a <a href="http://search.twitter.com/search?q=%23hashtag">#hashtag</a>');
        });

        it('should parse the date correctly', () => {
          expect(tree.subTree('.Tweet-timestamp').text()).to.equal('19:48pm - 1 Jul 2016');
        });

        it('should pass the correct props to the User component', () => {
          expect(tree.subTreeLike('User', {
            image: 'url',
            username: 'tester'
          })).to.be.ok;
        });
    });
});

