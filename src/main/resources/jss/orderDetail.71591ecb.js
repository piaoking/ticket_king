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
/******/ 	return __webpack_require__(__webpack_require__.s = 502);
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

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pop = __webpack_require__(48);

var _pop2 = _interopRequireDefault(_pop);

var _fetch = __webpack_require__(1);

var _fetch2 = _interopRequireDefault(_fetch);

var _progress = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cancel = function cancel(orderId) {
  _pop2['default'].confirm('确认取消订单?', null, function (i) {
    if (i === 1) {
      (0, _fetch2['default'])({
        method: 'put',
        url: '/v1/order/' + orderId + '/cancel'
      }).on('success', function () {
        location.reload();
      });
    }
  });
};

var refund = function refund() {
  _pop2['default'].confirm('确认取消订单?', null, function (i) {
    if (i === 1) {
      (0, _fetch2['default'])({
        method: 'put',
        url: '/v1/order/' + orderId + '/refund'
      }).on('success', function () {
        location.reload();
      });
    }
  });
};

var urge = function urge(orderId) {
  (0, _fetch2['default'])({
    method: 'post',
    url: '/v1/order/' + orderId + '/urge'
  }).on('success', function (result) {
    _pop2['default'].alert(result.title, result.desc, '知道了');
  }).on('error', function (err) {
    _progress.shared.showMessage(err);
  });
};

var confirm = function confirm(orderId) {
  _pop2['default'].confirm('确认收货后，钱就转给商家了哦~', null, function (i) {
    if (i === 1) {
      (0, _fetch2['default'])({
        method: 'put',
        url: '/v1/order/' + orderId + '/confirmTickets'
      }).on('success', function () {
        location.reload();
      });
    }
  });
};

exports['default'] = {
  cancel: cancel,
  confirm: confirm,
  refund: refund,
  urge: urge
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

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _orderUtil = __webpack_require__(242);

var _orderUtil2 = _interopRequireDefault(_orderUtil);

var _fetch = __webpack_require__(1);

var _fetch2 = _interopRequireDefault(_fetch);

var _progress = __webpack_require__(2);

var _pop = __webpack_require__(48);

var _pop2 = _interopRequireDefault(_pop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var orderId = window.orderId;

$('tr').each(function (i, el) {
  var $el = $(el);
  var $ticketCategory = $el.find('.ticket-category');
  var $salePrice = $el.find('.sale-price');
  var $num = $el.find('.num');
  var group = $el.attr('data-group');
  // if (group) {
  //   group = JSON.parse(group)
  //   $ticketCategory.html(group.map((item) => {
  //     return '票档：' + item.specification + '<span style="margin-left:10px">' + item.areaName + '</span>'
  //   }).join('<br />'))
  //   $salePrice.html(group.map((item) => {
  //     return "￥" + item.salePrice
  //   }).join('<br />'))
  //   $num.html(group.map((item) => {
  //     var $lz = ''
  //     if (window.hasSeat) {
  //       let $img = (item.continuousSeat && item.count > 2) ? `<img src="${$num.attr('data-img')}" />` : ''
  //       let $text = item.count > 1 ? (item.continuousSeat ? '连座' : '不连座') : ''

  //       $lz = `<div class="lz">${$img}${$text}</div>`
  //     }
  //     return 'x' + item.count + $lz
  //   }).join('<br />'))
  //   console.log('group', group)
  // }
});

$('.lz img').on('click', function () {
  _pop2['default'].alert('连座说明', '3张以上尽量连座', '知道了');
});

$('.cancel').on('click', function () {
  _orderUtil2['default'].cancel(orderId);
});

$('.confirm').on('click', function () {
  _orderUtil2['default'].confirm(orderId);
});

$('.refund-new').fancybox();

$('.refund').on('click', function () {
  _orderUtil2['default'].refund(orderId);
});

$('.btn-urge').on('click', function () {
  if ($(this).attr('disabled')) {
    _progress.shared.showMessage('一天只能催单一次哦');
  } else {
    $(this).attr('disabled', true);
    _orderUtil2['default'].urge(orderId);
  }
});

(0, _fetch2['default'])({
  url: '/v1/order/' + window.orderId
}).then(function (data) {
  if (data.couponPackage) {
    $('.hongbao').show();
  }

  if (data.popIcon && data.popIcon.poster) {
    $('.hongbao').css('cursor', 'pointer').attr('src', data.popIcon.poster).click(function () {
      location.href = data.popIcon.schema;
    }).show();
  }
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
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/user/orderDetail.js.6970d937.map