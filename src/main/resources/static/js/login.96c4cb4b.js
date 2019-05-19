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
    return __webpack_require__(__webpack_require__.s = 500);
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

    /***/ 13:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;
        var config = {
            clientType: 20
        };

        exports["default"] = config;

        /***/
    }),

    /***/ 186:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var VCodeButton = function VCodeButton(elem, mobileElem, url, $captchaRow) {
            var _this = this;

            _classCallCheck(this, VCodeButton);

            var $elem = $(elem);
            var count = 60;
            var originCount = count;
            var originText = $elem.val();
            var interval = null;

            var updateCaptcha = function updateCaptcha() {
                $imgCaptcha.attr('src', '/api/v1/user/captcha');
            };
            // let $btnCaptcha = $captchaRow.find('.btn-captcha');
            var $imgCaptcha = $captchaRow.find('img');
            var $inputCaptcha = $captchaRow.find('input');
            var needCaptcha = false;
            // $btnCaptcha.click(updateCaptcha)
            $imgCaptcha.click(updateCaptcha);

            function reset() {
                $elem.val(originText);
                $elem.attr('disabled', false);
                count = originCount;
                clearInterval(interval);
                interval = null;
            }

            function countDown() {
                $elem.val(count + '\u79D2\u540E\u91CD\u65B0\u53D1\u9001');
                count--;
                if (count == 0) {
                    reset();
                }
            }

            $elem.click(function () {
                if (interval) {
                    return;
                }
                if (!mobileElem.val()) {
                    return _this.emit('error', '请填写手机号');
                }

                $elem.attr('disabled', false);
                var data = {
                    ua: mobileElem.val()
                };
                if (needCaptcha) {
                    data.captcha = $inputCaptcha.val();
                }
                _this.emit('send');
                (0, _fetch2['default'])({
                    method: 'post',
                    url: url,
                    data: data
                }).on('success', function (resp) {
                    if (!resp.success) {
                        _this.emit('error', resp.errorMsg);
                        if (resp.needCaptcha) {
                            needCaptcha = true;
                            $captchaRow.show();
                        }
                        return;
                    }

                    interval = setInterval(function () {
                        countDown();
                    }, 1000);
                    countDown();
                }).on('error', function (err) {
                    _this.emit('error', err);
                    reset();
                });
            });
        };

        _event2['default'].mixin(VCodeButton);

        exports['default'] = VCodeButton;

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

    /***/ 3:
    /***/ (function (module, exports, __webpack_require__) {

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

        /***/
    }),

    /***/ 500:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _consts = __webpack_require__(13);

        var _consts2 = _interopRequireDefault(_consts);

        var _qs = __webpack_require__(3);

        var _VCodeButton = __webpack_require__(186);

        var _VCodeButton2 = _interopRequireDefault(_VCodeButton);

        var _progress = __webpack_require__(2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        var $btnSubmit = $('.btn-submit');
        var $linkSwitchLogin = $('.link-switch-login');
        var $loginFields = $('.login-fields');
        var $quickLoginFields = $('.quick-login-fields');
        var $hint = $('.login-form .hint');
        var vcodeButton = new _VCodeButton2['default']($('.quick-login-fields .row-mobile .btn-vcode'), $('.quick-login-fields .input-mobile'), '/v3/user/sendLoginCode', $('.quick-login-fields .row-captcha'));
        vcodeButton.on('error', showErr);
        vcodeButton.on('send', hideErr);

        var showQuickLogin = true;

        $linkSwitchLogin.on('click', function () {
            showQuickLogin = !showQuickLogin;
            if (showQuickLogin) {
                $linkSwitchLogin.text('普通登录');
                $loginFields.hide();
                $quickLoginFields.show();
            } else {
                $linkSwitchLogin.text('手机号快速登录');
                $loginFields.show();
                $quickLoginFields.hide();
            }
        });

        function showErr(err) {
            $hint.html(err);
            $hint.css('visibility', 'visible');
        }

        function hideErr() {
            $hint.css('visibility', 'hidden');
        }

        function loginSuccess() {
            _progress.shared.showMessage('登录成功！');
            setTimeout(function () {
                location.href = _qs.query.redir ? _qs.query.redir : '/';
            }, 500);
        }

        function loginSubmit() {
            $btnSubmit.attr('disabled', true);
            var $inputMobile = $('.login-fields .input-mobile');
            var $inputPassword = $('.login-fields .input-password');
            var $normalCaptcha = $('.login-fields .normal-captcha');
            var $normalCaptchaImg = $normalCaptcha.find('img');
            var $vCode = $normalCaptcha.find('input');

            if (!$inputMobile.val()) {
                return showErr('手机号未填写');
            }

            if (!$inputPassword.val()) {
                return showErr('密码未填写');
            }

            (0, _fetch2['default'])({
                method: 'post',
                url: '/v1/user/login',
                data: {
                    ct: _consts2['default'].clientType,
                    ua: $inputMobile.val(),
                    pw: $inputPassword.val(),
                    captcha: $vCode.val()
                }
            }).on({
                success: function success(res) {
                    if (res.needCaptcha) {
                        $normalCaptcha.show();
                        return;
                    }
                    loginSuccess();
                },
                error: function error(err) {
                    if (err === '图形验证码错误') {
                        hideErr();
                        _progress.shared.showMessage(err);
                        $vCode.val('');
                        $normalCaptchaImg.attr('src', '/api/v1/user/captcha');
                    } else {
                        showErr("密码与账户名不符，<a href='/user/resetPassword'>忘记密码？</a>");
                    }
                },
                complete: function complete() {
                    $btnSubmit.attr('disabled', false);
                }
            })['catch'](function () {
            });
        }

        function quickLoginSubmit() {
            $btnSubmit.attr('disabled', true);
            var $inputMobile = $('.quick-login-fields .input-mobile');
            var $inputVCode = $('.quick-login-fields .row-vcode .input-vcode');

            function showErr(err) {
                $hint.html(err);
                $hint.css('visibility', 'visible');
            }

            if (!$inputMobile.val()) {
                return showErr('手机号未填写');
            }

            if (!$inputVCode.val()) {
                return showErr('验证码未填写');
            }

            (0, _fetch2['default'])({
                method: 'post',
                url: '/v1/user/login',
                data: {
                    ct: _consts2['default'].clientType,
                    ua: $inputMobile.val(),
                    code: $inputVCode.val()
                }
            }).on({
                success: loginSuccess,
                error: function error(err) {
                    showErr(err);
                },
                complete: function complete() {
                    $btnSubmit.attr('disabled', false);
                }
            });
        }

        $btnSubmit.on('click', function () {
            if (showQuickLogin) {
                quickLoginSubmit();
            } else {
                loginSubmit();
            }
        });

        /***/
    })

    /******/
});
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/user/login.js.2dbf09f4.map