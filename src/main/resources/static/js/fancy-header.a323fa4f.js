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
/******/ 	return __webpack_require__(__webpack_require__.s = 480);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function on() {
  var args = arguments;
  var obj;

  if (_typeof(args[0]) === 'object') {
    obj = args[0];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        this.on(key, obj[key]);
      }
    }
  } else {
    var name = args[0];
    var func = args[1];
    var events = this._events = this._events || {};
    var thisEvent = events[name] = events[name] || [];

    thisEvent.push(func);
  }
  return this;
}

var emitted = {};

function once(name, cb) {
  this.on(name, function (data) {
    if (!emitted[name]) {
      cb(data);
      emitted[name] = true;
    }
  });
}

function off(name, cb) {
  if (!name) {
    delete this._events;
  }

  if (this._events && this._events[name]) {
    if (cb) {
      this._events[name].splice(this._events[name].indexOf(cb));
    } else {
      delete this._events[name];
    }
  }

  return this;
}

function emit(name) {
  for (var _len = arguments.length, eventArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    eventArgs[_key - 1] = arguments[_key];
  }

  var self = this;
  var events = this._events && this._events[name] || [];
  events.forEach(function (func) {
    func.apply(self, eventArgs);
  });
}

function mixin(target) {
  if (typeof target === 'function') {
    target.prototype.on = on;
    target.prototype.once = once;
    target.prototype.off = off;
    target.prototype.emit = emit;
  } else {
    target.on = on;
    target.once = once;
    target.off = off;
    target.emit = emit;
  }
}

exports['default'] = {
  emit: emit,
  mixin: mixin,
  once: once,
  on: on,
  off: off
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var method = params.method || 'GET';
  var data = params.data;
  var dataType = params.dataType || 'json';
  var req;
  if (!method.match(/^get$/i)) {
    data = JSON.stringify(params.data);
  }

  function convertUrl(url) {
    var prefix = '/api';
    var baseUrl = url.split('?')[0];
    var query = url.split('?')[1];
    var ext = dataType == 'json' ? '.json' : '';
    return prefix + baseUrl + ext + (query ? '?' + query : '');
  }

  console.debug(method.toUpperCase() + ':', params.url);

  req = new Promise(function (resolve, reject) {
    $.ajax({
      type: method,
      url: convertUrl(params.url),
      data: data,
      contentType: dataType == 'json' ? 'application/json' : 'text/plain',
      success: function success(resp) {
        // $('.loading').hide();
        req.emit('success', resp);
        req.emit('complete');
        resolve(resp);
      },
      error: function error(xhr) {
        if (xhr.status == 200) {
          req.emit('success', xhr.responseText);
          req.emit('complete');
          resolve(xhr.responseText);
          return;
        }

        if (xhr.status >= 400) {
          req.emit('httpError', xhr);
        }
        var err = xhr.response || xhr.responseText || '系统错误';
        req.emit('error', err);
        req.emit('complete');
        reject(err);
      }
    });
  });
  _event2['default'].mixin(req);
  return req;
};

/***/ }),

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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _cookie = __webpack_require__(8);

var _cookie2 = _interopRequireDefault(_cookie);

var _fetch = __webpack_require__(1);

var _fetch2 = _interopRequireDefault(_fetch);

var _bus = __webpack_require__(14);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cachedUser;

var isLogin = function isLogin() {
  return !!_cookie2['default'].get('pnid');
};

var logout = function logout() {
  _cookie2['default'].set('pnid', null, -1, '.ipiaoniu.com');
  _cookie2['default'].set('pnid', null, -1, '.piaoniu.com');
  return (0, _fetch2['default'])({
    dataType: 'text',
    url: '/v1/user/logout'
  });
};

var register = function register() {
  var redir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;

  location.href = '/user/register.html?redir=' + encodeURIComponent(redir);
};

var login = function login() {
  var redir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;

  location.href = '/user/login.html?redir=' + encodeURIComponent(redir);
};

var assureLogin = function assureLogin(redir) {
  return new Promise(function (resolve) {
    var logged = isLogin();
    if (!logged) {
      login(redir);
    } else {
      resolve();
    }
  });
};

var get = function get() {
  return new Promise(function (resolve, reject) {
    if (!isLogin()) {
      return resolve(null);
    }
    if (cachedUser) {
      return resolve(cachedUser);
    }
    (0, _fetch2['default'])({
      url: '/v1/user'
    }).on('success', function (user) {
      cachedUser = user;
      resolve(user);
    }).on('httpError', function () {
      logout();
    }).on('error', function (err) {
      console.log('fetch user error', err);
      reject(err);
    });
  });
};

var getToken = function getToken() {
  return new Promise(function (resolve) {
    resolve(_cookie2['default'].get('pner'));
  });
};

var user = {
  get: get,
  getToken: getToken,
  login: login,
  logout: logout,
  register: register,
  assureLogin: assureLogin,
  isLogin: isLogin
};

_bus2['default'].mixin(user);

exports['default'] = user;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var config = {
  clientType: 20
};

exports["default"] = config;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (!window.Bus) {
  window.Bus = {};
  _event2['default'].mixin(window.Bus);
}
var bus = window.Bus;

bus.mixin = function (target) {
  ['on', 'off', 'emit', 'once'].forEach(function (method) {
    if (typeof target === 'function') {
      target.prototype[method] = bus[method];
    } else {
      target[method] = bus[method].bind(target);
    }
  });
};
exports['default'] = bus;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fetch = __webpack_require__(1);

var _fetch2 = _interopRequireDefault(_fetch);

var _bus = __webpack_require__(14);

var _bus2 = _interopRequireDefault(_bus);

var _user = __webpack_require__(12);

var _user2 = _interopRequireDefault(_user);

var _consts = __webpack_require__(13);

var _consts2 = _interopRequireDefault(_consts);

var _overlay = __webpack_require__(9);

var _overlay2 = _interopRequireDefault(_overlay);

var _progress = __webpack_require__(2);

var _progress2 = _interopRequireDefault(_progress);

var _pinyou = __webpack_require__(17);

var _pinyou2 = _interopRequireDefault(_pinyou);

var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var body = $('body');
var progress = new _progress2['default']();
var COUNT_DOWN_TIME = 60;

var CountDownButton = function () {
  function CountDownButton(elem, url, uaInput, captchaRow) {
    _classCallCheck(this, CountDownButton);

    var self = this;
    this.itv = null;
    this.elem = elem;
    this.url = url;
    this.secondsLeft = COUNT_DOWN_TIME;
    self.requesting = false;
    self.needCaptcha = false;

    // let $btnVCode = captchaRow.find('.btn-vcode')
    var $imgVCode = captchaRow.find('img');
    var $inputVCode = captchaRow.find('input');

    function changeCaptcha() {
      $imgVCode.attr('src', '/api/v1/user/captcha?t=' + +new Date());
    }

    $imgVCode.on('click', changeCaptcha);
    // $btnVCode.on('click', changeCaptcha)

    elem.click(function handler() {
      if ($(this).hasClass('disabled')) {
        return;
      }
      self.secondsLeft = COUNT_DOWN_TIME;
      self.requesting = true;
      var data = {
        'ua': uaInput.val()
      };
      if (self.needCaptcha) {
        data.captcha = $inputVCode.val();
      }
      (0, _fetch2['default'])({
        method: 'post',
        url: url,
        data: data
      }).on('success', function (resp) {
        if (!resp.success) {
          self.showError(resp.errorMsg);
          changeCaptcha();
          if (resp.needCaptcha) {
            self.needCaptcha = true;
            captchaRow.show();
          }
          return;
        }
        self.countDown();
        clearInterval(self.itv);
        self.itv = setInterval(function () {
          self.countDown();
        }, 1000);
      }).on('error', function (err) {
        self.showError(err);
      }).on('complete', function () {
        self.requesting = false;
      });
    });
  }

  CountDownButton.prototype.showError = function showError(err) {
    progress.showMessage(err);
  };

  CountDownButton.prototype.countDown = function countDown() {
    var elem = this.elem;
    if (this.secondsLeft <= 0) {
      elem.removeClass('disabled');
      elem.html('获取验证码');
      this.secondsLeft = COUNT_DOWN_TIME;
      clearInterval(this.itv);
    } else {
      elem.addClass('disabled');
      elem.html(this.secondsLeft + '秒后重发');
    }
    this.secondsLeft--;
  };

  return CountDownButton;
}();

_event2['default'].mixin(CountDownButton);

var LightLogin = function () {
  function LightLogin() {
    var _this = this;

    _classCallCheck(this, LightLogin);

    var $container = this.$container = $(__webpack_require__(22));
    var $overlay = this.$overlay = new _overlay2['default']();
    var loginConfig;
    this.requesting = false;
    this.$formLogin = $container.find('.form-login');
    this.$formReg = $container.find('.form-reg');
    this.$formQuickLogin = $container.find('.form-quick-login');
    $overlay.on('tap', function () {
      _this.hide();
    });

    this.on('login', function () {
      _this.$formLogin.find('input').blur();
      _this.hide();
    });

    $container.appendTo(body);
    $container.find('.close').click(function () {
      _this.hide();
    });
    this.hide();

    loginConfig = [{
      sel: '.title-login',
      tab: 'login'
    }, {
      sel: '.title-quick-login',
      tab: 'quick-login'
    }, {
      sel: '.quick-login',
      tab: 'quick-login'
    }, {
      sel: '.normal-login',
      tab: 'login'
    }];

    loginConfig.forEach(function (conf) {
      $container.find(conf.sel).click(function () {
        console.log('conf', conf.tab);
        _this.toTab(conf.tab);
      });
    });

    this.initLogin();
    // this.initReg();
    this.initQuickLogin();
  }

  LightLogin.prototype.initForm = function initForm(container, url, codeUrl, type) {
    var _this2 = this;

    var $rowVCode = container.find('.row-vcode');
    var $btnVCode = container.find('.btn-getcode');
    var $mobile = container.find('.input-mobile');
    var $submit = container.find('.btn-submit');
    var check = function check() {
      var mobileValid = $mobile.val().length == 11;
      if (mobileValid) {
        $btnVCode.removeClass('disabled');
        $submit.css('opacity', 1);
      } else {
        $btnVCode.addClass('disabled');
        $submit.css('opacity', 0.6);
      }
    };
    // $mobile.on('change', check)
    $mobile.on('keyup input', check);

    // if (codeUrl) {
    var countdown = new CountDownButton(container.find('.btn-getcode'), codeUrl, $mobile, $rowVCode);
    // }

    var submit = function submit(e) {
      var inputs;
      var data;
      if (e) {
        e.preventDefault();
      }
      inputs = container.find('.input');
      data = {
        ct: _consts2['default'].clientType
      };
      inputs.each(function (i, input) {
        var $input = $(input);
        if ($input.is(':visible')) {
          data[$input.attr('name')] = $input.val();
        }
      });
      var keys = Object.keys(data);
      var emptyValue = function emptyValue(k) {
        return !data[k];
      };
      if (keys.some(emptyValue)) {
        return progress.showMessage('请完整填写');
      }

      if (_this2.requesting) {
        return false;
      }
      _this2.requesting = true;
      (0, _fetch2['default'])({
        method: 'post',
        url: url,
        data: data
      }).on('success', function (_data) {
        if (_data.needCaptcha) {
          _this2.$formLogin.find('.form-login-vcode').show();
          return;
        }
        _this2.emit('login', _data.user);
        if (type === 'login') {
          _pinyou2['default'].trackLogin(_data.user.userId);
        } else {
          _pinyou2['default'].trackRegister(_data.user.userId);
        }
      }).on('error', function (err) {
        if (!codeUrl && err === '图形验证码错误') {
          _this2.$formLogin.find('.form-login-vcode .input-vcode').val('');
          _this2.$formLogin.find('.form-login-vcode vcode').attr('src', '/api/v1/user/captcha?t=' + +new Date());
        }
        _this2.showError(err);
      }).on('complete', function () {
        _this2.requesting = false;
      });
    };

    container.find('.input').on('keyup', function (e) {
      if (e.which === 13) {
        submit(e);
      }
    });
    $submit.click(submit);
  };

  LightLogin.prototype.initLogin = function initLogin() {
    this.initForm(this.$formLogin, '/v1/user/login', null, 'login');
  };
  // initReg() {
  //   this.initForm(this.$formReg, '/v1/user/reg', '/v3/user/sendRegCode', 'reg');
  // }


  LightLogin.prototype.initQuickLogin = function initQuickLogin() {
    this.initForm(this.$formQuickLogin, '/v1/user/login', '/v3/user/sendLoginCode', 'login');
  };

  LightLogin.prototype.toTab = function toTab(name) {
    this.$container.attr('class', 'light-login mbox ' + name);
  };

  LightLogin.prototype.showError = function showError(err) {
    progress.showMessage(err);
  };

  LightLogin.prototype.show = function show() {
    this.$overlay.show();
    this.$container.show();
    this.$container.find('.input').get(0).focus();
  };

  LightLogin.prototype.hide = function hide() {
    this.$overlay.hide();
    this.$container.hide();
  };

  LightLogin.prototype.assureLogin = function assureLogin(cb) {
    var logged = _user2['default'].isLogin();
    if (logged) {
      cb();
    } else {
      if (this.callback) {
        this.off('login', this.callback);
      }
      this.on('login', cb);
      this.show();
    }
    this.callback = cb;
  };

  return LightLogin;
}();

_bus2['default'].mixin(LightLogin);
var lightLogin = new LightLogin();

exports['default'] = lightLogin;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function trackLogin(userId) {
  (function (w, d, s, l, a) {
    w._CommandName_ = l;w[l] = w[l] || function () {
      (w[l].q = w[l].q || []).push(arguments);
      w[l].track = function () {
        (w[l].q[w[l].q.length - 1].t = []).push(arguments);
      };return w[l];
    }, w[l].a = a, w[l].l = 1 * new Date();
    var c = d.createElement(s);c.async = 1;
    c.src = '//fm.ipinyou.com/j/a.js';
    var h = d.getElementsByTagName(s)[0];h.parentNode.insertBefore(c, h);
  })(window, document, 'script', 'py', 'iH84T..h2R4ELvdcseiX9ST7DnIWP');
  py('event', 'register', {
    'id': userId
  }).track('iH84T.yC2.GueJX2ZkYwYhc6-LP34ZV_');
}

function trackRegister(userId) {
  (function (w, d, s, l, a) {
    w._CommandName_ = l;w[l] = w[l] || function () {
      (w[l].q = w[l].q || []).push(arguments);
      w[l].track = function () {
        (w[l].q[w[l].q.length - 1].t = []).push(arguments);
      };return w[l];
    }, w[l].a = a, w[l].l = 1 * new Date();
    var c = d.createElement(s);c.async = 1;
    c.src = '//fm.ipinyou.com/j/a.js';
    var h = d.getElementsByTagName(s)[0];h.parentNode.insertBefore(c, h);
  })(window, document, 'script', 'py', 'iH84T..h2R4ELvdcseiX9ST7DnIWP');
  py('event', 'register', {
    'id': userId
  }).track('iH84T.4C2.Wq3xndmEMBm6AWI1rk3aMX');
}

function trackOrderConfirm(money) {
  (function (w, d, s, l, a) {
    w._CommandName_ = l;w[l] = w[l] || function () {
      (w[l].q = w[l].q || []).push(arguments);
      w[l].track = function () {
        (w[l].q[w[l].q.length - 1].t = []).push(arguments);
      };return w[l];
    }, w[l].a = a, w[l].l = 1 * new Date();
    var c = d.createElement(s);c.async = 1;
    c.src = '//fm.ipinyou.com/j/a.js';
    var h = d.getElementsByTagName(s)[0];h.parentNode.insertBefore(c, h);
  })(window, document, 'script', 'py', 'iH84T..h2R4ELvdcseiX9ST7DnIWP');
  py('event', 'order', {
    'id': '11111111',
    'money': money
  }).track('iH84T.8C2.MalZTgzCgomi-X_s9I1AcP');
}

function trackOrderPay(money) {
  (function (w, d, s, l, a) {
    w._CommandName_ = l;w[l] = w[l] || function () {
      (w[l].q = w[l].q || []).push(arguments);
      w[l].track = function () {
        (w[l].q[w[l].q.length - 1].t = []).push(arguments);
      };return w[l];
    }, w[l].a = a, w[l].l = 1 * new Date();
    var c = d.createElement(s);c.async = 1;
    c.src = '//fm.ipinyou.com/j/a.js';
    var h = d.getElementsByTagName(s)[0];h.parentNode.insertBefore(c, h);
  })(window, document, 'script', 'py', 'iH84T..h2R4ELvdcseiX9ST7DnIWP');
  py('event', 'order', {
    'id': '11111111',
    'money': money
  }).track('iH84T.9C2.u6VQ05WDvmdS60A72nPtf_');
}

exports['default'] = {
  trackLogin: trackLogin,
  trackRegister: trackRegister,
  trackOrderConfirm: trackOrderConfirm,
  trackOrderPay: trackOrderPay
};

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _suggest = __webpack_require__(67);

var _suggest2 = _interopRequireDefault(_suggest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  init: function init($input) {
    var suggest = new _suggest2['default']($input, {
      url: '/v1/activities/suggest',
      params: function params() {
        return {
          input: $input.val(),
          size: 10
        };
      },
      debounce: 200,
      renderItem: function renderItem(item) {
        return $('<li class="suggest-item">' + item + '</li>');
      }
    });
    suggest.on('select', function (keyword) {
      if ($input.parent('div.form').attr('path')) {
        // //dn-piaoniu-static.qbox.me/pc/header/slim-header.38b1caeb.js
        location.href = $input.closest('div.form').attr('path') + '/s_' + encodeURIComponent(keyword);
      } else {
        // //dn-piaoniu-static.qbox.me/pc/header/header.f316ff59.js //dn-piaoniu-static.qbox.me/pc/header/fancy-header.a323fa4f.js
        location.href = $input.closest('form').attr('action') + '?keyword=' + encodeURIComponent(keyword);
      }
    });
  }
};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _user2 = __webpack_require__(12);

var _user3 = _interopRequireDefault(_user2);

var _lightLogin = __webpack_require__(16);

var _lightLogin2 = _interopRequireDefault(_lightLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  initFancy: function initFancy() {
    this.init('.headerbar', true);
  },
  init: function init(cls, useMinWidth, notAdjust) {
    var $headerbar = $(cls || '.headerbar');
    var $loginItem = $headerbar.find('.item-login');
    var $userItem = $headerbar.find('.item-user');
    var $logout = $headerbar.find('.logout');

    var updateHeader = function updateHeader() {
      if (!_user3['default'].isLogin()) {
        $loginItem.show();
        $userItem.hide();
      } else {
        _user3['default'].get().then(function (_user) {
          $userItem.find('.text').html('<a href="/user/home" class="username">' + _user.userName + '</a><span>\uFF0C\u4F60\u597D</span>');
          $userItem.show();
          var width = $userItem.width() - 1 - 20;
          var minWidth = width >= 90 ? width : 90;
          if (!notAdjust) {
            $userItem.find('ul').css('width', useMinWidth ? minWidth : width);
          }
          if (_user.avatar) {
            $userItem.find('.avatar').attr('src', _user.avatar);
          }
          $loginItem.hide();
        })['catch'](function () {
          $loginItem.show();
          $userItem.hide();
        });
      }
    };

    $logout.click(function () {
      _user3['default'].logout().on('success', function () {
        location.reload();
      });
    });

    _lightLogin2['default'].on('login', function () {
      updateHeader();
    });
    updateHeader();
    $loginItem.click(function () {
      if (!_user3['default'].isLogin()) {
        _lightLogin2['default'].assureLogin(function () {
          updateHeader();
        });
      }
    });
  }
};

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fetch = __webpack_require__(1);

var _fetch2 = _interopRequireDefault(_fetch);

var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CityPicker = function () {
  function CityPicker(elem) {
    var _this = this;

    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CityPicker);

    var self = this;
    this.$elem = elem;

    if (this.useHash) {
      $(window).on('popstate', function () {
        if (!location.hash.match('citypicker')) {
          _this.hide();
        }
      });
    }

    this.on('setCity', function (city) {
      elem.text(city.cityName);
    });

    this.selectionLayer = elem.find('.citylist');
    this.selectionLayer.on('click', function handler(e) {
      e.stopPropagation();
    });
    this.render();

    if (!config.ignoreEvent) {
      elem.on('click', function (e) {
        e.stopPropagation();
        self.toggle();
      });
      $('body').on('click', function () {
        self.hide();
      });
    }

    this.selectionLayer.find('.city-item').click(function handler() {
      self.setCurrent($(this).data('name'));
    });

    this.selectionLayer.find('.cap').click(function handler(e) {
      e.stopPropagation();
      var cap = $(this).text();
      self.scrollToCapital(cap);
    });
  }

  CityPicker.prototype.scrollToCapital = function scrollToCapital(cap) {
    var $item = this.selectionLayer.find('[data-capital="' + cap + '"]');
    var $parent = $item.closest('.hot-cities');
    var $ul = $item.parent('ul');
    console.log($item.offset().top, $ul.offset().top);
    $parent.scrollTop($item.offset().top - $ul.offset().top);
  };

  CityPicker.prototype.render = function render() {
    var $selectionLayer = this.selectionLayer;
    var currentCity = window.currentCity;
    var city = window.city;
    var hotCities = window.hotCities;
    var activeCities = window.activeCities;
    var cityCapitalMap = {};
    var capitcals = [];

    activeCities.forEach(function (city) {
      var capital = city.firstLetter;
      if (!cityCapitalMap[capital]) {
        cityCapitalMap[capital] = [];
        capitcals.push(capital);
      }
      cityCapitalMap[capital].push(city);
    });

    $selectionLayer.html('\n      <div class="top-rows">\n        <div class="row">\n          <div class="title">\u5F53\u524D\u57CE\u5E02\uFF1A</div>\n          <ul>\n            <li class="selected" data-name=\'' + currentCity.cityEnName + '\'>' + currentCity.cityName + '</li>\n          </ul>\n        </div>\n        <div class="row">\n          <div class="title">\u70ED\u95E8\u57CE\u5E02\uFF1A</div>\n          <ul>\n            ' + hotCities.map(function (c) {
      var enName = c.cityEnName;
      return '<li class="city-item" data-name=\'' + enName + '\'>' + c.cityName + '</li>';
    }).join('') + '\n          </ul>\n        </div>\n      </div>\n      <div class="city-indexes">\n        <div class="title">\u6309\u5B57\u6BCD\u67E5\u627E</div>\n        <ul class="hot-city-capitcals">\n          ' + capitcals.map(function (c) {
      return '<li class="cap">' + c + '</li>';
    }).join('') + '\n        </ul>\n      </div>\n      <div class="hot-cities">\n        <ul>\n          ' + capitcals.map(function (c) {
      return '<li data-capital="' + c + '">\n              <div class="capital">' + c + '</div>\n              <ul class="items">\n                ' + cityCapitalMap[c].map(function (city) {
        return '<div class="item city-item" data-name=\'' + city.cityEnName + '\'>' + city.cityName + '</div>';
      }).join('') + '\n              </ul>\n            </li>';
    }).join('') + '\n        </ul>\n      </div>\n    ');
  };

  CityPicker.prototype.toggle = function toggle() {
    if (this.$elem.hasClass('active')) {
      this.hide();
    } else {
      this.show();
    }
  };

  CityPicker.prototype.show = function show() {
    this.$elem.addClass('active');
    this.selectionLayer.show();
  };

  CityPicker.prototype.hide = function hide() {
    this.$elem.removeClass('active');
    this.selectionLayer.hide();
  };

  CityPicker.prototype.setCurrent = function setCurrent(cityName) {
    location.href = '/' + cityName;
  };

  CityPicker.prototype.refreshCurrent = function refreshCurrent() {
    return (0, _fetch2['default'])({
      url: '/v1/cities/current'
    });
  };

  CityPicker.prototype.getActiveCities = function getActiveCities() {
    return (0, _fetch2['default'])({
      url: '/v1/cities/active'
    });
  };

  return CityPicker;
}();

_event2['default'].mixin(CityPicker);

exports['default'] = {
  init: function init(container, config) {
    return new CityPicker(container, config);
  }
};

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// lazyload
$(function () {
  var offsetTops = {};
  $('[data-src],[data-style]').each(function (i, el) {
    var $el = $(el);
    var top = $el.offset().top;
    offsetTops[top] = offsetTops[top] || [];
    offsetTops[top].push($el);
  });
  var $window = $(window);
  var $body = $('body');
  var identify = function identify(e) {
    var top = $window.scrollTop() + $window.height() + 50;
    for (var key in offsetTops) {
      if (key < top) {
        offsetTops[key].forEach(function ($item) {
          var src = $item.attr('data-src');
          var style = $item.attr('data-style');
          $item.attr('src', src);
          $item.attr('style', style);
        });
        delete offsetTops[key];
      }
    }
  };
  $window.on('scroll', identify);
  identify();
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Progress = function () {
  function Progress() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Progress);

    var $overlay = $('<div class="overlay" />');
    var $progress = $('<div class="loading">加载中...</div>');
    var $spin = $('<div class="spin" />');
    var $body = $('body');

    if (config.hasOverlay) {
      $overlay.hide().appendTo($body);
      this.overlay = $overlay;
    }
    if (config.zIndex) {
      $progress.css('z-index', config.zIndex);
    }
    $progress.hide().appendTo($body);
    this.spin = $spin;
    this.progress = $progress;

    // $overlay.
  }

  Progress.prototype.showMessage = function showMessage(message, stick) {
    var _this = this;

    var str = message;
    if (message.constructor === Error) {
      str = message.message;
    }
    this.progress.text(str);
    this.progress.show();
    if (!stick) {
      setTimeout(function () {
        _this.hide();
      }, 3000);
    }
    this.progress.css('margin-left', -this.progress.width() / 2);
  };

  Progress.prototype.showProgress = function showProgress() {
    if (this.overlay) {
      this.overlay.show();
    }
    this.progress.text('加载中...');
    this.progress.show();
    this.progress.css('margin-left', -this.progress.width() / 2);
  };

  Progress.prototype.hide = function hide() {
    if (this.overlay) {
      this.overlay.hide();
    }
    this.progress.hide();
  };

  return Progress;
}();

var shared = Progress.shared = new Progress();
exports['default'] = Progress;
exports.shared = shared;

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = "<div class=\"light-login quick-login mbox\">\n  <div class=\"close\"></div>\n  <div class=\"titles\">\n    <div class=\"title-quick-login\">快捷登录</div>\n    <div class=\"title-login\">密码登录</div>\n  </div>\n\n  <form method=\"post\" class=\"form form-quick-login\">\n    <div class=\"row\">\n      <input placeholder=\"手机号\" name=\"ua\" maxlength=\"11\" class=\"input input-mobile\" />\n    </div>\n    <div class=\"row row-vcode\">\n      <input placeholder=\"图形验证码\" name=\"vcode\" class=\"input input-vcode\" />\n      <img src=\"/api/v1/user/captcha\" class=\"vcode\" />\n      <!-- <div class=\"btn btn-vcode\">换一张</div> -->\n    </div>\n    <div class=\"row row-getcode\">\n      <input placeholder=\"验证码\" maxlength=\"6\" name=\"code\" class=\"input input-getcode\" />\n      <div class=\"btn btn-getcode disabled\">获取验证码</div>\n    </div>\n    <div class=\"row\">\n      <input type=\"submit\" class=\"btn btn-submit\" value=\"登录\" />\n    </div>\n    <div class=\"hint\">免注册，登录即创建票牛账户</div>\n  </form>\n  \n  <form method=\"post\" class=\"form form-login\">\n    <div class=\"row\">\n      <input placeholder=\"手机号\" name=\"ua\" maxlength=\"11\" class=\"input input-mobile\">\n    </div>\n    <div class=\"row\">\n      <input type=\"password\" name=\"pw\" placeholder=\"密码\" class=\"input input-password\">\n    </div>\n    <div class=\"row row-vcode form-login-vcode\">\n      <input placeholder=\"请输入验证码\" name=\"captcha\" class=\"input input-vcode\" />\n      <img src=\"/api/v1/user/captcha\" class=\"vcode\" />\n    </div>\n    <div class=\"row\">\n      <input type=\"submit\" class=\"btn btn-submit\" value=\"登录\" />\n    </div>\n  </form>\n</div>\n";

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

/***/ 36:
/***/ (function(module, exports) {

/*! store2 - v2.7.1 - 2018-11-15
* Copyright (c) 2018 Nathan Bubna; Licensed (MIT OR GPL-3.0) */
;(function(window, define) {
    var _ = {
        version: "2.7.1",
        areas: {},
        apis: {},

        // utilities
        inherit: function(api, o) {
            for (var p in api) {
                if (!o.hasOwnProperty(p)) {
                    o[p] = api[p];
                }
            }
            return o;
        },
        stringify: function(d) {
            return d === undefined || typeof d === "function" ? d+'' : JSON.stringify(d);
        },
        parse: function(s) {
            // if it doesn't parse, return as is
            try{ return JSON.parse(s); }catch(e){ return s; }
        },

        // extension hooks
        fn: function(name, fn) {
            _.storeAPI[name] = fn;
            for (var api in _.apis) {
                _.apis[api][name] = fn;
            }
        },
        get: function(area, key){ return area.getItem(key); },
        set: function(area, key, string){ area.setItem(key, string); },
        remove: function(area, key){ area.removeItem(key); },
        key: function(area, i){ return area.key(i); },
        length: function(area){ return area.length; },
        clear: function(area){ area.clear(); },

        // core functions
        Store: function(id, area, namespace) {
            var store = _.inherit(_.storeAPI, function(key, data, overwrite) {
                if (arguments.length === 0){ return store.getAll(); }
                if (typeof data === "function"){ return store.transact(key, data, overwrite); }// fn=data, alt=overwrite
                if (data !== undefined){ return store.set(key, data, overwrite); }
                if (typeof key === "string" || typeof key === "number"){ return store.get(key); }
                if (!key){ return store.clear(); }
                return store.setAll(key, data);// overwrite=data, data=key
            });
            store._id = id;
            try {
                var testKey = '_-bad-_';
                area.setItem(testKey, 'wolf');
                store._area = area;
                area.removeItem(testKey);
            } catch (e) {}
            if (!store._area) {
                store._area = _.inherit(_.storageAPI, { items: {}, name: 'fake' });
            }
            store._ns = namespace || '';
            if (!_.areas[id]) {
                _.areas[id] = store._area;
            }
            if (!_.apis[store._ns+store._id]) {
                _.apis[store._ns+store._id] = store;
            }
            return store;
        },
        storeAPI: {
            // admin functions
            area: function(id, area) {
                var store = this[id];
                if (!store || !store.area) {
                    store = _.Store(id, area, this._ns);//new area-specific api in this namespace
                    if (!this[id]){ this[id] = store; }
                }
                return store;
            },
            namespace: function(namespace, noSession) {
                if (!namespace){
                    return this._ns ? this._ns.substring(0,this._ns.length-1) : '';
                }
                var ns = namespace, store = this[ns];
                if (!store || !store.namespace) {
                    store = _.Store(this._id, this._area, this._ns+ns+'.');//new namespaced api
                    if (!this[ns]){ this[ns] = store; }
                    if (!noSession){ store.area('session', _.areas.session); }
                }
                return store;
            },
            isFake: function(){ return this._area.name === 'fake'; },
            toString: function() {
                return 'store'+(this._ns?'.'+this.namespace():'')+'['+this._id+']';
            },

            // storage functions
            has: function(key) {
                if (this._area.has) {
                    return this._area.has(this._in(key));//extension hook
                }
                return !!(this._in(key) in this._area);
            },
            size: function(){ return this.keys().length; },
            each: function(fn, value) {// value is used by keys(fillList) and getAll(fillList))
                for (var i=0, m=_.length(this._area); i<m; i++) {
                    var key = this._out(_.key(this._area, i));
                    if (key !== undefined) {
                        if (fn.call(this, key, value || this.get(key)) === false) {
                            break;
                        }
                    }
                    if (m > _.length(this._area)) { m--; i--; }// in case of removeItem
                }
                return value || this;
            },
            keys: function(fillList) {
                return this.each(function(k, list){ list.push(k); }, fillList || []);
            },
            get: function(key, alt) {
                var s = _.get(this._area, this._in(key));
                return s !== null ? _.parse(s) : alt || s;// support alt for easy default mgmt
            },
            getAll: function(fillObj) {
                return this.each(function(k, all){ all[k] = this.get(k); }, fillObj || {});
            },
            transact: function(key, fn, alt) {
                var val = this.get(key, alt),
                    ret = fn(val);
                this.set(key, ret === undefined ? val : ret);
                return this;
            },
            set: function(key, data, overwrite) {
                var d = this.get(key);
                if (d != null && overwrite === false) {
                    return data;
                }
                return _.set(this._area, this._in(key), _.stringify(data), overwrite) || d;
            },
            setAll: function(data, overwrite) {
                var changed, val;
                for (var key in data) {
                    val = data[key];
                    if (this.set(key, val, overwrite) !== val) {
                        changed = true;
                    }
                }
                return changed;
            },
            add: function(key, data) {
                var d = this.get(key);
                if (d instanceof Array) {
                    data = d.concat(data);
                } else if (d !== null) {
                    var type = typeof d;
                    if (type === typeof data && type === 'object') {
                        for (var k in data) {
                            d[k] = data[k];
                        }
                        data = d;
                    } else {
                        data = d + data;
                    }
                }
                _.set(this._area, this._in(key), _.stringify(data));
                return data;
            },
            remove: function(key) {
                var d = this.get(key);
                _.remove(this._area, this._in(key));
                return d;
            },
            clear: function() {
                if (!this._ns) {
                    _.clear(this._area);
                } else {
                    this.each(function(k){ _.remove(this._area, this._in(k)); }, 1);
                }
                return this;
            },
            clearAll: function() {
                var area = this._area;
                for (var id in _.areas) {
                    if (_.areas.hasOwnProperty(id)) {
                        this._area = _.areas[id];
                        this.clear();
                    }
                }
                this._area = area;
                return this;
            },

            // internal use functions
            _in: function(k) {
                if (typeof k !== "string"){ k = _.stringify(k); }
                return this._ns ? this._ns + k : k;
            },
            _out: function(k) {
                return this._ns ?
                    k && k.indexOf(this._ns) === 0 ?
                        k.substring(this._ns.length) :
                        undefined : // so each() knows to skip it
                    k;
            }
        },// end _.storeAPI
        storageAPI: {
            length: 0,
            has: function(k){ return this.items.hasOwnProperty(k); },
            key: function(i) {
                var c = 0;
                for (var k in this.items){
                    if (this.has(k) && i === c++) {
                        return k;
                    }
                }
            },
            setItem: function(k, v) {
                if (!this.has(k)) {
                    this.length++;
                }
                this.items[k] = v;
            },
            removeItem: function(k) {
                if (this.has(k)) {
                    delete this.items[k];
                    this.length--;
                }
            },
            getItem: function(k){ return this.has(k) ? this.items[k] : null; },
            clear: function(){ for (var k in this.items){ this.removeItem(k); } },
            toString: function(){ return this.length+' items in '+this.name+'Storage'; }
        }// end _.storageAPI
    };

    var store =
        // safely set this up (throws error in IE10/32bit mode for local files)
        _.Store("local", (function(){try{ return localStorage; }catch(e){}})());
    store.local = store;// for completeness
    store._ = _;// for extenders and debuggers...
    // safely setup store.session (throws exception in FF for file:/// urls)
    store.area("session", (function(){try{ return sessionStorage; }catch(e){}})());

    if (typeof define === 'function' && define.amd !== undefined) {
        define('store2', [], function () {
            return store;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = store;
    } else {
        // expose the primary store fn to the global object and save conflicts
        if (window.store){ _.conflict = window.store; }
        window.store = store;
    }

})(this, this && this.define);


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cityPicker = __webpack_require__(184);

var _cityPicker2 = _interopRequireDefault(_cityPicker);

var _headerSuggest = __webpack_require__(182);

var _headerSuggest2 = _interopRequireDefault(_headerSuggest);

var _userLogin = __webpack_require__(183);

var _userLogin2 = _interopRequireDefault(_userLogin);

__webpack_require__(105);

__webpack_require__(65);

__webpack_require__(185);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_userLogin2['default'].initFancy();

// headerbar
_cityPicker2['default'].init($('.city-picker'));

// suggest
if (!window.isContentPage) {
  _headerSuggest2['default'].init($('.search-form .input'));
}

$('.fancy-header .item').each(function (i, el) {
  if ($(el).hasClass('city-picker')) {
    return;
  }

  var $el = $(el);
  var $menu = $el.find('.submenu');

  $el.find('.text').on('mouseenter', function handler() {
    var _this = this;

    $menu.show();
    setTimeout(function () {
      $(_this).closest('.item').addClass('active');
    });
  });

  $el.on('mouseleave', function handler() {
    $(this).closest('.item').removeClass('active');
    setTimeout(function () {
      $menu.hide();
    }, 200);
  });
});

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _cookie = __webpack_require__(8);

var _cookie2 = _interopRequireDefault(_cookie);

var _consts = __webpack_require__(13);

var _consts2 = _interopRequireDefault(_consts);

var _qs = __webpack_require__(3);

var _qs2 = _interopRequireDefault(_qs);

var _store = __webpack_require__(36);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var pnlogger = window.pnlogger;
if (!pnlogger) {
  pnlogger = window.pnlogger = function () {
    return {
      sendEvent: function sendEvent(action, key) {
        this.send(action, key);
      },
      sendPV: function sendPV() {
        this.send();
      },
      sendClick: function sendClick(key) {
        this.send('点击', key);
      },
      send: function send(action, key) {
        var data = {
          url: location.href,
          referer: document.referrer,
          clientType: _consts2['default'].clientType
        };

        var dvid = _cookie2['default'].get('dvid');
        var userId = _cookie2['default'].get('pnid');
        var channel = _qs2['default'].query.channel || _cookie2['default'].get('channel');

        if (action) {
          data.action = action;
        }

        if (key) {
          data.key = key;
        }

        if (dvid) {
          data.dvid = dvid;
        }

        if (userId) {
          data.userId = userId;
        }

        if (channel) {
          data.channel = channel;
        }

        var img = new Image();
        img.src = 'https://track.piaoniu.com/log?' + _qs2['default'].stringify(data);
        img.onload = img.onerror = function () {
          img.onload = img.onerror = null;
          _store2['default'].set('unlogger', '');
          document.body.removeChild(img);
        };

        _store2['default'].set('unlogger', {
          url: data.url,
          action: data.action,
          key: data.key
        });

        document.body.appendChild(img);
      }
    };
  }();

  pnlogger.sendPV();
}

exports['default'] = pnlogger;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

var _fetch2 = __webpack_require__(1);

var _fetch3 = _interopRequireDefault(_fetch2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $body = $('body');
var SELECTED = 'selected';

var Suggest = function () {
  function Suggest(input, config) {
    var _this = this;

    _classCallCheck(this, Suggest);

    var $input = this.$input = $(input);
    var debounce = config.debounce;
    var timeout = null;
    this.params = config.params;
    this.url = config.url;
    this.shown = false;
    this.getData = config.getData;

    $body.on('click', function () {
      _this.hide();
    });

    var keywords = $input.attr('data-keywords');
    if (keywords) {
      keywords = JSON.parse(keywords);
    }
    this.keywords = keywords;
    $input.on('click', function (e) {
      e.stopPropagation();
    });
    $input.on('focus', function () {
      var val = _this.$input.val().trim();
      _this.search(val);
    });
    this.data = config.data;
    this.$selectedItem = null;
    this.currentIndex = -1;
    this.$container = $("<div class='suggest-container'><ul class='suggest-item-list'></ul></div>");
    this.$ul = this.$container.find('ul');
    this.$container.appendTo($input.parent());
    if (config.renderItem) {
      this.renderItem = config.renderItem;
    }
    if (config.itemToText) {
      this.itemToText = config.itemToText;
    }

    var self = this;
    this.$input.closest('form').on('submit', function (e) {
      if (self.currentIndex >= 0 && self.shown) {
        e.preventDefault();
      }
    });
    this.$input.on('keyup', function (e) {
      if (e.which === 13) {
        if (_this.list && _this.list[_this.currentIndex]) {
          _this.selectItem(_this.list[_this.currentIndex], _this.currentIndex);
        }
        return;
      }

      if (e.which === 38) {
        _this.choosePrev();
        return;
      }

      if (e.which === 40) {
        _this.chooseNext();
        return;
      }

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        _this.search(_this.$input.val());
      }, debounce);
    });

    this.$container.hide();
  }

  Suggest.prototype.prevIndex = function prevIndex() {
    return this.currentIndex - 1;
  };

  Suggest.prototype.nextIndex = function nextIndex() {
    return this.currentIndex + 1;
  };

  Suggest.prototype.lastIndex = function lastIndex() {
    return this.items ? this.items.length - 1 : 0;
  };

  Suggest.prototype.show = function show() {
    this.shown = true;
    this.$container.show();
  };

  Suggest.prototype.hide = function hide() {
    var _this2 = this;

    setTimeout(function () {
      _this2.shown = false;
      _this2.$container.hide();
    }, 10);
  };

  Suggest.prototype.choosePrev = function choosePrev() {
    if (this.prevIndex() < 0) {
      this.chooseItem(this.lastIndex());
    } else {
      this.chooseItem(this.prevIndex());
    }
  };

  Suggest.prototype.chooseNext = function chooseNext() {
    if (this.nextIndex() > this.lastIndex()) {
      this.chooseItem(0);
    } else {
      this.chooseItem(this.nextIndex());
    }
  };

  Suggest.prototype.chooseItem = function chooseItem(n) {
    if (this.$selectedItem) {
      this.$selectedItem.removeClass(SELECTED);
    }
    var currentItem = this.items && this.items.length > n && this.items[n];
    if (currentItem) {
      currentItem.addClass(SELECTED);
      this.currentIndex = n;
      this.$selectedItem = currentItem;
    }
  };

  Suggest.prototype.itemToText = function itemToText(text) {
    return text;
  };

  Suggest.prototype.dataFilter = function dataFilter(data, v) {
    var _this3 = this;

    return data.filter(function (item) {
      return _this3.itemToText(item).indexOf(v) !== -1;
    });
  };

  Suggest.prototype.search = function search(val) {
    var keywords = this.keywords;
    if (!val) {
      if (keywords) {
        this.renderHead('热门搜索');
        this.render(keywords.map(function (i) {
          return i.keyword;
        }));
      }
      return;
    } else {
      this.clearHead();
    }
    if (this.data) {
      var data = this.dataFilter(this.data, val);
      this.render(data);
    } else {
      this.fetch(val);
    }
  };

  Suggest.prototype.fetch = function fetch(val) {
    var _this4 = this;

    if (this.getData) {
      this.getData().then(function (data) {
        _this4.render(data);
      });
    } else {
      (0, _fetch3['default'])({
        url: this.url.replace('{keyword}', val),
        data: this.params()
      }).on('success', function (data) {
        _this4.render(data);
      });
    }
  };

  Suggest.prototype.renderItem = function renderItem(item) {
    return $('<li class="suggest-item">' + item + '</li>');
  };

  Suggest.prototype.selectItem = function selectItem(item) {
    this.$input.val(this.itemToText(item));
    this.hide();
    this.emit('select', item);
  };

  Suggest.prototype.renderHead = function renderHead(text) {
    if (!this.$head) {
      this.$head = $('<div class="head">' + text + '</div>');
      this.$head.prependTo(this.$container);
    }
  };

  Suggest.prototype.clearHead = function clearHead() {
    if (this.$head) {
      this.$head.remove();
      this.$head = null;
    }
  };

  Suggest.prototype.render = function render(list) {
    var _this5 = this;

    if (!list || !list.length) {
      this.hide();
      return;
    }
    this.currentIndex = -1;
    this.list = list;
    this.$ul.empty();
    this.items = [];
    list.forEach(function (item, i) {
      var $item = _this5.renderItem(item);
      _this5.items.push($item);
      $item.on('mouseenter', function () {
        _this5.chooseItem(i);
      });
      $item.on('click', function (e) {
        e.stopPropagation();
        _this5.selectItem(item, i);
      });
      _this5.$ul.append($item);
    });
    this.show();
  };

  return Suggest;
}();

_event2['default'].mixin(Suggest);

exports['default'] = Suggest;

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

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $body = $('body');

var Overlay = function () {
  function Overlay() {
    var _this = this;

    _classCallCheck(this, Overlay);

    this.$el = $('<div class=\'overlay\'></div>');
    this.$el.appendTo($body).hide();
    this.$el.click(function () {
      _this.hide();
      _this.emit('tap');
    });
  }

  Overlay.prototype.show = function show() {
    this.$el.show();
    this.$el.animate({
      display: 'block',
      opacity: 0.7
    });
  };

  Overlay.prototype.hide = function hide() {
    var _this2 = this;

    this.$el.animate({
      opacity: 0
    }, function () {
      _this2.$el.hide();
    });
  };

  return Overlay;
}();

_event2['default'].mixin(Overlay);

exports['default'] = Overlay;

/***/ })

/******/ });
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/header/fancy-header.js.5a4b0a9f.map