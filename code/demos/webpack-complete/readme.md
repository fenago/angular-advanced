# Webpack Guide

This guide demonstrates the basics of Webpack.

## Installation

### Install

From a command-prompt or terminal, with the current directory set to `webpack-guide` run the following commands.

```shell
npm init -y
npm install webpack@3.4.1 --save-dev
```

### Run

1.  Open the `webpack-guide` directory in an editor.

2.  Open the `package.json` generated in the last step and add this build script.

```json
 "scripts": {
    "build": "webpack -v"
  },
```

3.  From the command-prompt or terminal, run the command you just created.

```shell
npm run-script build
```

or the short-hand version

```shell
npm run build
```

The version number of Webpack should be logged to the console.

```
> webpack-guide@1.0.0 build /Users/craigmckeachie/Documents/git/webpack-guide
> webpack -v

3.4.1
```

## Building

### Basic Build

1.  Create an `webpack-guide\src` directory.
2.  Create an `index.html` file in the `src` directory.
3.  Add the following boilerplate `HTML` to index.html.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
</head>
<body>
    <h1>Webpack Guide</h1>
</body>
</html>
```

Tip: In `index.html` try typing `html:5` and then tab. The `html:5` snippet works because most editors and IDEs support Emmet, you can quickly learn other command using this [Emmet Cheatsheet](https://docs.emmet.io/cheat-sheet/).

4.  Edit the `package.json` start script to just run `weback` without the `-v`.

```json
 "scripts": {
    "build": "webpack"
  },
```

5.  Create a `main.js` file in the `src` directory.

6.  In `main.js` log out `'in main'` to the `console`.

```js
console.log("in main");
```

7.  Install the following two Webpack plugins.
    * HtmlWebpackPlugin: creates or copies an index.html to the specified output path and adds the script(s) created by Webpack
    * CleanWebpackPlugin: cleans or deletes all files and folders from the specified directory

```shell
npm install --save-dev html-webpack-plugin clean-webpack-plugin
```

8.  Create a new file `webpack-guide\webpack.config.js`.
9.  In `webpack.config.js`, add the basic configuration below to:
    1.  Compile the javascript code starting with `main.js` into the `dist` directory as `bundle.js`.
    2.  Copy the `index.html` file to the `dist` directory and add a script tag for the `bundle.js` file.
    3.  Delete everything from the `dist` directory before each Webpack build.

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

let webpackConfiguration = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist" //or path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

module.exports = webpackConfiguration;
```

10. At the command-prompt or terminal, run the command.

```shell
npm run build
```

Which will run Webpack.

11. From the file system, open `dist\index.html` in the [Chrome](https://www.google.com/chrome/browser/desktop/index.html) web browser.
12. Open `Chrome DevTools` as described [here](https://developer.chrome.com/devtools#access).
13. Switch to the console tab and verify that `'in main'` was output to the console.

### First Module

1.  Create a `module1.js` file in the `src` directory.
2.  Export a value in `module1.js`.

```javascript
export const value = 1;
```

3.  In `main.js` add the following code to import the `module1.js` and then log the value to the console.

```javascript
...
import { value } from './module1.js';
console.log(value);
```

4.  From the terminal or command-prompt run `Webpack`.

```shell
npm run build
```

5.  Refresh `index.html` in the `Chrome` browser and you should see the following output in the `DevTools` console.

```shell
1
```

### Second Module

1.  Create a `module2.js` file in the `src` directory.
2.  Export a value in `module2.js`.

```javascript
export const value = 2;
```

3.  In `module1.js` import `module2.js` and use it as part of `module1's` value property.

```javascript
import { value as module2Value } from "./module2.js";
export const value = 1 + module2Value;
```

Tip: Imports from ES Modules can be aliased using `as`. The alias was necessary above because there would be two `value` variables if we did not alias the `value` from `module2`.

4.  From the terminal or command-prompt run `Webpack`.

```shell
npm run build
```

5.  Refresh `index.html` in the `Chrome` browser and you should see the following output in the `DevTools` console.

```shell
3
```

6.  Open `bundle.js` and review the code at the bottom of the file to see how `Webpack` is bundling up the `.js` files.

```javascript
/******/ [
  /* 0 */
  /***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module1_js__ = __webpack_require__(
      1
    );

    console.log(__WEBPACK_IMPORTED_MODULE_0__module1_js__["a" /* value */]);

    /***/
  },
  /* 1 */
  /***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module2_js__ = __webpack_require__(
      2
    );

    const value =
      1 + __WEBPACK_IMPORTED_MODULE_0__module2_js__["a" /* value */];
    /* harmony export (immutable) */ __webpack_exports__["a"] = value;

    /***/
  },
  /* 2 */
  /***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    const value = 2;
    /* harmony export (immutable) */ __webpack_exports__["a"] = value;

    /***/
  }
  /******/
];
```

### First Component

1.  In `src\index.html`, add a `div` with a class of container to hold your first component.

```html
...
<body>
    <h1>Webpack Guide</h1>
    <div class="container">
    </div>
</body>
...
```

2.  Add a `component1` directory.
3.  In the `component1` directory add two files `component1.js` and `component.css`.
4.  Create `componenent1` using the following code.

```javascript
const component1 = {
  render: function(element) {
    element.innerHTML = "<h2>component 1 working</h2>";
  }
};
export { component1 };
```

5.  Add the code to render `component1` to `main.js`.

```javascript
import { component1 } from "./component1/component1.js";
document.addEventListener("DOMContentLoaded", function(event) {
  component1.render(document.body.querySelector(".container"));
});
```

6.  From the terminal or command-prompt run `Webpack`.

```shell
npm run build
```

7.  Refresh `index.html` in the `Chrome` browser and verify the following is output to the page.

```
Webpack Guide
component 1 working
```

## CSS

### CSS Inline

1.  Style the `<h2>` in `component1.js` by adding this CSS rule to `component1.css`.

```css
h2 {
  font-style: italic;
}
```

2.  In the `component.js` file, import the `component.css` so Webpack can identify the stylesheet as a dependency of the component.

```javascript
 import './component1.css';
 ...
```

6.  From the terminal or command-prompt run `Webpack`.

```shell
npm run build
```

7.  You will see the following ERROR.

```
ERROR in ./src/component1/component1.css
Module parse failed: /Users/craigmckeachie/Documents/git/webpack-guide2/src/component1/component1.css Unexpected token (1:3)
You may need an appropriate loader to handle this file type.
| h2 {
|     font-style: italic;
| }
 @ ./src/component1/component1.js 1:0-26
 @ ./src/main.js
```

8.  Install the `Webpack` loaders for CSS files and creating style tags.

```shell
npm install --save-dev css-loader style-loader
```

9.  In `webpack.config.js`, configure the `CSS` and `Style` loaders.

```javascript
module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
```

10. From the terminal or command-prompt run `Webpack` again.

```shell
npm run build
```

11. Refresh `index.html` in the `Chrome` browser and verify the component1 content is now rendering in italics.

    _component 1 working_

* Webpack added a JavaScript module that inlined the css into the head of the page inside a style tag so no network request for a css file is needed.

```js
// module
exports.push([module.i, "h2{\n    font-style: italic;\n}", ""]);
```

```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Home</title>
        <style type="text/css">
        h2 {
            font-style: italic;
        }
        </style>
    </head>
    <body>
        <h1>Webpack Guide</h1>
        <div class="container"><h2>component 1 working</h2></div>
        <script type="text/javascript" src="bundle.js"></script>
    </body>
</html>
```

### CSS Extracted into File

As the amount of CSS in a project grows you may want to extract it out of the JS bundle and put it in a separate file. A discussion of the trade-offs between inline and separate css can be found [here](https://webpack.js.org/plugins/extract-text-webpack-plugin/#usage) in the documentation.

1.  From the command-prompt or terminal run the command.

```shell
npm install --save-dev extract-text-webpack-plugin
```

2.  In `webpack.config.js`, configure the plugin.

```javascript
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [
        //     'style-loader',
        //     'css-loader'
        // ]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("styles.css")]
};
```

3.  From the terminal or command-prompt run `Webpack` again.

```shell
npm run build
```

4.  Refresh `index.html` in the `Chrome` browser and verify the component1 content is _still_ rendering in italics.

    _component 1 working_

* Open `dist\index.html` to see a `script` tag was automatically added for the extracted `styles.css` file.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link href="styles.css" rel="stylesheet">
</head>
```

## HTML

### HTML Template

1.  Create and add this HTML new file `component1/component1.html`

```html
<h2>component 1 working with an external template</h2>
<p>
    There is more to component 1.
</p>
```

2.  Import the file and use it in the component (`component1/component1.js`)

```diff
 import './component1.css';
+ import * as template from './component1.html';

 const component1 = {
   render: function(element){
-    element.innerHTML = "<h2>component 1 working</h2>";
+    element.innerHTML = template;
   }
 }
 export {component1};
```

3.  Add the webpack loaders for html files.

```shell
npm install --save-dev html-loader
```

4.  Configure the Webpack loaders for `.html` files.

```diff
@@ -17,6 +17,10 @@ module.exports = {
                     fallback: "style-loader",
                     "use": "css-loader"
                 })
+            },
+            {
+                test: /\.html$/,
+                use: "html-loader"
             }
         ]
     },
```

5.  The html will be included as a string inside a new module in `bundle.js`

```javascript
/* 5 */
/***/ (function (module, exports) {

      module.exports = "<h2>component 1 working with an external template</h2>"

      /***/
})
/******/]);
```

## Images

### In HTML

1.  Verify there is a `src\assets` directory with images.

2.  Add an image to `component1\component1.html`.

```diff
<h2>
     component 1 working with an external template
</h2>
+ <img src="../assets/angular_solidBlack.png" alt="Angular Logo">
```

3.  Install the Webpack loader: `file-loader`.

```shell
npm install --save-dev file-loader
```

4.  Configure the loader in `webpack.config.js`.

```javascript
{
    test: /\.(jpg|png)$/,
    use: "file-loader?outputPath=assets/"
}
```

Tip: You can support multiple image extensions with the same loader with this syntax:

```javascript
{
        test: /\.(png|jpg|gif|svg|)$/,
        loader: 'file-loaderoutputPath=assets/"'
}
```

5.  Run the webpack build

```shell
npm run build
```

6.  When your refresh `index.html`, The component should display the Angular logo. When you inspect the generated html it shows the following (but the hash in the filename will be different).

```html
<h2>component 1 working with an external template</h2>
<img src="b4b2e221154bb148785d9f8cab2da361.png"
    alt="Angular Logo">
```

* Webpack copied the image file and named the file with a hash starting with `b4b2e...`. The html in `component1\component1.html` when turned into a string inside a module automatically updates the `<img src=>` tag to the new image file by setting it to the output of the module containing the image.

```javascript
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = "<h2>\n    component 1 working with an external template\n</h2>\n <img src=\"" + __webpack_require__(6) + "\" alt=\"robot\">";

      /***/
}),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__.p + "b4b2e221154bb148785d9f8cab2da361.png";

      /***/
})
/******/]);
```

### In CSS

1.  If you haven't already in a previous step, verify there is a `src\assets` directory with images.

2.  Update `component1\component1.css` to use the 128-174.jpg as a repeating background.

```css
body {
  background-image: url(../assets/128-174.jpg);
  background-repeat: repeat;
}
```

3.  Run the webpack build

```shell
npm run build
```

4.  Refresh `index.html` in the browser and the background image (light grey) should display.

### Image Inline

1.  In `component1\component1.html` add a robot image from the `assets` directory.

```html
<img src="../assets/robot.png" alt="iRobot">
```

2.  Install the `url-loader`

```shell
npm install --save-dev url-loader
```

3.  Configure `url-loader` in `webpack.config.js`

```javascript
 // {
//     test: /\.png$/,
//     use: "file-loader?outputPath=assets/"
// },
{
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'url-loader?outputPath=assets/&limit=8192',
            // options: {
            //     limit: 8192

            // }
        }
    ]
},
```

Tip: The query parameter of `limit` tells Webpack to use the `url-loader` (which inlines the images) on files up to 8,192 bytes and then use the `file-loader` (which copies the file to the output directory) for bigger files.

4.  Run the webpack build

```shell
npm run build
```

5.  Refresh `index.html` in the browser and the robot image should display.

* Inspecting the contents of the `dist` direcotry or the generated HTML shows the robot image was copied into the `dist/assets` directory and the `img` tag was updated to point to the new image location.

```html
<img src="assets/b4b2e221154bb148785d9f8cab2da361.png" alt="iRobot">
```

## Fonts

### Font Style

1.  Verify there is a `src\fonts` directory with the Lobster font.
2.  Style `<h2>` in `component1\component1.css` to use the `Lobster` font in the fonts folder.

```css
@font-face {
  font-family: "Lobster";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/Lobster/Lobster-Regular.ttf") format("woff2");
}

h2 {
  font-style: italic;
  font-family: "Lobster", cursive;
}
```

3.  In `webpack.config.js` configure the `file-loader` to load font files (including .ttf files).

```javascript
{
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
        'file-loader'
    ]
}
```

4.  Run the webpack build

```shell
npm run build
```

5.  Refresh `index.html` in the browser and the phrase `component 1 working` should show in the fancier Lobster font.

* Webpack will see the `url` in `component1.css` and copy the font file and rename it with a hash (similar to how the image was handled) when the text is extracted to `styles.css`.

#### styles.css

```css
@font-face {
  font-family: "Lobster";
  font-style: normal;
  font-weight: 400;
  src: url(61bb8fc89f7f91dab8e66f92be958f82.ttf) format("woff2");
}
```

## Development

### Web Server

By now you are likely tired of typing `npm run build`. You can install the development web server that comes with webpack and the Webpack build will happen whenever you change and save a file. The browser will automatically reload as well.

1.  Install the `webpack-dev-server` by runnning the following command.

```shell
npm install --save-dev webpack-dev-server
```

2.  In `package.json` configure the `webpack-dev-server`.

```json
 "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack"
  },
```

3.  Delete the `dist` directory from the `webpack-guide` directory.

4.  From the terminal or command-prompt start the `webpack-dev-server`.

```shell
npm start
```

5.  A browser will open and show the application. Verify it loads correctly.

6.  Edit the `src\index.html` page to add exclamation points to the heading as shown below. Save `src\index.html` and the browser will automatically reload and show the change.

```html

```

* Notice that the `dist` directory was not recreated. The files that were previously being created and written to the `dist` directory are now being created and served from the web dev server's memory which allows you to get faster feedback during development of the project.

## Production

### Minification

1.  Configure the Uglify plugin

```javascript
const webpack = require('webpack');
...
plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            parallel: true,
            beautify: false,
            comments: false
        })
    ]
```

2.  Run the `script` and note the size of bundle.js

```shell
npm run build
```

3.  Update the `build` script in `package.json` to pass the `-p` production flag.

```javascript
"scripts": {
    "build": "webpack -p"
  },
```

4.  Run the `build` script and note the size of `bundle.js` is smaller because it has been minified.

```shell
npm run build
```
