# youtube list example

This isomorphic and modular web app was built by utilizing react, redux, youtube search API, local scoped css approach. I wrote js code by following Airbnb style guide.

## Design decisions

1. implemented 2 types of listing: grid and standard.
2. added lazy loading for images so the page loads faster.
3. added loading overlay when select a new artist for a better user experience.
4. made layout responsive.
5. implemented infinite scrolling to load next set of videos.

## Notes

For a simplicity, I omit routes and it fits this particular case, but it won't allow scaling an app if we want more pages.
I made it as less dependent on other modules as possible.

## Setup

```
$ npm install

```

## Running

```
$ npm run build
$ npm run start (production)
$ npm run dev (development)
$ npm run test (test)

```





