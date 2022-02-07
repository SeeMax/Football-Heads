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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/layout/report-grid-section/report-grid-section.js":
/*!******************************************************************!*\
  !*** ./blocks/layout/report-grid-section/report-grid-section.js ***!
  \******************************************************************/
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
    // Get an array of all element heights
    var elementHeights = $('.reportGridTopicArea').map(function () {
      return $(this).outerHeight();
    }).get(); // Math.max takes a variable number of arguments
    // `apply` is equivalent to passing each height as an argument

    var maxHeight = Math.max.apply(null, elementHeights); // Set each height to the max height

    $('.reportGridContainer').height(maxHeight);
    var otherReports = $(".reportGridTopicArea").not(":eq(0)").find('.singleReportGridReport');
    var otherArrows = $(".singleReportGridNav").not(":eq(0)").find('.gridArrow');
    gsap.set(otherReports, {
      rotationY: 90
    });
    gsap.set(otherArrows, {
      y: -15
    });
    $('.singleReportGridNav').on('click', function () {
      var thisReport = $(this).attr('data-grid-filter-btn');
      var thisArrow = $(this).find('.gridArrow');
      var theArea = $(".reportGridTopicArea[data-grid-filter-area='" + thisReport + "']");
      var tl = gsap.timeline({
        defaults: {
          // children inherit these defaults
          duration: 0.2,
          ease: "power4.out"
        }
      });
      var theseReports = theArea.find('.singleReportGridReport');
      tl.to('.singleReportGridReport', {
        rotationY: 90
      }, "allOut");
      tl.to('.reportGridTopicArea', {
        zIndex: 9
      }, "allOut");
      tl.to('.gridArrow', {
        y: -15
      }, "allOut");
      tl.to(thisArrow, {
        y: 0
      }, "allIn");
      tl.to(theseReports, {
        duration: 0.3,
        rotationY: 0
      }, "allIn");
      tl.to(theArea, {
        zIndex: 10
      }, "allIn");
    }); // data-grid-filter-area="<?php echo $topic;?>"
  }; // Initialize each block on page load (front end).


  $(document).ready(function () {
    // Make sure it's not the wp-backend
    // if (!$('body').hasClass("wp-admin")) {
    $('.report-grid-section').each(function () {
      initializeBlock($(this));
    }); // }
  }); // Initialize dynamic block preview (editor).

  if (window.acf) {
    window.acf.addAction('render_block_preview/type=reports-grid-section', initializeBlock);
  }
})(jQuery);

/***/ }),

/***/ 7:
/*!************************************************************************!*\
  !*** multi ./blocks/layout/report-grid-section/report-grid-section.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/footballheads/wp-content/themes/seemax-theme/blocks/layout/report-grid-section/report-grid-section.js */"./blocks/layout/report-grid-section/report-grid-section.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2xheW91dC9yZXBvcnQtZ3JpZC1zZWN0aW9uL3JlcG9ydC1ncmlkLXNlY3Rpb24uanMiXSwibmFtZXMiOlsiJCIsImluaXRpYWxpemVCbG9jayIsIiRibG9jayIsImVsZW1lbnRIZWlnaHRzIiwibWFwIiwib3V0ZXJIZWlnaHQiLCJnZXQiLCJtYXhIZWlnaHQiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJoZWlnaHQiLCJvdGhlclJlcG9ydHMiLCJub3QiLCJmaW5kIiwib3RoZXJBcnJvd3MiLCJnc2FwIiwic2V0Iiwicm90YXRpb25ZIiwieSIsIm9uIiwidGhpc1JlcG9ydCIsImF0dHIiLCJ0aGlzQXJyb3ciLCJ0aGVBcmVhIiwidGwiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZHVyYXRpb24iLCJlYXNlIiwidGhlc2VSZXBvcnRzIiwidG8iLCJ6SW5kZXgiLCJkb2N1bWVudCIsInJlYWR5IiwiZWFjaCIsIndpbmRvdyIsImFjZiIsImFkZEFjdGlvbiIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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RUFBZTtBQUFDUSxjQUFNLEVBQUM7QUFBUixPQUFmLEVBQTRCLE9BQTVCO0FBQ0QsS0FqQkQsRUFqQnFDLENBb0NyQztBQUNILEdBckNELENBYlEsQ0FvRFI7OztBQUNBaEMsR0FBQyxDQUFDaUMsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUUxQjtBQUNBO0FBRUVsQyxLQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQm1DLElBQTFCLENBQStCLFlBQVU7QUFDckNsQyxxQkFBZSxDQUFFRCxDQUFDLENBQUMsSUFBRCxDQUFILENBQWY7QUFDSCxLQUZELEVBTHdCLENBUTFCO0FBQ0QsR0FURCxFQXJEUSxDQWdFUjs7QUFDQSxNQUFJb0MsTUFBTSxDQUFDQyxHQUFYLEVBQWlCO0FBQ2JELFVBQU0sQ0FBQ0MsR0FBUCxDQUFXQyxTQUFYLENBQXNCLGdEQUF0QixFQUF3RXJDLGVBQXhFO0FBQ0g7QUFFRixDQXJFSCxFQXFFS3NDLE1BckVMLEUiLCJmaWxlIjoicmVwb3J0LWdyaWQtc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsIihmdW5jdGlvbigkKXtcbiAgICAvKipcbiAgICAgKiBpbml0aWFsaXplQmxvY2tcbiAgICAgKlxuICAgICAqIEFkZHMgY3VzdG9tIEphdmFTY3JpcHQgdG8gdGhlIGJsb2NrIEhUTUwuXG4gICAgICpcbiAgICAgKiBAZGF0ZSAgICAxNS80LzE5XG4gICAgICogQHNpbmNlICAgMS4wLjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIG9iamVjdCAkYmxvY2sgVGhlIGJsb2NrIGpRdWVyeSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAgIG9iamVjdCBhdHRyaWJ1dGVzIFRoZSBibG9jayBhdHRyaWJ1dGVzIChvbmx5IGF2YWlsYWJsZSB3aGVuIGVkaXRpbmcpLlxuICAgICAqIEByZXR1cm4gIHZvaWRcbiAgICAgKi9cbiAgICB2YXIgaW5pdGlhbGl6ZUJsb2NrID0gZnVuY3Rpb24oICRibG9jayApIHtcbiAgICAgIFxuICAgICAgICAvLyBHZXQgYW4gYXJyYXkgb2YgYWxsIGVsZW1lbnQgaGVpZ2h0c1xuICAgICAgICB2YXIgZWxlbWVudEhlaWdodHMgPSAkKCcucmVwb3J0R3JpZFRvcGljQXJlYScpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuICAgICAgICB9KS5nZXQoKTtcbiAgICAgIFxuICAgICAgICAvLyBNYXRoLm1heCB0YWtlcyBhIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHNcbiAgICAgICAgLy8gYGFwcGx5YCBpcyBlcXVpdmFsZW50IHRvIHBhc3NpbmcgZWFjaCBoZWlnaHQgYXMgYW4gYXJndW1lbnRcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGVsZW1lbnRIZWlnaHRzKTtcbiAgICAgIFxuICAgICAgICAvLyBTZXQgZWFjaCBoZWlnaHQgdG8gdGhlIG1heCBoZWlnaHRcbiAgICAgICAgJCgnLnJlcG9ydEdyaWRDb250YWluZXInKS5oZWlnaHQobWF4SGVpZ2h0KTtcbiAgICAgICAgbGV0IG90aGVyUmVwb3J0cyA9ICQoXCIucmVwb3J0R3JpZFRvcGljQXJlYVwiKS5ub3QoXCI6ZXEoMClcIikuZmluZCgnLnNpbmdsZVJlcG9ydEdyaWRSZXBvcnQnKTtcbiAgICAgICAgbGV0IG90aGVyQXJyb3dzID0gJChcIi5zaW5nbGVSZXBvcnRHcmlkTmF2XCIpLm5vdChcIjplcSgwKVwiKS5maW5kKCcuZ3JpZEFycm93Jyk7XG4gICAgICAgIGdzYXAuc2V0KG90aGVyUmVwb3J0cywge3JvdGF0aW9uWTo5MH0pO1xuICAgICAgICBnc2FwLnNldChvdGhlckFycm93cyx7eTotMTV9KTtcbiAgICAgICAgJCgnLnNpbmdsZVJlcG9ydEdyaWROYXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgIGxldCB0aGlzUmVwb3J0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLWdyaWQtZmlsdGVyLWJ0bicpO1xuICAgICAgICAgIGxldCB0aGlzQXJyb3cgPSAkKHRoaXMpLmZpbmQoJy5ncmlkQXJyb3cnKTtcbiAgICAgICAgICBsZXQgdGhlQXJlYSA9ICQoXCIucmVwb3J0R3JpZFRvcGljQXJlYVtkYXRhLWdyaWQtZmlsdGVyLWFyZWE9J1wiICsgdGhpc1JlcG9ydCArXCInXVwiKTtcbiAgICAgICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIGRlZmF1bHRzOiB7IC8vIGNoaWxkcmVuIGluaGVyaXQgdGhlc2UgZGVmYXVsdHNcbiAgICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICAgICAgZWFzZTogXCJwb3dlcjQub3V0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCB0aGVzZVJlcG9ydHMgPSB0aGVBcmVhLmZpbmQoJy5zaW5nbGVSZXBvcnRHcmlkUmVwb3J0Jyk7XG4gICAgICAgICAgdGwudG8oJy5zaW5nbGVSZXBvcnRHcmlkUmVwb3J0Jywge3JvdGF0aW9uWTo5MH0sIFwiYWxsT3V0XCIpO1xuICAgICAgICAgIHRsLnRvKCcucmVwb3J0R3JpZFRvcGljQXJlYScse3pJbmRleDo5fSwgXCJhbGxPdXRcIik7XG4gICAgICAgICAgdGwudG8oJy5ncmlkQXJyb3cnLHt5Oi0xNX0sIFwiYWxsT3V0XCIpO1xuICAgICAgICAgIHRsLnRvKHRoaXNBcnJvdyx7eTowfSwgXCJhbGxJblwiKTtcbiAgICAgICAgICB0bC50byh0aGVzZVJlcG9ydHMsIHtkdXJhdGlvbjowLjMsIHJvdGF0aW9uWTowfSwgXCJhbGxJblwiKTtcbiAgICAgICAgICB0bC50byh0aGVBcmVhLCB7ekluZGV4OjEwfSwgXCJhbGxJblwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBkYXRhLWdyaWQtZmlsdGVyLWFyZWE9XCI8P3BocCBlY2hvICR0b3BpYzs/PlwiXG4gICAgfTtcbiAgXG4gICAgLy8gSW5pdGlhbGl6ZSBlYWNoIGJsb2NrIG9uIHBhZ2UgbG9hZCAoZnJvbnQgZW5kKS5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgXG4gICAgICAvLyBNYWtlIHN1cmUgaXQncyBub3QgdGhlIHdwLWJhY2tlbmRcbiAgICAgIC8vIGlmICghJCgnYm9keScpLmhhc0NsYXNzKFwid3AtYWRtaW5cIikpIHtcbiAgICAgICAgXG4gICAgICAgICQoJy5yZXBvcnQtZ3JpZC1zZWN0aW9uJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaW5pdGlhbGl6ZUJsb2NrKCAkKHRoaXMpICk7ICAgICAgICAgIFxuICAgICAgICB9KTsgICAgICBcbiAgICAgIC8vIH1cbiAgICB9KTtcbiAgXG4gICAgLy8gSW5pdGlhbGl6ZSBkeW5hbWljIGJsb2NrIHByZXZpZXcgKGVkaXRvcikuXG4gICAgaWYoIHdpbmRvdy5hY2YgKSB7XG4gICAgICAgIHdpbmRvdy5hY2YuYWRkQWN0aW9uKCAncmVuZGVyX2Jsb2NrX3ByZXZpZXcvdHlwZT1yZXBvcnRzLWdyaWQtc2VjdGlvbicsIGluaXRpYWxpemVCbG9jayApO1xuICAgIH1cbiAgXG4gIH0pKGpRdWVyeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9