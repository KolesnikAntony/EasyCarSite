

## Gulp boilerplate
> All you need for static website coding. Includes live reload, SASS,  autoprefixer, EJS/PUG template engines, images reducing, JS/SASS linters, FTP deployment, JS bundling with browserify, ES2015+ ready, JS/CSS minification.*

* __npm install__
* __gulp__(gulp dev || npm run dev) - run dev environment
* __gulp build__ - build project, same as _gulp dev_ but without running dev server
* __gulp deploy__ - deploy project to ftp server
* __--prod__ - use this flag to minify css / js, reduce images size and other differences for production, ex. _gulp build --prod_, _gulp deploy --prod_
* __gulp sasslint__ - scsslint, [rules](.scss-lint.yml)
* __gulp eslint__ - eslint, [rules](.eslintrc). You can use __--fix__ flag to [automatically fix problems](https://eslint.org/docs/rules/).

* __format__ - prettier, [prettier](https://prettier.io/docs/en/install.html)

[Config file](gulpfile.babel.js/config/index.js) - ftp credentials and paths to files.

#### HTML
* [NUNJUCKS](https://mozilla.github.io/nunjucks/templating.html) template engine. Optional: [EJS](https://ejs.co/#docs) or [PUG](https://pugjs.org/api/getting-started.html).


#### File structure
```
  /* Global code, heplers, utils, etc. */
  common/
    njk/
    scss/
    js/

  /* Reusable components */
  components/
    Component/
      Component.njk
      Component.scss
      Component.js

  /* Pages */
  pages/
    page/
      page.njk
      page.scss
      page.js
```

Code Sample:
```
  .button {
    position: relative;
    display: inline-block;
    margin: 0 12px;
    padding: 12px 24px;
    color: tomato;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 19px;
    background: #3f55aa;
    border-radius: 5px;
    border: 1px solid tomato;
    transition: background-color .3s ease-out;
    z-index: 2;
  }
```
