# favs

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd favs`
- `npm install`
- `cp env.example .env` and change environment variables

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

The application is setup to deploy to Amazon S3 and (currently) connects to a backend hosted on Heroku.

To deploy to your own S3 bucket:

- create and configure a bucket on [Amazon S3](https://aws.amazon.com/s3/) - [Ember Screencasts](https://www.emberscreencasts.com/tags/ember-cli-deploy) has some good instructions on this.
- copy `env.example` to `.env`
- in `.env`, fill in your AWS access key, -secret, bucket and region
- deploy with `ember deploy production`

#### Connect to your own back-end

The current application uses an API hosted on Heroku. The host name for this is defined in [`config/environment.js`](config/environment.js) and can be replaced by your own.

Please consult [Favs API](https://github.com/bazzel/favs_api) for more information.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
