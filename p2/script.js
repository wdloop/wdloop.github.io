function t(t) {
   return t && t.__esModule ? t.default : t
}
var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
   n = {},
   r = {},
   i = e.parcelRequired1cf;

function o(t) {
   if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
   return t
}

function s(t, e) {
   t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
null == i && ((i = function (t) {
   if (t in n) return n[t].exports;
   if (t in r) {
      var e = r[t];
      delete r[t];
      var i = {
         id: t,
         exports: {}
      };
      return n[t] = i, e.call(i.exports, i, i.exports), i.exports
   }
   var o = new Error("Cannot find module '" + t + "'");
   throw o.code = "MODULE_NOT_FOUND", o
}).register = function (t, e) {
   r[t] = e
}, e.parcelRequired1cf = i), i.register("Vqjah", (function (t, e) {
   ! function (e, n) {
      "function" == typeof define && define.amd ? define(n) : t.exports ? t.exports = n() : e.EvEmitter = n()
   }("undefined" != typeof window ? window : t.exports, (function () {
      function t() {}
      var e = t.prototype;
      return e.on = function (t, e) {
         if (t && e) {
            var n = this._events = this._events || {},
               r = n[t] = n[t] || [];
            return -1 == r.indexOf(e) && r.push(e), this
         }
      }, e.once = function (t, e) {
         if (t && e) {
            this.on(t, e);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[t] = n[t] || {})[e] = !0, this
         }
      }, e.off = function (t, e) {
         var n = this._events && this._events[t];
         if (n && n.length) {
            var r = n.indexOf(e);
            return -1 != r && n.splice(r, 1), this
         }
      }, e.emitEvent = function (t, e) {
         var n = this._events && this._events[t];
         if (n && n.length) {
            n = n.slice(0), e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t], i = 0; i < n.length; i++) {
               var o = n[i];
               r && r[o] && (this.off(t, o), delete r[o]), o.apply(this, e)
            }
            return this
         }
      }, e.allOff = function () {
         delete this._events, delete this._onceEvents
      }, t
   }))
}));
var a, u, l, c, h, p, f, d, D, g, m, _, y, v, C, x, w, F, E, b, T, A, P, S, M, k, B, O, I = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
         lineHeight: ""
      }
   },
   L = {
      duration: .5,
      overwrite: !1,
      delay: 0
   },
   R = 1e8,
   N = 1e-8,
   z = 2 * Math.PI,
   W = z / 4,
   H = 0,
   q = Math.sqrt,
   V = Math.cos,
   X = Math.sin,
   Y = function (t) {
      return "string" == typeof t
   },
   j = function (t) {
      return "function" == typeof t
   },
   U = function (t) {
      return "number" == typeof t
   },
   Z = function (t) {
      return void 0 === t
   },
   G = function (t) {
      return "object" == typeof t
   },
   Q = function (t) {
      return !1 !== t
   },
   K = function () {
      return "undefined" != typeof window
   },
   $ = function (t) {
      return j(t) || Y(t)
   },
   J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
   tt = Array.isArray,
   et = /(?:-?\.?\d|\.)+/gi,
   nt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
   rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
   it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
   ot = /[+-]=-?[.\d]+/,
   st = /[^,'"\[\]\s]+/gi,
   at = /[\d.+\-=]+(?:e[-+]\d*)*/i,
   ut = {},
   lt = {},
   ct = function (t) {
      return (lt = It(t, ut)) && xn
   },
   ht = function (t, e) {
      return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
   },
   pt = function (t, e) {
      return !e && console.warn(t)
   },
   ft = function (t, e) {
      return t && (ut[t] = e) && lt && (lt[t] = e) || ut
   },
   dt = function () {
      return 0
   },
   Dt = {},
   gt = [],
   mt = {},
   _t = {},
   yt = {},
   vt = 30,
   Ct = [],
   xt = "",
   wt = function (t) {
      var e, n, r = t[0];
      if (G(r) || j(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
         for (n = Ct.length; n-- && !Ct[n].targetTest(r););
         e = Ct[n]
      }
      for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Ye(t[n], e))) || t.splice(n, 1);
      return t
   },
   Ft = function (t) {
      return t._gsap || wt(he(t))[0]._gsap
   },
   Et = function (t, e, n) {
      return (n = t[e]) && j(n) ? t[e]() : Z(n) && t.getAttribute && t.getAttribute(e) || n
   },
   bt = function (t, e) {
      return (t = t.split(",")).forEach(e) || t
   },
   Tt = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0
   },
   At = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0
   },
   Pt = function (t, e) {
      for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;);
      return r < n
   },
   St = function () {
      var t, e, n = gt.length,
         r = gt.slice(0);
      for (mt = {}, gt.length = 0, t = 0; t < n; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
   },
   Mt = function (t, e, n, r) {
      gt.length && St(), t.render(e, n, r), gt.length && St()
   },
   kt = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(st).length < 2 ? e : Y(t) ? t.trim() : t
   },
   Bt = function (t) {
      return t
   },
   Ot = function (t, e) {
      for (var n in e) n in t || (t[n] = e[n]);
      return t
   },
   It = function (t, e) {
      for (var n in e) t[n] = e[n];
      return t
   },
   Lt = function t(e, n) {
      for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = G(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
      return e
   },
   Rt = function (t, e) {
      var n, r = {};
      for (n in t) n in e || (r[n] = t[n]);
      return r
   },
   Nt = function (t) {
      var e, n = t.parent || u,
         r = t.keyframes ? (e = tt(t.keyframes), function (t, n) {
            for (var r in n) r in t || "duration" === r && e || "ease" === r || (t[r] = n[r])
         }) : Ot;
      if (Q(t.inherit))
         for (; n;) r(t, n.vars.defaults), n = n.parent || n._dp;
      return t
   },
   zt = function (t, e, n, r) {
      void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
      var i = e._prev,
         o = e._next;
      i ? i._next = o : t[n] === e && (t[n] = o), o ? o._prev = i : t[r] === e && (t[r] = i), e._next = e._prev = e.parent = null
   },
   Wt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
   },
   Ht = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
         for (var n = t; n;) n._dirty = 1, n = n.parent;
      return t
   },
   qt = function t(e) {
      return !e || e._ts && t(e.parent)
   },
   Vt = function (t) {
      return t._repeat ? Xt(t._tTime, t = t.duration() + t._rDelay) * t : 0
   },
   Xt = function (t, e) {
      var n = Math.floor(t /= e);
      return t && n === t ? n - 1 : n
   },
   Yt = function (t, e) {
      return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
   },
   jt = function (t) {
      return t._end = At(t._start + (t._tDur / Math.abs(t._ts || t._rts || N) || 0))
   },
   Ut = function (t, e) {
      var n = t._dp;
      return n && n.smoothChildTiming && t._ts && (t._start = At(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), jt(t), n._dirty || Ht(n, t)), t
   },
   Zt = function (t, e) {
      var n;
      if ((e._time || e._initted && !e._dur) && (n = Yt(t.rawTime(), e), (!e._dur || se(0, e.totalDuration(), n) - e._tTime > N) && e.render(n, !0)), Ht(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
         if (t._dur < t.duration())
            for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
         t._zTime = -1e-8
      }
   },
   Gt = function (t, e, n, r) {
      return e.parent && Wt(e), e._start = At((U(n) ? n : n || t !== u ? re(t, n, e) : t._time) + e._delay), e._end = At(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
         function (t, e, n, r, i) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var o, s = t[r];
            if (i)
               for (o = e[i]; s && s[i] > o;) s = s._prev;
            s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t
         }(t, e, "_first", "_last", t._sort ? "_start" : 0), Jt(e) || (t._recent = e), r || Zt(t, e), t
   },
   Qt = function (t, e) {
      return (ut.ScrollTrigger || ht("scrollTrigger", e)) && ut.ScrollTrigger.create(e, t)
   },
   Kt = function (t, e, n, r) {
      return $e(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== ke.frame ? (gt.push(t), t._lazy = [e, r], 1) : void 0 : 1
   },
   $t = function t(e) {
      var n = e.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
   },
   Jt = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e
   },
   te = function (t, e, n, r) {
      var i = t._repeat,
         o = At(e) || 0,
         s = t._tTime / t._tDur;
      return s && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : At(o * (i + 1) + t._rDelay * i) : o, s > 0 && !r ? Ut(t, t._tTime = t._tDur * s) : t.parent && jt(t), n || Ht(t.parent, t), t
   },
   ee = function (t) {
      return t instanceof Ue ? Ht(t) : te(t, t._dur)
   },
   ne = {
      _start: 0,
      endTime: dt,
      totalDuration: dt
   },
   re = function t(e, n, r) {
      var i, o, s, a = e.labels,
         u = e._recent || ne,
         l = e.duration() >= R ? u.endTime(!1) : e._dur;
      return Y(n) && (isNaN(n) || n in a) ? (o = n.charAt(0), s = "%" === n.substr(-1), i = n.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (n = n.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (n in a || (a[n] = l), a[n]) : (o = parseFloat(n.charAt(i - 1) + n.substr(i + 1)), s && r && (o = o / 100 * (tt(r) ? r[0] : r).totalDuration()), i > 1 ? t(e, n.substr(0, i - 1), r) + o : l + o)) : null == n ? l : +n
   },
   ie = function (t, e, n) {
      var r, i, o = U(e[1]),
         s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
         a = e[s];
      if (o && (a.duration = e[1]), a.parent = n, t) {
         for (r = a, i = n; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = Q(i.vars.inherit) && i.parent;
         a.immediateRender = Q(r.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
      }
      return new rn(e[0], a, e[s + 1])
   },
   oe = function (t, e) {
      return t || 0 === t ? e(t) : e
   },
   se = function (t, e, n) {
      return n < t ? t : n > e ? e : n
   },
   ae = function (t, e) {
      return Y(t) && (e = at.exec(t)) ? t.substr(e.index + e[0].length) : ""
   },
   ue = [].slice,
   le = function (t, e) {
      return t && G(t) && "length" in t && (!e && !t.length || t.length - 1 in t && G(t[0])) && !t.nodeType && t !== l
   },
   ce = function (t, e, n) {
      return void 0 === n && (n = []), t.forEach((function (t) {
         var r;
         return Y(t) && !e || le(t, 1) ? (r = n).push.apply(r, he(t)) : n.push(t)
      })) || n
   },
   he = function (t, e, n) {
      return !Y(t) || n || !c && Be() ? tt(t) ? ce(t, n) : le(t) ? ue.call(t, 0) : t ? [t] : [] : ue.call((e || h).querySelectorAll(t), 0)
   },
   pe = function (t) {
      return t.sort((function () {
         return .5 - Math.random()
      }))
   },
   fe = function (t) {
      if (j(t)) return t;
      var e = G(t) ? t : {
            each: t
         },
         n = We(e.ease),
         r = e.from || 0,
         i = parseFloat(e.base) || 0,
         o = {},
         s = r > 0 && r < 1,
         a = isNaN(r) || s,
         u = e.axis,
         l = r,
         c = r;
      return Y(r) ? l = c = {
            center: .5,
            edges: .5,
            end: 1
         } [r] || 0 : !s && a && (l = r[0], c = r[1]),
         function (t, s, h) {
            var p, f, d, D, g, m, _, y, v, C = (h || e).length,
               x = o[C];
            if (!x) {
               if (!(v = "auto" === e.grid ? 0 : (e.grid || [1, R])[1])) {
                  for (_ = -1e8; _ < (_ = h[v++].getBoundingClientRect().left) && v < C;);
                  v--
               }
               for (x = o[C] = [], p = a ? Math.min(v, C) * l - .5 : r % v, f = v === R ? 0 : a ? C * c / v - .5 : r / v | 0, _ = 0, y = R, m = 0; m < C; m++) d = m % v - p, D = f - (m / v | 0), x[m] = g = u ? Math.abs("y" === u ? D : d) : q(d * d + D * D), g > _ && (_ = g), g < y && (y = g);
               "random" === r && pe(x), x.max = _ - y, x.min = y, x.v = C = (parseFloat(e.amount) || parseFloat(e.each) * (v > C ? C - 1 : u ? "y" === u ? C / v : v : Math.max(v, C / v)) || 0) * ("edges" === r ? -1 : 1), x.b = C < 0 ? i - C : i, x.u = ae(e.amount || e.each) || 0, n = n && C < 0 ? Ne(n) : n
            }
            return C = (x[t] - x.min) / x.max || 0, At(x.b + (n ? n(C) : C) * x.v) + x.u
         }
   },
   de = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (n) {
         var r = Math.round(parseFloat(n) / t) * t * e;
         return (r - r % 1) / e + (U(n) ? 0 : ae(n))
      }
   },
   De = function (t, e) {
      var n, r, i = tt(t);
      return !i && G(t) && (n = i = t.radius || R, t.values ? (t = he(t.values), (r = !U(t[0])) && (n *= n)) : t = de(t.increment)), oe(e, i ? j(t) ? function (e) {
         return r = t(e), Math.abs(r - e) <= n ? r : e
      } : function (e) {
         for (var i, o, s = parseFloat(r ? e.x : e), a = parseFloat(r ? e.y : 0), u = R, l = 0, c = t.length; c--;)(i = r ? (i = t[c].x - s) * i + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < u && (u = i, l = c);
         return l = !n || u <= n ? t[l] : e, r || l === e || U(e) ? l : l + ae(e)
      } : de(t))
   },
   ge = function (t, e, n, r) {
      return oe(tt(t) ? !e : !0 === n ? (n = 0, !1) : !r, (function () {
         return tt(t) ? t[~~(Math.random() * t.length)] : (r = (n = n || 1e-5) < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
      }))
   },
   me = function (t, e, n) {
      return oe(n, (function (n) {
         return t[~~e(n)]
      }))
   },
   _e = function (t) {
      for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));) r = t.indexOf(")", e), i = "[" === t.charAt(e + 7), n = t.substr(e + 7, r - e - 7).match(i ? st : et), s += t.substr(o, e - o) + ge(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5), o = r + 1;
      return s + t.substr(o, t.length - o)
   },
   ye = function (t, e, n, r, i) {
      var o = e - t,
         s = r - n;
      return oe(i, (function (e) {
         return n + ((e - t) / o * s || 0)
      }))
   },
   ve = function (t, e, n) {
      var r, i, o, s = t.labels,
         a = R;
      for (r in s)(i = s[r] - e) < 0 == !!n && i && a > (i = Math.abs(i)) && (o = r, a = i);
      return o
   },
   Ce = function (t, e, n) {
      var r, i, o = t.vars,
         s = o[e];
      if (s) return r = o[e + "Params"], i = o.callbackScope || t, n && gt.length && St(), r ? s.apply(i, r) : s.call(i)
   },
   xe = function (t) {
      return Wt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Ce(t, "onInterrupt"), t
   },
   we = 255,
   Fe = {
      aqua: [0, we, we],
      lime: [0, we, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, we],
      navy: [0, 0, 128],
      white: [we, we, we],
      olive: [128, 128, 0],
      yellow: [we, we, 0],
      orange: [we, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [we, 0, 0],
      pink: [we, 192, 203],
      cyan: [0, we, we],
      transparent: [we, we, we, 0]
   },
   Ee = function (t, e, n) {
      return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * we + .5 | 0
   },
   be = function (t, e, n) {
      var r, i, o, s, a, u, l, c, h, p, f = t ? U(t) ? [t >> 16, t >> 8 & we, t & we] : 0 : Fe.black;
      if (!f) {
         if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Fe[t]) f = Fe[t];
         else if ("#" === t.charAt(0)) {
            if (t.length < 6 && (r = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + r + r + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & we, f & we, parseInt(t.substr(7), 16) / 255];
            f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & we, t & we]
         } else if ("hsl" === t.substr(0, 3))
            if (f = p = t.match(et), e) {
               if (~t.indexOf("=")) return f = t.match(nt), n && f.length < 4 && (f[3] = 1), f
            } else s = +f[0] % 360 / 360, a = +f[1] / 100, r = 2 * (u = +f[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a), f.length > 3 && (f[3] *= 1), f[0] = Ee(s + 1 / 3, r, i), f[1] = Ee(s, r, i), f[2] = Ee(s - 1 / 3, r, i);
         else f = t.match(et) || Fe.transparent;
         f = f.map(Number)
      }
      return e && !p && (r = f[0] / we, i = f[1] / we, o = f[2] / we, u = ((l = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2, l === c ? s = a = 0 : (h = l - c, a = u > .5 ? h / (2 - l - c) : h / (l + c), s = l === r ? (i - o) / h + (i < o ? 6 : 0) : l === i ? (o - r) / h + 2 : (r - i) / h + 4, s *= 60), f[0] = ~~(s + .5), f[1] = ~~(100 * a + .5), f[2] = ~~(100 * u + .5)), n && f.length < 4 && (f[3] = 1), f
   },
   Te = function (t) {
      var e = [],
         n = [],
         r = -1;
      return t.split(Pe).forEach((function (t) {
         var i = t.match(rt) || [];
         e.push.apply(e, i), n.push(r += i.length + 1)
      })), e.c = n, e
   },
   Ae = function (t, e, n) {
      var r, i, o, s, a = "",
         u = (t + a).match(Pe),
         l = e ? "hsla(" : "rgba(",
         c = 0;
      if (!u) return t;
      if (u = u.map((function (t) {
            return (t = be(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
         })), n && (o = Te(t), (r = n.c).join(a) !== o.c.join(a)))
         for (s = (i = t.replace(Pe, "1").split(rt)).length - 1; c < s; c++) a += i[c] + (~r.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : n).shift());
      if (!i)
         for (s = (i = t.split(Pe)).length - 1; c < s; c++) a += i[c] + u[c];
      return a + i[s]
   },
   Pe = function () {
      var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Fe) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi")
   }(),
   Se = /hsl[a]?\(/,
   Me = function (t) {
      var e, n = t.join(" ");
      if (Pe.lastIndex = 0, Pe.test(n)) return e = Se.test(n), t[1] = Ae(t[1], e), t[0] = Ae(t[0], e, Te(t[1])), !0
   },
   ke = (x = Date.now, w = 500, F = 33, E = x(), b = E, A = T = 1e3 / 240, S = function t(e) {
      var n, r, i, o, s = x() - b,
         a = !0 === e;
      if (s > w && (E += s - F), ((n = (i = (b += s) - E) - A) > 0 || a) && (o = ++y.frame, v = i - 1e3 * y.time, y.time = i /= 1e3, A += n + (n >= T ? 4 : T - n), r = 1), a || (g = m(t)), r)
         for (C = 0; C < P.length; C++) P[C](i, v, o, e)
   }, y = {
      time: 0,
      frame: 0,
      tick: function () {
         S(!0)
      },
      deltaRatio: function (t) {
         return v / (1e3 / (t || 60))
      },
      wake: function () {
         p && (!c && K() && (l = c = window, h = l.document || {}, ut.gsap = xn, (l.gsapVersions || (l.gsapVersions = [])).push(xn.version), ct(lt || l.GreenSockGlobals || !l.gsap && l || {}), _ = l.requestAnimationFrame), g && y.sleep(), m = _ || function (t) {
            return setTimeout(t, A - 1e3 * y.time + 1 | 0)
         }, D = 1, S(2))
      },
      sleep: function () {
         (_ ? l.cancelAnimationFrame : clearTimeout)(g), D = 0, m = dt
      },
      lagSmoothing: function (t, e) {
         w = t || 1e8, F = Math.min(e, w, 0)
      },
      fps: function (t) {
         T = 1e3 / (t || 240), A = 1e3 * y.time + T
      },
      add: function (t) {
         P.indexOf(t) < 0 && P.push(t), Be()
      },
      remove: function (t, e) {
         ~(e = P.indexOf(t)) && P.splice(e, 1) && C >= e && C--
      },
      _listeners: P = []
   }),
   Be = function () {
      return !D && ke.wake()
   },
   Oe = {},
   Ie = /^[\d.\-M][\d.\-,\s]/,
   Le = /["']/g,
   Re = function (t) {
      for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++) n = o[a], e = a !== u - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, e), i[s] = isNaN(r) ? r.replace(Le, "").trim() : +r, s = n.substr(e + 1).trim();
      return i
   },
   Ne = function (t) {
      return function (e) {
         return 1 - t(1 - e)
      }
   },
   ze = function t(e, n) {
      for (var r, i = e._first; i;) i instanceof Ue ? t(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? t(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next
   },
   We = function (t, e) {
      return t && (j(t) ? t : Oe[t] || function (t) {
         var e, n, r, i, o = (t + "").split("("),
            s = Oe[o[0]];
         return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Re(o[1])] : (e = t, n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(kt)) : Oe._CE && Ie.test(t) ? Oe._CE("", t) : s
      }(t)) || e
   },
   He = function (t, e, n, r) {
      void 0 === n && (n = function (t) {
         return 1 - e(1 - t)
      }), void 0 === r && (r = function (t) {
         return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
      });
      var i, o = {
         easeIn: e,
         easeOut: n,
         easeInOut: r
      };
      return bt(t, (function (t) {
         for (var e in Oe[t] = ut[t] = o, Oe[i = t.toLowerCase()] = n, o) Oe[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Oe[t + "." + e] = o[e]
      })), o
   },
   qe = function (t) {
      return function (e) {
         return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
      }
   },
   Ve = function t(e, n, r) {
      var i = n >= 1 ? n : 1,
         o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
         s = o / z * (Math.asin(1 / i) || 0),
         a = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * X((t - s) * o) + 1
         },
         u = "out" === e ? a : "in" === e ? function (t) {
            return 1 - a(1 - t)
         } : qe(a);
      return o = z / o, u.config = function (n, r) {
         return t(e, n, r)
      }, u
   },
   Xe = function t(e, n) {
      void 0 === n && (n = 1.70158);
      var r = function (t) {
            return t ? --t * t * ((n + 1) * t + n) + 1 : 0
         },
         i = "out" === e ? r : "in" === e ? function (t) {
            return 1 - r(1 - t)
         } : qe(r);
      return i.config = function (n) {
         return t(e, n)
      }, i
   };
bt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
   var n = e < 5 ? e + 1 : e;
   He(t + ",Power" + (n - 1), e ? function (t) {
      return Math.pow(t, n)
   } : function (t) {
      return t
   }, (function (t) {
      return 1 - Math.pow(1 - t, n)
   }), (function (t) {
      return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
   }))
})), Oe.Linear.easeNone = Oe.none = Oe.Linear.easeIn, He("Elastic", Ve("in"), Ve("out"), Ve()), M = 7.5625, B = 1 / (k = 2.75), He("Bounce", (function (t) {
   return 1 - O(1 - t)
}), O = function (t) {
   return t < B ? M * t * t : t < .7272727272727273 ? M * Math.pow(t - 1.5 / k, 2) + .75 : t < .9090909090909092 ? M * (t -= 2.25 / k) * t + .9375 : M * Math.pow(t - 2.625 / k, 2) + .984375
}), He("Expo", (function (t) {
   return t ? Math.pow(2, 10 * (t - 1)) : 0
})), He("Circ", (function (t) {
   return -(q(1 - t * t) - 1)
})), He("Sine", (function (t) {
   return 1 === t ? 1 : 1 - V(t * W)
})), He("Back", Xe("in"), Xe("out"), Xe()), Oe.SteppedEase = Oe.steps = ut.SteppedEase = {
   config: function (t, e) {
      void 0 === t && (t = 1);
      var n = 1 / t,
         r = t + (e ? 0 : 1),
         i = e ? 1 : 0;
      return function (t) {
         return ((r * se(0, .99999999, t) | 0) + i) * n
      }
   }
}, L.ease = Oe["quad.out"], bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
   return xt += t + "," + t + "Params,"
}));
var Ye = function (t, e) {
      this.id = H++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Et, this.set = e ? e.getSetter : ln
   },
   je = function () {
      function t(t) {
         this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, te(this, +t.duration, 1, 1), this.data = t.data, D || ke.wake()
      }
      var e = t.prototype;
      return e.delay = function (t) {
         return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
      }, e.duration = function (t) {
         return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
      }, e.totalDuration = function (t) {
         return arguments.length ? (this._dirty = 0, te(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
      }, e.totalTime = function (t, e) {
         if (Be(), !arguments.length) return this._tTime;
         var n = this._dp;
         if (n && n.smoothChildTiming && this._ts) {
            for (Ut(this, t), !n._dp || n.parent || Zt(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Gt(this._dp, this, this._start - this._delay)
         }
         return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === N || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Mt(this, t, e)), this
      }, e.time = function (t, e) {
         return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Vt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
      }, e.totalProgress = function (t, e) {
         return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
      }, e.progress = function (t, e) {
         return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Vt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
      }, e.iteration = function (t, e) {
         var n = this.duration() + this._rDelay;
         return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Xt(this._tTime, n) + 1 : 1
      }, e.timeScale = function (t) {
         if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
         if (this._rts === t) return this;
         var e = this.parent && this._ts ? Yt(this.parent._time, this) : this._tTime;
         return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
            function (t) {
               for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent
            }(this.totalTime(se(-this._delay, this._tDur, e), !0)), jt(this), this
      }, e.paused = function (t) {
         return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Be(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== N && (this._tTime -= N)))), this) : this._ps
      }, e.startTime = function (t) {
         if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return e && (e._sort || !this.parent) && Gt(e, this, t - this._delay), this
         }
         return this._start
      }, e.endTime = function (t) {
         return this._start + (Q(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
      }, e.rawTime = function (t) {
         var e = this.parent || this._dp;
         return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Yt(e.rawTime(t), this) : this._tTime : this._tTime
      }, e.globalTime = function (t) {
         for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
         return n
      }, e.repeat = function (t) {
         return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, ee(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
      }, e.repeatDelay = function (t) {
         if (arguments.length) {
            var e = this._time;
            return this._rDelay = t, ee(this), e ? this.time(e) : this
         }
         return this._rDelay
      }, e.yoyo = function (t) {
         return arguments.length ? (this._yoyo = t, this) : this._yoyo
      }, e.seek = function (t, e) {
         return this.totalTime(re(this, t), Q(e))
      }, e.restart = function (t, e) {
         return this.play().totalTime(t ? -this._delay : 0, Q(e))
      }, e.play = function (t, e) {
         return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
      }, e.reverse = function (t, e) {
         return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
      }, e.pause = function (t, e) {
         return null != t && this.seek(t, e), this.paused(!0)
      }, e.resume = function () {
         return this.paused(!1)
      }, e.reversed = function (t) {
         return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
      }, e.invalidate = function () {
         return this._initted = this._act = 0, this._zTime = -1e-8, this
      }, e.isActive = function () {
         var t, e = this.parent || this._dp,
            n = this._start;
         return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - N))
      }, e.eventCallback = function (t, e, n) {
         var r = this.vars;
         return arguments.length > 1 ? (e ? (r[t] = e, n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
      }, e.then = function (t) {
         var e = this;
         return new Promise((function (n) {
            var r = j(t) ? t : Bt,
               i = function () {
                  var t = e.then;
                  e.then = null, j(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), e.then = t
               };
            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
         }))
      }, e.kill = function () {
         xe(this)
      }, t
   }();
Ot(je.prototype, {
   _time: 0,
   _start: 0,
   _end: 0,
   _tTime: 0,
   _tDur: 0,
   _dirty: 0,
   _repeat: 0,
   _yoyo: !1,
   parent: null,
   _initted: !1,
   _rDelay: 0,
   _ts: 1,
   _dp: 0,
   ratio: 0,
   _zTime: -1e-8,
   _prom: 0,
   _ps: !1,
   _rts: 1
});
var Ue = function (t) {
   function e(e, n) {
      var r;
      return void 0 === e && (e = {}), (r = t.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = Q(e.sortChildren), u && Gt(e.parent || u, o(r), n), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && Qt(o(r), e.scrollTrigger), r
   }
   s(e, t);
   var n = e.prototype;
   return n.to = function (t, e, n) {
      return ie(0, arguments, this), this
   }, n.from = function (t, e, n) {
      return ie(1, arguments, this), this
   }, n.fromTo = function (t, e, n, r) {
      return ie(2, arguments, this), this
   }, n.set = function (t, e, n) {
      return e.duration = 0, e.parent = this, Nt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new rn(t, e, re(this, n), 1), this
   }, n.call = function (t, e, n) {
      return Gt(this, rn.delayedCall(0, t, e), n)
   }, n.staggerTo = function (t, e, n, r, i, o, s) {
      return n.duration = e, n.stagger = n.stagger || r, n.onComplete = o, n.onCompleteParams = s, n.parent = this, new rn(t, n, re(this, i)), this
   }, n.staggerFrom = function (t, e, n, r, i, o, s) {
      return n.runBackwards = 1, Nt(n).immediateRender = Q(n.immediateRender), this.staggerTo(t, e, n, r, i, o, s)
   }, n.staggerFromTo = function (t, e, n, r, i, o, s, a) {
      return r.startAt = n, Nt(r).immediateRender = Q(r.immediateRender), this.staggerTo(t, e, r, i, o, s, a)
   }, n.render = function (t, e, n) {
      var r, i, o, s, a, l, c, h, p, f, d, D, g = this._time,
         m = this._dirty ? this.totalDuration() : this._tDur,
         _ = this._dur,
         y = t <= 0 ? 0 : At(t),
         v = this._zTime < 0 != t < 0 && (this._initted || !_);
      if (this !== u && y > m && t >= 0 && (y = m), y !== this._tTime || n || v) {
         if (g !== this._time && _ && (y += this._time - g, t += this._time - g), r = y, p = this._start, l = !(h = this._ts), v && (_ || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
            if (d = this._yoyo, a = _ + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, n);
            if (r = At(y % a), y === m ? (s = this._repeat, r = _) : ((s = ~~(y / a)) && s === y / a && (r = _, s--), r > _ && (r = _)), f = Xt(this._tTime, a), !g && this._tTime && f !== s && (f = s), d && 1 & s && (r = _ - r, D = 1), s !== f && !this._lock) {
               var C = d && 1 & f,
                  x = C === (d && 1 & s);
               if (s < f && (C = !C), g = C ? 0 : _, this._lock = 1, this.render(g || (D ? 0 : At(s * a)), e, !_)._lock = 0, this._tTime = y, !e && this.parent && Ce(this, "onRepeat"), this.vars.repeatRefresh && !D && (this.invalidate()._lock = 1), g && g !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
               if (_ = this._dur, m = this._tDur, x && (this._lock = 2, g = C ? _ : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !D && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
               ze(this, D)
            }
         }
         if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (t, e, n) {
               var r;
               if (n > e)
                  for (r = t._first; r && r._start <= n;) {
                     if ("isPause" === r.data && r._start > e) return r;
                     r = r._next
                  } else
                     for (r = t._last; r && r._start >= n;) {
                        if ("isPause" === r.data && r._start < e) return r;
                        r = r._prev
                     }
            }(this, At(g), At(r)), c && (y -= r - (r = c._start))), this._tTime = y, this._time = r, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && r && !e && (Ce(this, "onStart"), this._tTime !== y)) return this;
         if (r >= g && t >= 0)
            for (i = this._first; i;) {
               if (o = i._next, (i._act || r >= i._start) && i._ts && c !== i) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                     c = 0, o && (y += this._zTime = -1e-8);
                     break
                  }
               }
               i = o
            } else {
               i = this._last;
               for (var w = t < 0 ? t : r; i;) {
                  if (o = i._prev, (i._act || w <= i._end) && i._ts && c !== i) {
                     if (i.parent !== this) return this.render(t, e, n);
                     if (i.render(i._ts > 0 ? (w - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (w - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                        c = 0, o && (y += this._zTime = w ? -1e-8 : N);
                        break
                     }
                  }
                  i = o
               }
            }
         if (c && !e && (this.pause(), c.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = p, jt(this), this.render(t, e, n);
         this._onUpdate && !e && Ce(this, "onUpdate", !0), (y === m && m >= this.totalDuration() || !y && g) && (p !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !_) && (y === m && this._ts > 0 || !y && this._ts < 0) && Wt(this, 1), e || t < 0 && !g || !y && !g && m || (Ce(this, y === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < m && this.timeScale() > 0) && this._prom())))
      }
      return this
   }, n.add = function (t, e) {
      var n = this;
      if (U(e) || (e = re(this, e, t)), !(t instanceof je)) {
         if (tt(t)) return t.forEach((function (t) {
            return n.add(t, e)
         })), this;
         if (Y(t)) return this.addLabel(t, e);
         if (!j(t)) return this;
         t = rn.delayedCall(0, t)
      }
      return this !== t ? Gt(this, t, e) : this
   }, n.getChildren = function (t, e, n, r) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -1e8);
      for (var i = [], o = this._first; o;) o._start >= r && (o instanceof rn ? e && i.push(o) : (n && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, n)))), o = o._next;
      return i
   }, n.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
         if (e[n].vars.id === t) return e[n]
   }, n.remove = function (t) {
      return Y(t) ? this.removeLabel(t) : j(t) ? this.killTweensOf(t) : (zt(this, t), t === this._recent && (this._recent = this._last), Ht(this))
   }, n.totalTime = function (e, n) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = At(ke.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
   }, n.addLabel = function (t, e) {
      return this.labels[t] = re(this, e), this
   }, n.removeLabel = function (t) {
      return delete this.labels[t], this
   }, n.addPause = function (t, e, n) {
      var r = rn.delayedCall(0, e || dt, n);
      return r.data = "isPause", this._hasPause = 1, Gt(this, r, re(this, t))
   }, n.removePause = function (t) {
      var e = this._first;
      for (t = re(this, t); e;) e._start === t && "isPause" === e.data && Wt(e), e = e._next
   }, n.killTweensOf = function (t, e, n) {
      for (var r = this.getTweensOf(t, n), i = r.length; i--;) Ze !== r[i] && r[i].kill(t, e);
      return this
   }, n.getTweensOf = function (t, e) {
      for (var n, r = [], i = he(t), o = this._first, s = U(e); o;) o instanceof rn ? Pt(o._targets, i) && (s ? (!Ze || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o) : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n), o = o._next;
      return r
   }, n.tweenTo = function (t, e) {
      e = e || {};
      var n, r = this,
         i = re(r, t),
         o = e,
         s = o.startAt,
         a = o.onStart,
         u = o.onStartParams,
         l = o.immediateRender,
         c = rn.to(r, Ot({
            ease: e.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: i,
            overwrite: "auto",
            duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || N,
            onStart: function () {
               if (r.pause(), !n) {
                  var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale());
                  c._dur !== t && te(c, t, 0, 1).render(c._time, !0, !0), n = 1
               }
               a && a.apply(c, u || [])
            }
         }, e));
      return l ? c.render(0) : c
   }, n.tweenFromTo = function (t, e, n) {
      return this.tweenTo(e, Ot({
         startAt: {
            time: re(this, t)
         }
      }, n))
   }, n.recent = function () {
      return this._recent
   }, n.nextLabel = function (t) {
      return void 0 === t && (t = this._time), ve(this, re(this, t))
   }, n.previousLabel = function (t) {
      return void 0 === t && (t = this._time), ve(this, re(this, t), 1)
   }, n.currentLabel = function (t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + N)
   }, n.shiftChildren = function (t, e, n) {
      void 0 === n && (n = 0);
      for (var r, i = this._first, o = this.labels; i;) i._start >= n && (i._start += t, i._end += t), i = i._next;
      if (e)
         for (r in o) o[r] >= n && (o[r] += t);
      return Ht(this)
   }, n.invalidate = function () {
      var e = this._first;
      for (this._lock = 0; e;) e.invalidate(), e = e._next;
      return t.prototype.invalidate.call(this)
   }, n.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ht(this)
   }, n.totalDuration = function (t) {
      var e, n, r, i = 0,
         o = this,
         s = o._last,
         a = R;
      if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
      if (o._dirty) {
         for (r = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (n = s._start) > a && o._sort && s._ts && !o._lock ? (o._lock = 1, Gt(o, s, n - s._delay, 1)._lock = 0) : a = n, n < 0 && s._ts && (i -= n, (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -1 / 0), a = 0), s._end > i && s._ts && (i = s._end), s = e;
         te(o, o === u && o._time > i ? o._time : i, 1, 1), o._dirty = 0
      }
      return o._tDur
   }, e.updateRoot = function (t) {
      if (u._ts && (Mt(u, Yt(t, u)), f = ke.frame), ke.frame >= vt) {
         vt += I.autoSleep || 120;
         var e = u._first;
         if ((!e || !e._ts) && I.autoSleep && ke._listeners.length < 2) {
            for (; e && !e._ts;) e = e._next;
            e || ke.sleep()
         }
      }
   }, e
}(je);
Ot(Ue.prototype, {
   _lock: 0,
   _hasPause: 0,
   _forcing: 0
});
var Ze, Ge = function (t, e, n, r, i, o, s) {
      var a, u, l, c, h, p, f, d, D = new _n(this._pt, t, e, 0, 1, pn, null, i),
         g = 0,
         m = 0;
      for (D.b = n, D.e = r, n += "", (f = ~(r += "").indexOf("random(")) && (r = _e(r)), o && (o(d = [n, r], t, e), n = d[0], r = d[1]), u = n.match(it) || []; a = it.exec(r);) c = a[0], h = r.substring(g, a.index), l ? l = (l + 1) % 5 : "rgba(" === h.substr(-5) && (l = 1), c !== u[m++] && (p = parseFloat(u[m - 1]) || 0, D._pt = {
         _next: D._pt,
         p: h || 1 === m ? h : ",",
         s: p,
         c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - p,
         m: l && l < 4 ? Math.round : 0
      }, g = it.lastIndex);
      return D.c = g < r.length ? r.substring(g, r.length) : "", D.fp = s, (ot.test(r) || f) && (D.e = 0), this._pt = D, D
   },
   Qe = function (t, e, n, r, i, o, s, a, u) {
      j(r) && (r = r(i || 0, t, o));
      var l, c = t[e],
         h = "get" !== n ? n : j(c) ? u ? t[e.indexOf("set") || !j(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : c,
         p = j(c) ? u ? an : sn : on;
      if (Y(r) && (~r.indexOf("random(") && (r = _e(r)), "=" === r.charAt(1) && ((l = parseFloat(h) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (ae(h) || 0)) || 0 === l) && (r = l)), h !== r) return isNaN(h * r) || "" === r ? (!c && !(e in t) && ht(e, r), Ge.call(this, t, e, h, r, p, a || I.stringFilter, u)) : (l = new _n(this._pt, t, e, +h || 0, r - (h || 0), "boolean" == typeof c ? hn : cn, 0, p), u && (l.fp = u), s && l.modifier(s, this, t), this._pt = l)
   },
   Ke = function (t, e, n, r, i, o) {
      var s, a, u, l;
      if (_t[t] && !1 !== (s = new _t[t]).init(i, s.rawVars ? e[t] : function (t, e, n, r, i) {
            if (j(t) && (t = tn(t, i, e, n, r)), !G(t) || t.style && t.nodeType || tt(t) || J(t)) return Y(t) ? tn(t, i, e, n, r) : t;
            var o, s = {};
            for (o in t) s[o] = tn(t[o], i, e, n, r);
            return s
         }(e[t], r, i, o, n), n, r, o) && (n._pt = a = new _n(n._pt, i, t, 0, 1, s.render, s, 0, s.priority), n !== d))
         for (u = n._ptLookup[n._targets.indexOf(i)], l = s._props.length; l--;) u[s._props[l]] = a;
      return s
   },
   $e = function t(e, n) {
      var r, i, o, s, l, c, h, p, f, d, D, g, m, _ = e.vars,
         y = _.ease,
         v = _.startAt,
         C = _.immediateRender,
         x = _.lazy,
         w = _.onUpdate,
         F = _.onUpdateParams,
         E = _.callbackScope,
         b = _.runBackwards,
         T = _.yoyoEase,
         A = _.keyframes,
         P = _.autoRevert,
         S = e._dur,
         M = e._startAt,
         k = e._targets,
         B = e.parent,
         O = B && "nested" === B.data ? B.parent._targets : k,
         I = "auto" === e._overwrite && !a,
         z = e.timeline;
      if (z && (!A || !y) && (y = "none"), e._ease = We(y, L.ease), e._yEase = T ? Ne(We(!0 === T ? y : T, L.ease)) : 0, T && e._yoyo && !e._repeat && (T = e._yEase, e._yEase = e._ease, e._ease = T), e._from = !z && !!_.runBackwards, !z || A && !_.stagger) {
         if (g = (p = k[0] ? Ft(k[0]).harness : 0) && _[p.prop], r = Rt(_, Dt), M && Wt(M.render(-1, !0)), v)
            if (Wt(e._startAt = rn.set(k, Ot({
                  data: "isStart",
                  overwrite: !1,
                  parent: B,
                  immediateRender: !0,
                  lazy: Q(x),
                  startAt: null,
                  delay: 0,
                  onUpdate: w,
                  onUpdateParams: F,
                  callbackScope: E,
                  stagger: 0
               }, v))), n < 0 && !C && !P && e._startAt.render(-1, !0), C) {
               if (n > 0 && !P && (e._startAt = 0), S && n <= 0) return void(n && (e._zTime = n))
            } else !1 === P && (e._startAt = 0);
         else if (b && S)
            if (M) !P && (e._startAt = 0);
            else if (n && (C = !1), o = Ot({
               overwrite: !1,
               data: "isFromStart",
               lazy: C && Q(x),
               immediateRender: C,
               stagger: 0,
               parent: B
            }, r), g && (o[p.prop] = g), Wt(e._startAt = rn.set(k, o)), n < 0 && e._startAt.render(-1, !0), e._zTime = n, C) {
            if (!n) return
         } else t(e._startAt, N);
         for (e._pt = 0, x = S && Q(x) || x && !S, i = 0; i < k.length; i++) {
            if (h = (l = k[i])._gsap || wt(k)[i]._gsap, e._ptLookup[i] = d = {}, mt[h.id] && gt.length && St(), D = O === k ? i : O.indexOf(l), p && !1 !== (f = new p).init(l, g || r, e, D, O) && (e._pt = s = new _n(e._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((function (t) {
                  d[t] = s
               })), f.priority && (c = 1)), !p || g)
               for (o in r) _t[o] && (f = Ke(o, r, e, D, l, O)) ? f.priority && (c = 1) : d[o] = s = Qe.call(e, l, o, "get", r[o], D, O, 0, _.stringFilter);
            e._op && e._op[i] && e.kill(l, e._op[i]), I && e._pt && (Ze = e, u.killTweensOf(l, d, e.globalTime(n)), m = !e.parent, Ze = 0), e._pt && x && (mt[h.id] = 1)
         }
         c && mn(e), e._onInit && e._onInit(e)
      }
      e._onUpdate = w, e._initted = (!e._op || e._pt) && !m, A && n <= 0 && z.render(R, !0, !0)
   },
   Je = function (t, e, n, r) {
      var i, o, s = e.ease || r || "power1.inOut";
      if (tt(e)) o = n[t] || (n[t] = []), e.forEach((function (t, n) {
         return o.push({
            t: n / (e.length - 1) * 100,
            v: t,
            e: s
         })
      }));
      else
         for (i in e) o = n[i] || (n[i] = []), "ease" === i || o.push({
            t: parseFloat(t),
            v: e[i],
            e: s
         })
   },
   tn = function (t, e, n, r, i) {
      return j(t) ? t.call(e, n, r, i) : Y(t) && ~t.indexOf("random(") ? _e(t) : t
   },
   en = xt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
   nn = {};
bt(en + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
   return nn[t] = 1
}));
var rn = function (t) {
   function e(e, n, r, i) {
      var s;
      "number" == typeof n && (r.duration = n, n = r, r = null);
      var l, c, h, p, f, d, D, g, m = (s = t.call(this, i ? n : Nt(n)) || this).vars,
         _ = m.duration,
         y = m.delay,
         v = m.immediateRender,
         C = m.stagger,
         x = m.overwrite,
         w = m.keyframes,
         F = m.defaults,
         E = m.scrollTrigger,
         b = m.yoyoEase,
         T = n.parent || u,
         A = (tt(e) || J(e) ? U(e[0]) : "length" in n) ? [e] : he(e);
      if (s._targets = A.length ? wt(A) : pt("GSAP target " + e + " not found. https://greensock.com", !I.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = x, w || C || $(_) || $(y)) {
         if (n = s.vars, (l = s.timeline = new Ue({
               data: "nested",
               defaults: F || {}
            })).kill(), l.parent = l._dp = o(s), l._start = 0, C || $(_) || $(y)) {
            if (p = A.length, D = C && fe(C), G(C))
               for (f in C) ~en.indexOf(f) && (g || (g = {}), g[f] = C[f]);
            for (c = 0; c < p; c++)(h = Rt(n, nn)).stagger = 0, b && (h.yoyoEase = b), g && It(h, g), d = A[c], h.duration = +tn(_, o(s), c, d, A), h.delay = (+tn(y, o(s), c, d, A) || 0) - s._delay, !C && 1 === p && h.delay && (s._delay = y = h.delay, s._start += y, h.delay = 0), l.to(d, h, D ? D(c, d, A) : 0), l._ease = Oe.none;
            l.duration() ? _ = y = 0 : s.timeline = 0
         } else if (w) {
            Nt(Ot(l.vars.defaults, {
               ease: "none"
            })), l._ease = We(w.ease || n.ease || "none");
            var P, S, M, k = 0;
            if (tt(w)) w.forEach((function (t) {
               return l.to(A, t, ">")
            }));
            else {
               for (f in h = {}, w) "ease" === f || "easeEach" === f || Je(f, w[f], h, w.easeEach);
               for (f in h)
                  for (P = h[f].sort((function (t, e) {
                        return t.t - e.t
                     })), k = 0, c = 0; c < P.length; c++)(M = {
                     ease: (S = P[c]).e,
                     duration: (S.t - (c ? P[c - 1].t : 0)) / 100 * _
                  })[f] = S.v, l.to(A, M, k), k += M.duration;
               l.duration() < _ && l.to({}, {
                  duration: _ - l.duration()
               })
            }
         }
         _ || s.duration(_ = l.duration())
      } else s.timeline = 0;
      return !0 !== x || a || (Ze = o(s), u.killTweensOf(A), Ze = 0), Gt(T, o(s), r), n.reversed && s.reverse(), n.paused && s.paused(!0), (v || !_ && !w && s._start === At(T._time) && Q(v) && qt(o(s)) && "nested" !== T.data) && (s._tTime = -1e-8, s.render(Math.max(0, -y))), E && Qt(o(s), E), s
   }
   s(e, t);
   var n = e.prototype;
   return n.render = function (t, e, n) {
      var r, i, o, s, a, u, l, c, h, p = this._time,
         f = this._tDur,
         d = this._dur,
         D = t > f - N && t >= 0 ? f : t < N ? 0 : t;
      if (d) {
         if (D !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
            if (r = D, c = this.timeline, this._repeat) {
               if (s = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, n);
               if (r = At(D % s), D === f ? (o = this._repeat, r = d) : ((o = ~~(D / s)) && o === D / s && (r = d, o--), r > d && (r = d)), (u = this._yoyo && 1 & o) && (h = this._yEase, r = d - r), a = Xt(this._tTime, s), r === p && !n && this._initted) return this;
               o !== a && (c && this._yEase && ze(c, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = n = 1, this.render(At(s * o), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
               if (Kt(this, t < 0 ? t : r, n, e)) return this._tTime = 0, this;
               if (d !== this._dur) return this.render(t, e, n)
            }
            if (this._tTime = D, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (h || this._ease)(r / d), this._from && (this.ratio = l = 1 - l), r && !p && !e && (Ce(this, "onStart"), this._tTime !== D)) return this;
            for (i = this._pt; i;) i.r(l, i.d), i = i._next;
            c && c.render(t < 0 ? t : !r && u ? -1e-8 : c._dur * c._ease(r / this._dur), e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), Ce(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && Ce(this, "onRepeat"), D !== this._tDur && D || this._tTime !== D || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !d) && (D === this._tDur && this._ts > 0 || !D && this._ts < 0) && Wt(this, 1), e || t < 0 && !p || !D && !p || (Ce(this, D === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(D < f && this.timeScale() > 0) && this._prom()))
         }
      } else ! function (t, e, n, r) {
         var i, o, s, a = t.ratio,
            u = e < 0 || !e && (!t._start && $t(t) && (t._initted || !Jt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Jt(t)) ? 0 : 1,
            l = t._rDelay,
            c = 0;
         if (l && t._repeat && (c = se(0, t._tDur, e), o = Xt(c, l), t._yoyo && 1 & o && (u = 1 - u), o !== Xt(t._tTime, l) && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || r || t._zTime === N || !e && t._zTime) {
            if (!t._initted && Kt(t, e, r, n)) return;
            for (s = t._zTime, t._zTime = e || (n ? N : 0), n || (n = e && !s), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = c, i = t._pt; i;) i.r(u, i.d), i = i._next;
            t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && Ce(t, "onUpdate"), c && t._repeat && !n && t.parent && Ce(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Wt(t, 1), n || (Ce(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
         } else t._zTime || (t._zTime = e)
      }(this, t, e, n);
      return this
   }, n.targets = function () {
      return this._targets
   }, n.invalidate = function () {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
   }, n.kill = function (t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? xe(this) : this;
      if (this.timeline) {
         var n = this.timeline.totalDuration();
         return this.timeline.killTweensOf(t, e, Ze && !0 !== Ze.vars.overwrite)._first || xe(this), this.parent && n !== this.timeline.totalDuration() && te(this, this._dur * this.timeline._tDur / n, 0, 1), this
      }
      var r, i, o, s, a, u, l, c = this._targets,
         h = t ? he(t) : c,
         p = this._ptLookup,
         f = this._pt;
      if ((!e || "all" === e) && function (t, e) {
            for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];);
            return n < 0
         }(c, h)) return "all" === e && (this._pt = 0), xe(this);
      for (r = this._op = this._op || [], "all" !== e && (Y(e) && (a = {}, bt(e, (function (t) {
            return a[t] = 1
         })), e = a), e = function (t, e) {
            var n, r, i, o, s = t[0] ? Ft(t[0]).harness : 0,
               a = s && s.aliases;
            if (!a) return e;
            for (r in n = It({}, e), a)
               if (r in n)
                  for (i = (o = a[r].split(",")).length; i--;) n[o[i]] = n[r];
            return n
         }(c, e)), l = c.length; l--;)
         if (~h.indexOf(c[l]))
            for (a in i = p[l], "all" === e ? (r[l] = e, s = i, o = {}) : (o = r[l] = r[l] || {}, s = e), s)(u = i && i[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || zt(this, u, "_pt"), delete i[a]), "all" !== o && (o[a] = 1);
      return this._initted && !this._pt && f && xe(this), this
   }, e.to = function (t, n) {
      return new e(t, n, arguments[2])
   }, e.from = function (t, e) {
      return ie(1, arguments)
   }, e.delayedCall = function (t, n, r, i) {
      return new e(n, 0, {
         immediateRender: !1,
         lazy: !1,
         overwrite: !1,
         delay: t,
         onComplete: n,
         onReverseComplete: n,
         onCompleteParams: r,
         onReverseCompleteParams: r,
         callbackScope: i
      })
   }, e.fromTo = function (t, e, n) {
      return ie(2, arguments)
   }, e.set = function (t, n) {
      return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
   }, e.killTweensOf = function (t, e, n) {
      return u.killTweensOf(t, e, n)
   }, e
}(je);
Ot(rn.prototype, {
   _targets: [],
   _lazy: 0,
   _startAt: 0,
   _op: 0,
   _onInit: 0
}), bt("staggerTo,staggerFrom,staggerFromTo", (function (t) {
   rn[t] = function () {
      var e = new Ue,
         n = ue.call(arguments, 0);
      return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
   }
}));
var on = function (t, e, n) {
      return t[e] = n
   },
   sn = function (t, e, n) {
      return t[e](n)
   },
   an = function (t, e, n, r) {
      return t[e](r.fp, n)
   },
   un = function (t, e, n) {
      return t.setAttribute(e, n)
   },
   ln = function (t, e) {
      return j(t[e]) ? sn : Z(t[e]) && t.setAttribute ? un : on
   },
   cn = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
   },
   hn = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e)
   },
   pn = function (t, e) {
      var n = e._pt,
         r = "";
      if (!t && e.b) r = e.b;
      else if (1 === t && e.e) r = e.e;
      else {
         for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r, n = n._next;
         r += e.c
      }
      e.set(e.t, e.p, r, e)
   },
   fn = function (t, e) {
      for (var n = e._pt; n;) n.r(t, n.d), n = n._next
   },
   dn = function (t, e, n, r) {
      for (var i, o = this._pt; o;) i = o._next, o.p === r && o.modifier(t, e, n), o = i
   },
   Dn = function (t) {
      for (var e, n, r = this._pt; r;) n = r._next, r.p === t && !r.op || r.op === t ? zt(this, r, "_pt") : r.dep || (e = 1), r = n;
      return !e
   },
   gn = function (t, e, n, r) {
      r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
   },
   mn = function (t) {
      for (var e, n, r, i, o = t._pt; o;) {
         for (e = o._next, n = r; n && n.pr > o.pr;) n = n._next;
         (o._prev = n ? n._prev : i) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : i = o, o = e
      }
      t._pt = r
   },
   _n = function () {
      function t(t, e, n, r, i, o, s, a, u) {
         this.t = e, this.s = r, this.c = i, this.p = n, this.r = o || cn, this.d = s || this, this.set = a || on, this.pr = u || 0, this._next = t, t && (t._prev = this)
      }
      return t.prototype.modifier = function (t, e, n) {
         this.mSet = this.mSet || this.set, this.set = gn, this.m = t, this.mt = n, this.tween = e
      }, t
   }();
bt(xt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
   return Dt[t] = 1
})), ut.TweenMax = ut.TweenLite = rn, ut.TimelineLite = ut.TimelineMax = Ue, u = new Ue({
   sortChildren: !1,
   defaults: L,
   autoRemoveChildren: !0,
   id: "root",
   smoothChildTiming: !0
}), I.stringFilter = Me;
var yn = {
   registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
      e.forEach((function (t) {
         return function (t) {
            var e = (t = !t.name && t.default || t).name,
               n = j(t),
               r = e && !n && t.init ? function () {
                  this._props = []
               } : t,
               i = {
                  init: dt,
                  render: fn,
                  add: Qe,
                  kill: Dn,
                  modifier: dn,
                  rawVars: 0
               },
               o = {
                  targetTest: 0,
                  get: 0,
                  getSetter: ln,
                  aliases: {},
                  register: 0
               };
            if (Be(), t !== r) {
               if (_t[e]) return;
               Ot(r, Ot(Rt(t, i), o)), It(r.prototype, It(i, Rt(t, o))), _t[r.prop = e] = r, t.targetTest && (Ct.push(r), Dt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            ft(e, r), t.register && t.register(xn, r, _n)
         }(t)
      }))
   },
   timeline: function (t) {
      return new Ue(t)
   },
   getTweensOf: function (t, e) {
      return u.getTweensOf(t, e)
   },
   getProperty: function (t, e, n, r) {
      Y(t) && (t = he(t)[0]);
      var i = Ft(t || {}).get,
         o = n ? Bt : kt;
      return "native" === n && (n = ""), t ? e ? o((_t[e] && _t[e].get || i)(t, e, n, r)) : function (e, n, r) {
         return o((_t[e] && _t[e].get || i)(t, e, n, r))
      } : t
   },
   quickSetter: function (t, e, n) {
      if ((t = he(t)).length > 1) {
         var r = t.map((function (t) {
               return xn.quickSetter(t, e, n)
            })),
            i = r.length;
         return function (t) {
            for (var e = i; e--;) r[e](t)
         }
      }
      t = t[0] || {};
      var o = _t[e],
         s = Ft(t),
         a = s.harness && (s.harness.aliases || {})[e] || e,
         u = o ? function (e) {
            var r = new o;
            d._pt = 0, r.init(t, n ? e + n : e, d, 0, [t]), r.render(1, r), d._pt && fn(1, d)
         } : s.set(t, a);
      return o ? u : function (e) {
         return u(t, a, n ? e + n : e, s, 1)
      }
   },
   isTweening: function (t) {
      return u.getTweensOf(t, !0).length > 0
   },
   defaults: function (t) {
      return t && t.ease && (t.ease = We(t.ease, L.ease)), Lt(L, t || {})
   },
   config: function (t) {
      return Lt(I, t || {})
   },
   registerEffect: function (t) {
      var e = t.name,
         n = t.effect,
         r = t.plugins,
         i = t.defaults,
         o = t.extendTimeline;
      (r || "").split(",").forEach((function (t) {
         return t && !_t[t] && !ut[t] && pt(e + " effect requires " + t + " plugin.")
      })), yt[e] = function (t, e, r) {
         return n(he(t), Ot(e || {}, i), r)
      }, o && (Ue.prototype[e] = function (t, n, r) {
         return this.add(yt[e](t, G(n) ? n : (r = n) && {}, this), r)
      })
   },
   registerEase: function (t, e) {
      Oe[t] = We(e)
   },
   parseEase: function (t, e) {
      return arguments.length ? We(t, e) : Oe
   },
   getById: function (t) {
      return u.getById(t)
   },
   exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var n, r, i = new Ue(t);
      for (i.smoothChildTiming = Q(t.smoothChildTiming), u.remove(i), i._dp = 0, i._time = i._tTime = u._time, n = u._first; n;) r = n._next, !e && !n._dur && n instanceof rn && n.vars.onComplete === n._targets[0] || Gt(i, n, n._start - n._delay), n = r;
      return Gt(u, i, 0), i
   },
   utils: {
      wrap: function t(e, n, r) {
         var i = n - e;
         return tt(e) ? me(e, t(0, e.length), n) : oe(r, (function (t) {
            return (i + (t - e) % i) % i + e
         }))
      },
      wrapYoyo: function t(e, n, r) {
         var i = n - e,
            o = 2 * i;
         return tt(e) ? me(e, t(0, e.length - 1), n) : oe(r, (function (t) {
            return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
         }))
      },
      distribute: fe,
      random: ge,
      snap: De,
      normalize: function (t, e, n) {
         return ye(t, e, 0, 1, n)
      },
      getUnit: ae,
      clamp: function (t, e, n) {
         return oe(n, (function (n) {
            return se(t, e, n)
         }))
      },
      splitColor: be,
      toArray: he,
      selector: function (t) {
         return t = he(t)[0] || pt("Invalid scope") || {},
            function (e) {
               var n = t.current || t.nativeElement || t;
               return he(e, n.querySelectorAll ? n : n === t ? pt("Invalid scope") || h.createElement("div") : t)
            }
      },
      mapRange: ye,
      pipe: function () {
         for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
         return function (t) {
            return e.reduce((function (t, e) {
               return e(t)
            }), t)
         }
      },
      unitize: function (t, e) {
         return function (n) {
            return t(parseFloat(n)) + (e || ae(n))
         }
      },
      interpolate: function t(e, n, r, i) {
         var o = isNaN(e + n) ? 0 : function (t) {
            return (1 - t) * e + t * n
         };
         if (!o) {
            var s, a, u, l, c, h = Y(e),
               p = {};
            if (!0 === r && (i = 1) && (r = null), h) e = {
               p: e
            }, n = {
               p: n
            };
            else if (tt(e) && !tt(n)) {
               for (u = [], l = e.length, c = l - 2, a = 1; a < l; a++) u.push(t(e[a - 1], e[a]));
               l--, o = function (t) {
                  t *= l;
                  var e = Math.min(c, ~~t);
                  return u[e](t - e)
               }, r = n
            } else i || (e = It(tt(e) ? [] : {}, e));
            if (!u) {
               for (s in n) Qe.call(p, e, s, "get", n[s]);
               o = function (t) {
                  return fn(t, p) || (h ? e.p : e)
               }
            }
         }
         return oe(r, o)
      },
      shuffle: pe
   },
   install: ct,
   effects: yt,
   ticker: ke,
   updateRoot: Ue.updateRoot,
   plugins: _t,
   globalTimeline: u,
   core: {
      PropTween: _n,
      globals: ft,
      Tween: rn,
      Timeline: Ue,
      Animation: je,
      getCache: Ft,
      _removeLinkedListItem: zt,
      suppressOverwrites: function (t) {
         return a = t
      }
   }
};
bt("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
   return yn[t] = rn[t]
})), ke.add(Ue.updateRoot), d = yn.to({}, {
   duration: 0
});
var vn = function (t, e) {
      for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
      return n
   },
   Cn = function (t, e) {
      return {
         name: t,
         rawVars: 1,
         init: function (t, n, r) {
            r._onInit = function (t) {
               var r, i;
               if (Y(n) && (r = {}, bt(n, (function (t) {
                     return r[t] = 1
                  })), n = r), e) {
                  for (i in r = {}, n) r[i] = e(n[i]);
                  n = r
               }! function (t, e) {
                  var n, r, i, o = t._targets;
                  for (n in e)
                     for (r = o.length; r--;)(i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = vn(i, n)), i && i.modifier && i.modifier(e[n], t, o[r], n))
               }(t, n)
            }
         }
      }
   },
   xn = yn.registerPlugin({
      name: "attr",
      init: function (t, e, n, r, i) {
         var o, s;
         for (o in e)(s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], r, i, 0, 0, o)) && (s.op = o), this._props.push(o)
      }
   }, {
      name: "endArray",
      init: function (t, e) {
         for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
      }
   }, Cn("roundProps", de), Cn("modifiers"), Cn("snap", De)) || yn;
rn.version = Ue.version = xn.version = "3.9.1", p = 1, K() && Be();
Oe.Power0, Oe.Power1, Oe.Power2, Oe.Power3, Oe.Power4, Oe.Linear, Oe.Quad, Oe.Cubic, Oe.Quart, Oe.Quint, Oe.Strong, Oe.Elastic, Oe.Back, Oe.SteppedEase, Oe.Bounce, Oe.Sine, Oe.Expo, Oe.Circ;
var wn, Fn, En, bn, Tn, An, Pn, Sn = {},
   Mn = 180 / Math.PI,
   kn = Math.PI / 180,
   Bn = Math.atan2,
   On = /([A-Z])/g,
   In = /(?:left|right|width|margin|padding|x)/i,
   Ln = /[\s,\(]\S/,
   Rn = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
   },
   Nn = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
   },
   zn = function (t, e) {
      return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
   },
   Wn = function (t, e) {
      return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
   },
   Hn = function (t, e) {
      var n = e.s + e.c * t;
      e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
   },
   qn = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e)
   },
   Vn = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
   },
   Xn = function (t, e, n) {
      return t.style[e] = n
   },
   Yn = function (t, e, n) {
      return t.style.setProperty(e, n)
   },
   jn = function (t, e, n) {
      return t._gsap[e] = n
   },
   Un = function (t, e, n) {
      return t._gsap.scaleX = t._gsap.scaleY = n
   },
   Zn = function (t, e, n, r, i) {
      var o = t._gsap;
      o.scaleX = o.scaleY = n, o.renderTransform(i, o)
   },
   Gn = function (t, e, n, r, i) {
      var o = t._gsap;
      o[e] = n, o.renderTransform(i, o)
   },
   Qn = "transform",
   Kn = Qn + "Origin",
   $n = function (t, e) {
      var n = Fn.createElementNS ? Fn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Fn.createElement(t);
      return n.style ? n : Fn.createElement(t)
   },
   Jn = function t(e, n, r) {
      var i = getComputedStyle(e);
      return i[n] || i.getPropertyValue(n.replace(On, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, er(n) || n, 1) || ""
   },
   tr = "O,Moz,ms,Ms,Webkit".split(","),
   er = function (t, e, n) {
      var r = (e || Tn).style,
         i = 5;
      if (t in r && !n) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(tr[i] + t in r););
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? tr[i] : "") + t
   },
   nr = function () {
      "undefined" != typeof window && window.document && (wn = window, Fn = wn.document, En = Fn.documentElement, Tn = $n("div") || {
         style: {}
      }, $n("div"), Qn = er(Qn), Kn = Qn + "Origin", Tn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Pn = !!er("perspective"), bn = 1)
   },
   rr = function t(e) {
      var n, r = $n("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
         i = this.parentNode,
         o = this.nextSibling,
         s = this.style.cssText;
      if (En.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
         n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
      } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
      return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), En.removeChild(r), this.style.cssText = s, n
   },
   ir = function (t, e) {
      for (var n = e.length; n--;)
         if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
   },
   or = function (t) {
      var e;
      try {
         e = t.getBBox()
      } catch (n) {
         e = rr.call(t, !0)
      }
      return e && (e.width || e.height) || t.getBBox === rr || (e = rr.call(t, !0)), !e || e.width || e.x || e.y ? e : {
         x: +ir(t, ["x", "cx", "x1"]) || 0,
         y: +ir(t, ["y", "cy", "y1"]) || 0,
         width: 0,
         height: 0
      }
   },
   sr = function (t) {
      return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !or(t))
   },
   ar = function (t, e) {
      if (e) {
         var n = t.style;
         e in Sn && e !== Kn && (e = Qn), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(On, "-$1").toLowerCase())) : n.removeAttribute(e)
      }
   },
   ur = function (t, e, n, r, i, o) {
      var s = new _n(t._pt, e, n, 0, 1, o ? Vn : qn);
      return t._pt = s, s.b = r, s.e = i, t._props.push(n), s
   },
   lr = {
      deg: 1,
      rad: 1,
      turn: 1
   },
   cr = function t(e, n, r, i) {
      var o, s, a, u, l = parseFloat(r) || 0,
         c = (r + "").trim().substr((l + "").length) || "px",
         h = Tn.style,
         p = In.test(n),
         f = "svg" === e.tagName.toLowerCase(),
         d = (f ? "client" : "offset") + (p ? "Width" : "Height"),
         D = 100,
         g = "px" === i,
         m = "%" === i;
      return i === c || !l || lr[i] || lr[c] ? l : ("px" !== c && !g && (l = t(e, n, r, "px")), u = e.getCTM && sr(e), !m && "%" !== c || !Sn[n] && !~n.indexOf("adius") ? (h[p ? "width" : "height"] = D + (g ? c : i), s = ~n.indexOf("adius") || "em" === i && e.appendChild && !f ? e : e.parentNode, u && (s = (e.ownerSVGElement || {}).parentNode), s && s !== Fn && s.appendChild || (s = Fn.body), (a = s._gsap) && m && a.width && p && a.time === ke.time ? Tt(l / a.width * D) : ((m || "%" === c) && (h.position = Jn(e, "position")), s === e && (h.position = "static"), s.appendChild(Tn), o = Tn[d], s.removeChild(Tn), h.position = "absolute", p && m && ((a = Ft(s)).time = ke.time, a.width = s[d]), Tt(g ? o * l / D : o && l ? D / o * l : 0))) : (o = u ? e.getBBox()[p ? "width" : "height"] : e[d], Tt(m ? l / o * D : l / 100 * o)))
   },
   hr = function (t, e, n, r) {
      var i;
      return bn || nr(), e in Rn && "transform" !== e && ~(e = Rn[e]).indexOf(",") && (e = e.split(",")[0]), Sn[e] && "transform" !== e ? (i = xr(t, r), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : wr(Jn(t, Kn)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = Dr[e] && Dr[e](t, e, n) || Jn(t, e) || Et(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").trim().indexOf(" ") ? cr(t, e, i, n) + n : i
   },
   pr = function (t, e, n, r) {
      if (!n || "none" === n) {
         var i = er(e, t, 1),
            o = i && Jn(t, i, 1);
         o && o !== n ? (e = i, n = o) : "borderColor" === e && (n = Jn(t, "borderTopColor"))
      }
      var s, a, u, l, c, h, p, f, d, D, g, m, _ = new _n(this._pt, t.style, e, 0, 1, pn),
         y = 0,
         v = 0;
      if (_.b = n, _.e = r, n += "", "auto" === (r += "") && (t.style[e] = r, r = Jn(t, e) || r, t.style[e] = n), Me(s = [n, r]), r = s[1], u = (n = s[0]).match(rt) || [], (r.match(rt) || []).length) {
         for (; a = rt.exec(r);) p = a[0], d = r.substring(y, a.index), c ? c = (c + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (c = 1), p !== (h = u[v++] || "") && (l = parseFloat(h) || 0, g = h.substr((l + "").length), (m = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), f = parseFloat(p), D = p.substr((f + "").length), y = rt.lastIndex - D.length, D || (D = D || I.units[e] || g, y === r.length && (r += D, _.e += D)), g !== D && (l = cr(t, e, h, D) || 0), _._pt = {
            _next: _._pt,
            p: d || 1 === v ? d : ",",
            s: l,
            c: m ? m * f : f - l,
            m: c && c < 4 || "zIndex" === e ? Math.round : 0
         });
         _.c = y < r.length ? r.substring(y, r.length) : ""
      } else _.r = "display" === e && "none" === r ? Vn : qn;
      return ot.test(r) && (_.e = 0), this._pt = _, _
   },
   fr = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
   },
   dr = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
         var n, r, i, o = e.t,
            s = o.style,
            a = e.u,
            u = o._gsap;
         if ("all" === a || !0 === a) s.cssText = "", r = 1;
         else
            for (i = (a = a.split(",")).length; --i > -1;) n = a[i], Sn[n] && (r = 1, n = "transformOrigin" === n ? Kn : Qn), ar(o, n);
         r && (ar(o, Qn), u && (u.svg && o.removeAttribute("transform"), xr(o, 1), u.uncache = 1))
      }
   },
   Dr = {
      clearProps: function (t, e, n, r, i) {
         if ("isFromStart" !== i.data) {
            var o = t._pt = new _n(t._pt, e, n, 0, 0, dr);
            return o.u = r, o.pr = -10, o.tween = i, t._props.push(n), 1
         }
      }
   },
   gr = [1, 0, 0, 1, 0, 0],
   mr = {},
   _r = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
   },
   yr = function (t) {
      var e = Jn(t, Qn);
      return _r(e) ? gr : e.substr(7).match(nt).map(Tt)
   },
   vr = function (t, e) {
      var n, r, i, o, s = t._gsap || Ft(t),
         a = t.style,
         u = yr(t);
      return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? gr : u : (u !== gr || t.offsetParent || t === En || s.svg || (i = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (o = 1, r = t.nextSibling, En.appendChild(t)), u = yr(t), i ? a.display = i : ar(t, "display"), o && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : En.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
   },
   Cr = function (t, e, n, r, i, o) {
      var s, a, u, l = t._gsap,
         c = i || vr(t, !0),
         h = l.xOrigin || 0,
         p = l.yOrigin || 0,
         f = l.xOffset || 0,
         d = l.yOffset || 0,
         D = c[0],
         g = c[1],
         m = c[2],
         _ = c[3],
         y = c[4],
         v = c[5],
         C = e.split(" "),
         x = parseFloat(C[0]) || 0,
         w = parseFloat(C[1]) || 0;
      n ? c !== gr && (a = D * _ - g * m) && (u = x * (-g / a) + w * (D / a) - (D * v - g * y) / a, x = x * (_ / a) + w * (-m / a) + (m * v - _ * y) / a, w = u) : (x = (s = or(t)).x + (~C[0].indexOf("%") ? x / 100 * s.width : x), w = s.y + (~(C[1] || C[0]).indexOf("%") ? w / 100 * s.height : w)), r || !1 !== r && l.smooth ? (y = x - h, v = w - p, l.xOffset = f + (y * D + v * m) - y, l.yOffset = d + (y * g + v * _) - v) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = w, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!n, t.style[Kn] = "0px 0px", o && (ur(o, l, "xOrigin", h, x), ur(o, l, "yOrigin", p, w), ur(o, l, "xOffset", f, l.xOffset), ur(o, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + w)
   },
   xr = function (t, e) {
      var n = t._gsap || new Ye(t);
      if ("x" in n && !e && !n.uncache) return n;
      var r, i, o, s, a, u, l, c, h, p, f, d, D, g, m, _, y, v, C, x, w, F, E, b, T, A, P, S, M, k, B, O, L = t.style,
         R = n.scaleX < 0,
         N = "px",
         z = "deg",
         W = Jn(t, Kn) || "0";
      return r = i = o = u = l = c = h = p = f = 0, s = a = 1, n.svg = !(!t.getCTM || !sr(t)), g = vr(t, n.svg), n.svg && (b = (!n.uncache || "0px 0px" === W) && !e && t.getAttribute("data-svg-origin"), Cr(t, b || W, !!b || n.originIsAbsolute, !1 !== n.smooth, g)), d = n.xOrigin || 0, D = n.yOrigin || 0, g !== gr && (v = g[0], C = g[1], x = g[2], w = g[3], r = F = g[4], i = E = g[5], 6 === g.length ? (s = Math.sqrt(v * v + C * C), a = Math.sqrt(w * w + x * x), u = v || C ? Bn(C, v) * Mn : 0, (h = x || w ? Bn(x, w) * Mn + u : 0) && (a *= Math.abs(Math.cos(h * kn))), n.svg && (r -= d - (d * v + D * x), i -= D - (d * C + D * w))) : (O = g[6], k = g[7], P = g[8], S = g[9], M = g[10], B = g[11], r = g[12], i = g[13], o = g[14], l = (m = Bn(O, M)) * Mn, m && (b = F * (_ = Math.cos(-m)) + P * (y = Math.sin(-m)), T = E * _ + S * y, A = O * _ + M * y, P = F * -y + P * _, S = E * -y + S * _, M = O * -y + M * _, B = k * -y + B * _, F = b, E = T, O = A), c = (m = Bn(-x, M)) * Mn, m && (_ = Math.cos(-m), B = w * (y = Math.sin(-m)) + B * _, v = b = v * _ - P * y, C = T = C * _ - S * y, x = A = x * _ - M * y), u = (m = Bn(C, v)) * Mn, m && (b = v * (_ = Math.cos(m)) + C * (y = Math.sin(m)), T = F * _ + E * y, C = C * _ - v * y, E = E * _ - F * y, v = b, F = T), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, c = 180 - c), s = Tt(Math.sqrt(v * v + C * C + x * x)), a = Tt(Math.sqrt(E * E + O * O)), m = Bn(F, E), h = Math.abs(m) > 2e-4 ? m * Mn : 0, f = B ? 1 / (B < 0 ? -B : B) : 0), n.svg && (b = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !_r(Jn(t, Qn)), b && t.setAttribute("transform", b))), Math.abs(h) > 90 && Math.abs(h) < 270 && (R ? (s *= -1, h += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, h += h <= 0 ? 180 : -180)), n.x = r - ((n.xPercent = r && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + N, n.y = i - ((n.yPercent = i && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + N, n.z = o + N, n.scaleX = Tt(s), n.scaleY = Tt(a), n.rotation = Tt(u) + z, n.rotationX = Tt(l) + z, n.rotationY = Tt(c) + z, n.skewX = h + z, n.skewY = p + z, n.transformPerspective = f + N, (n.zOrigin = parseFloat(W.split(" ")[2]) || 0) && (L[Kn] = wr(W)), n.xOffset = n.yOffset = 0, n.force3D = I.force3D, n.renderTransform = n.svg ? Sr : Pn ? Pr : Er, n.uncache = 0, n
   },
   wr = function (t) {
      return (t = t.split(" "))[0] + " " + t[1]
   },
   Fr = function (t, e, n) {
      var r = ae(e);
      return Tt(parseFloat(e) + parseFloat(cr(t, "x", n + "px", r))) + r
   },
   Er = function (t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Pr(t, e)
   },
   br = "0deg",
   Tr = "0px",
   Ar = ") ",
   Pr = function (t, e) {
      var n = e || this,
         r = n.xPercent,
         i = n.yPercent,
         o = n.x,
         s = n.y,
         a = n.z,
         u = n.rotation,
         l = n.rotationY,
         c = n.rotationX,
         h = n.skewX,
         p = n.skewY,
         f = n.scaleX,
         d = n.scaleY,
         D = n.transformPerspective,
         g = n.force3D,
         m = n.target,
         _ = n.zOrigin,
         y = "",
         v = "auto" === g && t && 1 !== t || !0 === g;
      if (_ && (c !== br || l !== br)) {
         var C, x = parseFloat(l) * kn,
            w = Math.sin(x),
            F = Math.cos(x);
         x = parseFloat(c) * kn, C = Math.cos(x), o = Fr(m, o, w * C * -_), s = Fr(m, s, -Math.sin(x) * -_), a = Fr(m, a, F * C * -_ + _)
      }
      D !== Tr && (y += "perspective(" + D + Ar), (r || i) && (y += "translate(" + r + "%, " + i + "%) "), (v || o !== Tr || s !== Tr || a !== Tr) && (y += a !== Tr || v ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + Ar), u !== br && (y += "rotate(" + u + Ar), l !== br && (y += "rotateY(" + l + Ar), c !== br && (y += "rotateX(" + c + Ar), h === br && p === br || (y += "skew(" + h + ", " + p + Ar), 1 === f && 1 === d || (y += "scale(" + f + ", " + d + Ar), m.style[Qn] = y || "translate(0, 0)"
   },
   Sr = function (t, e) {
      var n, r, i, o, s, a = e || this,
         u = a.xPercent,
         l = a.yPercent,
         c = a.x,
         h = a.y,
         p = a.rotation,
         f = a.skewX,
         d = a.skewY,
         D = a.scaleX,
         g = a.scaleY,
         m = a.target,
         _ = a.xOrigin,
         y = a.yOrigin,
         v = a.xOffset,
         C = a.yOffset,
         x = a.forceCSS,
         w = parseFloat(c),
         F = parseFloat(h);
      p = parseFloat(p), f = parseFloat(f), (d = parseFloat(d)) && (f += d = parseFloat(d), p += d), p || f ? (p *= kn, f *= kn, n = Math.cos(p) * D, r = Math.sin(p) * D, i = Math.sin(p - f) * -g, o = Math.cos(p - f) * g, f && (d *= kn, s = Math.tan(f - d), i *= s = Math.sqrt(1 + s * s), o *= s, d && (s = Math.tan(d), n *= s = Math.sqrt(1 + s * s), r *= s)), n = Tt(n), r = Tt(r), i = Tt(i), o = Tt(o)) : (n = D, o = g, r = i = 0), (w && !~(c + "").indexOf("px") || F && !~(h + "").indexOf("px")) && (w = cr(m, "x", c, "px"), F = cr(m, "y", h, "px")), (_ || y || v || C) && (w = Tt(w + _ - (_ * n + y * i) + v), F = Tt(F + y - (_ * r + y * o) + C)), (u || l) && (s = m.getBBox(), w = Tt(w + u / 100 * s.width), F = Tt(F + l / 100 * s.height)), s = "matrix(" + n + "," + r + "," + i + "," + o + "," + w + "," + F + ")", m.setAttribute("transform", s), x && (m.style[Qn] = s)
   },
   Mr = function (t, e, n, r, i, o) {
      var s, a, u = 360,
         l = Y(i),
         c = parseFloat(i) * (l && ~i.indexOf("rad") ? Mn : 1),
         h = o ? c * o : c - r,
         p = r + h + "deg";
      return l && ("short" === (s = i.split("_")[1]) && (h %= u) !== h % 180 && (h += h < 0 ? u : -360), "cw" === s && h < 0 ? h = (h + 36e9) % u - ~~(h / u) * u : "ccw" === s && h > 0 && (h = (h - 36e9) % u - ~~(h / u) * u)), t._pt = a = new _n(t._pt, e, n, r, h, zn), a.e = p, a.u = "deg", t._props.push(n), a
   },
   kr = function (t, e) {
      for (var n in e) t[n] = e[n];
      return t
   },
   Br = function (t, e, n) {
      var r, i, o, s, a, u, l, c = kr({}, n._gsap),
         h = n.style;
      for (i in c.svg ? (o = n.getAttribute("transform"), n.setAttribute("transform", ""), h[Qn] = e, r = xr(n, 1), ar(n, Qn), n.setAttribute("transform", o)) : (o = getComputedStyle(n)[Qn], h[Qn] = e, r = xr(n, 1), h[Qn] = o), Sn)(o = c[i]) !== (s = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = ae(o) !== (l = ae(s)) ? cr(n, i, o, l) : parseFloat(o), u = parseFloat(s), t._pt = new _n(t._pt, r, i, a, u - a, Nn), t._pt.u = l || 0, t._props.push(i));
      kr(r, c)
   };
bt("padding,margin,Width,Radius", (function (t, e) {
   var n = "Top",
      r = "Right",
      i = "Bottom",
      o = "Left",
      s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map((function (n) {
         return e < 2 ? t + n : "border" + n + t
      }));
   Dr[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
      var o, a;
      if (arguments.length < 4) return o = s.map((function (e) {
         return hr(t, e, n)
      })), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
      o = (r + "").split(" "), a = {}, s.forEach((function (t, e) {
         return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
      })), t.init(e, a, i)
   }
}));
var Or, Ir, Lr, Rr = {
   name: "css",
   register: nr,
   targetTest: function (t) {
      return t.style && t.nodeType
   },
   init: function (t, e, n, r, i) {
      var o, s, a, u, l, c, h, p, f, d, D, g, m, _, y, v, C, x, w, F = this._props,
         E = t.style,
         b = n.vars.startAt;
      for (h in bn || nr(), e)
         if ("autoRound" !== h && (s = e[h], !_t[h] || !Ke(h, e, n, r, t, i)))
            if (l = typeof s, c = Dr[h], "function" === l && (l = typeof (s = s.call(n, r, t, i))), "string" === l && ~s.indexOf("random(") && (s = _e(s)), c) c(this, t, h, s, n) && (y = 1);
            else if ("--" === h.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(h) + "").trim(), s += "", Pe.lastIndex = 0, Pe.test(o) || (p = ae(o), f = ae(s)), f ? p !== f && (o = cr(t, h, o, f) + f) : p && (s += p), this.add(E, "setProperty", o, s, r, i, 0, 0, h), F.push(h);
      else if ("undefined" !== l) {
         if (b && h in b ? (o = "function" == typeof b[h] ? b[h].call(n, r, t, i) : b[h], Y(o) && ~o.indexOf("random(") && (o = _e(o)), ae(o + "") || (o += I.units[h] || ae(hr(t, h)) || ""), "=" === (o + "").charAt(1) && (o = hr(t, h))) : o = hr(t, h), u = parseFloat(o), (d = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), a = parseFloat(s), h in Rn && ("autoAlpha" === h && (1 === u && "hidden" === hr(t, "visibility") && a && (u = 0), ur(this, E, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== h && "transform" !== h && ~(h = Rn[h]).indexOf(",") && (h = h.split(",")[0])), D = h in Sn)
            if (g || ((m = t._gsap).renderTransform && !e.parseTransform || xr(t, e.parseTransform), _ = !1 !== e.smoothOrigin && m.smooth, (g = this._pt = new _n(this._pt, E, Qn, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === h) this._pt = new _n(this._pt, m, "scaleY", m.scaleY, (d ? d * a : a - m.scaleY) || 0), F.push("scaleY", h), h += "X";
            else {
               if ("transformOrigin" === h) {
                  C = void 0, x = void 0, w = void 0, C = (v = s).split(" "), x = C[0], w = C[1] || "50%", "top" !== x && "bottom" !== x && "left" !== w && "right" !== w || (v = x, x = w, w = v), C[0] = fr[x] || x, C[1] = fr[w] || w, s = C.join(" "), m.svg ? Cr(t, s, 0, _, 0, this) : ((f = parseFloat(s.split(" ")[2]) || 0) !== m.zOrigin && ur(this, m, "zOrigin", m.zOrigin, f), ur(this, E, h, wr(o), wr(s)));
                  continue
               }
               if ("svgOrigin" === h) {
                  Cr(t, s, 1, _, 0, this);
                  continue
               }
               if (h in mr) {
                  Mr(this, m, h, u, s, d);
                  continue
               }
               if ("smoothOrigin" === h) {
                  ur(this, m, "smooth", m.smooth, s);
                  continue
               }
               if ("force3D" === h) {
                  m[h] = s;
                  continue
               }
               if ("transform" === h) {
                  Br(this, s, t);
                  continue
               }
            }
         else h in E || (h = er(h) || h);
         if (D || (a || 0 === a) && (u || 0 === u) && !Ln.test(s) && h in E) a || (a = 0), (p = (o + "").substr((u + "").length)) !== (f = ae(s) || (h in I.units ? I.units[h] : p)) && (u = cr(t, h, o, f)), this._pt = new _n(this._pt, D ? m : E, h, u, d ? d * a : a - u, D || "px" !== f && "zIndex" !== h || !1 === e.autoRound ? Nn : Hn), this._pt.u = f || 0, p !== f && "%" !== f && (this._pt.b = o, this._pt.r = Wn);
         else if (h in E) pr.call(this, t, h, o, s);
         else {
            if (!(h in t)) {
               ht(h, s);
               continue
            }
            this.add(t, h, o || t[h], s, r, i)
         }
         F.push(h)
      }
      y && mn(this)
   },
   get: hr,
   aliases: Rn,
   getSetter: function (t, e, n) {
      var r = Rn[e];
      return r && r.indexOf(",") < 0 && (e = r), e in Sn && e !== Kn && (t._gsap.x || hr(t, "x")) ? n && An === n ? "scale" === e ? Un : jn : (An = n || {}, "scale" === e ? Zn : Gn) : t.style && !Z(t.style[e]) ? Xn : ~e.indexOf("-") ? Yn : ln(t, e)
   },
   core: {
      _removeProperty: ar,
      _getMatrix: vr
   }
};
xn.utils.checkPrefix = er, Lr = bt((Or = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Ir = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
   Sn[t] = 1
})), bt(Ir, (function (t) {
   I.units[t] = "deg", mr[t] = 1
})), Rn[Lr[13]] = Or + "," + Ir, bt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
   var e = t.split(":");
   Rn[e[1]] = Lr[e[0]]
})), bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
   I.units[t] = "px"
})), xn.registerPlugin(Rr);
var Nr, zr, Wr, Hr, qr, Vr, Xr, Yr, jr, Ur, Zr, Gr, Qr, Kr, $r, Jr, ti, ei, ni, ri, ii, oi, si, ai, ui, li, ci = xn.registerPlugin(Rr) || xn,
   hi = (ci.core.Tween, 1),
   pi = [],
   fi = [],
   di = Date.now,
   Di = di(),
   gi = 0,
   mi = 1,
   _i = function (t) {
      return t
   },
   yi = function (t) {
      return jr(t)[0] || (Pi(t) && !1 !== Nr.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
   },
   vi = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0
   },
   Ci = function () {
      return "undefined" != typeof window
   },
   xi = function () {
      return Nr || Ci() && (Nr = window.gsap) && Nr.registerPlugin && Nr
   },
   wi = function (t) {
      return !!~Xr.indexOf(t)
   },
   Fi = function (t, e) {
      return ~pi.indexOf(t) && pi[pi.indexOf(t) + 1][e]
   },
   Ei = function (t, e) {
      var n = e.s,
         r = e.sc,
         i = fi.indexOf(t),
         o = r === no.sc ? 1 : 2;
      return !~i && (i = fi.push(t) - 1), fi[i + o] || (fi[i + o] = Fi(t, n) || (wi(t) ? r : function (e) {
         return arguments.length ? t[n] = e : t[n]
      }))
   },
   bi = function (t) {
      return Fi(t, "getBoundingClientRect") || (wi(t) ? function () {
         return Xo.width = Wr.innerWidth, Xo.height = Wr.innerHeight, Xo
      } : function () {
         return oo(t)
      })
   },
   Ti = function (t, e) {
      var n = e.s,
         r = e.d2,
         i = e.d,
         o = e.a;
      return (o = Fi(t, n = "scroll" + r)) ? o() - bi(t)()[i] : wi(t) ? (Vr[n] || qr[n]) - (Wr["inner" + r] || qr["client" + r] || Vr["client" + r]) : t[n] - t["offset" + r]
   },
   Ai = function (t, e) {
      for (var n = 0; n < ni.length; n += 3)(!e || ~e.indexOf(ni[n + 1])) && t(ni[n], ni[n + 1], ni[n + 2])
   },
   Pi = function (t) {
      return "string" == typeof t
   },
   Si = function (t) {
      return "function" == typeof t
   },
   Mi = function (t) {
      return "number" == typeof t
   },
   ki = function (t) {
      return "object" == typeof t
   },
   Bi = function (t) {
      return Si(t) && t()
   },
   Oi = function (t, e) {
      return function () {
         var n = Bi(t),
            r = Bi(e);
         return function () {
            Bi(n), Bi(r)
         }
      }
   },
   Ii = function (t, e, n) {
      return t && t.progress(e ? 0 : 1) && n && t.pause()
   },
   Li = function (t, e) {
      if (t.enabled) {
         var n = e(t);
         n && n.totalTime && (t.callbackAnimation = n)
      }
   },
   Ri = Math.abs,
   Ni = "scrollLeft",
   zi = "scrollTop",
   Wi = "left",
   Hi = "top",
   qi = "right",
   Vi = "bottom",
   Xi = "width",
   Yi = "height",
   ji = "Right",
   Ui = "Left",
   Zi = "Top",
   Gi = "Bottom",
   Qi = "padding",
   Ki = "margin",
   $i = "Width",
   Ji = "Height",
   to = "px",
   eo = {
      s: Ni,
      p: Wi,
      p2: Ui,
      os: qi,
      os2: ji,
      d: Xi,
      d2: $i,
      a: "x",
      sc: function (t) {
         return arguments.length ? Wr.scrollTo(t, no.sc()) : Wr.pageXOffset || Hr[Ni] || qr[Ni] || Vr[Ni] || 0
      }
   },
   no = {
      s: zi,
      p: Hi,
      p2: Zi,
      os: Vi,
      os2: Gi,
      d: Yi,
      d2: Ji,
      a: "y",
      op: eo,
      sc: function (t) {
         return arguments.length ? Wr.scrollTo(eo.sc(), t) : Wr.pageYOffset || Hr[zi] || qr[zi] || Vr[zi] || 0
      }
   },
   ro = function (t) {
      return Wr.getComputedStyle(t)
   },
   io = function (t, e) {
      for (var n in e) n in t || (t[n] = e[n]);
      return t
   },
   oo = function (t, e) {
      var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== ro(t)[$r] && Nr.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
         }).progress(1),
         r = t.getBoundingClientRect();
      return n && n.progress(0).kill(), r
   },
   so = function (t, e) {
      var n = e.d2;
      return t["offset" + n] || t["client" + n] || 0
   },
   ao = function (t) {
      var e, n = [],
         r = t.labels,
         i = t.duration();
      for (e in r) n.push(r[e] / i);
      return n
   },
   uo = function (t) {
      var e = Nr.utils.snap(t),
         n = Array.isArray(t) && t.slice(0).sort((function (t, e) {
            return t - e
         }));
      return n ? function (t, r, i) {
         var o;
         if (void 0 === i && (i = .001), !r) return e(t);
         if (r > 0) {
            for (t -= i, o = 0; o < n.length; o++)
               if (n[o] >= t) return n[o];
            return n[o - 1]
         }
         for (o = n.length, t += i; o--;)
            if (n[o] <= t) return n[o];
         return n[0]
      } : function (n, r, i) {
         void 0 === i && (i = .001);
         var o = e(n);
         return !r || Math.abs(o - n) < i || o - n < 0 == r < 0 ? o : e(r < 0 ? n - t : n + t)
      }
   },
   lo = function (t, e, n, r) {
      return n.split(",").forEach((function (n) {
         return t(e, n, r)
      }))
   },
   co = function (t, e, n) {
      return t.addEventListener(e, n, {
         passive: !0
      })
   },
   ho = function (t, e, n) {
      return t.removeEventListener(e, n)
   },
   po = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
   },
   fo = {
      toggleActions: "play",
      anticipatePin: 0
   },
   Do = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
   },
   go = function (t, e) {
      if (Pi(t)) {
         var n = t.indexOf("="),
            r = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
         ~n && (t.indexOf("%") > n && (r *= e / 100), t = t.substr(0, n - 1)), t = r + (t in Do ? Do[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
      }
      return t
   },
   mo = function (t, e, n, r, i, o, s, a) {
      var u = i.startColor,
         l = i.endColor,
         c = i.fontSize,
         h = i.indent,
         p = i.fontWeight,
         f = Hr.createElement("div"),
         d = wi(n) || "fixed" === Fi(n, "pinType"),
         D = -1 !== t.indexOf("scroller"),
         g = d ? Vr : n,
         m = -1 !== t.indexOf("start"),
         _ = m ? u : l,
         y = "border-color:" + _ + ";font-size:" + c + ";color:" + _ + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return y += "position:" + ((D || a) && d ? "fixed;" : "absolute;"), (D || a || !d) && (y += (r === no ? qi : Vi) + ":" + (o + parseFloat(h)) + "px;"), s && (y += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), f._isStart = m, f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), f.style.cssText = y, f.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(f, g.children[0]) : g.appendChild(f), f._offset = f["offset" + r.op.d2], _o(f, 0, r, m), f
   },
   _o = function (t, e, n, r) {
      var i = {
            display: "block"
         },
         o = n[r ? "os2" : "p2"],
         s = n[r ? "p2" : "os2"];
      t._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + o + $i] = 1, i["border" + s + $i] = 0, i[n.p] = e + "px", Nr.set(t, i)
   },
   yo = [],
   vo = {},
   Co = function () {
      return di() - gi > 34 && Ro()
   },
   xo = function () {
      Ro(), gi || Po("scrollStart"), gi = di()
   },
   wo = function () {
      return !Qr && !oi && !Hr.fullscreenElement && Yr.restart(!0)
   },
   Fo = {},
   Eo = [],
   bo = [],
   To = function (t) {
      var e, n = Nr.ticker.frame,
         r = [],
         i = 0;
      if (ui !== n || hi) {
         for (ko(); i < bo.length; i += 4)(e = Wr.matchMedia(bo[i]).matches) !== bo[i + 3] && (bo[i + 3] = e, e ? r.push(i) : ko(1, bo[i]) || Si(bo[i + 2]) && bo[i + 2]());
         for (Mo(), i = 0; i < r.length; i++) e = r[i], ai = bo[e], bo[e + 2] = bo[e + 1](t);
         ai = 0, zr && Oo(0, 1), ui = n, Po("matchMedia")
      }
   },
   Ao = function t() {
      return ho(Go, "scrollEnd", t) || Oo(!0)
   },
   Po = function (t) {
      return Fo[t] && Fo[t].map((function (t) {
         return t()
      })) || Eo
   },
   So = [],
   Mo = function (t) {
      for (var e = 0; e < So.length; e += 5) t && So[e + 4] !== t || (So[e].style.cssText = So[e + 1], So[e].getBBox && So[e].setAttribute("transform", So[e + 2] || ""), So[e + 3].uncache = 1)
   },
   ko = function (t, e) {
      var n;
      for (Jr = 0; Jr < yo.length; Jr++) n = yo[Jr], e && n.media !== e || (t ? n.kill(1) : n.revert());
      e && Mo(e), e || Po("revert")
   },
   Bo = function () {
      return fi.forEach((function (t) {
         return "function" == typeof t && (t.rec = 0)
      }))
   },
   Oo = function (t, e) {
      if (!gi || t) {
         li = !0;
         var n = Po("refreshInit");
         ri && Go.sort(), e || ko(), yo.forEach((function (t) {
            return t.refresh()
         })), yo.forEach((function (t) {
            return "max" === t.vars.end && t.setPositions(t.start, Ti(t.scroller, t._dir))
         })), n.forEach((function (t) {
            return t && t.render && t.render(-1)
         })), Bo(), Yr.pause(), li = !1, Po("refresh")
      } else co(Go, "scrollEnd", Ao)
   },
   Io = 0,
   Lo = 1,
   Ro = function () {
      if (!li) {
         var t = yo.length,
            e = di(),
            n = e - Di >= 50,
            r = t && yo[0].scroll();
         if (Lo = Io > r ? -1 : 1, Io = r, n && (gi && !Kr && e - gi > 200 && (gi = 0, Po("scrollEnd")), Zr = Di, Di = e), Lo < 0) {
            for (Jr = t; Jr-- > 0;) yo[Jr] && yo[Jr].update(0, n);
            Lo = 1
         } else
            for (Jr = 0; Jr < t; Jr++) yo[Jr] && yo[Jr].update(0, n)
      }
   },
   No = [Wi, Hi, Vi, qi, Ki + Gi, Ki + ji, Ki + Zi, Ki + Ui, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
   zo = No.concat([Xi, Yi, "boxSizing", "max" + $i, "max" + Ji, "position", Ki, Qi, Qi + Zi, Qi + ji, Qi + Gi, Qi + Ui]),
   Wo = function (t, e, n, r) {
      if (t.parentNode !== e) {
         for (var i, o = No.length, s = e.style, a = t.style; o--;) s[i = No[o]] = n[i];
         s.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (s.display = "inline-block"), a[Vi] = a[qi] = s.flexBasis = "auto", s.overflow = "visible", s.boxSizing = "border-box", s[Xi] = so(t, eo) + to, s[Yi] = so(t, no) + to, s[Qi] = a[Ki] = a[Hi] = a[Wi] = "0", qo(r), a[Xi] = a["max" + $i] = n[Xi], a[Yi] = a["max" + Ji] = n[Yi], a[Qi] = n[Qi], t.parentNode.insertBefore(e, t), e.appendChild(t)
      }
   },
   Ho = /([A-Z])/g,
   qo = function (t) {
      if (t) {
         var e, n, r = t.t.style,
            i = t.length,
            o = 0;
         for ((t.t._gsap || Nr.core.getCache(t.t)).uncache = 1; o < i; o += 2) n = t[o + 1], e = t[o], n ? r[e] = n : r[e] && r.removeProperty(e.replace(Ho, "-$1").toLowerCase())
      }
   },
   Vo = function (t) {
      for (var e = zo.length, n = t.style, r = [], i = 0; i < e; i++) r.push(zo[i], n[zo[i]]);
      return r.t = t, r
   },
   Xo = {
      left: 0,
      top: 0
   },
   Yo = function (t, e, n, r, i, o, s, a, u, l, c, h, p) {
      Si(t) && (t = t(a)), Pi(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? go("0" + t.substr(3), n) : 0));
      var f, d, D, g = p ? p.time() : 0;
      if (p && p.seek(0), Mi(t)) s && _o(s, n, r, !0);
      else {
         Si(e) && (e = e(a));
         var m, _, y, v, C = t.split(" ");
         D = yi(e) || Vr, (m = oo(D) || {}) && (m.left || m.top) || "none" !== ro(D).display || (v = D.style.display, D.style.display = "block", m = oo(D), v ? D.style.display = v : D.style.removeProperty("display")), _ = go(C[0], m[r.d]), y = go(C[1] || "0", n), t = m[r.p] - u[r.p] - l + _ + i - y, s && _o(s, y, r, n - y < 20 || s._isStart && y > 20), n -= n - y
      }
      if (o) {
         var x = t + n,
            w = o._isStart;
         f = "scroll" + r.d2, _o(o, x, r, w && x > 20 || !w && (c ? Math.max(Vr[f], qr[f]) : o.parentNode[f]) <= x + 1), c && (u = oo(s), c && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + to))
      }
      return p && D && (f = oo(D), p.seek(h), d = oo(D), p._caScrollDist = f[r.p] - d[r.p], t = t / p._caScrollDist * h), p && p.seek(g), p ? t : Math.round(t)
   },
   jo = /(?:webkit|moz|length|cssText|inset)/i,
   Uo = function (t, e, n, r) {
      if (t.parentNode !== e) {
         var i, o, s = t.style;
         if (e === Vr) {
            for (i in t._stOrig = s.cssText, o = ro(t)) + i || jo.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
            s.top = n, s.left = r
         } else s.cssText = t._stOrig;
         Nr.core.getCache(t).uncache = 1, e.appendChild(t)
      }
   },
   Zo = function (t, e) {
      var n, r, i = Ei(t, e),
         o = "_scroll" + e.p2,
         s = function e(s, a, u, l, c) {
            var h = e.tween,
               p = a.onComplete,
               f = {};
            return h && h.kill(), n = Math.round(u), a[o] = s, a.modifiers = f, f[o] = function (t) {
               return (t = vi(i())) !== n && t !== r && Math.abs(t - n) > 2 && Math.abs(t - r) > 2 ? (h.kill(), e.tween = 0) : t = u + l * h.ratio + c * h.ratio * h.ratio, r = n, n = vi(t)
            }, a.onComplete = function () {
               e.tween = 0, p && p.call(h)
            }, h = e.tween = Nr.to(t, a)
         };
      return t[o] = i, co(t, "wheel", (function () {
         return s.tween && s.tween.kill() && (s.tween = 0)
      })), s
   };
/*!
 * ScrollTrigger 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
eo.op = no;
var Go = function () {
   function t(e, n) {
      zr || t.register(Nr) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, n)
   }
   return t.prototype.init = function (e, n) {
      if (this.progress = this.start = 0, this.vars && this.kill(1), mi) {
         var r, i, o, s, a, u, l, c, h, p, f, d, D, g, m, _, y, v, C, x, w, F, E, b, T, A, P, S, M, k, B, O, I, L, R, N, z, W, H, q, V = e = io(Pi(e) || Mi(e) || e.nodeType ? {
               trigger: e
            } : e, fo),
            X = V.onUpdate,
            Y = V.toggleClass,
            j = V.id,
            U = V.onToggle,
            Z = V.onRefresh,
            G = V.scrub,
            Q = V.trigger,
            K = V.pin,
            $ = V.pinSpacing,
            J = V.invalidateOnRefresh,
            tt = V.anticipatePin,
            et = V.onScrubComplete,
            nt = V.onSnapComplete,
            rt = V.once,
            it = V.snap,
            ot = V.pinReparent,
            st = V.pinSpacer,
            at = V.containerAnimation,
            ut = V.fastScrollEnd,
            lt = V.preventOverlaps,
            ct = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? eo : no,
            ht = !G && 0 !== G,
            pt = yi(e.scroller || Wr),
            ft = Nr.core.getCache(pt),
            dt = wi(pt),
            Dt = "fixed" === ("pinType" in e ? e.pinType : Fi(pt, "pinType") || dt && "fixed"),
            gt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            mt = ht && e.toggleActions.split(" "),
            _t = "markers" in e ? e.markers : fo.markers,
            yt = dt ? 0 : parseFloat(ro(pt)["border" + ct.p2 + $i]) || 0,
            vt = this,
            Ct = e.onRefreshInit && function () {
               return e.onRefreshInit(vt)
            },
            xt = function (t, e, n) {
               var r = n.d,
                  i = n.d2,
                  o = n.a;
               return (o = Fi(t, "getBoundingClientRect")) ? function () {
                  return o()[r]
               } : function () {
                  return (e ? Wr["inner" + i] : t["client" + i]) || 0
               }
            }(pt, dt, ct),
            wt = function (t, e) {
               return !e || ~pi.indexOf(t) ? bi(t) : function () {
                  return Xo
               }
            }(pt, dt),
            Ft = 0,
            Et = Ei(pt, ct);
         if (vt.media = ai, vt._dir = ct, tt *= 45, vt.scroller = pt, vt.scroll = at ? at.time.bind(at) : Et, s = Et(), vt.vars = e, n = n || e.animation, "refreshPriority" in e && (ri = 1), ft.tweenScroll = ft.tweenScroll || {
               top: Zo(pt, no),
               left: Zo(pt, eo)
            }, vt.tweenTo = r = ft.tweenScroll[ct.p], n && (n.vars.lazy = !1, n._initted || !1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.render(0, !0, !0), vt.animation = n.pause(), n.scrollTrigger = vt, (B = Mi(G) && G) && (k = Nr.to(n, {
               ease: "power3",
               duration: B,
               onComplete: function () {
                  return et && et(vt)
               }
            })), S = 0, j || (j = n.vars.id)), yo.push(vt), it && (ki(it) && !it.push || (it = {
               snapTo: it
            }), "scrollBehavior" in Vr.style && Nr.set(dt ? [Vr, qr] : pt, {
               scrollBehavior: "auto"
            }), o = Si(it.snapTo) ? it.snapTo : "labels" === it.snapTo ? function (t) {
               return function (e) {
                  return Nr.utils.snap(ao(t), e)
               }
            }(n) : "labelsDirectional" === it.snapTo ? (W = n, function (t, e) {
               return uo(ao(W))(t, e.direction)
            }) : !1 !== it.directional ? function (t, e) {
               return uo(it.snapTo)(t, e.direction)
            } : Nr.utils.snap(it.snapTo), O = it.duration || {
               min: .1,
               max: 2
            }, O = ki(O) ? Ur(O.min, O.max) : Ur(O, O), I = Nr.delayedCall(it.delay || B / 2 || .1, (function () {
               if (Math.abs(vt.getVelocity()) < 10 && !Kr && Ft !== Et()) {
                  var t = n && !ht ? n.totalProgress() : vt.progress,
                     e = (t - M) / (di() - Zr) * 1e3 || 0,
                     i = Nr.utils.clamp(-vt.progress, 1 - vt.progress, Ri(e / 2) * e / .185),
                     s = vt.progress + (!1 === it.inertia ? 0 : i),
                     a = Ur(0, 1, o(s, vt)),
                     c = Et(),
                     h = Math.round(u + a * D),
                     p = it,
                     f = p.onStart,
                     d = p.onInterrupt,
                     g = p.onComplete,
                     m = r.tween;
                  if (c <= l && c >= u && h !== c) {
                     if (m && !m._initted && m.data <= Ri(h - c)) return;
                     !1 === it.inertia && (i = a - vt.progress), r(h, {
                        duration: O(Ri(.185 * Math.max(Ri(s - t), Ri(a - t)) / e / .05 || 0)),
                        ease: it.ease || "power3",
                        data: Ri(h - c),
                        onInterrupt: function () {
                           return I.restart(!0) && d && d(vt)
                        },
                        onComplete: function () {
                           vt.update(), Ft = Et(), S = M = n && !ht ? n.totalProgress() : vt.progress, nt && nt(vt), g && g(vt)
                        }
                     }, c, i * D, h - c - i * D), f && f(vt, r.tween)
                  }
               } else vt.isActive && I.restart(!0)
            })).pause()), j && (vo[j] = vt), Q = vt.trigger = yi(Q || K), K = !0 === K ? Q : yi(K), Pi(Y) && (Y = {
               targets: Q,
               className: Y
            }), K && (!1 === $ || $ === Ki || ($ = !(!$ && "flex" === ro(K.parentNode).display) && Qi), vt.pin = K, !1 !== e.force3D && Nr.set(K, {
               force3D: !0
            }), (i = Nr.core.getCache(K)).spacer ? g = i.pinState : (st && ((st = yi(st)) && !st.nodeType && (st = st.current || st.nativeElement), i.spacerIsNative = !!st, st && (i.spacerState = Vo(st))), i.spacer = y = st || Hr.createElement("div"), y.classList.add("pin-spacer"), j && y.classList.add("pin-spacer-" + j), i.pinState = g = Vo(K)), vt.spacer = y = i.spacer, P = ro(K), E = P[$ + ct.os2], C = Nr.getProperty(K), x = Nr.quickSetter(K, ct.a, to), Wo(K, y, P), _ = Vo(K)), _t && (d = ki(_t) ? io(_t, po) : po, p = mo("scroller-start", j, pt, ct, d, 0), f = mo("scroller-end", j, pt, ct, d, 0, p), v = p["offset" + ct.op.d2], c = mo("start", j, pt, ct, d, v, 0, at), h = mo("end", j, pt, ct, d, v, 0, at), at && (z = Nr.quickSetter([c, h], ct.a, to)), Dt || pi.length && !0 === Fi(pt, "fixedMarkers") || (q = ro(H = dt ? Vr : pt).position, H.style.position = "absolute" === q || "fixed" === q ? q : "relative", Nr.set([p, f], {
               force3D: !0
            }), T = Nr.quickSetter(p, ct.a, to), A = Nr.quickSetter(f, ct.a, to))), at) {
            var bt = at.vars.onUpdate,
               Tt = at.vars.onUpdateParams;
            at.eventCallback("onUpdate", (function () {
               vt.update(0, 0, 1), bt && bt.apply(Tt || [])
            }))
         }
         vt.previous = function () {
            return yo[yo.indexOf(vt) - 1]
         }, vt.next = function () {
            return yo[yo.indexOf(vt) + 1]
         }, vt.revert = function (t) {
            var e = !1 !== t || !vt.enabled,
               r = Qr;
            e !== vt.isReverted && (e && (vt.scroll.rec || (vt.scroll.rec = Et()), R = Math.max(Et(), vt.scroll.rec || 0), L = vt.progress, N = n && n.progress()), c && [c, h, p, f].forEach((function (t) {
               return t.style.display = e ? "none" : "block"
            })), e && (Qr = 1), vt.update(e), Qr = r, K && (e ? function (t, e, n) {
               qo(n);
               var r = t._gsap;
               if (r.spacerIsNative) qo(r.spacerState);
               else if (t.parentNode === e) {
                  var i = e.parentNode;
                  i && (i.insertBefore(t, e), i.removeChild(e))
               }
            }(K, y, g) : (!ot || !vt.isActive) && Wo(K, y, ro(K), b)), vt.isReverted = e)
         }, vt.refresh = function (r, i) {
            if (!Qr && vt.enabled || i)
               if (K && r && gi) co(t, "scrollEnd", Ao);
               else {
                  Qr = 1, k && k.pause(), J && n && n.time(-.01, !0).invalidate(), vt.isReverted || vt.revert();
                  for (var o, d, v, x, E, T, A, P, S, M, B = xt(), O = wt(), I = at ? at.duration() : Ti(pt, ct), z = 0, W = 0, H = e.end, q = e.endTrigger || Q, V = e.start || (0 !== e.start && Q ? K ? "0 0" : "0 100%" : 0), X = e.pinnedContainer && yi(e.pinnedContainer), Y = Q && Math.max(0, yo.indexOf(vt)) || 0, j = Y; j--;)(T = yo[j]).end || T.refresh(0, 1) || (Qr = 1), !(A = T.pin) || A !== Q && A !== K || T.isReverted || (M || (M = []), M.unshift(T), T.revert());
                  for (Si(V) && (V = V(vt)), u = Yo(V, Q, B, ct, Et(), c, p, vt, O, yt, Dt, I, at) || (K ? -.001 : 0), Si(H) && (H = H(vt)), Pi(H) && !H.indexOf("+=") && (~H.indexOf(" ") ? H = (Pi(V) ? V.split(" ")[0] : "") + H : (z = go(H.substr(2), B), H = Pi(V) ? V : u + z, q = Q)), l = Math.max(u, Yo(H || (q ? "100% 0" : I), q, B, ct, Et() + z, h, f, vt, O, yt, Dt, I, at)) || -.001, D = l - u || (u -= .01) && .001, z = 0, j = Y; j--;)(A = (T = yo[j]).pin) && T.start - T._pinPush < u && !at && (o = T.end - T.start, A !== Q && A !== X || Mi(V) || (z += o * (1 - T.progress)), A === K && (W += o));
                  if (u += z, l += z, vt._pinPush = W, c && z && ((o = {})[ct.a] = "+=" + z, X && (o[ct.p] = "-=" + Et()), Nr.set([c, h], o)), K) o = ro(K), x = ct === no, v = Et(), w = parseFloat(C(ct.a)) + W, !I && l > 1 && ((dt ? Vr : pt).style["overflow-" + ct.a] = "scroll"), Wo(K, y, o), _ = Vo(K), d = oo(K, !0), P = Dt && Ei(pt, x ? eo : no)(), $ && ((b = [$ + ct.os2, D + W + to]).t = y, (j = $ === Qi ? so(K, ct) + D + W : 0) && b.push(ct.d, j + to), qo(b), Dt && Et(R)), Dt && ((E = {
                     top: d.top + (x ? v - u : P) + to,
                     left: d.left + (x ? P : v - u) + to,
                     boxSizing: "border-box",
                     position: "fixed"
                  })[Xi] = E["max" + $i] = Math.ceil(d.width) + to, E[Yi] = E["max" + Ji] = Math.ceil(d.height) + to, E[Ki] = E[Ki + Zi] = E[Ki + ji] = E[Ki + Gi] = E[Ki + Ui] = "0", E[Qi] = o[Qi], E[Qi + Zi] = o[Qi + Zi], E[Qi + ji] = o[Qi + ji], E[Qi + Gi] = o[Qi + Gi], E[Qi + Ui] = o[Qi + Ui], m = function (t, e, n) {
                     for (var r, i = [], o = t.length, s = n ? 8 : 0; s < o; s += 2) r = t[s], i.push(r, r in e ? e[r] : t[s + 1]);
                     return i.t = t.t, i
                  }(g, E, ot)), n ? (S = n._initted, ii(1), n.render(n.duration(), !0, !0), F = C(ct.a) - w + D + W, D !== F && m.splice(m.length - 2, 2), n.render(0, !0, !0), S || n.invalidate(), ii(0)) : F = D;
                  else if (Q && Et() && !at)
                     for (d = Q.parentNode; d && d !== Vr;) d._pinOffset && (u -= d._pinOffset, l -= d._pinOffset), d = d.parentNode;
                  M && M.forEach((function (t) {
                     return t.revert(!1)
                  })), vt.start = u, vt.end = l, s = a = Et(), at || (s < R && Et(R), vt.scroll.rec = 0), vt.revert(!1), Qr = 0, n && ht && n._initted && n.progress() !== N && n.progress(N, !0).render(n.time(), !0, !0), (L !== vt.progress || at) && (n && !ht && n.totalProgress(L, !0), vt.progress = L, vt.update(0, 0, 1)), K && $ && (y._pinOffset = Math.round(vt.progress * F)), Z && Z(vt)
               }
         }, vt.getVelocity = function () {
            return (Et() - a) / (di() - Zr) * 1e3 || 0
         }, vt.endAnimation = function () {
            Ii(vt.callbackAnimation), n && (k ? k.progress(1) : n.paused() ? ht || Ii(n, vt.direction < 0, 1) : Ii(n, n.reversed()))
         }, vt.labelToScroll = function (t) {
            return n && n.labels && (u || vt.refresh() || u) + n.labels[t] / n.duration() * D || 0
         }, vt.getTrailing = function (t) {
            var e = yo.indexOf(vt),
               n = vt.direction > 0 ? yo.slice(0, e).reverse() : yo.slice(e + 1);
            return Pi(t) ? n.filter((function (e) {
               return e.vars.preventOverlaps === t
            })) : n
         }, vt.update = function (t, e, i) {
            if (!at || i || t) {
               var o, c, h, f, d, g, v, C = vt.scroll(),
                  b = t ? 0 : (C - u) / D,
                  P = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                  B = vt.progress;
               if (e && (a = s, s = at ? Et() : C, it && (M = S, S = n && !ht ? n.totalProgress() : P)), tt && !P && K && !Qr && !hi && gi && u < C + (C - a) / (di() - Zr) * tt && (P = 1e-4), P !== B && vt.enabled) {
                  if (f = (d = (o = vt.isActive = !!P && P < 1) !== (!!B && B < 1)) || !!P != !!B, vt.direction = P > B ? 1 : -1, vt.progress = P, f && !Qr && (c = P && !B ? 0 : 1 === P ? 1 : 1 === B ? 2 : 3, ht && (h = !d && "none" !== mt[c + 1] && mt[c + 1] || mt[c], v = n && ("complete" === h || "reset" === h || h in n))), lt && d && (v || G || !n) && (Si(lt) ? lt(vt) : vt.getTrailing(lt).forEach((function (t) {
                        return t.endAnimation()
                     }))), ht || (!k || Qr || hi ? n && n.totalProgress(P, !!Qr) : (k.vars.totalProgress = P, k.invalidate().restart())), K)
                     if (t && $ && (y.style[$ + ct.os2] = E), Dt) {
                        if (f) {
                           if (g = !t && P > B && l + 1 > C && C + 1 >= Ti(pt, ct), ot)
                              if (t || !o && !g) Uo(K, y);
                              else {
                                 var O = oo(K, !0),
                                    L = C - u;
                                 Uo(K, Vr, O.top + (ct === no ? L : 0) + to, O.left + (ct === no ? 0 : L) + to)
                              } qo(o || g ? m : _), F !== D && P < 1 && o || x(w + (1 !== P || g ? 0 : F))
                        }
                     } else x(w + F * P);
                  it && !r.tween && !Qr && !hi && I.restart(!0), Y && (d || rt && P && (P < 1 || !si)) && jr(Y.targets).forEach((function (t) {
                     return t.classList[o || rt ? "add" : "remove"](Y.className)
                  })), X && !ht && !t && X(vt), f && !Qr ? (ht && (v && ("complete" === h ? n.pause().totalProgress(1) : "reset" === h ? n.restart(!0).pause() : "restart" === h ? n.restart(!0) : n[h]()), X && X(vt)), !d && si || (U && d && Li(vt, U), gt[c] && Li(vt, gt[c]), rt && (1 === P ? vt.kill(!1, 1) : gt[c] = 0), d || gt[c = 1 === P ? 1 : 3] && Li(vt, gt[c])), ut && !o && Math.abs(vt.getVelocity()) > (Mi(ut) ? ut : 2500) && (Ii(vt.callbackAnimation), k ? k.progress(1) : Ii(n, !P, 1))) : ht && X && !Qr && X(vt)
               }
               if (A) {
                  var R = at ? C / at.duration() * (at._caScrollDist || 0) : C;
                  T(R + (p._isFlipped ? 1 : 0)), A(R)
               }
               z && z(-C / at.duration() * (at._caScrollDist || 0))
            }
         }, vt.enable = function (e, n) {
            vt.enabled || (vt.enabled = !0, co(pt, "resize", wo), co(pt, "scroll", xo), Ct && co(t, "refreshInit", Ct), !1 !== e && (vt.progress = L = 0, s = a = Ft = Et()), !1 !== n && vt.refresh())
         }, vt.getTween = function (t) {
            return t && r ? r.tween : k
         }, vt.setPositions = function (t, e) {
            K && (w += t - u, F += e - t - D), vt.start = u = t, vt.end = l = e, D = e - t, vt.update()
         }, vt.disable = function (e, n) {
            if (vt.enabled && (!1 !== e && vt.revert(), vt.enabled = vt.isActive = !1, n || k && k.pause(), R = 0, i && (i.uncache = 1), Ct && ho(t, "refreshInit", Ct), I && (I.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !dt)) {
               for (var o = yo.length; o--;)
                  if (yo[o].scroller === pt && yo[o] !== vt) return;
               ho(pt, "resize", wo), ho(pt, "scroll", xo)
            }
         }, vt.kill = function (t, e) {
            vt.disable(t, e), k && k.kill(), j && delete vo[j];
            var r = yo.indexOf(vt);
            r >= 0 && yo.splice(r, 1), r === Jr && Lo > 0 && Jr--, r = 0, yo.forEach((function (t) {
               return t.scroller === vt.scroller && (r = 1)
            })), r || (vt.scroll.rec = 0), n && (n.scrollTrigger = null, t && n.render(-1), e || n.kill()), c && [c, h, p, f].forEach((function (t) {
               return t.parentNode && t.parentNode.removeChild(t)
            })), K && (i && (i.uncache = 1), r = 0, yo.forEach((function (t) {
               return t.pin === K && r++
            })), r || (i.spacer = 0))
         }, vt.enable(!1, !1), n && n.add && !D ? Nr.delayedCall(.01, (function () {
            return u || l || vt.refresh()
         })) && (D = .01) && (u = l = 0) : vt.refresh()
      } else this.update = this.refresh = this.kill = _i
   }, t.register = function (e) {
      if (!zr && (Nr = e || xi(), Ci() && window.document && (Wr = window, Hr = document, qr = Hr.documentElement, Vr = Hr.body), Nr && (jr = Nr.utils.toArray, Ur = Nr.utils.clamp, ii = Nr.core.suppressOverwrites || _i, Nr.core.globals("ScrollTrigger", t), Vr))) {
         co(Wr, "wheel", xo), Xr = [Wr, Hr, qr, Vr], co(Hr, "scroll", xo);
         var n, r = Vr.style,
            i = r.borderTopStyle;
         r.borderTopStyle = "solid", n = oo(Vr), no.m = Math.round(n.top + no.sc()) || 0, eo.m = Math.round(n.left + eo.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), Gr = setInterval(Co, 200), Nr.delayedCall(.5, (function () {
            return hi = 0
         })), co(Hr, "touchcancel", _i), co(Vr, "touchstart", _i), lo(co, Hr, "pointerdown,touchstart,mousedown", (function () {
            return Kr = 1
         })), lo(co, Hr, "pointerup,touchend,mouseup", (function () {
            return Kr = 0
         })), $r = Nr.utils.checkPrefix("transform"), zo.push($r), zr = di(), Yr = Nr.delayedCall(.2, Oo).pause(), ni = [Hr, "visibilitychange", function () {
            var t = Wr.innerWidth,
               e = Wr.innerHeight;
            Hr.hidden ? (ti = t, ei = e) : ti === t && ei === e || wo()
         }, Hr, "DOMContentLoaded", Oo, Wr, "load", function () {
            return gi || Oo()
         }, Wr, "resize", wo], Ai(co)
      }
      return zr
   }, t.defaults = function (t) {
      if (t)
         for (var e in t) fo[e] = t[e];
      return fo
   }, t.kill = function () {
      mi = 0, yo.slice(0).forEach((function (t) {
         return t.kill(1)
      }))
   }, t.config = function (t) {
      "limitCallbacks" in t && (si = !!t.limitCallbacks);
      var e = t.syncInterval;
      e && clearInterval(Gr) || (Gr = e) && setInterval(Co, e), "autoRefreshEvents" in t && (Ai(ho) || Ai(co, t.autoRefreshEvents || "none"), oi = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
   }, t.scrollerProxy = function (t, e) {
      var n = yi(t),
         r = fi.indexOf(n),
         i = wi(n);
      ~r && fi.splice(r, i ? 6 : 2), e && (i ? pi.unshift(Wr, e, Vr, e, qr, e) : pi.unshift(n, e))
   }, t.matchMedia = function (t) {
      var e, n, r, i, o;
      for (n in t) r = bo.indexOf(n), i = t[n], ai = n, "all" === n ? i() : (e = Wr.matchMedia(n)) && (e.matches && (o = i()), ~r ? (bo[r + 1] = Oi(bo[r + 1], i), bo[r + 2] = Oi(bo[r + 2], o)) : (r = bo.length, bo.push(n, i, o), e.addListener ? e.addListener(To) : e.addEventListener("change", To)), bo[r + 3] = e.matches), ai = 0;
      return bo
   }, t.clearMatchMedia = function (t) {
      t || (bo.length = 0), (t = bo.indexOf(t)) >= 0 && bo.splice(t, 4)
   }, t.isInViewport = function (t, e, n) {
      var r = (Pi(t) ? yi(t) : t).getBoundingClientRect(),
         i = r[n ? Xi : Yi] * e || 0;
      return n ? r.right - i > 0 && r.left + i < Wr.innerWidth : r.bottom - i > 0 && r.top + i < Wr.innerHeight
   }, t.positionInViewport = function (t, e, n) {
      Pi(t) && (t = yi(t));
      var r = t.getBoundingClientRect(),
         i = r[n ? Xi : Yi],
         o = null == e ? i / 2 : e in Do ? Do[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
      return n ? (r.left + o) / Wr.innerWidth : (r.top + o) / Wr.innerHeight
   }, t
}();
Go.version = "3.9.1", Go.saveStyles = function (t) {
   return t ? jr(t).forEach((function (t) {
      if (t && t.style) {
         var e = So.indexOf(t);
         e >= 0 && So.splice(e, 5), So.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Nr.core.getCache(t), ai)
      }
   })) : So
}, Go.revert = function (t, e) {
   return ko(!t, e)
}, Go.create = function (t, e) {
   return new Go(t, e)
}, Go.refresh = function (t) {
   return t ? wo() : (zr || Go.register()) && Oo(!0)
}, Go.update = Ro, Go.clearScrollMemory = Bo, Go.maxScroll = function (t, e) {
   return Ti(t, e ? eo : no)
}, Go.getScrollFunc = function (t, e) {
   return Ei(yi(t), e ? eo : no)
}, Go.getById = function (t) {
   return vo[t]
}, Go.getAll = function () {
   return yo.slice(0)
}, Go.isScrolling = function () {
   return !!gi
}, Go.snapDirectional = uo, Go.addEventListener = function (t, e) {
   var n = Fo[t] || (Fo[t] = []);
   ~n.indexOf(e) || n.push(e)
}, Go.removeEventListener = function (t, e) {
   var n = Fo[t],
      r = n && n.indexOf(e);
   r >= 0 && n.splice(r, 1)
}, Go.batch = function (t, e) {
   var n, r = [],
      i = {},
      o = e.interval || .016,
      s = e.batchMax || 1e9,
      a = function (t, e) {
         var n = [],
            r = [],
            i = Nr.delayedCall(o, (function () {
               e(n, r), n = [], r = []
            })).pause();
         return function (t) {
            n.length || i.restart(!0), n.push(t.trigger), r.push(t), s <= n.length && i.progress(1)
         }
      };
   for (n in e) i[n] = "on" === n.substr(0, 2) && Si(e[n]) && "onRefreshInit" !== n ? a(0, e[n]) : e[n];
   return Si(s) && (s = s(), co(Go, "refresh", (function () {
      return s = e.batchMax()
   }))), jr(t).forEach((function (t) {
      var e = {};
      for (n in i) e[n] = i[n];
      e.trigger = t, r.push(Go.create(e))
   })), r
}, Go.sort = function (t) {
   return yo.sort(t || function (t, e) {
      return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
   })
}, xi() && Nr.registerPlugin(Go);
/*!
 * ScrollToPlugin 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Qo, Ko, $o, Jo, ts, es, ns, rs = function () {
      return "undefined" != typeof window
   },
   is = function () {
      return Qo || rs() && (Qo = window.gsap) && Qo.registerPlugin && Qo
   },
   os = function (t) {
      return "string" == typeof t
   },
   ss = function (t) {
      return "function" == typeof t
   },
   as = function (t, e) {
      var n = "x" === e ? "Width" : "Height",
         r = "scroll" + n,
         i = "client" + n;
      return t === $o || t === Jo || t === ts ? Math.max(Jo[r], ts[r]) - ($o["inner" + n] || Jo[i] || ts[i]) : t[r] - t["offset" + n]
   },
   us = function (t, e) {
      var n = "scroll" + ("x" === e ? "Left" : "Top");
      return t === $o && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != Jo[n] ? Jo : ts),
         function () {
            return t[n]
         }
   },
   ls = function (t, e) {
      if (!(t = es(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
         x: 0,
         y: 0
      };
      var n = t.getBoundingClientRect(),
         r = !e || e === $o || e === ts,
         i = r ? {
            top: Jo.clientTop - ($o.pageYOffset || Jo.scrollTop || ts.scrollTop || 0),
            left: Jo.clientLeft - ($o.pageXOffset || Jo.scrollLeft || ts.scrollLeft || 0)
         } : e.getBoundingClientRect(),
         o = {
            x: n.left - i.left,
            y: n.top - i.top
         };
      return !r && e && (o.x += us(e, "x")(), o.y += us(e, "y")()), o
   },
   cs = function (t, e, n, r, i) {
      return isNaN(t) || "object" == typeof t ? os(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i : "max" === t ? as(e, n) - i : Math.min(as(e, n), ls(t, e)[n] - i) : parseFloat(t) - i
   },
   hs = function () {
      Qo = is(), rs() && Qo && document.body && ($o = window, ts = document.body, Jo = document.documentElement, es = Qo.utils.toArray, Qo.config({
         autoKillThreshold: 7
      }), ns = Qo.config(), Ko = 1)
   },
   ps = {
      version: "3.9.1",
      name: "scrollTo",
      rawVars: 1,
      register: function (t) {
         Qo = t, hs()
      },
      init: function (t, e, n, r, i) {
         Ko || hs();
         var o = this,
            s = Qo.getProperty(t, "scrollSnapType");
         o.isWin = t === $o, o.target = t, o.tween = n, e = function (t, e, n, r) {
            if (ss(t) && (t = t(e, n, r)), "object" != typeof t) return os(t) && "max" !== t && "=" !== t.charAt(1) ? {
               x: t,
               y: t
            } : {
               y: t
            };
            if (t.nodeType) return {
               y: t,
               x: t
            };
            var i, o = {};
            for (i in t) o[i] = "onAutoKill" !== i && ss(t[i]) ? t[i](e, n, r) : t[i];
            return o
         }(e, r, t, i), o.vars = e, o.autoKill = !!e.autoKill, o.getX = us(t, "x"), o.getY = us(t, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), s && "none" !== s && (o.snap = 1, o.snapInline = t.style.scrollSnapType, t.style.scrollSnapType = "none"), null != e.x ? (o.add(o, "x", o.x, cs(e.x, t, "x", o.x, e.offsetX || 0), r, i), o._props.push("scrollTo_x")) : o.skipX = 1, null != e.y ? (o.add(o, "y", o.y, cs(e.y, t, "y", o.y, e.offsetY || 0), r, i), o._props.push("scrollTo_y")) : o.skipY = 1
      },
      render: function (t, e) {
         for (var n, r, i, o, s, a = e._pt, u = e.target, l = e.tween, c = e.autoKill, h = e.xPrev, p = e.yPrev, f = e.isWin, d = e.snap, D = e.snapInline; a;) a.r(t, a.d), a = a._next;
         n = f || !e.skipX ? e.getX() : h, i = (r = f || !e.skipY ? e.getY() : p) - p, o = n - h, s = ns.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), c && (!e.skipX && (o > s || o < -s) && n < as(u, "x") && (e.skipX = 1), !e.skipY && (i > s || i < -s) && r < as(u, "y") && (e.skipY = 1), e.skipX && e.skipY && (l.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))), f ? $o.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (u.scrollTop = e.y), e.skipX || (u.scrollLeft = e.x)), !d || 1 !== t && 0 !== t || (r = u.scrollTop, n = u.scrollLeft, D ? u.style.scrollSnapType = D : u.style.removeProperty("scroll-snap-type"), u.scrollTop = r + 1, u.scrollLeft = n + 1, u.scrollTop = r, u.scrollLeft = n), e.xPrev = e.x, e.yPrev = e.y
      },
      kill: function (t) {
         var e = "scrollTo" === t;
         (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
      }
   };
ps.max = as, ps.getOffset = ls, ps.buildGetter = us, is() && Qo.registerPlugin(ps);
/*!
 * EasePack 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var fs, ds, Ds = function () {
      return fs || "undefined" != typeof window && (fs = window.gsap) && fs.registerPlugin && fs
   },
   gs = function (t, e) {
      return !!(void 0 === t ? e : t && !~(t + "").indexOf("false"))
   },
   ms = function (t) {
      if (fs = t || Ds()) {
         ds = fs.registerEase;
         var e, n = fs.parseEase(),
            r = function (t) {
               return function (e) {
                  var n = .5 + e / 2;
                  t.config = function (e) {
                     return t(2 * (1 - e) * e * n + e * e)
                  }
               }
            };
         for (e in n) n[e].config || r(n[e]);
         for (e in ds("slow", xs), ds("expoScale", ws), ds("rough", Fs), Es) "version" !== e && fs.core.globals(e, Es[e]);
         1
      }
   },
   _s = function (t, e, n) {
      var r = (t = Math.min(1, t || .7)) < 1 ? e || 0 === e ? e : .7 : 0,
         i = (1 - t) / 2,
         o = i + t,
         s = gs(n);
      return function (t) {
         var e = t + (.5 - t) * r;
         return t < i ? s ? 1 - (t = 1 - t / i) * t : e - (t = 1 - t / i) * t * t * t * e : t > o ? s ? 1 === t ? 0 : 1 - (t = (t - o) / i) * t : e + (t - e) * (t = (t - o) / i) * t * t * t : s ? 1 : e
      }
   },
   ys = function (t, e, n) {
      var r = Math.log(e / t),
         i = e - t;
      return n && (n = fs.parseEase(n)),
         function (e) {
            return (t * Math.exp(r * (n ? n(e) : e)) - t) / i
         }
   },
   vs = function (t, e, n) {
      this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
   },
   Cs = function (t) {
      "object" != typeof t && (t = {
         points: +t || 20
      });
      for (var e, n, r, i, o, s, a, u = t.taper || "none", l = [], c = 0, h = 0 | (+t.points || 20), p = h, f = gs(t.randomize, !0), d = gs(t.clamp), D = fs ? fs.parseEase(t.template) : 0, g = .4 * (+t.strength || 1); --p > -1;) e = f ? Math.random() : 1 / h * p, n = D ? D(e) : e, r = "none" === u ? g : "out" === u ? (i = 1 - e) * i * g : "in" === u ? e * e * g : e < .5 ? (i = 2 * e) * i * .5 * g : (i = 2 * (1 - e)) * i * .5 * g, f ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, d && (n > 1 ? n = 1 : n < 0 && (n = 0)), l[c++] = {
         x: e,
         y: n
      };
      for (l.sort((function (t, e) {
            return t.x - e.x
         })), s = new vs(1, 1, null), p = h; p--;) o = l[p], s = new vs(o.x, o.y, s);
      return a = new vs(0, 0, s.t ? s : s.next),
         function (t) {
            var e = a;
            if (t > e.t) {
               for (; e.next && t >= e.t;) e = e.next;
               e = e.prev
            } else
               for (; e.prev && t <= e.t;) e = e.prev;
            return a = e, e.v + (t - e.t) / e.gap * e.c
         }
   },
   xs = _s(.7);
xs.ease = xs, xs.config = _s;
var ws = ys(1, 2);
ws.config = ys;
var Fs = Cs();
Fs.ease = Fs, Fs.config = Cs;
var Es = {
   SlowMo: xs,
   RoughEase: Fs,
   ExpoScaleEase: ws
};
for (var bs in Es) Es[bs].register = ms, Es[bs].version = "3.9.1";
Ds() && fs.registerPlugin(xs);
/*!
 * strings: 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Ts = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function As(t) {
   var e = t.nodeType,
      n = "";
   if (1 === e || 9 === e || 11 === e) {
      if ("string" == typeof t.textContent) return t.textContent;
      for (t = t.firstChild; t; t = t.nextSibling) n += As(t)
   } else if (3 === e || 4 === e) return t.nodeValue;
   return n
}
var Ps, Ss, Ms, ks = /(?:\r|\n|\t\t)/g,
   Bs = /(?:\s\s+)/g,
   Os = function (t) {
      return Ss.getComputedStyle(t)
   },
   Is = Array.isArray,
   Ls = [].slice,
   Rs = function (t, e) {
      var n;
      return Is(t) ? t : "string" == (n = typeof t) && !e && t ? Ls.call(Ps.querySelectorAll(t), 0) : t && "object" === n && "length" in t ? Ls.call(t, 0) : t ? [t] : []
   },
   Ns = function (t) {
      return "absolute" === t.position || !0 === t.absolute
   },
   zs = function (t, e) {
      for (var n, r = e.length; --r > -1;)
         if (n = e[r], t.substr(0, n.length) === n) return n.length
   },
   Ws = function (t, e) {
      void 0 === t && (t = "");
      var n = ~t.indexOf("++"),
         r = 1;
      return n && (t = t.split("++").join("")),
         function () {
            return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
         }
   },
   Hs = function t(e, n, r) {
      var i = e.nodeType;
      if (1 === i || 9 === i || 11 === i)
         for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
      else 3 !== i && 4 !== i || (e.nodeValue = e.nodeValue.split(n).join(r))
   },
   qs = function (t, e) {
      for (var n = e.length; --n > -1;) t.push(e[n])
   },
   Vs = function (t, e, n) {
      for (var r; t && t !== e;) {
         if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === n;
         t = t.parentNode || t._parent
      }
   },
   Xs = function t(e) {
      var n, r, i = Rs(e.childNodes),
         o = i.length;
      for (n = 0; n < o; n++)(r = i[n])._isSplit ? t(r) : n && r.previousSibling && 3 === r.previousSibling.nodeType ? (r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue, e.removeChild(r)) : 3 !== r.nodeType && (e.insertBefore(r.firstChild, r), e.removeChild(r))
   },
   Ys = function (t, e) {
      return parseFloat(e[t]) || 0
   },
   js = function (t, e, n, r, i, o, s) {
      var a, u, l, c, h, p, f, d, D, g, m, _, y = Os(t),
         v = Ys("paddingLeft", y),
         C = -999,
         x = Ys("borderBottomWidth", y) + Ys("borderTopWidth", y),
         w = Ys("borderLeftWidth", y) + Ys("borderRightWidth", y),
         F = Ys("paddingTop", y) + Ys("paddingBottom", y),
         E = Ys("paddingLeft", y) + Ys("paddingRight", y),
         b = Ys("fontSize", y) * (e.lineThreshold || .2),
         T = y.textAlign,
         A = [],
         P = [],
         S = [],
         M = e.wordDelimiter || " ",
         k = e.tag ? e.tag : e.span ? "span" : "div",
         B = e.type || e.split || "chars,words,lines",
         O = i && ~B.indexOf("lines") ? [] : null,
         I = ~B.indexOf("words"),
         L = ~B.indexOf("chars"),
         R = Ns(e),
         N = e.linesClass,
         z = ~(N || "").indexOf("++"),
         W = [],
         H = "flex" === y.display,
         q = t.style.display;
      for (z && (N = N.split("++").join("")), H && (t.style.display = "block"), l = (u = t.getElementsByTagName("*")).length, h = [], a = 0; a < l; a++) h[a] = u[a];
      if (O || R)
         for (a = 0; a < l; a++)((p = (c = h[a]).parentNode === t) || R || L && !I) && (_ = c.offsetTop, O && p && Math.abs(_ - C) > b && ("BR" !== c.nodeName || 0 === a) && (f = [], O.push(f), C = _), R && (c._x = c.offsetLeft, c._y = _, c._w = c.offsetWidth, c._h = c.offsetHeight), O && ((c._isSplit && p || !L && p || I && p || !I && c.parentNode.parentNode === t && !c.parentNode._isSplit) && (f.push(c), c._x -= v, Vs(c, t, M) && (c._wordEnd = !0)), "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === a) && O.push([])));
      for (a = 0; a < l; a++)
         if (p = (c = h[a]).parentNode === t, "BR" !== c.nodeName)
            if (R && (D = c.style, I || p || (c._x += c.parentNode._x, c._y += c.parentNode._y), D.left = c._x + "px", D.top = c._y + "px", D.position = "absolute", D.display = "block", D.width = c._w + 1 + "px", D.height = c._h + "px"), !I && L)
               if (c._isSplit)
                  for (c._next = u = c.nextSibling, c.parentNode.appendChild(c); u && 3 === u.nodeType && " " === u.textContent;) c._next = u.nextSibling, c.parentNode.appendChild(u), u = u.nextSibling;
               else c.parentNode._isSplit ? (c._parent = c.parentNode, !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0), c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && W.push(c.nextSibling), c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling, c.parentNode.removeChild(c), h.splice(a--, 1), l--) : p || (_ = !c.nextSibling && Vs(c.parentNode, t, M), c.parentNode._parent && c.parentNode._parent.appendChild(c), _ && c.parentNode.appendChild(Ps.createTextNode(" ")), "span" === k && (c.style.display = "inline"), A.push(c));
      else c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? P.push(c) : L && !c._isSplit && ("span" === k && (c.style.display = "inline"), A.push(c));
      else O || R ? (c.parentNode && c.parentNode.removeChild(c), h.splice(a--, 1), l--) : I || t.appendChild(c);
      for (a = W.length; --a > -1;) W[a].parentNode.removeChild(W[a]);
      if (O) {
         for (R && (g = Ps.createElement(k), t.appendChild(g), m = g.offsetWidth + "px", _ = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), D = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
         for (d = " " === M && (!R || !I && !L), a = 0; a < O.length; a++) {
            for (f = O[a], (g = Ps.createElement(k)).style.cssText = "display:block;text-align:" + T + ";position:" + (R ? "absolute;" : "relative;"), N && (g.className = N + (z ? a + 1 : "")), S.push(g), l = f.length, u = 0; u < l; u++) "BR" !== f[u].nodeName && (c = f[u], g.appendChild(c), d && c._wordEnd && g.appendChild(Ps.createTextNode(" ")), R && (0 === u && (g.style.top = c._y + "px", g.style.left = v + _ + "px"), c.style.top = "0px", _ && (c.style.left = c._x - _ + "px")));
            0 === l ? g.innerHTML = " " : I || L || (Xs(g), Hs(g, String.fromCharCode(160), " ")), R && (g.style.width = m, g.style.height = c._h + "px"), t.appendChild(g)
         }
         t.style.cssText = D
      }
      R && (s > t.clientHeight && (t.style.height = s - F + "px", t.clientHeight < s && (t.style.height = s + x + "px")), o > t.clientWidth && (t.style.width = o - E + "px", t.clientWidth < o && (t.style.width = o + w + "px"))), H && (q ? t.style.display = q : t.style.removeProperty("display")), qs(n, A), I && qs(r, P), qs(i, S)
   },
   Us = function (t, e, n, r) {
      var i, o, s, a, u, l, c, h, p = e.tag ? e.tag : e.span ? "span" : "div",
         f = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
         d = Ns(e),
         D = e.wordDelimiter || " ",
         g = " " !== D ? "" : d ? "­ " : " ",
         m = "</" + p + ">",
         _ = 1,
         y = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : zs : null,
         v = Ps.createElement("div"),
         C = t.parentNode;
      for (C.insertBefore(v, t), v.textContent = t.nodeValue, C.removeChild(t), c = -1 !== (i = As(t = v)).indexOf("<"), !1 !== e.reduceWhiteSpace && (i = i.replace(Bs, " ").replace(ks, "")), c && (i = i.split("<").join("{{LT}}")), u = i.length, o = (" " === i.charAt(0) ? g : "") + n(), s = 0; s < u; s++)
         if (l = i.charAt(s), y && (h = y(i.substr(s), e.specialChars))) l = i.substr(s, h || 1), o += f && " " !== l ? r() + l + "</" + p + ">" : l, s += h - 1;
         else if (l === D && i.charAt(s - 1) !== D && s) {
         for (o += _ ? m : "", _ = 0; i.charAt(s + 1) === D;) o += g, s++;
         s === u - 1 ? o += g : ")" !== i.charAt(s + 1) && (o += g + n(), _ = 1)
      } else "{" === l && "{{LT}}" === i.substr(s, 6) ? (o += f ? r() + "{{LT}}</" + p + ">" : "{{LT}}", s += 5) : l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || i.charCodeAt(s + 1) >= 65024 && i.charCodeAt(s + 1) <= 65039 ? (a = ((i.substr(s, 12).split(Ts) || [])[1] || "").length || 2, o += f && " " !== l ? r() + i.substr(s, a) + "</" + p + ">" : i.substr(s, a), s += a - 1) : o += f && " " !== l ? r() + l + "</" + p + ">" : l;
      t.outerHTML = o + (_ ? m : ""), c && Hs(C, "{{LT}}", "<")
   },
   Zs = function t(e, n, r, i) {
      var o, s, a = Rs(e.childNodes),
         u = a.length,
         l = Ns(n);
      if (3 !== e.nodeType || u > 1) {
         for (n.absolute = !1, o = 0; o < u; o++)(s = a[o])._next = s._isFirst = s._parent = s._wordEnd = null, (3 !== s.nodeType || /\S+/.test(s.nodeValue)) && (l && 3 !== s.nodeType && "inline" === Os(s).display && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, t(s, n, r, i));
         return n.absolute = l, void(e._isSplit = !0)
      }
      Us(e, n, r, i)
   },
   Gs = function () {
      function t(t, e) {
         Ms || (Ps = document, Ss = window, Ms = 1), this.elements = Rs(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
      }
      var e = t.prototype;
      return e.split = function (t) {
         this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
         for (var e, n, r, i = this.elements.length, o = t.tag ? t.tag : t.span ? "span" : "div", s = Ws(t.wordsClass, o), a = Ws(t.charsClass, o); --i > -1;) r = this.elements[i], this._originals[i] = r.innerHTML, e = r.clientHeight, n = r.clientWidth, Zs(r, t, s, a), js(r, t, this.chars, this.words, this.lines, n, e);
         return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
      }, e.revert = function () {
         var t = this._originals;
         if (!t) throw "revert() call wasn't scoped properly.";
         return this.elements.forEach((function (e, n) {
            return e.innerHTML = t[n]
         })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
      }, t.create = function (e, n) {
         return new t(e, n)
      }, t
   }();
Gs.version = "3.9.1";
/*!
 * paths 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Qs = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
   Ks = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
   $s = Math.PI / 180,
   Js = (Math.PI, Math.sin),
   ta = Math.cos,
   ea = Math.abs,
   na = Math.sqrt,
   ra = (Math.atan2, function (t) {
      return "number" == typeof t
   }),
   ia = 1e5,
   oa = function (t) {
      return Math.round(t * ia) / ia || 0
   };

function sa(t, e, n, r, i, o, s, a, u) {
   if (t !== a || e !== u) {
      n = ea(n), r = ea(r);
      var l = i % 360 * $s,
         c = ta(l),
         h = Js(l),
         p = Math.PI,
         f = 2 * p,
         d = (t - a) / 2,
         D = (e - u) / 2,
         g = c * d + h * D,
         m = -h * d + c * D,
         _ = g * g,
         y = m * m,
         v = _ / (n * n) + y / (r * r);
      v > 1 && (n = na(v) * n, r = na(v) * r);
      var C = n * n,
         x = r * r,
         w = (C * x - C * y - x * _) / (C * y + x * _);
      w < 0 && (w = 0);
      var F = (o === s ? -1 : 1) * na(w),
         E = F * (n * m / r),
         b = F * (-r * g / n),
         T = (t + a) / 2 + (c * E - h * b),
         A = (e + u) / 2 + (h * E + c * b),
         P = (g - E) / n,
         S = (m - b) / r,
         M = (-g - E) / n,
         k = (-m - b) / r,
         B = P * P + S * S,
         O = (S < 0 ? -1 : 1) * Math.acos(P / na(B)),
         I = (P * k - S * M < 0 ? -1 : 1) * Math.acos((P * M + S * k) / na(B * (M * M + k * k)));
      isNaN(I) && (I = p), !s && I > 0 ? I -= f : s && I < 0 && (I += f), O %= f, I %= f;
      var L, R = Math.ceil(ea(I) / (f / 4)),
         N = [],
         z = I / R,
         W = 4 / 3 * Js(z / 2) / (1 + ta(z / 2)),
         H = c * n,
         q = h * n,
         V = h * -r,
         X = c * r;
      for (L = 0; L < R; L++) g = ta(i = O + L * z), m = Js(i), P = ta(i += z), S = Js(i), N.push(g - W * m, m + W * g, P + W * S, S - W * P, P, S);
      for (L = 0; L < N.length; L += 2) g = N[L], m = N[L + 1], N[L] = g * H + m * V + T, N[L + 1] = g * q + m * X + A;
      return N[L - 2] = a, N[L - 1] = u, N
   }
}

function aa(t) {
   var e, n, r, i, o, s, a, u, l, c, h, p, f, d, D, g = (t + "").replace(Ks, (function (t) {
         var e = +t;
         return e < 1e-4 && e > -1e-4 ? 0 : e
      })).match(Qs) || [],
      m = [],
      _ = 0,
      y = 0,
      v = 2 / 3,
      C = g.length,
      x = 0,
      w = "ERROR: malformed path: " + t,
      F = function (t, e, n, r) {
         c = (n - t) / 3, h = (r - e) / 3, a.push(t + c, e + h, n - c, r - h, n, r)
      };
   if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(w), m;
   for (e = 0; e < C; e++)
      if (f = o, isNaN(g[e]) ? s = (o = g[e].toUpperCase()) !== g[e] : e--, r = +g[e + 1], i = +g[e + 2], s && (r += _, i += y), e || (u = r, l = i), "M" === o) a && (a.length < 8 ? m.length -= 1 : x += a.length), _ = u = r, y = l = i, a = [r, i], m.push(a), e += 2, o = "L";
      else if ("C" === o) a || (a = [0, 0]), s || (_ = y = 0), a.push(r, i, _ + 1 * g[e + 3], y + 1 * g[e + 4], _ += 1 * g[e + 5], y += 1 * g[e + 6]), e += 6;
   else if ("S" === o) c = _, h = y, "C" !== f && "S" !== f || (c += _ - a[a.length - 4], h += y - a[a.length - 3]), s || (_ = y = 0), a.push(c, h, r, i, _ += 1 * g[e + 3], y += 1 * g[e + 4]), e += 4;
   else if ("Q" === o) c = _ + (r - _) * v, h = y + (i - y) * v, s || (_ = y = 0), _ += 1 * g[e + 3], y += 1 * g[e + 4], a.push(c, h, _ + (r - _) * v, y + (i - y) * v, _, y), e += 4;
   else if ("T" === o) c = _ - a[a.length - 4], h = y - a[a.length - 3], a.push(_ + c, y + h, r + (_ + 1.5 * c - r) * v, i + (y + 1.5 * h - i) * v, _ = r, y = i), e += 2;
   else if ("H" === o) F(_, y, _ = r, y), e += 1;
   else if ("V" === o) F(_, y, _, y = r + (s ? y - _ : 0)), e += 1;
   else if ("L" === o || "Z" === o) "Z" === o && (r = u, i = l, a.closed = !0), ("L" === o || ea(_ - r) > .5 || ea(y - i) > .5) && (F(_, y, r, i), "L" === o && (e += 2)), _ = r, y = i;
   else if ("A" === o) {
      if (d = g[e + 4], D = g[e + 5], c = g[e + 6], h = g[e + 7], n = 7, d.length > 1 && (d.length < 3 ? (h = c, c = D, n--) : (h = D, c = d.substr(2), n -= 2), D = d.charAt(1), d = d.charAt(0)), p = sa(_, y, +g[e + 1], +g[e + 2], +g[e + 3], +d, +D, (s ? _ : 0) + 1 * c, (s ? y : 0) + 1 * h), e += n, p)
         for (n = 0; n < p.length; n++) a.push(p[n]);
      _ = a[a.length - 2], y = a[a.length - 1]
   } else console.log(w);
   return (e = a.length) < 6 ? (m.pop(), e = 0) : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0), m.totalPoints = x + e, m
}

function ua(t) {
   ra(t[0]) && (t = [t]);
   var e, n, r, i, o = "",
      s = t.length;
   for (n = 0; n < s; n++) {
      for (i = t[n], o += "M" + oa(i[0]) + "," + oa(i[1]) + " C", e = i.length, r = 2; r < e; r++) o += oa(i[r++]) + "," + oa(i[r++]) + " " + oa(i[r++]) + "," + oa(i[r++]) + " " + oa(i[r++]) + "," + oa(i[r]) + " ";
      i.closed && (o += "z")
   }
   return o
}
var la, ca, ha = function () {
      return la || "undefined" != typeof window && (la = window.gsap) && la.registerPlugin && la
   },
   pa = function () {
      (la = ha()) ? (la.registerEase("_CE", ma.create), ca = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
   },
   fa = function (t) {
      return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
   },
   da = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
   Da = /[cLlsSaAhHvVtTqQ]/g,
   ga = function t(e, n, r, i, o, s, a, u, l, c, h) {
      var p, f = (e + r) / 2,
         d = (n + i) / 2,
         D = (r + o) / 2,
         g = (i + s) / 2,
         m = (o + a) / 2,
         _ = (s + u) / 2,
         y = (f + D) / 2,
         v = (d + g) / 2,
         C = (D + m) / 2,
         x = (g + _) / 2,
         w = (y + C) / 2,
         F = (v + x) / 2,
         E = a - e,
         b = u - n,
         T = Math.abs((r - a) * b - (i - u) * E),
         A = Math.abs((o - a) * b - (s - u) * E);
      return c || (c = [{
         x: e,
         y: n
      }, {
         x: a,
         y: u
      }], h = 1), c.splice(h || c.length - 1, 0, {
         x: w,
         y: F
      }), (T + A) * (T + A) > l * (E * E + b * b) && (p = c.length, t(e, n, f, d, y, v, w, F, l, c, h), t(w, F, C, x, m, _, a, u, l, c, h + 1 + (c.length - p))), c
   },
   ma = function () {
      function t(t, e, n) {
         ca || pa(), this.id = t, this.setData(e, n)
      }
      var e = t.prototype;
      return e.setData = function (t, e) {
         e = e || {};
         var n, r, i, o, s, a, u, l, c, h = (t = t || "0,0,1,1").match(da),
            p = 1,
            f = [],
            d = [],
            D = e.precision || 1,
            g = D <= 1;
         if (this.data = t, (Da.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (h = aa(t)[0]), 4 === (n = h.length)) h.unshift(0, 0), h.push(1, 1), n = 8;
         else if ((n - 2) % 6) throw "Invalid CustomEase";
         for (0 == +h[0] && 1 == +h[n - 2] || function (t, e, n) {
               n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
               var r, i = -1 * +t[0],
                  o = -n,
                  s = t.length,
                  a = 1 / (+t[s - 2] + i),
                  u = -e || (Math.abs(+t[s - 1] - +t[1]) < .01 * (+t[s - 2] - +t[0]) ? function (t) {
                     var e, n = t.length,
                        r = 1e20;
                     for (e = 1; e < n; e += 6) + t[e] < r && (r = +t[e]);
                     return r
                  }(t) + o : +t[s - 1] + o);
               for (u = u ? 1 / u : -a, r = 0; r < s; r += 2) t[r] = (+t[r] + i) * a, t[r + 1] = (+t[r + 1] + o) * u
            }(h, e.height, e.originY), this.segment = h, o = 2; o < n; o += 6) r = {
            x: +h[o - 2],
            y: +h[o - 1]
         }, i = {
            x: +h[o + 4],
            y: +h[o + 5]
         }, f.push(r, i), ga(r.x, r.y, +h[o], +h[o + 1], +h[o + 2], +h[o + 3], i.x, i.y, 1 / (2e5 * D), f, f.length - 1);
         for (n = f.length, o = 0; o < n; o++) u = f[o], l = f[o - 1] || u, (u.x > l.x || l.y !== u.y && l.x === u.x || u === l) && u.x <= 1 ? (l.cx = u.x - l.x, l.cy = u.y - l.y, l.n = u, l.nx = u.x, g && o > 1 && Math.abs(l.cy / l.cx - f[o - 2].cy / f[o - 2].cx) > 2 && (g = 0), l.cx < p && (l.cx ? p = l.cx : (l.cx = .001, o === n - 1 && (l.x -= .001, p = Math.min(p, .001), g = 0)))) : (f.splice(o--, 1), n--);
         if (s = 1 / (n = 1 / p + 1 | 0), a = 0, u = f[0], g) {
            for (o = 0; o < n; o++) c = o * s, u.nx < c && (u = f[++a]), r = u.y + (c - u.x) / u.cx * u.cy, d[o] = {
               x: c,
               cx: s,
               y: r,
               cy: 0,
               nx: 9
            }, o && (d[o - 1].cy = r - d[o - 1].y);
            d[n - 1].cy = f[f.length - 1].y - r
         } else {
            for (o = 0; o < n; o++) u.nx < o * s && (u = f[++a]), d[o] = u;
            a < f.length - 1 && (d[o - 1] = f[f.length - 2])
         }
         return this.ease = function (t) {
            var e = d[t * n | 0] || d[n - 1];
            return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
         }, this.ease.custom = this, this.id && la && la.registerEase(this.id, this.ease), this
      }, e.getSVGData = function (e) {
         return t.getSVGData(this, e)
      }, t.create = function (e, n, r) {
         return new t(e, n, r).ease
      }, t.register = function (t) {
         la = t, pa()
      }, t.get = function (t) {
         return la.parseEase(t)
      }, t.getSVGData = function (e, n) {
         var r, i, o, s, a, u, l, c, h, p, f = (n = n || {}).width || 100,
            d = n.height || 100,
            D = n.x || 0,
            g = (n.y || 0) + d,
            m = la.utils.toArray(n.path)[0];
         if (n.invert && (d = -d, g = 0), "string" == typeof e && (e = la.parseEase(e)), e.custom && (e = e.custom), e instanceof t) r = ua(function (t, e, n, r, i, o, s) {
            for (var a, u, l, c, h, p = t.length; --p > -1;)
               for (u = (a = t[p]).length, l = 0; l < u; l += 2) c = a[l], h = a[l + 1], a[l] = c * e + h * r + o, a[l + 1] = c * n + h * i + s;
            return t._dirty = 1, t
         }([e.segment], f, 0, 0, -d, D, g));
         else {
            for (r = [D, g], s = 1 / (l = Math.max(5, 200 * (n.precision || 1))), c = 5 / (l += 2), h = fa(D + s * f), i = ((p = fa(g + e(s) * -d)) - g) / (h - D), o = 2; o < l; o++) a = fa(D + o * s * f), u = fa(g + e(o * s) * -d), (Math.abs((u - p) / (a - h) - i) > c || o === l - 1) && (r.push(h, p), i = (u - p) / (a - h)), h = a, p = u;
            r = "M" + r.join(",")
         }
         return m && m.setAttribute("d", r), r
      }, t
   }();
ha() && la.registerPlugin(ma), ma.version = "3.9.1";
var _a = (t, e, n) => {
      t = ci.utils.toArray(t)[0], n = n || 1, ci.set(e || t.parentNode, {
         overflow: "hidden",
         position: "fixed",
         height: "100%",
         width: "100%",
         top: 0,
         left: 0,
         right: 0,
         bottom: 0
      }), ci.set(t, {
         overflow: "visible",
         width: "100%"
      });
      let r, i = ci.getProperty(t),
         o = ci.quickSetter(t, "y", "px"),
         s = Go.getScrollFunc(window),
         a = () => t.style.overflow = "visible",
         u = t => {
            let e = t.getTween ? t.getTween() : ci.getTweensOf(t.animation)[0];
            e && e.kill(), t.animation.progress(t.progress)
         },
         l = t.clientHeight;

      function c() {
         return l = t.clientHeight, t.style.overflow = "visible", document.body.style.height = l + "px", l - document.documentElement.clientHeight
      }
      Go.addEventListener("refresh", (() => {
         a(), requestAnimationFrame(a)
      })), Go.defaults({
         scroller: t
      }), Go.scrollerProxy(t, {
         scrollTop(t) {
            return arguments.length ? (r = !0, o(-t), void s(t)) : -i("y")
         },
         getBoundingClientRect: () => ({
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
         })
      }), setTimeout((() => Go.create({
         animation: ci.fromTo(t, {
            y: 0
         }, {
            y: () => document.documentElement.clientHeight - l,
            ease: "none",
            onUpdate: Go.update
         }),
         scroller: window,
         invalidateOnRefresh: !0,
         start: 0,
         end: c,
         refreshPriority: -999,
         scrub: n,
         onUpdate: t => {
            r && (u(t), r = !1)
         },
         onRefresh: u
      })), 250)
   },
   ya = {};
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function (t, e) {
   "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function (n) {
      return e(t, n)
   })) : ya ? ya = e(t, i("Vqjah")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : ya, (function (t, e) {
   var n = t.jQuery,
      r = t.console;

   function i(t, e) {
      for (var n in e) t[n] = e[n];
      return t
   }
   var o = Array.prototype.slice;

   function s(t, e, a) {
      if (!(this instanceof s)) return new s(t, e, a);
      var u, l = t;
      ("string" == typeof t && (l = document.querySelectorAll(t)), l) ? (this.elements = (u = l, Array.isArray(u) ? u : "object" == typeof u && "number" == typeof u.length ? o.call(u) : [u]), this.options = i({}, this.options), "function" == typeof e ? a = e : i(this.options, e), a && this.on("always", a), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(this.check.bind(this))) : r.error("Bad element for imagesLoaded " + (l || t))
   }
   s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
      this.images = [], this.elements.forEach(this.addElementImages, this)
   }, s.prototype.addElementImages = function (t) {
      "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
      var e = t.nodeType;
      if (e && a[e]) {
         for (var n = t.querySelectorAll("img"), r = 0; r < n.length; r++) {
            var i = n[r];
            this.addImage(i)
         }
         if ("string" == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (r = 0; r < o.length; r++) {
               var s = o[r];
               this.addElementBackgroundImages(s)
            }
         }
      }
   };
   var a = {
      1: !0,
      9: !0,
      11: !0
   };

   function u(t) {
      this.img = t
   }

   function l(t, e) {
      this.url = t, this.element = e, this.img = new Image
   }
   return s.prototype.addElementBackgroundImages = function (t) {
      var e = getComputedStyle(t);
      if (e)
         for (var n = /url\((['"])?(.*?)\1\)/gi, r = n.exec(e.backgroundImage); null !== r;) {
            var i = r && r[2];
            i && this.addBackground(i, t), r = n.exec(e.backgroundImage)
         }
   }, s.prototype.addImage = function (t) {
      var e = new u(t);
      this.images.push(e)
   }, s.prototype.addBackground = function (t, e) {
      var n = new l(t, e);
      this.images.push(n)
   }, s.prototype.check = function () {
      var t = this;

      function e(e, n, r) {
         setTimeout((function () {
            t.progress(e, n, r)
         }))
      }
      this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function (t) {
         t.once("progress", e), t.check()
      })) : this.complete()
   }, s.prototype.progress = function (t, e, n) {
      this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + n, t, e)
   }, s.prototype.complete = function () {
      var t = this.hasAnyBroken ? "fail" : "done";
      if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
         var e = this.hasAnyBroken ? "reject" : "resolve";
         this.jqDeferred[e](this)
      }
   }, u.prototype = Object.create(e.prototype), u.prototype.check = function () {
      this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
   }, u.prototype.getIsImageComplete = function () {
      return this.img.complete && this.img.naturalWidth
   }, u.prototype.confirm = function (t, e) {
      this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
   }, u.prototype.handleEvent = function (t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
   }, u.prototype.onload = function () {
      this.confirm(!0, "onload"), this.unbindEvents()
   }, u.prototype.onerror = function () {
      this.confirm(!1, "onerror"), this.unbindEvents()
   }, u.prototype.unbindEvents = function () {
      this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
   }, l.prototype = Object.create(u.prototype), l.prototype.check = function () {
      this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
   }, l.prototype.unbindEvents = function () {
      this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
   }, l.prototype.confirm = function (t, e) {
      this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
   }, s.makeJQueryPlugin = function (e) {
      (e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function (t, e) {
         return new s(this, t, e).jqDeferred.promise(n(this))
      })
   }, s.makeJQueryPlugin(), s
}));
let va, Ca, xa, wa, Fa, Ea, ba, Ta = !1,
   Aa = !1,
   Pa = !1,
   Sa = "",
   Ma = document.querySelector(".restart-tl");
const ka = 991;
ci.registerPlugin(Go, Es, Gs, ma, ps), ci.config({
   force3D: !0
}), Go.config({
   ignoreMobileResize: !0
});
const Ba = () => {
      if (Pa = !0, document.body.style.height = "unset", ci.set(".section1-img-1", {
            rotate: 24
         }), ci.set(".section1-img-2", {
            rotate: -32
         }), ci.set(".section1-img-3", {
            rotate: 32
         }), ci.set(".m-hero-top, .m-hero-img-ctn", {
            autoAlpha: 0,
            y: 100
         }), ci.set(".m-step-6-thanks .textEl", {
            xPercent: 0
         }), ci.set(".m-step-5-bottom-txt", {
            xPercent: 0
         }), !1 === Aa) {
         Aa = !0;
         document.querySelector(".m-restart").addEventListener("click", (() => {
            ci.to(window, {
               scrollTo: 0,
               ease: "power3.inOut",
               duration: 5
            })
         }));
         const t = ci.utils.toArray(".fadeAtScroll");
         ci.set(t, {
            autoAlpha: 0,
            y: 100
         }), t.forEach(((t, e) => {
            const n = ci.to(t, {
               duration: 1,
               autoAlpha: 1,
               y: 0,
               paused: !0
            });
            Go.create({
               trigger: t,
               end: "bottom bottom",
               onEnter: t => {
                  0 === n.progress() && n.play().then((() => t.kill()))
               }
            })
         }))
      }
   },
   Oa = () => {
      if (Pa = !1, ci.set(".hero-shine, .enjoy-container", {
            opacity: 0
         }), Sa += ".hero-shine,", ci.set(".hero-bottom", {
            opacity: 0,
            yPercent: 10
         }), Sa += ".hero-bottom,", ci.set(".hero-imgs", {
            scale: 1.25,
            yPercent: 30
         }), Sa += ".hero-imgs,", ci.set(".thanks-text", {
            x: 50
         }), Sa += ".thanks-text,", ci.set(".section1-img img", {
            scale: 1.25
         }), Sa += ".section1-img img,", ci.set(".mansonaryCompo .img1, .mansonaryCompo .img2, .mansonaryCompo .img3", {
            scale: 1.1
         }), Sa += ".mansonaryCompo .img1, .mansonaryCompo .img2, .mansonaryCompo .img3,", ci.set(".mansonaryCompo .img4", {
            scale: .65
         }), Sa += ".mansonaryCompo .img4,", ci.set(".mansonaryCompo .imgCtn1.firstVisible", {
            xPercent: 213,
            yPercent: 40
         }), ci.set(".mansonaryCompo .imgCtn2.firstVisible", {
            xPercent: 420,
            yPercent: -32,
            width: "96%",
            scale: 1.3
         }), ci.set(".mansonaryCompo .imgCtn3.firstVisible", {
            xPercent: 147,
            yPercent: 45
         }), ci.set(".mansonaryCompo .imgCtn4.firstVisible", {
            xPercent: -4,
            yPercent: -3
         }), ci.set(".mansonaryCompo .imgCtn5.firstVisible", {
            xPercent: -89,
            yPercent: 7
         }), ci.set(".mansonaryCompo .imgCtn.firstVisible", {
            y: window.innerHeight
         }), Sa += ".mansonaryCompo .imgCtn.firstVisible, .mansonaryCompo .imgCtn1.firstVisible, .mansonaryCompo .imgCtn2.firstVisible, .mansonaryCompo .imgCtn3.firstVisible, .mansonaryCompo .imgCtn4.firstVisible, .mansonaryCompo .imgCtn5.firstVisible,", ci.set(".step-10-img-ctn-1", {
            xPercent: 10
         }), Sa += ".step-10-img-ctn-1,", ci.set(".step-10 .img-col-1", {
            x: 200
         }), ci.set(".step-10 .img-col-2", {
            x: 150
         }), ci.set(".step-10 .img-col-3", {
            x: 350
         }), ci.set(".step-10 .img-col-4", {
            x: 100
         }), Sa += ".step-10 .img-col-1, .step-10 .img-col-2, .step-10 .img-col-3, .step-10 .img-col-4,", ci.set(".section1-img-1", {
            rotate: -2
         }), ci.set(".section1-img-2", {
            rotate: 14.3
         }), ci.set(".section1-img-3", {
            rotate: 4
         }), Sa += ".section1-img-1, .section1-img-2, .section1-img-3,", ci.set(".section2-img-ctn img", {
            scale: .5
         }), Sa += ".section2-img-ctn img,", ci.set(".second-col .section2-img-ctn", {
            x: -.185 * window.innerWidth
         }), Sa += ".second-col .section2-img-ctn,", ci.set(".so-good-ctn", {
            yPercent: 100
         }), Sa += ".so-good-ctn,", ci.set(".step-4 .card", {
            x: window.innerWidth
         }), Sa += ".step-4 .card,", ci.set(".step-4 .second-col", {
            xPercent: 75
         }), Sa += ".step-4 .second-col,", ci.set(".step-4 .second-col .step-4-img-ctn", {
            y: window.innerHeight
         }), Sa += ".step-4 .second-col .step-4-img-ctn,", ci.set(".step-5-6-ctn, .step-5-img-ctn-1.second", {
            x: window.innerWidth
         }), Sa += ".step-5-6-ctn, .step-5-img-ctn-1.second,", ci.set(".step-5-img-ctn-1", {
            scale: .375
         }), Sa += ".step-5-img-ctn-1,", ci.set(".step-6-img-ctn-1", {
            yPercent: 10
         }), Sa += ".step-6-img-ctn-1,", ci.set(".step-6-img-ctn-2", {
            yPercent: 50
         }), Sa += ".step-6-img-ctn-2,", ci.set(".step-6-txt", {
            xPercent: 100
         }), Sa += ".step-6-txt,", ci.set(".step-6 .ctnMansonaryImg img", {
            scale: 1.2
         }), Sa += ".step-6 .ctnMansonaryImg img,", ci.set(".step-7-img-ctn-1", {
            width: "55%",
            scale: .3,
            x: .675 * window.innerWidth,
            transformOrigin: "top right"
         }), ci.set(".step-7-img-ctn-2", {
            width: "25%",
            x: .425 * window.innerWidth
         }), ci.set(".step-7-img-ctn-4", {
            scale: .3,
            height: "136.92%",
            marginTop: "-18.46%"
         }), ci.set(".step-7-img-ctn-5", {
            yPercent: 100
         }), Sa += ".step-7-img-ctn-1, .step-7-img-ctn-2, .step-7-img-ctn-4, .step-7-img-ctn-5,", ci.set(".step-7 .card", {
            x: window.innerWidth
         }), Sa += ".step-7 .card,", ci.set(".step-9-img-ctn", {
            x: window.innerWidth
         }), ci.set(".step-9-img-ctn-1", {
            scale: .33,
            xPercent: -25
         }), ci.set(".step-9-img-ctn-2 .ctnMansonaryImg", {
            marginLeft: 100
         }), ci.set(".step-9-img-ctn-3 .ctnMansonaryImg", {
            marginLeft: 200
         }), ci.set(".step-9-img-ctn-4 .ctnMansonaryImg", {
            marginLeft: 300
         }), ci.set(".step-9-img-ctn-5 .ctnMansonaryImg", {
            marginLeft: 400
         }), ci.set(".step-9-img-ctn-6 .ctnMansonaryImg", {
            marginLeft: 500
         }), ci.set(".step-9-img-ctn .ctnMansonaryImg img", {
            scale: 1.3,
            xPercent: -15
         }), Sa += ".step-9-img-ctn, .step-9-img-ctn-1, .step-9-img-ctn-2 .ctnMansonaryImg, .step-9-img-ctn-3 .ctnMansonaryImg, .step-9-img-ctn-4 .ctnMansonaryImg, .step-9-img-ctn-5 .ctnMansonaryImg, .step-9-img-ctn-6 .ctnMansonaryImg, .step-9-img-ctn .ctnMansonaryImg img", !1 === Ta) {
         Ta = !0, ci.set(".headerRunningLine", {
            scaleX: 0
         }), Sa += ".headerRunningLine,", ci.set(".headerLine", {
            scaleX: 1
         }), Sa += ".headerLine,", Ma.addEventListener("click", Ra);
         let t = new Gs(".headerRight .toAdd", {
            type: "words,chars"
         });
         xa = t.chars;
         const e = document.querySelector(".headerRight img");
         ci.set(xa, {
            display: "none"
         }), ci.set(e, {
            opacity: 0
         });
         let n = ci.to(".headerRight .toRemove", {
               duration: 0,
               display: "none",
               paused: !0
            }),
            r = ci.to(xa, {
               duration: .1,
               display: "inline",
               stagger: {
                  from: "start",
                  amount: .5
               },
               paused: !0
            }),
            i = ci.to(e, {
               duration: .3,
               opacity: 1,
               paused: !0
            });
         const o = document.querySelector(".headerRight");
         o.addEventListener("mouseenter", (() => {
            n.play().then((() => {
               r.play().then((() => {
                  i.play()
               }))
            }))
         })), o.addEventListener("mouseleave", (() => {
            i.reverse().then((() => {
               r.reverse().then((() => {
                  n.reverse()
               }))
            }))
         })), t = new Gs(".step-11-text-big", {
            type: "words,chars"
         }), Fa = t.chars;
         const s = new Gs(".step-11-text-small", {
            type: "words,chars"
         });
         Ea = s.chars, ci.set(Fa, {
            yPercent: 100
         }), ci.set(Ea, {
            yPercent: 100
         }), t = new Gs(".hero-txt .big", {
            type: "words,chars"
         }), xa = t.chars, t = new Gs(".hero-txt .small", {
            type: "words,chars"
         }), Ca = t.chars, t = new Gs(".hero-subtitle", {
            type: "lines"
         }), ci.set(t.lines, {
            overflow: "hidden"
         }), wa = new Gs(t.lines, {
            type: "lines"
         }).lines, ci.set(".step-11-text-big, .step-11-text-small, .hero-txt .big, .hero-txt .small, .hero-subtitle", {
            overflow: "hidden"
         }), ci.set([xa, Ca], {
            yPercent: 100
         }), ci.set(wa, {
            yPercent: 250,
            rotate: 5,
            transformOrigin: "left center"
         })
      } else ci.set(".headerRunningLine", {
         scaleX: 0,
         opacity: 1
      }), Sa += ".headerRunningLine,", ci.set(".headerLine", {
         scaleX: 1,
         opacity: 1
      }), Sa += ".headerLine,"
   },
   Ia = () => {
      ci.set(".m-step-8-imgs-ctn", {
         xPercent: 100
      }), ci.to(".m-hero-top, .m-header", {
         duration: 1,
         autoAlpha: 1,
         y: 0
      }), ci.to(".m-step-6-thanks .textEl", {
         duration: 10,
         xPercent: -100,
         ease: "linear",
         repeat: -1
      }), ci.to(".m-step-5-bottom-txt", {
         duration: 6.23,
         xPercent: -100,
         ease: "linear",
         repeat: -1
      }), ci.to(".m-hero-img-ctn", {
         duration: 1,
         autoAlpha: 1,
         y: 0
      }), ci.timeline({
         scrollTrigger: {
            trigger: ".m-step-8-imgs-ctn",
            start: "top bottom-=100",
            end: "bottom top",
            scrub: 1
         }
      }).to(".m-step-8-imgs-ctn", {
         xPercent: -120
      }), ci.timeline({
         scrollTrigger: {
            trigger: ".m-thanks-text-container",
            start: "top bottom",
            end: "bottom-=50 top",
            scrub: !0
         }
      }).to(".section1-img-1", {
         rotate: -16
      }).to(".section1-img-2", {
         rotate: 8
      }, "<").to(".section1-img-3", {
         rotate: -8
      }, "<")
   },
   La = () => {
      const t = document.querySelector(".horizontalScroll"),
         e = document.querySelector(".mansonaryCompo"),
         n = (e.querySelector(".container"), e.querySelectorAll(".firstCtn img")),
         r = t.querySelector(".hero"),
         i = 7 * window.innerWidth + 12 * window.innerHeight;
      ci.timeline().to(".hero-bottom", {
         duration: 2.8,
         opacity: 1,
         yPercent: 0,
         ease: "expo.out"
      }).to(xa, {
         duration: 1,
         yPercent: 0,
         stagger: .1,
         ease: "expo.out"
      }, "<").to(Ca, {
         duration: .5,
         yPercent: 0,
         stagger: .05,
         ease: "expo.out"
      }, "<+=0.5").to(".hero-shine, .enjoy-container", {
         duration: 1,
         opacity: 1,
         ease: "expo.out"
      }, "<+=0.25").to(wa, {
         duration: 1,
         yPercent: 0,
         rotate: 0,
         stagger: .1,
         ease: "expo.out"
      }, "<+=0.05");
      va = ci.timeline({
         defaults: {
            duration: 3,
            ease: "none"
         },
         scrollTrigger: {
            trigger: t,
            start: "top top",
            end: "top+=" + i,
            scrub: .3,
            scrub: !0,
            pin: !0,
            invalidateOnRefresh: !0,
            anticipatePin: 1
         }
      }).addLabel("start").to(".hero-txt", {
         yPercent: -50,
         duration: 1.9,
         ease: "power1.in"
      }).to(".hero-top", {
         yPercent: -100,
         duration: 1.8,
         ease: "power1.in"
      }, "<").to(".hero-imgs", {
         scale: 1,
         duration: 1.8
      }, "<").to(".hero-imgs", {
         yPercent: 0,
         duration: 1.8,
         ease: "power1.out"
      }, "<").to(".step-1", {
         x: .68 * -window.innerWidth,
         duration: 2.4
      }, ">").to(".hero-imgs", {
         width: "50.3%",
         duration: 2.4
      }, "<").to(".step-hero-1 .step-ctn", {
         x: .78 * -window.innerWidth,
         duration: 2.4
      }, ">").to(".hero-imgs", {
         xPercent: -15,
         duration: 2.4
      }, "<").to(".section1-img-1", {
         rotate: 8,
         duration: 2.4
      }, "<").to(".section1-img-2", {
         rotate: -1.3,
         duration: 2.4
      }, "<").to(".section1-img-3", {
         rotate: -7,
         duration: 2.4
      }, "<").to(".step-1-black-bg", {
         "clip-path": "inset(0 0 0 0%)",
         duration: 2.4
      }, ">").to(".thanks-text", {
         x: -50,
         duration: 2.4
      }, "<").to(".section1-img img", {
         scale: 1,
         duration: 2.4
      }, "<").to(".section1-img-1", {
         rotate: 18,
         duration: 2.4
      }, ">").to(".section1-img-2", {
         rotate: -16.3,
         duration: 2.4
      }, "<").to(".section1-img-3", {
         rotate: -28,
         duration: 2.4
      }, "<").to(t, {
         xPercent: -2 * r.clientWidth / t.clientWidth * 100,
         x: window.innerWidth,
         duration: 2.4
      }, "<").to(".section2-img-ctn", {
         x: 0,
         duration: 1.2
      }, "<+=1.2").to(".section2-img-ctn img", {
         scale: 1,
         ease: "power1.out",
         duration: 1.2
      }, "<+=1.2").to(".so-good-ctn", {
         yPercent: 0,
         y: -window.innerHeight,
         duration: 2
      }, ">").to(".section2-img-ctn img", {
         scale: 1.05,
         ease: "linear",
         duration: 2.3
      }, "<").to(".first-col .section2-img-ctn", {
         y: -window.innerHeight,
         duration: 2
      }, ">-=0.88").to(".second-col .section2-img-ctn", {
         y: -window.innerHeight,
         ease: "power1.in",
         duration: 1.9
      }, "<+=0.88").to(".mansonaryCompo", {
         yPercent: -100,
         duration: 0
      }, "<-=0.1").to(".mansonaryCompo .imgCtn5", {
         y: 0,
         duration: 1.2,
         ease: "power1.out"
      }, "<").to(".mansonaryCompo .imgCtn3", {
         y: 0,
         duration: 1,
         ease: "power1.out"
      }, "<+=0.4").to(".mansonaryCompo .imgCtn2", {
         y: 0,
         duration: 1,
         ease: "power1.out"
      }, "<+=0.4").to(".mansonaryCompo .imgCtn1", {
         y: 0,
         duration: .8,
         ease: "power1.out"
      }, "<+=0.8").to(".mansonaryCompo .imgCtn4", {
         y: 0,
         duration: 1,
         ease: "power1.out"
      }, "<+=0.3").to(".mansonaryCompo .imgCtn1, .mansonaryCompo .imgCtn2, .mansonaryCompo .imgCtn3, .mansonaryCompo .imgCtn5, .mansonaryCompo .imgCtn6", {
         xPercent: 0,
         yPercent: 0,
         width: "100%",
         scale: 1,
         ease: "power4.out",
         duration: 2
      }, ">").to(".mansonaryCompo .imgCtn4.firstVisible", {
         xPercent: 0,
         yPercent: 0,
         width: "100%",
         scale: 1.15,
         ease: "power4.out",
         duration: 2
      }, "<").to(n, {
         scale: 1,
         ease: "power4.out",
         duration: 2
      }, "<").to(".firstCtn .innerImg", {
         "clip-path": "inset(0% 0 0 0)",
         ease: "power1.out",
         duration: 1.5
      }, ">-=0.1").to(".mansonaryCompo .scrollableImg", {
         y: 2 * -window.innerHeight,
         ease: ma.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
         duration: 4
      }, ">").to(".mansonaryCompo .scrollableImgRight", {
         y: 2.5 * -window.innerHeight,
         ease: ma.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
         duration: 3.5
      }, "<").to(".mansonaryCompo .semiFastScrollableImg", {
         y: 2 * -window.innerHeight,
         ease: ma.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
         duration: 3.2
      }, "<").to(".mansonaryCompo .semiFastScrollableImgBis", {
         y: 2.5 * -window.innerHeight,
         ease: ma.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
         duration: 3.75
      }, "<").to(".mansonaryCompo .fastScrollableImg", {
         y: 2 * -window.innerHeight,
         ease: ma.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
         duration: 2.4
      }, "<");
      const o = document.querySelector(".mansonaryCompo .fastScrollableImglast");
      va.to(".mansonaryCompo .fastScrollableImglast", {
         y: -(o.offsetTop + .8 * o.clientHeight - window.innerHeight),
         ease: ma.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
         duration: 3.6
      }, "<").to(".mansonaryCompo .fastScrollableImgBis", {
         y: 2 * -window.innerHeight,
         ease: ma.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
         duration: 2.8
      }, "<+=0.4").to(".mansonaryCompo .fastScrollableImgBeforelast", {
         y: 3 * -window.innerHeight,
         duration: 3.2
      }, "<+=0.8").to(".mansonaryCompo .fastScrollableImgBeforelastBis", {
         y: 3 * -window.innerHeight,
         duration: 3.1
      }, "<").to(".firstCtn .ctnMansonaryImg", {
         y: -window.innerHeight,
         duration: 1.2
      }, "<+=0.8").to(".step-4 .second-col .step-4-img-ctn", {
         y: 0,
         stagger: {
            amount: .1
         },
         duration: 1
      }, "<+=0.8").to(".step-4 .second-col", {
         xPercent: 0,
         ease: "power1.out",
         duration: .8
      }, ">").to(".mansonaryCompo .fastScrollableImglast", {
         x: .25 * -r.clientWidth,
         ease: "power1.in",
         duration: .8
      }, "<").to(".step-4 .card", {
         x: 0,
         ease: "power1.out",
         duration: 2.5
      }, ">").to(".step-4-img-ctn-bigger .innerImg", {
         "clip-path": "inset(0 0 0 0%)",
         ease: "power3.in",
         duration: 2
      }, "<+=0.4").to(".mansonaryCompo .fastScrollableImglast", {
         x: 1.25 * -r.clientWidth,
         ease: "power1.in",
         duration: 1.25
      }, "<+=0.775").to(".step-4-img-ctn-bigger", {
         scale: 2.67,
         duration: 1.9
      }, ">").to(".step-4 .card .innerCard", {
         "clip-path": "inset(0 0 0 0%)",
         duration: 1.0977
      }, "<+=0.758").to(".step-4-txt", {
         yPercent: -100,
         y: -window.innerHeight,
         duration: 5
      }, ">").to(".step-5-6-ctn", {
         x: 0,
         duration: 2.5
      }, ">").to(".step-4 .card", {
         x: -window.innerWidth,
         duration: 2.5
      }, "<+=1.65").to(".step-5-img-ctn-1.first", {
         scale: 1,
         ease: "power2.out",
         duration: 1.65
      }, "<+=1").to(".step-4", {
         opacity: 0,
         duration: 0
      }, ">").to(".step-5-img-ctn-1.second", {
         x: 0,
         duration: 2.5
      }, ">-=1.3").to(".step-5-img-ctn-2 .inner", {
         "clip-path": "inset(0 0 0 0%)",
         ease: "power1.out",
         duration: 1
      }, "<+=1.5").to(".step-5-img-ctn-1.second", {
         scale: 1,
         ease: "power2.out",
         duration: 1.65
      }, ">").to(".step5-txt-bottom", {
         y: -500,
         duration: 2
      }, ">").to(".step5-txt-top", {
         y: -500,
         duration: 2
      }, "<+=0.25").to(".step5-txt-top, .step5-txt-bottom", {
         opacity: 0,
         duration: 1
      }, "<").to(".step-5-img-ctn-1 img", {
         transformOrigin: "top left",
         height: "150%",
         scale: .375,
         ease: "power1.in",
         duration: 2
      }, ">-=1").to(".step-5-img-ctn-2 img", {
         height: "45%",
         ease: "power1.in",
         duration: 1.8
      }, "<+=0.4").to(".step-6", {
         y: 2 * -window.innerHeight,
         ease: "power1.out",
         duration: 1.8
      }, ">-=1").to(".step-6-img-ctn-1", {
         yPercent: -10,
         duration: 1.8
      }, "<").to(".step-6-img-ctn-2", {
         yPercent: 0,
         duration: 1.8
      }, "<").to(".step-5", {
         y: -window.innerHeight,
         ease: "power1.out",
         duration: 2.1
      }, "<+=0.4").to(".step-6-txt", {
         xPercent: 0,
         duration: 5
      }, "<+=0.5").to(".step-6 .ctnMansonaryImg img", {
         scale: 1,
         duration: 5
      }, "<").to(t, {
         xPercent: -3 * r.clientWidth / t.clientWidth * 100,
         x: window.innerWidth,
         duration: 2.7
      }, ">").to(".step-7-img-ctn-1", {
         x: 0,
         width: "100%",
         scale: 1,
         transformOrigin: "top right",
         ease: "power2.out",
         duration: 2.5
      }, ">").to(".step-7-img-ctn-2", {
         width: "100%",
         x: 0,
         ease: "power2.out",
         duration: 2.5
      }, "<").to(".step-7-img-ctn-3", {
         y: 2 * -window.innerHeight,
         duration: 4
      }, ">").to(".step-7-img-ctn-4", {
         y: 2 * -window.innerHeight,
         duration: 4
      }, ">-=4").to(".step-7-img-ctn-4", {
         height: "100%",
         marginTop: 0,
         scale: 1,
         ease: "power1.out",
         duration: 2.25
      }, ">").to(".step-7-img-ctn-5", {
         yPercent: 0,
         ease: "power1.out",
         duration: 2.25
      }, "<").to(".step-7-txt", {
         x: -window.innerWidth,
         ease: "power2.in",
         duration: 2.1
      }, ">-=1").to(".step-7 .card", {
         x: 0,
         ease: "power1.out",
         duration: 2.1
      }, "<").to(t, {
         xPercent: -4 * r.clientWidth / t.clientWidth * 100,
         x: window.innerWidth,
         duration: 2.7
      }, ">").to(".step-9-img-ctn-1", {
         xPercent: 0,
         duration: 2.7
      }, "<").to(".step-9-img-ctn-1", {
         scale: 1,
         ease: "power2.out",
         duration: 3
      }, ">").to(".step-9-img-ctn", {
         x: 0,
         duration: 3
      }, ">").to(".step-9-img-ctn .ctnMansonaryImg", {
         marginLeft: 0,
         duration: 3
      }, "<").to(".step-9-img-ctn .ctnMansonaryImg img", {
         xPercent: 15,
         duration: 3
      }, "<").to(t, {
         xPercent: -5 * r.clientWidth / t.clientWidth * 100,
         x: window.innerWidth,
         duration: 2.7
      }, ">").to(".step-10-img-ctn-1", {
         xPercent: 0,
         ease: "power1.in",
         duration: 2.7
      }, "<").to(".step-10 .img-col", {
         x: 0,
         ease: "power2.in",
         duration: 2.7
      }, "<").to(".step-10-txt", {
         yPercent: -100,
         duration: 9.35
      }, ">-=0.375").to(".step-10 .img-col-1", {
         y: 1 * -window.innerHeight,
         duration: 2.65
      }, "<+=1.35").to(".step-10 .img-col-2", {
         y: 1.5 * -window.innerHeight,
         duration: 4.5
      }, "<").to(".step-10 .img-col-3", {
         y: 1.5 * -window.innerHeight,
         duration: 3.75
      }, "<").to(".step-10 .img-col-4", {
         y: -1.5 * window.innerHeight,
         duration: 4.9
      }, "<").to(".step-10 .img-col-5", {
         y: 2 * -window.innerHeight,
         duration: 6
      }, "<").to(".step-10 .img-col-6", {
         y: 3 * -window.innerHeight,
         duration: 8.175
      }, "<").to(".step-10 .img-col-7", {
         y: 2.5 * -window.innerHeight,
         duration: 7.5
      }, "<");
      const s = document.querySelector(".step-10 .img-col-8");
      va.to(s, {
         y: -s.offsetTop,
         duration: 6.6
      }, "<");
      const a = document.querySelector(".step-10 .img-col-10");
      va.to(a, {
         y: -a.offsetTop + (window.innerHeight - a.clientHeight),
         duration: 5.8
      }, "<+=0.8");
      const u = document.querySelector(".step-10 .img-col-9");
      va.to(u, {
         y: -u.offsetTop + (window.innerHeight / 2 - u.clientHeight / 2),
         duration: 7.6
      }, "<-=1.8").to(".step-10-img-ctn-1 img", {
         scale: 1.033,
         duration: 4.85
      }, "<+=2.65").to(t, {
         xPercent: -(6 * r.clientWidth + 3) / t.clientWidth * 100,
         x: window.innerWidth,
         duration: 2.7
      }, ">+=0.1").call((() => {
         ci.to(Fa, {
            duration: 1,
            yPercent: 0,
            stagger: .1,
            ease: "expo.out"
         }), ci.to(Ea, {
            duration: .5,
            yPercent: 0,
            stagger: .05,
            delay: .5,
            ease: "expo.out"
         })
      }), [], "<+=1");
      const l = va.duration();
      va.to(".headerRunningLine", {
         scaleX: 1,
         duration: l
      }, "start").to(".headerLine", {
         scaleX: 0,
         duration: l
      }, "<")
   },
   Ra = () => {
      va && ci.to(window, {
         scrollTo: va.scrollTrigger.labelToScroll("start"),
         ease: ma.create("custom", "M0,0 C0.173,0 0.32,0.036 0.4,0.13 0.479,0.223 0.488,0.364 0.502,0.506 0.514,0.628 0.496,0.824 0.602,0.916 0.675,0.98 0.869,1 1,1 "),
         duration: 5
      })
   };
let Na = !1,
   za = !1,
   Wa = !1;
! function () {
   ci.set(".loadingCtn .happyCtn, .loadingCtn .shineCtn", {
      yPercent: -50,
      opacity: 0
   }), ci.set(".headerItem", {
      y: -100,
      opacity: 0
   }), ci.to(".headerItem", {
      y: 0,
      opacity: 1,
      duration: .5
   }), ci.to(".loadingCtn .happyCtn, .loadingCtn .shineCtn", {
      opacity: 1,
      delay: .75,
      duration: .5
   });
   let t = ci.timeline({
      repeat: -1,
      delay: .75
   });
   t.to(".loadingCtn .shineCtn", {
      yPercent: 50,
      rotateZ: 180
   }).to(".loadingCtn .happyCtn", {
      xPercent: 100,
      rotateZ: 90
   }).to(".loadingCtn .shineCtn", {
      xPercent: -100,
      rotateZ: 90
   }).to(".loadingCtn .happyCtn", {
      yPercent: 50,
      rotateZ: 0
   }).to(".loadingCtn .shineCtn", {
      yPercent: -50,
      rotateZ: 270
   }).to(".loadingCtn .happyCtn", {
      xPercent: 0,
      rotateZ: -90
   }).to(".loadingCtn .shineCtn", {
      xPercent: 0,
      rotateZ: 180
   }).to(".loadingCtn .happyCtn", {
      yPercent: -50,
      rotateZ: 0
   }).call((() => {
      Wa && (t.kill(), ci.to(".loadingCtn .shineCtn", {
         scale: 0,
         rotate: "-=360",
         duration: .5
      }), ci.to(".loadingCtn .happyCtn", {
         scale: 0,
         rotate: "+=360",
         duration: .5
      }), ci.to(".loadingCtn", {
         opacity: 0,
         delay: .5,
         duration: .25,
         onComplete: () => function () {
            ka < window.innerWidth ? (ba = _a("#content"), La()) : Ia();
            document.body.classList.remove("loading")
         }()
      }), ci.to("#mobile-content", {
         opacity: 1,
         duration: .5,
         delay: .5
      }))
   }))
}(), setTimeout((() => {
   ka < window.innerWidth ? Oa() : Ba()
}), 250), new Promise(((e, n) => {
   t(ya)(document.querySelectorAll("section img"), e)
})).then((() => {
   Na = !0, za && (Wa = !0)
})), window.addEventListener("load", (() => {
   za = !0, Na && (Wa = !0)
})), window.addEventListener("resize", (() => {
   va && function (t) {
      ba && ba.kill(!0);
      for (var e = t.getChildren(), n = 0; n < e.length; n++) null != e[n].target && ci.set(e[n].target.selector, {
         clearProps: "all"
      });
      Sa && ci.set(Sa, {
         clearProps: "all"
      });
      t.scrollTrigger && t.scrollTrigger.kill(!0);
      t.pause(0).kill(!0)
   }(va), ka < window.innerWidth ? (!1 === Ta ? ba = _a("#content") : Go.defaults({
      scroller: "#content"
   }), Oa(), La()) : !1 === Pa && (Pa = !0, Go.defaults({
      scroller: window
   }), Ba(), Ia())
}));
//# sourceMappingURL=index.3db0a1f7.js.map