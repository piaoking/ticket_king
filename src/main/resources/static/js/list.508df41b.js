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
/******/ 	return __webpack_require__(__webpack_require__.s = 457);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var config = {
  clientType: 20
};

exports["default"] = config;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Calendar 组件，用于渲染日历
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
/**
 * Usage:
 * new Calendar(container,options);
 *
 * Options:
 * date: defaultDate
 */


var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PREFIX = 'ui-calendar';
var CLASS_SPLITER = '-';
// 无效日期
var CLASS_INVALID = [PREFIX, 'invalid'].join(CLASS_SPLITER);
// 可选日期
var CLASS_AVAIL = [PREFIX, 'available'].join(CLASS_SPLITER);
// 星期
var CLASS_WEEK = [PREFIX, 'week'].join(CLASS_SPLITER);
// 容器
var CLASS_WRAPPER = [PREFIX, 'wrapper'].join(CLASS_SPLITER);
// 日期
var CLASS_DATE = [PREFIX, 'date'].join(CLASS_SPLITER);
// 默认日期
var CLASS_DATE_DEFAULT = [PREFIX, 'date', 'default'].join(CLASS_SPLITER);

var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

var weekdays = '日一二三四五六'.split('');

var Calendar = function () {
  function Calendar(container) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Calendar);

    this.container = container;
    this.rowByMonth = options.rowByMonth;
    this.weekdays = options.weekdays;
    this.firstDay = options.firstDay;
    this.defaultDate = options.defaultDate || today;
    this.renderDay = options.renderDay;
    var defaultDateAvailable = function defaultDateAvailable() {
      return true;
    };
    this.isDateAvailable = options.isDateAvailable || defaultDateAvailable;
    this.dateMapping = {};
    this._render();
  }

  Calendar.prototype.setYear = function setYear(year) {
    this.year = year;
    this._render();
  };

  Calendar.prototype.setMonth = function setMonth(month) {
    this.month = month;
    this._render();
  };
  /**
   * 跳转至去年
   * @return {[type]}
   */


  Calendar.prototype.prevYear = function prevYear() {
    this.setYear(this.year - 1);
    this._render();
  };
  /**
   * 跳转至明年
   * @return {[type]}
   */


  Calendar.prototype.nextYear = function nextYear() {
    this.setYear(this.year + 1);
    this._render();
  };
  /**
   * 跳转上一月
   * @return {[type]}
   */


  Calendar.prototype.prevMonth = function prevMonth() {
    var prevMonth = this.month - 1;
    if (prevMonth < 0) {
      this.setMonth(11);
      this.prevYear();
    } else {
      this.setMonth(prevMonth);
    }
    this.emit('change');
    this._render();
  };
  /**
   * 跳转下一月
   * @return {[type]}
   */


  Calendar.prototype.nextMonth = function nextMonth() {
    var nextMonth = this.month + 1;
    if (nextMonth > 11) {
      this.setMonth(0);
      this.nextYear();
    } else {
      this.setMonth(nextMonth);
    }
    this.emit('change');
    this._render();
  };

  Calendar.prototype._isLastMonth = function _isLastMonth(date) {
    var month = date.getMonth();
    return month < this.month || month === 11 && this.month === 0;
  };

  Calendar.prototype._isNextMonth = function _isNextMonth(date) {
    var month = date.getMonth();
    return month > this.month || month === 0 && this.month === 11;
  };

  Calendar.prototype._renderWeek = function _renderWeek() {
    var firstDay = this.firstDay;
    var text = null;
    var thead = $('<thead><tr /></thead>');
    var tr = thead.find('tr');
    var i;
    for (i = 0; i < 7; i++) {
      text = weekdays[(i + firstDay) % 7];
      $('<th />').addClass(CLASS_WEEK).html(text).appendTo(tr);
    }
    return thead;
  };

  Calendar.prototype._weeksInMonth = function _weeksInMonth() {
    var startDay = moment(this.calfirst);
    var monthEnd = moment().year(this.year).month(this.month).endOf('month');
    var ms = monthEnd.toDate() - startDay.toDate();
    return Math.ceil(ms / 1000 / 3600 / 24 / 7);
  };

  Calendar.prototype._renderDays = function _renderDays() {
    var ret = [];
    var currentDate = this.calfirst;
    var td = null;
    var i;
    var j;
    var tr;

    this.dateMapping = {};
    var rows = this.rowByMonth ? this._weeksInMonth() : 6;
    for (i = 0; i < rows; i++) {
      tr = $('<tr />');
      for (j = 0; j < 7; j++) {
        td = this._renderDay(currentDate);
        tr.append(td);
        this.dateMapping[moment(currentDate).format('YYYY-MM-DD')] = td;
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
      }
      ret.push(tr);
    }
    return ret;
  };

  Calendar.prototype._refreshDays = function _refreshDays() {
    var _this = this;

    this.wrap.find('td').each(function (i, td) {
      _this._refreshDay(td);
    });
  };
  /**
   * 更新
   * @param  {[type]} td
   * @return {[type]}
   */


  Calendar.prototype._refreshDay = function _refreshDay(td) {
    var date = td.data('date');
    var defaultDate = this.defaultDate;
    var dateString;
    if (!date) {
      return null;
    }

    if (this._isLastMonth(date)) {
      td.addClass('last_month').addClass(CLASS_INVALID);
    } else if (this._isNextMonth(date)) {
      td.addClass('next_month').addClass(CLASS_INVALID);
    } else {
      if (this.isDateAvailable(date)) {
        td.removeClass(CLASS_INVALID).addClass(CLASS_AVAIL);
      } else {
        td.removeClass(CLASS_AVAIL).addClass(CLASS_INVALID);
      }
    }
    dateString = date.toDateString();
    if (dateString === new Date().toDateString()) {
      td.addClass('today');
    }
    if (dateString === defaultDate.toDateString()) {
      td.addClass(CLASS_DATE_DEFAULT);
    }
    return td;
  };

  Calendar.prototype._renderDay = function _renderDay(date) {
    var td = $('<td />').addClass(CLASS_DATE);
    var customRenderDay = this.renderDay;
    td.data('date', date);

    td.html(date.getDate());

    this._refreshDay(td);

    if (customRenderDay) {
      customRenderDay(td, date);
    }
    return td;
  };

  Calendar.prototype.reload = function reload() {
    this._render();
  };

  Calendar.prototype._render = function _render() {
    var container = this.container;
    var wrap = this.wrap = $('<table />').addClass(CLASS_WRAPPER);
    var firstday = new Date(this.year, this.month, 1);
    var firstWeekDay = this.firstDay;
    var firstDate = 1 + firstWeekDay - firstday.getDay();

    var weektitle;
    var days;
    container.empty();

    this.calfirst = new Date(firstday.getFullYear(), firstday.getMonth(), firstDate // 当月第一天减去星期数
    );

    weektitle = this._renderWeek();
    days = this._renderDays();

    weektitle.appendTo(wrap);
    days.forEach(function (line) {
      line.appendTo(wrap);
    });
    container.append(this.wrap);
    this._bind();
    return this;
  };

  Calendar.prototype.cellForDate = function cellForDate(date) {
    return this.dateMapping[moment(date).format('YYYY-MM-DD')];
  };

  Calendar.prototype._bind = function _bind() {
    var self = this;
    var wrap = this.wrap;
    wrap.on('click', 'td', function cellTapped(e) {
      var td = $(this);
      if (td.hasClass('ui-calendar-invalid')) {
        e.stopPropagation();
      }
      var date = td.data('date');

      // if (!td.hasClass(CLASS_INVALID)) {
      self.emit('pick', {
        date: date,
        cell: td
      });
      // }
    });
  };

  _createClass(Calendar, [{
    key: 'container',
    set: function set(container) {
      this._container = $(container);
    },
    get: function get() {
      return this._container;
    }
  }, {
    key: 'firstDay',
    set: function set(day) {
      var _day;
      if (!day) {
        _day = 0;
      }
      this._firstDay = _day % 7;
    },
    get: function get() {
      return this._firstDay;
    }
  }, {
    key: 'defaultDate',
    set: function set(date) {
      this.year = date.getFullYear();
      this.month = date.getMonth();
      this.date = date.getDate();
      this._defaultDate = date;
    },
    get: function get() {
      if (this._defaultDate) {
        return this._defaultDate;
      }

      return today;
    }
  }, {
    key: 'humanMonth',
    get: function get() {
      return this.month + 1;
    }
  }, {
    key: 'month',
    set: function set(month) {
      this._month = month % 12;
    },
    get: function get() {
      return this._month;
    }
  }]);

  return Calendar;
}();

_event2['default'].mixin(Calendar);
exports['default'] = Calendar;

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

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _event = __webpack_require__(0);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // import fetch from 'fetch';


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

    this.selectionLayer = elem.find('.othercitylist');
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
      // self.setCurrent($(this).data('path'));
      location.href = $(this).data('path');
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
    $parent.scrollTop($item.offset().top - $ul.offset().top);
  };

  CityPicker.prototype.render = function render() {
    var $selectionLayer = this.selectionLayer;
    var city = window.city;
    var otherCity = JSON.parse(window.otherCity);
    var cityCapitalMap = {};
    var capitcals = [];

    otherCity.forEach(function (city) {
      var capital = city.firstLetter;
      if (!cityCapitalMap[capital]) {
        cityCapitalMap[capital] = [];
        capitcals.push(capital);
      }
      cityCapitalMap[capital].push(city);
    });

    $selectionLayer.html('\n      <div class="city-indexes">\n        <div class="title">\u6309\u5B57\u6BCD\u67E5\u627E</div>\n        <ul class="hot-city-capitcals">\n          ' + capitcals.map(function (c) {
      return '<li class="cap">' + c + '</li>';
    }).join('') + '\n        </ul>\n      </div>\n      <div class="hot-cities">\n        <ul>\n          ' + capitcals.map(function (c) {
      return '<li data-capital="' + c + '">\n              <div class="capital">' + c + '</div>\n              <ul class="items">\n                ' + cityCapitalMap[c].map(function (city) {
        return '<div class="item city-item" data-path=\'' + city.path + '\'>' + city.cityName + '</div>';
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
  // setCurrent(cityName) {
  //   location.href = '/' + cityName;
  // }
  // refreshCurrent() {
  //   return fetch({
  //     url: '/v1/cities/current'
  //   });
  // }
  // getActiveCities() {
  //   return fetch({
  //     url: '/v1/cities/active'
  //   });
  // }


  return CityPicker;
}();

_event2['default'].mixin(CityPicker);

exports['default'] = {
  init: function init(container, config) {
    return new CityPicker(container, config);
  }
};

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _logger = __webpack_require__(65);

var _logger2 = _interopRequireDefault(_logger);

var _qs = __webpack_require__(3);

var _qs2 = _interopRequireDefault(_qs);

var _moment = __webpack_require__(37);

var _moment2 = _interopRequireDefault(_moment);

var _calendar = __webpack_require__(247);

var _calendar2 = _interopRequireDefault(_calendar);

var _otherCityPicker = __webpack_require__(364);

var _otherCityPicker2 = _interopRequireDefault(_otherCityPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_otherCityPicker2['default'].init($('.other-city'));

$('.info .title, .info .buy').click(function handler() {
  var id = $(this).attr('data-id');
  var index = +$(this).closest('.item').attr('data-index');
  _logger2['default'].send('点击', '演出-' + (index + 1));
});

// 演出列表页城市其他城市选择
var otherCity = JSON.parse(window.otherCity);
otherCity.forEach(function (city) {
  if (city.selected) {
    $('.other-city').addClass('selected');
  }
});

$('.other-city').on('click', function () {
  $('.city-picker').removeClass('active');
  $('.citylist').hide();
});
$('.city-picker').on('click', function () {
  $('.other-city').removeClass('active');
  $('.othercitylist').hide();
});

_logger2['default'].send('event', '搜索结果-' + window.totalNum);

var CalendarFilter = function () {
  function CalendarFilter(duration) {
    var _this = this;

    _classCallCheck(this, CalendarFilter);

    var $itemCalendar = this.$itemCalendar = $('.item-calendar');

    this.start = duration.start;
    this.end = duration.end;
    this.initCalendar();
    this.initCalendarTitle();

    $itemCalendar.click(function (e) {
      e.stopPropagation();
      _this.$container.toggleClass('visible');
    });

    $('body').on('click', function () {
      _this.$container.removeClass('visible');
    });

    if (this.start) {
      this.calendar.setYear(this.start.getFullYear());
      this.calendar.setMonth(this.start.getMonth());
    }
    this.changeCalendarTitle();
  }

  CalendarFilter.prototype.initCalendar = function initCalendar() {
    var _this2 = this;

    var self = this;
    var $container = this.$container = $('<div class="date-picker">\n      <div class="calendar-title">\n          <div class="prev disabled"></div>\n          <div class="text"></div>\n          <div class="next disabled"></div>\n      </div>\n      <div class="calendar"></div>\n    </div>');
    var $calendarParent = this.$itemCalendar.parent();
    $container.appendTo($calendarParent);
    var calendar = this.calendar = new _calendar2['default']($container.find('.calendar'), {
      renderDay: function renderDay(td, date) {
        var format = 'YYYY-MM-DD';
        if (+self.start <= +date && +self.end >= +date) {
          td.addClass('selected');
        }
        if (+date < (0, _moment2['default'])().startOf('day').toDate()) {
          td.addClass('ui-calendar-invalid');
        }
      }
    });

    calendar.on('change', function () {
      _this2.changeCalendarTitle();
    });

    this.$container = $container;

    calendar.on('pick', function (e) {
      var startOfToday = (0, _moment2['default'])().startOf('day').toDate();
      var startTime = +(0, _moment2['default'])(e.date).startOf('day').toDate();
      var endTime = +(0, _moment2['default'])(e.date).endOf('day').toDate();
      var query = _qs2['default'].parse(location.search);
      var base = _this2.$itemCalendar.attr('data-base').split('?')[0];
      query.startTime = startTime;
      query.endTime = endTime;

      if (startTime >= startOfToday) {
        if (base.indexOf('/s_') > -1) {
          location.href = base + '_' + startTime + '_' + endTime;
        } else {
          location.href = base + '/s_' + startTime + '_' + endTime;
        }
        // location.href = base + '?' + qs.stringify(query)
      }
    });
  };

  CalendarFilter.prototype.initCalendarTitle = function initCalendarTitle() {
    var _this3 = this;

    var $container = this.$container;
    var prev = $container.find('.prev');
    var next = $container.find('.next');
    prev.on('click', function (e) {
      e.stopPropagation();
      _this3.calendar.prevMonth();
    });
    next.on('click', function (e) {
      e.stopPropagation();
      _this3.calendar.nextMonth();
    });
  };

  CalendarFilter.prototype.changeCalendarTitle = function changeCalendarTitle() {
    var calendarTitle = this.$container.find('.calendar-title .text');
    calendarTitle.text(this.calendar.year + '\u5E74' + this.calendar.humanMonth + '\u6708');
  };

  return CalendarFilter;
}();

var $selected = $('.filter-time .item.selected');
var index = $selected.index();
var duration = {};
var startOfToday = (0, _moment2['default'])().startOf('day').toDate();
if (index == 1) {
  duration = {
    start: startOfToday,
    end: (0, _moment2['default'])(startOfToday).add(1, 'week').add(-1, 'day').toDate()
  };
} else if (index == 2) {
  duration = {
    start: startOfToday,
    end: (0, _moment2['default'])(startOfToday).add(1, 'month').add(-1, 'day').toDate()
  };
} else if (index == 3) {
  duration = {
    start: (0, _moment2['default'])(startOfToday).endOf('week').add(-1, 'day').startOf('day').toDate(),
    end: (0, _moment2['default'])(startOfToday).endOf('week').toDate()
  };
}
var calendarFilter = new CalendarFilter(duration);

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
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/activity/list.js.9a76b925.map