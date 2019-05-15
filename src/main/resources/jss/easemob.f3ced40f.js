! function() {
  window.easemobim = window.easemobim || {};
  var e = /android/i.test(navigator.useragent),
    t = /mobile/i.test(navigator.userAgent),
    i = function() {
      var e, t;
      return t = navigator.userAgent.match(/MSIE (\d+)/i), e = t && t[1] ? +t[1] : 9999
    }();
  easemobim.utils = {
    isTop: window.top === window.self,
    nodeListType: {
      "[object Object]": !0,
      "[object NodeList]": !0,
      "[object HTMLCollection]": !0,
      "[object Array]": !0
    },
    isSupportWebRTC: !!(window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.RTCPeerConnection),
    filesizeFormat: function(e) {
      var t, i, o = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB"];
      return e ? (t = Math.floor(Math.log(e) / Math.log(1024)), i = (e / Math.pow(1024, t)).toFixed(2) + " " + o[t]) : i = "0 B", i
    },
    uuid: function() {
      for (var e = [], t = "0123456789abcdef", i = 0; 36 > i; i++) e[i] = t.substr(Math.floor(16 * Math.random()), 1);
      return e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("")
    },
    convertFalse: function(e) {
      return e = "undefined" == typeof e ? "" : e, "false" === e ? !1 : e
    },
    $Dom: function(e) {
      return document.getElementById(e)
    },
    each: function(e, t) {
      for (var i in e) e.hasOwnProperty(i) && "function" == typeof t && t(i, e[i])
    },
    $Remove: function(e) {
      e && (e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e))
    },
    siblings: function(e, t) {
      if (!e || !e.parentNode) return null;
      for (var i = e.parentNode.childNodes, o = [], n = 0, s = i.length; s > n; n++) 1 === i[n].nodeType && i[n] != e && t && this.hasClass(i[n], t) && o.push(i[n]);
      return o
    },
    insertBefore: function(e, t, i) {
      e && t && (0 === e.childNodes.length ? e.appendChild(t) : e.insertBefore(t, i || null))
    },
    getIEVersion: i,
    live: function(e, t, i, o) {
      var n = this,
        s = o || document;
      n.on(s, t, function(t) {
        var o = t || window.event,
          a = o.target || o.srcElement,
          r = e.split(".").length < 2 ? s.getElementsByTagName(e) : n.$Class(e);
        if (r.length)
          for (var c = r.length, d = 0; c > d; d++)(r[d] == a || r[d] == a.parentNode) && i.apply(r[d] == a ? a : a.parentNode, arguments);
        else r == e && i.apply(e, arguments)
      })
    },
    on: function() {
      var e = function(e, t, i, o) {
        if (!t) return !1;
        for (var n = t.split(" "), s = 0, a = n.length; a > s; s++) e.addEventListener ? e.addEventListener(n[s], i, o) : e.attachEvent ? (e["_" + n[s]] = function() {
          i.apply(e, arguments)
        }, e.attachEvent("on" + n[s], e["_" + n[s]])) : e["on" + n[s]] = i
      };
      return function(t, i, o, n) {
        if (Object.prototype.toString.call(t) in this.nodeListType && t.length)
          for (var s = 0, a = t.length; a > s; s++) 1 === t[s].nodeType && e(t[s], i, o, n);
        else e(t, i, o, n)
      }
    }(),
    remove: function(e, t, i) {
      e && (e.removeEventListener ? e.removeEventListener(t, i) : e.detachEvent ? e.detachEvent("on" + t, e["_" + t]) : e["on" + t] = null)
    },
    one: function(e, t, i, o) {
      var n = this,
        s = function() {
          i.apply(this, arguments), n.remove(e, t, s)
        };
      n.on(e, t, s, o)
    },
    trigger: function(e, t) {
      if (document.createEvent) {
        var i = document.createEvent("HTMLEvents");
        i.initEvent(t, !0, !1), e.dispatchEvent(i)
      } else e.fireEvent("on" + t)
    },
    extend: function(e, t) {
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = Object.prototype.toString.call(t[i]);
          "[object Array]" === o ? (e[i] = [], this.extend(e[i], t[i])) : "[object Object]" === o ? (e[i] = {}, this.extend(e[i], t[i])) : e[i] = t[i]
        }
      return e
    },
    addClass: function(e, t) {
      var i, o;
      if (e) {
        if (Object.prototype.toString.call(e) in this.nodeListType && e.length)
          for (i = 0, o = e.length; o > i; i++) this.hasClass(e[i], t) || "undefined" == typeof e[i].className || (e[i].className += " " + t);
        else this.hasClass(e, t) || (e.className += " " + t);
        return e
      }
    },
    removeClass: function(e, t) {
      var i, o;
      if (e) {
        if (e.length && Object.prototype.toString.call(e) in this.nodeListType)
          for (i = 0, o = e.length; o > i; i++) "undefined" != typeof e[i].className && this.hasClass(e[i], t) && (e[i].className = (" " + e[i].className + " ").replace(new RegExp(" " + t + " ", "g"), " ").trim());
        else "undefined" != typeof e.className && this.hasClass(e, t) && (e.className = (" " + e.className + " ").replace(new RegExp(" " + t + " ", "g"), " ").trim());
        return e
      }
    },
    hasClass: function(e, t) {
      return e ? !!~(" " + e.className + " ").indexOf(" " + t + " ") : !1
    },
    toggleClass: function(e, t, i) {
      var o;
      e && t && (o = "undefined" != typeof i ? i : !this.hasClass(e, t), o ? this.addClass(e, t) : this.removeClass(e, t))
    },
    $Class: function(e, t) {
      var i = e.split("."),
        o = i[0],
        n = i[1],
        s = t || document;
      if (s.getElementsByClassName) return s.getElementsByClassName(n);
      for (var a = s.getElementsByTagName(o), r = [], c = 0, d = a.length; d > c; c++) this.hasClass(a[c], n) && r.push(a[c]);
      return a = null, r
    },
    html: function(e, t) {
      return e ? "undefined" == typeof t ? e.innerHTML : (e.innerHTML = t, e) : void 0
    },
    encode: function(e) {
      if (!e || 0 === e.length) return "";
      var t = "";
      return t = e.replace(/&amp;/g, "&"), t = t.replace(/<(?=[^o][^)])/g, "&lt;"), t = t.replace(/>/g, "&gt;"), t = t.replace(/\"/g, "&quot;")
    },
    decode: function(e) {
      if (!e || 0 === e.length) return "";
      var t = "";
      return t = e.replace(/&amp;/g, "&"), t = t.replace(/&#39;/g, "'"), t = t.replace(/&lt;o\)/g, "<o)")
    },
    query: function(e) {
      var t = new RegExp("[?&]" + e + "=([^&]*)(?=&|$)"),
        i = t.exec(location.search);
      return i ? i[1] : ""
    },
    isAndroid: e,
    isMobile: t,
    click: t && "ontouchstart" in window ? "touchstart" : "click",
    isQQBrowserInAndroid: e && /MQQBrowser/.test(navigator.userAgent),
    isMin: function() {
      return document.visibilityState && "hidden" === document.visibilityState || document.hidden
    },
    setStore: function(e, t) {
      try {
        localStorage.setItem(e, t)
      } catch (i) {}
    },
    getStore: function(e) {
      try {
        return localStorage.getItem(e)
      } catch (t) {}
    },
    clearStore: function(e) {
      try {
        localStorage.removeItem(e)
      } catch (t) {}
    },
    clearAllStore: function() {
      try {
        localStorage.clear()
      } catch (e) {}
    },
    set: function(e, t, i) {
      var o = new Date,
        n = o.getTime() + 24 * (i || 30) * 3600 * 1e3;
      o.setTime(n), document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=/;expires=" + o.toGMTString()
    },
    get: function(e) {
      var t, i = document.cookie.match("(^|;) ?" + encodeURIComponent(e) + "=([^;]*)(;|$)");
      return t = i ? decodeURIComponent(i[2]) : ""
    },
    getAvatarsFullPath: function(e, t) {
      var i = null;
      if (!e) return i;
      e = e.replace(/^(https?:)?\/\/?/, "");
      var o = e.indexOf("img-cn") > 0 ? !0 : !1,
        n = e.indexOf("ossimages") > 0 ? !0 : !1;
      return o && !n ? t + "/ossimages/" + e : "//" + e
    },
    getConfig: function(e) {
      for (var t, i = {}, o = document.scripts, n = 0, s = o.length; s > n; n++)
        if (~o[n].src.indexOf("//dn-piaoniu-static.qbox.me/pc/vendors/huanxin-webim/easemob.f3ced40f.js")) {
          t = o[n].src;
          break
        }
      if (!t) return {
        json: i,
        domain: ""
      };
      for (var a, r = t.indexOf("?"), c = ~t.indexOf("//") ? t.indexOf("//") : 0, d = t.slice(c, t.indexOf("/", c + 2)), f = t.slice(r + 1).split("&"), l = 0, h = f.length; h > l; l++) a = f[l].split("="), i[a[0]] = a.length > 1 ? decodeURIComponent(a[1]) : "";
      return {
        json: i,
        domain: d
      }
    },
    updateAttribute: function(e, t, i) {
      var o = e || location.protocol + i + "/im.html?tenantId=";
      for (var n in t) t.hasOwnProperty(n) && "undefined" != typeof t[n] && (~o.indexOf(n + "=") ? o = o.replace(new RegExp(n + "=[^&#?]*", "gim"), n + "=" + ("" !== t[n] ? t[n] : "")) : o += "&" + n + "=" + ("" !== t[n] ? t[n] : ""));
      return o
    },
    copy: function(e) {
      return this.extend({}, e)
    },
    code: function() {
      var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        t = {
          encode: function(t) {
            var i, o, n, s, a, r, c, d = "",
              f = 0;
            do i = t.charCodeAt(f++), o = t.charCodeAt(f++), n = t.charCodeAt(f++), s = i >> 2, a = (3 & i) << 4 | o >> 4, r = (15 & o) << 2 | n >> 6, c = 63 & n, isNaN(o) ? r = c = 64 : isNaN(n) && (c = 64), d = d + e.charAt(s) + e.charAt(a) + e.charAt(r) + e.charAt(c); while (f < t.length);
            return d
          },
          byteEncode: function(t) {
            var i, o, n, s, a, r, c, d = "",
              f = 0;
            do i = t[f++], o = t[f++], n = t[f++], s = i >> 2, a = (3 & i) << 4 | o >> 4, r = (15 & o) << 2 | n >> 6, c = 63 & n, isNaN(o) ? r = c = 64 : isNaN(n) && (c = 64), d = d + e.charAt(s) + e.charAt(a) + e.charAt(r) + e.charAt(c); while (f < t.length);
            return d
          },
          decode: function(t) {
            var i, o, n, s, a, r, c, d = "",
              f = 0;
            t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do s = e.indexOf(t.charAt(f++)), a = e.indexOf(t.charAt(f++)), r = e.indexOf(t.charAt(f++)), c = e.indexOf(t.charAt(f++)), i = s << 2 | a >> 4, o = (15 & a) << 4 | r >> 2, n = (3 & r) << 6 | c, d += String.fromCharCode(i), 64 != r && (d += String.fromCharCode(o)), 64 != c && (d += String.fromCharCode(n)); while (f < t.length);
            return d
          }
        };
      return t
    }()
  }
}(), window.easemobim = window.easemobim || {}, window.easemobIM = window.easemobIM || {}, easemobIM.Transfer = easemobim.Transfer = function() {
    "use strict";
    var e = function(e, t, i) {
        if ("string" == typeof e.data) {
          var o = JSON.parse(e.data),
            n = !1;
          if (i && i.length)
            for (var s = 0, a = i.length; a > s; s++) o.key === i[s] && (n = !0, "function" == typeof t && t(o));
          else "function" == typeof t && t(o);
          if (!n && i)
            for (var s = 0, a = i.length; a > s; s++)
              if ("data" === i[s]) {
                "function" == typeof t && t(o);
                break
              }
        }
      },
      t = function(e, i) {
        return this instanceof t ? (this.key = i, this.iframe = document.getElementById(e), void(this.origin = location.protocol + "//" + location.host)) : new t(e)
      };
    return t.prototype.send = function(e, t) {
      return e.origin = this.origin, e.key = this.key, t && (e.to = t), e = JSON.stringify(e), this.iframe ? this.iframe.contentWindow.postMessage(e, "*") : window.parent.postMessage(e, "*"), this
    }, t.prototype.listen = function(t, i) {
      var o = this;
      return window.addEventListener ? window.addEventListener("message", function(n) {
        e.call(o, n, t, i)
      }, !1) : window.attachEvent && window.attachEvent("onmessage", function(n) {
        e.call(o, n, t, i)
      }), this
    }, t
  }(), easemobim.EVENTS = {
    NOTIFY: {
      event: "notify"
    },
    RECOVERY: {
      event: "recoveryTitle"
    },
    SHOW: {
      event: "showChat"
    },
    CLOSE: {
      event: "closeChat"
    },
    CACHEUSER: {
      event: "setUser"
    },
    DRAGREADY: {
      event: "dragReady"
    },
    DRAGEND: {
      event: "dragEnd"
    },
    SLIDE: {
      event: "titleSlide"
    },
    ONMESSAGE: {
      event: "onMessage"
    },
    ONSESSIONCLOSED: {
      event: "onSessionClosed"
    },
    EXT: {
      event: "ext"
    },
    TEXTMSG: {
      event: "textmsg"
    },
    ONREADY: {
      event: "onready"
    }
  }, easemobim.notify = function() {
    var e = 0;
    easemobim.notify = function(t, i, o) {
      if (0 === e) {
        e = setTimeout(function() {
          e = 0
        }, 3e3), t = t || "", i = i || "", o = o || "";
        try {
          if (window.Notification)
            if ("granted" === Notification.permission) {
              var n = new Notification(i, {
                icon: t,
                body: o
              });
              n.onclick = function() {
                "function" == typeof window.focus && window.focus(), this.close(), "object" == typeof easemobim.titleSlide && easemobim.titleSlide.stop()
              }, setTimeout(function() {
                n.close()
              }, 3e3)
            } else Notification.requestPermission()
        } catch (s) {}
      }
    }
  }, easemobim.titleSlide = function() {
    var e, t = "新消息提醒",
      i = 0,
      o = document.title,
      n = (o + t).split("");
    easemobim.titleSlide = {
      stop: function() {
        clearInterval(i), i = 0, document.title = o
      },
      start: function() {
        i || (i = setInterval(function() {
          e = n.shift(), document.title = e + Array.prototype.join.call(n, ""), n.push(e)
        }, 360))
      }
    }
  },
  function(e) {
    "use strict";
    var t = 0,
      i = {
        x: 0,
        y: 0
      },
      o = function(e) {
        var o = this,
          s = window.event || e,
          a = document.documentElement.clientWidth,
          r = document.documentElement.clientHeight,
          c = a - s.clientX - o.rect.width + i.x,
          d = r - s.clientY - o.rect.height + i.y;
        s.clientX - i.x <= 0 ? c = a - o.rect.width : s.clientX + o.rect.width - i.x >= a && (c = 0), s.clientY - i.y <= 0 ? d = r - o.rect.height : s.clientY + o.rect.height - i.y >= r && (d = 0), o.shadow.style.left = "auto", o.shadow.style.top = "auto", o.shadow.style.right = c + "px", o.shadow.style.bottom = d + "px", o.position = {
          x: c,
          y: d
        }, clearTimeout(t), t = setTimeout(function() {
          n.call(o)
        }, 500)
      },
      n = function() {
        e.remove(document, "mousemove", this.moveEv), this.iframe.style.left = "auto", this.iframe.style.top = "auto", this.iframe.style.right = this.position.x + "px", this.iframe.style.bottom = this.position.y + "px", this.shadow.style.left = "auto", this.shadow.style.top = "auto", this.shadow.style.right = this.position.x + "px", this.shadow.style.bottom = this.position.y + "px", this.shadow.style.display = "none", this.iframe.style.display = "block"
      },
      s = function() {
        var t = this;
        e.on(window, "resize", function() {
          if (t.rect && t.rect.width) {
            var e = document.documentElement.clientWidth,
              i = document.documentElement.clientHeight,
              o = Number(t.iframe.style.right.slice(0, -2)),
              n = Number(t.iframe.style.bottom.slice(0, -2));
            e < t.rect.width ? (t.iframe.style.left = "auto", t.iframe.style.right = 0, t.shadow.style.left = "auto", t.shadow.style.right = 0) : e - o < t.rect.width ? (t.iframe.style.right = e - t.rect.width + "px", t.iframe.style.left = 0, t.shadow.style.right = e - t.rect.width + "px", t.shadow.style.left = 0) : (t.iframe.style.left = "auto", t.shadow.style.left = "auto"), i < t.rect.height ? (t.iframe.style.top = "auto", t.iframe.style.bottom = 0) : i - n < t.rect.height ? (t.iframe.style.bottom = i - t.rect.height + "px", t.iframe.style.top = 0) : t.iframe.style.top = "auto"
          }
        })
      },
      a = function() {
        var t = this;
        t.config.dragenable && (s.call(t), e.on(t.shadow, "mouseup", function() {
          n.call(t)
        })), t.message = new easemobim.Transfer(t.iframe.id, "easemob"), t.iframe.style.display = "block", t.config.hasReceiveCallback = "function" == typeof t.config.onmessage, t.onsessionclosedSt = 0, t.onreadySt = 0, t.config.parentId = t.iframe.id, t.message.send({
          event: "initConfig",
          data: t.config
        }).listen(function(s) {
          if (s.to === t.iframe.id) switch (s.event) {
            case easemobim.EVENTS.ONREADY.event:
              "function" == typeof t.config.onready && (clearTimeout(t.onreadySt), t.onreadySt = setTimeout(function() {
                t.config.onready()
              }, 500));
              break;
            case easemobim.EVENTS.SHOW.event:
              t.open();
              break;
            case easemobim.EVENTS.CLOSE.event:
              t.close();
              break;
            case easemobim.EVENTS.NOTIFY.event:
              easemobim.notify(s.data.avatar, s.data.title, s.data.brief);
              break;
            case easemobim.EVENTS.SLIDE.event:
              easemobim.titleSlide.start();
              break;
            case easemobim.EVENTS.RECOVERY.event:
              easemobim.titleSlide.stop();
              break;
            case easemobim.EVENTS.ONMESSAGE.event:
              "function" == typeof t.config.onmessage && t.config.onmessage(s.data);
              break;
            case easemobim.EVENTS.ONSESSIONCLOSED.event:
              "function" == typeof t.config.onsessionclosed && (clearTimeout(t.onsessionclosedSt), t.onsessionclosedSt = setTimeout(function() {
                t.config.onsessionclosed()
              }, 500));
              break;
            case easemobim.EVENTS.CACHEUSER.event:
              s.data.username && e.set((t.config.to || "") + t.config.tenantId + (t.config.emgroup || ""), s.data.username);
              break;
            case easemobim.EVENTS.DRAGREADY.event:
              i.x = isNaN(Number(s.data.x)) ? 0 : Number(s.data.x), i.y = isNaN(Number(s.data.y)) ? 0 : Number(s.data.y), t.shadow.style.display = "block", t.iframe.style.display = "none", t.moveEv || (t.moveEv = function(e) {
                o.call(t, e)
              }), e.on(document, "mousemove", t.moveEv);
              break;
            case easemobim.EVENTS.DRAGEND.event:
              n.call(t);
              break;
            case "setItem":
              e.setStore(s.data.key, s.data.value);
              break;
            case "updateURL":
              t.message.send({
                event: "updateURL",
                data: location.href
              })
          }
        }, ["main"]), t.ready instanceof Function && t.ready()
      },
      r = function(t, i) {
        if (!(this instanceof r)) return new r(t, i);
        if (i && r.iframe) return r.iframe.config = e.copy(t), r.iframe;
        this.url = "", this.iframe = /MSIE (6|7|8)/.test(navigator.userAgent) ? document.createElement('<iframe name="' + (new Date).getTime() + '">') : document.createElement("iframe"), this.iframe.id = "EasemobIframe" + (new Date).getTime(), this.iframe.name = (new Date).getTime(), this.iframe.style.cssText = "width: 0;height: 0;border: none; position: fixed;", this.shadow = document.createElement("div"), this.config = e.copy(t), this.show = !1, e.isMobile || (document.body.appendChild(this.shadow), document.body.appendChild(this.iframe));
        var o = this;
        return o.iframe.readyState ? o.iframe.onreadystatechange = function() {
          ("loaded" === this.readyState || "complete" === this.readyState) && a.call(o)
        } : o.iframe.onload = function() {
          a.call(o)
        }, r.iframe = this, this
      };
    r.prototype.set = function(t, i) {
      this.config = e.copy(t || this.config);
      var o = {
        tenantId: this.config.tenantId,
        hide: this.config.hide,
        sat: this.config.visitorSatisfactionEvaluate,
        wechatAuth: this.config.wechatAuth,
        hideKeyboard: this.config.hideKeyboard,
        eventCollector: this.config.eventCollector,
        resources: this.config.resources
      };
      if (this.config.agentName && (o.agentName = this.config.agentName), this.config.emgroup && (o.emgroup = this.config.emgroup), this.config.to && (o.to = this.config.to), this.config.xmppServer && (o.xmppServer = this.config.xmppServer), this.config.restServer && (o.restServer = this.config.restServer), this.config.offDutyWord && (o.offDutyWord = this.config.offDutyWord), this.config.offDutyType && (o.offDutyType = this.config.offDutyType), this.config.language && (o.language = this.config.language), this.config.appid && (o.appid = this.config.appid), this.config.grUserId && (o.grUserId = this.config.grUserId), this.config.appKey && (o.appKey = encodeURIComponent(this.config.appKey)), this.config.user && this.config.user.username && (o.user = this.config.user.username), "undefined" != typeof this.config.hideStatus && "" !== this.config.hideStatus && (o.hideStatus = this.config.hideStatus), "undefined" != typeof this.config.ticket && "" !== this.config.ticket && (o.ticket = this.config.ticket), this.url = e.updateAttribute(this.url, o, t.path), this.config.user.username || (this.config.user.username = e.get((this.config.to || "") + this.config.tenantId + (this.config.emgroup || ""))), this.config.guestId = e.getStore("guestId"), this.position = {
          x: this.config.dialogPosition.x.slice(0, -2),
          y: this.config.dialogPosition.y.slice(0, -2)
        }, this.rect = {
          width: +this.config.dialogWidth.slice(0, -2),
          height: +this.config.dialogHeight.slice(0, -2)
        }, this.iframe.frameBorder = 0, this.iframe.allowTransparency = "true", this.iframe.style.cssText = ["z-index:16777269;", "overflow:hidden;", "position:fixed;", "bottom:10px;", "right:-5px;", "border:none;", "width:" + this.config.dialogWidth + ";", "height:0;", "display:none;", "transition:all .01s;"].join(""), this.shadow.style.cssText = ["display:none;", "cursor:move;", "z-index:16777270;", "position:fixed;", "bottom:" + this.config.dialogPosition.y + ";", "right:" + this.config.dialogPosition.x + ";", "border:none;", "width:" + this.config.dialogWidth + ";", "height:" + this.config.dialogHeight + ";", "border-radius:4px;", "box-shadow: 0 4px 8px rgba(0,0,0,.2);", "border-radius: 4px;"].join(""), this.shadow.style.background = "url(" + location.protocol + this.config.staticPath + "/img/drag.png) no-repeat", this.shadow.style.backgroundSize = "100% 100%", this.config.hide ? (this.iframe.style.height = "0", this.iframe.style.width = "0") : (this.iframe.style.height = "37px", this.iframe.style.width = "104px"), e.isMobile) {
        this.iframe.style.cssText += "left:0;bottom:0", this.iframe.style.width = "100%", this.iframe.style.right = "0";
        var n = {};
        n.domain = this.config.domain, n.path = this.config.path, n.staticPath = this.config.staticPath, this.config.user && (n.user = this.config.user), e.setStore("emconfig" + this.config.tenantId, e.code.encode(JSON.stringify(n)))
      }
      return this.iframe.src = this.url, this.ready = i, this
    }, r.prototype.open = function() {
      var t = this.iframe;
      if (!this.show) return this.show = !0, e.isMobile ? (t.style.width = "100%", t.style.height = "100%", t.style.right = "0", t.style.bottom = "0", t.style.borderRadius = "0", t.style.cssText += "box-shadow: none;") : (t.style.width = this.config.dialogWidth, t.style.height = this.config.dialogHeight, t.style.visibility = "visible", t.style.right = this.position.x + "px", t.style.bottom = this.position.y + "px", t.style.cssText += "box-shadow: 0 4px 8px rgba(0,0,0,.2);border-radius: 4px;border: 1px solid #ccc\\9;"), t.style.visibility = "visible", this.message && this.message.send(easemobim.EVENTS.SHOW), this
    }, r.prototype.close = function() {
      var e = this.iframe;
      if (this.show !== !1) return this.show = !1, clearTimeout(t), e.style.boxShadow = "none", e.style.borderRadius = "4px;", e.style.left = "auto", e.style.top = "auto", e.style.right = "-5px", e.style.bottom = "10px", e.style.border = "none", this.config.hide ? (e.style.visibility = "hidden", e.style.width = "1px", e.style.height = "1px") : (e.style.height = "37px", e.style.width = "104px"), this.message && this.message.send(easemobim.EVENTS.CLOSE), this
    }, r.prototype.send = function(e) {
      this.message.send({
        event: "ext",
        data: e
      })
    }, r.prototype.sendText = function(e) {
      this.message.send({
        event: "textmsg",
        data: e
      })
    }, easemobim.Iframe = r
  }(easemobim.utils),
  function(e, t) {
    "use strict";

    function i() {
      a = o.copy(s), o.extend(a, easemobim.config), c = o.copy(a);
      var e = "" !== o.convertFalse(c.hide) ? c.hide : r.json.hide,
        t = "" !== o.convertFalse(c.resources) ? c.resources : r.json.resources,
        i = "" !== o.convertFalse(c.satisfaction) ? c.satisfaction : r.json.sat;
      c.tenantId = c.tenantId || r.json.tenantId, c.hide = o.convertFalse(e), c.resources = o.convertFalse(t), c.satisfaction = o.convertFalse(i), c.domain = c.domain || r.domain, c.path = c.path || r.domain + "/webim", c.staticPath = c.staticPath || r.domain + "/webim/static"
    }
    var o = easemobim.utils;
    easemobim.config = easemobim.config || {}, easemobim.version = "43.12.013", easemobim.tenants = {};
    var n, s = {
        tenantId: "",
        to: "",
        agentName: "",
        appKey: "",
        domain: "",
        path: "",
        ticket: !0,
        staticPath: "",
        buttonText: "联系客服",
        dialogWidth: "360px",
        dialogHeight: "550px",
        dragenable: !0,
        minimum: !0,
        soundReminder: !0,
        dialogPosition: {
          x: "10px",
          y: "10px"
        },
        user: {
          username: "",
          password: "",
          token: ""
        }
      },
      a = o.copy(s),
      r = o.getConfig(),
      c = {};
    if (easemobim.titleSlide(), easemobim.notify(), i(), easemobim.config.grUserId = o.get("gr_user_id"), e.easemobIM = function(e) {
        easemobim.bind({
          emgroup: e
        })
      }, e.easemobIMS = function(e, t) {
        easemobim.bind({
          tenantId: e,
          emgroup: t
        })
      }, easemobim.bind = function(t) {
        t = t || {}, t.emgroup = t.emgroup || easemobim.config.emgroup || "";
        var s = t.tenantId + t.emgroup;
        for (var a in easemobim.tenants) easemobim.tenants.hasOwnProperty(a) && easemobim.tenants[a].close();
        if (n = easemobim.tenants[s]) n.open();
        else {
          if (i(), o.extend(c, t), !c.tenantId) return void console.warn("未指定tenantId!");
          n = easemobim.Iframe(c), easemobim.tenants[s] = n, n.set(c, o.isMobile ? null : n.open)
        }
        if (o.isMobile) {
          c.extMsg && o.setStore(c.tenantId + c.emgroup + "ext", JSON.stringify(c.extMsg)), c.visitor && o.setStore(c.tenantId + c.emgroup + "visitor", JSON.stringify(c.visitor));
          for (var r = e.event.srcElement || e.event.target, d = 5; r && "A" !== r.nodeName && d--;) r = r.parentNode;
          if (!r || "A" !== r.nodeName) return;
          r.setAttribute("href", n.url), r.setAttribute("target", "_blank")
        }
      }, easemobim.sendExt = function(e) {
        n.send({
          ext: e
        })
      }, easemobim.sendText = function(e) {
        n && n.sendText(e)
      }, (!c.hide || c.autoConnect || c.eventCollector) && c.tenantId) {
      var d = a.tenantId + (a.emgroup || "");
      n = easemobim.tenants[d] || easemobim.Iframe(c), easemobim.tenants[d] = n, n.set(c, n.close), easemobim.config.eventCollector = !1
    }
    "object" == typeof module && "object" == typeof module.exports ? module.exports = easemobim : "function" == typeof define && (define.amd || define.cmd) && define([], function() {
      return easemobim
    })
  }(window, void 0);