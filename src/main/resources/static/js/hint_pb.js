function sendRequest(a) {
    window.parent.postMessage ? window.parent.postMessage("sg_transfer_send\n" + a, "*") : (new Image).src = a
}

function m_s() {
    var a = 1E3 * (new Date).getTime() + Math.round(1E3 * Math.random());
    0 > document.cookie.indexOf("SUV=") && (document.cookie = "SUV=" + a + ";path=/;expires=Sun, 29 July 2046 00:00:00 UTC;domain=sogou.com")
}

m_s();

function isIE() {
    return 0 < navigator.userAgent.indexOf("MSIE")
}

var sogou_last_mousedown_time = 0, sogou_mousemove_distance = 0,
    sogou_old_document_click = isIE() ? document.body.onclick : document.onclick,
    sogou_old_document_mousedown = document.onmousedown, sogou_old_document_mousemove = document.onmousemove;
isIE() ? document.body.onclick = function (a) {
    uigs_para.mmc = (new Date).getTime() - sogou_last_mousedown_time;
    "function" == typeof sogou_old_document_click && sogou_old_document_click(a)
} : document.onclick = function (a) {
    uigs_para.mmc = (new Date).getTime() - sogou_last_mousedown_time;
    "function" == typeof sogou_old_document_click && sogou_old_document_click(a)
};
document.onmousemove = function (a) {
    uigs_para.mml = ++sogou_mousemove_distance;
    "function" == typeof sogou_old_document_mousemove && sogou_old_document_mousemove(a)
};
document.onmousedown = function (a) {
    sogou_last_mousedown_time = (new Date).getTime();
    "function" == typeof sogou_old_document_mousedown && sogou_old_document_mousedown(a)
};
var uigs_clpingbackurl = "http://pb.sogou.com/cl.gif", uigs_pvpingbackurl = "http://pb.sogou.com/pv.gif",
    uigs_version = "v1.9.4", uigs_staytime = (new Date).getTime();
"https:" == location.protocol && (uigs_clpingbackurl = "https://pb.sogou.com/cl.gif", uigs_pvpingbackurl = "https://pb.sogou.com/pv.gif");
"undefined" != typeof uigs_para && "undefined" != typeof uigs_para.uigs_clpingbackurl && "" != uigs_para.uigs_clpingbackurl && (uigs_clpingbackurl = uigs_para.uigs_clpingbackurl);
"undefined" != typeof uigs_para && "undefined" != typeof uigs_para.uigs_pvpingbackurl && "" != uigs_para.uigs_pvpingbackurl && (uigs_pvpingbackurl = uigs_para.uigs_pvpingbackurl);
for (var uigs_cookieArray = {}, uigs_acookie = document.cookie.split("; "), uigs_pbs = [], i = 0; i < uigs_acookie.length; i++) {
    var arr = uigs_acookie[i].split("=");
    uigs_cookieArray[arr[0]] = arr[1]
}

function uigs_getCookie(a) {
    return uigs_cookieArray[a]
}

function uigs_getCookiePara() {
    var a = "";
    if ("undefined" != typeof uigs_para && "undefined" != typeof uigs_para.uigs_cookie) for (var b = uigs_para.uigs_cookie.split(","), c = 0, d = b.length; c < d; c++) "undefined" != typeof uigs_getCookie(b[c]) && "SUV" != b[c] && (a = "" == a ? b[c] + "=" + uigs_getCookie(b[c]) : a + "&" + b[c] + "=" + uigs_getCookie(b[c]));
    return encodeURIComponent(a)
}

uigs_d = 1E3 * (new Date).getTime() + Math.round(1E3 * Math.random());
"undefined" != typeof uigs_para && "undefined" == typeof uigs_para.uigs_uuid && (uigs_para.uigs_uuid = uigs_d);
"undefined" != typeof uigs_para && "undefined" == typeof uigs_para.abtestid && (uigs_para.abtestid = uigs_getCookie("ABTEST") ? uigs_getCookie("ABTEST").substring(0, 1) : "0");

function uigs_getPingbackhead() {
    if ("undefined" != typeof uigs_para && "undefined" != typeof uigs_para.uigs_productid) {
        uigs_c = 1E3 * (new Date).getTime() + Math.round(1E3 * Math.random());
        r = "function" == typeof encodeURIComponent ? encodeURIComponent(document.referrer) : document.referrer;
        var a = "?uigs_productid=" + uigs_para.uigs_productid + "&uigs_t=" + uigs_c;
        "undefined" != typeof uigs_para.uigs_cookie && (a += "&uigs_cookie=" + uigs_getCookiePara());
        "undefined" != typeof uigs_para.uigs_uuid && (a += "&uigs_uuid=" + uigs_para.uigs_uuid);
        for (i in uigs_para) "uigs_cookie" != i && "uigs_uuid" != i && "uigs_productid" != i && (a += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(uigs_para[i]));
        a += "&uigs_version=" + uigs_version + "&uigs_refer=" + r;
        "undefined" != typeof bing_pb_base_url && bing_pb_base_url && (a += "&from_bing=1");
        return a
    }
    return ""
}

function uigs_pv() {
    uigs_getCookie("SUV") || (uigs_c = 1E3 * (new Date).getTime() + Math.round(1E3 * Math.random()), cookie = "SUV=" + uigs_c + ";path=/;expires=Tue, 19-Jan-2046 00:00:00 GMT;domain=sogou.com");
    if ("undefined" != typeof uigs_para && "undefined" != typeof uigs_para.uigs_productid) {
        var a = uigs_pvpingbackurl + uigs_getPingbackhead(), b = uigs_pbs.length;
        uigs_pbs[b] = new Image;
        setTimeout(function () {
            sendRequest && sendRequest(a, uigs_pbs[b])
        }, 1E3)
    }
}

var uigs_spv;
"undefined" != typeof uigs_pvflag && uigs_pvflag || uigs_spv || uigs_pv();
uigs_spv = 1;
$uigs_d = document;
var uigs_oldclick = isIE() ? $uigs_d.body.onclick : $uigs_d.onclick;
isIE() ? $uigs_d.body.onclick = function (a) {
    var b;
    uigs_oldclick && (b = uigs_oldclick(a));
    uigs_clickit(a);
    return b
} : $uigs_d.onclick = function (a) {
    var b;
    uigs_oldclick && (b = uigs_oldclick(a));
    uigs_clickit(a);
    return b
};
var uigs_clickit = function (a) {
    if ("undefined" != typeof uigs_para && "undefined" != typeof uigs_para.uigs_productid && !(a && 0 != a.button || !a && 0 != window.event.button)) try {
        a = a || window.event;
        for (var b = a.target ? a.target : a.srcElement, c = a = "", d = "", e = "", f = "", g = "", h = ""; "" == a;) {
            d = b.tagName.toUpperCase();
            a || (a = b.uigs || b.getAttribute("uigs") || "");
            if (a && "nouigs" == a) return;
            if ("A" == d || "LINK" == d || "AREA" == d || "INPUT" == d || "DIV" == d) c = d;
            b.href && (e = b.href);
            "A" == d && b.innerHTML && (f = b.innerHTML);
            try {
                if (c == uigs_para.uigs_pbtag) {
                    for (a = b.getAttribute("uigs-id") || b.id || b.getAttribute("id") || ""; "" == a;) {
                        if (b.parentNode) b = b.parentNode; else break;
                        if (!b.tagName) break;
                        a || (a = b.getAttribute("uigs-id") || b.id || b.getAttribute("id") || "")
                    }
                    break
                }
            } catch (k) {
            }
            if (b.parentNode) b = b.parentNode; else break;
            if (!b.tagName) break
        }
        (g = b.getAttribute("cacheStrategy") || "") && (h = "&cacheStrategy=" + encodeURIComponent(g));
        (c && a || c && c == uigs_para.uigs_pbtag) && uigsPB(a + "&href=" + e, f, h)
    } catch (k) {
    }
};

function uigsPB(a, b, c) {
    if ("undefined" != typeof uigs_para && "undefined" != typeof uigs_para.uigs_productid) {
        var d = uigs_staytime;
        0 > uigs_staytime && (d = 0 - uigs_staytime);
        a = uigs_clpingbackurl + uigs_getPingbackhead() + "&uigs_st=" + parseInt(((new Date).getTime() - d) / 1E3) + "&uigs_cl=" + encodeURIComponent(a) + "&uigs_id=" + encodeURIComponent(("" + a).split("&")[0]);
        b && (a = a + "&txt=" + encodeURIComponent(b));
        c && (a += c);
        b = uigs_pbs.length;
        uigs_pbs[b] = new Image;
        sendRequest(a, uigs_pbs[b])
    }
}

var uigs_al = !1;

function uigs_iecompattest() {
    return document.compatMode && "BackCompat" != document.compatMode ? document.documentElement : document.body
}

var uigs_judgeBottom = function () {
    try {
        var a = uigs_iecompattest().clientHeight, b = uigs_iecompattest().scrollHeight,
            c = uigs_iecompattest().scrollTop;
        if (100 < c && 100 > b - a - c && !uigs_al) {
            uigs_al = !0;
            var a = uigs_staytime, d;
            0 > uigs_staytime && (a = 0 - uigs_staytime);
            d = "tob=" + parseInt(((new Date).getTime() - a) / 1E3);
            uigsPB(d)
        }
    } catch (e) {
    }
};
window.setInterval(uigs_judgeBottom, 100);