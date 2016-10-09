#react-component-boilerplate

> A boilerplate to create React components using react-transform-hmr, Babel 6, webpack and SASS

##Features

1. [Babel 6](http://babeljs.io/) for ES6 and ES7
1. [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, sass and less,
1. [mocha](https://mochajs.org/) to allow writing unit tests for the project
1. [react-storybook](https://github.com/kadirahq/react-storybook)
1. [enzyme](http://airbnb.io/enzyme/index.html) for testing
1. [travis](https://travis-ci.org/) as CI
1. [istanbul](https://github.com/gotwarlost/istanbul) for code coverage (ES2015)
1. [codecov.io](https://codecov.io) for code-coverage reporting
1. Scripts written for building components(ES5)
1. [semantic-release](https://github.com/semantic-release/semantic-release) for automated releases following semantic versioning
1. [commitizen](https://github.com/commitizen/cz-cli) and [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) for better commit messages.


## Getting started
```
cd react-component-boilerplate/
npm install
npm run storybook
```

### Scripts

1. `npm run lint` : Lint all js files
1. `npm run lintfix` : fix linting errors of all js files
1. `npm run semantic-release` : make a release. Leave it for CI to do.
1. `npm run storybook`: Start developing by using storybook
1. `npm run test` : Run tests. tests file should be written as `*.test.js` and using ES2015
1. `npm run test:watch` : Watch tests while writing
1. `npm run test:cover` : Show coverage report of your tests
1. `npm run test:report` : Report test coverage to codecov.io. Leave this for CI
1. `npm run build`: transpile all ES6 component files into ES5(commonjs) and put it in `dist` directory
1. `npm run docs`: create static build of storybook in `docs` directory that can be used for github pages

Learn how to write stories [here](https://getstorybook.io/docs/basics/writing-stories)

### License
MIT
