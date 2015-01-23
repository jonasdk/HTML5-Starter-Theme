var drupal7starter = {};

jQuery(function($) {
  // all Javascript code goes here

  // Adding desktop style when extra space is available
  // Namespace
  drupal7starter.desktopload = {

    _attach : function() {
      this._listenResize();
    },

    _listenResize : function() {
      this._desktopLoaded = $('#js-desktop-css').length > 0;
      if (this._desktopLoaded) {
        return;
      }
      var resizeListener = null;
      resizeListener = function() {
        this._checkSize();
        if (this._desktopLoaded) {
          $(window).unbind('resize',resizeListener);
        }
      }.bind(this);
      $(window).bind('resize',resizeListener);
      resizeListener();
    },

    _checkSize : function() {
      var width = window.outerWidth;

      if (width>600) {
        this._importCSS('../desktop.css');
        this._desktopLoaded = true;
      }
    },

    _importCSS : function(url) {
      var e = document.createElement('link');
      e.setAttribute('rel','stylesheet');
      e.setAttribute('type','text/css');
      e.setAttribute('href',url);
      document.getElementsByTagName('head')[0].appendChild(e);
    }
  };
  // Intialization - Attach on ready...
  $(drupal7starter.desktopload._attach.bind(drupal7starter.desktopload));
  // # Stop for Adding desktop style


  // Example of dependend loading of modules
  drupal7starter.maps = {
    enhance : function () {

      // Test to see if there is a video else do nothing
      if (!$('#map-canvas').length) {
        return;
      }

      // The script from the module should go here

    }
  };

  // Activating function parts when the page is ready
  $(window).ready(function() {
    drupal7starter.maps.enhance();
  });

});
