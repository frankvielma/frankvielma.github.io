!function (e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length, n = re.type(e);
    return "function" !== n && !re.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  function r(e) {
    var t = {};
    return re.each(e.match(ve) || [], function (e, n) {
      t[n] = !0
    }), t
  }

  function s() {
    Q.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), re.ready()
  }

  function a() {
    this.expando = re.expando + a.uid++
  }

  function l(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Ce, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
      try {
        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? re.parseJSON(n) : n)
      } catch (e) {
      }
      _e.set(e, t, n)
    } else n = void 0;
    return n
  }

  function u(e, t, n, i) {
    var o, r = 1, s = 20, a = i ? function () {
        return i.cur()
      } : function () {
        return re.css(e, t, "")
      }, l = a(), u = n && n[3] || (re.cssNumber[t] ? "" : "px"),
      c = (re.cssNumber[t] || "px" !== u && +l) && Se.exec(re.css(e, t));
    if (c && c[3] !== u) {
      u = u || c[3], n = n || [], c = +l || 1;
      do {
        r = r || ".5", c /= r, re.style(e, t, c + u)
      } while (r !== (r = a() / l) && 1 !== r && --s)
    }
    return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
  }

  function c(e, t) {
    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
  }

  function p() {
    return !1
  }

  function g(e, t, n, i, o, r) {
    var s, a;
    if ("object" == typeof t) {
      "string" != typeof n && (i = i || n, n = void 0);
      for (a in t) g(e, a, n, i, t[a], r);
      return e
    }
    if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = p; else if (!o) return e;
    return 1 === r && (s = o, o = function (e) {
      return re().off(e), s.apply(this, arguments)
    }, o.guid = s.guid || (s.guid = re.guid++)), e.each(function () {
      re.event.add(this, t, o, i, n)
    })
  }

  function v(e, t) {
    return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function y(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function b(e) {
    var t = Me.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function x(e, t) {
    var n, i, o, r, s, a, l, u;
    if (1 === t.nodeType) {
      if (we.hasData(e) && (r = we.access(e), s = we.set(t, r), u = r.events)) {
        delete s.handle, s.events = {};
        for (o in u) for (n = 0, i = u[o].length; i > n; n++) re.event.add(t, o, u[o][n])
      }
      _e.hasData(e) && (a = _e.access(e), l = re.extend({}, a), _e.set(t, l))
    }
  }

  function w(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function _(e, t, n, i) {
    t = J.apply([], t);
    var o, r, s, a, l, u, h = 0, d = e.length, p = d - 1, m = t[0], g = re.isFunction(m);
    if (g || d > 1 && "string" == typeof m && !ie.checkClone && $e.test(m)) return e.each(function (o) {
      var r = e.eq(o);
      g && (t[0] = m.call(this, o, r.html())), _(r, t, n, i)
    });
    if (d && (o = f(t, e[0].ownerDocument, !1, e, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
      for (s = re.map(c(o, "script"), y), a = s.length; d > h; h++) l = o, h !== p && (l = re.clone(l, !0, !0), a && re.merge(s, c(l, "script"))), n.call(e[h], l, h);
      if (a) for (u = s[s.length - 1].ownerDocument, re.map(s, b), h = 0; a > h; h++) l = s[h], De.test(l.type || "") && !we.access(l, "globalEval") && re.contains(u, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(qe, "")))
    }
    return e
  }

  function k(e, t, n) {
    for (var i, o = t ? re.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || re.cleanData(c(i)), i.parentNode && (n && re.contains(i.ownerDocument, i) && h(c(i, "script")), i.parentNode.removeChild(i));
    return e
  }

  function C(e, t) {
    var n = re(t.createElement(e)).appendTo(t.body), i = re.css(n[0], "display");
    return n.detach(), i
  }

  function T(e) {
    var t = Q, n = Re[e];
    return n || (n = C(e, t), "none" !== n && n || (We = (We || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = C(e, t), We.detach()), Re[e] = n), n
  }

  function S(e, t, n) {
    var i, o, r, s, a = e.style;
    return n = n || Ue(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)), n && !ie.pixelMarginRight() && Be.test(s) && ze.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
  }

  function E(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function N(e) {
    if (e in Ke) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;) if ((e = Je[n] + t) in Ke) return e
  }

  function P(e, t, n) {
    var i = Se.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function A(e, t, n, i, o) {
    for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += re.css(e, n + Ee[r], !0, o)), i ? ("content" === n && (s -= re.css(e, "padding" + Ee[r], !0, o)), "margin" !== n && (s -= re.css(e, "border" + Ee[r] + "Width", !0, o))) : (s += re.css(e, "padding" + Ee[r], !0, o), "padding" !== n && (s += re.css(e, "border" + Ee[r] + "Width", !0, o)));
    return s
  }

  function D(e, t, n) {
    var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = Ue(e),
      s = "border-box" === re.css(e, "boxSizing", !1, r);
    if (0 >= o || null == o) {
      if (o = S(e, t, r), (0 > o || null == o) && (o = e.style[t]), Be.test(o)) return o;
      i = s && (ie.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
    }
    return o + A(e, t, n || (s ? "border" : "content"), i, r) + "px"
  }

  function I(e, t) {
    for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = we.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ne(i) && (r[s] = we.access(i, "olddisplay", T(i.nodeName)))) : (o = Ne(i), "none" === n && o || we.set(i, "olddisplay", o ? n : re.css(i, "display"))));
    for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
    return e
  }

  function j(e, t, n, i, o) {
    return new j.prototype.init(e, t, n, i, o)
  }

  function H() {
    return e.setTimeout(function () {
      Ze = void 0
    }), Ze = re.now()
  }

  function F(e, t) {
    var n, i = 0, o = {height: e};
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ee[i], o["margin" + n] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o
  }

  function L(e, t, n) {
    for (var i, o = (M.tweeners[t] || []).concat(M.tweeners["*"]), r = 0, s = o.length; s > r; r++) if (i = o[r].call(n, t, e)) return i
  }

  function O(e, t, n) {
    var i, o, r, s, a, l, u, c = this, h = {}, f = e.style, d = e.nodeType && Ne(e), p = we.get(e, "fxshow");
    n.queue || (a = re._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
      a.unqueued || l()
    }), a.unqueued++, c.always(function () {
      c.always(function () {
        a.unqueued--, re.queue(e, "fx").length || a.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = re.css(e, "display"), "inline" === ("none" === u ? we.get(e, "olddisplay") || T(e.nodeName) : u) && "none" === re.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function () {
      f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
    }));
    for (i in t) if (o = t[i], tt.exec(o)) {
      if (delete t[i], r = r || "toggle" === o, o === (d ? "hide" : "show")) {
        if ("show" !== o || !p || void 0 === p[i]) continue;
        d = !0
      }
      h[i] = p && p[i] || re.style(e, i)
    } else u = void 0;
    if (re.isEmptyObject(h)) "inline" === ("none" === u ? T(e.nodeName) : u) && (f.display = u); else {
      p ? "hidden" in p && (d = p.hidden) : p = we.access(e, "fxshow", {}), r && (p.hidden = !d), d ? re(e).show() : c.done(function () {
        re(e).hide()
      }), c.done(function () {
        var t;
        we.remove(e, "fxshow");
        for (t in h) re.style(e, t, h[t])
      });
      for (i in h) s = L(d ? p[i] : 0, i, c), i in p || (p[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
    }
  }

  function $(e, t) {
    var n, i, o, r, s;
    for (n in e) if (i = re.camelCase(n), o = t[i], r = e[n], re.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = re.cssHooks[i]) && "expand" in s) {
      r = s.expand(r), delete e[i];
      for (n in r) n in e || (e[n] = r[n], t[n] = o)
    } else t[i] = o
  }

  function M(e, t, n) {
    var i, o, r = 0, s = M.prefilters.length, a = re.Deferred().always(function () {
      delete l.elem
    }), l = function () {
      if (o) return !1;
      for (var t = Ze || H(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
      return a.notifyWith(e, [u, r, n]), 1 > r && l ? n : (a.resolveWith(e, [u]), !1)
    }, u = a.promise({
      elem: e,
      props: re.extend({}, t),
      opts: re.extend(!0, {specialEasing: {}, easing: re.easing._default}, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Ze || H(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var i = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
        return u.tweens.push(i), i
      },
      stop: function (t) {
        var n = 0, i = t ? u.tweens.length : 0;
        if (o) return this;
        for (o = !0; i > n; n++) u.tweens[n].run(1);
        return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
      }
    }), c = u.props;
    for ($(c, u.opts.specialEasing); s > r; r++) if (i = M.prefilters[r].call(u, e, c, u.opts)) return re.isFunction(i.stop) && (re._queueHooks(u.elem, u.opts.queue).stop = re.proxy(i.stop, i)), i;
    return re.map(c, L, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
  }

  function q(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function W(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, o = 0, r = t.toLowerCase().match(ve) || [];
      if (re.isFunction(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }

  function R(e, t, n, i) {
    function o(a) {
      var l;
      return r[a] = !0, re.each(e[a] || [], function (e, a) {
        var u = a(t, n, i);
        return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
      }), l
    }

    var r = {}, s = e === vt;
    return o(t.dataTypes[0]) || !r["*"] && o("*")
  }

  function z(e, t) {
    var n, i, o = re.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && re.extend(!0, e, i), e
  }

  function B(e, t, n) {
    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i) for (o in a) if (a[o] && a[o].test(i)) {
      l.unshift(o);
      break
    }
    if (l[0] in n) r = l[0]; else {
      for (o in n) {
        if (!l[0] || e.converters[o + " " + l[0]]) {
          r = o;
          break
        }
        s || (s = o)
      }
      r = r || s
    }
    return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
  }

  function U(e, t, n, i) {
    var o, r, s, a, l, u = {}, c = e.dataTypes.slice();
    if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
    for (r = c.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
      if (!(s = u[l + " " + r] || u["* " + r])) for (o in u) if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
        !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
        break
      }
      if (!0 !== s) if (s && e.throws) t = s(t); else try {
        t = s(t)
      } catch (e) {
        return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
      }
    }
    return {state: "success", data: t}
  }

  function X(e, t, n, i) {
    var o;
    if (re.isArray(t)) re.each(t, function (t, o) {
      n || xt.test(e) ? i(e, o) : X(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
    }); else if (n || "object" !== re.type(t)) i(e, t); else for (o in t) X(e + "[" + o + "]", t[o], n, i)
  }

  function Y(e) {
    return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }

  var V = [], Q = e.document, G = V.slice, J = V.concat, K = V.push, Z = V.indexOf, ee = {}, te = ee.toString,
    ne = ee.hasOwnProperty, ie = {}, oe = "2.2.4", re = function (e, t) {
      return new re.fn.init(e, t)
    }, se = function (e, t) {
      return t.toUpperCase()
    };
  re.fn = re.prototype = {
    jquery: oe, constructor: re, selector: "", length: 0, toArray: function () {
      return G.call(this)
    }, get: function (e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
    }, pushStack: function (e) {
      var t = re.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    }, each: function (e) {
      return re.each(this, e)
    }, map: function (e) {
      return this.pushStack(re.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    }, slice: function () {
      return this.pushStack(G.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: K, sort: V.sort, splice: V.splice
  }, re.extend = re.fn.extend = function () {
    var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
    for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], i = e[t], s !== i && (u && i && (re.isPlainObject(i) || (o = re.isArray(i))) ? (o ? (o = !1, r = n && re.isArray(n) ? n : []) : r = n && re.isPlainObject(n) ? n : {}, s[t] = re.extend(u, r, i)) : void 0 !== i && (s[t] = i));
    return s
  }, re.extend({
    expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isFunction: function (e) {
      return "function" === re.type(e)
    }, isArray: Array.isArray, isWindow: function (e) {
      return null != e && e === e.window
    }, isNumeric: function (e) {
      var t = e && e.toString();
      return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
    }, isPlainObject: function (e) {
      var t;
      if ("object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
      if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
      for (t in e) ;
      return void 0 === t || ne.call(e, t)
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
    }, globalEval: function (e) {
      var t, n = eval;
      (e = re.trim(e)) && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
    }, camelCase: function (e) {
      return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, se)
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t) {
      var i, o = 0;
      if (n(e)) for (i = e.length; i > o && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
      return e
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }, makeArray: function (e, t) {
      var i = t || [];
      return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
    }, inArray: function (e, t, n) {
      return null == t ? -1 : Z.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
      return e.length = o, e
    }, grep: function (e, t, n) {
      for (var i = [], o = 0, r = e.length, s = !n; r > o; o++) !t(e[o], o) !== s && i.push(e[o]);
      return i
    }, map: function (e, t, i) {
      var o, r, s = 0, a = [];
      if (n(e)) for (o = e.length; o > s; s++) null != (r = t(e[s], s, i)) && a.push(r); else for (s in e) null != (r = t(e[s], s, i)) && a.push(r);
      return J.apply([], a)
    }, guid: 1, proxy: function (e, t) {
      var n, i, o;
      return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (i = G.call(arguments, 2), o = function () {
        return e.apply(t || this, i.concat(G.call(arguments)))
      }, o.guid = e.guid = e.guid || re.guid++, o) : void 0
    }, now: Date.now, support: ie
  }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = V[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    ee["[object " + t + "]"] = t.toLowerCase()
  });
  var ae = function (e) {
    function t(e, t, n, i) {
      var o, r, s, a, u, h, f, d, p = t && t.ownerDocument, m = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
      if (!i && ((t ? t.ownerDocument || t : $) !== A && P(t), t = t || A, I)) {
        if (11 !== m && (h = me.exec(e))) if (o = h[1]) {
          if (9 === m) {
            if (!(s = t.getElementById(o))) return n;
            if (s.id === o) return n.push(s), n
          } else if (p && (s = p.getElementById(o)) && L(t, s) && s.id === o) return n.push(s), n
        } else {
          if (h[2]) return G.apply(n, t.getElementsByTagName(e)), n;
          if ((o = h[3]) && b.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(o)), n
        }
        if (b.qsa && !z[e + " "] && (!j || !j.test(e))) {
          if (1 !== m) p = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(ve, "\\$&") : t.setAttribute("id", a = O), f = k(e), r = f.length, u = ce.test(a) ? "#" + a : "[id='" + a + "']"; r--;) f[r] = u + " " + c(f[r]);
            d = f.join(","), p = ge.test(e) && l(t.parentNode) || t
          }
          if (d) try {
            return G.apply(n, p.querySelectorAll(d)), n
          } catch (e) {
          } finally {
            a === O && t.removeAttribute("id")
          }
        }
      }
      return T(e.replace(re, "$1"), t, n, i)
    }

    function n() {
      function e(n, i) {
        return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
      }

      var t = [];
      return e
    }

    function i(e) {
      return e[O] = !0, e
    }

    function o(e) {
      var t = A.createElement("div");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function r(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
    }

    function s(e, t) {
      var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1
    }

    function a(e) {
      return i(function (t) {
        return t = +t, i(function (n, i) {
          for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
        })
      })
    }

    function l(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }

    function u() {
    }

    function c(e) {
      for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
      return i
    }

    function h(e, t, n) {
      var i = t.dir, o = n && "parentNode" === i, r = q++;
      return t.first ? function (t, n, r) {
        for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, r)
      } : function (t, n, s) {
        var a, l, u, c = [M, r];
        if (s) {
          for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
        } else for (; t = t[i];) if (1 === t.nodeType || o) {
          if (u = t[O] || (t[O] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === M && a[1] === r) return c[2] = a[2];
          if (l[i] = c, c[2] = e(t, n, s)) return !0
        }
      }
    }

    function f(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
        return !0
      } : e[0]
    }

    function d(e, n, i) {
      for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
      return i
    }

    function p(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, u = null != t; l > a; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), u && t.push(a)));
      return s
    }

    function m(e, t, n, o, r, s) {
      return o && !o[O] && (o = m(o)), r && !r[O] && (r = m(r, s)), i(function (i, s, a, l) {
        var u, c, h, f = [], m = [], g = s.length, v = i || d(t || "*", a.nodeType ? [a] : a, []),
          y = !e || !i && t ? v : p(v, f, e, a, l), b = n ? r || (i ? e : g || o) ? [] : s : y;
        if (n && n(y, b, a, l), o) for (u = p(b, m), o(u, [], a, l), c = u.length; c--;) (h = u[c]) && (b[m[c]] = !(y[m[c]] = h));
        if (i) {
          if (r || e) {
            if (r) {
              for (u = [], c = b.length; c--;) (h = b[c]) && u.push(y[c] = h);
              r(null, b = [], u, l)
            }
            for (c = b.length; c--;) (h = b[c]) && (u = r ? K(i, h) : f[c]) > -1 && (i[u] = !(s[u] = h))
          }
        } else b = p(b === s ? b.splice(g, b.length) : b), r ? r(null, s, b, l) : G.apply(s, b)
      })
    }

    function g(e) {
      for (var t, n, i, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = h(function (e) {
        return e === t
      }, s, !0), u = h(function (e) {
        return K(t, e) > -1
      }, s, !0), d = [function (e, n, i) {
        var o = !r && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
        return t = null, o
      }]; o > a; a++) if (n = x.relative[e[a].type]) d = [h(f(d), n)]; else {
        if (n = x.filter[e[a].type].apply(null, e[a].matches), n[O]) {
          for (i = ++a; o > i && !x.relative[e[i].type]; i++) ;
          return m(a > 1 && f(d), a > 1 && c(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(re, "$1"), n, i > a && g(e.slice(a, i)), o > i && g(e = e.slice(i)), o > i && c(e))
        }
        d.push(n)
      }
      return f(d)
    }

    function v(e, n) {
      var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, u) {
        var c, h, f, d = 0, m = "0", g = i && [], v = [], y = S, b = i || r && x.find.TAG("*", u),
          w = M += null == y ? 1 : Math.random() || .1, _ = b.length;
        for (u && (S = s === A || s || u); m !== _ && null != (c = b[m]); m++) {
          if (r && c) {
            for (h = 0, s || c.ownerDocument === A || (P(c), a = !I); f = e[h++];) if (f(c, s || A, a)) {
              l.push(c);
              break
            }
            u && (M = w)
          }
          o && ((c = !f && c) && d--, i && g.push(c))
        }
        if (d += m, o && m !== d) {
          for (h = 0; f = n[h++];) f(g, v, s, a);
          if (i) {
            if (d > 0) for (; m--;) g[m] || v[m] || (v[m] = V.call(l));
            v = p(v)
          }
          G.apply(l, v), u && !i && v.length > 0 && d + n.length > 1 && t.uniqueSort(l)
        }
        return u && (M = w, S = y), g
      };
      return o ? i(s) : s
    }

    var y, b, x, w, _, k, C, T, S, E, N, P, A, D, I, j, H, F, L, O = "sizzle" + 1 * new Date, $ = e.document, M = 0,
      q = 0, W = n(), R = n(), z = n(), B = function (e, t) {
        return e === t && (N = !0), 0
      }, U = 1 << 31, X = {}.hasOwnProperty, Y = [], V = Y.pop, Q = Y.push, G = Y.push, J = Y.slice, K = function (e, t) {
        for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
        return -1
      },
      Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
      ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
      oe = new RegExp(ee + "+", "g"), re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
      se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie),
      ce = new RegExp("^" + te + "$"), he = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te + "|[*])"),
        ATTR: new RegExp("^" + ne),
        PSEUDO: new RegExp("^" + ie),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + Z + ")$", "i"),
        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
      }, fe = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, pe = /^[^{]+\{\s*\[native \w/,
      me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = /'|\\/g,
      ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), be = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }, xe = function () {
        P()
      };
    try {
      G.apply(Y = J.call($.childNodes), $.childNodes), Y[$.childNodes.length].nodeType
    } catch (e) {
      G = {
        apply: Y.length ? function (e, t) {
          Q.apply(e, J.call(t))
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) ;
          e.length = n - 1
        }
      }
    }
    b = t.support = {}, _ = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, P = t.setDocument = function (e) {
      var t, n, i = e ? e.ownerDocument || e : $;
      return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, D = A.documentElement, I = !_(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), b.attributes = o(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), b.getElementsByTagName = o(function (e) {
        return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
      }), b.getElementsByClassName = pe.test(A.getElementsByClassName), b.getById = o(function (e) {
        return D.appendChild(e).id = O, !A.getElementsByName || !A.getElementsByName(O).length
      }), b.getById ? (x.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && I) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }, x.filter.ID = function (e) {
        var t = e.replace(ye, be);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }) : (delete x.find.ID, x.filter.ID = function (e) {
        var t = e.replace(ye, be);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), x.find.TAG = b.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, i = [], o = 0, r = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = r[o++];) 1 === n.nodeType && i.push(n);
          return i
        }
        return r
      }, x.find.CLASS = b.getElementsByClassName && function (e, t) {
        return void 0 !== t.getElementsByClassName && I ? t.getElementsByClassName(e) : void 0
      }, H = [], j = [], (b.qsa = pe.test(A.querySelectorAll)) && (o(function (e) {
        D.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + O + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || j.push(".#.+[+~]")
      }), o(function (e) {
        var t = A.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
      })), (b.matchesSelector = pe.test(F = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (e) {
        b.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), H.push("!=", ie)
      }), j = j.length && new RegExp(j.join("|")), H = H.length && new RegExp(H.join("|")), t = pe.test(D.compareDocumentPosition), L = t || pe.test(D.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1
      }, B = t ? function (e, t) {
        if (e === t) return N = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === $ && L($, e) ? -1 : t === A || t.ownerDocument === $ && L($, t) ? 1 : E ? K(E, e) - K(E, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return N = !0, 0;
        var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
        if (!o || !r) return e === A ? -1 : t === A ? 1 : o ? -1 : r ? 1 : E ? K(E, e) - K(E, t) : 0;
        if (o === r) return s(e, t);
        for (n = e; n = n.parentNode;) a.unshift(n);
        for (n = t; n = n.parentNode;) l.unshift(n);
        for (; a[i] === l[i];) i++;
        return i ? s(a[i], l[i]) : a[i] === $ ? -1 : l[i] === $ ? 1 : 0
      }, A) : A
    }, t.matches = function (e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== A && P(e), n = n.replace(le, "='$1']"), b.matchesSelector && I && !z[n + " "] && (!H || !H.test(n)) && (!j || !j.test(n))) try {
        var i = F.call(e, n);
        if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
      } catch (e) {
      }
      return t(n, A, null, [e]).length > 0
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== A && P(e), L(e, t)
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== A && P(e);
      var n = x.attrHandle[t.toLowerCase()], i = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
      return void 0 !== i ? i : b.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function (e) {
      var t, n = [], i = 0, o = 0;
      if (N = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(B), N) {
        for (; t = e[o++];) t === e[o] && (i = n.push(o));
        for (; i--;) e.splice(n[i], 1)
      }
      return E = null, e
    }, w = t.getText = function (e) {
      var t, n = "", i = 0, o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else for (; t = e[i++];) n += w(t);
      return n
    }, x = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: he,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(ye, be).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = W[e + " "];
          return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        }, ATTR: function (e, n, i) {
          return function (o) {
            var r = t.attr(o, e);
            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
          }
        }, CHILD: function (e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
          return 1 === i && 0 === o ? function (e) {
            return !!e.parentNode
          } : function (t, n, l) {
            var u, c, h, f, d, p, m = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode,
              v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
            if (g) {
              if (r) {
                for (; m;) {
                  for (f = t; f = f[m];) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  p = m = "only" === e && !p && "nextSibling"
                }
                return !0
              }
              if (p = [s ? g.firstChild : g.lastChild], s && y) {
                for (f = g, h = f[O] || (f[O] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[e] || [], d = u[0] === M && u[1], b = d && u[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (b = d = 0) || p.pop();) if (1 === f.nodeType && ++b && f === t) {
                  c[e] = [M, d, b];
                  break
                }
              } else if (y && (f = t, h = f[O] || (f[O] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[e] || [], d = u[0] === M && u[1], b = d), !1 === b) for (; (f = ++d && f && f[m] || (b = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (h = f[O] || (f[O] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), c[e] = [M, b]), f !== t));) ;
              return (b -= o) === i || b % i == 0 && b / i >= 0
            }
          }
        }, PSEUDO: function (e, n) {
          var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return r[O] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
            for (var i, o = r(e, n), s = o.length; s--;) i = K(e, o[s]), e[i] = !(t[i] = o[s])
          }) : function (e) {
            return r(e, 0, o)
          }) : r
        }
      },
      pseudos: {
        not: i(function (e) {
          var t = [], n = [], o = C(e.replace(re, "$1"));
          return o[O] ? i(function (e, t, n, i) {
            for (var r, s = o(e, null, i, []), a = e.length; a--;) (r = s[a]) && (e[a] = !(t[a] = r))
          }) : function (e, i, r) {
            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
          }
        }), has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0
          }
        }), contains: i(function (e) {
          return e = e.replace(ye, be), function (t) {
            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
          }
        }), lang: i(function (e) {
          return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(), function (t) {
            var n;
            do {
              if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }), target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        }, root: function (e) {
          return e === D
        }, focus: function (e) {
          return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
          return !1 === e.disabled
        }, disabled: function (e) {
          return !0 === e.disabled
        }, checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        }, parent: function (e) {
          return !x.pseudos.empty(e)
        }, header: function (e) {
          return de.test(e.nodeName)
        }, input: function (e) {
          return fe.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: a(function () {
          return [0]
        }), last: a(function (e, t) {
          return [t - 1]
        }), eq: a(function (e, t, n) {
          return [0 > n ? n + t : n]
        }), even: a(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }), odd: a(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }), lt: a(function (e, t, n) {
          for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
          return e
        }), gt: a(function (e, t, n) {
          for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    }, x.pseudos.nth = x.pseudos.eq;
    for (y in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[y] = function (e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }(y);
    for (y in{submit: !0, reset: !0}) x.pseudos[y] = function (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }(y);
    return u.prototype = x.filters = x.pseudos, x.setFilters = new u, k = t.tokenize = function (e, n) {
      var i, o, r, s, a, l, u, c = R[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (a = e, l = [], u = x.preFilter; a;) {
        i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ae.exec(a)) && (i = o.shift(), r.push({
          value: i,
          type: o[0].replace(re, " ")
        }), a = a.slice(i.length));
        for (s in x.filter) !(o = he[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
          value: i,
          type: s,
          matches: o
        }), a = a.slice(i.length));
        if (!i) break
      }
      return n ? a.length : a ? t.error(e) : R(e, l).slice(0)
    }, C = t.compile = function (e, t) {
      var n, i = [], o = [], r = z[e + " "];
      if (!r) {
        for (t || (t = k(e)), n = t.length; n--;) r = g(t[n]), r[O] ? i.push(r) : o.push(r);
        r = z(e, v(o, i)), r.selector = e
      }
      return r
    }, T = t.select = function (e, t, n, i) {
      var o, r, s, a, u, h = "function" == typeof e && e, f = !i && k(e = h.selector || e);
      if (n = n || [], 1 === f.length) {
        if (r = f[0] = f[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && b.getById && 9 === t.nodeType && I && x.relative[r[1].type]) {
          if (!(t = (x.find.ID(s.matches[0].replace(ye, be), t) || [])[0])) return n;
          h && (t = t.parentNode), e = e.slice(r.shift().value.length)
        }
        for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);) if ((u = x.find[a]) && (i = u(s.matches[0].replace(ye, be), ge.test(r[0].type) && l(t.parentNode) || t))) {
          if (r.splice(o, 1), !(e = i.length && c(r))) return G.apply(n, i), n;
          break
        }
      }
      return (h || C(e, f))(i, t, !I, n, !t || ge.test(e) && l(t.parentNode) || t), n
    }, b.sortStable = O.split("").sort(B).join("") === O, b.detectDuplicates = !!N, P(), b.sortDetached = o(function (e) {
      return 1 & e.compareDocumentPosition(A.createElement("div"))
    }), o(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || r("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), b.attributes && o(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || r("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }), o(function (e) {
      return null == e.getAttribute("disabled")
    }) || r(Z, function (e, t, n) {
      var i;
      return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), t
  }(e);
  re.find = ae, re.expr = ae.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = ae.uniqueSort, re.text = ae.getText, re.isXMLDoc = ae.isXML, re.contains = ae.contains;
  var le = function (e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
      if (o && re(e).is(n)) break;
      i.push(e)
    }
    return i
  }, ue = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
  }, ce = re.expr.match.needsContext, he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, fe = /^.[^:#\[\.,]*$/;
  re.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, re.fn.extend({
    find: function (e) {
      var t, n = this.length, i = [], o = this;
      if ("string" != typeof e) return this.pushStack(re(e).filter(function () {
        for (t = 0; n > t; t++) if (re.contains(o[t], this)) return !0
      }));
      for (t = 0; n > t; t++) re.find(e, o[t], i);
      return i = this.pushStack(n > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
    }, filter: function (e) {
      return this.pushStack(i(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(i(this, e || [], !0))
    }, is: function (e) {
      return !!i(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
    }
  });
  var de, pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (re.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (n = n || de, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : pe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), he.test(i[1]) && re.isPlainObject(t)) for (i in t) re.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return o = Q.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Q, this.selector = e, this
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
  }).prototype = re.fn, de = re(Q);
  var me = /^(?:parents|prev(?:Until|All))/, ge = {children: !0, contents: !0, next: !0, prev: !0};
  re.fn.extend({
    has: function (e) {
      var t = re(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; n > e; e++) if (re.contains(this, t[e])) return !0
      })
    }, closest: function (e, t) {
      for (var n, i = 0, o = this.length, r = [], s = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
        r.push(n);
        break
      }
      return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
    }, index: function (e) {
      return e ? "string" == typeof e ? Z.call(re(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), re.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return le(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return le(e, "parentNode", n)
    }, next: function (e) {
      return o(e, "nextSibling")
    }, prev: function (e) {
      return o(e, "previousSibling")
    }, nextAll: function (e) {
      return le(e, "nextSibling")
    }, prevAll: function (e) {
      return le(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return le(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return le(e, "previousSibling", n)
    }, siblings: function (e) {
      return ue((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return ue(e.firstChild)
    }, contents: function (e) {
      return e.contentDocument || re.merge([], e.childNodes)
    }
  }, function (e, t) {
    re.fn[e] = function (n, i) {
      var o = re.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && (ge[e] || re.uniqueSort(o), me.test(e) && o.reverse()), this.pushStack(o)
    }
  });
  var ve = /\S+/g;
  re.Callbacks = function (e) {
    e = "string" == typeof e ? r(e) : re.extend({}, e);
    var t, n, i, o, s = [], a = [], l = -1, u = function () {
      for (o = e.once, i = t = !0; a.length; l = -1) for (n = a.shift(); ++l < s.length;) !1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length, n = !1);
      e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
    }, c = {
      add: function () {
        return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
          re.each(n, function (n, i) {
            re.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== re.type(i) && t(i)
          })
        }(arguments), n && !t && u()), this
      }, remove: function () {
        return re.each(arguments, function (e, t) {
          for (var n; (n = re.inArray(t, s, n)) > -1;) s.splice(n, 1), l >= n && l--
        }), this
      }, has: function (e) {
        return e ? re.inArray(e, s) > -1 : s.length > 0
      }, empty: function () {
        return s && (s = []), this
      }, disable: function () {
        return o = a = [], s = n = "", this
      }, disabled: function () {
        return !s
      }, lock: function () {
        return o = a = [], n || (s = n = ""), this
      }, locked: function () {
        return !!o
      }, fireWith: function (e, n) {
        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
      }, fire: function () {
        return c.fireWith(this, arguments), this
      }, fired: function () {
        return !!i
      }
    };
    return c
  }, re.extend({
    Deferred: function (e) {
      var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]],
        n = "pending", i = {
          state: function () {
            return n
          }, always: function () {
            return o.done(arguments).fail(arguments), this
          }, then: function () {
            var e = arguments;
            return re.Deferred(function (n) {
              re.each(t, function (t, r) {
                var s = re.isFunction(e[t]) && e[t];
                o[r[1]](function () {
                  var e = s && s.apply(this, arguments);
                  e && re.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          }, promise: function (e) {
            return null != e ? re.extend(e, i) : i
          }
        }, o = {};
      return i.pipe = i.then, re.each(t, function (e, r) {
        var s = r[2], a = r[3];
        i[r[1]] = s.add, a && s.add(function () {
          n = a
        }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
          return o[r[0] + "With"](this === o ? i : this, arguments), this
        }, o[r[0] + "With"] = s.fireWith
      }), i.promise(o), e && e.call(o, o), o
    }, when: function (e) {
      var t, n, i, o = 0, r = G.call(arguments), s = r.length, a = 1 !== s || e && re.isFunction(e.promise) ? s : 0,
        l = 1 === a ? e : re.Deferred(), u = function (e, n, i) {
          return function (o) {
            n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
          }
        };
      if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, t)).done(u(o, i, r)).fail(l.reject) : --a;
      return a || l.resolveWith(i, r), l.promise()
    }
  });
  var ye;
  re.fn.ready = function (e) {
    return re.ready.promise().done(e), this
  }, re.extend({
    isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? re.readyWait++ : re.ready(!0)
    }, ready: function (e) {
      (!0 === e ? --re.readyWait : re.isReady) || (re.isReady = !0, !0 !== e && --re.readyWait > 0 || (ye.resolveWith(Q, [re]), re.fn.triggerHandler && (re(Q).triggerHandler("ready"), re(Q).off("ready"))))
    }
  }), re.ready.promise = function (t) {
    return ye || (ye = re.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? e.setTimeout(re.ready) : (Q.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), ye.promise(t)
  }, re.ready.promise();
  var be = function (e, t, n, i, o, r, s) {
    var a = 0, l = e.length, u = null == n;
    if ("object" === re.type(n)) {
      o = !0;
      for (a in n) be(e, t, a, n[a], !0, r, s)
    } else if (void 0 !== i && (o = !0, re.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
        return u.call(re(e), n)
      })), t)) for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
  }, xe = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };
  a.uid = 1, a.prototype = {
    register: function (e, t) {
      var n = t || {};
      return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
        value: n,
        writable: !0,
        configurable: !0
      }), e[this.expando]
    }, cache: function (e) {
      if (!xe(e)) return {};
      var t = e[this.expando];
      return t || (t = {}, xe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    }, set: function (e, t, n) {
      var i, o = this.cache(e);
      if ("string" == typeof t) o[t] = n; else for (i in t) o[i] = t[i];
      return o
    }, get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
    }, access: function (e, t, n) {
      var i;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, i, o, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 === t) this.register(e); else {
          re.isArray(t) ? i = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(ve) || [])), n = i.length;
          for (; n--;) delete r[i[n]]
        }
        (void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    }, hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !re.isEmptyObject(t)
    }
  };
  var we = new a, _e = new a, ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ce = /[A-Z]/g;
  re.extend({
    hasData: function (e) {
      return _e.hasData(e) || we.hasData(e)
    }, data: function (e, t, n) {
      return _e.access(e, t, n)
    }, removeData: function (e, t) {
      _e.remove(e, t)
    }, _data: function (e, t, n) {
      return we.access(e, t, n)
    }, _removeData: function (e, t) {
      we.remove(e, t)
    }
  }), re.fn.extend({
    data: function (e, t) {
      var n, i, o, r = this[0], s = r && r.attributes;
      if (void 0 === e) {
        if (this.length && (o = _e.get(r), 1 === r.nodeType && !we.get(r, "hasDataAttrs"))) {
          for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i])));
          we.set(r, "hasDataAttrs", !0)
        }
        return o
      }
      return "object" == typeof e ? this.each(function () {
        _e.set(this, e)
      }) : be(this, function (t) {
        var n, i;
        if (r && void 0 === t) {
          if (void 0 !== (n = _e.get(r, e) || _e.get(r, e.replace(Ce, "-$&").toLowerCase()))) return n;
          if (i = re.camelCase(e), void 0 !== (n = _e.get(r, i))) return n;
          if (void 0 !== (n = l(r, i, void 0))) return n
        } else i = re.camelCase(e), this.each(function () {
          var n = _e.get(this, i);
          _e.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && _e.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        _e.remove(this, e)
      })
    }
  }), re.extend({
    queue: function (e, t, n) {
      var i;
      return e ? (t = (t || "fx") + "queue", i = we.get(e, t), n && (!i || re.isArray(n) ? i = we.access(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = re.queue(e, t), i = n.length, o = n.shift(), r = re._queueHooks(e, t), s = function () {
        re.dequeue(e, t)
      };
      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return we.get(e, n) || we.access(e, n, {
        empty: re.Callbacks("once memory").add(function () {
          we.remove(e, [t + "queue", n])
        })
      })
    }
  }), re.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = re.queue(this, e, t);
        re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        re.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      var n, i = 1, o = re.Deferred(), r = this, s = this.length, a = function () {
        --i || o.resolveWith(r, [r])
      };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = we.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      return a(), o.promise(t)
    }
  });
  var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Se = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
    Ee = ["Top", "Right", "Bottom", "Left"], Ne = function (e, t) {
      return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
    }, Pe = /^(?:checkbox|radio)$/i, Ae = /<([\w:-]+)/, De = /^$|\/(?:java|ecma)script/i, Ie = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
  var je = /<|&#?\w+;/;
  !function () {
    var e = Q.createDocumentFragment(), t = e.appendChild(Q.createElement("div")), n = Q.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var He = /^key/, Fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Le = /^([^.]*)(?:\.(.+)|)/;
  re.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r, s, a, l, u, c, h, f, d, p, m, g = we.get(e);
      if (g) for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = re.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
        return void 0 !== re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
      }), t = (t || "").match(ve) || [""], u = t.length; u--;) a = Le.exec(t[u]) || [], d = m = a[1], p = (a[2] || "").split(".").sort(), d && (h = re.event.special[d] || {}, d = (o ? h.delegateType : h.bindType) || d, h = re.event.special[d] || {}, c = re.extend({
        type: d,
        origType: m,
        data: i,
        handler: n,
        guid: n.guid,
        selector: o,
        needsContext: o && re.expr.match.needsContext.test(o),
        namespace: p.join(".")
      }, r), (f = l[d]) || (f = l[d] = [], f.delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), re.event.global[d] = !0)
    },
    remove: function (e, t, n, i, o) {
      var r, s, a, l, u, c, h, f, d, p, m, g = we.hasData(e) && we.get(e);
      if (g && (l = g.events)) {
        for (t = (t || "").match(ve) || [""], u = t.length; u--;) if (a = Le.exec(t[u]) || [], d = m = a[1], p = (a[2] || "").split(".").sort(), d) {
          for (h = re.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, f = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) c = f[r], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(e, c));
          s && !f.length && (h.teardown && !1 !== h.teardown.call(e, p, g.handle) || re.removeEvent(e, d, g.handle), delete l[d])
        } else for (d in l) re.event.remove(e, d + t[u], n, i, !0);
        re.isEmptyObject(l) && we.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      e = re.event.fix(e);
      var t, n, i, o, r, s = [], a = G.call(arguments), l = (we.get(this, "events") || {})[e.type] || [],
        u = re.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
        for (s = re.event.handlers.call(this, e, l), t = 0; (o = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (i = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, t) {
      var n, i, o, r, s = [], a = t.delegateCount, l = e.target;
      if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
        for (i = [], n = 0; a > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length), i[o] && i.push(r);
        i.length && s.push({elem: l, handlers: i})
      }
      return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, t) {
        var n, i, o, r = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
      }
    },
    fix: function (e) {
      if (e[re.expando]) return e;
      var t, n, i, o = e.type, r = e, s = this.fixHooks[o];
      for (s || (this.fixHooks[o] = s = Fe.test(o) ? this.mouseHooks : He.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new re.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
      return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          return this !== m() && this.focus ? (this.focus(), !1) : void 0
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === m() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
        }, _default: function (e) {
          return re.nodeName(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, re.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, re.Event = function (e, t) {
    return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? d : p) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
  }, re.Event.prototype = {
    constructor: re.Event,
    isDefaultPrevented: p,
    isPropagationStopped: p,
    isImmediatePropagationStopped: p,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = d, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = d, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = d, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, re.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    re.event.special[e] = {
      delegateType: t, bindType: t, handle: function (e) {
        var n, i = this, o = e.relatedTarget, r = e.handleObj;
        return o && (o === i || re.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), re.fn.extend({
    on: function (e, t, n, i) {
      return g(this, e, t, n, i)
    }, one: function (e, t, n, i) {
      return g(this, e, t, n, i, 1)
    }, off: function (e, t, n) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, t, e[o]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = p), this.each(function () {
        re.event.remove(this, e, n, t)
      })
    }
  });
  var Oe = /<script|<style|<link/i, $e = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^true\/(.*)/,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  re.extend({
    htmlPrefilter: function (e) {
      return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
    }, clone: function (e, t, n) {
      var i, o, r, s, a = e.cloneNode(!0), l = re.contains(e.ownerDocument, e);
      if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e))) for (s = c(a), r = c(e), i = 0, o = r.length; o > i; i++) w(r[i], s[i]);
      if (t) if (n) for (r = r || c(e), s = s || c(a), i = 0, o = r.length; o > i; i++) x(r[i], s[i]); else x(e, a);
      return s = c(a, "script"), s.length > 0 && h(s, !l && c(e, "script")), a
    }, cleanData: function (e) {
      for (var t, n, i, o = re.event.special, r = 0; void 0 !== (n = e[r]); r++) if (xe(n)) {
        if (t = n[we.expando]) {
          if (t.events) for (i in t.events) o[i] ? re.event.remove(n, i) : re.removeEvent(n, i, t.handle);
          n[we.expando] = void 0
        }
        n[_e.expando] && (n[_e.expando] = void 0)
      }
    }
  }), re.fn.extend({
    domManip: _, detach: function (e) {
      return k(this, e, !0)
    }, remove: function (e) {
      return k(this, e)
    }, text: function (e) {
      return be(this, function (e) {
        return void 0 === e ? re.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return _(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          v(this, e).appendChild(e)
        }
      })
    }, prepend: function () {
      return _(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = v(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return _(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return _(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(c(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return re.clone(this, e, t)
      })
    }, html: function (e) {
      return be(this, function (e) {
        var t = this[0] || {}, n = 0, i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Oe.test(e) && !Ie[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = re.htmlPrefilter(e);
          try {
            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(c(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var e = [];
      return _(this, arguments, function (t) {
        var n = this.parentNode;
        re.inArray(this, e) < 0 && (re.cleanData(c(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), re.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    re.fn[e] = function (e) {
      for (var n, i = [], o = re(e), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), re(o[s])[t](n), K.apply(i, n.get());
      return this.pushStack(i)
    }
  });
  var We, Re = {HTML: "block", BODY: "block"}, ze = /^margin/, Be = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
    Ue = function (t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Xe = function (e, t, n, i) {
      var o, r, s = {};
      for (r in t) s[r] = e.style[r], e.style[r] = t[r];
      o = n.apply(e, i || []);
      for (r in t) e.style[r] = s[r];
      return o
    }, Ye = Q.documentElement;
  !function () {
    function t() {
      a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ye.appendChild(s);
      var t = e.getComputedStyle(a);
      n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ye.removeChild(s)
    }

    var n, i, o, r, s = Q.createElement("div"), a = Q.createElement("div");
    a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), re.extend(ie, {
      pixelPosition: function () {
        return t(), n
      }, boxSizingReliable: function () {
        return null == i && t(), i
      }, pixelMarginRight: function () {
        return null == i && t(), o
      }, reliableMarginLeft: function () {
        return null == i && t(), r
      }, reliableMarginRight: function () {
        var t, n = a.appendChild(Q.createElement("div"));
        return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ye.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ye.removeChild(s), a.removeChild(n), t
      }
    }))
  }();
  var Ve = /^(none|table(?!-c[ea]).+)/, Qe = {position: "absolute", visibility: "hidden", display: "block"},
    Ge = {letterSpacing: "0", fontWeight: "400"}, Je = ["Webkit", "O", "Moz", "ms"], Ke = Q.createElement("div").style;
  re.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = S(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {float: "cssFloat"},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, r, s, a = re.camelCase(t), l = e.style;
        return t = re.cssProps[a] || (re.cssProps[a] = N(a) || a), s = re.cssHooks[t] || re.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = Se.exec(n)) && o[1] && (n = u(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (re.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
      }
    },
    css: function (e, t, n, i) {
      var o, r, s, a = re.camelCase(t);
      return t = re.cssProps[a] || (re.cssProps[a] = N(a) || a), s = re.cssHooks[t] || re.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = S(e, t, i)), "normal" === o && t in Ge && (o = Ge[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
    }
  }), re.each(["height", "width"], function (e, t) {
    re.cssHooks[t] = {
      get: function (e, n, i) {
        return n ? Ve.test(re.css(e, "display")) && 0 === e.offsetWidth ? Xe(e, Qe, function () {
          return D(e, t, i)
        }) : D(e, t, i) : void 0
      }, set: function (e, n, i) {
        var o, r = i && Ue(e), s = i && A(e, t, i, "border-box" === re.css(e, "boxSizing", !1, r), r);
        return s && (o = Se.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = re.css(e, t)), P(e, n, s)
      }
    }
  }), re.cssHooks.marginLeft = E(ie.reliableMarginLeft, function (e, t) {
    return t ? (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {marginLeft: 0}, function () {
      return e.getBoundingClientRect().left
    })) + "px" : void 0
  }), re.cssHooks.marginRight = E(ie.reliableMarginRight, function (e, t) {
    return t ? Xe(e, {display: "inline-block"}, S, [e, "marginRight"]) : void 0
  }), re.each({margin: "", padding: "", border: "Width"}, function (e, t) {
    re.cssHooks[e + t] = {
      expand: function (n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Ee[i] + t] = r[i] || r[i - 2] || r[0];
        return o
      }
    }, ze.test(e) || (re.cssHooks[e + t].set = P)
  }), re.fn.extend({
    css: function (e, t) {
      return be(this, function (e, t, n) {
        var i, o, r = {}, s = 0;
        if (re.isArray(t)) {
          for (i = Ue(e), o = t.length; o > s; s++) r[t[s]] = re.css(e, t[s], !1, i);
          return r
        }
        return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
      }, e, t, arguments.length > 1)
    }, show: function () {
      return I(this, !0)
    }, hide: function () {
      return I(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Ne(this) ? re(this).show() : re(this).hide()
      })
    }
  }), re.Tween = j, j.prototype = {
    constructor: j, init: function (e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = j.propHooks[this.prop];
      return e && e.get ? e.get(this) : j.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = j.propHooks[this.prop];
      return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
    }
  }, j.prototype.init.prototype = j.prototype, j.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
      }, set: function (e) {
        re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, re.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }, _default: "swing"
  }, re.fx = j.prototype.init, re.fx.step = {};
  var Ze, et, tt = /^(?:toggle|show|hide)$/, nt = /queueHooks$/;
  re.Animation = re.extend(M, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return u(n.elem, e, Se.exec(t), n), n
      }]
    }, tweener: function (e, t) {
      re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(ve);
      for (var n, i = 0, o = e.length; o > i; i++) n = e[i], M.tweeners[n] = M.tweeners[n] || [], M.tweeners[n].unshift(t)
    }, prefilters: [O], prefilter: function (e, t) {
      t ? M.prefilters.unshift(e) : M.prefilters.push(e)
    }
  }), re.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? re.extend({}, e) : {
      complete: n || !n && t || re.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !re.isFunction(t) && t
    };
    return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
    }, i
  }, re.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(Ne).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
    }, animate: function (e, t, n, i) {
      var o = re.isEmptyObject(e), r = re.speed(t, n, i), s = function () {
        var t = M(this, re.extend({}, e), r);
        (o || we.get(this, "finish")) && t.stop(!0)
      };
      return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
    }, stop: function (e, t, n) {
      var i = function (e) {
        var t = e.stop;
        delete e.stop, t(n)
      };
      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0, o = null != e && e + "queueHooks", r = re.timers, s = we.get(this);
        if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && nt.test(o) && i(s[o]);
        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
        !t && n || re.dequeue(this, e)
      })
    }, finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t, n = we.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = re.timers, s = i ? i.length : 0;
        for (n.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
        delete n.finish
      })
    }
  }), re.each(["toggle", "show", "hide"], function (e, t) {
    var n = re.fn[t];
    re.fn[t] = function (e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, o)
    }
  }), re.each({
    slideDown: F("show"),
    slideUp: F("hide"),
    slideToggle: F("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, t) {
    re.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i)
    }
  }), re.timers = [], re.fx.tick = function () {
    var e, t = 0, n = re.timers;
    for (Ze = re.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || re.fx.stop(), Ze = void 0
  }, re.fx.timer = function (e) {
    re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
  }, re.fx.interval = 13,
    re.fx.start = function () {
      et || (et = e.setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function () {
    e.clearInterval(et), et = null
  }, re.fx.speeds = {slow: 600, fast: 200, _default: 400}, re.fn.delay = function (t, n) {
    return t = re.fx ? re.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
      var o = e.setTimeout(n, t);
      i.stop = function () {
        e.clearTimeout(o)
      }
    })
  }, function () {
    var e = Q.createElement("input"), t = Q.createElement("select"), n = t.appendChild(Q.createElement("option"));
    e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
  }();
  var it, ot = re.expr.attrHandle;
  re.fn.extend({
    attr: function (e, t) {
      return be(this, re.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
      return this.each(function () {
        re.removeAttr(this, e)
      })
    }
  }), re.extend({
    attr: function (e, t, n) {
      var i, o, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? it : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = re.find.attr(e, t), null == i ? void 0 : i))
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }, removeAttr: function (e, t) {
      var n, i, o = 0, r = t && t.match(ve);
      if (r && 1 === e.nodeType) for (; n = r[o++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
    }
  }), it = {
    set: function (e, t, n) {
      return !1 === t ? re.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ot[t] || re.find.attr;
    ot[t] = function (e, t, i) {
      var o, r;
      return i || (r = ot[t], ot[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, ot[t] = r), o
    }
  });
  var rt = /^(?:input|select|textarea|button)$/i, st = /^(?:a|area)$/i;
  re.fn.extend({
    prop: function (e, t) {
      return be(this, re.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[re.propFix[e] || e]
      })
    }
  }), re.extend({
    prop: function (e, t, n) {
      var i, o, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          var t = re.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : rt.test(e.nodeName) || st.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }, propFix: {for: "htmlFor", class: "className"}
  }), ie.optSelected || (re.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }, set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    re.propFix[this.toLowerCase()] = this
  });
  var at = /[\t\r\n\f]/g;
  re.fn.extend({
    addClass: function (e) {
      var t, n, i, o, r, s, a, l = 0;
      if (re.isFunction(e)) return this.each(function (t) {
        re(this).addClass(e.call(this, t, q(this)))
      });
      if ("string" == typeof e && e) for (t = e.match(ve) || []; n = this[l++];) if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(at, " ")) {
        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
        a = re.trim(i), o !== a && n.setAttribute("class", a)
      }
      return this
    }, removeClass: function (e) {
      var t, n, i, o, r, s, a, l = 0;
      if (re.isFunction(e)) return this.each(function (t) {
        re(this).removeClass(e.call(this, t, q(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) for (t = e.match(ve) || []; n = this[l++];) if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(at, " ")) {
        for (s = 0; r = t[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
        a = re.trim(i), o !== a && n.setAttribute("class", a)
      }
      return this
    }, toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (n) {
        re(this).toggleClass(e.call(this, n, q(this), t), t)
      }) : this.each(function () {
        var t, i, o, r;
        if ("string" === n) for (i = 0, o = re(this), r = e.match(ve) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || (t = q(this), t && we.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : we.get(this, "__className__") || ""))
      })
    }, hasClass: function (e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + q(n) + " ").replace(at, " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  re.fn.extend({
    val: function (e) {
      var t, n, i, o = this[0];
      return arguments.length ? (i = re.isFunction(e), this.each(function (n) {
        var o;
        1 === this.nodeType && (o = i ? e.call(this, n, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function (e) {
          return null == e ? "" : e + ""
        })), (t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
      })) : o ? (t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)) : void 0
    }
  }), re.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = re.find.attr(e, "value");
          return null != t ? t : re.trim(re.text(e)).replace(/[\x20\t\r\n\f]+/g, " ")
        }
      }, select: {
        get: function (e) {
          for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++) if (n = i[l], (n.selected || l === o) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
            if (t = re(n).val(), r) return t;
            s.push(t)
          }
          return s
        }, set: function (e, t) {
          for (var n, i, o = e.options, r = re.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = re.inArray(re.valHooks.option.get(i), r) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), r
        }
      }
    }
  }), re.each(["radio", "checkbox"], function () {
    re.valHooks[this] = {
      set: function (e, t) {
        return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
      }
    }, ie.checkOn || (re.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var lt = /^(?:focusinfocus|focusoutblur)$/;
  re.extend(re.event, {
    trigger: function (t, n, i, o) {
      var r, s, a, l, u, c, h, f = [i || Q], d = ne.call(t, "type") ? t.type : t,
        p = ne.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = a = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !lt.test(d + re.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, t = t[re.expando] ? t : new re.Event(d, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), h = re.event.special[d] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
        if (!o && !h.noBubble && !re.isWindow(i)) {
          for (l = h.delegateType || d, lt.test(l + d) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
          a === (i.ownerDocument || Q) && f.push(a.defaultView || a.parentWindow || e)
        }
        for (r = 0; (s = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : h.bindType || d, c = (we.get(s, "events") || {})[t.type] && we.get(s, "handle"), c && c.apply(s, n), (c = u && s[u]) && c.apply && xe(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
        return t.type = d, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(f.pop(), n) || !xe(i) || u && re.isFunction(i[d]) && !re.isWindow(i) && (a = i[u], a && (i[u] = null), re.event.triggered = d, i[d](), re.event.triggered = void 0, a && (i[u] = a)), t.result
      }
    }, simulate: function (e, t, n) {
      var i = re.extend(new re.Event, n, {type: e, isSimulated: !0});
      re.event.trigger(i, null, t)
    }
  }), re.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        re.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      return n ? re.event.trigger(e, t, n, !0) : void 0
    }
  }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    re.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), re.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), ie.focusin = "onfocusin" in e, ie.focusin || re.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    var n = function (e) {
      re.event.simulate(t, e.target, re.event.fix(e))
    };
    re.event.special[t] = {
      setup: function () {
        var i = this.ownerDocument || this, o = we.access(i, t);
        o || i.addEventListener(e, n, !0), we.access(i, t, (o || 0) + 1)
      }, teardown: function () {
        var i = this.ownerDocument || this, o = we.access(i, t) - 1;
        o ? we.access(i, t, o) : (i.removeEventListener(e, n, !0), we.remove(i, t))
      }
    }
  });
  var ut = e.location, ct = re.now(), ht = /\?/;
  re.parseJSON = function (e) {
    return JSON.parse(e + "")
  }, re.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {
      n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
  };
  var ft = /([?&])_=[^&]*/, dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, mt = /^(?:GET|HEAD)$/, gt = {}, vt = {},
    yt = "*/".concat("*"), bt = Q.createElement("a");
  bt.href = ut.href, re.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ut.href,
      type: "GET",
      isLocal: pt.test(ut.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": yt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": re.parseJSON, "text xml": re.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? z(z(e, re.ajaxSettings), t) : z(re.ajaxSettings, e)
    },
    ajaxPrefilter: W(gt),
    ajaxTransport: W(vt),
    ajax: function (t, n) {
      function i(t, n, i, a) {
        var u, h, y, b, w, k = n;
        2 !== x && (x = 2, l && e.clearTimeout(l), o = void 0, s = a || "", _.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, i && (b = B(f, _, i)), b = U(f, b, _, u), u ? (f.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (re.lastModified[r] = w), (w = _.getResponseHeader("etag")) && (re.etag[r] = w)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, h = b.data, y = b.error, u = !y)) : (y = k, !t && k || (k = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (n || k) + "", u ? m.resolveWith(d, [h, k, _]) : m.rejectWith(d, [_, k, y]), _.statusCode(v), v = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [_, f, u ? h : y]), g.fireWith(d, [_, k]), c && (p.trigger("ajaxComplete", [_, f]), --re.active || re.event.trigger("ajaxStop")))
      }

      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var o, r, s, a, l, u, c, h, f = re.ajaxSetup({}, n), d = f.context || f,
        p = f.context && (d.nodeType || d.jquery) ? re(d) : re.event, m = re.Deferred(),
        g = re.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", _ = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === x) {
              if (!a) for (a = {}; t = dt.exec(s);) a[t[1].toLowerCase()] = t[2];
              t = a[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return 2 === x ? s : null
          }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return x || (e = b[n] = b[n] || e, y[e] = t), this
          }, overrideMimeType: function (e) {
            return x || (f.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (2 > x) for (t in e) v[t] = [v[t], e[t]]; else _.always(e[_.status]);
            return this
          }, abort: function (e) {
            var t = e || w;
            return o && o.abort(t), i(0, t), this
          }
        };
      if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, f.url = ((t || f.url || ut.href) + "").replace(/#.*$/, "").replace(/^\/\//, ut.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = re.trim(f.dataType || "*").toLowerCase().match(ve) || [""], null == f.crossDomain) {
        u = Q.createElement("a");
        try {
          u.href = f.url, u.href = u.href, f.crossDomain = bt.protocol + "//" + bt.host != u.protocol + "//" + u.host
        } catch (e) {
          f.crossDomain = !0
        }
      }
      if (f.data && f.processData && "string" != typeof f.data && (f.data = re.param(f.data, f.traditional)), R(gt, f, n, _), 2 === x) return _;
      c = re.event && f.global, c && 0 == re.active++ && re.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mt.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (ht.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ft.test(r) ? r.replace(ft, "$1_=" + ct++) : r + (ht.test(r) ? "&" : "?") + "_=" + ct++)), f.ifModified && (re.lastModified[r] && _.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && _.setRequestHeader("If-None-Match", re.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && _.setRequestHeader("Content-Type", f.contentType), _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : f.accepts["*"]);
      for (h in f.headers) _.setRequestHeader(h, f.headers[h]);
      if (f.beforeSend && (!1 === f.beforeSend.call(d, _, f) || 2 === x)) return _.abort();
      w = "abort";
      for (h in{success: 1, error: 1, complete: 1}) _[h](f[h]);
      if (o = R(vt, f, n, _)) {
        if (_.readyState = 1, c && p.trigger("ajaxSend", [_, f]), 2 === x) return _;
        f.async && f.timeout > 0 && (l = e.setTimeout(function () {
          _.abort("timeout")
        }, f.timeout));
        try {
          x = 1, o.send(y, i)
        } catch (e) {
          if (!(2 > x)) throw e;
          i(-1, e)
        }
      } else i(-1, "No Transport");
      return _
    },
    getJSON: function (e, t, n) {
      return re.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return re.get(e, void 0, t, "script")
    }
  }), re.each(["get", "post"], function (e, t) {
    re[t] = function (e, n, i, o) {
      return re.isFunction(n) && (o = o || i, i = n, n = void 0), re.ajax(re.extend({
        url: e,
        type: t,
        dataType: o,
        data: n,
        success: i
      }, re.isPlainObject(e) && e))
    }
  }), re._evalUrl = function (e) {
    return re.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
  }, re.fn.extend({
    wrapAll: function (e) {
      var t;
      return re.isFunction(e) ? this.each(function (t) {
        re(this).wrapAll(e.call(this, t))
      }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this)
    }, wrapInner: function (e) {
      return re.isFunction(e) ? this.each(function (t) {
        re(this).wrapInner(e.call(this, t))
      }) : this.each(function () {
        var t = re(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    }, wrap: function (e) {
      var t = re.isFunction(e);
      return this.each(function (n) {
        re(this).wrapAll(t ? e.call(this, n) : e)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
      }).end()
    }
  }), re.expr.filters.hidden = function (e) {
    return !re.expr.filters.visible(e)
  }, re.expr.filters.visible = function (e) {
    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
  };
  var xt = /\[\]$/, wt = /^(?:submit|button|image|reset|file)$/i, _t = /^(?:input|select|textarea|keygen)/i;
  re.param = function (e, t) {
    var n, i = [], o = function (e, t) {
      t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    };
    if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
      o(this.name, this.value)
    }); else for (n in e) X(n, e[n], t, o);
    return i.join("&").replace(/%20/g, "+")
  }, re.fn.extend({
    serialize: function () {
      return re.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = re.prop(this, "elements");
        return e ? re.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !re(this).is(":disabled") && _t.test(this.nodeName) && !wt.test(e) && (this.checked || !Pe.test(e))
      }).map(function (e, t) {
        var n = re(this).val();
        return null == n ? null : re.isArray(n) ? re.map(n, function (e) {
          return {name: t.name, value: e.replace(/\r?\n/g, "\r\n")}
        }) : {name: t.name, value: n.replace(/\r?\n/g, "\r\n")}
      }).get()
    }
  }), re.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest
    } catch (e) {
    }
  };

  var Tt = [], St = /(=)\?(?=&|$)|\?\?/;
  re.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = Tt.pop() || re.expando + "_" + ct++;
      return this[e] = !0, e
    }
  }), re.ajaxPrefilter("json jsonp", function (t, n, i) {
    var o, r, s,
      a = !1 !== t.jsonp && (St.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && St.test(t.data) && "data");
    return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(St, "$1" + o) : !1 !== t.jsonp && (t.url += (ht.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return s || re.error(o + " was not called"), s[0]
    }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
      s = arguments
    }, i.always(function () {
      void 0 === r ? re(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Tt.push(o)), s && re.isFunction(r) && r(s[0]), s = r = void 0
    }), "script") : void 0
  }), re.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || Q;
    var i = he.exec(e), o = !n && [];
    return i ? [t.createElement(i[1])] : (i = f([e], t, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
  };
  var Et = re.fn.load;
  re.fn.load = function (e, t, n) {
    if ("string" != typeof e && Et) return Et.apply(this, arguments);
    var i, o, r, s = this, a = e.indexOf(" ");
    return a > -1 && (i = re.trim(e.slice(a)), e = e.slice(0, a)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && re.ajax({
      url: e,
      type: o || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      r = arguments, s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, r || [e.responseText, t, e])
      })
    }), this
  }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    re.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), re.expr.filters.animated = function (e) {
    return re.grep(re.timers, function (t) {
      return e === t.elem
    }).length
  }, re.offset = {
    setOffset: function (e, t, n) {
      var i, o, r, s, a, l, u, c = re.css(e, "position"), h = re(e), f = {};
      "static" === c && (e.style.position = "relative"), a = h.offset(), r = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = h.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, re.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : h.css(f)
    }
  }, re.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        re.offset.setOffset(this, e, t)
      });
      var t, n, i = this[0], o = {top: 0, left: 0}, r = i && i.ownerDocument;
      return r ? (t = r.documentElement, re.contains(t, i) ? (o = i.getBoundingClientRect(), n = Y(r), {
        top: o.top + n.pageYOffset - t.clientTop,
        left: o.left + n.pageXOffset - t.clientLeft
      }) : o) : void 0
    }, position: function () {
      if (this[0]) {
        var e, t, n = this[0], i = {top: 0, left: 0};
        return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (i = e.offset()), i.top += re.css(e[0], "borderTopWidth", !0), i.left += re.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - i.top - re.css(n, "marginTop", !0),
          left: t.left - i.left - re.css(n, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
        return e || Ye
      })
    }
  }), re.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
    var n = "pageYOffset" === t;
    re.fn[e] = function (i) {
      return be(this, function (e, i, o) {
        var r = Y(e);
        return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
      }, e, i, arguments.length)
    }
  }), re.each(["top", "left"], function (e, t) {
    re.cssHooks[t] = E(ie.pixelPosition, function (e, n) {
      return n ? (n = S(e, t), Be.test(n) ? re(e).position()[t] + "px" : n) : void 0
    })
  }), re.each({Height: "height", Width: "width"}, function (e, t) {
    re.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
      re.fn[i] = function (i, o) {
        var r = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
        return be(this, function (t, n, i) {
          var o;
          return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? re.css(t, n, s) : re.style(t, n, i, s)
        }, t, r ? i : void 0, r, null)
      }
    })
  }), re.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }, size: function () {
      return this.length
    }
  }), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return re
  });
  var Nt = e.jQuery, Pt = e.$;
  return re.noConflict = function (t) {
    return e.$ === re && (e.$ = Pt), t && e.jQuery === re && (e.jQuery = Nt), re
  }, t || (e.jQuery = e.$ = re), re
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
  function t(t, i) {
    var o, r, s, a = t.nodeName.toLowerCase();
    return "area" === a ? (o = t.parentNode, r = o.name, !(!t.href || !r || "map" !== o.nodeName.toLowerCase()) && (!!(s = e("img[usemap='#" + r + "']")[0]) && n(s))) : (/^(input|select|textarea|button|object)$/.test(a) ? !t.disabled : "a" === a ? t.href || i : i) && n(t)
  }

  function n(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
      return "hidden" === e.css(this, "visibility")
    }).length
  }

  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.11.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    scrollParent: function (t) {
      var n = this.css("position"), i = "absolute" === n, o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        r = this.parents().filter(function () {
          var t = e(this);
          return (!i || "static" !== t.css("position")) && o.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
      return "fixed" !== n && r.length ? r : e(this[0].ownerDocument || document)
    }, uniqueId: function () {
      var e = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++e)
        })
      }
    }(), removeUniqueId: function () {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
      })
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (n) {
        return !!e.data(n, t)
      }
    }) : function (t, n, i) {
      return !!e.data(t, i[3])
    }, focusable: function (n) {
      return t(n, !isNaN(e.attr(n, "tabindex")))
    }, tabbable: function (n) {
      var i = e.attr(n, "tabindex"), o = isNaN(i);
      return (o || i >= 0) && t(n, !o)
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, n) {
    function i(t, n, i, r) {
      return e.each(o, function () {
        n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
      }), n
    }

    var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], r = n.toLowerCase(), s = {
      innerWidth: e.fn.innerWidth,
      innerHeight: e.fn.innerHeight,
      outerWidth: e.fn.outerWidth,
      outerHeight: e.fn.outerHeight
    };
    e.fn["inner" + n] = function (t) {
      return void 0 === t ? s["inner" + n].call(this) : this.each(function () {
        e(this).css(r, i(this, t) + "px")
      })
    }, e.fn["outer" + n] = function (t, o) {
      return "number" != typeof t ? s["outer" + n].call(this, t) : this.each(function () {
        e(this).css(r, i(this, t, !0, o) + "px")
      })
    }
  }), e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
    return function (n) {
      return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
    }
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
    focus: function (t) {
      return function (n, i) {
        return "number" == typeof n ? this.each(function () {
          var t = this;
          setTimeout(function () {
            e(t).focus(), i && i.call(t)
          }, n)
        }) : t.apply(this, arguments)
      }
    }(e.fn.focus), disableSelection: function () {
      var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.bind(e + ".ui-disableSelection", function (e) {
          e.preventDefault()
        })
      }
    }(), enableSelection: function () {
      return this.unbind(".ui-disableSelection")
    }, zIndex: function (t) {
      if (void 0 !== t) return this.css("zIndex", t);
      if (this.length) for (var n, i, o = e(this[0]); o.length && o[0] !== document;) {
        if (("absolute" === (n = o.css("position")) || "relative" === n || "fixed" === n) && (i = parseInt(o.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
        o = o.parent()
      }
      return 0
    }
  }), e.ui.plugin = {
    add: function (t, n, i) {
      var o, r = e.ui[t].prototype;
      for (o in i) r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([n, i[o]])
    }, call: function (e, t, n, i) {
      var o, r = e.plugins[t];
      if (r && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (o = 0; r.length > o; o++) e.options[r[o][0]] && r[o][1].apply(e.element, n)
    }
  };
  var i = 0, o = Array.prototype.slice;
  e.cleanData = function (t) {
    return function (n) {
      var i, o, r;
      for (r = 0; null != (o = n[r]); r++) try {
        (i = e._data(o, "events")) && i.remove && e(o).triggerHandler("remove")
      } catch (e) {
      }
      t(n)
    }
  }(e.cleanData), e.widget = function (t, n, i) {
    var o, r, s, a, l = {}, u = t.split(".")[0];
    return t = t.split(".")[1], o = u + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][o.toLowerCase()] = function (t) {
      return !!e.data(t, o)
    }, e[u] = e[u] || {}, r = e[u][t], s = e[u][t] = function (e, t) {
      return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new s(e, t)
    }, e.extend(s, r, {
      version: i.version,
      _proto: e.extend({}, i),
      _childConstructors: []
    }), a = new n, a.options = e.widget.extend({}, a.options), e.each(i, function (t, i) {
      return e.isFunction(i) ? void(l[t] = function () {
        var e = function () {
          return n.prototype[t].apply(this, arguments)
        }, o = function (e) {
          return n.prototype[t].apply(this, e)
        };
        return function () {
          var t, n = this._super, r = this._superApply;
          return this._super = e, this._superApply = o, t = i.apply(this, arguments), this._super = n, this._superApply = r, t
        }
      }()) : void(l[t] = i)
    }), s.prototype = e.widget.extend(a, {widgetEventPrefix: r ? a.widgetEventPrefix || t : t}, l, {
      constructor: s,
      namespace: u,
      widgetName: t,
      widgetFullName: o
    }), r ? (e.each(r._childConstructors, function (t, n) {
      var i = n.prototype;
      e.widget(i.namespace + "." + i.widgetName, s, n._proto)
    }), delete r._childConstructors) : n._childConstructors.push(s), e.widget.bridge(t, s), s
  }, e.widget.extend = function (t) {
    for (var n, i, r = o.call(arguments, 1), s = 0, a = r.length; a > s; s++) for (n in r[s]) i = r[s][n], r[s].hasOwnProperty(n) && void 0 !== i && (t[n] = e.isPlainObject(i) ? e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], i) : e.widget.extend({}, i) : i);
    return t
  }, e.widget.bridge = function (t, n) {
    var i = n.prototype.widgetFullName || t;
    e.fn[t] = function (r) {
      var s = "string" == typeof r, a = o.call(arguments, 1), l = this;
      return s ? this.each(function () {
        var n, o = e.data(this, i);
        return "instance" === r ? (l = o, !1) : o ? e.isFunction(o[r]) && "_" !== r.charAt(0) ? (n = o[r].apply(o, a), n !== o && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + r + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + r + "'")
      }) : (a.length && (r = e.widget.extend.apply(null, [r].concat(a))), this.each(function () {
        var t = e.data(this, i);
        t ? (t.option(r || {}), t._init && t._init()) : e.data(this, i, new n(r, this))
      })), l
    }
  }, e.Widget = function () {
  }, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {disabled: !1, create: null},
    _createWidget: function (t, n) {
      n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (e) {
          e.target === n && this.destroy()
        }
      }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function () {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: e.noop,
    widget: function () {
      return this.element
    },
    option: function (t, n) {
      var i, o, r, s = t;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof t) if (s = {}, i = t.split("."), t = i.shift(), i.length) {
        for (o = s[t] = e.widget.extend({}, this.options[t]), r = 0; i.length - 1 > r; r++) o[i[r]] = o[i[r]] || {}, o = o[i[r]];
        if (t = i.pop(), 1 === arguments.length) return void 0 === o[t] ? null : o[t];
        o[t] = n
      } else {
        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
        s[t] = n
      }
      return this._setOptions(s), this
    },
    _setOptions: function (e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this
    },
    _setOption: function (e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
    },
    enable: function () {
      return this._setOptions({disabled: !1})
    },
    disable: function () {
      return this._setOptions({disabled: !0})
    },
    _on: function (t, n, i) {
      var o, r = this;
      "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = o = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), e.each(i, function (i, s) {
        function a() {
          return t || !0 !== r.options.disabled && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? r[s] : s).apply(r, arguments) : void 0
        }

        "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
        var l = i.match(/^([\w:-]*)\s*(.*)$/), u = l[1] + r.eventNamespace, c = l[2];
        c ? o.delegate(c, u, a) : n.bind(u, a)
      })
    },
    _off: function (t, n) {
      n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(n).undelegate(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
    },
    _delay: function (e, t) {
      function n() {
        return ("string" == typeof e ? i[e] : e).apply(i, arguments)
      }

      var i = this;
      return setTimeout(n, t || 0)
    },
    _hoverable: function (t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function (t) {
          e(t.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (t) {
          e(t.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function (t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function (t) {
          e(t.currentTarget).addClass("ui-state-focus")
        }, focusout: function (t) {
          e(t.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function (t, n, i) {
      var o, r, s = this.options[t];
      if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], r = n.originalEvent) for (o in r) o in n || (n[o] = r[o]);
      return this.element.trigger(n, i), !(e.isFunction(s) && !1 === s.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
    }
  }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, n) {
    e.Widget.prototype["_" + t] = function (i, o, r) {
      "string" == typeof o && (o = {effect: o});
      var s, a = o ? !0 === o || "number" == typeof o ? n : o.effect || n : t;
      o = o || {}, "number" == typeof o && (o = {
        duration: o
      }), s = !e.isEmptyObject(o), o.complete = r, o.delay && i.delay(o.delay), s && e.effects && e.effects.effect[a] ? i[t](o) : a !== t && i[a] ? i[a](o.duration, o.easing, r) : i.queue(function (n) {
        e(this)[t](), r && r.call(i[0]), n()
      })
    }
  }), e.widget;
  var r = !1;
  e(document).mouseup(function () {
    r = !1
  }), e.widget("ui.mouse", {
    version: "1.11.4",
    options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
    _mouseInit: function () {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e)
      }).bind("click." + this.widgetName, function (n) {
        return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
      }), this.started = !1
    },
    _mouseDestroy: function () {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function (t) {
      if (!r) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var n = this, i = 1 === t.which,
          o = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
        return !(i && !o && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          n.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
          return n._mouseMove(e)
        }, this._mouseUpDelegate = function (e) {
          return n._mouseUp(e)
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), r = !0, !0))
      }
    },
    _mouseMove: function (t) {
      if (this._mouseMoved) {
        if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
        if (!t.which) return this._mouseUp(t)
      }
      return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
    },
    _mouseUp: function (t) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), r = !1, !1
    },
    _mouseDistanceMet: function (e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet
    },
    _mouseStart: function () {
    },
    _mouseDrag: function () {
    },
    _mouseStop: function () {
    },
    _mouseCapture: function () {
      return !0
    }
  }), function () {
    function t(e, t, n) {
      return [parseFloat(e[0]) * (d.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (d.test(e[1]) ? n / 100 : 1)]
    }

    function n(t, n) {
      return parseInt(e.css(t, n), 10) || 0
    }

    function i(t) {
      var n = t[0];
      return 9 === n.nodeType ? {
        width: t.width(),
        height: t.height(),
        offset: {top: 0, left: 0}
      } : e.isWindow(n) ? {
        width: t.width(),
        height: t.height(),
        offset: {top: t.scrollTop(), left: t.scrollLeft()}
      } : n.preventDefault ? {width: 0, height: 0, offset: {top: n.pageY, left: n.pageX}} : {
        width: t.outerWidth(),
        height: t.outerHeight(),
        offset: t.offset()
      }
    }

    e.ui = e.ui || {};
    var o, r, s = Math.max, a = Math.abs, l = Math.round, u = /left|center|right/, c = /top|center|bottom/,
      h = /[\+\-]\d+(\.[\d]+)?%?/, f = /^\w+/, d = /%$/, p = e.fn.position;
    e.position = {
      scrollbarWidth: function () {
        if (void 0 !== o) return o;
        var t, n,
          i = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
          r = i.children()[0];
        return e("body").append(i), t = r.offsetWidth, i.css("overflow", "scroll"), n = r.offsetWidth, t === n && (n = i[0].clientWidth), i.remove(), o = t - n
      }, getScrollInfo: function (t) {
        var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          o = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth;
        return {
          width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? e.position.scrollbarWidth() : 0,
          height: o ? e.position.scrollbarWidth() : 0
        }
      }, getWithinInfo: function (t) {
        var n = e(t || window), i = e.isWindow(n[0]), o = !!n[0] && 9 === n[0].nodeType;
        return {
          element: n,
          isWindow: i,
          isDocument: o,
          offset: n.offset() || {left: 0, top: 0},
          scrollLeft: n.scrollLeft(),
          scrollTop: n.scrollTop(),
          width: i || o ? n.width() : n.outerWidth(),
          height: i || o ? n.height() : n.outerHeight()
        }
      }
    }, e.fn.position = function (o) {
      if (!o || !o.of) return p.apply(this, arguments);
      o = e.extend({}, o);
      var d, m, g, v, y, b, x = e(o.of), w = e.position.getWithinInfo(o.within), _ = e.position.getScrollInfo(w),
        k = (o.collision || "flip").split(" "), C = {};
      return b = i(x), x[0].preventDefault && (o.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
        var e, t, n = (o[this] || "").split(" ");
        1 === n.length && (n = u.test(n[0]) ? n.concat(["center"]) : c.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = u.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", e = h.exec(n[0]), t = h.exec(n[1]), C[this] = [e ? e[0] : 0, t ? t[0] : 0], o[this] = [f.exec(n[0])[0], f.exec(n[1])[0]]
      }), 1 === k.length && (k[1] = k[0]), "right" === o.at[0] ? y.left += m : "center" === o.at[0] && (y.left += m / 2), "bottom" === o.at[1] ? y.top += g : "center" === o.at[1] && (y.top += g / 2), d = t(C.at, m, g), y.left += d[0], y.top += d[1], this.each(function () {
        var i, u, c = e(this), h = c.outerWidth(), f = c.outerHeight(), p = n(this, "marginLeft"),
          b = n(this, "marginTop"), T = h + p + n(this, "marginRight") + _.width,
          S = f + b + n(this, "marginBottom") + _.height, E = e.extend({}, y),
          N = t(C.my, c.outerWidth(), c.outerHeight());
        "right" === o.my[0] ? E.left -= h : "center" === o.my[0] && (E.left -= h / 2), "bottom" === o.my[1] ? E.top -= f : "center" === o.my[1] && (E.top -= f / 2), E.left += N[0], E.top += N[1], r || (E.left = l(E.left), E.top = l(E.top)), i = {
          marginLeft: p,
          marginTop: b
        }, e.each(["left", "top"], function (t, n) {
          e.ui.position[k[t]] && e.ui.position[k[t]][n](E, {
            targetWidth: m,
            targetHeight: g,
            elemWidth: h,
            elemHeight: f,
            collisionPosition: i,
            collisionWidth: T,
            collisionHeight: S,
            offset: [d[0] + N[0], d[1] + N[1]],
            my: o.my,
            at: o.at,
            within: w,
            elem: c
          })
        }), o.using && (u = function (e) {
          var t = v.left - E.left, n = t + m - h, i = v.top - E.top, r = i + g - f, l = {
            target: {element: x, left: v.left, top: v.top, width: m, height: g},
            element: {element: c, left: E.left, top: E.top, width: h, height: f},
            horizontal: 0 > n ? "left" : t > 0 ? "right" : "center",
            vertical: 0 > r ? "top" : i > 0 ? "bottom" : "middle"
          };
          h > m && m > a(t + n) && (l.horizontal = "center"), f > g && g > a(i + r) && (l.vertical = "middle"), l.important = s(a(t), a(n)) > s(a(i), a(r)) ? "horizontal" : "vertical", o.using.call(this, e, l)
        }), c.offset(e.extend(E, {using: u}))
      })
    }, e.ui.position = {
      fit: {
        left: function (e, t) {
          var n, i = t.within, o = i.isWindow ? i.scrollLeft : i.offset.left, r = i.width,
            a = e.left - t.collisionPosition.marginLeft, l = o - a, u = a + t.collisionWidth - r - o;
          t.collisionWidth > r ? l > 0 && 0 >= u ? (n = e.left + l + t.collisionWidth - r - o, e.left += l - n) : e.left = u > 0 && 0 >= l ? o : l > u ? o + r - t.collisionWidth : o : l > 0 ? e.left += l : u > 0 ? e.left -= u : e.left = s(e.left - a, e.left)
        }, top: function (e, t) {
          var n, i = t.within, o = i.isWindow ? i.scrollTop : i.offset.top, r = t.within.height,
            a = e.top - t.collisionPosition.marginTop, l = o - a, u = a + t.collisionHeight - r - o;
          t.collisionHeight > r ? l > 0 && 0 >= u ? (n = e.top + l + t.collisionHeight - r - o, e.top += l - n) : e.top = u > 0 && 0 >= l ? o : l > u ? o + r - t.collisionHeight : o : l > 0 ? e.top += l : u > 0 ? e.top -= u : e.top = s(e.top - a, e.top)
        }
      }, flip: {
        left: function (e, t) {
          var n, i, o = t.within, r = o.offset.left + o.scrollLeft, s = o.width,
            l = o.isWindow ? o.scrollLeft : o.offset.left, u = e.left - t.collisionPosition.marginLeft, c = u - l,
            h = u + t.collisionWidth - s - l,
            f = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
            d = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, p = -2 * t.offset[0];
          0 > c ? (0 > (n = e.left + f + d + p + t.collisionWidth - s - r) || a(c) > n) && (e.left += f + d + p) : h > 0 && ((i = e.left - t.collisionPosition.marginLeft + f + d + p - l) > 0 || h > a(i)) && (e.left += f + d + p)
        }, top: function (e, t) {
          var n, i, o = t.within, r = o.offset.top + o.scrollTop, s = o.height,
            l = o.isWindow ? o.scrollTop : o.offset.top, u = e.top - t.collisionPosition.marginTop, c = u - l,
            h = u + t.collisionHeight - s - l, f = "top" === t.my[1],
            d = f ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
            p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, m = -2 * t.offset[1];
          0 > c ? (0 > (i = e.top + d + p + m + t.collisionHeight - s - r) || a(c) > i) && (e.top += d + p + m) : h > 0 && ((n = e.top - t.collisionPosition.marginTop + d + p + m - l) > 0 || h > a(n)) && (e.top += d + p + m)
        }
      }, flipfit: {
        left: function () {
          e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
        }, top: function () {
          e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
        }
      }
    }, function () {
      var t, n, i, o, s, a = document.getElementsByTagName("body")[0], l = document.createElement("div");
      t = document.createElement(a ? "div" : "body"), i = {
        visibility: "hidden",
        width: 0,
        height: 0,
        border: 0,
        margin: 0,
        background: "none"
      }, a && e.extend(i, {position: "absolute", left: "-1000px", top: "-1000px"});
      for (s in i) t.style[s] = i[s];
      t.appendChild(l), n = a || document.documentElement, n.insertBefore(t, n.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", o = e(l).offset().left, r = o > 10 && 11 > o, t.innerHTML = "", n.removeChild(t)
    }()
  }(), e.ui.position, e.widget("ui.draggable", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function () {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
    },
    _setOption: function (e, t) {
      this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
    },
    _destroy: function () {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
    },
    _mouseCapture: function (t) {
      var n = this.options;
      return this._blurActiveElement(t), !(this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(t), !!this.handle && (this._blockFrames(!0 === n.iframeFix ? "iframe" : n.iframeFix), !0))
    },
    _blockFrames: function (t) {
      this.iframeBlocks = this.document.find(t).map(function () {
        var t = e(this);
        return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
      })
    },
    _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },
    _blurActiveElement: function (t) {
      var n = this.document[0];
      if (this.handleElement.is(t.target)) try {
        n.activeElement && "body" !== n.activeElement.nodeName.toLowerCase() && e(n.activeElement).blur()
      } catch (e) {
      }
    },
    _mouseStart: function (t) {
      var n = this.options;
      return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === e(this).css("position")
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
    },
    _refreshOffsets: function (e) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}
    },
    _mouseDrag: function (t, n) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !n) {
        var i = this._uiHash();
        if (!1 === this._trigger("drag", t, i)) return this._mouseUp({}), !1;
        this.position = i.position
      }
      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
    },
    _mouseStop: function (t) {
      var n = this, i = !1;
      return e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        !1 !== n._trigger("stop", t) && n._clear()
      }) : !1 !== this._trigger("stop", t) && this._clear(), !1
    },
    _mouseUp: function (t) {
      return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
    },
    cancel: function () {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    },
    _getHandle: function (t) {
      return !this.options.handle || !!e(t.target).closest(this.element.find(this.options.handle)).length
    },
    _setHandleClassName: function () {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
    },
    _removeHandleClassName: function () {
      this.handleElement.removeClass("ui-draggable-handle")
    },
    _createHelper: function (t) {
      var n = this.options, i = e.isFunction(n.helper),
        o = i ? e(n.helper.apply(this.element[0], [t])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
      return o.parents("body").length || o.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo), i && o[0] === this.element[0] && this._setPositionRelative(), o[0] === this.element[0] || /(fixed|absolute)/.test(o.css("position")) || o.css("position", "absolute"), o
    },
    _setPositionRelative: function () {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
    },
    _adjustOffsetFromHelper: function (t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    },
    _isRootNode: function (e) {
      return /(html|body)/i.test(e.tagName) || e === this.document[0]
    },
    _getParentOffset: function () {
      var t = this.offsetParent.offset(), n = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== n && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function () {
      if ("relative" !== this.cssPosition) return {top: 0, left: 0};
      var e = this.element.position(), t = this._isRootNode(this.scrollParent[0]);
      return {
        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
      }
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    },
    _setContainment: function () {
      var t, n, i, o = this.options, r = this.document[0];
      return this.relativeContainer = null, o.containment ? "window" === o.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || r.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === o.containment ? void(this.containment = [0, 0, e(r).width() - this.helperProportions.width - this.margins.left, (e(r).height() || r.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : o.containment.constructor === Array ? void(this.containment = o.containment) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), n = e(o.containment), void((i = n[0]) && (t = /(scroll|auto)/.test(n.css("overflow")), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = n))) : void(this.containment = null)
    },
    _convertPositionTo: function (e, t) {
      t || (t = this.position);
      var n = "absolute" === e ? 1 : -1, i = this._isRootNode(this.scrollParent[0]);
      return {
        top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.offset.scroll.top : i ? 0 : this.offset.scroll.top) * n,
        left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.offset.scroll.left : i ? 0 : this.offset.scroll.left) * n
      }
    },
    _generatePosition: function (e, t) {
      var n, i, o, r, s = this.options, a = this._isRootNode(this.scrollParent[0]), l = e.pageX, u = e.pageY;
      return a && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), t && (this.containment && (this.relativeContainer ? (i = this.relativeContainer.offset(), n = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : n = this.containment, e.pageX - this.offset.click.left < n[0] && (l = n[0] + this.offset.click.left), e.pageY - this.offset.click.top < n[1] && (u = n[1] + this.offset.click.top), e.pageX - this.offset.click.left > n[2] && (l = n[2] + this.offset.click.left), e.pageY - this.offset.click.top > n[3] && (u = n[3] + this.offset.click.top)), s.grid && (o = s.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY, u = n ? o - this.offset.click.top >= n[1] || o - this.offset.click.top > n[3] ? o : o - this.offset.click.top >= n[1] ? o - s.grid[1] : o + s.grid[1] : o, r = s.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX, l = n ? r - this.offset.click.left >= n[0] || r - this.offset.click.left > n[2] ? r : r - this.offset.click.left >= n[0] ? r - s.grid[0] : r + s.grid[0] : r), "y" === s.axis && (l = this.originalPageX), "x" === s.axis && (u = this.originalPageY)), {
        top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
      }
    },
    _clear: function () {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
    },
    _normalizeRightBottom: function () {
      "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
    },
    _trigger: function (t, n, i) {
      return i = i || this._uiHash(), e.ui.plugin.call(this, t, [n, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, n, i)
    },
    plugins: {},
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  }), e.ui.plugin.add("draggable", "connectToSortable", {
    start: function (t, n, i) {
      var o = e.extend({}, n, {item: i.element});
      i.sortables = [], e(i.options.connectToSortable).each(function () {
        var n = e(this).sortable("instance");
        n && !n.options.disabled && (i.sortables.push(n), n.refreshPositions(), n._trigger("activate", t, o))
      })
    }, stop: function (t, n, i) {
      var o = e.extend({}, n, {item: i.element});
      i.cancelHelperRemoval = !1, e.each(i.sortables, function () {
        var e = this;
        e.isOver ? (e.isOver = 0, i.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
          position: e.placeholder.css("position"),
          top: e.placeholder.css("top"),
          left: e.placeholder.css("left")
        }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, o))
      })
    }, drag: function (t, n, i) {
      e.each(i.sortables, function () {
        var o = !1, r = this;
        r.positionAbs = i.positionAbs, r.helperProportions = i.helperProportions, r.offset.click = i.offset.click, r._intersectsWith(r.containerCache) && (o = !0, e.each(i.sortables, function () {
          return this.positionAbs = i.positionAbs, this.helperProportions = i.helperProportions, this.offset.click = i.offset.click, this !== r && this._intersectsWith(this.containerCache) && e.contains(r.element[0], this.element[0]) && (o = !1), o
        })), o ? (r.isOver || (r.isOver = 1, i._parent = n.helper.parent(), r.currentItem = n.helper.appendTo(r.element).data("ui-sortable-item", !0), r.options._helper = r.options.helper, r.options.helper = function () {
          return n.helper[0]
        }, t.target = r.currentItem[0], r._mouseCapture(t, !0), r._mouseStart(t, !0, !0), r.offset.click.top = i.offset.click.top, r.offset.click.left = i.offset.click.left, r.offset.parent.left -= i.offset.parent.left - r.offset.parent.left, r.offset.parent.top -= i.offset.parent.top - r.offset.parent.top, i._trigger("toSortable", t), i.dropped = r.element, e.each(i.sortables, function () {
          this.refreshPositions()
        }), i.currentItem = i.element, r.fromOutside = i), r.currentItem && (r._mouseDrag(t), n.position = r.position)) : r.isOver && (r.isOver = 0, r.cancelHelperRemoval = !0, r.options._revert = r.options.revert, r.options.revert = !1, r._trigger("out", t, r._uiHash(r)), r._mouseStop(t, !0), r.options.revert = r.options._revert, r.options.helper = r.options._helper, r.placeholder && r.placeholder.remove(), n.helper.appendTo(i._parent), i._refreshOffsets(t), n.position = i._generatePosition(t, !0), i._trigger("fromSortable", t), i.dropped = !1, e.each(i.sortables, function () {
          this.refreshPositions()
        }))
      })
    }
  }), e.ui.plugin.add("draggable", "cursor", {
    start: function (t, n, i) {
      var o = e("body"), r = i.options;
      o.css("cursor") && (r._cursor = o.css("cursor")), o.css("cursor", r.cursor)
    }, stop: function (t, n, i) {
      var o = i.options;
      o._cursor && e("body").css("cursor", o._cursor)
    }
  }), e.ui.plugin.add("draggable", "opacity", {
    start: function (t, n, i) {
      var o = e(n.helper), r = i.options;
      o.css("opacity") && (r._opacity = o.css("opacity")), o.css("opacity", r.opacity)
    }, stop: function (t, n, i) {
      var o = i.options;
      o._opacity && e(n.helper).css("opacity", o._opacity)
    }
  }), e.ui.plugin.add("draggable", "scroll", {
    start: function (e, t, n) {
      n.scrollParentNotHidden || (n.scrollParentNotHidden = n.helper.scrollParent(!1)), n.scrollParentNotHidden[0] !== n.document[0] && "HTML" !== n.scrollParentNotHidden[0].tagName && (n.overflowOffset = n.scrollParentNotHidden.offset())
    }, drag: function (t, n, i) {
      var o = i.options, r = !1, s = i.scrollParentNotHidden[0], a = i.document[0];
      s !== a && "HTML" !== s.tagName ? (o.axis && "x" === o.axis || (i.overflowOffset.top + s.offsetHeight - t.pageY < o.scrollSensitivity ? s.scrollTop = r = s.scrollTop + o.scrollSpeed : t.pageY - i.overflowOffset.top < o.scrollSensitivity && (s.scrollTop = r = s.scrollTop - o.scrollSpeed)), o.axis && "y" === o.axis || (i.overflowOffset.left + s.offsetWidth - t.pageX < o.scrollSensitivity ? s.scrollLeft = r = s.scrollLeft + o.scrollSpeed : t.pageX - i.overflowOffset.left < o.scrollSensitivity && (s.scrollLeft = r = s.scrollLeft - o.scrollSpeed))) : (o.axis && "x" === o.axis || (t.pageY - e(a).scrollTop() < o.scrollSensitivity ? r = e(a).scrollTop(e(a).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(a).scrollTop()) < o.scrollSensitivity && (r = e(a).scrollTop(e(a).scrollTop() + o.scrollSpeed))), o.axis && "y" === o.axis || (t.pageX - e(a).scrollLeft() < o.scrollSensitivity ? r = e(a).scrollLeft(e(a).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(a).scrollLeft()) < o.scrollSensitivity && (r = e(a).scrollLeft(e(a).scrollLeft() + o.scrollSpeed)))), !1 !== r && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
    }
  }), e.ui.plugin.add("draggable", "snap", {
    start: function (t, n, i) {
      var o = i.options;
      i.snapElements = [], e(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function () {
        var t = e(this), n = t.offset();
        this !== i.element[0] && i.snapElements.push({
          item: this,
          width: t.outerWidth(),
          height: t.outerHeight(),
          top: n.top,
          left: n.left
        })
      })
    }, drag: function (t, n, i) {
      var o, r, s, a, l, u, c, h, f, d, p = i.options, m = p.snapTolerance, g = n.offset.left,
        v = g + i.helperProportions.width, y = n.offset.top, b = y + i.helperProportions.height;
      for (f = i.snapElements.length - 1; f >= 0; f--) l = i.snapElements[f].left - i.margins.left, u = l + i.snapElements[f].width, c = i.snapElements[f].top - i.margins.top, h = c + i.snapElements[f].height, l - m > v || g > u + m || c - m > b || y > h + m || !e.contains(i.snapElements[f].item.ownerDocument, i.snapElements[f].item) ? (i.snapElements[f].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, e.extend(i._uiHash(), {snapItem: i.snapElements[f].item})), i.snapElements[f].snapping = !1) : ("inner" !== p.snapMode && (o = m >= Math.abs(c - b), r = m >= Math.abs(h - y), s = m >= Math.abs(l - v), a = m >= Math.abs(u - g), o && (n.position.top = i._convertPositionTo("relative", {
        top: c - i.helperProportions.height,
        left: 0
      }).top), r && (n.position.top = i._convertPositionTo("relative", {
        top: h,
        left: 0
      }).top), s && (n.position.left = i._convertPositionTo("relative", {
        top: 0,
        left: l - i.helperProportions.width
      }).left), a && (n.position.left = i._convertPositionTo("relative", {
        top: 0,
        left: u
      }).left)), d = o || r || s || a, "outer" !== p.snapMode && (o = m >= Math.abs(c - y), r = m >= Math.abs(h - b), s = m >= Math.abs(l - g), a = m >= Math.abs(u - v), o && (n.position.top = i._convertPositionTo("relative", {
        top: c,
        left: 0
      }).top), r && (n.position.top = i._convertPositionTo("relative", {
        top: h - i.helperProportions.height,
        left: 0
      }).top), s && (n.position.left = i._convertPositionTo("relative", {
        top: 0,
        left: l
      }).left), a && (n.position.left = i._convertPositionTo("relative", {
        top: 0,
        left: u - i.helperProportions.width
      }).left)), !i.snapElements[f].snapping && (o || r || s || a || d) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, e.extend(i._uiHash(), {snapItem: i.snapElements[f].item})), i.snapElements[f].snapping = o || r || s || a || d)
    }
  }), e.ui.plugin.add("draggable", "stack", {
    start: function (t, n, i) {
      var o, r = i.options, s = e.makeArray(e(r.stack)).sort(function (t, n) {
        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
      });
      s.length && (o = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function (t) {
        e(this).css("zIndex", o + t)
      }), this.css("zIndex", o + s.length))
    }
  }), e.ui.plugin.add("draggable", "zIndex", {
    start: function (t, n, i) {
      var o = e(n.helper), r = i.options;
      o.css("zIndex") && (r._zIndex = o.css("zIndex")), o.css("zIndex", r.zIndex)
    }, stop: function (t, n, i) {
      var o = i.options;
      o._zIndex && e(n.helper).css("zIndex", o._zIndex)
    }
  }), e.ui.draggable, e.widget("ui.menu", {
    version: "1.11.4",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {submenu: "ui-icon-carat-1-e"},
      items: "> *",
      menus: "ul",
      position: {my: "left-1 top", at: "right top"},
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function () {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
        role: this.options.role,
        tabIndex: 0
      }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
        "mousedown .ui-menu-item": function (e) {
          e.preventDefault()
        }, "click .ui-menu-item": function (t) {
          var n = e(t.target);
          !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), n.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
        }, "mouseenter .ui-menu-item": function (t) {
          if (!this.previousFilter) {
            var n = e(t.currentTarget);
            n.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
          }
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, t) {
          var n = this.active || this.element.find(this.options.items).eq(0);
          t || this.focus(e, n)
        }, blur: function (t) {
          this._delay(function () {
            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
          })
        }, keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function (e) {
          this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
        }
      })
    },
    _destroy: function () {
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
        var t = e(this);
        t.data("ui-menu-submenu-carat") && t.remove()
      }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    },
    _keydown: function (t) {
      var n, i, o, r, s = !0;
      switch (t.keyCode) {
        case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);
          break;
        case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);
          break;
        case e.ui.keyCode.HOME:
          this._move("first", "first", t);
          break;
        case e.ui.keyCode.END:
          this._move("last", "last", t);
          break;
        case e.ui.keyCode.UP:
          this.previous(t);
          break;
        case e.ui.keyCode.DOWN:
          this.next(t);
          break;
        case e.ui.keyCode.LEFT:
          this.collapse(t);
          break;
        case e.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
          break;
        case e.ui.keyCode.ENTER:
        case e.ui.keyCode.SPACE:
          this._activate(t);
          break;
        case e.ui.keyCode.ESCAPE:
          this.collapse(t);
          break;
        default:
          s = !1, i = this.previousFilter || "", o = String.fromCharCode(t.keyCode), r = !1, clearTimeout(this.filterTimer), o === i ? r = !0 : o = i + o, n = this._filterMenuItems(o), n = r && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (o = String.fromCharCode(t.keyCode), n = this._filterMenuItems(o)), n.length ? (this.focus(t, n), this.previousFilter = o, this.filterTimer = this._delay(function () {
            delete this.previousFilter
          }, 1e3)) : delete this.previousFilter
      }
      s && t.preventDefault()
    },
    _activate: function (e) {
      this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
    },
    refresh: function () {
      var t, n, i = this, o = this.options.icons.submenu, r = this.element.find(this.options.menus);
      this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var t = e(this), n = t.parent(),
          i = e("<span>").addClass("ui-menu-icon ui-icon " + o).data("ui-menu-submenu-carat", !0);
        n.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", n.attr("id"))
      }), t = r.add(this.element),
        n = t.find(this.options.items), n.not(".ui-menu-item").each(function () {
        var t = e(this);
        i._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
      }), n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), n.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
    },
    _itemRole: function () {
      return {menu: "menuitem", listbox: "option"}[this.options.role]
    },
    _setOption: function (e, t) {
      "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
    },
    focus: function (e, t) {
      var n, i;
      this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), i = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
        this._close()
      }, this.delay), n = t.children(".ui-menu"), n.length && e && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {item: t})
    },
    _scrollIntoView: function (t) {
      var n, i, o, r, s, a;
      this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, o = t.offset().top - this.activeMenu.offset().top - n - i, r = this.activeMenu.scrollTop(), s = this.activeMenu.height(), a = t.outerHeight(), 0 > o ? this.activeMenu.scrollTop(r + o) : o + a > s && this.activeMenu.scrollTop(r + o - s + a))
    },
    blur: function (e, t) {
      t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {item: this.active}))
    },
    _startOpening: function (e) {
      clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(e)
      }, this.delay))
    },
    _open: function (t) {
      var n = e.extend({of: this.active}, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
    },
    collapseAll: function (t, n) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var i = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
        i.length || (i = this.element), this._close(i), this.blur(t), this.activeMenu = i
      }, this.delay)
    },
    _close: function (e) {
      e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
    },
    _closeOnDocumentClick: function (t) {
      return !e(t.target).closest(".ui-menu").length
    },
    _isDivider: function (e) {
      return !/[^\-\u2014\u2013\s]/.test(e.text())
    },
    collapse: function (e) {
      var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      t && t.length && (this._close(), this.focus(e, t))
    },
    expand: function (e) {
      var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      t && t.length && (this._open(t.parent()), this._delay(function () {
        this.focus(e, t)
      }))
    },
    next: function (e) {
      this._move("next", "first", e)
    },
    previous: function (e) {
      this._move("prev", "last", e)
    },
    isFirstItem: function () {
      return this.active && !this.active.prevAll(".ui-menu-item").length
    },
    isLastItem: function () {
      return this.active && !this.active.nextAll(".ui-menu-item").length
    },
    _move: function (e, t, n) {
      var i;
      this.active && (i = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[t]()), this.focus(n, i)
    },
    nextPage: function (t) {
      var n, i, o;
      return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, o = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return n = e(this), 0 > n.offset().top - i - o
      }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
    },
    previousPage: function (t) {
      var n, i, o;
      return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, o = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return n = e(this), n.offset().top - i + o > 0
      }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
    },
    _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop("scrollHeight")
    },
    select: function (t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");
      var n = {item: this.active};
      this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
    },
    _filterMenuItems: function (t) {
      var n = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), i = RegExp("^" + n, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return i.test(e.trim(e(this).text()))
      })
    }
  }), e.widget("ui.autocomplete", {
    version: "1.11.4",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {my: "left top", at: "left bottom", collision: "none"},
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function () {
      var t, n, i, o = this.element[0].nodeName.toLowerCase(), r = "textarea" === o, s = "input" === o;
      this.isMultiLine = !!r || !s && this.element.prop("isContentEditable"), this.valueMethod = this.element[r || s ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
        keydown: function (o) {
          if (this.element.prop("readOnly")) return t = !0, i = !0, void(n = !0);
          t = !1, i = !1, n = !1;
          var r = e.ui.keyCode;
          switch (o.keyCode) {
            case r.PAGE_UP:
              t = !0, this._move("previousPage", o);
              break;
            case r.PAGE_DOWN:
              t = !0, this._move("nextPage", o);
              break;
            case r.UP:
              t = !0, this._keyEvent("previous", o);
              break;
            case r.DOWN:
              t = !0, this._keyEvent("next", o);
              break;
            case r.ENTER:
              this.menu.active && (t = !0, o.preventDefault(), this.menu.select(o));
              break;
            case r.TAB:
              this.menu.active && this.menu.select(o);
              break;
            case r.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(o), o.preventDefault());
              break;
            default:
              n = !0, this._searchTimeout(o)
          }
        }, keypress: function (i) {
          if (t) return t = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && i.preventDefault());
          if (!n) {
            var o = e.ui.keyCode;
            switch (i.keyCode) {
              case o.PAGE_UP:
                this._move("previousPage", i);
                break;
              case o.PAGE_DOWN:
                this._move("nextPage", i);
                break;
              case o.UP:
                this._keyEvent("previous", i);
                break;
              case o.DOWN:
                this._keyEvent("next", i)
            }
          }
        }, input: function (e) {
          return i ? (i = !1, void e.preventDefault()) : void this._searchTimeout(e)
        }, focus: function () {
          this.selectedItem = null, this.previous = this._value()
        }, blur: function (e) {
          return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), void this._change(e))
        }
      }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._on(this.menu.element, {
        mousedown: function (t) {
          t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur
          });
          var n = this.menu.element[0];
          e(t.target).closest(".ui-menu-item").length || this._delay(function () {
            var t = this;
            this.document.one("mousedown", function (i) {
              i.target === t.element[0] || i.target === n || e.contains(n, i.target) || t.close()
            })
          })
        }, menufocus: function (t, n) {
          var i, o;
          return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
            e(t.target).trigger(t.originalEvent)
          })) : (o = n.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {item: o}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(o.value), void((i = n.item.attr("aria-label") || o.value) && e.trim(i).length && (this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))))
        }, menuselect: function (e, t) {
          var n = t.item.data("ui-autocomplete-item"), i = this.previous;
          this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, this._delay(function () {
            this.previous = i, this.selectedItem = n
          })), !1 !== this._trigger("select", e, {item: n}) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
        }
      }), this.liveRegion = e("<span>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
        beforeunload: function () {
          this.element.removeAttr("autocomplete")
        }
      })
    },
    _destroy: function () {
      clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    },
    _setOption: function (e, t) {
      this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
    },
    _initSource: function () {
      var t, n, i = this;
      e.isArray(this.options.source) ? (t = this.options.source, this.source = function (n, i) {
        i(e.ui.autocomplete.filter(t, n.term))
      }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function (t, o) {
        i.xhr && i.xhr.abort(), i.xhr = e.ajax({
          url: n, data: t, dataType: "json", success: function (e) {
            o(e)
          }, error: function () {
            o([])
          }
        })
      }) : this.source = this.options.source
    },
    _searchTimeout: function (e) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var t = this.term === this._value(), n = this.menu.element.is(":visible"),
          i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
        (!t || t && !n && !i) && (this.selectedItem = null, this.search(null, e))
      }, this.options.delay)
    },
    search: function (e, t) {
      return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
    },
    _search: function (e) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
    },
    _response: function () {
      var t = ++this.requestIndex;
      return e.proxy(function (e) {
        t === this.requestIndex && this.__response(e), --this.pending || this.element.removeClass("ui-autocomplete-loading")
      }, this)
    },
    __response: function (e) {
      e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
    },
    close: function (e) {
      this.cancelSearch = !0, this._close(e)
    },
    _close: function (e) {
      this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
    },
    _change: function (e) {
      this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
    },
    _normalize: function (t) {
      return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
        return "string" == typeof t ? {label: t, value: t} : e.extend({}, t, {
          label: t.label || t.value,
          value: t.value || t.label
        })
      })
    },
    _suggest: function (t) {
      var n = this.menu.element.empty();
      this._renderMenu(n, t), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
    },
    _resizeMenu: function () {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
    },
    _renderMenu: function (t, n) {
      var i = this;
      e.each(n, function (e, n) {
        i._renderItemData(t, n)
      })
    },
    _renderItemData: function (e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t)
    },
    _renderItem: function (t, n) {
      return e("<li>").text(n.label).appendTo(t)
    },
    _move: function (e, t) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
    },
    widget: function () {
      return this.menu.element
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments)
    },
    _keyEvent: function (e, t) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
    }
  }), e.extend(e.ui.autocomplete, {
    escapeRegex: function (e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }, filter: function (t, n) {
      var i = RegExp(e.ui.autocomplete.escapeRegex(n), "i");
      return e.grep(t, function (e) {
        return i.test(e.label || e.value || e)
      })
    }
  }), e.widget("ui.autocomplete", e.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function (e) {
          return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
        }
      }
    }, __response: function (t) {
      var n;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (n = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(n).appendTo(this.liveRegion))
    }
  }), e.ui.autocomplete
}), $(document).ready(function () {
  var e = new Array;
  e[0] = "Computers themselves, and software yet to be developed, will revolutionize the way we learn. Steve Jobs", e[1] = "Natural science, does not simply describe and explain nature; it is part of the interplay between nature and ourselves. Werner Heisenberg", e[2] = "You can mass-produce hardware; you cannot mass-produce software - you cannot mass-produce the human mind. Michio Kaku", e[3] = "Software Engineering might be science; but that's not what I do. I'm a hacker, not an engineer. Jamie Zawinski", e[4] = "It's hardware that makes a machine fast. It's software that makes a fast machine slow. Craig Bruce", e[5] = "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. Linus Torvalds", e[6] = "The human brain has 100 billion neurons, each neuron connected to 10 thousand other neurons. Sitting on your shoulders is the most complicated object in the known universe. Michio Kaku", e[7] = "Insanity: doing the same thing over and over again and expecting different results. Albert Einstein", e[8] = "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. Albert Einstein", e[9] = "The true sign of intelligence is not knowledge but imagination. Albert Einstein", e[10] = "The present is theirs; the future, for which I really worked, is mine. Nikola Tesla", e[11] = "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration. Nikola Tesla", e[12] = "We can never obtain peace in the outer world until we make peace with ourselves. Dalai Lama", e[13] = "Home is where you feel at home and are treated well. Dalai Lama", e[14] = "Silence is sometimes the best answer. Dalai Lama", e[15] = "Know the rules well, so you can break them effectively. Dalai Lama", e[16] = "Share your knowledge. It is a way to achieve immortality. Dalai Lama", e[17] = "When you realize you’ve made a mistake, take immediate steps to correct it. Dalai Lama", e[18] = "It doesn't matter how beautiful your theory is, it doesn't matter how smart you are. If it doesn't agree with experiment, it's wrong. Richard Feynman";
  var t = e.length, n = Math.round(Math.random() * (t - 1));
  $("span#menu").click(function () {
    document.getElementById("main").style.marginLeft = "17%", document.getElementsByClassName("w3-sidenav")[0].style.width = "17%", document.getElementsByClassName("w3-sidenav")[0].style.display = "block", document.getElementsByClassName("w3-opennav")[0].style.display = "none"
  }), $("a#close").click(function () {
    document.getElementById("main").style.marginLeft = "0%", document.getElementsByClassName("w3-sidenav")[0].style.display = "none", document.getElementsByClassName("w3-opennav")[0].style.display = "inline-block"
  }), $("#quote").text(e[n]), $("#quote").flowtype({minFont: 5, maxFont: 13}), $("h1").flowtype({
    minFont: 18,
    maxFont: 38
  }), $("h2").flowtype({minFont: 16, maxFont: 30}), $("h5").flowtype({
    minFont: 14,
    maxFont: 18
  }), $("p").flowtype({minFont: 12, maxFont: 15}), $("pre").flowtype({
    minFont: 12,
    maxFont: 15
  }), $(".tag").flowtype({minFont: 12, maxFont: 15}), $(".pagination").flowtype({
    minFont: 12,
    maxFont: 15
  }), $(".about-pan").flowtype({minFont: 12, maxFont: 15}), $.fn.tagcloud.defaults = {
    size: {
      start: 9,
      end: 20,
      unit: "pt"
    }, color: {start: "#9CAEBE", end: "#EF3F00"}
  }, $(function () {
    $("#tagcloud a").tagcloud()
  }), $(function () {
    $("#tagcloud2 a").tagcloud()
  });
  jQuery(window).scroll(function () {
    jQuery(this).scrollTop() > 250 ? jQuery(".back-to-top").fadeIn(300) : jQuery(".back-to-top").fadeOut(300)
  }), $(".back-to-top").click(function (e) {
    return e.preventDefault(), $("html, body").animate({scrollTop: 0}, 300), !1
  }), $("#click1").click(function () {
    $("#job1").toggle("slow"), $(this).find("i").toggleClass("icon-minus-squared")
  }), $("#click2").click(function () {
    $("#job2").toggle("slow"), $(this).find("i").toggleClass("icon-minus-squared")
  }), $("#click3").click(function () {
    $("#job3").toggle("slow"), $(this).find("i").toggleClass("icon-minus-squared")
  }), $("#click4").click(function () {
    $("#job4").toggle("slow"), $(this).find("i").toggleClass("icon-minus-squared")
  }), $("#click5").click(function () {
    $("#job5").toggle("slow"), $(this).find("i").toggleClass("icon-minus-squared")
  }), $("#click6").click(function () {
    $("#job6").toggle("slow"), $(this).find("i").toggleClass("icon-minus-squared")
  }), $("#click7").click(function () {
    $("#job7").toggle("slow"), $(this).find("i").toggleClass("icon-minus-squared")
  }), $("#click8").click(function () {
    $("#job8").toggle("slow"), $(this).find("i").toggleClass("icon-minus-squared")
  }), $("#click9").click(function () {
    $("#job9").toggle("slow"), $(this).find("i").toggleClass("icon-minus-squared")
  }), $(".progressBar").each(function () {
    var e = $(this).data("value");
    width_max = $(this).width();
    var t = (width_max, $(this).data("skill"));
    $(this).find("div").each(function () {
      width = $(this).data("value") * width_max / 100, ml = $(this).data("pos"), $(this).css("margin-left", ml + "%"), $(this).animate({width: width}, 2000).html(t)
    })
  });
  var i = $("#profile"), o = i.width();
  $(".border-line").width(o / 13 - 30), $("li.opposite-side .border-line").width(o / 13 + 10), $(window).resize(function () {
    o = i.width(), $(".border-line").width(o / 13 - 30), $("li.opposite-side .border-line").width(o / 13 + 10)
  }), $(".calendar-year").click(function () {
    $(this).next().toggle()
  }) 
});


setInterval(function () {
  var e = new Date, t = e.getHours(), n = e.getMinutes(), i = e.getSeconds();
  t = (t < 10 ? "0" : "") + t, n = (n < 10 ? "0" : "") + n, i = (i < 10 ? "0" : "") + i;
  var o = t + ":" + n + ":" + i;
  $(".clock").html(o)
}, 1e3), $.getJSON("https://freegeoip.net/json/").done(function (e) {
  $("#flag").attr("src", "/images/flags/" + e.country_code.toLowerCase() + ".gif"), $("#flag").attr("title", e.country_name)
}), function (e) {
  e.fn.flowtype = function (t) {
    var n = e.extend({maximum: 9999, minimum: 1, maxFont: 9999, minFont: 1, fontRatio: 35}, t), i = function (t) {
      var i = e(t), o = i.width(), r = o > n.maximum ? n.maximum : o < n.minimum ? n.minimum : o, s = r / n.fontRatio,
        a = s > n.maxFont ? n.maxFont : s < n.minFont ? n.minFont : s;
      i.css("font-size", a + "px")
    };
    return this.each(function () {
      var t = this;
      e(window).resize(function () {
        i(t)
      }), i(this)
    })
  }
}(jQuery), function () {
  var e = function (t) {
    var n = new e.Index;
    return n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer), t && t.call(n, n), n
  };
  e.version = "0.7.1", e.utils = {}, e.utils.warn = function (e) {
    return function (t) {
      e.console && console.warn && console.warn(t)
    }
  }(this), e.utils.asString = function (e) {
    return void 0 === e || null === e ? "" : e.toString()
  }, e.EventEmitter = function () {
    this.events = {}
  }, e.EventEmitter.prototype.addListener = function () {
    var e = Array.prototype.slice.call(arguments), t = e.pop(), n = e;
    if ("function" != typeof t) throw new TypeError("last argument must be a function");
    n.forEach(function (e) {
      this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t)
    }, this)
  }, e.EventEmitter.prototype.removeListener = function (e, t) {
    if (this.hasHandler(e)) {
      var n = this.events[e].indexOf(t);
      this.events[e].splice(n, 1), this.events[e].length || delete this.events[e]
    }
  }, e.EventEmitter.prototype.emit = function (e) {
    if (this.hasHandler(e)) {
      var t = Array.prototype.slice.call(arguments, 1);
      this.events[e].forEach(function (e) {
        e.apply(void 0, t)
      })
    }
  }, e.EventEmitter.prototype.hasHandler = function (e) {
    return e in this.events
  }, e.tokenizer = function (t) {
    return arguments.length && null != t && void 0 != t ? Array.isArray(t) ? t.map(function (t) {
      return e.utils.asString(t).toLowerCase()
    }) : t.toString().trim().toLowerCase().split(e.tokenizer.seperator) : []
  }, e.tokenizer.seperator = /[\s\-]+/, e.tokenizer.load = function (e) {
    var t = this.registeredFunctions[e];
    if (!t) throw new Error("Cannot load un-registered function: " + e);
    return t
  }, e.tokenizer.label = "default", e.tokenizer.registeredFunctions = {default: e.tokenizer}, e.tokenizer.registerFunction = function (t, n) {
    n in this.registeredFunctions && e.utils.warn("Overwriting existing tokenizer: " + n), t.label = n, this.registeredFunctions[n] = t
  }, e.Pipeline = function () {
    this._stack = []
  }, e.Pipeline.registeredFunctions = {}, e.Pipeline.registerFunction = function (t, n) {
    n in this.registeredFunctions && e.utils.warn("Overwriting existing registered function: " + n), t.label = n, e.Pipeline.registeredFunctions[t.label] = t
  }, e.Pipeline.warnIfFunctionNotRegistered = function (t) {
    t.label && t.label in this.registeredFunctions || e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", t)
  }, e.Pipeline.load = function (t) {
    var n = new e.Pipeline;
    return t.forEach(function (t) {
      var i = e.Pipeline.registeredFunctions[t];
      if (!i) throw new Error("Cannot load un-registered function: " + t);
      n.add(i)
    }), n
  }, e.Pipeline.prototype.add = function () {
    Array.prototype.slice.call(arguments).forEach(function (t) {
      e.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t)
    }, this)
  }, e.Pipeline.prototype.after = function (t, n) {
    e.Pipeline.warnIfFunctionNotRegistered(n);
    var i = this._stack.indexOf(t);
    if (-1 == i) throw new Error("Cannot find existingFn");
    i += 1, this._stack.splice(i, 0, n)
  }, e.Pipeline.prototype.before = function (t, n) {
    e.Pipeline.warnIfFunctionNotRegistered(n);
    var i = this._stack.indexOf(t);
    if (-1 == i) throw new Error("Cannot find existingFn");
    this._stack.splice(i, 0, n)
  }, e.Pipeline.prototype.remove = function (e) {
    var t = this._stack.indexOf(e);
    -1 != t && this._stack.splice(t, 1)
  }, e.Pipeline.prototype.run = function (e) {
    for (var t = [], n = e.length, i = this._stack.length, o = 0; o < n; o++) {
      for (var r = e[o], s = 0; s < i && (void 0 !== (r = this._stack[s](r, o, e)) && "" !== r); s++) ;
      void 0 !== r && "" !== r && t.push(r)
    }
    return t
  }, e.Pipeline.prototype.reset = function () {
    this._stack = []
  }, e.Pipeline.prototype.toJSON = function () {
    return this._stack.map(function (t) {
      return e.Pipeline.warnIfFunctionNotRegistered(t), t.label
    })
  }, e.Vector = function () {
    this._magnitude = null, this.list = void 0, this.length = 0
  }, e.Vector.Node = function (e, t, n) {
    this.idx = e, this.val = t, this.next = n
  }, e.Vector.prototype.insert = function (t, n) {
    this._magnitude = void 0;
    var i = this.list;
    if (!i) return this.list = new e.Vector.Node(t, n, i), this.length++;
    if (t < i.idx) return this.list = new e.Vector.Node(t, n, i), this.length++;
    for (var o = i, r = i.next; void 0 != r;) {
      if (t < r.idx) return o.next = new e.Vector.Node(t, n, r), this.length++;
      o = r, r = r.next
    }
    return o.next = new e.Vector.Node(t, n, r), this.length++
  }, e.Vector.prototype.magnitude = function () {
    if (this._magnitude) return this._magnitude;
    for (var e, t = this.list, n = 0; t;) e = t.val, n += e * e, t = t.next;
    return this._magnitude = Math.sqrt(n)
  }, e.Vector.prototype.dot = function (e) {
    for (var t = this.list, n = e.list, i = 0; t && n;) t.idx < n.idx ? t = t.next : t.idx > n.idx ? n = n.next : (i += t.val * n.val, t = t.next, n = n.next);
    return i
  }, e.Vector.prototype.similarity = function (e) {
    return this.dot(e) / (this.magnitude() * e.magnitude())
  }, e.SortedSet = function () {
    this.length = 0, this.elements = []
  }, e.SortedSet.load = function (e) {
    var t = new this;
    return t.elements = e, t.length = e.length, t
  }, e.SortedSet.prototype.add = function () {
    var e, t;
    for (e = 0; e < arguments.length; e++) t = arguments[e], ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t);
    this.length = this.elements.length
  }, e.SortedSet.prototype.toArray = function () {
    return this.elements.slice()
  }, e.SortedSet.prototype.map = function (e, t) {
    return this.elements.map(e, t)
  }, e.SortedSet.prototype.forEach = function (e, t) {
    return this.elements.forEach(e, t)
  }, e.SortedSet.prototype.indexOf = function (e) {
    for (var t = 0, n = this.elements.length, i = n - t, o = t + Math.floor(i / 2), r = this.elements[o]; i > 1;) {
      if (r === e) return o;
      r < e && (t = o), r > e && (n = o), i = n - t, o = t + Math.floor(i / 2), r = this.elements[o]
    }
    return r === e ? o : -1
  }, e.SortedSet.prototype.locationFor = function (e) {
    for (var t = 0, n = this.elements.length, i = n - t, o = t + Math.floor(i / 2), r = this.elements[o]; i > 1;) r < e && (t = o), r > e && (n = o), i = n - t, o = t + Math.floor(i / 2), r = this.elements[o];
    return r > e ? o : r < e ? o + 1 : void 0
  }, e.SortedSet.prototype.intersect = function (t) {
    for (var n = new e.SortedSet, i = 0, o = 0, r = this.length, s = t.length, a = this.elements, l = t.elements; ;) {
      if (i > r - 1 || o > s - 1) break;
      a[i] !== l[o] ? a[i] < l[o] ? i++ : a[i] > l[o] && o++ : (n.add(a[i]), i++, o++)
    }
    return n
  }, e.SortedSet.prototype.clone = function () {
    var t = new e.SortedSet;
    return t.elements = this.toArray(), t.length = t.elements.length, t
  }, e.SortedSet.prototype.union = function (e) {
    var t, n, i;
    this.length >= e.length ? (t = this, n = e) : (t = e, n = this), i = t.clone();
    for (var o = 0, r = n.toArray(); o < r.length; o++) i.add(r[o]);
    return i
  }, e.SortedSet.prototype.toJSON = function () {
    return this.toArray()
  }, e.Index = function () {
    this._fields = [], this._ref = "id", this.pipeline = new e.Pipeline, this.documentStore = new e.Store, this.tokenStore = new e.TokenStore, this.corpusTokens = new e.SortedSet, this.eventEmitter = new e.EventEmitter, this.tokenizerFn = e.tokenizer, this._idfCache = {}, this.on("add", "remove", "update", function () {
      this._idfCache = {}
    }.bind(this))
  }, e.Index.prototype.on = function () {
    var e = Array.prototype.slice.call(arguments);
    return this.eventEmitter.addListener.apply(this.eventEmitter, e)
  }, e.Index.prototype.off = function (e, t) {
    return this.eventEmitter.removeListener(e, t)
  }, e.Index.load = function (t) {
    t.version !== e.version && e.utils.warn("version mismatch: current " + e.version + " importing " + t.version);
    var n = new this;
    return n._fields = t.fields, n._ref = t.ref, n.tokenizer = e.tokenizer.load(t.tokenizer), n.documentStore = e.Store.load(t.documentStore), n.tokenStore = e.TokenStore.load(t.tokenStore), n.corpusTokens = e.SortedSet.load(t.corpusTokens), n.pipeline = e.Pipeline.load(t.pipeline), n
  }, e.Index.prototype.field = function (e, t) {
    var t = t || {}, n = {name: e, boost: t.boost || 1};
    return this._fields.push(n), this
  }, e.Index.prototype.ref = function (e) {
    return this._ref = e, this
  }, e.Index.prototype.tokenizer = function (t) {
    return t.label && t.label in e.tokenizer.registeredFunctions || e.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"), this.tokenizerFn = t, this
  }, e.Index.prototype.add = function (t, n) {
    var i = {}, o = new e.SortedSet, r = t[this._ref], n = void 0 === n || n;
    this._fields.forEach(function (e) {
      var n = this.pipeline.run(this.tokenizerFn(t[e.name]));
      i[e.name] = n;
      for (var r = 0; r < n.length; r++) {
        var s = n[r];
        o.add(s), this.corpusTokens.add(s)
      }
    }, this), this.documentStore.set(r, o);
    for (var s = 0; s < o.length; s++) {
      for (var a = o.elements[s], l = 0, u = 0; u < this._fields.length; u++) {
        var c = this._fields[u], h = i[c.name], f = h.length;
        if (f) {
          for (var d = 0, p = 0; p < f; p++) h[p] === a && d++;
          l += d / f * c.boost
        }
      }
      this.tokenStore.add(a, {ref: r, tf: l})
    }
    n && this.eventEmitter.emit("add", t, this)
  }, e.Index.prototype.remove = function (e, t) {
    var n = e[this._ref], t = void 0 === t || t;
    if (this.documentStore.has(n)) {
      var i = this.documentStore.get(n);
      this.documentStore.remove(n), i.forEach(function (e) {
        this.tokenStore.remove(e, n)
      }, this), t && this.eventEmitter.emit("remove", e, this)
    }
  }, e.Index.prototype.update = function (e, t) {
    var t = void 0 === t || t;
    this.remove(e, !1), this.add(e, !1), t && this.eventEmitter.emit("update", e, this)
  }, e.Index.prototype.idf = function (e) {
    var t = "@" + e;
    if (Object.prototype.hasOwnProperty.call(this._idfCache, t)) return this._idfCache[t];
    var n = this.tokenStore.count(e), i = 1;
    return n > 0 && (i = 1 + Math.log(this.documentStore.length / n)), this._idfCache[t] = i
  }, e.Index.prototype.search = function (t) {
    var n = this.pipeline.run(this.tokenizerFn(t)), i = new e.Vector, o = [], r = this._fields.reduce(function (e, t) {
      return e + t.boost
    }, 0);
    return n.some(function (e) {
      return this.tokenStore.has(e)
    }, this) ? (n.forEach(function (t, n, s) {
      var a = 1 / s.length * this._fields.length * r, l = this, u = this.tokenStore.expand(t).reduce(function (n, o) {
        var r = l.corpusTokens.indexOf(o), s = l.idf(o), u = 1, c = new e.SortedSet;
        if (o !== t) {
          var h = Math.max(3, o.length - t.length);
          u = 1 / Math.log(h)
        }
        r > -1 && i.insert(r, a * s * u);
        for (var f = l.tokenStore.get(o), d = Object.keys(f), p = d.length, m = 0; m < p; m++) c.add(f[d[m]].ref);
        return n.union(c)
      }, new e.SortedSet);
      o.push(u)
    }, this), o.reduce(function (e, t) {
      return e.intersect(t)
    }).map(function (e) {
      return {ref: e, score: i.similarity(this.documentVector(e))}
    }, this).sort(function (e, t) {
      return t.score - e.score
    })) : []
  }, e.Index.prototype.documentVector = function (t) {
    for (var n = this.documentStore.get(t), i = n.length, o = new e.Vector, r = 0; r < i; r++) {
      var s = n.elements[r], a = this.tokenStore.get(s)[t].tf, l = this.idf(s);
      o.insert(this.corpusTokens.indexOf(s), a * l)
    }
    return o
  }, e.Index.prototype.toJSON = function () {
    return {
      version: e.version,
      fields: this._fields,
      ref: this._ref,
      tokenizer: this.tokenizerFn.label,
      documentStore: this.documentStore.toJSON(),
      tokenStore: this.tokenStore.toJSON(),
      corpusTokens: this.corpusTokens.toJSON(),
      pipeline: this.pipeline.toJSON()
    }
  }, e.Index.prototype.use = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    t.unshift(this), e.apply(this, t)
  }, e.Store = function () {
    this.store = {}, this.length = 0
  }, e.Store.load = function (t) {
    var n = new this;
    return n.length = t.length, n.store = Object.keys(t.store).reduce(function (n, i) {
      return n[i] = e.SortedSet.load(t.store[i]), n
    }, {}), n
  }, e.Store.prototype.set = function (e, t) {
    this.has(e) || this.length++, this.store[e] = t
  }, e.Store.prototype.get = function (e) {
    return this.store[e]
  }, e.Store.prototype.has = function (e) {
    return e in this.store
  }, e.Store.prototype.remove = function (e) {
    this.has(e) && (delete this.store[e], this.length--)
  }, e.Store.prototype.toJSON = function () {
    return {store: this.store, length: this.length}
  }, e.stemmer = function () {
    var e = {
        ational: "ate",
        tional: "tion",
        enci: "ence",
        anci: "ance",
        izer: "ize",
        bli: "ble",
        alli: "al",
        entli: "ent",
        eli: "e",
        ousli: "ous",
        ization: "ize",
        ation: "ate",
        ator: "ate",
        alism: "al",
        iveness: "ive",
        fulness: "ful",
        ousness: "ous",
        aliti: "al",
        iviti: "ive",
        biliti: "ble",
        logi: "log"
      }, t = {icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: ""}, n = "[aeiouy]",
      i = "[^aeiou][^aeiouy]*", o = n + "[aeiou]*", r = new RegExp("^(" + i + ")?" + o + i),
      s = new RegExp("^(" + i + ")?" + o + i + o + i), a = new RegExp("^(" + i + ")?" + o + i + "(" + o + ")?$"),
      l = new RegExp("^(" + i + ")?" + n), u = new RegExp("([^aeiouylsz])\\1$"),
      c = new RegExp("^" + i + n + "[^aeiouwxy]$"), h = new RegExp("^" + i + n + "[^aeiouwxy]$");
    return function (n) {
      var i, o, f, d, p, m, g;
      if (n.length < 3) return n;
      if (f = n.substr(0, 1), "y" == f && (n = f.toUpperCase() + n.substr(1)), d = /^(.+?)(ss|i)es$/, p = /^(.+?)([^s])s$/, d.test(n) ? n = n.replace(d, "$1$2") : p.test(n) && (n = n.replace(p, "$1$2")), d = /^(.+?)eed$/, p = /^(.+?)(ed|ing)$/, d.test(n)) {
        var v = d.exec(n);
        d = r, d.test(v[1]) && (d = /.$/, n = n.replace(d, ""))
      } else if (p.test(n)) {
        var v = p.exec(n);
        i = v[1], p = l, p.test(i) && (n = i, p = /(at|bl|iz)$/, m = u, g = c, p.test(n) ? n += "e" : m.test(n) ? (d = /.$/, n = n.replace(d, "")) : g.test(n) && (n += "e"))
      }
      if (d = /^(.+?[^aeiou])y$/, d.test(n)) {
        var v = d.exec(n);
        i = v[1], n = i + "i"
      }
      if (d = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, d.test(n)) {
        var v = d.exec(n);
        i = v[1], o = v[2], d = r, d.test(i) && (n = i + e[o])
      }
      if (d = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, d.test(n)) {
        var v = d.exec(n);
        i = v[1], o = v[2], d = r, d.test(i) && (n = i + t[o])
      }
      if (d = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, p = /^(.+?)(s|t)(ion)$/, d.test(n)) {
        var v = d.exec(n);
        i = v[1], d = s, d.test(i) && (n = i)
      } else if (p.test(n)) {
        var v = p.exec(n);
        i = v[1] + v[2], p = s, p.test(i) && (n = i)
      }
      if (d = /^(.+?)e$/, d.test(n)) {
        var v = d.exec(n);
        i = v[1], d = s, p = a, m = h, (d.test(i) || p.test(i) && !m.test(i)) && (n = i)
      }
      return d = /ll$/, p = s, d.test(n) && p.test(n) && (d = /.$/, n = n.replace(d, "")), "y" == f && (n = f.toLowerCase() + n.substr(1)), n
    }
  }(), e.Pipeline.registerFunction(e.stemmer, "stemmer"), e.generateStopWordFilter = function (e) {
    var t = e.reduce(function (e, t) {
      return e[t] = t, e
    }, {});
    return function (e) {
      if (e && t[e] !== e) return e
    }
  }, e.stopWordFilter = e.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter"), e.trimmer = function (e) {
    return e.replace(/^\W+/, "").replace(/\W+$/, "")
  }, e.Pipeline.registerFunction(e.trimmer, "trimmer"), e.TokenStore = function () {
    this.root = {docs: {}}, this.length = 0
  }, e.TokenStore.load = function (e) {
    var t = new this;
    return t.root = e.root, t.length = e.length, t
  }, e.TokenStore.prototype.add = function (e, t, n) {
    var n = n || this.root, i = e.charAt(0), o = e.slice(1);
    return i in n || (n[i] = {docs: {}}), 0 === o.length ? (n[i].docs[t.ref] = t, void(this.length += 1)) : this.add(o, t, n[i])
  }, e.TokenStore.prototype.has = function (e) {
    if (!e) return !1;
    for (var t = this.root, n = 0; n < e.length; n++) {
      if (!t[e.charAt(n)]) return !1;
      t = t[e.charAt(n)]
    }
    return !0
  }, e.TokenStore.prototype.getNode = function (e) {
    if (!e) return {};
    for (var t = this.root, n = 0; n < e.length; n++) {
      if (!t[e.charAt(n)]) return {};
      t = t[e.charAt(n)]
    }
    return t
  }, e.TokenStore.prototype.get = function (e, t) {
    return this.getNode(e, t).docs || {}
  }, e.TokenStore.prototype.count = function (e, t) {
    return Object.keys(this.get(e, t)).length
  }, e.TokenStore.prototype.remove = function (e, t) {
    if (e) {
      for (var n = this.root, i = 0; i < e.length; i++) {
        if (!(e.charAt(i) in n)) return;
        n = n[e.charAt(i)]
      }
      delete n.docs[t]
    }
  }, e.TokenStore.prototype.expand = function (e, t) {
    var n = this.getNode(e), i = n.docs || {}, t = t || [];
    return Object.keys(i).length && t.push(e), Object.keys(n).forEach(function (n) {
      "docs" !== n && t.concat(this.expand(e + n, t))
    }, this), t
  }, e.TokenStore.prototype.toJSON = function () {
    return {root: this.root, length: this.length}
  }, function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.lunr = t()
  }(this, function () {
    return e
  })
}(), function (e) {
  "use strict";
  var t = function (e, t) {
    return e - t
  }, n = function (e) {
    4 === e.length && (e = e.replace(/(\w)(\w)(\w)/gi, "$1$1$2$2$3$3"));
    var t = /(\w{2})(\w{2})(\w{2})/.exec(e);
    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
  }, i = function (e) {
    return "#" + jQuery.map(e, function (e) {
      var t = e.toString(16);
      return t = 1 === t.length ? "0" + t : t
    }).join("")
  }, o = function (e, t) {
    return jQuery.map(n(e.end), function (i, o) {
      return (i - n(e.start)[o]) / t
    })
  }, r = function (e, t, o) {
    var r = jQuery.map(n(e.start), function (e, n) {
      var i = Math.round(e + t[n] * o);
      return i > 255 ? i = 255 : i < 0 && (i = 0), i
    });
    return i(r)
  };
  e.fn.tagcloud = function (n) {
    var i = e.extend({}, e.fn.tagcloud.defaults, n), s = this.map(function () {
      return e(this).attr("data-rel")
    });
    s = jQuery.makeArray(s).sort(t);
    var a = s[0], l = s.pop(), u = l - a;
    0 === u && (u = 1);
    var c, h;
    return i.size && (c = (i.size.end - i.size.start) / u), i.color && (h = o(i.color, u)), this.each(function () {
      var t = e(this).attr("data-rel") - a;
      i.size && e(this).css({"font-size": i.size.start + t * c + i.size.unit}), i.color && e(this).css({color: r(i.color, h, t)})
    })
  }, e.fn.tagcloud.defaults = {size: {start: 14, end: 18, unit: "pt"}}
}(jQuery);