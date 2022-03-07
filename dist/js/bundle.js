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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_windowLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/windowLoad.js */ "./src/js/components/windowLoad.js");


/***/ }),

/***/ "./src/js/components/clickEvents.js":
/*!******************************************!*\
  !*** ./src/js/components/clickEvents.js ***!
  \******************************************/
/*! exports provided: clickEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickEvents", function() { return clickEvents; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/components/index.js");

var clickEvents = function clickEvents() {
  // Mobile Nav Click Event
  // let menuToggleTL = menuToggle();
  // menuToggleTL.reversed(true);
  // $('.menuToggle').on('click', function() {  
  //   if (menuToggleTL.reversed()) {
  //     menuToggleTL.play();
  //     gsap.set($('.wrapper'), {height:'100%', overflow:'hidden'});
  //   } else {
  //     gsap.set($('.wrapper'), {height:'auto', overflow:'visible'});
  //     menuToggleTL.reverse();
  //   }
  // });
  // $('#mintbutton').on('click', function(){
  // let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  // if (isMobile) {
  //   alert('Unfortunately you can only buy a square on a computer.');
  // } else {
  //   alert('Eventually Mint');
  // }
  // }); // On Click Portion
  $('#mintPlus').on('click', function () {
    var currentCount = $('#mintbutton').attr('data-mint-count');

    if (currentCount < 5) {
      var newCount = parseInt(currentCount) + 1;
      $('#mintbutton').attr('data-mint-count', newCount);
      $('#mintNumber').html(newCount);
      $('#mintCost').html(newCount * 0.02); // alert(newCount);
    }
  });
  $('#mintMinus').on('click', function () {
    var currentCount = $('#mintbutton').attr('data-mint-count');

    if (currentCount > 1) {
      var newCount = parseInt(currentCount) - 1;
      $('#mintbutton').attr('data-mint-count', newCount);
      $('#mintNumber').html(newCount);
      $('#mintCost').html(newCount * 0.02); // alert(newCount);
    }
  }); // $('#load-metamask-script').on('click', function(){
  //   //Connect metamask to our site. Get the user's address.
  //   var account = null;
  //   var contract = null;
  //   const ABI = "";
  //   const ADDRESS = "";
  //   (async () =>{
  //       if (window.ethereum){
  //           await window.ethereum.send('eth_requestAccounts');
  //           window.web3 = new Web3(window.ethreum);
  //           var accounts = await web3.eth.getAccounts();
  //           account = accounts[0];
  //           document.getElementById('wallet-address').textContent = account;
  //           contract = new web3.eth.Contract(ABI, ADDRESS);
  //           updateCurrentCount();
  //           document.getElementById('increase-count').onclick = () => {
  //               increaseCurrentCount();
  //           }
  //       }
  //   })();
  // });

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault(); // console.log('hash it out');

    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["smoothScrolling"])($(this));
  });
};

/***/ }),

/***/ "./src/js/components/gsapRegisters.js":
/*!********************************************!*\
  !*** ./src/js/components/gsapRegisters.js ***!
  \********************************************/
/*! exports provided: gsapRegisters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gsapRegisters", function() { return gsapRegisters; });
var gsapRegisters = function gsapRegisters() {// gsap.registerPlugin(ScrollToPlugin);
};

/***/ }),

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/*! exports provided: preLoader, externalLinks, smoothScrolling, mobileNavSetup, fieldSetup, tickerRun, mintButton, walletButton, calcWinnings, menuToggle, gsapRegisters, clickEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageSetup.js */ "./src/js/components/pageSetup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preLoader", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["preLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "externalLinks", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["externalLinks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smoothScrolling", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["smoothScrolling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobileNavSetup", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["mobileNavSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fieldSetup", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["fieldSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickerRun", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["tickerRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mintButton", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["mintButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walletButton", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["walletButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcWinnings", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["calcWinnings"]; });

/* harmony import */ var _menuToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuToggle.js */ "./src/js/components/menuToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menuToggle", function() { return _menuToggle_js__WEBPACK_IMPORTED_MODULE_1__["menuToggle"]; });

/* harmony import */ var _gsapRegisters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gsapRegisters.js */ "./src/js/components/gsapRegisters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gsapRegisters", function() { return _gsapRegisters_js__WEBPACK_IMPORTED_MODULE_2__["gsapRegisters"]; });

/* harmony import */ var _clickEvents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clickEvents.js */ "./src/js/components/clickEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clickEvents", function() { return _clickEvents_js__WEBPACK_IMPORTED_MODULE_3__["clickEvents"]; });






/***/ }),

/***/ "./src/js/components/menuToggle.js":
/*!*****************************************!*\
  !*** ./src/js/components/menuToggle.js ***!
  \*****************************************/
/*! exports provided: menuToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuToggle", function() { return menuToggle; });
var menuToggle = function menuToggle() {
  var tl = new gsap.timeline({
    paused: true,
    defaults: {
      ease: 'circ.out()',
      duration: 0.3
    }
  });
  tl.to('.main-nav', {
    duration: 0.3,
    left: '0%'
  }, 'menuOpen');
  tl.to('nav a', {
    opacity: 1,
    x: '0%',
    stagger: {
      amount: 0.1
    }
  }, 'menuOpen+=0.1');
  tl.to('.hamTop', {
    rotation: -315,
    x: 7,
    y: 3,
    width: 10,
    transformOrigin: '50% 50%'
  }, 'menuOpen');
  tl.to('.hamMid', {
    x: -4,
    width: 18
  }, 'menuOpen');
  tl.to('.hamBot', {
    rotation: 315,
    x: 7,
    y: -3,
    width: 10,
    transformOrigin: '50% 50%'
  }, 'menuOpen');
  return tl;
};

/***/ }),

/***/ "./src/js/components/pageSetup.js":
/*!****************************************!*\
  !*** ./src/js/components/pageSetup.js ***!
  \****************************************/
/*! exports provided: preLoader, externalLinks, smoothScrolling, fieldSetup, tickerRun, mintButton, calcWinnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preLoader", function() { return preLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalLinks", function() { return externalLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrolling", function() { return smoothScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldSetup", function() { return fieldSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickerRun", function() { return tickerRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mintButton", function() { return mintButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcWinnings", function() { return calcWinnings; });
var preLoader = function preLoader() {
  var tl = new gsap.timeline({
    duration: 0.05,
    ease: 'power4.out',
    onComplete: function onComplete() {
      $('#preloader').remove();
    }
  });
  tl.to('#preloader svg', {
    scale: 0
  });
  tl.to('#preloader', {
    opacity: 0
  });
};
var externalLinks = function externalLinks() {
  // console.log('external link');
  $('a').each(function () {
    var a = new RegExp('/' + window.location.host + '/');

    if (!a.test(this.href)) {
      $(this).on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(this.href, '_blank');
      });
    }
  });
};
var smoothScrolling = function smoothScrolling(theLink) {
  var target = $(theLink).attr('href');
  var headerHeight = $('.header').outerHeight();
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: target // Activate if Header Is Fixed
      // offsetY:headerHeight

    }
  });
  return false;
};
var fieldSetup = function fieldSetup() {
  var tl = gsap.timeline({
    repeat: -1,
    defaults: {
      duration: 10,
      ease: "none"
    }
  }); // Grass Move
  // 1400 = off screen
  // 1120 = end of screen

  gsap.set('.grassStripe1', {
    x: -560
  });
  gsap.set('.grassStripe2', {
    x: 0
  });
  gsap.set('.grassStripe3', {
    x: 560
  });
  gsap.set('.grassStripe4', {
    x: 1120
  });
  tl.to('.grassStripe1', {
    x: 0
  }, "grassRoll");
  tl.to('.grassStripe2', {
    x: 560
  }, "grassRoll");
  tl.to('.grassStripe3', {
    x: 1120
  }, "grassRoll");
  tl.to('.grassStripe4', {
    x: 1680
  }, "grassRoll"); // Clock Blink

  gsap.to('.clockLine span', {
    duration: .05,
    opacity: 0,
    repeat: -1,
    repeatDelay: .5,
    yoyo: true,
    ease: 'none'
  });
};
var tickerRun = function tickerRun() {
  $('.single-ticker-text').wrapAll('<span class="ticker-items">');
  var tickerWidth = $('.the-ticker-section').width();
  var spanWidth = $('.the-ticker-section span').width();
  $('.the-ticker-section span').clone().appendTo('.the-ticker-section');
  $('.the-ticker-section span').wrapAll('<span class="ticker-wrapper">');
  gsap.set('.ticker-wrapper', {
    x: tickerWidth
  });
  var speed = 200;
  var initDuration = tickerWidth / speed;
  var loopDuration = spanWidth / speed;
  var tl = gsap.timeline({
    defaults: {
      ease: 'none'
    }
  });
  tl.to('.ticker-wrapper', initDuration, {
    x: 0
  });
  tl.to('.ticker-wrapper', loopDuration, {
    x: -spanWidth,
    repeat: -1
  });
};
var mintButton = function mintButton() {//Connect metamask to our site. Get the user's address.
  //   document.getElementById('mintbutton').onclick = () => {
  //   var amount = 1;
  //   var account = null;
  //   var contract = null;
  //   const ABI = [
  //     {
  //       "inputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "constructor"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "approved",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Approval",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": false,
  //           "internalType": "bool",
  //           "name": "approved",
  //           "type": "bool"
  //         }
  //       ],
  //       "name": "ApprovalForAll",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "previousOwner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "newOwner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "OwnershipTransferred",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Transfer",
  //       "type": "event"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "MAX_TOKENS",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "ProvenanceHash",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "SQUARE_PRICE",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "numTokens",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "SquareMint",
  //       "outputs": [],
  //       "stateMutability": "payable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "addy",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "addToGang",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "approve",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "balanceOf",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "baseExtension",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "getApproved",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "isApprovedForAll",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "addy",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "isInGang",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "name",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "owner",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "ownerOf",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "renounceOwnership",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "revealed",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "value",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "royaltyInfo",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "receiver",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "royaltyAmount",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "safeTransferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "bytes",
  //           "name": "_data",
  //           "type": "bytes"
  //         }
  //       ],
  //       "name": "safeTransferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "bool",
  //           "name": "approved",
  //           "type": "bool"
  //         }
  //       ],
  //       "name": "setApprovalForAll",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "bytes4",
  //           "name": "interfaceId",
  //           "type": "bytes4"
  //         }
  //       ],
  //       "name": "supportsInterface",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "symbol",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "tokenURI",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "transferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "newOwner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "transferOwnership",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address payable",
  //           "name": "wallet",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "amount",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "withdraw",
  //       "outputs": [],
  //       "stateMutability": "payable",
  //       "type": "function"
  //     }
  //   ];
  // const ADDRESS = "0xdd5bace9522991fd1e52404619a4872d838cf410";
  //   (async () =>{
  //     if (window.ethereum){
  //       await window.ethereum.send('eth_requestAccounts');
  //       window.web3 = new Web3(window.ethereum);
  //       var accounts = await web3.eth.getAccounts();
  //       account = accounts[0];
  //       contract = new web3.eth.Contract(ABI, ADDRESS);
  //       var amount = parseInt(document.getElementById('mintbutton').getAttribute('data-mint-count'));
  //       var price = 20000000000000000;
  //       console.log(amount);
  //       contract.methods.SquareMint(amount).send({from: account, value: price * amount}); // make sure this matches one for one with actual mint price in wei on contract or it won't work.
  //     }
  //   })();
  // }
};
var calcWinnings = function calcWinnings() {
  var fifteenPerETH = $('.fifteenPercentWinnerETH');
  var fortyFivePerETH = $('.fortyFivePercentWinnerETH');
  var fifteenPerUSD = $('.fifteenPercentWinnerUSD');
  var fortyFivePerUSD = $('.fortyFivePercentWinnerUSD');
  var totalPot = 2.0752;
  fifteenPerETH.html((totalPot * 0.15).toFixed(4) + " ETH");
  fortyFivePerETH.html((totalPot * 0.45).toFixed(4) + " ETH");
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://coingecko.p.rapidapi.com/simple/price?ids=ethereum&vs_currencies=usd",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": "6f51d3f7aamsh94afd664133c27dp1a3f74jsn41e4767ba3e9"
    }
  };
  $.ajax(settings).done(function (response) {
    // console.log(response.ethereum.usd);
    var currentUSD = response.ethereum.usd;
    var fifteenUSD = (totalPot * 0.15 * currentUSD).toFixed(2);
    var fortyFiveUSD = (totalPot * 0.45 * currentUSD).toFixed(2);
    fifteenPerUSD.html("$" + fifteenUSD + "<span>*</span>");
    fortyFivePerUSD.html("$" + fortyFiveUSD + "<span>*</span>");
  });
};

/***/ }),

/***/ "./src/js/components/windowLoad.js":
/*!*****************************************!*\
  !*** ./src/js/components/windowLoad.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/components/index.js");

window.addEventListener('load', function () {
  // Setup Basic Functionality
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["preLoader"])();
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["externalLinks"])();
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["gsapRegisters"])();
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["clickEvents"])();
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["fieldSetup"])();
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["tickerRun"])(); // mintButton();

  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["calcWinnings"])(); // walletButton();

  if ($(window).width() <= 1024) {}
});
window.addEventListener('resize', function () {});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/footballheads/wp-content/themes/seemax-theme/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jbGlja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nc2FwUmVnaXN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFnZVNldHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3dpbmRvd0xvYWQuanMiXSwibmFtZXMiOlsiY2xpY2tFdmVudHMiLCIkIiwib24iLCJjdXJyZW50Q291bnQiLCJhdHRyIiwibmV3Q291bnQiLCJwYXJzZUludCIsImh0bWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzbW9vdGhTY3JvbGxpbmciLCJnc2FwUmVnaXN0ZXJzIiwibWVudVRvZ2dsZSIsInRsIiwiZ3NhcCIsInRpbWVsaW5lIiwicGF1c2VkIiwiZGVmYXVsdHMiLCJlYXNlIiwiZHVyYXRpb24iLCJ0byIsImxlZnQiLCJvcGFjaXR5IiwieCIsInN0YWdnZXIiLCJhbW91bnQiLCJyb3RhdGlvbiIsInkiLCJ3aWR0aCIsInRyYW5zZm9ybU9yaWdpbiIsInByZUxvYWRlciIsIm9uQ29tcGxldGUiLCJyZW1vdmUiLCJzY2FsZSIsImV4dGVybmFsTGlua3MiLCJlYWNoIiwiYSIsIlJlZ0V4cCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsInRlc3QiLCJocmVmIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuIiwidGhlTGluayIsInRhcmdldCIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0Iiwic2Nyb2xsVG8iLCJmaWVsZFNldHVwIiwicmVwZWF0Iiwic2V0IiwicmVwZWF0RGVsYXkiLCJ5b3lvIiwidGlja2VyUnVuIiwid3JhcEFsbCIsInRpY2tlcldpZHRoIiwic3BhbldpZHRoIiwiY2xvbmUiLCJhcHBlbmRUbyIsInNwZWVkIiwiaW5pdER1cmF0aW9uIiwibG9vcER1cmF0aW9uIiwibWludEJ1dHRvbiIsImNhbGNXaW5uaW5ncyIsImZpZnRlZW5QZXJFVEgiLCJmb3J0eUZpdmVQZXJFVEgiLCJmaWZ0ZWVuUGVyVVNEIiwiZm9ydHlGaXZlUGVyVVNEIiwidG90YWxQb3QiLCJ0b0ZpeGVkIiwic2V0dGluZ3MiLCJhamF4IiwiZG9uZSIsInJlc3BvbnNlIiwiY3VycmVudFVTRCIsImV0aGVyZXVtIiwidXNkIiwiZmlmdGVlblVTRCIsImZvcnR5Rml2ZVVTRCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVELENBaGtCTTtBQW1rQkEsSUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUU5QixNQUFJQyxhQUFhLEdBQUdsRSxDQUFDLENBQUMsMEJBQUQsQ0FBckI7QUFDQSxNQUFJbUUsZUFBZSxHQUFHbkUsQ0FBQyxDQUFDLDRCQUFELENBQXZCO0FBQ0EsTUFBSW9FLGFBQWEsR0FBR3BFLENBQUMsQ0FBQywwQkFBRCxDQUFyQjtBQUNBLE1BQUlxRSxlQUFlLEdBQUdyRSxDQUFDLENBQUMsNEJBQUQsQ0FBdkI7QUFDQSxNQUFJc0UsUUFBUSxHQUFHLE1BQWY7QUFFQUosZUFBYSxDQUFDNUQsSUFBZCxDQUFtQixDQUFDZ0UsUUFBUSxHQUFHLElBQVosRUFBa0JDLE9BQWxCLENBQTBCLENBQTFCLElBQThCLE1BQWpEO0FBQ0FKLGlCQUFlLENBQUM3RCxJQUFoQixDQUFxQixDQUFDZ0UsUUFBUSxHQUFHLElBQVosRUFBa0JDLE9BQWxCLENBQTBCLENBQTFCLElBQThCLE1BQW5EO0FBRUEsTUFBTUMsUUFBUSxHQUFHO0FBQ2YsYUFBUyxJQURNO0FBRWYsbUJBQWUsSUFGQTtBQUdmLFdBQU8sOEVBSFE7QUFJZixjQUFVLEtBSks7QUFLZixlQUFXO0FBQ1QseUJBQW1CLDBCQURWO0FBRVQsd0JBQWtCO0FBRlQ7QUFMSSxHQUFqQjtBQVdBeEUsR0FBQyxDQUFDeUUsSUFBRixDQUFPRCxRQUFQLEVBQWlCRSxJQUFqQixDQUFzQixVQUFVQyxRQUFWLEVBQW9CO0FBQ3hDO0FBQ0EsUUFBSUMsVUFBVSxHQUFHRCxRQUFRLENBQUNFLFFBQVQsQ0FBa0JDLEdBQW5DO0FBRUEsUUFBSUMsVUFBVSxHQUFHLENBQUVULFFBQVEsR0FBRyxJQUFaLEdBQW9CTSxVQUFyQixFQUFpQ0wsT0FBakMsQ0FBeUMsQ0FBekMsQ0FBakI7QUFDQSxRQUFJUyxZQUFZLEdBQUcsQ0FBRVYsUUFBUSxHQUFHLElBQVosR0FBb0JNLFVBQXJCLEVBQWlDTCxPQUFqQyxDQUF5QyxDQUF6QyxDQUFuQjtBQUdBSCxpQkFBYSxDQUFDOUQsSUFBZCxDQUFtQixNQUFJeUUsVUFBSixHQUFlLGdCQUFsQztBQUNBVixtQkFBZSxDQUFDL0QsSUFBaEIsQ0FBcUIsTUFBSTBFLFlBQUosR0FBaUIsZ0JBQXRDO0FBQ0QsR0FWRDtBQVlELENBbENNLEM7Ozs7Ozs7Ozs7OztBQzdwQlA7QUFBQTtBQUFBO0FBZUEzQyxNQUFNLENBQUM0QyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFXO0FBQ3ZDO0FBQ0FwRCw2REFBUztBQUNUSSxpRUFBYTtBQUNidkIsaUVBQWE7QUFDYlgsK0RBQVc7QUFDWG1ELDhEQUFVO0FBQ1ZLLDZEQUFTLEdBUDhCLENBUXZDOztBQUNBVSxnRUFBWSxHQVQyQixDQVV2Qzs7QUFFRixNQUFJakUsQ0FBQyxDQUFDcUMsTUFBRCxDQUFELENBQVVWLEtBQVYsTUFBcUIsSUFBekIsRUFBK0IsQ0FFOUI7QUFFRixDQWhCRDtBQWtCQVUsTUFBTSxDQUFDNEMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVyxDQUU1QyxDQUZELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvd2luZG93TG9hZC5qcyc7IiwiaW1wb3J0IHtcbiAgbWVudVRvZ2dsZSxcbiAgc21vb3RoU2Nyb2xsaW5nLFxufSBmcm9tICcuL2luZGV4LmpzJ1xuXG5leHBvcnQgbGV0IGNsaWNrRXZlbnRzID0gKCkgPT4ge1xuICBcbiAgLy8gTW9iaWxlIE5hdiBDbGljayBFdmVudFxuICAvLyBsZXQgbWVudVRvZ2dsZVRMID0gbWVudVRvZ2dsZSgpO1xuICAvLyBtZW51VG9nZ2xlVEwucmV2ZXJzZWQodHJ1ZSk7XG4gIC8vICQoJy5tZW51VG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7ICBcbiAgLy8gICBpZiAobWVudVRvZ2dsZVRMLnJldmVyc2VkKCkpIHtcbiAgLy8gICAgIG1lbnVUb2dnbGVUTC5wbGF5KCk7XG4gIC8vICAgICBnc2FwLnNldCgkKCcud3JhcHBlcicpLCB7aGVpZ2h0OicxMDAlJywgb3ZlcmZsb3c6J2hpZGRlbid9KTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgZ3NhcC5zZXQoJCgnLndyYXBwZXInKSwge2hlaWdodDonYXV0bycsIG92ZXJmbG93Oid2aXNpYmxlJ30pO1xuICAvLyAgICAgbWVudVRvZ2dsZVRMLnJldmVyc2UoKTtcbiAgLy8gICB9XG5cdC8vIH0pO1xuXG4gIC8vICQoJyNtaW50YnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgIC8vIGxldCBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKS5tYXRjaGVzO1xuXG4gICAgLy8gaWYgKGlzTW9iaWxlKSB7XG4gICAgLy8gICBhbGVydCgnVW5mb3J0dW5hdGVseSB5b3UgY2FuIG9ubHkgYnV5IGEgc3F1YXJlIG9uIGEgY29tcHV0ZXIuJyk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGFsZXJ0KCdFdmVudHVhbGx5IE1pbnQnKTtcbiAgICAvLyB9XG4gICAgXG4gICAgXG4gIC8vIH0pOyAvLyBPbiBDbGljayBQb3J0aW9uXG5cblxuXG4kKCcjbWludFBsdXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgbGV0IGN1cnJlbnRDb3VudCA9ICQoJyNtaW50YnV0dG9uJykuYXR0cignZGF0YS1taW50LWNvdW50Jyk7XG4gIGlmIChjdXJyZW50Q291bnQgPCA1KSB7XG4gICAgbGV0IG5ld0NvdW50ID0gcGFyc2VJbnQoY3VycmVudENvdW50KSArIDE7XG4gICAgJCgnI21pbnRidXR0b24nKS5hdHRyKCdkYXRhLW1pbnQtY291bnQnLCBuZXdDb3VudCk7XG4gICAgJCgnI21pbnROdW1iZXInKS5odG1sKG5ld0NvdW50KTtcbiAgICAkKCcjbWludENvc3QnKS5odG1sKG5ld0NvdW50KjAuMDIpO1xuICAgIC8vIGFsZXJ0KG5ld0NvdW50KTtcbiAgfSBcbn0pXG5cbiQoJyNtaW50TWludXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgbGV0IGN1cnJlbnRDb3VudCA9ICQoJyNtaW50YnV0dG9uJykuYXR0cignZGF0YS1taW50LWNvdW50Jyk7XG4gIGlmIChjdXJyZW50Q291bnQgPiAxKSB7XG4gICAgbGV0IG5ld0NvdW50ID0gcGFyc2VJbnQoY3VycmVudENvdW50KSAtIDE7XG4gICAgJCgnI21pbnRidXR0b24nKS5hdHRyKCdkYXRhLW1pbnQtY291bnQnLCBuZXdDb3VudCk7XG4gICAgJCgnI21pbnROdW1iZXInKS5odG1sKG5ld0NvdW50KTtcbiAgICAkKCcjbWludENvc3QnKS5odG1sKG5ld0NvdW50KjAuMDIpO1xuICAgIC8vIGFsZXJ0KG5ld0NvdW50KTtcbiAgfSBcbn0pXG5cblxuXG4gIC8vICQoJyNsb2FkLW1ldGFtYXNrLXNjcmlwdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIC8vICAgLy9Db25uZWN0IG1ldGFtYXNrIHRvIG91ciBzaXRlLiBHZXQgdGhlIHVzZXIncyBhZGRyZXNzLlxuICAvLyAgIHZhciBhY2NvdW50ID0gbnVsbDtcbiAgLy8gICB2YXIgY29udHJhY3QgPSBudWxsO1xuICAvLyAgIGNvbnN0IEFCSSA9IFwiXCI7XG4gIC8vICAgY29uc3QgQUREUkVTUyA9IFwiXCI7XG4gIC8vICAgKGFzeW5jICgpID0+e1xuICAvLyAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKXtcbiAgLy8gICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5zZW5kKCdldGhfcmVxdWVzdEFjY291bnRzJyk7XG4gIC8vICAgICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhyZXVtKTtcblxuICAvLyAgICAgICAgICAgdmFyIGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgLy8gICAgICAgICAgIGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgLy8gICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWxsZXQtYWRkcmVzcycpLnRleHRDb250ZW50ID0gYWNjb3VudDtcblxuICAvLyAgICAgICAgICAgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcbiAgLy8gICAgICAgICAgIHVwZGF0ZUN1cnJlbnRDb3VudCgpO1xuICAvLyAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luY3JlYXNlLWNvdW50Jykub25jbGljayA9ICgpID0+IHtcbiAgLy8gICAgICAgICAgICAgICBpbmNyZWFzZUN1cnJlbnRDb3VudCgpO1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICB9XG4gIC8vICAgfSkoKTtcbiAgLy8gfSk7XG5cbiAgJCgnYVtocmVmXj1cIiNcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdoYXNoIGl0IG91dCcpO1xuICAgIHNtb290aFNjcm9sbGluZygkKHRoaXMpKTtcbiAgfSk7XG59IiwiZXhwb3J0IGxldCBnc2FwUmVnaXN0ZXJzID0gKCkgPT4ge1xuICAvLyBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKTtcbn0iLCJleHBvcnQge1xuICBwcmVMb2FkZXIsXG4gIGV4dGVybmFsTGlua3MsXG4gIHNtb290aFNjcm9sbGluZyxcbiAgbW9iaWxlTmF2U2V0dXAsXG4gIGZpZWxkU2V0dXAsXG4gIHRpY2tlclJ1bixcbiAgbWludEJ1dHRvbixcbiAgd2FsbGV0QnV0dG9uLFxuICBjYWxjV2lubmluZ3MsXG59IGZyb20gJy4vcGFnZVNldHVwLmpzJ1xuXG5leHBvcnQge1xuICBtZW51VG9nZ2xlXG59IGZyb20gJy4vbWVudVRvZ2dsZS5qcydcblxuZXhwb3J0IHtcbiAgZ3NhcFJlZ2lzdGVyc1xufSBmcm9tICcuL2dzYXBSZWdpc3RlcnMuanMnXG5cbmV4cG9ydCB7XG4gIGNsaWNrRXZlbnRzLFxufSBmcm9tICcuL2NsaWNrRXZlbnRzLmpzJyIsImV4cG9ydCBsZXQgbWVudVRvZ2dsZSA9ICgpID0+IHtcblx0bGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuXHRcdHBhdXNlZDp0cnVlLFxuXHRcdGRlZmF1bHRzOiB7XG5cdFx0XHRlYXNlOiAnY2lyYy5vdXQoKScsXG5cdFx0XHRkdXJhdGlvbjowLjMsXG5cdFx0fVxuXHR9KTtcblxuXHR0bC50bygnLm1haW4tbmF2Jywge2R1cmF0aW9uOjAuMywgbGVmdDonMCUnfSwgJ21lbnVPcGVuJyk7XG5cdHRsLnRvKCduYXYgYScsIHtvcGFjaXR5OjEsIHg6JzAlJywgc3RhZ2dlcjoge2Ftb3VudDowLjF9fSwgJ21lbnVPcGVuKz0wLjEnKTtcblx0dGwudG8oJy5oYW1Ub3AnLCB7cm90YXRpb246LTMxNSx4OjcgLHk6Mywgd2lkdGg6MTAsIHRyYW5zZm9ybU9yaWdpbjonNTAlIDUwJSd9LCAnbWVudU9wZW4nKTtcblx0dGwudG8oJy5oYW1NaWQnLCB7eDotNCwgd2lkdGg6MTh9LCAnbWVudU9wZW4nKTtcblx0dGwudG8oJy5oYW1Cb3QnLCB7cm90YXRpb246MzE1LCB4OjcsIHk6LTMsIHdpZHRoOjEwLCB0cmFuc2Zvcm1PcmlnaW46JzUwJSA1MCUnfSwgJ21lbnVPcGVuJyk7XG5cblx0cmV0dXJuIHRsO1xufSIsImV4cG9ydCBsZXQgcHJlTG9hZGVyID0gKCkgPT4ge1xuICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgZHVyYXRpb246MC4wNSxcbiAgICBlYXNlOidwb3dlcjQub3V0JyxcbiAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgJCgnI3ByZWxvYWRlcicpLnJlbW92ZSgpO1xuICAgIH1cbiAgfSlcbiAgdGwudG8oJyNwcmVsb2FkZXIgc3ZnJywge3NjYWxlOjB9KVxuXHR0bC50bygnI3ByZWxvYWRlcicsIHtvcGFjaXR5OjB9KVxufVxuXG5leHBvcnQgbGV0IGV4dGVybmFsTGlua3M9ICgpID0+IHtcblx0Ly8gY29uc29sZS5sb2coJ2V4dGVybmFsIGxpbmsnKTtcbiAgJCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgbGV0IGEgPSBuZXcgUmVnRXhwKCcvJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy8nKTtcbiAgICBpZighYS50ZXN0KHRoaXMuaHJlZikpIHtcbiAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ19ibGFuaycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGxldCBzbW9vdGhTY3JvbGxpbmcgPSAodGhlTGluaykgPT4ge1xuICBcbiAgbGV0IHRhcmdldCA9ICQodGhlTGluaykuYXR0cignaHJlZicpO1xuICBsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7IFxuICBnc2FwLnRvKHdpbmRvdywge2R1cmF0aW9uOjEsIFxuICAgIHNjcm9sbFRvOntcbiAgICAgIHk6dGFyZ2V0LCBcbiAgICAgIC8vIEFjdGl2YXRlIGlmIEhlYWRlciBJcyBGaXhlZFxuICAgICAgLy8gb2Zmc2V0WTpoZWFkZXJIZWlnaHRcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBsZXQgZmllbGRTZXR1cCA9ICgpID0+IHtcblxuICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICByZXBlYXQ6LTEsXG4gICAgZGVmYXVsdHM6e1xuICAgICAgZHVyYXRpb246MTAsXG4gICAgICBlYXNlOlwibm9uZVwiLFxuICAgIH1cbiAgfSlcblxuICAvLyBHcmFzcyBNb3ZlXG4gIC8vIDE0MDAgPSBvZmYgc2NyZWVuXG4gIC8vIDExMjAgPSBlbmQgb2Ygc2NyZWVuXG4gIGdzYXAuc2V0KCcuZ3Jhc3NTdHJpcGUxJywge3g6LTU2MH0pO1xuICBnc2FwLnNldCgnLmdyYXNzU3RyaXBlMicsIHt4OjB9KTtcbiAgZ3NhcC5zZXQoJy5ncmFzc1N0cmlwZTMnLCB7eDo1NjB9KTtcbiAgZ3NhcC5zZXQoJy5ncmFzc1N0cmlwZTQnLCB7eDoxMTIwfSk7XG5cbiAgdGwudG8oJy5ncmFzc1N0cmlwZTEnLCB7eDowfSwgXCJncmFzc1JvbGxcIik7XG4gIHRsLnRvKCcuZ3Jhc3NTdHJpcGUyJywge3g6NTYwfSwgXCJncmFzc1JvbGxcIik7XG4gIHRsLnRvKCcuZ3Jhc3NTdHJpcGUzJywge3g6MTEyMH0sIFwiZ3Jhc3NSb2xsXCIpO1xuICB0bC50bygnLmdyYXNzU3RyaXBlNCcsIHt4OjE2ODB9LCBcImdyYXNzUm9sbFwiKTtcblxuICAvLyBDbG9jayBCbGlua1xuICBnc2FwLnRvKCcuY2xvY2tMaW5lIHNwYW4nLCB7ZHVyYXRpb246LjA1LCBvcGFjaXR5OjAsIHJlcGVhdDotMSwgcmVwZWF0RGVsYXk6LjUsIHlveW86dHJ1ZSwgZWFzZTonbm9uZSd9KTtcbn1cblxuZXhwb3J0IGxldCB0aWNrZXJSdW4gPSAoKSA9PiB7XG5cbiAgJCgnLnNpbmdsZS10aWNrZXItdGV4dCcpLndyYXBBbGwoJzxzcGFuIGNsYXNzPVwidGlja2VyLWl0ZW1zXCI+Jyk7XG4gIHZhciB0aWNrZXJXaWR0aCA9ICQoJy50aGUtdGlja2VyLXNlY3Rpb24nKS53aWR0aCgpO1xuICB2YXIgc3BhbldpZHRoID0gJCgnLnRoZS10aWNrZXItc2VjdGlvbiBzcGFuJykud2lkdGgoKTtcbiAgJCgnLnRoZS10aWNrZXItc2VjdGlvbiBzcGFuJykuY2xvbmUoKS5hcHBlbmRUbygnLnRoZS10aWNrZXItc2VjdGlvbicpO1xuICAkKCcudGhlLXRpY2tlci1zZWN0aW9uIHNwYW4nKS53cmFwQWxsKCc8c3BhbiBjbGFzcz1cInRpY2tlci13cmFwcGVyXCI+Jyk7XG4gICAgXG4gIGdzYXAuc2V0KCAnLnRpY2tlci13cmFwcGVyJyAsIHt4OiB0aWNrZXJXaWR0aCB9ICk7XG4gIHZhciBzcGVlZCA9IDIwMDtcbiAgdmFyIGluaXREdXJhdGlvbiA9IHRpY2tlcldpZHRoL3NwZWVkO1xuICB2YXIgbG9vcER1cmF0aW9uID0gc3BhbldpZHRoL3NwZWVkO1xuICB2YXIgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgZGVmYXVsdHM6e1xuICAgIGVhc2U6J25vbmUnXG4gIH1cbiAgfSk7XG4gIHRsLnRvKCcudGlja2VyLXdyYXBwZXInICwgaW5pdER1cmF0aW9uICwgeyB4OiAwfSApO1xuICB0bC50bygnLnRpY2tlci13cmFwcGVyJyAsIGxvb3BEdXJhdGlvbiAsIHsgeDogLXNwYW5XaWR0aCwgcmVwZWF0OiAtMSB9ICk7XG5cbn1cblxuXG5leHBvcnQgbGV0IG1pbnRCdXR0b24gPSAoKSA9PiB7XG4gICAgLy9Db25uZWN0IG1ldGFtYXNrIHRvIG91ciBzaXRlLiBHZXQgdGhlIHVzZXIncyBhZGRyZXNzLlxuXG4gIC8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbnRidXR0b24nKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIFxuICAvLyAgIHZhciBhbW91bnQgPSAxO1xuICAvLyAgIHZhciBhY2NvdW50ID0gbnVsbDtcbiAgLy8gICB2YXIgY29udHJhY3QgPSBudWxsO1xuICAvLyAgIGNvbnN0IEFCSSA9IFtcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJpbnB1dHNcIjogW10sXG4gIC8vICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxuICAvLyAgICAgICBcInR5cGVcIjogXCJjb25zdHJ1Y3RvclwiXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBcImFub255bW91c1wiOiBmYWxzZSxcbiAgLy8gICAgICAgXCJpbnB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW5kZXhlZFwiOiB0cnVlLFxuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJvd25lclwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImluZGV4ZWRcIjogdHJ1ZSxcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiYXBwcm92ZWRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbmRleGVkXCI6IHRydWUsXG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwiQXBwcm92YWxcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZXZlbnRcIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJhbm9ueW1vdXNcIjogZmFsc2UsXG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImluZGV4ZWRcIjogdHJ1ZSxcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwib3duZXJcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbmRleGVkXCI6IHRydWUsXG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIm9wZXJhdG9yXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW5kZXhlZFwiOiBmYWxzZSxcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiYXBwcm92ZWRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwiQXBwcm92YWxGb3JBbGxcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZXZlbnRcIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJhbm9ueW1vdXNcIjogZmFsc2UsXG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImluZGV4ZWRcIjogdHJ1ZSxcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwicHJldmlvdXNPd25lclwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImluZGV4ZWRcIjogdHJ1ZSxcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwibmV3T3duZXJcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwiT3duZXJzaGlwVHJhbnNmZXJyZWRcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZXZlbnRcIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJhbm9ueW1vdXNcIjogZmFsc2UsXG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImluZGV4ZWRcIjogdHJ1ZSxcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiZnJvbVwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImluZGV4ZWRcIjogdHJ1ZSxcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwidG9cIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbmRleGVkXCI6IHRydWUsXG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwiVHJhbnNmZXJcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZXZlbnRcIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJpbnB1dHNcIjogW10sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcIk1BWF9UT0tFTlNcIixcbiAgLy8gICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJpbnB1dHNcIjogW10sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcIlByb3ZlbmFuY2VIYXNoXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJzdHJpbmdcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxuICAvLyAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBcImlucHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwiU1FVQVJFX1BSSUNFXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIm51bVRva2Vuc1wiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBcIm5hbWVcIjogXCJTcXVhcmVNaW50XCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJwYXlhYmxlXCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcImFkZHlcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwiYWRkVG9HYW5nXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcInRvXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5JZFwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBcIm5hbWVcIjogXCJhcHByb3ZlXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIm93bmVyXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcImJhbGFuY2VPZlwiLFxuICAvLyAgICAgICBcIm91dHB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxuICAvLyAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBcImlucHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwiYmFzZUV4dGVuc2lvblwiLFxuICAvLyAgICAgICBcIm91dHB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwic3RyaW5nXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJpbnB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5JZFwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBcIm5hbWVcIjogXCJnZXRBcHByb3ZlZFwiLFxuICAvLyAgICAgICBcIm91dHB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxuICAvLyAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBcImlucHV0c1wiOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJvd25lclwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIm9wZXJhdG9yXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcImlzQXBwcm92ZWRGb3JBbGxcIixcbiAgLy8gICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImJvb2xcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJpbnB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiYWRkeVwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBcIm5hbWVcIjogXCJpc0luR2FuZ1wiLFxuICAvLyAgICAgICBcIm91dHB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJib29sXCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxuICAvLyAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBcImlucHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAvLyAgICAgICBcIm91dHB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwic3RyaW5nXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJpbnB1dHNcIjogW10sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcIm93bmVyXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwib3duZXJPZlwiLFxuICAvLyAgICAgICBcIm91dHB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxuICAvLyAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBcImlucHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwicmVub3VuY2VPd25lcnNoaXBcIixcbiAgLy8gICAgICAgXCJvdXRwdXRzXCI6IFtdLFxuICAvLyAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJpbnB1dHNcIjogW10sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcInJldmVhbGVkXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcInJveWFsdHlJbmZvXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJyZWNlaXZlclwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcInJveWFsdHlBbW91bnRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcImZyb21cIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJ0b1wiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwic2FmZVRyYW5zZmVyRnJvbVwiLFxuICAvLyAgICAgICBcIm91dHB1dHNcIjogW10sXG4gIC8vICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxuICAvLyAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBcImlucHV0c1wiOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwidG9cIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJ0b2tlbklkXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYnl0ZXNcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIl9kYXRhXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJieXRlc1wiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBcIm5hbWVcIjogXCJzYWZlVHJhbnNmZXJGcm9tXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIm9wZXJhdG9yXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiYXBwcm92ZWRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwic2V0QXBwcm92YWxGb3JBbGxcIixcbiAgLy8gICAgICAgXCJvdXRwdXRzXCI6IFtdLFxuICAvLyAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgLy8gICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgXCJpbnB1dHNcIjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYnl0ZXM0XCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJpbnRlcmZhY2VJZFwiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnl0ZXM0XCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcInN1cHBvcnRzSW50ZXJmYWNlXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtdLFxuICAvLyAgICAgICBcIm5hbWVcIjogXCJzeW1ib2xcIixcbiAgLy8gICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInN0cmluZ1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwidG9rZW5VUklcIixcbiAgLy8gICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInN0cmluZ1wiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcImZyb21cIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogXCJ0b1wiLFxuICAvLyAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcbiAgLy8gICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgXCJuYW1lXCI6IFwidHJhbnNmZXJGcm9tXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBcIm5ld093bmVyXCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcInRyYW5zZmVyT3duZXJzaGlwXCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3MgcGF5YWJsZVwiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwid2FsbGV0XCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IFwiYW1vdW50XCIsXG4gIC8vICAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIF0sXG4gIC8vICAgICAgIFwibmFtZVwiOiBcIndpdGhkcmF3XCIsXG4gIC8vICAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgLy8gICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJwYXlhYmxlXCIsXG4gIC8vICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgLy8gICAgIH1cbiAgLy8gICBdO1xuXG4gIC8vIGNvbnN0IEFERFJFU1MgPSBcIjB4ZGQ1YmFjZTk1MjI5OTFmZDFlNTI0MDQ2MTlhNDg3MmQ4MzhjZjQxMFwiO1xuICAvLyAgIChhc3luYyAoKSA9PntcbiAgLy8gICAgIGlmICh3aW5kb3cuZXRoZXJldW0pe1xuICAvLyAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uc2VuZCgnZXRoX3JlcXVlc3RBY2NvdW50cycpO1xuICAvLyAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG5cbiAgLy8gICAgICAgdmFyIGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgLy8gICAgICAgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgIFxuICAvLyAgICAgICBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xuXG4gICAgICAgICAgXG4gIC8vICAgICAgIHZhciBhbW91bnQgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWludGJ1dHRvbicpLmdldEF0dHJpYnV0ZSgnZGF0YS1taW50LWNvdW50JykpO1xuICAvLyAgICAgICB2YXIgcHJpY2UgPSAyMDAwMDAwMDAwMDAwMDAwMDtcbiAgLy8gICAgICAgY29uc29sZS5sb2coYW1vdW50KTtcbiAgLy8gICAgICAgY29udHJhY3QubWV0aG9kcy5TcXVhcmVNaW50KGFtb3VudCkuc2VuZCh7ZnJvbTogYWNjb3VudCwgdmFsdWU6IHByaWNlICogYW1vdW50fSk7IC8vIG1ha2Ugc3VyZSB0aGlzIG1hdGNoZXMgb25lIGZvciBvbmUgd2l0aCBhY3R1YWwgbWludCBwcmljZSBpbiB3ZWkgb24gY29udHJhY3Qgb3IgaXQgd29uJ3Qgd29yay5cbiAgICBcbiAgLy8gICAgIH1cbiAgLy8gICB9KSgpO1xuICAvLyB9XG5cbn1cblxuXG5leHBvcnQgbGV0IGNhbGNXaW5uaW5ncyA9ICgpID0+IHtcblxuICBsZXQgZmlmdGVlblBlckVUSCA9ICQoJy5maWZ0ZWVuUGVyY2VudFdpbm5lckVUSCcpO1xuICBsZXQgZm9ydHlGaXZlUGVyRVRIID0gJCgnLmZvcnR5Rml2ZVBlcmNlbnRXaW5uZXJFVEgnKTtcbiAgbGV0IGZpZnRlZW5QZXJVU0QgPSAkKCcuZmlmdGVlblBlcmNlbnRXaW5uZXJVU0QnKTtcbiAgbGV0IGZvcnR5Rml2ZVBlclVTRCA9ICQoJy5mb3J0eUZpdmVQZXJjZW50V2lubmVyVVNEJyk7XG4gIGxldCB0b3RhbFBvdCA9IDIuMDc1MlxuXG4gIGZpZnRlZW5QZXJFVEguaHRtbCgodG90YWxQb3QgKiAwLjE1KS50b0ZpeGVkKDQpICtcIiBFVEhcIik7XG4gIGZvcnR5Rml2ZVBlckVUSC5odG1sKCh0b3RhbFBvdCAqIDAuNDUpLnRvRml4ZWQoNCkgK1wiIEVUSFwiKTtcbiAgXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIFwiYXN5bmNcIjogdHJ1ZSxcbiAgICBcImNyb3NzRG9tYWluXCI6IHRydWUsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2NvaW5nZWNrby5wLnJhcGlkYXBpLmNvbS9zaW1wbGUvcHJpY2U/aWRzPWV0aGVyZXVtJnZzX2N1cnJlbmNpZXM9dXNkXCIsXG4gICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICBcImhlYWRlcnNcIjoge1xuICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJjb2luZ2Vja28ucC5yYXBpZGFwaS5jb21cIixcbiAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogXCI2ZjUxZDNmN2FhbXNoOTRhZmQ2NjQxMzNjMjdkcDFhM2Y3NGpzbjQxZTQ3NjdiYTNlOVwiXG4gICAgfVxuICB9O1xuICBcbiAgJC5hamF4KHNldHRpbmdzKS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmV0aGVyZXVtLnVzZCk7XG4gICAgbGV0IGN1cnJlbnRVU0QgPSByZXNwb25zZS5ldGhlcmV1bS51c2RcblxuICAgIGxldCBmaWZ0ZWVuVVNEID0gKCh0b3RhbFBvdCAqIDAuMTUpICogY3VycmVudFVTRCkudG9GaXhlZCgyKTtcbiAgICBsZXQgZm9ydHlGaXZlVVNEID0gKCh0b3RhbFBvdCAqIDAuNDUpICogY3VycmVudFVTRCkudG9GaXhlZCgyKTtcblxuXG4gICAgZmlmdGVlblBlclVTRC5odG1sKFwiJFwiK2ZpZnRlZW5VU0QrXCI8c3Bhbj4qPC9zcGFuPlwiKTtcbiAgICBmb3J0eUZpdmVQZXJVU0QuaHRtbChcIiRcIitmb3J0eUZpdmVVU0QrXCI8c3Bhbj4qPC9zcGFuPlwiKTtcbiAgfSk7XG4gIFxufVxuXG5cblxuIiwiaW1wb3J0IHsgXG4gIHByZUxvYWRlcixcbiAgZXh0ZXJuYWxMaW5rcyxcbiAgZ3NhcFJlZ2lzdGVycyxcbiAgY2xpY2tFdmVudHMsXG4gIGZpZWxkU2V0dXAsXG4gIHRpY2tlclJ1bixcbiAgbWludEJ1dHRvbixcbiAgd2FsbGV0QnV0dG9uLFxuICBjYWxjV2lubmluZ3MsXG59IGZyb20gJy4vaW5kZXguanMnO1xuXG4gXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAvLyBTZXR1cCBCYXNpYyBGdW5jdGlvbmFsaXR5XG4gICAgcHJlTG9hZGVyKCk7XG4gICAgZXh0ZXJuYWxMaW5rcygpO1xuICAgIGdzYXBSZWdpc3RlcnMoKTtcbiAgICBjbGlja0V2ZW50cygpO1xuICAgIGZpZWxkU2V0dXAoKTtcbiAgICB0aWNrZXJSdW4oKTtcbiAgICAvLyBtaW50QnV0dG9uKCk7XG4gICAgY2FsY1dpbm5pbmdzKCk7XG4gICAgLy8gd2FsbGV0QnV0dG9uKCk7XG5cbiAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcblxuICB9XG4gIFxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXG59KTsiXSwic291cmNlUm9vdCI6IiJ9