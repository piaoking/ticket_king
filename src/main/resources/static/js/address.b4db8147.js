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
    return __webpack_require__(__webpack_require__.s = 497);
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

    /***/ 240:
    /***/ (function (module, exports, __webpack_require__) {

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

        var fetching = false;

        var AddressPicker = function (_Mbox) {
            _inherits(AddressPicker, _Mbox);

            function AddressPicker() {
                _classCallCheck(this, AddressPicker);

                return _possibleConstructorReturn(this, _Mbox.call(this, '新增收货'));
            }

            AddressPicker.prototype.renderContent = function renderContent() {
                var _this2 = this;

                var $content = $('<div class="content address-picker">\n      <div class="row">\n        <label class="label">\u59D3\u540D</label>\n        <input class="input input-name"/>\n      </div>\n      <div class="row">\n        <label class="label">\u5730\u533A</label>\n        <div class="input-area">\n          <select class="select field-province"><option value="110000">北京市</option><option value="120000">天津市</option><option value="130000">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option></select>\n        </div>\n        </div>\n        <div class="row">\n        <label class="label">\u8857\u9053</label>\n        <input class="input input-address" maxlength=50 />\n      </div>\n      <div class="row">\n        <label class="label">\u624B\u673A</label>\n        <input class="input input-mobile" maxlength=11 />\n      </div>\n      <div class="row-btn">\n        <button class="btn-submit">\u4FDD\u5B58</button>\n        <button href="javascript:;" class="btn-cancel">\u53D6\u6D88</button>\n      </div>\n    </div>');

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
                }).on('error', function (err) {
                });
            });
        };

        exports['default'] = {
            remove: remove,
            add: add
        };

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

    /***/ 256:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _fetch2 = __webpack_require__(1);

        var _fetch3 = _interopRequireDefault(_fetch2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

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

        /***/
    }),

    /***/ 48:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

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

        /***/
    }),

    /***/ 497:
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _pop = __webpack_require__(48);

        var _pop2 = _interopRequireDefault(_pop);

        var _addressManager = __webpack_require__(240);

        var _addressManager2 = _interopRequireDefault(_addressManager);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {'default': obj};
        }

        $('.new').click(function () {
            _addressManager2['default'].add(function () {
                location.reload();
            });
        });

        $('.delete').click(function handler() {
            var id = $(this).closest('.item').attr('data-id');
            _addressManager2['default'].remove(id, function () {
                location.reload();
            });
        });

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
//# sourceMappingURL=//dn-piaoniu-static.qbox.me/pc/user/address.js.8b2e536a.map