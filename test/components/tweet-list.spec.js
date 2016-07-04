const React = require('react');
const rootPath = require('app-root-path').require;
const expect = require('chai').expect;
const sd = require('skin-deep');

const TweetList = rootPath('/src/js/components/tweet-list');

describe('React component: TweetList', () => {
    describe('rendering a TweetList', () => {
        const props = {
          username: 'tester',
          tweets: [
            {
              user: {
                profile_image_url: 'url',
                screen_name: 'tester'
              },
              text: 'This is text with a #hashtag',
              created_at: 'Fri Jul 01 18:48:33 +0000 2016'
            },
            {
              user: {
                profile_image_url: 'url',
                screen_name: 'tester'
              },
              text: 'This is text with a #hashtag',
              created_at: 'Fri Jul 01 18:48:33 +0000 2016'
            }
          ]
        };
        let tree = sd.shallowRender(React.createElement(TweetList, props));

        it('should link to the user in a title', () => {
          const link = tree.subTree('.TweetList-title').subTree('a');

          expect(link.text()).to.equal('@tester');
          expect(link.props.href).to.equal('https://twitter.com/tester');
        });

        it('should render multiple Tweet components', () => {
          expect(tree.everySubTree('Tweet')).to.have.a.lengthOf(2);
        });
    });
});
