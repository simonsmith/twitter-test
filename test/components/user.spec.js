const React = require('react');
const rootPath = require('app-root-path').require;
const expect = require('chai').expect;
const sd = require('skin-deep');

const User = rootPath('/src/js/components/user');

describe('React component: User', () => {
    describe('rendering a User', () => {
        const props = {
          image: 'http://image.jpg',
          username: 'tester'
        };
        let tree = sd.shallowRender(React.createElement(User, props));

        it('should have an image', () => {
          expect(tree.subTreeLike('.User-img', {
            src: 'http://image.jpg'
          })).to.be.ok;
        });

        it('it should link to the profile', () => {
          expect(tree.subTreeLike('.User-link', {
            href: 'https://twitter.com/tester'
          })).to.be.ok;
        });

        it('it should display the username', () => {
          expect(tree.subTree('.User-link').text()).to.equal('@tester');
        });
    });
});
