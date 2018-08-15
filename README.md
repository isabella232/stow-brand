# Linnia Brand

A collection of branding materials to quickly turn any UI into Linnia UI.

## Getting started

Installation is very easy!

#### Peer Dependencies

This branding library is built on top of React and Material-UI, so you will need to install those as dependencies to make this usable:

```bash
npm i @material-ui/core
npm i prop-types
npm i react
npm i react-dom
```

#### Installing

This module is installable using `npm`:

```bash
npm i linnia-brand
```

#### Publishing

To publish a new version of this package, increment the version number in `package.json` by at least `0.0.1`, then run:

```bash
npm run deploy
```
   
## Demo

You can run a demo to see the components and theme in action by running:

```bash
npm run start
```

The navigating to `http://localhost:3001`!

## Usage

#### Theme

You can start by applying the Linnia theme to you application using the Theme Provider component:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from 'linnia-brand/ThemeProvider';

ReactDOM.render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>, document.getElementById('root'));
```

This will apply the Linnia fonts, colors and styles to your application.

#### Favicon

The favicon is also included in this library, and can be applied like so:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from 'linnia-brand/ThemeProvider';

// import the favicon component
import Favicon from 'linnia-brand/favicon';

ReactDOM.render(
  <ThemeProvider>
    <Favicon />
    <App/>
  </ThemeProvider>, document.getElementById('root'));
````

#### Components

This library also contains presentation components to help you build a branded experience. 

## Logo

Linnia Logo as a customizable SVG/

### Usage

```javascript
import Logo from 'linnia-brand/components/Logo';

<Logo />
```

### Props

- `fill`: `string` - A hex color to use as the logo color
- `style`: `object` - An object that you can use to apply styles directly to the logo

