# Rails Webpacker

Demo app that showcases Rails on webpack and yarn using Webpacker gem (default setup in upcoming Rails 5.1)

* [Webpacker](https://github.com/rails/webpacker)
* [PR](https://github.com/rails/rails/pull/26836)

# Running in development

The app is using [foreman](https://github.com/ddollar/foreman), the famous process manager. Checkout the `Procfile.dev` in app root for more information.

```bash
  bundle install
  brew install yarn # (if not installed)
  ./bin/yarn install
```

Then run the server,

```bash
  ./start
```
(try `chmod 777 start` incase it doesn't work)
