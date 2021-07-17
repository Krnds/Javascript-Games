# General Notes about Web Development

## Nodejs

**Node.js** is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project


### Tips on NPM (Node Package Manager)

- If you want to know the version of a package, run `npm list <package>`

## Webpack VS Snowpack

From this article
>"**Webpack** is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser. Modules are reusable chunks of code built from your app’s JavaScript, node_modules, images, and the CSS styles which are packaged to be easily used in your website. Webpack separates the code based on how it is used in your app, and with this modular breakdown of responsibilities, it becomes much easier to manage, debug, verify, and test your code"

**Snowpack** is a new-generation, front-end build tool for JavaScript applications. Compared to webpack, Snowpack is faster, more lightweight, and much easier to configure for beginners.

>Unlike Webpack, **Snowpack** doesn’t need to go through an entire rebuild and re-bundle process every time you modify and save an asset file.

To create an app using Snowpack, use `npx`

```sh
npx create-snowpack-app <name>
```

```sh
npx create-snowpack-app <name> --template @snowpack/app-template-react-typescript
```

See list of templates [HERE](https://www.npmjs.com/search?q=keywords:csa-template)

Then, just run the `npx snowpack dev` to run a local server with your app.