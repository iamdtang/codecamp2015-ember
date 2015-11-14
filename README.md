# Codecamp-ember

## Order of Talk

* explain directory structure, index.html, router, outlets
* ember g route artists
  * fill in artists template
* API overview
* ember g adapter application
* ember g model artist
* ember g model song
* finish artists route model and template
* ember g route artists/artist
  * fill in model and template
* ember g route artists/artist/songs
  * fill in model and template
* ember g controller artists/artist/songs
  * artistHasSongs computed property
  * sortedSongs computed property w/ sort macro
* ember g helper format-currency
* ember g component heart-like
  * fill in template => actions
  * pass action from controller to component?
* ember g adapter artist
* ember g serializer artist



This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Talk Notes

* routes and outlets
* RESTAdapter
* models
* templates and Handlebars
* controllers
* helpers
* computed properties and computed property macros
* components, yielding, actions
