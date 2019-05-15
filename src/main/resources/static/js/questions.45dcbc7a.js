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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 505);
/******/ })
/************************************************************************/
/******/ ({

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var questionArr = [{
  name: '订购渠道',
  content: '票牛官网网站订购，“票牛网”手机App，“小程序”搜索“票牛”，“票牛票务平台“'
}, {
  name: '演出状态',
  content: '<p>\u9884\u552E\u4E2D\uFF1A\u5728\u6F14\u51FA\u5C1A\u672A\u5F00\u7968\u524D\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u7968\u725B\u7F51\u652F\u4ED8\u9884\u5B9A\uFF0C\u5E73\u53F0\u5356\u5BB6\u5C06\u5728\u4E3B\u529E\u65B9\u5F00\u7968\u65F6\u7EDF\u4E00\u5B89\u6392\u914D\u9001\u3002</p>\n              <p>\u552E\u7968\u4E2D\uFF1A\u5728\u6F14\u51FA\u5F00\u7968\u540E\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u7968\u725B\u7F51\u5728\u7EBF\u652F\u4ED8\u8D2D\u4E70\uFF0C\u5E73\u53F0\u5356\u5BB6\u5C06\u6309\u9884\u8BA1\u65F6\u95F4\u53D1\u8D27\uFF0C\u4E34\u8FD1\u6F14\u51FA\u652F\u6301\u73B0\u573A\u53D6\u7968\u3002</p>'
}, {
  name: '如何订购',
  content: '<p>\u7F51\u7AD9\u8BA2\u8D2D\uFF1A\u60A8\u53EF\u4EE5\u767B\u5F55\u7968\u725B\u7968\u52A1\u5B98\u65B9\u7F51\u7AD9https://www.piaoniu.com\uFF0C\u67E5\u627E\u60A8\u559C\u6B22\u7684\u6F14\u51FA\u5E76\u76F4\u63A5\u8FDB\u884C\u8D2D\u4E70\u3002</p>\n\n              <p>APP\u8BA2\u8D2D\uFF1A\u60A8\u53EF\u4EE5\u5728\u624B\u673A\u5E94\u7528\u5546\u5E97\u4E0B\u8F7D\u5E76\u5B89\u88C5\u201C\u7968\u725B\u7F51\u201D\u624B\u673AApp\uFF0C\u83B7\u5F97\u66F4\u591A\u7CBE\u5F69\u7684\u6F14\u51FA\u4FE1\u606F\u53CA\u8D2D\u7968\u670D\u52A1\u3002</p>\n              \n              <p>\u5FAE\u4FE1\u8BA2\u8D2D\uFF1A\u60A8\u53EF\u4EE5\u901A\u8FC7\u5FAE\u4FE1\u67E5\u627E\u5E76\u5173\u6CE8\u516C\u4F17\u53F7\u201C\u7968\u725B\u7968\u52A1\u5E73\u53F0\u201D\uFF0C\u76F4\u63A5\u70B9\u51FB\u516C\u4F17\u53F7\u83DC\u5355\u4E2D\u7684\u201C\u6F14\u51FA\u8D2D\u7968\u201D\u67E5\u627E\u60A8\u559C\u6B22\u7684\u6F14\u51FA\u8FDB\u884C\u8D2D\u4E70\u3002</p>\n              \n              <p>\u5C0F\u7A0B\u5E8F\u8BA2\u8D2D\uFF1A\u60A8\u53EF\u4EE5\u901A\u8FC7\u5FAE\u4FE1\u53D1\u73B0\u201C\u5C0F\u7A0B\u5E8F\u201D\u641C\u7D22\u201C\u7968\u725B\u201D\u67E5\u627E\u60A8\u559C\u6B22\u7684\u6F14\u51FA\u8FDB\u884C\u8D2D\u4E70\u3002</p>'
}, {
  name: '价格说明',
  content: '<p>\u7968\u725B\u7F51\u6240\u552E\u7968\u54C1\u7531\u7B2C\u4E09\u65B9\u5B9A\u4EF7\u4E0E\u4F9B\u5E94\uFF0C\u5E73\u53F0\u672C\u8EAB\u4E0D\u76F4\u63A5\u5BF9\u7968\u54C1\u5B9A\u4EF7\uFF0C\u6211\u4EEC\u901A\u8FC7\u201C\u591A\u6E20\u9053\u4F9B\u7968\u7ADE\u4EF7\u673A\u5236\u201D\uFF0C\u81EA\u52A8\u5BF9\u63A5\u7968\u4EF7\u6700\u4F4E\u7684\u7968\u6E90\uFF0C\u56E0\u6B64\u5927\u90E8\u5206\u6F14\u51FA\u6709\u6298\u6263\uFF0C\u552E\u4EF7\u4F4E\u4E8E\u7968\u9762\uFF1B\u5C11\u90E8\u5206\u70ED\u95E8\u6F14\u51FA\u4EF7\u683C\u9AD8\u4E8E\u7968\u9762\uFF0C\u4F46\u80FD\u8BA9\u7528\u6237\u4E70\u5230\u7968\uFF0C\u5EFA\u8BAE\u8BF7\u60A8\u786E\u8BA4\u540E\u518D\u8FDB\u884C\u8D2D\u4E70\n\u6570\u91CF\u4E0E\u56E2\u8D2D.</p>\n  <p>\u4E3A\u4E86\u675C\u7EDD\u4E2A\u4EBA\u5229\u7528\u7968\u725B\u7F51\u8FDB\u884C\u62A2\u8D2D\u5012\u5356\u884C\u4E3A\uFF0C\u7968\u725B\u7F51\u7EBF\u4E0A\u8D2D\u7968\u5B9E\u884C2\u5F20\u81F36\u5F20\u7684\u9650\u8D2D\uFF08\u8BE6\u89C1\u5177\u4F53\u6F14\u51FA\u8BE6\u60C5\u4E0E\u7968\u9762\u5907\u6CE8\uFF09\u3002\u5BF9\u4E8E\u4E00\u6B21\u8BA2\u8D2D6\u5F20\u4EE5\u4E0A\u7684\u56E2\u8D2D\u7528\u6237\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u7968\u725B\u7F51\u56E2\u8D2D\u70ED\u7EBF021-66790680-608\uFF08\u4E0A\u6D77\uFF09010-85654561\uFF08\u5317\u4EAC\uFF09</p>'
}, {
  name: '关于座位',
  content: '\u7968\u725B\u7F51\u7684\u90E8\u5206\u6F14\u51FA\u63D0\u4F9B\u5728\u7EBF\u9009\u5EA7\uFF0C\u70B9\u51FB\u201C\u9009\u5EA7\u8D2D\u7968\u201D\u53EF\u8FDB\u5165\u9009\u5EA7\u6A21\u5F0F\u3002\u5982\u4E0D\u63D0\u4F9B\u5728\u7EBF\u9009\u5EA7\u7684\u573A\u6B21\uFF0C\u6211\u4EEC\u5C06\u6839\u636E\u60A8\u6240\u9009\u7968\u9762\u63D0\u4F9B\u76F8\u5E94\u7684\u968F\u673A\u5EA7\u4F4D\u8FDB\u884C\u51FA\u7968\u3002'
}, {
  name: '顺丰配送',
  content: '\u7528\u6237\u5728\u7968\u725B\u7F51\u8D2D\u7968\u65F6\u53EF\u9009\u62E9\u5FEB\u9012\u914D\u9001\u3002\u5FEB\u9012\u53D1\u51FA\u540E\uFF0C\u7528\u6237\u53EF\u5728\u8BA2\u5355\u8BE6\u60C5\u4E2D\u67E5\u770B\u7269\u6D41\u4FE1\u606F\u3002\u63D0\u4EA4\u8BA2\u5355\u65F6\u8BF7\u4ED4\u7EC6\u786E\u8BA4\u6536\u8D27\u4EBA\u4FE1\u606F\uFF0C\u907F\u514D\u56E0\u4E2A\u4EBA\u758F\u5931\u5FEB\u9012\u65E0\u6CD5\u53CA\u65F6\u9001\u8FBE\u3002'
}, {
  name: '现场自取',
  content: '\u5982\u7528\u6237\u9009\u62E9\u73B0\u573A\u53D6\u7968\uFF0C\u6211\u4EEC\u5C06\u5728\u6F14\u51FA\u5F00\u6F14\u524D\u5C06\u53D6\u7968\u8054\u7CFB\u4FE1\u606F\u53D1\u9001\u81F3\u8BA2\u5355\u8054\u7CFB\u624B\u673A\u3002\u7528\u6237\u53EF\u51ED\u77ED\u4FE1\u5185\u5BB9\u5728\u6F14\u51FA\u5F00\u573A\u524D\u5230\u73B0\u573A\u53D6\u7968\u70B9\u53D6\u7968\u5165\u573A\uFF0C\u5EFA\u8BAE\u63D0\u524D\u4E00\u5C0F\u65F6\u53BB\u73B0\u573A\u4EE5\u514D\u803D\u8BEF\u89C2\u6F14\u3002'
}, {
  name: '上门自取',
  content: '\u5982\u7528\u6237\u9009\u62E9\u4E0A\u95E8\u81EA\u53D6\uFF0C\u6211\u4EEC\u5C06\u5728\u6210\u529F\u914D\u7968\u540E\u53D1\u9001\u4E0A\u95E8\u81EA\u53D6\u77ED\u4FE1\uFF0C\u7528\u6237\u53EF\u51ED\u77ED\u4FE1\u4E8E\u53D6\u7968\u5730\u70B9\uFF08\u4EE5\u8BA2\u5355\u4FE1\u606F\u4E3A\u51C6\uFF09\u53D6\u7968\u3002\n'
}, {
  name: '电子票',
  content: '\u7528\u6237\u4E0B\u5355\u652F\u4ED8\u6210\u529F\u540E\uFF0C\u51ED\u77ED\u4FE1\u5165\u573A\uFF0C\u6216\u5230\u6F14\u51FA\u5730\u70B9\u5151\u6362\u7EB8\u8D28\u7968\u540E\u5165\u573A\uFF0C\u5177\u4F53\u4EE5\u6F14\u51FA\u8BE6\u60C5\u5185\u5BB9\u4E3A\u51C6\uFF0C\u7535\u5B50\u7968\u4E00\u822C\u4E0B\u5355\u540E\u4E0D\u652F\u6301\u65E0\u7406\u7531\u9000\u6362\uFF0C\u5728\u4E0B\u5355\u9875\u9762\u4F1A\u6709\u76F8\u5173\u63D0\u793A\u5185\u5BB9\uFF1A\u7279\u6B8A\u9879\u76EE\u4E0D\u652F\u6301\u9000\u6362\u3002'
}, {
  name: '在线支付',
  content: '<p>\u652F\u4ED8\u5B9D\u652F\u4ED8\uFF1A\u7968\u725B\u7F51\u7F51\u7AD9\u53CAAPP\u8D2D\u7968\u652F\u6301\u652F\u4ED8\u5B9D\u652F\u4ED8\u3002</p>\n              <p>\u5FAE\u4FE1\u652F\u4ED8\uFF1A\u7968\u725B\u7F51\u5FAE\u4FE1\u516C\u4F17\u53F7\u3001\u7F51\u7AD9\u53CAAPP\u8D2D\u7968\u5747\u652F\u6301\u5FAE\u4FE1\u652F\u4ED8\u3002</p>\n              '
}, {
  name: '花呗',
  content: '\u652F\u4ED8\u5FEB\u6377\uFF1A\u591A\u79CD\u652F\u4ED8\u65B9\u5F0F\uFF08\u652F\u4ED8\u5B9D\u3001\u5FAE\u4FE1\u3001\u82B1\u5457\u3001\u94F6\u884C\u5361\u652F\u4ED8)'
}, {
  name: '银行卡支付',
  content: '\u7968\u725B\u7F51\u7F51\u7AD9\u53CAAPP\u8D2D\u4E70\u5747\u652F\u6301\u94F6\u884C\u5361\u652F\u4ED8\u5B89\u5168\u4FDD\u969C \uFF08\u5176\u4E2D\u82B1\u5457\u652F\u4ED8\uFF0C\u4EC5\u9650\u4E0EAPP\u8D2D\u4E70\u4F7F\u7528\uFF09'
}, {
  name: '退换票说明',
  content: '<div class="title">\u4E00\u3001\u65E0\u7406\u7531\u9000\u6362\u7968\u54C1\u8BF4\u660E</div>\n              <p>\u6839\u636E\u300A\u7F51\u7EDC\u4EA4\u6613\u7BA1\u7406\u529E\u6CD5\u300B\u4E2D\u5173\u4E8E\uFF1A\u201C\u5176\u4ED6\u6839\u636E\u5546\u54C1\u6027\u8D28\u5E76\u7ECF\u6D88\u8D39\u8005\u5728\u8D2D\u4E70\u65F6\u786E\u8BA4\u4E0D\u5B9C\u9000\u8D27\u7684\u5546\u54C1\uFF0C\u4E0D\u9002\u7528\u65E0\u7406\u7531\u9000\u8D27\u3002\u201D\u7684\u89C4\u5B9A\uFF0C\u9274\u4E8E\u6587\u4F53\u6F14\u51FA\u7968\u54C1\u7279\u6B8A\u6027\uFF0C\u6F14\u51FA\u95E8\u7968\u4E3A\u8054\u7F51\u552E\u7968\uFF0C\u95E8\u7968\u548C\u5EA7\u4F4D\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u5177\u6709\u65F6\u6548\u6027\u3001\u552F\u4E00\u6027\u3001\u6570\u5B57\u5316\u7B49\u7279\u6B8A\u5C5E\u6027\uFF0C\u4E00\u65E6\u7968\u54C1\u552E\u51FA\uFF0C\u9664\u56E0\u4E0D\u53EF\u6297\u529B\u56E0\u7D20\u5BFC\u81F4\u6F14\u51FA\u53D6\u6D88\u6216\u5EF6\u671F\uFF0C\u5176\u4ED6\u8BA2\u5355\u4E0D\u652F\u6301\u65E0\u7406\u7531\u9000\u6362\uFF0C\u8BF7\u60A8\u5728\u8D2D\u4E70\u65F6\u52A1\u5FC5\u4ED4\u7EC6\u6838\u5BF9\u60A8\u7684\u8BA2\u5355\u4FE1\u606F\u5E76\u5BA1\u614E\u4E0B\u5355\u3002</p>\n              <div class="title">\u4E8C\u3001\u4E0D\u53EF\u6297\u529B\u56E0\u7D20</div>\n              <p>1\u3001\u56E0\u4E0D\u53EF\u6297\u529B\u56E0\u7D20\u5BFC\u81F4\u6F14\u51FA\u53D6\u6D88\u6216\u5EF6\u671F\uFF0C\u7968\u725B\u7F51\u4F1A\u4E3B\u52A8\u4E0E\u60A8\u786E\u8BA4\u53D8\u66F4\u6216\u9000\u6B3E\u4E8B\u5B9C\uFF0C\u4E0D\u6536\u53D6\u4EFB\u4F55\u624B\u7EED\u8D39\u3002</p>\n              <p>2\u3001\u529E\u7406\u9000\u6B3E\u6216\u53D8\u66F4\u8981\u6C42\u9700\u7B26\u5408\u65F6\u95F4\u89C4\u5B9A\uFF08\u4F9D\u636E\uFF1A\u4E3B\u529E\u65B9\u901A\u77E5\u7684\u56E0\u6F14\u51FA\u53D6\u6D88/\u5EF6\u671F\u5B89\u6392\u7684\u9000\u6B3E\u65F6\u95F4\u3001\u8F6C\u573A\u65F6\u95F4\u6BB5\uFF09\uFF0C\u5E76\u5C06\u7968\u54C1\u5B8C\u597D\u65E0\u635F\u9000\u56DE\u3002</p>\n              '
}, {
  name: '退款说明',
  content: '\u9000\u6B3E\u65F6\u95F4\u53CA\u9000\u6B3E\u65B9\u5F0F\n              <p>1\u3001\u672A\u51FA\u7968\u60C5\u51B5\u4E0B\u5BA2\u6237\u7533\u8BF7\u9000\u6B3E\uFF0C\u81EA\u53D7\u7406\u5BA2\u6237\u9000\u6B3E\u7533\u8BF7\u4E4B\u65E5\u8D77\uFF0C7\u4E2A\u5DE5\u4F5C\u65E5\u5185\u5C06\u6B3E\u9879\u539F\u8DEF\u9000\u56DE\u5230\u5BA2\u6237\u7684\u8D26\u6237\u4E2D\uFF1B</p>\n              <p>2\u3001\u5DF2\u51FA\u7968\u60C5\u51B5\u4E0B\u5BA2\u6237\u7533\u8BF7\u9000\u6B3E\uFF0C\u81EA\u6536\u5230\u5BA2\u6237\u8FD4\u56DE\u7968\u54C1\u4E4B\u65E5\u8D77\uFF0C7\u4E2A\u5DE5\u4F5C\u65E5\u5185\u5C06\u6B3E\u9879\u539F\u8DEF\u9000\u56DE\u5230\u5BA2\u6237\u7684\u8D26\u6237\u4E2D\u3002</p>\n              '
}, {
  name: '退款条件',
  content: '<div class="title">\u4E00\u3001\u9000\u6362\u8D27\u6536\u8D39\u89C4\u5219</div>\n              <p>\u975E\u4E0D\u53EF\u6297\u529B\u60C5\u51B5\u4E0B\uFF0C\u7968\u725B\u6839\u636E\u9879\u76EE\u63D0\u4F9B\u4E0D\u540C\u7684\u9000\u6362\u8D27\u670D\u52A1\uFF0C\u786E\u8BA4\u8BA2\u5355\u65F6\u8BF7\u7559\u610F\u9879\u76EE\u201C\u9000\u6362\u8D27\u8BF4\u660E\u201D\uFF0C\u786E\u8BA4\u540E\u8D2D\u4E70\uFF1A</p>\n              </br>\n              <p class="subTitle">\u672A\u6D88\u8D39\u65E0\u6761\u4EF6\u9000\u6B3E</p>\n              <img src="//dn-piaoniu-static.qbox.me/pc/img/sample1.aa9576f7.jpg"/>\n              <p>1\u3001\u6F14\u51FA\u7ED3\u675F\u524D\uFF0C\u82E5\u7968\u5238\u672A\u6D88\u8D39\uFF0C\u5BA2\u6237\u53EF\u65E0\u6761\u4EF6\u53D6\u6D88\u8BA2\u5355\uFF1B</p>\n              <p>2\u3001\u6F14\u51FA\u7ED3\u675F\u540E\uFF0C\u6240\u6709\u552E\u51FA\u7968\u5238\u5C06\u81EA\u52A8\u66F4\u65B0\u4E3A\u201C\u5DF2\u6D88\u8D39\u201D;</p>\n              <p>3\u3001\u5DF2\u6D88\u8D39\u7968\u5238\u4E0D\u53EF\u9000\u6362\u3002</p>\n              </br>\n              <p class="subTitle">\u7279\u6B8A\u9879\u76EE\u4E0D\u652F\u6301\u9000\u6362</p>\n              <img src="//dn-piaoniu-static.qbox.me/pc/img/special-item-refund-tip.ddb33b7f.jpg"/>\n              <p>1. \u8BA2\u5355\u4E00\u65E6\u751F\u6210\u5747\u4E0D\u63A5\u53D7\u4EFB\u4F55\u7406\u7531\u7684\u9000\u6362\u3002</p>\n              </br>\n              <p class="subTitle">\u652F\u6301\u6709\u7406\u7531\u9000\u6B3E</p>\n              <img src="//dn-piaoniu-static.qbox.me/pc/img/sample2.9a34f67f.jpg"/>\n              <p>1\u3001\u652F\u4ED8\u6210\u529F\u540E15\u5206\u949F\u5185\uFF0C\u5BA2\u6237\u53EF\u65E0\u6761\u4EF6\u53D6\u6D88\u8BA2\u5355\uFF08\u73B0\u573A\u53D6\u7968\u8BA2\u5355\u9664\u5916\uFF09\uFF1B</p>\n              <p>2\u3001\u652F\u4ED8\u6210\u529F\u540E\u8D85\u51FA15\u5206\u949F\uFF1A</p>\n                <p>\uFF081\uFF09\u8DDD\u79BB\u6F14\u51FA\u7ED3\u675F > 30\u5929\uFF0C\u4E14\u6F14\u51FA\u672A\u5F00\u7968\uFF1A\u6536\u53D6\u8BA2\u5355\u5546\u54C1\u91D1\u989D10%\u7684\u624B\u7EED\u8D39\uFF1B</p>\n                <p>\uFF082\uFF09\u8DDD\u79BB\u6F14\u51FA\u7ED3\u675F > 30\u5929\uFF0C\u4E14\u6F14\u51FA\u5DF2\u5F00\u7968\uFF1A\u6536\u53D6\u8BA2\u5355\u5546\u54C1\u91D1\u989D30%\u7684\u624B\u7EED\u8D39\uFF1B</p>\n                <p>\uFF083\uFF09\u8DDD\u79BB\u6F14\u51FA\u7ED3\u675F <= 30\u5929\uFF1A\u6536\u53D6\u8BA2\u5355\u5546\u54C1\u91D1\u989D50%\u7684\u624B\u7EED\u8D39\uFF1B</p>\n                <p>\uFF084\uFF09\u8DDD\u79BB\u6F14\u51FA\u7ED3\u675F <= 7\u5929\uFF1A\u7968\u725B\u7F51\u4E0D\u652F\u6301\u9000\u7968\u3002</p>\n              <p>3\u3001\u82E5\u8BA2\u5355\u5DF2\u53D1\u8D27\uFF0C\u9700\u5148\u5C06\u7968\u54C1\u5BC4\u56DE\uFF0C\u7968\u725B\u6536\u5230\u7968\u54C1\u540E\uFF0C\u4EE5\u4E0A\u89C4\u5219\u64CD\u4F5C\u9000\u6B3E\uFF1B\u89C4\u5219\u6D89\u53CA\u8DDD\u79BB\u5F00\u6F14\u524D\u65E5\u671F\u4EE5\u7968\u725B\u6536\u5230\u7968\u54C1\u65E5\u671F\u4E3A\u51C6\u3002</p>\n              \n              <div class="title">\u4E8C\u3001\u7279\u522B\u8BF4\u660E</div>\n              <p>1\u3001\u4E2A\u522B\u9879\u76EE\u6216\u6D3B\u52A8\u5546\u54C1\u53EF\u80FD\u4E0D\u9002\u7528\u201C\u9000\u6362\u8D27\u6536\u8D39\u89C4\u5219\u201D\u7684\u53D8\u66F4\u6216\u9000\u6B3E\uFF0C\u5177\u4F53\u4EE5\u5404\u5546\u54C1\u8D2D\u4E70\u987B\u77E5\u6216\u6D3B\u52A8\u89C4\u5219\u4E3A\u51C6\uFF1B</p>\n              <p>2\u3001\u672C\u627F\u8BFA\u6709\u6548\u671F\u81EA\u53D1\u5E03\u65E5\u8D77\uFF0C\u81F3\u7968\u725B\u53D1\u5E03\u66F4\u65B0\u7248\u672C\u4E3A\u6B62\u3002</p>\n              '
}];

var getContentByName = function getContentByName(name) {
  return questionArr.filter(function (item) {
    return item.name == name;
  })[0] || {};
};

exports['default'] = getContentByName;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = function parse(url) {
  var query;
  var ret = {};
  if (url) {
    if (url.indexOf('?') === -1) {
      query = url;
    } else {
      query = url.split('?')[1];
    }
  } else {
    query = location.search.slice(1);
  }
  query.split('&').forEach(function (pair) {
    var splited = pair.split('=');
    if (splited[0]) {
      ret[splited[0]] = decodeURIComponent(splited[1]);
    }
  });
  return ret;
};

exports.append = function append(origin, obj) {
  var splited = origin.split('?');
  var base = splited[0];
  var qs = '?' + splited[1];

  var params = exports.parse(qs);
  var k;
  for (k in obj) {
    if (obj.hasOwnProperty(k)) {
      params[k] = obj[k];
    }
  }

  return base + '?' + exports.stringify(params);
};

exports.stringify = function stringify(data) {
  var result = [];
  var key;
  for (key in data) {
    if (data.hasOwnProperty(key) && data[key]) {
      result.push(key + '=' + encodeURIComponent(data[key]));
    }
  }
  return result.join('&');
};

exports.set = function set(origin, key, value) {
  var splited = origin.split('?');
  var base = splited[0];
  var qs = '?' + splited[1];

  var params = exports.parse(qs);
  var k;
  for (k in params) {
    if (k === key) params[key] = value;
  }

  return base + '?' + exports.stringify(params);
};

exports.query = exports.parse(location.search);

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _qs = __webpack_require__(3);

var _jQuery = __webpack_require__(7);

var _jQuery2 = _interopRequireDefault(_jQuery);

var _questionsMap = __webpack_require__(248);

var _questionsMap2 = _interopRequireDefault(_questionsMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var questionGroups = [{
  title: '订购说明',
  children: [{
    title: '订购说明',
    name: '订购渠道'
  }, {
    title: '订购说明',
    name: '演出状态'
  }, {
    title: '订购说明',
    name: '如何订购'
  }, {
    title: '订票说明',
    name: '价格说明'
  }]
}, {
  title: '支付方式',
  children: [{
    name: '在线支付'
  }, {
    name: '花呗'
  }, {
    name: '银行卡支付'
  }]
}, {
  title: '配送方式',
  children: [{
    name: '上门自取'
  }, {
    name: '现场自取'
  }, {
    name: '顺丰配送'
  }, {
    name: '电子票'
  }]
}, {
  title: '售后服务',
  children: [{
    name: '退换票说明'
  }, {
    name: '退款说明'
  }, {
    name: '退款条件'
  }]
}];

var SideBar = function () {
  function SideBar(TreeData, container) {
    _classCallCheck(this, SideBar);

    this.container = container;
    this.TreeData = TreeData;
    this.activeGroup = _qs.query.questionGroup || '订购说明';
    this.activeItem = _qs.query.question || '订购渠道';
    this.render();
    this.changeContent();
    this.bindEvent();
  }

  SideBar.prototype.render = function render() {
    var _this = this;

    var TreeData = this.TreeData;
    var renderContent = '' + TreeData.map(function (group) {
      return '\n      <div class="' + (group.title == _this.activeGroup ? 'group expand' : 'group') + '">\n        <h3 class="h3">\n          <span>' + group.title + '</span>\n          <img src="//dn-piaoniu-static.qbox.me/pc/ui/img/icon-totop.befae9e0.png" alt="">\n        </h3>\n        <ul>\n          ' + group.children.map(function (item) {
        return '<li class="' + (item.name == _this.activeItem && 'active') + '" data-item="' + item.name + '" data-group="' + group.title + '"><span>' + item.name + '</span></li>';
      }).join('') + '\n        </ul>\n      </div>';
    }).join('');
    this.container.innerHTML = renderContent;
  };

  SideBar.prototype.bindEvent = function bindEvent() {
    var self = this;
    (0, _jQuery2['default'])('.group .h3').click(function (e) {
      (0, _jQuery2['default'])('.group').attr('class', 'group');
      (0, _jQuery2['default'])(this).parent().toggleClass('expand');
      (0, _jQuery2['default'])(this).parent().find('li').eq(0).click();
    });
    (0, _jQuery2['default'])('.group li').click(function (e) {
      (0, _jQuery2['default'])('.group li').attr('class', '');
      (0, _jQuery2['default'])(this).addClass('active');
      self.activeGroup = (0, _jQuery2['default'])(this).data('group');
      self.activeItem = (0, _jQuery2['default'])(this).data('item');
      self.changeContent();
    });
  };

  SideBar.prototype.changeContent = function changeContent() {
    var activeItem = (0, _questionsMap2['default'])(this.activeItem);
    var $questionItems = document.querySelector('.questionItems');
    var $questionTitle = document.querySelector('.questionTitle');
    $questionTitle.innerHTML = activeItem.name;
    $questionItems.innerHTML = activeItem.content;
  };

  return SideBar;
}();

var SideContainer = document.querySelector('.aside');

new SideBar(questionGroups, SideContainer);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/user/questions.js.72cdc833.map