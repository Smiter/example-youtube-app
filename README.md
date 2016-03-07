# youtube list example

This isomorphic and modular web app was built by utilizing react, redux, youtube search API, local scoped css approach. I wrote js code by following Airbnb style guide.

## Design decisions

1. implemented 2 types of listing: grid and standard
2. added lazy loading for images so page loads faster
3. added loading overlay when select new artist for a better user experience
4. made layout responsive 

## Notes/limitations

For a simplicity I omit routes which fits that particular case, but won't allow to scale an app if we want more pages.
I made it as less dependable from other modules as possible.

## Setup

```
$ npm install

```

## Running

```
$ npm run start (production)
$ npm run dev (development)
$ npm run build (build)
$ npm run test (test)

```





