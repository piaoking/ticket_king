/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// identity function for calling harmony imports with the correct context
    /******/
    __webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/                configurable: false,
                /******/                enumerable: true,
                /******/                get: getter
                /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 499);
    /******/
})
/************************************************************************/
/******/({

    /***/ 0:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

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

        /***/
    }),

    /***/ 1:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

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

        /***/
    }),

    /***/ 2:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

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

        /***/
    }),

    /***/ 499:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _progress = __webpack_require__(2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        $('.text-btn').click(function handler() {
            var $activity = $(this).closest('.activity');
            var activityId = $activity.data('id');

            (0, _fetch2['default'])({
                method: 'DELETE',
                url: '/v1/activity/favorite/' + activityId + '?type=0'
            }).on('success', function () {
                _progress.shared.showMessage('取消关注成功');
                setTimeout(function () {
                    location.reload();
                }, 500);
            }).on('error', function (err) {
                _progress.shared.showMessage(err);
            });
        });

        /***/
    })

    /******/
});
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/user/favorite.js.16dec185.map