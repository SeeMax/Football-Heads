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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/layout/carousel-section/carousel-section.js":
/*!************************************************************!*\
  !*** ./blocks/layout/carousel-section/carousel-section.js ***!
  \************************************************************/
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
  var initializeBlock = function initializeBlock($block) {// $block.find('h2').css( "color", "blue" );
  }; // Initialize each block on page load (front end).


  $(document).ready(function () {
    // Make sure it's not the wp-backend
    if (!$('body').hasClass("wp-admin")) {
      $('.carouselSection').each(function () {
        initializeBlock($(this));
        var thisCar = $(this).find('.carousel-container');
        var thisPrev = $(this).find('.slick-prev-arrow');
        var thisNext = $(this).find('.slick-next-arrow');
        $(thisCar).each(function () {
          var thisID = $(this).attr('id');
          var thisContainer = '#' + thisID + '';
          $(thisContainer).slick({
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 200,
            // fade: true,
            cssEase: 'linear',
            prevArrow: $(thisPrev),
            nextArrow: $(thisNext)
          });
        });
      });
    }
  }); // Initialize dynamic block preview (editor).

  if (window.acf) {
    window.acf.addAction('render_block_preview/type=carousel-section', initializeBlock);
  }
})(jQuery);

/***/ }),

/***/ 2:
/*!******************************************************************!*\
  !*** multi ./blocks/layout/carousel-section/carousel-section.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/footballheads/wp-content/themes/seemax-theme/blocks/layout/carousel-section/carousel-section.js */"./blocks/layout/carousel-section/carousel-section.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2xheW91dC9jYXJvdXNlbC1zZWN0aW9uL2Nhcm91c2VsLXNlY3Rpb24uanMiXSwibmFtZXMiOlsiJCIsImluaXRpYWxpemVCbG9jayIsIiRibG9jayIsImRvY3VtZW50IiwicmVhZHkiLCJoYXNDbGFzcyIsImVhY2giLCJ0aGlzQ2FyIiwiZmluZCIsInRoaXNQcmV2IiwidGhpc05leHQiLCJ0aGlzSUQiLCJhdHRyIiwidGhpc0NvbnRhaW5lciIsInNsaWNrIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiaW5maW5pdGUiLCJzcGVlZCIsImNzc0Vhc2UiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJ3aW5kb3ciLCJhY2YiLCJhZGRBY3Rpb24iLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxDQUFDLFVBQVNBLENBQVQsRUFBVztBQUNWO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBVUMsTUFBVixFQUFtQixDQUNyQztBQUNILEdBRkQsQ0FiVSxDQWlCVjs7O0FBQ0FGLEdBQUMsQ0FBQ0csUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUUxQjtBQUNBLFFBQUksQ0FBQ0osQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVSyxRQUFWLENBQW1CLFVBQW5CLENBQUwsRUFBcUM7QUFFbkNMLE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCTSxJQUF0QixDQUEyQixZQUFVO0FBRW5DTCx1QkFBZSxDQUFFRCxDQUFDLENBQUMsSUFBRCxDQUFILENBQWY7QUFFQSxZQUFJTyxPQUFPLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLHFCQUFiLENBQWQ7QUFDQSxZQUFJQyxRQUFRLEdBQUdULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLG1CQUFiLENBQWY7QUFDQSxZQUFJRSxRQUFRLEdBQUdWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLG1CQUFiLENBQWY7QUFFQVIsU0FBQyxDQUFDTyxPQUFELENBQUQsQ0FBV0QsSUFBWCxDQUFnQixZQUFVO0FBQ3hCLGNBQUlLLE1BQU0sR0FBR1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxJQUFSLENBQWEsSUFBYixDQUFiO0FBQ0EsY0FBSUMsYUFBYSxHQUFHLE1BQUlGLE1BQUosR0FBVyxFQUEvQjtBQUVBWCxXQUFDLENBQUNhLGFBQUQsQ0FBRCxDQUFpQkMsS0FBakIsQ0FBdUI7QUFDckJDLG9CQUFRLEVBQUMsSUFEWTtBQUVyQkMseUJBQWEsRUFBQyxJQUZPO0FBR3JCQyxvQkFBUSxFQUFFLElBSFc7QUFJckJDLGlCQUFLLEVBQUUsR0FKYztBQUtyQjtBQUNBQyxtQkFBTyxFQUFFLFFBTlk7QUFPckJDLHFCQUFTLEVBQUVwQixDQUFDLENBQUNTLFFBQUQsQ0FQUztBQVFyQlkscUJBQVMsRUFBRXJCLENBQUMsQ0FBQ1UsUUFBRDtBQVJTLFdBQXZCO0FBVUQsU0FkRDtBQWVELE9BdkJEO0FBd0JEO0FBQ0YsR0E5QkQsRUFsQlUsQ0FrRFY7O0FBQ0EsTUFBSVksTUFBTSxDQUFDQyxHQUFYLEVBQWlCO0FBQ2JELFVBQU0sQ0FBQ0MsR0FBUCxDQUFXQyxTQUFYLENBQXNCLDRDQUF0QixFQUFvRXZCLGVBQXBFO0FBQ0g7QUFFRixDQXZERCxFQXVER3dCLE1BdkRILEUiLCJmaWxlIjoiY2Fyb3VzZWwtc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIihmdW5jdGlvbigkKXtcbiAgLyoqXG4gICAqIGluaXRpYWxpemVCbG9ja1xuICAgKlxuICAgKiBBZGRzIGN1c3RvbSBKYXZhU2NyaXB0IHRvIHRoZSBibG9jayBIVE1MLlxuICAgKlxuICAgKiBAZGF0ZSAgICAxNS80LzE5XG4gICAqIEBzaW5jZSAgIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSAgIG9iamVjdCAkYmxvY2sgVGhlIGJsb2NrIGpRdWVyeSBlbGVtZW50LlxuICAgKiBAcGFyYW0gICBvYmplY3QgYXR0cmlidXRlcyBUaGUgYmxvY2sgYXR0cmlidXRlcyAob25seSBhdmFpbGFibGUgd2hlbiBlZGl0aW5nKS5cbiAgICogQHJldHVybiAgdm9pZFxuICAgKi9cbiAgdmFyIGluaXRpYWxpemVCbG9jayA9IGZ1bmN0aW9uKCAkYmxvY2sgKSB7XG4gICAgICAvLyAkYmxvY2suZmluZCgnaDInKS5jc3MoIFwiY29sb3JcIiwgXCJibHVlXCIgKTtcbiAgfTtcblxuICAvLyBJbml0aWFsaXplIGVhY2ggYmxvY2sgb24gcGFnZSBsb2FkIChmcm9udCBlbmQpLlxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgLy8gTWFrZSBzdXJlIGl0J3Mgbm90IHRoZSB3cC1iYWNrZW5kXG4gICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoXCJ3cC1hZG1pblwiKSkge1xuXG4gICAgICAkKCcuY2Fyb3VzZWxTZWN0aW9uJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgIFxuICAgICAgICBpbml0aWFsaXplQmxvY2soICQodGhpcykgKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB0aGlzQ2FyID0gJCh0aGlzKS5maW5kKCcuY2Fyb3VzZWwtY29udGFpbmVyJyk7XG4gICAgICAgIHZhciB0aGlzUHJldiA9ICQodGhpcykuZmluZCgnLnNsaWNrLXByZXYtYXJyb3cnKTtcbiAgICAgICAgdmFyIHRoaXNOZXh0ID0gJCh0aGlzKS5maW5kKCcuc2xpY2stbmV4dC1hcnJvdycpXG4gICAgICAgIFxuICAgICAgICAkKHRoaXNDYXIpLmVhY2goZnVuY3Rpb24oKXsgICAgXG4gICAgICAgICAgdmFyIHRoaXNJRCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICB2YXIgdGhpc0NvbnRhaW5lciA9ICcjJyt0aGlzSUQrJyc7XG5cbiAgICAgICAgICAkKHRoaXNDb250YWluZXIpLnNsaWNrKHtcbiAgICAgICAgICAgIGF1dG9wbGF5OnRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOjUwMDAsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAyMDAsXG4gICAgICAgICAgICAvLyBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICQodGhpc1ByZXYpLFxuICAgICAgICAgICAgbmV4dEFycm93OiAkKHRoaXNOZXh0KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEluaXRpYWxpemUgZHluYW1pYyBibG9jayBwcmV2aWV3IChlZGl0b3IpLlxuICBpZiggd2luZG93LmFjZiApIHtcbiAgICAgIHdpbmRvdy5hY2YuYWRkQWN0aW9uKCAncmVuZGVyX2Jsb2NrX3ByZXZpZXcvdHlwZT1jYXJvdXNlbC1zZWN0aW9uJywgaW5pdGlhbGl6ZUJsb2NrICk7XG4gIH1cblxufSkoalF1ZXJ5KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=