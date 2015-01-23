# Get started styling

1) You need to have [Grunt](http://gruntjs.com/) installed, nodejs and Compass

2) Go to the theme folder and do a npm install to build the grunt necessary files.

3) Then grunt to keep the css updated and javascript minified.

## Reinstall grunt packages
sudo rm -rf node_modules && npm cache clean && npm i


# HTML5 Starter Theme

Version: 1.0

## Contributors:

Jonas Krat ( [krat.dk](http://krat.dk) )

## Summary

Based on Drupal 7 Starter Theme. Uses Compass/SCSS with Modernizr and Normalize.css, and Grunt for all tasks.

## Usage

The theme is setup to use [Grunt](http://gruntjs.com/) to compile Compass/SCSS, lint, concatenate and minify JavaScript (with source maps), optimize images, and [LiveReload](http://livereload.com/) the browser (with extension), with flexibility to add any additional tasks via the Gruntfile. Alternatively, you can use [CodeKit](http://incident57.com/codekit/) or whatever else you prefer to compile the SCSS and manage the JavaScript.

Change the `scss/style.scss` intro block to your theme information. Open the theme directory in terminal and run `npm install` to pull in all Grunt dependencies. Run `grunt` to execute tasks. Code as you will. If you have the LiveReload browser extension, it will reload after any SCSS or JS changes. To optimize images, run `grunt imagemin`.

- Compile `scss/style.scss` to `style.css` (all paths defined in config.rb for Compass)
- Concatenate and minify all plugins in `js/vendor` and `js/source/plugins.js` to `js/plugins.min.js`
- Minify `js/source/main.js` to `js/main.min.js`
- ??
- Profit

### Deployment

The theme includes deployments via [grunt-rsync](https://github.com/jedrichards/grunt-rsync). The Gruntfile includes setups for staging and production - edit your paths and host, then run `grunt rsync:staging` or `grunt rsync:production` to deploy your files via rsync.

### Features

1. Normalized stylesheet for cross-browser compatibility using Normalize.css version 2 (IE8+ only)
2. Easy to customize
3. Flexible grid from [Chris Coyier](https://twitter.com/chriscoyier)
4. Media Queries for mobile and tablets ready to populate
5. Compass & SCSS with plenty of mixins ready to go
6. Much much more

### Changelog

#### Version 1.0

* initial version

### Credits

Without these projects, this Drupal Starter Theme wouldn't be where it is today.

* [Normalize.css](http://necolas.github.com/normalize.css)
* [SASS / SCSS](http://sass-lang.com/)
* [Compass](http://compass-style.org)
* [Grunt](http://gruntjs.com/)
