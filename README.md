# Rails Webpacker

Demo app that showcases Rails on webpack and yarn using Webpacker gem (default setup in upcoming Rails 5.1)

* [Webpacker](https://github.com/rails/webpacker)
* [PR](https://github.com/rails/rails/pull/26836)

# Running in development

The app is using [foreman](https://github.com/ddollar/foreman), famous process manager. Checkout the `Procfile.dev` in app root for more information.

```bash
  git clone git@github.com:gauravtiwari/rails-webpacker.git
  cd rails-webpacker
  bundle install
  brew install yarn # (if not installed)
  ./bin/yarn install
```

Or just run prepare script to install everything after cloning the repo

```bash
  ./bin/prepare # only on macOS
```

(try `chmod 777 ./bin/prepare` incase it doesn't work)

Then, run the server,

```bash
  ./bin/start
```
(try `chmod 777 ./bin/start` incase it doesn't work)


# Installing new node modules

```bash
  # Using Yarn
  ./bin/yarn add material-ui
```

Then, import it in your component,

```js
  import { Card } from 'material-ui/Card';
```
