var createPoly1305 = (function () {
  var _scriptDir =
    typeof document !== "undefined" && document.currentScript
      ? document.currentScript.src
      : undefined;
  if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
  return function (createPoly1305) {
    createPoly1305 = createPoly1305 || {};

    var b;
    b || (b = typeof createPoly1305 !== "undefined" ? createPoly1305 : {});
    var q, r;
    b.ready = new Promise(function (a, c) {
      q = a;
      r = c;
    });
    var u = {},
      w;
    for (w in b) b.hasOwnProperty(w) && (u[w] = b[w]);
    var x = "object" === typeof window,
      y = "function" === typeof importScripts,
      z =
        "object" === typeof process &&
        "object" === typeof process.versions &&
        "string" === typeof process.versions.node,
      B = "",
      C,
      D,
      E,
      F,
      G;
    if (z)
      (B = y ? require("path").dirname(B) + "/" : __dirname + "/"),
        (C = function (a, c) {
          var d = H(a);
          if (d) return c ? d : d.toString();
          F || (F = require("fs"));
          G || (G = require("path"));
          a = G.normalize(a);
          return F.readFileSync(a, c ? null : "utf8");
        }),
        (E = function (a) {
          a = C(a, !0);
          a.buffer || (a = new Uint8Array(a));
          assert(a.buffer);
          return a;
        }),
        (D = function (a, c, d) {
          var e = H(a);
          e && c(e);
          F || (F = require("fs"));
          G || (G = require("path"));
          a = G.normalize(a);
          F.readFile(a, function (f, l) {
            f ? d(f) : c(l.buffer);
          });
        }),
        1 < process.argv.length && process.argv[1].replace(/\\/g, "/"),
        process.argv.slice(2),
        (b.inspect = function () {
          return "[Emscripten Module object]";
        });
    else if (x || y)
      y
        ? (B = self.location.href)
        : "undefined" !== typeof document &&
          document.currentScript &&
          (B = document.currentScript.src),
        _scriptDir && (B = _scriptDir),
        0 !== B.indexOf("blob:")
          ? (B = B.substr(0, B.lastIndexOf("/") + 1))
          : (B = ""),
        (C = function (a) {
          try {
            var c = new XMLHttpRequest();
            c.open("GET", a, !1);
            c.send(null);
            return c.responseText;
          } catch (f) {
            if ((a = H(a))) {
              c = [];
              for (var d = 0; d < a.length; d++) {
                var e = a[d];
                255 < e &&
                  (ba &&
                    assert(
                      !1,
                      "Character code " +
                        e +
                        " (" +
                        String.fromCharCode(e) +
                        ")  at offset " +
                        d +
                        " not in 0x00-0xFF."
                    ),
                  (e &= 255));
                c.push(String.fromCharCode(e));
              }
              return c.join("");
            }
            throw f;
          }
        }),
        y &&
          (E = function (a) {
            try {
              var c = new XMLHttpRequest();
              c.open("GET", a, !1);
              c.responseType = "arraybuffer";
              c.send(null);
              return new Uint8Array(c.response);
            } catch (d) {
              if ((a = H(a))) return a;
              throw d;
            }
          }),
        (D = function (a, c, d) {
          var e = new XMLHttpRequest();
          e.open("GET", a, !0);
          e.responseType = "arraybuffer";
          e.onload = function () {
            if (200 == e.status || (0 == e.status && e.response)) c(e.response);
            else {
              var f = H(a);
              f ? c(f.buffer) : d();
            }
          };
          e.onerror = d;
          e.send(null);
        });
    b.print || console.log.bind(console);
    var I = b.printErr || console.warn.bind(console);
    for (w in u) u.hasOwnProperty(w) && (b[w] = u[w]);
    u = null;
    var J;
    b.wasmBinary && (J = b.wasmBinary);
    var noExitRuntime = b.noExitRuntime || !0;
    "object" !== typeof WebAssembly && K("no native wasm support detected");
    var L,
      M = !1;
    function assert(a, c) {
      a || K("Assertion failed: " + c);
    }
    function N(a) {
      var c = b["_" + a];
      assert(
        c,
        "Cannot call unknown function " + a + ", make sure it is exported"
      );
      return c;
    }
    function ca(a, c, d, e) {
      var f = {
          string: function (g) {
            var p = 0;
            if (null !== g && void 0 !== g && 0 !== g) {
              var n = (g.length << 2) + 1;
              p = O(n);
              var k = p,
                h = P;
              if (0 < n) {
                n = k + n - 1;
                for (var v = 0; v < g.length; ++v) {
                  var m = g.charCodeAt(v);
                  if (55296 <= m && 57343 >= m) {
                    var oa = g.charCodeAt(++v);
                    m = (65536 + ((m & 1023) << 10)) | (oa & 1023);
                  }
                  if (127 >= m) {
                    if (k >= n) break;
                    h[k++] = m;
                  } else {
                    if (2047 >= m) {
                      if (k + 1 >= n) break;
                      h[k++] = 192 | (m >> 6);
                    } else {
                      if (65535 >= m) {
                        if (k + 2 >= n) break;
                        h[k++] = 224 | (m >> 12);
                      } else {
                        if (k + 3 >= n) break;
                        h[k++] = 240 | (m >> 18);
                        h[k++] = 128 | ((m >> 12) & 63);
                      }
                      h[k++] = 128 | ((m >> 6) & 63);
                    }
                    h[k++] = 128 | (m & 63);
                  }
                }
                h[k] = 0;
              }
            }
            return p;
          },
          array: function (g) {
            var p = O(g.length);
            Q.set(g, p);
            return p;
          },
        },
        l = N(a),
        A = [];
      a = 0;
      if (e)
        for (var t = 0; t < e.length; t++) {
          var aa = f[d[t]];
          aa ? (0 === a && (a = da()), (A[t] = aa(e[t]))) : (A[t] = e[t]);
        }
      d = l.apply(null, A);
      d = (function (g) {
        if ("string" === c)
          if (g) {
            for (var p = P, n = g + NaN, k = g; p[k] && !(k >= n); ) ++k;
            if (16 < k - g && p.subarray && ea) g = ea.decode(p.subarray(g, k));
            else {
              for (n = ""; g < k; ) {
                var h = p[g++];
                if (h & 128) {
                  var v = p[g++] & 63;
                  if (192 == (h & 224))
                    n += String.fromCharCode(((h & 31) << 6) | v);
                  else {
                    var m = p[g++] & 63;
                    h =
                      224 == (h & 240)
                        ? ((h & 15) << 12) | (v << 6) | m
                        : ((h & 7) << 18) |
                          (v << 12) |
                          (m << 6) |
                          (p[g++] & 63);
                    65536 > h
                      ? (n += String.fromCharCode(h))
                      : ((h -= 65536),
                        (n += String.fromCharCode(
                          55296 | (h >> 10),
                          56320 | (h & 1023)
                        )));
                  }
                } else n += String.fromCharCode(h);
              }
              g = n;
            }
          } else g = "";
        else g = "boolean" === c ? !!g : g;
        return g;
      })(d);
      0 !== a && fa(a);
      return d;
    }
    var ea =
        "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0,
      ha,
      Q,
      P;
    function ia() {
      var a = L.buffer;
      ha = a;
      b.HEAP8 = Q = new Int8Array(a);
      b.HEAP16 = new Int16Array(a);
      b.HEAP32 = new Int32Array(a);
      b.HEAPU8 = P = new Uint8Array(a);
      b.HEAPU16 = new Uint16Array(a);
      b.HEAPU32 = new Uint32Array(a);
      b.HEAPF32 = new Float32Array(a);
      b.HEAPF64 = new Float64Array(a);
    }
    var R,
      ja = [],
      ka = [],
      la = [];
    function ma() {
      var a = b.preRun.shift();
      ja.unshift(a);
    }
    var S = 0,
      T = null,
      U = null;
    b.preloadedImages = {};
    b.preloadedAudios = {};
    function K(a) {
      if (b.onAbort) b.onAbort(a);
      I(a);
      M = !0;
      a = new WebAssembly.RuntimeError(
        "abort(" + a + "). Build with -s ASSERTIONS=1 for more info."
      );
      r(a);
      throw a;
    }
    var V = "data:application/octet-stream;base64,",
      W;
    W =
      "data:application/octet-stream;base64,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";
    if (!W.startsWith(V)) {
      var na = W;
      W = b.locateFile ? b.locateFile(na, B) : B + na;
    }
    function pa() {
      var a = W;
      try {
        if (a == W && J) return new Uint8Array(J);
        var c = H(a);
        if (c) return c;
        if (E) return E(a);
        throw "both async and sync fetching of the wasm failed";
      } catch (d) {
        K(d);
      }
    }
    function qa() {
      if (!J && (x || y)) {
        if ("function" === typeof fetch && !W.startsWith("file://"))
          return fetch(W, { credentials: "same-origin" })
            .then(function (a) {
              if (!a.ok) throw "failed to load wasm binary file at '" + W + "'";
              return a.arrayBuffer();
            })
            .catch(function () {
              return pa();
            });
        if (D)
          return new Promise(function (a, c) {
            D(
              W,
              function (d) {
                a(new Uint8Array(d));
              },
              c
            );
          });
      }
      return Promise.resolve().then(function () {
        return pa();
      });
    }
    function X(a) {
      for (; 0 < a.length; ) {
        var c = a.shift();
        if ("function" == typeof c) c(b);
        else {
          var d = c.m;
          "number" === typeof d
            ? void 0 === c.l
              ? R.get(d)()
              : R.get(d)(c.l)
            : d(void 0 === c.l ? null : c.l);
        }
      }
    }
    var ba = !1,
      ra =
        "function" === typeof atob
          ? atob
          : function (a) {
              var c = "",
                d = 0;
              a = a.replace(/[^A-Za-z0-9\+\/=]/g, "");
              do {
                var e =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                    a.charAt(d++)
                  );
                var f =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                    a.charAt(d++)
                  );
                var l =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                    a.charAt(d++)
                  );
                var A =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                    a.charAt(d++)
                  );
                e = (e << 2) | (f >> 4);
                f = ((f & 15) << 4) | (l >> 2);
                var t = ((l & 3) << 6) | A;
                c += String.fromCharCode(e);
                64 !== l && (c += String.fromCharCode(f));
                64 !== A && (c += String.fromCharCode(t));
              } while (d < a.length);
              return c;
            };
    function H(a) {
      if (a.startsWith(V)) {
        a = a.slice(V.length);
        if ("boolean" === typeof z && z) {
          var c = Buffer.from(a, "base64");
          c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength);
        } else
          try {
            var d = ra(a),
              e = new Uint8Array(d.length);
            for (a = 0; a < d.length; ++a) e[a] = d.charCodeAt(a);
            c = e;
          } catch (f) {
            throw Error("Converting base64 string to bytes failed.");
          }
        return c;
      }
    }
    var sa = {
      a: function (a) {
        var c = P.length;
        a >>>= 0;
        if (2147483648 < a) return !1;
        for (var d = 1; 4 >= d; d *= 2) {
          var e = c * (1 + 0.2 / d);
          e = Math.min(e, a + 100663296);
          e = Math.max(a, e);
          0 < e % 65536 && (e += 65536 - (e % 65536));
          a: {
            try {
              L.grow((Math.min(2147483648, e) - ha.byteLength + 65535) >>> 16);
              ia();
              var f = 1;
              break a;
            } catch (l) {}
            f = void 0;
          }
          if (f) return !0;
        }
        return !1;
      },
    };
    (function () {
      function a(f) {
        b.asm = f.exports;
        L = b.asm.b;
        ia();
        R = b.asm.j;
        ka.unshift(b.asm.c);
        S--;
        b.monitorRunDependencies && b.monitorRunDependencies(S);
        0 == S &&
          (null !== T && (clearInterval(T), (T = null)),
          U && ((f = U), (U = null), f()));
      }
      function c(f) {
        a(f.instance);
      }
      function d(f) {
        return qa()
          .then(function (l) {
            return WebAssembly.instantiate(l, e);
          })
          .then(f, function (l) {
            I("failed to asynchronously prepare wasm: " + l);
            K(l);
          });
      }
      var e = { a: sa };
      S++;
      b.monitorRunDependencies && b.monitorRunDependencies(S);
      if (b.instantiateWasm)
        try {
          return b.instantiateWasm(e, a);
        } catch (f) {
          return (
            I("Module.instantiateWasm callback failed with error: " + f), !1
          );
        }
      (function () {
        return J ||
          "function" !== typeof WebAssembly.instantiateStreaming ||
          W.startsWith(V) ||
          W.startsWith("file://") ||
          "function" !== typeof fetch
          ? d(c)
          : fetch(W, { credentials: "same-origin" }).then(function (f) {
              return WebAssembly.instantiateStreaming(f, e).then(
                c,
                function (l) {
                  I("wasm streaming compile failed: " + l);
                  I("falling back to ArrayBuffer instantiation");
                  return d(c);
                }
              );
            });
      })().catch(r);
      return {};
    })();
    b.___wasm_call_ctors = function () {
      return (b.___wasm_call_ctors = b.asm.c).apply(null, arguments);
    };
    b._poly1305_auth = function () {
      return (b._poly1305_auth = b.asm.d).apply(null, arguments);
    };
    var da = (b.stackSave = function () {
        return (da = b.stackSave = b.asm.e).apply(null, arguments);
      }),
      fa = (b.stackRestore = function () {
        return (fa = b.stackRestore = b.asm.f).apply(null, arguments);
      }),
      O = (b.stackAlloc = function () {
        return (O = b.stackAlloc = b.asm.g).apply(null, arguments);
      });
    b._malloc = function () {
      return (b._malloc = b.asm.h).apply(null, arguments);
    };
    b._free = function () {
      return (b._free = b.asm.i).apply(null, arguments);
    };
    b.cwrap = function (a, c, d, e) {
      d = d || [];
      var f = d.every(function (l) {
        return "number" === l;
      });
      return "string" !== c && f && !e
        ? N(a)
        : function () {
            return ca(a, c, d, arguments);
          };
    };
    var Y;
    U = function ta() {
      Y || Z();
      Y || (U = ta);
    };
    function Z() {
      function a() {
        if (!Y && ((Y = !0), (b.calledRun = !0), !M)) {
          X(ka);
          q(b);
          if (b.onRuntimeInitialized) b.onRuntimeInitialized();
          if (b.postRun)
            for (
              "function" == typeof b.postRun && (b.postRun = [b.postRun]);
              b.postRun.length;

            ) {
              var c = b.postRun.shift();
              la.unshift(c);
            }
          X(la);
        }
      }
      if (!(0 < S)) {
        if (b.preRun)
          for (
            "function" == typeof b.preRun && (b.preRun = [b.preRun]);
            b.preRun.length;

          )
            ma();
        X(ja);
        0 < S ||
          (b.setStatus
            ? (b.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  b.setStatus("");
                }, 1);
                a();
              }, 1))
            : a());
      }
    }
    b.run = Z;
    if (b.preInit)
      for (
        "function" == typeof b.preInit && (b.preInit = [b.preInit]);
        0 < b.preInit.length;

      )
        b.preInit.pop()();
    Z();

    return createPoly1305.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object")
  module.exports = createPoly1305;
else if (typeof define === "function" && define["amd"])
  define([], function () {
    return createPoly1305;
  });
else if (typeof exports === "object")
  exports["createPoly1305"] = createPoly1305;
