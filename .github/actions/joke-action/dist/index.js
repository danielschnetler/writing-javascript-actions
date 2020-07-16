module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(939);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 180:
/***/ (function(module) {

module.exports = eval("require")("request-promise");


/***/ }),

/***/ 227:
/***/ (function(module, __unusedexports, __webpack_require__) {

const request = __webpack_require__(180);

const options = {
	method: "GET",
	uri: "https://icanhazdadjoke.com/",
	headers: {
		Accept: "application/json",
		"User-Agent": "Writing JavaScript action GitHub Learning Lab course. Visit lab.github.com or contact us."
	},
	json: true
};

async function getJoke() {
	const res = await request(options);
	return res.joke;
}

module.exports = getJoke;


/***/ }),

/***/ 250:
/***/ (function(module) {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 939:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const getJoke = __webpack_require__(227);
const core = __webpack_require__(250);

async function run() {
	const joke = await getJoke();
	console.log(joke);
	core.setOutput("joke-output", joke);
}

run();


/***/ })

/******/ });