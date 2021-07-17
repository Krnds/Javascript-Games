# Notes on Angular

@author Karine Dias, 2021

## What is Angular

Angular is a **development platform based on TypeScript** (TypeScript is just a strong typed language with OOP features build on top of JavaScript). Browsers can't understand TypeScript code so it is transpiled (source-to-source translator to another language) into JavaScript

Angular as a platform includes :

- a component-based framework to build web applications
- a collection of libraries for routing, forms managment, client-server communication etc.
- some developer tools to build, test and update the code

Angular is made of several libraries that are distributed as separate node packages by NPM (**N**ode **P**ackage **M**anager) :

- @angular/core : components & services
- @angular/compiler
- @angular/http : AJAX & HTTP requests
- @angular/router : routing

## Angular project setup

- [ ] **TODO: write**

An Angular application created the the angular-cli tool contains the file `polyfills.ts`
The file highlight the different modules that might be needed for a specific browser in order to work properly. It is a file provided by Angular to help with the cross browser compatibility.

The `tsconfig.json` is the configuration file about the TypeScript compiler

## Essential concepts

### Components

Components are the fundamental building blocks of Angular applications. They display data on the screen, listen for user input, and take action based on that input.
A component includes a TypeScript class with a `@Component()` decorator, an HTML template, and styles. The `@Component()` decorator specifies the following Angular-specific information:

- A CSS selector that defines how the component is used in a template. HTML elements in your template that match this selector become instances of the component.
- An HTML template that instructs Angular how to render the component.
- An optional set of CSS styles that define the appearance of the template's HTML elements.

For example, a minimal Angular component :

```ts
import { Component } from '@angular/core';

@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
}
```

A component is a building block that builds up an application.
On the code snipped above :

- `selector`: A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. For example, if an app's HTML contains

```html
 <app-hero-list></app-hero-list>
 ```
then Angular inserts an instance of the HeroListComponent view between those tags.
- `templateUrl`: The module-relative address of this component's HTML template. Alternatively, you can provide the HTML template inline, as the value of the template property. This template defines the component's host view.

- providers: An array of providers for services that the component requires. In the example, this tells Angular how to provide the HeroService instance that the component's constructor uses to get the list of heroes to display.



### Templates

Every component has an HTML template that declares how that component renders. You define this template either inline or by file path.

### Dependency Injection

- [ ] TODO: write

### Using Angular-CLI

```sh
npm install -g @angular/cli
```

Launch the `ng` command with your terminal. For example, to init a new project :

```sh
ng new my-project
```

Angular-CLI creates a bunch of JSON files like angular.json, package.json, tsconfig.json, tslint.json etc.
a `src` folder with environments, app and a `e2e` folder (which stands for end-to-end)
and then :

```sh
ng serve  --open
```

launch a live server listening on port 4200. The `--open` option opens the http://localhost:4200 and refreshes the browser everytime a modification is made.
Webpack injects at runtime some scripts (i.e. `inline.bundle.js`, `polyfills.bundle.ts`, `styles.bundle.js` or `main.bundle.js` etc.)
To add a `component``to an Angular web application, you just need to type in :

```sh
ng generate component cpn-name
```

This will create a new directory `src/app/cpn-name` and will generate 4 files in this folder :

- cpn-name.component.ts
- cpn-name.component.html
- cpn-name.component.css

and a Unit test file called

- cpn-name.component.spec.ts

## Angular modules

They are a huge part of the framework.



## Routing

<img src="https://www.digitalclaritygroup.com/wp-content/uploads/2017/10/SPA-1.png" alt="SPA" width="600"/>

When coding a single page application (SPA), it is useful to have a routing system for users to use their web search history, share links, add a view to their favorites or even open a view in another window. Angular gives us a native solution called routing. For this, we have to indicate the project root path to begin with the Angular routing module.
in the `src/index.html` just put the `base` tag

```html
<!doctype html>
<html>
    <head>
        <base href="/">
        ...
    </head>
    <body>
        ...
    </body>
</html>
```

[ ] TODO: write on RouterLink

## Dependency Injection (DI)

> Dependencies are services or objects that a class needs to perform its function. Dependency injection, or DI, is a design pattern in which a **class requests dependencies from external sources rather than creating them**.

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
}
```

`UserService` can be injected anywhere in the application. By default, the decorator `@Injectable` has a providedIn property, which creates a provider for the service. In this case, `providedIn: 'root'` specifies that Angular should provide the service in the root injector.
