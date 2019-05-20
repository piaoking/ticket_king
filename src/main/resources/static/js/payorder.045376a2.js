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
/******/ 	return __webpack_require__(__webpack_require__.s = 488);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var config = {
  clientType: 20
};

exports["default"] = config;

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

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fetch = __webpack_require__(1);

var _fetch2 = _interopRequireDefault(_fetch);

var _countdown = __webpack_require__(66);

var _countdown2 = _interopRequireDefault(_countdown);

var _mbox = __webpack_require__(25);

var _mbox2 = _interopRequireDefault(_mbox);

var _consts = __webpack_require__(13);

var _consts2 = _interopRequireDefault(_consts);

var _progress = __webpack_require__(2);

var _pinyou = __webpack_require__(17);

var _pinyou2 = _interopRequireDefault(_pinyou);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fetching = false;
var orderId;
var selectedType = null;
var huabeiInstallment = [];
var selectedInstallmentNum = null;
var showError = function showError(err) {
  _progress.shared.showMessage(err);
};

var QRPopup = function (_Mbox) {
  _inherits(QRPopup, _Mbox);

  function QRPopup(qrURL) {
    _classCallCheck(this, QRPopup);

    var _this = _possibleConstructorReturn(this, _Mbox.call(this, '微信支付'));

    _this.qrURL = qrURL;
    return _this;
  }

  QRPopup.prototype.renderContent = function renderContent() {
    return '<div class="wechat-qr-container">\n      <p>\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u4E00\u626B\uFF0C\u626B\u7801\u652F\u4ED8</p>\n      <img src="' + this.qrURL + '" />\n      <p class="hint-text">\u4E8C\u7EF4\u7801\u6709\u6548\u65F6\u957F\u4E3A2\u5C0F\u65F6, \u8BF7\u5C3D\u5FEB\u652F\u4ED8</p>\n    </div>';
  };

  return QRPopup;
}(_mbox2['default']);

var HuabeiPop = function (_Mbox2) {
  _inherits(HuabeiPop, _Mbox2);

  function HuabeiPop(total, items) {
    _classCallCheck(this, HuabeiPop);

    var _this2 = _possibleConstructorReturn(this, _Mbox2.call(this, '选择花呗分期', 'huabei-pop'));

    _this2.total = total;
    _this2.items = items;
    return _this2;
  }

  HuabeiPop.prototype.roundDown = function roundDown(num) {
    return (Math.floor(num * 100) / 100).toFixed(2);
  };

  HuabeiPop.prototype.renderContent = function renderContent() {
    var _this3 = this;

    var $elem = $('<div class="huabei-pop-container"></div>');
    this.items.forEach(function (item, i) {
      var installmentNum = item.installmentNum;
      var fee = _this3.roundDown(_this3.total * item.installmentRate / installmentNum);
      var eachPrice = _this3.roundDown(_this3.total / installmentNum + +fee);
      var $item = $('<div class="item">\n        <input type="radio" name=\'installmentNum\' id="installment-num-' + installmentNum + '" />\n        <label class="label" for="installment-num-' + installmentNum + '">\uFFE5' + eachPrice + ' x' + item.installmentNum + '\u671F</label>\n        <span class="fee">\u624B\u7EED\u8D39\uFFE5' + fee + '/\u6BCF\u671F</span>\n      </div>');
      if (i == 0) {
        selectedInstallmentNum = installmentNum;
        $item.find('input').prop('checked', true);
      }
      $item.on('click', function () {
        selectedInstallmentNum = item.installmentNum;
        _this3.emit('select', item.installmentNum);
      });
      $item.appendTo($elem);
    });
    var $btnPay = $('<div class="btn-submit">立即支付</div>');
    $btnPay.on('click', function () {
      payOrder();
    });
    $elem.append($btnPay);
    return $elem;
  };

  return HuabeiPop;
}(_mbox2['default']);

// 日后考虑与移动端公用这块逻辑


var submitToPay = function submitToPay(paymentType, data) {
  orderId = data.orderId;
  if (paymentType === 5) {
    location.href = 'https://mapi.alipay.com/gateway.do?' + data.paymentParameters;
  } else if (paymentType === 8) {
    var popup = new QRPopup(data.paymentParameters);
    var timeout = null;
    var fetchResultByOrderId = function fetchResult(_orderId) {
      (0, _fetch2['default'])({
        url: '/v1/order/' + _orderId + '/status'
      }).on('success', function successHandler(d) {
        var status = d.status;
        if (status === 3) {
          location.href = '/order/weixinpay-finish?orderId=' + _orderId;
          clearTimeout(timeout);
        } else {
          timeout = setTimeout(function () {
            fetchResultByOrderId(_orderId);
          }, 1000);
        }
      });
    };
    fetchResultByOrderId(orderId);
    popup.pop();
  } else if (paymentType === 9) {
    location.href = data.paymentParameters.url;
  } else if (paymentType === 13) {
    location.href = 'https://mapi.alipay.com/gateway.do?' + data.paymentParameters;
  } else if (paymentType === 17) {
    var paymentParameters = data.paymentParameters;
    var urlHead = location.host.indexOf('beta') !== -1 ? 'http://test.sandlife.com.cn/index.php/openapi/sandcps_order/gopay?' : 'http://www.sandlife.com.cn/index.php/openapi/sandcps_order/gopay?';
    var url = urlHead + encodeURIComponent(data.paymentParameters);

    var form = $('<form action="' + url + '" method="post"></form>');

    for (var key in paymentParameters) {
      var inputItem = $('<input type="text" name="' + key + '" value="' + paymentParameters[key] + '" />');
      form.append(inputItem);
    }

    $('body').append(form);

    form.submit();

    // $.post('http://test.sandlife.com.cn/index.php/openapi/sandcps_order/gopay?' + data.paymentParameters, function(data) {
    //   console.log(data)
    // })
  }
};

var payOrder = function payOrder() {
  _pinyou2['default'].trackOrderPay(paymentAmount);
  payWithOrderId(window.orderId, selectedType);
};

var payWithOrderId = function payWithOrderId(_orderId, paymentType) {
  var data = {};
  data.paymentType = paymentType;

  if (window.paymentAmount == 0) {
    (0, _fetch2['default'])({
      method: 'post',
      url: '/v1/order/' + _orderId + '/pay',
      data: {
        paymentAmount: 0,
        paymentType: 100
      }
    }).then(function (result) {
      if (!result.success) {
        showError(result.errorMsg);
        return;
      }
      location.href = '/user/orderdetail/' + _orderId;
    });
    return;
  }

  if (fetching) {
    return;
  }
  data.paymentAmount = window.paymentAmount;
  data.paymentType = paymentType;

  if (window.paymentAmount == 0) {
    fetching = true;
    (0, _fetch2['default'])({
      method: 'post',
      url: '/v1/order/' + _orderId + '/pay',
      data: {
        paymentAmount: 0,
        paymentType: 100
      }
    }).then(function (result) {
      fetching = false;
      if (!result.success) {
        showError(result.errorMsg);
        return;
      }
      location.href = '/user/orderdetail/' + _orderId;
    })['catch'](function () {
      fetching = false;
    });
    return;
  }

  if (paymentType == 13 && selectedInstallmentNum == null) {
    popHuabei();
    return;
  }

  if (selectedInstallmentNum) {
    data.huabeiInstallmentNum = selectedInstallmentNum;
  }

  fetching = true;
  (0, _fetch2['default'])({
    method: 'post',
    url: '/v1/order/' + _orderId + '/pay',
    data: data
  }).on('success', function (result) {
    submitToPay(paymentType, result);
  }).on('error', showError).on('complete', function () {
    fetching = false;
  });
};

$(function () {
  orderId = window.orderId;
  var $numHour = $('#num-hour');
  var $numMinute = $('#num-minute');
  var $numSecond = $('#num-second');
  $('.btn-submit').click(function () {
    payOrder();
  });
  var countDown = new _countdown2['default'](window.timeLeft / 1000);
  countDown.on('tick', function (data) {
    $numHour.text(data.hour);
    $numMinute.text(data.minute);
    $numSecond.text(data.second);
  });
  countDown.on('end', function () {});

  (0, _fetch2['default'])({
    url: '/v1/order/' + orderId + '/paymentTypes',
    data: {
      ct: _consts2['default'].clientType
    }
  }).on('success', function (result) {
    var $paymentTypes = $('.payment-types');
    var $selections = $paymentTypes.find('.selections .item');
    var paymentTypes = result.paymentTypes;

    huabeiInstallment = result.huabeiInstallment;

    var $defaultRadio = void 0;

    $selections.each(function (i, el) {
      var $el = $(el);
      var $input = $el.find('input');
      var dataType = +$input.attr('data-type');
      console.log('dataType', dataType);
      if (paymentTypes.indexOf(dataType) !== -1) {
        if (!$defaultRadio) {
          $defaultRadio = $input;
          selectedType = dataType;
        }
        $el.show();
      }
      if ($defaultRadio) {
        $paymentTypes.show();
        $defaultRadio.attr('checked', true);
      }

      if (window.paymentAmount == 0) {
        $paymentTypes.find('.title').hide();
        $paymentTypes.show();
      }
    });
  });
});
$('.selections .radio[data-type="5"]').prop('checked', true);

function selectOrigin(selectedType) {
  $('.selections .radio[data-type="' + selectedType + '"]').prop('checked', true);
}

function popHuabei() {
  var pop = new HuabeiPop(window.paymentAmount, huabeiInstallment);
  pop.show();
  pop.on('select', function (num) {
    selectedInstallmentNum = num;
  });
  pop.on('close', function () {
    selectedInstallmentNum = null;
  });
}

$('.selections img, .selections .radio').click(function selectionImageClicked() {
  var $radio = $(this).parent().find('.radio');
  $radio.prop('checked', true);
  var type = +$radio.attr('data-type');
  selectedType = type;
  if (type == 13) {
    popHuabei();
  }
});

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CountDown = function () {
  function CountDown(timeLeft) {
    var _this = this;

    _classCallCheck(this, CountDown);

    this.timeLeft = timeLeft * 1000;
    this.endTime = new Date().getTime() + this.timeLeft;
    this.interval = setInterval(function () {
      _this.calTime();
    }, 1000);
    setTimeout(function () {
      _this.calTime();
    });
  }

  CountDown.prototype.fillNum = function fillNum(num) {
    if (num >= 10) {
      return '' + num;
    } else {
      return '0' + num;
    }
  };

  CountDown.prototype.calTime = function calTime() {
    var unitInSecond = 1000;
    var unitInMinute = unitInSecond * 60;
    var unitInHour = unitInMinute * 60;
    var unitInDay = unitInHour * 24;
    var milliSeconds = this.timeLeft;

    if (milliSeconds <= 0) {
      clearInterval(this.interval);
      this.emit('end');
    } else {
      this.timeLeft = this.endTime - new Date().getTime();
      var days = Math.floor(milliSeconds / unitInDay);
      var hours = Math.floor((milliSeconds - days * unitInDay) / unitInHour);
      var minutes = Math.floor((milliSeconds - days * unitInDay - hours * unitInHour) / unitInMinute);
      var seconds = Math.floor((milliSeconds - days * unitInDay - hours * unitInHour - minutes * unitInMinute) / unitInSecond);
      var data = {
        day: this.fillNum(days),
        hour: this.fillNum(hours),
        minute: this.fillNum(minutes),
        second: this.fillNum(seconds)
      };
      data.text = data.hour + ':' + data.minute + ':' + data.second;
      this.emit('tick', data);
    }
  };

  return CountDown;
}();

_event2['default'].mixin(CountDown);

exports['default'] = CountDown;

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
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/order/payorder.js.498b36d8.map