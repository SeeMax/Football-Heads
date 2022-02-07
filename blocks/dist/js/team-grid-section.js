/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/layout/team-grid-section/team-grid-section.js":
/*!**************************************************************!*\
  !*** ./blocks/layout/team-grid-section/team-grid-section.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  /**
   * initializeBlock
   *
   * Adds custom JavaScript to the block HTML.
   *
   * @date    15/4/19
   * @since   1.0.0
   *
   * @param   object $block The block jQuery element.
   * @param   object attributes The block attributes (only available when editing).
   * @return  void
   */
  var initializeBlock = function initializeBlock($block) {
    // Get the Tallest Of The Divs for Height
    var elementHeights = $('.teamGridTopicArea').map(function () {
      return $(this).outerHeight();
    }).get();
    var maxHeight = Math.max.apply(null, elementHeights);
    $('.teamGridContainer').height(maxHeight); // Set The First Grid In Top - Clicks Take t form there

    $('.teamGridTopicArea').first().css('z-index', '11'); // Flip The Team Cards to Correspond with the Right Nav Item

    var otherteams = $(".teamGridTopicArea").not(":eq(0)").find('.singleteamGridteam');
    var otherArrows = $(".singleteamGridNav").not(":eq(0)").find('.gridArrow');
    gsap.set(otherteams, {
      rotationY: 90
    });
    gsap.set(otherArrows, {
      y: -15
    });
    $('.singleteamGridNav').on('click', function () {
      var thisteam = $(this).attr('data-grid-filter-btn');
      var thisArrow = $(this).find('.gridArrow');
      var theArea = $(".teamGridTopicArea[data-grid-filter-area='" + thisteam + "']");
      var tl = gsap.timeline({
        defaults: {
          // children inherit these defaults
          duration: 0.2,
          ease: "power4.out"
        }
      });
      var theseteams = theArea.find('.singleteamGridteam');
      tl.to('.singleteamGridteam', {
        rotationY: 90
      }, "allOut");
      tl.to('.teamGridTopicArea', {
        zIndex: 9
      }, "allOut");
      tl.to('.gridArrow', {
        y: -15
      }, "allOut");
      tl.to(thisArrow, {
        y: 0
      }, "allIn");
      tl.to(theseteams, {
        duration: 0.3,
        rotationY: 0
      }, "allIn");
      tl.to(theArea, {
        zIndex: 10
      }, "allIn");
    });
    $('.singleteamGridteam').on('click', function () {
      var thisPost = $(this).attr('data-team-popup');
      ajaxPost(thisPost);
    });
    $('.singleteamPopupClose').on('click', function () {
      singleteamPopupClose();
    });

    var ajaxPost = function ajaxPost(linkID) {
      $.ajax({
        url: '/wp-json/wp/v2/board_advisor/' + linkID,
        success: function success(data) {
          console.log(data); // Member or Advisor:`+data.acf.board_member_or_advisor+`            
          // Clear Info First    

          $('.team-pop-up-text .contact-info').html(''); // Populate Data

          $('.team-pop-up-image').html("\n                  <div class=\"popup-image-mask background-image-section\" \n                  style=\"background-image:url(" + data.acf.profile_image.sizes.medium + ")\"> \n                  </div>\n                ");
          $('.team-pop-up-text h3').html(data.title.rendered);
          $('.team-pop-up-text h5').html(data.acf.job_description);
          $('.team-pop-up-text p').html(data.acf.board_bio);

          if (data.acf.linkedin_profile.length > 0) {
            $('.team-pop-up-text .contact-info').append('<a href=' + data.acf.linkedin_profile + '><i class="fab fa-linkedin"></i></a>');
          }

          if (data.acf.team_email_address.length > 0) {
            $('.team-pop-up-text .contact-info').append('<a href=mailto:' + data.acf.team_email_address + '><i class="fas fa-envelope"></i></a>');
          }

          if (data.acf.twitter_profile.length > 0) {
            $('.team-pop-up-text .contact-info').append('<a href=' + data.acf.twitter_profile + '><i class="fab fa-twitter"></i></a>');
          } // Reveal After Data is In


          showPopup();
        },
        cache: false
      });
    };

    var showPopup = function showPopup() {
      var tl = gsap.timeline();
      tl.set('.singleteamPopup', {
        zIndex: 50
      });
      tl.set('.teamGridOverlay', {
        zIndex: 14
      });
      tl.to('.singleteamPopup', {
        opacity: 1
      }, "comein");
      tl.to('.teamGridOverlay', {
        opacity: 0.8
      }, "comein");
      tl.to(window, {
        scrollTo: {
          y: ".singleteamPopup",
          offsetY: 200
        }
      }, "comein");
    };

    var singleteamPopupClose = function singleteamPopupClose() {
      var tl = gsap.timeline();
      tl.to('.singleteamPopup', {
        opacity: 0
      }, "comeout");
      tl.to('.teamGridOverlay', {
        opacity: 0
      }, "comeout");
      tl.set('.singleteamPopup', {
        zIndex: -1
      });
      tl.set('.teamGridOverlay', {
        zIndex: -1
      });
    };
  }; // Initialize each block on page load (front end).


  $(document).ready(function () {
    // Make sure it's not the wp-backend
    if (!$('body').hasClass("wp-admin")) {
      $('.team-grid-section').each(function () {
        initializeBlock($(this));
      });
    }
  }); // Initialize dynamic block preview (editor).

  if (window.acf) {
    window.acf.addAction('render_block_preview/type=teams-grid-section', initializeBlock);
  }
})(jQuery);

/***/ }),

/***/ 8:
/*!********************************************************************!*\
  !*** multi ./blocks/layout/team-grid-section/team-grid-section.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/footballheads/wp-content/themes/seemax-theme/blocks/layout/team-grid-section/team-grid-section.js */"./blocks/layout/team-grid-section/team-grid-section.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2xheW91dC90ZWFtLWdyaWQtc2VjdGlvbi90ZWFtLWdyaWQtc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyIkIiwiaW5pdGlhbGl6ZUJsb2NrIiwiJGJsb2NrIiwiZWxlbWVudEhlaWdodHMiLCJtYXAiLCJvdXRlckhlaWdodCIsImdldCIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJhcHBseSIsImhlaWdodCIsImZpcnN0IiwiY3NzIiwib3RoZXJ0ZWFtcyIsIm5vdCIsImZpbmQiLCJvdGhlckFycm93cyIsImdzYXAiLCJzZXQiLCJyb3RhdGlvblkiLCJ5Iiwib24iLCJ0aGlzdGVhbSIsImF0dHIiLCJ0aGlzQXJyb3ciLCJ0aGVBcmVhIiwidGwiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZHVyYXRpb24iLCJlYXNlIiwidGhlc2V0ZWFtcyIsInRvIiwiekluZGV4IiwidGhpc1Bvc3QiLCJhamF4UG9zdCIsInNpbmdsZXRlYW1Qb3B1cENsb3NlIiwibGlua0lEIiwiYWpheCIsInVybCIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJhY2YiLCJwcm9maWxlX2ltYWdlIiwic2l6ZXMiLCJtZWRpdW0iLCJ0aXRsZSIsInJlbmRlcmVkIiwiam9iX2Rlc2NyaXB0aW9uIiwiYm9hcmRfYmlvIiwibGlua2VkaW5fcHJvZmlsZSIsImxlbmd0aCIsImFwcGVuZCIsInRlYW1fZW1haWxfYWRkcmVzcyIsInR3aXR0ZXJfcHJvZmlsZSIsInNob3dQb3B1cCIsImNhY2hlIiwib3BhY2l0eSIsIndpbmRvdyIsInNjcm9sbFRvIiwib2Zmc2V0WSIsImRvY3VtZW50IiwicmVhZHkiLCJoYXNDbGFzcyIsImVhY2giLCJhZGRBY3Rpb24iLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LENBQUNSLEdBQUgsQ0FBTyxrQkFBUCxFQUEyQjtBQUFDZSxjQUFNLEVBQUMsQ0FBQztBQUFULE9BQTNCO0FBQ0FQLFFBQUUsQ0FBQ1IsR0FBSCxDQUFPLGtCQUFQLEVBQTJCO0FBQUNlLGNBQU0sRUFBQyxDQUFDO0FBQVQsT0FBM0I7QUFDRCxLQU5EO0FBT0gsR0FuR0QsQ0FiUSxDQXlIUjs7O0FBQ0FsQyxHQUFDLENBQUNpRSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFVO0FBRTFCO0FBQ0EsUUFBSSxDQUFDbEUsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVbUUsUUFBVixDQUFtQixVQUFuQixDQUFMLEVBQXFDO0FBRW5DbkUsT0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JvRSxJQUF4QixDQUE2QixZQUFVO0FBQ25DbkUsdUJBQWUsQ0FBRUQsQ0FBQyxDQUFDLElBQUQsQ0FBSCxDQUFmO0FBQ0gsT0FGRDtBQUdEO0FBQ0YsR0FURCxFQTFIUSxDQXFJUjs7QUFDQSxNQUFJOEQsTUFBTSxDQUFDaEIsR0FBWCxFQUFpQjtBQUNiZ0IsVUFBTSxDQUFDaEIsR0FBUCxDQUFXdUIsU0FBWCxDQUFzQiw4Q0FBdEIsRUFBc0VwRSxlQUF0RTtBQUNIO0FBRUYsQ0ExSUgsRUEwSUtxRSxNQTFJTCxFIiwiZmlsZSI6InRlYW0tZ3JpZC1zZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiKGZ1bmN0aW9uKCQpe1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxpemVCbG9ja1xuICAgICAqXG4gICAgICogQWRkcyBjdXN0b20gSmF2YVNjcmlwdCB0byB0aGUgYmxvY2sgSFRNTC5cbiAgICAgKlxuICAgICAqIEBkYXRlICAgIDE1LzQvMTlcbiAgICAgKiBAc2luY2UgICAxLjAuMFxuICAgICAqXG4gICAgICogQHBhcmFtICAgb2JqZWN0ICRibG9jayBUaGUgYmxvY2sgalF1ZXJ5IGVsZW1lbnQuXG4gICAgICogQHBhcmFtICAgb2JqZWN0IGF0dHJpYnV0ZXMgVGhlIGJsb2NrIGF0dHJpYnV0ZXMgKG9ubHkgYXZhaWxhYmxlIHdoZW4gZWRpdGluZykuXG4gICAgICogQHJldHVybiAgdm9pZFxuICAgICAqL1xuICAgIHZhciBpbml0aWFsaXplQmxvY2sgPSBmdW5jdGlvbiggJGJsb2NrICkge1xuICAgICAgXG4gICAgICAgIC8vIEdldCB0aGUgVGFsbGVzdCBPZiBUaGUgRGl2cyBmb3IgSGVpZ2h0XG4gICAgICAgIHZhciBlbGVtZW50SGVpZ2h0cyA9ICQoJy50ZWFtR3JpZFRvcGljQXJlYScpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuICAgICAgICB9KS5nZXQoKTtcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGVsZW1lbnRIZWlnaHRzKTsgIFxuICAgICAgICAkKCcudGVhbUdyaWRDb250YWluZXInKS5oZWlnaHQobWF4SGVpZ2h0KTtcblxuICAgICAgICAvLyBTZXQgVGhlIEZpcnN0IEdyaWQgSW4gVG9wIC0gQ2xpY2tzIFRha2UgdCBmb3JtIHRoZXJlXG4gICAgICAgICQoJy50ZWFtR3JpZFRvcGljQXJlYScpLmZpcnN0KCkuY3NzKCd6LWluZGV4JywgJzExJyk7XG5cbiAgICAgICAgLy8gRmxpcCBUaGUgVGVhbSBDYXJkcyB0byBDb3JyZXNwb25kIHdpdGggdGhlIFJpZ2h0IE5hdiBJdGVtXG4gICAgICAgIGxldCBvdGhlcnRlYW1zID0gJChcIi50ZWFtR3JpZFRvcGljQXJlYVwiKS5ub3QoXCI6ZXEoMClcIikuZmluZCgnLnNpbmdsZXRlYW1HcmlkdGVhbScpO1xuICAgICAgICBsZXQgb3RoZXJBcnJvd3MgPSAkKFwiLnNpbmdsZXRlYW1HcmlkTmF2XCIpLm5vdChcIjplcSgwKVwiKS5maW5kKCcuZ3JpZEFycm93Jyk7XG4gICAgICAgIGdzYXAuc2V0KG90aGVydGVhbXMsIHtyb3RhdGlvblk6OTB9KTtcbiAgICAgICAgZ3NhcC5zZXQob3RoZXJBcnJvd3Mse3k6LTE1fSk7XG4gICAgICAgICQoJy5zaW5nbGV0ZWFtR3JpZE5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgbGV0IHRoaXN0ZWFtID0gJCh0aGlzKS5hdHRyKCdkYXRhLWdyaWQtZmlsdGVyLWJ0bicpO1xuICAgICAgICAgIGxldCB0aGlzQXJyb3cgPSAkKHRoaXMpLmZpbmQoJy5ncmlkQXJyb3cnKTtcbiAgICAgICAgICBsZXQgdGhlQXJlYSA9ICQoXCIudGVhbUdyaWRUb3BpY0FyZWFbZGF0YS1ncmlkLWZpbHRlci1hcmVhPSdcIiArIHRoaXN0ZWFtICtcIiddXCIpO1xuICAgICAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgZGVmYXVsdHM6IHsgLy8gY2hpbGRyZW4gaW5oZXJpdCB0aGVzZSBkZWZhdWx0c1xuICAgICAgICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgICAgICAgICBlYXNlOiBcInBvd2VyNC5vdXRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHRoZXNldGVhbXMgPSB0aGVBcmVhLmZpbmQoJy5zaW5nbGV0ZWFtR3JpZHRlYW0nKTtcbiAgICAgICAgICB0bC50bygnLnNpbmdsZXRlYW1HcmlkdGVhbScsIHtyb3RhdGlvblk6OTB9LCBcImFsbE91dFwiKTtcbiAgICAgICAgICB0bC50bygnLnRlYW1HcmlkVG9waWNBcmVhJyx7ekluZGV4Ojl9LCBcImFsbE91dFwiKTtcbiAgICAgICAgICB0bC50bygnLmdyaWRBcnJvdycse3k6LTE1fSwgXCJhbGxPdXRcIik7XG4gICAgICAgICAgdGwudG8odGhpc0Fycm93LHt5OjB9LCBcImFsbEluXCIpO1xuICAgICAgICAgIHRsLnRvKHRoZXNldGVhbXMsIHtkdXJhdGlvbjowLjMsIHJvdGF0aW9uWTowfSwgXCJhbGxJblwiKTtcbiAgICAgICAgICB0bC50byh0aGVBcmVhLCB7ekluZGV4OjEwfSwgXCJhbGxJblwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAkKCcuc2luZ2xldGVhbUdyaWR0ZWFtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICBsZXQgdGhpc1Bvc3QgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGVhbS1wb3B1cCcpO1xuICAgICAgICAgIGFqYXhQb3N0KHRoaXNQb3N0KVxuICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2luZ2xldGVhbVBvcHVwQ2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgIHNpbmdsZXRlYW1Qb3B1cENsb3NlKCk7ICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICBsZXQgYWpheFBvc3QgPSAobGlua0lEKSA9PiB7ICBcbiAgICAgICAgICAkLmFqYXgoeyAgICAgICAgICBcbiAgICAgICAgICAgICAgdXJsOiAnL3dwLWpzb24vd3AvdjIvYm9hcmRfYWR2aXNvci8nK2xpbmtJRCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oIGRhdGEgKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIC8vIE1lbWJlciBvciBBZHZpc29yOmArZGF0YS5hY2YuYm9hcmRfbWVtYmVyX29yX2Fkdmlzb3IrYCAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENsZWFyIEluZm8gRmlyc3QgICAgXG4gICAgICAgICAgICAgICAgJCgnLnRlYW0tcG9wLXVwLXRleHQgLmNvbnRhY3QtaW5mbycpLmh0bWwoJycpOyAgIFxuICAgICAgICAgICAgICAgIC8vIFBvcHVsYXRlIERhdGFcbiAgICAgICAgICAgICAgICAkKCcudGVhbS1wb3AtdXAtaW1hZ2UnKS5odG1sKGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1pbWFnZS1tYXNrIGJhY2tncm91bmQtaW1hZ2Utc2VjdGlvblwiIFxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChgK2RhdGEuYWNmLnByb2ZpbGVfaW1hZ2Uuc2l6ZXMubWVkaXVtK2ApXCI+IFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYClcbiAgICAgICAgICAgICAgICAkKCcudGVhbS1wb3AtdXAtdGV4dCBoMycpLmh0bWwoZGF0YS50aXRsZS5yZW5kZXJlZCk7XG4gICAgICAgICAgICAgICAgJCgnLnRlYW0tcG9wLXVwLXRleHQgaDUnKS5odG1sKGRhdGEuYWNmLmpvYl9kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgJCgnLnRlYW0tcG9wLXVwLXRleHQgcCcpLmh0bWwoZGF0YS5hY2YuYm9hcmRfYmlvKTtcbiAgICAgICAgICAgICAgICBpZigoZGF0YS5hY2YubGlua2VkaW5fcHJvZmlsZSkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAkKCcudGVhbS1wb3AtdXAtdGV4dCAuY29udGFjdC1pbmZvJykuYXBwZW5kKCc8YSBocmVmPScrZGF0YS5hY2YubGlua2VkaW5fcHJvZmlsZSsnPjxpIGNsYXNzPVwiZmFiIGZhLWxpbmtlZGluXCI+PC9pPjwvYT4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoKGRhdGEuYWNmLnRlYW1fZW1haWxfYWRkcmVzcykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAkKCcudGVhbS1wb3AtdXAtdGV4dCAuY29udGFjdC1pbmZvJykuYXBwZW5kKCc8YSBocmVmPW1haWx0bzonK2RhdGEuYWNmLnRlYW1fZW1haWxfYWRkcmVzcysnPjxpIGNsYXNzPVwiZmFzIGZhLWVudmVsb3BlXCI+PC9pPjwvYT4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoKGRhdGEuYWNmLnR3aXR0ZXJfcHJvZmlsZSkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAkKCcudGVhbS1wb3AtdXAtdGV4dCAuY29udGFjdC1pbmZvJykuYXBwZW5kKCc8YSBocmVmPScrZGF0YS5hY2YudHdpdHRlcl9wcm9maWxlKyc+PGkgY2xhc3M9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT48L2E+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJldmVhbCBBZnRlciBEYXRhIGlzIEluXG4gICAgICAgICAgICAgICAgc2hvd1BvcHVwKCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZVxuICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaG93UG9wdXAgPSAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuICAgICAgICAgIHRsLnNldCgnLnNpbmdsZXRlYW1Qb3B1cCcsIHt6SW5kZXg6NTB9KTtcbiAgICAgICAgICB0bC5zZXQoJy50ZWFtR3JpZE92ZXJsYXknLCB7ekluZGV4OjE0fSk7XG4gICAgICAgICAgdGwudG8oJy5zaW5nbGV0ZWFtUG9wdXAnLCB7b3BhY2l0eToxfSwgXCJjb21laW5cIik7XG4gICAgICAgICAgdGwudG8oJy50ZWFtR3JpZE92ZXJsYXknLCB7b3BhY2l0eTowLjh9LCBcImNvbWVpblwiKTtcbiAgICAgICAgICB0bC50byh3aW5kb3csIHtzY3JvbGxUbzoge3k6XCIuc2luZ2xldGVhbVBvcHVwXCIsIG9mZnNldFk6MjAwfX0sIFwiY29tZWluXCIpO1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNpbmdsZXRlYW1Qb3B1cENsb3NlID0gKCkgPT4ge1xuICAgICAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKTtcbiAgICAgICAgICB0bC50bygnLnNpbmdsZXRlYW1Qb3B1cCcsIHtvcGFjaXR5OjB9LCBcImNvbWVvdXRcIilcbiAgICAgICAgICB0bC50bygnLnRlYW1HcmlkT3ZlcmxheScsIHtvcGFjaXR5OjB9LCBcImNvbWVvdXRcIilcbiAgICAgICAgICB0bC5zZXQoJy5zaW5nbGV0ZWFtUG9wdXAnLCB7ekluZGV4Oi0xfSk7XG4gICAgICAgICAgdGwuc2V0KCcudGVhbUdyaWRPdmVybGF5Jywge3pJbmRleDotMX0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgXG5cblxuXG5cblxuXG5cbiAgICAvLyBJbml0aWFsaXplIGVhY2ggYmxvY2sgb24gcGFnZSBsb2FkIChmcm9udCBlbmQpLlxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICBcbiAgICAgIC8vIE1ha2Ugc3VyZSBpdCdzIG5vdCB0aGUgd3AtYmFja2VuZFxuICAgICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoXCJ3cC1hZG1pblwiKSkge1xuICAgICAgICBcbiAgICAgICAgJCgnLnRlYW0tZ3JpZC1zZWN0aW9uJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaW5pdGlhbGl6ZUJsb2NrKCAkKHRoaXMpICk7ICAgICAgICAgIFxuICAgICAgICB9KTsgICAgICBcbiAgICAgIH1cbiAgICB9KTtcbiAgXG4gICAgLy8gSW5pdGlhbGl6ZSBkeW5hbWljIGJsb2NrIHByZXZpZXcgKGVkaXRvcikuXG4gICAgaWYoIHdpbmRvdy5hY2YgKSB7XG4gICAgICAgIHdpbmRvdy5hY2YuYWRkQWN0aW9uKCAncmVuZGVyX2Jsb2NrX3ByZXZpZXcvdHlwZT10ZWFtcy1ncmlkLXNlY3Rpb24nLCBpbml0aWFsaXplQmxvY2sgKTtcbiAgICB9XG4gIFxuICB9KShqUXVlcnkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==