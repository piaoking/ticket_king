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
/******/ 	return __webpack_require__(__webpack_require__.s = 479);
/******/ })
/************************************************************************/
/******/ ({

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cookie = __webpack_require__(8);

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// 在线客服
$(function () {
  var $sidebar = $('<div class="side-toolbar">\n    <div class="item totop">\n      <div class="icon"></div>\n      <div class="text">\u56DE\u5230\u9876\u90E8</div>\n    </div>\n    <div class="item custom-service">\n      <div class="icon"></div>\n      <div class="text">\u5728\u7EBF\u5BA2\u670D</div>\n    </div>\n    <div class="item common">\n      <div class="icon"></div>\n      <div class="text">\u5E38\u89C1\u95EE\u9898</div>\n    </div>\n  </div>');

  var $totop = $sidebar.find('.totop');
  var $customService = $sidebar.find('.custom-service');
  var $common = $sidebar.find('.common');

  if (_cookie2['default'].get('bannerShow') == null || _cookie2['default'].get('bannerShow') != 0) {
    $sidebar.removeClass('low');
  } else {
    $sidebar.addClass('low');
  }

  $customService.click(function () {
    console.log(window.easemobim);
    easemobim.bind({
      tenantId: '34323',
      //是否隐藏小的悬浮按钮
      hide: true
    });
    // window.open('http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODE2NDk0M18zNzI1NThfNDAwMDExMjgzMV8yXw');
  });

  $common.click(function () {
    window.open('/faq');
  });

  $totop.click(function () {
    window.scrollTo(0, 0);
  }).css('opacity', 0);

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      $totop.css('opacity', 1);
    } else {
      $totop.css('opacity', 0);
    }
  });

  $sidebar.appendTo($('body'));
});

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

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cookie = __webpack_require__(8);

var _cookie2 = _interopRequireDefault(_cookie);

__webpack_require__(105);

var _qs = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// 底部引导页
$(function () {
	if (_cookie2['default'].get('bannerShow') == null || _cookie2['default'].get('bannerShow') != 0) {
		$(".banner").addClass('left');
	} else {
		$('.left-img').addClass('left');
	}
	if (_qs.query.bd_vid) {
		_cookie2['default'].set('bd_vid', _qs.query.bd_vid);
		_cookie2['default'].set('baiduUrl', location.href, 1);
	}

	$('.close').on('click', function () {
		$(".banner").removeClass('left');
		setTimeout(function () {
			$('.left-img').addClass('left');
		}, 750);
		_cookie2['default'].set('bannerShow', 0);
		$('.side-toolbar').addClass('low');
	});

	$('.left-img').on('click', function () {
		$('.left-img').removeClass('left');
		setTimeout(function () {
			$(".banner").addClass('left');
		}, 750);
		$('.side-toolbar').removeClass('low');
	});
});

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var Cookie = {
  set: function set(name, value, expHour, domain, path) {
    document.cookie = name + '=' + encodeURIComponent(value === undefined ? '' : value) + (expHour ? '; expires=' + new Date(new Date().getTime() + (expHour - 0) * 3600000).toUTCString() : '') + '; domain=' + (domain ? domain : document.domain) + '; path=' + (path ? path : '/');
  },
  get: function get(name) {
    return document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)')) === null ? null : decodeURIComponent(RegExp.$2);
  },
  remove: function remove(name) {
    if (undefined.get(name) !== null) {
      undefined.set(name, null, -1);
    }
  }
};

exports['default'] = Cookie;

/***/ })

/******/ });
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/header/bottom.js.37feda2c.map