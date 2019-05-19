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
/******/ 	return __webpack_require__(__webpack_require__.s = 486);
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

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _mbox = __webpack_require__(25);

var _mbox2 = _interopRequireDefault(_mbox);

var _pop = __webpack_require__(48);

var _pop2 = _interopRequireDefault(_pop);

var _AreaPicker = __webpack_require__(256);

var _AreaPicker2 = _interopRequireDefault(_AreaPicker);

var _fetch = __webpack_require__(1);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fetching = false;

var AddressPicker = function (_Mbox) {
  _inherits(AddressPicker, _Mbox);

  function AddressPicker() {
    _classCallCheck(this, AddressPicker);

    return _possibleConstructorReturn(this, _Mbox.call(this, '新增收货'));
  }

  AddressPicker.prototype.renderContent = function renderContent() {
    var _this2 = this;

    var $content = $('<div class="content address-picker">\n      <div class="row">\n        <label class="label">\u59D3\u540D</label>\n        <input class="input input-name"/>\n      </div>\n      <div class="row">\n        <label class="label">\u5730\u533A</label>\n        <div class="input-area">\n          <select class="select field-province"></select>\n          <select class="select field-city"></select>\n          <select class="select field-district"></select>\n        </div>\n      </div>\n      <div class="row">\n        <label class="label">\u8857\u9053</label>\n        <input class="input input-address" maxlength=50 />\n      </div>\n      <div class="row">\n        <label class="label">\u624B\u673A</label>\n        <input class="input input-mobile" maxlength=11 />\n      </div>\n      <div class="row-btn">\n        <button class="btn-submit">\u4FDD\u5B58</button>\n        <button href="javascript:;" class="btn-cancel">\u53D6\u6D88</button>\n      </div>\n    </div>');

    var $btnSubmit = $content.find('.btn-submit');
    // 省市区选择
    var picker1 = this.provincePicker = new _AreaPicker2['default']($content.find('.field-province'), true);
    var picker2 = this.cityPicker = new _AreaPicker2['default']($content.find('.field-city'));
    var picker3 = this.districtPicker = new _AreaPicker2['default']($content.find('.field-district'));
    picker1.setNextLevel(picker2);
    picker2.setNextLevel(picker3);
    picker1.fetch();

    $content.find('.btn-cancel').click(function () {
      _this2.hide();
    });

    $btnSubmit.click(function () {
      _this2.submit();
    });

    return $content;
  };

  AddressPicker.prototype.showError = function showError(err) {
    alert(err);
  };

  AddressPicker.prototype.submit = function submit() {
    var _this3 = this;

    var receiverMobile = this.content.find('.input-mobile').val().trim();
    var receiverName = this.content.find('.input-name').val().trim();
    var province = this.provincePicker.val();
    var city = this.cityPicker.val();
    var district = this.districtPicker.val();
    var address = this.content.find('.input-address').val().trim();
    var data;

    if (!receiverName) {
      this.showError('请填写姓名');
      return;
    }
    if (!province || !city || !district) {
      this.showError('请选择地区');
      return;
    }
    if (!address) {
      this.showError('请填写街道');
      return;
    }
    if (!receiverMobile) {
      this.showError('请填写手机号');
      return;
    }

    if (!receiverMobile.match(/^1\d{10}/)) {
      this.showError('手机号格式错误');
      return;
    }

    data = {
      phone: receiverMobile,
      name: receiverName,
      district: [province.name, city.name, district.name].join(' '),
      districtCode: district.code,
      address: address
    };

    if (fetching) {
      return;
    }
    fetching = true;
    (0, _fetch2['default'])({
      method: 'post',
      url: '/v1/myaddress',
      data: data
    }).on('success', function (resp) {
      data.id = resp.data;
      location.reload();
      _this3.emit('add', data);
    }).on('error', function (err) {
      _this3.showError(err);
    }).on('complete', function () {
      fetching = false;
    });
  };

  return AddressPicker;
}(_mbox2['default']);

var addressPicker = new AddressPicker();

var add = function add(cb) {
  return addressPicker.show().once('add', cb);
};

var remove = function remove(id, cb) {
  _pop2['default'].confirm('确定删除地址？', null, function () {
    (0, _fetch2['default'])({
      method: 'delete',
      url: '/v1/myaddress/' + id
    }).on('success', function () {
      cb();
    }).on('error', function (err) {});
  });
};

exports['default'] = {
  remove: remove,
  add: add
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _overlay = __webpack_require__(9);

var _overlay2 = _interopRequireDefault(_overlay);

var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $body = $('body');

var Mbox = function () {
  function Mbox(title, clz) {
    var _this = this;

    _classCallCheck(this, Mbox);

    var overlay = this.overlay = new _overlay2['default']();
    this.elem = $('<div class="mbox">\n      <div class="close"></div>\n      <div class="title">' + (title || '') + '</div>\n    </div>');

    if (clz) {
      this.elem.addClass(clz);
    }
    this.elem.find('.close').click(function () {
      _this.close();
    });

    this.elem.appendTo($body);
    overlay.on('tap', function () {
      _this.close();
    });

    setTimeout(function () {
      var $content = _this.content = _this.renderContent();
      _this.elem.append($content);
    }, 0);

    this.elem.hide();
  }

  Mbox.prototype.renderContent = function renderContent() {
    return $('<div class="content">add something in subclass</div>');
  };

  Mbox.prototype.pop = function pop() {
    this.elem.show();
    this.overlay.show();
    return this;
  };

  Mbox.prototype.show = function show() {
    console.warn('this will be deprecate use pop instead');
    this.elem.show();
    this.overlay.show();
    return this;
  };

  Mbox.prototype.close = function close() {
    this.hide();
  };

  Mbox.prototype.hide = function hide() {
    this.emit('close');
    console.warn('this will be deprecate use close instead');
    this.elem.hide();
    this.overlay.hide();
    return this;
  };

  return Mbox;
}();

_event2['default'].mixin(Mbox);

exports['default'] = Mbox;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fetch2 = __webpack_require__(1);

var _fetch3 = _interopRequireDefault(_fetch2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var districtCache = {};

var AreaPicker = function () {
  function AreaPicker(el, isRoot) {
    _classCallCheck(this, AreaPicker);

    var self = this;
    this.isRoot = isRoot;
    this.elem = $(el);
    this.select = this.elem;
    this.select.on('change', function () {
      self.updateSelect();
    });
  }

  AreaPicker.prototype.updateSelect = function updateSelect() {
    var $select = this.select;
    var code = $select.val();
    if (this.isRoot) {
      if (!this.selected) {
        $select.find('option:eq(0)').remove();
        this.selected = true;
      }
    }
    if (this.nextLevel) {
      this.nextLevel.reset();
      this.nextLevel.fetch(code);
    }
    this.selected = true;
  };

  AreaPicker.prototype.reset = function reset() {
    this.selected = false;
    this.select.empty();
    if (this.nextLevel) {
      this.nextLevel.hide();
    }
  };

  AreaPicker.prototype.val = function val() {
    if (!this.selected) {
      return null;
    }
    return {
      name: this.select.find('option:selected').text(),
      code: this.select.val()
    };
  };

  AreaPicker.prototype.fill = function fill(data) {
    var select = this.select;
    var isRoot = this.isRoot;
    var count = data.length;
    if (isRoot && !this.selected) {
      data.unshift({
        name: '请选择',
        code: 0
      });
    }
    data.forEach(function (item, i) {
      var opt = $('<option />');
      if (count === 1 && i === 0) {
        opt.attr('selected', true);
      }
      opt.html(item.name);
      opt.val(item.code);
      select.append(opt);
    });
    if (!this.isRoot) {
      this.updateSelect();
    }
  };

  AreaPicker.prototype.setNextLevel = function setNextLevel(picker) {
    this.nextLevel = picker;
  };

  AreaPicker.prototype.show = function show() {
    this.elem.show();
  };

  AreaPicker.prototype.hide = function hide() {
    this.elem.hide();
  };

  AreaPicker.prototype.fetch = function fetch(parent) {
    var self = this;
    var cacheKey = parent;
    var params = {};
    if (!cacheKey) {
      cacheKey = 0;
    }
    if (districtCache[cacheKey]) {
      self.fill(districtCache[cacheKey]);
      self.show();
      return;
    }
    if (parent) {
      params.parentCode = parent;
    }
    (0, _fetch3['default'])({
      url: '/v1/myaddress/district',
      data: params
    }).on('success', function (data) {
      districtCache[cacheKey] = data;
      self.fill(data);
      self.show();
    });
  };

  return AreaPicker;
}();

exports['default'] = AreaPicker;

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

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  idCardValid: function idCardValid(cardNo) {
    return this.idCardInfo(cardNo).isTrue;
  },
  idCardInfo: function idCardInfo(cardNo) {
    var info = {
      isTrue: false,
      year: null,
      month: null,
      day: null,
      isMale: false,
      isFemale: false
    };
    if (!cardNo || cardNo.length !== 15 && cardNo.length !== 18) {
      info.isTrue = false;
      return info;
    }
    if (cardNo.length === 15) {
      var year = cardNo.substring(6, 8);
      var month = cardNo.substring(8, 10);
      var day = cardNo.substring(10, 12);
      var p = cardNo.substring(14, 15);
      var birthday = new Date(year, parseFloat(month) - 1, parseFloat(day));
      // 对于老身份证中的年龄则不需考虑千年虫问题而使用getYear()方法
      if (birthday.getYear() !== parseFloat(year) || birthday.getMonth() !== parseFloat(month) - 1 || birthday.getDate() !== parseFloat(day)) {
        info.isTrue = false;
      } else {
        info.isTrue = true;
        info.year = birthday.getFullYear();
        info.month = birthday.getMonth() + 1;
        info.day = birthday.getDate();
        if (p % 2 === 0) {
          info.isFemale = true;
          info.isMale = false;
        } else {
          info.isFemale = false;
          info.isMale = true;
        }
      }
      return info;
    }
    if (cardNo.length === 18) {
      var _year = cardNo.substring(6, 10);
      var _month = cardNo.substring(10, 12);
      var _day = cardNo.substring(12, 14);
      var _p = cardNo.substring(14, 17);
      var _birthday = new Date(_year, parseFloat(_month) - 1, parseFloat(_day));
      // 这里用getFullYear()获取年份，避免千年虫问题
      if (_birthday.getFullYear() !== parseFloat(_year) || _birthday.getMonth() !== parseFloat(_month) - 1 || _birthday.getDate() !== parseFloat(_day)) {
        info.isTrue = false;
        return info;
      }
      var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子
      var Y = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X
      // 验证校验位
      var sum = 0; // 声明加权求和变量
      var _cardNo = cardNo.split('');

      if (_cardNo[17].toLowerCase() === 'x') {
        _cardNo[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
      }
      for (var _i = 0; _i < 17; _i++) {
        sum += Wi[_i] * _cardNo[_i]; // 加权求和
      }
      var i = sum % 11; // 得到验证码所位置

      if (Number(_cardNo[17]) !== Y[i]) {
        info.isTrue = false;
        return info;
      }
      info.isTrue = true;
      info.year = _birthday.getFullYear();
      info.month = _birthday.getMonth() + 1;
      info.day = _birthday.getDate();
      if (_p % 2 === 0) {
        info.isFemale = true;
        info.isMale = false;
      } else {
        info.isFemale = false;
        info.isMale = true;
      }
      return info;
    }
    return info;
  }
};

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DealBlock = function () {
  function DealBlock(container, totalAmount) {
    _classCallCheck(this, DealBlock);

    this.totalAmount = +totalAmount;
    this.postage = {
      postage: 0,
      postageOrigin: 0,
      postageDesc: '无需邮费'
    };
    this.container = container;
    this.$price = container.find('.deal .price');
    var $campaign = container.find('.campaign');
    // this.campaignAmount = $campaign.length ? +$campaign.attr('data-amount') : 0
    this.campaignId = $campaign.length ? +$campaign.attr('data-id') : null;
    // container.find('select').on('change', () => {
    //   this.calFinal();
    // });
    this.paymentAmount = this.calFinal();
    this.calFinal();
  }

  DealBlock.prototype.selectedCoupon = function selectedCoupon() {
    var $option = this.container.find('.select option:selected');

    if (!$option.length) {
      return null;
    }
    return {
      id: $option.data('id'),
      amount: $option.data('amount')
    };
  };

  DealBlock.prototype.selectedCampaign = function selectedCampaign() {
    var $campaignCheck = this.container.find('.choose-campaign');
    var $checked = $campaignCheck.is(':checked');
    if (!$checked) {
      this.campaignId = null;
      return null;
    }
    this.campaignId = $campaignCheck.data('id');
    return {
      id: $campaignCheck.data('id'),
      amount: $campaignCheck.data('amount')
    };
  };

  DealBlock.prototype.setPostage = function setPostage(postage) {
    this.postage = postage;
    var $text = this.container.find('.postage .text');
    var $postage = this.container.find('.postage .price');
    $text.text(postage.postageDesc);
    $postage.text('¥' + postage.postage);
    this.calFinal();
  };

  DealBlock.prototype.calFinal = function calFinal() {
    var campaign = this.selectedCampaign();
    var coupon = this.coupon = this.selectedCoupon();
    this.campaignAmount = campaign ? campaign.amount : 0;
    this.paymentAmount = this.totalAmount - (coupon ? coupon.amount : 0);
    this.paymentAmount -= this.campaignAmount;
    if (coupon) {
      this.container.find('.coupon .price').html('<span class="amount">-\xA5' + (+coupon.amount).toFixed(2) + '</span>');
    }

    this.paymentAmount += +this.postage.postage;
    if (this.paymentAmount <= 0) {
      this.paymentAmount = 0;
    }
    this.$price.html('\xA5' + this.paymentAmount.toFixed(2));
  };

  return DealBlock;
}();

exports['default'] = DealBlock;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _mbox = __webpack_require__(25);

var _mbox2 = _interopRequireDefault(_mbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseBox = function (_Mbox) {
  _inherits(BaseBox, _Mbox);

  function BaseBox(message, buttons) {
    _classCallCheck(this, BaseBox);

    var _this = _possibleConstructorReturn(this, _Mbox.call(this));

    _this.elem.addClass('popbox');
    _this.message = message;
    _this.buttons = buttons;
    return _this;
  }

  BaseBox.prototype.renderContent = function renderContent() {
    var _this2 = this;

    var $content = $('\n        <div class=\'content\'>\n          <div class=\'message\'>' + this.message + '</div>\n          <div class=\'buttons\'></div>\n        </div>\n    ');
    var $buttons = $content.find('.buttons');

    this.buttons.forEach(function (item) {
      var $btn = $('<div class="btn">' + item.text + '</div>');
      $btn.addClass('btn-' + item.type);
      $btn.click(function () {
        if (item.func) {
          item.func.apply(_this2);
        }
      });
      $btn.appendTo($buttons);
    });
    return $content;
  };

  return BaseBox;
}(_mbox2['default']);

var confirm = function confirm(title, buttons, callback) {
  new BaseBox(title, buttons || [{
    text: '取消',
    type: 'link',
    func: function handler() {
      this.hide();
      callback && callback(0);
    }
  }, {
    text: '确定',
    type: 'primary',
    func: function handler() {
      this.hide();
      callback && callback(1);
    }
  }]).show();
};

var alert = function alert(title, desc, btnTitle, callback) {
  new BaseBox('<div class="title">' + title + '</div><div class="desc">' + desc + '</div>', [{
    text: btnTitle,
    type: 'primary',
    func: function handler() {
      this.hide();
      callback && callback(1);
    }
  }]).show();
};

exports['default'] = {
  confirm: confirm,
  alert: alert
};

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addressManager = __webpack_require__(240);

var _addressManager2 = _interopRequireDefault(_addressManager);

var _dealblock = __webpack_require__(367);

var _dealblock2 = _interopRequireDefault(_dealblock);

var _fetch = __webpack_require__(1);

var _fetch2 = _interopRequireDefault(_fetch);

var _qs = __webpack_require__(3);

var _validator = __webpack_require__(366);

var _validator2 = _interopRequireDefault(_validator);

var _progress = __webpack_require__(2);

var _pinyou = __webpack_require__(17);

var _pinyou2 = _interopRequireDefault(_pinyou);

var _pop = __webpack_require__(48);

var _pop2 = _interopRequireDefault(_pop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

$('.lz img').on('click', function () {
  _pop2['default'].alert('连座说明', '3张以上尽量连座', '知道了');
});

var fetching = false;
var receiveType = 1;
var $deliveryTypes = $('.delivery-type .item');
var subtotal = 0;

$('.subtotal').each(function (i, el) {
  var _subtotal = 0;
  var $el = $(el);
  var ticketGroup = $el.attr('data-ticket-groups');
  var amount = $el.attr('data-amount');

  if (ticketGroup) {
    JSON.parse(ticketGroup).forEach(function (ticket) {
      _subtotal += ticket.salePrice * ticket.count;
    });
  } else if (amount) {
    _subtotal = amount;
  }

  $el.text('¥' + _subtotal);
  subtotal += +_subtotal;
});

if ($('#subtotal').length) {
  subtotal = $('#subtotal').text();
}
var dealBlock = new _dealblock2['default']($('.total'), subtotal, 0);
var showError = function showError(err) {
  _progress.shared.showMessage(err);
};

var selectType = function selectType(el) {
  var $this = $(el);
  receiveType = +$this.data('type');

  $deliveryTypes.removeClass('selected');
  $this.addClass('selected');

  if (receiveType === 3) {
    $('.compensate').hide();
    $('.compensate-onsite').show();
  } else {
    $('.compensate').show();
    $('.compensate-onsite').hide();
  }

  $('.type-block').hide();
  $('.type-block-' + ($this.index() + 1)).show();
  if (receiveType === 1) {
    dealBlock.setPostage(window.postage);
  } else {
    dealBlock.setPostage({
      postage: 0,
      postageOrigin: 0,
      postageDesc: '无需邮费'
    });
  }
};

$deliveryTypes.click(function onSelectType() {
  selectType(this);
});

selectType($('.delivery-type .item')[0]);

var $radios = $('.address .radio');
var $hintBar = $('.current-hint');

function radioChanged($radio) {
  var $li = $radio.parent();
  var index = $radios.index($radio);
  if (index < 0) {
    return;
  }
  $('.address.selected').removeClass('selected');
  $li.addClass('selected');
  $hintBar.css({
    top: 25 + index * 40
  });
}

$radios.on('change', function onAddressRadioChange() {
  radioChanged($(this));
});

radioChanged($('.address .radio[checked]'));

$('.btn-add').click(function onAddAddress(e) {
  e.preventDefault();
  _addressManager2['default'].add(function () {
    location.reload();
  });
});

function widgetValue(id) {
  var elem = $('#addition-' + id);
  var type = elem.attr('data-type');
  if (type == 1) {
    return elem.find('.input').val();
  } else if (type == 2) {
    return elem.find('.textarea').val();
  } else if (type == 3) {
    return elem.find('.radio').filter(function (i, el) {
      return $(el).prop('checked');
    }).map(function (i, el) {
      return $(el).parent().find('.lbl').text();
    }).get().join('、');
  } else if (type == 4) {
    return elem.find('.checkbox').filter(function (i, el) {
      return $(el).prop('checked');
    }).map(function (i, el) {
      return $(el).parent().find('.lbl').text();
    }).get().join('、');
  }
}

var $checkbox = $('.choose-campaign');
var $campaignPrice = $('.campaign .price');
var $campaignAmount = $('.campaign').data('amount');
$('.select').change(function () {
  $checkbox.attr('checked', false);
  $campaignPrice.text('-\uFFE50');
  dealBlock.calFinal();
});
$checkbox.click(function () {
  var isChecked = $checkbox.is(':checked');
  if (isChecked) {
    $('.select').val('不使用优惠券');
    $campaignPrice.text('-\uFFE5' + $campaignAmount);
  } else {
    $campaignPrice.text('-\uFFE50');
  }
  dealBlock.calFinal();
});

$('.btn-purchase').click(function onSubmitOrder() {
  var postage = receiveType === 1 ? window.postage : {
    postageDesc: '',
    postageOrigin: 0,
    postage: 0
  };
  var addition = [];

  console.log(_qs.query.ticketGroupDetails);
  var data = {
    ticketGroupDetails: JSON.parse(_qs.query.ticketGroupDetails),
    receiveType: receiveType,
    totalAmount: dealBlock.totalAmount + postage.postage,
    paymentAmount: +dealBlock.paymentAmount.toFixed(2),
    couponIds: (dealBlock.coupon ? [dealBlock.coupon.id] : []).filter(function (a) {
      return a;
    }),
    campaignIds: dealBlock.campaignId ? [dealBlock.campaignId] : [],
    postageContext: postage,
    addition: addition,
    supplement: $('#supplement').val() || ''
  };
  var $selectedAddress = $('.address.selected');

  var additionComponents = window.additionComponents;
  if (additionComponents) {
    for (var i = 0; i < additionComponents.length; i++) {
      var widget = additionComponents[i];
      var value = widgetValue(widget.id);
      if (widget.required && !value) {
        if (widget.type == 1 || widget.type == 2) {
          showError('请填写' + widget.label);
          return;
        } else {
          showError('请选择' + widget.label);
          return;
        }
      }

      if (value.length > 200) {
        showError(widget.label + '超出200字限制');
        return;
      }

      addition.push({
        id: widget.id,
        label: widget.label,
        value: value
      });
    }
  }

  if (receiveType === 1) {
    if (!$selectedAddress.length) {
      showError('请添加收货地址');
      return;
    }

    data.receiverAddressId = +$selectedAddress.data('id');
    data.receiverName = $selectedAddress.data('name');
    data.receiverMobile = $selectedAddress.data('phone');
  } else {
    data.receiverMobile = $('.receiver-mobile-' + receiveType).val();
    data.receiverName = $('.receiver-name-' + receiveType).val();
  }

  if (receiveType === 4 && $('#receiverIDCard').length) {
    data.idCardNumber = $('#receiverIDCard').val();
    if (!data.idCardNumber) {
      showError('请填写身份证号');
      return;
    }
    if (data.idCardNumber && !_validator2['default'].idCardValid(data.idCardNumber)) {
      showError('身份证号不正确');
      return;
    }
  }

  data.receiverMobile = data.receiverMobile + '';
  if (!data.receiverName) {
    showError('请填写收货人姓名');
    return;
  }

  if (!data.receiverMobile) {
    showError('请填写收货人手机号');
    return;
  }

  data.orderIdCards = $('.receiver-info').map(function (i, el) {
    var name = $(el).find('.input-name').val().trim();
    var idcard = $(el).find('.input-idcard').val().trim();
    var idCardType = +$(el).find('.input-idcardType').val();
    return {
      name: name,
      idCard: idcard,
      idCardType: idCardType
    };
  }).get();

  // console.log('data.orderIdCards', data.orderIdCards)

  if (data.orderIdCards.some(function (info) {
    return !info.name || !info.idCard;
  })) {
    showError('请完整填写所有实名登记信息');
    return;
  }

  if (fetching) {
    return;
  }

  fetching = true;

  _pinyou2['default'].trackOrderConfirm(data.paymentAmount);
  (0, _fetch2['default'])({
    url: '/v1/order',
    method: 'post',
    data: data
  }).on('success', function (result) {
    location.href = '/order/' + result.orderId + '/pay';
  }).on('error', showError).on('complete', function () {
    fetching = false;
  });
});

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
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/order/confirm.js.53368b71.map