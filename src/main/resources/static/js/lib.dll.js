var lib = function (e) {
    var t = {};

    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {"i": n, "l": !1, "exports": {}};
        return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
    }

    return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function (e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {"enumerable": !0, "get": n})
    }, __webpack_require__.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {"value": "Module"}), Object.defineProperty(e, "__esModule", {"value": !0})
    }, __webpack_require__.t = function (e, t) {
        if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
            "enumerable": !0,
            "value": e
        }), 2 & t && "string" != typeof e) for (var r in e) __webpack_require__.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, __webpack_require__.n = function (e) {
        var t = e && e.__esModule ? function getDefault() {
            return e.default
        } : function getModuleExports() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 7)
}([function (e, t, n) {
    e.exports = n(6).default, e.exports.default = e.exports
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    e.exports = n(5).default, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    (function (e) {
        function _interopDefault(e) {
            return e && "object" == typeof e && "default" in e ? e.default : e
        }

        Object.defineProperty(t, "__esModule", {"value": !0});
        var r = n(2), o = _interopDefault(r), i = _interopDefault(n(0));

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }

        function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "writable": !0,
                    "configurable": !0
                }
            }), t && _setPrototypeOf(e, t)
        }

        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function _possibleConstructorReturn(e, t) {
            return !t || "object" != typeof t && "function" != typeof t ? function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function _get(e, t, n) {
            return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function _get(e, t, n) {
                var r = function _superPropBase(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e));) ;
                    return e
                }(e, t);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function _slicedToArray(e, t) {
            return function _arrayWithHoles(e) {
                if (Array.isArray(e)) return e
            }(e) || function _iterableToArrayLimit(e, t) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(e, t) || function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function _toConsumableArray(e) {
            return function _arrayWithoutHoles(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function _iterableToArray(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        var a = function () {
        }, s = a, c = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

        function createCommonjsModule(e, t) {
            return e(t = {"exports": {}}, t.exports), t.exports
        }

        var l = "object" == typeof c && c && c.Object === Object && c,
            u = "object" == typeof self && self && self.Object === Object && self,
            p = l || u || Function("return this")(), f = p.Symbol, d = Object.prototype, A = d.hasOwnProperty,
            h = d.toString, m = f ? f.toStringTag : void 0;
        var T = function getRawTag(e) {
            var t = A.call(e, m), n = e[m];
            try {
                e[m] = void 0;
                var r = !0
            } catch (e) {
            }
            var o = h.call(e);
            return r && (t ? e[m] = n : delete e[m]), o
        }, b = Object.prototype.toString;
        var S = function objectToString(e) {
            return b.call(e)
        }, y = "[object Null]", g = "[object Undefined]", v = f ? f.toStringTag : void 0;
        var P = function baseGetTag(e) {
            return null == e ? void 0 === e ? g : y : v && v in Object(e) ? T(e) : S(e)
        };
        var C = function isObject(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }, M = "[object AsyncFunction]", G = "[object Function]", w = "[object GeneratorFunction]",
            B = "[object Proxy]";
        var k, I = function isFunction(e) {
                if (!C(e)) return !1;
                var t = P(e);
                return t == G || t == w || t == M || t == B
            }, E = p["__core-js_shared__"],
            H = (k = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "")) ? "Symbol(src)_1." + k : "";
        var _ = function isMasked(e) {
            return !!H && H in e
        }, O = Function.prototype.toString;
        var D = function toSource(e) {
                if (null != e) {
                    try {
                        return O.call(e)
                    } catch (e) {
                    }
                    try {
                        return e + ""
                    } catch (e) {
                    }
                }
                return ""
            }, x = /^\[object .+?Constructor\]$/, N = Function.prototype, R = Object.prototype, L = N.toString,
            j = R.hasOwnProperty,
            V = RegExp("^" + L.call(j).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var F = function baseIsNative(e) {
            return !(!C(e) || _(e)) && (I(e) ? V : x).test(D(e))
        };
        var U = function getValue(e, t) {
            return null == e ? void 0 : e[t]
        };
        var W = function getNative(e, t) {
            var n = U(e, t);
            return F(n) ? n : void 0
        }, X = function () {
            try {
                var e = W(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {
            }
        }();
        var Q = function baseAssignValue(e, t, n) {
            "__proto__" == t && X ? X(e, t, {
                "configurable": !0,
                "enumerable": !0,
                "value": n,
                "writable": !0
            }) : e[t] = n
        };
        var K = function eq(e, t) {
            return e === t || e != e && t != t
        }, z = Object.prototype.hasOwnProperty;
        var Z = function assignValue(e, t, n) {
            var r = e[t];
            z.call(e, t) && K(r, n) && (void 0 !== n || t in e) || Q(e, t, n)
        };
        var $ = function copyObject(e, t, n, r) {
            var o = !n;
            n || (n = {});
            for (var i = -1, a = t.length; ++i < a;) {
                var s = t[i], c = r ? r(n[s], e[s], s, n, e) : void 0;
                void 0 === c && (c = e[s]), o ? Q(n, s, c) : Z(n, s, c)
            }
            return n
        };
        var Y = function identity(e) {
            return e
        };
        var q = function apply(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }, J = Math.max;
        var ee = function overRest(e, t, n) {
            return t = J(void 0 === t ? e.length - 1 : t, 0), function () {
                for (var r = arguments, o = -1, i = J(r.length - t, 0), a = Array(i); ++o < i;) a[o] = r[t + o];
                o = -1;
                for (var s = Array(t + 1); ++o < t;) s[o] = r[o];
                return s[t] = n(a), q(e, this, s)
            }
        };
        var te = function constant(e) {
            return function () {
                return e
            }
        }, ne = X ? function (e, t) {
            return X(e, "toString", {"configurable": !0, "enumerable": !1, "value": te(t), "writable": !0})
        } : Y, re = 800, oe = 16, ie = Date.now;
        var ae = function shortOut(e) {
            var t = 0, n = 0;
            return function () {
                var r = ie(), o = oe - (r - n);
                if (n = r, o > 0) {
                    if (++t >= re) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }(ne);
        var se = function baseRest(e, t) {
            return ae(ee(e, t, Y), e + "")
        }, ce = 9007199254740991;
        var le = function isLength(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= ce
        };
        var ue = function isArrayLike(e) {
            return null != e && le(e.length) && !I(e)
        }, pe = 9007199254740991, fe = /^(?:0|[1-9]\d*)$/;
        var de = function isIndex(e, t) {
            var n = typeof e;
            return !!(t = null == t ? pe : t) && ("number" == n || "symbol" != n && fe.test(e)) && e > -1 && e % 1 == 0 && e < t
        };
        var Ae = function isIterateeCall(e, t, n) {
            if (!C(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? ue(n) && de(t, n.length) : "string" == r && t in n) && K(n[t], e)
        };
        var he = function createAssigner(e) {
            return se(function (t, n) {
                var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
                for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, a && Ae(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o;) {
                    var s = n[r];
                    s && e(t, s, r, i)
                }
                return t
            })
        }, me = Object.prototype;
        var Te = function isPrototype(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || me)
        };
        var be = function baseTimes(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        };
        var Se = function isObjectLike(e) {
            return null != e && "object" == typeof e
        }, ye = "[object Arguments]";
        var ge = function baseIsArguments(e) {
            return Se(e) && P(e) == ye
        }, ve = Object.prototype, Pe = ve.hasOwnProperty, Ce = ve.propertyIsEnumerable, Me = ge(function () {
            return arguments
        }()) ? ge : function (e) {
            return Se(e) && Pe.call(e, "callee") && !Ce.call(e, "callee")
        }, Ge = Array.isArray;
        var we = function stubFalse() {
            return !1
        }, Be = createCommonjsModule(function (e, t) {
            var n = t && !t.nodeType && t, r = n && e && !e.nodeType && e, o = r && r.exports === n ? p.Buffer : void 0,
                i = (o ? o.isBuffer : void 0) || we;
            e.exports = i
        }), ke = {};
        ke["[object Float32Array]"] = ke["[object Float64Array]"] = ke["[object Int8Array]"] = ke["[object Int16Array]"] = ke["[object Int32Array]"] = ke["[object Uint8Array]"] = ke["[object Uint8ClampedArray]"] = ke["[object Uint16Array]"] = ke["[object Uint32Array]"] = !0, ke["[object Arguments]"] = ke["[object Array]"] = ke["[object ArrayBuffer]"] = ke["[object Boolean]"] = ke["[object DataView]"] = ke["[object Date]"] = ke["[object Error]"] = ke["[object Function]"] = ke["[object Map]"] = ke["[object Number]"] = ke["[object Object]"] = ke["[object RegExp]"] = ke["[object Set]"] = ke["[object String]"] = ke["[object WeakMap]"] = !1;
        var Ie = function baseIsTypedArray(e) {
            return Se(e) && le(e.length) && !!ke[P(e)]
        };
        var Ee = function baseUnary(e) {
            return function (t) {
                return e(t)
            }
        }, He = createCommonjsModule(function (e, t) {
            var n = t && !t.nodeType && t, r = n && e && !e.nodeType && e, o = r && r.exports === n && l.process,
                i = function () {
                    try {
                        var e = r && r.require && r.require("util").types;
                        return e || o && o.binding && o.binding("util")
                    } catch (e) {
                    }
                }();
            e.exports = i
        }), _e = He && He.isTypedArray, Oe = _e ? Ee(_e) : Ie, De = Object.prototype.hasOwnProperty;
        var xe = function arrayLikeKeys(e, t) {
            var n = Ge(e), r = !n && Me(e), o = !n && !r && Be(e), i = !n && !r && !o && Oe(e), a = n || r || o || i,
                s = a ? be(e.length, String) : [], c = s.length;
            for (var l in e) !t && !De.call(e, l) || a && ("length" == l || o && ("offset" == l || "parent" == l) || i && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || de(l, c)) || s.push(l);
            return s
        };
        var Ne = function overArg(e, t) {
            return function (n) {
                return e(t(n))
            }
        }(Object.keys, Object), Re = Object.prototype.hasOwnProperty;
        var Le = function baseKeys(e) {
            if (!Te(e)) return Ne(e);
            var t = [];
            for (var n in Object(e)) Re.call(e, n) && "constructor" != n && t.push(n);
            return t
        };
        var je = function keys(e) {
            return ue(e) ? xe(e) : Le(e)
        }, Ve = Object.prototype.hasOwnProperty, Fe = he(function (e, t) {
            if (Te(t) || ue(t)) $(t, je(t), e); else for (var n in t) Ve.call(t, n) && Z(e, n, t[n])
        });

        function isAbsolute(e) {
            return "/" === e.charAt(0)
        }

        function spliceOne(e, t) {
            for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
            e.pop()
        }

        var Ue = function addLeadingSlash(e) {
            return "/" === e.charAt(0) ? e : "/" + e
        }, We = function hasBasename(e, t) {
            return new RegExp("^" + t + "(\\/|\\?|#|$)", "i").test(e)
        }, Xe = function parsePath(e) {
            var t = e || "/", n = "", r = "", o = t.indexOf("#");
            -1 !== o && (r = t.substr(o), t = t.substr(0, o));
            var i = t.indexOf("?");
            return -1 !== i && (n = t.substr(i), t = t.substr(0, i)), {
                "path": t,
                "search": "?" === n ? "" : n,
                "hash": "#" === r ? "" : r
            }
        }, Qe = function createPath(e) {
            var t = e.path, n = e.search, r = e.hash, o = t || "/";
            return n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?".concat(n)), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#".concat(r)), o
        };

        function createLocation(e, t, n) {
            var r, o = Xe(e);
            (r = Fe({}, o, {"state": {"key": t}})).state = {"key": t};
            var i = {}, a = r.search;
            a.length > 0 && a.substring(1).split("&").forEach(function (e) {
                if (-1 !== e.indexOf("=")) {
                    var t = _slicedToArray(e.split("="), 2), n = t[0], r = t[1];
                    i[n] = r
                }
            });
            return r.params = i, n ? r.path ? "/" !== r.path.charAt(0) && (r.path = function resolvePathname(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = e && e.split("/") || [], r = t && t.split("/") || [], o = e && isAbsolute(e),
                    i = t && isAbsolute(t), a = o || i;
                if (e && isAbsolute(e) ? r = n : n.length && (r.pop(), r = r.concat(n)), !r.length) return "/";
                var s = void 0;
                if (r.length) {
                    var c = r[r.length - 1];
                    s = "." === c || ".." === c || "" === c
                } else s = !1;
                for (var l = 0, u = r.length; u >= 0; u--) {
                    var p = r[u];
                    "." === p ? spliceOne(r, u) : ".." === p ? (spliceOne(r, u), l++) : l && (spliceOne(r, u), l--)
                }
                if (!a) for (; l--; l) r.unshift("..");
                !a || "" === r[0] || r[0] && isAbsolute(r[0]) || r.unshift("");
                var f = r.join("/");
                return s && "/" !== f.substr(-1) && (f += "/"), f
            }(r.path, n.path)) : r.path = n.path : r.path || (r.path = "/"), r
        }

        var Ke = window.history, ze = 0, Ze = function createKey() {
            return String(++ze)
        }, $e = function createHistory(e) {
            var t, n = function createTransitionManager() {
                var e = null, t = [];
                return {
                    "setPrompt": function setPrompt(t) {
                        return s(null == e, "A history supports only one prompt at a time"), e = t, function () {
                            e === t && (e = null)
                        }
                    }, "confirmTransitionTo": function confirmTransitionTo(t, n, r, o) {
                        if (null !== e) {
                            var i = "function" == typeof e ? e(t, n) : e;
                            "string" == typeof i ? "function" == typeof r ? r(i, o) : (s(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), o(!0)) : o(!1 !== i)
                        } else o(!0)
                    }, "appendListener": function appendListener(e) {
                        var n = !0, r = function listener() {
                            n && e.apply(void 0, arguments)
                        };
                        return t.push(r), function () {
                            n = !1, t = t.filter(function (e) {
                                return e !== r
                            })
                        }
                    }, "notifyListeners": function notifyListeners() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        t.forEach(function (e) {
                            return e.apply(void 0, n)
                        })
                    }
                }
            }(), r = e.basename ? function stripTrailingSlash(e) {
                return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
            }(Ue(e.basename)) : "", i = e.customRoutes || {}, a = 0;
            e.mode = e.mode || "hash";
            var c = function getDOMLocation(t) {
                var n = t.key, o = window.location, i = o.pathname, a = o.search, c = o.hash,
                    l = "hash" === e.mode ? Ue(function getHashPath() {
                        var e = window.location.href, t = e.indexOf("#");
                        return -1 === t ? "" : e.substring(t + 1)
                    }()) : i + a + c;
                return "browser" === e.mode && s(We(l, r), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + l + '" to begin with "' + r + '".'), "/" === (l = function stripBasename(e, t) {
                    return We(e, t) ? e.substr(t.length) : e
                }(l, r)) && (l = e.firstPagePath), createLocation(l, n)
            }, l = function getHistoryState() {
                try {
                    var e = Ke.state || {};
                    return "string" != typeof e.key ? e.key = String(ze) : ze = e.key, e
                } catch (e) {
                    return {"key": String(ze)}
                }
            }(), u = c(l), p = u;
            o._set$router(u);
            var f = function tryToParseStore(e) {
                var t = {"key": "0"};
                try {
                    var n = JSON.parse(localStorage.getItem("taroRouterStore"));
                    "object" === _typeof(n) && "string" == typeof n.key && (t = n)
                } catch (e) {
                }
                return t.key === e.key || (t.key = e.key), t
            }(l);
            t = function createHistorySerializer(e) {
                var t = function serialize() {
                    localStorage.setItem("taroRouterStore", JSON.stringify(e))
                };
                return t(), t
            }(f), Ke.replaceState(u.state, "");
            var d = "hash" === e.mode ? function (e) {
                return "#" + Ue(r + Qe(e))
            } : function (e) {
                return r + Qe(e)
            }, A = function setState(e) {
                Fe(S, e);
                var r = Object.assign({}, p);
                p = Object.assign({}, e.location), ze = Number(e.location.state.key), t(), S.length = Ke.length;
                var i = {"fromLocation": r, "toLocation": S.location, "action": S.action};
                o._set$router(S.location), o.eventCenter.trigger("routerChange", Object.assign({}, i)), n.notifyListeners(Object.assign({}, i))
            }, h = function go(e) {
                Ke.go(e)
            }, m = function handlePopState(e) {
                var t = e.state;
                t || (t = {"key": Ze()}, Ke.replaceState(t, "", ""));
                var n, r = Number(p.state.key), o = Number(t.key), i = c(t);
                n = o > r ? "PUSH" : o < r ? "POP" : "REPLACE", f.key = String(o), A({"action": n, "location": i})
            }, T = function checkDOMListeners(e) {
                1 === (a += e) ? window.addEventListener("popstate", m) : 0 === a && window.removeEventListener("popstate", m)
            }, b = !1, S = {
                "action": "POP", "block": function block() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = n.setPrompt(e);
                    return b || (T(1), b = !0), function () {
                        return b && (b = !1, T(-1)), t()
                    }
                }, "createHref": d, "go": h, "goBack": function goBack() {
                    return h(-1)
                }, "goForward": function goForward() {
                    return h(1)
                }, "length": Ke.length, "listen": function listen(e) {
                    var t = n.appendListener(e);
                    return T(1), function () {
                        T(-1), t()
                    }
                }, "location": u, "push": function push(e) {
                    var t = Ze(), n = createLocation(e, t, S.location), r = n.path;
                    r in i && (n.path = i[r]);
                    var o = d(n);
                    Ke.pushState({"key": t}, "", o), f.key = t, A({"action": "PUSH", "location": n})
                }, "replace": function replace(e) {
                    var t = f.key, n = createLocation(e, t, S.location), r = n.path;
                    r in i && (n.path = i[r]);
                    var o = d(n);
                    Ke.replaceState({"key": t}, "", o), A({"action": "REPLACE", "location": n})
                }
            };
            return S
        }, Ye = function (e, t, n, r, o, i, a, s) {
            if (!e) {
                var c;
                if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                    var l = [n, r, o, i, a, s], u = 0;
                    (c = new Error(t.replace(/%s/g, function () {
                        return l[u++]
                    }))).name = "Invariant Violation"
                }
                throw c.framesToPop = 1, c
            }
        };
        var qe = function arrayMap(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
            return o
        };
        var Je = function baseToPairs(e, t) {
                return qe(t, function (t) {
                    return [t, e[t]]
                })
            }, et = W(p, "DataView"), tt = W(p, "Map"), nt = W(p, "Promise"), rt = W(p, "Set"), ot = W(p, "WeakMap"),
            it = D(et), at = D(tt), st = D(nt), ct = D(rt), lt = D(ot), ut = P;
        (et && "[object DataView]" != ut(new et(new ArrayBuffer(1))) || tt && "[object Map]" != ut(new tt) || nt && "[object Promise]" != ut(nt.resolve()) || rt && "[object Set]" != ut(new rt) || ot && "[object WeakMap]" != ut(new ot)) && (ut = function (e) {
            var t = P(e), n = "[object Object]" == t ? e.constructor : void 0, r = n ? D(n) : "";
            if (r) switch (r) {
                case it:
                    return "[object DataView]";
                case at:
                    return "[object Map]";
                case st:
                    return "[object Promise]";
                case ct:
                    return "[object Set]";
                case lt:
                    return "[object WeakMap]"
            }
            return t
        });
        var pt = ut;
        var ft = function mapToArray(e) {
            var t = -1, n = Array(e.size);
            return e.forEach(function (e, r) {
                n[++t] = [r, e]
            }), n
        };
        var dt = function setToPairs(e) {
            var t = -1, n = Array(e.size);
            return e.forEach(function (e) {
                n[++t] = [e, e]
            }), n
        }, At = "[object Map]", ht = "[object Set]";
        var mt, Tt = function createToPairs(e) {
            return function (t) {
                var n = pt(t);
                return n == At ? ft(t) : n == ht ? dt(t) : Je(t, e(t))
            }
        }(je), bt = function tryToCall(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (e) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
                return t ? e.apply(t, r) : e.apply(void 0, r)
            }
        }, St = function getScroller() {
            var e = document.querySelector(".taro-tabbar__panel");
            return e ? {
                "set": function set(t) {
                    e.scrollTop = t
                }, "get": function get() {
                    return e.scrollTop
                }
            } : {
                "set": function set(e) {
                    return window.scrollTo(0, e)
                }, "get": function get() {
                    return window.pageYOffset
                }
            }
        }, yt = function (e) {
            function Route(e, t) {
                var n;
                return _classCallCheck(this, Route), (n = _possibleConstructorReturn(this, _getPrototypeOf(Route).call(this, e, t))).matched = !1, n.isRoute = !0, n.scrollPos = 0, n.getWrapRef = function (e) {
                    n.containerRef = e
                }, n.getRef = function (e) {
                    n.componentRef = e, n.props.collectComponent(e, n.props.k)
                }, n.matched = n.computeMatch(n.props.currentLocation), n
            }

            return _inherits(Route, r.Component), _createClass(Route, [{
                "key": "computeMatch",
                "value": function computeMatch(e) {
                    var t = e.pathname, n = e.state.key;
                    return !(!this.props.isIndex || "/" !== t) || n === this.props.key
                }
            }, {
                "key": "updateComponent", "value": function updateComponent() {
                    var e = this;
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props).componentLoader().then(function (t) {
                        var n = function createWrappedComponent(e) {
                            return function (t) {
                                function WrappedComponent(e, t) {
                                    var n;
                                    _classCallCheck(this, WrappedComponent);
                                    var r = (n = _possibleConstructorReturn(this, _getPrototypeOf(WrappedComponent).call(this, e, t))).componentDidShow;
                                    return n.componentDidShow = function newComponentDidShow() {
                                        var e = (this.config || {"navigationBarTitleText": null}).navigationBarTitleText;
                                        e && (document.title = e), bt(r, this)
                                    }, n
                                }

                                return _inherits(WrappedComponent, e), _createClass(WrappedComponent, [{
                                    "key": "componentDidMount",
                                    "value": function componentDidMount() {
                                        var e = _get(_getPrototypeOf(WrappedComponent.prototype), "componentDidMount", this);
                                        bt(e, this), bt(this.componentDidShow, this)
                                    }
                                }, {
                                    "key": "componentWillUnmount", "value": function componentWillUnmount() {
                                        var e = this.componentDidHide,
                                            t = _get(_getPrototypeOf(WrappedComponent.prototype), "componentWillUnmount", this);
                                        bt(t, this), bt(e, this)
                                    }
                                }]), WrappedComponent
                            }()
                        }(t.default);
                        e.wrappedComponent = n, e.forceUpdate()
                    })
                }
            }, {
                "key": "componentWillMount", "value": function componentWillMount() {
                    this.updateComponent()
                }
            }, {
                "key": "componentDidMount", "value": function componentDidMount() {
                    (mt = mt || St()).set(0)
                }
            }, {
                "key": "componentWillReceiveProps", "value": function componentWillReceiveProps(e, t) {
                    var n = this.matched, r = this.computeMatch(e.currentLocation), o = e.isRedirect;
                    if (o) this.updateComponent(e); else if (n === r) return;
                    this.matched = r, r ? (this.showPage(), o || ((mt = mt || St()).set(this.scrollPos), bt(this.componentRef.componentDidShow, this.componentRef))) : (mt = mt || St(), this.scrollPos = mt.get(), this.hidePage(), bt(this.componentRef.componentDidHide, this.componentRef))
                }
            }, {
                "key": "shouldComponentUpdate", "value": function shouldComponentUpdate() {
                    return !1
                }
            }, {
                "key": "showPage", "value": function showPage() {
                    this.containerRef.style.display = "block"
                }
            }, {
                "key": "hidePage", "value": function hidePage() {
                    this.containerRef.style.display = "none"
                }
            }, {
                "key": "render", "value": function render() {
                    if (!this.wrappedComponent) return null;
                    var e = this.wrappedComponent;
                    return i.createElement("div", {
                        "className": "taro_page",
                        "ref": this.getWrapRef
                    }, i.createElement(e, {"ref": this.getRef}))
                }
            }]), Route
        }(), gt = function (e) {
            function Router() {
                var e;
                return _classCallCheck(this, Router), (e = _possibleConstructorReturn(this, _getPrototypeOf(Router).apply(this, arguments))).currentPages = [], e.customRoutes = [], e.state = {
                    "location": e.props.history.location,
                    "routeStack": []
                }, e.collectComponent = function (t, n) {
                    e.currentPages[n] = t
                }, e
            }

            return _inherits(Router, r.Component), _createClass(Router, [{
                "key": "mountApis",
                "value": function mountApis() {
                    var e = this;
                    o.navigateTo = function createNavigateTo(e) {
                        return function (t) {
                            var n = t.url;
                            Ye(n, "navigateTo must be called with a url");
                            try {
                                return /^(https?:)\/\//.test(n) && window.location.assign(n), e.push(n), Promise.resolve()
                            } catch (e) {
                                return Promise.reject()
                            }
                        }
                    }(this.props.history), o.navigateBack = function createNavigateBack(e) {
                        return function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            try {
                                var n = t.delta, r = void 0 === n ? 1 : n;
                                return Ye(r >= 0, "navigateBack must be called with a delta greater than 0"), e.go(-r), Promise.resolve()
                            } catch (e) {
                                return Promise.reject()
                            }
                        }
                    }(this.props.history), o.redirectTo = function createRedirectTo(e) {
                        return function (t) {
                            var n = t.url;
                            Ye(n, "redirectTo must be called with a url"), /^(https?:)\/\//.test(n) && window.location.assign(n);
                            try {
                                return e.replace(n), Promise.resolve()
                            } catch (e) {
                                return Promise.reject()
                            }
                        }
                    }(this.props.history), o.getCurrentPages = function () {
                        return e.currentPages
                    }
                }
            }, {
                "key": "computeMatch", "value": function computeMatch(e) {
                    var t = e.path, n = t, r = this.customRoutes.find(function (e) {
                        var n = _slicedToArray(e, 2), r = (n[0], n[1]);
                        return t === r
                    });
                    r && (n = r[0]);
                    var o = this.props.routes.find(function (e) {
                        var t = e.path;
                        return !(!e.isIndex || "/" !== n) || n === t
                    });
                    return Ye(o, "Can not find proper registered route for '".concat(n, "'")), o
                }
            }, {
                "key": "push", "value": function push(e) {
                    var t = _toConsumableArray(this.state.routeStack), n = this.computeMatch(e);
                    t.push(Fe({}, n, {"key": e.state.key, "isRedirect": !1})), this.setState({
                        "routeStack": t,
                        "location": e
                    })
                }
            }, {
                "key": "pop", "value": function pop(e, t) {
                    var n = _toConsumableArray(this.state.routeStack), r = Number(t.state.key),
                        o = Number(e.state.key) - r;
                    if (n.splice(o), 0 === n.length) {
                        var i = this.computeMatch(e);
                        n = [Fe({}, i, {"key": e.state.key, "isRedirect": !1})]
                    }
                    this.setState({"routeStack": n, "location": e})
                }
            }, {
                "key": "replace", "value": function replace(e) {
                    var t = _toConsumableArray(this.state.routeStack), n = this.computeMatch(e);
                    t.splice(-1, 1, Fe({}, n, {"key": e.state.key, "isRedirect": !0})), this.setState({
                        "routeStack": t,
                        "location": e
                    })
                }
            }, {
                "key": "componentWillMount", "value": function componentWillMount() {
                    var e = this, t = this.props, n = t.history, r = t.customRoutes;
                    this.mountApis(), this.customRoutes = Tt(r), this.unlisten = n.listen(function (t) {
                        var r = t.fromLocation, o = t.toLocation, i = t.action;
                        "PUSH" === i ? e.push(o) : "POP" === i ? e.pop(o, r) : e.replace(o), e.lastLocation = n.location, e.setState({"location": n.location})
                    }), this.lastLocation = n.location, this.push(this.lastLocation)
                }
            }, {
                "key": "componentWillUnmount", "value": function componentWillUnmount() {
                    this.unlisten()
                }
            }, {
                "key": "render", "value": function render() {
                    var e = this, t = o.getRouter();
                    return this.currentPages.length = this.state.routeStack.length, i.createElement("div", {"className": "taro_router"}, this.state.routeStack.map(function (n, r) {
                        var o = n.path, a = n.componentLoader, s = n.isIndex, c = n.key, l = n.isRedirect;
                        return i.createElement(yt, {
                            "path": o,
                            "currentLocation": t,
                            "componentLoader": a,
                            "isIndex": s,
                            "key": c,
                            "k": r,
                            "isRedirect": l,
                            "collectComponent": e.collectComponent
                        })
                    }))
                }
            }]), Router
        }(), vt = function (e) {
            function Router$$1() {
                return _classCallCheck(this, Router$$1), _possibleConstructorReturn(this, _getPrototypeOf(Router$$1).apply(this, arguments))
            }

            return _inherits(Router$$1, r.Component), _createClass(Router$$1, [{
                "key": "componentWillMount",
                "value": function componentWillMount() {
                    var e = this.props, t = e.mode, n = e.routes, r = e.customRoutes, o = n[0].path;
                    this.history = $e({
                        "mode": t,
                        "basename": this.props.basename,
                        "firstPagePath": o,
                        "customRoutes": r
                    })
                }
            }, {
                "key": "render", "value": function render() {
                    return i.createElement(gt, {
                        "history": this.history,
                        "routes": this.props.routes,
                        "customRoutes": this.props.customRoutes
                    })
                }
            }]), Router$$1
        }();
        t.Router = vt
    }).call(this, n(1))
}, function (e, t, n) {
    e.exports = n(3), e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    (function (e) {
        Object.defineProperty(t, "__esModule", {"value": !0});
        var r = function _interopDefault(e) {
            return e && "object" == typeof e && "default" in e ? e.default : e
        }(n(0));

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }

        function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                "value": n,
                "enumerable": !0,
                "configurable": !0,
                "writable": !0
            }) : e[t] = n, e
        }

        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function _construct(e, t, n) {
            return (_construct = function isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    })), !0
                } catch (e) {
                    return !1
                }
            }() ? Reflect.construct : function _construct(e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r));
                return n && _setPrototypeOf(o, n.prototype), o
            }).apply(null, arguments)
        }

        function _possibleConstructorReturn(e, t) {
            return !t || "object" != typeof t && "function" != typeof t ? function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function _slicedToArray(e, t) {
            return function _arrayWithHoles(e) {
                if (Array.isArray(e)) return e
            }(e) || function _iterableToArrayLimit(e, t) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(e, t) || function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        "function" != typeof Object.assign && (Object.assign = function (e) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (null != r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
            }
            return t
        });
        var o = "Expected a function", i = "__lodash_hash_undefined__", a = 1 / 0, s = "[object Function]",
            c = "[object GeneratorFunction]", l = "[object Symbol]",
            u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, p = /^\w*$/, f = /^\./,
            d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            A = /\\(\\)?/g, h = /^\[object .+?Constructor\]$/,
            m = "object" === (void 0 === e ? "undefined" : _typeof(e)) && e && e.Object === Object && e,
            T = "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
            b = m || T || Function("return this")(), S = 9007199254740991, y = /^(?:0|[1-9]\d*)$/;
        var g, v = Array.prototype, P = Function.prototype, C = Object.prototype, M = b["__core-js_shared__"],
            G = (g = /[^.]+$/.exec(M && M.keys && M.keys.IE_PROTO || "")) ? "Symbol(src)_1." + g : "", w = P.toString,
            B = C.hasOwnProperty, k = C.toString,
            I = RegExp("^" + w.call(B).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            E = b.Symbol, H = v.splice, _ = getNative(b, "Map"), O = getNative(Object, "create"),
            D = E ? E.prototype : void 0, x = D ? D.toString : void 0;

        function Hash(e) {
            var t = -1, n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function ListCache(e) {
            var t = -1, n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function MapCache(e) {
            var t = -1, n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function assocIndexOf(e, t) {
            for (var n = e.length; n--;) if (eq(e[n][0], t)) return n;
            return -1
        }

        function baseGet(e, t) {
            for (var n = 0, r = (t = function isKey(e, t) {
                if (R(e)) return !1;
                var n = _typeof(e);
                if ("number" == n || "symbol" == n || "boolean" == n || null == e || isSymbol(e)) return !0;
                return p.test(e) || !u.test(e) || null != t && e in Object(t)
            }(t, e) ? [t] : castPath(t)).length; null != e && n < r;) e = e[toKey(t[n++])];
            return n && n == r ? e : void 0
        }

        function baseIsNative(e) {
            return !(!isObject(e) || function isMasked(e) {
                return !!G && G in e
            }(e)) && (function isFunction(e) {
                var t = isObject(e) ? k.call(e) : "";
                return t == s || t == c
            }(e) || function isHostObject(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (e) {
                }
                return t
            }(e) ? I : h).test(function toSource(e) {
                if (null != e) {
                    try {
                        return w.call(e)
                    } catch (e) {
                    }
                    try {
                        return e + ""
                    } catch (e) {
                    }
                }
                return ""
            }(e))
        }

        function castPath(e) {
            return R(e) ? e : N(e)
        }

        function getMapData(e, t) {
            var n = e.__data__;
            return function isKeyable(e) {
                var t = _typeof(e);
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }

        function getNative(e, t) {
            var n = function getValue(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return baseIsNative(n) ? n : void 0
        }

        Hash.prototype.clear = function hashClear() {
            this.__data__ = O ? O(null) : {}
        }, Hash.prototype.delete = function hashDelete(e) {
            return this.has(e) && delete this.__data__[e]
        }, Hash.prototype.get = function hashGet(e) {
            var t = this.__data__;
            if (O) {
                var n = t[e];
                return n === i ? void 0 : n
            }
            return B.call(t, e) ? t[e] : void 0
        }, Hash.prototype.has = function hashHas(e) {
            var t = this.__data__;
            return O ? void 0 !== t[e] : B.call(t, e)
        }, Hash.prototype.set = function hashSet(e, t) {
            return this.__data__[e] = O && void 0 === t ? i : t, this
        }, ListCache.prototype.clear = function listCacheClear() {
            this.__data__ = []
        }, ListCache.prototype.delete = function listCacheDelete(e) {
            var t = this.__data__, n = assocIndexOf(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : H.call(t, n, 1), 0))
        }, ListCache.prototype.get = function listCacheGet(e) {
            var t = this.__data__, n = assocIndexOf(t, e);
            return n < 0 ? void 0 : t[n][1]
        }, ListCache.prototype.has = function listCacheHas(e) {
            return assocIndexOf(this.__data__, e) > -1
        }, ListCache.prototype.set = function listCacheSet(e, t) {
            var n = this.__data__, r = assocIndexOf(n, e);
            return r < 0 ? n.push([e, t]) : n[r][1] = t, this
        }, MapCache.prototype.clear = function mapCacheClear() {
            this.__data__ = {"hash": new Hash, "map": new (_ || ListCache), "string": new Hash}
        }, MapCache.prototype.delete = function mapCacheDelete(e) {
            return getMapData(this, e).delete(e)
        }, MapCache.prototype.get = function mapCacheGet(e) {
            return getMapData(this, e).get(e)
        }, MapCache.prototype.has = function mapCacheHas(e) {
            return getMapData(this, e).has(e)
        }, MapCache.prototype.set = function mapCacheSet(e, t) {
            return getMapData(this, e).set(e, t), this
        };
        var N = memoize(function (e) {
            e = function toString(e) {
                return null == e ? "" : function baseToString(e) {
                    if ("string" == typeof e) return e;
                    if (isSymbol(e)) return x ? x.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -a ? "-0" : t
                }(e)
            }(e);
            var t = [];
            return f.test(e) && t.push(""), e.replace(d, function (e, n, r, o) {
                t.push(r ? o.replace(A, "$1") : n || e)
            }), t
        });

        function toKey(e) {
            if ("string" == typeof e || isSymbol(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -a ? "-0" : t
        }

        function memoize(e, t) {
            if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(o);
            var n = function memoized() {
                var n = arguments, r = t ? t.apply(this, n) : n[0], o = memoized.cache;
                if (o.has(r)) return o.get(r);
                var i = e.apply(this, n);
                return memoized.cache = o.set(r, i), i
            };
            return n.cache = new (memoize.Cache || MapCache), n
        }

        function eq(e, t) {
            return e === t || e != e && t != t
        }

        memoize.Cache = MapCache;
        var R = Array.isArray;

        function isObject(e) {
            var t = _typeof(e);
            return !!e && ("object" == t || "function" == t)
        }

        function isSymbol(e) {
            return "symbol" === _typeof(e) || function isObjectLike(e) {
                return !!e && "object" === _typeof(e)
            }(e) && k.call(e) == l
        }

        function isIndex(e, t) {
            var n = _typeof(e);
            return !!(t = null == t ? S : t) && ("number" == n || "symbol" != n && y.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        B = Object.prototype.hasOwnProperty;

        function assignValue(e, t, n) {
            var r = e[t];
            B.call(e, t) && eq(r, n) && (void 0 !== n || t in e) || function baseAssignValue(e, t, n) {
                "__proto__" == t ? Object.defineProperty(e, t, {
                    "configurable": !0,
                    "enumerable": !0,
                    "value": n,
                    "writable": !0
                }) : e[t] = n
            }(e, t, n)
        }

        var L = {"WEAPP": "WEAPP", "WEB": "WEB", "RN": "RN", "SWAN": "SWAN", "ALIPAY": "ALIPAY", "TT": "TT"};
        var j = function () {
            function Events(e) {
                _classCallCheck(this, Events), void 0 !== e && e.callbacks ? this.callbacks = e.callbacks : this.callbacks = {}
            }

            return _createClass(Events, [{
                "key": "on", "value": function on(e, t, n) {
                    var r, o, i, a, s;
                    if (!t) return this;
                    for (e = e.split(Events.eventSplitter), r = this.callbacks; o = e.shift();) (i = (s = r[o]) ? s.tail : {}).next = a = {}, i.context = n, i.callback = t, r[o] = {
                        "tail": a,
                        "next": s ? s.next : i
                    };
                    return this
                }
            }, {
                "key": "once", "value": function once(e, t, n) {
                    var r = this;
                    return this.on(e, function wrapper() {
                        for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                        t.apply(r, i), r.off(e, wrapper, n)
                    }, n), this
                }
            }, {
                "key": "off", "value": function off(e, t, n) {
                    var r, o, i, a, s, c;
                    if (!(o = this.callbacks)) return this;
                    if (!(e || t || n)) return delete this.callbacks, this;
                    for (e = e ? e.split(Events.eventSplitter) : Object.keys(o); r = e.shift();) if (i = o[r], delete o[r], i && (t || n)) for (a = i.tail; (i = i.next) !== a;) s = i.callback, c = i.context, (t && s !== t || n && c !== n) && this.on(r, s, c);
                    return this
                }
            }, {
                "key": "trigger", "value": function trigger(e) {
                    var t, n, r, o, i;
                    if (!(r = this.callbacks)) return this;
                    for (e = e.split(Events.eventSplitter), i = [].slice.call(arguments, 1); t = e.shift();) if (n = r[t]) for (o = n.tail; (n = n.next) !== o;) n.callback.apply(n.context || this, i);
                    return this
                }
            }]), Events
        }();
        j.eventSplitter = /\s+/;
        var V = {
            "onSocketOpen": !0,
            "onSocketError": !0,
            "onSocketMessage": !0,
            "onSocketClose": !0,
            "onBackgroundAudioPlay": !0,
            "onBackgroundAudioPause": !0,
            "onBackgroundAudioStop": !0,
            "onNetworkStatusChange": !0,
            "onAccelerometerChange": !0,
            "onCompassChange": !0,
            "onBluetoothAdapterStateChange": !0,
            "onBluetoothDeviceFound": !0,
            "onBLEConnectionStateChange": !0,
            "onBLECharacteristicValueChange": !0,
            "onBeaconUpdate": !0,
            "onBeaconServiceChange": !0,
            "onUserCaptureScreen": !0,
            "onHCEMessage": !0,
            "onGetWifiList": !0,
            "onWifiConnected": !0,
            "setStorageSync": !0,
            "getStorageSync": !0,
            "getStorageInfoSync": !0,
            "removeStorageSync": !0,
            "clearStorageSync": !0,
            "getSystemInfoSync": !0,
            "getExtConfigSync": !0,
            "getLogManager": !0,
            "onMemoryWarning": !0,
            "reportAnalytics": !0,
            "navigateToSmartGameProgram": !0,
            "getFileSystemManager": !0,
            "getLaunchOptionsSync": !0,
            "onPageNotFound": !0,
            "onError": !0,
            "onAppShow": !0,
            "onAppHide": !0,
            "offPageNotFound": !0,
            "offError": !0,
            "offAppShow": !0,
            "offAppHide": !0
        }, F = {
            "stopRecord": !0,
            "getRecorderManager": !0,
            "pauseVoice": !0,
            "stopVoice": !0,
            "pauseBackgroundAudio": !0,
            "stopBackgroundAudio": !0,
            "getBackgroundAudioManager": !0,
            "createAudioContext": !0,
            "createInnerAudioContext": !0,
            "createVideoContext": !0,
            "createCameraContext": !0,
            "createLivePlayerContext": !0,
            "createLivePusherContext": !0,
            "createMapContext": !0,
            "canIUse": !0,
            "startAccelerometer": !0,
            "stopAccelerometer": !0,
            "startCompass": !0,
            "stopCompass": !0,
            "hideToast": !0,
            "hideLoading": !0,
            "showNavigationBarLoading": !0,
            "hideNavigationBarLoading": !0,
            "createAnimation": !0,
            "createSelectorQuery": !0,
            "createCanvasContext": !0,
            "createContext": !0,
            "drawCanvas": !0,
            "hideKeyboard": !0,
            "stopPullDownRefresh": !0,
            "createIntersectionObserver": !0,
            "onWindowResize": !0,
            "offWindowResize": !0,
            "arrayBufferToBase64": !0,
            "base64ToArrayBuffer": !0,
            "getAccountInfoSync": !0,
            "getUpdateManager": !0,
            "createWorker": !0
        }, U = {
            "uploadFile": !0,
            "downloadFile": !0,
            "connectSocket": !0,
            "sendSocketMessage": !0,
            "closeSocket": !0,
            "chooseImage": !0,
            "chooseMessageFile": !0,
            "previewImage": !0,
            "getImageInfo": !0,
            "compressImage": !0,
            "saveImageToPhotosAlbum": !0,
            "startRecord": !0,
            "playVoice": !0,
            "setInnerAudioOption": !0,
            "getAvailableAudioSources": !0,
            "getBackgroundAudioPlayerState": !0,
            "playBackgroundAudio": !0,
            "seekBackgroundAudio": !0,
            "chooseVideo": !0,
            "saveVideoToPhotosAlbum": !0,
            "loadFontFace": !0,
            "saveFile": !0,
            "getFileInfo": !0,
            "getSavedFileList": !0,
            "getSavedFileInfo": !0,
            "removeSavedFile": !0,
            "openDocument": !0,
            "setStorage": !0,
            "getStorage": !0,
            "getStorageInfo": !0,
            "removeStorage": !0,
            "clearStorage": !0,
            "navigateBack": !0,
            "navigateTo": !0,
            "redirectTo": !0,
            "switchTab": !0,
            "reLaunch": !0,
            "getLocation": !0,
            "chooseLocation": !0,
            "openLocation": !0,
            "getSystemInfo": !0,
            "getNetworkType": !0,
            "makePhoneCall": !0,
            "scanCode": !0,
            "setClipboardData": !0,
            "getClipboardData": !0,
            "openBluetoothAdapter": !0,
            "closeBluetoothAdapter": !0,
            "getBluetoothAdapterState": !0,
            "startBluetoothDevicesDiscovery": !0,
            "stopBluetoothDevicesDiscovery": !0,
            "getBluetoothDevices": !0,
            "getConnectedBluetoothDevices": !0,
            "createBLEConnection": !0,
            "closeBLEConnection": !0,
            "getBLEDeviceServices": !0,
            "getBLEDeviceCharacteristics": !0,
            "readBLECharacteristicValue": !0,
            "writeBLECharacteristicValue": !0,
            "notifyBLECharacteristicValueChange": !0,
            "startBeaconDiscovery": !0,
            "stopBeaconDiscovery": !0,
            "getBeacons": !0,
            "setScreenBrightness": !0,
            "getScreenBrightness": !0,
            "setKeepScreenOn": !0,
            "vibrateLong": !0,
            "vibrateShort": !0,
            "addPhoneContact": !0,
            "getHCEState": !0,
            "startHCE": !0,
            "stopHCE": !0,
            "sendHCEMessage": !0,
            "startWifi": !0,
            "stopWifi": !0,
            "connectWifi": !0,
            "getWifiList": !0,
            "setWifiList": !0,
            "getConnectedWifi": !0,
            "pageScrollTo": !0,
            "showToast": !0,
            "showLoading": !0,
            "showModal": !0,
            "showActionSheet": !0,
            "setNavigationBarTitle": !0,
            "setNavigationBarColor": !0,
            "setTabBarBadge": !0,
            "removeTabBarBadge": !0,
            "showTabBarRedDot": !0,
            "hideTabBarRedDot": !0,
            "setTabBarStyle": !0,
            "setTabBarItem": !0,
            "showTabBar": !0,
            "hideTabBar": !0,
            "setTopBarText": !0,
            "startPullDownRefresh": !0,
            "canvasToTempFilePath": !0,
            "canvasGetImageData": !0,
            "canvasPutImageData": !0,
            "setBackgroundColor": !0,
            "setBackgroundTextStyle": !0,
            "getExtConfig": !0,
            "login": !0,
            "checkSession": !0,
            "authorize": !0,
            "getUserInfo": !0,
            "checkIsSupportFacialRecognition": !0,
            "startFacialRecognitionVerify": !0,
            "startFacialRecognitionVerifyAndUploadVideo": !0,
            "faceVerifyForPay": !0,
            "requestPayment": !0,
            "showShareMenu": !0,
            "hideShareMenu": !0,
            "updateShareMenu": !0,
            "getShareInfo": !0,
            "chooseAddress": !0,
            "addCard": !0,
            "openCard": !0,
            "openSetting": !0,
            "getSetting": !0,
            "getWeRunData": !0,
            "navigateToMiniProgram": !0,
            "navigateBackMiniProgram": !0,
            "chooseInvoice": !0,
            "chooseInvoiceTitle": !0,
            "checkIsSupportSoterAuthentication": !0,
            "startSoterAuthentication": !0,
            "checkIsSoterEnrolledInDevice": !0,
            "setEnableDebug": !0,
            "ocrIdCard": !0,
            "ocrBankCard": !0,
            "ocrDrivingLicense": !0,
            "ocrVehicleLicense": !0,
            "textReview": !0,
            "textToAudio": !0,
            "imageAudit": !0,
            "advancedGeneralIdentify": !0,
            "objectDetectIdentify": !0,
            "carClassify": !0,
            "dishClassify": !0,
            "logoClassify": !0,
            "animalClassify": !0,
            "plantClassify": !0,
            "getSwanId": !0,
            "requestPolymerPayment": !0,
            "navigateToSmartProgram": !0,
            "navigateBackSmartProgram": !0,
            "preloadSubPackage": !0
        };
        var W = new j;

        function filter(e, t, n) {
            if (!t) return null;
            var r = e.id, o = e.dataset, i = e.rect, a = e.size, s = e.scrollOffset, c = e.properties,
                l = void 0 === c ? [] : c, u = e.computedStyle, p = void 0 === u ? [] : u,
                f = t.getBoundingClientRect(), d = f.left, A = f.right, h = f.top, m = f.bottom, T = f.width,
                b = f.height, S = "html" === n, y = {};
            if (r && (y.id = t.id), o && (y.dataset = Object.assign({}, t.dataset)), i && (S ? (y.left = 0, y.right = 0, y.top = 0, y.bottom = 0) : (y.left = d, y.right = A, y.top = h, y.bottom = m)), a && (S ? (y.width = t.clientWidth, y.height = t.clientHeight) : (y.width = T, y.height = b)), s && (y.scrollLeft = t.scrollLeft, y.scrollTop = t.scrollTop), l.length && l.forEach(function (e) {
                var n = t.getAttribute(e);
                n && (y[e] = n)
            }), p.length) {
                var g = window.getComputedStyle(t);
                p.forEach(function (e) {
                    var t = g.getPropertyValue(e);
                    t && (y[e] = t)
                })
            }
            return y
        }

        var X = function () {
            function Query() {
                _classCallCheck(this, Query), this._defaultWebviewId = null, this._webviewId = null, this._queue = [], this._queueCb = [], this._component = null
            }

            return _createClass(Query, [{
                "key": "in", "value": function _in(e) {
                    return this._component = e, this
                }
            }, {
                "key": "select", "value": function select(e) {
                    return "string" == typeof e && (e = e.replace(">>>", ">")), new Q(e, this, !0)
                }
            }, {
                "key": "selectAll", "value": function selectAll(e) {
                    return "string" == typeof e && (e = e.replace(">>>", ">")), new Q(e, this, !1)
                }
            }, {
                "key": "selectViewport", "value": function selectViewport() {
                    return new Q("html", this, !0)
                }
            }, {
                "key": "exec", "value": function exec(e) {
                    var t = this;
                    !function queryBat(e, t) {
                        var n = [];
                        e.forEach(function (e) {
                            var t = e.selector, o = e.single, i = e.fields, a = e.component,
                                s = null !== a && r.findDOMNode(a) || document, c = !1;
                            if (s !== document) for (var l = s.parentNode.querySelectorAll(t), u = 0, p = l.length; u < p; ++u) if (s === l[u]) {
                                c = !0;
                                break
                            }
                            if (o) {
                                var f = !0 === c ? s : s.querySelector(t);
                                n.push(filter(i, f, t))
                            } else {
                                var d = s.querySelectorAll(t), A = [];
                                !0 === c && A.push(s);
                                for (var h = 0, m = d.length; h < m; ++h) A.push(d[h]);
                                n.push(A.map(function (e) {
                                    return filter(i, e)
                                }))
                            }
                        }), t(n)
                    }(this._queue, function (n) {
                        var r = t._queueCb;
                        n.forEach(function (e, n) {
                            "function" == typeof r[n] && r[n].call(t, e)
                        }), "function" == typeof e && e.call(t, n)
                    })
                }
            }, {
                "key": "_push", "value": function _push(e, t, n, r) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    this._queue.push({"component": t, "selector": e, "single": n, "fields": r}), this._queueCb.push(o)
                }
            }]), Query
        }(), Q = function () {
            function NodesRef(e, t, n) {
                _classCallCheck(this, NodesRef), this._component = t._component, this._selector = e, this._selectorQuery = t, this._single = n
            }

            return _createClass(NodesRef, [{
                "key": "boundingClientRect", "value": function boundingClientRect(e) {
                    var t = this._selector, n = this._component, r = this._single, o = this._selectorQuery;
                    return o._push(t, n, r, {"id": !0, "dataset": !0, "rect": !0, "size": !0}, e), o
                }
            }, {
                "key": "scrollOffset", "value": function scrollOffset(e) {
                    var t = this._selector, n = this._component, r = this._single, o = this._selectorQuery;
                    return o._push(t, n, r, {"id": !0, "dataset": !0, "scrollOffset": !0}, e), o
                }
            }, {
                "key": "fields", "value": function fields(e, t) {
                    var n = this._selector, r = this._component, o = this._single, i = this._selectorQuery, a = e.id,
                        s = e.dataset, c = e.rect, l = e.size, u = e.scrollOffset, p = e.properties,
                        f = void 0 === p ? [] : p, d = e.computedStyle, A = void 0 === d ? [] : d;
                    return i._push(n, r, o, {
                        "id": a,
                        "dataset": s,
                        "rect": c,
                        "size": l,
                        "scrollOffset": u,
                        "properties": f,
                        "computedStyle": A
                    }, t), i
                }
            }]), NodesRef
        }();

        function createSelectorQuery() {
            return new X
        }

        var K = Object.getOwnPropertySymbols, z = Object.prototype.hasOwnProperty,
            Z = Object.prototype.propertyIsEnumerable;
        var $ = function shouldUseNative() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    r[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function (e, t) {
            for (var n, r, o = function toObject(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), i = 1; i < arguments.length; i++) {
                for (var a in n = Object(arguments[i])) z.call(n, a) && (o[a] = n[a]);
                if (K) {
                    r = K(n);
                    for (var s = 0; s < r.length; s++) Z.call(n, r[s]) && (o[r[s]] = n[r[s]])
                }
            }
            return o
        }, Y = encodeURIComponent;

        function isFunction$1(e) {
            return "function" == typeof e
        }

        var q = ("undefined" != typeof window ? window : e).localStorage, J = {
            "disabled": !1, "set": function set(e, t) {
                return void 0 === t ? J.remove(e) : (q.setItem(e, J.serialize(t)), t)
            }, "get": function get(e, t) {
                var n = J.deserialize(q.getItem(e));
                return void 0 === n ? t : n
            }, "remove": function remove(e) {
                q.removeItem(e)
            }, "clear": function clear() {
                q.clear()
            }, "has": function has(e) {
                return void 0 !== J.get(e)
            }, "forEach": function forEach(e) {
                for (var t = 0; t < q.length; t++) {
                    var n = q.key(t);
                    e(n, J.get(n))
                }
            }, "getAll": function getAll() {
                var e = {};
                return J.forEach(function (t, n) {
                    e[t] = n
                }), e
            }, "serialize": function serialize(e) {
                return JSON.stringify(e)
            }, "deserialize": function deserialize(e) {
                if ("string" == typeof e) try {
                    return JSON.parse(e)
                } catch (t) {
                    return e || void 0
                }
            }
        };
        try {
            J.set("__store__", "__store__"), "__store__" !== J.get("__store__") && (J.disabled = !0), J.remove("__store__")
        } catch (e) {
            J.disabled = !0
        }
        J.enabled = !J.disabled;
        var ee = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function (e) {
                return _typeof(e)
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e)
            }, te = "undefined" != typeof window ? window : e, ne = "Promise" in te && ee(isFunction$1(Promise)),
            re = function noop() {
            }, oe = encodeURIComponent, ie = te.document,
            ae = ie ? ie.head || ie.getElementsByTagName("head")[0] : null, se = 2e3, ce = {
                "timeout": se,
                "retryTimes": 2,
                "backup": null,
                "params": {},
                "jsonp": "callback",
                "name": null,
                "cache": !1,
                "useStore": !1,
                "storeCheck": null,
                "storeSign": null,
                "storeCheckKey": null,
                "dataCheck": null,
                "charset": "UTF-8"
            }, le = (new Date).getTime();

        function jsonp$1(e, t, n) {
            if (isFunction$1(e) ? (n = e, t = {}) : e && "object" === (void 0 === e ? "undefined" : ee(e)) && (n = t, e = (t = e || {}).url), isFunction$1(t) && (n = t, t = {}), t || (t = {}), t = $({}, ce, t), e = e || t.url, n = n || re, !e || "string" != typeof e) return n(new Error("Param url is needed!")), !jsonp$1.promiseClose && ne ? new Promise(function (e, t) {
                return t(new Error("Param url is needed!"))
            }) : void 0;
            var r = generateJsonpUrlWithParams(e, t.params), o = function getDataFromStore(e) {
                var t = e.useStore, n = e.storeKey, r = e.storeCheck, o = e.storeCheckKey, i = e.storeSign,
                    a = e.dataCheck;
                if (t = !!t && J.enabled) {
                    var s = J.get(n);
                    if ((r = r || storeCheckFn)(s, o, i) && (!a || s && a && !1 !== a(s))) return s
                }
                return null
            }({
                "useStore": t.useStore,
                "storeKey": r,
                "storeCheck": t.storeCheck,
                "storeCheckKey": t.storeCheckKey,
                "storeSign": t.storeSign,
                "dataCheck": t.dataCheck
            });
            return o ? (n(null, o), !jsonp$1.promiseClose && ne ? new Promise(function (e) {
                return e(o)
            }) : void 0) : (t.originalUrl = r, !jsonp$1.promiseClose && ne ? new Promise(function (e, o) {
                fetchData(r, t, function (t, r) {
                    if (t) return n(t), o(t);
                    n(null, r), e(r)
                })
            }) : void fetchData(r, t, n))
        }

        function generateJsonpUrlWithParams(e, t) {
            return t = "string" == typeof t ? t : function serializeParams(e) {
                return e ? Object.keys(e).map(function (t) {
                    return t + "=" + Y(e[t])
                }).join("&") : ""
            }(t), e = (e += (~e.indexOf("?") ? "&" : "?") + t).replace("?&", "?")
        }

        function fetchData(e, t, n) {
            var r = t.originalUrl, o = t.charset, i = function getUrlQueryParamByName(e, t) {
                e || (e = window.location.href), t = t.replace(/[[]]/g, "\\$&");
                var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
            }(e, t.jsonp), a = "?" !== i && i || t.name || "__jsonp" + le++, s = arguments[3] || null;
            i ? "?" === i && (e = function updateQueryStringParamByName(e, t, n) {
                var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"), o = -1 !== e.indexOf("?") ? "&" : "?";
                return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e + o + t + "=" + n
            }(e, t.jsonp, oe(a))) : e += ("&" === e.split("").pop() ? "" : "&") + t.jsonp + "=" + oe(a), t.cache || (e += ("&" === e.split("").pop() ? "" : "&") + "_=" + (new Date).getTime()), clearTimeout(te["timer_" + a]);
            var c = te[a];
            te[a] = function (e) {
                if (c && c(e), cleanup(a), s && (e.__$$backupCall = s), t.dataCheck) {
                    if (!1 !== t.dataCheck(e)) return setDataToStore({
                        "useStore": t.useStore,
                        "storeKey": r,
                        "data": e
                    }), n(null, e);
                    !1 === fallback(r, t, n) && n(new Error("Data check error, and no fallback"))
                } else setDataToStore({"useStore": t.useStore, "storeKey": r, "data": e}), n(null, e)
            };
            var l = function appendScriptTagToHead(e) {
                var t = e.url, n = e.charset;
                if (!ie) return;
                var r = ie.createElement("script");
                r.type = "text/javascript", n && (r.charset = n);
                return r.src = t, ae.appendChild(r), r
            }({"url": e, "charset": o}), u = null != t.timeout ? t.timeout : se;

            function cleanup(e) {
                l.parentNode && l.parentNode.removeChild(l), te[e] = re, clearTimeout(te["timer_" + e])
            }

            te["timer_" + a] = setTimeout(function () {
                return cleanup(a), "number" == typeof t.retryTimes && t.retryTimes > 0 ? (t.retryTimes--, fetchData(r, t, n)) : !1 === fallback(r, t, n) ? n(new Error("Timeout and no data return")) : void 0
            }, u)
        }

        function storeCheckFn(e, t, n) {
            return !!(e && t && n) && (e[t] && e[t] === n)
        }

        function setDataToStore(e) {
            var t = e.useStore, n = e.storeKey, r = e.data;
            (t = !!t && J.enabled) && J.set(n, r)
        }

        function fallback(e, t, n) {
            var r = t.backup;
            if (r) {
                if ("string" == typeof r) return delete t.backup, fetchData(generateJsonpUrlWithParams(r, t.params), t, n, {"backup": r});
                if (Array.isArray(r) && r.length) {
                    var o = r.shift();
                    return fetchData(generateJsonpUrlWithParams(o, t.params), t, n, {"backup": o})
                }
            }
            var i = function getDataFromStoreWithoutCheck(e) {
                var t = e.useStore, n = e.storeKey, r = e.dataCheck;
                if (t = !!t && J.enabled) {
                    var o = J.get(n);
                    if (!r || o && r && !1 !== r(o)) return o
                }
                return null
            }({"useStore": t.useStore, "storeKey": e, "dataCheck": t.dataCheck});
            return !!i && (n(null, i), !0)
        }

        function shouleBeObject(e) {
            return e && "object" === _typeof(e) ? {"res": !0} : {
                "res": !1,
                "msg": getParameterError({"correct": "Object", "wrong": e})
            }
        }

        function getParameterError(e) {
            var t = e.name, n = void 0 === t ? "" : t, r = e.para, o = e.correct, i = e.wrong,
                a = r ? "parameter.".concat(r) : "parameter", s = function upperCaseFirstLetter(e) {
                    return "string" != typeof e ? e : e = e.replace(/^./, function (e) {
                        return e.toUpperCase()
                    })
                }(null === i ? "Null" : _typeof(i));
            return "".concat(n, ":fail parameter error: ").concat(a, " should be ").concat(o, " instead of ").concat(s)
        }

        function inlineStyle$1(e) {
            var t = "";
            for (var n in e) t += "".concat(n, ": ").concat(e[n], ";");
            return t.indexOf("display: flex;") >= 0 && (t += "display: -webkit-box;display: -webkit-flex;"), t = (t = t.replace(/transform:(.+?);/g, function (e, t) {
                return "".concat(e, "-webkit-transform:").concat(t, ";")
            })).replace(/flex-direction:(.+?);/g, function (e, t) {
                return "".concat(e, "-webkit-flex-direction:").concat(t, ";")
            })
        }

        function setTransform(e, t) {
            e.style.webkitTransform = t, e.style.transform = t
        }

        function errorHandler(e, t) {
            return function (n) {
                return "function" == typeof e && e(n), "function" == typeof t && t(n), Promise.reject(n)
            }
        }

        !function (e) {
            if (!e.fetch) {
                var t = {
                    "searchParams": "URLSearchParams" in e,
                    "iterable": "Symbol" in e && "iterator" in Symbol,
                    "blob": "FileReader" in e && "Blob" in e && function () {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    "formData": "FormData" in e,
                    "arrayBuffer": "ArrayBuffer" in e
                };
                if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    r = function isDataView(e) {
                        return e && DataView.prototype.isPrototypeOf(e)
                    }, o = ArrayBuffer.isView || function (e) {
                        return e && n.indexOf(Object.prototype.toString.call(e)) > -1
                    };
                Headers.prototype.append = function (e, t) {
                    e = normalizeName(e), t = normalizeValue(t);
                    var n = this.map[e];
                    this.map[e] = n ? n + "," + t : t
                }, Headers.prototype.delete = function (e) {
                    delete this.map[normalizeName(e)]
                }, Headers.prototype.get = function (e) {
                    return e = normalizeName(e), this.has(e) ? this.map[e] : null
                }, Headers.prototype.has = function (e) {
                    return this.map.hasOwnProperty(normalizeName(e))
                }, Headers.prototype.set = function (e, t) {
                    this.map[normalizeName(e)] = normalizeValue(t)
                }, Headers.prototype.forEach = function (e, t) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                }, Headers.prototype.keys = function () {
                    var e = [];
                    return this.forEach(function (t, n) {
                        e.push(n)
                    }), iteratorFor(e)
                }, Headers.prototype.values = function () {
                    var e = [];
                    return this.forEach(function (t) {
                        e.push(t)
                    }), iteratorFor(e)
                }, Headers.prototype.entries = function () {
                    var e = [];
                    return this.forEach(function (t, n) {
                        e.push([n, t])
                    }), iteratorFor(e)
                }, t.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
                var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                Request.prototype.clone = function () {
                    return new Request(this, {"body": this._bodyInit})
                }, Body.call(Request.prototype), Body.call(Response.prototype), Response.prototype.clone = function () {
                    return new Response(this._bodyInit, {
                        "status": this.status,
                        "statusText": this.statusText,
                        "headers": new Headers(this.headers),
                        "url": this.url
                    })
                }, Response.error = function () {
                    var e = new Response(null, {"status": 0, "statusText": ""});
                    return e.type = "error", e
                };
                var a = [301, 302, 303, 307, 308];
                Response.redirect = function (e, t) {
                    if (-1 === a.indexOf(t)) throw new RangeError("Invalid status code");
                    return new Response(null, {"status": t, "headers": {"location": e}})
                }, e.Headers = Headers, e.Request = Request, e.Response = Response, e.fetch = function (e, n) {
                    return new Promise(function (r, o) {
                        var i = new Request(e, n), a = new XMLHttpRequest;
                        a.onload = function () {
                            var e = {
                                "status": a.status,
                                "statusText": a.statusText,
                                "headers": function parseHeaders(e) {
                                    var t = new Headers;
                                    return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (e) {
                                        var n = e.split(":"), r = n.shift().trim();
                                        if (r) {
                                            var o = n.join(":").trim();
                                            t.append(r, o)
                                        }
                                    }), t
                                }(a.getAllResponseHeaders() || "")
                            };
                            e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
                            var t = "response" in a ? a.response : a.responseText;
                            r(new Response(t, e))
                        }, a.onerror = function () {
                            o(new TypeError("Network request failed"))
                        }, a.ontimeout = function () {
                            o(new TypeError("Network request failed"))
                        }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), i.headers.forEach(function (e, t) {
                            a.setRequestHeader(t, e)
                        }), a.send(void 0 === i._bodyInit ? null : i._bodyInit)
                    })
                }, e.fetch.polyfill = !0
            }

            function normalizeName(e) {
                if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return e.toLowerCase()
            }

            function normalizeValue(e) {
                return "string" != typeof e && (e = String(e)), e
            }

            function iteratorFor(e) {
                var n = {
                    "next": function next() {
                        var t = e.shift();
                        return {"done": void 0 === t, "value": t}
                    }
                };
                return t.iterable && (n[Symbol.iterator] = function () {
                    return n
                }), n
            }

            function Headers(e) {
                this.map = {}, e instanceof Headers ? e.forEach(function (e, t) {
                    this.append(t, e)
                }, this) : Array.isArray(e) ? e.forEach(function (e) {
                    this.append(e[0], e[1])
                }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t])
                }, this)
            }

            function consumed(e) {
                if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                e.bodyUsed = !0
            }

            function fileReaderReady(e) {
                return new Promise(function (t, n) {
                    e.onload = function () {
                        t(e.result)
                    }, e.onerror = function () {
                        n(e.error)
                    }
                })
            }

            function readBlobAsArrayBuffer(e) {
                var t = new FileReader, n = fileReaderReady(t);
                return t.readAsArrayBuffer(e), n
            }

            function bufferClone(e) {
                if (e.slice) return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)), t.buffer
            }

            function Body() {
                return this.bodyUsed = !1, this._initBody = function (e) {
                    if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e; else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e; else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e; else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString(); else if (t.arrayBuffer && t.blob && r(e)) this._bodyArrayBuffer = bufferClone(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
                        if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !o(e)) throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = bufferClone(e)
                    } else this._bodyText = "";
                    this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, t.blob && (this.blob = function () {
                    var e = consumed(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function () {
                    return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(readBlobAsArrayBuffer)
                }), this.text = function () {
                    var e = consumed(this);
                    if (e) return e;
                    if (this._bodyBlob) return function readBlobAsText(e) {
                        var t = new FileReader, n = fileReaderReady(t);
                        return t.readAsText(e), n
                    }(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(function readArrayBufferAsText(e) {
                        for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                        return n.join("")
                    }(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, t.formData && (this.formData = function () {
                    return this.text().then(decode)
                }), this.json = function () {
                    return this.text().then(JSON.parse)
                }, this
            }

            function Request(e, t) {
                var n = (t = t || {}).body;
                if (e instanceof Request) {
                    if (e.bodyUsed) throw new TypeError("Already read");
                    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Headers(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                } else this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new Headers(t.headers)), this.method = function normalizeMethod(e) {
                    var t = e.toUpperCase();
                    return i.indexOf(t) > -1 ? t : e
                }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(n)
            }

            function decode(e) {
                var t = new FormData;
                return e.trim().split("&").forEach(function (e) {
                    if (e) {
                        var n = e.split("="), r = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(r), decodeURIComponent(o))
                    }
                }), t
            }

            function Response(e, t) {
                t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new Headers(t.headers), this.url = t.url || "", this._initBody(e)
            }
        }("undefined" != typeof self ? self : void 0);
        var ue = encodeURIComponent;

        function serializeParams$1(e) {
            return e ? Object.keys(e).map(function (t) {
                return "".concat(ue(t), "=").concat(ue(e[t]))
            }).join("&") : ""
        }

        function request(e) {
            "string" == typeof(e = e || {}) && (e = {"url": e});
            var t = e, n = t.success, r = t.complete, o = t.fail, i = e.url, a = {}, s = {};
            if (e.jsonp) return Object.assign(a, e), a.params = e.data, a.cache = e.jsonpCache, "string" == typeof e.jsonp && (a.name = e.jsonp), delete a.jsonp, jsonp$1(i, a).then(function (e) {
                return s.statusCode = 200, s.data = e, "function" == typeof n && n(s), "function" == typeof r && r(s), s
            }).catch(function (e) {
                return "function" == typeof o && o(e), "function" == typeof r && r(s), Promise.reject(e)
            });
            a.method = e.method || "GET";
            var c = a.method.toUpperCase();
            if (a.cache = e.cache || "default", "GET" === c || "HEAD" === c) i = function generateRequestUrlWithParams(e, t) {
                return (t = "string" == typeof t ? t : serializeParams$1(t)) && (e += (~e.indexOf("?") ? "&" : "?") + t), e = e.replace("?&", "?")
            }(i, e.data); else if ("object" === _typeof(e.data)) {
                var l = e.header && (e.header["Content-Type"] || e.header["content-type"]);
                l && l.indexOf("application/json") >= 0 ? a.body = JSON.stringify(e.data) : l && l.indexOf("application/x-www-form-urlencoded") >= 0 ? a.body = serializeParams$1(e.data) : a.body = e.data
            } else a.body = e.data;
            return e.header && (a.headers = e.header), e.mode && (a.mode = e.mode), a.credentials = e.credentials, fetch(i, a).then(function (t) {
                return s.statusCode = t.status, s.header = {}, t.headers.forEach(function (e, t) {
                    s.header[t] = e
                }), "arraybuffer" === e.responseType ? t.arrayBuffer() : "json" === e.dataType || void 0 === e.dataType ? t.json() : "text" === e.responseType ? t.text() : Promise.resolve(null)
            }).then(function (e) {
                return s.data = e, "function" == typeof n && n(s), "function" == typeof r && r(s), s
            }).catch(function (e) {
                return "function" == typeof o && o(e), "function" == typeof r && r(s), Promise.reject(e)
            })
        }

        var pe = function () {
            function SocketTask(e, t) {
                _classCallCheck(this, SocketTask), t && t.length ? this.ws = new WebSocket(e, t) : this.ws = new WebSocket(e), this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3
            }

            return _createClass(SocketTask, [{
                "key": "send", "value": function send() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    "object" === _typeof(e) && e || (e = {});
                    var t = e, n = t.data, r = void 0 === n ? "" : n, o = t.success, i = t.fail, a = t.complete;
                    if (1 !== this.readyState) {
                        var s = {"errMsg": "SocketTask.send:fail SocketTask.readState is not OPEN"};
                        return console.error(s.errMsg), "function" == typeof i && i(s), "function" == typeof a && a(s), Promise.reject(s)
                    }
                    this.ws.send(r);
                    var c = {"errMsg": "sendSocketMessage:ok"};
                    return "function" == typeof o && o(c), "function" == typeof a && a(c), Promise.resolve(c)
                }
            }, {
                "key": "close", "value": function close() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    "object" === _typeof(e) && e || (e = {});
                    var t = e, n = t.code, r = void 0 === n ? 1e3 : n, o = t.reason,
                        i = void 0 === o ? "server complete,close" : o, a = t.success, s = t.complete;
                    this.closeDetail = {
                        "code": r,
                        "reason": i
                    }, this._destroyWhenClose && this._destroyWhenClose(), this.ws.close();
                    var c = {"errMsg": "closeSocket:ok"};
                    return "function" == typeof a && a(c), "function" == typeof s && s(c), Promise.resolve(c)
                }
            }, {
                "key": "onOpen", "value": function onOpen(e) {
                    this.ws.onopen = e
                }
            }, {
                "key": "onMessage", "value": function onMessage(e) {
                    this.ws.onmessage = e
                }
            }, {
                "key": "onClose", "value": function onClose(e) {
                    var t = this;
                    this.ws.onclose = function () {
                        t._destroyWhenClose && t._destroyWhenClose(), e(t.closeDetail || {
                            "code": 1006,
                            "reason": "abnormal closure"
                        })
                    }
                }
            }, {
                "key": "onError", "value": function onError(e) {
                    this.ws.onerror = e
                }
            }, {
                "key": "readyState", "get": function get() {
                    return this.ws.readyState
                }
            }]), SocketTask
        }(), fe = [], de = 1;
        var Ae = {
            "connectSocket": function connectSocket(e) {
                var t = "connectSocket";
                return new Promise(function (n, r) {
                    var o = shouleBeObject(e);
                    if (!o.res) {
                        var i = {"errMsg": "".concat(t).concat(o.msg)};
                        return console.error(i.errMsg), r(i)
                    }
                    var a = e.url, s = e.protocols, c = e.success, l = e.fail, u = e.complete,
                        p = {"errMsg": "connectSocket:ok"};
                    if ("string" != typeof a) return p.errMsg = getParameterError({
                        "name": t,
                        "para": "url",
                        "correct": "String",
                        "wrong": a
                    }), console.error(p.errMsg), "function" == typeof l && l(p), "function" == typeof u && u(p), r(p);
                    if (!a.startsWith("ws://") && !a.startsWith("wss://")) return p.errMsg = 'request:fail invalid url "'.concat(a, '"'), console.error(p.errMsg), "function" == typeof l && l(p), "function" == typeof u && u(p), r(p);
                    var f = Array.isArray(s) ? s : null;
                    if (fe.length > 1) return p.errMsg = "同时最多发起 2 个 socket 请求，更多请参考文档。", console.error(p.errMsg), "function" == typeof l && l(p), "function" == typeof u && u(p), r(p);
                    var d = new pe(a, f);
                    return d._destroyWhenClose = function () {
                        var e = this;
                        fe = fe.filter(function (t) {
                            return t !== e
                        })
                    }, fe.push(d), p.socketTaskId = de++, "function" == typeof c && c(p), "function" == typeof u && u(p), n(d)
                })
            }, "onSocketOpen": function onSocketOpen() {
                console.warn("Deprecated.Please use socketTask.onOpen instead.")
            }, "onSocketError": function onSocketError() {
                console.warn("Deprecated.Please use socketTask.onError instead.")
            }, "sendSocketMessage": function sendSocketMessage() {
                console.warn("Deprecated.Please use socketTask.send instead.")
            }, "onSocketMessage": function onSocketMessage() {
                console.warn("Deprecated.Please use socketTask.onMessage instead.")
            }, "closeSocket": function closeSocket() {
                console.warn("Deprecated.Please use socketTask.close instead.")
            }, "onSocketClose": function onSocketClose() {
                console.warn("Deprecated.Please use socketTask.onClose instead.")
            }
        }, he = new function StyleSheet() {
            var e = this;
            _classCallCheck(this, StyleSheet), _defineProperty(this, "$style", null), _defineProperty(this, "sheet", null), _defineProperty(this, "appendStyleSheet", function () {
                e.$style.setAttribute("type", "text/css"), e.$style.setAttribute("data-type", "Taro"), document.getElementsByTagName("head")[0].appendChild(e.$style), e.sheet = e.$style.sheet, "insertRule" in e.sheet || console.warn("当前浏览器不支持 stylesheet.insertRule 接口")
            }), _defineProperty(this, "add", function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                null === e.sheet && e.appendStyleSheet(), e.sheet.insertRule(t, n)
            }), this.$style = document.createElement("style")
        }, me = "transitionend", Te = "transform", be = document.createElement("div");
        be.style.cssText = "\n  -webkit-animation-name: webkit;\n  -moz-animation-name: moz;\n  -ms-animation-name: ms;\n  animation-name: standard;\n", "standard" === be.style["animation-name"] ? (me = "transitionend", Te = "transform") : "webkit" === be.style["-webkit-animation-name"] ? (me = "webkitTransionEnd", Te = "-webkit-transform") : "moz" === be.style["-moz-animation-name"] ? (me = "mozTransionEnd", Te = "-moz-transform") : "ms" === be.style["-ms-animation-name"] && (me = "MSTransionEnd", Te = "-ms-transform");
        var Se = 0, ye = function () {
            function Animation() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.duration,
                    r = void 0 === n ? 400 : n, o = t.delay, i = void 0 === o ? 0 : o, a = t.timingFunction,
                    s = void 0 === a ? "linear" : a, c = t.transformOrigin, l = void 0 === c ? "50% 50% 0" : c,
                    u = t.unit, p = void 0 === u ? "px" : u;
                _classCallCheck(this, Animation), _defineProperty(this, "rules", []), _defineProperty(this, "transform", ["".concat(Te, ":")]), _defineProperty(this, "steps", []), _defineProperty(this, "animationMap", {}), _defineProperty(this, "animationMapCount", 0), this.setDefault(r, i, s, l), this.unit = p;
                var f = "animation";
                this.id = ++Se, document.body.addEventListener(me, function (t) {
                    var n = t.target;
                    null === n.getAttribute(f) && (f = "data-animation");
                    var r = n.getAttribute(f);
                    if (null !== r) {
                        var o = _slicedToArray(r.split("__"), 2), i = o[0], a = o[1];
                        if (i === "taro-h5-poly-fill/".concat(e.id, "/create-animation")) {
                            var s = _slicedToArray(a.split("--"), 2), c = s[0], l = s[1], u = void 0 === l ? 0 : l;
                            u < e.animationMap["".concat(i, "__").concat(c)] - 1 && (n.setAttribute(f, "".concat(i, "__").concat(c, "--").concat(u + 1)), "animation" === f && n.setAttribute("data-animation", "".concat(i, "__").concat(c, "--").concat(u + 1)))
                        }
                    }
                })
            }

            return _createClass(Animation, [{
                "key": "setDefault", "value": function setDefault(e, t, n, r) {
                    this.DEFAULT = {"duration": e, "delay": t, "timingFunction": n, "transformOrigin": r}
                }
            }, {
                "key": "matrix", "value": function matrix(e, t, n, r, o, i) {
                    return this.transform.push("matrix(".concat(e, ", ").concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(o, ", ").concat(i, ")")), this
                }
            }, {
                "key": "matrix3d", "value": function matrix3d(e, t, n, r, o, i, a, s, c, l, u, p, f, d, A, h) {
                    return this.transform.push("matrix3d(".concat(e, ", ").concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(o, ", ").concat(i, ", ").concat(a, ", ").concat(s, ", ").concat(c, ", ").concat(l, ", ").concat(u, ", ").concat(p, ", ").concat(f, ", ").concat(d, ", ").concat(A, ", ").concat(h, ")")), this
                }
            }, {
                "key": "rotate", "value": function rotate(e) {
                    return this.transform.push("rotate(".concat(e, "deg)")), this
                }
            }, {
                "key": "rotate3d", "value": function rotate3d(e, t, n, r) {
                    return this.transform.push("rotate3d(".concat(e, ", ").concat(t, ", ").concat(n, ", ").concat(r, "deg)")), this
                }
            }, {
                "key": "rotateX", "value": function rotateX(e) {
                    return this.transform.push("rotateX(".concat(e, "deg)")), this
                }
            }, {
                "key": "rotateY", "value": function rotateY(e) {
                    return this.transform.push("rotateY(".concat(e, "deg)")), this
                }
            }, {
                "key": "rotateZ", "value": function rotateZ(e) {
                    return this.transform.push("rotateZ(".concat(e, "deg)")), this
                }
            }, {
                "key": "scale", "value": function scale(e, t) {
                    return this.transform.push("scale(".concat(e, ", ").concat(t, ")")), this
                }
            }, {
                "key": "scale3d", "value": function scale3d(e, t, n) {
                    return this.transform.push("scale3d(".concat(e, ", ").concat(t, ", ").concat(n, ")")), this
                }
            }, {
                "key": "scaleX", "value": function scaleX(e) {
                    return this.transform.push("scaleX(".concat(e, ")")), this
                }
            }, {
                "key": "scaleY", "value": function scaleY(e) {
                    return this.transform.push("scaleY(".concat(e, ")")), this
                }
            }, {
                "key": "scaleZ", "value": function scaleZ(e) {
                    return this.transform.push("scaleZ(".concat(e, ")")), this
                }
            }, {
                "key": "skew", "value": function skew(e, t) {
                    return this.transform.push("skew(".concat(e, ", ").concat(t, ")")), this
                }
            }, {
                "key": "skewX", "value": function skewX(e) {
                    return this.transform.push("skewX(".concat(e, ")")), this
                }
            }, {
                "key": "skewY", "value": function skewY(e) {
                    return this.transform.push("skewY(".concat(e, ")")), this
                }
            }, {
                "key": "translate", "value": function translate(e, t) {
                    return this.transform.push("translate(".concat(e).concat(this.unit, ", ").concat(t).concat(this.unit, ")")), this
                }
            }, {
                "key": "translate3d", "value": function translate3d(e, t, n) {
                    return this.transform.push("translate3d(".concat(e).concat(this.unit, ", ").concat(t).concat(this.unit, ", ").concat(n).concat(this.unit, ")")), this
                }
            }, {
                "key": "translateX", "value": function translateX(e) {
                    return this.transform.push("translateX(".concat(e).concat(this.unit, ")")), this
                }
            }, {
                "key": "translateY", "value": function translateY(e) {
                    return this.transform.push("translateY(".concat(e).concat(this.unit, ")")), this
                }
            }, {
                "key": "translateZ", "value": function translateZ(e) {
                    return this.transform.push("translateZ(".concat(e).concat(this.unit, ")")), this
                }
            }, {
                "key": "opacity", "value": function opacity(e) {
                    return this.rules.push("opacity: ".concat(e)), this
                }
            }, {
                "key": "backgroundColor", "value": function backgroundColor(e) {
                    return this.rules.push("background-color: ".concat(e)), this
                }
            }, {
                "key": "width", "value": function width(e) {
                    return this.rules.push("width: ".concat(e).concat(this.unit)), this
                }
            }, {
                "key": "height", "value": function height(e) {
                    return this.rules.push("height: ".concat(e).concat(this.unit)), this
                }
            }, {
                "key": "top", "value": function top(e) {
                    return this.rules.push("top: ".concat(e).concat(this.unit)), this
                }
            }, {
                "key": "right", "value": function right(e) {
                    return this.rules.push("right: ".concat(e).concat(this.unit)), this
                }
            }, {
                "key": "bottom", "value": function bottom(e) {
                    return this.rules.push("bottom: ".concat(e).concat(this.unit)), this
                }
            }, {
                "key": "left", "value": function left(e) {
                    return this.rules.push("left: ".concat(e).concat(this.unit)), this
                }
            }, {
                "key": "step", "value": function step() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.DEFAULT,
                        n = e.duration, r = void 0 === n ? t.duration : n, o = e.delay, i = void 0 === o ? t.delay : o,
                        a = e.timingFunction, s = void 0 === a ? t.timingFunction : a, c = e.transformOrigin,
                        l = void 0 === c ? t.transformOrigin : c;
                    return this.steps.push([this.rules.join(";"), this.transform.join(" "), "".concat(Te, "-origin: ").concat(l), "transition: all ".concat(r, "ms ").concat(s, " ").concat(i, "ms")].filter(function (e) {
                        return "" !== e && e !== "".concat(Te, ":")
                    }).join(";")), this.rules = [], this.transform = ["".concat(Te, ":")], this
                }
            }, {
                "key": "createAnimationData", "value": function createAnimationData() {
                    var e = "taro-h5-poly-fill/".concat(this.id, "/create-animation__").concat(this.animationMapCount++);
                    return this.animationMap[e] = this.steps.length, this.steps.forEach(function (t, n) {
                        var r = 0 === n ? '[animation="'.concat(e, '"], [data-animation="').concat(e, '"]') : '[animation="'.concat(e, "--").concat(n, '"], [data-animation="').concat(e, "--").concat(n, '"]');
                        he.add("".concat(r, " { ").concat(t, " }"))
                    }), this.steps = [], e
                }
            }, {
                "key": "export", "value": function _export() {
                    return this.createAnimationData()
                }
            }]), Animation
        }();

        function createAnimation() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return _construct(ye, t)
        }

        function setStorageSync(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if ("string" == typeof e) {
                var n = {};
                n = "symbol" === _typeof(t) ? {"data": ""} : {"data": t}, localStorage.setItem(e, JSON.stringify(n))
            } else console.error(getParameterError({"name": "setStorage", "correct": "String", "wrong": e}))
        }

        function getItem(e) {
            var t;
            try {
                t = JSON.parse(localStorage.getItem(e))
            } catch (e) {
            }
            return t && "object" === _typeof(t) && t.hasOwnProperty("data") ? {
                "result": !0,
                "data": t.data
            } : {"result": !1}
        }

        function getStorageInfoSync() {
            var e = {};
            return e.keys = Object.keys(localStorage), e.limitSize = null, e.currentSize = null, e
        }

        function removeStorageSync(e) {
            "string" == typeof e ? localStorage.removeItem(e) : console.error(getParameterError({
                "name": "removeStorage",
                "correct": "String",
                "wrong": e
            }))
        }

        function clearStorage() {
            localStorage.clear()
        }

        var ge = Object.freeze({
            "setStorage": function setStorage(e) {
                var t = shouleBeObject(e);
                if (!t.res) {
                    var n = {"errMsg": "setStorage".concat(t.msg)};
                    return console.error(n.errMsg), Promise.reject(n)
                }
                var r = e.key, o = e.data, i = e.success, a = e.fail, s = e.complete, c = {"errMsg": "setStorage:ok"};
                return "string" != typeof r ? (c.errMsg = getParameterError({
                    "name": "setStorage",
                    "para": "key",
                    "correct": "String",
                    "wrong": r
                }), console.error(c.errMsg), "function" == typeof a && a(c), "function" == typeof s && s(c), Promise.reject(c)) : (setStorageSync(r, o), "function" == typeof i && i(c), "function" == typeof s && s(c), Promise.resolve(c))
            }, "setStorageSync": setStorageSync, "getStorage": function getStorage(e) {
                var t = shouleBeObject(e);
                if (!t.res) {
                    var n = {"errMsg": "getStorage".concat(t.msg)};
                    return console.error(n.errMsg), Promise.reject(n)
                }
                var r = e.key, o = e.success, i = e.fail, a = e.complete, s = {"errMsg": "getStorage:ok"};
                if ("string" != typeof r) return s.errMsg = getParameterError({
                    "name": "getStorage",
                    "para": "key",
                    "correct": "String",
                    "wrong": r
                }), console.error(s.errMsg), "function" == typeof i && i(s), "function" == typeof a && a(s), Promise.reject(s);
                var c = getItem(r), l = c.result, u = c.data;
                return l ? (s.data = u, "function" == typeof o && o(s), "function" == typeof a && a(s), Promise.resolve(s)) : (s.errMsg = "getStorage:fail data not found", "function" == typeof i && i(s), "function" == typeof a && a(s), Promise.reject(s))
            }, "getStorageSync": function getStorageSync(e) {
                if ("string" == typeof e) {
                    var t = getItem(e);
                    return t.result ? t.data : ""
                }
                console.error(getParameterError({"name": "getStorage", "correct": "String", "wrong": e}))
            }, "getStorageInfo": function getStorageInfo() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.success,
                    n = e.complete, r = {"errMsg": "getStorageInfo:ok"}, o = getStorageInfoSync();
                return Object.assign(r, o), t && t(r), n && n(r), Promise.resolve(r)
            }, "getStorageInfoSync": getStorageInfoSync, "removeStorage": function removeStorage(e) {
                var t = shouleBeObject(e);
                if (!t.res) {
                    var n = {"errMsg": "removeStorage".concat(t.msg)};
                    return console.error(n.errMsg), Promise.reject(n)
                }
                var r = e.key, o = e.success, i = e.fail, a = e.complete, s = {"errMsg": "removeStorage:ok"};
                return "string" != typeof r ? (s.errMsg = getParameterError({
                    "name": "removeStorage",
                    "para": "key",
                    "correct": "String",
                    "wrong": r
                }), console.error(s.errMsg), "function" == typeof i && i(s), "function" == typeof a && a(s), Promise.reject(s)) : (removeStorageSync(r), o && o(s), a && a(s), Promise.resolve(s))
            }, "removeStorageSync": removeStorageSync, "clearStorage": clearStorage, "clearStorageSync": clearStorage
        }), ve = function () {
            function Toast() {
                _classCallCheck(this, Toast);
                var e = function noop() {
                };
                this.options = {
                    "title": "",
                    "icon": "none",
                    "image": "",
                    "duration": 1500,
                    "mask": !1,
                    "success": e,
                    "fail": e,
                    "complete": e
                }
            }

            return _createClass(Toast, [{
                "key": "getstyle", "value": function getstyle(e) {
                    return {
                        "maskStyle": {
                            "position": "fixed",
                            "z-index": "1000",
                            "top": "0",
                            "right": "0",
                            "left": "0",
                            "bottom": "0"
                        },
                        "toastStyle": {
                            "z-index": "5000",
                            "box-sizing": "border-box",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "center",
                            "-webkit-justify-content": "center",
                            "position": "fixed",
                            "top": "50%",
                            "left": "50%",
                            "min-width": "120px",
                            "max-width": "200px",
                            "min-height": "120px",
                            "padding": "15px",
                            "transform": "translate(-50%, -50%)",
                            "border-radius": "5px",
                            "text-align": "center",
                            "line-height": "1.6",
                            "color": "#FFFFFF",
                            "background": "rgba(17, 17, 17, 0.7)"
                        },
                        "successStyle": {
                            "margin": "0",
                            "vertical-align": "middle",
                            "font-family": "taro",
                            "-webkit-font-smoothing": "antialiased",
                            "color": "#FFFFFF",
                            "font-size": "55px",
                            "line-height": "1"
                        },
                        "loadingStyle": {
                            "margin": "6px auto",
                            "width": "38px",
                            "height": "38px",
                            "-webkit-animation": "taroLoading 1s steps(12, end) infinite",
                            "animation": "taroLoading 1s steps(12, end) infinite",
                            "background": "transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat",
                            "background-size": "100%"
                        },
                        "imageStyle": {
                            "margin": "6px auto",
                            "width": "40px",
                            "height": "40px",
                            "background": "transparent no-repeat",
                            "background-size": "100%"
                        },
                        "textStyle": {"margin": "0", "font-size": "16px"}
                    }
                }
            }, {
                "key": "create", "value": function create() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = this.getstyle(), r = n.maskStyle, o = n.toastStyle, i = n.successStyle, a = n.loadingStyle,
                        s = n.imageStyle, c = n.textStyle;
                    Object.assign(this.options, t);
                    var l = this.options;
                    if (this.el = document.createElement("div"), this.el.className = "taro__toast", this.el.style.opacity = "0", this.el.style.transition = "opacity 0.1s linear", this.mask = document.createElement("div"), this.mask.setAttribute("style", inlineStyle$1(r)), this.mask.style.display = l.mask ? "block" : "none", this.icon = document.createElement("p"), l.image) this.icon.setAttribute("style", inlineStyle$1(Object.assign({}, s, {"background-image": "url(".concat(l.image, ")")}))); else {
                        var u = "loading" === l.icon ? a : i;
                        "none" === l.icon && Object.assign(u, {"display": "none"}), this.icon.setAttribute("style", inlineStyle$1(u)), "loading" !== l.icon && (this.icon.textContent = "")
                    }
                    this.toast = document.createElement("div"), "none" === l.icon && Object.assign(o, {
                        "min-height": "0",
                        "padding": "10px 15px"
                    }), this.toast.setAttribute("style", inlineStyle$1(o)), this.title = document.createElement("p"), this.title.setAttribute("style", inlineStyle$1(c)), this.title.textContent = l.title, this.toast.appendChild(this.icon), this.toast.appendChild(this.title), this.el.appendChild(this.mask), this.el.appendChild(this.toast), document.body.appendChild(this.el), setTimeout(function () {
                        e.el.style.opacity = "1"
                    }, 0), this.type = l._type, l.duration >= 0 && this.hide(l.duration, this.type);
                    var p = "loading" === this.type ? "showLoading:ok" : "showToast:ok";
                    return l.success && l.success({"errMsg": p}), l.complete && l.complete({"errMsg": p}), Promise.resolve({"errMsg": p})
                }
            }, {
                "key": "show", "value": function show() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = this.options;
                    n.title !== t.title && (this.title.textContent = t.title), n.mask !== t.mask && (this.mask.style.display = t.mask ? "block" : "none");
                    var r = this.getstyle(), o = r.toastStyle, i = r.successStyle, a = r.loadingStyle, s = r.imageStyle;
                    if (n.image !== t.image) if (t.image) this.icon.setAttribute("style", inlineStyle$1(Object.assign({}, s, {"background-image": "url(".concat(t.image, ")")}))), this.icon.textContent = ""; else {
                        var c = "loading" === t.icon ? a : i;
                        "none" === t.icon && Object.assign(c, {"display": "none"}), this.icon.setAttribute("style", inlineStyle$1(c)), this.icon.textContent = "loading" === t.icon ? "" : ""
                    } else if (!t.image && n.icon !== t.icon) {
                        var l = "loading" === t.icon ? a : i;
                        "none" === t.icon && Object.assign(l, {"display": "none"}), this.icon.setAttribute("style", inlineStyle$1(l)), this.icon.textContent = "loading" === t.icon ? "" : ""
                    }
                    "none" === t.icon && Object.assign(o, {
                        "min-height": "0",
                        "padding": "10px 15px"
                    }), this.toast.setAttribute("style", inlineStyle$1(o)), Object.assign(n, t), this.el.style.display = "block", setTimeout(function () {
                        e.el.style.opacity = "1"
                    }, 0), this.type = n._type, n.duration >= 0 && this.hide(n.duration, this.type);
                    var u = "loading" === this.type ? "showLoading:ok" : "showToast:ok";
                    return n.success && n.success({"errMsg": u}), n.complete && n.complete({"errMsg": u}), Promise.resolve({"errMsg": u})
                }
            }, {
                "key": "hide", "value": function hide() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    this.type === n && (this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function () {
                        e.el.style.opacity = "0", setTimeout(function () {
                            e.el.style.display = "none"
                        }, 100)
                    }, t))
                }
            }]), Toast
        }(), Pe = function () {
            function Modal() {
                _classCallCheck(this, Modal);
                var e = function noop() {
                };
                this.options = {
                    "title": "",
                    "content": "",
                    "showCancel": !0,
                    "cancelText": "取消",
                    "cancelColor": "#000000",
                    "confirmText": "确定",
                    "confirmColor": "#3CC51F",
                    "success": e,
                    "fail": e,
                    "complete": e
                }
            }

            return _createClass(Modal, [{
                "key": "getstyle", "value": function getstyle(e) {
                    return {
                        "maskStyle": {
                            "position": "fixed",
                            "z-index": "1000",
                            "top": "0",
                            "right": "0",
                            "left": "0",
                            "bottom": "0",
                            "background": "rgba(0,0,0,0.6)"
                        },
                        "modalStyle": {
                            "z-index": "4999",
                            "position": "fixed",
                            "top": "50%",
                            "left": "50%",
                            "transform": "translate(-50%, -50%)",
                            "width": "80%",
                            "max-width": "300px",
                            "border-radius": "3px",
                            "text-align": "center",
                            "line-height": "1.6",
                            "overflow": "hidden",
                            "background": "#FFFFFF"
                        },
                        "titleStyle": {"padding": "20px 24px 9px", "font-size": "18px"},
                        "textStyle": {
                            "padding": "0 24px 12px",
                            "min-height": "40px",
                            "font-size": "15px",
                            "line-height": "1.3",
                            "color": "#808080"
                        },
                        "footStyle": {
                            "position": "relative",
                            "line-height": "48px",
                            "font-size": "18px",
                            "display": "flex"
                        },
                        "btnStyle": {"position": "relative", "-webkit-box-flex": "1", "-webkit-flex": "1", "flex": "1"}
                    }
                }
            }, {
                "key": "create", "value": function create() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = this.getstyle(), r = n.maskStyle, o = n.modalStyle, i = n.titleStyle, a = n.textStyle,
                        s = n.footStyle, c = n.btnStyle;
                    Object.assign(this.options, t);
                    var l = this.options;
                    this.el = document.createElement("div"), this.el.className = "taro__modal", this.el.style.opacity = "0", this.el.style.transition = "opacity 0.2s linear";
                    var u = document.createElement("div");
                    u.setAttribute("style", inlineStyle$1(r));
                    var p = document.createElement("div");
                    p.setAttribute("style", inlineStyle$1(o));
                    var f = l.title ? i : Object.assign({}, i, {"display": "none"});
                    this.title = document.createElement("div"), this.title.setAttribute("style", inlineStyle$1(f)), this.title.textContent = l.title;
                    var d = l.title ? a : Object.assign({}, a, {"padding": "40px 20px 26px", "color": "#353535"});
                    this.text = document.createElement("div"), this.text.setAttribute("style", inlineStyle$1(d)), this.text.textContent = l.content;
                    var A = document.createElement("div");
                    A.className = "taro-modal__foot", A.setAttribute("style", inlineStyle$1(s));
                    var h = Object.assign({}, c, {"color": l.cancelColor, "display": l.showCancel ? "block" : "none"});
                    return this.cancel = document.createElement("div"), this.cancel.className = "taro-model__btn", this.cancel.setAttribute("style", inlineStyle$1(h)), this.cancel.textContent = l.cancelText, this.cancel.onclick = function () {
                        e.hide();
                        var t = e.getRes("cancel");
                        l.success(t), l.complete(t), e.resolveHandler(t)
                    }, this.confirm = document.createElement("div"), this.confirm.className = "taro-model__btn", this.confirm.setAttribute("style", inlineStyle$1(c)), this.confirm.style.color = l.confirmColor, this.confirm.textContent = l.confirmText, this.confirm.onclick = function () {
                        e.hide();
                        var t = e.getRes("confirm");
                        l.success(t), l.complete(t), e.resolveHandler(t)
                    }, A.appendChild(this.cancel), A.appendChild(this.confirm), p.appendChild(this.title), p.appendChild(this.text), p.appendChild(A), this.el.appendChild(u), this.el.appendChild(p), document.body.appendChild(this.el), setTimeout(function () {
                        e.el.style.opacity = "1"
                    }, 0), new Promise(function (t) {
                        return e.resolveHandler = t
                    })
                }
            }, {
                "key": "getRes", "value": function getRes(e) {
                    var t = {"errMsg": "showModal:ok", "cancel": !1, "confirm": !1};
                    return t[e] = !0, t
                }
            }, {
                "key": "show", "value": function show() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = this.options, r = this.getstyle().textStyle;
                    if (n.title !== t.title) if (this.title.textContent = t.title, t.title) n.title || (this.title.style.display = "block", this.text.setAttribute("style", inlineStyle$1(r))); else {
                        this.title.style.display = "none";
                        var o = Object.assign({}, r, {"padding": "40px 20px 26px", "color": "#353535"});
                        this.text.setAttribute("style", inlineStyle$1(o))
                    }
                    return n.content !== t.content && (this.text.textContent = t.content), n.showCancel !== t.showCancel && (this.cancel.style.display = t.showCancel ? "block" : "none"), n.cancelText !== t.cancelText && (this.cancel.textContent = t.cancelText), n.cancelColor !== t.cancelColor && (this.cancel.style.color = t.cancelColor), n.confirmText !== t.confirmText && (this.confirm.textContent = t.confirmText), n.confirmColor !== t.confirmColor && (this.confirm.style.color = t.confirmColor), Object.assign(n, t), this.cancel.onclick = function () {
                        e.hide();
                        var t = e.getRes("cancel");
                        n.success(t), n.complete(t), e.resolveHandler(t)
                    }, this.confirm.onclick = function () {
                        e.hide();
                        var t = e.getRes("confirm");
                        n.success(t), n.complete(t), e.resolveHandler(t)
                    }, this.el.style.display = "block", setTimeout(function () {
                        e.el.style.opacity = "1"
                    }, 0), new Promise(function (t) {
                        return e.resolveHandler = t
                    })
                }
            }, {
                "key": "hide", "value": function hide() {
                    var e = this;
                    setTimeout(function () {
                        e.el.style.opacity = "0", setTimeout(function () {
                            e.el.style.display = "none"
                        }, 200)
                    }, 0)
                }
            }]), Modal
        }(), Ce = function () {
            function ActionSheet() {
                _classCallCheck(this, ActionSheet);
                var e = function noop() {
                };
                this.options = {"itemList": [], "itemColor": "#000000", "success": e, "fail": e, "complete": e}
            }

            return _createClass(ActionSheet, [{
                "key": "getStyle", "value": function getStyle() {
                    return {
                        "maskStyle": {
                            "position": "fixed",
                            "z-index": "1000",
                            "top": "0",
                            "right": "0",
                            "left": "0",
                            "bottom": "0",
                            "background": "rgba(0,0,0,0.6)"
                        },
                        "actionSheetStyle": {
                            "z-index": "4999",
                            "position": "fixed",
                            "left": "0",
                            "bottom": "0",
                            "-webkit-transform": "translate(0, 100%)",
                            "transform": "translate(0, 100%)",
                            "width": "100%",
                            "line-height": "1.6",
                            "background": "#EFEFF4",
                            "-webkit-transition": "-webkit-transform .3s",
                            "transition": "transform .3s"
                        },
                        "menuStyle": {"background-color": "#FCFCFD"},
                        "cellStyle": {
                            "position": "relative",
                            "padding": "10px 0",
                            "text-align": "center",
                            "font-size": "18px"
                        },
                        "cancelStyle": {
                            "margin-top": "6px",
                            "padding": "10px 0",
                            "text-align": "center",
                            "font-size": "18px",
                            "color": "#000000",
                            "background-color": "#FCFCFD"
                        }
                    }
                }
            }, {
                "key": "create", "value": function create() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = this.getStyle(), r = n.maskStyle, o = n.actionSheetStyle, i = n.menuStyle, a = n.cellStyle,
                        s = n.cancelStyle;
                    Object.assign(this.options, t);
                    var c = this.options;
                    this.el = document.createElement("div"), this.el.className = "taro__actionSheet", this.el.style.opacity = "0", this.el.style.transition = "opacity 0.2s linear";
                    var l = document.createElement("div");
                    l.setAttribute("style", inlineStyle$1(r)), this.actionSheet = document.createElement("div"), this.actionSheet.setAttribute("style", inlineStyle$1(o)), this.menu = document.createElement("div"), this.menu.setAttribute("style", inlineStyle$1(Object.assign({}, i, {"color": c.itemColor}))), this.cells = t.itemList.map(function (t, n) {
                        var r = document.createElement("div");
                        return r.className = "taro-actionsheet__cell", r.setAttribute("style", inlineStyle$1(a)), r.textContent = t, r.dataset.tapIndex = n, r.onclick = function (t) {
                            return e.onCellClick(t)
                        }, r
                    }), this.cancel = document.createElement("div"), this.cancel.setAttribute("style", inlineStyle$1(s)), this.cancel.textContent = "取消", this.cells.forEach(function (t) {
                        return e.menu.appendChild(t)
                    }), this.actionSheet.appendChild(this.menu), this.actionSheet.appendChild(this.cancel), this.el.appendChild(l), this.el.appendChild(this.actionSheet);
                    var u = function cb() {
                        e.hide();
                        var t = {"errMsg": "showActionSheet:fail cancel"};
                        c.fail(t), c.complete(t), e.rejectHandler(t)
                    };
                    return l.onclick = u, this.cancel.onclick = u, document.body.appendChild(this.el), setTimeout(function () {
                        e.el.style.opacity = "1", setTransform(e.actionSheet, "translate(0, 0)")
                    }, 0), new Promise(function (t, n) {
                        e.resolveHandler = t, e.rejectHandler = n
                    })
                }
            }, {
                "key": "show", "value": function show() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = this.options;
                    n.itemColor !== t.itemColor && (this.menu.style.color = t.itemColor), Object.assign(n, t);
                    var r = this.getStyle().cellStyle;
                    t.itemList.forEach(function (t, n) {
                        if (e.cells[n]) e.cells[n].textContent === t || (e.cells[n].textContent = t); else {
                            var o = document.createElement("div");
                            o.className = "taro-actionsheet__cell", o.setAttribute("style", inlineStyle$1(r)), o.textContent = t, o.dataset.tapIndex = n, o.onclick = function (t) {
                                return e.onCellClick(t)
                            }, e.cells.push(o), e.menu.appendChild(o)
                        }
                    });
                    var o = this.cells.length, i = t.itemList.length;
                    if (o > i) {
                        for (var a = i; a < o; a++) this.menu.removeChild(this.cells[a]);
                        this.cells.splice(i, o - i)
                    }
                    return this.el.style.display = "block", setTimeout(function () {
                        e.el.style.opacity = "1", setTransform(e.actionSheet, "translate(0, 0)")
                    }, 0), new Promise(function (t, n) {
                        e.resolveHandler = t, e.rejectHandler = n
                    })
                }
            }, {
                "key": "onCellClick", "value": function onCellClick(e) {
                    this.hide();
                    var t = {"errMsg": "showActionSheet:ok", "tapIndex": +e.currentTarget.dataset.tapIndex};
                    this.options.success(t), this.options.complete(t), this.resolveHandler(t)
                }
            }, {
                "key": "hide", "value": function hide() {
                    var e = this;
                    setTimeout(function () {
                        e.el.style.opacity = "0", setTransform(e.actionSheet, "translate(0, 100%)"), setTimeout(function () {
                            e.el.style.display = "none"
                        }, 200)
                    }, 0)
                }
            }]), ActionSheet
        }(), Me = "default";

        function init(e) {
            if ("ready" !== Me) {
                var t = e.createElement("style");
                t.textContent = '@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJWs0t/AAABfAAAAFZjbWFwqVgGvgAAAeAAAAGGZ2x5Zph7qG0AAANwAAAAdGhlYWQRFoGhAAAA4AAAADZoaGVhCCsD7AAAALwAAAAkaG10eAg0AAAAAAHUAAAADGxvY2EADAA6AAADaAAAAAhtYXhwAQ4AJAAAARgAAAAgbmFtZYrphEEAAAPkAAACVXBvc3S3shtSAAAGPAAAADUAAQAAA+gAAABaA+gAAAAAA+gAAQAAAAAAAAAAAAAAAAAAAAMAAQAAAAEAAADih+FfDzz1AAsD6AAAAADXB57LAAAAANcHnssAAP/sA+gDOgAAAAgAAgAAAAAAAAABAAAAAwAYAAEAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQK8AZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABAAHjqCAPoAAAAWgPoABQAAAABAAAAAAAAA+gAAABkAAAD6AAAAAAABQAAAAMAAAAsAAAABAAAAV4AAQAAAAAAWAADAAEAAAAsAAMACgAAAV4ABAAsAAAABgAEAAEAAgB46gj//wAAAHjqCP//AAAAAAABAAYABgAAAAEAAgAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAKAAAAAAAAAACAAAAeAAAAHgAAAABAADqCAAA6ggAAAACAAAAAAAAAAwAOgABAAD/7AAyABQAAgAANzMVFB4UKAAAAAABAAAAAAO7AzoAFwAAEy4BPwE+AR8BFjY3ATYWFycWFAcBBiInPQoGBwUHGgzLDCELAh0LHwsNCgr9uQoeCgGzCyEOCw0HCZMJAQoBvgkCCg0LHQv9sQsKAAAAAAAAEgDeAAEAAAAAAAAAHQAAAAEAAAAAAAEABAAdAAEAAAAAAAIABwAhAAEAAAAAAAMABAAoAAEAAAAAAAQABAAsAAEAAAAAAAUACwAwAAEAAAAAAAYABAA7AAEAAAAAAAoAKwA/AAEAAAAAAAsAEwBqAAMAAQQJAAAAOgB9AAMAAQQJAAEACAC3AAMAAQQJAAIADgC/AAMAAQQJAAMACADNAAMAAQQJAAQACADVAAMAAQQJAAUAFgDdAAMAAQQJAAYACADzAAMAAQQJAAoAVgD7AAMAAQQJAAsAJgFRCiAgQ3JlYXRlZCBieSBmb250LWNhcnJpZXIKICB3ZXVpUmVndWxhcndldWl3ZXVpVmVyc2lvbiAxLjB3ZXVpR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgAgACAAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGYAbwBuAHQALQBjAGEAcgByAGkAZQByAAoAIAAgAHcAZQB1AGkAUgBlAGcAdQBsAGEAcgB3AGUAdQBpAHcAZQB1AGkAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQB1AGkARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwECAQMBBAABeAd1bmlFQTA4AAAAAAA=") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}', e.querySelector("head").appendChild(t), Me = "ready"
            }
        }

        var Ge = new ve, we = new Pe, Be = new Ce;
        var ke = Object.freeze({
            "showToast": function showToast() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                init(document), (e = Object.assign({}, {
                    "title": "",
                    "icon": "success",
                    "image": "",
                    "duration": 1500,
                    "mask": !1
                }, e))._type = "toast";
                var t = errorHandler(e.fail, e.complete);
                return "string" != typeof e.title ? t({
                    "errMsg": getParameterError({
                        "name": "showToast",
                        "para": "title",
                        "correct": "String",
                        "wrong": e.title
                    })
                }) : "number" != typeof e.duration ? t({
                    "errMsg": getParameterError({
                        "name": "showToast",
                        "para": "duration",
                        "correct": "Number",
                        "wrong": e.duration
                    })
                }) : (e.image && "string" != typeof e.image && (e.image = ""), e.mask = !!e.mask, Ge.el ? Ge.show(e) : Ge.create(e))
            }, "hideToast": function hideToast() {
                Ge.el && Ge.hide(0, "toast")
            }, "showLoading": function showLoading() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                init(document), (e = Object.assign({}, {"title": "", "mask": !1}, e, {
                    "icon": "loading",
                    "image": "",
                    "duration": -1
                }))._type = "loading";
                var t = errorHandler(e.fail, e.complete);
                return "string" != typeof e.title ? t({
                    "errMsg": getParameterError({
                        "name": "showLoading",
                        "para": "title",
                        "correct": "String",
                        "wrong": e.title
                    })
                }) : (e.mask = !!e.mask, Ge.el ? Ge.show(e) : Ge.create(e))
            }, "hideLoading": function hideLoading() {
                Ge.el && Ge.hide(0, "loading")
            }, "showModal": function showModal() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                init(document);
                var t = errorHandler((e = Object.assign({}, {
                    "title": "",
                    "content": "",
                    "showCancel": !0,
                    "cancelText": "取消",
                    "cancelColor": "#000000",
                    "confirmText": "确定",
                    "confirmColor": "#3CC51F"
                }, e)).fail, e.complete);
                return "string" != typeof e.title ? t({
                    "errMsg": getParameterError({
                        "name": "showModal",
                        "para": "title",
                        "correct": "String",
                        "wrong": e.title
                    })
                }) : "string" != typeof e.content ? t({
                    "errMsg": getParameterError({
                        "name": "showModal",
                        "para": "content",
                        "correct": "String",
                        "wrong": e.content
                    })
                }) : "string" != typeof e.cancelText ? t({
                    "errMsg": getParameterError({
                        "name": "showModal",
                        "para": "cancelText",
                        "correct": "String",
                        "wrong": e.cancelText
                    })
                }) : e.cancelText.replace(/[\u0391-\uFFE5]/g, "aa").length > 8 ? t({"errMsg": "showModal:fail cancelText length should not larger then 4 Chinese characters"}) : "string" != typeof e.confirmText ? t({
                    "errMsg": getParameterError({
                        "name": "showModal",
                        "para": "confirmText",
                        "correct": "String",
                        "wrong": e.confirmText
                    })
                }) : e.confirmText.replace(/[\u0391-\uFFE5]/g, "aa").length > 8 ? t({"errMsg": "showModal:fail confirmText length should not larger then 4 Chinese characters"}) : "string" != typeof e.cancelColor ? t({
                    "errMsg": getParameterError({
                        "name": "showModal",
                        "para": "cancelColor",
                        "correct": "String",
                        "wrong": e.cancelColor
                    })
                }) : "string" != typeof e.confirmColor ? t({
                    "errMsg": getParameterError({
                        "name": "showModal",
                        "para": "confirmColor",
                        "correct": "String",
                        "wrong": e.confirmColor
                    })
                }) : (e.showCancel = !!e.showCancel, we.el ? we.show(e) : we.create(e))
            }, "showActionSheet": function showActionSheet() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                init(document);
                var t = errorHandler((e = Object.assign({}, {"itemColor": "#000000"}, e)).fail, e.complete);
                if (!Array.isArray(e.itemList)) return t({
                    "errMsg": getParameterError({
                        "name": "showActionSheet",
                        "para": "itemList",
                        "correct": "Array",
                        "wrong": e.itemList
                    })
                });
                if (e.itemList.length < 1) return t({"errMsg": "showActionSheet:fail parameter error: parameter.itemList should have at least 1 item"});
                if (e.itemList.length > 6) return t({"errMsg": "showActionSheet:fail parameter error: parameter.itemList should not be large than 6"});
                for (var n = 0; n < e.itemList.length; n++) if ("string" != typeof e.itemList[n]) return t({
                    "errMsg": getParameterError({
                        "name": "showActionSheet",
                        "para": "itemList[".concat(n, "]"),
                        "correct": "String",
                        "wrong": e.itemList[n]
                    })
                });
                return "string" != typeof e.itemColor ? t({
                    "errMsg": getParameterError({
                        "name": "showActionSheet",
                        "para": "itemColor",
                        "correct": "String",
                        "wrong": e.itemColor
                    })
                }) : Be.el ? Be.show(e) : Be.create(e)
            }
        });
        var Ie = Object.freeze({
            "initTabBarApis": function initTabBarApis() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t.setTabBarStyle = function setTabBarStyle() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = shouleBeObject(t);
                    if (!n.res) {
                        var r = {"errMsg": "setTabBarStyle".concat(n.msg)};
                        return console.error(r.errMsg), Promise.reject(r)
                    }
                    var o, i = t.color, a = t.selectedColor, s = t.backgroundColor, c = t.borderStyle, l = t.success,
                        u = t.fail, p = t.complete, f = {"errMsg": "setTabBarStyle:ok"};
                    if (i && !/^#\d{6}$/.test(i) ? o = "color" : a && !/^#\d{6}$/.test(a) ? o = "selectedColor" : s && !/^#\d{6}$/.test(s) ? o = "backgroundColor" : c && !/^(black|white)$/.test(c) && (o = "borderStyle"), o) return f.errMsg = "setTabBarStyle:fail invalid ".concat(o), "function" == typeof u && u(f), "function" == typeof p && p(f), Promise.reject(f);
                    if (!e.state.__tabs) return f.errMsg = "setTabBarStyle:fail", Promise.reject(f);
                    var d = {};
                    i && (d.color = i), a && (d.selectedColor = a), s && (d.backgroundColor = s), c && (d.borderStyle = c);
                    var A = Object.assign({}, e.state.__tabs, d);
                    return e.setState && e.setState({"__tabs": A}), "function" == typeof l && l(f), "function" == typeof p && p(f), Promise.resolve(f)
                }, t.setTabBarItem = function setTabBarItem() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = shouleBeObject(t);
                    if (!n.res) {
                        var r = {"errMsg": "setTabBarItem".concat(n.msg)};
                        return console.error(r.errMsg), Promise.reject(r)
                    }
                    var o = t.index, i = t.text, a = t.iconPath, s = t.selectedIconPath, c = t.success, l = t.fail,
                        u = t.complete, p = {"errMsg": "setTabBarItem:ok"};
                    if ("number" != typeof o) return p.errMsg = getParameterError({
                        "name": "setTabBarItem",
                        "para": "index",
                        "correct": "Number",
                        "wrong": o
                    }), console.error(p.errMsg), "function" == typeof l && l(p), "function" == typeof u && u(p), Promise.reject(p);
                    if (!e.state.__tabs || !e.state.__tabs.list || !e.state.__tabs.list[o]) return p.errMsg = "setTabBarItem:fail tabbar item not found", "function" == typeof l && l(p), "function" == typeof u && u(p), Promise.reject(p);
                    var f = {};
                    i && (f.text = i), a && (f.iconPath = a), s && (f.selectedIconPath = s);
                    var d = Object.assign({}, e.state.__tabs);
                    return d.list[o] = Object.assign({}, d.list[o], f), e.setState && e.setState({"__tabs": d}), "function" == typeof c && c(p), "function" == typeof u && u(p), Promise.resolve(p)
                }
            }
        });
        var Ee = function createCommonjsModule(e, t) {
            return e(t = {"exports": {}}, t.exports), t.exports
        }(function (e) {
            (function (t) {
                if (e.exports) return function (t) {
                    e.exports = t()
                };
                if ("undefined" != typeof window) return function (e) {
                    window.MobileDetect = e()
                };
                throw new Error("unknown environment")
            })()(function () {
                var e, t = {
                    "mobileDetectRules": {
                        "phones": {
                            "iPhone": "\\biPhone\\b|\\biPod\\b",
                            "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
                            "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                            "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                            "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                            "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                            "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
                            "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)",
                            "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                            "Asus": "Asus.*Galaxy|PadFone.*Mobile",
                            "NokiaLumia": "Lumia [0-9]{3,4}",
                            "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                            "Palm": "PalmSource|Palm",
                            "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                            "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                            "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                            "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                            "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                            "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                            "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                            "Alcatel": "Alcatel",
                            "Nintendo": "Nintendo (3DS|Switch)",
                            "Amoi": "Amoi",
                            "INQ": "INQ",
                            "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                        },
                        "tablets": {
                            "iPad": "iPad|iPad.*Mobile",
                            "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
                            "GoogleTablet": "Android.*Pixel C",
                            "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835",
                            "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                            "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                            "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                            "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                            "BlackBerryTablet": "PlayBook|RIM Tablet",
                            "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                            "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                            "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                            "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                            "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                            "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                            "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                            "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                            "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F|TB2-X30L",
                            "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                            "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                            "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                            "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                            "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                            "IRUTablet": "M702pro",
                            "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                            "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                            "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                            "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                            "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                            "NokiaLumiaTablet": "Lumia 2520",
                            "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                            "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                            "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                            "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                            "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                            "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                            "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                            "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                            "FlyTablet": "IQ310|Fly Vision",
                            "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                            "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09",
                            "NecTablet": "\\bN-06D|\\bN-08D",
                            "PantechTablet": "Pantech.*P4100",
                            "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
                            "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                            "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                            "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
                            "NabiTablet": "Android.*\\bNabi",
                            "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                            "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                            "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                            "PlaystationTablet": "Playstation.*(Portable|Vita)",
                            "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                            "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                            "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                            "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                            "GalapadTablet": "Android.*\\bG1\\b(?!\\))",
                            "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                            "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                            "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                            "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                            "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                            "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                            "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
                            "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                            "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                            "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                            "DPSTablet": "DPS Dream 9|DPS Dual 7",
                            "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                            "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                            "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
                            "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
                            "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                            "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                            "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                            "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
                            "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                            "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                            "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                            "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                            "iMobileTablet": "i-mobile i-note",
                            "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
                            "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                            "AMPETablet": "Android.* A78 ",
                            "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                            "TecnoTablet": "TECNO P9|TECNO DP8D",
                            "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                            "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                            "FX2Tablet": "FX2 PAD7|FX2 PAD10",
                            "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                            "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                            "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                            "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                            "CaptivaTablet": "CAPTIVA PAD",
                            "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                            "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                            "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                            "JaytechTablet": "TPC-PA762",
                            "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
                            "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                            "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                            "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                            "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                            "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                            "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                            "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                            "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                            "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                            "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
                            "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                            "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                            "UbislateTablet": "UbiSlate[\\s]?7C",
                            "PocketBookTablet": "Pocketbook",
                            "KocasoTablet": "\\b(TB-1207)\\b",
                            "HisenseTablet": "\\b(F5281|E2371)\\b",
                            "Hudl": "Hudl HT7S3|Hudl 2",
                            "TelstraTablet": "T-Hub2",
                            "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                        },
                        "oss": {
                            "AndroidOS": "Android",
                            "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
                            "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                            "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                            "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                            "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                            "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                            "MeeGoOS": "MeeGo",
                            "MaemoOS": "Maemo",
                            "JavaOS": "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                            "webOS": "webOS|hpwOS",
                            "badaOS": "\\bBada\\b",
                            "BREWOS": "BREW"
                        },
                        "uas": {
                            "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                            "Dolfin": "\\bDolfin\\b",
                            "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                            "Skyfire": "Skyfire",
                            "Edge": "Mobile Safari/[.0-9]* Edge",
                            "IE": "IEMobile|MSIEMobile",
                            "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                            "Bolt": "bolt",
                            "TeaShark": "teashark",
                            "Blazer": "Blazer",
                            "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                            "WeChat": "\\bMicroMessenger\\b",
                            "UCBrowser": "UC.*Browser|UCWEB",
                            "baiduboxapp": "baiduboxapp",
                            "baidubrowser": "baidubrowser",
                            "DiigoBrowser": "DiigoBrowser",
                            "Puffin": "Puffin",
                            "Mercury": "\\bMercury\\b",
                            "ObigoBrowser": "Obigo",
                            "NetFront": "NF-Browser",
                            "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                            "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
                        },
                        "props": {
                            "Mobile": "Mobile/[VER]",
                            "Build": "Build/[VER]",
                            "Version": "Version/[VER]",
                            "VendorID": "VendorID/[VER]",
                            "iPad": "iPad.*CPU[a-z ]+[VER]",
                            "iPhone": "iPhone.*CPU[a-z ]+[VER]",
                            "iPod": "iPod.*CPU[a-z ]+[VER]",
                            "Kindle": "Kindle/[VER]",
                            "Chrome": ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                            "Coast": ["Coast/[VER]"],
                            "Dolfin": "Dolfin/[VER]",
                            "Firefox": ["Firefox/[VER]", "FxiOS/[VER]"],
                            "Fennec": "Fennec/[VER]",
                            "Edge": "Edge/[VER]",
                            "IE": ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                            "NetFront": "NetFront/[VER]",
                            "NokiaBrowser": "NokiaBrowser/[VER]",
                            "Opera": [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                            "Opera Mini": "Opera Mini/[VER]",
                            "Opera Mobi": "Version/[VER]",
                            "UCBrowser": ["UCWEB[VER]", "UC.*Browser/[VER]"],
                            "MQQBrowser": "MQQBrowser/[VER]",
                            "MicroMessenger": "MicroMessenger/[VER]",
                            "baiduboxapp": "baiduboxapp/[VER]",
                            "baidubrowser": "baidubrowser/[VER]",
                            "SamsungBrowser": "SamsungBrowser/[VER]",
                            "Iron": "Iron/[VER]",
                            "Safari": ["Version/[VER]", "Safari/[VER]"],
                            "Skyfire": "Skyfire/[VER]",
                            "Tizen": "Tizen/[VER]",
                            "Webkit": "webkit[ /][VER]",
                            "PaleMoon": "PaleMoon/[VER]",
                            "Gecko": "Gecko/[VER]",
                            "Trident": "Trident/[VER]",
                            "Presto": "Presto/[VER]",
                            "Goanna": "Goanna/[VER]",
                            "iOS": " \\bi?OS\\b [VER][ ;]{1}",
                            "Android": "Android [VER]",
                            "BlackBerry": ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                            "BREW": "BREW [VER]",
                            "Java": "Java/[VER]",
                            "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                            "Windows Phone": "Windows Phone [VER]",
                            "Windows CE": "Windows CE/[VER]",
                            "Windows NT": "Windows NT [VER]",
                            "Symbian": ["SymbianOS/[VER]", "Symbian/[VER]"],
                            "webOS": ["webOS/[VER]", "hpwOS/[VER];"]
                        },
                        "utils": {
                            "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                            "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                            "DesktopMode": "WPDesktop",
                            "TV": "SonyDTV|HbbTV",
                            "WebKit": "(webkit)[ /]([\\w.]+)",
                            "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                            "Watch": "SM-V700"
                        }
                    },
                    "detectMobileBrowsers": {
                        "fullPattern": /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                        "shortPattern": /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        "tabletPattern": /android|ipad|playbook|silk/i
                    }
                }, n = Object.prototype.hasOwnProperty;

                function equalIC(e, t) {
                    return null != e && null != t && e.toLowerCase() === t.toLowerCase()
                }

                function containsIC(e, t) {
                    var n, r, o = e.length;
                    if (!o || !t) return !1;
                    for (n = t.toLowerCase(), r = 0; r < o; ++r) if (n === e[r].toLowerCase()) return !0;
                    return !1
                }

                function convertPropsToRegExp(e) {
                    for (var t in e) n.call(e, t) && (e[t] = new RegExp(e[t], "i"))
                }

                function MobileDetect(e, t) {
                    this.ua = function prepareUserAgent(e) {
                        return (e || "").substr(0, 500)
                    }(e), this._cache = {}, this.maxPhoneWidth = t || 600
                }

                return t.FALLBACK_PHONE = "UnknownPhone", t.FALLBACK_TABLET = "UnknownTablet", t.FALLBACK_MOBILE = "UnknownMobile", e = "isArray" in Array ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, function init() {
                    var r, o, i, a, s, c, l = t.mobileDetectRules;
                    for (r in l.props) if (n.call(l.props, r)) {
                        for (o = l.props[r], e(o) || (o = [o]), s = o.length, a = 0; a < s; ++a) (c = (i = o[a]).indexOf("[VER]")) >= 0 && (i = i.substring(0, c) + "([\\w._\\+]+)" + i.substring(c + 5)), o[a] = new RegExp(i, "i");
                        l.props[r] = o
                    }
                    convertPropsToRegExp(l.oss), convertPropsToRegExp(l.phones), convertPropsToRegExp(l.tablets), convertPropsToRegExp(l.uas), convertPropsToRegExp(l.utils), l.oss0 = {
                        "WindowsPhoneOS": l.oss.WindowsPhoneOS,
                        "WindowsMobileOS": l.oss.WindowsMobileOS
                    }
                }(), t.findMatch = function (e, t) {
                    for (var r in e) if (n.call(e, r) && e[r].test(t)) return r;
                    return null
                }, t.findMatches = function (e, t) {
                    var r = [];
                    for (var o in e) n.call(e, o) && e[o].test(t) && r.push(o);
                    return r
                }, t.getVersionStr = function (e, r) {
                    var o, i, a, s, c = t.mobileDetectRules.props;
                    if (n.call(c, e)) for (a = (o = c[e]).length, i = 0; i < a; ++i) if (null !== (s = o[i].exec(r))) return s[1];
                    return null
                }, t.getVersion = function (e, n) {
                    var r = t.getVersionStr(e, n);
                    return r ? t.prepareVersionNo(r) : NaN
                }, t.prepareVersionNo = function (e) {
                    var t;
                    return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]), t.length > 1 && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
                }, t.isMobileFallback = function (e) {
                    return t.detectMobileBrowsers.fullPattern.test(e) || t.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
                }, t.isTabletFallback = function (e) {
                    return t.detectMobileBrowsers.tabletPattern.test(e)
                }, t.prepareDetectionCache = function (e, n, r) {
                    if (void 0 === e.mobile) {
                        var o, i, a;
                        if (i = t.findMatch(t.mobileDetectRules.tablets, n)) return e.mobile = e.tablet = i, void(e.phone = null);
                        if (o = t.findMatch(t.mobileDetectRules.phones, n)) return e.mobile = e.phone = o, void(e.tablet = null);
                        t.isMobileFallback(n) ? void 0 === (a = MobileDetect.isPhoneSized(r)) ? (e.mobile = t.FALLBACK_MOBILE, e.tablet = e.phone = null) : a ? (e.mobile = e.phone = t.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = t.FALLBACK_TABLET, e.phone = null) : t.isTabletFallback(n) ? (e.mobile = e.tablet = t.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null
                    }
                }, t.mobileGrade = function (e) {
                    var t = null !== e.mobile();
                    return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C")
                }, t.detectOS = function (e) {
                    return t.findMatch(t.mobileDetectRules.oss0, e) || t.findMatch(t.mobileDetectRules.oss, e)
                }, t.getDeviceSmallerSide = function () {
                    return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                }, MobileDetect.prototype = {
                    "constructor": MobileDetect, "mobile": function mobile() {
                        return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                    }, "phone": function phone() {
                        return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                    }, "tablet": function tablet() {
                        return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                    }, "userAgent": function userAgent() {
                        return void 0 === this._cache.userAgent && (this._cache.userAgent = t.findMatch(t.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                    }, "userAgents": function userAgents() {
                        return void 0 === this._cache.userAgents && (this._cache.userAgents = t.findMatches(t.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                    }, "os": function os() {
                        return void 0 === this._cache.os && (this._cache.os = t.detectOS(this.ua)), this._cache.os
                    }, "version": function version(e) {
                        return t.getVersion(e, this.ua)
                    }, "versionStr": function versionStr(e) {
                        return t.getVersionStr(e, this.ua)
                    }, "is": function is(e) {
                        return containsIC(this.userAgents(), e) || equalIC(e, this.os()) || equalIC(e, this.phone()) || equalIC(e, this.tablet()) || containsIC(t.findMatches(t.mobileDetectRules.utils, this.ua), e)
                    }, "match": function match(e) {
                        return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
                    }, "isPhoneSized": function isPhoneSized(e) {
                        return MobileDetect.isPhoneSized(e || this.maxPhoneWidth)
                    }, "mobileGrade": function mobileGrade() {
                        return void 0 === this._cache.grade && (this._cache.grade = t.mobileGrade(this)), this._cache.grade
                    }
                }, "undefined" != typeof window && window.screen ? MobileDetect.isPhoneSized = function (e) {
                    return e < 0 ? void 0 : t.getDeviceSmallerSide() <= e
                } : MobileDetect.isPhoneSized = function () {
                }, MobileDetect._impl = t, MobileDetect.version = "1.4.3 2018-09-08", MobileDetect
            })
        });

        function getSystemInfoSync() {
            var e = new Ee(navigator.userAgent);
            return {
                "brand": e.mobile(),
                "model": e.mobile(),
                "system": e.os(),
                "pixelRatio": window.devicePixelRatio,
                "screenWidth": window.screen.width,
                "screenHeight": window.screen.height,
                "windowWidth": document.documentElement.clientWidth,
                "windowHeight": document.documentElement.clientHeight,
                "version": "",
                "statusBarHeight": "",
                "platform": navigator.platform,
                "language": navigator.language,
                "fontSizeSetting": "",
                "SDKVersion": ""
            }
        }

        function getConnection() {
            return navigator.connection || navigator.mozConnection || navigator.webkitConnection || navigator.msConnection
        }

        function getNetworkType() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = getConnection(),
                n = e.success, r = e.complete, o = {"errMsg": "getNetworkType:ok"};
            if (!t) return o.networkType = "unknown", "function" == typeof n && n(o), "function" == typeof r && r(o), Promise.resolve(o);
            var i = "unknown";
            if (isNaN(Number(t.type))) t.type ? i = t.type : t.effectiveType && (i = t.effectiveType); else switch (t.type) {
                case t.WIFI:
                    i = "wifi";
                    break;
                case t.CELL_3G:
                    i = "3g";
                    break;
                case t.CELL_2G:
                    i = "2g";
                    break;
                default:
                    i = "unknown"
            }
            return o.networkType = i, "function" == typeof n && n(o), "function" == typeof r && r(o), Promise.resolve(o)
        }

        for (var He = Object.freeze({
            "getSystemInfo": function getSystemInfo() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.success,
                    n = e.complete;
                return new Promise(function (e) {
                    var r = getSystemInfoSync();
                    "function" == typeof t && t(r), "function" == typeof n && n(r), e(r)
                })
            },
            "getSystemInfoSync": getSystemInfoSync,
            "getNetworkType": getNetworkType,
            "onNetworkStatusChange": function onNetworkStatusChange(e) {
                var t = getConnection();
                t && t.addEventListener("change", function () {
                    getNetworkType().then(function (t) {
                        var n = t.networkType;
                        e({"isConnected": "none" !== n, "networkType": n})
                    })
                })
            }
        }), _e = function toByteArray(e) {
            for (var t, n = function getLens(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                -1 === n && (n = t);
                return [n, n === t ? 0 : 4 - n % 4]
            }(e), r = n[0], o = n[1], i = new Ne(function _byteLength(e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, r, o)), a = 0, s = o > 0 ? r - 4 : r, c = 0; c < s; c += 4) t = xe[e.charCodeAt(c)] << 18 | xe[e.charCodeAt(c + 1)] << 12 | xe[e.charCodeAt(c + 2)] << 6 | xe[e.charCodeAt(c + 3)], i[a++] = t >> 16 & 255, i[a++] = t >> 8 & 255, i[a++] = 255 & t;
            2 === o && (t = xe[e.charCodeAt(c)] << 2 | xe[e.charCodeAt(c + 1)] >> 4, i[a++] = 255 & t);
            1 === o && (t = xe[e.charCodeAt(c)] << 10 | xe[e.charCodeAt(c + 1)] << 4 | xe[e.charCodeAt(c + 2)] >> 2, i[a++] = t >> 8 & 255, i[a++] = 255 & t);
            return i
        }, Oe = function fromByteArray(e) {
            for (var t, n = e.length, r = n % 3, o = [], i = 0, a = n - r; i < a; i += 16383) o.push(encodeChunk(e, i, i + 16383 > a ? a : i + 16383));
            1 === r ? (t = e[n - 1], o.push(De[t >> 2] + De[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o.push(De[t >> 10] + De[t >> 4 & 63] + De[t << 2 & 63] + "="));
            return o.join("")
        }, De = [], xe = [], Ne = "undefined" != typeof Uint8Array ? Uint8Array : Array, Re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Le = 0, je = Re.length; Le < je; ++Le) De[Le] = Re[Le], xe[Re.charCodeAt(Le)] = Le;

        function encodeChunk(e, t, n) {
            for (var r, o, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(De[(o = r) >> 18 & 63] + De[o >> 12 & 63] + De[o >> 6 & 63] + De[63 & o]);
            return i.join("")
        }

        xe["-".charCodeAt(0)] = 62, xe["_".charCodeAt(0)] = 63;
        var Ve = Object.freeze({
            "arrayBufferToBase64": function arrayBufferToBase64(e) {
                return Oe(e)
            }, "base64ToArrayBuffer": function base64ToArrayBuffer(e) {
                return _e(e)
            }, "makePhoneCall": function makePhoneCall(e) {
                var t = shouleBeObject(e);
                if (!t.res) {
                    var n = {"errMsg": "makePhoneCall".concat(t.msg)};
                    return console.error(n.errMsg), Promise.reject(n)
                }
                var r = e.phoneNumber, o = e.success, i = e.fail, a = e.complete, s = {"errMsg": "makePhoneCall:ok"};
                return "string" != typeof r ? (s.errMsg = getParameterError({
                    "name": "makePhoneCall",
                    "para": "phoneNumber",
                    "correct": "String",
                    "wrong": r
                }), console.error(s.errMsg), "function" == typeof i && i(s), "function" == typeof a && a(s), Promise.reject(s)) : (window.location.href = "tel:".concat(r), "function" == typeof o && o(s), "function" == typeof a && a(s), Promise.resolve(s))
            }
        });
        var Fe = Object.freeze({
            "setNavigationBarTitle": function setNavigationBarTitle(e) {
                var t = shouleBeObject(e);
                if (!t.res) {
                    var n = {"errMsg": "setNavigationBarTitle".concat(t.msg)};
                    return console.error(n.errMsg), Promise.reject(n)
                }
                var r = e.title, o = e.success, i = e.fail, a = e.complete, s = {"errMsg": "setNavigationBarTitle:ok"};
                return r && "string" != typeof r ? (s.errMsg = getParameterError({
                    "name": "setNavigationBarTitle",
                    "para": "title",
                    "correct": "String",
                    "wrong": r
                }), console.error(s.errMsg), "function" == typeof i && i(s), "function" == typeof a && a(s), Promise.reject(s)) : (document.title !== r && (document.title = r), "function" == typeof o && o(s), "function" == typeof a && a(s), Promise.resolve(s))
            }
        });
        var Ue = Object.freeze({
            "chooseImage": function chooseImage(e) {
                var t = shouleBeObject(e);
                if (!t.res) {
                    var n = {"errMsg": "chooseImage".concat(t.msg)};
                    return console.error(n.errMsg), Promise.reject(n)
                }
                var r = e.count, o = void 0 === r ? 1 : r, i = e.success, a = e.fail, s = e.complete,
                    c = {"errMsg": "chooseImage:ok", "tempFilePaths": [], "tempFiles": []};
                if (o && "number" != typeof o) return c.errMsg = getParameterError({
                    "name": "chooseImage",
                    "para": "count",
                    "correct": "Number",
                    "wrong": o
                }), console.error(c.errMsg), "function" == typeof a && a(c), "function" == typeof s && s(c), Promise.reject(c);
                var l, u = document.getElementById("taroChooseImage");
                if (!u) {
                    var p = document.createElement("input");
                    p.setAttribute("type", "file"), p.setAttribute("id", "taroChooseImage"), p.setAttribute("multiple", "multiple"), p.setAttribute("accept", "image/*"), p.setAttribute("style", "position: fixed; top: -4000px; left: -3000px; z-index: -300;"), document.body.appendChild(p), u = document.getElementById("taroChooseImage")
                }
                var f = new Promise(function (e) {
                    l = e
                }), d = document.createEvent("MouseEvents");
                return d.initEvent("click", !0, !0), u.dispatchEvent(d), u.onchange = function (e) {
                    var t = Array.from(e.target.files);
                    t && t.forEach(function (e) {
                        var t = new Blob([e]), n = URL.createObjectURL(t);
                        c.tempFilePaths.push(n), c.tempFiles.push({"path": n, "size": e.size, "type": e.type})
                    }), "function" == typeof i && i(c), "function" == typeof s && s(c), l(c)
                }, f
            }
        });

        function canIUseWebp() {
            return 0 === document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
        }

        function initNativeApi(e) {
            !function processApis(e) {
                var t = Object.assign({}, V, F, U);
                Object.keys(t).forEach(function (t) {
                    e[t] = function () {
                        console.log("暂时不支持 ".concat(t))
                    }
                })
            }(e), e.request = request, e.createSelectorQuery = createSelectorQuery, e.createAnimation = createAnimation, e.initPxTransform = function initPxTransform(e) {
                var t = e.designWidth, n = void 0 === t ? 700 : t, r = e.deviceRatio,
                    o = void 0 === r ? {"640": 1.17, "750": 1, "828": .905} : r;
                this.config = this.config || {}, this.config.designWidth = n, this.config.deviceRatio = o
            }.bind(e), e.pxTransform = function pxTransform(e) {
                var t = this.config.designWidth;
                return Math.ceil(parseInt(e, 10) / 40 * 640 / t * 1e4) / 1e4 + "rem"
            }.bind(e), e.requirePlugin = function () {
                console.error("不支持 API requirePlugin")
            }, e._set$app = function (t) {
                e._$app = t
            }, e.getApp = function () {
                return e._$app
            }, e._set$router = function (t) {
                e._$router = t
            }, e.getRouter = function () {
                return e._$router
            }, e.canIUseWebp = canIUseWebp, Object.assign(e, ge, ke, Ae, Ie, He, Fe, Ue, Ve)
        }

        var We = {
            "initNativeApi": initNativeApi, "Component": function (e) {
                function Component() {
                    return _classCallCheck(this, Component), _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments))
                }

                return function _inherits(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        "constructor": {
                            "value": e,
                            "writable": !0,
                            "configurable": !0
                        }
                    }), t && _setPrototypeOf(e, t)
                }(Component, r.Component), _createClass(Component, [{
                    "key": "$router", "get": function get() {
                        return We.getRouter()
                    }, "set": function set(e) {
                        console.warn('Property "$router" is read-only.')
                    }
                }, {
                    "key": "$app", "get": function get() {
                        return We.getApp()
                    }, "set": function set(e) {
                        console.warn('Property "$app" is read-only.')
                    }
                }]), Component
            }(), "getEnv": function getEnv() {
                return "undefined" != typeof tt && tt.getSystemInfo ? L.TT : "undefined" != typeof wx && wx.getSystemInfo ? L.WEAPP : "undefined" != typeof swan && swan.getSystemInfo ? L.SWAN : "undefined" != typeof my && my.getSystemInfo ? L.ALIPAY : void 0 !== e && e.__fbGenNativeModule ? L.RN : "undefined" != typeof window ? L.WEB : "Unknown environment"
            }, "ENV_TYPE": L, "Events": j, "eventCenter": W, "render": function render() {
            }, "internal_safe_get": function get(e, t, n) {
                var r = null == e ? void 0 : baseGet(e, t);
                return void 0 === r ? n : r
            }, "internal_safe_set": function set$1(e, t, n) {
                return null == e ? e : function baseSet(e, t, n, r) {
                    if (!isObject(e)) return e;
                    for (var o = (t = castPath(t)).length, i = o - 1, a = -1, s = e; null != s && ++a < o;) {
                        var c = toKey(t[a]), l = n;
                        if (a != i) {
                            var u = s[c];
                            void 0 === (l = r ? r(u, c, s) : void 0) && (l = isObject(u) ? u : isIndex(t[a + 1]) ? [] : {})
                        }
                        assignValue(s, c, l), s = s[c]
                    }
                    return e
                }(e, t, n)
            }
        };
        initNativeApi(We), t.Taro = We, t.default = We
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    var r = function () {
        var e;
        if (void 0 !== r) e = r; else if ("undefined" != typeof self) e = self; else try {
            e = Function("return this")()
        } catch (e) {
            throw new Error("global object is unavailable in this environment")
        }
        return e
    }(), o = "undefined" != typeof window;

    function noop() {
    }

    var i = o ? document : {"createElement": noop, "createElementNS": noop, "createTextNode": noop};

    function isNumber(e) {
        return "number" == typeof e
    }

    var a = isFunction(i.createAttributeNS);

    function isString(e) {
        return "string" == typeof e
    }

    function isFunction(e) {
        return "function" == typeof e
    }

    var s = Array.isArray;
    var c,
        l = navigator && navigator.platform && /mac/i.test(navigator.platform) && /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        u = "Promise" in r && !l;
    u && (c = Promise.resolve());
    var p = function (e) {
        for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
        if (e = isFunction(e) ? e.bind.apply(e, [null].concat(t)) : e, u) return c.then(e);
        ("requestAnimationFrame" in r ? requestAnimationFrame : setTimeout)(e)
    };

    function shallowEqual(e, t) {
        if (null === e || null === t) return !1;
        if (Object.is(e, t)) return !0;
        var n = e ? Object.keys(e) : [], r = t ? Object.keys(t) : [];
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++) {
            var i = n[o];
            if (!t.hasOwnProperty(i) || !Object.is(e[i], t[i])) return !1
        }
        return !0
    }

    Object.is = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    var f = function SimpleMap() {
        this.cache = [], this.size = 0
    };
    f.prototype.set = function set(e, t) {
        var n = this.cache.length;
        if (!n) return this.cache.push({"k": e, "v": t}), void(this.size += 1);
        for (var r = 0; r < n; r++) {
            var o = this.cache[r];
            if (o.k === e) return void(o.v = t)
        }
        this.cache.push({"k": e, "v": t}), this.size += 1
    }, f.prototype.get = function get(e) {
        var t = this.cache.length;
        if (t) for (var n = 0; n < t; n++) {
            var r = this.cache[n];
            if (r.k === e) return r.v
        }
    }, f.prototype.has = function has(e) {
        var t = this.cache.length;
        if (!t) return !1;
        for (var n = 0; n < t; n++) {
            if (this.cache[n].k === e) return !0
        }
        return !1
    }, f.prototype.delete = function delete$1(e) {
        for (var t = this.cache.length, n = 0; n < t; n++) {
            if (this.cache[n].k === e) return this.cache.splice(n, 1), this.size -= 1, !0
        }
        return !1
    }, f.prototype.clear = function clear() {
        var e = this.cache.length;
        if (this.size = 0, e) for (; e;) this.cache.pop(), e--
    };
    var d = "Map" in r ? Map : f;

    function isAttrAnEvent(e) {
        return "o" === e[0] && "n" === e[1]
    }

    var A = "assign" in Object ? function (e, t) {
        return t ? (Object.assign(e, t), e) : e
    } : function (e, t) {
        if (!t) return e;
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    };

    function clone(e) {
        return A({}, e)
    }

    var m, T = {"current": null}, b = [], S = {};

    function isNullOrUndef(e) {
        return void 0 === e || null === e
    }

    function isInvalid(e) {
        return isNullOrUndef(e) || !0 === e || !1 === e
    }

    function isVNode(e) {
        return !isNullOrUndef(e) && 2 === e.vtype
    }

    function isComponent(e) {
        return !isInvalid(e) && e.isReactComponent === S
    }

    function isPortal(e, t) {
        return (32 & e) > 0
    }

    function isComposite(e) {
        return !isNullOrUndef(e) && 4 === e.vtype
    }

    function isValidElement(e) {
        return !isNullOrUndef(e) && e.vtype
    }

    function noop$1() {
    }

    !function (e) {
        e[e.Text = 1] = "Text", e[e.Node = 2] = "Node", e[e.Composite = 4] = "Composite", e[e.Stateless = 8] = "Stateless", e[e.Void = 16] = "Void", e[e.Portal = 32] = "Portal"
    }(m || (m = {}));
    var y = {
            "update": function update(e, t, n) {
                var r = null != e && e.ref, o = null != t && t.ref;
                r !== o && (this.detach(e, r, e.dom), this.attach(t, o, n))
            }, "attach": function attach(e, t, n) {
                var r = isComposite(e) ? e.component : n;
                if (isFunction(t)) t(r); else if (isString(t)) {
                    var o = e._owner;
                    o && isFunction(o.render) && (o.refs[t] = r)
                }
            }, "detach": function detach(e, t, n) {
                var r = isComposite(e) ? e.component : n;
                if (isFunction(t)) t(null); else if (isString(t)) {
                    var o = e._owner;
                    o.refs[t] === r && isFunction(o.render) && delete o.refs[t]
                }
            }
        }, g = "oninput", v = "onpropertychange",
        P = o && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform), C = new d, M = {
            "onmousemove": 1,
            "ontouchmove": 1,
            "onmouseleave": 1,
            "onmouseenter": 1,
            "onload": 1,
            "onunload": 1,
            "onscroll": 1,
            "onfocus": 1,
            "onblur": 1,
            "onrowexit": 1,
            "onbeforeunload": 1,
            "onstop": 1,
            "ondragdrop": 1,
            "ondragenter": 1,
            "ondragexit": 1,
            "ondraggesture": 1,
            "ondragover": 1,
            "oncontextmenu": 1,
            "onerror": 1,
            "onabort": 1,
            "oncanplay": 1,
            "oncanplaythrough": 1,
            "ondurationchange": 1,
            "onemptied": 1,
            "onended": 1,
            "onloadeddata": 1,
            "onloadedmetadata": 1,
            "onloadstart": 1,
            "onencrypted": 1,
            "onpause": 1,
            "onplay": 1,
            "onplaying": 1,
            "onprogress": 1,
            "onratechange": 1,
            "onseeking": 1,
            "onseeked": 1,
            "onstalled": 1,
            "onsuspend": 1,
            "ontimeupdate": 1,
            "onvolumechange": 1,
            "onwaiting": 1
        };
    M[v] = 1;
    var G, w, B, k = !1;
    if (o && navigator.userAgent.indexOf("MSIE 9") >= 0) {
        var I = [], E = [];
        i.addEventListener("selectionchange", function () {
            var e = i.activeElement;
            if (detectCanUseOnInputNode(e)) {
                var t = I.indexOf(e), n = I[t] || I.push(e);
                if (n.value !== E[t]) {
                    var r = i.createEvent("CustomEvent");
                    r.initCustomEvent("input", !0, !0, void 0), E[t] = n.value, e.dispatchEvent(r)
                }
            }
        })
    }

    function attachEvent(e, t, n) {
        if ((t = fixEvent(e, t)) !== v) {
            var r = C.get(t);
            if (1 === M[t]) {
                r || (r = new d);
                var o = function attachEventToNode(e, t, n) {
                    var r = function (t) {
                        var r = n.get(e);
                        if (r && r.eventHandler) {
                            var o = {"currentTarget": e};
                            Object.defineProperties(t, {
                                "currentTarget": {
                                    "configurable": !0, "get": function get() {
                                        return o.currentTarget
                                    }
                                }
                            }), r.eventHandler(t)
                        }
                    };
                    return e.addEventListener(parseEventName(t), r, !1), r
                }(e, t, r);
                C.set(t, r), isFunction(n) && r.set(e, {"eventHandler": n, "event": o})
            } else r || ((r = {"items": new d}).event = function attachEventToDocument(e, t, n) {
                var r = function (e) {
                    var t = n.items, r = t.size;
                    if (r > 0) {
                        var o = {"currentTarget": e.target};
                        try {
                            Object.defineProperties(e, {
                                "currentTarget": {
                                    "configurable": !0, "get": function get() {
                                        return o.currentTarget
                                    }
                                }, "stopPropagation": {"value": stopPropagation}
                            })
                        } catch (e) {
                        }
                        !function dispatchEvent(e, t, n, r, o) {
                            var i = n.get(t);
                            if (i && (r--, o.currentTarget = t, Object.defineProperties(e, {"nativeEvent": {"value": e}}), i(e), e.cancelBubble)) return;
                            if (r > 0) {
                                var a = t.parentNode;
                                if (null === a || "click" === e.type && 1 === a.nodeType && a.disabled) return;
                                dispatchEvent(e, a, n, r, o)
                            }
                        }(e, e.target, n.items, r, o)
                    }
                };
                return e.addEventListener(parseEventName(t), r, !1), r
            }(i, t, r), C.set(t, r)), isFunction(n) && (P && (e.onclick = noop$1), r.items.set(e, n))
        } else (function processOnPropertyChangeEvent(e, t) {
            H[e.name] = t, k || (e.addEventListener("focusin", function () {
                unbindOnPropertyChange(), function bindOnPropertyChange(e) {
                    G = e, w = e.value, B = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(G, "value", {
                        "get": function get() {
                            return B.get.call(this)
                        }, "set": function set(e) {
                            w = e, B.set.call(this, e)
                        }
                    }), G.addEventListener("propertychange", propertyChangeHandler, !1)
                }(e)
            }, !1), e.addEventListener("focusout", unbindOnPropertyChange, !1))
        })(e, n)
    }

    function detachEvent(e, t, n) {
        if ((t = fixEvent(e, t)) !== v) {
            var r = C.get(t);
            if (1 === M[t] && r) {
                var o = r.get(e);
                if (o) {
                    e.removeEventListener(parseEventName(t), o.event, !1);
                    var a = r.size;
                    r.delete(e) && 0 === a && C.delete(t)
                }
            } else if (r && r.items) {
                var s = r.items;
                s.delete(e) && 0 === s.size && (i.removeEventListener(parseEventName(t), r.event, !1), C.delete(t))
            }
        }
    }

    "undefined" == typeof Event || Event.prototype.persist || (Event.prototype.persist = noop$1);
    var H = {};

    function propertyChangeHandler(e) {
        if ("value" === e.propertyName) {
            var t = e.target || e.srcElement, n = t.value;
            if (n !== w) {
                w = n;
                var r = H[t.name];
                isFunction(r) && r.call(t, e)
            }
        }
    }

    function unbindOnPropertyChange() {
        G && (delete G.value, G.removeEventListener("propertychange", propertyChangeHandler, !1), G = null, w = null, B = null)
    }

    function detectCanUseOnInputNode(e) {
        var t = e.nodeName && e.nodeName.toLowerCase(), n = e.type;
        return "input" === t && /text|password/.test(n) || "textarea" === t
    }

    function fixEvent(e, t) {
        return t = "onDoubleClick" === t ? "ondblclick" : "onTouchTap" === t ? "onclick" : "onChange" === t && detectCanUseOnInputNode(e) ? g in window ? g : v : t.toLowerCase()
    }

    function parseEventName(e) {
        return e.substr(2)
    }

    function stopPropagation() {
        this.cancelBubble = !0, this.stopImmediatePropagation()
    }

    var _ = {"afterMount": noop$1, "afterUpdate": noop$1, "beforeUnmount": noop$1, "roots": [], "debug": !1};

    function unmountChildren(e, t) {
        if (s(e)) for (var n = 0, r = e.length; n < r; n++) unmount(e[n], t); else unmount(e, t)
    }

    function unmount(e, t) {
        if (!isInvalid(e)) {
            var n = e.vtype, r = e.dom;
            if ((12 & n) > 0) _.beforeUnmount(e), e.destroy(); else if ((2 & n) > 0) {
                var o = e.props, i = e.children, a = e.ref;
                for (var s in unmountChildren(i), o) isAttrAnEvent(s) && detachEvent(r, s, o[s]);
                null !== a && y.detach(e, a, r)
            } else 32 & n && unmountChildren(e.children, e.type);
            isNullOrUndef(t) || isNullOrUndef(r) || t.removeChild(r)
        }
    }

    var O = "http://www.w3.org/1999/xlink", D = "http://www.w3.org/XML/1998/namespace", x = {
        "accentHeight": "accent-height",
        "accumulate": 0,
        "additive": 0,
        "alignmentBaseline": "alignment-baseline",
        "allowReorder": "allowReorder",
        "alphabetic": 0,
        "amplitude": 0,
        "arabicForm": "arabic-form",
        "ascent": 0,
        "attributeName": "attributeName",
        "attributeType": "attributeType",
        "autoReverse": "autoReverse",
        "azimuth": 0,
        "baseFrequency": "baseFrequency",
        "baseProfile": "baseProfile",
        "baselineShift": "baseline-shift",
        "bbox": 0,
        "begin": 0,
        "bias": 0,
        "by": 0,
        "calcMode": "calcMode",
        "capHeight": "cap-height",
        "clip": 0,
        "clipPath": "clip-path",
        "clipRule": "clip-rule",
        "clipPathUnits": "clipPathUnits",
        "colorInterpolation": "color-interpolation",
        "colorInterpolationFilters": "color-interpolation-filters",
        "colorProfile": "color-profile",
        "colorRendering": "color-rendering",
        "contentScriptType": "contentScriptType",
        "contentStyleType": "contentStyleType",
        "cursor": 0,
        "cx": 0,
        "cy": 0,
        "d": 0,
        "decelerate": 0,
        "descent": 0,
        "diffuseConstant": "diffuseConstant",
        "direction": 0,
        "display": 0,
        "divisor": 0,
        "dominantBaseline": "dominant-baseline",
        "dur": 0,
        "dx": 0,
        "dy": 0,
        "edgeMode": "edgeMode",
        "elevation": 0,
        "enableBackground": "enable-background",
        "end": 0,
        "evEvent": "ev:event",
        "exponent": 0,
        "externalResourcesRequired": "externalResourcesRequired",
        "fill": 0,
        "fillOpacity": "fill-opacity",
        "fillRule": "fill-rule",
        "filter": 0,
        "filterRes": "filterRes",
        "filterUnits": "filterUnits",
        "floodColor": "flood-color",
        "floodOpacity": "flood-opacity",
        "focusable": 0,
        "fontFamily": "font-family",
        "fontSize": "font-size",
        "fontSizeAdjust": "font-size-adjust",
        "fontStretch": "font-stretch",
        "fontStyle": "font-style",
        "fontVariant": "font-variant",
        "fontWeight": "font-weight",
        "format": 0,
        "from": 0,
        "fx": 0,
        "fy": 0,
        "g1": 0,
        "g2": 0,
        "glyphName": "glyph-name",
        "glyphOrientationHorizontal": "glyph-orientation-horizontal",
        "glyphOrientationVertical": "glyph-orientation-vertical",
        "glyphRef": "glyphRef",
        "gradientTransform": "gradientTransform",
        "gradientUnits": "gradientUnits",
        "hanging": 0,
        "horizAdvX": "horiz-adv-x",
        "horizOriginX": "horiz-origin-x",
        "ideographic": 0,
        "imageRendering": "image-rendering",
        "in": 0,
        "in2": 0,
        "intercept": 0,
        "k": 0,
        "k1": 0,
        "k2": 0,
        "k3": 0,
        "k4": 0,
        "kernelMatrix": "kernelMatrix",
        "kernelUnitLength": "kernelUnitLength",
        "kerning": 0,
        "keyPoints": "keyPoints",
        "keySplines": "keySplines",
        "keyTimes": "keyTimes",
        "lengthAdjust": "lengthAdjust",
        "letterSpacing": "letter-spacing",
        "lightingColor": "lighting-color",
        "limitingConeAngle": "limitingConeAngle",
        "local": 0,
        "markerEnd": "marker-end",
        "markerMid": "marker-mid",
        "markerStart": "marker-start",
        "markerHeight": "markerHeight",
        "markerUnits": "markerUnits",
        "markerWidth": "markerWidth",
        "mask": 0,
        "maskContentUnits": "maskContentUnits",
        "maskUnits": "maskUnits",
        "mathematical": 0,
        "mode": 0,
        "numOctaves": "numOctaves",
        "offset": 0,
        "opacity": 0,
        "operator": 0,
        "order": 0,
        "orient": 0,
        "orientation": 0,
        "origin": 0,
        "overflow": 0,
        "overlinePosition": "overline-position",
        "overlineThickness": "overline-thickness",
        "paintOrder": "paint-order",
        "panose1": "panose-1",
        "pathLength": "pathLength",
        "patternContentUnits": "patternContentUnits",
        "patternTransform": "patternTransform",
        "patternUnits": "patternUnits",
        "pointerEvents": "pointer-events",
        "points": 0,
        "pointsAtX": "pointsAtX",
        "pointsAtY": "pointsAtY",
        "pointsAtZ": "pointsAtZ",
        "preserveAlpha": "preserveAlpha",
        "preserveAspectRatio": "preserveAspectRatio",
        "primitiveUnits": "primitiveUnits",
        "r": 0,
        "radius": 0,
        "refX": "refX",
        "refY": "refY",
        "renderingIntent": "rendering-intent",
        "repeatCount": "repeatCount",
        "repeatDur": "repeatDur",
        "requiredExtensions": "requiredExtensions",
        "requiredFeatures": "requiredFeatures",
        "restart": 0,
        "result": 0,
        "rotate": 0,
        "rx": 0,
        "ry": 0,
        "scale": 0,
        "seed": 0,
        "shapeRendering": "shape-rendering",
        "slope": 0,
        "spacing": 0,
        "specularConstant": "specularConstant",
        "specularExponent": "specularExponent",
        "speed": 0,
        "spreadMethod": "spreadMethod",
        "startOffset": "startOffset",
        "stdDeviation": "stdDeviation",
        "stemh": 0,
        "stemv": 0,
        "stitchTiles": "stitchTiles",
        "stopColor": "stop-color",
        "stopOpacity": "stop-opacity",
        "strikethroughPosition": "strikethrough-position",
        "strikethroughThickness": "strikethrough-thickness",
        "string": 0,
        "stroke": 0,
        "strokeDasharray": "stroke-dasharray",
        "strokeDashoffset": "stroke-dashoffset",
        "strokeLinecap": "stroke-linecap",
        "strokeLinejoin": "stroke-linejoin",
        "strokeMiterlimit": "stroke-miterlimit",
        "strokeOpacity": "stroke-opacity",
        "strokeWidth": "stroke-width",
        "surfaceScale": "surfaceScale",
        "systemLanguage": "systemLanguage",
        "tableValues": "tableValues",
        "targetX": "targetX",
        "targetY": "targetY",
        "textAnchor": "text-anchor",
        "textDecoration": "text-decoration",
        "textRendering": "text-rendering",
        "textLength": "textLength",
        "to": 0,
        "transform": 0,
        "u1": 0,
        "u2": 0,
        "underlinePosition": "underline-position",
        "underlineThickness": "underline-thickness",
        "unicode": 0,
        "unicodeBidi": "unicode-bidi",
        "unicodeRange": "unicode-range",
        "unitsPerEm": "units-per-em",
        "vAlphabetic": "v-alphabetic",
        "vHanging": "v-hanging",
        "vIdeographic": "v-ideographic",
        "vMathematical": "v-mathematical",
        "values": 0,
        "vectorEffect": "vector-effect",
        "version": 0,
        "vertAdvY": "vert-adv-y",
        "vertOriginX": "vert-origin-x",
        "vertOriginY": "vert-origin-y",
        "viewBox": "viewBox",
        "viewTarget": "viewTarget",
        "visibility": 0,
        "widths": 0,
        "wordSpacing": "word-spacing",
        "writingMode": "writing-mode",
        "x": 0,
        "xHeight": "x-height",
        "x1": 0,
        "x2": 0,
        "xChannelSelector": "xChannelSelector",
        "xlinkActuate": "xlink:actuate",
        "xlinkArcrole": "xlink:arcrole",
        "xlinkHref": "xlink:href",
        "xlinkRole": "xlink:role",
        "xlinkShow": "xlink:show",
        "xlinkTitle": "xlink:title",
        "xlinkType": "xlink:type",
        "xmlBase": "xml:base",
        "xmlId": "xml:id",
        "xmlns": 0,
        "xmlnsXlink": "xmlns:xlink",
        "xmlLang": "xml:lang",
        "xmlSpace": "xml:space",
        "y": 0,
        "y1": 0,
        "y2": 0,
        "yChannelSelector": "yChannelSelector",
        "z": 0,
        "zoomAndPan": "zoomAndPan"
    }, N = {
        "Properties": {},
        "DOMAttributeNamespaces": {
            "ev:event": "http://www.w3.org/2001/xml-events",
            "xlink:actuate": O,
            "xlink:arcrole": O,
            "xlink:href": O,
            "xlink:role": O,
            "xlink:show": O,
            "xlink:title": O,
            "xlink:type": O,
            "xml:base": D,
            "xml:id": D,
            "xml:lang": D,
            "xml:space": D
        },
        "DOMAttributeNames": {}
    };

    function patch(e, t, n, r, o) {
        var i, a = e.dom;
        if (function isSameVNode(e, t) {
            if (isInvalid(e) || isInvalid(t) || s(e) || s(t)) return !1;
            return e.type === t.type && e.vtype === t.vtype && e.key === t.key
        }(e, t)) {
            var c = t.vtype;
            if (2 & c) (o = isNullOrUndef(o) ? e.isSvg : o) && (t.isSvg = o), function patchProps(e, t, n, r, o) {
                for (var i in n) {
                    var a = n[i];
                    isNullOrUndef(t[i]) && !isNullOrUndef(a) && (isAttrAnEvent(i) ? detachEvent(e, i) : "dangerouslySetInnerHTML" === i ? e.textContent = "" : "className" === i ? e.removeAttribute("class") : e.removeAttribute(i))
                }
                for (var s in t) patchProp(e, s, n[s], t[s], r, o)
            }(a, t.props, e.props, e, o), patchChildren(a, e.children, t.children, r, o), null !== t.ref && y.update(e, t, a), i = a; else if ((12 & c) > 0) i = t.update(e, t, r), _.afterUpdate(t); else {
                if (1 & c) return function patchVText(e, t) {
                    var n = e.dom;
                    if (null === n) return;
                    var r = t.text;
                    t.dom = n, e.text !== r && (n.nodeValue = r);
                    return n
                }(e, t);
                32 & c && patchChildren(e.type, e.children, t.children, r, o)
            }
            t.dom = i || a
        } else s(e) && s(t) ? patchArrayChildren(a, e, t, r, !1) : (unmount(e), i = createElement(t, o, r), null !== t && (t.dom = i), null !== n && n.replaceChild(i, a));
        return i
    }

    function patchArrayChildren(e, t, n, r, o) {
        var i = t.length, a = n.length;
        if (0 === i) {
            if (a > 0) for (var s = 0; s < a; s++) mountChild(n[s], e, r, o)
        } else 0 === a ? (unmountChildren(t), e.textContent = "") : !function isKeyed(e, t) {
            return t.length > 0 && !isNullOrUndef(t[0]) && !isNullOrUndef(t[0].key) && e.length > 0 && !isNullOrUndef(e[0]) && !isNullOrUndef(e[0].key)
        }(t, n) ? function patchNonKeyedChildren(e, t, n, r, o, i, a) {
            var s = Math.min(i, a), c = 0;
            for (; c < s;) patch(t[c], n[c], e, r, o), c++;
            if (i < a) for (c = s; c < a; c++) null !== e && e.appendChild(createElement(n[c], o, r)); else if (i > a) for (c = s; c < i; c++) unmount(t[c], e)
        }(e, t, n, r, o, i, a) : function patchKeyedChildren(e, t, n, r, o, i, a) {
            var s, c, l, u, p, f, A, h = i - 1, m = a - 1, T = 0, b = 0, S = e[T], y = t[b], g = e[h], v = t[m];
            e:{
                for (; S.key === y.key;) {
                    if (patch(S, y, n, r, o), b++, ++T > h || b > m) break e;
                    S = e[T], y = t[b]
                }
                for (; g.key === v.key;) {
                    if (patch(g, v, n, r, o), m--, T > --h || b > m) break e;
                    g = e[h], v = t[m]
                }
            }
            if (T > h) {
                if (b <= m) for (p = (f = m + 1) < a ? t[f].dom : null; b <= m;) A = t[b], b++, attachNewNode(n, createElement(A, o, r), p)
            } else if (b > m) for (; T <= h;) unmount(e[T++], n); else {
                var P = h - T + 1, C = m - b + 1, M = new Array(C);
                for (s = 0; s < C; s++) M[s] = -1;
                var G = !1, w = 0, B = 0;
                if (C <= 4 || P * C <= 16) {
                    for (s = T; s <= h; s++) if (l = e[s], B < C) for (c = b; c <= m; c++) if (u = t[c], l.key === u.key) {
                        M[c - b] = s, w > c ? G = !0 : w = c, patch(l, u, n, r, o), B++, e[s] = null;
                        break
                    }
                } else {
                    var k = new d;
                    for (s = b; s <= m; s++) k.set(t[s].key, s);
                    for (s = T; s <= h; s++) l = e[s], B < C && void 0 !== (c = k.get(l.key)) && (u = t[c], M[c - b] = s, w > c ? G = !0 : w = c, patch(l, u, n, r, o), B++, e[s] = null)
                }
                if (P === i && 0 === B) for (unmountChildren(e), n.textContent = ""; b < C;) A = t[b], b++, attachNewNode(n, createElement(A, o, r), null); else {
                    for (s = P - B; s > 0;) null !== (l = e[T++]) && (unmount(l, n), s--);
                    if (G) {
                        var I = function lis(e) {
                            var t, n, r = e.slice(), o = [];
                            o.push(0);
                            for (var i = 0, a = e.length; i < a; ++i) if (-1 !== e[i]) {
                                var s = o[o.length - 1];
                                if (e[s] < e[i]) r[i] = s, o.push(i); else {
                                    for (t = 0, n = o.length - 1; t < n;) {
                                        var c = (t + n) / 2 | 0;
                                        e[o[c]] < e[i] ? t = c + 1 : n = c
                                    }
                                    e[i] < e[o[t]] && (t > 0 && (r[i] = o[t - 1]), o[t] = i)
                                }
                            }
                            t = o.length, n = o[t - 1];
                            for (; t-- > 0;) o[t] = n, n = r[n];
                            return o
                        }(M);
                        for (c = I.length - 1, s = C - 1; s >= 0; s--) -1 === M[s] ? (A = t[w = s + b], f = w + 1, attachNewNode(n, createElement(A, o, r), f < a ? t[f].dom : null)) : c < 0 || s !== I[c] ? (A = t[w = s + b], f = w + 1, attachNewNode(n, A.dom, f < a ? t[f].dom : null)) : c--
                    } else if (B !== C) for (s = C - 1; s >= 0; s--) -1 === M[s] && (A = t[w = s + b], f = w + 1, attachNewNode(n, createElement(A, o, r), f < a ? t[f].dom : null))
                }
            }
        }(t, n, e, r, o, i, a)
    }

    function patchChildren(e, t, n, r, o) {
        var i = s(t), a = s(n);
        i && a ? patchArrayChildren(e, t, n, r, o) : i || a ? i && !a ? patchArrayChildren(e, t, [n], r, o) : !i && a && patchArrayChildren(e, [t], n, r, o) : patch(t, n, e, r, o)
    }

    function attachNewNode(e, t, n) {
        isNullOrUndef(n) ? e.appendChild(t) : e.insertBefore(t, n)
    }

    Object.keys(x).forEach(function (e) {
        N.Properties[e] = 0, x[e] && (N.DOMAttributeNames[e] = x[e])
    });
    var R = {"children": 1, "key": 1, "ref": 1, "owner": 1},
        L = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

    function setStyle(e, t, n) {
        if (!(isNullOrUndef(n) || isNumber(n) && isNaN(n))) return "float" === t ? (e.cssFloat = n, void(e.styleFloat = n)) : void(e[t] = !isNumber(n) || L.test(t) ? n : n + "px");
        e[t] = ""
    }

    function patchProp(e, t, n, r, o, i) {
        if (n !== r || "value" === t) {
            if ("className" === t && (t = "class"), 1 === R[t]) return;
            if ("class" !== t || i) if ("dangerouslySetInnerHTML" === t) {
                var a = n && n.__html, s = r && r.__html;
                a !== s && (isNullOrUndef(s) || (isValidElement(o) && o.children !== b && (unmountChildren(o.children), o.children = []), e.innerHTML = s))
            } else if (isAttrAnEvent(t)) !function patchEvent(e, t, n, r) {
                t !== n && (isFunction(t) && detachEvent(r, e), attachEvent(r, e, n))
            }(t, n, r, e); else if ("style" === t) !function patchStyle(e, t, n) {
                var r, o, i = n.style;
                if (isString(t)) i.cssText = t; else if (isNullOrUndef(e) || isString(e)) for (r in t) setStyle(i, r, o = t[r]); else {
                    for (r in t) (o = t[r]) !== e[r] && setStyle(i, r, o);
                    for (r in e) isNullOrUndef(t[r]) && (i[r] = "")
                }
            }(n, r, e); else if ("list" !== t && "type" !== t && !i && t in e) !function setProperty(e, t, n) {
                try {
                    e[t] = n
                } catch (e) {
                }
            }(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t); else if (isNullOrUndef(r) || !1 === r) e.removeAttribute(t); else {
                var c = N.DOMAttributeNamespaces[t];
                if (i && c) if (r) e.setAttributeNS(c, t, r); else {
                    var l = t.indexOf(":"), u = l > -1 ? t.substr(l + 1) : t;
                    e.removeAttributeNS(c, u)
                } else isFunction(r) || e.setAttribute(t, r)
            } else e.className = r
        }
    }

    var j = "http://www.w3.org/2000/svg";

    function createElement(e, t, n, r) {
        var o;
        if (isValidElement(e)) {
            var c = e.vtype;
            12 & c ? (o = e.init(n, r), _.afterMount(e)) : 1 & c ? (o = i.createTextNode(e.text), e.dom = o) : 2 & c ? o = function mountVNode$1(e, t, n, r) {
                e.isSvg ? t = !0 : "svg" === e.type ? t = !0 : a || (t = !1);
                t && (e.namespace = j, e.isSvg = t);
                var o = t ? i.createElementNS(e.namespace, e.type) : i.createElement(e.type);
                (function setProps(e, t, n) {
                    var r = t.props;
                    for (var o in r) patchProp(e, o, null, r[o], null, n)
                })(o, e, t), "foreignObject" === e.type && (t = !1);
                var c = e.children;
                if (s(c)) for (var l = 0, u = c.length; l < u; l++) mountChild(c[l], o, n, t, r); else mountChild(c, o, n, t, r);
                e.dom = o, null !== e.ref && y.attach(e, e.ref, o);
                return o
            }(e, t, n, r) : 16 & c ? o = e.dom = i.createTextNode("") : isPortal(c) && (e.type.appendChild(createElement(e.children, t, n, r)), o = i.createTextNode(""))
        } else if (isString(e) || isNumber(e)) o = i.createTextNode(e); else if (isNullOrUndef(e) || function isBoolean(e) {
            return !0 === e || !1 === e
        }(e)) o = i.createTextNode(""); else {
            if (!s(e)) throw new Error("Unsupported VNode.");
            o = i.createDocumentFragment(), e.forEach(function (e) {
                if (!isInvalid(e)) {
                    var i = createElement(e, t, n, r);
                    i && o.appendChild(i)
                }
            })
        }
        return o
    }

    function mountChild(e, t, n, r, o) {
        e.parentContext = n || S;
        var i = createElement(e, r, n, o);
        null !== i && t.appendChild(i)
    }

    function createVText(e) {
        return {"text": e, "vtype": 1, "dom": null}
    }

    var V = [];

    function errorCatcher(e, t) {
        try {
            return e()
        } catch (e) {
            !function errorHandler(e, t) {
                var n;
                for (; ;) {
                    if (isFunction(e.componentDidCatch)) {
                        n = e;
                        break
                    }
                    if (!e._parentComponent) break;
                    e = e._parentComponent
                }
                if (!n) throw t;
                var r = n._disable;
                n._disable = !1, n.componentDidCatch(t), n._disable = r
            }(t, e)
        }
    }

    function ensureVirtualNode(e) {
        return isNumber(e) || isString(e) ? createVText(e) : isInvalid(e) ? {"dom": null, "vtype": 16} : e
    }

    function mountVNode(e, t, n) {
        return createElement(e, !1, t, n)
    }

    function getChildContext(e, t) {
        return void 0 === t && (t = S), e.getChildContext ? A(clone(t), e.getChildContext()) : clone(t)
    }

    function renderComponent(e) {
        var t;
        return T.current = e, errorCatcher(function () {
            t = e.render()
        }, e), t = ensureVirtualNode(t), T.current = null, t
    }

    function flushMount() {
        if (V.length) {
            var e = V.slice(0);
            V.length = 0, e.forEach(function (e) {
                isFunction(e) ? e() : e.componentDidMount && errorCatcher(function () {
                    e.componentDidMount()
                }, e)
            })
        }
    }

    function updateComponent(e, t) {
        void 0 === t && (t = !1);
        var n = e.vnode, r = n.dom, o = e.props, i = e.getState(), a = e.context, s = e.prevProps || o,
            c = e.prevState || e.state, l = e.prevContext || a;
        e.props = s, e.context = l;
        var u = !1;
        if (!t && isFunction(e.shouldComponentUpdate) && !1 === e.shouldComponentUpdate(o, i, a) ? u = !0 : isFunction(e.componentWillUpdate) && errorCatcher(function () {
            e.componentWillUpdate(o, i, a)
        }, e), e.props = o, e.state = i, e.context = a, e._dirty = !1, !u) {
            var p = e._rendered, f = renderComponent(e);
            f.parentVNode = n;
            var d = getChildContext(e, a), A = p.dom && p.dom.parentNode;
            for (r = n.dom = patch(p, f, A || null, d), e._rendered = f, isFunction(e.componentDidUpdate) && errorCatcher(function () {
                e.componentDidUpdate(s, c, a)
            }, e), _.afterUpdate(n); n = n.parentVNode;) (12 & n.vtype) > 0 && (n.dom = r)
        }
        return e.prevProps = e.props, e.prevState = e.state, e.prevContext = e.context, e.clearCallBacks(), flushMount(), r
    }

    var F = [];

    function rerender() {
        var e, t = F;
        for (F = []; e = t.pop();) e._dirty && updateComponent(e)
    }

    var U = function Component(e, t) {
        this._dirty = !0, this._disable = !0, this._pendingStates = [], this.state || (this.state = {}), this.props = e || {}, this.context = t || S, this.refs = {}
    };
    U.prototype.setState = function setState(e, t) {
        e && (this._pendingStates = this._pendingStates || []).push(e), isFunction(t) && (this._pendingCallbacks = this._pendingCallbacks || []).push(t), this._disable || function enqueueRender(e) {
            !e._dirty && (e._dirty = !0) && 1 === F.push(e) && p(rerender)
        }(this)
    }, U.prototype.getState = function getState() {
        var e = this, t = this._pendingStates, n = this.state, r = this.props;
        if (!t.length) return n;
        var o = clone(n), i = t.concat();
        return this._pendingStates.length = 0, i.forEach(function (t) {
            isFunction(t) && (t = t.call(e, n, r)), A(o, t)
        }), o
    }, U.prototype.clearCallBacks = function clearCallBacks() {
        if (s(this._pendingCallbacks)) for (; this._pendingCallbacks.length;) this._pendingCallbacks.pop().call(this)
    }, U.prototype.forceUpdate = function forceUpdate(e) {
        isFunction(e) && (this._pendingCallbacks = this._pendingCallbacks || []).push(e), updateComponent(this, !0)
    }, U.prototype.render = function render(e, t, n) {
    }, U.prototype.isReactComponent = S;
    var W = function (e) {
        function PureComponent() {
            e.apply(this, arguments), this.isPureComponent = !0
        }

        return e && (PureComponent.__proto__ = e), PureComponent.prototype = Object.create(e && e.prototype), PureComponent.prototype.constructor = PureComponent, PureComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(e, t) {
            return !shallowEqual(this.props, e) || !shallowEqual(this.state, t)
        }, PureComponent
    }(U);

    function render(e, t, n) {
        if (!t) throw new Error(t + " should be a DOM Element");
        var r, o = t._component;
        return _.roots.push(e), void 0 !== o ? (_.roots = _.roots.filter(function (e) {
            return e !== o
        }), r = patch(o, e, t, {})) : (r = mountVNode(e, {}), t.appendChild(r)), t && (t._component = e), flushMount(), n && n(), isComposite(e) ? e.component : r
    }

    function h(e, t, n) {
        var r;
        return t.children && (n || (n = t.children)), s(n) ? function addChildren(e, t, n) {
            if (isString(t) || isNumber(t)) e.push(createVText(String(t))); else if (isValidElement(t)) e.push(t); else if (s(t)) for (var r = 0; r < t.length; r++) addChildren(e, t[r], n); else e.push({
                "dom": null,
                "vtype": 16
            })
        }(r = [], n, e) : isString(n) || isNumber(n) ? n = createVText(String(n)) : isValidElement(n) || (n = b), t.children = void 0 !== r ? r : n, function createVNode(e, t, n, r, o, i, a) {
            return {
                "type": e,
                "key": r || null,
                "vtype": 2,
                "props": t || S,
                "children": n,
                "namespace": o || null,
                "_owner": i,
                "dom": null,
                "ref": a || null
            }
        }(e, t, t.children, t.key, t.namespace, t.owner, t.ref)
    }

    var X = function ComponentWrapper(e, t) {
        this.vtype = 4, this.type = e, this.name = e.name || e.toString().match(/^function\s*([^\s(]+)/)[1], e.displayName = this.name, this._owner = t.owner, delete t.owner, (this.ref = t.ref) && delete t.ref, this.props = t, this.key = t.key || null, this.dom = null
    };
    X.prototype.init = function init(e, t) {
        return function mountComponent(e, t, n) {
            var r = e.ref;
            e.component = new e.type(e.props, t);
            var o = e.component;
            o.vnode = e, isComponent(n) && (o._parentComponent = n), isFunction(o.componentWillMount) && (errorCatcher(function () {
                o.componentWillMount()
            }, o), o.state = o.getState(), o.clearCallBacks()), o._dirty = !1;
            var i = renderComponent(o);
            i.parentVNode = e, o._rendered = i, isFunction(o.componentDidMount) && V.push(o), isNullOrUndef(r) || y.attach(e, r, e.dom);
            var a = e.dom = mountVNode(i, getChildContext(o, t), o);
            return o._disable = !1, a
        }(this, e, t)
    }, X.prototype.update = function update(e, t, n, r) {
        return this.context = n, function reRenderComponent(e, t) {
            var n = t.component = e.component, r = t.props, o = t.context;
            return n._disable = !0, isFunction(n.componentWillReceiveProps) && errorCatcher(function () {
                n.componentWillReceiveProps(r, o)
            }, n), n._disable = !1, n.prevProps = n.props, n.prevState = n.state, n.prevContext = n.context, n.props = r, n.context = o, isNullOrUndef(t.ref) || y.update(e, t), updateComponent(n)
        }(e, this)
    }, X.prototype.destroy = function destroy() {
        !function unmountComponent(e) {
            var t = e.component;
            isFunction(t.componentWillUnmount) && errorCatcher(function () {
                t.componentWillUnmount()
            }, t), t._disable = !0, unmount(t._rendered), isNullOrUndef(e.ref) || y.detach(e, e.ref, e.dom)
        }(this)
    };
    var Q = function StateLessComponent(e, t) {
        this.vtype = 8, this.type = e, this._owner = t.owner, delete t.owner, this.props = t, this.key = t.key
    };

    function createElement$2(e, t) {
        for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
        var o, i = n;
        return n && (1 === n.length ? i = n[0] : 0 === n.length && (i = void 0)), isString(e) ? ((o = function transformPropsForRealTag(e, t) {
            var n = {};
            for (var r in t) {
                var o = t[r];
                if ("defaultValue" !== r) {
                    var i = N.DOMAttributeNames[r];
                    i && i !== r ? n[i] = o : n[r] = o
                } else n.value = t.value || t.defaultValue
            }
            return n
        }(0, t)).owner = T.current, h(e, o, i)) : isFunction(e) ? ((o = function transformPropsForComponent(e, t) {
            var n = {};
            for (var r in e) {
                var o = e[r];
                n[r] = o
            }
            if (t) for (var i in t) void 0 === n[i] && (n[i] = t[i]);
            return n
        }(t, e.defaultProps)).children && o.children !== b || (o.children = i || 0 === i ? i : b), o.owner = T.current, e.prototype && e.prototype.render ? new X(e, o) : new Q(e, o)) : e
    }

    function cloneElement(e, t) {
        for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
        if (function isVText(e) {
            return !isNullOrUndef(e) && 1 === e.vtype
        }(e)) return createVText(e.text);
        if (isString(e) || isNumber(e)) return createVText(e);
        if (isInvalid(e) || !isInvalid(e) && isPortal(e.vtype) || e && 16 & e.vtype) return {"dom": null, "vtype": 16};
        var o = clone(A(clone(e.props), t));
        e.namespace && (o.namespace = e.namespace), 4 & e.vtype && !isNullOrUndef(e.ref) && (o.ref = e.ref);
        var i = (arguments.length > 2 ? [].slice.call(arguments, 2) : e.children || o.children) || [];
        if (i.length && 1 === i.length && (i = n[0]), s(e)) return e.map(function (e) {
            return cloneElement(e)
        });
        var a = createElement$2(e.type, o);
        if (s(i)) {
            var c = i.map(function (e) {
                return cloneElement(e, e.props)
            });
            0 === c.length && (c = b), isVNode(a) && (a.children = c), a.props.children = c
        } else i && (isVNode(a) && (a.children = cloneElement(i)), a.props.children = cloneElement(i, i.props));
        return a
    }

    Q.prototype.init = function init(e) {
        return function mountStatelessComponent(e, t) {
            var n = e.type(e.props, t);
            return e._rendered = ensureVirtualNode(n), e._rendered.parentVNode = e, e.dom = mountVNode(e._rendered, t)
        }(this, e)
    }, Q.prototype.update = function update(e, t, n) {
        var r = t.props, o = t.context, i = r.onShouldComponentUpdate;
        return isFunction(i) && !i(e.props, r, o) ? (t._rendered = e._rendered, e.dom) : function reRenderStatelessComponent(e, t, n, r) {
            var o = e._rendered, i = t.type(t.props, n);
            return i.parentVNode = t, t._rendered = i, t.dom = patch(o, i, o && o.dom || r, n)
        }(e, this, n, e.dom)
    }, Q.prototype.destroy = function destroy() {
        !function unmountStatelessComponent(e) {
            unmount(e._rendered)
        }(this)
    };
    var K = {
        "map": function map(e, t, n) {
            return isNullOrUndef(e) ? e : (e = K.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
        }, "forEach": function forEach(e, t, n) {
            if (!isNullOrUndef(e)) {
                e = K.toArray(e), n && n !== e && (t = t.bind(n));
                for (var r = 0, o = e.length; r < o; r++) {
                    t(isInvalid(e[r]) ? null : e[r], r, e)
                }
            }
        }, "count": function count(e) {
            return (e = K.toArray(e)).length
        }, "only": function only(e) {
            if (1 !== (e = K.toArray(e)).length) throw new Error("Children.only() expects only one child.");
            return e[0]
        }, "toArray": function toArray(e) {
            if (isNullOrUndef(e)) return [];
            if (s(e)) {
                var t = [];
                return function flatten(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) {
                        var o = e[n];
                        s(o) ? flatten(o, t) : t.push(o)
                    }
                    return t
                }(e, t), t
            }
            return b.concat(e)
        }
    };

    function hydrate(e, t, n) {
        if (null !== t) {
            for (var r = t.lastChild; r;) {
                var o = r.previousSibling;
                t.removeChild(r), r = o
            }
            return render(e, t, n)
        }
    }

    function createPortal(e, t) {
        return {"type": t, "vtype": 32, "children": e, "dom": null}
    }

    function unmountComponentAtNode(e) {
        var t = e._component;
        return !!isValidElement(t) && (unmount(t, e), delete e._component, !0)
    }

    function findDOMNode(e) {
        return isInvalid(e) ? null : isComponent(e) ? e.vnode.dom : isValidElement(e) ? e.dom : e
    }

    function createFactory(e) {
        return createElement$2.bind(null, e)
    }

    var z = function (e) {
        function WrapperComponent() {
            e.apply(this, arguments)
        }

        return e && (WrapperComponent.__proto__ = e), WrapperComponent.prototype = Object.create(e && e.prototype), WrapperComponent.prototype.constructor = WrapperComponent, WrapperComponent.prototype.getChildContext = function getChildContext$$1() {
            return this.props.context
        }, WrapperComponent.prototype.render = function render$$1() {
            return this.props.children
        }, WrapperComponent
    }(U);

    function unstable_renderSubtreeIntoContainer(e, t, n, r) {
        var o = render(createElement$2(z, {"context": getChildContext(e, e.context)}, t), n);
        return r && r.call(o), o
    }

    function isValidElement$1(e) {
        return isValidElement(e) && (6 & e.vtype) > 0
    }

    var Z = p, $ = noop$1;

    function getShim() {
        return $
    }

    $.isRequired = noop$1;
    var Y = {
        "array": $,
        "bool": $,
        "func": $,
        "number": $,
        "object": $,
        "string": $,
        "any": $,
        "arrayOf": getShim,
        "element": $,
        "instanceOf": getShim,
        "node": $,
        "objectOf": getShim,
        "oneOf": getShim,
        "oneOfType": getShim,
        "shape": getShim,
        "exact": getShim,
        "PropTypes": {},
        "checkPropTypes": noop$1
    };
    Y.PropTypes = Y;
    var q = {
        "Children": K,
        "Component": U,
        "PureComponent": W,
        "createElement": createElement$2,
        "cloneElement": cloneElement,
        "render": render,
        "nextTick": p,
        "options": _,
        "findDOMNode": findDOMNode,
        "isValidElement": isValidElement$1,
        "unmountComponentAtNode": unmountComponentAtNode,
        "createPortal": createPortal,
        "unstable_renderSubtreeIntoContainer": unstable_renderSubtreeIntoContainer,
        "hydrate": hydrate,
        "createFactory": createFactory,
        "unstable_batchedUpdates": Z,
        "version": "15.4.2",
        "PropTypes": Y
    };
    t.Children = K, t.Component = U, t.PureComponent = W, t.createElement = createElement$2, t.cloneElement = cloneElement, t.render = render, t.nextTick = p, t.options = _, t.findDOMNode = findDOMNode, t.isValidElement = isValidElement$1, t.unmountComponentAtNode = unmountComponentAtNode, t.createPortal = createPortal, t.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer, t.hydrate = hydrate, t.createFactory = createFactory, t.unstable_batchedUpdates = Z, t.version = "15.4.2", t.PropTypes = Y, t.default = q
}, function (e, t, n) {
    e.exports = n
}]);