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
    return __webpack_require__(__webpack_require__.s = 456);
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

    /***/ 102:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

// Sticky Plugin v1.0.3 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

        (function (factory) {
            factory(jQuery);
        })(function ($) {
            var slice = Array.prototype.slice; // save ref to original slice()
            var splice = Array.prototype.splice; // save ref to original slice()

            var defaults = {
                    topSpacing: 0,
                    bottomSpacing: 0,
                    className: 'is-sticky',
                    wrapperClassName: 'sticky-wrapper',
                    center: false,
                    getWidthFrom: '',
                    widthFromWrapper: true, // works only when .getWidthFrom is empty
                    responsiveWidth: false
                },
                $window = $(window),
                $document = $(document),
                sticked = [],
                windowHeight = $window.height(),
                scroller = function scroller() {
                    var scrollTop = $window.scrollTop(),
                        documentHeight = $document.height(),
                        dwh = documentHeight - windowHeight,
                        extra = scrollTop > dwh ? dwh - scrollTop : 0;

                    for (var i = 0, l = sticked.length; i < l; i++) {
                        var s = sticked[i],
                            elementTop = s.stickyWrapper.offset().top,
                            etse = elementTop - s.topSpacing - extra;

                        //update height in case of dynamic content
                        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

                        if (scrollTop <= etse) {
                            if (s.currentTop !== null) {
                                s.stickyElement.css({
                                    'width': '',
                                    'position': '',
                                    'top': ''
                                });
                                s.stickyElement.parent().removeClass(s.className);
                                s.stickyElement.trigger('sticky-end', [s]);
                                s.currentTop = null;
                            }
                        } else {
                            var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                            if (newTop < 0) {
                                newTop = newTop + s.topSpacing;
                            } else {
                                newTop = s.topSpacing;
                            }
                            if (s.currentTop !== newTop) {
                                var newWidth;
                                if (s.getWidthFrom) {
                                    newWidth = $(s.getWidthFrom).width() || null;
                                } else if (s.widthFromWrapper) {
                                    newWidth = s.stickyWrapper.width();
                                }
                                if (newWidth == null) {
                                    newWidth = s.stickyElement.width();
                                }
                                s.stickyElement.css('width', newWidth).css('position', 'fixed').css('top', newTop);

                                s.stickyElement.parent().addClass(s.className);

                                if (s.currentTop === null) {
                                    s.stickyElement.trigger('sticky-start', [s]);
                                } else {
                                    // sticky is started but it have to be repositioned
                                    s.stickyElement.trigger('sticky-update', [s]);
                                }

                                if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
                                    // just reached bottom || just started to stick but bottom is already reached
                                    s.stickyElement.trigger('sticky-bottom-reached', [s]);
                                } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
                                    // sticky is started && sticked at topSpacing && overflowing from top just finished
                                    s.stickyElement.trigger('sticky-bottom-unreached', [s]);
                                }

                                s.currentTop = newTop;
                            }

                            // Check if sticky has reached end of container and stop sticking
                            var stickyWrapperContainer = s.stickyWrapper.parent();
                            var unstick = s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight() && s.stickyElement.offset().top <= s.topSpacing;

                            if (unstick) {
                                s.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0);
                            } else {
                                s.stickyElement.css('position', 'fixed').css('top', newTop).css('bottom', '');
                            }
                        }
                    }
                },
                resizer = function resizer() {
                    windowHeight = $window.height();

                    for (var i = 0, l = sticked.length; i < l; i++) {
                        var s = sticked[i];
                        var newWidth = null;
                        if (s.getWidthFrom) {
                            if (s.responsiveWidth) {
                                newWidth = $(s.getWidthFrom).width();
                            }
                        } else if (s.widthFromWrapper) {
                            newWidth = s.stickyWrapper.width();
                        }
                        if (newWidth != null) {
                            s.stickyElement.css('width', newWidth);
                        }
                    }
                },
                methods = {
                    init: function init(options) {
                        var o = $.extend({}, defaults, options);
                        return this.each(function () {
                            var stickyElement = $(this);

                            var stickyId = stickyElement.attr('id');
                            var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
                            var wrapper = $('<div></div>').attr('id', wrapperId).addClass(o.wrapperClassName);

                            stickyElement.wrapAll(wrapper);

                            var stickyWrapper = stickyElement.parent();

                            if (o.center) {
                                stickyWrapper.css({
                                    width: stickyElement.outerWidth(),
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                });
                            }

                            if (stickyElement.css("float") === "right") {
                                stickyElement.css({
                                    "float": "none"
                                }).parent().css({
                                    "float": "right"
                                });
                            }

                            o.stickyElement = stickyElement;
                            o.stickyWrapper = stickyWrapper;
                            o.currentTop = null;

                            sticked.push(o);

                            methods.setWrapperHeight(this);
                            methods.setupChangeListeners(this);
                        });
                    },

                    setWrapperHeight: function setWrapperHeight(stickyElement) {
                        var element = $(stickyElement);
                        var stickyWrapper = element.parent();
                        if (stickyWrapper) {
                            stickyWrapper.css('height', element.outerHeight());
                        }
                    },

                    setupChangeListeners: function setupChangeListeners(stickyElement) {
                        if (window.MutationObserver) {
                            var mutationObserver = new window.MutationObserver(function (mutations) {
                                if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
                                    methods.setWrapperHeight(stickyElement);
                                }
                            });
                            mutationObserver.observe(stickyElement, {
                                subtree: true,
                                childList: true
                            });
                        } else {
                            try {
                                stickyElement.addEventListener('DOMNodeInserted', function () {
                                    methods.setWrapperHeight(stickyElement);
                                }, false);
                                stickyElement.addEventListener('DOMNodeRemoved', function () {
                                    methods.setWrapperHeight(stickyElement);
                                }, false);
                            } catch (e) {
                            }
                        }
                    },
                    update: scroller,
                    unstick: function unstick(options) {
                        return this.each(function () {
                            var that = this;
                            var unstickyElement = $(that);

                            var removeIdx = -1;
                            var i = sticked.length;
                            while (i-- > 0) {
                                if (sticked[i].stickyElement.get(0) === that) {
                                    splice.call(sticked, i, 1);
                                    removeIdx = i;
                                }
                            }
                            if (removeIdx !== -1) {
                                unstickyElement.unwrap();
                                unstickyElement.css({
                                    'width': '',
                                    'position': '',
                                    'top': '',
                                    'float': ''
                                });
                            }
                        });
                    }
                };

            // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
            if (window.addEventListener) {
                window.addEventListener('scroll', scroller, false);
                window.addEventListener('resize', resizer, false);
            } else if (window.attachEvent) {
                window.attachEvent('onscroll', scroller);
                window.attachEvent('onresize', resizer);
            }

            $.fn.sticky = function (method) {
                if (methods[method]) {
                    return methods[method].apply(this, slice.call(arguments, 1));
                } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
                    return methods.init.apply(this, arguments);
                } else {
                    $.error('Method ' + method + ' does not exist on jQuery.sticky');
                }
            };

            $.fn.unstick = function (method) {
                if (methods[method]) {
                    return methods[method].apply(this, slice.call(arguments, 1));
                } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
                    return methods.unstick.apply(this, arguments);
                } else {
                    $.error('Method ' + method + ' does not exist on jQuery.sticky');
                }
            };
            $(function () {
                setTimeout(scroller, 0);
            });
        });

        /***/
    }),

    /***/ 12:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _cookie = __webpack_require__(8);

        var _cookie2 = _interopRequireDefault(_cookie);

        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _bus = __webpack_require__(14);

        var _bus2 = _interopRequireDefault(_bus);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

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

    /***/ 14:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

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

        /***/
    }),

    /***/ 16:
    /***/ (function (module, exports, __webpack_require__) {

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

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

        /***/
    }),

    /***/ 17:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        function trackLogin(userId) {
            (function (w, d, s, l, a) {
                w._CommandName_ = l;
                w[l] = w[l] || function () {
                    (w[l].q = w[l].q || []).push(arguments);
                    w[l].track = function () {
                        (w[l].q[w[l].q.length - 1].t = []).push(arguments);
                    };
                    return w[l];
                }, w[l].a = a, w[l].l = 1 * new Date();
                var c = d.createElement(s);
                c.async = 1;
                c.src = '//fm.ipinyou.com/j/a.js';
                var h = d.getElementsByTagName(s)[0];
                h.parentNode.insertBefore(c, h);
            })(window, document, 'script', 'py', 'iH84T..h2R4ELvdcseiX9ST7DnIWP');
            py('event', 'register', {
                'id': userId
            }).track('iH84T.yC2.GueJX2ZkYwYhc6-LP34ZV_');
        }

        function trackRegister(userId) {
            (function (w, d, s, l, a) {
                w._CommandName_ = l;
                w[l] = w[l] || function () {
                    (w[l].q = w[l].q || []).push(arguments);
                    w[l].track = function () {
                        (w[l].q[w[l].q.length - 1].t = []).push(arguments);
                    };
                    return w[l];
                }, w[l].a = a, w[l].l = 1 * new Date();
                var c = d.createElement(s);
                c.async = 1;
                c.src = '//fm.ipinyou.com/j/a.js';
                var h = d.getElementsByTagName(s)[0];
                h.parentNode.insertBefore(c, h);
            })(window, document, 'script', 'py', 'iH84T..h2R4ELvdcseiX9ST7DnIWP');
            py('event', 'register', {
                'id': userId
            }).track('iH84T.4C2.Wq3xndmEMBm6AWI1rk3aMX');
        }

        function trackOrderConfirm(money) {
            (function (w, d, s, l, a) {
                w._CommandName_ = l;
                w[l] = w[l] || function () {
                    (w[l].q = w[l].q || []).push(arguments);
                    w[l].track = function () {
                        (w[l].q[w[l].q.length - 1].t = []).push(arguments);
                    };
                    return w[l];
                }, w[l].a = a, w[l].l = 1 * new Date();
                var c = d.createElement(s);
                c.async = 1;
                c.src = '//fm.ipinyou.com/j/a.js';
                var h = d.getElementsByTagName(s)[0];
                h.parentNode.insertBefore(c, h);
            })(window, document, 'script', 'py', 'iH84T..h2R4ELvdcseiX9ST7DnIWP');
            py('event', 'order', {
                'id': '11111111',
                'money': money
            }).track('iH84T.8C2.MalZTgzCgomi-X_s9I1AcP');
        }

        function trackOrderPay(money) {
            (function (w, d, s, l, a) {
                w._CommandName_ = l;
                w[l] = w[l] || function () {
                    (w[l].q = w[l].q || []).push(arguments);
                    w[l].track = function () {
                        (w[l].q[w[l].q.length - 1].t = []).push(arguments);
                    };
                    return w[l];
                }, w[l].a = a, w[l].l = 1 * new Date();
                var c = d.createElement(s);
                c.async = 1;
                c.src = '//fm.ipinyou.com/j/a.js';
                var h = d.getElementsByTagName(s)[0];
                h.parentNode.insertBefore(c, h);
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

        /***/
    }),

    /***/ 175:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Tip = function () {
            function Tip() {
                _classCallCheck(this, Tip);

                this.elem = $("<div class='tip'></div>");
                this.elem.appendTo($('body'));
                this.elem.hide();
            }

            Tip.prototype.text = function text(_text) {
                this.elem.text(_text);
            };

            Tip.prototype.html = function html(_html) {
                this.elem.html(_html);
            };

            Tip.prototype.attachTo = function attachTo(elem, width) {
                this.elem.css('width', width || 180);
                this.elem.show();
                this.elem.css('top', elem.offset().top + elem.height() + 10);
                this.elem.css('left', elem.offset().left + elem.width() / 2 - this.elem.width() / 2);
            };

            Tip.prototype.hide = function hide() {
                this.elem.hide();
            };

            return Tip;
        }();

        exports['default'] = new Tip();

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

    /***/ 22:
    /***/ (function (module, exports) {

        module.exports = "<div class=\"light-login quick-login mbox\">\n  <div class=\"close\"></div>\n  <div class=\"titles\">\n    <div class=\"title-quick-login\">快捷登录</div>\n    <div class=\"title-login\">密码登录</div>\n  </div>\n\n  <form method=\"post\" class=\"form form-quick-login\">\n    <div class=\"row\">\n      <input placeholder=\"手机号\" name=\"ua\" maxlength=\"11\" class=\"input input-mobile\" />\n    </div>\n    <div class=\"row row-vcode\">\n      <input placeholder=\"图形验证码\" name=\"vcode\" class=\"input input-vcode\" />\n      <img src=\"/api/v1/user/captcha\" class=\"vcode\" />\n      <!-- <div class=\"btn btn-vcode\">换一张</div> -->\n    </div>\n    <div class=\"row row-getcode\">\n      <input placeholder=\"验证码\" maxlength=\"6\" name=\"code\" class=\"input input-getcode\" />\n      <div class=\"btn btn-getcode disabled\">获取验证码</div>\n    </div>\n    <div class=\"row\">\n      <input type=\"submit\" class=\"btn btn-submit\" value=\"登录\" />\n    </div>\n    <div class=\"hint\">免注册，登录即创建票牛账户</div>\n  </form>\n  \n  <form method=\"post\" class=\"form form-login\">\n    <div class=\"row\">\n      <input placeholder=\"手机号\" name=\"ua\" maxlength=\"11\" class=\"input input-mobile\">\n    </div>\n    <div class=\"row\">\n      <input type=\"password\" name=\"pw\" placeholder=\"密码\" class=\"input input-password\">\n    </div>\n    <div class=\"row row-vcode form-login-vcode\">\n      <input placeholder=\"请输入验证码\" name=\"captcha\" class=\"input input-vcode\" />\n      <img src=\"/api/v1/user/captcha\" class=\"vcode\" />\n    </div>\n    <div class=\"row\">\n      <input type=\"submit\" class=\"btn btn-submit\" value=\"登录\" />\n    </div>\n  </form>\n</div>\n";

        /***/
    }),

    /***/ 247:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        /**
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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

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

        /***/
    }),

    /***/ 25:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _overlay = __webpack_require__(9);

        var _overlay2 = _interopRequireDefault(_overlay);

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

        /***/
    }),

    /***/ 254:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var PickerBase = function () {
            function PickerBase(container) {
                _classCallCheck(this, PickerBase);

                this.container = container;
            }

            PickerBase.prototype.initMore = function initMore() {
                var _this = this;

                if (window.isB2C) {
                    return;
                }
                var $more = this.container.find('.more');
                if (this.$items.height() > 80) {
                    this.$items.css('height', 70);
                    $more.show();
                } else {
                    $more.hide();
                    this.$items.css('height', '');
                }
                $more.click(function () {
                    $more.hide();
                    _this.$items.css('height', '');
                });
            };

            PickerBase.prototype.show = function show() {
                this.container.show();
            };

            return PickerBase;
        }();

        exports['default'] = PickerBase;

        /***/
    }),

    /***/ 257:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;
        exports["default"] = {
            formatPrice: function formatPrice(price) {
                var fixed = +price.toFixed(2);
                var num = +price.toFixed(0);
                if (fixed === num) {
                    return num;
                } else {
                    return fixed;
                }
            },
            break2decimal: function break2decimal(price) {
                var val = Math.floor(price * 100) / 100;
                return val.toFixed(2);
            }
        };

        /***/
    }),

    /***/ 26:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _jQuery = __webpack_require__(7);

        var _jQuery2 = _interopRequireDefault(_jQuery);

        var _lightLogin = __webpack_require__(16);

        var _lightLogin2 = _interopRequireDefault(_lightLogin);

        var _progress = __webpack_require__(2);

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        __webpack_require__(50);

        __webpack_require__(57);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var ReviewItem = function () {
            function ReviewItem(li) {
                var _this = this;

                _classCallCheck(this, ReviewItem);

                var self = this;
                var $li = (0, _jQuery2['default'])(li);
                this.$li = $li;
                this.id = $li.attr('data-id');
                this.requesting = false;
                this.$likeBtn = $li.find('.btn-like');
                this.likes = +this.$likeBtn.attr('data-likes');
                this.$likeBtn.click(function () {
                    if (_this.requesting) {
                        return;
                    }
                    if (_this.$likeBtn.hasClass('btn-liked')) {
                        _this.unlike();
                    } else {
                        _this.like();
                    }
                });

                var $editBtn = $li.find('.btn-edit');

                var $replyBtn = this.$replyBtn = $li.find('.btn-reply');
                this.replies = +$replyBtn.attr('data-replies');
                $replyBtn.on('click', function (e) {
                    e.preventDefault();
                    if (window.isDetail) {
                        _this.emit('reply', _this.id);
                    } else {
                        location.href = '/review/' + _this.id + '#reply';
                    }
                });

                $li.find('.content').click(function (e) {
                    if (window.isDetail) {
                        e.preventDefault();
                    }
                });

                var $imgs = $li.find('.img');
                var imageUrls = $imgs.map(function (i, img) {
                    return (0, _jQuery2['default'])(img).attr('data-url');
                }).get();

                if ($imgs.length) {
                    $imgs.fancybox({
                        live: false
                    });
                }
            }

            ReviewItem.prototype.popLiked = function popLiked() {
            };

            ReviewItem.prototype.addReplyCount = function addReplyCount() {
                this.replies++;
                this.$replyBtn.text(this.replies + '\u56DE\u590D');
            };

            ReviewItem.prototype.like = function like() {
                var _this2 = this;

                _lightLogin2['default'].assureLogin(function () {
                    _this2.requesting = true;
                    (0, _fetch2['default'])({
                        method: 'post',
                        url: '/v1/reviews/' + _this2.id + '/like'
                    }).on({
                        success: function success() {
                            _this2.popLiked();
                            _this2.likes++;
                            _this2.$likeBtn.addClass('btn-liked');
                            _this2.$likeBtn.text(_this2.likes + '赞');
                        },
                        error: function error(err) {
                            _progress.shared.showMessage(err);
                        },
                        complete: function complete() {
                            _this2.requesting = false;
                        }
                    });
                });
            };

            ReviewItem.prototype.unlike = function unlike() {
                var _this3 = this;

                (0, _fetch2['default'])({
                    method: 'post',
                    url: '/v1/reviews/' + this.id + '/cancelLike'
                }).on({
                    success: function success() {
                        _this3.likes--;
                        _this3.$likeBtn.removeClass('btn-liked');
                        _this3.$likeBtn.text((_this3.likes > 0 ? _this3.likes : '') + '赞');
                    },
                    error: function error(err) {
                        _progress.shared.showMessage(err);
                    },
                    complete: function complete() {
                        _this3.requesting = false;
                    }
                });
            };

            return ReviewItem;
        }();

        _event2['default'].mixin(ReviewItem);

        exports['default'] = ReviewItem;

        /***/
    }),

    /***/ 292:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

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

        var NumPicker = function () {
            function NumPicker() {
                var _this = this;

                var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                _classCallCheck(this, NumPicker);

                var defaultCanModify = function defaultCanModify() {
                    return true;
                };
                var canModify = option.canModify || defaultCanModify;
                this.elem = $('\n          <div class="num-picker">\n              <div class="minus">-</div>\n              <input class="input" disabled value="1" />\n              <div class="plus">+</div>\n          </div>\n          ');

                this.elem.click(function (e) {
                    e.stopPropagation();
                });

                this.input = this.elem.find('.input');

                this.elem.find('.plus').click(function () {
                    var newValue = +_this.input.val() + 1;
                    if (canModify(newValue)) {
                        _this.input.val(newValue);
                        _this.emit('change', newValue);
                    } else {
                        _this.emit('ban');
                    }
                });

                this.elem.find('.minus').click(function () {
                    var newValue = +_this.input.val() - 1;
                    if (canModify(newValue)) {
                        _this.input.val(newValue);
                        _this.emit('change', newValue);
                    } else {
                        _this.emit('ban');
                    }
                });
            }

            NumPicker.prototype.val = function val(_val) {
                if (_val) {
                    this.input.val(_val);
                } else {
                    return this.input.val();
                }
            };

            NumPicker.prototype.appendTo = function appendTo(parent) {
                this.elem.appendTo(parent);
            };

            NumPicker.prototype.hide = function hide() {
                this.elem.hide();
            };

            NumPicker.prototype.show = function show() {
                this.elem.show();
            };

            return NumPicker;
        }();

        _event2['default'].mixin(NumPicker);

        exports['default'] = NumPicker;

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

    /***/ 340:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _user = __webpack_require__(12);

        var _user2 = _interopRequireDefault(_user);

        var _lightLogin = __webpack_require__(16);

        var _lightLogin2 = _interopRequireDefault(_lightLogin);

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

        var BaseFavButton = function () {
            function BaseFavButton(container, activityId, type) {
                var _this = this;

                _classCallCheck(this, BaseFavButton);

                this.type = type;
                var $fav = this.$fav = $(container);

                this.activityId = activityId;
                this.requesting = false;

                if (_user2['default'].isLogin()) {
                    this.isFaved().then(function (faved) {
                        _this.setFaved(faved);
                        _this.$fav.show();
                    });
                } else {
                    setTimeout(function () {
                        _this.setFaved(false);
                        _this.$fav.show();
                    });
                }

                $fav.click(function () {
                    if ($fav.hasClass('disabled')) {
                        return;
                    }
                    if (!_user2['default'].isLogin()) {
                        _lightLogin2['default'].assureLogin(function () {
                            _this.isFaved().then(function () {
                                _this.fav();
                            });
                        });
                    } else {
                        _this.toggleFav();
                    }
                });
            }

            BaseFavButton.prototype.toggleFav = function toggleFav() {
                if (this.requesting) {
                    return;
                }
                if (this.faved) {
                    this.unfav();
                } else {
                    this.fav();
                }
            };

            BaseFavButton.prototype.isFaved = function isFaved() {
                var url = '/v1/activity/favorite/' + this.activityId + '?type=' + this.type;
                return new Promise(function (resolve) {
                    (0, _fetch2['default'])({
                        method: 'get',
                        url: url
                    }).on('success', function (result) {
                        resolve(result.favored);
                    });
                });
            };

            BaseFavButton.prototype.setFaved = function setFaved(faved) {
                this.faved = faved;
                if (faved) {
                    this.emit('faved');
                    this.$fav.addClass('faved');
                } else {
                    this.emit('unfaved');
                    this.$fav.removeClass('faved');
                }
            };

            BaseFavButton.prototype.fav = function fav() {
                var _this2 = this;

                this._favReq().on('success', function () {
                    _this2.requesting = false;
                    _this2.setFaved(true);
                    _this2.emit('fav');
                });
            };

            BaseFavButton.prototype.unfav = function unfav() {
                var _this3 = this;

                this._unfavReq().on('success', function () {
                    _this3.requesting = false;
                    _this3.setFaved(false);
                    _this3.emit('unfav');
                });
            };

            BaseFavButton.prototype._favReq = function _favReq() {
                this.requesting = true;
                return (0, _fetch2['default'])({
                    method: 'post',
                    url: '/v1/activity/favorite/' + this.activityId,
                    data: {
                        type: this.type
                    }
                });
            };

            BaseFavButton.prototype._unfavReq = function _unfavReq() {
                this.requesting = true;
                return (0, _fetch2['default'])({
                    method: 'delete',
                    url: '/v1/activity/favorite/' + this.activityId + '?type=' + this.type
                });
            };

            return BaseFavButton;
        }();

        _event2['default'].mixin(BaseFavButton);

        exports['default'] = BaseFavButton;

        /***/
    }),

    /***/ 347:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _PickerBase2 = __webpack_require__(254);

        var _PickerBase3 = _interopRequireDefault(_PickerBase2);

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _qs = __webpack_require__(3);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var NumPicker = function (_PickerBase) {
            _inherits(NumPicker, _PickerBase);

            function NumPicker(container) {
                _classCallCheck(this, NumPicker);

                var _this = _possibleConstructorReturn(this, _PickerBase.call(this, container));

                _this.$items = container.find('.items');

                _this.on('pick', function (ticket) {
                    _this.ticket = ticket;
                });
                _this.on('pickNum', function (num) {
                    var text = _this.ticket.continuousSeat ? '连座' : '不连座';
                    _this.$seatStatus.text(text);
                    if (num > 1 && window.hasSeat) {
                        _this.$seatStatus.show();
                    } else {
                        _this.$seatStatus.hide();
                    }
                });
                return _this;
            }

            NumPicker.prototype.fetchWithEventAndCategory = function fetchWithEventAndCategory(event, category) {
                var _this2 = this;

                var data = {
                    shopId: _qs.query.shopId,
                    b2c: window.isB2C,
                    eventId: event.id,
                    ticketCategoryId: category.id
                };
                if (category.needSpeedPackBuy) {
                    data.speedPackBuy = true;
                }
                this.$items.empty();
                (0, _fetch2['default'])({
                    url: '/v4/tickets',
                    data: data
                }).on('success', function (tickets) {
                    if (!tickets.ticketGroups) {
                        return;
                    }
                    _this2.container.show();
                    _this2.emit('load');
                    _this2.setTickets(tickets.ticketGroups);
                });
            };

            NumPicker.prototype.setTicket = function setTicket(ticket) {
                this.ticket = ticket;
                this.emit('pick', ticket);
            };

            NumPicker.prototype.setTickets = function setTickets(ticketGroups) {
                var _this3 = this;

                var $items = this.$items;
                $items.empty();
                this.setTicket(null);

                var _loop = function _loop(num) {
                    var ticket = ticketGroups[num];
                    var $item = _this3.itemFromTicket(ticket, num);
                    $item.appendTo($items);
                    if (!_this3.ticket) {
                        _this3.setTicket(ticket);
                        setTimeout(function () {
                            _this3.emit('pickNum', num);
                        });
                        _this3.currentItem = $item;
                        _this3.currentItem.addClass('selected');
                    }
                };

                for (var num in ticketGroups) {
                    _loop(num);
                }
                this.$seatStatus = $('<div class="tag seat-status"></div>');
                this.$seatStatus.appendTo(this.$items);
            };

            NumPicker.prototype.itemFromTicket = function itemFromTicket(ticket, num) {
                var _this4 = this;

                var $item = $('<div class="item" data-num=\'' + num + '\' data-ticket-groups="' + JSON.stringify(ticket.ticketGroups) + '">' + num + '</div>');

                $item.on('click', function () {
                    if (_this4.currentItem) {
                        _this4.currentItem.removeClass('selected');
                    }
                    _this4.currentItem = $item;
                    $item.addClass('selected');
                    _this4.emit('pick', ticket);
                    _this4.emit('pickNum', num);
                });
                return $item;
            };

            return NumPicker;
        }(_PickerBase3['default']);

        _event2['default'].mixin(NumPicker);

        exports['default'] = NumPicker;

        /***/
    }),

    /***/ 348:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        var _qs = __webpack_require__(3);

        var _qs2 = _interopRequireDefault(_qs);

        var _priceUtil = __webpack_require__(257);

        var _priceUtil2 = _interopRequireDefault(_priceUtil);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var B2CResultBlock = function () {
            function B2CResultBlock(container) {
                var _this = this;

                _classCallCheck(this, B2CResultBlock);

                this.container = container;
                container.parent().find('.btn-submit').on('click', function () {
                    _this.emit('submit');
                });
                this.$btnSeat = container.parent().find('.btn-seatmap');
                this.originSeatLink = this.$btnSeat.attr('href');
                this.container.hide();
            }

            B2CResultBlock.prototype.setNum = function setNum(num) {
                this.num = num;
                this.render();
            };

            B2CResultBlock.prototype.setEvent = function setEvent(event) {
                this.event = event;
                this.render();
            };

            B2CResultBlock.prototype.setTicket = function setTicket(ticket) {
                this.ticket = ticket;
                this.render();
            };

            B2CResultBlock.prototype.setTicketGroup = function setTicketGroup(val) {
                console.log('set ticket group');
                this.ticketGroup = val;
                this.render();
            };

            B2CResultBlock.prototype.setCategory = function setCategory(category) {
                this.category = category;
                this.render();
            };

            B2CResultBlock.prototype.descText = function descText() {
                if (this.ticket && this.ticket.desc) {
                    return '卖家吆喝：' + this.ticket.desc;
                } else {
                    return '';
                }
            };

            B2CResultBlock.prototype.hidePriceChangeHint = function hidePriceChangeHint() {
                var $priceChangeHint = this.container.find('.price-change-hint');
                $priceChangeHint.hide();
            };

            B2CResultBlock.prototype.showPriceChangeHint = function showPriceChangeHint() {
                var _this2 = this;

                setTimeout(function () {
                    var $priceChangeHint = _this2.container.find('.price-change-hint');
                    $priceChangeHint.fadeIn();
                    setTimeout(function () {
                        $priceChangeHint.fadeOut();
                    }, 3000);
                });
            };

            B2CResultBlock.prototype.render = function render() {
                var $content = this.container.find('.row-total .content');
                var q = _qs2['default'].stringify({
                    shopId: _qs.query.shopId,
                    eventId: this.event && this.event.id,
                    ticketCategoryId: this.category && this.category.id
                });
                var seatLink = this.originSeatLink + '?' + q;
                this.$btnSeat.attr('href', seatLink);

                if (!this.num) {
                    return '';
                }

                var price;
                if (this.ticket) {
                    price = this.num * this.ticket.salePrice;
                } else if (this.ticketGroup) {
                    console.log('come here');
                    price = this.ticketGroup.ticketGroups.map(function (group) {
                        return group.salePrice * group.count;
                    }).reduce(function (a, b) {
                        return a + b;
                    }, 0);
                } else {
                    return '';
                }

                console.log('price before format', price);
                var price = _priceUtil2['default'].formatPrice(price);

                if (this.ticket || this.ticketGroup) {
                    this.container.show();
                    $content.html('\n      <div class="price">\uFFE5' + price + '</div>\n      <div class="comment">\uFFE5' + price / this.num + '/\u5F20\n        <div class="price-change-hint">\u4E0D\u540C\u5546\u5BB6\u62A5\u4EF7\uFF0C\u4EF7\u683C\u6709\u6CE2\u52A8</div>\n      </div>\n      <div class="comment">' + this.descText() + '</div>\n      ');
                    $content.find('.price-change-hint').hide();
                }
            };

            return B2CResultBlock;
        }();

        _event2['default'].mixin(B2CResultBlock);

        exports['default'] = B2CResultBlock;

        /***/
    }),

    /***/ 349:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _calendar = __webpack_require__(247);

        var _calendar2 = _interopRequireDefault(_calendar);

        var _qs = __webpack_require__(3);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var CalendarCateogryPicker = function () {
            function CalendarCateogryPicker(container, id, activityStatus) {
                var _this = this;

                _classCallCheck(this, CalendarCateogryPicker);

                container.addClass('calendar-event-picker');
                this.activityStatus = activityStatus;
                this.container = container;
                this.eventsContainer = $('.eventtime-picker');
                this.fetchEvents(id);
                this.on('pick', function (evt) {
                    _this.currentEvent = evt;
                    _this.renderMonths();
                    _this.calendar.setYear(moment(evt.start).year());
                    _this.calendar.setMonth(moment(evt.start).month());
                    _this.calendar.reload();
                    var key = moment(evt.start).format('YYYY-MM-DD');
                    console.log(evt, _this.eventMap, _this.eventMap[key], key);
                    _this.renderEventPicker(_this.eventMap[key]);
                    // if (this.eventMap[key]) {
                    //   this.fillEventTimePicker(this.eventMap[key])
                    // }
                });
            }

            CalendarCateogryPicker.prototype.fetchEvents = function fetchEvents(id) {
                var _this2 = this;

                (0, _fetch2['default'])({
                    url: '/v1/activities/' + id,
                    data: {
                        shopId: _qs.query.shopId,
                        b2c: window.isB2C
                    }
                }).on('success', function (activity) {
                    if ([1, 4].indexOf(activity.status) == -1) {
                        return;
                    }

                    if (!activity.events.length) {
                        return;
                    }
                    _this2.render(activity.events);
                    _this2.show();
                });
            };

            CalendarCateogryPicker.prototype.renderMonths = function renderMonths() {
                var _this3 = this;

                var $monthContainer = this.$calendarContainer.find('.months ul');
                var $items = $monthContainer.find('li');
                $items.each(function (i, el) {
                    var $item = $(el);
                    $item.removeClass('selected');
                    if ($item.text() == moment(_this3.currentEvent.start).format('YYYY-MM')) {
                        $item.addClass('selected');
                        _this3.$selectedMonth = $item;
                    }
                });
            };

            CalendarCateogryPicker.prototype.initMonths = function initMonths(events, availableEvents) {
                var _this4 = this;

                var firstMonth = moment(events[0].start).set('date', 1);
                var lastMonth = moment(events[events.length - 1].start).endOf('month');
                var months = Math.ceil(lastMonth.diff(firstMonth, 'months', true));
                var $monthContainer = this.$calendarContainer.find('.months ul');
                this.maxMonthOffset = months * 110;

                if (months <= 3) {
                    this.$calendarContainer.find('.next').addClass('disabled');
                }

                var _loop = function _loop() {
                    var date = moment(firstMonth).add(i, 'month');
                    var $item = $('<li class="month">' + date.format('YYYY-MM') + '</li>');
                    $item.appendTo($monthContainer);
                    firstEvent = availableEvents[0];

                    if (!_this4.$selectedMonth && firstEvent && date.format('YYYY-MM') == moment(firstEvent.start).format('YYYY-MM') || !firstEvent) {
                        _this4.$selectedMonth = $item;
                    }
                    $item.on('click', function () {
                        _this4.$selectedMonth && _this4.$selectedMonth.removeClass('selected');
                        $item.addClass('selected');
                        _this4.$selectedMonth = $item;
                        _this4.calendar.setYear(date.year());
                        _this4.calendar.setMonth(date.month());
                    });
                };

                for (var i = 0; i < months; i++) {
                    var firstEvent;

                    _loop();
                }
            };

            CalendarCateogryPicker.prototype.renderEventPicker = function renderEventPicker(events) {
                var _this5 = this;

                this.eventsContainer.show();
                var $content = this.eventsContainer.find('.content');
                $content.empty();
                events.forEach(function (evt, i) {
                    var $item = $('<div class="item">' + evt.specification + '</div>');
                    $item.appendTo($content);
                    if (evt.ticketsNumber == 0) {
                        $item.addClass('disabled');
                    }

                    if (evt == _this5.currentEvent) {
                        $item.addClass('selected');
                    }

                    $item.on('click', function () {
                        if (!$item.hasClass('disabled')) {
                            _this5.emit('pick', evt);
                        }
                    });
                });
            };

            CalendarCateogryPicker.prototype.fillEventTimePicker = function fillEventTimePicker(events) {
                var _this6 = this;

                var picked = false;
                events.forEach(function (evt, i) {
                    if (!evt.ticketsNumber == 0 && !picked) {
                        _this6.emit('pick', evt);
                        picked = true;
                    }
                });
                this.renderEventPicker(events);
            };

            CalendarCateogryPicker.prototype.eventHasTicket = function eventHasTicket(events) {
                return events.some(function (evt) {
                    return evt.ticketsNumber > 0;
                });
            };

            CalendarCateogryPicker.prototype.selectDefaultEvent = function selectDefaultEvent(events) {
                var _this7 = this;

                var selectedEvent = events.filter(function (e) {
                    return e.id === +_qs.query.eventId;
                })[0];
                var lowestEvent = events.filter(function (e) {
                    return e.priceLowest;
                })[0];
                var firstAvailableEvent = events.filter(function (e) {
                    return e.hasTicket;
                })[0];
                var firstEvent = events[0];
                if (!this.currentEvent) {
                    this.currentEvent = selectedEvent || lowestEvent || firstAvailableEvent || firstEvent;
                    setTimeout(function () {
                        _this7.emit('pick', _this7.currentEvent);
                    });
                }
            };

            CalendarCateogryPicker.prototype.render = function render(events) {
                var _this8 = this;

                var container = this.container;
                var $calendarContainer = this.$calendarContainer = $('<div class="event-calendar">\n      <div class="calendar-title">\n          <div class="prev disabled"></div>\n          <div class="months">\n            <ul></ul>\n          </div>\n          <div class="next"></div>\n      </div>\n      <div class="calendar"></div>\n    </div>');

                var $months = $calendarContainer.find('.months');
                var $prev = $calendarContainer.find('.prev');
                var $next = $calendarContainer.find('.next');
                var updateArrs = function updateArrs() {
                    if ($months.scrollLeft() == 0) {
                        $prev.addClass('disabled');
                    } else {
                        $prev.removeClass('disabled');
                    }
                    if ($months.scrollLeft() + $months.width() >= _this8.maxMonthOffset) {
                        $next.addClass('disabled');
                    } else {
                        $next.removeClass('disabled');
                    }
                };
                $prev.on('click', function () {
                    if ($months.scrollLeft() <= 0 || _this8.animating) {
                        return;
                    }
                    _this8.animating = true;
                    $months.animate({
                        scrollLeft: $months.scrollLeft() - 110
                    }, 400, function () {
                        _this8.animating = false;
                        updateArrs();
                    });
                });
                $next.on('click', function () {
                    if ($months.scrollLeft() + $months.width() >= _this8.maxMonthOffset || _this8.animating) {
                        return;
                    }
                    _this8.animating = true;
                    $months.animate({
                        scrollLeft: $months.scrollLeft() + 110
                    }, 400, function () {
                        _this8.animating = false;
                        updateArrs();
                    });
                });

                var eventMap = this.eventMap = {};

                var availableEvents = events.filter(function (e) {
                    return e.ticketsNumber > 0;
                });

                this.initMonths(events, availableEvents);

                events.forEach(function (event) {
                    var key = moment(event.start).format('YYYY-MM-DD');
                    if (!eventMap[key]) {
                        eventMap[key] = [];
                    }

                    eventMap[key].push(event);
                });

                this.selectDefaultEvent(events);

                $calendarContainer.appendTo(container.find('.content'));
                var calendar = this.calendar = new _calendar2['default'](container.find('.calendar'), {
                    rowByMonth: true,
                    defaultDate: new Date(events[0].start),
                    renderDay: function renderDay(td, date) {
                        var format = 'YYYY-MM-DD';
                        var key = moment(date).format(format);
                        if (eventMap[key]) {
                            if (_this8.eventHasTicket(eventMap[key])) {
                                // 切换回来时需要能正确显示当前选中的日子
                                if (_this8.currentEvent && moment(date).format('YYYY-MM-DD') == moment(_this8.currentEvent.start).format('YYYY-MM-DD')) {
                                    td.addClass('selected');
                                }

                                td.addClass('has-ticket');
                            } else {
                                td.html(moment(date).format('D') + ' 售空');
                                td.addClass('has-no-ticket');
                            }
                            td.addClass('has-event');
                        }
                    }
                });

                if (availableEvents[0]) {
                    calendar.setYear(moment(availableEvents[0].start).year());
                    calendar.setMonth(moment(availableEvents[0].start).month());
                }

                calendar.on('pick', function (e) {
                    var cell = e.cell;
                    if (!cell.hasClass('has-ticket')) {
                        return;
                    }
                    var key = moment(e.date).format('YYYY-MM-DD');
                    cell.addClass('selected');
                    if (eventMap[key]) {
                        _this8.fillEventTimePicker(eventMap[key]);
                    }
                });
            };

            CalendarCateogryPicker.prototype.show = function show() {
                this.container.show();
            };

            CalendarCateogryPicker.prototype.hide = function hide() {
                this.container.hide();
            };

            return CalendarCateogryPicker;
        }();

        _event2['default'].mixin(CalendarCateogryPicker);

        exports['default'] = CalendarCateogryPicker;

        /***/
    }),

    /***/ 350:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _BaseFavButton2 = __webpack_require__(340);

        var _BaseFavButton3 = _interopRequireDefault(_BaseFavButton2);

        var _progress = __webpack_require__(2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var FavButton = function (_BaseFavButton) {
            _inherits(FavButton, _BaseFavButton);

            function FavButton(container, activityId) {
                _classCallCheck(this, FavButton);

                var _this = _possibleConstructorReturn(this, _BaseFavButton.call(this, container, activityId, 2));

                _this.on('fav', function () {
                    _progress.shared.showMessage('关注成功');
                }).on('unfav', function () {
                    _progress.shared.showMessage('取消关注成功');
                });
                return _this;
            }

            return FavButton;
        }(_BaseFavButton3['default']);

        exports['default'] = FavButton;

        /***/
    }),

    /***/ 351:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _BaseFavButton2 = __webpack_require__(340);

        var _BaseFavButton3 = _interopRequireDefault(_BaseFavButton2);

        var _mbox = __webpack_require__(25);

        var _mbox2 = _interopRequireDefault(_mbox);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var NotifyConfirmBox = function (_Mbox) {
            _inherits(NotifyConfirmBox, _Mbox);

            function NotifyConfirmBox(desc) {
                _classCallCheck(this, NotifyConfirmBox);

                var _this = _possibleConstructorReturn(this, _Mbox.call(this, ''));

                _this.desc = desc || '有票';
                _this.title = _this.desc + '后我们会短信通知您～';
                _this.elem.addClass('notify-confirm-box');
                return _this;
            }

            NotifyConfirmBox.prototype.renderContent = function renderContent() {
                var _this2 = this;

                var $content = $('<div class="content">\n      <div class="title">\n          <span class="img-heart"></span>\n          <div class="text">\u5173\u6CE8\u6210\u529F</div>\n      </div>\n      <div class="desc"></div>\n      <div class="btn btn-submit btn-primary btn-large">\u77E5\u9053\u4E86</div>\n    </div>');

                var $btnSubmit = $content.find('.btn-submit');
                $btnSubmit.click(function () {
                    _this2.close();
                });

                return $content;
            };

            return NotifyConfirmBox;
        }(_mbox2['default']);

        var NotifyButton = function (_BaseFavButton) {
            _inherits(NotifyButton, _BaseFavButton);

            function NotifyButton(container, activityId) {
                var confirmBoxConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                _classCallCheck(this, NotifyButton);

                var _this3 = _possibleConstructorReturn(this, _BaseFavButton.call(this, container, activityId, confirmBoxConfig.type || 1));

                var desc = confirmBoxConfig.shortDesc;
                var selectedDesc = confirmBoxConfig.selectedDesc;
                var confirmBox = new NotifyConfirmBox(desc);
                if (confirmBoxConfig.backgroundColor) {
                    _this3.$fav.css('background-color', confirmBoxConfig.backgroundColor);
                }
                _this3.on('fav', function () {
                    confirmBox.pop();
                }).on('faved', function () {
                    _this3.$fav.addClass('disabled');
                    _this3.$fav.text(selectedDesc);
                }).on('unfaved', function () {
                    _this3.$fav.text(desc + '通知我');
                });
                return _this3;
            }

            return NotifyButton;
        }(_BaseFavButton3['default']);

        exports['default'] = NotifyButton;

        /***/
    }),

    /***/ 352:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        var _PickerBase2 = __webpack_require__(254);

        var _PickerBase3 = _interopRequireDefault(_PickerBase2);

        var _qs = __webpack_require__(3);

        var _tip = __webpack_require__(175);

        var _tip2 = _interopRequireDefault(_tip);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var EventPicker = function (_PickerBase) {
            _inherits(EventPicker, _PickerBase);

            function EventPicker(container, id) {
                _classCallCheck(this, EventPicker);

                var $items;

                var _this = _possibleConstructorReturn(this, _PickerBase.call(this, container));

                $items = _this.$items = container.find('.items');
                (0, _fetch2['default'])({
                    url: '/v1/activities/' + id,
                    data: {
                        shopId: _qs.query.shopId
                    }
                }).on('success', function (activity) {
                    var events = activity.events;
                    var matchedItem;
                    if ([1, 4, 6].indexOf(activity.status) == -1) {
                        return;
                    }

                    if (!activity.events.length) {
                        return;
                    }

                    _this.events = events.filter(function (event) {
                        return event.status === 1;
                    });

                    _this.events.forEach(function (event) {
                        var $item = _this.itemFromEvent(event);
                        $item.appendTo($items);

                        if (event.desc) {
                            $item.on('mouseenter', function () {
                                _tip2['default'].text(event.desc);
                                _tip2['default'].attachTo($item);
                            }).on('mouseleave', function () {
                                _tip2['default'].hide();
                            });
                        }

                        if (event.priceLowest) {
                            matchedItem = $item;
                        }

                        if (event.id === +_qs.query.eventId) {
                            matchedItem = $item;
                        }
                    });

                    var selectedItem = matchedItem ? matchedItem : $items.find(':not(.disabled)').eq(0);
                    setTimeout(function () {
                        selectedItem.trigger('click');
                        if (!selectedItem.length) {
                            _this.emit('pick', _this.events[0]);
                        }
                    }, 0);

                    _this.show();
                    _this.initMore();
                });
                return _this;
            }

            EventPicker.prototype.itemFromEvent = function itemFromEvent(event) {
                var _this2 = this;

                var $item = $('<div class="item" data-id="' + event.id + '">' + event.specification + '</div>');

                if (event.ticketsFlag === 0 || event.ticketsNumber === 0) {
                    $item.addClass('disabled');
                }

                $item.on('click', function () {
                    if (window.isB2C && $item.hasClass('disabled')) {
                        return;
                    }
                    if (_this2.currentItem) {
                        _this2.currentItem.removeClass('selected');
                    }
                    _this2.currentItem = $item;
                    $item.addClass('selected');
                    _this2.emit('pick', event);
                });
                return $item;
            };

            return EventPicker;
        }(_PickerBase3['default']);

        _event2['default'].mixin(EventPicker);

        exports['default'] = EventPicker;

        /***/
    }),

    /***/ 353:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        var _numpicker = __webpack_require__(292);

        var _numpicker2 = _interopRequireDefault(_numpicker);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var ResultBlock = function () {
            ResultBlock.prototype.setCategory = function setCategory(val) {
                this.category = val;
            };

            ResultBlock.prototype.setEvent = function setEvent(val) {
                this.event = val;
                this.update();
                return val;
            };

            ResultBlock.prototype.setSaler = function setSaler(val) {
                this.saler = val;
                this.update();
            };

            ResultBlock.prototype.setTicket = function setTicket(val) {
                this.ticket = val;
                this.update();
            };

            ResultBlock.prototype.setNum = function setNum(val) {
                this.num = val;
                this.update();
            };

            ResultBlock.prototype.hidePriceChangeHint = function hidePriceChangeHint() {
            };

            ResultBlock.prototype.showPriceChangeHint = function showPriceChangeHint() {
            };

            function ResultBlock(container) {
                _classCallCheck(this, ResultBlock);

                var $container = this.container = container;
                this.num = 0;
                $container.html('\n      <div class="sel-tt">\u60A8\u9009\u62E9\u4E86</div>\n      <div class="selection"><div class="inner"></div></div>\n      <div class="numpicker-wrap"><span class="lbl">\u6570\u91CF\uFF1A</span></div>\n      <div class="purchase">\u53BB\u7ED3\u7B97(<span class="count">0</span>)</div>\n      <div class="sale-price"><span class="lbl">\u5C0F\u8BA1\uFF1A</span><span class="amount">\xA50</span></div>\n    ');

                this.$selection = container.find('.selection .inner');
                this.$purchase = container.find('.purchase');
                this.$count = container.find('.count');
                this.$salePrice = container.find('.sale-price');

                this.hide();
            }

            ResultBlock.prototype.update = function update() {
                var salePrice = this.saler ? this.saler.salePrice : 0;
                var ticketCategory = this.category ? this.category.specification : '';
                this.$selection.html('<span class="time">\u573A\u6B21\uFF1A\u201C' + this.event.specification + '\u201D</span> <span class="category">\u7968\u6863\uFF1A\u201C' + ticketCategory + '\u201D</span>');
                this.$count.text(this.num);
                this.$salePrice.find('.amount').text('\xA5' + salePrice * this.num);
                this.numpicker && this.numpicker.val(this.num);
            };

            ResultBlock.prototype.isVisible = function isVisible() {
                return this.container.is(':visible');
            };

            ResultBlock.prototype.show = function show() {
                this.container.show();
            };

            ResultBlock.prototype.hide = function hide() {
                this.container.hide();
            };

            ResultBlock.prototype.appendTo = function appendTo(parent) {
                var _this = this;

                this.container.appendTo(parent);
                this.$purchase.click(function (e) {
                    e.preventDefault();
                    _this.emit('submit');
                });
                this.numpicker = new _numpicker2['default']({
                    canModify: function canModify(newVal) {
                        return newVal > 0 && newVal <= Math.min(_this.ticket.addition.numMax, _this.ticket.saling);
                    }
                });
                this.container.find('.numpicker-wrap').html('<span class="lbl">数量：</span>');
                this.numpicker.appendTo(this.container.find('.numpicker-wrap'));
                this.numpicker.on('change', function (val) {
                    _this.setNum(val);
                });
            };

            return ResultBlock;
        }();

        _event2['default'].mixin(ResultBlock);

        exports['default'] = ResultBlock;

        /***/
    }),

    /***/ 354:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        var _PickerBase2 = __webpack_require__(254);

        var _PickerBase3 = _interopRequireDefault(_PickerBase2);

        var _qs = __webpack_require__(3);

        var _tip = __webpack_require__(175);

        var _tip2 = _interopRequireDefault(_tip);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var TicketCategoryPicker = function (_PickerBase) {
            _inherits(TicketCategoryPicker, _PickerBase);

            function TicketCategoryPicker(container, activityStatus) {
                _classCallCheck(this, TicketCategoryPicker);

                var _this = _possibleConstructorReturn(this, _PickerBase.call(this, container));

                _this.activityStatus = activityStatus;
                _this.$items = container.find('.items');
                _this.currentItem = null;
                return _this;
            }

            TicketCategoryPicker.prototype.fetchWithEvent = function fetchWithEvent(event) {
                var _this2 = this;

                (0, _fetch2['default'])({
                    url: '/v1/ticketCategories',
                    data: {
                        shopId: _qs.query.shopId,
                        b2c: window.isB2C,
                        eventId: event.id
                    }
                }).on('success', function (categories) {
                    _this2.render(categories);
                    _this2.show();
                    _this2.initMore();
                });
            };

            TicketCategoryPicker.prototype.render = function render(categories) {
                var _this3 = this;

                var $items = this.$items;
                var matchedItem = null;
                $items.empty();
                categories.forEach(function (category) {
                    var hasTicket = category.hasTicket;
                    var status = _this3.activityStatus;
                    var $li = $('<div class="item" data-id="' + category.id + '">' + category.specification + (hasTicket || status == 6 ? '' : '售罄') + '</div>');

                    if (status == 6) {
                        $li.addClass('disabled');
                    }

                    if (!hasTicket) {
                        $li.addClass('disabled');
                    }

                    if (category.desc) {
                        $li.on('mouseenter', function () {
                            _tip2['default'].text(category.desc);
                            _tip2['default'].attachTo($li);
                        }).on('mouseleave', function () {
                            _tip2['default'].hide();
                        });
                    }

                    if (window.isB2C && hasTicket && _this3.activityStatus != 6) {
                        if (category.needSpeedPackBuy) {
                            $li.append($('<div class="icon icon-qiang"></div>'));
                        } else {
                            if (category.lowPrice < category.originPrice) {
                                $li.append($('<div class="icon icon-zhe"></div>'));
                            } else if (category.lowPrice > category.originPrice) {
                                $li.append($('<div class="icon icon-yi"></div>'));
                            }
                        }
                    }

                    $li.on('click', function () {
                        if (!hasTicket || _this3.activityStatus == 6) {
                            return;
                        }
                        if (_this3.currentItem) {
                            _this3.currentItem.removeClass('selected');
                        }
                        $li.addClass('selected');
                        _this3.currentItem = $li;
                        _this3.emit('pick', category);
                    });
                    if (!matchedItem && hasTicket) {
                        matchedItem = $li;
                    }
                    if (category.priceLowest) {
                        matchedItem = $li;
                    }

                    if (category.id === +_qs.query.ticketCategoryId) {
                        matchedItem = $li;
                    }
                    $items.append($li);
                });

                this.currentItem = matchedItem;

                if (matchedItem && this.activityStatus != 6) {
                    matchedItem.addClass('selected');
                    matchedItem.trigger('click');
                } else {
                    this.emit('noAvailable');
                }
            };

            return TicketCategoryPicker;
        }(_PickerBase3['default']);

        _event2['default'].mixin(TicketCategoryPicker);

        exports['default'] = TicketCategoryPicker;

        /***/
    }),

    /***/ 355:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _event = __webpack_require__(0);

        var _event2 = _interopRequireDefault(_event);

        var _fetch = __webpack_require__(1);

        var _fetch2 = _interopRequireDefault(_fetch);

        var _tip = __webpack_require__(175);

        var _tip2 = _interopRequireDefault(_tip);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var TicketItem = function () {
            function TicketItem(ticket, saler, category) {
                var _this = this;

                _classCallCheck(this, TicketItem);

                this.elem = $('<div class="ticket">\n        <div class="category col-2 vmiddle">\n          <div class="inner">' + category.specification + '</div>\n        </div>\n        <div class="area col-3 vmiddle">\n          <div class="inner">\n            <div class="name">' + ticket.areaName + '</div>\n            <div class="tags">\n            </div>\n          </div>\n        </div>\n        <div class="price col-4 vmiddle">\n          <div class="inner">\n            <div class="text">&#x00a5;' + saler.salePrice + '</div>\n            <div class="tags"></div>\n          </div>\n        </div>\n        <div class="remain col-5">\u5269\u4F59' + ticket.saling + '\u5F20</div>\n        <div class="desc col-6">' + (saler.desc || '卖家很懒，什么也没说~') + '</div>\n        <div class="buy">\n          <div class="btn-purchase">\u8D2D\u4E70</div>\n          <div class="text-check">\u5DF2\u9009</div>\n        </div>\n      </div>');

                if (ticket.saling > 1) {
                    var $tagContinuous = $('<div class="tag">' + (ticket.addition.isContinuousSeat ? "连座" : "座位随机") + '</div>');
                    $tagContinuous.appendTo(this.elem.find('.area .tags'));
                }

                if (ticket.saling >= 6) {
                    this.elem.find('.remain').text('库存充足');
                }

                var isDiscount = category.originPrice > saler.salePrice;
                var $tag = $('<span class="tag"></span>');

                $tag.on('mouseenter', function () {
                    if (isDiscount) {
                        _tip2['default'].text('该演出目前低于票面价，此时不入更待何时～');
                    } else {
                        _tip2['default'].text('该演出目前比较火爆，市场处于溢价状态，请确认后购买。');
                    }
                    _tip2['default'].attachTo($tag);
                }).on('mouseleave', function () {
                    _tip2['default'].hide();
                });

                this.on('pick', function () {
                    _this.elem.addClass('selected');
                });

                if (category.originPrice !== saler.salePrice) {
                    if (isDiscount) {
                        $tag.addClass('discount');
                        $tag.text('折扣');
                    } else {
                        $tag.addClass('premium');
                        $tag.text('溢价');
                    }

                    $tag.appendTo(this.elem.find('.price .tags'));
                }

                var $itemBuy = this.elem.find('.buy');
                var $btnPurchase = this.$btnPurchase = $itemBuy.find('.btn-purchase');
                $btnPurchase.click(function () {
                    _this.select();
                });
            }

            TicketItem.prototype.select = function select() {
                this.elem.addClass('selected');
                this.emit('pick', 1);
            };

            TicketItem.prototype.deSelect = function deSelect() {
                this.elem.removeClass('selected');
                // this.$btnPurchase.show();
            };

            TicketItem.prototype.appendTo = function appendTo(container) {
                this.elem.appendTo(container);
            };

            return TicketItem;
        }();

        _event2['default'].mixin(TicketItem);

        var TicketPicker = function () {
            function TicketPicker(container) {
                _classCallCheck(this, TicketPicker);

                this.container = container;
            }

            TicketPicker.prototype.fetchWithEventAndCategory = function fetchWithEventAndCategory(event, category) {
                var _this2 = this;

                (0, _fetch2['default'])({
                    url: '/v1/tickets',
                    data: {
                        eventId: event.id,
                        ticketCategoryId: category.id,
                        pageIndex: 1,
                        pageSize: 50
                    }
                }).on('success', function (salers) {
                    _this2.emit('load');
                    _this2.category = category;
                    _this2.render(salers.data);
                });
            };

            TicketPicker.prototype.render = function render(salers) {
                var _this3 = this;

                var firstTicketItem;
                var $salers = $('<div class="salers"></div>');
                var header = $('\n      <div class="header">\n        <div class="col-1">\u552E\u7968\u5E73\u53F0/\u4E2A\u4EBA</div>\n        <div class="col-2">\u7968\u6863</div>\n        <div class="col-3">\u533A\u57DF</div>\n        <div class="col-4">\u552E\u4EF7(\u6BCF\u5F20)</div>\n        <div class="col-5">\u5E93\u5B58</div>\n        <div class="col-6">\u5406\u559D</div>\n      </div>\n      ');

                this.container.empty();
                header.appendTo(this.container);
                $salers.appendTo(this.container);

                salers.forEach(function (saler, i) {
                    var $saler = $('<div class="saler">\n            <img class="avatar" src="//dn-piaoniu-static.qbox.me/pc/ui/img/merchant-default-avatar.aa87bc43.png" alt="" />\n            <div class="info">\n              <div class="title">' + saler.salerName + '</div>\n              <div class="desc">' + (saler.promiseDeliverNotice || "") + '</div>\n            </div>\n            <div class="tickets"></div>\n          </div>');

                    var tickets = saler.tickets;
                    var $ticketsContainer = $saler.find('.tickets');
                    tickets.forEach(function (ticket) {
                        var ticketItem = new TicketItem(ticket, saler, _this3.category);
                        ticketItem.appendTo($ticketsContainer);
                        if (!firstTicketItem) {
                            firstTicketItem = ticketItem;
                        }
                        ticketItem.on('pick', function (num) {
                            _this3.emit('pick', saler, ticket, num, ticketItem);
                        });
                    });

                    $saler.appendTo($salers);

                    if (i >= 3) {
                        $saler.hide();
                    }
                });

                if (salers.length > 3) {
                    var $extend = $('<div class="show-more">\u5C55\u5F00\u66F4\u591A\u5546\u5BB6<i></i></div>').appendTo($salers);
                    $extend.on('click', function () {
                        $salers.find('.saler').show();
                        $extend.hide();
                    });
                }

                if (firstTicketItem) {
                    firstTicketItem.emit('pick', 1);
                }
            };

            TicketPicker.prototype.hide = function hide() {
                this.container.hide();
            };

            TicketPicker.prototype.show = function show() {
                this.container.show();
            };

            return TicketPicker;
        }();

        _event2['default'].mixin(TicketPicker);

        exports['default'] = TicketPicker;

        /***/
    }),

    /***/ 365:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;
        var map = [{
            "schema": "piaoniu://(.*)",
            "m": "convert($1)"
        }, {
            "schema": "http://(.*)",
            "app": "piaoniu://web?url=$0",
            "m": "$&",
            "pc": "$&"
        }, {
            "schema": "https://(.*)",
            "app": "piaoniu://web?url=$0",
            "m": "$&",
            "pc": "$&"
        }, {
            "schema": "account_home",
            "m": "/user/person.html",
            "pc": "/user/home"
        }, {
            "schema": "account_orderdetail\\?orderId=(\\d+)",
            "m": "/order/orderdetail.html?id=$1",
            "pc": "/user/orderdetail/$1"
        }, {
            "schema": "user_home\\?userId=(\\d+)",
            "m": "/user/personPage.html?userId=$1",
            "pc": "/user/$1"
        }, {
            "schema": "activity_detail\\?activityId=(\\d+)",
            "m": "/activity/detail.html?id=$1",
            "pc": "/activity/$1"
        }, {
            "schema": "search\\?categoryId=(\\d+)",
            "m": "/activity/?categoryId=$1",
            "pc": "/list?categoryId=$1"
        }, {
            "schema": "search\\?keyword=([^&]+)",
            "m": "/activity/?keyword=$1",
            "pc": "/list?keyword=$1"
        }, {
            "schema": "ticket_discount",
            "m": "/home/discount.html",
            "pc": "/discount"
        }, {
            "schema": "ticket_hot",
            "m": "/home/hot.html",
            "pc": "/rare"
        }];

        function convert(schema) {
            var url;
            map.forEach(function (item, index) {
                if (schema.indexOf('piaoniu://') !== -1) {
                    schema = schema.substr(10);
                }
                var reg = new RegExp(item.schema);
                if (reg.test(schema)) {
                    // if (ua.isPiaoniu()) {
                    //   if (schema.indexOf('http') == 0) {
                    //     url = 'piaoniu://web?url=' + encodeURIComponent(scheme)
                    //   } else {
                    //     url = 'piaoniu://' + schema;
                    //   }
                    // } else if (ua.isMobile()) {
                    //   url = schema.replace(reg, item.m);
                    // } else {
                    url = schema.replace(reg, item.pc);
                    // }
                }
            });
            return url;
        }

        exports["default"] = {
            convert: convert
        };

        /***/
    }),

    /***/ 4:
    /***/ (function (module, exports) {

        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
        module.exports = function () {
            var list = [];

            // return the list of modules as css string
            list.toString = function toString() {
                var result = [];
                for (var i = 0; i < this.length; i++) {
                    var item = this[i];
                    if (item[2]) {
                        result.push("@media " + item[2] + "{" + item[1] + "}");
                    } else {
                        result.push(item[1]);
                    }
                }
                return result.join("");
            };

            // import a list of modules into the list
            list.i = function (modules, mediaQuery) {
                if (typeof modules === "string")
                    modules = [[null, modules, ""]];
                var alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    if (typeof id === "number")
                        alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                        if (mediaQuery && !item[2]) {
                            item[2] = mediaQuery;
                        } else if (mediaQuery) {
                            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                        }
                        list.push(item);
                    }
                }
            };
            return list;
        };


        /***/
    }),

    /***/ 44:
    /***/ (function (module, exports) {

        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        var stylesInDom = {},
            memoize = function (fn) {
                var memo;
                return function () {
                    if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                    return memo;
                };
            },
            isOldIE = memoize(function () {
                return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
            }),
            getHeadElement = memoize(function () {
                return document.head || document.getElementsByTagName("head")[0];
            }),
            singletonElement = null,
            singletonCounter = 0,
            styleElementsInsertedAtTop = [];

        module.exports = function (list, options) {
            if (typeof DEBUG !== "undefined" && DEBUG) {
                if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
            }

            options = options || {};
            // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            if (typeof options.singleton === "undefined") options.singleton = isOldIE();

            // By default, add <style> tags to the bottom of <head>.
            if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

            var styles = listToStyles(list);
            addStylesToDom(styles, options);

            return function update(newList) {
                var mayRemove = [];
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    domStyle.refs--;
                    mayRemove.push(domStyle);
                }
                if (newList) {
                    var newStyles = listToStyles(newList);
                    addStylesToDom(newStyles, options);
                }
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (domStyle.refs === 0) {
                        for (var j = 0; j < domStyle.parts.length; j++)
                            domStyle.parts[j]();
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        }

        function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) {
                        domStyle.parts[j](item.parts[j]);
                    }
                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j], options));
                    }
                } else {
                    var parts = [];
                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j], options));
                    }
                    stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
                }
            }
        }

        function listToStyles(list) {
            var styles = [];
            var newStyles = {};
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = {css: css, media: media, sourceMap: sourceMap};
                if (!newStyles[id])
                    styles.push(newStyles[id] = {id: id, parts: [part]});
                else
                    newStyles[id].parts.push(part);
            }
            return styles;
        }

        function insertStyleElement(options, styleElement) {
            var head = getHeadElement();
            var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
            if (options.insertAt === "top") {
                if (!lastStyleElementInsertedAtTop) {
                    head.insertBefore(styleElement, head.firstChild);
                } else if (lastStyleElementInsertedAtTop.nextSibling) {
                    head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
                } else {
                    head.appendChild(styleElement);
                }
                styleElementsInsertedAtTop.push(styleElement);
            } else if (options.insertAt === "bottom") {
                head.appendChild(styleElement);
            } else {
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            }
        }

        function removeStyleElement(styleElement) {
            styleElement.parentNode.removeChild(styleElement);
            var idx = styleElementsInsertedAtTop.indexOf(styleElement);
            if (idx >= 0) {
                styleElementsInsertedAtTop.splice(idx, 1);
            }
        }

        function createStyleElement(options) {
            var styleElement = document.createElement("style");
            styleElement.type = "text/css";
            insertStyleElement(options, styleElement);
            return styleElement;
        }

        function createLinkElement(options) {
            var linkElement = document.createElement("link");
            linkElement.rel = "stylesheet";
            insertStyleElement(options, linkElement);
            return linkElement;
        }

        function addStyle(obj, options) {
            var styleElement, update, remove;

            if (options.singleton) {
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement(options));
                update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
            } else if (obj.sourceMap &&
                typeof URL === "function" &&
                typeof URL.createObjectURL === "function" &&
                typeof URL.revokeObjectURL === "function" &&
                typeof Blob === "function" &&
                typeof btoa === "function") {
                styleElement = createLinkElement(options);
                update = updateLink.bind(null, styleElement);
                remove = function () {
                    removeStyleElement(styleElement);
                    if (styleElement.href)
                        URL.revokeObjectURL(styleElement.href);
                };
            } else {
                styleElement = createStyleElement(options);
                update = applyToTag.bind(null, styleElement);
                remove = function () {
                    removeStyleElement(styleElement);
                };
            }

            update(obj);

            return function updateStyle(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
                        return;
                    update(obj = newObj);
                } else {
                    remove();
                }
            };
        }

        var replaceText = (function () {
            var textStore = [];

            return function (index, replacement) {
                textStore[index] = replacement;
                return textStore.filter(Boolean).join('\n');
            };
        })();

        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? "" : obj.css;

            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = replaceText(index, css);
            } else {
                var cssNode = document.createTextNode(css);
                var childNodes = styleElement.childNodes;
                if (childNodes[index]) styleElement.removeChild(childNodes[index]);
                if (childNodes.length) {
                    styleElement.insertBefore(cssNode, childNodes[index]);
                } else {
                    styleElement.appendChild(cssNode);
                }
            }
        }

        function applyToTag(styleElement, obj) {
            var css = obj.css;
            var media = obj.media;

            if (media) {
                styleElement.setAttribute("media", media)
            }

            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = css;
            } else {
                while (styleElement.firstChild) {
                    styleElement.removeChild(styleElement.firstChild);
                }
                styleElement.appendChild(document.createTextNode(css));
            }
        }

        function updateLink(linkElement, obj) {
            var css = obj.css;
            var sourceMap = obj.sourceMap;

            if (sourceMap) {
                // http://stackoverflow.com/a/26603875
                css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
            }

            var blob = new Blob([css], {type: "text/css"});

            var oldSrc = linkElement.href;

            linkElement.href = URL.createObjectURL(blob);

            if (oldSrc)
                URL.revokeObjectURL(oldSrc);
        }


        /***/
    }),

    /***/ 456:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _eventpicker = __webpack_require__(352);

        var _eventpicker2 = _interopRequireDefault(_eventpicker);

        var _ticketcategorypicker = __webpack_require__(354);

        var _ticketcategorypicker2 = _interopRequireDefault(_ticketcategorypicker);

        var _CalendarEventPicker = __webpack_require__(349);

        var _CalendarEventPicker2 = _interopRequireDefault(_CalendarEventPicker);

        var _ticketpicker = __webpack_require__(355);

        var _ticketpicker2 = _interopRequireDefault(_ticketpicker);

        var _B2CNumPicker = __webpack_require__(347);

        var _B2CNumPicker2 = _interopRequireDefault(_B2CNumPicker);

        var _numpicker = __webpack_require__(292);

        var _numpicker2 = _interopRequireDefault(_numpicker);

        var _B2CResultBlock = __webpack_require__(348);

        var _B2CResultBlock2 = _interopRequireDefault(_B2CResultBlock);

        var _resultblock = __webpack_require__(353);

        var _resultblock2 = _interopRequireDefault(_resultblock);

        var _FavButton = __webpack_require__(350);

        var _FavButton2 = _interopRequireDefault(_FavButton);

        var _NotifyButton = __webpack_require__(351);

        var _NotifyButton2 = _interopRequireDefault(_NotifyButton);

        var _lightLogin = __webpack_require__(16);

        var _lightLogin2 = _interopRequireDefault(_lightLogin);

        var _ReviewItem = __webpack_require__(26);

        var _ReviewItem2 = _interopRequireDefault(_ReviewItem);

        var _schemaConverter = __webpack_require__(365);

        var _schemaConverter2 = _interopRequireDefault(_schemaConverter);

        var _qs = __webpack_require__(3);

        var _qs2 = _interopRequireDefault(_qs);

        var _tip = __webpack_require__(175);

        var _tip2 = _interopRequireDefault(_tip);

        var _countdown = __webpack_require__(66);

        var _countdown2 = _interopRequireDefault(_countdown);

        var _progress = __webpack_require__(2);

        __webpack_require__(102);

        var _overlay = __webpack_require__(9);

        var _overlay2 = _interopRequireDefault(_overlay);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        var $purchase = $('.speed-purchase');
        var overLay = new _overlay2['default']();
        var loadTxt = $('\n  <div class="app-download">\n    <span class="close"></span>\n  </div>\n');
        loadTxt.appendTo('body');
        $purchase.on('click', function () {
            overLay.show();
            $(".app-download").show();
        });
        $(".app-download .close").on('click', function () {
            overLay.hide();
            $(".app-download").hide();
        });
        overLay.on('tap', function () {
            $(".app-download").hide();
        });

        var $iconQuest = $('.icon-quest');
        $iconQuest.on('mouseenter', function () {
            _tip2['default'].html('\n    <div class="tiprow"><div class="icon icon-zhe"></div>\u7968\u54C1\u552E\u4EF7\u4F4E\u4E8E\u7968\u9762\u4EF7\u683C</div>\n    <div class="tiprow"><div class="icon icon-yi"></div>\u7968\u54C1\u552E\u4EF7\u9AD8\u4E8E\u7968\u9762\u4EF7\u683C</div>\n    <div class="tiprow"><div class="icon icon-qiang"></div>\u7968\u54C1\u7968\u6E90\u7D27\u5F20\uFF0C\u4E0B\u5355\u540E\u7CFB\u7EDF\u5C06\u81EA\u52A8\u4E3A\u60A8\u62A2\u7968</div>\n    <div class="tiprow"><div class="seat seat-continuous">\u8FDE\u5EA7</div>\u5546\u5BB6\u627F\u8BFA3\u5F20(\u542B)\u4EE5\u4E0B\u4FDD\u8BC1\u8FDE\u5EA7\uFF0C3\u5F20\u4EE5\u4E0A\u5C3D\u91CF\u8FDE\u5EA7</div>\n    <div class="tiprow"><div class="seat">\u4E0D\u8FDE\u5EA7</div>\u591A\u5F20\u7968\u54C1\u4E0D\u8FDE\u5EA7</div>\n    ');
            _tip2['default'].attachTo($iconQuest, 290.);
        }).on('mouseleave', function () {
            _tip2['default'].hide();
        });

        var $currentTicketItem = null;

        $('.buy').click(function () {
            $('.qr-code-container').show();
        });

// BaseInfo
        $('.base-info .discount').each(function (i, el) {
            var $el = $(el);
            var url = $el.attr('data-url');
            if (url) {
                $el.attr('href', _schemaConverter2['default'].convert(url));
            }
        });

        var eventPicker;
        if (window.isB2C && window.showType == 2) {
            eventPicker = new _CalendarEventPicker2['default']($('.events-picker'), window.activityId);
        } else {
            eventPicker = new _eventpicker2['default']($('.events-picker'), window.activityId, window.activityStatus);
        }

        var ticketCategoryPicker = new _ticketcategorypicker2['default']($('.ticket-category'), window.activityStatus);

        var ticketPicker = new _ticketpicker2['default']($('.tickets-picker'));
        var numPicker;
        var originSalePrice;
        if (window.isB2C) {
            numPicker = new _B2CNumPicker2['default']($('.b2c-num-picker'));
            numPicker.on('pick', function (ticket) {
                resultBlock.setTicketGroup(ticket);
                resultBlock.hidePriceChangeHint();
                if (originSalePrice && ticket && originSalePrice !== ticket.salePrice) {
                    resultBlock.showPriceChangeHint();
                }

                if (ticket) {
                    originSalePrice = ticket.salePrice;
                }
            });
            numPicker.on('pickNum', function (num) {
                resultBlock.setNum(num);
            });
        } else {
            numPicker = new _numpicker2['default']($('.num-picker'));
        }

        var resultBlock;
        if (window.isB2C) {
            resultBlock = new _B2CResultBlock2['default']($('.b2c-result'));
        } else {
            resultBlock = new _resultblock2['default']($('.result'));
        }

        eventPicker.on('pick', function (event) {
            ticketCategoryPicker.fetchWithEvent(event);
            resultBlock.setCategory(null);
            resultBlock.setEvent(event);
        });

        ticketCategoryPicker.on('noAvailable', function () {
            ticketPicker.hide();
        });

        ticketCategoryPicker.on('pick', function (category) {
            if (window.isB2C) {
                resultBlock.setCategory(category);
                numPicker.fetchWithEventAndCategory(resultBlock.event, resultBlock.category);
            } else {
                ticketPicker.show();
                resultBlock.setCategory(category);
                ticketPicker.fetchWithEventAndCategory(resultBlock.event, resultBlock.category);
            }

            if (category.needSpeedPackBuy) {
                $(".speed-purchase").removeClass('none');
                $(".speed-btn-submit").addClass('none');
            } else {
                $(".speed-purchase").addClass('none');
                $(".speed-btn-submit").removeClass('none');
            }
        });

        ticketPicker.on('load', function () {
            resultBlock.hide();
        }).on('pick', function (saler, ticket, num, ticketItem) {
            var lastTicket = resultBlock.ticket;
            if ($currentTicketItem && $currentTicketItem !== ticketItem) {
                $currentTicketItem.deSelect();
                $currentTicketItem.elem.closest('.saler').removeClass('selected');
            }

            resultBlock.setSaler(saler);
            resultBlock.setTicket(ticket);
            if (lastTicket !== ticket) {
                resultBlock.setNum(num);
            }

            $currentTicketItem = ticketItem;

            var $saler = ticketItem.elem.closest('.saler');
            $saler.addClass('selected');

            if (!resultBlock.isVisible() || lastTicket !== ticket) {
                resultBlock.appendTo($saler);
                resultBlock.show();
            }
        });

        resultBlock.on('submit', function () {
            if (!resultBlock.num) {
                _progress.shared.showMessage('请选择一张票');
                return;
            }

            var ticket = resultBlock.ticket;
            var ticketGroup = resultBlock.ticketGroup;
            var event = resultBlock.event;
            var saler = resultBlock.saler;
            var count = resultBlock.num;

            if (ticket) {
                var sellLimit = ticket.addition.sellLimit;
                var remain = ticket.saling - count;
                if (sellLimit > 0 && remain <= sellLimit && remain !== 0) {
                    _progress.shared.showMessage('票量选择不可剩单张');
                    return;
                }

                var isContinuousSeat = false;
                isContinuousSeat = ticket.addition.isContinuousSeat && count >= 2;

                if (!ticket.addition.isDivide && count != ticket.saling) {
                    _progress.shared.showMessage("该票必须打包一起买");
                    return;
                }
            }

            _lightLogin2['default'].assureLogin(function () {
                var ticketGroupDetails = void 0;
                if (ticketGroup) {
                    console.log(ticketGroup);
                    ticketGroupDetails = JSON.stringify(ticketGroup.ticketGroups.map(function (group) {
                        return {ticketGroupId: group.id, count: group.count};
                    }));
                } else if (ticket) {
                    ticketGroupDetails = JSON.stringify([{
                        ticketGroupId: window.isB2C ? ticket.ticketGroupId : saler.ticketGroupId,
                        count: count
                    }]);
                } else {
                    return;
                }
                location.href = '/order/confirm?ticketGroupDetails=' + ticketGroupDetails;
            });
        });

        /* 正文部分 */
        (function () {
            var $bodyHeader = $('.body-header');
            var adjust = function adjust() {
                $bodyHeader.css('width', '100%');
                $bodyHeader.css('left', 0);
            };

            $bodyHeader.sticky({
                topSpacing: 0,
                bottomSpacing: 600
            }).on({
                'sticky-start': adjust,
                'sticky-update': adjust,
                'sticky-bottom-reached': adjust,
                'sticky-bottom-unreached': adjust
            });

            $bodyHeader.find('.btn').click(function () {
                $('html,body').stop().animate({
                    scrollTop: $('.events-picker').offset().top - 20
                }, '500', 'swing');
            });

            $bodyHeader.find('.tab').click(function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: $($(e.target).attr('href')).offset().top
                }, '500', 'swing');
            });

            // click tab to anchor
            var $items = $('.body-header .tab');
            var tops = $items.get().map(function (item) {
                return $($(item).attr('href')).offset().top;
            });
            var $window = $(window);
            $window.on('scroll', function handler() {
                var i;
                for (i = 0; i < tops.length; i++) {
                    if ($window.scrollTop() < tops[i]) {
                        break;
                    }
                }

                if (i > 0) {
                    $items.removeClass('active');
                    $items.eq(i - 1).addClass('active');
                }
            });
        })();

        new _FavButton2['default']('.action-fav', window.activityId);
        new _NotifyButton2['default']('.has-ticket-notify .notify', window.activityId, {
            shortDesc: '有票',
            selectedDesc: '已选有票通知'
        });
        new _NotifyButton2['default']('.agency-notify .notify', window.activityId, {
            shortDesc: '开售',
            selectedDesc: '已设置提醒',
            type: 3,
            backgroundColor: window.startSellTime ? '#ea3667' : null
        });

        $('.block-area-image a').fancybox();
        $('.area-image a').fancybox();
        $('.seatmap-fancybox').fancybox();
        $('.review-item').each(function (i, item) {
            new _ReviewItem2['default'](item);
        });

        $(function () {
            if (!window.startSellTime) {
                return;
            }
            $('.agency-info .start-time').text(moment(window.startSellTime).format('M月D日 H点mm分'));
            var $container = $('.agency-countdown');
            var $day = $container.find('.time-days .num');
            var $hours = $container.find('.time-hours .num');
            var $minutes = $container.find('.time-minutes .num');
            var $seconds = $container.find('.time-seconds .num');

            var leftSeconds = (window.startSellTime - new Date()) / 1000;
            if (leftSeconds <= 0) {
                return;
            }

            var countdown = new _countdown2['default'](leftSeconds);

            countdown.on('tick', function (info) {
                $day.text(info.day);
                $hours.text(info.hour);
                $minutes.text(info.minute);
                $seconds.text(info.second);

                if (+info.day == 0 && +info.hour == 0 && +info.minute < 10) {
                    $('.agency-notify .notify').css('backgroundColor', '#ffc2d3').text('即将开抢').addClass('disabled');
                    $('.agency-notify .desc').hide();
                }
            }).on('end', function () {
                location.reload();
            });
        });

        /***/
    }),

    /***/ 49:
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(4)();
// imports


// module
        exports.push([module.i, "/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */\n.fancybox-wrap,\n.fancybox-skin,\n.fancybox-outer,\n.fancybox-inner,\n.fancybox-image,\n.fancybox-wrap iframe,\n.fancybox-wrap object,\n.fancybox-nav,\n.fancybox-nav span,\n.fancybox-tmp\n{\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n\toutline: none;\n\tvertical-align: top;\n}\n\n.fancybox-wrap {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 8020;\n}\n\n.fancybox-skin {\n\tposition: relative;\n\tbackground: #f9f9f9;\n\tcolor: #444;\n\ttext-shadow: none;\n\t-webkit-border-radius: 4px;\n\t   -moz-border-radius: 4px;\n\t        border-radius: 4px;\n}\n\n.fancybox-opened {\n\tz-index: 8030;\n}\n\n.fancybox-opened .fancybox-skin {\n\t-webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n\t   -moz-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n\t        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n}\n\n.fancybox-outer, .fancybox-inner {\n\tposition: relative;\n}\n\n.fancybox-inner {\n\toverflow: hidden;\n}\n\n.fancybox-type-iframe .fancybox-inner {\n\t-webkit-overflow-scrolling: touch;\n}\n\n.fancybox-error {\n\tcolor: #444;\n\tfont: 14px/20px \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n\tmargin: 0;\n\tpadding: 15px;\n\twhite-space: nowrap;\n}\n\n.fancybox-image, .fancybox-iframe {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.fancybox-image {\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n#fancybox-loading, .fancybox-close, .fancybox-prev span, .fancybox-next span {\n\tbackground-image: url(" + __webpack_require__(59) + ");\n}\n\n#fancybox-loading {\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -22px;\n\tmargin-left: -22px;\n\tbackground-position: 0 -108px;\n\topacity: 0.8;\n\tcursor: pointer;\n\tz-index: 8060;\n}\n\n#fancybox-loading div {\n\twidth: 44px;\n\theight: 44px;\n\tbackground: url(" + __webpack_require__(52) + ") center center no-repeat;\n}\n\n.fancybox-close {\n\tposition: absolute;\n\ttop: -18px;\n\tright: -18px;\n\twidth: 36px;\n\theight: 36px;\n\tcursor: pointer;\n\tz-index: 8040;\n}\n\n.fancybox-nav {\n\tposition: absolute;\n\ttop: 0;\n\twidth: 40%;\n\theight: 100%;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tbackground: transparent url(" + __webpack_require__(51) + "); /* helps IE */\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n\tz-index: 8040;\n}\n\n.fancybox-prev {\n\tleft: 0;\n}\n\n.fancybox-next {\n\tright: 0;\n}\n\n.fancybox-nav span {\n\tposition: absolute;\n\ttop: 50%;\n\twidth: 36px;\n\theight: 34px;\n\tmargin-top: -18px;\n\tcursor: pointer;\n\tz-index: 8040;\n\tvisibility: hidden;\n}\n\n.fancybox-prev span {\n\tleft: 10px;\n\tbackground-position: 0 -36px;\n}\n\n.fancybox-next span {\n\tright: 10px;\n\tbackground-position: 0 -72px;\n}\n\n.fancybox-nav:hover span {\n\tvisibility: visible;\n}\n\n.fancybox-tmp {\n\tposition: absolute;\n\ttop: -99999px;\n\tleft: -99999px;\n\tvisibility: hidden;\n\tmax-width: 99999px;\n\tmax-height: 99999px;\n\toverflow: visible !important;\n}\n\n/* Overlay helper */\n\n.fancybox-lock {\n    overflow: hidden !important;\n    width: auto;\n}\n\n.fancybox-lock body {\n    overflow: hidden !important;\n}\n\n.fancybox-lock-test {\n    overflow-y: hidden !important;\n}\n\n.fancybox-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\toverflow: hidden;\n\tdisplay: none;\n\tz-index: 8010;\n\tbackground: url(" + __webpack_require__(58) + ");\n}\n\n.fancybox-overlay-fixed {\n\tposition: fixed;\n\tbottom: 0;\n\tright: 0;\n}\n\n.fancybox-lock .fancybox-overlay {\n\toverflow: auto;\n\toverflow-y: scroll;\n}\n\n/* Title helper */\n\n.fancybox-title {\n\tvisibility: hidden;\n\tfont: normal 13px/20px \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n\tposition: relative;\n\ttext-shadow: none;\n\tz-index: 8050;\n}\n\n.fancybox-opened .fancybox-title {\n\tvisibility: visible;\n}\n\n.fancybox-title-float-wrap {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 50%;\n\tmargin-bottom: -35px;\n\tz-index: 8050;\n\ttext-align: center;\n}\n\n.fancybox-title-float-wrap .child {\n\tdisplay: inline-block;\n\tmargin-right: -100%;\n\tpadding: 2px 20px;\n\tbackground: transparent; /* Fallback for web browsers that doesn't support RGBa */\n\tbackground: rgba(0, 0, 0, 0.8);\n\t-webkit-border-radius: 15px;\n\t   -moz-border-radius: 15px;\n\t        border-radius: 15px;\n\ttext-shadow: 0 1px 2px #222;\n\tcolor: #FFF;\n\tfont-weight: bold;\n\tline-height: 24px;\n\twhite-space: nowrap;\n}\n\n.fancybox-title-outside-wrap {\n\tposition: relative;\n\tmargin-top: 10px;\n\tcolor: #fff;\n}\n\n.fancybox-title-inside-wrap {\n\tpadding-top: 10px;\n}\n\n.fancybox-title-over-wrap {\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tcolor: #fff;\n\tpadding: 10px;\n\tbackground: #000;\n\tbackground: rgba(0, 0, 0, .8);\n}\n\n/*Retina graphics!*/\n@media only screen and (-webkit-min-device-pixel-ratio: 1.5),\n\t   only screen and (min--moz-device-pixel-ratio: 1.5),\n\t   only screen and (min-device-pixel-ratio: 1.5){\n\n\t#fancybox-loading, .fancybox-close, .fancybox-prev span, .fancybox-next span {\n\t\tbackground-image: url(" + __webpack_require__(60) + ");\n\t\tbackground-size: 44px 152px; /*The size of the normal image, half the size of the hi-res image*/\n\t}\n\n\t#fancybox-loading div {\n\t\tbackground-image: url(" + __webpack_require__(53) + ");\n\t\tbackground-size: 24px 24px; /*The size of the normal image, half the size of the hi-res image*/\n\t}\n}", ""]);

// exports


        /***/
    }),

    /***/ 50:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        /*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

        (function (window, document, $, undefined) {
            "use strict";

            var H = $("html"),
                W = $(window),
                D = $(document),
                F = $.fancybox = function () {
                    F.open.apply(this, arguments);
                },
                IE = navigator.userAgent.match(/msie/i),
                didUpdate = null,
                isTouch = document.createTouch !== undefined,
                isQuery = function isQuery(obj) {
                    return obj && obj.hasOwnProperty && obj instanceof $;
                },
                isString = function isString(str) {
                    return str && $.type(str) === "string";
                },
                isPercentage = function isPercentage(str) {
                    return isString(str) && str.indexOf('%') > 0;
                },
                isScrollable = function isScrollable(el) {
                    return el && !(el.style.overflow && el.style.overflow === 'hidden') && (el.clientWidth && el.scrollWidth > el.clientWidth || el.clientHeight && el.scrollHeight > el.clientHeight);
                },
                getScalar = function getScalar(orig, dim) {
                    var value = parseInt(orig, 10) || 0;

                    if (dim && isPercentage(orig)) {
                        value = F.getViewport()[dim] / 100 * value;
                    }

                    return Math.ceil(value);
                },
                getValue = function getValue(value, dim) {
                    return getScalar(value, dim) + 'px';
                };

            $.extend(F, {
                // The current version of fancyBox
                version: '2.1.5',

                defaults: {
                    padding: 15,
                    margin: 20,

                    width: 800,
                    height: 600,
                    minWidth: 100,
                    minHeight: 100,
                    maxWidth: 9999,
                    maxHeight: 9999,
                    pixelRatio: 1, // Set to 2 for retina display support

                    autoSize: true,
                    autoHeight: false,
                    autoWidth: false,

                    autoResize: true,
                    autoCenter: !isTouch,
                    fitToView: true,
                    aspectRatio: false,
                    topRatio: 0.5,
                    leftRatio: 0.5,

                    scrolling: 'auto', // 'auto', 'yes' or 'no'
                    wrapCSS: '',

                    arrows: true,
                    closeBtn: true,
                    closeClick: false,
                    nextClick: false,
                    mouseWheel: true,
                    autoPlay: false,
                    playSpeed: 3000,
                    preload: 3,
                    modal: false,
                    loop: true,

                    ajax: {
                        dataType: 'html',
                        headers: {'X-fancyBox': true}
                    },
                    iframe: {
                        scrolling: 'auto',
                        preload: true
                    },
                    swf: {
                        wmode: 'transparent',
                        allowfullscreen: 'true',
                        allowscriptaccess: 'always'
                    },

                    keys: {
                        next: {
                            13: 'left', // enter
                            34: 'up', // page down
                            39: 'left', // right arrow
                            40: 'up' // down arrow
                        },
                        prev: {
                            8: 'right', // backspace
                            33: 'down', // page up
                            37: 'right', // left arrow
                            38: 'down' // up arrow
                        },
                        close: [27], // escape key
                        play: [32], // space - start/stop slideshow
                        toggle: [70] // letter "f" - toggle fullscreen
                    },

                    direction: {
                        next: 'left',
                        prev: 'right'
                    },

                    scrollOutside: true,

                    // Override some properties
                    index: 0,
                    type: null,
                    href: null,
                    content: null,
                    title: null,

                    // HTML templates
                    tpl: {
                        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                    },

                    // Properties for each animation type
                    // Opening fancyBox
                    openEffect: 'fade', // 'elastic', 'fade' or 'none'
                    openSpeed: 250,
                    openEasing: 'swing',
                    openOpacity: true,
                    openMethod: 'zoomIn',

                    // Closing fancyBox
                    closeEffect: 'fade', // 'elastic', 'fade' or 'none'
                    closeSpeed: 250,
                    closeEasing: 'swing',
                    closeOpacity: true,
                    closeMethod: 'zoomOut',

                    // Changing next gallery item
                    nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
                    nextSpeed: 250,
                    nextEasing: 'swing',
                    nextMethod: 'changeIn',

                    // Changing previous gallery item
                    prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
                    prevSpeed: 250,
                    prevEasing: 'swing',
                    prevMethod: 'changeOut',

                    // Enable default helpers
                    helpers: {
                        overlay: true,
                        title: true
                    },

                    // Callbacks
                    onCancel: $.noop, // If canceling
                    beforeLoad: $.noop, // Before loading
                    afterLoad: $.noop, // After loading
                    beforeShow: $.noop, // Before changing in current item
                    afterShow: $.noop, // After opening
                    beforeChange: $.noop, // Before changing gallery item
                    beforeClose: $.noop, // Before closing
                    afterClose: $.noop // After closing
                },

                //Current state
                group: {}, // Selected group
                opts: {}, // Group options
                previous: null, // Previous element
                coming: null, // Element being loaded
                current: null, // Currently loaded element
                isActive: false, // Is activated
                isOpen: false, // Is currently open
                isOpened: false, // Have been fully opened at least once

                wrap: null,
                skin: null,
                outer: null,
                inner: null,

                player: {
                    timer: null,
                    isActive: false
                },

                // Loaders
                ajaxLoad: null,
                imgPreload: null,

                // Some collections
                transitions: {},
                helpers: {},

                /*
   *	Static methods
   */

                open: function open(group, opts) {
                    if (!group) {
                        return;
                    }

                    if (!$.isPlainObject(opts)) {
                        opts = {};
                    }

                    // Close if already active
                    if (false === F.close(true)) {
                        return;
                    }

                    // Normalize group
                    if (!$.isArray(group)) {
                        group = isQuery(group) ? $(group).get() : [group];
                    }

                    // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
                    $.each(group, function (i, element) {
                        var obj = {},
                            href,
                            title,
                            content,
                            type,
                            rez,
                            hrefParts,
                            selector;

                        if ($.type(element) === "object") {
                            // Check if is DOM element
                            if (element.nodeType) {
                                element = $(element);
                            }

                            if (isQuery(element)) {
                                obj = {
                                    href: element.data('fancybox-href') || element.attr('href'),
                                    title: element.data('fancybox-title') || element.attr('title'),
                                    isDom: true,
                                    element: element
                                };

                                if ($.metadata) {
                                    $.extend(true, obj, element.metadata());
                                }
                            } else {
                                obj = element;
                            }
                        }

                        href = opts.href || obj.href || (isString(element) ? element : null);
                        title = opts.title !== undefined ? opts.title : obj.title || '';

                        content = opts.content || obj.content;
                        type = content ? 'html' : opts.type || obj.type;

                        if (!type && obj.isDom) {
                            type = element.data('fancybox-type');

                            if (!type) {
                                rez = element.prop('class').match(/fancybox\.(\w+)/);
                                type = rez ? rez[1] : null;
                            }
                        }

                        if (isString(href)) {
                            // Try to guess the content type
                            if (!type) {
                                if (F.isImage(href)) {
                                    type = 'image';
                                } else if (F.isSWF(href)) {
                                    type = 'swf';
                                } else if (href.charAt(0) === '#') {
                                    type = 'inline';
                                } else if (isString(element)) {
                                    type = 'html';
                                    content = element;
                                }
                            }

                            // Split url into two pieces with source url and content selector, e.g,
                            // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                            if (type === 'ajax') {
                                hrefParts = href.split(/\s+/, 2);
                                href = hrefParts.shift();
                                selector = hrefParts.shift();
                            }
                        }

                        if (!content) {
                            if (type === 'inline') {
                                if (href) {
                                    content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7
                                } else if (obj.isDom) {
                                    content = element;
                                }
                            } else if (type === 'html') {
                                content = href;
                            } else if (!type && !href && obj.isDom) {
                                type = 'inline';
                                content = element;
                            }
                        }

                        $.extend(obj, {
                            href: href,
                            type: type,
                            content: content,
                            title: title,
                            selector: selector
                        });

                        group[i] = obj;
                    });

                    // Extend the defaults
                    F.opts = $.extend(true, {}, F.defaults, opts);

                    // All options are merged recursive except keys
                    if (opts.keys !== undefined) {
                        F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
                    }

                    F.group = group;

                    return F._start(F.opts.index);
                },

                // Cancel image loading or abort ajax request
                cancel: function cancel() {
                    var coming = F.coming;

                    if (!coming || false === F.trigger('onCancel')) {
                        return;
                    }

                    F.hideLoading();

                    if (F.ajaxLoad) {
                        F.ajaxLoad.abort();
                    }

                    F.ajaxLoad = null;

                    if (F.imgPreload) {
                        F.imgPreload.onload = F.imgPreload.onerror = null;
                    }

                    if (coming.wrap) {
                        coming.wrap.stop(true, true).trigger('onReset').remove();
                    }

                    F.coming = null;

                    // If the first item has been canceled, then clear everything
                    if (!F.current) {
                        F._afterZoomOut(coming);
                    }
                },

                // Start closing animation if is open; remove immediately if opening/closing
                close: function close(event) {
                    F.cancel();

                    if (false === F.trigger('beforeClose')) {
                        return;
                    }

                    F.unbindEvents();

                    if (!F.isActive) {
                        return;
                    }

                    if (!F.isOpen || event === true) {
                        $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                        F._afterZoomOut();
                    } else {
                        F.isOpen = F.isOpened = false;
                        F.isClosing = true;

                        $('.fancybox-item, .fancybox-nav').remove();

                        F.wrap.stop(true, true).removeClass('fancybox-opened');

                        F.transitions[F.current.closeMethod]();
                    }
                },

                // Manage slideshow:
                //   $.fancybox.play(); - toggle slideshow
                //   $.fancybox.play( true ); - start
                //   $.fancybox.play( false ); - stop
                play: function play(action) {
                    var clear = function clear() {
                            clearTimeout(F.player.timer);
                        },
                        set = function set() {
                            clear();

                            if (F.current && F.player.isActive) {
                                F.player.timer = setTimeout(F.next, F.current.playSpeed);
                            }
                        },
                        stop = function stop() {
                            clear();

                            D.unbind('.player');

                            F.player.isActive = false;

                            F.trigger('onPlayEnd');
                        },
                        start = function start() {
                            if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                                F.player.isActive = true;

                                D.bind({
                                    'onCancel.player beforeClose.player': stop,
                                    'onUpdate.player': set,
                                    'beforeLoad.player': clear
                                });

                                set();

                                F.trigger('onPlayStart');
                            }
                        };

                    if (action === true || !F.player.isActive && action !== false) {
                        start();
                    } else {
                        stop();
                    }
                },

                // Navigate to next gallery item
                next: function next(direction) {
                    var current = F.current;

                    if (current) {
                        if (!isString(direction)) {
                            direction = current.direction.next;
                        }

                        F.jumpto(current.index + 1, direction, 'next');
                    }
                },

                // Navigate to previous gallery item
                prev: function prev(direction) {
                    var current = F.current;

                    if (current) {
                        if (!isString(direction)) {
                            direction = current.direction.prev;
                        }

                        F.jumpto(current.index - 1, direction, 'prev');
                    }
                },

                // Navigate to gallery item by index
                jumpto: function jumpto(index, direction, router) {
                    var current = F.current;

                    if (!current) {
                        return;
                    }

                    index = getScalar(index);

                    F.direction = direction || current.direction[index >= current.index ? 'next' : 'prev'];
                    F.router = router || 'jumpto';

                    if (current.loop) {
                        if (index < 0) {
                            index = current.group.length + index % current.group.length;
                        }

                        index = index % current.group.length;
                    }

                    if (current.group[index] !== undefined) {
                        F.cancel();

                        F._start(index);
                    }
                },

                // Center inside viewport and toggle position type to fixed or absolute if needed
                reposition: function reposition(e, onlyAbsolute) {
                    var current = F.current,
                        wrap = current ? current.wrap : null,
                        pos;

                    if (wrap) {
                        pos = F._getPosition(onlyAbsolute);

                        if (e && e.type === 'scroll') {
                            delete pos.position;

                            wrap.stop(true, true).animate(pos, 200);
                        } else {
                            wrap.css(pos);

                            current.pos = $.extend({}, current.dim, pos);
                        }
                    }
                },

                update: function update(e) {
                    var type = e && e.type,
                        anyway = !type || type === 'orientationchange';

                    if (anyway) {
                        clearTimeout(didUpdate);

                        didUpdate = null;
                    }

                    if (!F.isOpen || didUpdate) {
                        return;
                    }

                    didUpdate = setTimeout(function () {
                        var current = F.current;

                        if (!current || F.isClosing) {
                            return;
                        }

                        F.wrap.removeClass('fancybox-tmp');

                        if (anyway || type === 'load' || type === 'resize' && current.autoResize) {
                            F._setDimension();
                        }

                        if (!(type === 'scroll' && current.canShrink)) {
                            F.reposition(e);
                        }

                        F.trigger('onUpdate');

                        didUpdate = null;
                    }, anyway && !isTouch ? 0 : 300);
                },

                // Shrink content to fit inside viewport or restore if resized
                toggle: function toggle(action) {
                    if (F.isOpen) {
                        F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                        // Help browser to restore document dimensions
                        if (isTouch) {
                            F.wrap.removeAttr('style').addClass('fancybox-tmp');

                            F.trigger('onUpdate');
                        }

                        F.update();
                    }
                },

                hideLoading: function hideLoading() {
                    D.unbind('.loading');

                    $('#fancybox-loading').remove();
                },

                showLoading: function showLoading() {
                    var el, viewport;

                    F.hideLoading();

                    el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

                    // If user will press the escape-button, the request will be canceled
                    D.bind('keydown.loading', function (e) {
                        if ((e.which || e.keyCode) === 27) {
                            e.preventDefault();

                            F.cancel();
                        }
                    });

                    if (!F.defaults.fixed) {
                        viewport = F.getViewport();

                        el.css({
                            position: 'absolute',
                            top: viewport.h * 0.5 + viewport.y,
                            left: viewport.w * 0.5 + viewport.x
                        });
                    }
                },

                getViewport: function getViewport() {
                    var locked = F.current && F.current.locked || false,
                        rez = {
                            x: W.scrollLeft(),
                            y: W.scrollTop()
                        };

                    if (locked) {
                        rez.w = locked[0].clientWidth;
                        rez.h = locked[0].clientHeight;
                    } else {
                        // See http://bugs.jquery.com/ticket/6724
                        rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                        rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
                    }

                    return rez;
                },

                // Unbind the keyboard / clicking actions
                unbindEvents: function unbindEvents() {
                    if (F.wrap && isQuery(F.wrap)) {
                        F.wrap.unbind('.fb');
                    }

                    D.unbind('.fb');
                    W.unbind('.fb');
                },

                bindEvents: function bindEvents() {
                    var current = F.current,
                        keys;

                    if (!current) {
                        return;
                    }

                    // Changing document height on iOS devices triggers a 'resize' event,
                    // that can change document height... repeating infinitely
                    W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

                    keys = current.keys;

                    if (keys) {
                        D.bind('keydown.fb', function (e) {
                            var code = e.which || e.keyCode,
                                target = e.target || e.srcElement;

                            // Skip esc key if loading, because showLoading will cancel preloading
                            if (code === 27 && F.coming) {
                                return false;
                            }

                            // Ignore key combinations and key events within form elements
                            if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                                $.each(keys, function (i, val) {
                                    if (current.group.length > 1 && val[code] !== undefined) {
                                        F[i](val[code]);

                                        e.preventDefault();
                                        return false;
                                    }

                                    if ($.inArray(code, val) > -1) {
                                        F[i]();

                                        e.preventDefault();
                                        return false;
                                    }
                                });
                            }
                        });
                    }

                    if ($.fn.mousewheel && current.mouseWheel) {
                        F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
                            var target = e.target || null,
                                parent = $(target),
                                canScroll = false;

                            while (parent.length) {
                                if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                                    break;
                                }

                                canScroll = isScrollable(parent[0]);
                                parent = $(parent).parent();
                            }

                            if (delta !== 0 && !canScroll) {
                                if (F.group.length > 1 && !current.canShrink) {
                                    if (deltaY > 0 || deltaX > 0) {
                                        F.prev(deltaY > 0 ? 'down' : 'left');
                                    } else if (deltaY < 0 || deltaX < 0) {
                                        F.next(deltaY < 0 ? 'up' : 'right');
                                    }

                                    e.preventDefault();
                                }
                            }
                        });
                    }
                },

                trigger: function trigger(event, o) {
                    var ret,
                        obj = o || F.coming || F.current;

                    if (!obj) {
                        return;
                    }

                    if ($.isFunction(obj[event])) {
                        ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
                    }

                    if (ret === false) {
                        return false;
                    }

                    if (obj.helpers) {
                        $.each(obj.helpers, function (helper, opts) {
                            if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                                F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                            }
                        });
                    }

                    D.trigger(event);
                },

                isImage: function isImage(str) {
                    return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
                },

                isSWF: function isSWF(str) {
                    return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
                },

                _start: function _start(index) {
                    var coming = {},
                        obj,
                        href,
                        type,
                        margin,
                        padding;

                    index = getScalar(index);
                    obj = F.group[index] || null;

                    if (!obj) {
                        return false;
                    }

                    coming = $.extend(true, {}, F.opts, obj);

                    // Convert margin and padding properties to array - top, right, bottom, left
                    margin = coming.margin;
                    padding = coming.padding;

                    if ($.type(margin) === 'number') {
                        coming.margin = [margin, margin, margin, margin];
                    }

                    if ($.type(padding) === 'number') {
                        coming.padding = [padding, padding, padding, padding];
                    }

                    // 'modal' propery is just a shortcut
                    if (coming.modal) {
                        $.extend(true, coming, {
                            closeBtn: false,
                            closeClick: false,
                            nextClick: false,
                            arrows: false,
                            mouseWheel: false,
                            keys: null,
                            helpers: {
                                overlay: {
                                    closeClick: false
                                }
                            }
                        });
                    }

                    // 'autoSize' property is a shortcut, too
                    if (coming.autoSize) {
                        coming.autoWidth = coming.autoHeight = true;
                    }

                    if (coming.width === 'auto') {
                        coming.autoWidth = true;
                    }

                    if (coming.height === 'auto') {
                        coming.autoHeight = true;
                    }

                    /*
    * Add reference to the group, so it`s possible to access from callbacks, example:
    * afterLoad : function() {
    *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    * }
    */

                    coming.group = F.group;
                    coming.index = index;

                    // Give a chance for callback or helpers to update coming item (type, title, etc)
                    F.coming = coming;

                    if (false === F.trigger('beforeLoad')) {
                        F.coming = null;

                        return;
                    }

                    type = coming.type;
                    href = coming.href;

                    if (!type) {
                        F.coming = null;

                        //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                        if (F.current && F.router && F.router !== 'jumpto') {
                            F.current.index = index;

                            return F[F.router](F.direction);
                        }

                        return false;
                    }

                    F.isActive = true;

                    if (type === 'image' || type === 'swf') {
                        coming.autoHeight = coming.autoWidth = false;
                        coming.scrolling = 'visible';
                    }

                    if (type === 'image') {
                        coming.aspectRatio = true;
                    }

                    if (type === 'iframe' && isTouch) {
                        coming.scrolling = 'scroll';
                    }

                    // Build the neccessary markup
                    coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

                    $.extend(coming, {
                        skin: $('.fancybox-skin', coming.wrap),
                        outer: $('.fancybox-outer', coming.wrap),
                        inner: $('.fancybox-inner', coming.wrap)
                    });

                    $.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
                        coming.skin.css('padding' + v, getValue(coming.padding[i]));
                    });

                    F.trigger('onReady');

                    // Check before try to load; 'inline' and 'html' types need content, others - href
                    if (type === 'inline' || type === 'html') {
                        if (!coming.content || !coming.content.length) {
                            return F._error('content');
                        }
                    } else if (!href) {
                        return F._error('href');
                    }

                    if (type === 'image') {
                        F._loadImage();
                    } else if (type === 'ajax') {
                        F._loadAjax();
                    } else if (type === 'iframe') {
                        F._loadIframe();
                    } else {
                        F._afterLoad();
                    }
                },

                _error: function _error(type) {
                    $.extend(F.coming, {
                        type: 'html',
                        autoWidth: true,
                        autoHeight: true,
                        minWidth: 0,
                        minHeight: 0,
                        scrolling: 'no',
                        hasError: type,
                        content: F.coming.tpl.error
                    });

                    F._afterLoad();
                },

                _loadImage: function _loadImage() {
                    // Reset preload image so it is later possible to check "complete" property
                    var img = F.imgPreload = new Image();

                    img.onload = function () {
                        this.onload = this.onerror = null;

                        F.coming.width = this.width / F.opts.pixelRatio;
                        F.coming.height = this.height / F.opts.pixelRatio;

                        F._afterLoad();
                    };

                    img.onerror = function () {
                        this.onload = this.onerror = null;

                        F._error('image');
                    };

                    img.src = F.coming.href;

                    if (img.complete !== true) {
                        F.showLoading();
                    }
                },

                _loadAjax: function _loadAjax() {
                    var coming = F.coming;

                    F.showLoading();

                    F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                        url: coming.href,
                        error: function error(jqXHR, textStatus) {
                            if (F.coming && textStatus !== 'abort') {
                                F._error('ajax', jqXHR);
                            } else {
                                F.hideLoading();
                            }
                        },
                        success: function success(data, textStatus) {
                            if (textStatus === 'success') {
                                coming.content = data;

                                F._afterLoad();
                            }
                        }
                    }));
                },

                _loadIframe: function _loadIframe() {
                    var coming = F.coming,
                        iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling).attr('src', coming.href);

                    // This helps IE
                    $(coming.wrap).bind('onReset', function () {
                        try {
                            $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                        } catch (e) {
                        }
                    });

                    if (coming.iframe.preload) {
                        F.showLoading();

                        iframe.one('load', function () {
                            $(this).data('ready', 1);

                            // iOS will lose scrolling if we resize
                            if (!isTouch) {
                                $(this).bind('load.fb', F.update);
                            }

                            // Without this trick:
                            //   - iframe won't scroll on iOS devices
                            //   - IE7 sometimes displays empty iframe
                            $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                            F._afterLoad();
                        });
                    }

                    coming.content = iframe.appendTo(coming.inner);

                    if (!coming.iframe.preload) {
                        F._afterLoad();
                    }
                },

                _preloadImages: function _preloadImages() {
                    var group = F.group,
                        current = F.current,
                        len = group.length,
                        cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                        item,
                        i;

                    for (i = 1; i <= cnt; i += 1) {
                        item = group[(current.index + i) % len];

                        if (item.type === 'image' && item.href) {
                            new Image().src = item.href;
                        }
                    }
                },

                _afterLoad: function _afterLoad() {
                    var coming = F.coming,
                        previous = F.current,
                        placeholder = 'fancybox-placeholder',
                        current,
                        content,
                        type,
                        scrolling,
                        href,
                        embed;

                    F.hideLoading();

                    if (!coming || F.isActive === false) {
                        return;
                    }

                    if (false === F.trigger('afterLoad', coming, previous)) {
                        coming.wrap.stop(true).trigger('onReset').remove();

                        F.coming = null;

                        return;
                    }

                    if (previous) {
                        F.trigger('beforeChange', previous);

                        previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();
                    }

                    F.unbindEvents();

                    current = coming;
                    content = coming.content;
                    type = coming.type;
                    scrolling = coming.scrolling;

                    $.extend(F, {
                        wrap: current.wrap,
                        skin: current.skin,
                        outer: current.outer,
                        inner: current.inner,
                        current: current,
                        previous: previous
                    });

                    href = current.href;

                    switch (type) {
                        case 'inline':
                        case 'ajax':
                        case 'html':
                            if (current.selector) {
                                content = $('<div>').html(content).find(current.selector);
                            } else if (isQuery(content)) {
                                if (!content.data(placeholder)) {
                                    content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                                }

                                content = content.show().detach();

                                current.wrap.bind('onReset', function () {
                                    if ($(this).find(content).length) {
                                        content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                                    }
                                });
                            }
                            break;

                        case 'image':
                            content = current.tpl.image.replace('{href}', href);
                            break;

                        case 'swf':
                            content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                            embed = '';

                            $.each(current.swf, function (name, val) {
                                content += '<param name="' + name + '" value="' + val + '"></param>';
                                embed += ' ' + name + '="' + val + '"';
                            });

                            content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                            break;
                    }

                    if (!(isQuery(content) && content.parent().is(current.inner))) {
                        current.inner.append(content);
                    }

                    // Give a chance for helpers or callbacks to update elements
                    F.trigger('beforeShow');

                    // Set scrolling before calculating dimensions
                    current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : scrolling === 'no' ? 'hidden' : scrolling);

                    // Set initial dimensions and start position
                    F._setDimension();

                    F.reposition();

                    F.isOpen = false;
                    F.coming = null;

                    F.bindEvents();

                    if (!F.isOpened) {
                        $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();
                    } else if (previous.prevMethod) {
                        F.transitions[previous.prevMethod]();
                    }

                    F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

                    F._preloadImages();
                },

                _setDimension: function _setDimension() {
                    var viewport = F.getViewport(),
                        steps = 0,
                        canShrink = false,
                        canExpand = false,
                        wrap = F.wrap,
                        skin = F.skin,
                        inner = F.inner,
                        current = F.current,
                        width = current.width,
                        height = current.height,
                        minWidth = current.minWidth,
                        minHeight = current.minHeight,
                        maxWidth = current.maxWidth,
                        maxHeight = current.maxHeight,
                        scrolling = current.scrolling,
                        scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                        margin = current.margin,
                        wMargin = getScalar(margin[1] + margin[3]),
                        hMargin = getScalar(margin[0] + margin[2]),
                        wPadding,
                        hPadding,
                        wSpace,
                        hSpace,
                        origWidth,
                        origHeight,
                        origMaxWidth,
                        origMaxHeight,
                        ratio,
                        width_,
                        height_,
                        maxWidth_,
                        maxHeight_,
                        iframe,
                        body;

                    // Reset dimensions so we could re-check actual size
                    wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

                    wPadding = getScalar(skin.outerWidth(true) - skin.width());
                    hPadding = getScalar(skin.outerHeight(true) - skin.height());

                    // Any space between content and viewport (margin, padding, border, title)
                    wSpace = wMargin + wPadding;
                    hSpace = hMargin + hPadding;

                    origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
                    origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

                    if (current.type === 'iframe') {
                        iframe = current.content;

                        if (current.autoHeight && iframe.data('ready') === 1) {
                            try {
                                if (iframe[0].contentWindow.document.location) {
                                    inner.width(origWidth).height(9999);

                                    body = iframe.contents().find('body');

                                    if (scrollOut) {
                                        body.css('overflow-x', 'hidden');
                                    }

                                    origHeight = body.outerHeight(true);
                                }
                            } catch (e) {
                            }
                        }
                    } else if (current.autoWidth || current.autoHeight) {
                        inner.addClass('fancybox-tmp');

                        // Set width or height in case we need to calculate only one dimension
                        if (!current.autoWidth) {
                            inner.width(origWidth);
                        }

                        if (!current.autoHeight) {
                            inner.height(origHeight);
                        }

                        if (current.autoWidth) {
                            origWidth = inner.width();
                        }

                        if (current.autoHeight) {
                            origHeight = inner.height();
                        }

                        inner.removeClass('fancybox-tmp');
                    }

                    width = getScalar(origWidth);
                    height = getScalar(origHeight);

                    ratio = origWidth / origHeight;

                    // Calculations for the content
                    minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
                    maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

                    minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
                    maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

                    // These will be used to determine if wrap can fit in the viewport
                    origMaxWidth = maxWidth;
                    origMaxHeight = maxHeight;

                    if (current.fitToView) {
                        maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                        maxHeight = Math.min(viewport.h - hSpace, maxHeight);
                    }

                    maxWidth_ = viewport.w - wMargin;
                    maxHeight_ = viewport.h - hMargin;

                    if (current.aspectRatio) {
                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        if (height > maxHeight) {
                            height = maxHeight;
                            width = getScalar(height * ratio);
                        }

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (height < minHeight) {
                            height = minHeight;
                            width = getScalar(height * ratio);
                        }
                    } else {
                        width = Math.max(minWidth, Math.min(width, maxWidth));

                        if (current.autoHeight && current.type !== 'iframe') {
                            inner.width(width);

                            height = inner.height();
                        }

                        height = Math.max(minHeight, Math.min(height, maxHeight));
                    }

                    // Try to fit inside viewport (including the title)
                    if (current.fitToView) {
                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        // Real wrap dimensions
                        width_ = wrap.width();
                        height_ = wrap.height();

                        if (current.aspectRatio) {
                            while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                                if (steps++ > 19) {
                                    break;
                                }

                                height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                                width = getScalar(height * ratio);

                                if (width < minWidth) {
                                    width = minWidth;
                                    height = getScalar(width / ratio);
                                }

                                if (width > maxWidth) {
                                    width = maxWidth;
                                    height = getScalar(width / ratio);
                                }

                                inner.width(width).height(height);

                                wrap.width(width + wPadding);

                                width_ = wrap.width();
                                height_ = wrap.height();
                            }
                        } else {
                            width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                            height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                        }
                    }

                    if (scrollOut && scrolling === 'auto' && height < origHeight && width + wPadding + scrollOut < maxWidth_) {
                        width += scrollOut;
                    }

                    inner.width(width).height(height);

                    wrap.width(width + wPadding);

                    width_ = wrap.width();
                    height_ = wrap.height();

                    canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
                    canExpand = current.aspectRatio ? width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight : (width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight);

                    $.extend(current, {
                        dim: {
                            width: getValue(width_),
                            height: getValue(height_)
                        },
                        origWidth: origWidth,
                        origHeight: origHeight,
                        canShrink: canShrink,
                        canExpand: canExpand,
                        wPadding: wPadding,
                        hPadding: hPadding,
                        wrapSpace: height_ - skin.outerHeight(true),
                        skinSpace: skin.height() - height
                    });

                    if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                        inner.height('auto');
                    }
                },

                _getPosition: function _getPosition(onlyAbsolute) {
                    var current = F.current,
                        viewport = F.getViewport(),
                        margin = current.margin,
                        width = F.wrap.width() + margin[1] + margin[3],
                        height = F.wrap.height() + margin[0] + margin[2],
                        rez = {
                            position: 'absolute',
                            top: margin[0],
                            left: margin[3]
                        };

                    if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                        rez.position = 'fixed';
                    } else if (!current.locked) {
                        rez.top += viewport.y;
                        rez.left += viewport.x;
                    }

                    rez.top = getValue(Math.max(rez.top, rez.top + (viewport.h - height) * current.topRatio));
                    rez.left = getValue(Math.max(rez.left, rez.left + (viewport.w - width) * current.leftRatio));

                    return rez;
                },

                _afterZoomIn: function _afterZoomIn() {
                    var current = F.current;

                    if (!current) {
                        return;
                    }

                    F.isOpen = F.isOpened = true;

                    F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

                    F.update();

                    // Assign a click event
                    if (current.closeClick || current.nextClick && F.group.length > 1) {
                        F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
                            if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                                e.preventDefault();

                                F[current.closeClick ? 'close' : 'next']();
                            }
                        });
                    }

                    // Create a close button
                    if (current.closeBtn) {
                        $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
                            e.preventDefault();

                            F.close();
                        });
                    }

                    // Create navigation arrows
                    if (current.arrows && F.group.length > 1) {
                        if (current.loop || current.index > 0) {
                            $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                        }

                        if (current.loop || current.index < F.group.length - 1) {
                            $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                        }
                    }

                    F.trigger('afterShow');

                    // Stop the slideshow if this is the last item
                    if (!current.loop && current.index === current.group.length - 1) {
                        F.play(false);
                    } else if (F.opts.autoPlay && !F.player.isActive) {
                        F.opts.autoPlay = false;

                        F.play();
                    }
                },

                _afterZoomOut: function _afterZoomOut(obj) {
                    obj = obj || F.current;

                    $('.fancybox-wrap').trigger('onReset').remove();

                    $.extend(F, {
                        group: {},
                        opts: {},
                        router: false,
                        current: null,
                        isActive: false,
                        isOpened: false,
                        isOpen: false,
                        isClosing: false,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null
                    });

                    F.trigger('afterClose', obj);
                }
            });

            /*
  *	Default transitions
  */

            F.transitions = {
                getOrigPosition: function getOrigPosition() {
                    var current = F.current,
                        element = current.element,
                        orig = current.orig,
                        pos = {},
                        width = 50,
                        height = 50,
                        hPadding = current.hPadding,
                        wPadding = current.wPadding,
                        viewport = F.getViewport();

                    if (!orig && current.isDom && element.is(':visible')) {
                        orig = element.find('img:first');

                        if (!orig.length) {
                            orig = element;
                        }
                    }

                    if (isQuery(orig)) {
                        pos = orig.offset();

                        if (orig.is('img')) {
                            width = orig.outerWidth();
                            height = orig.outerHeight();
                        }
                    } else {
                        pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                        pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
                    }

                    if (F.wrap.css('position') === 'fixed' || current.locked) {
                        pos.top -= viewport.y;
                        pos.left -= viewport.x;
                    }

                    pos = {
                        top: getValue(pos.top - hPadding * current.topRatio),
                        left: getValue(pos.left - wPadding * current.leftRatio),
                        width: getValue(width + wPadding),
                        height: getValue(height + hPadding)
                    };

                    return pos;
                },

                step: function step(now, fx) {
                    var ratio,
                        padding,
                        value,
                        prop = fx.prop,
                        current = F.current,
                        wrapSpace = current.wrapSpace,
                        skinSpace = current.skinSpace;

                    if (prop === 'width' || prop === 'height') {
                        ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                        if (F.isClosing) {
                            ratio = 1 - ratio;
                        }

                        padding = prop === 'width' ? current.wPadding : current.hPadding;
                        value = now - padding;

                        F.skin[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio));
                        F.inner[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio - skinSpace * ratio));
                    }
                },

                zoomIn: function zoomIn() {
                    var current = F.current,
                        startPos = current.pos,
                        effect = current.openEffect,
                        elastic = effect === 'elastic',
                        endPos = $.extend({opacity: 1}, startPos);

                    // Remove "position" property that breaks older IE
                    delete endPos.position;

                    if (elastic) {
                        startPos = this.getOrigPosition();

                        if (current.openOpacity) {
                            startPos.opacity = 0.1;
                        }
                    } else if (effect === 'fade') {
                        startPos.opacity = 0.1;
                    }

                    F.wrap.css(startPos).animate(endPos, {
                        duration: effect === 'none' ? 0 : current.openSpeed,
                        easing: current.openEasing,
                        step: elastic ? this.step : null,
                        complete: F._afterZoomIn
                    });
                },

                zoomOut: function zoomOut() {
                    var current = F.current,
                        effect = current.closeEffect,
                        elastic = effect === 'elastic',
                        endPos = {opacity: 0.1};

                    if (elastic) {
                        endPos = this.getOrigPosition();

                        if (current.closeOpacity) {
                            endPos.opacity = 0.1;
                        }
                    }

                    F.wrap.animate(endPos, {
                        duration: effect === 'none' ? 0 : current.closeSpeed,
                        easing: current.closeEasing,
                        step: elastic ? this.step : null,
                        complete: F._afterZoomOut
                    });
                },

                changeIn: function changeIn() {
                    var current = F.current,
                        effect = current.nextEffect,
                        startPos = current.pos,
                        endPos = {opacity: 1},
                        direction = F.direction,
                        distance = 200,
                        field;

                    startPos.opacity = 0.1;

                    if (effect === 'elastic') {
                        field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                        if (direction === 'down' || direction === 'right') {
                            startPos[field] = getValue(getScalar(startPos[field]) - distance);
                            endPos[field] = '+=' + distance + 'px';
                        } else {
                            startPos[field] = getValue(getScalar(startPos[field]) + distance);
                            endPos[field] = '-=' + distance + 'px';
                        }
                    }

                    // Workaround for http://bugs.jquery.com/ticket/12273
                    if (effect === 'none') {
                        F._afterZoomIn();
                    } else {
                        F.wrap.css(startPos).animate(endPos, {
                            duration: current.nextSpeed,
                            easing: current.nextEasing,
                            complete: F._afterZoomIn
                        });
                    }
                },

                changeOut: function changeOut() {
                    var previous = F.previous,
                        effect = previous.prevEffect,
                        endPos = {opacity: 0.1},
                        direction = F.direction,
                        distance = 200;

                    if (effect === 'elastic') {
                        endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
                    }

                    previous.wrap.animate(endPos, {
                        duration: effect === 'none' ? 0 : previous.prevSpeed,
                        easing: previous.prevEasing,
                        complete: function complete() {
                            $(this).trigger('onReset').remove();
                        }
                    });
                }
            };

            /*
  *	Overlay helper
  */

            F.helpers.overlay = {
                defaults: {
                    closeClick: true, // if true, fancyBox will be closed when user clicks on the overlay
                    speedOut: 200, // duration of fadeOut animation
                    showEarly: true, // indicates if should be opened immediately or wait until the content is ready
                    css: {}, // custom CSS properties
                    locked: !isTouch, // if true, the content will be locked into overlay
                    fixed: true // if false, the overlay CSS position property will not be set to "fixed"
                },

                overlay: null, // current handle
                fixed: false, // indicates if the overlay has position "fixed"
                el: $('html'), // element that contains "the lock"

                // Public methods
                create: function create(opts) {
                    opts = $.extend({}, this.defaults, opts);

                    if (this.overlay) {
                        this.close();
                    }

                    this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
                    this.fixed = false;

                    if (opts.fixed && F.defaults.fixed) {
                        this.overlay.addClass('fancybox-overlay-fixed');

                        this.fixed = true;
                    }
                },

                open: function open(opts) {
                    var that = this;

                    opts = $.extend({}, this.defaults, opts);

                    if (this.overlay) {
                        this.overlay.unbind('.overlay').width('auto').height('auto');
                    } else {
                        this.create(opts);
                    }

                    if (!this.fixed) {
                        W.bind('resize.overlay', $.proxy(this.update, this));

                        this.update();
                    }

                    if (opts.closeClick) {
                        this.overlay.bind('click.overlay', function (e) {
                            if ($(e.target).hasClass('fancybox-overlay')) {
                                if (F.isActive) {
                                    F.close();
                                } else {
                                    that.close();
                                }

                                return false;
                            }
                        });
                    }

                    this.overlay.css(opts.css).show();
                },

                close: function close() {
                    var scrollV, scrollH;

                    W.unbind('resize.overlay');

                    if (this.el.hasClass('fancybox-lock')) {
                        $('.fancybox-margin').removeClass('fancybox-margin');

                        scrollV = W.scrollTop();
                        scrollH = W.scrollLeft();

                        this.el.removeClass('fancybox-lock');

                        W.scrollTop(scrollV).scrollLeft(scrollH);
                    }

                    $('.fancybox-overlay').remove().hide();

                    $.extend(this, {
                        overlay: null,
                        fixed: false
                    });
                },

                // Private, callbacks

                update: function update() {
                    var width = '100%',
                        offsetWidth;

                    // Reset width/height so it will not mess
                    this.overlay.width(width).height('100%');

                    // jQuery does not return reliable result for IE
                    if (IE) {
                        offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                        if (D.width() > offsetWidth) {
                            width = D.width();
                        }
                    } else if (D.width() > W.width()) {
                        width = D.width();
                    }

                    this.overlay.width(width).height(D.height());
                },

                // This is where we can manipulate DOM, because later it would cause iframes to reload
                onReady: function onReady(opts, obj) {
                    var overlay = this.overlay;

                    $('.fancybox-overlay').stop(true, true);

                    if (!overlay) {
                        this.create(opts);
                    }

                    if (opts.locked && this.fixed && obj.fixed) {
                        if (!overlay) {
                            this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
                        }

                        obj.locked = this.overlay.append(obj.wrap);
                        obj.fixed = false;
                    }

                    if (opts.showEarly === true) {
                        this.beforeShow.apply(this, arguments);
                    }
                },

                beforeShow: function beforeShow(opts, obj) {
                    var scrollV, scrollH;

                    if (obj.locked) {
                        if (this.margin !== false) {
                            $('*').filter(function () {
                                return $(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap");
                            }).addClass('fancybox-margin');

                            this.el.addClass('fancybox-margin');
                        }

                        scrollV = W.scrollTop();
                        scrollH = W.scrollLeft();

                        this.el.addClass('fancybox-lock');

                        W.scrollTop(scrollV).scrollLeft(scrollH);
                    }

                    this.open(opts);
                },

                onUpdate: function onUpdate() {
                    if (!this.fixed) {
                        this.update();
                    }
                },

                afterClose: function afterClose(opts) {
                    // Remove overlay if exists and fancyBox is not opening
                    // (e.g., it is not being open using afterClose callback)
                    //if (this.overlay && !F.isActive) {
                    if (this.overlay && !F.coming) {
                        this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
                    }
                }
            };

            /*
  *	Title helper
  */

            F.helpers.title = {
                defaults: {
                    type: 'float', // 'float', 'inside', 'outside' or 'over',
                    position: 'bottom' // 'top' or 'bottom'
                },

                beforeShow: function beforeShow(opts) {
                    var current = F.current,
                        text = current.title,
                        type = opts.type,
                        title,
                        target;

                    if ($.isFunction(text)) {
                        text = text.call(current.element, current);
                    }

                    if (!isString(text) || $.trim(text) === '') {
                        return;
                    }

                    title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

                    switch (type) {
                        case 'inside':
                            target = F.skin;
                            break;

                        case 'outside':
                            target = F.wrap;
                            break;

                        case 'over':
                            target = F.inner;
                            break;

                        default:
                            // 'float'
                            target = F.skin;

                            title.appendTo('body');

                            if (IE) {
                                title.width(title.width());
                            }

                            title.wrapInner('<span class="child"></span>');

                            //Increase bottom margin so this title will also fit into viewport
                            F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                            break;
                    }

                    title[opts.position === 'top' ? 'prependTo' : 'appendTo'](target);
                }
            };

            // jQuery plugin initialization
            $.fn.fancybox = function (options) {
                var index,
                    that = $(this),
                    selector = this.selector || '',
                    run = function run(e) {
                        var what = $(this).blur(),
                            idx = index,
                            relType,
                            relVal;

                        if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                            relType = options.groupAttr || 'data-fancybox-group';
                            relVal = what.attr(relType);

                            if (!relVal) {
                                relType = 'rel';
                                relVal = what.get(0)[relType];
                            }

                            if (relVal && relVal !== '' && relVal !== 'nofollow') {
                                what = selector.length ? $(selector) : that;
                                what = what.filter('[' + relType + '="' + relVal + '"]');
                                idx = what.index(this);
                            }

                            options.index = idx;

                            // Stop an event from bubbling if everything is fine
                            if (F.open(what, options) !== false) {
                                e.preventDefault();
                            }
                        }
                    };

                options = options || {};
                index = options.index || 0;

                if (!selector || options.live === false) {
                    that.unbind('click.fb-start').bind('click.fb-start', run);
                } else {
                    D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
                }

                this.filter('[data-fancybox-start=1]').trigger('click');

                return this;
            };

            // Tests that need a body at doc ready
            D.ready(function () {
                var w1, w2;

                if ($.scrollbarWidth === undefined) {
                    // http://benalman.com/projects/jquery-poster-plugins/#scrollbarwidth
                    $.scrollbarWidth = function () {
                        var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                            child = parent.children(),
                            width = child.innerWidth() - child.height(99).innerWidth();

                        parent.remove();

                        return width;
                    };
                }

                if ($.support.fixedPosition === undefined) {
                    $.support.fixedPosition = function () {
                        var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                            fixed = elem[0].offsetTop === 20 || elem[0].offsetTop === 15;

                        elem.remove();

                        return fixed;
                    }();
                }

                $.extend(F.defaults, {
                    scrollbarWidth: $.scrollbarWidth(),
                    fixed: $.support.fixedPosition,
                    parent: $('body')
                });

                //Get real width of page scroll-bar
                w1 = $(window).width();

                H.addClass('fancybox-lock-test');

                w2 = $(window).width();

                H.removeClass('fancybox-lock-test');

                $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
            });
        })(window, document, jQuery);

        /***/
    }),

    /***/ 51:
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "//dn-piaoniu-static.qbox.me/pc/325472601571f31e1bf00674c368d335.e0a7e4ed.gif";

        /***/
    }),

    /***/ 52:
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "//dn-piaoniu-static.qbox.me/pc/328cc0f6c78211485058d460e80f4fa8.3c5dc0c1.gif";

        /***/
    }),

    /***/ 53:
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "//dn-piaoniu-static.qbox.me/pc/f92938639fa894a0e8ded1c3368abe98.6cdb96be.gif";

        /***/
    }),

    /***/ 57:
    /***/ (function (module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
        var content = __webpack_require__(49);
        if (typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
        var update = __webpack_require__(44)(content, {});
        if (content.locals) module.exports = content.locals;
// Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../node_modules/_css-loader@0.23.1@css-loader/index.js!./jquery.fancybox.css", function () {
                    var newContent = require("!!../../../node_modules/_css-loader@0.23.1@css-loader/index.js!./jquery.fancybox.css");
                    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function () {
                update();
            });
        }

        /***/
    }),

    /***/ 58:
    /***/ (function (module, exports) {

        module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEM4NDgzQjlDRTNFMTExODE4NUVDOTdFQ0I0RDgxRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGREU5OEVCQzAzMjYxMUUyOTg5OURDMDlDRTJDMTc0RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGREU5OEVCQjAzMjYxMUUyOTg5OURDMDlDRTJDMTc0RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxQzg0ODNCOUNFM0UxMTE4MTg1RUM5N0VDQjREODFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIwQzg0ODNCOUNFM0UxMTE4MTg1RUM5N0VDQjREODFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+s3YRAQAAABtJREFUeNpiFODh2cBABGBiIBKMKqSOQoAAAwBokQDs5F/8FAAAAABJRU5ErkJggg=="

        /***/
    }),

    /***/ 59:
    /***/ (function (module, exports) {

        module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAACYCAMAAACoAftQAAAAvVBMVEUAAAAAAAAAAAAODg4AAAAAAAAAAADNzc0BAQHZ2dkDAwMHBwcAAADf398CAgI/Pz8BAQEAAACCgoIcHBzl5eUAAAC/v7/x8fEGBgZnZ2cAAADs7OwGBgb4+Pg/Pz/Jycmenp5nZ2f39/eDg4MAAADQ0ND4+Piurq7a2tr8/Pzs7OwAAAD5+fn9/f3e3t4AAAD///9OTk7BwcE1NTWsrKyNjY2cnJx6enpdXV1oaGgsLCy6uroiIiLOzs5BQUFt3PCNAAAAL3RSTlMAAQMIDRIZHSMnLTpESFNVXWlpbG15en+HiZCWoaGssrO2vsDFydPU3uL4+fr9/Ywv6xsAAAQVSURBVHhe7JZbc6JMGIQXAUOQEMi3uMYkrmopZgqs5ujZ//+zvpdNzMsMlli1N3uRvtCbpzo9I+nmhyqN9OO6GNQ6Ha1SG0mcrhskXe90rvKE6kbX7r9MF4vp2887nfBrqPW0xJemD4w32e7jHIj2602SbNZ7Qfgd0zJLtgKi2B0+tSsE3h8u0RX7HGGfHWrK9oiIbrK69SiQHxTliO5VWtP0rrNEemhoj6muaYqx2XuGyJrwbgUKohhb3hIFM6wCC7Zm4+M5Zs5fpKNiTYndEOUHDFRYCeADLvGiy7DtL7E5/12gJPacalPlqEc2eoFAdmCa2UOGyOhoUuQgwo7PxCwJMGXYGcQMlyCVX3DchCkGs3V6h0iFgyUSZsuS6QQLGaYDhueUHxhf3RpzOqB8dRMcz84lf5FS9A1Ngi2PQm8PF7RBZOnEyqFnSC/BKX6bHQmucpB13mRzCJtTsPUowlpl14if2JifUXcwgeqdA2OLn1C+PdsbzCKkW0a3KeKxbbAxF4FJ9EgAaXGqyFORAuLZNrkMZNoNKnNS9PE5dpltFofjB4PJXIAk5rP/HMu4Ukmm7XjEkwLfc2yT66tJk7lp2T2H1LMtk2wVVsWpcE0SlW4DbeLE/xG3eRvfQv7Fptw4KvpDNRKLt1/3rZty/xbjrPef1+5D018ITYttkiTrfAUsrmzK3RTIT/woHxH3DaZl9h2rRH2aX0ydaYb1BVK1zNdA32RvNn7DkVmmoyeVJvYBMcdl5Vg2/lW0zpSbUNIKT12KLV8wVjsmNvGW63feU3qj86veGQmAA1e5qzbStNZdmVTlRzzbSjG+4+t4u1iqjxxjR6pczaiNBCCVXoGx25X7mUNGgJBHM/QsXWp+dk4U5xJjX4EXSM7ACcCxnnnm2zI8rxVoFgMr/lUwUpyNPvYVx/eRfaUSQzkzLWxEOVhiwynCAd2GvCm/2bquBPEo+LxnDv0YXdyfFOHQP+8EV/kY0enSorxyitoLxxwiabDRqDImWF2JJVBIeVNEk2HgsDGn7vkhcPy67lMOiBGF4AGS3tX8yYqAfb5eF/kRiMPX4cDjEDLd8wezJT4lwtHrMHBtbg6V9oLhYDYLw3A2eSVbn0elSdMCecFg+Ee0Kq7dlftLXSCrRxNE8lzH7hp0Nu3qpHQty7Ztq2sabHvtpb/SLauisVTye1O+N2Ubbxhu2xSAq6x1UwoAWfum8P3Gu5ZNYaUA2jaFJYCofVPYOWnZFD4TcLpxU1ZAnN24KRnfxQ2bshEE/Vub8r0p35vi/t9eHRoBDMNQDJUvMLkOkDMM+8D7b9cR+kOKLPy4juojnQeAkWWVAyLLLINVdovj44N8LOqi/3Djxo0bN5ZvdbWJuwHhrw2ILYdqBwDT2fEEXtrZFmVcCWLiAAAAAElFTkSuQmCC"

        /***/
    }),

    /***/ 60:
    /***/ (function (module, exports) {

        module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAEwCAQAAACZTH48AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAGTtJREFUeNrtXXuUFNWZ/1VVv6dnBpCnvBRURhGjGEUhBuNjNa5G1BhiXHY1m5z4SqLJOUGjMa6KmsSs2VXJenQ1CWuiWZOYEANhBXxGQKMLSkRAeTi8HGAePT39rKr9o7773Vs93V3VPY0De+r2Geju6ur+zTdf3fs9fr/bGvwMDYCm3HRo0KFDp0fOKwAbAGABsGDBhgWb/3Vu4J86R8gXWJ0A69BgQKcfFbRGrxQwHcAmLJj0jMmQofxyNQ/Nt2UFzJDyv0GAHdAOHAsWLJiwUIQFk282HXHbuqEWFpbTXRBDCCNENx0hGPwrCSgmWbYAk/4t0o/4ZVC/nSsDdtzA+aMbBDCMMMKI0P8GwtAREoDnjWuOvNGxZj8sAlhEASbyKKCAIt80aOQegA2tVsghD7gGgQ0jggjCiNK/YYQRQvh702eeMGrCkFHJEerJ+z/oat+1ZdHK37YjjwLyyKGAPAowoMNEERrbuWbIWkW4wrJhhBBBBFFEEUMUUUQRGd/y1RPPPHXStEhTtTfv3fHeqy+89oO1yCKHHPLIoUj2Fpdjzd6slfVcsG3DCCOKmHKLXzTxxs9NPVUP+f2IfOfqZ255duN+5Am4cBGTL8IaIGtl4RrQEWLLxhFDAnEkED9j7J1fmHpK7dd2IbX6V/N+me5DBnlkyUGKNJvUBFmrANdxhChDTSARTS688PwLwtFKb7UFOYzGkIof1bP1vx6443VkkEWWvLoOyP0BO3DDCCNGUJvQhOTMcQ99Zdyk0tN3YxVWoB07Xc+2oQ2n4cx+H2ZbL/308qeQQQYZ5JFDHkWao92Lik/AAm4IYUQRRRxNSDq3G06ef1U0oZ64D8vwP/hblbfWMQtn4u9Lnt245JL7O7rLQLb82VgrWSYMmmljiCOJJJrRjJbbZ137JcNQ7foonvPpvUNwDea4ntn79tW3rt6FPmRo7pCO4QOy4YoYDLZuAkk0owWtaLnvnK9doevylP/GN7HJ9+WWxStYjOMxip9JjJpz1uZXN/ZR5AH/7uAGrPPMIOA2Ywhav3Xa9V/U+O/wAb6DZ2ueI9JYjBhO4Mfh5Dkz1760NUPxBZQoTvMHWNpX+G6TY915n7jjKoOtux7fwPY6w8I12IKz+VGk5Zzpv34+bXIAakGD5dfCGq1rzgIcRwJJtKAFQ44c/dhX4nHx0t9hPrL1B7LYgrdxMsTSGB9+9tAnVinhqM1LtS/ABgyE2R2SaEUrWhZfPXaMeOHbmI+Bjh14F7MgLDB8yoStS7bzeudzltDJvhpdcDHEEUczkmi+5fQpk6UzfB2NGP+L21HgRxff2DYEMUQQUsJUjxjdIPs6l1uM3KEZrSNGPvSlWERMYzeiG40ZO7GLl5RQ4tSmn6+hmdii1MrTwiL5cSa0OPlwcsHs1qR40b34CI0bS7GE7x83Z+4RiCFKeYzmPUvoFDsYFOo4y3HT4cPO5xBnCVajseMBdgtNv+FKjq5D7BQ+fDhE61sUCTQhMX+GcAfgATR69OBpvn/0eeeMQQRhyg91L9AiYTco8k0gjjji5/Is/1v0oPHjIfQKAKEbzqfLTifzeVpYoyQoSgFl7JIjh7eKFyyscGIz5mBeSZSgxmvzMA9jq3zwYr439VyEEaEk19MpQtBgKLNwFHHELpsqDq9gS5SOB9EGAJiDryNVcmwergcAXI9bsbzC+U/gCrrXOvG6KQvfQhg5P5edmhWHRdY2dZy84CpZsI3vPYhm17E5BBcAzqrix6/y/dnTEYbBpRlfPiyytygiRw0dO8w5mMHLFU7bgNcV8CrkObhZeV21QGmZvPBOpqUjxFC16haWNYcwIuewfd+s8nH3KY7QxiDbXHAfVn6t/kO++8g2AuzjstN52RCQQ8cMFwc3VY0LVN89GzeTrVXrLqr60R3o4tjtU8NgUHHBY2nWoSFESX3YAT2R88htVT9wgyu+mIObXa7xLO7znNw+5HuzJrB9PaIJXZmJnUvPaOWAstPjAze4QM1R4G7wARdKfDJyKDmnj2hNzhR0i4bFwYzn6eXtuMFnbCenzOYk15k1b5dQ7azBaIr0f8NqkB8uAzflC3CfzPPiSrncx0Una8A+FsfSMbbf45aal2pL9V3NGzCUf7UCx6RhHx81p9/y3IwFJUuJVwYM2JZSZfb0YdDL6IRUXhz0ttTZrnlXzsv3+KxZcK2iW0mQbG/AIgG0AWA/Z5qHeXxgW8mqJj33lLK/SOkYJmf1Tq5QeEDW+WW26Phs5XhyYtWPc//pl+M+18U2p2IkJ8d4vvfKTr8lQV1pSTktFHtDF6/xVeE+qFxuzry7wTVj3KzUIcqNEewSudSaTipXWV5VIF0B6zRMzJUd4uAnqpx4PcdrQIpt+2wJ5LYq7zBd1uo2Um3NR31Np1zVlM2qLant5BRJnOFjbki5XGGREqE1V/Xkc/je+nWcN1tepVcdgEmtKtHnMd9hG3+24uygxm0bXMceVh63oVK5vkUxxoq3OdW3vRJ9nTuWRRSRd7pqT22RAXiy7GnLFbilOUUKX2fIG0p+GTmu5nudO3+x2X+VOMTWNVFAwek+LN21Oz2aimDX4YdlF+TXcRaAFdhR5mgKV2EOmpHC8oqL9EV8740XlT6eZ+E1xJdcAXmqiedRXLzlq8c7L7gU/1E2b97hEe1WL8rewH85q/jgSmrSmNxI93AJad8i8k5V/IH3MlwCu6nhSX4L5spq28ur9nAbzEcdXqfqbBEF7qPlkN3b+8xmeeHNaDDgmzhKsa1//b2rceBZv9TJJQooooAcsnTL3b1eLtG3YGQD4Z6vzD2rn1+2nZqNjgdbXrOEQWGzwUkS5XZZ3bQ/M1bMxydgGYoNgXsKFnCU1tv9+Qd6OpFGH3XuTL8rnTNP5Mm6fU4n7aeb3+Si5VRXeln/OBF3KkHr44va9yNDnVHHg32EpBoXXA0uqTj5nf78vssnJuj9R+Ew/GWAcGfg+xgu3eHFa59FD9JwGrp5bjF6xtA6ZxsOMSYkQPfig/RFE3TKAI7F6Xh5AF2Ov8MPIZv/u7Zf+GCuC71IU5Ox6AeuamGNiyo6W9vYnNmTPXesaHuNxBnYjN11wf0mvqE82t8x98fte5BCGmlknbm/dsBOJ1Rm0Tp06OvSpnnGGJkjXIhWrK6RRjIWP3FV2bo6r7x/7YcEN8MNXF9tGUNJ/NwUL0E90lZ1d+Vmj9E1eQF+Dj2+e6EjcCNud02L27Zc+sA7O5BCD3rRhyzDtf1ddOB8VSSiIs/jrs6bPe93zx4T5ZyxCbNxCUahBx1V3jqMM3EVvocprmdfWXPJY7s70IMe9l5n0aihOS5gGtS4dbr4zWihWzOSaJo87PGZxw4rPX03VuFl7MQW5bkYjsBxmIVZ/T7MNH/1p28tQzd60IMUetl/TRQBf51Q6RCiceBATqAJLQTaoSDEw4nbpn25LVqROpPGDhxT5aN27bnrN8+sRw9S6EGKlossca98N8iNEkurzVNL4aJZsC3rhY7F7ZPiR7aWf6tIlSw7nXl6xdxfvv2hYltndSuiwFkGagUs/peptsUkRMr39mefaV/ePjo6rtnQ/c4RnamnXpz369+/Y3ajBymkyLrO3FD0k3j2dwm4PNlgvo/jGkmnFYYmxBFHDFFEhsYvHn/h+JNHyzpc2Rry/tc2/XHDnz5AH/qQRi96aSIT1A7ZAa2LVSW7zgYzqhKIORQlNFFLLIYoYtQKNC4f/5kxk1pHJscpRaK8uavzw/3v7120ft1eZJFBBn1I008fMsgiRwF7zXD7k5QkZIMgx7ih68CNO50QbmkbNGPbIyPHJ1d0MInRia8zyFEw5UDNIEvkxrrglgMMJt2KRo1ohznAiRvI/EudumvC501OZ52EIEvErwxyNIkVFOIoBsa9tIkDrHHpyub0v4AocuhDDFFmYgpKrkYFRQs2sVkdK1L+giylXkXkFJ5rXZTc0lnVJrAWQbZgUIoaQR5ZRJBFCBGEEeFGlcETokXZi8zA85TaFmhOEOm86V2n9OMS7hlD8Nh0JRcJKc4gaBk6lRTBnGwTeQW0JIgWeZqsE27lardYAdWWTZh5xILubCi9NV5gmOYsLG0qFA7LT0m1HsASshrc6xzci/laVvAdCxe5CmoqzGwTNkULAwJbzodVbwYX8C3lORsWdISoOGBwY0cQ9rkKChNF2CgwOcZXhb1+wG5L20qV3uGYOVwhiy5Ud525SNObSNpt/vUHBNbdF+kPVHMpDAyWRKgKA+EY7g6bMy9Lu2veTe+BWVhzQdY52zPUjqmLLqApsgeLyPkmvVqmP/ZAZSflAatBvdolDZWZJWR/WJ0j5GJTgAmD3KMIix3Dbhxgrd/cEGICCPX7edHQYUCfN6E5+vre17toXbSotFhEnn8KMGBCdxVL7MYALl0yhMwkQqsbLckLZpwyfeQRraObXEW3fVv272zf/sQrS3fSopFDgQq4ORSgk6NYZGlr4POwrAJJX41Q1BZBFNHJrdedMvNT40+KJKu9adfud9Y8/8bC9RxL5DmkzLvKqtbAAAu4hkKqcaK1OGKIfumo6+dO/rR/OUSm+8Xnblu6vYsqdhmCX1CitTogaxXgCgmPE7AnLhh/+z9P+nTt9sinn198ze+zaVFgRA4Z1nHUBdkoCzfCxPIEEomWp668/pbDJld6iy3YgxBi5d8+cvTx/3S6tff1HiZwaP2iw7oCeFWCFiFaYwxxNF0w8Uc3jzi2XD2iFjnE756+5o9Io5cSpQzJfEw/FeFqS4TBlEZKQO+c9eX57gusXjnEm6/MfaK7E2lK8fsYcrG2edld+dGpkOLATT50/udvUi+ygckh2jdf8e/v7UYP5c4y0TdrrUtI68r0vgnJJ+ZccpPWQDlEy7DLZqx+e0deifvqWKwNF6Vc5MlNSP7orM9/u9FyiFj8/JNWruvIKemUrYSdvgGr5ZOIUzKZf+rXvq9zJNc4OUS86bxjf/nXnFTjqopczS9gnZP6CBKIoemkMfcvkJdaY+UQza2fHPLUuxTZyVS/Bh8WIY4glDchufSOYTzrNl4OMX4COv7yEeXOFgel8GdjmWSGhE5m4XmHnySd4UDIIa65fMwwtCCBhEsUofu1sLNYRBBHHMlJIxZ8LxwX09iBkUNEo22JZ97lkoqqD/VJKRfxbgyxf/tCnOvsB04OMXvWzAlIoglxriH5pPip/OEIIm2HTb9QHDqQcghd+/a5SFCBMVqLU8htASKIIrbgwnBCvn0t4xhcXrVhALjlEDOnHzcaCSS4Empw39vTwkIOHEHkJGYO1SKHCOE+/ALfxi+qsqgAVQ5hGNeeijiiiDFgH3ClhcMIIfLNE5KjxYGFNcC9my+nn3lClnKI2SdSxTlGaZhPHYdUKoYvmi2eXuGLilsKF6jOdQOAJ/je6BHnTXQaEFy61fwB5uxt/FR5wfkbeglcYK2nH0s5xNmTqTgeIlmEwe1NDwsbCCE8c8RQIkNWlkOUnnxPCdwVFWlfckg5xMkCsFR7Gf58OAQD4YuP42C7bri3+ThPvvuksZSTq6IIzQ9gDQaMSRPEk5vqhPtdXxmllEM0xSe3cKFcyE40fxedAWMUk1W3+YD7ozJw/Q4phzhxJHdKROnL8yIXVXYjwb02LznEcPxMocLUCtclh0hyYVH3Q9kHqQQNGNDDnKl7ySGeROsA4KrqhZa4Sibhsq3tFfwAGvRYvP8blhsXDBCuSw4R5Uqz7lcWoZI7fI3TSx4/PbCIqP9eQR7SHi5+Fnk7m+pyiBUljx/xXN0ql/1Nd8XUp4Wdk+xsmj2r6ikrcccAIUs5REem1lKVbAnaKb54veQQS/FdJeGpHbJk4uxMuxphvqTunGbvYELaRM/TVmBeyVzyCKb5BizlEGu7KOGH37xZl3nrJq7sHe3jxK24ugTyoz4hSzlEb3Zrb5k9wzwtTG3AxRv9hogScm8dkKUcYuNH1Kop3e/H9rKwDQvmX/ftIxtXlkOUQv5KCeRHcKTnWVIOsaqdG7xqL9qHD9NpH7wvnv6sT28shax7/nVccoh2FKmBIPkpPoQnok1V+A3zbSvJIbwhewXwUg6xo/ulPdTrLyiyHtv7orOJUF54fEPXXnHgOt/XvAr5ZRdHsNyQcoilm4gCUlR2rrL8zBIm/ZZ55F95TRy4tAbd4Vb8A54D8Bxu9XillEMUrcfepUZYnnUcPtVeJqk4csj9y4o8FyprkUPsxl04A3ch7+G/Ug7x/Ob3u6gRlivZ0MynhYvII7etc+VL8sKrTQ5R8HyFlENY9v1vUdMxx7ITX4RcnalbzgZu2e8sSXEF5cDJIf6wYd1eIcBA1tW387CxITMOpw3eqw8rnnKCmI8PjByiM/PFZVnBwxTE0Tzy/uZhkIWF7CRzx6ubeM07MHKIe1d1phS+YE7RevlSylg8S+SQQRrpf/x5N0du0zB/wDSSGbgTQ/nRcxt/tpGZmFlmC9bEgdfZLXSEYHTa3XvPni52AGusHGLz/rnLio4z9DALPkdUENuPjsPmxqJC91qbMrtmTWu8HGJX6tIl+7qYRyx58AVlafbMVjTYnNsZAviqfa2FT7bJHKERcoiO9GVLtnQQ1C6k0Es+XPCr4lC3L9Nc+w/o0Fbu1ntnTJFbww1UDvG3jouXbtuLXnQjhW6iPwt6bo072mnsGDIhBLRXO/Z9NHNKhC/vgcgh/vT+FSs6O9GLHuLB9/B0ViROZg2bHKr7BTqyiGa0oBlD0DJt3KNzJ43tvxTXIocoWgvfunst0uQM3XS5CSKC2AGzpk0ORQM37FJyNKMVLZHWH5x5+axIxdzfSw6xrevW15Z9iD708tygLhc5f9LK/iUCWSRypyqWaf35wz+/N6Vl/Ijyb1FNDpHKPbbuqhc2dSiukEIPc+HdorSadBxyywYoWx+L7Y+tjsxTG/+yeWz88KH+5RD7+v5z7VUvLNtqpUl3JEURaZL9qSFPHVuhqpvMRmi7OEcW0US3xGEtXzj6vGNOHJ+IVi2ndr/Y/sdtK3Y54RT6SBaRJhKNXN+Krk5zzYDFTCw323K4E3ESRThKjhiiiF45efbEI4aOaBmr1AXz5o7u7d2bOhe9/24P0ezyRAATC7EDNkMctjrgltsdF4pqkXYHY1GEEEZEaFM3AwaMkbGpLSv3KXRRU+G/Z0gMIWlgWeauWfVQ97Wyjw3arijMHKAoddQcHUeElAYh6hHr7PlF0kgXicCYJafIsTomR0mn6W97hv4FbfdwFhATOopcxhIyhxyyiKIPUbKvsLFeRsdRYNalJDI6YKWgpy5ybn9ios37uYNCzxBlfTnmYTr81giz4MXMIagERQpXxf7ZBY7HCsre8EAdHNdqKgNVPGyIbb7JFcJKb6JUx2G6CLkFZZdy07VTRwN1HOqirfKzQ6ToMJR94DWlQ8wyNgJXIODqLvD2wIQRms84Q+NeREixrU7MeMmhtInLI6wpy1COOmbAwgjN13FdYRXLnxCrZEpJ5TbDlFSkBgkjvNjAttKGsmiPfCjpeEghQwoLSj1Hkb+GwR4oldwfYJWZKVXPUL7WAkoHSudfyyJ/1hQHaIiKoxpgDaUEfk1huclWoKZccmLzY50gWsoxHEgLl9dxGDzFOV+7YCgbnmkM1qZLTYghTNdCMWAdh+bhCOV1HIYvHYeq9RI6jpo3+fa2cKDjCHQc/eAGOo5Ax4FAxxHoOErKrYGOQ1TdAh1HoOMoOwIdR6DjKDsCHUc9Oo5P4DS+mLzHIOs4xuBJPIKf4Mmq3wrhHoOq47gFztx3uGsnYq8xaDqOcTiV79cCedB0HO1YozzyD3kQdRzuYMg/5EHTcZRSyf1CHiQdR/2QB0XHURnywz4gD0THodej46gGeTSehFc9YCA6Dr0eHUd1yDH8ECdWPcNTx+EJuCYdhzdkeHwxwMes4yg31pWkUEcg4vfUA6/j6D+G415McD2ztSpt9GPWcZSDO60kJfqiR82Cp7iPR8dRHe5LuMzjnEHQcVSG+wd8x/OsQdFxVILr/V0ng6bjqA/uIOo4bqsL7qDpOA7HaXXBHTQdx56S2Pgen34/aDoOUwngn/X1TV7OGEQdx324B8/VCHeQdRx/wF2YVQPcg0LHYdawKgY6jkDHIXO3QMcR6DjECHQcULOqQMchR6DjCHQcAAIdBwIdR6Dj8AU40HEEOo4Kz/+/0XEYJToOWYa2lS9eOAh0HG7gkp/t1nFIlrapgP+YdRylbHj5/Ryaq/Njl8gi1C+CapCOQ0MtAZKu5CbOI0MhQ4oFtjwrrSHfxuH/6ya0kotRK4md1VnGZthoJNTSMRtPYr3LIgfHrYg38OOSbABJPHIQQlVvffiWmit+cJDDdW5LEAEMGFiO43AojKPQhGXAtYeEdYU/H2fgcYWTfLAPHTmt0ZPNAR5/O9QAdx9qgKEDAeAAcAA4ABwADgAHgAPAAeAAcAA4ABwADgAHgAPAAeAAcAA4ABwADgAHgAPAAeAAcAA4ABwADgAHgAPAAeAAcAA4ABwADgAHgAPAAeAAcAA4ABwADgAHgAPAAeADP/KHGuAdet1fUjA44zVd2Tj8UBiLgGH46JDR0y13UJ+F3CEBtx28h/ps7Dvo4b7l3h62Ffei/aAFuw7Xit1c/g+ycH0EjAxZBgAAAABJRU5ErkJggg=="

        /***/
    }),

    /***/ 66:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

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

        /***/
    }),

    /***/ 7:
    /***/ (function (module, exports) {

        module.exports = jQuery;

        /***/
    }),

    /***/ 8:
    /***/ (function (module, exports, __webpack_require__) {

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

        /***/
    }),

    /***/ 9:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

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

        /***/
    })

    /******/
});
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/activity/detail.js.492259d8.map