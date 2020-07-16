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
/******/ 		return __webpack_require__(416);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 250:
/***/ (function(module) {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 416:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(250)
const github = __webpack_require__(938)

async function run() {
	try {
		const issueTitle = core.getInput("issue-title");
		const jokeBody = core.getInput("joke");
		const token = core.getInput("repo-token");

		const octokit = github.getOctokit(token);

		const newIssue = await octokit.issues.create({
			repo: github.context.repo.repo,
			owner: github.context.repo.owner,
			title: issueTitle,
			body: jokeBody
		});
	} catch (err) {
		core.setFailed(err.message);
	}
}

run()


/***/ }),

/***/ 938:
/***/ (function(module) {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ });