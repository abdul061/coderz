/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var Yv = Object.create;
  var Lr = Object.defineProperty;
  var Qv = Object.getOwnPropertyDescriptor;
  var $v = Object.getOwnPropertyNames;
  var Zv = Object.getPrototypeOf,
    Jv = Object.prototype.hasOwnProperty;
  var ve = (e, t) => () => (e && (t = e((e = 0))), t);
  var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ne = (e, t) => {
      for (var r in t) Lr(e, r, { get: t[r], enumerable: !0 });
    },
    ha = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of $v(t))
          !Jv.call(e, i) &&
            i !== r &&
            Lr(e, i, {
              get: () => t[i],
              enumerable: !(n = Qv(t, i)) || n.enumerable,
            });
      return e;
    };
  var fe = (e, t, r) => (
      (r = e != null ? Yv(Zv(e)) : {}),
      ha(
        t || !e || !e.__esModule
          ? Lr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Ye = (e) => ha(Lr({}, "__esModule", { value: !0 }), e);
  var jn = d(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, b) {
        var w = new D.Bare();
        return w.init(f, b);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (b) {
          return "-" + b.toLowerCase();
        });
      }
      function n(f) {
        var b = parseInt(f.slice(1), 16),
          w = (b >> 16) & 255,
          S = (b >> 8) & 255,
          F = 255 & b;
        return [w, S, F];
      }
      function i(f, b, w) {
        return (
          "#" + ((1 << 24) | (f << 16) | (b << 8) | w).toString(16).slice(1)
        );
      }
      function o() {}
      function a(f, b) {
        c("Type warning: Expected: [" + f + "] Got: [" + typeof b + "] " + b);
      }
      function s(f, b, w) {
        c("Units do not match [" + f + "]: " + b + ", " + w);
      }
      function u(f, b, w) {
        if ((b !== void 0 && (w = b), f === void 0)) return w;
        var S = w;
        return (
          ke.test(f) || !xe.test(f)
            ? (S = parseInt(f, 10))
            : xe.test(f) && (S = 1e3 * parseFloat(f)),
          0 > S && (S = 0),
          S === S ? S : w
        );
      }
      function c(f) {
        Y.debug && window && window.console.warn(f);
      }
      function E(f) {
        for (var b = -1, w = f ? f.length : 0, S = []; ++b < w; ) {
          var F = f[b];
          F && S.push(F);
        }
        return S;
      }
      var l = (function (f, b, w) {
          function S(ie) {
            return typeof ie == "object";
          }
          function F(ie) {
            return typeof ie == "function";
          }
          function N() {}
          function te(ie, re) {
            function U() {
              var Se = new ae();
              return F(Se.init) && Se.init.apply(Se, arguments), Se;
            }
            function ae() {}
            re === w && ((re = ie), (ie = Object)), (U.Bare = ae);
            var ce,
              ye = (N[f] = ie[f]),
              Ge = (ae[f] = U[f] = new N());
            return (
              (Ge.constructor = U),
              (U.mixin = function (Se) {
                return (ae[f] = U[f] = te(U, Se)[f]), U;
              }),
              (U.open = function (Se) {
                if (
                  ((ce = {}),
                  F(Se) ? (ce = Se.call(U, Ge, ye, U, ie)) : S(Se) && (ce = Se),
                  S(ce))
                )
                  for (var Jt in ce) b.call(ce, Jt) && (Ge[Jt] = ce[Jt]);
                return F(Ge.init) || (Ge.init = ie), U;
              }),
              U.open(re)
            );
          }
          return te;
        })("prototype", {}.hasOwnProperty),
        h = {
          ease: [
            "ease",
            function (f, b, w, S) {
              var F = (f /= S) * f,
                N = F * f;
              return (
                b +
                w * (-2.75 * N * F + 11 * F * F + -15.5 * N + 8 * F + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, b, w, S) {
              var F = (f /= S) * f,
                N = F * f;
              return b + w * (-1 * N * F + 3 * F * F + -3 * N + 2 * F);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, b, w, S) {
              var F = (f /= S) * f,
                N = F * f;
              return (
                b +
                w * (0.3 * N * F + -1.6 * F * F + 2.2 * N + -1.8 * F + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, b, w, S) {
              var F = (f /= S) * f,
                N = F * f;
              return b + w * (2 * N * F + -5 * F * F + 2 * N + 2 * F);
            },
          ],
          linear: [
            "linear",
            function (f, b, w, S) {
              return (w * f) / S + b;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, b, w, S) {
              return w * (f /= S) * f + b;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, b, w, S) {
              return -w * (f /= S) * (f - 2) + b;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, b, w, S) {
              return (f /= S / 2) < 1
                ? (w / 2) * f * f + b
                : (-w / 2) * (--f * (f - 2) - 1) + b;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, b, w, S) {
              return w * (f /= S) * f * f + b;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, b, w, S) {
              return w * ((f = f / S - 1) * f * f + 1) + b;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, b, w, S) {
              return (f /= S / 2) < 1
                ? (w / 2) * f * f * f + b
                : (w / 2) * ((f -= 2) * f * f + 2) + b;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, b, w, S) {
              return w * (f /= S) * f * f * f + b;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, b, w, S) {
              return -w * ((f = f / S - 1) * f * f * f - 1) + b;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, b, w, S) {
              return (f /= S / 2) < 1
                ? (w / 2) * f * f * f * f + b
                : (-w / 2) * ((f -= 2) * f * f * f - 2) + b;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, b, w, S) {
              return w * (f /= S) * f * f * f * f + b;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, b, w, S) {
              return w * ((f = f / S - 1) * f * f * f * f + 1) + b;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, b, w, S) {
              return (f /= S / 2) < 1
                ? (w / 2) * f * f * f * f * f + b
                : (w / 2) * ((f -= 2) * f * f * f * f + 2) + b;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, b, w, S) {
              return -w * Math.cos((f / S) * (Math.PI / 2)) + w + b;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, b, w, S) {
              return w * Math.sin((f / S) * (Math.PI / 2)) + b;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, b, w, S) {
              return (-w / 2) * (Math.cos((Math.PI * f) / S) - 1) + b;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, b, w, S) {
              return f === 0 ? b : w * Math.pow(2, 10 * (f / S - 1)) + b;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, b, w, S) {
              return f === S
                ? b + w
                : w * (-Math.pow(2, (-10 * f) / S) + 1) + b;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, b, w, S) {
              return f === 0
                ? b
                : f === S
                ? b + w
                : (f /= S / 2) < 1
                ? (w / 2) * Math.pow(2, 10 * (f - 1)) + b
                : (w / 2) * (-Math.pow(2, -10 * --f) + 2) + b;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, b, w, S) {
              return -w * (Math.sqrt(1 - (f /= S) * f) - 1) + b;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, b, w, S) {
              return w * Math.sqrt(1 - (f = f / S - 1) * f) + b;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, b, w, S) {
              return (f /= S / 2) < 1
                ? (-w / 2) * (Math.sqrt(1 - f * f) - 1) + b
                : (w / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + b;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, b, w, S, F) {
              return (
                F === void 0 && (F = 1.70158),
                w * (f /= S) * f * ((F + 1) * f - F) + b
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, b, w, S, F) {
              return (
                F === void 0 && (F = 1.70158),
                w * ((f = f / S - 1) * f * ((F + 1) * f + F) + 1) + b
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, b, w, S, F) {
              return (
                F === void 0 && (F = 1.70158),
                (f /= S / 2) < 1
                  ? (w / 2) * f * f * (((F *= 1.525) + 1) * f - F) + b
                  : (w / 2) *
                      ((f -= 2) * f * (((F *= 1.525) + 1) * f + F) + 2) +
                    b
              );
            },
          ],
        },
        g = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        v = document,
        _ = window,
        T = "bkwld-tram",
        I = /[\-\.0-9]/g,
        x = /[A-Z]/,
        A = "number",
        C = /^(rgb|#)/,
        M = /(em|cm|mm|in|pt|pc|px)$/,
        L = /(em|cm|mm|in|pt|pc|px|%)$/,
        W = /(deg|rad|turn)$/,
        z = "unitless",
        K = /(all|none) 0s ease 0s/,
        Q = /^(width|height)$/,
        V = " ",
        O = v.createElement("a"),
        y = ["Webkit", "Moz", "O", "ms"],
        R = ["-webkit-", "-moz-", "-o-", "-ms-"],
        q = function (f) {
          if (f in O.style) return { dom: f, css: f };
          var b,
            w,
            S = "",
            F = f.split("-");
          for (b = 0; b < F.length; b++)
            S += F[b].charAt(0).toUpperCase() + F[b].slice(1);
          for (b = 0; b < y.length; b++)
            if (((w = y[b] + S), w in O.style))
              return { dom: w, css: R[b] + f };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: q("transform"),
          transition: q("transition"),
          backface: q("backface-visibility"),
          timing: q("transition-timing-function"),
        });
      if (G.transition) {
        var Z = G.timing.dom;
        if (((O.style[Z] = h["ease-in-back"][0]), !O.style[Z]))
          for (var J in g) h[J][0] = g[J];
      }
      var ue = (t.frame = (function () {
          var f =
            _.requestAnimationFrame ||
            _.webkitRequestAnimationFrame ||
            _.mozRequestAnimationFrame ||
            _.oRequestAnimationFrame ||
            _.msRequestAnimationFrame;
          return f && G.bind
            ? f.bind(_)
            : function (b) {
                _.setTimeout(b, 16);
              };
        })()),
        se = (t.now = (function () {
          var f = _.performance,
            b = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return b && G.bind
            ? b.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        be = l(function (f) {
          function b(ne, le) {
            var me = E(("" + ne).split(V)),
              pe = me[0];
            le = le || {};
            var Oe = B[pe];
            if (!Oe) return c("Unsupported property: " + pe);
            if (!le.weak || !this.props[pe]) {
              var Ue = Oe[0],
                Pe = this.props[pe];
              return (
                Pe || (Pe = this.props[pe] = new Ue.Bare()),
                Pe.init(this.$el, me, Oe, le),
                Pe
              );
            }
          }
          function w(ne, le, me) {
            if (ne) {
              var pe = typeof ne;
              if (
                (le ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && le)
              )
                return (
                  (this.timer = new j({
                    duration: ne,
                    context: this,
                    complete: N,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && le) {
                switch (ne) {
                  case "hide":
                    U.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    ae.call(this);
                    break;
                  default:
                    b.call(this, ne, me && me[1]);
                }
                return N.call(this);
              }
              if (pe == "function") return void ne.call(this, this);
              if (pe == "object") {
                var Oe = 0;
                Ge.call(
                  this,
                  ne,
                  function (_e, jv) {
                    _e.span > Oe && (Oe = _e.span), _e.stop(), _e.animate(jv);
                  },
                  function (_e) {
                    "wait" in _e && (Oe = u(_e.wait, 0));
                  }
                ),
                  ye.call(this),
                  Oe > 0 &&
                    ((this.timer = new j({ duration: Oe, context: this })),
                    (this.active = !0),
                    le && (this.timer.complete = N));
                var Ue = this,
                  Pe = !1,
                  Cr = {};
                ue(function () {
                  Ge.call(Ue, ne, function (_e) {
                    _e.active && ((Pe = !0), (Cr[_e.name] = _e.nextStyle));
                  }),
                    Pe && Ue.$el.css(Cr);
                });
              }
            }
          }
          function S(ne) {
            (ne = u(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new j({
                    duration: ne,
                    context: this,
                    complete: N,
                  })),
                  (this.active = !0));
          }
          function F(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = N))
              : c(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function N() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              w.call(this, ne.options, !0, ne.args);
            }
          }
          function te(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var le;
            typeof ne == "string"
              ? ((le = {}), (le[ne] = 1))
              : (le = typeof ne == "object" && ne != null ? ne : this.props),
              Ge.call(this, le, Se),
              ye.call(this);
          }
          function ie(ne) {
            te.call(this, ne), Ge.call(this, ne, Jt, zv);
          }
          function re(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function U() {
            te.call(this), (this.el.style.display = "none");
          }
          function ae() {
            this.el.offsetHeight;
          }
          function ce() {
            te.call(this),
              e.removeData(this.el, T),
              (this.$el = this.el = null);
          }
          function ye() {
            var ne,
              le,
              me = [];
            this.upstream && me.push(this.upstream);
            for (ne in this.props)
              (le = this.props[ne]), le.active && me.push(le.string);
            (me = me.join(",")),
              this.style !== me &&
                ((this.style = me), (this.el.style[G.transition.dom] = me));
          }
          function Ge(ne, le, me) {
            var pe,
              Oe,
              Ue,
              Pe,
              Cr = le !== Se,
              _e = {};
            for (pe in ne)
              (Ue = ne[pe]),
                pe in de
                  ? (_e.transform || (_e.transform = {}),
                    (_e.transform[pe] = Ue))
                  : (x.test(pe) && (pe = r(pe)),
                    pe in B ? (_e[pe] = Ue) : (Pe || (Pe = {}), (Pe[pe] = Ue)));
            for (pe in _e) {
              if (((Ue = _e[pe]), (Oe = this.props[pe]), !Oe)) {
                if (!Cr) continue;
                Oe = b.call(this, pe);
              }
              le.call(this, Oe, Ue);
            }
            me && Pe && me.call(this, Pe);
          }
          function Se(ne) {
            ne.stop();
          }
          function Jt(ne, le) {
            ne.set(le);
          }
          function zv(ne) {
            this.$el.css(ne);
          }
          function Ve(ne, le) {
            f[ne] = function () {
              return this.children
                ? Kv.call(this, le, arguments)
                : (this.el && le.apply(this, arguments), this);
            };
          }
          function Kv(ne, le) {
            var me,
              pe = this.children.length;
            for (me = 0; pe > me; me++) ne.apply(this.children[me], le);
            return this;
          }
          (f.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              Y.keepInherited && !Y.fallback)
            ) {
              var le = k(this.el, "transition");
              le && !K.test(le) && (this.upstream = le);
            }
            G.backface &&
              Y.hideBackface &&
              p(this.el, G.backface.css, "hidden");
          }),
            Ve("add", b),
            Ve("start", w),
            Ve("wait", S),
            Ve("then", F),
            Ve("next", N),
            Ve("stop", te),
            Ve("set", ie),
            Ve("show", re),
            Ve("hide", U),
            Ve("redraw", ae),
            Ve("destroy", ce);
        }),
        D = l(be, function (f) {
          function b(w, S) {
            var F = e.data(w, T) || e.data(w, T, new be.Bare());
            return F.el || F.init(w), S ? F.start(S) : F;
          }
          f.init = function (w, S) {
            var F = e(w);
            if (!F.length) return this;
            if (F.length === 1) return b(F[0], S);
            var N = [];
            return (
              F.each(function (te, ie) {
                N.push(b(ie, S));
              }),
              (this.children = N),
              this
            );
          };
        }),
        m = l(function (f) {
          function b() {
            var N = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(N), te;
          }
          function w(N, te, ie) {
            return te !== void 0 && (ie = te), N in h ? N : ie;
          }
          function S(N) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(N);
            return (te ? i(te[1], te[2], te[3]) : N).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var F = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (N, te, ie, re) {
            (this.$el = N), (this.el = N[0]);
            var U = te[0];
            ie[2] && (U = ie[2]),
              $[U] && (U = $[U]),
              (this.name = U),
              (this.type = ie[1]),
              (this.duration = u(te[1], this.duration, F.duration)),
              (this.ease = w(te[2], this.ease, F.ease)),
              (this.delay = u(te[3], this.delay, F.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Q.test(this.name)),
              (this.unit = re.unit || this.unit || Y.defaultUnit),
              (this.angle = re.angle || this.angle || Y.defaultAngle),
              Y.fallback || re.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    V +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? V + h[this.ease][0] : "") +
                    (this.delay ? V + this.delay + "ms" : "")));
          }),
            (f.set = function (N) {
              (N = this.convert(N, this.type)), this.update(N), this.redraw();
            }),
            (f.transition = function (N) {
              (this.active = !0),
                (N = this.convert(N, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  N == "auto" && (N = b.call(this))),
                (this.nextStyle = N);
            }),
            (f.fallback = function (N) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (N = this.convert(N, this.type)),
                this.auto &&
                  (te == "auto" && (te = this.convert(this.get(), this.type)),
                  N == "auto" && (N = b.call(this))),
                (this.tween = new ee({
                  from: te,
                  to: N,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return k(this.el, this.name);
            }),
            (f.update = function (N) {
              p(this.el, this.name, N);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                p(this.el, this.name, this.get()));
              var N = this.tween;
              N && N.context && N.destroy();
            }),
            (f.convert = function (N, te) {
              if (N == "auto" && this.auto) return N;
              var ie,
                re = typeof N == "number",
                U = typeof N == "string";
              switch (te) {
                case A:
                  if (re) return N;
                  if (U && N.replace(I, "") === "") return +N;
                  ie = "number(unitless)";
                  break;
                case C:
                  if (U) {
                    if (N === "" && this.original) return this.original;
                    if (te.test(N))
                      return N.charAt(0) == "#" && N.length == 7 ? N : S(N);
                  }
                  ie = "hex or rgb string";
                  break;
                case M:
                  if (re) return N + this.unit;
                  if (U && te.test(N)) return N;
                  ie = "number(px) or string(unit)";
                  break;
                case L:
                  if (re) return N + this.unit;
                  if (U && te.test(N)) return N;
                  ie = "number(px) or string(unit or %)";
                  break;
                case W:
                  if (re) return N + this.angle;
                  if (U && te.test(N)) return N;
                  ie = "number(deg) or string(angle)";
                  break;
                case z:
                  if (re || (U && L.test(N))) return N;
                  ie = "number(unitless) or string(unit or %)";
              }
              return a(ie, N), N;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        P = l(m, function (f, b) {
          f.init = function () {
            b.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), C));
          };
        }),
        H = l(m, function (f, b) {
          (f.init = function () {
            b.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (w) {
              this.$el[this.name](w);
            });
        }),
        X = l(m, function (f, b) {
          function w(S, F) {
            var N, te, ie, re, U;
            for (N in S)
              (re = de[N]),
                (ie = re[0]),
                (te = re[1] || N),
                (U = this.convert(S[N], ie)),
                F.call(this, te, U, ie);
          }
          (f.init = function () {
            b.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  Y.perspective &&
                  ((this.current.perspective = Y.perspective),
                  p(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (S) {
              w.call(this, S, function (F, N) {
                this.current[F] = N;
              }),
                p(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (S) {
              var F = this.values(S);
              this.tween = new oe({
                current: this.current,
                values: F,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var N,
                te = {};
              for (N in this.current) te[N] = N in F ? F[N] : this.current[N];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (f.fallback = function (S) {
              var F = this.values(S);
              this.tween = new oe({
                current: this.current,
                values: F,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              p(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (S) {
              var F,
                N = "";
              for (F in S) N += F + "(" + S[F] + ") ";
              return N;
            }),
            (f.values = function (S) {
              var F,
                N = {};
              return (
                w.call(this, S, function (te, ie, re) {
                  (N[te] = ie),
                    this.current[te] === void 0 &&
                      ((F = 0),
                      ~te.indexOf("scale") && (F = 1),
                      (this.current[te] = this.convert(F, re)));
                }),
                N
              );
            });
        }),
        ee = l(function (f) {
          function b(U) {
            ie.push(U) === 1 && ue(w);
          }
          function w() {
            var U,
              ae,
              ce,
              ye = ie.length;
            if (ye)
              for (ue(w), ae = se(), U = ye; U--; )
                (ce = ie[U]), ce && ce.render(ae);
          }
          function S(U) {
            var ae,
              ce = e.inArray(U, ie);
            ce >= 0 &&
              ((ae = ie.slice(ce + 1)),
              (ie.length = ce),
              ae.length && (ie = ie.concat(ae)));
          }
          function F(U) {
            return Math.round(U * re) / re;
          }
          function N(U, ae, ce) {
            return i(
              U[0] + ce * (ae[0] - U[0]),
              U[1] + ce * (ae[1] - U[1]),
              U[2] + ce * (ae[2] - U[2])
            );
          }
          var te = { ease: h.ease[1], from: 0, to: 1 };
          (f.init = function (U) {
            (this.duration = U.duration || 0), (this.delay = U.delay || 0);
            var ae = U.ease || te.ease;
            h[ae] && (ae = h[ae][1]),
              typeof ae != "function" && (ae = te.ease),
              (this.ease = ae),
              (this.update = U.update || o),
              (this.complete = U.complete || o),
              (this.context = U.context || this),
              (this.name = U.name);
            var ce = U.from,
              ye = U.to;
            ce === void 0 && (ce = te.from),
              ye === void 0 && (ye = te.to),
              (this.unit = U.unit || ""),
              typeof ce == "number" && typeof ye == "number"
                ? ((this.begin = ce), (this.change = ye - ce))
                : this.format(ye, ce),
              (this.value = this.begin + this.unit),
              (this.start = se()),
              U.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = se()),
                (this.active = !0),
                b(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), S(this));
            }),
            (f.render = function (U) {
              var ae,
                ce = U - this.start;
              if (this.delay) {
                if (ce <= this.delay) return;
                ce -= this.delay;
              }
              if (ce < this.duration) {
                var ye = this.ease(ce, 0, 1, this.duration);
                return (
                  (ae = this.startRGB
                    ? N(this.startRGB, this.endRGB, ye)
                    : F(this.begin + ye * this.change)),
                  (this.value = ae + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ae = this.endHex || this.begin + this.change),
                (this.value = ae + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (U, ae) {
              if (((ae += ""), (U += ""), U.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ae)),
                  (this.endRGB = n(U)),
                  (this.endHex = U),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ce = ae.replace(I, ""),
                  ye = U.replace(I, "");
                ce !== ye && s("tween", ae, U), (this.unit = ce);
              }
              (ae = parseFloat(ae)),
                (U = parseFloat(U)),
                (this.begin = this.value = ae),
                (this.change = U - ae);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ie = [],
            re = 1e3;
        }),
        j = l(ee, function (f) {
          (f.init = function (b) {
            (this.duration = b.duration || 0),
              (this.complete = b.complete || o),
              (this.context = b.context),
              this.play();
          }),
            (f.render = function (b) {
              var w = b - this.start;
              w < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        oe = l(ee, function (f, b) {
          (f.init = function (w) {
            (this.context = w.context),
              (this.update = w.update),
              (this.tweens = []),
              (this.current = w.current);
            var S, F;
            for (S in w.values)
              (F = w.values[S]),
                this.current[S] !== F &&
                  this.tweens.push(
                    new ee({
                      name: S,
                      from: this.current[S],
                      to: F,
                      duration: w.duration,
                      delay: w.delay,
                      ease: w.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (w) {
              var S,
                F,
                N = this.tweens.length,
                te = !1;
              for (S = N; S--; )
                (F = this.tweens[S]),
                  F.context &&
                    (F.render(w), (this.current[F.name] = F.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((b.destroy.call(this), this.tweens)) {
                var w,
                  S = this.tweens.length;
                for (w = S; w--; ) this.tweens[w].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        Y = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!G.transition) return (Y.fallback = !0);
        Y.agentTests.push("(" + f + ")");
        var b = new RegExp(Y.agentTests.join("|"), "i");
        Y.fallback = b.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new ee(f);
        }),
        (t.delay = function (f, b, w) {
          return new j({ complete: b, duration: f, context: w });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var p = e.style,
        k = e.css,
        $ = { transform: G.transform && G.transform.css },
        B = {
          color: [P, C],
          background: [P, C, "background-color"],
          "outline-color": [P, C],
          "border-color": [P, C],
          "border-top-color": [P, C],
          "border-right-color": [P, C],
          "border-bottom-color": [P, C],
          "border-left-color": [P, C],
          "border-width": [m, M],
          "border-top-width": [m, M],
          "border-right-width": [m, M],
          "border-bottom-width": [m, M],
          "border-left-width": [m, M],
          "border-spacing": [m, M],
          "letter-spacing": [m, M],
          margin: [m, M],
          "margin-top": [m, M],
          "margin-right": [m, M],
          "margin-bottom": [m, M],
          "margin-left": [m, M],
          padding: [m, M],
          "padding-top": [m, M],
          "padding-right": [m, M],
          "padding-bottom": [m, M],
          "padding-left": [m, M],
          "outline-width": [m, M],
          opacity: [m, A],
          top: [m, L],
          right: [m, L],
          bottom: [m, L],
          left: [m, L],
          "font-size": [m, L],
          "text-indent": [m, L],
          "word-spacing": [m, L],
          width: [m, L],
          "min-width": [m, L],
          "max-width": [m, L],
          height: [m, L],
          "min-height": [m, L],
          "max-height": [m, L],
          "line-height": [m, z],
          "scroll-top": [H, A, "scrollTop"],
          "scroll-left": [H, A, "scrollLeft"],
        },
        de = {};
      G.transform &&
        ((B.transform = [X]),
        (de = {
          x: [L, "translateX"],
          y: [L, "translateY"],
          rotate: [W],
          rotateX: [W],
          rotateY: [W],
          scale: [A],
          scaleX: [A],
          scaleY: [A],
          skew: [W],
          skewX: [W],
          skewY: [W],
        })),
        G.transform &&
          G.backface &&
          ((de.z = [L, "translateZ"]),
          (de.rotateZ = [W]),
          (de.scaleZ = [A]),
          (de.perspective = [M]));
      var ke = /ms/,
        xe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ma = d((GF, va) => {
    "use strict";
    var em = window.$,
      tm = jn() && em.tram;
    va.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        c = n.hasOwnProperty,
        E = r.forEach,
        l = r.map,
        h = r.reduce,
        g = r.reduceRight,
        v = r.filter,
        _ = r.every,
        T = r.some,
        I = r.indexOf,
        x = r.lastIndexOf,
        A = Array.isArray,
        C = Object.keys,
        M = i.bind,
        L =
          (e.each =
          e.forEach =
            function (y, R, q) {
              if (y == null) return y;
              if (E && y.forEach === E) y.forEach(R, q);
              else if (y.length === +y.length) {
                for (var G = 0, Z = y.length; G < Z; G++)
                  if (R.call(q, y[G], G, y) === t) return;
              } else
                for (var J = e.keys(y), G = 0, Z = J.length; G < Z; G++)
                  if (R.call(q, y[J[G]], J[G], y) === t) return;
              return y;
            });
      (e.map = e.collect =
        function (y, R, q) {
          var G = [];
          return y == null
            ? G
            : l && y.map === l
            ? y.map(R, q)
            : (L(y, function (Z, J, ue) {
                G.push(R.call(q, Z, J, ue));
              }),
              G);
        }),
        (e.find = e.detect =
          function (y, R, q) {
            var G;
            return (
              W(y, function (Z, J, ue) {
                if (R.call(q, Z, J, ue)) return (G = Z), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (y, R, q) {
            var G = [];
            return y == null
              ? G
              : v && y.filter === v
              ? y.filter(R, q)
              : (L(y, function (Z, J, ue) {
                  R.call(q, Z, J, ue) && G.push(Z);
                }),
                G);
          });
      var W =
        (e.some =
        e.any =
          function (y, R, q) {
            R || (R = e.identity);
            var G = !1;
            return y == null
              ? G
              : T && y.some === T
              ? y.some(R, q)
              : (L(y, function (Z, J, ue) {
                  if (G || (G = R.call(q, Z, J, ue))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (y, R) {
          return y == null
            ? !1
            : I && y.indexOf === I
            ? y.indexOf(R) != -1
            : W(y, function (q) {
                return q === R;
              });
        }),
        (e.delay = function (y, R) {
          var q = a.call(arguments, 2);
          return setTimeout(function () {
            return y.apply(null, q);
          }, R);
        }),
        (e.defer = function (y) {
          return e.delay.apply(e, [y, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (y) {
          var R, q, G;
          return function () {
            R ||
              ((R = !0),
              (q = arguments),
              (G = this),
              tm.frame(function () {
                (R = !1), y.apply(G, q);
              }));
          };
        }),
        (e.debounce = function (y, R, q) {
          var G,
            Z,
            J,
            ue,
            se,
            be = function () {
              var D = e.now() - ue;
              D < R
                ? (G = setTimeout(be, R - D))
                : ((G = null), q || ((se = y.apply(J, Z)), (J = Z = null)));
            };
          return function () {
            (J = this), (Z = arguments), (ue = e.now());
            var D = q && !G;
            return (
              G || (G = setTimeout(be, R)),
              D && ((se = y.apply(J, Z)), (J = Z = null)),
              se
            );
          };
        }),
        (e.defaults = function (y) {
          if (!e.isObject(y)) return y;
          for (var R = 1, q = arguments.length; R < q; R++) {
            var G = arguments[R];
            for (var Z in G) y[Z] === void 0 && (y[Z] = G[Z]);
          }
          return y;
        }),
        (e.keys = function (y) {
          if (!e.isObject(y)) return [];
          if (C) return C(y);
          var R = [];
          for (var q in y) e.has(y, q) && R.push(q);
          return R;
        }),
        (e.has = function (y, R) {
          return c.call(y, R);
        }),
        (e.isObject = function (y) {
          return y === Object(y);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        K = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        Q = /\\|'|\r|\n|\u2028|\u2029/g,
        V = function (y) {
          return "\\" + K[y];
        },
        O = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (y, R, q) {
          !R && q && (R = q), (R = e.defaults({}, R, e.templateSettings));
          var G = RegExp(
              [
                (R.escape || z).source,
                (R.interpolate || z).source,
                (R.evaluate || z).source,
              ].join("|") + "|$",
              "g"
            ),
            Z = 0,
            J = "__p+='";
          y.replace(G, function (D, m, P, H, X) {
            return (
              (J += y.slice(Z, X).replace(Q, V)),
              (Z = X + D.length),
              m
                ? (J +=
                    `'+
    ((__t=(` +
                    m +
                    `))==null?'':_.escape(__t))+
    '`)
                : P
                ? (J +=
                    `'+
    ((__t=(` +
                    P +
                    `))==null?'':__t)+
    '`)
                : H &&
                  (J +=
                    `';
    ` +
                    H +
                    `
    __p+='`),
              D
            );
          }),
            (J += `';
    `);
          var ue = R.variable;
          if (ue) {
            if (!O.test(ue))
              throw new Error("variable is not a bare identifier: " + ue);
          } else
            (J =
              `with(obj||{}){
    ` +
              J +
              `}
    `),
              (ue = "obj");
          J =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            J +
            `return __p;
    `;
          var se;
          try {
            se = new Function(R.variable || "obj", "_", J);
          } catch (D) {
            throw ((D.source = J), D);
          }
          var be = function (D) {
            return se.call(this, D, e);
          };
          return (
            (be.source =
              "function(" +
              ue +
              `){
    ` +
              J +
              "}"),
            be
          );
        }),
        e
      );
    })();
  });
  var De = d((XF, Aa) => {
    "use strict";
    var ge = {},
      wt = {},
      At = [],
      Qn = window.Webflow || [],
      ut = window.jQuery,
      Be = ut(window),
      rm = ut(document),
      Qe = ut.isFunction,
      He = (ge._ = ma()),
      ya = (ge.tram = jn() && ut.tram),
      Nr = !1,
      $n = !1;
    ya.config.hideBackface = !1;
    ya.config.keepInherited = !0;
    ge.define = function (e, t, r) {
      wt[e] && Ia(wt[e]);
      var n = (wt[e] = t(ut, He, r) || {});
      return _a(n), n;
    };
    ge.require = function (e) {
      return wt[e];
    };
    function _a(e) {
      ge.env() &&
        (Qe(e.design) && Be.on("__wf_design", e.design),
        Qe(e.preview) && Be.on("__wf_preview", e.preview)),
        Qe(e.destroy) && Be.on("__wf_destroy", e.destroy),
        e.ready && Qe(e.ready) && nm(e);
    }
    function nm(e) {
      if (Nr) {
        e.ready();
        return;
      }
      He.contains(At, e.ready) || At.push(e.ready);
    }
    function Ia(e) {
      Qe(e.design) && Be.off("__wf_design", e.design),
        Qe(e.preview) && Be.off("__wf_preview", e.preview),
        Qe(e.destroy) && Be.off("__wf_destroy", e.destroy),
        e.ready && Qe(e.ready) && im(e);
    }
    function im(e) {
      At = He.filter(At, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (Nr) {
        Qe(e) && e();
        return;
      }
      Qn.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Pr = navigator.userAgent.toLowerCase(),
      ba = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      om = (ge.env.chrome =
        /chrome/.test(Pr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Pr.match(/chrome\/(\d+)\./)[1], 10)),
      am = (ge.env.ios = /(ipod|iphone|ipad)/.test(Pr));
    ge.env.safari = /safari/.test(Pr) && !om && !am;
    var Yn;
    ba &&
      rm.on("touchstart mousedown", function (e) {
        Yn = e.target;
      });
    ge.validClick = ba
      ? function (e) {
          return e === Yn || ut.contains(e, Yn);
        }
      : function () {
          return !0;
        };
    var Ta = "resize.webflow orientationchange.webflow load.webflow",
      sm = "scroll.webflow " + Ta;
    ge.resize = Zn(Be, Ta);
    ge.scroll = Zn(Be, sm);
    ge.redraw = Zn();
    function Zn(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = He.throttle(function (i) {
          He.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (He.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = He.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (Nr = !0), $n ? um() : He.each(At, Ea), He.each(Qn, Ea), ge.resize.up();
    };
    function Ea(e) {
      Qe(e) && e();
    }
    function um() {
      ($n = !1), He.each(wt, _a);
    }
    var vt;
    ge.load = function (e) {
      vt.then(e);
    };
    function wa() {
      vt && (vt.reject(), Be.off("load", vt.resolve)),
        (vt = new ut.Deferred()),
        Be.on("load", vt.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        ($n = !0),
        Be.triggerHandler("__wf_destroy"),
        e.domready != null && (Nr = e.domready),
        He.each(wt, Ia),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (At = []),
        (Qn = []),
        vt.state() === "pending" && wa();
    };
    ut(ge.ready);
    wa();
    Aa.exports = window.Webflow = ge;
  });
  var Oa = d((VF, Sa) => {
    "use strict";
    var xa = De();
    xa.define(
      "brand",
      (Sa.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          c;
        t.ready = function () {
          var g = n.attr("data-wf-status"),
            v = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(v) && a.hostname !== v && (g = !0),
            g &&
              !s &&
              ((c = c || l()),
              h(),
              setTimeout(h, 500),
              e(r).off(u, E).on(u, E));
        };
        function E() {
          var g =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(c).attr("style", g ? "display: none !important;" : "");
        }
        function l() {
          var g = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            v = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return g.append(v, _), g[0];
        }
        function h() {
          var g = i.children(o),
            v = g.length && g.get(0) === c,
            _ = xa.env("editor");
          if (v) {
            _ && g.remove();
            return;
          }
          g.length && g.remove(), _ || i.append(c);
        }
        return t;
      })
    );
  });
  var Ca = d((UF, Ra) => {
    "use strict";
    var Jn = De();
    Jn.define(
      "edit",
      (Ra.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Jn.env("test") || Jn.env("frame")) && !r.fixture && !cm())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          c = r.load || h,
          E = !1;
        try {
          E =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        E
          ? c()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            c()
          : i.on(s, l).triggerHandler(s);
        function l() {
          u || (/\?edit/.test(a.hash) && c());
        }
        function h() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, l),
            x(function (C) {
              e.ajax({
                url: I("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: g(C),
              });
            });
        }
        function g(C) {
          return function (M) {
            if (!M) {
              console.error("Could not load editor data");
              return;
            }
            (M.thirdPartyCookiesSupported = C),
              v(T(M.scriptPath), function () {
                window.WebflowEditor(M);
              });
          };
        }
        function v(C, M) {
          e.ajax({ type: "GET", url: C, dataType: "script", cache: !0 }).then(
            M,
            _
          );
        }
        function _(C, M, L) {
          throw (console.error("Could not load editor script: " + M), L);
        }
        function T(C) {
          return C.indexOf("//") >= 0
            ? C
            : I("https://editor-api.webflow.com" + C);
        }
        function I(C) {
          return C.replace(/([^:])\/\//g, "$1/");
        }
        function x(C) {
          var M = window.document.createElement("iframe");
          (M.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (M.style.display = "none"),
            (M.sandbox = "allow-scripts allow-same-origin");
          var L = function (W) {
            W.data === "WF_third_party_cookies_unsupported"
              ? (A(M, L), C(!1))
              : W.data === "WF_third_party_cookies_supported" &&
                (A(M, L), C(!0));
          };
          (M.onerror = function () {
            A(M, L), C(!1);
          }),
            window.addEventListener("message", L, !1),
            window.document.body.appendChild(M);
        }
        function A(C, M) {
          window.removeEventListener("message", M, !1), C.remove();
        }
        return n;
      })
    );
    function cm() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Pa = d((HF, La) => {
    "use strict";
    var lm = De();
    lm.define(
      "focus-visible",
      (La.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(A) {
            return !!(
              A &&
              A !== document &&
              A.nodeName !== "HTML" &&
              A.nodeName !== "BODY" &&
              "classList" in A &&
              "contains" in A.classList
            );
          }
          function u(A) {
            var C = A.type,
              M = A.tagName;
            return !!(
              (M === "INPUT" && a[C] && !A.readOnly) ||
              (M === "TEXTAREA" && !A.readOnly) ||
              A.isContentEditable
            );
          }
          function c(A) {
            A.getAttribute("data-wf-focus-visible") ||
              A.setAttribute("data-wf-focus-visible", "true");
          }
          function E(A) {
            A.getAttribute("data-wf-focus-visible") &&
              A.removeAttribute("data-wf-focus-visible");
          }
          function l(A) {
            A.metaKey ||
              A.altKey ||
              A.ctrlKey ||
              (s(r.activeElement) && c(r.activeElement), (n = !0));
          }
          function h() {
            n = !1;
          }
          function g(A) {
            s(A.target) && (n || u(A.target)) && c(A.target);
          }
          function v(A) {
            s(A.target) &&
              A.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              E(A.target));
          }
          function _() {
            document.visibilityState === "hidden" && (i && (n = !0), T());
          }
          function T() {
            document.addEventListener("mousemove", x),
              document.addEventListener("mousedown", x),
              document.addEventListener("mouseup", x),
              document.addEventListener("pointermove", x),
              document.addEventListener("pointerdown", x),
              document.addEventListener("pointerup", x),
              document.addEventListener("touchmove", x),
              document.addEventListener("touchstart", x),
              document.addEventListener("touchend", x);
          }
          function I() {
            document.removeEventListener("mousemove", x),
              document.removeEventListener("mousedown", x),
              document.removeEventListener("mouseup", x),
              document.removeEventListener("pointermove", x),
              document.removeEventListener("pointerdown", x),
              document.removeEventListener("pointerup", x),
              document.removeEventListener("touchmove", x),
              document.removeEventListener("touchstart", x),
              document.removeEventListener("touchend", x);
          }
          function x(A) {
            (A.target.nodeName && A.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), I());
          }
          document.addEventListener("keydown", l, !0),
            document.addEventListener("mousedown", h, !0),
            document.addEventListener("pointerdown", h, !0),
            document.addEventListener("touchstart", h, !0),
            document.addEventListener("visibilitychange", _, !0),
            T(),
            r.addEventListener("focus", g, !0),
            r.addEventListener("blur", v, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ma = d((BF, Da) => {
    "use strict";
    var Na = De();
    Na.define(
      "focus",
      (Da.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Na.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var ka = d((WF, qa) => {
    "use strict";
    var ei = window.jQuery,
      $e = {},
      Dr = [],
      Fa = ".w-ix",
      Mr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ei(t).triggerHandler($e.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ei(t).triggerHandler($e.types.OUTRO));
        },
      };
    $e.triggers = {};
    $e.types = { INTRO: "w-ix-intro" + Fa, OUTRO: "w-ix-outro" + Fa };
    $e.init = function () {
      for (var e = Dr.length, t = 0; t < e; t++) {
        var r = Dr[t];
        r[0](0, r[1]);
      }
      (Dr = []), ei.extend($e.triggers, Mr);
    };
    $e.async = function () {
      for (var e in Mr) {
        var t = Mr[e];
        Mr.hasOwnProperty(e) &&
          ($e.triggers[e] = function (r, n) {
            Dr.push([t, n]);
          });
      }
    };
    $e.async();
    qa.exports = $e;
  });
  var qr = d((zF, Va) => {
    "use strict";
    var ti = ka();
    function Ga(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var fm = window.jQuery,
      Fr = {},
      Xa = ".w-ix",
      dm = {
        reset: function (e, t) {
          ti.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ti.triggers.intro(e, t), Ga(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ti.triggers.outro(e, t), Ga(t, "COMPONENT_INACTIVE");
        },
      };
    Fr.triggers = {};
    Fr.types = { INTRO: "w-ix-intro" + Xa, OUTRO: "w-ix-outro" + Xa };
    fm.extend(Fr.triggers, dm);
    Va.exports = Fr;
  });
  var ri = d((KF, Ua) => {
    var pm =
      typeof global == "object" && global && global.Object === Object && global;
    Ua.exports = pm;
  });
  var We = d((jF, Ha) => {
    var gm = ri(),
      hm = typeof self == "object" && self && self.Object === Object && self,
      vm = gm || hm || Function("return this")();
    Ha.exports = vm;
  });
  var xt = d((YF, Ba) => {
    var mm = We(),
      Em = mm.Symbol;
    Ba.exports = Em;
  });
  var ja = d((QF, Ka) => {
    var Wa = xt(),
      za = Object.prototype,
      ym = za.hasOwnProperty,
      _m = za.toString,
      er = Wa ? Wa.toStringTag : void 0;
    function Im(e) {
      var t = ym.call(e, er),
        r = e[er];
      try {
        e[er] = void 0;
        var n = !0;
      } catch {}
      var i = _m.call(e);
      return n && (t ? (e[er] = r) : delete e[er]), i;
    }
    Ka.exports = Im;
  });
  var Qa = d(($F, Ya) => {
    var bm = Object.prototype,
      Tm = bm.toString;
    function wm(e) {
      return Tm.call(e);
    }
    Ya.exports = wm;
  });
  var ct = d((ZF, Ja) => {
    var $a = xt(),
      Am = ja(),
      xm = Qa(),
      Sm = "[object Null]",
      Om = "[object Undefined]",
      Za = $a ? $a.toStringTag : void 0;
    function Rm(e) {
      return e == null
        ? e === void 0
          ? Om
          : Sm
        : Za && Za in Object(e)
        ? Am(e)
        : xm(e);
    }
    Ja.exports = Rm;
  });
  var ni = d((JF, es) => {
    function Cm(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    es.exports = Cm;
  });
  var ii = d((e1, ts) => {
    var Lm = ni(),
      Pm = Lm(Object.getPrototypeOf, Object);
    ts.exports = Pm;
  });
  var nt = d((t1, rs) => {
    function Nm(e) {
      return e != null && typeof e == "object";
    }
    rs.exports = Nm;
  });
  var oi = d((r1, is) => {
    var Dm = ct(),
      Mm = ii(),
      Fm = nt(),
      qm = "[object Object]",
      km = Function.prototype,
      Gm = Object.prototype,
      ns = km.toString,
      Xm = Gm.hasOwnProperty,
      Vm = ns.call(Object);
    function Um(e) {
      if (!Fm(e) || Dm(e) != qm) return !1;
      var t = Mm(e);
      if (t === null) return !0;
      var r = Xm.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ns.call(r) == Vm;
    }
    is.exports = Um;
  });
  var os = d((ai) => {
    "use strict";
    Object.defineProperty(ai, "__esModule", { value: !0 });
    ai.default = Hm;
    function Hm(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var as = d((ui, si) => {
    "use strict";
    Object.defineProperty(ui, "__esModule", { value: !0 });
    var Bm = os(),
      Wm = zm(Bm);
    function zm(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var St;
    typeof self < "u"
      ? (St = self)
      : typeof window < "u"
      ? (St = window)
      : typeof global < "u"
      ? (St = global)
      : typeof si < "u"
      ? (St = si)
      : (St = Function("return this")());
    var Km = (0, Wm.default)(St);
    ui.default = Km;
  });
  var ci = d((tr) => {
    "use strict";
    tr.__esModule = !0;
    tr.ActionTypes = void 0;
    tr.default = ls;
    var jm = oi(),
      Ym = cs(jm),
      Qm = as(),
      ss = cs(Qm);
    function cs(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var us = (tr.ActionTypes = { INIT: "@@redux/INIT" });
    function ls(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(ls)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function c() {
        s === a && (s = a.slice());
      }
      function E() {
        return o;
      }
      function l(_) {
        if (typeof _ != "function")
          throw new Error("Expected listener to be a function.");
        var T = !0;
        return (
          c(),
          s.push(_),
          function () {
            if (T) {
              (T = !1), c();
              var x = s.indexOf(_);
              s.splice(x, 1);
            }
          }
        );
      }
      function h(_) {
        if (!(0, Ym.default)(_))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof _.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, _));
        } finally {
          u = !1;
        }
        for (var T = (a = s), I = 0; I < T.length; I++) T[I]();
        return _;
      }
      function g(_) {
        if (typeof _ != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = _), h({ type: us.INIT });
      }
      function v() {
        var _,
          T = l;
        return (
          (_ = {
            subscribe: function (x) {
              if (typeof x != "object")
                throw new TypeError("Expected the observer to be an object.");
              function A() {
                x.next && x.next(E());
              }
              A();
              var C = T(A);
              return { unsubscribe: C };
            },
          }),
          (_[ss.default] = function () {
            return this;
          }),
          _
        );
      }
      return (
        h({ type: us.INIT }),
        (n = { dispatch: h, subscribe: l, getState: E, replaceReducer: g }),
        (n[ss.default] = v),
        n
      );
    }
  });
  var fi = d((li) => {
    "use strict";
    li.__esModule = !0;
    li.default = $m;
    function $m(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var ps = d((di) => {
    "use strict";
    di.__esModule = !0;
    di.default = rE;
    var fs = ci(),
      Zm = oi(),
      a1 = ds(Zm),
      Jm = fi(),
      s1 = ds(Jm);
    function ds(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function eE(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function tE(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: fs.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                fs.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function rE(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        tE(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var c =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          E = arguments[1];
        if (s) throw s;
        if (!1) var l;
        for (var h = !1, g = {}, v = 0; v < o.length; v++) {
          var _ = o[v],
            T = r[_],
            I = c[_],
            x = T(I, E);
          if (typeof x > "u") {
            var A = eE(_, E);
            throw new Error(A);
          }
          (g[_] = x), (h = h || x !== I);
        }
        return h ? g : c;
      };
    }
  });
  var hs = d((pi) => {
    "use strict";
    pi.__esModule = !0;
    pi.default = nE;
    function gs(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function nE(e, t) {
      if (typeof e == "function") return gs(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = gs(a, t));
      }
      return n;
    }
  });
  var hi = d((gi) => {
    "use strict";
    gi.__esModule = !0;
    gi.default = iE;
    function iE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var vs = d((vi) => {
    "use strict";
    vi.__esModule = !0;
    var oE =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    vi.default = cE;
    var aE = hi(),
      sE = uE(aE);
    function uE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function cE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            c = [],
            E = {
              getState: s.getState,
              dispatch: function (h) {
                return u(h);
              },
            };
          return (
            (c = t.map(function (l) {
              return l(E);
            })),
            (u = sE.default.apply(void 0, c)(s.dispatch)),
            oE({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var mi = d((Xe) => {
    "use strict";
    Xe.__esModule = !0;
    Xe.compose =
      Xe.applyMiddleware =
      Xe.bindActionCreators =
      Xe.combineReducers =
      Xe.createStore =
        void 0;
    var lE = ci(),
      fE = Ot(lE),
      dE = ps(),
      pE = Ot(dE),
      gE = hs(),
      hE = Ot(gE),
      vE = vs(),
      mE = Ot(vE),
      EE = hi(),
      yE = Ot(EE),
      _E = fi(),
      d1 = Ot(_E);
    function Ot(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Xe.createStore = fE.default;
    Xe.combineReducers = pE.default;
    Xe.bindActionCreators = hE.default;
    Xe.applyMiddleware = mE.default;
    Xe.compose = yE.default;
  });
  var ze,
    Ei,
    Ze,
    IE,
    bE,
    kr,
    TE,
    yi = ve(() => {
      "use strict";
      (ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Ei = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Ze = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (IE = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (bE = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (kr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (TE = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Re,
    wE,
    Gr = ve(() => {
      "use strict";
      (Re = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (wE = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var AE,
    ms = ve(() => {
      "use strict";
      AE = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var xE,
    SE,
    OE,
    RE,
    CE,
    LE,
    PE,
    _i,
    Es = ve(() => {
      "use strict";
      Gr();
      ({
        TRANSFORM_MOVE: xE,
        TRANSFORM_SCALE: SE,
        TRANSFORM_ROTATE: OE,
        TRANSFORM_SKEW: RE,
        STYLE_SIZE: CE,
        STYLE_FILTER: LE,
        STYLE_FONT_VARIATION: PE,
      } = Re),
        (_i = {
          [xE]: !0,
          [SE]: !0,
          [OE]: !0,
          [RE]: !0,
          [CE]: !0,
          [LE]: !0,
          [PE]: !0,
        });
    });
  var Ie = {};
  Ne(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => YE,
    IX2_ANIMATION_FRAME_CHANGED: () => HE,
    IX2_CLEAR_REQUESTED: () => XE,
    IX2_ELEMENT_STATE_CHANGED: () => jE,
    IX2_EVENT_LISTENER_ADDED: () => VE,
    IX2_EVENT_STATE_CHANGED: () => UE,
    IX2_INSTANCE_ADDED: () => WE,
    IX2_INSTANCE_REMOVED: () => KE,
    IX2_INSTANCE_STARTED: () => zE,
    IX2_MEDIA_QUERIES_DEFINED: () => $E,
    IX2_PARAMETER_CHANGED: () => BE,
    IX2_PLAYBACK_REQUESTED: () => kE,
    IX2_PREVIEW_REQUESTED: () => qE,
    IX2_RAW_DATA_IMPORTED: () => NE,
    IX2_SESSION_INITIALIZED: () => DE,
    IX2_SESSION_STARTED: () => ME,
    IX2_SESSION_STOPPED: () => FE,
    IX2_STOP_REQUESTED: () => GE,
    IX2_TEST_FRAME_RENDERED: () => ZE,
    IX2_VIEWPORT_WIDTH_CHANGED: () => QE,
  });
  var NE,
    DE,
    ME,
    FE,
    qE,
    kE,
    GE,
    XE,
    VE,
    UE,
    HE,
    BE,
    WE,
    zE,
    KE,
    jE,
    YE,
    QE,
    $E,
    ZE,
    ys = ve(() => {
      "use strict";
      (NE = "IX2_RAW_DATA_IMPORTED"),
        (DE = "IX2_SESSION_INITIALIZED"),
        (ME = "IX2_SESSION_STARTED"),
        (FE = "IX2_SESSION_STOPPED"),
        (qE = "IX2_PREVIEW_REQUESTED"),
        (kE = "IX2_PLAYBACK_REQUESTED"),
        (GE = "IX2_STOP_REQUESTED"),
        (XE = "IX2_CLEAR_REQUESTED"),
        (VE = "IX2_EVENT_LISTENER_ADDED"),
        (UE = "IX2_EVENT_STATE_CHANGED"),
        (HE = "IX2_ANIMATION_FRAME_CHANGED"),
        (BE = "IX2_PARAMETER_CHANGED"),
        (WE = "IX2_INSTANCE_ADDED"),
        (zE = "IX2_INSTANCE_STARTED"),
        (KE = "IX2_INSTANCE_REMOVED"),
        (jE = "IX2_ELEMENT_STATE_CHANGED"),
        (YE = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (QE = "IX2_VIEWPORT_WIDTH_CHANGED"),
        ($E = "IX2_MEDIA_QUERIES_DEFINED"),
        (ZE = "IX2_TEST_FRAME_RENDERED");
    });
  var Ae = {};
  Ne(Ae, {
    ABSTRACT_NODE: () => Qy,
    AUTO: () => Gy,
    BACKGROUND: () => Ny,
    BACKGROUND_COLOR: () => Py,
    BAR_DELIMITER: () => Uy,
    BORDER_COLOR: () => Dy,
    BOUNDARY_SELECTOR: () => ny,
    CHILDREN: () => Hy,
    COLON_DELIMITER: () => Vy,
    COLOR: () => My,
    COMMA_DELIMITER: () => Xy,
    CONFIG_UNIT: () => fy,
    CONFIG_VALUE: () => sy,
    CONFIG_X_UNIT: () => uy,
    CONFIG_X_VALUE: () => iy,
    CONFIG_Y_UNIT: () => cy,
    CONFIG_Y_VALUE: () => oy,
    CONFIG_Z_UNIT: () => ly,
    CONFIG_Z_VALUE: () => ay,
    DISPLAY: () => Fy,
    FILTER: () => Oy,
    FLEX: () => qy,
    FONT_VARIATION_SETTINGS: () => Ry,
    HEIGHT: () => Ly,
    HTML_ELEMENT: () => jy,
    IMMEDIATE_CHILDREN: () => By,
    IX2_ID_DELIMITER: () => JE,
    OPACITY: () => Sy,
    PARENT: () => zy,
    PLAIN_OBJECT: () => Yy,
    PRESERVE_3D: () => Ky,
    RENDER_GENERAL: () => Zy,
    RENDER_PLUGIN: () => e_,
    RENDER_STYLE: () => Jy,
    RENDER_TRANSFORM: () => $y,
    ROTATE_X: () => Iy,
    ROTATE_Y: () => by,
    ROTATE_Z: () => Ty,
    SCALE_3D: () => _y,
    SCALE_X: () => my,
    SCALE_Y: () => Ey,
    SCALE_Z: () => yy,
    SIBLINGS: () => Wy,
    SKEW: () => wy,
    SKEW_X: () => Ay,
    SKEW_Y: () => xy,
    TRANSFORM: () => dy,
    TRANSLATE_3D: () => vy,
    TRANSLATE_X: () => py,
    TRANSLATE_Y: () => gy,
    TRANSLATE_Z: () => hy,
    WF_PAGE: () => ey,
    WIDTH: () => Cy,
    WILL_CHANGE: () => ky,
    W_MOD_IX: () => ry,
    W_MOD_JS: () => ty,
  });
  var JE,
    ey,
    ty,
    ry,
    ny,
    iy,
    oy,
    ay,
    sy,
    uy,
    cy,
    ly,
    fy,
    dy,
    py,
    gy,
    hy,
    vy,
    my,
    Ey,
    yy,
    _y,
    Iy,
    by,
    Ty,
    wy,
    Ay,
    xy,
    Sy,
    Oy,
    Ry,
    Cy,
    Ly,
    Py,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    ky,
    Gy,
    Xy,
    Vy,
    Uy,
    Hy,
    By,
    Wy,
    zy,
    Ky,
    jy,
    Yy,
    Qy,
    $y,
    Zy,
    Jy,
    e_,
    _s = ve(() => {
      "use strict";
      (JE = "|"),
        (ey = "data-wf-page"),
        (ty = "w-mod-js"),
        (ry = "w-mod-ix"),
        (ny = ".w-dyn-item"),
        (iy = "xValue"),
        (oy = "yValue"),
        (ay = "zValue"),
        (sy = "value"),
        (uy = "xUnit"),
        (cy = "yUnit"),
        (ly = "zUnit"),
        (fy = "unit"),
        (dy = "transform"),
        (py = "translateX"),
        (gy = "translateY"),
        (hy = "translateZ"),
        (vy = "translate3d"),
        (my = "scaleX"),
        (Ey = "scaleY"),
        (yy = "scaleZ"),
        (_y = "scale3d"),
        (Iy = "rotateX"),
        (by = "rotateY"),
        (Ty = "rotateZ"),
        (wy = "skew"),
        (Ay = "skewX"),
        (xy = "skewY"),
        (Sy = "opacity"),
        (Oy = "filter"),
        (Ry = "font-variation-settings"),
        (Cy = "width"),
        (Ly = "height"),
        (Py = "backgroundColor"),
        (Ny = "background"),
        (Dy = "borderColor"),
        (My = "color"),
        (Fy = "display"),
        (qy = "flex"),
        (ky = "willChange"),
        (Gy = "AUTO"),
        (Xy = ","),
        (Vy = ":"),
        (Uy = "|"),
        (Hy = "CHILDREN"),
        (By = "IMMEDIATE_CHILDREN"),
        (Wy = "SIBLINGS"),
        (zy = "PARENT"),
        (Ky = "preserve-3d"),
        (jy = "HTML_ELEMENT"),
        (Yy = "PLAIN_OBJECT"),
        (Qy = "ABSTRACT_NODE"),
        ($y = "RENDER_TRANSFORM"),
        (Zy = "RENDER_GENERAL"),
        (Jy = "RENDER_STYLE"),
        (e_ = "RENDER_PLUGIN");
    });
  var Is = {};
  Ne(Is, {
    ActionAppliesTo: () => wE,
    ActionTypeConsts: () => Re,
    EventAppliesTo: () => Ei,
    EventBasedOn: () => Ze,
    EventContinuousMouseAxes: () => IE,
    EventLimitAffectedElements: () => bE,
    EventTypeConsts: () => ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Ae,
    InteractionTypeConsts: () => AE,
    QuickEffectDirectionConsts: () => TE,
    QuickEffectIds: () => kr,
    ReducedMotionTypes: () => _i,
  });
  var Me = ve(() => {
    "use strict";
    yi();
    Gr();
    ms();
    Es();
    ys();
    _s();
    Gr();
    yi();
  });
  var t_,
    bs,
    Ts = ve(() => {
      "use strict";
      Me();
      ({ IX2_RAW_DATA_IMPORTED: t_ } = Ie),
        (bs = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case t_:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Rt = d((Ee) => {
    "use strict";
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    var r_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Ee.clone = Vr;
    Ee.addLast = xs;
    Ee.addFirst = Ss;
    Ee.removeLast = Os;
    Ee.removeFirst = Rs;
    Ee.insert = Cs;
    Ee.removeAt = Ls;
    Ee.replaceAt = Ps;
    Ee.getIn = Ur;
    Ee.set = Hr;
    Ee.setIn = Br;
    Ee.update = Ds;
    Ee.updateIn = Ms;
    Ee.merge = Fs;
    Ee.mergeDeep = qs;
    Ee.mergeIn = ks;
    Ee.omit = Gs;
    Ee.addDefaults = Xs;
    var ws = "INVALID_ARGS";
    function As(e) {
      throw new Error(e);
    }
    function Ii(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var n_ = {}.hasOwnProperty;
    function Vr(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ii(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Fe(e, t, r) {
      var n = r;
      n == null && As(ws);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var c = a[u];
        if (c != null) {
          var E = Ii(c);
          if (E.length)
            for (var l = 0; l <= E.length; l++) {
              var h = E[l];
              if (!(e && n[h] !== void 0)) {
                var g = c[h];
                t && Xr(n[h]) && Xr(g) && (g = Fe(e, t, n[h], g)),
                  !(g === void 0 || g === n[h]) &&
                    (i || ((i = !0), (n = Vr(n))), (n[h] = g));
              }
            }
        }
      }
      return n;
    }
    function Xr(e) {
      var t = typeof e > "u" ? "undefined" : r_(e);
      return e != null && (t === "object" || t === "function");
    }
    function xs(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Ss(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Os(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Rs(e) {
      return e.length ? e.slice(1) : e;
    }
    function Cs(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Ls(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Ps(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Ur(e, t) {
      if ((!Array.isArray(t) && As(ws), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Hr(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Vr(i);
      return (o[t] = r), o;
    }
    function Ns(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Xr(e) && Xr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Ns(a, t, r, n + 1);
      }
      return Hr(e, o, i);
    }
    function Br(e, t, r) {
      return t.length ? Ns(e, t, r, 0) : r;
    }
    function Ds(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Hr(e, t, i);
    }
    function Ms(e, t, r) {
      var n = Ur(e, t),
        i = r(n);
      return Br(e, t, i);
    }
    function Fs(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Fe(!1, !1, e, t, r, n, i, o);
    }
    function qs(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Fe(!1, !0, e, t, r, n, i, o);
    }
    function ks(e, t, r, n, i, o, a) {
      var s = Ur(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          c = arguments.length,
          E = Array(c > 7 ? c - 7 : 0),
          l = 7;
        l < c;
        l++
      )
        E[l - 7] = arguments[l];
      return (
        E.length
          ? (u = Fe.call.apply(Fe, [null, !1, !1, s, r, n, i, o, a].concat(E)))
          : (u = Fe(!1, !1, s, r, n, i, o, a)),
        Br(e, t, u)
      );
    }
    function Gs(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (n_.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Ii(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Xs(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Fe(!0, !1, e, t, r, n, i, o);
    }
    var i_ = {
      clone: Vr,
      addLast: xs,
      addFirst: Ss,
      removeLast: Os,
      removeFirst: Rs,
      insert: Cs,
      removeAt: Ls,
      replaceAt: Ps,
      getIn: Ur,
      set: Hr,
      setIn: Br,
      update: Ds,
      updateIn: Ms,
      merge: Fs,
      mergeDeep: qs,
      mergeIn: ks,
      omit: Gs,
      addDefaults: Xs,
    };
    Ee.default = i_;
  });
  var Us,
    o_,
    a_,
    s_,
    u_,
    c_,
    Vs,
    Hs,
    Bs = ve(() => {
      "use strict";
      Me();
      (Us = fe(Rt())),
        ({
          IX2_PREVIEW_REQUESTED: o_,
          IX2_PLAYBACK_REQUESTED: a_,
          IX2_STOP_REQUESTED: s_,
          IX2_CLEAR_REQUESTED: u_,
        } = Ie),
        (c_ = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Vs = Object.create(null, {
          [o_]: { value: "preview" },
          [a_]: { value: "playback" },
          [s_]: { value: "stop" },
          [u_]: { value: "clear" },
        })),
        (Hs = (e = c_, t) => {
          if (t.type in Vs) {
            let r = [Vs[t.type]];
            return (0, Us.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ce,
    l_,
    f_,
    d_,
    p_,
    g_,
    h_,
    v_,
    m_,
    E_,
    y_,
    Ws,
    __,
    zs,
    Ks = ve(() => {
      "use strict";
      Me();
      (Ce = fe(Rt())),
        ({
          IX2_SESSION_INITIALIZED: l_,
          IX2_SESSION_STARTED: f_,
          IX2_TEST_FRAME_RENDERED: d_,
          IX2_SESSION_STOPPED: p_,
          IX2_EVENT_LISTENER_ADDED: g_,
          IX2_EVENT_STATE_CHANGED: h_,
          IX2_ANIMATION_FRAME_CHANGED: v_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: m_,
          IX2_VIEWPORT_WIDTH_CHANGED: E_,
          IX2_MEDIA_QUERIES_DEFINED: y_,
        } = Ie),
        (Ws = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (__ = 20),
        (zs = (e = Ws, t) => {
          switch (t.type) {
            case l_: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ce.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case f_:
              return (0, Ce.set)(e, "active", !0);
            case d_: {
              let {
                payload: { step: r = __ },
              } = t;
              return (0, Ce.set)(e, "tick", e.tick + r);
            }
            case p_:
              return Ws;
            case v_: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ce.set)(e, "tick", r);
            }
            case g_: {
              let r = (0, Ce.addLast)(e.eventListeners, t.payload);
              return (0, Ce.set)(e, "eventListeners", r);
            }
            case h_: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ce.setIn)(e, ["eventState", r], n);
            }
            case m_: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ce.setIn)(e, ["playbackState", r], n);
            }
            case E_: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: c } = n[a];
                if (r >= u && r <= c) {
                  o = s;
                  break;
                }
              }
              return (0, Ce.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case y_:
              return (0, Ce.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Ys = d((P1, js) => {
    function I_() {
      (this.__data__ = []), (this.size = 0);
    }
    js.exports = I_;
  });
  var Wr = d((N1, Qs) => {
    function b_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Qs.exports = b_;
  });
  var rr = d((D1, $s) => {
    var T_ = Wr();
    function w_(e, t) {
      for (var r = e.length; r--; ) if (T_(e[r][0], t)) return r;
      return -1;
    }
    $s.exports = w_;
  });
  var Js = d((M1, Zs) => {
    var A_ = rr(),
      x_ = Array.prototype,
      S_ = x_.splice;
    function O_(e) {
      var t = this.__data__,
        r = A_(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : S_.call(t, r, 1), --this.size, !0;
    }
    Zs.exports = O_;
  });
  var tu = d((F1, eu) => {
    var R_ = rr();
    function C_(e) {
      var t = this.__data__,
        r = R_(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    eu.exports = C_;
  });
  var nu = d((q1, ru) => {
    var L_ = rr();
    function P_(e) {
      return L_(this.__data__, e) > -1;
    }
    ru.exports = P_;
  });
  var ou = d((k1, iu) => {
    var N_ = rr();
    function D_(e, t) {
      var r = this.__data__,
        n = N_(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    iu.exports = D_;
  });
  var nr = d((G1, au) => {
    var M_ = Ys(),
      F_ = Js(),
      q_ = tu(),
      k_ = nu(),
      G_ = ou();
    function Ct(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ct.prototype.clear = M_;
    Ct.prototype.delete = F_;
    Ct.prototype.get = q_;
    Ct.prototype.has = k_;
    Ct.prototype.set = G_;
    au.exports = Ct;
  });
  var uu = d((X1, su) => {
    var X_ = nr();
    function V_() {
      (this.__data__ = new X_()), (this.size = 0);
    }
    su.exports = V_;
  });
  var lu = d((V1, cu) => {
    function U_(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    cu.exports = U_;
  });
  var du = d((U1, fu) => {
    function H_(e) {
      return this.__data__.get(e);
    }
    fu.exports = H_;
  });
  var gu = d((H1, pu) => {
    function B_(e) {
      return this.__data__.has(e);
    }
    pu.exports = B_;
  });
  var Je = d((B1, hu) => {
    function W_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    hu.exports = W_;
  });
  var bi = d((W1, vu) => {
    var z_ = ct(),
      K_ = Je(),
      j_ = "[object AsyncFunction]",
      Y_ = "[object Function]",
      Q_ = "[object GeneratorFunction]",
      $_ = "[object Proxy]";
    function Z_(e) {
      if (!K_(e)) return !1;
      var t = z_(e);
      return t == Y_ || t == Q_ || t == j_ || t == $_;
    }
    vu.exports = Z_;
  });
  var Eu = d((z1, mu) => {
    var J_ = We(),
      eI = J_["__core-js_shared__"];
    mu.exports = eI;
  });
  var Iu = d((K1, _u) => {
    var Ti = Eu(),
      yu = (function () {
        var e = /[^.]+$/.exec((Ti && Ti.keys && Ti.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function tI(e) {
      return !!yu && yu in e;
    }
    _u.exports = tI;
  });
  var wi = d((j1, bu) => {
    var rI = Function.prototype,
      nI = rI.toString;
    function iI(e) {
      if (e != null) {
        try {
          return nI.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    bu.exports = iI;
  });
  var wu = d((Y1, Tu) => {
    var oI = bi(),
      aI = Iu(),
      sI = Je(),
      uI = wi(),
      cI = /[\\^$.*+?()[\]{}|]/g,
      lI = /^\[object .+?Constructor\]$/,
      fI = Function.prototype,
      dI = Object.prototype,
      pI = fI.toString,
      gI = dI.hasOwnProperty,
      hI = RegExp(
        "^" +
          pI
            .call(gI)
            .replace(cI, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function vI(e) {
      if (!sI(e) || aI(e)) return !1;
      var t = oI(e) ? hI : lI;
      return t.test(uI(e));
    }
    Tu.exports = vI;
  });
  var xu = d((Q1, Au) => {
    function mI(e, t) {
      return e?.[t];
    }
    Au.exports = mI;
  });
  var lt = d(($1, Su) => {
    var EI = wu(),
      yI = xu();
    function _I(e, t) {
      var r = yI(e, t);
      return EI(r) ? r : void 0;
    }
    Su.exports = _I;
  });
  var zr = d((Z1, Ou) => {
    var II = lt(),
      bI = We(),
      TI = II(bI, "Map");
    Ou.exports = TI;
  });
  var ir = d((J1, Ru) => {
    var wI = lt(),
      AI = wI(Object, "create");
    Ru.exports = AI;
  });
  var Pu = d((e2, Lu) => {
    var Cu = ir();
    function xI() {
      (this.__data__ = Cu ? Cu(null) : {}), (this.size = 0);
    }
    Lu.exports = xI;
  });
  var Du = d((t2, Nu) => {
    function SI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Nu.exports = SI;
  });
  var Fu = d((r2, Mu) => {
    var OI = ir(),
      RI = "__lodash_hash_undefined__",
      CI = Object.prototype,
      LI = CI.hasOwnProperty;
    function PI(e) {
      var t = this.__data__;
      if (OI) {
        var r = t[e];
        return r === RI ? void 0 : r;
      }
      return LI.call(t, e) ? t[e] : void 0;
    }
    Mu.exports = PI;
  });
  var ku = d((n2, qu) => {
    var NI = ir(),
      DI = Object.prototype,
      MI = DI.hasOwnProperty;
    function FI(e) {
      var t = this.__data__;
      return NI ? t[e] !== void 0 : MI.call(t, e);
    }
    qu.exports = FI;
  });
  var Xu = d((i2, Gu) => {
    var qI = ir(),
      kI = "__lodash_hash_undefined__";
    function GI(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = qI && t === void 0 ? kI : t),
        this
      );
    }
    Gu.exports = GI;
  });
  var Uu = d((o2, Vu) => {
    var XI = Pu(),
      VI = Du(),
      UI = Fu(),
      HI = ku(),
      BI = Xu();
    function Lt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Lt.prototype.clear = XI;
    Lt.prototype.delete = VI;
    Lt.prototype.get = UI;
    Lt.prototype.has = HI;
    Lt.prototype.set = BI;
    Vu.exports = Lt;
  });
  var Wu = d((a2, Bu) => {
    var Hu = Uu(),
      WI = nr(),
      zI = zr();
    function KI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Hu(),
          map: new (zI || WI)(),
          string: new Hu(),
        });
    }
    Bu.exports = KI;
  });
  var Ku = d((s2, zu) => {
    function jI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    zu.exports = jI;
  });
  var or = d((u2, ju) => {
    var YI = Ku();
    function QI(e, t) {
      var r = e.__data__;
      return YI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    ju.exports = QI;
  });
  var Qu = d((c2, Yu) => {
    var $I = or();
    function ZI(e) {
      var t = $I(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Yu.exports = ZI;
  });
  var Zu = d((l2, $u) => {
    var JI = or();
    function eb(e) {
      return JI(this, e).get(e);
    }
    $u.exports = eb;
  });
  var ec = d((f2, Ju) => {
    var tb = or();
    function rb(e) {
      return tb(this, e).has(e);
    }
    Ju.exports = rb;
  });
  var rc = d((d2, tc) => {
    var nb = or();
    function ib(e, t) {
      var r = nb(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    tc.exports = ib;
  });
  var Kr = d((p2, nc) => {
    var ob = Wu(),
      ab = Qu(),
      sb = Zu(),
      ub = ec(),
      cb = rc();
    function Pt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Pt.prototype.clear = ob;
    Pt.prototype.delete = ab;
    Pt.prototype.get = sb;
    Pt.prototype.has = ub;
    Pt.prototype.set = cb;
    nc.exports = Pt;
  });
  var oc = d((g2, ic) => {
    var lb = nr(),
      fb = zr(),
      db = Kr(),
      pb = 200;
    function gb(e, t) {
      var r = this.__data__;
      if (r instanceof lb) {
        var n = r.__data__;
        if (!fb || n.length < pb - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new db(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    ic.exports = gb;
  });
  var Ai = d((h2, ac) => {
    var hb = nr(),
      vb = uu(),
      mb = lu(),
      Eb = du(),
      yb = gu(),
      _b = oc();
    function Nt(e) {
      var t = (this.__data__ = new hb(e));
      this.size = t.size;
    }
    Nt.prototype.clear = vb;
    Nt.prototype.delete = mb;
    Nt.prototype.get = Eb;
    Nt.prototype.has = yb;
    Nt.prototype.set = _b;
    ac.exports = Nt;
  });
  var uc = d((v2, sc) => {
    var Ib = "__lodash_hash_undefined__";
    function bb(e) {
      return this.__data__.set(e, Ib), this;
    }
    sc.exports = bb;
  });
  var lc = d((m2, cc) => {
    function Tb(e) {
      return this.__data__.has(e);
    }
    cc.exports = Tb;
  });
  var dc = d((E2, fc) => {
    var wb = Kr(),
      Ab = uc(),
      xb = lc();
    function jr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new wb(); ++t < r; ) this.add(e[t]);
    }
    jr.prototype.add = jr.prototype.push = Ab;
    jr.prototype.has = xb;
    fc.exports = jr;
  });
  var gc = d((y2, pc) => {
    function Sb(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    pc.exports = Sb;
  });
  var vc = d((_2, hc) => {
    function Ob(e, t) {
      return e.has(t);
    }
    hc.exports = Ob;
  });
  var xi = d((I2, mc) => {
    var Rb = dc(),
      Cb = gc(),
      Lb = vc(),
      Pb = 1,
      Nb = 2;
    function Db(e, t, r, n, i, o) {
      var a = r & Pb,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var c = o.get(e),
        E = o.get(t);
      if (c && E) return c == t && E == e;
      var l = -1,
        h = !0,
        g = r & Nb ? new Rb() : void 0;
      for (o.set(e, t), o.set(t, e); ++l < s; ) {
        var v = e[l],
          _ = t[l];
        if (n) var T = a ? n(_, v, l, t, e, o) : n(v, _, l, e, t, o);
        if (T !== void 0) {
          if (T) continue;
          h = !1;
          break;
        }
        if (g) {
          if (
            !Cb(t, function (I, x) {
              if (!Lb(g, x) && (v === I || i(v, I, r, n, o))) return g.push(x);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(v === _ || i(v, _, r, n, o))) {
          h = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), h;
    }
    mc.exports = Db;
  });
  var yc = d((b2, Ec) => {
    var Mb = We(),
      Fb = Mb.Uint8Array;
    Ec.exports = Fb;
  });
  var Ic = d((T2, _c) => {
    function qb(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    _c.exports = qb;
  });
  var Tc = d((w2, bc) => {
    function kb(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    bc.exports = kb;
  });
  var Oc = d((A2, Sc) => {
    var wc = xt(),
      Ac = yc(),
      Gb = Wr(),
      Xb = xi(),
      Vb = Ic(),
      Ub = Tc(),
      Hb = 1,
      Bb = 2,
      Wb = "[object Boolean]",
      zb = "[object Date]",
      Kb = "[object Error]",
      jb = "[object Map]",
      Yb = "[object Number]",
      Qb = "[object RegExp]",
      $b = "[object Set]",
      Zb = "[object String]",
      Jb = "[object Symbol]",
      eT = "[object ArrayBuffer]",
      tT = "[object DataView]",
      xc = wc ? wc.prototype : void 0,
      Si = xc ? xc.valueOf : void 0;
    function rT(e, t, r, n, i, o, a) {
      switch (r) {
        case tT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case eT:
          return !(e.byteLength != t.byteLength || !o(new Ac(e), new Ac(t)));
        case Wb:
        case zb:
        case Yb:
          return Gb(+e, +t);
        case Kb:
          return e.name == t.name && e.message == t.message;
        case Qb:
        case Zb:
          return e == t + "";
        case jb:
          var s = Vb;
        case $b:
          var u = n & Hb;
          if ((s || (s = Ub), e.size != t.size && !u)) return !1;
          var c = a.get(e);
          if (c) return c == t;
          (n |= Bb), a.set(e, t);
          var E = Xb(s(e), s(t), n, i, o, a);
          return a.delete(e), E;
        case Jb:
          if (Si) return Si.call(e) == Si.call(t);
      }
      return !1;
    }
    Sc.exports = rT;
  });
  var Yr = d((x2, Rc) => {
    function nT(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Rc.exports = nT;
  });
  var Te = d((S2, Cc) => {
    var iT = Array.isArray;
    Cc.exports = iT;
  });
  var Oi = d((O2, Lc) => {
    var oT = Yr(),
      aT = Te();
    function sT(e, t, r) {
      var n = t(e);
      return aT(e) ? n : oT(n, r(e));
    }
    Lc.exports = sT;
  });
  var Nc = d((R2, Pc) => {
    function uT(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Pc.exports = uT;
  });
  var Ri = d((C2, Dc) => {
    function cT() {
      return [];
    }
    Dc.exports = cT;
  });
  var Ci = d((L2, Fc) => {
    var lT = Nc(),
      fT = Ri(),
      dT = Object.prototype,
      pT = dT.propertyIsEnumerable,
      Mc = Object.getOwnPropertySymbols,
      gT = Mc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                lT(Mc(e), function (t) {
                  return pT.call(e, t);
                }));
          }
        : fT;
    Fc.exports = gT;
  });
  var kc = d((P2, qc) => {
    function hT(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    qc.exports = hT;
  });
  var Xc = d((N2, Gc) => {
    var vT = ct(),
      mT = nt(),
      ET = "[object Arguments]";
    function yT(e) {
      return mT(e) && vT(e) == ET;
    }
    Gc.exports = yT;
  });
  var ar = d((D2, Hc) => {
    var Vc = Xc(),
      _T = nt(),
      Uc = Object.prototype,
      IT = Uc.hasOwnProperty,
      bT = Uc.propertyIsEnumerable,
      TT = Vc(
        (function () {
          return arguments;
        })()
      )
        ? Vc
        : function (e) {
            return _T(e) && IT.call(e, "callee") && !bT.call(e, "callee");
          };
    Hc.exports = TT;
  });
  var Wc = d((M2, Bc) => {
    function wT() {
      return !1;
    }
    Bc.exports = wT;
  });
  var Qr = d((sr, Dt) => {
    var AT = We(),
      xT = Wc(),
      jc = typeof sr == "object" && sr && !sr.nodeType && sr,
      zc = jc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt,
      ST = zc && zc.exports === jc,
      Kc = ST ? AT.Buffer : void 0,
      OT = Kc ? Kc.isBuffer : void 0,
      RT = OT || xT;
    Dt.exports = RT;
  });
  var $r = d((F2, Yc) => {
    var CT = 9007199254740991,
      LT = /^(?:0|[1-9]\d*)$/;
    function PT(e, t) {
      var r = typeof e;
      return (
        (t = t ?? CT),
        !!t &&
          (r == "number" || (r != "symbol" && LT.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Yc.exports = PT;
  });
  var Zr = d((q2, Qc) => {
    var NT = 9007199254740991;
    function DT(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= NT;
    }
    Qc.exports = DT;
  });
  var Zc = d((k2, $c) => {
    var MT = ct(),
      FT = Zr(),
      qT = nt(),
      kT = "[object Arguments]",
      GT = "[object Array]",
      XT = "[object Boolean]",
      VT = "[object Date]",
      UT = "[object Error]",
      HT = "[object Function]",
      BT = "[object Map]",
      WT = "[object Number]",
      zT = "[object Object]",
      KT = "[object RegExp]",
      jT = "[object Set]",
      YT = "[object String]",
      QT = "[object WeakMap]",
      $T = "[object ArrayBuffer]",
      ZT = "[object DataView]",
      JT = "[object Float32Array]",
      ew = "[object Float64Array]",
      tw = "[object Int8Array]",
      rw = "[object Int16Array]",
      nw = "[object Int32Array]",
      iw = "[object Uint8Array]",
      ow = "[object Uint8ClampedArray]",
      aw = "[object Uint16Array]",
      sw = "[object Uint32Array]",
      he = {};
    he[JT] =
      he[ew] =
      he[tw] =
      he[rw] =
      he[nw] =
      he[iw] =
      he[ow] =
      he[aw] =
      he[sw] =
        !0;
    he[kT] =
      he[GT] =
      he[$T] =
      he[XT] =
      he[ZT] =
      he[VT] =
      he[UT] =
      he[HT] =
      he[BT] =
      he[WT] =
      he[zT] =
      he[KT] =
      he[jT] =
      he[YT] =
      he[QT] =
        !1;
    function uw(e) {
      return qT(e) && FT(e.length) && !!he[MT(e)];
    }
    $c.exports = uw;
  });
  var el = d((G2, Jc) => {
    function cw(e) {
      return function (t) {
        return e(t);
      };
    }
    Jc.exports = cw;
  });
  var rl = d((ur, Mt) => {
    var lw = ri(),
      tl = typeof ur == "object" && ur && !ur.nodeType && ur,
      cr = tl && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
      fw = cr && cr.exports === tl,
      Li = fw && lw.process,
      dw = (function () {
        try {
          var e = cr && cr.require && cr.require("util").types;
          return e || (Li && Li.binding && Li.binding("util"));
        } catch {}
      })();
    Mt.exports = dw;
  });
  var Jr = d((X2, ol) => {
    var pw = Zc(),
      gw = el(),
      nl = rl(),
      il = nl && nl.isTypedArray,
      hw = il ? gw(il) : pw;
    ol.exports = hw;
  });
  var Pi = d((V2, al) => {
    var vw = kc(),
      mw = ar(),
      Ew = Te(),
      yw = Qr(),
      _w = $r(),
      Iw = Jr(),
      bw = Object.prototype,
      Tw = bw.hasOwnProperty;
    function ww(e, t) {
      var r = Ew(e),
        n = !r && mw(e),
        i = !r && !n && yw(e),
        o = !r && !n && !i && Iw(e),
        a = r || n || i || o,
        s = a ? vw(e.length, String) : [],
        u = s.length;
      for (var c in e)
        (t || Tw.call(e, c)) &&
          !(
            a &&
            (c == "length" ||
              (i && (c == "offset" || c == "parent")) ||
              (o &&
                (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
              _w(c, u))
          ) &&
          s.push(c);
      return s;
    }
    al.exports = ww;
  });
  var en = d((U2, sl) => {
    var Aw = Object.prototype;
    function xw(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || Aw;
      return e === r;
    }
    sl.exports = xw;
  });
  var cl = d((H2, ul) => {
    var Sw = ni(),
      Ow = Sw(Object.keys, Object);
    ul.exports = Ow;
  });
  var tn = d((B2, ll) => {
    var Rw = en(),
      Cw = cl(),
      Lw = Object.prototype,
      Pw = Lw.hasOwnProperty;
    function Nw(e) {
      if (!Rw(e)) return Cw(e);
      var t = [];
      for (var r in Object(e)) Pw.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    ll.exports = Nw;
  });
  var mt = d((W2, fl) => {
    var Dw = bi(),
      Mw = Zr();
    function Fw(e) {
      return e != null && Mw(e.length) && !Dw(e);
    }
    fl.exports = Fw;
  });
  var lr = d((z2, dl) => {
    var qw = Pi(),
      kw = tn(),
      Gw = mt();
    function Xw(e) {
      return Gw(e) ? qw(e) : kw(e);
    }
    dl.exports = Xw;
  });
  var gl = d((K2, pl) => {
    var Vw = Oi(),
      Uw = Ci(),
      Hw = lr();
    function Bw(e) {
      return Vw(e, Hw, Uw);
    }
    pl.exports = Bw;
  });
  var ml = d((j2, vl) => {
    var hl = gl(),
      Ww = 1,
      zw = Object.prototype,
      Kw = zw.hasOwnProperty;
    function jw(e, t, r, n, i, o) {
      var a = r & Ww,
        s = hl(e),
        u = s.length,
        c = hl(t),
        E = c.length;
      if (u != E && !a) return !1;
      for (var l = u; l--; ) {
        var h = s[l];
        if (!(a ? h in t : Kw.call(t, h))) return !1;
      }
      var g = o.get(e),
        v = o.get(t);
      if (g && v) return g == t && v == e;
      var _ = !0;
      o.set(e, t), o.set(t, e);
      for (var T = a; ++l < u; ) {
        h = s[l];
        var I = e[h],
          x = t[h];
        if (n) var A = a ? n(x, I, h, t, e, o) : n(I, x, h, e, t, o);
        if (!(A === void 0 ? I === x || i(I, x, r, n, o) : A)) {
          _ = !1;
          break;
        }
        T || (T = h == "constructor");
      }
      if (_ && !T) {
        var C = e.constructor,
          M = t.constructor;
        C != M &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof C == "function" &&
            C instanceof C &&
            typeof M == "function" &&
            M instanceof M
          ) &&
          (_ = !1);
      }
      return o.delete(e), o.delete(t), _;
    }
    vl.exports = jw;
  });
  var yl = d((Y2, El) => {
    var Yw = lt(),
      Qw = We(),
      $w = Yw(Qw, "DataView");
    El.exports = $w;
  });
  var Il = d((Q2, _l) => {
    var Zw = lt(),
      Jw = We(),
      eA = Zw(Jw, "Promise");
    _l.exports = eA;
  });
  var Tl = d(($2, bl) => {
    var tA = lt(),
      rA = We(),
      nA = tA(rA, "Set");
    bl.exports = nA;
  });
  var Ni = d((Z2, wl) => {
    var iA = lt(),
      oA = We(),
      aA = iA(oA, "WeakMap");
    wl.exports = aA;
  });
  var rn = d((J2, Ll) => {
    var Di = yl(),
      Mi = zr(),
      Fi = Il(),
      qi = Tl(),
      ki = Ni(),
      Cl = ct(),
      Ft = wi(),
      Al = "[object Map]",
      sA = "[object Object]",
      xl = "[object Promise]",
      Sl = "[object Set]",
      Ol = "[object WeakMap]",
      Rl = "[object DataView]",
      uA = Ft(Di),
      cA = Ft(Mi),
      lA = Ft(Fi),
      fA = Ft(qi),
      dA = Ft(ki),
      Et = Cl;
    ((Di && Et(new Di(new ArrayBuffer(1))) != Rl) ||
      (Mi && Et(new Mi()) != Al) ||
      (Fi && Et(Fi.resolve()) != xl) ||
      (qi && Et(new qi()) != Sl) ||
      (ki && Et(new ki()) != Ol)) &&
      (Et = function (e) {
        var t = Cl(e),
          r = t == sA ? e.constructor : void 0,
          n = r ? Ft(r) : "";
        if (n)
          switch (n) {
            case uA:
              return Rl;
            case cA:
              return Al;
            case lA:
              return xl;
            case fA:
              return Sl;
            case dA:
              return Ol;
          }
        return t;
      });
    Ll.exports = Et;
  });
  var Gl = d((eq, kl) => {
    var Gi = Ai(),
      pA = xi(),
      gA = Oc(),
      hA = ml(),
      Pl = rn(),
      Nl = Te(),
      Dl = Qr(),
      vA = Jr(),
      mA = 1,
      Ml = "[object Arguments]",
      Fl = "[object Array]",
      nn = "[object Object]",
      EA = Object.prototype,
      ql = EA.hasOwnProperty;
    function yA(e, t, r, n, i, o) {
      var a = Nl(e),
        s = Nl(t),
        u = a ? Fl : Pl(e),
        c = s ? Fl : Pl(t);
      (u = u == Ml ? nn : u), (c = c == Ml ? nn : c);
      var E = u == nn,
        l = c == nn,
        h = u == c;
      if (h && Dl(e)) {
        if (!Dl(t)) return !1;
        (a = !0), (E = !1);
      }
      if (h && !E)
        return (
          o || (o = new Gi()),
          a || vA(e) ? pA(e, t, r, n, i, o) : gA(e, t, u, r, n, i, o)
        );
      if (!(r & mA)) {
        var g = E && ql.call(e, "__wrapped__"),
          v = l && ql.call(t, "__wrapped__");
        if (g || v) {
          var _ = g ? e.value() : e,
            T = v ? t.value() : t;
          return o || (o = new Gi()), i(_, T, r, n, o);
        }
      }
      return h ? (o || (o = new Gi()), hA(e, t, r, n, i, o)) : !1;
    }
    kl.exports = yA;
  });
  var Xi = d((tq, Ul) => {
    var _A = Gl(),
      Xl = nt();
    function Vl(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Xl(e) && !Xl(t))
        ? e !== e && t !== t
        : _A(e, t, r, n, Vl, i);
    }
    Ul.exports = Vl;
  });
  var Bl = d((rq, Hl) => {
    var IA = Ai(),
      bA = Xi(),
      TA = 1,
      wA = 2;
    function AA(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          c = e[u],
          E = s[1];
        if (a && s[2]) {
          if (c === void 0 && !(u in e)) return !1;
        } else {
          var l = new IA();
          if (n) var h = n(c, E, u, e, t, l);
          if (!(h === void 0 ? bA(E, c, TA | wA, n, l) : h)) return !1;
        }
      }
      return !0;
    }
    Hl.exports = AA;
  });
  var Vi = d((nq, Wl) => {
    var xA = Je();
    function SA(e) {
      return e === e && !xA(e);
    }
    Wl.exports = SA;
  });
  var Kl = d((iq, zl) => {
    var OA = Vi(),
      RA = lr();
    function CA(e) {
      for (var t = RA(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, OA(i)];
      }
      return t;
    }
    zl.exports = CA;
  });
  var Ui = d((oq, jl) => {
    function LA(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    jl.exports = LA;
  });
  var Ql = d((aq, Yl) => {
    var PA = Bl(),
      NA = Kl(),
      DA = Ui();
    function MA(e) {
      var t = NA(e);
      return t.length == 1 && t[0][2]
        ? DA(t[0][0], t[0][1])
        : function (r) {
            return r === e || PA(r, e, t);
          };
    }
    Yl.exports = MA;
  });
  var fr = d((sq, $l) => {
    var FA = ct(),
      qA = nt(),
      kA = "[object Symbol]";
    function GA(e) {
      return typeof e == "symbol" || (qA(e) && FA(e) == kA);
    }
    $l.exports = GA;
  });
  var on = d((uq, Zl) => {
    var XA = Te(),
      VA = fr(),
      UA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      HA = /^\w*$/;
    function BA(e, t) {
      if (XA(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        VA(e)
        ? !0
        : HA.test(e) || !UA.test(e) || (t != null && e in Object(t));
    }
    Zl.exports = BA;
  });
  var tf = d((cq, ef) => {
    var Jl = Kr(),
      WA = "Expected a function";
    function Hi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(WA);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Hi.Cache || Jl)()), r;
    }
    Hi.Cache = Jl;
    ef.exports = Hi;
  });
  var nf = d((lq, rf) => {
    var zA = tf(),
      KA = 500;
    function jA(e) {
      var t = zA(e, function (n) {
          return r.size === KA && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    rf.exports = jA;
  });
  var af = d((fq, of) => {
    var YA = nf(),
      QA =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      $A = /\\(\\)?/g,
      ZA = YA(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(QA, function (r, n, i, o) {
            t.push(i ? o.replace($A, "$1") : n || r);
          }),
          t
        );
      });
    of.exports = ZA;
  });
  var Bi = d((dq, sf) => {
    function JA(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    sf.exports = JA;
  });
  var pf = d((pq, df) => {
    var uf = xt(),
      e0 = Bi(),
      t0 = Te(),
      r0 = fr(),
      n0 = 1 / 0,
      cf = uf ? uf.prototype : void 0,
      lf = cf ? cf.toString : void 0;
    function ff(e) {
      if (typeof e == "string") return e;
      if (t0(e)) return e0(e, ff) + "";
      if (r0(e)) return lf ? lf.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -n0 ? "-0" : t;
    }
    df.exports = ff;
  });
  var hf = d((gq, gf) => {
    var i0 = pf();
    function o0(e) {
      return e == null ? "" : i0(e);
    }
    gf.exports = o0;
  });
  var dr = d((hq, vf) => {
    var a0 = Te(),
      s0 = on(),
      u0 = af(),
      c0 = hf();
    function l0(e, t) {
      return a0(e) ? e : s0(e, t) ? [e] : u0(c0(e));
    }
    vf.exports = l0;
  });
  var qt = d((vq, mf) => {
    var f0 = fr(),
      d0 = 1 / 0;
    function p0(e) {
      if (typeof e == "string" || f0(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -d0 ? "-0" : t;
    }
    mf.exports = p0;
  });
  var an = d((mq, Ef) => {
    var g0 = dr(),
      h0 = qt();
    function v0(e, t) {
      t = g0(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[h0(t[r++])];
      return r && r == n ? e : void 0;
    }
    Ef.exports = v0;
  });
  var sn = d((Eq, yf) => {
    var m0 = an();
    function E0(e, t, r) {
      var n = e == null ? void 0 : m0(e, t);
      return n === void 0 ? r : n;
    }
    yf.exports = E0;
  });
  var If = d((yq, _f) => {
    function y0(e, t) {
      return e != null && t in Object(e);
    }
    _f.exports = y0;
  });
  var Tf = d((_q, bf) => {
    var _0 = dr(),
      I0 = ar(),
      b0 = Te(),
      T0 = $r(),
      w0 = Zr(),
      A0 = qt();
    function x0(e, t, r) {
      t = _0(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = A0(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && w0(i) && T0(a, i) && (b0(e) || I0(e)));
    }
    bf.exports = x0;
  });
  var Af = d((Iq, wf) => {
    var S0 = If(),
      O0 = Tf();
    function R0(e, t) {
      return e != null && O0(e, t, S0);
    }
    wf.exports = R0;
  });
  var Sf = d((bq, xf) => {
    var C0 = Xi(),
      L0 = sn(),
      P0 = Af(),
      N0 = on(),
      D0 = Vi(),
      M0 = Ui(),
      F0 = qt(),
      q0 = 1,
      k0 = 2;
    function G0(e, t) {
      return N0(e) && D0(t)
        ? M0(F0(e), t)
        : function (r) {
            var n = L0(r, e);
            return n === void 0 && n === t ? P0(r, e) : C0(t, n, q0 | k0);
          };
    }
    xf.exports = G0;
  });
  var un = d((Tq, Of) => {
    function X0(e) {
      return e;
    }
    Of.exports = X0;
  });
  var Wi = d((wq, Rf) => {
    function V0(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Rf.exports = V0;
  });
  var Lf = d((Aq, Cf) => {
    var U0 = an();
    function H0(e) {
      return function (t) {
        return U0(t, e);
      };
    }
    Cf.exports = H0;
  });
  var Nf = d((xq, Pf) => {
    var B0 = Wi(),
      W0 = Lf(),
      z0 = on(),
      K0 = qt();
    function j0(e) {
      return z0(e) ? B0(K0(e)) : W0(e);
    }
    Pf.exports = j0;
  });
  var ft = d((Sq, Df) => {
    var Y0 = Ql(),
      Q0 = Sf(),
      $0 = un(),
      Z0 = Te(),
      J0 = Nf();
    function ex(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? $0
        : typeof e == "object"
        ? Z0(e)
          ? Q0(e[0], e[1])
          : Y0(e)
        : J0(e);
    }
    Df.exports = ex;
  });
  var zi = d((Oq, Mf) => {
    var tx = ft(),
      rx = mt(),
      nx = lr();
    function ix(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!rx(t)) {
          var o = tx(r, 3);
          (t = nx(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Mf.exports = ix;
  });
  var Ki = d((Rq, Ff) => {
    function ox(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Ff.exports = ox;
  });
  var kf = d((Cq, qf) => {
    var ax = /\s/;
    function sx(e) {
      for (var t = e.length; t-- && ax.test(e.charAt(t)); );
      return t;
    }
    qf.exports = sx;
  });
  var Xf = d((Lq, Gf) => {
    var ux = kf(),
      cx = /^\s+/;
    function lx(e) {
      return e && e.slice(0, ux(e) + 1).replace(cx, "");
    }
    Gf.exports = lx;
  });
  var cn = d((Pq, Hf) => {
    var fx = Xf(),
      Vf = Je(),
      dx = fr(),
      Uf = 0 / 0,
      px = /^[-+]0x[0-9a-f]+$/i,
      gx = /^0b[01]+$/i,
      hx = /^0o[0-7]+$/i,
      vx = parseInt;
    function mx(e) {
      if (typeof e == "number") return e;
      if (dx(e)) return Uf;
      if (Vf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Vf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = fx(e);
      var r = gx.test(e);
      return r || hx.test(e) ? vx(e.slice(2), r ? 2 : 8) : px.test(e) ? Uf : +e;
    }
    Hf.exports = mx;
  });
  var zf = d((Nq, Wf) => {
    var Ex = cn(),
      Bf = 1 / 0,
      yx = 17976931348623157e292;
    function _x(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = Ex(e)), e === Bf || e === -Bf)) {
        var t = e < 0 ? -1 : 1;
        return t * yx;
      }
      return e === e ? e : 0;
    }
    Wf.exports = _x;
  });
  var ji = d((Dq, Kf) => {
    var Ix = zf();
    function bx(e) {
      var t = Ix(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Kf.exports = bx;
  });
  var Yf = d((Mq, jf) => {
    var Tx = Ki(),
      wx = ft(),
      Ax = ji(),
      xx = Math.max;
    function Sx(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : Ax(r);
      return i < 0 && (i = xx(n + i, 0)), Tx(e, wx(t, 3), i);
    }
    jf.exports = Sx;
  });
  var Yi = d((Fq, Qf) => {
    var Ox = zi(),
      Rx = Yf(),
      Cx = Ox(Rx);
    Qf.exports = Cx;
  });
  var Jf = {};
  Ne(Jf, {
    ELEMENT_MATCHES: () => Lx,
    FLEX_PREFIXED: () => Qi,
    IS_BROWSER_ENV: () => Ke,
    TRANSFORM_PREFIXED: () => dt,
    TRANSFORM_STYLE_PREFIXED: () => fn,
    withBrowser: () => ln,
  });
  var Zf,
    Ke,
    ln,
    Lx,
    Qi,
    dt,
    $f,
    fn,
    dn = ve(() => {
      "use strict";
      (Zf = fe(Yi())),
        (Ke = typeof window < "u"),
        (ln = (e, t) => (Ke ? e() : t)),
        (Lx = ln(() =>
          (0, Zf.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Qi = ln(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (dt = ln(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        ($f = dt.split("transform")[0]),
        (fn = $f ? $f + "TransformStyle" : "transformStyle");
    });
  var $i = d((qq, id) => {
    var Px = 4,
      Nx = 0.001,
      Dx = 1e-7,
      Mx = 10,
      pr = 11,
      pn = 1 / (pr - 1),
      Fx = typeof Float32Array == "function";
    function ed(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function td(e, t) {
      return 3 * t - 6 * e;
    }
    function rd(e) {
      return 3 * e;
    }
    function gn(e, t, r) {
      return ((ed(t, r) * e + td(t, r)) * e + rd(t)) * e;
    }
    function nd(e, t, r) {
      return 3 * ed(t, r) * e * e + 2 * td(t, r) * e + rd(t);
    }
    function qx(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = gn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > Dx && ++s < Mx);
      return a;
    }
    function kx(e, t, r, n) {
      for (var i = 0; i < Px; ++i) {
        var o = nd(t, r, n);
        if (o === 0) return t;
        var a = gn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    id.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = Fx ? new Float32Array(pr) : new Array(pr);
      if (t !== r || n !== i)
        for (var a = 0; a < pr; ++a) o[a] = gn(a * pn, t, n);
      function s(u) {
        for (var c = 0, E = 1, l = pr - 1; E !== l && o[E] <= u; ++E) c += pn;
        --E;
        var h = (u - o[E]) / (o[E + 1] - o[E]),
          g = c + h * pn,
          v = nd(g, t, n);
        return v >= Nx ? kx(u, g, t, n) : v === 0 ? g : qx(u, c, c + pn, t, n);
      }
      return function (c) {
        return t === r && n === i
          ? c
          : c === 0
          ? 0
          : c === 1
          ? 1
          : gn(s(c), r, i);
      };
    };
  });
  var hr = {};
  Ne(hr, {
    bounce: () => _S,
    bouncePast: () => IS,
    ease: () => Gx,
    easeIn: () => Xx,
    easeInOut: () => Ux,
    easeOut: () => Vx,
    inBack: () => fS,
    inCirc: () => sS,
    inCubic: () => zx,
    inElastic: () => gS,
    inExpo: () => iS,
    inOutBack: () => pS,
    inOutCirc: () => cS,
    inOutCubic: () => jx,
    inOutElastic: () => vS,
    inOutExpo: () => aS,
    inOutQuad: () => Wx,
    inOutQuart: () => $x,
    inOutQuint: () => eS,
    inOutSine: () => nS,
    inQuad: () => Hx,
    inQuart: () => Yx,
    inQuint: () => Zx,
    inSine: () => tS,
    outBack: () => dS,
    outBounce: () => lS,
    outCirc: () => uS,
    outCubic: () => Kx,
    outElastic: () => hS,
    outExpo: () => oS,
    outQuad: () => Bx,
    outQuart: () => Qx,
    outQuint: () => Jx,
    outSine: () => rS,
    swingFrom: () => ES,
    swingFromTo: () => mS,
    swingTo: () => yS,
  });
  function Hx(e) {
    return Math.pow(e, 2);
  }
  function Bx(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function Wx(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function zx(e) {
    return Math.pow(e, 3);
  }
  function Kx(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function jx(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function Yx(e) {
    return Math.pow(e, 4);
  }
  function Qx(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function $x(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Zx(e) {
    return Math.pow(e, 5);
  }
  function Jx(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function eS(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function tS(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function rS(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function nS(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function iS(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function oS(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function aS(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function sS(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function uS(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function cS(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function lS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function fS(e) {
    let t = it;
    return e * e * ((t + 1) * e - t);
  }
  function dS(e) {
    let t = it;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function pS(e) {
    let t = it;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function gS(e) {
    let t = it,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function hS(e) {
    let t = it,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function vS(e) {
    let t = it,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function mS(e) {
    let t = it;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function ES(e) {
    let t = it;
    return e * e * ((t + 1) * e - t);
  }
  function yS(e) {
    let t = it;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function _S(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function IS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var gr,
    it,
    Gx,
    Xx,
    Vx,
    Ux,
    Zi = ve(() => {
      "use strict";
      (gr = fe($i())),
        (it = 1.70158),
        (Gx = (0, gr.default)(0.25, 0.1, 0.25, 1)),
        (Xx = (0, gr.default)(0.42, 0, 1, 1)),
        (Vx = (0, gr.default)(0, 0, 0.58, 1)),
        (Ux = (0, gr.default)(0.42, 0, 0.58, 1));
    });
  var ad = {};
  Ne(ad, {
    applyEasing: () => TS,
    createBezierEasing: () => bS,
    optimizeFloat: () => vr,
  });
  function vr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function bS(e) {
    return (0, od.default)(...e);
  }
  function TS(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : vr(r ? (t > 0 ? r(t) : t) : t > 0 && e && hr[e] ? hr[e](t) : t);
  }
  var od,
    Ji = ve(() => {
      "use strict";
      Zi();
      od = fe($i());
    });
  var cd = {};
  Ne(cd, {
    createElementState: () => ud,
    ixElements: () => qS,
    mergeActionState: () => eo,
  });
  function ud(e, t, r, n, i) {
    let o =
      r === wS ? (0, kt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, kt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function eo(e, t, r, n, i) {
    let o = GS(i);
    return (0, kt.mergeIn)(e, [t, FS, r], n, o);
  }
  function GS(e) {
    let { config: t } = e;
    return kS.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var kt,
    Gq,
    wS,
    Xq,
    AS,
    xS,
    SS,
    OS,
    RS,
    CS,
    LS,
    PS,
    NS,
    DS,
    MS,
    sd,
    FS,
    qS,
    kS,
    ld = ve(() => {
      "use strict";
      kt = fe(Rt());
      Me();
      ({
        HTML_ELEMENT: Gq,
        PLAIN_OBJECT: wS,
        ABSTRACT_NODE: Xq,
        CONFIG_X_VALUE: AS,
        CONFIG_Y_VALUE: xS,
        CONFIG_Z_VALUE: SS,
        CONFIG_VALUE: OS,
        CONFIG_X_UNIT: RS,
        CONFIG_Y_UNIT: CS,
        CONFIG_Z_UNIT: LS,
        CONFIG_UNIT: PS,
      } = Ae),
        ({
          IX2_SESSION_STOPPED: NS,
          IX2_INSTANCE_ADDED: DS,
          IX2_ELEMENT_STATE_CHANGED: MS,
        } = Ie),
        (sd = {}),
        (FS = "refState"),
        (qS = (e = sd, t = {}) => {
          switch (t.type) {
            case NS:
              return sd;
            case DS: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, kt.getIn)(u, [r, n]) !== n && (u = ud(u, n, a, r, o)),
                eo(u, r, s, i, o)
              );
            }
            case MS: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return eo(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      kS = [
        [AS, RS],
        [xS, CS],
        [SS, LS],
        [OS, PS],
      ];
    });
  var fd = d((to) => {
    "use strict";
    Object.defineProperty(to, "__esModule", { value: !0 });
    function XS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    XS(to, {
      clearPlugin: function () {
        return KS;
      },
      createPluginInstance: function () {
        return WS;
      },
      getPluginConfig: function () {
        return VS;
      },
      getPluginDestination: function () {
        return BS;
      },
      getPluginDuration: function () {
        return US;
      },
      getPluginOrigin: function () {
        return HS;
      },
      renderPlugin: function () {
        return zS;
      },
    });
    var VS = (e) => e.value,
      US = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0
          ? r * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      HS = (e) => e || { value: 0 },
      BS = (e) => ({ value: e.value }),
      WS = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      zS = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n);
      },
      KS = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var pd = d((ro) => {
    "use strict";
    Object.defineProperty(ro, "__esModule", { value: !0 });
    function jS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    jS(ro, {
      clearPlugin: function () {
        return iO;
      },
      createPluginInstance: function () {
        return rO;
      },
      getPluginConfig: function () {
        return ZS;
      },
      getPluginDestination: function () {
        return tO;
      },
      getPluginDuration: function () {
        return JS;
      },
      getPluginOrigin: function () {
        return eO;
      },
      renderPlugin: function () {
        return nO;
      },
    });
    var YS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      QS = () => window.Webflow.require("spline"),
      $S = (e, t) => e.filter((r) => !t.includes(r)),
      ZS = (e, t) => e.value[t],
      JS = () => null,
      dd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      eO = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = $S(n, o);
          return a.length ? a.reduce((u, c) => ((u[c] = dd[c]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = dd[a]), o), {});
      },
      tO = (e) => e.value,
      rO = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? YS(r) : null;
      },
      nO = (e, t, r) => {
        let n = QS(),
          i = n.getInstance(e),
          o = r.config.target.objectId,
          a = (s) => {
            if (!s)
              throw new Error("Invalid spline app passed to renderSpline");
            let u = o && s.findObjectById(o);
            if (!u) return;
            let { PLUGIN_SPLINE: c } = t;
            c.positionX != null && (u.position.x = c.positionX),
              c.positionY != null && (u.position.y = c.positionY),
              c.positionZ != null && (u.position.z = c.positionZ),
              c.rotationX != null && (u.rotation.x = c.rotationX),
              c.rotationY != null && (u.rotation.y = c.rotationY),
              c.rotationZ != null && (u.rotation.z = c.rotationZ),
              c.scaleX != null && (u.scale.x = c.scaleX),
              c.scaleY != null && (u.scale.y = c.scaleY),
              c.scaleZ != null && (u.scale.z = c.scaleZ);
          };
        i ? a(i.spline) : n.setLoadHandler(e, a);
      },
      iO = () => null;
  });
  var gd = d((oo) => {
    "use strict";
    Object.defineProperty(oo, "__esModule", { value: !0 });
    function oO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    oO(oo, {
      clearPlugin: function () {
        return gO;
      },
      createPluginInstance: function () {
        return dO;
      },
      getPluginConfig: function () {
        return uO;
      },
      getPluginDestination: function () {
        return fO;
      },
      getPluginDuration: function () {
        return cO;
      },
      getPluginOrigin: function () {
        return lO;
      },
      renderPlugin: function () {
        return pO;
      },
    });
    var no = "--wf-rive-fit",
      io = "--wf-rive-alignment",
      aO = (e) => document.querySelector(`[data-w-id="${e}"]`),
      sO = () => window.Webflow.require("rive"),
      uO = (e, t) => e.value.inputs[t],
      cO = () => null,
      lO = (e, t) => {
        if (e) return e;
        let r = {},
          { inputs: n = {} } = t.config.value;
        for (let i in n) n[i] == null && (r[i] = 0);
        return r;
      },
      fO = (e) => e.value.inputs ?? {},
      dO = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let n = t?.config?.target?.pluginElement;
        return n ? aO(n) : null;
      },
      pO = (e, { PLUGIN_RIVE: t }, r) => {
        let n = sO(),
          i = n.getInstance(e),
          o = n.rive.StateMachineInputType,
          { name: a, inputs: s = {} } = r.config.value || {};
        function u(c) {
          if (c.loaded) E();
          else {
            let l = () => {
              E(), c?.off("load", l);
            };
            c?.on("load", l);
          }
          function E() {
            let l = c.stateMachineInputs(a);
            if (l != null) {
              if ((c.isPlaying || c.play(a, !1), no in s || io in s)) {
                let h = c.layout,
                  g = s[no] ?? h.fit,
                  v = s[io] ?? h.alignment;
                (g !== h.fit || v !== h.alignment) &&
                  (c.layout = h.copyWith({ fit: g, alignment: v }));
              }
              for (let h in s) {
                if (h === no || h === io) continue;
                let g = l.find((v) => v.name === h);
                if (g != null)
                  switch (g.type) {
                    case o.Boolean: {
                      if (s[h] != null) {
                        let v = !!s[h];
                        g.value = v;
                      }
                      break;
                    }
                    case o.Number: {
                      let v = t[h];
                      v != null && (g.value = v);
                      break;
                    }
                    case o.Trigger: {
                      s[h] && g.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? u(i.rive) : n.setLoadHandler(e, u);
      },
      gO = (e, t) => null;
  });
  var so = d((ao) => {
    "use strict";
    Object.defineProperty(ao, "__esModule", { value: !0 });
    Object.defineProperty(ao, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return hO;
      },
    });
    var hd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function hO(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof hd[o] == "string" ? hd[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          c = parseFloat(u[0]),
          E = parseFloat(u[1].replace("%", "")) / 100,
          l = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let h = (1 - Math.abs(2 * l - 1)) * E,
          g = h * (1 - Math.abs(((c / 60) % 2) - 1)),
          v = l - h / 2,
          _,
          T,
          I;
        c >= 0 && c < 60
          ? ((_ = h), (T = g), (I = 0))
          : c >= 60 && c < 120
          ? ((_ = g), (T = h), (I = 0))
          : c >= 120 && c < 180
          ? ((_ = 0), (T = h), (I = g))
          : c >= 180 && c < 240
          ? ((_ = 0), (T = g), (I = h))
          : c >= 240 && c < 300
          ? ((_ = g), (T = 0), (I = h))
          : ((_ = h), (T = 0), (I = g)),
          (t = Math.round((_ + v) * 255)),
          (r = Math.round((T + v) * 255)),
          (n = Math.round((I + v) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          c = parseFloat(u[0]),
          E = parseFloat(u[1].replace("%", "")) / 100,
          l = parseFloat(u[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * l - 1)) * E,
          g = h * (1 - Math.abs(((c / 60) % 2) - 1)),
          v = l - h / 2,
          _,
          T,
          I;
        c >= 0 && c < 60
          ? ((_ = h), (T = g), (I = 0))
          : c >= 60 && c < 120
          ? ((_ = g), (T = h), (I = 0))
          : c >= 120 && c < 180
          ? ((_ = 0), (T = h), (I = g))
          : c >= 180 && c < 240
          ? ((_ = 0), (T = g), (I = h))
          : c >= 240 && c < 300
          ? ((_ = g), (T = 0), (I = h))
          : ((_ = h), (T = 0), (I = g)),
          (t = Math.round((_ + v) * 255)),
          (r = Math.round((T + v) * 255)),
          (n = Math.round((I + v) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var vd = d((uo) => {
    "use strict";
    Object.defineProperty(uo, "__esModule", { value: !0 });
    function vO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    vO(uo, {
      clearPlugin: function () {
        return wO;
      },
      createPluginInstance: function () {
        return bO;
      },
      getPluginConfig: function () {
        return EO;
      },
      getPluginDestination: function () {
        return IO;
      },
      getPluginDuration: function () {
        return yO;
      },
      getPluginOrigin: function () {
        return _O;
      },
      renderPlugin: function () {
        return TO;
      },
    });
    var mO = so(),
      EO = (e, t) => e.value[t],
      yO = () => null,
      _O = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return { size: parseInt(i, 10) };
        if (r.red != null && r.green != null && r.blue != null)
          return (0, mO.normalizeColor)(i);
      },
      IO = (e) => e.value,
      bO = () => null,
      TO = (e, t, r) => {
        let n = r.config.target.objectId,
          i = r.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: s, green: u, blue: c, alpha: E } = o,
          l;
        a != null && (l = a + i),
          s != null &&
            c != null &&
            u != null &&
            E != null &&
            (l = `rgba(${s}, ${u}, ${c}, ${E})`),
          l != null && document.documentElement.style.setProperty(n, l);
      },
      wO = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r);
      };
  });
  var Ed = d((co) => {
    "use strict";
    Object.defineProperty(co, "__esModule", { value: !0 });
    Object.defineProperty(co, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return RO;
      },
    });
    var hn = (Me(), Ye(Is)),
      AO = vn(fd()),
      xO = vn(pd()),
      SO = vn(gd()),
      OO = vn(vd());
    function md(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (md = function (n) {
        return n ? r : t;
      })(e);
    }
    function vn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = md(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var RO = new Map([
      [hn.ActionTypeConsts.PLUGIN_LOTTIE, { ...AO }],
      [hn.ActionTypeConsts.PLUGIN_SPLINE, { ...xO }],
      [hn.ActionTypeConsts.PLUGIN_RIVE, { ...SO }],
      [hn.ActionTypeConsts.PLUGIN_VARIABLE, { ...OO }],
    ]);
  });
  var yd = {};
  Ne(yd, {
    clearPlugin: () => vo,
    createPluginInstance: () => LO,
    getPluginConfig: () => fo,
    getPluginDestination: () => go,
    getPluginDuration: () => CO,
    getPluginOrigin: () => po,
    isPluginType: () => yt,
    renderPlugin: () => ho,
  });
  function yt(e) {
    return lo.pluginMethodMap.has(e);
  }
  var lo,
    _t,
    fo,
    po,
    CO,
    go,
    LO,
    ho,
    vo,
    mo = ve(() => {
      "use strict";
      dn();
      lo = fe(Ed());
      (_t = (e) => (t) => {
        if (!Ke) return () => null;
        let r = lo.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (fo = _t("getPluginConfig")),
        (po = _t("getPluginOrigin")),
        (CO = _t("getPluginDuration")),
        (go = _t("getPluginDestination")),
        (LO = _t("createPluginInstance")),
        (ho = _t("renderPlugin")),
        (vo = _t("clearPlugin"));
    });
  var Id = d((jq, _d) => {
    function PO(e, t) {
      return e == null || e !== e ? t : e;
    }
    _d.exports = PO;
  });
  var Td = d((Yq, bd) => {
    function NO(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    bd.exports = NO;
  });
  var Ad = d((Qq, wd) => {
    function DO(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    wd.exports = DO;
  });
  var Sd = d(($q, xd) => {
    var MO = Ad(),
      FO = MO();
    xd.exports = FO;
  });
  var Eo = d((Zq, Od) => {
    var qO = Sd(),
      kO = lr();
    function GO(e, t) {
      return e && qO(e, t, kO);
    }
    Od.exports = GO;
  });
  var Cd = d((Jq, Rd) => {
    var XO = mt();
    function VO(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!XO(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Rd.exports = VO;
  });
  var yo = d((ek, Ld) => {
    var UO = Eo(),
      HO = Cd(),
      BO = HO(UO);
    Ld.exports = BO;
  });
  var Nd = d((tk, Pd) => {
    function WO(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Pd.exports = WO;
  });
  var Md = d((rk, Dd) => {
    var zO = Td(),
      KO = yo(),
      jO = ft(),
      YO = Nd(),
      QO = Te();
    function $O(e, t, r) {
      var n = QO(e) ? zO : YO,
        i = arguments.length < 3;
      return n(e, jO(t, 4), r, i, KO);
    }
    Dd.exports = $O;
  });
  var qd = d((nk, Fd) => {
    var ZO = Ki(),
      JO = ft(),
      eR = ji(),
      tR = Math.max,
      rR = Math.min;
    function nR(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = eR(r)), (i = r < 0 ? tR(n + i, 0) : rR(i, n - 1))),
        ZO(e, JO(t, 3), i, !0)
      );
    }
    Fd.exports = nR;
  });
  var Gd = d((ik, kd) => {
    var iR = zi(),
      oR = qd(),
      aR = iR(oR);
    kd.exports = aR;
  });
  function Xd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function sR(e, t) {
    if (Xd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Xd(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var _o,
    Vd = ve(() => {
      "use strict";
      _o = sR;
    });
  var op = {};
  Ne(op, {
    cleanupHTMLElement: () => iC,
    clearAllStyles: () => nC,
    clearObjectCache: () => wR,
    getActionListProgress: () => aC,
    getAffectedElements: () => Ao,
    getComputedStyle: () => PR,
    getDestinationValues: () => GR,
    getElementId: () => OR,
    getInstanceId: () => xR,
    getInstanceOrigin: () => MR,
    getItemConfigByKey: () => kR,
    getMaxDurationItemIndex: () => ip,
    getNamespacedParameterId: () => cC,
    getRenderType: () => tp,
    getStyleProp: () => XR,
    mediaQueriesEqual: () => fC,
    observeStore: () => LR,
    reduceListToGroup: () => sC,
    reifyState: () => RR,
    renderHTMLElement: () => VR,
    shallowEqual: () => _o,
    shouldAllowMediaQuery: () => lC,
    shouldNamespaceEventParameter: () => uC,
    stringifyTarget: () => dC,
  });
  function wR() {
    mn.clear();
  }
  function xR() {
    return "i" + AR++;
  }
  function OR(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + SR++;
  }
  function RR({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, In.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function LR({ store: e, select: t, onChange: r, comparator: n = CR }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let c = t(i());
      if (c == null) {
        a();
        return;
      }
      n(c, s) || ((s = c), r(s, e));
    }
    return a;
  }
  function Bd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ao({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (O, y) =>
          O.concat(
            Ao({
              config: { target: y },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: c,
        getSiblingElements: E,
        matchSelector: l,
        elementContains: h,
        isSiblingNode: g,
      } = i,
      { target: v } = e;
    if (!v) return [];
    let {
      id: _,
      objectId: T,
      selector: I,
      selectorGuids: x,
      appliesTo: A,
      useEventTarget: C,
    } = Bd(v);
    if (T) return [mn.has(T) ? mn.get(T) : mn.set(T, {}).get(T)];
    if (A === Ei.PAGE) {
      let O = a(_);
      return O ? [O] : [];
    }
    let L = (t?.action?.config?.affectedElements ?? {})[_ || I] || {},
      W = !!(L.id || L.selector),
      z,
      K,
      Q,
      V = t && s(Bd(t.target));
    if (
      (W
        ? ((z = L.limitAffectedElements), (K = V), (Q = s(L)))
        : (K = Q = s({ id: _, selector: I, selectorGuids: x })),
      t && C)
    ) {
      let O = r && (Q || C === !0) ? [r] : u(V);
      if (Q) {
        if (C === IR) return u(Q).filter((y) => O.some((R) => h(y, R)));
        if (C === Ud) return u(Q).filter((y) => O.some((R) => h(R, y)));
        if (C === Hd) return u(Q).filter((y) => O.some((R) => g(R, y)));
      }
      return O;
    }
    return K == null || Q == null
      ? []
      : Ke && n
      ? u(Q).filter((O) => n.contains(O))
      : z === Ud
      ? u(K, Q)
      : z === _R
      ? c(u(K)).filter(l(Q))
      : z === Hd
      ? E(u(K)).filter(l(Q))
      : u(Q);
  }
  function PR({ element: e, actionItem: t }) {
    if (!Ke) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case Ht:
      case Bt:
      case Wt:
      case zt:
      case Tn:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function MR(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (yt(a)) return po(a)(t[a], n);
    switch (n.actionTypeId) {
      case Xt:
      case Vt:
      case Ut:
      case _r:
        return t[n.actionTypeId] || xo[n.actionTypeId];
      case Ir:
        return NR(t[n.actionTypeId], n.config.filters);
      case br:
        return DR(t[n.actionTypeId], n.config.fontVariations);
      case Zd:
        return { value: (0, ot.default)(parseFloat(o(e, yn)), 1) };
      case Ht: {
        let s = o(e, et),
          u = o(e, tt),
          c,
          E;
        return (
          n.config.widthUnit === pt
            ? (c = Wd.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (c = (0, ot.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === pt
            ? (E = Wd.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (E = (0, ot.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: c, heightValue: E }
        );
      }
      case Bt:
      case Wt:
      case zt:
        return eC({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case Tn:
        return { value: (0, ot.default)(o(e, _n), r.display) };
      case TR:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function GR({ element: e, actionItem: t, elementApi: r }) {
    if (yt(t.actionTypeId)) return go(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Xt:
      case Vt:
      case Ut:
      case _r: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case Ht: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: c } = t.config;
        if (!Ke) return { widthValue: u, heightValue: c };
        if (a === pt) {
          let E = n(e, et);
          i(e, et, ""), (u = o(e, "offsetWidth")), i(e, et, E);
        }
        if (s === pt) {
          let E = n(e, tt);
          i(e, tt, ""), (c = o(e, "offsetHeight")), i(e, tt, E);
        }
        return { widthValue: u, heightValue: c };
      }
      case Bt:
      case Wt:
      case zt: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            c = u(e, s),
            E = (0, jd.normalizeColor)(c);
          return {
            rValue: E.red,
            gValue: E.green,
            bValue: E.blue,
            aValue: E.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Ir:
        return t.config.filters.reduce(FR, {});
      case br:
        return t.config.fontVariations.reduce(qR, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function tp(e) {
    if (/^TRANSFORM_/.test(e)) return Qd;
    if (/^STYLE_/.test(e)) return To;
    if (/^GENERAL_/.test(e)) return bo;
    if (/^PLUGIN_/.test(e)) return $d;
  }
  function XR(e, t) {
    return e === To ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function VR(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Qd:
        return zR(e, t, r, i, a);
      case To:
        return tC(e, t, r, i, o, a);
      case bo:
        return rC(e, i, a);
      case $d: {
        let { actionTypeId: c } = i;
        if (yt(c)) return ho(c)(u, t, i);
      }
    }
  }
  function zR(e, t, r, n, i) {
    let o = WR.map((s) => {
        let u = xo[s],
          {
            xValue: c = u.xValue,
            yValue: E = u.yValue,
            zValue: l = u.zValue,
            xUnit: h = "",
            yUnit: g = "",
            zUnit: v = "",
          } = t[s] || {};
        switch (s) {
          case Xt:
            return `${lR}(${c}${h}, ${E}${g}, ${l}${v})`;
          case Vt:
            return `${fR}(${c}${h}, ${E}${g}, ${l}${v})`;
          case Ut:
            return `${dR}(${c}${h}) ${pR}(${E}${g}) ${gR}(${l}${v})`;
          case _r:
            return `${hR}(${c}${h}, ${E}${g})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    It(e, dt, i), a(e, dt, o), YR(n, r) && a(e, fn, vR);
  }
  function KR(e, t, r, n) {
    let i = (0, In.default)(t, (a, s, u) => `${a} ${u}(${s}${BR(u, r)})`, ""),
      { setStyle: o } = n;
    It(e, mr, n), o(e, mr, i);
  }
  function jR(e, t, r, n) {
    let i = (0, In.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    It(e, Er, n), o(e, Er, i);
  }
  function YR({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === Xt && n !== void 0) ||
      (e === Vt && n !== void 0) ||
      (e === Ut && (t !== void 0 || r !== void 0))
    );
  }
  function JR(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function eC({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = wo[t],
      o = n(e, i),
      a = $R.test(o) ? o : r[i],
      s = JR(ZR, a).split(yr);
    return {
      rValue: (0, ot.default)(parseInt(s[0], 10), 255),
      gValue: (0, ot.default)(parseInt(s[1], 10), 255),
      bValue: (0, ot.default)(parseInt(s[2], 10), 255),
      aValue: (0, ot.default)(parseFloat(s[3]), 1),
    };
  }
  function tC(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case Ht: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: c, heightValue: E } = r;
        c !== void 0 && (s === pt && (s = "px"), It(e, et, o), a(e, et, c + s)),
          E !== void 0 &&
            (u === pt && (u = "px"), It(e, tt, o), a(e, tt, E + u));
        break;
      }
      case Ir: {
        KR(e, r, n.config, o);
        break;
      }
      case br: {
        jR(e, r, n.config, o);
        break;
      }
      case Bt:
      case Wt:
      case zt: {
        let s = wo[n.actionTypeId],
          u = Math.round(r.rValue),
          c = Math.round(r.gValue),
          E = Math.round(r.bValue),
          l = r.aValue;
        It(e, s, o),
          a(e, s, l >= 1 ? `rgb(${u},${c},${E})` : `rgba(${u},${c},${E},${l})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        It(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function rC(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case Tn: {
        let { value: i } = t.config;
        i === mR && Ke ? n(e, _n, Qi) : n(e, _n, i);
        return;
      }
    }
  }
  function It(e, t, r) {
    if (!Ke) return;
    let n = ep[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Gt);
    if (!a) {
      o(e, Gt, n);
      return;
    }
    let s = a.split(yr).map(Jd);
    s.indexOf(n) === -1 && o(e, Gt, s.concat(n).join(yr));
  }
  function rp(e, t, r) {
    if (!Ke) return;
    let n = ep[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Gt);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        Gt,
        a
          .split(yr)
          .map(Jd)
          .filter((s) => s !== n)
          .join(yr)
      );
  }
  function nC({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        c = i[u];
      c && zd({ actionList: c, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        zd({ actionList: i[o], elementApi: t });
      });
  }
  function zd({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Kd({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Kd({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Kd({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      yt(o)
        ? (s = (u) => vo(o)(u, i))
        : (s = np({ effect: oC, actionTypeId: o, elementApi: r })),
        Ao({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function iC(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === Ht) {
      let { config: a } = t;
      a.widthUnit === pt && n(e, et, ""), a.heightUnit === pt && n(e, tt, "");
    }
    i(e, Gt) && np({ effect: rp, actionTypeId: o, elementApi: r })(e);
  }
  function oC(e, t, r) {
    let { setStyle: n } = r;
    rp(e, t, r), n(e, t, ""), t === dt && n(e, fn, "");
  }
  function ip(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function aC(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, c) => {
        if (n && c === 0) return;
        let { actionItems: E } = u,
          l = E[ip(E)],
          { config: h, actionTypeId: g } = l;
        i.id === l.id && (s = a + o);
        let v = tp(g) === bo ? 0 : h.duration;
        a += h.delay + v;
      }),
      a > 0 ? vr(s / a) : 0
    );
  }
  function sC({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, bn.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: c }) => c.some(a));
        }),
      (0, bn.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function uC(e, { basedOn: t }) {
    return (
      (e === ze.SCROLLING_IN_VIEW && (t === Ze.ELEMENT || t == null)) ||
      (e === ze.MOUSE_MOVE && t === Ze.ELEMENT)
    );
  }
  function cC(e, t) {
    return e + bR + t;
  }
  function lC(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function fC(e, t) {
    return _o(e && e.sort(), t && t.sort());
  }
  function dC(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Io + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Io + r + Io + n;
  }
  var ot,
    In,
    En,
    bn,
    jd,
    uR,
    cR,
    lR,
    fR,
    dR,
    pR,
    gR,
    hR,
    vR,
    mR,
    yn,
    mr,
    Er,
    et,
    tt,
    Yd,
    ER,
    yR,
    Ud,
    _R,
    Hd,
    IR,
    _n,
    Gt,
    pt,
    yr,
    bR,
    Io,
    Qd,
    bo,
    To,
    $d,
    Xt,
    Vt,
    Ut,
    _r,
    Zd,
    Ir,
    br,
    Ht,
    Bt,
    Wt,
    zt,
    Tn,
    TR,
    Jd,
    wo,
    ep,
    mn,
    AR,
    SR,
    CR,
    Wd,
    NR,
    DR,
    FR,
    qR,
    kR,
    xo,
    UR,
    HR,
    BR,
    WR,
    QR,
    $R,
    ZR,
    np,
    ap = ve(() => {
      "use strict";
      (ot = fe(Id())), (In = fe(Md())), (En = fe(Gd())), (bn = fe(Rt()));
      Me();
      Vd();
      Ji();
      jd = fe(so());
      mo();
      dn();
      ({
        BACKGROUND: uR,
        TRANSFORM: cR,
        TRANSLATE_3D: lR,
        SCALE_3D: fR,
        ROTATE_X: dR,
        ROTATE_Y: pR,
        ROTATE_Z: gR,
        SKEW: hR,
        PRESERVE_3D: vR,
        FLEX: mR,
        OPACITY: yn,
        FILTER: mr,
        FONT_VARIATION_SETTINGS: Er,
        WIDTH: et,
        HEIGHT: tt,
        BACKGROUND_COLOR: Yd,
        BORDER_COLOR: ER,
        COLOR: yR,
        CHILDREN: Ud,
        IMMEDIATE_CHILDREN: _R,
        SIBLINGS: Hd,
        PARENT: IR,
        DISPLAY: _n,
        WILL_CHANGE: Gt,
        AUTO: pt,
        COMMA_DELIMITER: yr,
        COLON_DELIMITER: bR,
        BAR_DELIMITER: Io,
        RENDER_TRANSFORM: Qd,
        RENDER_GENERAL: bo,
        RENDER_STYLE: To,
        RENDER_PLUGIN: $d,
      } = Ae),
        ({
          TRANSFORM_MOVE: Xt,
          TRANSFORM_SCALE: Vt,
          TRANSFORM_ROTATE: Ut,
          TRANSFORM_SKEW: _r,
          STYLE_OPACITY: Zd,
          STYLE_FILTER: Ir,
          STYLE_FONT_VARIATION: br,
          STYLE_SIZE: Ht,
          STYLE_BACKGROUND_COLOR: Bt,
          STYLE_BORDER: Wt,
          STYLE_TEXT_COLOR: zt,
          GENERAL_DISPLAY: Tn,
          OBJECT_VALUE: TR,
        } = Re),
        (Jd = (e) => e.trim()),
        (wo = Object.freeze({ [Bt]: Yd, [Wt]: ER, [zt]: yR })),
        (ep = Object.freeze({
          [dt]: cR,
          [Yd]: uR,
          [yn]: yn,
          [mr]: mr,
          [et]: et,
          [tt]: tt,
          [Er]: Er,
        })),
        (mn = new Map());
      AR = 1;
      SR = 1;
      CR = (e, t) => e === t;
      (Wd = /px/),
        (NR = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = UR[n.type]), r),
            e || {}
          )),
        (DR = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = HR[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (FR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (qR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (kR = (e, t, r) => {
          if (yt(e)) return fo(e)(r, t);
          switch (e) {
            case Ir: {
              let n = (0, En.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case br: {
              let n = (0, En.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (xo = {
        [Xt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Vt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Ut]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [_r]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (UR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (HR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (BR = (e, t) => {
          let r = (0, En.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (WR = Object.keys(xo));
      (QR = "\\(([^)]+)\\)"), ($R = /^rgb/), (ZR = RegExp(`rgba?${QR}`));
      np =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case Xt:
            case Vt:
            case Ut:
            case _r:
              e(n, dt, r);
              break;
            case Ir:
              e(n, mr, r);
              break;
            case br:
              e(n, Er, r);
              break;
            case Zd:
              e(n, yn, r);
              break;
            case Ht:
              e(n, et, r), e(n, tt, r);
              break;
            case Bt:
            case Wt:
            case zt:
              e(n, wo[t], r);
              break;
            case Tn:
              e(n, _n, r);
              break;
          }
        };
    });
  var bt = d((So) => {
    "use strict";
    Object.defineProperty(So, "__esModule", { value: !0 });
    function pC(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    pC(So, {
      IX2BrowserSupport: function () {
        return gC;
      },
      IX2EasingUtils: function () {
        return vC;
      },
      IX2Easings: function () {
        return hC;
      },
      IX2ElementsReducer: function () {
        return mC;
      },
      IX2VanillaPlugins: function () {
        return EC;
      },
      IX2VanillaUtils: function () {
        return yC;
      },
    });
    var gC = Kt((dn(), Ye(Jf))),
      hC = Kt((Zi(), Ye(hr))),
      vC = Kt((Ji(), Ye(ad))),
      mC = Kt((ld(), Ye(cd))),
      EC = Kt((mo(), Ye(yd))),
      yC = Kt((ap(), Ye(op)));
    function sp(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (sp = function (n) {
        return n ? r : t;
      })(e);
    }
    function Kt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = sp(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
  });
  var An,
    at,
    _C,
    IC,
    bC,
    TC,
    wC,
    AC,
    wn,
    up,
    xC,
    SC,
    Oo,
    OC,
    RC,
    CC,
    LC,
    cp,
    lp = ve(() => {
      "use strict";
      Me();
      (An = fe(bt())),
        (at = fe(Rt())),
        ({
          IX2_RAW_DATA_IMPORTED: _C,
          IX2_SESSION_STOPPED: IC,
          IX2_INSTANCE_ADDED: bC,
          IX2_INSTANCE_STARTED: TC,
          IX2_INSTANCE_REMOVED: wC,
          IX2_ANIMATION_FRAME_CHANGED: AC,
        } = Ie),
        ({
          optimizeFloat: wn,
          applyEasing: up,
          createBezierEasing: xC,
        } = An.IX2EasingUtils),
        ({ RENDER_GENERAL: SC } = Ae),
        ({
          getItemConfigByKey: Oo,
          getRenderType: OC,
          getStyleProp: RC,
        } = An.IX2VanillaUtils),
        (CC = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: c,
              skipMotion: E,
              skipToValue: l,
            } = e,
            { parameters: h } = t.payload,
            g = Math.max(1 - a, 0.01),
            v = h[n];
          v == null && ((g = 1), (v = s));
          let _ = Math.max(v, 0) || 0,
            T = wn(_ - r),
            I = E ? l : wn(r + T * g),
            x = I * 100;
          if (I === r && e.current) return e;
          let A, C, M, L;
          for (let z = 0, { length: K } = i; z < K; z++) {
            let { keyframe: Q, actionItems: V } = i[z];
            if ((z === 0 && (A = V[0]), x >= Q)) {
              A = V[0];
              let O = i[z + 1],
                y = O && x !== Q;
              (C = y ? O.actionItems[0] : null),
                y && ((M = Q / 100), (L = (O.keyframe - Q) / 100));
            }
          }
          let W = {};
          if (A && !C)
            for (let z = 0, { length: K } = o; z < K; z++) {
              let Q = o[z];
              W[Q] = Oo(u, Q, A.config);
            }
          else if (A && C && M !== void 0 && L !== void 0) {
            let z = (I - M) / L,
              K = A.config.easing,
              Q = up(K, z, c);
            for (let V = 0, { length: O } = o; V < O; V++) {
              let y = o[V],
                R = Oo(u, y, A.config),
                Z = (Oo(u, y, C.config) - R) * Q + R;
              W[y] = Z;
            }
          }
          return (0, at.merge)(e, { position: I, current: W });
        }),
        (LC = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: c,
              destinationKeys: E,
              pluginDuration: l,
              instanceDelay: h,
              customEasingFn: g,
              skipMotion: v,
            } = e,
            _ = u.config.easing,
            { duration: T, delay: I } = u.config;
          l != null && (T = l),
            (I = h ?? I),
            a === SC ? (T = 0) : (o || v) && (T = I = 0);
          let { now: x } = t.payload;
          if (r && n) {
            let A = x - (i + I);
            if (s) {
              let z = x - i,
                K = T + I,
                Q = wn(Math.min(Math.max(0, z / K), 1));
              e = (0, at.set)(e, "verboseTimeElapsed", K * Q);
            }
            if (A < 0) return e;
            let C = wn(Math.min(Math.max(0, A / T), 1)),
              M = up(_, C, g),
              L = {},
              W = null;
            return (
              E.length &&
                (W = E.reduce((z, K) => {
                  let Q = c[K],
                    V = parseFloat(n[K]) || 0,
                    y = (parseFloat(Q) - V) * M + V;
                  return (z[K] = y), z;
                }, {})),
              (L.current = W),
              (L.position = C),
              C === 1 && ((L.active = !1), (L.complete = !0)),
              (0, at.merge)(e, L)
            );
          }
          return e;
        }),
        (cp = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case _C:
              return t.payload.ixInstances || Object.freeze({});
            case IC:
              return Object.freeze({});
            case bC: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: c,
                  isCarrier: E,
                  origin: l,
                  destination: h,
                  immediate: g,
                  verbose: v,
                  continuous: _,
                  parameterId: T,
                  actionGroups: I,
                  smoothing: x,
                  restingValue: A,
                  pluginInstance: C,
                  pluginDuration: M,
                  instanceDelay: L,
                  skipMotion: W,
                  skipToValue: z,
                } = t.payload,
                { actionTypeId: K } = i,
                Q = OC(K),
                V = RC(Q, K),
                O = Object.keys(h).filter(
                  (R) => h[R] != null && typeof h[R] != "string"
                ),
                { easing: y } = i.config;
              return (0, at.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: l,
                destination: h,
                destinationKeys: O,
                immediate: g,
                verbose: v,
                current: null,
                actionItem: i,
                actionTypeId: K,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: c,
                renderType: Q,
                isCarrier: E,
                styleProp: V,
                continuous: _,
                parameterId: T,
                actionGroups: I,
                smoothing: x,
                restingValue: A,
                pluginInstance: C,
                pluginDuration: M,
                instanceDelay: L,
                skipMotion: W,
                skipToValue: z,
                customEasingFn:
                  Array.isArray(y) && y.length === 4 ? xC(y) : void 0,
              });
            }
            case TC: {
              let { instanceId: r, time: n } = t.payload;
              return (0, at.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case wC: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case AC: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? CC : LC;
                r = (0, at.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var PC,
    NC,
    DC,
    fp,
    dp = ve(() => {
      "use strict";
      Me();
      ({
        IX2_RAW_DATA_IMPORTED: PC,
        IX2_SESSION_STOPPED: NC,
        IX2_PARAMETER_CHANGED: DC,
      } = Ie),
        (fp = (e = {}, t) => {
          switch (t.type) {
            case PC:
              return t.payload.ixParameters || {};
            case NC:
              return {};
            case DC: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var hp = {};
  Ne(hp, { default: () => FC });
  var pp,
    gp,
    MC,
    FC,
    vp = ve(() => {
      "use strict";
      pp = fe(mi());
      Ts();
      Bs();
      Ks();
      gp = fe(bt());
      lp();
      dp();
      ({ ixElements: MC } = gp.IX2ElementsReducer),
        (FC = (0, pp.combineReducers)({
          ixData: bs,
          ixRequest: Hs,
          ixSession: zs,
          ixElements: MC,
          ixInstances: cp,
          ixParameters: fp,
        }));
    });
  var Ep = d((bk, mp) => {
    var qC = ct(),
      kC = Te(),
      GC = nt(),
      XC = "[object String]";
    function VC(e) {
      return typeof e == "string" || (!kC(e) && GC(e) && qC(e) == XC);
    }
    mp.exports = VC;
  });
  var _p = d((Tk, yp) => {
    var UC = Wi(),
      HC = UC("length");
    yp.exports = HC;
  });
  var bp = d((wk, Ip) => {
    var BC = "\\ud800-\\udfff",
      WC = "\\u0300-\\u036f",
      zC = "\\ufe20-\\ufe2f",
      KC = "\\u20d0-\\u20ff",
      jC = WC + zC + KC,
      YC = "\\ufe0e\\ufe0f",
      QC = "\\u200d",
      $C = RegExp("[" + QC + BC + jC + YC + "]");
    function ZC(e) {
      return $C.test(e);
    }
    Ip.exports = ZC;
  });
  var Lp = d((Ak, Cp) => {
    var wp = "\\ud800-\\udfff",
      JC = "\\u0300-\\u036f",
      eL = "\\ufe20-\\ufe2f",
      tL = "\\u20d0-\\u20ff",
      rL = JC + eL + tL,
      nL = "\\ufe0e\\ufe0f",
      iL = "[" + wp + "]",
      Ro = "[" + rL + "]",
      Co = "\\ud83c[\\udffb-\\udfff]",
      oL = "(?:" + Ro + "|" + Co + ")",
      Ap = "[^" + wp + "]",
      xp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Sp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      aL = "\\u200d",
      Op = oL + "?",
      Rp = "[" + nL + "]?",
      sL = "(?:" + aL + "(?:" + [Ap, xp, Sp].join("|") + ")" + Rp + Op + ")*",
      uL = Rp + Op + sL,
      cL = "(?:" + [Ap + Ro + "?", Ro, xp, Sp, iL].join("|") + ")",
      Tp = RegExp(Co + "(?=" + Co + ")|" + cL + uL, "g");
    function lL(e) {
      for (var t = (Tp.lastIndex = 0); Tp.test(e); ) ++t;
      return t;
    }
    Cp.exports = lL;
  });
  var Np = d((xk, Pp) => {
    var fL = _p(),
      dL = bp(),
      pL = Lp();
    function gL(e) {
      return dL(e) ? pL(e) : fL(e);
    }
    Pp.exports = gL;
  });
  var Mp = d((Sk, Dp) => {
    var hL = tn(),
      vL = rn(),
      mL = mt(),
      EL = Ep(),
      yL = Np(),
      _L = "[object Map]",
      IL = "[object Set]";
    function bL(e) {
      if (e == null) return 0;
      if (mL(e)) return EL(e) ? yL(e) : e.length;
      var t = vL(e);
      return t == _L || t == IL ? e.size : hL(e).length;
    }
    Dp.exports = bL;
  });
  var qp = d((Ok, Fp) => {
    var TL = "Expected a function";
    function wL(e) {
      if (typeof e != "function") throw new TypeError(TL);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Fp.exports = wL;
  });
  var Lo = d((Rk, kp) => {
    var AL = lt(),
      xL = (function () {
        try {
          var e = AL(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    kp.exports = xL;
  });
  var Po = d((Ck, Xp) => {
    var Gp = Lo();
    function SL(e, t, r) {
      t == "__proto__" && Gp
        ? Gp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Xp.exports = SL;
  });
  var Up = d((Lk, Vp) => {
    var OL = Po(),
      RL = Wr(),
      CL = Object.prototype,
      LL = CL.hasOwnProperty;
    function PL(e, t, r) {
      var n = e[t];
      (!(LL.call(e, t) && RL(n, r)) || (r === void 0 && !(t in e))) &&
        OL(e, t, r);
    }
    Vp.exports = PL;
  });
  var Wp = d((Pk, Bp) => {
    var NL = Up(),
      DL = dr(),
      ML = $r(),
      Hp = Je(),
      FL = qt();
    function qL(e, t, r, n) {
      if (!Hp(e)) return e;
      t = DL(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = FL(t[i]),
          c = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var E = s[u];
          (c = n ? n(E, u, s) : void 0),
            c === void 0 && (c = Hp(E) ? E : ML(t[i + 1]) ? [] : {});
        }
        NL(s, u, c), (s = s[u]);
      }
      return e;
    }
    Bp.exports = qL;
  });
  var Kp = d((Nk, zp) => {
    var kL = an(),
      GL = Wp(),
      XL = dr();
    function VL(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = kL(e, a);
        r(s, a) && GL(o, XL(a, e), s);
      }
      return o;
    }
    zp.exports = VL;
  });
  var Yp = d((Dk, jp) => {
    var UL = Yr(),
      HL = ii(),
      BL = Ci(),
      WL = Ri(),
      zL = Object.getOwnPropertySymbols,
      KL = zL
        ? function (e) {
            for (var t = []; e; ) UL(t, BL(e)), (e = HL(e));
            return t;
          }
        : WL;
    jp.exports = KL;
  });
  var $p = d((Mk, Qp) => {
    function jL(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Qp.exports = jL;
  });
  var Jp = d((Fk, Zp) => {
    var YL = Je(),
      QL = en(),
      $L = $p(),
      ZL = Object.prototype,
      JL = ZL.hasOwnProperty;
    function eP(e) {
      if (!YL(e)) return $L(e);
      var t = QL(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !JL.call(e, n))) || r.push(n);
      return r;
    }
    Zp.exports = eP;
  });
  var tg = d((qk, eg) => {
    var tP = Pi(),
      rP = Jp(),
      nP = mt();
    function iP(e) {
      return nP(e) ? tP(e, !0) : rP(e);
    }
    eg.exports = iP;
  });
  var ng = d((kk, rg) => {
    var oP = Oi(),
      aP = Yp(),
      sP = tg();
    function uP(e) {
      return oP(e, sP, aP);
    }
    rg.exports = uP;
  });
  var og = d((Gk, ig) => {
    var cP = Bi(),
      lP = ft(),
      fP = Kp(),
      dP = ng();
    function pP(e, t) {
      if (e == null) return {};
      var r = cP(dP(e), function (n) {
        return [n];
      });
      return (
        (t = lP(t)),
        fP(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ig.exports = pP;
  });
  var sg = d((Xk, ag) => {
    var gP = ft(),
      hP = qp(),
      vP = og();
    function mP(e, t) {
      return vP(e, hP(gP(t)));
    }
    ag.exports = mP;
  });
  var cg = d((Vk, ug) => {
    var EP = tn(),
      yP = rn(),
      _P = ar(),
      IP = Te(),
      bP = mt(),
      TP = Qr(),
      wP = en(),
      AP = Jr(),
      xP = "[object Map]",
      SP = "[object Set]",
      OP = Object.prototype,
      RP = OP.hasOwnProperty;
    function CP(e) {
      if (e == null) return !0;
      if (
        bP(e) &&
        (IP(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          TP(e) ||
          AP(e) ||
          _P(e))
      )
        return !e.length;
      var t = yP(e);
      if (t == xP || t == SP) return !e.size;
      if (wP(e)) return !EP(e).length;
      for (var r in e) if (RP.call(e, r)) return !1;
      return !0;
    }
    ug.exports = CP;
  });
  var fg = d((Uk, lg) => {
    var LP = Po(),
      PP = Eo(),
      NP = ft();
    function DP(e, t) {
      var r = {};
      return (
        (t = NP(t, 3)),
        PP(e, function (n, i, o) {
          LP(r, i, t(n, i, o));
        }),
        r
      );
    }
    lg.exports = DP;
  });
  var pg = d((Hk, dg) => {
    function MP(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    dg.exports = MP;
  });
  var hg = d((Bk, gg) => {
    var FP = un();
    function qP(e) {
      return typeof e == "function" ? e : FP;
    }
    gg.exports = qP;
  });
  var mg = d((Wk, vg) => {
    var kP = pg(),
      GP = yo(),
      XP = hg(),
      VP = Te();
    function UP(e, t) {
      var r = VP(e) ? kP : GP;
      return r(e, XP(t));
    }
    vg.exports = UP;
  });
  var yg = d((zk, Eg) => {
    var HP = We(),
      BP = function () {
        return HP.Date.now();
      };
    Eg.exports = BP;
  });
  var bg = d((Kk, Ig) => {
    var WP = Je(),
      No = yg(),
      _g = cn(),
      zP = "Expected a function",
      KP = Math.max,
      jP = Math.min;
    function YP(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        c = 0,
        E = !1,
        l = !1,
        h = !0;
      if (typeof e != "function") throw new TypeError(zP);
      (t = _g(t) || 0),
        WP(r) &&
          ((E = !!r.leading),
          (l = "maxWait" in r),
          (o = l ? KP(_g(r.maxWait) || 0, t) : o),
          (h = "trailing" in r ? !!r.trailing : h));
      function g(L) {
        var W = n,
          z = i;
        return (n = i = void 0), (c = L), (a = e.apply(z, W)), a;
      }
      function v(L) {
        return (c = L), (s = setTimeout(I, t)), E ? g(L) : a;
      }
      function _(L) {
        var W = L - u,
          z = L - c,
          K = t - W;
        return l ? jP(K, o - z) : K;
      }
      function T(L) {
        var W = L - u,
          z = L - c;
        return u === void 0 || W >= t || W < 0 || (l && z >= o);
      }
      function I() {
        var L = No();
        if (T(L)) return x(L);
        s = setTimeout(I, _(L));
      }
      function x(L) {
        return (s = void 0), h && n ? g(L) : ((n = i = void 0), a);
      }
      function A() {
        s !== void 0 && clearTimeout(s), (c = 0), (n = u = i = s = void 0);
      }
      function C() {
        return s === void 0 ? a : x(No());
      }
      function M() {
        var L = No(),
          W = T(L);
        if (((n = arguments), (i = this), (u = L), W)) {
          if (s === void 0) return v(u);
          if (l) return clearTimeout(s), (s = setTimeout(I, t)), g(u);
        }
        return s === void 0 && (s = setTimeout(I, t)), a;
      }
      return (M.cancel = A), (M.flush = C), M;
    }
    Ig.exports = YP;
  });
  var wg = d((jk, Tg) => {
    var QP = bg(),
      $P = Je(),
      ZP = "Expected a function";
    function JP(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(ZP);
      return (
        $P(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        QP(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Tg.exports = JP;
  });
  var xg = {};
  Ne(xg, {
    actionListPlaybackChanged: () => Yt,
    animationFrameChanged: () => Sn,
    clearRequested: () => wN,
    elementStateChanged: () => Vo,
    eventListenerAdded: () => xn,
    eventStateChanged: () => ko,
    instanceAdded: () => Go,
    instanceRemoved: () => Xo,
    instanceStarted: () => On,
    mediaQueriesDefined: () => Ho,
    parameterChanged: () => jt,
    playbackRequested: () => bN,
    previewRequested: () => IN,
    rawDataImported: () => Do,
    sessionInitialized: () => Mo,
    sessionStarted: () => Fo,
    sessionStopped: () => qo,
    stopRequested: () => TN,
    testFrameRendered: () => AN,
    viewportWidthChanged: () => Uo,
  });
  var Ag,
    eN,
    tN,
    rN,
    nN,
    iN,
    oN,
    aN,
    sN,
    uN,
    cN,
    lN,
    fN,
    dN,
    pN,
    gN,
    hN,
    vN,
    mN,
    EN,
    yN,
    _N,
    Do,
    Mo,
    Fo,
    qo,
    IN,
    bN,
    TN,
    wN,
    xn,
    AN,
    ko,
    Sn,
    jt,
    Go,
    On,
    Xo,
    Vo,
    Yt,
    Uo,
    Ho,
    Rn = ve(() => {
      "use strict";
      Me();
      (Ag = fe(bt())),
        ({
          IX2_RAW_DATA_IMPORTED: eN,
          IX2_SESSION_INITIALIZED: tN,
          IX2_SESSION_STARTED: rN,
          IX2_SESSION_STOPPED: nN,
          IX2_PREVIEW_REQUESTED: iN,
          IX2_PLAYBACK_REQUESTED: oN,
          IX2_STOP_REQUESTED: aN,
          IX2_CLEAR_REQUESTED: sN,
          IX2_EVENT_LISTENER_ADDED: uN,
          IX2_TEST_FRAME_RENDERED: cN,
          IX2_EVENT_STATE_CHANGED: lN,
          IX2_ANIMATION_FRAME_CHANGED: fN,
          IX2_PARAMETER_CHANGED: dN,
          IX2_INSTANCE_ADDED: pN,
          IX2_INSTANCE_STARTED: gN,
          IX2_INSTANCE_REMOVED: hN,
          IX2_ELEMENT_STATE_CHANGED: vN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: mN,
          IX2_VIEWPORT_WIDTH_CHANGED: EN,
          IX2_MEDIA_QUERIES_DEFINED: yN,
        } = Ie),
        ({ reifyState: _N } = Ag.IX2VanillaUtils),
        (Do = (e) => ({ type: eN, payload: { ..._N(e) } })),
        (Mo = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: tN,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Fo = () => ({ type: rN })),
        (qo = () => ({ type: nN })),
        (IN = ({ rawData: e, defer: t }) => ({
          type: iN,
          payload: { defer: t, rawData: e },
        })),
        (bN = ({
          actionTypeId: e = Re.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: oN,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (TN = (e) => ({ type: aN, payload: { actionListId: e } })),
        (wN = () => ({ type: sN })),
        (xn = (e, t) => ({
          type: uN,
          payload: { target: e, listenerParams: t },
        })),
        (AN = (e = 1) => ({ type: cN, payload: { step: e } })),
        (ko = (e, t) => ({ type: lN, payload: { stateKey: e, newState: t } })),
        (Sn = (e, t) => ({ type: fN, payload: { now: e, parameters: t } })),
        (jt = (e, t) => ({ type: dN, payload: { key: e, value: t } })),
        (Go = (e) => ({ type: pN, payload: { ...e } })),
        (On = (e, t) => ({ type: gN, payload: { instanceId: e, time: t } })),
        (Xo = (e) => ({ type: hN, payload: { instanceId: e } })),
        (Vo = (e, t, r, n) => ({
          type: vN,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (Yt = ({ actionListId: e, isPlaying: t }) => ({
          type: mN,
          payload: { actionListId: e, isPlaying: t },
        })),
        (Uo = ({ width: e, mediaQueries: t }) => ({
          type: EN,
          payload: { width: e, mediaQueries: t },
        })),
        (Ho = () => ({ type: yN }));
    });
  var Le = {};
  Ne(Le, {
    elementContains: () => zo,
    getChildElements: () => MN,
    getClosestElement: () => Tr,
    getProperty: () => CN,
    getQuerySelector: () => Wo,
    getRefType: () => Ko,
    getSiblingElements: () => FN,
    getStyle: () => RN,
    getValidDocument: () => PN,
    isSiblingNode: () => DN,
    matchSelector: () => LN,
    queryDocument: () => NN,
    setStyle: () => ON,
  });
  function ON(e, t, r) {
    e.style[t] = r;
  }
  function RN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function CN(e, t) {
    return e[t];
  }
  function LN(e) {
    return (t) => t[Bo](e);
  }
  function Wo({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Sg) !== -1) {
        let n = e.split(Sg),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Rg)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function PN(e) {
    return e == null || e === document.documentElement.getAttribute(Rg)
      ? document
      : null;
  }
  function NN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function zo(e, t) {
    return e.contains(t);
  }
  function DN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function MN(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function FN(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function Ko(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? xN
        : SN
      : null;
  }
  var Og,
    Bo,
    Sg,
    xN,
    SN,
    Rg,
    Tr,
    Cg = ve(() => {
      "use strict";
      Og = fe(bt());
      Me();
      ({ ELEMENT_MATCHES: Bo } = Og.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Sg,
          HTML_ELEMENT: xN,
          PLAIN_OBJECT: SN,
          WF_PAGE: Rg,
        } = Ae);
      Tr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[Bo] && r[Bo](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var jo = d(($k, Pg) => {
    var qN = Je(),
      Lg = Object.create,
      kN = (function () {
        function e() {}
        return function (t) {
          if (!qN(t)) return {};
          if (Lg) return Lg(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Pg.exports = kN;
  });
  var Cn = d((Zk, Ng) => {
    function GN() {}
    Ng.exports = GN;
  });
  var Pn = d((Jk, Dg) => {
    var XN = jo(),
      VN = Cn();
    function Ln(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ln.prototype = XN(VN.prototype);
    Ln.prototype.constructor = Ln;
    Dg.exports = Ln;
  });
  var kg = d((eG, qg) => {
    var Mg = xt(),
      UN = ar(),
      HN = Te(),
      Fg = Mg ? Mg.isConcatSpreadable : void 0;
    function BN(e) {
      return HN(e) || UN(e) || !!(Fg && e && e[Fg]);
    }
    qg.exports = BN;
  });
  var Vg = d((tG, Xg) => {
    var WN = Yr(),
      zN = kg();
    function Gg(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = zN), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Gg(s, t - 1, r, n, i)
            : WN(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Xg.exports = Gg;
  });
  var Hg = d((rG, Ug) => {
    var KN = Vg();
    function jN(e) {
      var t = e == null ? 0 : e.length;
      return t ? KN(e, 1) : [];
    }
    Ug.exports = jN;
  });
  var Wg = d((nG, Bg) => {
    function YN(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Bg.exports = YN;
  });
  var jg = d((iG, Kg) => {
    var QN = Wg(),
      zg = Math.max;
    function $N(e, t, r) {
      return (
        (t = zg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = zg(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), QN(e, this, s);
        }
      );
    }
    Kg.exports = $N;
  });
  var Qg = d((oG, Yg) => {
    function ZN(e) {
      return function () {
        return e;
      };
    }
    Yg.exports = ZN;
  });
  var Jg = d((aG, Zg) => {
    var JN = Qg(),
      $g = Lo(),
      eD = un(),
      tD = $g
        ? function (e, t) {
            return $g(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: JN(t),
              writable: !0,
            });
          }
        : eD;
    Zg.exports = tD;
  });
  var th = d((sG, eh) => {
    var rD = 800,
      nD = 16,
      iD = Date.now;
    function oD(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = iD(),
          i = nD - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= rD) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    eh.exports = oD;
  });
  var nh = d((uG, rh) => {
    var aD = Jg(),
      sD = th(),
      uD = sD(aD);
    rh.exports = uD;
  });
  var oh = d((cG, ih) => {
    var cD = Hg(),
      lD = jg(),
      fD = nh();
    function dD(e) {
      return fD(lD(e, void 0, cD), e + "");
    }
    ih.exports = dD;
  });
  var uh = d((lG, sh) => {
    var ah = Ni(),
      pD = ah && new ah();
    sh.exports = pD;
  });
  var lh = d((fG, ch) => {
    function gD() {}
    ch.exports = gD;
  });
  var Yo = d((dG, dh) => {
    var fh = uh(),
      hD = lh(),
      vD = fh
        ? function (e) {
            return fh.get(e);
          }
        : hD;
    dh.exports = vD;
  });
  var gh = d((pG, ph) => {
    var mD = {};
    ph.exports = mD;
  });
  var Qo = d((gG, vh) => {
    var hh = gh(),
      ED = Object.prototype,
      yD = ED.hasOwnProperty;
    function _D(e) {
      for (
        var t = e.name + "", r = hh[t], n = yD.call(hh, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    vh.exports = _D;
  });
  var Dn = d((hG, mh) => {
    var ID = jo(),
      bD = Cn(),
      TD = 4294967295;
    function Nn(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = TD),
        (this.__views__ = []);
    }
    Nn.prototype = ID(bD.prototype);
    Nn.prototype.constructor = Nn;
    mh.exports = Nn;
  });
  var yh = d((vG, Eh) => {
    function wD(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Eh.exports = wD;
  });
  var Ih = d((mG, _h) => {
    var AD = Dn(),
      xD = Pn(),
      SD = yh();
    function OD(e) {
      if (e instanceof AD) return e.clone();
      var t = new xD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = SD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    _h.exports = OD;
  });
  var wh = d((EG, Th) => {
    var RD = Dn(),
      bh = Pn(),
      CD = Cn(),
      LD = Te(),
      PD = nt(),
      ND = Ih(),
      DD = Object.prototype,
      MD = DD.hasOwnProperty;
    function Mn(e) {
      if (PD(e) && !LD(e) && !(e instanceof RD)) {
        if (e instanceof bh) return e;
        if (MD.call(e, "__wrapped__")) return ND(e);
      }
      return new bh(e);
    }
    Mn.prototype = CD.prototype;
    Mn.prototype.constructor = Mn;
    Th.exports = Mn;
  });
  var xh = d((yG, Ah) => {
    var FD = Dn(),
      qD = Yo(),
      kD = Qo(),
      GD = wh();
    function XD(e) {
      var t = kD(e),
        r = GD[t];
      if (typeof r != "function" || !(t in FD.prototype)) return !1;
      if (e === r) return !0;
      var n = qD(r);
      return !!n && e === n[0];
    }
    Ah.exports = XD;
  });
  var Ch = d((_G, Rh) => {
    var Sh = Pn(),
      VD = oh(),
      UD = Yo(),
      $o = Qo(),
      HD = Te(),
      Oh = xh(),
      BD = "Expected a function",
      WD = 8,
      zD = 32,
      KD = 128,
      jD = 256;
    function YD(e) {
      return VD(function (t) {
        var r = t.length,
          n = r,
          i = Sh.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(BD);
          if (i && !a && $o(o) == "wrapper") var a = new Sh([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = $o(o),
            u = s == "wrapper" ? UD(o) : void 0;
          u &&
          Oh(u[0]) &&
          u[1] == (KD | WD | zD | jD) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[$o(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && Oh(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var c = arguments,
            E = c[0];
          if (a && c.length == 1 && HD(E)) return a.plant(E).value();
          for (var l = 0, h = r ? t[l].apply(this, c) : E; ++l < r; )
            h = t[l].call(this, h);
          return h;
        };
      });
    }
    Rh.exports = YD;
  });
  var Ph = d((IG, Lh) => {
    var QD = Ch(),
      $D = QD();
    Lh.exports = $D;
  });
  var Dh = d((bG, Nh) => {
    function ZD(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Nh.exports = ZD;
  });
  var Fh = d((TG, Mh) => {
    var JD = Dh(),
      Zo = cn();
    function eM(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = Zo(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = Zo(t)), (t = t === t ? t : 0)),
        JD(Zo(e), t, r)
      );
    }
    Mh.exports = eM;
  });
  var Wh,
    zh,
    Kh,
    jh,
    tM,
    rM,
    nM,
    iM,
    oM,
    aM,
    sM,
    uM,
    cM,
    lM,
    fM,
    dM,
    pM,
    gM,
    hM,
    Yh,
    Qh,
    vM,
    mM,
    EM,
    $h,
    yM,
    _M,
    Zh,
    IM,
    Jo,
    Jh,
    qh,
    kh,
    ev,
    Ar,
    bM,
    rt,
    tv,
    TM,
    qe,
    je,
    xr,
    rv,
    ea,
    Gh,
    ta,
    wM,
    wr,
    AM,
    xM,
    SM,
    nv,
    Xh,
    OM,
    Vh,
    RM,
    CM,
    LM,
    Uh,
    Fn,
    qn,
    Hh,
    Bh,
    iv,
    ov = ve(() => {
      "use strict";
      (Wh = fe(Ph())), (zh = fe(sn())), (Kh = fe(Fh()));
      Me();
      ra();
      Rn();
      (jh = fe(bt())),
        ({
          MOUSE_CLICK: tM,
          MOUSE_SECOND_CLICK: rM,
          MOUSE_DOWN: nM,
          MOUSE_UP: iM,
          MOUSE_OVER: oM,
          MOUSE_OUT: aM,
          DROPDOWN_CLOSE: sM,
          DROPDOWN_OPEN: uM,
          SLIDER_ACTIVE: cM,
          SLIDER_INACTIVE: lM,
          TAB_ACTIVE: fM,
          TAB_INACTIVE: dM,
          NAVBAR_CLOSE: pM,
          NAVBAR_OPEN: gM,
          MOUSE_MOVE: hM,
          PAGE_SCROLL_DOWN: Yh,
          SCROLL_INTO_VIEW: Qh,
          SCROLL_OUT_OF_VIEW: vM,
          PAGE_SCROLL_UP: mM,
          SCROLLING_IN_VIEW: EM,
          PAGE_FINISH: $h,
          ECOMMERCE_CART_CLOSE: yM,
          ECOMMERCE_CART_OPEN: _M,
          PAGE_START: Zh,
          PAGE_SCROLL: IM,
        } = ze),
        (Jo = "COMPONENT_ACTIVE"),
        (Jh = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: qh } = Ae),
        ({ getNamespacedParameterId: kh } = jh.IX2VanillaUtils),
        (ev = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Ar = ev(({ element: e, nativeEvent: t }) => e === t.target)),
        (bM = ev(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (rt = (0, Wh.default)([Ar, bM])),
        (tv = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !wM[i.eventTypeId]) return i;
          }
          return null;
        }),
        (TM = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!tv(e, n);
        }),
        (qe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            c = tv(e, u);
          return (
            c &&
              Qt({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + qh + n.split(qh)[1],
                actionListId: (0, zh.default)(c, "action.config.actionListId"),
              }),
            Qt({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            Sr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (xr = { handler: je(rt, qe) }),
        (rv = { ...xr, types: [Jo, Jh].join(" ") }),
        (ea = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Gh = "mouseover mouseout"),
        (ta = { types: ea }),
        (wM = { PAGE_START: Zh, PAGE_FINISH: $h }),
        (wr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Kh.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (AM = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (xM = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (SM = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = wr(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return AM(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (nv = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [Jo, Jh].indexOf(n) !== -1 ? n === Jo : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Xh = (e) => (t, r) => {
          let n = { elementHovered: xM(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (OM = (e) => (t, r) => {
          let n = { ...r, elementVisible: SM(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Vh =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = wr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: c } = a,
              E = c === "PX",
              l = i - o,
              h = Number((n / l).toFixed(2));
            if (r && r.percentTop === h) return r;
            let g = (E ? u : (o * (u || 0)) / 100) / l,
              v,
              _,
              T = 0;
            r &&
              ((v = h > r.percentTop),
              (_ = r.scrollingDown !== v),
              (T = _ ? h : r.anchorTop));
            let I = s === Yh ? h >= T + g : h <= T - g,
              x = {
                ...r,
                percentTop: h,
                inBounds: I,
                anchorTop: T,
                scrollingDown: v,
              };
            return (r && I && (_ || x.inBounds !== r.inBounds) && e(t, x)) || x;
          }),
        (RM = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (CM = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (LM = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Uh =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Fn = (e = !0) => ({
          ...rv,
          handler: je(
            e ? rt : Ar,
            nv((t, r) => (r.isActive ? xr.handler(t, r) : r))
          ),
        })),
        (qn = (e = !0) => ({
          ...rv,
          handler: je(
            e ? rt : Ar,
            nv((t, r) => (r.isActive ? r : xr.handler(t, r)))
          ),
        })),
        (Hh = {
          ...ta,
          handler: OM((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Qh) === r
              ? (qe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Bh = 0.05),
        (iv = {
          [cM]: Fn(),
          [lM]: qn(),
          [uM]: Fn(),
          [sM]: qn(),
          [gM]: Fn(!1),
          [pM]: qn(!1),
          [fM]: Fn(),
          [dM]: qn(),
          [_M]: { types: "ecommerce-cart-open", handler: je(rt, qe) },
          [yM]: { types: "ecommerce-cart-close", handler: je(rt, qe) },
          [tM]: {
            types: "click",
            handler: je(
              rt,
              Uh((e, { clickCount: t }) => {
                TM(e) ? t === 1 && qe(e) : qe(e);
              })
            ),
          },
          [rM]: {
            types: "click",
            handler: je(
              rt,
              Uh((e, { clickCount: t }) => {
                t === 2 && qe(e);
              })
            ),
          },
          [nM]: { ...xr, types: "mousedown" },
          [iM]: { ...xr, types: "mouseup" },
          [oM]: {
            types: Gh,
            handler: je(
              rt,
              Xh((e, t) => {
                t.elementHovered && qe(e);
              })
            ),
          },
          [aM]: {
            types: Gh,
            handler: je(
              rt,
              Xh((e, t) => {
                t.elementHovered || qe(e);
              })
            ),
          },
          [hM]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: c,
                  restingState: E = 0,
                } = r,
                {
                  clientX: l = o.clientX,
                  clientY: h = o.clientY,
                  pageX: g = o.pageX,
                  pageY: v = o.pageY,
                } = n,
                _ = s === "X_AXIS",
                T = n.type === "mouseout",
                I = E / 100,
                x = u,
                A = !1;
              switch (a) {
                case Ze.VIEWPORT: {
                  I = _
                    ? Math.min(l, window.innerWidth) / window.innerWidth
                    : Math.min(h, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Ze.PAGE: {
                  let {
                    scrollLeft: C,
                    scrollTop: M,
                    scrollWidth: L,
                    scrollHeight: W,
                  } = wr();
                  I = _ ? Math.min(C + g, L) / L : Math.min(M + v, W) / W;
                  break;
                }
                case Ze.ELEMENT:
                default: {
                  x = kh(i, u);
                  let C = n.type.indexOf("mouse") === 0;
                  if (C && rt({ element: t, nativeEvent: n }) !== !0) break;
                  let M = t.getBoundingClientRect(),
                    { left: L, top: W, width: z, height: K } = M;
                  if (!C && !RM({ left: l, top: h }, M)) break;
                  (A = !0), (I = _ ? (l - L) / z : (h - W) / K);
                  break;
                }
              }
              return (
                T && (I > 1 - Bh || I < Bh) && (I = Math.round(I)),
                (a !== Ze.ELEMENT || A || A !== o.elementHovered) &&
                  ((I = c ? 1 - I : I), e.dispatch(jt(x, I))),
                {
                  elementHovered: A,
                  clientX: l,
                  clientY: h,
                  pageX: g,
                  pageY: v,
                }
              );
            },
          },
          [IM]: {
            types: ea,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = wr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(jt(r, s));
            },
          },
          [EM]: {
            types: ea,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: c,
                } = wr(),
                {
                  basedOn: E,
                  selectedAxis: l,
                  continuousParameterGroupId: h,
                  startsEntering: g,
                  startsExiting: v,
                  addEndOffset: _,
                  addStartOffset: T,
                  addOffsetValue: I = 0,
                  endOffsetValue: x = 0,
                } = r,
                A = l === "X_AXIS";
              if (E === Ze.VIEWPORT) {
                let C = A ? o / s : a / u;
                return (
                  C !== i.scrollPercent && t.dispatch(jt(h, C)),
                  { scrollPercent: C }
                );
              } else {
                let C = kh(n, h),
                  M = e.getBoundingClientRect(),
                  L = (T ? I : 0) / 100,
                  W = (_ ? x : 0) / 100;
                (L = g ? L : 1 - L), (W = v ? W : 1 - W);
                let z = M.top + Math.min(M.height * L, c),
                  Q = M.top + M.height * W - z,
                  V = Math.min(c + Q, u),
                  y = Math.min(Math.max(0, c - z), V) / V;
                return (
                  y !== i.scrollPercent && t.dispatch(jt(C, y)),
                  { scrollPercent: y }
                );
              }
            },
          },
          [Qh]: Hh,
          [vM]: Hh,
          [Yh]: {
            ...ta,
            handler: Vh((e, t) => {
              t.scrollingDown && qe(e);
            }),
          },
          [mM]: {
            ...ta,
            handler: Vh((e, t) => {
              t.scrollingDown || qe(e);
            }),
          },
          [$h]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je(Ar, CM(qe)),
          },
          [Zh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je(Ar, LM(qe)),
          },
        });
    });
  var bv = {};
  Ne(bv, {
    observeRequests: () => $M,
    startActionGroup: () => Sr,
    startEngine: () => Hn,
    stopActionGroup: () => Qt,
    stopAllActionGroups: () => yv,
    stopEngine: () => Bn,
  });
  function $M(e) {
    Tt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: eF }),
      Tt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: tF }),
      Tt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: rF }),
      Tt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: nF });
  }
  function ZM(e) {
    Tt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Bn(e),
          hv({ store: e, elementApi: Le }),
          Hn({ store: e, allowEvents: !0 }),
          vv();
      },
    });
  }
  function JM(e, t) {
    let r = Tt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function eF({ rawData: e, defer: t }, r) {
    let n = () => {
      Hn({ store: r, rawData: e, allowEvents: !0 }), vv();
    };
    t ? setTimeout(n, 0) : n();
  }
  function vv() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function tF(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: c = !0,
      } = e,
      { rawData: E } = e;
    if (n && i && E && s) {
      let l = E.actionLists[n];
      l && (E = XM({ actionList: l, actionItemId: i, rawData: E }));
    }
    if (
      (Hn({ store: t, rawData: E, allowEvents: a, testManual: u }),
      (n && r === Re.GENERAL_START_ACTION) || na(r))
    ) {
      Qt({ store: t, actionListId: n }),
        Ev({ store: t, actionListId: n, eventId: o });
      let l = Sr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: c,
      });
      c && l && t.dispatch(Yt({ actionListId: n, isPlaying: !s }));
    }
  }
  function rF({ actionListId: e }, t) {
    e ? Qt({ store: t, actionListId: e }) : yv({ store: t }), Bn(t);
  }
  function nF(e, t) {
    Bn(t), hv({ store: t, elementApi: Le });
  }
  function Hn({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Do(t)),
      i.active ||
        (e.dispatch(
          Mo({
            hasBoundaryNodes: !!document.querySelector(Gn),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (cF(e), iF(), e.getState().ixSession.hasDefinedMediaQueries && ZM(e)),
        e.dispatch(Fo()),
        oF(e, n));
  }
  function iF() {
    let { documentElement: e } = document;
    e.className.indexOf(av) === -1 && (e.className += ` ${av}`);
  }
  function oF(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(Sn(n, o)), t ? JM(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Bn(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(aF), BM(), e.dispatch(qo());
    }
  }
  function aF({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function sF({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: c, ixSession: E } = e.getState(),
      { events: l } = c,
      h = l[n],
      { eventTypeId: g } = h,
      v = {},
      _ = {},
      T = [],
      { continuousActionGroups: I } = a,
      { id: x } = a;
    VM(g, i) && (x = UM(t, x));
    let A = E.hasBoundaryNodes && r ? Tr(r, Gn) : null;
    I.forEach((C) => {
      let { keyframe: M, actionItems: L } = C;
      L.forEach((W) => {
        let { actionTypeId: z } = W,
          { target: K } = W.config;
        if (!K) return;
        let Q = K.boundaryMode ? A : null,
          V = WM(K) + ia + z;
        if (((_[V] = uF(_[V], M, W)), !v[V])) {
          v[V] = !0;
          let { config: O } = W;
          Xn({
            config: O,
            event: h,
            eventTarget: r,
            elementRoot: Q,
            elementApi: Le,
          }).forEach((y) => {
            T.push({ element: y, key: V });
          });
        }
      });
    }),
      T.forEach(({ element: C, key: M }) => {
        let L = _[M],
          W = (0, st.default)(L, "[0].actionItems[0]", {}),
          { actionTypeId: z } = W,
          Q = (
            z === Re.PLUGIN_RIVE
              ? (W.config?.target?.selectorGuids || []).length === 0
              : Un(z)
          )
            ? aa(z)(C, W)
            : null,
          V = oa({ element: C, actionItem: W, elementApi: Le }, Q);
        sa({
          store: e,
          element: C,
          eventId: n,
          actionListId: o,
          actionItem: W,
          destination: V,
          continuous: !0,
          parameterId: x,
          actionGroups: L,
          smoothing: s,
          restingValue: u,
          pluginInstance: Q,
        });
      });
  }
  function uF(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function cF(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    mv(e),
      (0, $t.default)(r, (i, o) => {
        let a = iv[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        hF({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && fF(e);
  }
  function fF(e) {
    let t = () => {
      mv(e);
    };
    lF.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(xn(window, [r, t]));
    }),
      t();
  }
  function mv(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(Uo({ width: n, mediaQueries: i }));
    }
  }
  function hF({ logic: e, store: t, events: r }) {
    vF(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = dF(r, gF);
    if (!(0, cv.default)(s)) return;
    (0, $t.default)(s, (l, h) => {
      let g = r[h],
        { action: v, id: _, mediaQueries: T = o.mediaQueryKeys } = g,
        { actionListId: I } = v.config;
      zM(T, o.mediaQueryKeys) || t.dispatch(Ho()),
        v.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(g.config) ? g.config : [g.config]).forEach((A) => {
            let { continuousParameterGroupId: C } = A,
              M = (0, st.default)(a, `${I}.continuousParameterGroups`, []),
              L = (0, uv.default)(M, ({ id: K }) => K === C),
              W = (A.smoothing || 0) / 100,
              z = (A.restingState || 0) / 100;
            L &&
              l.forEach((K, Q) => {
                let V = _ + ia + Q;
                sF({
                  store: t,
                  eventStateKey: V,
                  eventTarget: K,
                  eventId: _,
                  eventConfig: A,
                  actionListId: I,
                  parameterGroup: L,
                  smoothing: W,
                  restingValue: z,
                });
              });
          }),
        (v.actionTypeId === Re.GENERAL_START_ACTION || na(v.actionTypeId)) &&
          Ev({ store: t, actionListId: I, eventId: _ });
    });
    let u = (l) => {
        let { ixSession: h } = t.getState();
        pF(s, (g, v, _) => {
          let T = r[v],
            I = h.eventState[_],
            { action: x, mediaQueries: A = o.mediaQueryKeys } = T;
          if (!Vn(A, h.mediaQueryKey)) return;
          let C = (M = {}) => {
            let L = i(
              {
                store: t,
                element: g,
                event: T,
                eventConfig: M,
                nativeEvent: l,
                eventStateKey: _,
              },
              I
            );
            KM(L, I) || t.dispatch(ko(_, L));
          };
          x.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(T.config) ? T.config : [T.config]).forEach(C)
            : C();
        });
      },
      c = (0, pv.default)(u, QM),
      E = ({ target: l = document, types: h, throttle: g }) => {
        h.split(" ")
          .filter(Boolean)
          .forEach((v) => {
            let _ = g ? c : u;
            l.addEventListener(v, _), t.dispatch(xn(l, [v, _]));
          });
      };
    Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e);
  }
  function vF(e) {
    if (!YM) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = Wo(o);
      t[a] ||
        ((i === ze.MOUSE_CLICK || i === ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function Ev({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let c = (0, st.default)(u, "actionItemGroups[0].actionItems", []),
        E = (0, st.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Vn(E, i.mediaQueryKey)) return;
      c.forEach((l) => {
        let { config: h, actionTypeId: g } = l,
          v =
            h?.target?.useEventTarget === !0 && h?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : h,
          _ = Xn({ config: v, event: s, elementApi: Le }),
          T = Un(g);
        _.forEach((I) => {
          let x = T ? aa(g)(I, l) : null;
          sa({
            destination: oa({ element: I, actionItem: l, elementApi: Le }, x),
            immediate: !0,
            store: e,
            element: I,
            eventId: r,
            actionItem: l,
            actionListId: t,
            pluginInstance: x,
          });
        });
      });
    }
  }
  function yv({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, $t.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        ua(r, e), i && e.dispatch(Yt({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function Qt({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Tr(r, Gn) : null;
    (0, $t.default)(o, (u) => {
      let c = (0, st.default)(u, "actionItem.config.target.boundaryMode"),
        E = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && E) {
        if (s && c && !zo(s, u.element)) return;
        ua(u, e),
          u.verbose && e.dispatch(Yt({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Sr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: c } = e.getState(),
      { events: E } = u,
      l = E[t] || {},
      { mediaQueries: h = u.mediaQueryKeys } = l,
      g = (0, st.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: v, useFirstGroupAsInitialState: _ } = g;
    if (!v || !v.length) return !1;
    o >= v.length && (0, st.default)(l, "config.loop") && (o = 0),
      o === 0 && _ && o++;
    let I =
        (o === 0 || (o === 1 && _)) && na(l.action?.actionTypeId)
          ? l.config.delay
          : void 0,
      x = (0, st.default)(v, [o, "actionItems"], []);
    if (!x.length || !Vn(h, c.mediaQueryKey)) return !1;
    let A = c.hasBoundaryNodes && r ? Tr(r, Gn) : null,
      C = qM(x),
      M = !1;
    return (
      x.forEach((L, W) => {
        let { config: z, actionTypeId: K } = L,
          Q = Un(K),
          { target: V } = z;
        if (!V) return;
        let O = V.boundaryMode ? A : null;
        Xn({
          config: z,
          event: l,
          eventTarget: r,
          elementRoot: O,
          elementApi: Le,
        }).forEach((R, q) => {
          let G = Q ? aa(K)(R, L) : null,
            Z = Q ? jM(K)(R, L) : null;
          M = !0;
          let J = C === W && q === 0,
            ue = kM({ element: R, actionItem: L }),
            se = oa({ element: R, actionItem: L, elementApi: Le }, G);
          sa({
            store: e,
            element: R,
            actionItem: L,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: J,
            computedStyle: ue,
            destination: se,
            immediate: a,
            verbose: s,
            pluginInstance: G,
            pluginDuration: Z,
            instanceDelay: I,
          });
        });
      }),
      M
    );
  }
  function sa(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: c,
        eventId: E,
      } = n,
      l = !u,
      h = MM(),
      { ixElements: g, ixSession: v, ixData: _ } = t.getState(),
      T = DM(g, i),
      { refState: I } = g[T] || {},
      x = Ko(i),
      A = v.reducedMotion && _i[o.actionTypeId],
      C;
    if (A && u)
      switch (_.events[E]?.eventTypeId) {
        case ze.MOUSE_MOVE:
        case ze.MOUSE_MOVE_IN_VIEWPORT:
          C = c;
          break;
        default:
          C = 0.5;
          break;
      }
    let M = GM(i, I, r, o, Le, s);
    if (
      (t.dispatch(
        Go({
          instanceId: h,
          elementId: T,
          origin: M,
          refType: x,
          skipMotion: A,
          skipToValue: C,
          ...n,
        })
      ),
      _v(document.body, "ix2-animation-started", h),
      a)
    ) {
      mF(t, h);
      return;
    }
    Tt({ store: t, select: ({ ixInstances: L }) => L[h], onChange: Iv }),
      l && t.dispatch(On(h, v.tick));
  }
  function ua(e, t) {
    _v(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === gv && HM(o, n, Le), t.dispatch(Xo(e.id));
  }
  function _v(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function mF(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(On(t, 0)), e.dispatch(Sn(performance.now(), r));
    let { ixInstances: n } = e.getState();
    Iv(n[t], e);
  }
  function Iv(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: c,
        groupIndex: E,
        eventId: l,
        eventTarget: h,
        eventStateKey: g,
        actionListId: v,
        isCarrier: _,
        styleProp: T,
        verbose: I,
        pluginInstance: x,
      } = e,
      { ixData: A, ixSession: C } = t.getState(),
      { events: M } = A,
      L = M && M[l] ? M[l] : {},
      { mediaQueries: W = A.mediaQueryKeys } = L;
    if (Vn(W, C.mediaQueryKey) && (n || r || i)) {
      if (c || (u === NM && i)) {
        t.dispatch(Vo(o, s, c, a));
        let { ixElements: z } = t.getState(),
          { ref: K, refType: Q, refState: V } = z[o] || {},
          O = V && V[s];
        (Q === gv || Un(s)) && FM(K, V, O, l, a, T, Le, u, x);
      }
      if (i) {
        if (_) {
          let z = Sr({
            store: t,
            eventId: l,
            eventTarget: h,
            eventStateKey: g,
            actionListId: v,
            groupIndex: E + 1,
            verbose: I,
          });
          I && !z && t.dispatch(Yt({ actionListId: v, isPlaying: !1 }));
        }
        ua(e, t);
      }
    }
  }
  var uv,
    st,
    cv,
    lv,
    fv,
    dv,
    $t,
    pv,
    kn,
    PM,
    na,
    ia,
    Gn,
    gv,
    NM,
    av,
    Xn,
    DM,
    oa,
    Tt,
    MM,
    FM,
    hv,
    qM,
    kM,
    GM,
    XM,
    VM,
    UM,
    Vn,
    HM,
    BM,
    WM,
    zM,
    KM,
    Un,
    aa,
    jM,
    sv,
    YM,
    QM,
    lF,
    dF,
    pF,
    gF,
    ra = ve(() => {
      "use strict";
      (uv = fe(Yi())),
        (st = fe(sn())),
        (cv = fe(Mp())),
        (lv = fe(sg())),
        (fv = fe(cg())),
        (dv = fe(fg())),
        ($t = fe(mg())),
        (pv = fe(wg()));
      Me();
      kn = fe(bt());
      Rn();
      Cg();
      ov();
      (PM = Object.keys(kr)),
        (na = (e) => PM.includes(e)),
        ({
          COLON_DELIMITER: ia,
          BOUNDARY_SELECTOR: Gn,
          HTML_ELEMENT: gv,
          RENDER_GENERAL: NM,
          W_MOD_IX: av,
        } = Ae),
        ({
          getAffectedElements: Xn,
          getElementId: DM,
          getDestinationValues: oa,
          observeStore: Tt,
          getInstanceId: MM,
          renderHTMLElement: FM,
          clearAllStyles: hv,
          getMaxDurationItemIndex: qM,
          getComputedStyle: kM,
          getInstanceOrigin: GM,
          reduceListToGroup: XM,
          shouldNamespaceEventParameter: VM,
          getNamespacedParameterId: UM,
          shouldAllowMediaQuery: Vn,
          cleanupHTMLElement: HM,
          clearObjectCache: BM,
          stringifyTarget: WM,
          mediaQueriesEqual: zM,
          shallowEqual: KM,
        } = kn.IX2VanillaUtils),
        ({
          isPluginType: Un,
          createPluginInstance: aa,
          getPluginDuration: jM,
        } = kn.IX2VanillaPlugins),
        (sv = navigator.userAgent),
        (YM = sv.match(/iPad/i) || sv.match(/iPhone/)),
        (QM = 12);
      lF = ["resize", "orientationchange"];
      (dF = (e, t) => (0, lv.default)((0, dv.default)(e, t), fv.default)),
        (pF = (e, t) => {
          (0, $t.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + ia + o;
              t(i, n, a);
            });
          });
        }),
        (gF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Xn({ config: t, elementApi: Le });
        });
    });
  var Av = d((la) => {
    "use strict";
    Object.defineProperty(la, "__esModule", { value: !0 });
    function EF(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    EF(la, {
      actions: function () {
        return IF;
      },
      destroy: function () {
        return wv;
      },
      init: function () {
        return AF;
      },
      setEnv: function () {
        return wF;
      },
      store: function () {
        return Wn;
      },
    });
    var yF = mi(),
      _F = bF((vp(), Ye(hp))),
      ca = (ra(), Ye(bv)),
      IF = TF((Rn(), Ye(xg)));
    function bF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Tv(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Tv = function (n) {
        return n ? r : t;
      })(e);
    }
    function TF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = Tv(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var Wn = (0, yF.createStore)(_F.default);
    function wF(e) {
      e() && (0, ca.observeRequests)(Wn);
    }
    function AF(e) {
      wv(), (0, ca.startEngine)({ store: Wn, rawData: e, allowEvents: !0 });
    }
    function wv() {
      (0, ca.stopEngine)(Wn);
    }
  });
  var Rv = d((NG, Ov) => {
    "use strict";
    var xv = De(),
      Sv = Av();
    Sv.setEnv(xv.env);
    xv.define(
      "ix2",
      (Ov.exports = function () {
        return Sv;
      })
    );
  });
  var Lv = d((DG, Cv) => {
    "use strict";
    var Zt = De();
    Zt.define(
      "links",
      (Cv.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Zt.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          c = /index\.(html|php)$/,
          E = /\/$/,
          l,
          h;
        r.ready = r.design = r.preview = g;
        function g() {
          (i = o && Zt.env("design")),
            (h = Zt.env("slug") || a.pathname || ""),
            Zt.scroll.off(_),
            (l = []);
          for (var I = document.links, x = 0; x < I.length; ++x) v(I[x]);
          l.length && (Zt.scroll.on(_), _());
        }
        function v(I) {
          if (!I.getAttribute("hreflang")) {
            var x =
              (i && I.getAttribute("href-disabled")) || I.getAttribute("href");
            if (((s.href = x), !(x.indexOf(":") >= 0))) {
              var A = e(I);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var C = e(s.hash);
                C.length && l.push({ link: A, sec: C, active: !1 });
                return;
              }
              if (!(x === "#" || x === "")) {
                var M =
                  s.href === a.href || x === h || (c.test(x) && E.test(h));
                T(A, u, M);
              }
            }
          }
        }
        function _() {
          var I = n.scrollTop(),
            x = n.height();
          t.each(l, function (A) {
            if (!A.link.attr("hreflang")) {
              var C = A.link,
                M = A.sec,
                L = M.offset().top,
                W = M.outerHeight(),
                z = x * 0.5,
                K = M.is(":visible") && L + W - z >= I && L + z <= I + x;
              A.active !== K && ((A.active = K), T(C, u, K));
            }
          });
        }
        function T(I, x, A) {
          var C = I.hasClass(x);
          (A && C) || (!A && !C) || (A ? I.addClass(x) : I.removeClass(x));
        }
        return r;
      })
    );
  });
  var Nv = d((MG, Pv) => {
    "use strict";
    var zn = De();
    zn.define(
      "scroll",
      (Pv.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = v() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (O) {
              window.setTimeout(O, 15);
            },
          u = zn.env("editor") ? ".w-editor-body" : "body",
          c =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          E = 'a[href="#"]',
          l = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
          h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          g = document.createElement("style");
        g.appendChild(document.createTextNode(h));
        function v() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
        function T(O) {
          return _.test(O.hash) && O.host + O.pathname === r.host + r.pathname;
        }
        let I =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function x() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            I.matches
          );
        }
        function A(O, y) {
          var R;
          switch (y) {
            case "add":
              (R = O.attr("tabindex")),
                R
                  ? O.attr("data-wf-tabindex-swap", R)
                  : O.attr("tabindex", "-1");
              break;
            case "remove":
              (R = O.attr("data-wf-tabindex-swap")),
                R
                  ? (O.attr("tabindex", R),
                    O.removeAttr("data-wf-tabindex-swap"))
                  : O.removeAttr("tabindex");
              break;
          }
          O.toggleClass("wf-force-outline-none", y === "add");
        }
        function C(O) {
          var y = O.currentTarget;
          if (
            !(
              zn.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(y.className))
            )
          ) {
            var R = T(y) ? y.hash : "";
            if (R !== "") {
              var q = e(R);
              q.length &&
                (O && (O.preventDefault(), O.stopPropagation()),
                M(R, O),
                window.setTimeout(
                  function () {
                    L(q, function () {
                      A(q, "add"),
                        q.get(0).focus({ preventScroll: !0 }),
                        A(q, "remove");
                    });
                  },
                  O ? 0 : 300
                ));
            }
          }
        }
        function M(O) {
          if (
            r.hash !== O &&
            n &&
            n.pushState &&
            !(zn.env.chrome && r.protocol === "file:")
          ) {
            var y = n.state && n.state.hash;
            y !== O && n.pushState({ hash: O }, "", O);
          }
        }
        function L(O, y) {
          var R = i.scrollTop(),
            q = W(O);
          if (R !== q) {
            var G = z(O, R, q),
              Z = Date.now(),
              J = function () {
                var ue = Date.now() - Z;
                window.scroll(0, K(R, q, ue, G)),
                  ue <= G ? s(J) : typeof y == "function" && y();
              };
            s(J);
          }
        }
        function W(O) {
          var y = e(c),
            R = y.css("position") === "fixed" ? y.outerHeight() : 0,
            q = O.offset().top - R;
          if (O.data("scroll") === "mid") {
            var G = i.height() - R,
              Z = O.outerHeight();
            Z < G && (q -= Math.round((G - Z) / 2));
          }
          return q;
        }
        function z(O, y, R) {
          if (x()) return 0;
          var q = 1;
          return (
            a.add(O).each(function (G, Z) {
              var J = parseFloat(Z.getAttribute("data-scroll-time"));
              !isNaN(J) && J >= 0 && (q = J);
            }),
            (472.143 * Math.log(Math.abs(y - R) + 125) - 2e3) * q
          );
        }
        function K(O, y, R, q) {
          return R > q ? y : O + (y - O) * Q(R / q);
        }
        function Q(O) {
          return O < 0.5
            ? 4 * O * O * O
            : (O - 1) * (2 * O - 2) * (2 * O - 2) + 1;
        }
        function V() {
          var { WF_CLICK_EMPTY: O, WF_CLICK_SCROLL: y } = t;
          o.on(y, l, C),
            o.on(O, E, function (R) {
              R.preventDefault();
            }),
            document.head.insertBefore(g, document.head.firstChild);
        }
        return { ready: V };
      })
    );
  });
  var Mv = d((FG, Dv) => {
    "use strict";
    var xF = De();
    xF.define(
      "touch",
      (Dv.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            c,
            E;
          o.addEventListener("touchstart", l, !1),
            o.addEventListener("touchmove", h, !1),
            o.addEventListener("touchend", g, !1),
            o.addEventListener("touchcancel", v, !1),
            o.addEventListener("mousedown", l, !1),
            o.addEventListener("mousemove", h, !1),
            o.addEventListener("mouseup", g, !1),
            o.addEventListener("mouseout", v, !1);
          function l(T) {
            var I = T.touches;
            (I && I.length > 1) ||
              ((a = !0),
              I ? ((s = !0), (c = I[0].clientX)) : (c = T.clientX),
              (E = c));
          }
          function h(T) {
            if (a) {
              if (s && T.type === "mousemove") {
                T.preventDefault(), T.stopPropagation();
                return;
              }
              var I = T.touches,
                x = I ? I[0].clientX : T.clientX,
                A = x - E;
              (E = x),
                Math.abs(A) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", T, { direction: A > 0 ? "right" : "left" }), v());
            }
          }
          function g(T) {
            if (a && ((a = !1), s && T.type === "mouseup")) {
              T.preventDefault(), T.stopPropagation(), (s = !1);
              return;
            }
          }
          function v() {
            a = !1;
          }
          function _() {
            o.removeEventListener("touchstart", l, !1),
              o.removeEventListener("touchmove", h, !1),
              o.removeEventListener("touchend", g, !1),
              o.removeEventListener("touchcancel", v, !1),
              o.removeEventListener("mousedown", l, !1),
              o.removeEventListener("mousemove", h, !1),
              o.removeEventListener("mouseup", g, !1),
              o.removeEventListener("mouseout", v, !1),
              (o = null);
          }
          this.destroy = _;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Fv = d((fa) => {
    "use strict";
    Object.defineProperty(fa, "__esModule", { value: !0 });
    Object.defineProperty(fa, "default", {
      enumerable: !0,
      get: function () {
        return SF;
      },
    });
    function SF(e, t, r, n, i, o, a, s, u, c, E, l, h) {
      return function (g) {
        e(g);
        var v = g.form,
          _ = {
            name: v.attr("data-name") || v.attr("name") || "Untitled Form",
            pageId: v.attr("data-wf-page-id") || "",
            elementId: v.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              v.html()
            ),
            trackingCookies: n(),
          };
        let T = v.attr("data-wf-flow");
        T && (_.wfFlow = T), i(g);
        var I = o(v, _.fields);
        if (I) return a(I);
        if (((_.fileUploads = s(v)), u(g), !c)) {
          E(g);
          return;
        }
        l.ajax({
          url: h,
          type: "POST",
          data: _,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (x) {
            x && x.code === 200 && (g.success = !0), E(g);
          })
          .fail(function () {
            E(g);
          });
      };
    }
  });
  var kv = d((kG, qv) => {
    "use strict";
    var Kn = De(),
      OF = (e, t, r, n) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (o) {
              r(o);
            },
            "error-callback": function () {
              n();
            },
          });
      };
    Kn.define(
      "forms",
      (qv.exports = function (e, t) {
        let r = "TURNSTILE_LOADED";
        var n = {},
          i = e(document),
          o,
          a = window.location,
          s = window.XDomainRequest && !window.atob,
          u = ".w-form",
          c,
          E = /e(-)?mail/i,
          l = /^\S+@\S+$/,
          h = window.alert,
          g = Kn.env(),
          v,
          _,
          T;
        let I = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
          x;
        var A = /list-manage[1-9]?.com/i,
          C = t.debounce(function () {
            h(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        n.ready =
          n.design =
          n.preview =
            function () {
              L(), M(), !g && !v && z();
            };
        function M() {
          (c = e("html").attr("data-wf-site")),
            (_ = "https://webflow.com/api/v1/form/" + c),
            s &&
              _.indexOf("https://webflow.com") >= 0 &&
              (_ = _.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (T = `${_}/signFile`),
            (o = e(u + " form")),
            o.length && o.each(W);
        }
        function L() {
          I &&
            ((x = document.createElement("script")),
            (x.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
            document.head.appendChild(x),
            (x.onload = () => {
              i.trigger(r);
            }));
        }
        function W(m, P) {
          var H = e(P),
            X = e.data(P, u);
          X || (X = e.data(P, u, { form: H })), K(X);
          var ee = H.closest("div.w-form");
          (X.done = ee.find("> .w-form-done")),
            (X.fail = ee.find("> .w-form-fail")),
            (X.fileUploads = ee.find(".w-file-upload")),
            X.fileUploads.each(function (Y) {
              se(Y, X);
            }),
            I &&
              ((X.wait = !1),
              Q(X),
              i.on(typeof turnstile < "u" ? "ready" : r, function () {
                OF(
                  I,
                  P,
                  (Y) => {
                    (X.turnstileToken = Y), K(X);
                  },
                  () => {
                    Q(X);
                  }
                );
              }));
          var j =
            X.form.attr("aria-label") || X.form.attr("data-name") || "Form";
          X.done.attr("aria-label") || X.form.attr("aria-label", j),
            X.done.attr("tabindex", "-1"),
            X.done.attr("role", "region"),
            X.done.attr("aria-label") ||
              X.done.attr("aria-label", j + " success"),
            X.fail.attr("tabindex", "-1"),
            X.fail.attr("role", "region"),
            X.fail.attr("aria-label") ||
              X.fail.attr("aria-label", j + " failure");
          var oe = (X.action = H.attr("action"));
          if (
            ((X.handler = null),
            (X.redirect = H.attr("data-redirect")),
            A.test(oe))
          ) {
            X.handler = Z;
            return;
          }
          if (!oe) {
            if (c) {
              X.handler = (() => {
                let Y = Fv().default;
                return Y(K, a, Kn, R, ue, V, h, O, Q, c, J, e, _);
              })();
              return;
            }
            C();
          }
        }
        function z() {
          (v = !0),
            i.on("submit", u + " form", function (Y) {
              var p = e.data(this, u);
              p.handler && ((p.evt = Y), p.handler(p));
            });
          let m = ".w-checkbox-input",
            P = ".w-radio-input",
            H = "w--redirected-checked",
            X = "w--redirected-focus",
            ee = "w--redirected-focus-visible",
            j = ":focus-visible, [data-wf-focus-visible]",
            oe = [
              ["checkbox", m],
              ["radio", P],
            ];
          i.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + m + ")",
            (Y) => {
              e(Y.target).siblings(m).toggleClass(H);
            }
          ),
            i.on("change", u + ' form input[type="radio"]', (Y) => {
              e(`input[name="${Y.target.name}"]:not(${m})`).map((k, $) =>
                e($).siblings(P).removeClass(H)
              );
              let p = e(Y.target);
              p.hasClass("w-radio-input") || p.siblings(P).addClass(H);
            }),
            oe.forEach(([Y, p]) => {
              i.on(
                "focus",
                u + ` form input[type="${Y}"]:not(` + p + ")",
                (k) => {
                  e(k.target).siblings(p).addClass(X),
                    e(k.target).filter(j).siblings(p).addClass(ee);
                }
              ),
                i.on(
                  "blur",
                  u + ` form input[type="${Y}"]:not(` + p + ")",
                  (k) => {
                    e(k.target).siblings(p).removeClass(`${X} ${ee}`);
                  }
                );
            });
        }
        function K(m) {
          var P = (m.btn = m.form.find(':input[type="submit"]'));
          (m.wait = m.btn.attr("data-wait") || null),
            (m.success = !1),
            P.prop("disabled", !!(I && !m.turnstileToken)),
            m.label && P.val(m.label);
        }
        function Q(m) {
          var P = m.btn,
            H = m.wait;
          P.prop("disabled", !0), H && ((m.label = P.val()), P.val(H));
        }
        function V(m, P) {
          var H = null;
          return (
            (P = P || {}),
            m
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (X, ee) {
                var j = e(ee),
                  oe = j.attr("type"),
                  Y =
                    j.attr("data-name") || j.attr("name") || "Field " + (X + 1);
                Y = encodeURIComponent(Y);
                var p = j.val();
                if (oe === "checkbox") p = j.is(":checked");
                else if (oe === "radio") {
                  if (P[Y] === null || typeof P[Y] == "string") return;
                  p =
                    m
                      .find('input[name="' + j.attr("name") + '"]:checked')
                      .val() || null;
                }
                typeof p == "string" && (p = e.trim(p)),
                  (P[Y] = p),
                  (H = H || q(j, oe, Y, p));
              }),
            H
          );
        }
        function O(m) {
          var P = {};
          return (
            m.find(':input[type="file"]').each(function (H, X) {
              var ee = e(X),
                j =
                  ee.attr("data-name") || ee.attr("name") || "File " + (H + 1),
                oe = ee.attr("data-value");
              typeof oe == "string" && (oe = e.trim(oe)), (P[j] = oe);
            }),
            P
          );
        }
        let y = { _mkto_trk: "marketo" };
        function R() {
          return document.cookie.split("; ").reduce(function (P, H) {
            let X = H.split("="),
              ee = X[0];
            if (ee in y) {
              let j = y[ee],
                oe = X.slice(1).join("=");
              P[j] = oe;
            }
            return P;
          }, {});
        }
        function q(m, P, H, X) {
          var ee = null;
          return (
            P === "password"
              ? (ee = "Passwords cannot be submitted.")
              : m.attr("required")
              ? X
                ? E.test(m.attr("type")) &&
                  (l.test(X) ||
                    (ee = "Please enter a valid email address for: " + H))
                : (ee = "Please fill out the required field: " + H)
              : H === "g-recaptcha-response" &&
                !X &&
                (ee = "Please confirm you\u2019re not a robot."),
            ee
          );
        }
        function G(m) {
          ue(m), J(m);
        }
        function Z(m) {
          K(m);
          var P = m.form,
            H = {};
          if (/^https/.test(a.href) && !/^https/.test(m.action)) {
            P.attr("method", "post");
            return;
          }
          ue(m);
          var X = V(P, H);
          if (X) return h(X);
          Q(m);
          var ee;
          t.each(H, function (p, k) {
            E.test(k) && (H.EMAIL = p),
              /^((full[ _-]?)?name)$/i.test(k) && (ee = p),
              /^(first[ _-]?name)$/i.test(k) && (H.FNAME = p),
              /^(last[ _-]?name)$/i.test(k) && (H.LNAME = p);
          }),
            ee &&
              !H.FNAME &&
              ((ee = ee.split(" ")),
              (H.FNAME = ee[0]),
              (H.LNAME = H.LNAME || ee[1]));
          var j = m.action.replace("/post?", "/post-json?") + "&c=?",
            oe = j.indexOf("u=") + 2;
          oe = j.substring(oe, j.indexOf("&", oe));
          var Y = j.indexOf("id=") + 3;
          (Y = j.substring(Y, j.indexOf("&", Y))),
            (H["b_" + oe + "_" + Y] = ""),
            e
              .ajax({ url: j, data: H, dataType: "jsonp" })
              .done(function (p) {
                (m.success = p.result === "success" || /already/.test(p.msg)),
                  m.success || console.info("MailChimp error: " + p.msg),
                  J(m);
              })
              .fail(function () {
                J(m);
              });
        }
        function J(m) {
          var P = m.form,
            H = m.redirect,
            X = m.success;
          if (X && H) {
            Kn.location(H);
            return;
          }
          m.done.toggle(X),
            m.fail.toggle(!X),
            X ? m.done.focus() : m.fail.focus(),
            P.toggle(!X),
            K(m);
        }
        function ue(m) {
          m.evt && m.evt.preventDefault(), (m.evt = null);
        }
        function se(m, P) {
          if (!P.fileUploads || !P.fileUploads[m]) return;
          var H,
            X = e(P.fileUploads[m]),
            ee = X.find("> .w-file-upload-default"),
            j = X.find("> .w-file-upload-uploading"),
            oe = X.find("> .w-file-upload-success"),
            Y = X.find("> .w-file-upload-error"),
            p = ee.find(".w-file-upload-input"),
            k = ee.find(".w-file-upload-label"),
            $ = k.children(),
            B = Y.find(".w-file-upload-error-msg"),
            de = oe.find(".w-file-upload-file"),
            ke = oe.find(".w-file-remove-link"),
            xe = de.find(".w-file-upload-file-name"),
            f = B.attr("data-w-size-error"),
            b = B.attr("data-w-type-error"),
            w = B.attr("data-w-generic-error");
          if (
            (g ||
              k.on("click keydown", function (re) {
                (re.type === "keydown" && re.which !== 13 && re.which !== 32) ||
                  (re.preventDefault(), p.click());
              }),
            k.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            ke.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            p.on("click", function (re) {
              re.preventDefault();
            }),
              k.on("click", function (re) {
                re.preventDefault();
              }),
              $.on("click", function (re) {
                re.preventDefault();
              });
          else {
            ke.on("click keydown", function (re) {
              if (re.type === "keydown") {
                if (re.which !== 13 && re.which !== 32) return;
                re.preventDefault();
              }
              p.removeAttr("data-value"),
                p.val(""),
                xe.html(""),
                ee.toggle(!0),
                oe.toggle(!1),
                k.focus();
            }),
              p.on("change", function (re) {
                (H = re.target && re.target.files && re.target.files[0]),
                  H &&
                    (ee.toggle(!1),
                    Y.toggle(!1),
                    j.toggle(!0),
                    j.focus(),
                    xe.text(H.name),
                    ie() || Q(P),
                    (P.fileUploads[m].uploading = !0),
                    be(H, N));
              });
            var S = k.outerHeight();
            p.height(S), p.width(1);
          }
          function F(re) {
            var U = re.responseJSON && re.responseJSON.msg,
              ae = w;
            typeof U == "string" && U.indexOf("InvalidFileTypeError") === 0
              ? (ae = b)
              : typeof U == "string" &&
                U.indexOf("MaxFileSizeError") === 0 &&
                (ae = f),
              B.text(ae),
              p.removeAttr("data-value"),
              p.val(""),
              j.toggle(!1),
              ee.toggle(!0),
              Y.toggle(!0),
              Y.focus(),
              (P.fileUploads[m].uploading = !1),
              ie() || K(P);
          }
          function N(re, U) {
            if (re) return F(re);
            var ae = U.fileName,
              ce = U.postData,
              ye = U.fileId,
              Ge = U.s3Url;
            p.attr("data-value", ye), D(Ge, ce, H, ae, te);
          }
          function te(re) {
            if (re) return F(re);
            j.toggle(!1),
              oe.css("display", "inline-block"),
              oe.focus(),
              (P.fileUploads[m].uploading = !1),
              ie() || K(P);
          }
          function ie() {
            var re = (P.fileUploads && P.fileUploads.toArray()) || [];
            return re.some(function (U) {
              return U.uploading;
            });
          }
        }
        function be(m, P) {
          var H = new URLSearchParams({ name: m.name, size: m.size });
          e.ajax({ type: "GET", url: `${T}?${H}`, crossDomain: !0 })
            .done(function (X) {
              P(null, X);
            })
            .fail(function (X) {
              P(X);
            });
        }
        function D(m, P, H, X, ee) {
          var j = new FormData();
          for (var oe in P) j.append(oe, P[oe]);
          j.append("file", H, X),
            e
              .ajax({
                type: "POST",
                url: m,
                data: j,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                ee(null);
              })
              .fail(function (Y) {
                ee(Y);
              });
        }
        return n;
      })
    );
  });
  var Vv = d((GG, Xv) => {
    "use strict";
    var da = De(),
      Gv = "w-condition-invisible",
      RF = "." + Gv;
    function CF(e) {
      return e.filter(function (t) {
        return !Rr(t);
      });
    }
    function Rr(e) {
      return !!(e.$el && e.$el.closest(RF).length);
    }
    function pa(e, t) {
      for (var r = e; r >= 0; r--) if (!Rr(t[r])) return r;
      return -1;
    }
    function ga(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!Rr(t[r])) return r;
      return -1;
    }
    function LF(e, t) {
      return pa(e - 1, t) === -1;
    }
    function PF(e, t) {
      return ga(e + 1, t) === -1;
    }
    function Or(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function NF(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        u = /(^|\s+)/g,
        c = [],
        E,
        l,
        h,
        g = [];
      function v(D, m) {
        return (
          (c = o(D) ? D : [D]),
          l || v.build(),
          CF(c).length > 1 &&
            ((l.items = l.empty),
            c.forEach(function (P, H) {
              var X = se("thumbnail"),
                ee = se("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(X);
              Or(ee, `show item ${H + 1} of ${c.length}`),
                Rr(P) && ee.addClass(Gv),
                (l.items = l.items.add(ee)),
                Q(P.thumbnailUrl || P.url, function (j) {
                  j.prop("width") > j.prop("height")
                    ? G(j, "wide")
                    : G(j, "tall"),
                    X.append(G(j, "thumbnail-image"));
                });
            }),
            l.strip.empty().append(l.items),
            G(l.content, "group")),
          i(Z(l.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          G(l.html, "noscroll"),
          v.show(m || 0)
        );
      }
      (v.build = function () {
        return (
          v.destroy(),
          (l = { html: r(t.documentElement), empty: r() }),
          (l.arrowLeft = se("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (l.arrowRight = se("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (l.close = se("control close").attr("role", "button")),
          Or(l.arrowLeft, "previous image"),
          Or(l.arrowRight, "next image"),
          Or(l.close, "close lightbox"),
          (l.spinner = se("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (l.strip = se("strip").attr("role", "tablist")),
          (h = new y(l.spinner, R("hide"))),
          (l.content = se("content").append(
            l.spinner,
            l.arrowLeft,
            l.arrowRight,
            l.close
          )),
          (l.container = se("container").append(l.content, l.strip)),
          (l.lightbox = se("backdrop hide").append(l.container)),
          l.strip.on("click", q("item"), A),
          l.content
            .on("swipe", C)
            .on("click", q("left"), T)
            .on("click", q("right"), I)
            .on("click", q("close"), x)
            .on("click", q("image, caption"), I),
          l.container.on("click", q("view"), x).on("dragstart", q("img"), L),
          l.lightbox.on("keydown", W).on("focusin", M),
          r(n).append(l.lightbox),
          v
        );
      }),
        (v.destroy = function () {
          l && (Z(l.html, "noscroll"), l.lightbox.remove(), (l = void 0));
        }),
        (v.show = function (D) {
          if (D !== E) {
            var m = c[D];
            if (!m) return v.hide();
            if (Rr(m)) {
              if (D < E) {
                var P = pa(D - 1, c);
                D = P > -1 ? P : D;
              } else {
                var H = ga(D + 1, c);
                D = H > -1 ? H : D;
              }
              m = c[D];
            }
            var X = E;
            (E = D),
              l.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              h.show();
            var ee = (m.html && be(m.width, m.height)) || m.url;
            return (
              Q(ee, function (j) {
                if (D !== E) return;
                var oe = se("figure", "figure").append(G(j, "image")),
                  Y = se("frame").append(oe),
                  p = se("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(Y),
                  k,
                  $;
                m.html &&
                  ((k = r(m.html)),
                  ($ = k.is("iframe")),
                  $ && k.on("load", B),
                  oe.append(G(k, "embed"))),
                  m.caption &&
                    oe.append(se("caption", "figcaption").text(m.caption)),
                  l.spinner.before(p),
                  $ || B();
                function B() {
                  if (
                    (l.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    h.hide(),
                    D !== E)
                  ) {
                    p.remove();
                    return;
                  }
                  let de = LF(D, c);
                  J(l.arrowLeft, "inactive", de),
                    ue(l.arrowLeft, de),
                    de && l.arrowLeft.is(":focus") && l.arrowRight.focus();
                  let ke = PF(D, c);
                  if (
                    (J(l.arrowRight, "inactive", ke),
                    ue(l.arrowRight, ke),
                    ke && l.arrowRight.is(":focus") && l.arrowLeft.focus(),
                    l.view
                      ? (i(l.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(V(l.view)),
                        i(p)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: D > X ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : p.css("opacity", 1),
                    (l.view = p),
                    l.view.prop("tabIndex", 0),
                    l.items)
                  ) {
                    Z(l.items, "active"), l.items.removeAttr("aria-selected");
                    var xe = l.items.eq(D);
                    G(xe, "active"), xe.attr("aria-selected", !0), O(xe);
                  }
                }
              }),
              l.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              g.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (g.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                l.close.focus()),
              v
            );
          }
        }),
        (v.hide = function () {
          return (
            i(l.lightbox).add("opacity .3s").start({ opacity: 0 }).then(K), v
          );
        }),
        (v.prev = function () {
          var D = pa(E - 1, c);
          D > -1 && v.show(D);
        }),
        (v.next = function () {
          var D = ga(E + 1, c);
          D > -1 && v.show(D);
        });
      function _(D) {
        return function (m) {
          this === m.target && (m.stopPropagation(), m.preventDefault(), D());
        };
      }
      var T = _(v.prev),
        I = _(v.next),
        x = _(v.hide),
        A = function (D) {
          var m = r(this).index();
          D.preventDefault(), v.show(m);
        },
        C = function (D, m) {
          D.preventDefault(),
            m.direction === "left"
              ? v.next()
              : m.direction === "right" && v.prev();
        },
        M = function () {
          this.focus();
        };
      function L(D) {
        D.preventDefault();
      }
      function W(D) {
        var m = D.keyCode;
        m === 27 || z(m, "close")
          ? v.hide()
          : m === 37 || z(m, "left")
          ? v.prev()
          : m === 39 || z(m, "right")
          ? v.next()
          : z(m, "item") && r(":focus").click();
      }
      function z(D, m) {
        if (D !== 13 && D !== 32) return !1;
        var P = r(":focus").attr("class"),
          H = R(m).trim();
        return P.includes(H);
      }
      function K() {
        l &&
          (l.strip.scrollLeft(0).empty(),
          Z(l.html, "noscroll"),
          G(l.lightbox, "hide"),
          l.view && l.view.remove(),
          Z(l.content, "group"),
          G(l.arrowLeft, "inactive"),
          G(l.arrowRight, "inactive"),
          (E = l.view = void 0),
          g.forEach(function (D) {
            var m = D.node;
            m &&
              (D.hidden
                ? m.attr("aria-hidden", D.hidden)
                : m.removeAttr("aria-hidden"),
              D.tabIndex
                ? m.attr("tabIndex", D.tabIndex)
                : m.removeAttr("tabIndex"));
          }),
          (g = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function Q(D, m) {
        var P = se("img", "img");
        return (
          P.one("load", function () {
            m(P);
          }),
          P.attr("src", D),
          P
        );
      }
      function V(D) {
        return function () {
          D.remove();
        };
      }
      function O(D) {
        var m = D.get(0),
          P = l.strip.get(0),
          H = m.offsetLeft,
          X = m.clientWidth,
          ee = P.scrollLeft,
          j = P.clientWidth,
          oe = P.scrollWidth - j,
          Y;
        H < ee
          ? (Y = Math.max(0, H + X - j))
          : H + X > j + ee && (Y = Math.min(H, oe)),
          Y != null &&
            i(l.strip).add("scroll-left 500ms").start({ "scroll-left": Y });
      }
      function y(D, m, P) {
        (this.$element = D),
          (this.className = m),
          (this.delay = P || 200),
          this.hide();
      }
      (y.prototype.show = function () {
        var D = this;
        D.timeoutId ||
          (D.timeoutId = setTimeout(function () {
            D.$element.removeClass(D.className), delete D.timeoutId;
          }, D.delay));
      }),
        (y.prototype.hide = function () {
          var D = this;
          if (D.timeoutId) {
            clearTimeout(D.timeoutId), delete D.timeoutId;
            return;
          }
          D.$element.addClass(D.className);
        });
      function R(D, m) {
        return D.replace(u, (m ? " ." : " ") + s);
      }
      function q(D) {
        return R(D, !0);
      }
      function G(D, m) {
        return D.addClass(R(m));
      }
      function Z(D, m) {
        return D.removeClass(R(m));
      }
      function J(D, m, P) {
        return D.toggleClass(R(m), P);
      }
      function ue(D, m) {
        return D.attr("aria-hidden", m).attr("tabIndex", m ? -1 : 0);
      }
      function se(D, m) {
        return G(r(t.createElement(m || "div")), D);
      }
      function be(D, m) {
        var P =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          D +
          '" height="' +
          m +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(P);
      }
      return (
        (function () {
          var D = e.navigator.userAgent,
            m = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            P = D.match(m),
            H = D.indexOf("Android ") > -1 && D.indexOf("Chrome") === -1;
          if (!H && (!P || P[2] > 7)) return;
          var X = t.createElement("style");
          t.head.appendChild(X), e.addEventListener("resize", ee, !0);
          function ee() {
            var j = e.innerHeight,
              oe = e.innerWidth,
              Y =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                j +
                "px}.w-lightbox-view {width:" +
                oe +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * j +
                "px}.w-lightbox-image {max-width:" +
                oe +
                "px;max-height:" +
                j +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * j +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * j +
                "px}.w-lightbox-item {width:" +
                0.1 * j +
                "px;padding:" +
                0.02 * j +
                "px " +
                0.01 * j +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * j +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * j +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * j +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * j +
                "px}.w-lightbox-image {max-width:" +
                0.96 * oe +
                "px;max-height:" +
                0.96 * j +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * oe +
                "px;max-height:" +
                0.84 * j +
                "px}}";
            X.textContent = Y;
          }
          ee();
        })(),
        v
      );
    }
    da.define(
      "lightbox",
      (Xv.exports = function (e) {
        var t = {},
          r = da.env(),
          n = NF(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          s = ".w-lightbox",
          u;
        t.ready = t.design = t.preview = c;
        function c() {
          (a = r && da.env("design")),
            n.destroy(),
            (u = {}),
            (o = i.find(s)),
            o.webflowLightBox(),
            o.each(function () {
              Or(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var g = this;
            e.each(g, function (v, _) {
              var T = e.data(_, s);
              T ||
                (T = e.data(_, s, {
                  el: e(_),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                T.el.off(s),
                E(T),
                a
                  ? T.el.on("setting" + s, E.bind(null, T))
                  : T.el.on("click" + s, l(T)).on("click" + s, function (I) {
                      I.preventDefault();
                    });
            });
          },
        });
        function E(g) {
          var v = g.el.children(".w-json").html(),
            _,
            T;
          if (!v) {
            g.items = [];
            return;
          }
          try {
            v = JSON.parse(v);
          } catch (I) {
            console.error("Malformed lightbox JSON configuration.", I);
          }
          h(v),
            v.items.forEach(function (I) {
              I.$el = g.el;
            }),
            (_ = v.group),
            _
              ? ((T = u[_]),
                T || (T = u[_] = []),
                (g.items = T),
                v.items.length &&
                  ((g.index = T.length), T.push.apply(T, v.items)))
              : ((g.items = v.items), (g.index = 0));
        }
        function l(g) {
          return function () {
            g.items.length && n(g.items, g.index || 0);
          };
        }
        function h(g) {
          g.images &&
            (g.images.forEach(function (v) {
              v.type = "image";
            }),
            (g.items = g.images)),
            g.embed && ((g.embed.type = "video"), (g.items = [g.embed])),
            g.groupId && (g.group = g.groupId);
        }
        return t;
      })
    );
  });
  var Hv = d((XG, Uv) => {
    "use strict";
    var gt = De(),
      DF = qr(),
      we = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    gt.define(
      "navbar",
      (Uv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          c,
          E,
          l = gt.env(),
          h = '<div class="w-nav-overlay" data-wf-ignore />',
          g = ".w-nav",
          v = "w--open",
          _ = "w--nav-dropdown-open",
          T = "w--nav-dropdown-toggle-open",
          I = "w--nav-dropdown-list-open",
          x = "w--nav-link-open",
          A = DF.triggers,
          C = e();
        (r.ready = r.design = r.preview = M),
          (r.destroy = function () {
            (C = e()), L(), u && u.length && u.each(Q);
          });
        function M() {
          (c = l && gt.env("design")),
            (E = gt.env("editor")),
            (s = e(document.body)),
            (u = o.find(g)),
            u.length && (u.each(K), L(), W());
        }
        function L() {
          gt.resize.off(z);
        }
        function W() {
          gt.resize.on(z);
        }
        function z() {
          u.each(m);
        }
        function K(p, k) {
          var $ = e(k),
            B = e.data(k, g);
          B ||
            (B = e.data(k, g, {
              open: !1,
              el: $,
              config: {},
              selectedIdx: -1,
            })),
            (B.menu = $.find(".w-nav-menu")),
            (B.links = B.menu.find(".w-nav-link")),
            (B.dropdowns = B.menu.find(".w-dropdown")),
            (B.dropdownToggle = B.menu.find(".w-dropdown-toggle")),
            (B.dropdownList = B.menu.find(".w-dropdown-list")),
            (B.button = $.find(".w-nav-button")),
            (B.container = $.find(".w-container")),
            (B.overlayContainerId = "w-nav-overlay-" + p),
            (B.outside = be(B));
          var de = $.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            B.button.attr("style", "-webkit-user-select: text;"),
            B.button.attr("aria-label") == null &&
              B.button.attr("aria-label", "menu"),
            B.button.attr("role", "button"),
            B.button.attr("tabindex", "0"),
            B.button.attr("aria-controls", B.overlayContainerId),
            B.button.attr("aria-haspopup", "menu"),
            B.button.attr("aria-expanded", "false"),
            B.el.off(g),
            B.button.off(g),
            B.menu.off(g),
            y(B),
            c
              ? (V(B), B.el.on("setting" + g, R(B)))
              : (O(B),
                B.button.on("click" + g, ue(B)),
                B.menu.on("click" + g, "a", se(B)),
                B.button.on("keydown" + g, q(B)),
                B.el.on("keydown" + g, G(B))),
            m(p, k);
        }
        function Q(p, k) {
          var $ = e.data(k, g);
          $ && (V($), e.removeData(k, g));
        }
        function V(p) {
          p.overlay && (Y(p, !0), p.overlay.remove(), (p.overlay = null));
        }
        function O(p) {
          p.overlay ||
            ((p.overlay = e(h).appendTo(p.el)),
            p.overlay.attr("id", p.overlayContainerId),
            (p.parent = p.menu.parent()),
            Y(p, !0));
        }
        function y(p) {
          var k = {},
            $ = p.config || {},
            B = (k.animation = p.el.attr("data-animation") || "default");
          (k.animOver = /^over/.test(B)),
            (k.animDirect = /left$/.test(B) ? -1 : 1),
            $.animation !== B && p.open && t.defer(J, p),
            (k.easing = p.el.attr("data-easing") || "ease"),
            (k.easing2 = p.el.attr("data-easing2") || "ease");
          var de = p.el.attr("data-duration");
          (k.duration = de != null ? Number(de) : 400),
            (k.docHeight = p.el.attr("data-doc-height")),
            (p.config = k);
        }
        function R(p) {
          return function (k, $) {
            $ = $ || {};
            var B = i.width();
            y(p),
              $.open === !0 && j(p, !0),
              $.open === !1 && Y(p, !0),
              p.open &&
                t.defer(function () {
                  B !== i.width() && J(p);
                });
          };
        }
        function q(p) {
          return function (k) {
            switch (k.keyCode) {
              case we.SPACE:
              case we.ENTER:
                return ue(p)(), k.preventDefault(), k.stopPropagation();
              case we.ESCAPE:
                return Y(p), k.preventDefault(), k.stopPropagation();
              case we.ARROW_RIGHT:
              case we.ARROW_DOWN:
              case we.HOME:
              case we.END:
                return p.open
                  ? (k.keyCode === we.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    Z(p),
                    k.preventDefault(),
                    k.stopPropagation())
                  : (k.preventDefault(), k.stopPropagation());
            }
          };
        }
        function G(p) {
          return function (k) {
            if (p.open)
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                k.keyCode)
              ) {
                case we.HOME:
                case we.END:
                  return (
                    k.keyCode === we.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    Z(p),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
                case we.ESCAPE:
                  return (
                    Y(p),
                    p.button.focus(),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
                case we.ARROW_LEFT:
                case we.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    Z(p),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
                case we.ARROW_RIGHT:
                case we.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    Z(p),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
              }
          };
        }
        function Z(p) {
          if (p.links[p.selectedIdx]) {
            var k = p.links[p.selectedIdx];
            k.focus(), se(k);
          }
        }
        function J(p) {
          p.open && (Y(p, !0), j(p, !0));
        }
        function ue(p) {
          return a(function () {
            p.open ? Y(p) : j(p);
          });
        }
        function se(p) {
          return function (k) {
            var $ = e(this),
              B = $.attr("href");
            if (!gt.validClick(k.currentTarget)) {
              k.preventDefault();
              return;
            }
            B && B.indexOf("#") === 0 && p.open && Y(p);
          };
        }
        function be(p) {
          return (
            p.outside && o.off("click" + g, p.outside),
            function (k) {
              var $ = e(k.target);
              (E && $.closest(".w-editor-bem-EditorOverlay").length) || D(p, $);
            }
          );
        }
        var D = a(function (p, k) {
          if (p.open) {
            var $ = k.closest(".w-nav-menu");
            p.menu.is($) || Y(p);
          }
        });
        function m(p, k) {
          var $ = e.data(k, g),
            B = ($.collapsed = $.button.css("display") !== "none");
          if (($.open && !B && !c && Y($, !0), $.container.length)) {
            var de = H($);
            $.links.each(de), $.dropdowns.each(de);
          }
          $.open && oe($);
        }
        var P = "max-width";
        function H(p) {
          var k = p.container.css(P);
          return (
            k === "none" && (k = ""),
            function ($, B) {
              (B = e(B)), B.css(P, ""), B.css(P) === "none" && B.css(P, k);
            }
          );
        }
        function X(p, k) {
          k.setAttribute("data-nav-menu-open", "");
        }
        function ee(p, k) {
          k.removeAttribute("data-nav-menu-open");
        }
        function j(p, k) {
          if (p.open) return;
          (p.open = !0),
            p.menu.each(X),
            p.links.addClass(x),
            p.dropdowns.addClass(_),
            p.dropdownToggle.addClass(T),
            p.dropdownList.addClass(I),
            p.button.addClass(v);
          var $ = p.config,
            B = $.animation;
          (B === "none" || !n.support.transform || $.duration <= 0) && (k = !0);
          var de = oe(p),
            ke = p.menu.outerHeight(!0),
            xe = p.menu.outerWidth(!0),
            f = p.el.height(),
            b = p.el[0];
          if (
            (m(0, b),
            A.intro(0, b),
            gt.redraw.up(),
            c || o.on("click" + g, p.outside),
            k)
          ) {
            F();
            return;
          }
          var w = "transform " + $.duration + "ms " + $.easing;
          if (
            (p.overlay &&
              ((C = p.menu.prev()), p.overlay.show().append(p.menu)),
            $.animOver)
          ) {
            n(p.menu)
              .add(w)
              .set({ x: $.animDirect * xe, height: de })
              .start({ x: 0 })
              .then(F),
              p.overlay && p.overlay.width(xe);
            return;
          }
          var S = f + ke;
          n(p.menu).add(w).set({ y: -S }).start({ y: 0 }).then(F);
          function F() {
            p.button.attr("aria-expanded", "true");
          }
        }
        function oe(p) {
          var k = p.config,
            $ = k.docHeight ? o.height() : s.height();
          return (
            k.animOver
              ? p.menu.height($)
              : p.el.css("position") !== "fixed" && ($ -= p.el.outerHeight(!0)),
            p.overlay && p.overlay.height($),
            $
          );
        }
        function Y(p, k) {
          if (!p.open) return;
          (p.open = !1), p.button.removeClass(v);
          var $ = p.config;
          if (
            (($.animation === "none" ||
              !n.support.transform ||
              $.duration <= 0) &&
              (k = !0),
            A.outro(0, p.el[0]),
            o.off("click" + g, p.outside),
            k)
          ) {
            n(p.menu).stop(), b();
            return;
          }
          var B = "transform " + $.duration + "ms " + $.easing2,
            de = p.menu.outerHeight(!0),
            ke = p.menu.outerWidth(!0),
            xe = p.el.height();
          if ($.animOver) {
            n(p.menu)
              .add(B)
              .start({ x: ke * $.animDirect })
              .then(b);
            return;
          }
          var f = xe + de;
          n(p.menu).add(B).start({ y: -f }).then(b);
          function b() {
            p.menu.height(""),
              n(p.menu).set({ x: 0, y: 0 }),
              p.menu.each(ee),
              p.links.removeClass(x),
              p.dropdowns.removeClass(_),
              p.dropdownToggle.removeClass(T),
              p.dropdownList.removeClass(I),
              p.overlay &&
                p.overlay.children().length &&
                (C.length ? p.menu.insertAfter(C) : p.menu.prependTo(p.parent),
                p.overlay.attr("style", "").hide()),
              p.el.triggerHandler("w-close"),
              p.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Wv = d((VG, Bv) => {
    "use strict";
    var ht = De(),
      MF = qr();
    ht.define(
      "tabs",
      (Bv.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = ht.env,
          s = a.safari,
          u = a(),
          c = "data-w-tab",
          E = "data-w-pane",
          l = ".w-tabs",
          h = "w--current",
          g = "w--tab-active",
          v = MF.triggers,
          _ = !1;
        (t.ready = t.design = t.preview = T),
          (t.redraw = function () {
            (_ = !0), T(), (_ = !1);
          }),
          (t.destroy = function () {
            (i = n.find(l)), i.length && (i.each(A), I());
          });
        function T() {
          (o = u && ht.env("design")),
            (i = n.find(l)),
            i.length &&
              (i.each(C), ht.env("preview") && !_ && i.each(A), I(), x());
        }
        function I() {
          ht.redraw.off(t.redraw);
        }
        function x() {
          ht.redraw.on(t.redraw);
        }
        function A(V, O) {
          var y = e.data(O, l);
          y &&
            (y.links && y.links.each(v.reset),
            y.panes && y.panes.each(v.reset));
        }
        function C(V, O) {
          var y = l.substr(1) + "-" + V,
            R = e(O),
            q = e.data(O, l);
          if (
            (q || (q = e.data(O, l, { el: R, config: {} })),
            (q.current = null),
            (q.tabIdentifier = y + "-" + c),
            (q.paneIdentifier = y + "-" + E),
            (q.menu = R.children(".w-tab-menu")),
            (q.links = q.menu.children(".w-tab-link")),
            (q.content = R.children(".w-tab-content")),
            (q.panes = q.content.children(".w-tab-pane")),
            q.el.off(l),
            q.links.off(l),
            q.menu.attr("role", "tablist"),
            q.links.attr("tabindex", "-1"),
            M(q),
            !o)
          ) {
            q.links.on("click" + l, W(q)), q.links.on("keydown" + l, z(q));
            var G = q.links.filter("." + h),
              Z = G.attr(c);
            Z && K(q, { tab: Z, immediate: !0 });
          }
        }
        function M(V) {
          var O = {};
          O.easing = V.el.attr("data-easing") || "ease";
          var y = parseInt(V.el.attr("data-duration-in"), 10);
          y = O.intro = y === y ? y : 0;
          var R = parseInt(V.el.attr("data-duration-out"), 10);
          (R = O.outro = R === R ? R : 0),
            (O.immediate = !y && !R),
            (V.config = O);
        }
        function L(V) {
          var O = V.current;
          return Array.prototype.findIndex.call(
            V.links,
            (y) => y.getAttribute(c) === O,
            null
          );
        }
        function W(V) {
          return function (O) {
            O.preventDefault();
            var y = O.currentTarget.getAttribute(c);
            y && K(V, { tab: y });
          };
        }
        function z(V) {
          return function (O) {
            var y = L(V),
              R = O.key,
              q = {
                ArrowLeft: y - 1,
                ArrowUp: y - 1,
                ArrowRight: y + 1,
                ArrowDown: y + 1,
                End: V.links.length - 1,
                Home: 0,
              };
            if (R in q) {
              O.preventDefault();
              var G = q[R];
              G === -1 && (G = V.links.length - 1),
                G === V.links.length && (G = 0);
              var Z = V.links[G],
                J = Z.getAttribute(c);
              J && K(V, { tab: J });
            }
          };
        }
        function K(V, O) {
          O = O || {};
          var y = V.config,
            R = y.easing,
            q = O.tab;
          if (q !== V.current) {
            V.current = q;
            var G;
            V.links.each(function (m, P) {
              var H = e(P);
              if (O.immediate || y.immediate) {
                var X = V.panes[m];
                P.id || (P.id = V.tabIdentifier + "-" + m),
                  X.id || (X.id = V.paneIdentifier + "-" + m),
                  (P.href = "#" + X.id),
                  P.setAttribute("role", "tab"),
                  P.setAttribute("aria-controls", X.id),
                  P.setAttribute("aria-selected", "false"),
                  X.setAttribute("role", "tabpanel"),
                  X.setAttribute("aria-labelledby", P.id);
              }
              P.getAttribute(c) === q
                ? ((G = P),
                  H.addClass(h)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(v.intro))
                : H.hasClass(h) &&
                  H.removeClass(h)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(v.outro);
            });
            var Z = [],
              J = [];
            V.panes.each(function (m, P) {
              var H = e(P);
              P.getAttribute(c) === q ? Z.push(P) : H.hasClass(g) && J.push(P);
            });
            var ue = e(Z),
              se = e(J);
            if (O.immediate || y.immediate) {
              ue.addClass(g).each(v.intro),
                se.removeClass(g),
                _ || ht.redraw.up();
              return;
            } else {
              var be = window.scrollX,
                D = window.scrollY;
              G.focus(), window.scrollTo(be, D);
            }
            se.length && y.outro
              ? (se.each(v.outro),
                r(se)
                  .add("opacity " + y.outro + "ms " + R, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => Q(y, se, ue)))
              : Q(y, se, ue);
          }
        }
        function Q(V, O, y) {
          if (
            (O.removeClass(g).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            y.addClass(g).each(v.intro),
            ht.redraw.up(),
            !V.intro)
          )
            return r(y).set({ opacity: 1 });
          r(y)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + V.intro + "ms " + V.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Oa();
  Ca();
  Pa();
  Ma();
  qr();
  Rv();
  Lv();
  Nv();
  Mv();
  kv();
  Vv();
  Hv();
  Wv();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-108",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66dd11c818ffc46b3daef51b|a41f962e-0b96-56ad-ab87-213b026450aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66dd11c818ffc46b3daef51b|a41f962e-0b96-56ad-ab87-213b026450aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665866113479,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-109",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66dd11c818ffc46b3daef51b|a41f962e-0b96-56ad-ab87-213b026450aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66dd11c818ffc46b3daef51b|a41f962e-0b96-56ad-ab87-213b026450aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665866113479,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-10" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".spark-wrapped-card",
        originalId:
          "6347188dda3065f6e0f3f6b7|71a2a3a7-9c47-0f82-7d79-fafe6b7eb54f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".spark-wrapped-card",
          originalId:
            "6347188dda3065f6e0f3f6b7|71a2a3a7-9c47-0f82-7d79-fafe6b7eb54f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: null,
        effectIn: true,
      },
      createdOn: 1666148876926,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-108",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "671ce06626b8005010c9a114|a30ebe75-cd7f-a405-e00c-461ff93e82c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "671ce06626b8005010c9a114|a30ebe75-cd7f-a405-e00c-461ff93e82c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730182027505,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-109",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "671ce06626b8005010c9a114|a30ebe75-cd7f-a405-e00c-461ff93e82c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "671ce06626b8005010c9a114|a30ebe75-cd7f-a405-e00c-461ff93e82c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730182027505,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-127",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-344",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".udesly-overline-large",
        originalId: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".udesly-overline-large",
          originalId: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663925086207,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-128",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".udesly-paragraph-large",
        originalId:
          "632d9a646d06405e98849663|135a3157-c61d-fa45-c153-1a0a42270610",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".udesly-paragraph-large",
          originalId:
            "632d9a646d06405e98849663|135a3157-c61d-fa45-c153-1a0a42270610",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663927130447,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-129",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-348",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".udesly-paragraph-large",
        originalId:
          "632d9a646d06405e98849663|135a3157-c61d-fa45-c153-1a0a42270610",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".udesly-paragraph-large",
          originalId:
            "632d9a646d06405e98849663|135a3157-c61d-fa45-c153-1a0a42270610",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663927130447,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-130",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".udesly-title-wrapper-2",
        originalId: "7667b9d7-9cb0-4297-a7e1-b5a0eb532204",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".udesly-title-wrapper-2",
          originalId: "7667b9d7-9cb0-4297-a7e1-b5a0eb532204",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663926457812,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-129",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".udesly-information",
        originalId:
          "632d9a646d06403c46849669|82077960-8893-6899-75e8-86d58dcdc667",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".udesly-information",
          originalId:
            "632d9a646d06403c46849669|82077960-8893-6899-75e8-86d58dcdc667",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663927979840,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-131",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-395",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".udesly-title-wrapper-2",
        originalId:
          "632d9a646d0640815d849657|6e09f145-f70a-24db-2220-6a9b162c4dbf",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".udesly-title-wrapper-2",
          originalId:
            "632d9a646d0640815d849657|6e09f145-f70a-24db-2220-6a9b162c4dbf",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663926457812,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-132",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "671ce06626b8005010c9a114|5483485b-c8b4-b024-521f-d9f818913c1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "671ce06626b8005010c9a114|5483485b-c8b4-b024-521f-d9f818913c1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663928655287,
    },
  },
  actionLists: {
    "a-108": {
      id: "a-108",
      title: "Square Menu with Links Open 6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-108-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-14.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d80b",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d819",
                  ],
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-108-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-14.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d80b",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d819",
                  ],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-108-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-13.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d80a",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d818",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-108-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-12.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d809",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d817",
                  ],
                },
                yValue: -10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-108-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-12.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d809",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d817",
                  ],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-108-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-simple-menu-button-2",
                  selectorGuids: ["db2370e5-8b34-5d6f-b0e7-118faf43d80c"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-108-n-7",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-12.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d809",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d817",
                  ],
                },
                widthValue: 24,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1664852296627,
    },
    "a-109": {
      id: "a-109",
      title: "Square Menu with Links Close 6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-109-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-14.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d80b",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d819",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-109-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-14.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d80b",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d819",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-109-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-13.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d80a",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d818",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-109-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-12.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d809",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d817",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-109-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-12.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d809",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d817",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-109-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-simple-menu-button-2",
                  selectorGuids: ["db2370e5-8b34-5d6f-b0e7-118faf43d80c"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-109-n-7",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spark-line-12.spark-simple-line",
                  selectorGuids: [
                    "db2370e5-8b34-5d6f-b0e7-118faf43d809",
                    "db2370e5-8b34-5d6f-b0e7-118faf43d817",
                  ],
                },
                widthValue: 12.75,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1664852296627,
    },
    "a-127": {
      id: "a-127",
      title: "View Animation / 0.2s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-127-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                },
                yValue: 15,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-127-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-127-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-127-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1663925052941,
    },
    "a-128": {
      id: "a-128",
      title: "View Animation / 0.4s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-128-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                },
                yValue: 15,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-128-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-128-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-128-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1663925052941,
    },
    "a-129": {
      id: "a-129",
      title: "View Animation / 0.4s 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-129-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                yValue: 15,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-129-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-129-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-129-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1663925052941,
    },
    "a-130": {
      id: "a-130",
      title: "View Animation / 0.2s 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-130-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                yValue: 15,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-130-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-130-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-130-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1663925052941,
    },
    "a-131": {
      id: "a-131",
      title: "View Animation / 0.2s 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-131-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                yValue: 15,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-131-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-131-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-131-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1663925052941,
    },
    "a-132": {
      id: "a-132",
      title: "View Animation / 0.3s 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-132-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                yValue: 15,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-132-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-132-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-132-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1663925052941,
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
