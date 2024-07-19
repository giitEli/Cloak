function fT(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a &&
            Object.defineProperty(
              e,
              i,
              a.get ? a : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
var ku =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Te(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Lx = { exports: {} },
  Gc = {},
  Bx = { exports: {} },
  de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var su = Symbol.for("react.element"),
  dT = Symbol.for("react.portal"),
  pT = Symbol.for("react.fragment"),
  hT = Symbol.for("react.strict_mode"),
  vT = Symbol.for("react.profiler"),
  yT = Symbol.for("react.provider"),
  mT = Symbol.for("react.context"),
  gT = Symbol.for("react.forward_ref"),
  bT = Symbol.for("react.suspense"),
  wT = Symbol.for("react.memo"),
  xT = Symbol.for("react.lazy"),
  og = Symbol.iterator;
function ST(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (og && e[og]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var zx = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fx = Object.assign,
  Ux = {};
function Ga(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ux),
    (this.updater = n || zx);
}
Ga.prototype.isReactComponent = {};
Ga.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ga.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wx() {}
Wx.prototype = Ga.prototype;
function Kv(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ux),
    (this.updater = n || zx);
}
var Vv = (Kv.prototype = new Wx());
Vv.constructor = Kv;
Fx(Vv, Ga.prototype);
Vv.isPureReactComponent = !0;
var lg = Array.isArray,
  Hx = Object.prototype.hasOwnProperty,
  qv = { current: null },
  Kx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vx(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Hx.call(t, r) && !Kx.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: su,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: qv.current,
  };
}
function _T(e, t) {
  return {
    $$typeof: su,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gv(e) {
  return typeof e == "object" && e !== null && e.$$typeof === su;
}
function OT(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ug = /\/+/g;
function md(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? OT("" + e.key)
    : t.toString(36);
}
function ds(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case su:
          case dT:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + md(o, 0) : r),
      lg(i)
        ? ((n = ""),
          e != null && (n = e.replace(ug, "$&/") + "/"),
          ds(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (Gv(i) &&
            (i = _T(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ug, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), lg(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var u = r + md(a, l);
      o += ds(a, t, n, u, i);
    }
  else if (((u = ST(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (u = r + md(a, l++)), (o += ds(a, t, n, u, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Mu(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ds(e, r, "", "", function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function PT(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Lt = { current: null },
  ps = { transition: null },
  ET = {
    ReactCurrentDispatcher: Lt,
    ReactCurrentBatchConfig: ps,
    ReactCurrentOwner: qv,
  };
de.Children = {
  map: Mu,
  forEach: function (e, t, n) {
    Mu(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Mu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gv(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
de.Component = Ga;
de.Fragment = pT;
de.Profiler = vT;
de.PureComponent = Kv;
de.StrictMode = hT;
de.Suspense = bT;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ET;
de.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Fx({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = qv.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Hx.call(t, u) &&
        !Kx.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: su, type: e.type, key: i, ref: a, props: r, _owner: o };
};
de.createContext = function (e) {
  return (
    (e = {
      $$typeof: mT,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yT, _context: e }),
    (e.Consumer = e)
  );
};
de.createElement = Vx;
de.createFactory = function (e) {
  var t = Vx.bind(null, e);
  return (t.type = e), t;
};
de.createRef = function () {
  return { current: null };
};
de.forwardRef = function (e) {
  return { $$typeof: gT, render: e };
};
de.isValidElement = Gv;
de.lazy = function (e) {
  return { $$typeof: xT, _payload: { _status: -1, _result: e }, _init: PT };
};
de.memo = function (e, t) {
  return { $$typeof: wT, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function (e) {
  var t = ps.transition;
  ps.transition = {};
  try {
    e();
  } finally {
    ps.transition = t;
  }
};
de.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
de.useCallback = function (e, t) {
  return Lt.current.useCallback(e, t);
};
de.useContext = function (e) {
  return Lt.current.useContext(e);
};
de.useDebugValue = function () {};
de.useDeferredValue = function (e) {
  return Lt.current.useDeferredValue(e);
};
de.useEffect = function (e, t) {
  return Lt.current.useEffect(e, t);
};
de.useId = function () {
  return Lt.current.useId();
};
de.useImperativeHandle = function (e, t, n) {
  return Lt.current.useImperativeHandle(e, t, n);
};
de.useInsertionEffect = function (e, t) {
  return Lt.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function (e, t) {
  return Lt.current.useLayoutEffect(e, t);
};
de.useMemo = function (e, t) {
  return Lt.current.useMemo(e, t);
};
de.useReducer = function (e, t, n) {
  return Lt.current.useReducer(e, t, n);
};
de.useRef = function (e) {
  return Lt.current.useRef(e);
};
de.useState = function (e) {
  return Lt.current.useState(e);
};
de.useSyncExternalStore = function (e, t, n) {
  return Lt.current.useSyncExternalStore(e, t, n);
};
de.useTransition = function () {
  return Lt.current.useTransition();
};
de.version = "18.2.0";
Bx.exports = de;
var E = Bx.exports;
const T = Te(E),
  AT = fT({ __proto__: null, default: T }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var TT = E,
  $T = Symbol.for("react.element"),
  CT = Symbol.for("react.fragment"),
  jT = Object.prototype.hasOwnProperty,
  kT = TT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  MT = { key: !0, ref: !0, __self: !0, __source: !0 };
function qx(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) jT.call(t, r) && !MT.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: $T,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: kT.current,
  };
}
Gc.Fragment = CT;
Gc.jsx = qx;
Gc.jsxs = qx;
Lx.exports = Gc;
var P = Lx.exports,
  Ap = {},
  Gx = { exports: {} },
  rn = {},
  Xx = { exports: {} },
  Yx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, B) {
    var K = j.length;
    j.push(B);
    e: for (; 0 < K; ) {
      var Z = (K - 1) >>> 1,
        V = j[Z];
      if (0 < i(V, B)) (j[Z] = B), (j[K] = V), (K = Z);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var B = j[0],
      K = j.pop();
    if (K !== B) {
      j[0] = K;
      e: for (var Z = 0, V = j.length, oe = V >>> 1; Z < oe; ) {
        var ie = 2 * (Z + 1) - 1,
          De = j[ie],
          ut = ie + 1,
          qe = j[ut];
        if (0 > i(De, K))
          ut < V && 0 > i(qe, De)
            ? ((j[Z] = qe), (j[ut] = K), (Z = ut))
            : ((j[Z] = De), (j[ie] = K), (Z = ie));
        else if (ut < V && 0 > i(qe, K)) (j[Z] = qe), (j[ut] = K), (Z = ut);
        else break e;
      }
    }
    return B;
  }
  function i(j, B) {
    var K = j.sortIndex - B.sortIndex;
    return K !== 0 ? K : j.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [],
    s = [],
    f = 1,
    c = null,
    d = 3,
    p = !1,
    m = !1,
    v = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(j) {
    for (var B = n(s); B !== null; ) {
      if (B.callback === null) r(s);
      else if (B.startTime <= j)
        r(s), (B.sortIndex = B.expirationTime), t(u, B);
      else break;
      B = n(s);
    }
  }
  function h(j) {
    if (((v = !1), w(j), !m))
      if (n(u) !== null) (m = !0), R(x);
      else {
        var B = n(s);
        B !== null && W(h, B.startTime - j);
      }
  }
  function x(j, B) {
    (m = !1), v && ((v = !1), g(O), (O = -1)), (p = !0);
    var K = d;
    try {
      for (
        w(B), c = n(u);
        c !== null && (!(c.expirationTime > B) || (j && !k()));

      ) {
        var Z = c.callback;
        if (typeof Z == "function") {
          (c.callback = null), (d = c.priorityLevel);
          var V = Z(c.expirationTime <= B);
          (B = e.unstable_now()),
            typeof V == "function" ? (c.callback = V) : c === n(u) && r(u),
            w(B);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var oe = !0;
      else {
        var ie = n(s);
        ie !== null && W(h, ie.startTime - B), (oe = !1);
      }
      return oe;
    } finally {
      (c = null), (d = K), (p = !1);
    }
  }
  var S = !1,
    _ = null,
    O = -1,
    C = 5,
    A = -1;
  function k() {
    return !(e.unstable_now() - A < C);
  }
  function $() {
    if (_ !== null) {
      var j = e.unstable_now();
      A = j;
      var B = !0;
      try {
        B = _(!0, j);
      } finally {
        B ? D() : ((S = !1), (_ = null));
      }
    } else S = !1;
  }
  var D;
  if (typeof y == "function")
    D = function () {
      y($);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      z = N.port2;
    (N.port1.onmessage = $),
      (D = function () {
        z.postMessage(null);
      });
  } else
    D = function () {
      b($, 0);
    };
  function R(j) {
    (_ = j), S || ((S = !0), D());
  }
  function W(j, B) {
    O = b(function () {
      j(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || p || ((m = !0), R(x));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (C = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (j) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = d;
      }
      var K = d;
      d = B;
      try {
        return j();
      } finally {
        d = K;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, B) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var K = d;
      d = j;
      try {
        return B();
      } finally {
        d = K;
      }
    }),
    (e.unstable_scheduleCallback = function (j, B, K) {
      var Z = e.unstable_now();
      switch (
        (typeof K == "object" && K !== null
          ? ((K = K.delay), (K = typeof K == "number" && 0 < K ? Z + K : Z))
          : (K = Z),
        j)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = K + V),
        (j = {
          id: f++,
          callback: B,
          priorityLevel: j,
          startTime: K,
          expirationTime: V,
          sortIndex: -1,
        }),
        K > Z
          ? ((j.sortIndex = K),
            t(s, j),
            n(u) === null &&
              j === n(s) &&
              (v ? (g(O), (O = -1)) : (v = !0), W(h, K - Z)))
          : ((j.sortIndex = V), t(u, j), m || p || ((m = !0), R(x))),
        j
      );
    }),
    (e.unstable_shouldYield = k),
    (e.unstable_wrapCallback = function (j) {
      var B = d;
      return function () {
        var K = d;
        d = B;
        try {
          return j.apply(this, arguments);
        } finally {
          d = K;
        }
      };
    });
})(Yx);
Xx.exports = Yx;
var NT = Xx.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qx = E,
  tn = NT;
function H(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zx = new Set(),
  al = {};
function Li(e, t) {
  _a(e, t), _a(e + "Capture", t);
}
function _a(e, t) {
  for (al[e] = t, e = 0; e < t.length; e++) Zx.add(t[e]);
}
var dr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Tp = Object.prototype.hasOwnProperty,
  IT =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  sg = {},
  cg = {};
function DT(e) {
  return Tp.call(cg, e)
    ? !0
    : Tp.call(sg, e)
    ? !1
    : IT.test(e)
    ? (cg[e] = !0)
    : ((sg[e] = !0), !1);
}
function RT(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function LT(e, t, n, r) {
  if (t === null || typeof t > "u" || RT(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Bt(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var St = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Bt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  St[t] = new Bt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  St[e] = new Bt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  St[e] = new Bt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Bt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  St[e] = new Bt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  St[e] = new Bt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  St[e] = new Bt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  St[e] = new Bt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xv = /[\-:]([a-z])/g;
function Yv(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xv, Yv);
    St[t] = new Bt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xv, Yv);
    St[t] = new Bt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xv, Yv);
  St[t] = new Bt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  St[e] = new Bt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
St.xlinkHref = new Bt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  St[e] = new Bt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qv(e, t, n, r) {
  var i = St.hasOwnProperty(t) ? St[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (LT(t, n, i, r) && (n = null),
    r || i === null
      ? DT(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xr = Qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Nu = Symbol.for("react.element"),
  Qi = Symbol.for("react.portal"),
  Zi = Symbol.for("react.fragment"),
  Zv = Symbol.for("react.strict_mode"),
  $p = Symbol.for("react.profiler"),
  Jx = Symbol.for("react.provider"),
  eS = Symbol.for("react.context"),
  Jv = Symbol.for("react.forward_ref"),
  Cp = Symbol.for("react.suspense"),
  jp = Symbol.for("react.suspense_list"),
  ey = Symbol.for("react.memo"),
  jr = Symbol.for("react.lazy"),
  tS = Symbol.for("react.offscreen"),
  fg = Symbol.iterator;
function vo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fg && e[fg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ke = Object.assign,
  gd;
function Ro(e) {
  if (gd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gd = (t && t[1]) || "";
    }
  return (
    `
` +
    gd +
    e
  );
}
var bd = !1;
function wd(e, t) {
  if (!e || bd) return "";
  bd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          l = a.length - 1;
        1 <= o && 0 <= l && i[o] !== a[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== a[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== a[l])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (bd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ro(e) : "";
}
function BT(e) {
  switch (e.tag) {
    case 5:
      return Ro(e.type);
    case 16:
      return Ro("Lazy");
    case 13:
      return Ro("Suspense");
    case 19:
      return Ro("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = wd(e.type, !1)), e;
    case 11:
      return (e = wd(e.type.render, !1)), e;
    case 1:
      return (e = wd(e.type, !0)), e;
    default:
      return "";
  }
}
function kp(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zi:
      return "Fragment";
    case Qi:
      return "Portal";
    case $p:
      return "Profiler";
    case Zv:
      return "StrictMode";
    case Cp:
      return "Suspense";
    case jp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case eS:
        return (e.displayName || "Context") + ".Consumer";
      case Jx:
        return (e._context.displayName || "Context") + ".Provider";
      case Jv:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ey:
        return (
          (t = e.displayName || null), t !== null ? t : kp(e.type) || "Memo"
        );
      case jr:
        (t = e._payload), (e = e._init);
        try {
          return kp(e(t));
        } catch {}
    }
  return null;
}
function zT(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return kp(t);
    case 8:
      return t === Zv ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Yr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function nS(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function FT(e) {
  var t = nS(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Iu(e) {
  e._valueTracker || (e._valueTracker = FT(e));
}
function rS(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = nS(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Os(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Mp(e, t) {
  var n = t.checked;
  return Ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function dg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Yr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function iS(e, t) {
  (t = t.checked), t != null && Qv(e, "checked", t, !1);
}
function Np(e, t) {
  iS(e, t);
  var n = Yr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ip(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ip(e, t.type, Yr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ip(e, t, n) {
  (t !== "number" || Os(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lo = Array.isArray;
function pa(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Dp(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return Ke({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hg(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92));
      if (Lo(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Yr(n) };
}
function aS(e, t) {
  var n = Yr(t.value),
    r = Yr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function oS(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Rp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? oS(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Du,
  lS = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Du = Du || document.createElement("div"),
          Du.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Du.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ol(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  UT = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wo).forEach(function (e) {
  UT.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wo[t] = Wo[e]);
  });
});
function uS(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wo.hasOwnProperty(e) && Wo[e])
    ? ("" + t).trim()
    : t + "px";
}
function sS(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = uS(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var WT = Ke(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Lp(e, t) {
  if (t) {
    if (WT[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function Bp(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zp = null;
function ty(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fp = null,
  ha = null,
  va = null;
function yg(e) {
  if ((e = du(e))) {
    if (typeof Fp != "function") throw Error(H(280));
    var t = e.stateNode;
    t && ((t = Jc(t)), Fp(e.stateNode, e.type, t));
  }
}
function cS(e) {
  ha ? (va ? va.push(e) : (va = [e])) : (ha = e);
}
function fS() {
  if (ha) {
    var e = ha,
      t = va;
    if (((va = ha = null), yg(e), t)) for (e = 0; e < t.length; e++) yg(t[e]);
  }
}
function dS(e, t) {
  return e(t);
}
function pS() {}
var xd = !1;
function hS(e, t, n) {
  if (xd) return e(t, n);
  xd = !0;
  try {
    return dS(e, t, n);
  } finally {
    (xd = !1), (ha !== null || va !== null) && (pS(), fS());
  }
}
function ll(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(H(231, t, typeof n));
  return n;
}
var Up = !1;
if (dr)
  try {
    var yo = {};
    Object.defineProperty(yo, "passive", {
      get: function () {
        Up = !0;
      },
    }),
      window.addEventListener("test", yo, yo),
      window.removeEventListener("test", yo, yo);
  } catch {
    Up = !1;
  }
function HT(e, t, n, r, i, a, o, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Ho = !1,
  Ps = null,
  Es = !1,
  Wp = null,
  KT = {
    onError: function (e) {
      (Ho = !0), (Ps = e);
    },
  };
function VT(e, t, n, r, i, a, o, l, u) {
  (Ho = !1), (Ps = null), HT.apply(KT, arguments);
}
function qT(e, t, n, r, i, a, o, l, u) {
  if ((VT.apply(this, arguments), Ho)) {
    if (Ho) {
      var s = Ps;
      (Ho = !1), (Ps = null);
    } else throw Error(H(198));
    Es || ((Es = !0), (Wp = s));
  }
}
function Bi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function vS(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mg(e) {
  if (Bi(e) !== e) throw Error(H(188));
}
function GT(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bi(e)), t === null)) throw Error(H(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return mg(i), e;
        if (a === r) return mg(i), t;
        a = a.sibling;
      }
      throw Error(H(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(H(189));
      }
    }
    if (n.alternate !== r) throw Error(H(190));
  }
  if (n.tag !== 3) throw Error(H(188));
  return n.stateNode.current === n ? e : t;
}
function yS(e) {
  return (e = GT(e)), e !== null ? mS(e) : null;
}
function mS(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mS(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gS = tn.unstable_scheduleCallback,
  gg = tn.unstable_cancelCallback,
  XT = tn.unstable_shouldYield,
  YT = tn.unstable_requestPaint,
  Ye = tn.unstable_now,
  QT = tn.unstable_getCurrentPriorityLevel,
  ny = tn.unstable_ImmediatePriority,
  bS = tn.unstable_UserBlockingPriority,
  As = tn.unstable_NormalPriority,
  ZT = tn.unstable_LowPriority,
  wS = tn.unstable_IdlePriority,
  Xc = null,
  Vn = null;
function JT(e) {
  if (Vn && typeof Vn.onCommitFiberRoot == "function")
    try {
      Vn.onCommitFiberRoot(Xc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dn = Math.clz32 ? Math.clz32 : n$,
  e$ = Math.log,
  t$ = Math.LN2;
function n$(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((e$(e) / t$) | 0)) | 0;
}
var Ru = 64,
  Lu = 4194304;
function Bo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ts(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Bo(l)) : ((a &= o), a !== 0 && (r = Bo(a)));
  } else (o = n & ~i), o !== 0 ? (r = Bo(o)) : a !== 0 && (r = Bo(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Dn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function r$(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function i$(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - Dn(a),
      l = 1 << o,
      u = i[o];
    u === -1
      ? (!(l & n) || l & r) && (i[o] = r$(l, t))
      : u <= t && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function Hp(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xS() {
  var e = Ru;
  return (Ru <<= 1), !(Ru & 4194240) && (Ru = 64), e;
}
function Sd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cu(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dn(t)),
    (e[t] = n);
}
function a$(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Dn(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function ry(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Dn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var xe = 0;
function SS(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _S,
  iy,
  OS,
  PS,
  ES,
  Kp = !1,
  Bu = [],
  Br = null,
  zr = null,
  Fr = null,
  ul = new Map(),
  sl = new Map(),
  Nr = [],
  o$ =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Br = null;
      break;
    case "dragenter":
    case "dragleave":
      zr = null;
      break;
    case "mouseover":
    case "mouseout":
      Fr = null;
      break;
    case "pointerover":
    case "pointerout":
      ul.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sl.delete(t.pointerId);
  }
}
function mo(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = du(t)), t !== null && iy(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function l$(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Br = mo(Br, e, t, n, r, i)), !0;
    case "dragenter":
      return (zr = mo(zr, e, t, n, r, i)), !0;
    case "mouseover":
      return (Fr = mo(Fr, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return ul.set(a, mo(ul.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), sl.set(a, mo(sl.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function AS(e) {
  var t = mi(e.target);
  if (t !== null) {
    var n = Bi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = vS(n)), t !== null)) {
          (e.blockedOn = t),
            ES(e.priority, function () {
              OS(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zp = r), n.target.dispatchEvent(r), (zp = null);
    } else return (t = du(n)), t !== null && iy(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function wg(e, t, n) {
  hs(e) && n.delete(t);
}
function u$() {
  (Kp = !1),
    Br !== null && hs(Br) && (Br = null),
    zr !== null && hs(zr) && (zr = null),
    Fr !== null && hs(Fr) && (Fr = null),
    ul.forEach(wg),
    sl.forEach(wg);
}
function go(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Kp ||
      ((Kp = !0),
      tn.unstable_scheduleCallback(tn.unstable_NormalPriority, u$)));
}
function cl(e) {
  function t(i) {
    return go(i, e);
  }
  if (0 < Bu.length) {
    go(Bu[0], e);
    for (var n = 1; n < Bu.length; n++) {
      var r = Bu[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Br !== null && go(Br, e),
      zr !== null && go(zr, e),
      Fr !== null && go(Fr, e),
      ul.forEach(t),
      sl.forEach(t),
      n = 0;
    n < Nr.length;
    n++
  )
    (r = Nr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nr.length && ((n = Nr[0]), n.blockedOn === null); )
    AS(n), n.blockedOn === null && Nr.shift();
}
var ya = xr.ReactCurrentBatchConfig,
  $s = !0;
function s$(e, t, n, r) {
  var i = xe,
    a = ya.transition;
  ya.transition = null;
  try {
    (xe = 1), ay(e, t, n, r);
  } finally {
    (xe = i), (ya.transition = a);
  }
}
function c$(e, t, n, r) {
  var i = xe,
    a = ya.transition;
  ya.transition = null;
  try {
    (xe = 4), ay(e, t, n, r);
  } finally {
    (xe = i), (ya.transition = a);
  }
}
function ay(e, t, n, r) {
  if ($s) {
    var i = Vp(e, t, n, r);
    if (i === null) kd(e, t, r, Cs, n), bg(e, r);
    else if (l$(i, e, t, n, r)) r.stopPropagation();
    else if ((bg(e, r), t & 4 && -1 < o$.indexOf(e))) {
      for (; i !== null; ) {
        var a = du(i);
        if (
          (a !== null && _S(a),
          (a = Vp(e, t, n, r)),
          a === null && kd(e, t, r, Cs, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else kd(e, t, r, null, n);
  }
}
var Cs = null;
function Vp(e, t, n, r) {
  if (((Cs = null), (e = ty(r)), (e = mi(e)), e !== null))
    if (((t = Bi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = vS(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Cs = e), null;
}
function TS(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (QT()) {
        case ny:
          return 1;
        case bS:
          return 4;
        case As:
        case ZT:
          return 16;
        case wS:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dr = null,
  oy = null,
  vs = null;
function $S() {
  if (vs) return vs;
  var e,
    t = oy,
    n = t.length,
    r,
    i = "value" in Dr ? Dr.value : Dr.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (vs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ys(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zu() {
  return !0;
}
function xg() {
  return !1;
}
function an(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? zu
        : xg),
      (this.isPropagationStopped = xg),
      this
    );
  }
  return (
    Ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zu));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zu));
      },
      persist: function () {},
      isPersistent: zu,
    }),
    t
  );
}
var Xa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ly = an(Xa),
  fu = Ke({}, Xa, { view: 0, detail: 0 }),
  f$ = an(fu),
  _d,
  Od,
  bo,
  Yc = Ke({}, fu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uy,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== bo &&
            (bo && e.type === "mousemove"
              ? ((_d = e.screenX - bo.screenX), (Od = e.screenY - bo.screenY))
              : (Od = _d = 0),
            (bo = e)),
          _d);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Od;
    },
  }),
  Sg = an(Yc),
  d$ = Ke({}, Yc, { dataTransfer: 0 }),
  p$ = an(d$),
  h$ = Ke({}, fu, { relatedTarget: 0 }),
  Pd = an(h$),
  v$ = Ke({}, Xa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  y$ = an(v$),
  m$ = Ke({}, Xa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  g$ = an(m$),
  b$ = Ke({}, Xa, { data: 0 }),
  _g = an(b$),
  w$ = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  x$ = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  S$ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _$(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = S$[e]) ? !!t[e] : !1;
}
function uy() {
  return _$;
}
var O$ = Ke({}, fu, {
    key: function (e) {
      if (e.key) {
        var t = w$[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? x$[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uy,
    charCode: function (e) {
      return e.type === "keypress" ? ys(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ys(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  P$ = an(O$),
  E$ = Ke({}, Yc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Og = an(E$),
  A$ = Ke({}, fu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uy,
  }),
  T$ = an(A$),
  $$ = Ke({}, Xa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  C$ = an($$),
  j$ = Ke({}, Yc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  k$ = an(j$),
  M$ = [9, 13, 27, 32],
  sy = dr && "CompositionEvent" in window,
  Ko = null;
dr && "documentMode" in document && (Ko = document.documentMode);
var N$ = dr && "TextEvent" in window && !Ko,
  CS = dr && (!sy || (Ko && 8 < Ko && 11 >= Ko)),
  Pg = String.fromCharCode(32),
  Eg = !1;
function jS(e, t) {
  switch (e) {
    case "keyup":
      return M$.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kS(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ji = !1;
function I$(e, t) {
  switch (e) {
    case "compositionend":
      return kS(t);
    case "keypress":
      return t.which !== 32 ? null : ((Eg = !0), Pg);
    case "textInput":
      return (e = t.data), e === Pg && Eg ? null : e;
    default:
      return null;
  }
}
function D$(e, t) {
  if (Ji)
    return e === "compositionend" || (!sy && jS(e, t))
      ? ((e = $S()), (vs = oy = Dr = null), (Ji = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return CS && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var R$ = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ag(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!R$[e.type] : t === "textarea";
}
function MS(e, t, n, r) {
  cS(r),
    (t = js(t, "onChange")),
    0 < t.length &&
      ((n = new ly("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vo = null,
  fl = null;
function L$(e) {
  HS(e, 0);
}
function Qc(e) {
  var t = na(e);
  if (rS(t)) return e;
}
function B$(e, t) {
  if (e === "change") return t;
}
var NS = !1;
if (dr) {
  var Ed;
  if (dr) {
    var Ad = "oninput" in document;
    if (!Ad) {
      var Tg = document.createElement("div");
      Tg.setAttribute("oninput", "return;"),
        (Ad = typeof Tg.oninput == "function");
    }
    Ed = Ad;
  } else Ed = !1;
  NS = Ed && (!document.documentMode || 9 < document.documentMode);
}
function $g() {
  Vo && (Vo.detachEvent("onpropertychange", IS), (fl = Vo = null));
}
function IS(e) {
  if (e.propertyName === "value" && Qc(fl)) {
    var t = [];
    MS(t, fl, e, ty(e)), hS(L$, t);
  }
}
function z$(e, t, n) {
  e === "focusin"
    ? ($g(), (Vo = t), (fl = n), Vo.attachEvent("onpropertychange", IS))
    : e === "focusout" && $g();
}
function F$(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qc(fl);
}
function U$(e, t) {
  if (e === "click") return Qc(t);
}
function W$(e, t) {
  if (e === "input" || e === "change") return Qc(t);
}
function H$(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ln = typeof Object.is == "function" ? Object.is : H$;
function dl(e, t) {
  if (Ln(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Tp.call(t, i) || !Ln(e[i], t[i])) return !1;
  }
  return !0;
}
function Cg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function jg(e, t) {
  var n = Cg(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cg(n);
  }
}
function DS(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? DS(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function RS() {
  for (var e = window, t = Os(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Os(e.document);
  }
  return t;
}
function cy(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function K$(e) {
  var t = RS(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    DS(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && cy(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = jg(n, a));
        var o = jg(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var V$ = dr && "documentMode" in document && 11 >= document.documentMode,
  ea = null,
  qp = null,
  qo = null,
  Gp = !1;
function kg(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gp ||
    ea == null ||
    ea !== Os(r) ||
    ((r = ea),
    "selectionStart" in r && cy(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (qo && dl(qo, r)) ||
      ((qo = r),
      (r = js(qp, "onSelect")),
      0 < r.length &&
        ((t = new ly("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ea))));
}
function Fu(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ta = {
    animationend: Fu("Animation", "AnimationEnd"),
    animationiteration: Fu("Animation", "AnimationIteration"),
    animationstart: Fu("Animation", "AnimationStart"),
    transitionend: Fu("Transition", "TransitionEnd"),
  },
  Td = {},
  LS = {};
dr &&
  ((LS = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ta.animationend.animation,
    delete ta.animationiteration.animation,
    delete ta.animationstart.animation),
  "TransitionEvent" in window || delete ta.transitionend.transition);
function Zc(e) {
  if (Td[e]) return Td[e];
  if (!ta[e]) return e;
  var t = ta[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in LS) return (Td[e] = t[n]);
  return e;
}
var BS = Zc("animationend"),
  zS = Zc("animationiteration"),
  FS = Zc("animationstart"),
  US = Zc("transitionend"),
  WS = new Map(),
  Mg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jr(e, t) {
  WS.set(e, t), Li(t, [e]);
}
for (var $d = 0; $d < Mg.length; $d++) {
  var Cd = Mg[$d],
    q$ = Cd.toLowerCase(),
    G$ = Cd[0].toUpperCase() + Cd.slice(1);
  Jr(q$, "on" + G$);
}
Jr(BS, "onAnimationEnd");
Jr(zS, "onAnimationIteration");
Jr(FS, "onAnimationStart");
Jr("dblclick", "onDoubleClick");
Jr("focusin", "onFocus");
Jr("focusout", "onBlur");
Jr(US, "onTransitionEnd");
_a("onMouseEnter", ["mouseout", "mouseover"]);
_a("onMouseLeave", ["mouseout", "mouseover"]);
_a("onPointerEnter", ["pointerout", "pointerover"]);
_a("onPointerLeave", ["pointerout", "pointerover"]);
Li(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Li(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Li("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Li(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Li(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Li(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  X$ = new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));
function Ng(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), qT(r, t, void 0, e), (e.currentTarget = null);
}
function HS(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== a && i.isPropagationStopped())) break e;
          Ng(i, l, s), (a = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== a && i.isPropagationStopped())
          )
            break e;
          Ng(i, l, s), (a = u);
        }
    }
  }
  if (Es) throw ((e = Wp), (Es = !1), (Wp = null), e);
}
function ke(e, t) {
  var n = t[Jp];
  n === void 0 && (n = t[Jp] = new Set());
  var r = e + "__bubble";
  n.has(r) || (KS(t, e, 2, !1), n.add(r));
}
function jd(e, t, n) {
  var r = 0;
  t && (r |= 4), KS(n, e, r, t);
}
var Uu = "_reactListening" + Math.random().toString(36).slice(2);
function pl(e) {
  if (!e[Uu]) {
    (e[Uu] = !0),
      Zx.forEach(function (n) {
        n !== "selectionchange" && (X$.has(n) || jd(n, !1, e), jd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Uu] || ((t[Uu] = !0), jd("selectionchange", !1, t));
  }
}
function KS(e, t, n, r) {
  switch (TS(t)) {
    case 1:
      var i = s$;
      break;
    case 4:
      i = c$;
      break;
    default:
      i = ay;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Up ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function kd(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = mi(l)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = a = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  hS(function () {
    var s = a,
      f = ty(n),
      c = [];
    e: {
      var d = WS.get(e);
      if (d !== void 0) {
        var p = ly,
          m = e;
        switch (e) {
          case "keypress":
            if (ys(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = P$;
            break;
          case "focusin":
            (m = "focus"), (p = Pd);
            break;
          case "focusout":
            (m = "blur"), (p = Pd);
            break;
          case "beforeblur":
          case "afterblur":
            p = Pd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Sg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = p$;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = T$;
            break;
          case BS:
          case zS:
          case FS:
            p = y$;
            break;
          case US:
            p = C$;
            break;
          case "scroll":
            p = f$;
            break;
          case "wheel":
            p = k$;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = g$;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Og;
        }
        var v = (t & 4) !== 0,
          b = !v && e === "scroll",
          g = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var y = s, w; y !== null; ) {
          w = y;
          var h = w.stateNode;
          if (
            (w.tag === 5 &&
              h !== null &&
              ((w = h),
              g !== null && ((h = ll(y, g)), h != null && v.push(hl(y, h, w)))),
            b)
          )
            break;
          y = y.return;
        }
        0 < v.length &&
          ((d = new p(d, m, null, n, f)), c.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            n !== zp &&
            (m = n.relatedTarget || n.fromElement) &&
            (mi(m) || m[pr]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          p
            ? ((m = n.relatedTarget || n.toElement),
              (p = s),
              (m = m ? mi(m) : null),
              m !== null &&
                ((b = Bi(m)), m !== b || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((p = null), (m = s)),
          p !== m)
        ) {
          if (
            ((v = Sg),
            (h = "onMouseLeave"),
            (g = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Og),
              (h = "onPointerLeave"),
              (g = "onPointerEnter"),
              (y = "pointer")),
            (b = p == null ? d : na(p)),
            (w = m == null ? d : na(m)),
            (d = new v(h, y + "leave", p, n, f)),
            (d.target = b),
            (d.relatedTarget = w),
            (h = null),
            mi(f) === s &&
              ((v = new v(g, y + "enter", m, n, f)),
              (v.target = w),
              (v.relatedTarget = b),
              (h = v)),
            (b = h),
            p && m)
          )
            t: {
              for (v = p, g = m, y = 0, w = v; w; w = Hi(w)) y++;
              for (w = 0, h = g; h; h = Hi(h)) w++;
              for (; 0 < y - w; ) (v = Hi(v)), y--;
              for (; 0 < w - y; ) (g = Hi(g)), w--;
              for (; y--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = Hi(v)), (g = Hi(g));
              }
              v = null;
            }
          else v = null;
          p !== null && Ig(c, d, p, v, !1),
            m !== null && b !== null && Ig(c, b, m, v, !0);
        }
      }
      e: {
        if (
          ((d = s ? na(s) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var x = B$;
        else if (Ag(d))
          if (NS) x = W$;
          else {
            x = F$;
            var S = z$;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = U$);
        if (x && (x = x(e, s))) {
          MS(c, x, n, f);
          break e;
        }
        S && S(e, d, s),
          e === "focusout" &&
            (S = d._wrapperState) &&
            S.controlled &&
            d.type === "number" &&
            Ip(d, "number", d.value);
      }
      switch (((S = s ? na(s) : window), e)) {
        case "focusin":
          (Ag(S) || S.contentEditable === "true") &&
            ((ea = S), (qp = s), (qo = null));
          break;
        case "focusout":
          qo = qp = ea = null;
          break;
        case "mousedown":
          Gp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gp = !1), kg(c, n, f);
          break;
        case "selectionchange":
          if (V$) break;
        case "keydown":
        case "keyup":
          kg(c, n, f);
      }
      var _;
      if (sy)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        Ji
          ? jS(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (CS &&
          n.locale !== "ko" &&
          (Ji || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Ji && (_ = $S())
            : ((Dr = f),
              (oy = "value" in Dr ? Dr.value : Dr.textContent),
              (Ji = !0))),
        (S = js(s, O)),
        0 < S.length &&
          ((O = new _g(O, e, null, n, f)),
          c.push({ event: O, listeners: S }),
          _ ? (O.data = _) : ((_ = kS(n)), _ !== null && (O.data = _)))),
        (_ = N$ ? I$(e, n) : D$(e, n)) &&
          ((s = js(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new _g("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: s }),
            (f.data = _)));
    }
    HS(c, t);
  });
}
function hl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function js(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = ll(e, n)),
      a != null && r.unshift(hl(e, a, i)),
      (a = ll(e, t)),
      a != null && r.push(hl(e, a, i))),
      (e = e.return);
  }
  return r;
}
function Hi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ig(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((u = ll(n, a)), u != null && o.unshift(hl(n, u, l)))
        : i || ((u = ll(n, a)), u != null && o.push(hl(n, u, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Y$ = /\r\n?/g,
  Q$ = /\u0000|\uFFFD/g;
function Dg(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Y$,
      `
`
    )
    .replace(Q$, "");
}
function Wu(e, t, n) {
  if (((t = Dg(t)), Dg(e) !== t && n)) throw Error(H(425));
}
function ks() {}
var Xp = null,
  Yp = null;
function Qp(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zp = typeof setTimeout == "function" ? setTimeout : void 0,
  Z$ = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Rg = typeof Promise == "function" ? Promise : void 0,
  J$ =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Rg < "u"
      ? function (e) {
          return Rg.resolve(null).then(e).catch(eC);
        }
      : Zp;
function eC(e) {
  setTimeout(function () {
    throw e;
  });
}
function Md(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), cl(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  cl(t);
}
function Ur(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Lg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ya = Math.random().toString(36).slice(2),
  Hn = "__reactFiber$" + Ya,
  vl = "__reactProps$" + Ya,
  pr = "__reactContainer$" + Ya,
  Jp = "__reactEvents$" + Ya,
  tC = "__reactListeners$" + Ya,
  nC = "__reactHandles$" + Ya;
function mi(e) {
  var t = e[Hn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pr] || n[Hn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Lg(e); e !== null; ) {
          if ((n = e[Hn])) return n;
          e = Lg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function du(e) {
  return (
    (e = e[Hn] || e[pr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function na(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function Jc(e) {
  return e[vl] || null;
}
var eh = [],
  ra = -1;
function ei(e) {
  return { current: e };
}
function Ie(e) {
  0 > ra || ((e.current = eh[ra]), (eh[ra] = null), ra--);
}
function Ce(e, t) {
  ra++, (eh[ra] = e.current), (e.current = t);
}
var Qr = {},
  jt = ei(Qr),
  Ht = ei(!1),
  Ci = Qr;
function Oa(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Kt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ms() {
  Ie(Ht), Ie(jt);
}
function Bg(e, t, n) {
  if (jt.current !== Qr) throw Error(H(168));
  Ce(jt, t), Ce(Ht, n);
}
function VS(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(H(108, zT(e) || "Unknown", i));
  return Ke({}, n, r);
}
function Ns(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qr),
    (Ci = jt.current),
    Ce(jt, e),
    Ce(Ht, Ht.current),
    !0
  );
}
function zg(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n
    ? ((e = VS(e, t, Ci)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ie(Ht),
      Ie(jt),
      Ce(jt, e))
    : Ie(Ht),
    Ce(Ht, n);
}
var rr = null,
  ef = !1,
  Nd = !1;
function qS(e) {
  rr === null ? (rr = [e]) : rr.push(e);
}
function rC(e) {
  (ef = !0), qS(e);
}
function ti() {
  if (!Nd && rr !== null) {
    Nd = !0;
    var e = 0,
      t = xe;
    try {
      var n = rr;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rr = null), (ef = !1);
    } catch (i) {
      throw (rr !== null && (rr = rr.slice(e + 1)), gS(ny, ti), i);
    } finally {
      (xe = t), (Nd = !1);
    }
  }
  return null;
}
var ia = [],
  aa = 0,
  Is = null,
  Ds = 0,
  fn = [],
  dn = 0,
  ji = null,
  ir = 1,
  ar = "";
function di(e, t) {
  (ia[aa++] = Ds), (ia[aa++] = Is), (Is = e), (Ds = t);
}
function GS(e, t, n) {
  (fn[dn++] = ir), (fn[dn++] = ar), (fn[dn++] = ji), (ji = e);
  var r = ir;
  e = ar;
  var i = 32 - Dn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Dn(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ir = (1 << (32 - Dn(t) + i)) | (n << i) | r),
      (ar = a + e);
  } else (ir = (1 << a) | (n << i) | r), (ar = e);
}
function fy(e) {
  e.return !== null && (di(e, 1), GS(e, 1, 0));
}
function dy(e) {
  for (; e === Is; )
    (Is = ia[--aa]), (ia[aa] = null), (Ds = ia[--aa]), (ia[aa] = null);
  for (; e === ji; )
    (ji = fn[--dn]),
      (fn[dn] = null),
      (ar = fn[--dn]),
      (fn[dn] = null),
      (ir = fn[--dn]),
      (fn[dn] = null);
}
var en = null,
  Jt = null,
  Re = !1,
  kn = null;
function XS(e, t) {
  var n = hn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (en = e), (Jt = Ur(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (en = e), (Jt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ji !== null ? { id: ir, overflow: ar } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = hn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (en = e),
            (Jt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function th(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function nh(e) {
  if (Re) {
    var t = Jt;
    if (t) {
      var n = t;
      if (!Fg(e, t)) {
        if (th(e)) throw Error(H(418));
        t = Ur(n.nextSibling);
        var r = en;
        t && Fg(e, t)
          ? XS(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (en = e));
      }
    } else {
      if (th(e)) throw Error(H(418));
      (e.flags = (e.flags & -4097) | 2), (Re = !1), (en = e);
    }
  }
}
function Ug(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  en = e;
}
function Hu(e) {
  if (e !== en) return !1;
  if (!Re) return Ug(e), (Re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qp(e.type, e.memoizedProps))),
    t && (t = Jt))
  ) {
    if (th(e)) throw (YS(), Error(H(418)));
    for (; t; ) XS(e, t), (t = Ur(t.nextSibling));
  }
  if ((Ug(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Jt = Ur(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Jt = null;
    }
  } else Jt = en ? Ur(e.stateNode.nextSibling) : null;
  return !0;
}
function YS() {
  for (var e = Jt; e; ) e = Ur(e.nextSibling);
}
function Pa() {
  (Jt = en = null), (Re = !1);
}
function py(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
var iC = xr.ReactCurrentBatchConfig;
function An(e, t) {
  if (e && e.defaultProps) {
    (t = Ke({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Rs = ei(null),
  Ls = null,
  oa = null,
  hy = null;
function vy() {
  hy = oa = Ls = null;
}
function yy(e) {
  var t = Rs.current;
  Ie(Rs), (e._currentValue = t);
}
function rh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ma(e, t) {
  (Ls = e),
    (hy = oa = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ut = !0), (e.firstContext = null));
}
function bn(e) {
  var t = e._currentValue;
  if (hy !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), oa === null)) {
      if (Ls === null) throw Error(H(308));
      (oa = e), (Ls.dependencies = { lanes: 0, firstContext: e });
    } else oa = oa.next = e;
  return t;
}
var gi = null;
function my(e) {
  gi === null ? (gi = [e]) : gi.push(e);
}
function QS(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), my(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    hr(e, r)
  );
}
function hr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kr = !1;
function gy(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ZS(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ur(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), me & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      hr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), my(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    hr(e, n)
  );
}
function ms(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ry(e, n);
  }
}
function Wg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Bs(e, t, n, r) {
  var i = e.updateQueue;
  kr = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), o === null ? (a = s) : (o.next = s), (o = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== o &&
        (l === null ? (f.firstBaseUpdate = s) : (l.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var c = i.baseState;
    (o = 0), (f = s = u = null), (l = a);
    do {
      var d = l.lane,
        p = l.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var m = e,
            v = l;
          switch (((d = t), (p = n), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                c = m.call(p, c, d);
                break e;
              }
              c = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = v.payload),
                (d = typeof m == "function" ? m.call(p, c, d) : m),
                d == null)
              )
                break e;
              c = Ke({}, c, d);
              break e;
            case 2:
              kr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((s = f = p), (u = c)) : (f = f.next = p),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (u = c),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Mi |= o), (e.lanes = o), (e.memoizedState = c);
  }
}
function Hg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(H(191, i));
        i.call(r);
      }
    }
}
var JS = new Qx.Component().refs;
function ih(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var tf = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rt(),
      i = Kr(e),
      a = ur(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Wr(e, a, i)),
      t !== null && (Rn(t, e, i, r), ms(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rt(),
      i = Kr(e),
      a = ur(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Wr(e, a, i)),
      t !== null && (Rn(t, e, i, r), ms(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Rt(),
      r = Kr(e),
      i = ur(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Wr(e, i, r)),
      t !== null && (Rn(t, e, r, n), ms(t, e, r));
  },
};
function Kg(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !dl(n, r) || !dl(i, a)
      : !0
  );
}
function e_(e, t, n) {
  var r = !1,
    i = Qr,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = bn(a))
      : ((i = Kt(t) ? Ci : jt.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? Oa(e, i) : Qr)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = tf),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Vg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && tf.enqueueReplaceState(t, t.state, null);
}
function ah(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = JS), gy(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = bn(a))
    : ((a = Kt(t) ? Ci : jt.current), (i.context = Oa(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (ih(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && tf.enqueueReplaceState(i, i.state, null),
      Bs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function wo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(H(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(H(147, e));
      var i = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === JS && (l = i.refs = {}),
              o === null ? delete l[a] : (l[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(H(284));
    if (!n._owner) throw Error(H(290, e));
  }
  return e;
}
function Ku(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      H(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qg(e) {
  var t = e._init;
  return t(e._payload);
}
function t_(e) {
  function t(g, y) {
    if (e) {
      var w = g.deletions;
      w === null ? ((g.deletions = [y]), (g.flags |= 16)) : w.push(y);
    }
  }
  function n(g, y) {
    if (!e) return null;
    for (; y !== null; ) t(g, y), (y = y.sibling);
    return null;
  }
  function r(g, y) {
    for (g = new Map(); y !== null; )
      y.key !== null ? g.set(y.key, y) : g.set(y.index, y), (y = y.sibling);
    return g;
  }
  function i(g, y) {
    return (g = Vr(g, y)), (g.index = 0), (g.sibling = null), g;
  }
  function a(g, y, w) {
    return (
      (g.index = w),
      e
        ? ((w = g.alternate),
          w !== null
            ? ((w = w.index), w < y ? ((g.flags |= 2), y) : w)
            : ((g.flags |= 2), y))
        : ((g.flags |= 1048576), y)
    );
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, y, w, h) {
    return y === null || y.tag !== 6
      ? ((y = Fd(w, g.mode, h)), (y.return = g), y)
      : ((y = i(y, w)), (y.return = g), y);
  }
  function u(g, y, w, h) {
    var x = w.type;
    return x === Zi
      ? f(g, y, w.props.children, h, w.key)
      : y !== null &&
        (y.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === jr &&
            qg(x) === y.type))
      ? ((h = i(y, w.props)), (h.ref = wo(g, y, w)), (h.return = g), h)
      : ((h = _s(w.type, w.key, w.props, null, g.mode, h)),
        (h.ref = wo(g, y, w)),
        (h.return = g),
        h);
  }
  function s(g, y, w, h) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== w.containerInfo ||
      y.stateNode.implementation !== w.implementation
      ? ((y = Ud(w, g.mode, h)), (y.return = g), y)
      : ((y = i(y, w.children || [])), (y.return = g), y);
  }
  function f(g, y, w, h, x) {
    return y === null || y.tag !== 7
      ? ((y = Ei(w, g.mode, h, x)), (y.return = g), y)
      : ((y = i(y, w)), (y.return = g), y);
  }
  function c(g, y, w) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = Fd("" + y, g.mode, w)), (y.return = g), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Nu:
          return (
            (w = _s(y.type, y.key, y.props, null, g.mode, w)),
            (w.ref = wo(g, null, y)),
            (w.return = g),
            w
          );
        case Qi:
          return (y = Ud(y, g.mode, w)), (y.return = g), y;
        case jr:
          var h = y._init;
          return c(g, h(y._payload), w);
      }
      if (Lo(y) || vo(y))
        return (y = Ei(y, g.mode, w, null)), (y.return = g), y;
      Ku(g, y);
    }
    return null;
  }
  function d(g, y, w, h) {
    var x = y !== null ? y.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return x !== null ? null : l(g, y, "" + w, h);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Nu:
          return w.key === x ? u(g, y, w, h) : null;
        case Qi:
          return w.key === x ? s(g, y, w, h) : null;
        case jr:
          return (x = w._init), d(g, y, x(w._payload), h);
      }
      if (Lo(w) || vo(w)) return x !== null ? null : f(g, y, w, h, null);
      Ku(g, w);
    }
    return null;
  }
  function p(g, y, w, h, x) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (g = g.get(w) || null), l(y, g, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Nu:
          return (g = g.get(h.key === null ? w : h.key) || null), u(y, g, h, x);
        case Qi:
          return (g = g.get(h.key === null ? w : h.key) || null), s(y, g, h, x);
        case jr:
          var S = h._init;
          return p(g, y, w, S(h._payload), x);
      }
      if (Lo(h) || vo(h)) return (g = g.get(w) || null), f(y, g, h, x, null);
      Ku(y, h);
    }
    return null;
  }
  function m(g, y, w, h) {
    for (
      var x = null, S = null, _ = y, O = (y = 0), C = null;
      _ !== null && O < w.length;
      O++
    ) {
      _.index > O ? ((C = _), (_ = null)) : (C = _.sibling);
      var A = d(g, _, w[O], h);
      if (A === null) {
        _ === null && (_ = C);
        break;
      }
      e && _ && A.alternate === null && t(g, _),
        (y = a(A, y, O)),
        S === null ? (x = A) : (S.sibling = A),
        (S = A),
        (_ = C);
    }
    if (O === w.length) return n(g, _), Re && di(g, O), x;
    if (_ === null) {
      for (; O < w.length; O++)
        (_ = c(g, w[O], h)),
          _ !== null &&
            ((y = a(_, y, O)), S === null ? (x = _) : (S.sibling = _), (S = _));
      return Re && di(g, O), x;
    }
    for (_ = r(g, _); O < w.length; O++)
      (C = p(_, g, O, w[O], h)),
        C !== null &&
          (e && C.alternate !== null && _.delete(C.key === null ? O : C.key),
          (y = a(C, y, O)),
          S === null ? (x = C) : (S.sibling = C),
          (S = C));
    return (
      e &&
        _.forEach(function (k) {
          return t(g, k);
        }),
      Re && di(g, O),
      x
    );
  }
  function v(g, y, w, h) {
    var x = vo(w);
    if (typeof x != "function") throw Error(H(150));
    if (((w = x.call(w)), w == null)) throw Error(H(151));
    for (
      var S = (x = null), _ = y, O = (y = 0), C = null, A = w.next();
      _ !== null && !A.done;
      O++, A = w.next()
    ) {
      _.index > O ? ((C = _), (_ = null)) : (C = _.sibling);
      var k = d(g, _, A.value, h);
      if (k === null) {
        _ === null && (_ = C);
        break;
      }
      e && _ && k.alternate === null && t(g, _),
        (y = a(k, y, O)),
        S === null ? (x = k) : (S.sibling = k),
        (S = k),
        (_ = C);
    }
    if (A.done) return n(g, _), Re && di(g, O), x;
    if (_ === null) {
      for (; !A.done; O++, A = w.next())
        (A = c(g, A.value, h)),
          A !== null &&
            ((y = a(A, y, O)), S === null ? (x = A) : (S.sibling = A), (S = A));
      return Re && di(g, O), x;
    }
    for (_ = r(g, _); !A.done; O++, A = w.next())
      (A = p(_, g, O, A.value, h)),
        A !== null &&
          (e && A.alternate !== null && _.delete(A.key === null ? O : A.key),
          (y = a(A, y, O)),
          S === null ? (x = A) : (S.sibling = A),
          (S = A));
    return (
      e &&
        _.forEach(function ($) {
          return t(g, $);
        }),
      Re && di(g, O),
      x
    );
  }
  function b(g, y, w, h) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === Zi &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Nu:
          e: {
            for (var x = w.key, S = y; S !== null; ) {
              if (S.key === x) {
                if (((x = w.type), x === Zi)) {
                  if (S.tag === 7) {
                    n(g, S.sibling),
                      (y = i(S, w.props.children)),
                      (y.return = g),
                      (g = y);
                    break e;
                  }
                } else if (
                  S.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === jr &&
                    qg(x) === S.type)
                ) {
                  n(g, S.sibling),
                    (y = i(S, w.props)),
                    (y.ref = wo(g, S, w)),
                    (y.return = g),
                    (g = y);
                  break e;
                }
                n(g, S);
                break;
              } else t(g, S);
              S = S.sibling;
            }
            w.type === Zi
              ? ((y = Ei(w.props.children, g.mode, h, w.key)),
                (y.return = g),
                (g = y))
              : ((h = _s(w.type, w.key, w.props, null, g.mode, h)),
                (h.ref = wo(g, y, w)),
                (h.return = g),
                (g = h));
          }
          return o(g);
        case Qi:
          e: {
            for (S = w.key; y !== null; ) {
              if (y.key === S)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === w.containerInfo &&
                  y.stateNode.implementation === w.implementation
                ) {
                  n(g, y.sibling),
                    (y = i(y, w.children || [])),
                    (y.return = g),
                    (g = y);
                  break e;
                } else {
                  n(g, y);
                  break;
                }
              else t(g, y);
              y = y.sibling;
            }
            (y = Ud(w, g.mode, h)), (y.return = g), (g = y);
          }
          return o(g);
        case jr:
          return (S = w._init), b(g, y, S(w._payload), h);
      }
      if (Lo(w)) return m(g, y, w, h);
      if (vo(w)) return v(g, y, w, h);
      Ku(g, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        y !== null && y.tag === 6
          ? (n(g, y.sibling), (y = i(y, w)), (y.return = g), (g = y))
          : (n(g, y), (y = Fd(w, g.mode, h)), (y.return = g), (g = y)),
        o(g))
      : n(g, y);
  }
  return b;
}
var Ea = t_(!0),
  n_ = t_(!1),
  pu = {},
  qn = ei(pu),
  yl = ei(pu),
  ml = ei(pu);
function bi(e) {
  if (e === pu) throw Error(H(174));
  return e;
}
function by(e, t) {
  switch ((Ce(ml, t), Ce(yl, e), Ce(qn, pu), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Rp(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Rp(t, e));
  }
  Ie(qn), Ce(qn, t);
}
function Aa() {
  Ie(qn), Ie(yl), Ie(ml);
}
function r_(e) {
  bi(ml.current);
  var t = bi(qn.current),
    n = Rp(t, e.type);
  t !== n && (Ce(yl, e), Ce(qn, n));
}
function wy(e) {
  yl.current === e && (Ie(qn), Ie(yl));
}
var We = ei(0);
function zs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Id = [];
function xy() {
  for (var e = 0; e < Id.length; e++)
    Id[e]._workInProgressVersionPrimary = null;
  Id.length = 0;
}
var gs = xr.ReactCurrentDispatcher,
  Dd = xr.ReactCurrentBatchConfig,
  ki = 0,
  He = null,
  it = null,
  ft = null,
  Fs = !1,
  Go = !1,
  gl = 0,
  aC = 0;
function Pt() {
  throw Error(H(321));
}
function Sy(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ln(e[n], t[n])) return !1;
  return !0;
}
function _y(e, t, n, r, i, a) {
  if (
    ((ki = a),
    (He = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (gs.current = e === null || e.memoizedState === null ? sC : cC),
    (e = n(r, i)),
    Go)
  ) {
    a = 0;
    do {
      if (((Go = !1), (gl = 0), 25 <= a)) throw Error(H(301));
      (a += 1),
        (ft = it = null),
        (t.updateQueue = null),
        (gs.current = fC),
        (e = n(r, i));
    } while (Go);
  }
  if (
    ((gs.current = Us),
    (t = it !== null && it.next !== null),
    (ki = 0),
    (ft = it = He = null),
    (Fs = !1),
    t)
  )
    throw Error(H(300));
  return e;
}
function Oy() {
  var e = gl !== 0;
  return (gl = 0), e;
}
function Wn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ft === null ? (He.memoizedState = ft = e) : (ft = ft.next = e), ft;
}
function wn() {
  if (it === null) {
    var e = He.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = it.next;
  var t = ft === null ? He.memoizedState : ft.next;
  if (t !== null) (ft = t), (it = e);
  else {
    if (e === null) throw Error(H(310));
    (it = e),
      (e = {
        memoizedState: it.memoizedState,
        baseState: it.baseState,
        baseQueue: it.baseQueue,
        queue: it.queue,
        next: null,
      }),
      ft === null ? (He.memoizedState = ft = e) : (ft = ft.next = e);
  }
  return ft;
}
function bl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rd(e) {
  var t = wn(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = it,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var l = (o = null),
      u = null,
      s = a;
    do {
      var f = s.lane;
      if ((ki & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var c = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = c), (o = r)) : (u = u.next = c),
          (He.lanes |= f),
          (Mi |= f);
      }
      s = s.next;
    } while (s !== null && s !== a);
    u === null ? (o = r) : (u.next = l),
      Ln(r, t.memoizedState) || (Ut = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (He.lanes |= a), (Mi |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ld(e) {
  var t = wn(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    Ln(a, t.memoizedState) || (Ut = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function i_() {}
function a_(e, t) {
  var n = He,
    r = wn(),
    i = t(),
    a = !Ln(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (Ut = !0)),
    (r = r.queue),
    Py(u_.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (ft !== null && ft.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wl(9, l_.bind(null, n, r, i, t), void 0, null),
      dt === null)
    )
      throw Error(H(349));
    ki & 30 || o_(n, t, i);
  }
  return i;
}
function o_(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function l_(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), s_(t) && c_(e);
}
function u_(e, t, n) {
  return n(function () {
    s_(t) && c_(e);
  });
}
function s_(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ln(e, n);
  } catch {
    return !0;
  }
}
function c_(e) {
  var t = hr(e, 1);
  t !== null && Rn(t, e, 1, -1);
}
function Gg(e) {
  var t = Wn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = uC.bind(null, He, e)),
    [t.memoizedState, e]
  );
}
function wl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function f_() {
  return wn().memoizedState;
}
function bs(e, t, n, r) {
  var i = Wn();
  (He.flags |= e),
    (i.memoizedState = wl(1 | t, n, void 0, r === void 0 ? null : r));
}
function nf(e, t, n, r) {
  var i = wn();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (it !== null) {
    var o = it.memoizedState;
    if (((a = o.destroy), r !== null && Sy(r, o.deps))) {
      i.memoizedState = wl(t, n, a, r);
      return;
    }
  }
  (He.flags |= e), (i.memoizedState = wl(1 | t, n, a, r));
}
function Xg(e, t) {
  return bs(8390656, 8, e, t);
}
function Py(e, t) {
  return nf(2048, 8, e, t);
}
function d_(e, t) {
  return nf(4, 2, e, t);
}
function p_(e, t) {
  return nf(4, 4, e, t);
}
function h_(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function v_(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), nf(4, 4, h_.bind(null, t, e), n)
  );
}
function Ey() {}
function y_(e, t) {
  var n = wn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sy(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function m_(e, t) {
  var n = wn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sy(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function g_(e, t, n) {
  return ki & 21
    ? (Ln(n, t) || ((n = xS()), (He.lanes |= n), (Mi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ut = !0)), (e.memoizedState = n));
}
function oC(e, t) {
  var n = xe;
  (xe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Dd.transition;
  Dd.transition = {};
  try {
    e(!1), t();
  } finally {
    (xe = n), (Dd.transition = r);
  }
}
function b_() {
  return wn().memoizedState;
}
function lC(e, t, n) {
  var r = Kr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    w_(e))
  )
    x_(t, n);
  else if (((n = QS(e, t, n, r)), n !== null)) {
    var i = Rt();
    Rn(n, e, r, i), S_(n, t, r);
  }
}
function uC(e, t, n) {
  var r = Kr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (w_(e)) x_(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ln(l, o))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), my(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = QS(e, t, i, r)),
      n !== null && ((i = Rt()), Rn(n, e, r, i), S_(n, t, r));
  }
}
function w_(e) {
  var t = e.alternate;
  return e === He || (t !== null && t === He);
}
function x_(e, t) {
  Go = Fs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function S_(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ry(e, n);
  }
}
var Us = {
    readContext: bn,
    useCallback: Pt,
    useContext: Pt,
    useEffect: Pt,
    useImperativeHandle: Pt,
    useInsertionEffect: Pt,
    useLayoutEffect: Pt,
    useMemo: Pt,
    useReducer: Pt,
    useRef: Pt,
    useState: Pt,
    useDebugValue: Pt,
    useDeferredValue: Pt,
    useTransition: Pt,
    useMutableSource: Pt,
    useSyncExternalStore: Pt,
    useId: Pt,
    unstable_isNewReconciler: !1,
  },
  sC = {
    readContext: bn,
    useCallback: function (e, t) {
      return (Wn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: bn,
    useEffect: Xg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        bs(4194308, 4, h_.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Wn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Wn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lC.bind(null, He, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Wn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Gg,
    useDebugValue: Ey,
    useDeferredValue: function (e) {
      return (Wn().memoizedState = e);
    },
    useTransition: function () {
      var e = Gg(!1),
        t = e[0];
      return (e = oC.bind(null, e[1])), (Wn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = He,
        i = Wn();
      if (Re) {
        if (n === void 0) throw Error(H(407));
        n = n();
      } else {
        if (((n = t()), dt === null)) throw Error(H(349));
        ki & 30 || o_(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        Xg(u_.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        wl(9, l_.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Wn(),
        t = dt.identifierPrefix;
      if (Re) {
        var n = ar,
          r = ir;
        (n = (r & ~(1 << (32 - Dn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = aC++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cC = {
    readContext: bn,
    useCallback: y_,
    useContext: bn,
    useEffect: Py,
    useImperativeHandle: v_,
    useInsertionEffect: d_,
    useLayoutEffect: p_,
    useMemo: m_,
    useReducer: Rd,
    useRef: f_,
    useState: function () {
      return Rd(bl);
    },
    useDebugValue: Ey,
    useDeferredValue: function (e) {
      var t = wn();
      return g_(t, it.memoizedState, e);
    },
    useTransition: function () {
      var e = Rd(bl)[0],
        t = wn().memoizedState;
      return [e, t];
    },
    useMutableSource: i_,
    useSyncExternalStore: a_,
    useId: b_,
    unstable_isNewReconciler: !1,
  },
  fC = {
    readContext: bn,
    useCallback: y_,
    useContext: bn,
    useEffect: Py,
    useImperativeHandle: v_,
    useInsertionEffect: d_,
    useLayoutEffect: p_,
    useMemo: m_,
    useReducer: Ld,
    useRef: f_,
    useState: function () {
      return Ld(bl);
    },
    useDebugValue: Ey,
    useDeferredValue: function (e) {
      var t = wn();
      return it === null ? (t.memoizedState = e) : g_(t, it.memoizedState, e);
    },
    useTransition: function () {
      var e = Ld(bl)[0],
        t = wn().memoizedState;
      return [e, t];
    },
    useMutableSource: i_,
    useSyncExternalStore: a_,
    useId: b_,
    unstable_isNewReconciler: !1,
  };
function Ta(e, t) {
  try {
    var n = "",
      r = t;
    do (n += BT(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Bd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var dC = typeof WeakMap == "function" ? WeakMap : Map;
function __(e, t, n) {
  (n = ur(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Hs || ((Hs = !0), (yh = r)), oh(e, t);
    }),
    n
  );
}
function O_(e, t, n) {
  (n = ur(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        oh(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        oh(e, t),
          typeof r != "function" &&
            (Hr === null ? (Hr = new Set([this])) : Hr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Yg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dC();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = EC.bind(null, e, t, n)), t.then(e, e));
}
function Qg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zg(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ur(-1, 1)), (t.tag = 2), Wr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pC = xr.ReactCurrentOwner,
  Ut = !1;
function Nt(e, t, n, r) {
  t.child = e === null ? n_(t, null, n, r) : Ea(t, e.child, n, r);
}
function Jg(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    ma(t, i),
    (r = _y(e, t, n, r, a, i)),
    (n = Oy()),
    e !== null && !Ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vr(e, t, i))
      : (Re && n && fy(t), (t.flags |= 1), Nt(e, t, r, i), t.child)
  );
}
function e0(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !Ny(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), P_(e, t, a, r, i))
      : ((e = _s(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : dl), n(o, r) && e.ref === t.ref)
    )
      return vr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Vr(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function P_(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (dl(a, r) && e.ref === t.ref)
      if (((Ut = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ut = !0);
      else return (t.lanes = e.lanes), vr(e, t, i);
  }
  return lh(e, t, n, r, i);
}
function E_(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ce(ua, Yt),
        (Yt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ce(ua, Yt),
          (Yt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        Ce(ua, Yt),
        (Yt |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ce(ua, Yt),
      (Yt |= r);
  return Nt(e, t, i, n), t.child;
}
function A_(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function lh(e, t, n, r, i) {
  var a = Kt(n) ? Ci : jt.current;
  return (
    (a = Oa(t, a)),
    ma(t, i),
    (n = _y(e, t, n, r, a, i)),
    (r = Oy()),
    e !== null && !Ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vr(e, t, i))
      : (Re && r && fy(t), (t.flags |= 1), Nt(e, t, n, i), t.child)
  );
}
function t0(e, t, n, r, i) {
  if (Kt(n)) {
    var a = !0;
    Ns(t);
  } else a = !1;
  if ((ma(t, i), t.stateNode === null))
    ws(e, t), e_(t, n, r), ah(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = bn(s))
      : ((s = Kt(n) ? Ci : jt.current), (s = Oa(t, s)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || u !== s) && Vg(t, o, r, s)),
      (kr = !1);
    var d = t.memoizedState;
    (o.state = d),
      Bs(t, r, o, i),
      (u = t.memoizedState),
      l !== r || d !== u || Ht.current || kr
        ? (typeof f == "function" && (ih(t, n, f, r), (u = t.memoizedState)),
          (l = kr || Kg(t, n, l, r, d, u, s))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ZS(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : An(t.type, l)),
      (o.props = s),
      (c = t.pendingProps),
      (d = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = bn(u))
        : ((u = Kt(n) ? Ci : jt.current), (u = Oa(t, u)));
    var p = n.getDerivedStateFromProps;
    (f =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== c || d !== u) && Vg(t, o, r, u)),
      (kr = !1),
      (d = t.memoizedState),
      (o.state = d),
      Bs(t, r, o, i);
    var m = t.memoizedState;
    l !== c || d !== m || Ht.current || kr
      ? (typeof p == "function" && (ih(t, n, p, r), (m = t.memoizedState)),
        (s = kr || Kg(t, n, s, r, d, m, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, m, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, m, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (o.props = r),
        (o.state = m),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return uh(e, t, n, r, a, i);
}
function uh(e, t, n, r, i, a) {
  A_(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && zg(t, n, !1), vr(e, t, a);
  (r = t.stateNode), (pC.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Ea(t, e.child, null, a)), (t.child = Ea(t, null, l, a)))
      : Nt(e, t, l, a),
    (t.memoizedState = r.state),
    i && zg(t, n, !0),
    t.child
  );
}
function T_(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bg(e, t.context, !1),
    by(e, t.containerInfo);
}
function n0(e, t, n, r, i) {
  return Pa(), py(i), (t.flags |= 256), Nt(e, t, n, r), t.child;
}
var sh = { dehydrated: null, treeContext: null, retryLane: 0 };
function ch(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $_(e, t, n) {
  var r = t.pendingProps,
    i = We.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Ce(We, i & 1),
    e === null)
  )
    return (
      nh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = of(o, r, 0, null)),
              (e = Ei(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = ch(n)),
              (t.memoizedState = sh),
              e)
            : Ay(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return hC(e, t, o, r, l, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Vr(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (a = Vr(l, a)) : ((a = Ei(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ch(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = sh),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Vr(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ay(e, t) {
  return (
    (t = of({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vu(e, t, n, r) {
  return (
    r !== null && py(r),
    Ea(t, e.child, null, n),
    (e = Ay(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function hC(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bd(Error(H(422)))), Vu(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = of({ mode: "visible", children: r.children }, i, 0, null)),
        (a = Ei(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && Ea(t, e.child, null, o),
        (t.child.memoizedState = ch(o)),
        (t.memoizedState = sh),
        a);
  if (!(t.mode & 1)) return Vu(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (a = Error(H(419))), (r = Bd(a, r, void 0)), Vu(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Ut || l)) {
    if (((r = dt), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), hr(e, i), Rn(r, e, i, -1));
    }
    return My(), (r = Bd(Error(H(421)))), Vu(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = AC.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Jt = Ur(i.nextSibling)),
      (en = t),
      (Re = !0),
      (kn = null),
      e !== null &&
        ((fn[dn++] = ir),
        (fn[dn++] = ar),
        (fn[dn++] = ji),
        (ir = e.id),
        (ar = e.overflow),
        (ji = t)),
      (t = Ay(t, r.children)),
      (t.flags |= 4096),
      t);
}
function r0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rh(e.return, t, n);
}
function zd(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function C_(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((Nt(e, t, r.children, n), (r = We.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && r0(e, n, t);
        else if (e.tag === 19) r0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ce(We, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && zs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          zd(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && zs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        zd(t, !0, n, null, a);
        break;
      case "together":
        zd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ws(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vC(e, t, n) {
  switch (t.tag) {
    case 3:
      T_(t), Pa();
      break;
    case 5:
      r_(t);
      break;
    case 1:
      Kt(t.type) && Ns(t);
      break;
    case 4:
      by(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Ce(Rs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ce(We, We.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $_(e, t, n)
          : (Ce(We, We.current & 1),
            (e = vr(e, t, n)),
            e !== null ? e.sibling : null);
      Ce(We, We.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return C_(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ce(We, We.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), E_(e, t, n);
  }
  return vr(e, t, n);
}
var j_, fh, k_, M_;
j_ = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
fh = function () {};
k_ = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), bi(qn.current);
    var a = null;
    switch (n) {
      case "input":
        (i = Mp(e, i)), (r = Mp(e, r)), (a = []);
        break;
      case "select":
        (i = Ke({}, i, { value: void 0 })),
          (r = Ke({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = Dp(e, i)), (r = Dp(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ks);
    }
    Lp(n, r);
    var o;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var l = i[s];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (al.hasOwnProperty(s)
              ? a || (a = [])
              : (a = a || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((l = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                l[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (a || (a = []), a.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (a = a || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (a = a || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (al.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ke("scroll", e),
                  a || l === u || (a = []))
                : (a = a || []).push(s, u));
    }
    n && (a = a || []).push("style", n);
    var s = a;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
M_ = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xo(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Et(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function yC(e, t, n) {
  var r = t.pendingProps;
  switch ((dy(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Et(t), null;
    case 1:
      return Kt(t.type) && Ms(), Et(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Aa(),
        Ie(Ht),
        Ie(jt),
        xy(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hu(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kn !== null && (bh(kn), (kn = null)))),
        fh(e, t),
        Et(t),
        null
      );
    case 5:
      wy(t);
      var i = bi(ml.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        k_(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return Et(t), null;
        }
        if (((e = bi(qn.current)), Hu(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[Hn] = t), (r[vl] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < zo.length; i++) ke(zo[i], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke("error", r), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              dg(r, a), ke("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                ke("invalid", r);
              break;
            case "textarea":
              hg(r, a), ke("invalid", r);
          }
          Lp(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Wu(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Wu(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : al.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  ke("scroll", r);
            }
          switch (n) {
            case "input":
              Iu(r), pg(r, a, !0);
              break;
            case "textarea":
              Iu(r), vg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ks);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = oS(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Hn] = t),
            (e[vl] = r),
            j_(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Bp(n, r)), n)) {
              case "dialog":
                ke("cancel", e), ke("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < zo.length; i++) ke(zo[i], e);
                i = r;
                break;
              case "source":
                ke("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", e), ke("load", e), (i = r);
                break;
              case "details":
                ke("toggle", e), (i = r);
                break;
              case "input":
                dg(e, r), (i = Mp(e, r)), ke("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ke({}, r, { value: void 0 })),
                  ke("invalid", e);
                break;
              case "textarea":
                hg(e, r), (i = Dp(e, r)), ke("invalid", e);
                break;
              default:
                i = r;
            }
            Lp(n, i), (l = i);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var u = l[a];
                a === "style"
                  ? sS(e, u)
                  : a === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && lS(e, u))
                  : a === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && ol(e, u)
                    : typeof u == "number" && ol(e, "" + u)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (al.hasOwnProperty(a)
                      ? u != null && a === "onScroll" && ke("scroll", e)
                      : u != null && Qv(e, a, u, o));
              }
            switch (n) {
              case "input":
                Iu(e), pg(e, r, !1);
                break;
              case "textarea":
                Iu(e), vg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? pa(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      pa(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ks);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Et(t), null;
    case 6:
      if (e && t.stateNode != null) M_(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (((n = bi(ml.current)), bi(qn.current), Hu(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Hn] = t),
            (a = r.nodeValue !== n) && ((e = en), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wu(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wu(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Hn] = t),
            (t.stateNode = r);
      }
      return Et(t), null;
    case 13:
      if (
        (Ie(We),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Re && Jt !== null && t.mode & 1 && !(t.flags & 128))
          YS(), Pa(), (t.flags |= 98560), (a = !1);
        else if (((a = Hu(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(H(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(H(317));
            a[Hn] = t;
          } else
            Pa(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Et(t), (a = !1);
        } else kn !== null && (bh(kn), (kn = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || We.current & 1 ? at === 0 && (at = 3) : My())),
          t.updateQueue !== null && (t.flags |= 4),
          Et(t),
          null);
    case 4:
      return (
        Aa(), fh(e, t), e === null && pl(t.stateNode.containerInfo), Et(t), null
      );
    case 10:
      return yy(t.type._context), Et(t), null;
    case 17:
      return Kt(t.type) && Ms(), Et(t), null;
    case 19:
      if ((Ie(We), (a = t.memoizedState), a === null)) return Et(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) xo(a, !1);
        else {
          if (at !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = zs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    xo(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ce(We, (We.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Ye() > $a &&
            ((t.flags |= 128), (r = !0), xo(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = zs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xo(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !Re)
            )
              return Et(t), null;
          } else
            2 * Ye() - a.renderingStartTime > $a &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xo(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Ye()),
          (t.sibling = null),
          (n = We.current),
          Ce(We, r ? (n & 1) | 2 : n & 1),
          t)
        : (Et(t), null);
    case 22:
    case 23:
      return (
        ky(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Yt & 1073741824 && (Et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Et(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function mC(e, t) {
  switch ((dy(t), t.tag)) {
    case 1:
      return (
        Kt(t.type) && Ms(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Aa(),
        Ie(Ht),
        Ie(jt),
        xy(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return wy(t), null;
    case 13:
      if (
        (Ie(We), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(H(340));
        Pa();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ie(We), null;
    case 4:
      return Aa(), null;
    case 10:
      return yy(t.type._context), null;
    case 22:
    case 23:
      return ky(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qu = !1,
  $t = !1,
  gC = typeof WeakSet == "function" ? WeakSet : Set,
  Y = null;
function la(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ve(e, t, r);
      }
    else n.current = null;
}
function dh(e, t, n) {
  try {
    n();
  } catch (r) {
    Ve(e, t, r);
  }
}
var i0 = !1;
function bC(e, t) {
  if (((Xp = $s), (e = RS()), cy(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            u = -1,
            s = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              c !== n || (i !== 0 && c.nodeType !== 3) || (l = o + i),
                c !== a || (r !== 0 && c.nodeType !== 3) || (u = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (p = c.firstChild) !== null;

            )
              (d = c), (c = p);
            for (;;) {
              if (c === e) break t;
              if (
                (d === n && ++s === i && (l = o),
                d === a && ++f === r && (u = o),
                (p = c.nextSibling) !== null)
              )
                break;
              (c = d), (d = c.parentNode);
            }
            c = p;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yp = { focusedElem: e, selectionRange: n }, $s = !1, Y = t; Y !== null; )
    if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Y = e);
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    b = m.memoizedState,
                    g = t.stateNode,
                    y = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : An(t.type, v),
                      b
                    );
                  g.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(H(163));
            }
        } catch (h) {
          Ve(t, t.return, h);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Y = e);
          break;
        }
        Y = t.return;
      }
  return (m = i0), (i0 = !1), m;
}
function Xo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && dh(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function rf(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ph(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function N_(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), N_(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Hn], delete t[vl], delete t[Jp], delete t[tC], delete t[nC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function I_(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function a0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || I_(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function hh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ks));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hh(e, t, n), e = e.sibling; e !== null; ) hh(e, t, n), (e = e.sibling);
}
function vh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vh(e, t, n), e = e.sibling; e !== null; ) vh(e, t, n), (e = e.sibling);
}
var gt = null,
  Tn = !1;
function $r(e, t, n) {
  for (n = n.child; n !== null; ) D_(e, t, n), (n = n.sibling);
}
function D_(e, t, n) {
  if (Vn && typeof Vn.onCommitFiberUnmount == "function")
    try {
      Vn.onCommitFiberUnmount(Xc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      $t || la(n, t);
    case 6:
      var r = gt,
        i = Tn;
      (gt = null),
        $r(e, t, n),
        (gt = r),
        (Tn = i),
        gt !== null &&
          (Tn
            ? ((e = gt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : gt.removeChild(n.stateNode));
      break;
    case 18:
      gt !== null &&
        (Tn
          ? ((e = gt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Md(e.parentNode, n)
              : e.nodeType === 1 && Md(e, n),
            cl(e))
          : Md(gt, n.stateNode));
      break;
    case 4:
      (r = gt),
        (i = Tn),
        (gt = n.stateNode.containerInfo),
        (Tn = !0),
        $r(e, t, n),
        (gt = r),
        (Tn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !$t &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && dh(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      $r(e, t, n);
      break;
    case 1:
      if (
        !$t &&
        (la(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ve(n, t, l);
        }
      $r(e, t, n);
      break;
    case 21:
      $r(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? (($t = (r = $t) || n.memoizedState !== null), $r(e, t, n), ($t = r))
        : $r(e, t, n);
      break;
    default:
      $r(e, t, n);
  }
}
function o0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gC()),
      t.forEach(function (r) {
        var i = TC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Pn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (gt = l.stateNode), (Tn = !1);
              break e;
            case 3:
              (gt = l.stateNode.containerInfo), (Tn = !0);
              break e;
            case 4:
              (gt = l.stateNode.containerInfo), (Tn = !0);
              break e;
          }
          l = l.return;
        }
        if (gt === null) throw Error(H(160));
        D_(a, o, i), (gt = null), (Tn = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        Ve(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) R_(t, e), (t = t.sibling);
}
function R_(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pn(t, e), Fn(e), r & 4)) {
        try {
          Xo(3, e, e.return), rf(3, e);
        } catch (v) {
          Ve(e, e.return, v);
        }
        try {
          Xo(5, e, e.return);
        } catch (v) {
          Ve(e, e.return, v);
        }
      }
      break;
    case 1:
      Pn(t, e), Fn(e), r & 512 && n !== null && la(n, n.return);
      break;
    case 5:
      if (
        (Pn(t, e),
        Fn(e),
        r & 512 && n !== null && la(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ol(i, "");
        } catch (v) {
          Ve(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && a.type === "radio" && a.name != null && iS(i, a),
              Bp(l, o);
            var s = Bp(l, a);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                c = u[o + 1];
              f === "style"
                ? sS(i, c)
                : f === "dangerouslySetInnerHTML"
                ? lS(i, c)
                : f === "children"
                ? ol(i, c)
                : Qv(i, f, c, s);
            }
            switch (l) {
              case "input":
                Np(i, a);
                break;
              case "textarea":
                aS(i, a);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var p = a.value;
                p != null
                  ? pa(i, !!a.multiple, p, !1)
                  : d !== !!a.multiple &&
                    (a.defaultValue != null
                      ? pa(i, !!a.multiple, a.defaultValue, !0)
                      : pa(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[vl] = a;
          } catch (v) {
            Ve(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Pn(t, e), Fn(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (v) {
          Ve(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Pn(t, e), Fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          cl(t.containerInfo);
        } catch (v) {
          Ve(e, e.return, v);
        }
      break;
    case 4:
      Pn(t, e), Fn(e);
      break;
    case 13:
      Pn(t, e),
        Fn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Cy = Ye())),
        r & 4 && o0(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? (($t = (s = $t) || f), Pn(t, e), ($t = s)) : Pn(t, e),
        Fn(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (Y = e, f = e.child; f !== null; ) {
            for (c = Y = f; Y !== null; ) {
              switch (((d = Y), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xo(4, d, d.return);
                  break;
                case 1:
                  la(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      Ve(r, n, v);
                    }
                  }
                  break;
                case 5:
                  la(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    u0(c);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (Y = p)) : u0(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (i = c.stateNode),
                  s
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((l = c.stateNode),
                      (u = c.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = uS("display", o)));
              } catch (v) {
                Ve(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = s ? "" : c.memoizedProps;
              } catch (v) {
                Ve(e, e.return, v);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Pn(t, e), Fn(e), r & 4 && o0(e);
      break;
    case 21:
      break;
    default:
      Pn(t, e), Fn(e);
  }
}
function Fn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (I_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ol(i, ""), (r.flags &= -33));
          var a = a0(e);
          vh(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = a0(e);
          hh(e, l, o);
          break;
        default:
          throw Error(H(161));
      }
    } catch (u) {
      Ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wC(e, t, n) {
  (Y = e), L_(e);
}
function L_(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var i = Y,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || qu;
      if (!o) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || $t;
        l = qu;
        var s = $t;
        if (((qu = o), ($t = u) && !s))
          for (Y = i; Y !== null; )
            (o = Y),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? s0(i)
                : u !== null
                ? ((u.return = o), (Y = u))
                : s0(i);
        for (; a !== null; ) (Y = a), L_(a), (a = a.sibling);
        (Y = i), (qu = l), ($t = s);
      }
      l0(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (Y = a)) : l0(e);
  }
}
function l0(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              $t || rf(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !$t)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : An(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Hg(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hg(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && cl(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(H(163));
          }
        $t || (t.flags & 512 && ph(t));
      } catch (d) {
        Ve(t, t.return, d);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function u0(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function s0(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rf(4, t);
          } catch (u) {
            Ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ve(t, i, u);
            }
          }
          var a = t.return;
          try {
            ph(t);
          } catch (u) {
            Ve(t, a, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ph(t);
          } catch (u) {
            Ve(t, o, u);
          }
      }
    } catch (u) {
      Ve(t, t.return, u);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (Y = l);
      break;
    }
    Y = t.return;
  }
}
var xC = Math.ceil,
  Ws = xr.ReactCurrentDispatcher,
  Ty = xr.ReactCurrentOwner,
  yn = xr.ReactCurrentBatchConfig,
  me = 0,
  dt = null,
  et = null,
  xt = 0,
  Yt = 0,
  ua = ei(0),
  at = 0,
  xl = null,
  Mi = 0,
  af = 0,
  $y = 0,
  Yo = null,
  Ft = null,
  Cy = 0,
  $a = 1 / 0,
  tr = null,
  Hs = !1,
  yh = null,
  Hr = null,
  Gu = !1,
  Rr = null,
  Ks = 0,
  Qo = 0,
  mh = null,
  xs = -1,
  Ss = 0;
function Rt() {
  return me & 6 ? Ye() : xs !== -1 ? xs : (xs = Ye());
}
function Kr(e) {
  return e.mode & 1
    ? me & 2 && xt !== 0
      ? xt & -xt
      : iC.transition !== null
      ? (Ss === 0 && (Ss = xS()), Ss)
      : ((e = xe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : TS(e.type))),
        e)
    : 1;
}
function Rn(e, t, n, r) {
  if (50 < Qo) throw ((Qo = 0), (mh = null), Error(H(185)));
  cu(e, n, r),
    (!(me & 2) || e !== dt) &&
      (e === dt && (!(me & 2) && (af |= n), at === 4 && Ir(e, xt)),
      Vt(e, r),
      n === 1 && me === 0 && !(t.mode & 1) && (($a = Ye() + 500), ef && ti()));
}
function Vt(e, t) {
  var n = e.callbackNode;
  i$(e, t);
  var r = Ts(e, e === dt ? xt : 0);
  if (r === 0)
    n !== null && gg(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gg(n), t === 1))
      e.tag === 0 ? rC(c0.bind(null, e)) : qS(c0.bind(null, e)),
        J$(function () {
          !(me & 6) && ti();
        }),
        (n = null);
    else {
      switch (SS(r)) {
        case 1:
          n = ny;
          break;
        case 4:
          n = bS;
          break;
        case 16:
          n = As;
          break;
        case 536870912:
          n = wS;
          break;
        default:
          n = As;
      }
      n = V_(n, B_.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function B_(e, t) {
  if (((xs = -1), (Ss = 0), me & 6)) throw Error(H(327));
  var n = e.callbackNode;
  if (ga() && e.callbackNode !== n) return null;
  var r = Ts(e, e === dt ? xt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vs(e, r);
  else {
    t = r;
    var i = me;
    me |= 2;
    var a = F_();
    (dt !== e || xt !== t) && ((tr = null), ($a = Ye() + 500), Pi(e, t));
    do
      try {
        OC();
        break;
      } catch (l) {
        z_(e, l);
      }
    while (1);
    vy(),
      (Ws.current = a),
      (me = i),
      et !== null ? (t = 0) : ((dt = null), (xt = 0), (t = at));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Hp(e)), i !== 0 && ((r = i), (t = gh(e, i)))), t === 1)
    )
      throw ((n = xl), Pi(e, 0), Ir(e, r), Vt(e, Ye()), n);
    if (t === 6) Ir(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !SC(i) &&
          ((t = Vs(e, r)),
          t === 2 && ((a = Hp(e)), a !== 0 && ((r = a), (t = gh(e, a)))),
          t === 1))
      )
        throw ((n = xl), Pi(e, 0), Ir(e, r), Vt(e, Ye()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          pi(e, Ft, tr);
          break;
        case 3:
          if (
            (Ir(e, r), (r & 130023424) === r && ((t = Cy + 500 - Ye()), 10 < t))
          ) {
            if (Ts(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Rt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Zp(pi.bind(null, e, Ft, tr), t);
            break;
          }
          pi(e, Ft, tr);
          break;
        case 4:
          if ((Ir(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Dn(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = Ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * xC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zp(pi.bind(null, e, Ft, tr), r);
            break;
          }
          pi(e, Ft, tr);
          break;
        case 5:
          pi(e, Ft, tr);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return Vt(e, Ye()), e.callbackNode === n ? B_.bind(null, e) : null;
}
function gh(e, t) {
  var n = Yo;
  return (
    e.current.memoizedState.isDehydrated && (Pi(e, t).flags |= 256),
    (e = Vs(e, t)),
    e !== 2 && ((t = Ft), (Ft = n), t !== null && bh(t)),
    e
  );
}
function bh(e) {
  Ft === null ? (Ft = e) : Ft.push.apply(Ft, e);
}
function SC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Ln(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ir(e, t) {
  for (
    t &= ~$y,
      t &= ~af,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Dn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function c0(e) {
  if (me & 6) throw Error(H(327));
  ga();
  var t = Ts(e, 0);
  if (!(t & 1)) return Vt(e, Ye()), null;
  var n = Vs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hp(e);
    r !== 0 && ((t = r), (n = gh(e, r)));
  }
  if (n === 1) throw ((n = xl), Pi(e, 0), Ir(e, t), Vt(e, Ye()), n);
  if (n === 6) throw Error(H(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    pi(e, Ft, tr),
    Vt(e, Ye()),
    null
  );
}
function jy(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    (me = n), me === 0 && (($a = Ye() + 500), ef && ti());
  }
}
function Ni(e) {
  Rr !== null && Rr.tag === 0 && !(me & 6) && ga();
  var t = me;
  me |= 1;
  var n = yn.transition,
    r = xe;
  try {
    if (((yn.transition = null), (xe = 1), e)) return e();
  } finally {
    (xe = r), (yn.transition = n), (me = t), !(me & 6) && ti();
  }
}
function ky() {
  (Yt = ua.current), Ie(ua);
}
function Pi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Z$(n)), et !== null))
    for (n = et.return; n !== null; ) {
      var r = n;
      switch ((dy(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ms();
          break;
        case 3:
          Aa(), Ie(Ht), Ie(jt), xy();
          break;
        case 5:
          wy(r);
          break;
        case 4:
          Aa();
          break;
        case 13:
          Ie(We);
          break;
        case 19:
          Ie(We);
          break;
        case 10:
          yy(r.type._context);
          break;
        case 22:
        case 23:
          ky();
      }
      n = n.return;
    }
  if (
    ((dt = e),
    (et = e = Vr(e.current, null)),
    (xt = Yt = t),
    (at = 0),
    (xl = null),
    ($y = af = Mi = 0),
    (Ft = Yo = null),
    gi !== null)
  ) {
    for (t = 0; t < gi.length; t++)
      if (((n = gi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    gi = null;
  }
  return e;
}
function z_(e, t) {
  do {
    var n = et;
    try {
      if ((vy(), (gs.current = Us), Fs)) {
        for (var r = He.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Fs = !1;
      }
      if (
        ((ki = 0),
        (ft = it = He = null),
        (Go = !1),
        (gl = 0),
        (Ty.current = null),
        n === null || n.return === null)
      ) {
        (at = 1), (xl = t), (et = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          l = n,
          u = t;
        if (
          ((t = xt),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = l,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var p = Qg(o);
          if (p !== null) {
            (p.flags &= -257),
              Zg(p, o, l, a, t),
              p.mode & 1 && Yg(a, s, t),
              (t = p),
              (u = s);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else m.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Yg(a, s, t), My();
              break e;
            }
            u = Error(H(426));
          }
        } else if (Re && l.mode & 1) {
          var b = Qg(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              Zg(b, o, l, a, t),
              py(Ta(u, l));
            break e;
          }
        }
        (a = u = Ta(u, l)),
          at !== 4 && (at = 2),
          Yo === null ? (Yo = [a]) : Yo.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var g = __(a, u, t);
              Wg(a, g);
              break e;
            case 1:
              l = u;
              var y = a.type,
                w = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Hr === null || !Hr.has(w))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var h = O_(a, l, t);
                Wg(a, h);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      W_(n);
    } catch (x) {
      (t = x), et === n && n !== null && (et = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function F_() {
  var e = Ws.current;
  return (Ws.current = Us), e === null ? Us : e;
}
function My() {
  (at === 0 || at === 3 || at === 2) && (at = 4),
    dt === null || (!(Mi & 268435455) && !(af & 268435455)) || Ir(dt, xt);
}
function Vs(e, t) {
  var n = me;
  me |= 2;
  var r = F_();
  (dt !== e || xt !== t) && ((tr = null), Pi(e, t));
  do
    try {
      _C();
      break;
    } catch (i) {
      z_(e, i);
    }
  while (1);
  if ((vy(), (me = n), (Ws.current = r), et !== null)) throw Error(H(261));
  return (dt = null), (xt = 0), at;
}
function _C() {
  for (; et !== null; ) U_(et);
}
function OC() {
  for (; et !== null && !XT(); ) U_(et);
}
function U_(e) {
  var t = K_(e.alternate, e, Yt);
  (e.memoizedProps = e.pendingProps),
    t === null ? W_(e) : (et = t),
    (Ty.current = null);
}
function W_(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = mC(n, t)), n !== null)) {
        (n.flags &= 32767), (et = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (at = 6), (et = null);
        return;
      }
    } else if (((n = yC(n, t, Yt)), n !== null)) {
      et = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      et = t;
      return;
    }
    et = t = e;
  } while (t !== null);
  at === 0 && (at = 5);
}
function pi(e, t, n) {
  var r = xe,
    i = yn.transition;
  try {
    (yn.transition = null), (xe = 1), PC(e, t, n, r);
  } finally {
    (yn.transition = i), (xe = r);
  }
  return null;
}
function PC(e, t, n, r) {
  do ga();
  while (Rr !== null);
  if (me & 6) throw Error(H(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (a$(e, a),
    e === dt && ((et = dt = null), (xt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gu ||
      ((Gu = !0),
      V_(As, function () {
        return ga(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = yn.transition), (yn.transition = null);
    var o = xe;
    xe = 1;
    var l = me;
    (me |= 4),
      (Ty.current = null),
      bC(e, n),
      R_(n, e),
      K$(Yp),
      ($s = !!Xp),
      (Yp = Xp = null),
      (e.current = n),
      wC(n),
      YT(),
      (me = l),
      (xe = o),
      (yn.transition = a);
  } else e.current = n;
  if (
    (Gu && ((Gu = !1), (Rr = e), (Ks = i)),
    (a = e.pendingLanes),
    a === 0 && (Hr = null),
    JT(n.stateNode),
    Vt(e, Ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Hs) throw ((Hs = !1), (e = yh), (yh = null), e);
  return (
    Ks & 1 && e.tag !== 0 && ga(),
    (a = e.pendingLanes),
    a & 1 ? (e === mh ? Qo++ : ((Qo = 0), (mh = e))) : (Qo = 0),
    ti(),
    null
  );
}
function ga() {
  if (Rr !== null) {
    var e = SS(Ks),
      t = yn.transition,
      n = xe;
    try {
      if (((yn.transition = null), (xe = 16 > e ? 16 : e), Rr === null))
        var r = !1;
      else {
        if (((e = Rr), (Rr = null), (Ks = 0), me & 6)) throw Error(H(331));
        var i = me;
        for (me |= 4, Y = e.current; Y !== null; ) {
          var a = Y,
            o = a.child;
          if (Y.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (Y = s; Y !== null; ) {
                  var f = Y;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo(8, f, a);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (Y = c);
                  else
                    for (; Y !== null; ) {
                      f = Y;
                      var d = f.sibling,
                        p = f.return;
                      if ((N_(f), f === s)) {
                        Y = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (Y = d);
                        break;
                      }
                      Y = p;
                    }
                }
              }
              var m = a.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var b = v.sibling;
                    (v.sibling = null), (v = b);
                  } while (v !== null);
                }
              }
              Y = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (Y = o);
          else
            e: for (; Y !== null; ) {
              if (((a = Y), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xo(9, a, a.return);
                }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (Y = g);
                break e;
              }
              Y = a.return;
            }
        }
        var y = e.current;
        for (Y = y; Y !== null; ) {
          o = Y;
          var w = o.child;
          if (o.subtreeFlags & 2064 && w !== null) (w.return = o), (Y = w);
          else
            e: for (o = y; Y !== null; ) {
              if (((l = Y), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rf(9, l);
                  }
                } catch (x) {
                  Ve(l, l.return, x);
                }
              if (l === o) {
                Y = null;
                break e;
              }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (Y = h);
                break e;
              }
              Y = l.return;
            }
        }
        if (
          ((me = i), ti(), Vn && typeof Vn.onPostCommitFiberRoot == "function")
        )
          try {
            Vn.onPostCommitFiberRoot(Xc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (xe = n), (yn.transition = t);
    }
  }
  return !1;
}
function f0(e, t, n) {
  (t = Ta(n, t)),
    (t = __(e, t, 1)),
    (e = Wr(e, t, 1)),
    (t = Rt()),
    e !== null && (cu(e, 1, t), Vt(e, t));
}
function Ve(e, t, n) {
  if (e.tag === 3) f0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        f0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Hr === null || !Hr.has(r)))
        ) {
          (e = Ta(n, e)),
            (e = O_(t, e, 1)),
            (t = Wr(t, e, 1)),
            (e = Rt()),
            t !== null && (cu(t, 1, e), Vt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function EC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Rt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    dt === e &&
      (xt & n) === n &&
      (at === 4 || (at === 3 && (xt & 130023424) === xt && 500 > Ye() - Cy)
        ? Pi(e, 0)
        : ($y |= n)),
    Vt(e, t);
}
function H_(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Lu), (Lu <<= 1), !(Lu & 130023424) && (Lu = 4194304))
      : (t = 1));
  var n = Rt();
  (e = hr(e, t)), e !== null && (cu(e, t, n), Vt(e, n));
}
function AC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), H_(e, n);
}
function TC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(H(314));
  }
  r !== null && r.delete(t), H_(e, n);
}
var K_;
K_ = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ht.current) Ut = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ut = !1), vC(e, t, n);
      Ut = !!(e.flags & 131072);
    }
  else (Ut = !1), Re && t.flags & 1048576 && GS(t, Ds, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ws(e, t), (e = t.pendingProps);
      var i = Oa(t, jt.current);
      ma(t, n), (i = _y(null, t, r, e, i, n));
      var a = Oy();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Kt(r) ? ((a = !0), Ns(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            gy(t),
            (i.updater = tf),
            (t.stateNode = i),
            (i._reactInternals = t),
            ah(t, r, e, n),
            (t = uh(null, t, r, !0, a, n)))
          : ((t.tag = 0), Re && a && fy(t), Nt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ws(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = CC(r)),
          (e = An(r, e)),
          i)
        ) {
          case 0:
            t = lh(null, t, r, e, n);
            break e;
          case 1:
            t = t0(null, t, r, e, n);
            break e;
          case 11:
            t = Jg(null, t, r, e, n);
            break e;
          case 14:
            t = e0(null, t, r, An(r.type, e), n);
            break e;
        }
        throw Error(H(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : An(r, i)),
        lh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : An(r, i)),
        t0(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((T_(t), e === null)) throw Error(H(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          ZS(e, t),
          Bs(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = Ta(Error(H(423)), t)), (t = n0(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ta(Error(H(424)), t)), (t = n0(e, t, r, n, i));
            break e;
          } else
            for (
              Jt = Ur(t.stateNode.containerInfo.firstChild),
                en = t,
                Re = !0,
                kn = null,
                n = n_(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Pa(), r === i)) {
            t = vr(e, t, n);
            break e;
          }
          Nt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        r_(t),
        e === null && nh(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Qp(r, i) ? (o = null) : a !== null && Qp(r, a) && (t.flags |= 32),
        A_(e, t),
        Nt(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && nh(t), null;
    case 13:
      return $_(e, t, n);
    case 4:
      return (
        by(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ea(t, null, r, n)) : Nt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : An(r, i)),
        Jg(e, t, r, i, n)
      );
    case 7:
      return Nt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Nt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Nt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          Ce(Rs, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (Ln(a.value, o)) {
            if (a.children === i.children && !Ht.current) {
              t = vr(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                o = a.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (a.tag === 1) {
                      (u = ur(-1, n & -n)), (u.tag = 2);
                      var s = a.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (a.lanes |= n),
                      (u = a.alternate),
                      u !== null && (u.lanes |= n),
                      rh(a.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(H(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  rh(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        Nt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ma(t, n),
        (i = bn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Nt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = An(r, t.pendingProps)),
        (i = An(r.type, i)),
        e0(e, t, r, i, n)
      );
    case 15:
      return P_(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : An(r, i)),
        ws(e, t),
        (t.tag = 1),
        Kt(r) ? ((e = !0), Ns(t)) : (e = !1),
        ma(t, n),
        e_(t, r, i),
        ah(t, r, i, n),
        uh(null, t, r, !0, e, n)
      );
    case 19:
      return C_(e, t, n);
    case 22:
      return E_(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function V_(e, t) {
  return gS(e, t);
}
function $C(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function hn(e, t, n, r) {
  return new $C(e, t, n, r);
}
function Ny(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function CC(e) {
  if (typeof e == "function") return Ny(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jv)) return 11;
    if (e === ey) return 14;
  }
  return 2;
}
function Vr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = hn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _s(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ny(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Zi:
        return Ei(n.children, i, a, t);
      case Zv:
        (o = 8), (i |= 8);
        break;
      case $p:
        return (
          (e = hn(12, n, t, i | 2)), (e.elementType = $p), (e.lanes = a), e
        );
      case Cp:
        return (e = hn(13, n, t, i)), (e.elementType = Cp), (e.lanes = a), e;
      case jp:
        return (e = hn(19, n, t, i)), (e.elementType = jp), (e.lanes = a), e;
      case tS:
        return of(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Jx:
              o = 10;
              break e;
            case eS:
              o = 9;
              break e;
            case Jv:
              o = 11;
              break e;
            case ey:
              o = 14;
              break e;
            case jr:
              (o = 16), (r = null);
              break e;
          }
        throw Error(H(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = hn(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function Ei(e, t, n, r) {
  return (e = hn(7, e, r, t)), (e.lanes = n), e;
}
function of(e, t, n, r) {
  return (
    (e = hn(22, e, r, t)),
    (e.elementType = tS),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fd(e, t, n) {
  return (e = hn(6, e, null, t)), (e.lanes = n), e;
}
function Ud(e, t, n) {
  return (
    (t = hn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jC(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Sd(0)),
    (this.expirationTimes = Sd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Sd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Iy(e, t, n, r, i, a, o, l, u) {
  return (
    (e = new jC(e, t, n, l, u)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = hn(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    gy(a),
    e
  );
}
function kC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function q_(e) {
  if (!e) return Qr;
  e = e._reactInternals;
  e: {
    if (Bi(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Kt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(H(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Kt(n)) return VS(e, n, t);
  }
  return t;
}
function G_(e, t, n, r, i, a, o, l, u) {
  return (
    (e = Iy(n, r, !0, e, i, a, o, l, u)),
    (e.context = q_(null)),
    (n = e.current),
    (r = Rt()),
    (i = Kr(n)),
    (a = ur(r, i)),
    (a.callback = t ?? null),
    Wr(n, a, i),
    (e.current.lanes = i),
    cu(e, i, r),
    Vt(e, r),
    e
  );
}
function lf(e, t, n, r) {
  var i = t.current,
    a = Rt(),
    o = Kr(i);
  return (
    (n = q_(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ur(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wr(i, t, o)),
    e !== null && (Rn(e, i, o, a), ms(e, i, o)),
    o
  );
}
function qs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function d0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Dy(e, t) {
  d0(e, t), (e = e.alternate) && d0(e, t);
}
function MC() {
  return null;
}
var X_ =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ry(e) {
  this._internalRoot = e;
}
uf.prototype.render = Ry.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  lf(e, t, null, null);
};
uf.prototype.unmount = Ry.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ni(function () {
      lf(null, e, null, null);
    }),
      (t[pr] = null);
  }
};
function uf(e) {
  this._internalRoot = e;
}
uf.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = PS();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nr.length && t !== 0 && t < Nr[n].priority; n++);
    Nr.splice(n, 0, e), n === 0 && AS(e);
  }
};
function Ly(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function sf(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function p0() {}
function NC(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var s = qs(o);
        a.call(s);
      };
    }
    var o = G_(t, r, e, 0, null, !1, !1, "", p0);
    return (
      (e._reactRootContainer = o),
      (e[pr] = o.current),
      pl(e.nodeType === 8 ? e.parentNode : e),
      Ni(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var s = qs(u);
      l.call(s);
    };
  }
  var u = Iy(e, 0, !1, null, null, !1, !1, "", p0);
  return (
    (e._reactRootContainer = u),
    (e[pr] = u.current),
    pl(e.nodeType === 8 ? e.parentNode : e),
    Ni(function () {
      lf(t, u, n, r);
    }),
    u
  );
}
function cf(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = qs(o);
        l.call(u);
      };
    }
    lf(t, o, e, i);
  } else o = NC(n, t, e, i, r);
  return qs(o);
}
_S = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bo(t.pendingLanes);
        n !== 0 &&
          (ry(t, n | 1), Vt(t, Ye()), !(me & 6) && (($a = Ye() + 500), ti()));
      }
      break;
    case 13:
      Ni(function () {
        var r = hr(e, 1);
        if (r !== null) {
          var i = Rt();
          Rn(r, e, 1, i);
        }
      }),
        Dy(e, 1);
  }
};
iy = function (e) {
  if (e.tag === 13) {
    var t = hr(e, 134217728);
    if (t !== null) {
      var n = Rt();
      Rn(t, e, 134217728, n);
    }
    Dy(e, 134217728);
  }
};
OS = function (e) {
  if (e.tag === 13) {
    var t = Kr(e),
      n = hr(e, t);
    if (n !== null) {
      var r = Rt();
      Rn(n, e, t, r);
    }
    Dy(e, t);
  }
};
PS = function () {
  return xe;
};
ES = function (e, t) {
  var n = xe;
  try {
    return (xe = e), t();
  } finally {
    xe = n;
  }
};
Fp = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Np(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Jc(r);
            if (!i) throw Error(H(90));
            rS(r), Np(r, i);
          }
        }
      }
      break;
    case "textarea":
      aS(e, n);
      break;
    case "select":
      (t = n.value), t != null && pa(e, !!n.multiple, t, !1);
  }
};
dS = jy;
pS = Ni;
var IC = { usingClientEntryPoint: !1, Events: [du, na, Jc, cS, fS, jy] },
  So = {
    findFiberByHostInstance: mi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  DC = {
    bundleType: So.bundleType,
    version: So.version,
    rendererPackageName: So.rendererPackageName,
    rendererConfig: So.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yS(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: So.findFiberByHostInstance || MC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xu.isDisabled && Xu.supportsFiber)
    try {
      (Xc = Xu.inject(DC)), (Vn = Xu);
    } catch {}
}
rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = IC;
rn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ly(t)) throw Error(H(200));
  return kC(e, t, null, n);
};
rn.createRoot = function (e, t) {
  if (!Ly(e)) throw Error(H(299));
  var n = !1,
    r = "",
    i = X_;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Iy(e, 1, !1, null, null, n, !1, r, i)),
    (e[pr] = t.current),
    pl(e.nodeType === 8 ? e.parentNode : e),
    new Ry(t)
  );
};
rn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(H(188))
      : ((e = Object.keys(e).join(",")), Error(H(268, e)));
  return (e = yS(t)), (e = e === null ? null : e.stateNode), e;
};
rn.flushSync = function (e) {
  return Ni(e);
};
rn.hydrate = function (e, t, n) {
  if (!sf(t)) throw Error(H(200));
  return cf(null, e, t, !0, n);
};
rn.hydrateRoot = function (e, t, n) {
  if (!Ly(e)) throw Error(H(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = "",
    o = X_;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = G_(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[pr] = t.current),
    pl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new uf(t);
};
rn.render = function (e, t, n) {
  if (!sf(t)) throw Error(H(200));
  return cf(null, e, t, !1, n);
};
rn.unmountComponentAtNode = function (e) {
  if (!sf(e)) throw Error(H(40));
  return e._reactRootContainer
    ? (Ni(function () {
        cf(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pr] = null);
        });
      }),
      !0)
    : !1;
};
rn.unstable_batchedUpdates = jy;
rn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!sf(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return cf(e, t, n, !1, r);
};
rn.version = "18.2.0-next-9e3b772b8-20220608";
function Y_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y_);
    } catch (e) {
      console.error(e);
    }
}
Y_(), (Gx.exports = rn);
var By = Gx.exports;
const RC = Te(By);
var h0 = By;
(Ap.createRoot = h0.createRoot), (Ap.hydrateRoot = h0.hydrateRoot);
var Q_ = { exports: {} },
  Z_ = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca = E;
function LC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var BC = typeof Object.is == "function" ? Object.is : LC,
  zC = Ca.useState,
  FC = Ca.useEffect,
  UC = Ca.useLayoutEffect,
  WC = Ca.useDebugValue;
function HC(e, t) {
  var n = t(),
    r = zC({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    a = r[1];
  return (
    UC(
      function () {
        (i.value = n), (i.getSnapshot = t), Wd(i) && a({ inst: i });
      },
      [e, n, t]
    ),
    FC(
      function () {
        return (
          Wd(i) && a({ inst: i }),
          e(function () {
            Wd(i) && a({ inst: i });
          })
        );
      },
      [e]
    ),
    WC(n),
    n
  );
}
function Wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !BC(e, n);
  } catch {
    return !0;
  }
}
function KC(e, t) {
  return t();
}
var VC =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? KC
    : HC;
Z_.useSyncExternalStore =
  Ca.useSyncExternalStore !== void 0 ? Ca.useSyncExternalStore : VC;
Q_.exports = Z_;
var qC = Q_.exports,
  J_ = { exports: {} },
  eO = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ff = E,
  GC = qC;
function XC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var YC = typeof Object.is == "function" ? Object.is : XC,
  QC = GC.useSyncExternalStore,
  ZC = ff.useRef,
  JC = ff.useEffect,
  ej = ff.useMemo,
  tj = ff.useDebugValue;
eO.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var a = ZC(null);
  if (a.current === null) {
    var o = { hasValue: !1, value: null };
    a.current = o;
  } else o = a.current;
  a = ej(
    function () {
      function u(p) {
        if (!s) {
          if (((s = !0), (f = p), (p = r(p)), i !== void 0 && o.hasValue)) {
            var m = o.value;
            if (i(m, p)) return (c = m);
          }
          return (c = p);
        }
        if (((m = c), YC(f, p))) return m;
        var v = r(p);
        return i !== void 0 && i(m, v) ? m : ((f = p), (c = v));
      }
      var s = !1,
        f,
        c,
        d = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        d === null
          ? void 0
          : function () {
              return u(d());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = QC(e, a[0], a[1]);
  return (
    JC(
      function () {
        (o.hasValue = !0), (o.value = l);
      },
      [l]
    ),
    tj(l),
    l
  );
};
J_.exports = eO;
var nj = J_.exports;
function rj(e) {
  e();
}
let tO = rj;
const ij = (e) => (tO = e),
  aj = () => tO,
  v0 = Symbol.for("react-redux-context"),
  y0 = typeof globalThis < "u" ? globalThis : {};
function oj() {
  var e;
  if (!E.createContext) return {};
  const t = (e = y0[v0]) != null ? e : (y0[v0] = new Map());
  let n = t.get(E.createContext);
  return n || ((n = E.createContext(null)), t.set(E.createContext, n)), n;
}
const Zr = oj();
function zy(e = Zr) {
  return function () {
    return E.useContext(e);
  };
}
const nO = zy(),
  lj = () => {
    throw new Error("uSES not initialized!");
  };
let rO = lj;
const uj = (e) => {
    rO = e;
  },
  sj = (e, t) => e === t;
function cj(e = Zr) {
  const t = e === Zr ? nO : zy(e);
  return function (r, i = {}) {
    const {
        equalityFn: a = sj,
        stabilityCheck: o = void 0,
        noopCheck: l = void 0,
      } = typeof i == "function" ? { equalityFn: i } : i,
      {
        store: u,
        subscription: s,
        getServerState: f,
        stabilityCheck: c,
        noopCheck: d,
      } = t();
    E.useRef(!0);
    const p = E.useCallback(
        {
          [r.name](v) {
            return r(v);
          },
        }[r.name],
        [r, c, o]
      ),
      m = rO(s.addNestedSub, u.getState, f || u.getState, p, a);
    return E.useDebugValue(m), m;
  };
}
const yr = cj();
var iO = { exports: {} },
  Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pt = typeof Symbol == "function" && Symbol.for,
  Fy = pt ? Symbol.for("react.element") : 60103,
  Uy = pt ? Symbol.for("react.portal") : 60106,
  df = pt ? Symbol.for("react.fragment") : 60107,
  pf = pt ? Symbol.for("react.strict_mode") : 60108,
  hf = pt ? Symbol.for("react.profiler") : 60114,
  vf = pt ? Symbol.for("react.provider") : 60109,
  yf = pt ? Symbol.for("react.context") : 60110,
  Wy = pt ? Symbol.for("react.async_mode") : 60111,
  mf = pt ? Symbol.for("react.concurrent_mode") : 60111,
  gf = pt ? Symbol.for("react.forward_ref") : 60112,
  bf = pt ? Symbol.for("react.suspense") : 60113,
  fj = pt ? Symbol.for("react.suspense_list") : 60120,
  wf = pt ? Symbol.for("react.memo") : 60115,
  xf = pt ? Symbol.for("react.lazy") : 60116,
  dj = pt ? Symbol.for("react.block") : 60121,
  pj = pt ? Symbol.for("react.fundamental") : 60117,
  hj = pt ? Symbol.for("react.responder") : 60118,
  vj = pt ? Symbol.for("react.scope") : 60119;
function on(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Fy:
        switch (((e = e.type), e)) {
          case Wy:
          case mf:
          case df:
          case hf:
          case pf:
          case bf:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case yf:
              case gf:
              case xf:
              case wf:
              case vf:
                return e;
              default:
                return t;
            }
        }
      case Uy:
        return t;
    }
  }
}
function aO(e) {
  return on(e) === mf;
}
Se.AsyncMode = Wy;
Se.ConcurrentMode = mf;
Se.ContextConsumer = yf;
Se.ContextProvider = vf;
Se.Element = Fy;
Se.ForwardRef = gf;
Se.Fragment = df;
Se.Lazy = xf;
Se.Memo = wf;
Se.Portal = Uy;
Se.Profiler = hf;
Se.StrictMode = pf;
Se.Suspense = bf;
Se.isAsyncMode = function (e) {
  return aO(e) || on(e) === Wy;
};
Se.isConcurrentMode = aO;
Se.isContextConsumer = function (e) {
  return on(e) === yf;
};
Se.isContextProvider = function (e) {
  return on(e) === vf;
};
Se.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fy;
};
Se.isForwardRef = function (e) {
  return on(e) === gf;
};
Se.isFragment = function (e) {
  return on(e) === df;
};
Se.isLazy = function (e) {
  return on(e) === xf;
};
Se.isMemo = function (e) {
  return on(e) === wf;
};
Se.isPortal = function (e) {
  return on(e) === Uy;
};
Se.isProfiler = function (e) {
  return on(e) === hf;
};
Se.isStrictMode = function (e) {
  return on(e) === pf;
};
Se.isSuspense = function (e) {
  return on(e) === bf;
};
Se.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === df ||
    e === mf ||
    e === hf ||
    e === pf ||
    e === bf ||
    e === fj ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === xf ||
        e.$$typeof === wf ||
        e.$$typeof === vf ||
        e.$$typeof === yf ||
        e.$$typeof === gf ||
        e.$$typeof === pj ||
        e.$$typeof === hj ||
        e.$$typeof === vj ||
        e.$$typeof === dj))
  );
};
Se.typeOf = on;
iO.exports = Se;
var Gs = iO.exports,
  oO = Gs,
  yj = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  mj = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  lO = {};
lO[oO.ForwardRef] = yj;
lO[oO.Memo] = mj;
var Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hy = Symbol.for("react.element"),
  Ky = Symbol.for("react.portal"),
  Sf = Symbol.for("react.fragment"),
  _f = Symbol.for("react.strict_mode"),
  Of = Symbol.for("react.profiler"),
  Pf = Symbol.for("react.provider"),
  Ef = Symbol.for("react.context"),
  gj = Symbol.for("react.server_context"),
  Af = Symbol.for("react.forward_ref"),
  Tf = Symbol.for("react.suspense"),
  $f = Symbol.for("react.suspense_list"),
  Cf = Symbol.for("react.memo"),
  jf = Symbol.for("react.lazy"),
  bj = Symbol.for("react.offscreen"),
  uO;
uO = Symbol.for("react.module.reference");
function Sn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Hy:
        switch (((e = e.type), e)) {
          case Sf:
          case Of:
          case _f:
          case Tf:
          case $f:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case gj:
              case Ef:
              case Af:
              case jf:
              case Cf:
              case Pf:
                return e;
              default:
                return t;
            }
        }
      case Ky:
        return t;
    }
  }
}
Pe.ContextConsumer = Ef;
Pe.ContextProvider = Pf;
Pe.Element = Hy;
Pe.ForwardRef = Af;
Pe.Fragment = Sf;
Pe.Lazy = jf;
Pe.Memo = Cf;
Pe.Portal = Ky;
Pe.Profiler = Of;
Pe.StrictMode = _f;
Pe.Suspense = Tf;
Pe.SuspenseList = $f;
Pe.isAsyncMode = function () {
  return !1;
};
Pe.isConcurrentMode = function () {
  return !1;
};
Pe.isContextConsumer = function (e) {
  return Sn(e) === Ef;
};
Pe.isContextProvider = function (e) {
  return Sn(e) === Pf;
};
Pe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hy;
};
Pe.isForwardRef = function (e) {
  return Sn(e) === Af;
};
Pe.isFragment = function (e) {
  return Sn(e) === Sf;
};
Pe.isLazy = function (e) {
  return Sn(e) === jf;
};
Pe.isMemo = function (e) {
  return Sn(e) === Cf;
};
Pe.isPortal = function (e) {
  return Sn(e) === Ky;
};
Pe.isProfiler = function (e) {
  return Sn(e) === Of;
};
Pe.isStrictMode = function (e) {
  return Sn(e) === _f;
};
Pe.isSuspense = function (e) {
  return Sn(e) === Tf;
};
Pe.isSuspenseList = function (e) {
  return Sn(e) === $f;
};
Pe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Sf ||
    e === Of ||
    e === _f ||
    e === Tf ||
    e === $f ||
    e === bj ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === jf ||
        e.$$typeof === Cf ||
        e.$$typeof === Pf ||
        e.$$typeof === Ef ||
        e.$$typeof === Af ||
        e.$$typeof === uO ||
        e.getModuleId !== void 0))
  );
};
Pe.typeOf = Sn;
function wj() {
  const e = aj();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        a = (n = { callback: r, next: null, prev: n });
      return (
        a.prev ? (a.prev.next = a) : (t = a),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            a.next ? (a.next.prev = a.prev) : (n = a.prev),
            a.prev ? (a.prev.next = a.next) : (t = a.next));
        }
      );
    },
  };
}
const m0 = { notify() {}, get: () => [] };
function xj(e, t) {
  let n,
    r = m0;
  function i(c) {
    return u(), r.subscribe(c);
  }
  function a() {
    r.notify();
  }
  function o() {
    f.onStateChange && f.onStateChange();
  }
  function l() {
    return !!n;
  }
  function u() {
    n || ((n = t ? t.addNestedSub(o) : e.subscribe(o)), (r = wj()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = m0));
  }
  const f = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: o,
    isSubscribed: l,
    trySubscribe: u,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return f;
}
const Sj =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  _j = Sj ? E.useLayoutEffect : E.useEffect;
function Oj({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  noopCheck: a = "once",
}) {
  const o = E.useMemo(() => {
      const s = xj(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: a,
      };
    }, [e, r, i, a]),
    l = E.useMemo(() => e.getState(), [e]);
  _j(() => {
    const { subscription: s } = o;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      l !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [o, l]);
  const u = t || Zr;
  return E.createElement(u.Provider, { value: o }, n);
}
function sO(e = Zr) {
  const t = e === Zr ? nO : zy(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Pj = sO();
function Ej(e = Zr) {
  const t = e === Zr ? Pj : sO(e);
  return function () {
    return t().dispatch;
  };
}
const kt = Ej();
uj(nj.useSyncExternalStoreWithSelector);
ij(By.unstable_batchedUpdates);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ue() {
  return (
    (Ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ue.apply(this, arguments)
  );
}
var Je;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Je || (Je = {}));
const g0 = "popstate";
function Aj(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: a, search: o, hash: l } = r.location;
    return Sl(
      "",
      { pathname: a, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : hu(i);
  }
  return $j(t, n, null, e);
}
function ce(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ja(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Tj() {
  return Math.random().toString(36).substr(2, 8);
}
function b0(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Sl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ue(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Sr(t) : t,
      { state: n, key: (t && t.key) || r || Tj() }
    )
  );
}
function hu(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Sr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function $j(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    l = Je.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), o.replaceState(Ue({}, o.state, { idx: s }), ""));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    l = Je.Pop;
    let b = f(),
      g = b == null ? null : b - s;
    (s = b), u && u({ action: l, location: v.location, delta: g });
  }
  function d(b, g) {
    l = Je.Push;
    let y = Sl(v.location, b, g);
    n && n(y, b), (s = f() + 1);
    let w = b0(y, s),
      h = v.createHref(y);
    try {
      o.pushState(w, "", h);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      i.location.assign(h);
    }
    a && u && u({ action: l, location: v.location, delta: 1 });
  }
  function p(b, g) {
    l = Je.Replace;
    let y = Sl(v.location, b, g);
    n && n(y, b), (s = f());
    let w = b0(y, s),
      h = v.createHref(y);
    o.replaceState(w, "", h),
      a && u && u({ action: l, location: v.location, delta: 0 });
  }
  function m(b) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
      y = typeof b == "string" ? b : hu(b);
    return (
      ce(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          y
      ),
      new URL(y, g)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(b) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(g0, c),
        (u = b),
        () => {
          i.removeEventListener(g0, c), (u = null);
        }
      );
    },
    createHref(b) {
      return t(i, b);
    },
    createURL: m,
    encodeLocation(b) {
      let g = m(b);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: d,
    replace: p,
    go(b) {
      return o.go(b);
    },
  };
  return v;
}
var Xe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Xe || (Xe = {}));
const Cj = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function jj(e) {
  return e.index === !0;
}
function wh(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, a) => {
      let o = [...n, a],
        l = typeof i.id == "string" ? i.id : o.join("-");
      if (
        (ce(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        ce(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        jj(i))
      ) {
        let u = Ue({}, i, t(i), { id: l });
        return (r[l] = u), u;
      } else {
        let u = Ue({}, i, t(i), { id: l, children: void 0 });
        return (
          (r[l] = u), i.children && (u.children = wh(i.children, t, o, r)), u
        );
      }
    })
  );
}
function sa(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Sr(t) : t,
    i = vu(r.pathname || "/", n);
  if (i == null) return null;
  let a = cO(e);
  Mj(a);
  let o = null;
  for (let l = 0; o == null && l < a.length; ++l) o = Uj(a[l], Kj(i));
  return o;
}
function kj(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function cO(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (a, o, l) => {
    let u = {
      relativePath: l === void 0 ? a.path || "" : l,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a,
    };
    u.relativePath.startsWith("/") &&
      (ce(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = qr([r, u.relativePath]),
      f = n.concat(u);
    a.children &&
      a.children.length > 0 &&
      (ce(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      cO(a.children, t, f, s)),
      !(a.path == null && !a.index) &&
        t.push({ path: s, score: zj(s, a.index), routesMeta: f });
  };
  return (
    e.forEach((a, o) => {
      var l;
      if (a.path === "" || !((l = a.path) != null && l.includes("?"))) i(a, o);
      else for (let u of fO(a.path)) i(a, o, u);
    }),
    t
  );
}
function fO(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [a, ""] : [a];
  let o = fO(r.join("/")),
    l = [];
  return (
    l.push(...o.map((u) => (u === "" ? a : [a, u].join("/")))),
    i && l.push(...o),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Mj(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Fj(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Nj = /^:\w+$/,
  Ij = 3,
  Dj = 2,
  Rj = 1,
  Lj = 10,
  Bj = -2,
  w0 = (e) => e === "*";
function zj(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(w0) && (r += Bj),
    t && (r += Dj),
    n
      .filter((i) => !w0(i))
      .reduce((i, a) => i + (Nj.test(a) ? Ij : a === "" ? Rj : Lj), r)
  );
}
function Fj(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Uj(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    a = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o],
      u = o === n.length - 1,
      s = i === "/" ? t : t.slice(i.length) || "/",
      f = Wj(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        s
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let c = l.route;
    a.push({
      params: r,
      pathname: qr([i, f.pathname]),
      pathnameBase: Xj(qr([i, f.pathnameBase])),
      route: c,
    }),
      f.pathnameBase !== "/" && (i = qr([i, f.pathnameBase]));
  }
  return a;
}
function Wj(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Hj(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((s, f, c) => {
      if (f === "*") {
        let d = l[c] || "";
        o = a.slice(0, a.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (s[f] = Vj(l[c] || "", f)), s;
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function Hj(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ja(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Kj(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ja(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Vj(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ja(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function vu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function qj(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Sr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Gj(n, t)) : t,
    search: Yj(r),
    hash: Qj(i),
  };
}
function Gj(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Hd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Vy(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function dO(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Sr(e))
    : ((i = Ue({}, e)),
      ce(
        !i.pathname || !i.pathname.includes("?"),
        Hd("?", "pathname", "search", i)
      ),
      ce(
        !i.pathname || !i.pathname.includes("#"),
        Hd("#", "pathname", "hash", i)
      ),
      ce(!i.search || !i.search.includes("#"), Hd("#", "search", "hash", i)));
  let a = e === "" || i.pathname === "",
    o = a ? "/" : i.pathname,
    l;
  if (r || o == null) l = n;
  else {
    let c = t.length - 1;
    if (o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) d.shift(), (c -= 1);
      i.pathname = d.join("/");
    }
    l = c >= 0 ? t[c] : "/";
  }
  let u = qj(i, l),
    s = o && o !== "/" && o.endsWith("/"),
    f = (a || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u;
}
const qr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Xj = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Yj = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Qj = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class qy {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function pO(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const hO = ["post", "put", "patch", "delete"],
  Zj = new Set(hO),
  Jj = ["get", ...hO],
  ek = new Set(Jj),
  tk = new Set([301, 302, 303, 307, 308]),
  nk = new Set([307, 308]),
  Kd = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  rk = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  _o = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  vO = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ik = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function ak(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  ce(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let M = e.detectErrorBoundary;
    i = (I) => ({ hasErrorBoundary: M(I) });
  } else i = ik;
  let a = {},
    o = wh(e.routes, i, void 0, a),
    l,
    u = e.basename || "/",
    s = Ue({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    f = null,
    c = new Set(),
    d = null,
    p = null,
    m = null,
    v = e.hydrationData != null,
    b = sa(o, e.history.location, u),
    g = null;
  if (b == null) {
    let M = cn(404, { pathname: e.history.location.pathname }),
      { matches: I, route: U } = T0(o);
    (b = I), (g = { [U.id]: M });
  }
  let y =
      !b.some((M) => M.route.lazy) &&
      (!b.some((M) => M.route.loader) || e.hydrationData != null),
    w,
    h = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: b,
      initialized: y,
      navigation: Kd,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map(),
    },
    x = Je.Pop,
    S = !1,
    _,
    O = !1,
    C = !1,
    A = [],
    k = [],
    $ = new Map(),
    D = 0,
    N = -1,
    z = new Map(),
    R = new Set(),
    W = new Map(),
    j = new Map(),
    B = new Map(),
    K = !1;
  function Z() {
    return (
      (f = e.history.listen((M) => {
        let { action: I, location: U, delta: X } = M;
        if (K) {
          K = !1;
          return;
        }
        ja(
          B.size === 0 || X != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let ae = ng({
          currentLocation: h.location,
          nextLocation: U,
          historyAction: I,
        });
        if (ae && X != null) {
          (K = !0),
            e.history.go(X * -1),
            Cu(ae, {
              state: "blocked",
              location: U,
              proceed() {
                Cu(ae, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: U,
                }),
                  e.history.go(X);
              },
              reset() {
                let re = new Map(h.blockers);
                re.set(ae, _o), ie({ blockers: re });
              },
            });
          return;
        }
        return vt(I, U);
      })),
      h.initialized || vt(Je.Pop, h.location),
      w
    );
  }
  function V() {
    f && f(),
      c.clear(),
      _ && _.abort(),
      h.fetchers.forEach((M, I) => Ar(I)),
      h.blockers.forEach((M, I) => tg(I));
  }
  function oe(M) {
    return c.add(M), () => c.delete(M);
  }
  function ie(M) {
    (h = Ue({}, h, M)), c.forEach((I) => I(h));
  }
  function De(M, I) {
    var U, X;
    let ae =
        h.actionData != null &&
        h.navigation.formMethod != null &&
        $n(h.navigation.formMethod) &&
        h.navigation.state === "loading" &&
        ((U = M.state) == null ? void 0 : U._isRedirect) !== !0,
      re;
    I.actionData
      ? Object.keys(I.actionData).length > 0
        ? (re = I.actionData)
        : (re = null)
      : ae
      ? (re = h.actionData)
      : (re = null);
    let le = I.loaderData
        ? A0(h.loaderData, I.loaderData, I.matches || [], I.errors)
        : h.loaderData,
      ee = h.blockers;
    ee.size > 0 && ((ee = new Map(ee)), ee.forEach((Fe, Ot) => ee.set(Ot, _o)));
    let J =
      S === !0 ||
      (h.navigation.formMethod != null &&
        $n(h.navigation.formMethod) &&
        ((X = M.state) == null ? void 0 : X._isRedirect) !== !0);
    l && ((o = l), (l = void 0)),
      O ||
        x === Je.Pop ||
        (x === Je.Push
          ? e.history.push(M, M.state)
          : x === Je.Replace && e.history.replace(M, M.state)),
      ie(
        Ue({}, I, {
          actionData: re,
          loaderData: le,
          historyAction: x,
          location: M,
          initialized: !0,
          navigation: Kd,
          revalidation: "idle",
          restoreScrollPosition: ig(M, I.matches || h.matches),
          preventScrollReset: J,
          blockers: ee,
        })
      ),
      (x = Je.Pop),
      (S = !1),
      (O = !1),
      (C = !1),
      (A = []),
      (k = []);
  }
  async function ut(M, I) {
    if (typeof M == "number") {
      e.history.go(M);
      return;
    }
    let U = xh(
        h.location,
        h.matches,
        u,
        s.v7_prependBasename,
        M,
        I == null ? void 0 : I.fromRouteId,
        I == null ? void 0 : I.relative
      ),
      {
        path: X,
        submission: ae,
        error: re,
      } = x0(s.v7_normalizeFormMethod, !1, U, I),
      le = h.location,
      ee = Sl(h.location, X, I && I.state);
    ee = Ue({}, ee, e.history.encodeLocation(ee));
    let J = I && I.replace != null ? I.replace : void 0,
      Fe = Je.Push;
    J === !0
      ? (Fe = Je.Replace)
      : J === !1 ||
        (ae != null &&
          $n(ae.formMethod) &&
          ae.formAction === h.location.pathname + h.location.search &&
          (Fe = Je.Replace));
    let Ot =
        I && "preventScrollReset" in I ? I.preventScrollReset === !0 : void 0,
      ge = ng({ currentLocation: le, nextLocation: ee, historyAction: Fe });
    if (ge) {
      Cu(ge, {
        state: "blocked",
        location: ee,
        proceed() {
          Cu(ge, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ee,
          }),
            ut(M, I);
        },
        reset() {
          let Ee = new Map(h.blockers);
          Ee.set(ge, _o), ie({ blockers: Ee });
        },
      });
      return;
    }
    return await vt(Fe, ee, {
      submission: ae,
      pendingError: re,
      preventScrollReset: Ot,
      replace: I && I.replace,
    });
  }
  function qe() {
    if (
      (yt(),
      ie({ revalidation: "loading" }),
      h.navigation.state !== "submitting")
    ) {
      if (h.navigation.state === "idle") {
        vt(h.historyAction, h.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      vt(x || h.historyAction, h.navigation.location, {
        overrideNavigation: h.navigation,
      });
    }
  }
  async function vt(M, I, U) {
    _ && _.abort(),
      (_ = null),
      (x = M),
      (O = (U && U.startUninterruptedRevalidation) === !0),
      uT(h.location, h.matches),
      (S = (U && U.preventScrollReset) === !0);
    let X = l || o,
      ae = U && U.overrideNavigation,
      re = sa(X, I, u);
    if (!re) {
      let Ee = cn(404, { pathname: I.pathname }),
        { matches: Ge, route: li } = T0(X);
      fd(), De(I, { matches: Ge, loaderData: {}, errors: { [li.id]: Ee } });
      return;
    }
    if (
      h.initialized &&
      !C &&
      ck(h.location, I) &&
      !(U && U.submission && $n(U.submission.formMethod))
    ) {
      De(I, { matches: re });
      return;
    }
    _ = new AbortController();
    let le = Po(e.history, I, _.signal, U && U.submission),
      ee,
      J;
    if (U && U.pendingError) J = { [ca(re).route.id]: U.pendingError };
    else if (U && U.submission && $n(U.submission.formMethod)) {
      let Ee = await G(le, I, U.submission, re, { replace: U.replace });
      if (Ee.shortCircuited) return;
      (ee = Ee.pendingActionData),
        (J = Ee.pendingActionError),
        (ae = Vd(I, U.submission)),
        (le = new Request(le.url, { signal: le.signal }));
    }
    let {
      shortCircuited: Fe,
      loaderData: Ot,
      errors: ge,
    } = await ne(
      le,
      I,
      re,
      ae,
      U && U.submission,
      U && U.fetcherSubmission,
      U && U.replace,
      ee,
      J
    );
    Fe ||
      ((_ = null),
      De(
        I,
        Ue({ matches: re }, ee ? { actionData: ee } : {}, {
          loaderData: Ot,
          errors: ge,
        })
      ));
  }
  async function G(M, I, U, X, ae) {
    ae === void 0 && (ae = {}), yt();
    let re = hk(I, U);
    ie({ navigation: re });
    let le,
      ee = _h(X, I);
    if (!ee.route.action && !ee.route.lazy)
      le = {
        type: Xe.error,
        error: cn(405, {
          method: M.method,
          pathname: I.pathname,
          routeId: ee.route.id,
        }),
      };
    else if (((le = await Oo("action", M, ee, X, a, i, u)), M.signal.aborted))
      return { shortCircuited: !0 };
    if (ba(le)) {
      let J;
      return (
        ae && ae.replace != null
          ? (J = ae.replace)
          : (J = le.location === h.location.pathname + h.location.search),
        await je(h, le, { submission: U, replace: J }),
        { shortCircuited: !0 }
      );
    }
    if (Zo(le)) {
      let J = ca(X, ee.route.id);
      return (
        (ae && ae.replace) !== !0 && (x = Je.Push),
        {
          pendingActionData: {},
          pendingActionError: { [J.route.id]: le.error },
        }
      );
    }
    if (wi(le)) throw cn(400, { type: "defer-action" });
    return { pendingActionData: { [ee.route.id]: le.data } };
  }
  async function ne(M, I, U, X, ae, re, le, ee, J) {
    let Fe = X || Vd(I, ae),
      Ot = ae || re || j0(Fe),
      ge = l || o,
      [Ee, Ge] = S0(e.history, h, U, Ot, I, C, A, k, W, R, ge, u, ee, J);
    if (
      (fd(
        (_e) =>
          !(U && U.some((On) => On.route.id === _e)) ||
          (Ee && Ee.some((On) => On.route.id === _e))
      ),
      (N = ++D),
      Ee.length === 0 && Ge.length === 0)
    ) {
      let _e = Wi();
      return (
        De(
          I,
          Ue(
            { matches: U, loaderData: {}, errors: J || null },
            ee ? { actionData: ee } : {},
            _e ? { fetchers: new Map(h.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!O) {
      Ge.forEach((On) => {
        let Tr = h.fetchers.get(On.key),
          yd = Eo(void 0, Tr ? Tr.data : void 0);
        h.fetchers.set(On.key, yd);
      });
      let _e = ee || h.actionData;
      ie(
        Ue(
          { navigation: Fe },
          _e
            ? Object.keys(_e).length === 0
              ? { actionData: null }
              : { actionData: _e }
            : {},
          Ge.length > 0 ? { fetchers: new Map(h.fetchers) } : {}
        )
      );
    }
    Ge.forEach((_e) => {
      $.has(_e.key) && _t(_e.key),
        _e.controller && $.set(_e.key, _e.controller);
    });
    let li = () => Ge.forEach((_e) => _t(_e.key));
    _ && _.signal.addEventListener("abort", li);
    let {
      results: ui,
      loaderResults: po,
      fetcherResults: dd,
    } = await ze(h.matches, U, Ee, Ge, M);
    if (M.signal.aborted) return { shortCircuited: !0 };
    _ && _.signal.removeEventListener("abort", li),
      Ge.forEach((_e) => $.delete(_e.key));
    let Jn = $0(ui);
    if (Jn) {
      if (Jn.idx >= Ee.length) {
        let _e = Ge[Jn.idx - Ee.length].key;
        R.add(_e);
      }
      return await je(h, Jn.result, { replace: le }), { shortCircuited: !0 };
    }
    let { loaderData: er, errors: ju } = E0(h, U, Ee, po, J, Ge, dd, j);
    j.forEach((_e, On) => {
      _e.subscribe((Tr) => {
        (Tr || _e.done) && j.delete(On);
      });
    });
    let pd = Wi(),
      hd = fo(N),
      vd = pd || hd || Ge.length > 0;
    return Ue(
      { loaderData: er, errors: ju },
      vd ? { fetchers: new Map(h.fetchers) } : {}
    );
  }
  function ue(M) {
    return h.fetchers.get(M) || rk;
  }
  function F(M, I, U, X) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    $.has(M) && _t(M);
    let ae = l || o,
      re = xh(
        h.location,
        h.matches,
        u,
        s.v7_prependBasename,
        U,
        I,
        X == null ? void 0 : X.relative
      ),
      le = sa(ae, re, u);
    if (!le) {
      zt(M, I, cn(404, { pathname: re }));
      return;
    }
    let {
      path: ee,
      submission: J,
      error: Fe,
    } = x0(s.v7_normalizeFormMethod, !0, re, X);
    if (Fe) {
      zt(M, I, Fe);
      return;
    }
    let Ot = _h(le, ee);
    if (((S = (X && X.preventScrollReset) === !0), J && $n(J.formMethod))) {
      Be(M, I, ee, Ot, le, J);
      return;
    }
    W.set(M, { routeId: I, path: ee }), pe(M, I, ee, Ot, le, J);
  }
  async function Be(M, I, U, X, ae, re) {
    if ((yt(), W.delete(M), !X.route.action && !X.route.lazy)) {
      let nt = cn(405, { method: re.formMethod, pathname: U, routeId: I });
      zt(M, I, nt);
      return;
    }
    let le = h.fetchers.get(M),
      ee = vk(re, le);
    h.fetchers.set(M, ee), ie({ fetchers: new Map(h.fetchers) });
    let J = new AbortController(),
      Fe = Po(e.history, U, J.signal, re);
    $.set(M, J);
    let Ot = D,
      ge = await Oo("action", Fe, X, ae, a, i, u);
    if (Fe.signal.aborted) {
      $.get(M) === J && $.delete(M);
      return;
    }
    if (ba(ge))
      if (($.delete(M), N > Ot)) {
        let nt = Xi(void 0);
        h.fetchers.set(M, nt), ie({ fetchers: new Map(h.fetchers) });
        return;
      } else {
        R.add(M);
        let nt = Eo(re);
        return (
          h.fetchers.set(M, nt),
          ie({ fetchers: new Map(h.fetchers) }),
          je(h, ge, { fetcherSubmission: re })
        );
      }
    if (Zo(ge)) {
      zt(M, I, ge.error);
      return;
    }
    if (wi(ge)) throw cn(400, { type: "defer-action" });
    let Ee = h.navigation.location || h.location,
      Ge = Po(e.history, Ee, J.signal),
      li = l || o,
      ui =
        h.navigation.state !== "idle"
          ? sa(li, h.navigation.location, u)
          : h.matches;
    ce(ui, "Didn't find any matches after fetcher action");
    let po = ++D;
    z.set(M, po);
    let dd = Eo(re, ge.data);
    h.fetchers.set(M, dd);
    let [Jn, er] = S0(
      e.history,
      h,
      ui,
      re,
      Ee,
      C,
      A,
      k,
      W,
      R,
      li,
      u,
      { [X.route.id]: ge.data },
      void 0
    );
    er
      .filter((nt) => nt.key !== M)
      .forEach((nt) => {
        let ho = nt.key,
          ag = h.fetchers.get(ho),
          cT = Eo(void 0, ag ? ag.data : void 0);
        h.fetchers.set(ho, cT),
          $.has(ho) && _t(ho),
          nt.controller && $.set(ho, nt.controller);
      }),
      ie({ fetchers: new Map(h.fetchers) });
    let ju = () => er.forEach((nt) => _t(nt.key));
    J.signal.addEventListener("abort", ju);
    let {
      results: pd,
      loaderResults: hd,
      fetcherResults: vd,
    } = await ze(h.matches, ui, Jn, er, Ge);
    if (J.signal.aborted) return;
    J.signal.removeEventListener("abort", ju),
      z.delete(M),
      $.delete(M),
      er.forEach((nt) => $.delete(nt.key));
    let _e = $0(pd);
    if (_e) {
      if (_e.idx >= Jn.length) {
        let nt = er[_e.idx - Jn.length].key;
        R.add(nt);
      }
      return je(h, _e.result);
    }
    let { loaderData: On, errors: Tr } = E0(
      h,
      h.matches,
      Jn,
      hd,
      void 0,
      er,
      vd,
      j
    );
    if (h.fetchers.has(M)) {
      let nt = Xi(ge.data);
      h.fetchers.set(M, nt);
    }
    let yd = fo(po);
    h.navigation.state === "loading" && po > N
      ? (ce(x, "Expected pending action"),
        _ && _.abort(),
        De(h.navigation.location, {
          matches: ui,
          loaderData: On,
          errors: Tr,
          fetchers: new Map(h.fetchers),
        }))
      : (ie(
          Ue(
            { errors: Tr, loaderData: A0(h.loaderData, On, ui, Tr) },
            yd || er.length > 0 ? { fetchers: new Map(h.fetchers) } : {}
          )
        ),
        (C = !1));
  }
  async function pe(M, I, U, X, ae, re) {
    let le = h.fetchers.get(M),
      ee = Eo(re, le ? le.data : void 0);
    h.fetchers.set(M, ee), ie({ fetchers: new Map(h.fetchers) });
    let J = new AbortController(),
      Fe = Po(e.history, U, J.signal);
    $.set(M, J);
    let Ot = D,
      ge = await Oo("loader", Fe, X, ae, a, i, u);
    if (
      (wi(ge) && (ge = (await gO(ge, Fe.signal, !0)) || ge),
      $.get(M) === J && $.delete(M),
      Fe.signal.aborted)
    )
      return;
    if (ba(ge))
      if (N > Ot) {
        let Ge = Xi(void 0);
        h.fetchers.set(M, Ge), ie({ fetchers: new Map(h.fetchers) });
        return;
      } else {
        R.add(M), await je(h, ge);
        return;
      }
    if (Zo(ge)) {
      let Ge = ca(h.matches, I);
      h.fetchers.delete(M),
        ie({
          fetchers: new Map(h.fetchers),
          errors: { [Ge.route.id]: ge.error },
        });
      return;
    }
    ce(!wi(ge), "Unhandled fetcher deferred data");
    let Ee = Xi(ge.data);
    h.fetchers.set(M, Ee), ie({ fetchers: new Map(h.fetchers) });
  }
  async function je(M, I, U) {
    let {
      submission: X,
      fetcherSubmission: ae,
      replace: re,
    } = U === void 0 ? {} : U;
    I.revalidate && (C = !0);
    let le = Sl(M.location, I.location, { _isRedirect: !0 });
    if ((ce(le, "Expected a location on the redirect navigation"), n)) {
      let Ee = !1;
      if (I.reloadDocument) Ee = !0;
      else if (vO.test(I.location)) {
        const Ge = e.history.createURL(I.location);
        Ee = Ge.origin !== t.location.origin || vu(Ge.pathname, u) == null;
      }
      if (Ee) {
        re ? t.location.replace(I.location) : t.location.assign(I.location);
        return;
      }
    }
    _ = null;
    let ee = re === !0 ? Je.Replace : Je.Push,
      { formMethod: J, formAction: Fe, formEncType: Ot } = M.navigation;
    !X && !ae && J && Fe && Ot && (X = j0(M.navigation));
    let ge = X || ae;
    if (nk.has(I.status) && ge && $n(ge.formMethod))
      await vt(ee, le, {
        submission: Ue({}, ge, { formAction: I.location }),
        preventScrollReset: S,
      });
    else {
      let Ee = Vd(le, X);
      await vt(ee, le, {
        overrideNavigation: Ee,
        fetcherSubmission: ae,
        preventScrollReset: S,
      });
    }
  }
  async function ze(M, I, U, X, ae) {
    let re = await Promise.all([
        ...U.map((J) => Oo("loader", ae, J, I, a, i, u)),
        ...X.map((J) =>
          J.matches && J.match && J.controller
            ? Oo(
                "loader",
                Po(e.history, J.path, J.controller.signal),
                J.match,
                J.matches,
                a,
                i,
                u
              )
            : { type: Xe.error, error: cn(404, { pathname: J.path }) }
        ),
      ]),
      le = re.slice(0, U.length),
      ee = re.slice(U.length);
    return (
      await Promise.all([
        C0(
          M,
          U,
          le,
          le.map(() => ae.signal),
          !1,
          h.loaderData
        ),
        C0(
          M,
          X.map((J) => J.match),
          ee,
          X.map((J) => (J.controller ? J.controller.signal : null)),
          !0
        ),
      ]),
      { results: re, loaderResults: le, fetcherResults: ee }
    );
  }
  function yt() {
    (C = !0),
      A.push(...fd()),
      W.forEach((M, I) => {
        $.has(I) && (k.push(I), _t(I));
      });
  }
  function zt(M, I, U) {
    let X = ca(h.matches, I);
    Ar(M), ie({ errors: { [X.route.id]: U }, fetchers: new Map(h.fetchers) });
  }
  function Ar(M) {
    let I = h.fetchers.get(M);
    $.has(M) && !(I && I.state === "loading" && z.has(M)) && _t(M),
      W.delete(M),
      z.delete(M),
      R.delete(M),
      h.fetchers.delete(M);
  }
  function _t(M) {
    let I = $.get(M);
    ce(I, "Expected fetch controller: " + M), I.abort(), $.delete(M);
  }
  function zn(M) {
    for (let I of M) {
      let U = ue(I),
        X = Xi(U.data);
      h.fetchers.set(I, X);
    }
  }
  function Wi() {
    let M = [],
      I = !1;
    for (let U of R) {
      let X = h.fetchers.get(U);
      ce(X, "Expected fetcher: " + U),
        X.state === "loading" && (R.delete(U), M.push(U), (I = !0));
    }
    return zn(M), I;
  }
  function fo(M) {
    let I = [];
    for (let [U, X] of z)
      if (X < M) {
        let ae = h.fetchers.get(U);
        ce(ae, "Expected fetcher: " + U),
          ae.state === "loading" && (_t(U), z.delete(U), I.push(U));
      }
    return zn(I), I.length > 0;
  }
  function $u(M, I) {
    let U = h.blockers.get(M) || _o;
    return B.get(M) !== I && B.set(M, I), U;
  }
  function tg(M) {
    h.blockers.delete(M), B.delete(M);
  }
  function Cu(M, I) {
    let U = h.blockers.get(M) || _o;
    ce(
      (U.state === "unblocked" && I.state === "blocked") ||
        (U.state === "blocked" && I.state === "blocked") ||
        (U.state === "blocked" && I.state === "proceeding") ||
        (U.state === "blocked" && I.state === "unblocked") ||
        (U.state === "proceeding" && I.state === "unblocked"),
      "Invalid blocker state transition: " + U.state + " -> " + I.state
    );
    let X = new Map(h.blockers);
    X.set(M, I), ie({ blockers: X });
  }
  function ng(M) {
    let { currentLocation: I, nextLocation: U, historyAction: X } = M;
    if (B.size === 0) return;
    B.size > 1 && ja(!1, "A router only supports one blocker at a time");
    let ae = Array.from(B.entries()),
      [re, le] = ae[ae.length - 1],
      ee = h.blockers.get(re);
    if (
      !(ee && ee.state === "proceeding") &&
      le({ currentLocation: I, nextLocation: U, historyAction: X })
    )
      return re;
  }
  function fd(M) {
    let I = [];
    return (
      j.forEach((U, X) => {
        (!M || M(X)) && (U.cancel(), I.push(X), j.delete(X));
      }),
      I
    );
  }
  function lT(M, I, U) {
    if (((d = M), (m = I), (p = U || null), !v && h.navigation === Kd)) {
      v = !0;
      let X = ig(h.location, h.matches);
      X != null && ie({ restoreScrollPosition: X });
    }
    return () => {
      (d = null), (m = null), (p = null);
    };
  }
  function rg(M, I) {
    return (
      (p &&
        p(
          M,
          I.map((X) => kj(X, h.loaderData))
        )) ||
      M.key
    );
  }
  function uT(M, I) {
    if (d && m) {
      let U = rg(M, I);
      d[U] = m();
    }
  }
  function ig(M, I) {
    if (d) {
      let U = rg(M, I),
        X = d[U];
      if (typeof X == "number") return X;
    }
    return null;
  }
  function sT(M) {
    (a = {}), (l = wh(M, i, void 0, a));
  }
  return (
    (w = {
      get basename() {
        return u;
      },
      get state() {
        return h;
      },
      get routes() {
        return o;
      },
      initialize: Z,
      subscribe: oe,
      enableScrollRestoration: lT,
      navigate: ut,
      fetch: F,
      revalidate: qe,
      createHref: (M) => e.history.createHref(M),
      encodeLocation: (M) => e.history.encodeLocation(M),
      getFetcher: ue,
      deleteFetcher: Ar,
      dispose: V,
      getBlocker: $u,
      deleteBlocker: tg,
      _internalFetchControllers: $,
      _internalActiveDeferreds: j,
      _internalSetRoutes: sT,
    }),
    w
  );
}
function ok(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function xh(e, t, n, r, i, a, o) {
  let l, u;
  if (a != null && o !== "path") {
    l = [];
    for (let f of t)
      if ((l.push(f), f.route.id === a)) {
        u = f;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let s = dO(
    i || ".",
    Vy(l).map((f) => f.pathnameBase),
    vu(e.pathname, n) || e.pathname,
    o === "path"
  );
  return (
    i == null && ((s.search = e.search), (s.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !Gy(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : qr([n, s.pathname])),
    hu(s)
  );
}
function x0(e, t, n, r) {
  if (!r || !ok(r)) return { path: n };
  if (r.formMethod && !pk(r.formMethod))
    return { path: n, error: cn(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: cn(400, { type: "invalid-body" }) }),
    a = r.formMethod || "get",
    o = e ? a.toUpperCase() : a.toLowerCase(),
    l = mO(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!$n(o)) return i();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((p, m) => {
              let [v, b] = m;
              return (
                "" +
                p +
                v +
                "=" +
                b +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!$n(o)) return i();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ce(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = Sh(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = Sh(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = P0(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = P0(u));
    } catch {
      return i();
    }
  let f = {
    formMethod: o,
    formAction: l,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if ($n(f.formMethod)) return { path: n, submission: f };
  let c = Sr(n);
  return (
    t && c.search && Gy(c.search) && u.append("index", ""),
    (c.search = "?" + u),
    { path: hu(c), submission: f }
  );
}
function lk(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function S0(e, t, n, r, i, a, o, l, u, s, f, c, d, p) {
  let m = p ? Object.values(p)[0] : d ? Object.values(d)[0] : void 0,
    v = e.createURL(t.location),
    b = e.createURL(i),
    g = p ? Object.keys(p)[0] : void 0,
    w = lk(n, g).filter((x, S) => {
      if (x.route.lazy) return !0;
      if (x.route.loader == null) return !1;
      if (uk(t.loaderData, t.matches[S], x) || o.some((C) => C === x.route.id))
        return !0;
      let _ = t.matches[S],
        O = x;
      return _0(
        x,
        Ue(
          {
            currentUrl: v,
            currentParams: _.params,
            nextUrl: b,
            nextParams: O.params,
          },
          r,
          {
            actionResult: m,
            defaultShouldRevalidate:
              a ||
              v.pathname + v.search === b.pathname + b.search ||
              v.search !== b.search ||
              yO(_, O),
          }
        )
      );
    }),
    h = [];
  return (
    u.forEach((x, S) => {
      if (!n.some((k) => k.route.id === x.routeId)) return;
      let _ = sa(f, x.path, c);
      if (!_) {
        h.push({
          key: S,
          routeId: x.routeId,
          path: x.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let O = t.fetchers.get(S),
        C = _h(_, x.path),
        A = !1;
      s.has(S)
        ? (A = !1)
        : l.includes(S)
        ? (A = !0)
        : O && O.state !== "idle" && O.data === void 0
        ? (A = a)
        : (A = _0(
            C,
            Ue(
              {
                currentUrl: v,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: b,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: m, defaultShouldRevalidate: a }
            )
          )),
        A &&
          h.push({
            key: S,
            routeId: x.routeId,
            path: x.path,
            matches: _,
            match: C,
            controller: new AbortController(),
          });
    }),
    [w, h]
  );
}
function uk(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function yO(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function _0(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function O0(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  ce(i, "No route found in manifest");
  let a = {};
  for (let o in r) {
    let u = i[o] !== void 0 && o !== "hasErrorBoundary";
    ja(
      !u,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !u && !Cj.has(o) && (a[o] = r[o]);
  }
  Object.assign(i, a), Object.assign(i, Ue({}, t(i), { lazy: void 0 }));
}
async function Oo(e, t, n, r, i, a, o, l) {
  l === void 0 && (l = {});
  let u,
    s,
    f,
    c = (m) => {
      let v,
        b = new Promise((g, y) => (v = y));
      return (
        (f = () => v()),
        t.signal.addEventListener("abort", f),
        Promise.race([
          m({ request: t, params: n.params, context: l.requestContext }),
          b,
        ])
      );
    };
  try {
    let m = n.route[e];
    if (n.route.lazy)
      if (m) {
        let v,
          b = await Promise.all([
            c(m).catch((g) => {
              v = g;
            }),
            O0(n.route, a, i),
          ]);
        if (v) throw v;
        s = b[0];
      } else if ((await O0(n.route, a, i), (m = n.route[e]), m)) s = await c(m);
      else if (e === "action") {
        let v = new URL(t.url),
          b = v.pathname + v.search;
        throw cn(405, { method: t.method, pathname: b, routeId: n.route.id });
      } else return { type: Xe.data, data: void 0 };
    else if (m) s = await c(m);
    else {
      let v = new URL(t.url),
        b = v.pathname + v.search;
      throw cn(404, { pathname: b });
    }
    ce(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (m) {
    (u = Xe.error), (s = m);
  } finally {
    f && t.signal.removeEventListener("abort", f);
  }
  if (dk(s)) {
    let m = s.status;
    if (tk.has(m)) {
      let g = s.headers.get("Location");
      if (
        (ce(
          g,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !vO.test(g))
      )
        g = xh(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, g);
      else if (!l.isStaticRequest) {
        let y = new URL(t.url),
          w = g.startsWith("//") ? new URL(y.protocol + g) : new URL(g),
          h = vu(w.pathname, o) != null;
        w.origin === y.origin && h && (g = w.pathname + w.search + w.hash);
      }
      if (l.isStaticRequest) throw (s.headers.set("Location", g), s);
      return {
        type: Xe.redirect,
        status: m,
        location: g,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (l.isRouteRequest)
      throw { type: u === Xe.error ? Xe.error : Xe.data, response: s };
    let v,
      b = s.headers.get("Content-Type");
    return (
      b && /\bapplication\/json\b/.test(b)
        ? (v = await s.json())
        : (v = await s.text()),
      u === Xe.error
        ? { type: u, error: new qy(m, s.statusText, v), headers: s.headers }
        : { type: Xe.data, data: v, statusCode: s.status, headers: s.headers }
    );
  }
  if (u === Xe.error) return { type: u, error: s };
  if (fk(s)) {
    var d, p;
    return {
      type: Xe.deferred,
      deferredData: s,
      statusCode: (d = s.init) == null ? void 0 : d.status,
      headers:
        ((p = s.init) == null ? void 0 : p.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: Xe.data, data: s };
}
function Po(e, t, n, r) {
  let i = e.createURL(mO(t)).toString(),
    a = { signal: n };
  if (r && $n(r.formMethod)) {
    let { formMethod: o, formEncType: l } = r;
    (a.method = o.toUpperCase()),
      l === "application/json"
        ? ((a.headers = new Headers({ "Content-Type": l })),
          (a.body = JSON.stringify(r.json)))
        : l === "text/plain"
        ? (a.body = r.text)
        : l === "application/x-www-form-urlencoded" && r.formData
        ? (a.body = Sh(r.formData))
        : (a.body = r.formData);
  }
  return new Request(i, a);
}
function Sh(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function P0(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function sk(e, t, n, r, i) {
  let a = {},
    o = null,
    l,
    u = !1,
    s = {};
  return (
    n.forEach((f, c) => {
      let d = t[c].route.id;
      if (
        (ce(!ba(f), "Cannot handle redirect results in processLoaderData"),
        Zo(f))
      ) {
        let p = ca(e, d),
          m = f.error;
        r && ((m = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[p.route.id] == null && (o[p.route.id] = m),
          (a[d] = void 0),
          u || ((u = !0), (l = pO(f.error) ? f.error.status : 500)),
          f.headers && (s[d] = f.headers);
      } else
        wi(f)
          ? (i.set(d, f.deferredData), (a[d] = f.deferredData.data))
          : (a[d] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !u &&
            (l = f.statusCode),
          f.headers && (s[d] = f.headers);
    }),
    r && ((o = r), (a[Object.keys(r)[0]] = void 0)),
    { loaderData: a, errors: o, statusCode: l || 200, loaderHeaders: s }
  );
}
function E0(e, t, n, r, i, a, o, l) {
  let { loaderData: u, errors: s } = sk(t, n, r, i, l);
  for (let f = 0; f < a.length; f++) {
    let { key: c, match: d, controller: p } = a[f];
    ce(
      o !== void 0 && o[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let m = o[f];
    if (!(p && p.signal.aborted))
      if (Zo(m)) {
        let v = ca(e.matches, d == null ? void 0 : d.route.id);
        (s && s[v.route.id]) || (s = Ue({}, s, { [v.route.id]: m.error })),
          e.fetchers.delete(c);
      } else if (ba(m)) ce(!1, "Unhandled fetcher revalidation redirect");
      else if (wi(m)) ce(!1, "Unhandled fetcher deferred data");
      else {
        let v = Xi(m.data);
        e.fetchers.set(c, v);
      }
  }
  return { loaderData: u, errors: s };
}
function A0(e, t, n, r) {
  let i = Ue({}, t);
  for (let a of n) {
    let o = a.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && a.route.loader && (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function ca(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function T0(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function cn(e, t) {
  let { pathname: n, routeId: r, method: i, type: a } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : a === "defer-action"
          ? (l = "defer() is not supported in actions")
          : a === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        i && n && r
          ? (l =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new qy(e || 500, o, new Error(l), !0)
  );
}
function $0(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ba(n)) return { result: n, idx: t };
  }
}
function mO(e) {
  let t = typeof e == "string" ? Sr(e) : e;
  return hu(Ue({}, t, { hash: "" }));
}
function ck(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function wi(e) {
  return e.type === Xe.deferred;
}
function Zo(e) {
  return e.type === Xe.error;
}
function ba(e) {
  return (e && e.type) === Xe.redirect;
}
function fk(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function dk(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function pk(e) {
  return ek.has(e.toLowerCase());
}
function $n(e) {
  return Zj.has(e.toLowerCase());
}
async function C0(e, t, n, r, i, a) {
  for (let o = 0; o < n.length; o++) {
    let l = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((c) => c.route.id === u.route.id),
      f = s != null && !yO(s, u) && (a && a[u.route.id]) !== void 0;
    if (wi(l) && (i || f)) {
      let c = r[o];
      ce(c, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await gO(l, c, i).then((d) => {
          d && (n[o] = d || n[o]);
        });
    }
  }
}
async function gO(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Xe.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Xe.error, error: i };
      }
    return { type: Xe.data, data: e.deferredData.data };
  }
}
function Gy(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function _h(e, t) {
  let n = typeof t == "string" ? Sr(t).search : t.search;
  if (e[e.length - 1].route.index && Gy(n || "")) return e[e.length - 1];
  let r = Vy(e);
  return r[r.length - 1];
}
function j0(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: a,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (a != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: a,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Vd(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function hk(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Eo(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function vk(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Xi(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xs() {
  return (
    (Xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xs.apply(this, arguments)
  );
}
const kf = E.createContext(null),
  bO = E.createContext(null),
  Mf = E.createContext(null),
  Nf = E.createContext(null),
  ni = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  wO = E.createContext(null);
function If() {
  return E.useContext(Nf) != null;
}
function xO() {
  return If() || ce(!1), E.useContext(Nf).location;
}
function SO(e) {
  E.useContext(Mf).static || E.useLayoutEffect(e);
}
function Df() {
  let { isDataRoute: e } = E.useContext(ni);
  return e ? Ck() : yk();
}
function yk() {
  If() || ce(!1);
  let e = E.useContext(kf),
    { basename: t, navigator: n } = E.useContext(Mf),
    { matches: r } = E.useContext(ni),
    { pathname: i } = xO(),
    a = JSON.stringify(Vy(r).map((u) => u.pathnameBase)),
    o = E.useRef(!1);
  return (
    SO(() => {
      o.current = !0;
    }),
    E.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !o.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let f = dO(u, JSON.parse(a), i, s.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : qr([t, f.pathname])),
          (s.replace ? n.replace : n.push)(f, s.state, s);
      },
      [t, n, a, i, e]
    )
  );
}
const mk = E.createContext(null);
function gk(e) {
  let t = E.useContext(ni).outlet;
  return t && E.createElement(mk.Provider, { value: e }, t);
}
function bk() {
  let { matches: e } = E.useContext(ni),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function wk(e, t, n) {
  If() || ce(!1);
  let { navigator: r } = E.useContext(Mf),
    { matches: i } = E.useContext(ni),
    a = i[i.length - 1],
    o = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : "/";
  a && a.route;
  let u = xO(),
    s;
  if (t) {
    var f;
    let v = typeof t == "string" ? Sr(t) : t;
    l === "/" || ((f = v.pathname) != null && f.startsWith(l)) || ce(!1),
      (s = v);
  } else s = u;
  let c = s.pathname || "/",
    d = l === "/" ? c : c.slice(l.length) || "/",
    p = sa(e, { pathname: d }),
    m = Pk(
      p &&
        p.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, o, v.params),
            pathname: qr([
              l,
              r.encodeLocation
                ? r.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === "/"
                ? l
                : qr([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && m
    ? E.createElement(
        Nf.Provider,
        {
          value: {
            location: Xs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: Je.Pop,
          },
        },
        m
      )
    : m;
}
function xk() {
  let e = $k(),
    t = pO(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    a = null;
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: i }, n) : null,
    a
  );
}
const Sk = E.createElement(xk, null);
class _k extends E.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? E.createElement(
          ni.Provider,
          { value: this.props.routeContext },
          E.createElement(wO.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ok(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = E.useContext(kf);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(ni.Provider, { value: t }, r)
  );
}
function Pk(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let l = a.findIndex(
      (u) => u.route.id && (o == null ? void 0 : o[u.route.id])
    );
    l >= 0 || ce(!1), (a = a.slice(0, Math.min(a.length, l + 1)));
  }
  return a.reduceRight((l, u, s) => {
    let f = u.route.id ? (o == null ? void 0 : o[u.route.id]) : null,
      c = null;
    n && (c = u.route.errorElement || Sk);
    let d = t.concat(a.slice(0, s + 1)),
      p = () => {
        let m;
        return (
          f
            ? (m = c)
            : u.route.Component
            ? (m = E.createElement(u.route.Component, null))
            : u.route.element
            ? (m = u.route.element)
            : (m = l),
          E.createElement(Ok, {
            match: u,
            routeContext: { outlet: l, matches: d, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
      ? E.createElement(_k, {
          location: n.location,
          revalidation: n.revalidation,
          component: c,
          error: f,
          children: p(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var _O = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(_O || {}),
  Ys = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ys || {});
function Ek(e) {
  let t = E.useContext(kf);
  return t || ce(!1), t;
}
function Ak(e) {
  let t = E.useContext(bO);
  return t || ce(!1), t;
}
function Tk(e) {
  let t = E.useContext(ni);
  return t || ce(!1), t;
}
function OO(e) {
  let t = Tk(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ce(!1), n.route.id;
}
function $k() {
  var e;
  let t = E.useContext(wO),
    n = Ak(Ys.UseRouteError),
    r = OO(Ys.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Ck() {
  let { router: e } = Ek(_O.UseNavigateStable),
    t = OO(Ys.UseNavigateStable),
    n = E.useRef(!1);
  return (
    SO(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, a) {
        a === void 0 && (a = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Xs({ fromRouteId: t }, a)));
      },
      [e, t]
    )
  );
}
const jk = "startTransition",
  k0 = AT[jk];
function kk(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, a] = E.useState(n.state),
    { v7_startTransition: o } = r || {},
    l = E.useCallback(
      (c) => {
        o && k0 ? k0(() => a(c)) : a(c);
      },
      [a, o]
    );
  E.useLayoutEffect(() => n.subscribe(l), [n, l]);
  let u = E.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (c) => n.navigate(c),
        push: (c, d, p) =>
          n.navigate(c, {
            state: d,
            preventScrollReset: p == null ? void 0 : p.preventScrollReset,
          }),
        replace: (c, d, p) =>
          n.navigate(c, {
            replace: !0,
            state: d,
            preventScrollReset: p == null ? void 0 : p.preventScrollReset,
          }),
      }),
      [n]
    ),
    s = n.basename || "/",
    f = E.useMemo(
      () => ({ router: n, navigator: u, static: !1, basename: s }),
      [n, u, s]
    );
  return E.createElement(
    E.Fragment,
    null,
    E.createElement(
      kf.Provider,
      { value: f },
      E.createElement(
        bO.Provider,
        { value: i },
        E.createElement(
          Ik,
          {
            basename: s,
            location: i.location,
            navigationType: i.historyAction,
            navigator: u,
          },
          i.initialized
            ? E.createElement(Mk, { routes: n.routes, state: i })
            : t
        )
      )
    ),
    null
  );
}
function Mk(e) {
  let { routes: t, state: n } = e;
  return wk(t, void 0, n);
}
function Nk(e) {
  return gk(e.context);
}
function Ik(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Je.Pop,
    navigator: a,
    static: o = !1,
  } = e;
  If() && ce(!1);
  let l = t.replace(/^\/*/, "/"),
    u = E.useMemo(() => ({ basename: l, navigator: a, static: o }), [l, a, o]);
  typeof r == "string" && (r = Sr(r));
  let {
      pathname: s = "/",
      search: f = "",
      hash: c = "",
      state: d = null,
      key: p = "default",
    } = r,
    m = E.useMemo(() => {
      let v = vu(s, l);
      return v == null
        ? null
        : {
            location: { pathname: v, search: f, hash: c, state: d, key: p },
            navigationType: i,
          };
    }, [l, s, f, c, d, p, i]);
  return m == null
    ? null
    : E.createElement(
        Mf.Provider,
        { value: u },
        E.createElement(Nf.Provider, { children: n, value: m })
      );
}
new Promise(() => {});
function Dk(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: E.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: E.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qs() {
  return (
    (Qs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qs.apply(this, arguments)
  );
}
function Rk(e, t) {
  return ak({
    basename: t == null ? void 0 : t.basename,
    future: Qs({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Aj({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Lk(),
    routes: e,
    mapRouteProperties: Dk,
  }).initialize();
}
function Lk() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Qs({}, t, { errors: Bk(t.errors) })), t;
}
function Bk(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new qy(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let a = window[i.__subType];
        if (typeof a == "function")
          try {
            let o = new a(i.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let a = new Error(i.message);
        (a.stack = ""), (n[r] = a);
      }
    } else n[r] = i;
  return n;
}
var M0;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(M0 || (M0 = {}));
var N0;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(N0 || (N0 = {}));
/*! js-cookie v3.0.5 | MIT */ function Yu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var zk = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function Oh(e, t) {
  function n(i, a, o) {
    if (!(typeof document > "u")) {
      (o = Yu({}, t, o)),
        typeof o.expires == "number" &&
          (o.expires = new Date(Date.now() + o.expires * 864e5)),
        o.expires && (o.expires = o.expires.toUTCString()),
        (i = encodeURIComponent(i)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var l = "";
      for (var u in o)
        o[u] &&
          ((l += "; " + u), o[u] !== !0 && (l += "=" + o[u].split(";")[0]));
      return (document.cookie = i + "=" + e.write(a, i) + l);
    }
  }
  function r(i) {
    if (!(typeof document > "u" || (arguments.length && !i))) {
      for (
        var a = document.cookie ? document.cookie.split("; ") : [],
          o = {},
          l = 0;
        l < a.length;
        l++
      ) {
        var u = a[l].split("="),
          s = u.slice(1).join("=");
        try {
          var f = decodeURIComponent(u[0]);
          if (((o[f] = e.read(s, f)), i === f)) break;
        } catch {}
      }
      return i ? o[i] : o;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (i, a) {
        n(i, "", Yu({}, a, { expires: -1 }));
      },
      withAttributes: function (i) {
        return Oh(this.converter, Yu({}, this.attributes, i));
      },
      withConverter: function (i) {
        return Oh(Yu({}, this.converter, i), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var Fk = Oh(zk, { path: "/" });
async function Ze(e, t = {}) {
  return (
    (t.method = t.method || "GET"),
    (t.headers = t.headers || {}),
    t.method.toUpperCase() !== "GET" &&
      ((t.headers["Content-Type"] =
        t.headers["Content-Type"] || "application/json"),
      (t.headers["XSRF-Token"] = Fk.get("XSRF-TOKEN"))),
    await window.fetch(e, t)
  );
}
const PO = "session/setUser",
  EO = "session/removeUser",
  Xy = (e) => ({ type: PO, payload: e }),
  Uk = () => ({ type: EO }),
  I0 = (e) => async (t) => {
    const { credential: n, password: r } = e,
      a = await (
        await Ze("/api/session", {
          method: "POST",
          body: JSON.stringify({ credential: n, password: r }),
        })
      ).json();
    return t(Xy(a.user)), a;
  },
  Wk = () => async (e) => {
    const t = await Ze("/api/session", { method: "DELETE" });
    return e(Uk()), t;
  },
  Hk = () => async (e) => {
    const t = await Ze("/api/session"),
      n = await t.json();
    return e(Xy(n.user)), t;
  },
  Kk = (e) => async (t) => {
    const { username: n, firstName: r, lastName: i, email: a, password: o } = e,
      u = await (
        await Ze("/api/users", {
          method: "POST",
          body: JSON.stringify({
            username: n,
            firstName: r,
            lastName: i,
            email: a,
            password: o,
          }),
        })
      ).json();
    return u.errors || t(Xy(u.user)), u;
  },
  Vk = { user: null },
  qk = (e = Vk, t) => {
    switch (t.type) {
      case PO:
        return { ...e, user: t.payload };
      case EO:
        return { ...e, user: null, userSpots: [] };
      default:
        return e;
    }
  },
  Gk = "_modal_d9l47_1",
  Xk = "_modal_background_d9l47_1",
  Yk = "_modal_content_d9l47_1",
  qd = { modal: Gk, modal_background: Xk, modal_content: Yk },
  Yy = E.createContext();
function Qk({ children: e }) {
  const t = E.useRef(),
    [n, r] = E.useState(null),
    [i, a] = E.useState(null),
    l = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: a,
      closeModal: () => {
        r(null), typeof i == "function" && (a(null), i());
      },
    };
  return P.jsxs(P.Fragment, {
    children: [
      P.jsx(Yy.Provider, { value: l, children: e }),
      P.jsx("div", { ref: t }),
    ],
  });
}
function Zk() {
  const { modalRef: e, modalContent: t, closeModal: n } = E.useContext(Yy);
  return !e || !e.current || !t
    ? null
    : RC.createPortal(
        P.jsxs("div", {
          id: qd.modal,
          children: [
            P.jsx("div", { id: qd.modal_background, onClick: n }),
            P.jsx("div", { id: qd.modal_content, children: t }),
          ],
        }),
        e.current
      );
}
const _r = () => E.useContext(Yy);
function Yn({
  modalComponent: e,
  itemText: t,
  onItemClick: n,
  onModalClose: r,
}) {
  const { setModalContent: i, setOnModalClose: a } = _r(),
    o = () => {
      r && a(r), i(e), typeof n == "function" && n();
    };
  return P.jsx("li", {
    onClick: o,
    style: { listStyleType: "none" },
    children: t,
  });
}
const Jk = "_form_4r7k0_1",
  e2 = "_demo_user_4r7k0_43",
  D0 = { form: Jk, demo_user: e2 };
function AO() {
  const e = kt(),
    [t, n] = E.useState(""),
    [r, i] = E.useState(""),
    [a, o] = E.useState({}),
    { closeModal: l } = _r(),
    u = (c) => (
      c.preventDefault(),
      e(I0({ credential: t, password: r }))
        .then((d) => {
          d.message === "Invalid credentials"
            ? o({ credentials: "Invalid credentials" })
            : l();
        })
        .catch(async (d) => {
          const p = await d.json();
          p && p.errors && o(p.errors);
        })
    ),
    s = (c) => (
      c.preventDefault(),
      e(I0({ credential: "BigOwner1", password: "password" })).then(l)
    ),
    f = () => !(t.length >= 3 && r.length >= 6);
  return P.jsxs("form", {
    onSubmit: u,
    className: D0.form,
    children: [
      P.jsx("h2", { children: "Log In" }),
      P.jsx("input", {
        type: "text",
        value: t,
        onChange: (c) => n(c.target.value),
        placeholder: "Username or Email",
        required: !0,
      }),
      P.jsx("input", {
        type: "password",
        value: r,
        onChange: (c) => i(c.target.value),
        placeholder: "Password",
        required: !0,
      }),
      a.credentials &&
        P.jsx("span", {
          style: { color: "red" },
          children: "The provided credentials were invalid",
        }),
      a.credential && P.jsx("p", { children: a.credential }),
      P.jsx("button", { type: "submit", disabled: f(), children: "Log In" }),
      P.jsx("div", {
        onClick: s,
        className: D0.demo_user,
        children: "Demo User",
      }),
    ],
  });
}
const t2 = "_form_12n8y_1",
  R0 = { form: t2 };
function TO() {
  const e = kt(),
    [t, n] = E.useState(""),
    [r, i] = E.useState(""),
    [a, o] = E.useState(""),
    [l, u] = E.useState(""),
    [s, f] = E.useState(""),
    [c, d] = E.useState(""),
    [p, m] = E.useState({}),
    [v, b] = E.useState(!1),
    { closeModal: g } = _r(),
    y = (h) => {
      if (h.length === 0) return !0;
      for (const x of h) if (x !== " ") return !1;
      return !0;
    };
  E.useEffect(() => {
    const h = {};
    (y(t) || !t.includes("@")) && (h.email = "Not a valid email"),
      y(r) && (h.username = "Username is required"),
      y(a) && (h.firstName = "First name is required"),
      y(l) && (h.lastName = "Last name is required"),
      y(s) && (h.password = "Password is required"),
      s.length < 6 && (h.password = "Password must be at least 6 characters"),
      s !== c && (h.confirmPassword = "Must match password"),
      m(h);
  }, [t, r, a, l, s, c]);
  const w = (h) => (
    h.preventDefault(),
    b(!0),
    Object.keys(p).length
      ? m({
          confirmPassword:
            "Confirm Password field must be the same as the Password field",
        })
      : e(Kk({ email: t, username: r, firstName: a, lastName: l, password: s }))
          .then((x) => {
            x.errors ? m(x.errors) : g();
          })
          .catch(async (x) => {
            const S = await x.json();
            S != null && S.errors && m(S.errors);
          })
  );
  return P.jsxs("form", {
    onSubmit: w,
    className: R0.form,
    children: [
      P.jsx("h1", { children: "Sign Up" }),
      P.jsx("input", {
        type: "text",
        value: t,
        onChange: (h) => n(h.target.value),
        placeholder: "Email",
      }),
      v && p.email && P.jsx("span", { className: R0.error, children: p.email }),
      P.jsx("input", {
        type: "text",
        value: r,
        onChange: (h) => i(h.target.value),
        placeholder: "Username",
      }),
      v && p.username && P.jsx("span", { children: p.username }),
      P.jsx("input", {
        type: "text",
        value: a,
        onChange: (h) => o(h.target.value),
        placeholder: "First Name",
      }),
      v && p.firstName && P.jsx("span", { children: p.firstName }),
      P.jsx("input", {
        type: "text",
        value: l,
        onChange: (h) => u(h.target.value),
        placeholder: "Last Name",
      }),
      v && p.lastName && P.jsx("span", { children: p.lastName }),
      P.jsx("input", {
        type: "password",
        value: s,
        onChange: (h) => f(h.target.value),
        placeholder: "Password",
      }),
      v && p.password && P.jsx("span", { children: p.password }),
      P.jsx("input", {
        type: "password",
        value: c,
        onChange: (h) => d(h.target.value),
        placeholder: "Confirm Password",
      }),
      v && p.confirmPassword && P.jsx("span", { children: p.confirmPassword }),
      P.jsx("button", {
        type: "submit",
        disabled: Object.keys(p).length && v,
        children: "Sign Up",
      }),
    ],
  });
}
const n2 = "_nav_bar_1xh80_1",
  r2 = "_logo_1xh80_21",
  i2 = "_nav_element_1xh80_23",
  a2 = "_home_text_1xh80_25",
  o2 = "_home_icon_1xh80_33",
  l2 = "_nav_links_1xh80_61",
  u2 = "_drop_down_menu_1xh80_79",
  s2 = "_dropdown_profile_button_1xh80_107",
  c2 = "_dropdown_logout_button_1xh80_109",
  bt = {
    nav_bar: n2,
    logo: r2,
    nav_element: i2,
    home_text: a2,
    home_icon: o2,
    nav_links: l2,
    drop_down_menu: u2,
    dropdown_profile_button: s2,
    dropdown_logout_button: c2,
  };
function f2({ user: e }) {
  const t = kt(),
    [n, r] = E.useState(!1),
    i = E.useRef(),
    a = Df(),
    o = (s) => {
      s.stopPropagation(), r(!n);
    };
  E.useEffect(() => {
    if (!n) return;
    const s = (f) => {
      i.current.contains(f.target) || r(!1);
    };
    return (
      document.addEventListener("click", s),
      () => document.removeEventListener("click", s)
    );
  }, [n]);
  const l = () => r(!1),
    u = (s) => {
      s.preventDefault(), t(Wk()), l(), a("/");
    };
  return P.jsxs(P.Fragment, {
    children: [
      P.jsx("div", {
        onClick: o,
        className: bt.nav_element,
        children: "Account",
      }),
      n &&
        P.jsx("div", {
          className: bt.drop_down_menu,
          ref: i,
          children: e
            ? P.jsxs(P.Fragment, {
                children: [
                  P.jsxs("div", {
                    className: bt.dropdown_name,
                    children: [e.firstName, " ", e.lastName],
                  }),
                  P.jsx("div", {
                    className: bt.dropdown_profile_button,
                    onClick: (s) => {
                      s.preventDefault(), a("/profile"), l();
                    },
                    children: "Profile",
                  }),
                  P.jsx("div", {
                    className: bt.dropdown_logout_button,
                    children: P.jsx("button", {
                      onClick: u,
                      children: "Log Out",
                    }),
                  }),
                ],
              })
            : P.jsxs(P.Fragment, {
                children: [
                  P.jsx("div", {
                    className: bt.drop_down_top,
                    children: P.jsx(Yn, {
                      itemText: "Log In",
                      onItemClick: l,
                      modalComponent: P.jsx(AO, {}),
                    }),
                  }),
                  P.jsx("div", {
                    className: bt.drop_down_bottom,
                    children: P.jsx(Yn, {
                      itemText: "Sign Up",
                      onItemClick: l,
                      modalComponent: P.jsx(TO, {}),
                    }),
                  }),
                ],
              }),
        }),
    ],
  });
}
var $O = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  L0 = T.createContext && T.createContext($O),
  d2 = ["attr", "size", "title"];
function p2(e, t) {
  if (e == null) return {};
  var n = h2(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function h2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Zs() {
  return (
    (Zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zs.apply(this, arguments)
  );
}
function B0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? B0(Object(n), !0).forEach(function (r) {
          v2(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : B0(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function v2(e, t, n) {
  return (
    (t = y2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function y2(e) {
  var t = m2(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function m2(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function CO(e) {
  return (
    e &&
    e.map((t, n) => T.createElement(t.tag, Js({ key: n }, t.attr), CO(t.child)))
  );
}
function Qy(e) {
  return (t) =>
    T.createElement(g2, Zs({ attr: Js({}, e.attr) }, t), CO(e.child));
}
function g2(e) {
  var t = (n) => {
    var { attr: r, size: i, title: a } = e,
      o = p2(e, d2),
      l = i || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      T.createElement(
        "svg",
        Zs(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: u,
            style: Js(Js({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        a && T.createElement("title", null, a),
        e.children
      )
    );
  };
  return L0 !== void 0
    ? T.createElement(L0.Consumer, null, (n) => t(n))
    : t($O);
}
function b2(e) {
  return Qy({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M355.102 21.097c-33.682.164-64.173 18.585-74.615 50.5 21.357-.79 23.203 53.922 23.203 53.922l41.619 6.262c-13.41 12.963-50.025 5.967-50.025 5.967-17.14 19.182-33.124 40.966-47.758 57.578-15.952 18.127-35.2 38.103-57.018 60.086-6.79 6.823 41.594-9.821 34.342-2.604-24.567 12.751-42.297 16.097-61.764 32.069-31.312 25.674-62.853 60.71-81.146 79.431-7.711 7.91-44.362 37.674 20.469 34.74 2.404 7.52-1.621 9.456-7.493 15.293-4.327 4.303-18.082.283-22.263 2.828-22.172 35.055-17.246 37.975-27.43 58.047-4.252 11.635 41.68-14.404 64.305-34.18 13.974-7.58 25.147-21.652 35.002-17.202 43.11 18.984 129.826 35.53 141.328 27.619 18.368-12.646-10.321-46.343 3.832-97.912 23.47 5.817 43.825 13.657 66.767 11.459-1.581 49.307 3.56 55.306-3.888 104.777l59.129 21.127 1.91-13.809-33.815-22.478c14.568-50.659 16.809-72.578 15.227-121.719-.16-5.372-45.168-24.325-74.492-33.133l18.593-30.412c30.393-44.788 124.141-62.055 127.932-88.258-13.02-19.676 3.022-27.384-25.092-21.912-6.295 1.318-13.771 24.346-18.023 27.213-7.843 5.276-40.655 24.477-51.951 18.377-1.9-1.026 7.246-33.441 6.85-44.78-.116-3.205-1.19-6.625-2.866-10.001.185-.64 15.24-52.482 54.809-94.016-43.978 25.134-65.332 79.925-65.354 79.98-2.207-2.134-4.476-3.983-6.639-5.423-1.916-14.7-4.819-73.02 68.598-78.776-21.427-21.177-47.704-30.78-72.283-30.66z",
        },
        child: [],
      },
    ],
  })(e);
}
function w2({ isLoaded: e, setShowCart: t }) {
  const n = Df(),
    r = E.useRef(),
    i = yr((l) => l.session.user),
    [a, o] = E.useState(!1);
  return (
    E.useEffect(() => {
      if (!a) return;
      const l = (u) => {
        r.current.contains(u.target) || o(!1);
      };
      return (
        document.addEventListener("click", l),
        () => document.removeEventListener("click", l)
      );
    }, [a]),
    P.jsxs("nav", {
      className: bt.nav_bar,
      children: [
        P.jsxs("div", {
          className: bt.home_icon,
          onClick: (l) => {
            l.preventDefault(), n("/");
          },
          children: [
            P.jsx(b2, { className: bt.logo }),
            P.jsx("span", { className: bt.home_text, children: "Cloak" }),
          ],
        }),
        P.jsxs("div", {
          className: bt.nav_links,
          children: [
            e &&
              i &&
              P.jsxs(P.Fragment, {
                children: [
                  P.jsx("div", {
                    className: bt.nav_element,
                    onClick: (l) => {
                      l.preventDefault(), n("/watchlist");
                    },
                    children: "Watchlist",
                  }),
                  P.jsx("div", {
                    className: bt.nav_element,
                    onClick: (l) => {
                      l.preventDefault(), n("/portfolios");
                    },
                    children: "Portfolios",
                  }),
                  P.jsx("div", {
                    className: bt.nav_element,
                    onClick: (l) => {
                      l.preventDefault(), t((u) => !u);
                    },
                    children: "Cart",
                  }),
                  P.jsx(f2, { user: i }),
                ],
              }),
            e &&
              !i &&
              P.jsxs(P.Fragment, {
                children: [
                  P.jsx("div", {
                    className: bt.nav_element,
                    children: P.jsx(Yn, {
                      itemText: "Log In",
                      modalComponent: P.jsx(AO, {}),
                    }),
                  }),
                  P.jsx("div", {
                    className: bt.nav_element,
                    children: P.jsx(Yn, {
                      itemText: "Sign Up",
                      modalComponent: P.jsx(TO, {}),
                    }),
                  }),
                ],
              }),
          ],
        }),
      ],
    })
  );
}
const jO = "stocks/search",
  kO = "stocks/getAllStocks",
  MO = "stocks/getGraphData",
  x2 = (e) => ({ type: kO, payload: e }),
  S2 = (e) => ({ type: jO, payload: e }),
  _2 = (e) => ({ type: MO, payload: e }),
  Zy = () => async (e) => {
    const n = await (await Ze("/api/stocks/")).json();
    return n.status === "success" && e(x2(n.data)), n;
  },
  O2 = (e) => async (t) => {
    const r = await (await Ze(`/api/stocks/search/${e}`)).json();
    return r.status === "success" && t(S2(r.data)), r;
  },
  P2 = (e) => async (t) => {
    const r = await (await Ze(`/api/stocks/${e}`)).json();
    r.status === "success" && t(_2(r.data.graphData));
  },
  E2 = { allStocks: {}, graphData: [] },
  A2 = (e = E2, t) => {
    switch (t.type) {
      case kO: {
        const n = t.payload.reduce((r, i) => ((r[i.id] = i), r), {});
        return { ...e, allStocks: n };
      }
      case jO: {
        const n = t.payload.id,
          r = { allStocks: { ...e.allStocks } };
        return (r.allStocks[n] = t.payload), r;
      }
      case MO:
        return { ...e, graphData: t.payload };
      default:
        return e;
    }
  },
  T2 = "_main_stock_page_container_170q3_1",
  $2 = "_search_bar_container_170q3_1",
  C2 = "_search_bar_left_170q3_1",
  j2 = "_search_symbol_170q3_1",
  k2 = "_search_bar_170q3_1",
  M2 = "_search_bar_right_170q3_1",
  N2 = "_close_search_symbol_170q3_1",
  I2 = "_stock_display_container_170q3_1",
  D2 = "_stock_info_container_170q3_133",
  R2 = "_stock_info_top_container_170q3_145",
  L2 = "_stock_info_image_container_170q3_159",
  B2 = "_stock_info_name_170q3_177",
  z2 = "_stock_info_text_170q3_197",
  It = {
    main_stock_page_container: T2,
    search_bar_container: $2,
    search_bar_left: C2,
    search_symbol: j2,
    search_bar: k2,
    search_bar_right: M2,
    close_search_symbol: N2,
    stock_display_container: I2,
    stock_info_container: D2,
    stock_info_top_container: R2,
    stock_info_image_container: L2,
    stock_info_name: B2,
    stock_info_text: z2,
  },
  NO = "watchlist/get",
  IO = "watchlist/add",
  DO = "watchlist/remove",
  F2 = (e) => ({ type: NO, payload: e }),
  U2 = (e) => ({ type: IO, payload: e }),
  W2 = (e) => ({ type: DO, payload: e }),
  H2 = () => async (e) => {
    const n = await (await Ze("/api/watchlist")).json();
    n.status === "success" && e(F2(n.data));
  },
  RO = (e) => async (t) => {
    const r = await (
      await Ze("/api/watchlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stockId: e }),
      })
    ).json();
    r.status === "success" && t(U2(r.data));
  },
  K2 = (e) => async (t) => {
    const r = await (
      await Ze(`/api/watchlist/${e}`, { method: "DELETE" })
    ).json();
    r.status === "success" && t(W2(r.data.id));
  },
  V2 = { stocks: {} },
  q2 = (e = V2, t) => {
    switch (t.type) {
      case NO: {
        const n = t.payload.reduce((r, i) => ((r[i.id] = i), r), {});
        return { ...e, stocks: n };
      }
      case IO: {
        const n = { ...e };
        return (n.stocks[t.payload.id] = t.payload), n;
      }
      case DO: {
        const n = { ...e };
        return (
          (n.stocks = Object.keys(e.stocks)
            .filter((r) => r != t.payload)
            .reduce((r, i) => ((r[i] = e.stocks[i]), r), {})),
          n
        );
      }
      default:
        return e;
    }
  },
  LO = "portfolios/get",
  G2 = "portfolios/update",
  BO = "portfolios/delete",
  X2 = (e) => ({ type: LO, payload: e }),
  Y2 = (e) => ({ type: BO, payload: e }),
  Qa = () => async (e) => {
    const n = await (await Ze("/api/portfolios")).json();
    n.status === "success" && e(X2(n.data));
  },
  Q2 = (e) => async (t) => {
    const r = await (
      await Ze("/api/portfolios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    return r.status === "success" && t(Qa()), r;
  },
  Z2 = (e, t) => async (n) => {
    const i = await (
      await Ze(`/api/portfolios/${e}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t),
      })
    ).json();
    return i.status === "success" && n(Qa()), i;
  },
  J2 = (e) => async (t) => {
    const r = await (
      await Ze(`/api/portfolios/${e}`, { method: "DELETE" })
    ).json();
    return r.status === "success" && t(Y2(e)), r;
  },
  eM = (e, t, n) => async (r) => {
    const a = await (
      await Ze(`/api/portfolios/${e}/sell`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stockId: t, amount: n }),
      })
    ).json();
    return a.status === "success" && r(Qa()), a;
  },
  tM = { userPortfolios: {} },
  nM = (e = tM, t) => {
    switch (t.type) {
      case LO:
        return { ...e, userPortfolios: t.payload };
      case G2: {
        const { id: n, name: r, balance: i } = t.payload,
          a = { ...e };
        return (
          (a.userPortfolios[n].name = r), (a.userPortfolios[n].balance = i), a
        );
      }
      case BO: {
        const n = { ...e };
        return (
          (n.userPortfolios = Object.keys(e.userPortfolios)
            .filter((r) => r != t.payload)
            .reduce((r, i) => ((r[i] = e.userPortfolios[i]), r), {})),
          n
        );
      }
      default:
        return e;
    }
  },
  zO = "orders/get",
  FO = "orders/addToCart",
  UO = "orders/removeFromCart",
  WO = "orders/edit",
  HO = "orders/clear",
  rM = (e) => ({ type: zO, payload: e }),
  iM = (e) => ({ type: FO, payload: e }),
  aM = (e) => ({ type: UO, payload: e }),
  oM = (e) => ({ type: WO, payload: e }),
  KO = () => ({ type: HO }),
  lM = () => async (e) => {
    const n = await (await Ze("/api/orders")).json();
    n.status === "success" && e(rM(n.data));
  },
  uM = (e, t) => async (n) => {
    const i = await (
      await Ze("/api/orders/add", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stockId: e, amount: t }),
      })
    ).json();
    return i.status === "success" && n(iM(i.data)), i;
  },
  sM = (e) => async (t) => {
    const r = await (
      await Ze("/api/orders/remove", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stockId: e }),
      })
    ).json();
    r.status === "success" && t(aM(r.data.stockId));
  },
  cM = (e, t) => async (n) => {
    const i = await (
      await Ze("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stockId: e, amount: t }),
      })
    ).json();
    return i.status === "success" && n(oM(i.data)), i;
  },
  fM = () => async (e) => {
    const n = await (await Ze("/api/orders", { method: "DELETE" })).json();
    return n.status === "success" && e(KO()), n;
  },
  dM = (e) => async (t) => {
    (await (await Ze(`/api/orders/${e}`)).json()).status === "success" &&
      (t(KO()), t(Qa()));
  },
  pM = { userOrders: {} },
  hM = (e = pM, t) => {
    switch (t.type) {
      case zO:
        return { ...e, userOrders: t.payload };
      case FO: {
        const n = { ...e, userOrders: { ...e.userOrders } };
        return (n.userOrders[t.payload.id] = t.payload), n;
      }
      case UO: {
        const n = { ...e, userOrders: { ...e.userOrders } };
        return delete n.userOrders[t.payload], n;
      }
      case WO: {
        const n = { ...e, userOrders: { ...e.userOrders } };
        return (n.userOrders[t.payload.stockId].amount = t.payload.amount), n;
      }
      case HO:
        return { ...e, userOrders: {} };
      default:
        return e;
    }
  },
  vM = "_modal_container_r1n78_1",
  yM = "_input_label_r1n78_21",
  mM = "_input_area_r1n78_33",
  gM = "_units_for_r1n78_41",
  bM = "_amount_input_r1n78_47",
  wM = "_price_input_r1n78_49",
  xM = "_submit_button_r1n78_67",
  si = {
    modal_container: vM,
    input_label: yM,
    input_area: mM,
    units_for: gM,
    amount_input: bM,
    price_input: wM,
    submit_button: xM,
  };
function SM({ stock: e }) {
  const t = kt(),
    { closeModal: n } = _r(),
    [r, i] = E.useState(""),
    [a, o] = E.useState(""),
    l = async (f) => {
      f.preventDefault(), (await t(uM(e.id, r))).status === "success" && n();
    },
    u = (f, c) => Math.round(Number(f) * c) / c,
    s = (f) => !isNaN(f) && f >= 0;
  return P.jsxs("form", {
    className: si.modal_container,
    onSubmit: l,
    children: [
      P.jsxs("label", {
        className: si.input_label,
        children: ["How much ", e.symbol, " would you like to purchase?"],
      }),
      P.jsxs("div", {
        className: si.input_area,
        children: [
          P.jsx("input", {
            className: si.amount_input,
            type: "number",
            value: r,
            onChange: (f) => {
              f.preventDefault();
              const c = Number(f.target.value);
              if (f.target.value === "") {
                i(""), o("");
                return;
              }
              s(f.target.value) &&
                (i(u(c, 1e3)), o(u(c * Number(e.price), 100)));
            },
          }),
          P.jsx("span", { className: si.units_for, children: " Units for $ " }),
          P.jsx("input", {
            className: si.price_input,
            type: "number",
            value: a,
            onChange: (f) => {
              f.preventDefault();
              const c = Number(f.target.value);
              if (f.target.value === "") {
                i(""), o("");
                return;
              }
              s(f.target.value) &&
                (i(u(c / Number(e.price), 1e3)), o(u(c, 100)));
            },
          }),
        ],
      }),
      P.jsx("button", {
        className: si.submit_button,
        type: "submit",
        disabled: !r,
        children: "Add to Cart",
      }),
    ],
  });
}
function _M({ stock: e }) {
  const [t, n] = E.useState(!1),
    r = (a) => {
      a.stopPropagation(), n(!t);
    };
  E.useEffect(() => {
    if (t)
      return (
        document.addEventListener("click", i),
        () => document.removeEventListener("click", i)
      );
  }, [t]);
  const i = () => n(!1);
  return P.jsx("button", {
    onClick: r,
    children: P.jsx(Yn, {
      itemText: "Purchase",
      onItemClick: i,
      modalComponent: P.jsx(SM, { stock: e }),
    }),
  });
}
const OM = ({ stock: e }) => {
  const t = Df(),
    n = kt(),
    { id: r, name: i, symbol: a, price: o, industry: l, logo: u } = e,
    s = yr((f) => f.session.user);
  return P.jsxs("div", {
    className: It.stock_info_container,
    children: [
      P.jsxs("div", {
        className: It.stock_info_top_container,
        children: [
          P.jsx("div", {
            className: It.stock_info_image_container,
            children: P.jsx("img", { src: u }),
          }),
          P.jsx("h3", {
            onClick: (f) => {
              f.preventDefault(), t(`/stocks/${r}`);
            },
            className: It.stock_info_name,
            children: i,
          }),
        ],
      }),
      P.jsx("h4", { className: It.stock_info_text, children: a }),
      P.jsxs("ul", {
        children: [
          P.jsxs("li", {
            className: It.stock_info_text,
            children: ["Price: ", o],
          }),
          P.jsxs("li", {
            className: It.stock_info_text,
            children: ["Industry: ", l],
          }),
        ],
      }),
      s &&
        P.jsxs(P.Fragment, {
          children: [
            P.jsx("button", {
              onClick: (f) => {
                f.preventDefault(), n(RO(r));
              },
              children: "Add to watchlist",
            }),
            P.jsx(_M, { stock: e }),
          ],
        }),
    ],
  });
};
function PM(e) {
  return Qy({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
        child: [],
      },
    ],
  })(e);
}
function EM(e) {
  return Qy({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256z",
        },
        child: [],
      },
    ],
  })(e);
}
const AM = (e, t) =>
    Object.keys(e).filter((n) => {
      const { symbol: r, name: i, industry: a } = e[n];
      return !!(
        r.toLowerCase().includes(t.toLowerCase()) ||
        i.toLowerCase().includes(t.toLowerCase()) ||
        a.toLowerCase().includes(t.toLowerCase())
      );
    }),
  TM = () => {
    const e = kt(),
      t = yr((l) => l.stocks.allStocks),
      [n, r] = E.useState(""),
      [i, a] = E.useState("");
    E.useEffect(() => {
      e(Zy());
    }, [e]);
    const o = async (l) => {
      l.preventDefault(), r(i), i.length <= 5 && e(O2(i));
    };
    return P.jsxs("div", {
      id: It.main_stock_page_container,
      children: [
        P.jsxs("form", {
          onSubmit: o,
          id: It.search_bar_container,
          children: [
            P.jsxs("div", {
              id: It.search_bar_left,
              children: [
                P.jsx(PM, { id: It.search_symbol }),
                P.jsx("input", {
                  id: It.search_bar,
                  placeholder: "Symbol Search",
                  type: "text",
                  value: n,
                  onChange: (l) => {
                    l.preventDefault(), a(l.target.value), r(l.target.value);
                  },
                }),
              ],
            }),
            P.jsx("div", {
              id: It.search_bar_right,
              children: P.jsx(EM, {
                id: It.close_search_symbol,
                onClick: (l) => {
                  l.preventDefault(), a(""), r("");
                },
              }),
            }),
          ],
        }),
        P.jsx("div", {
          id: It.stock_display_container,
          children: AM(t, n).map((l) => P.jsx(OM, { stock: t[l] }, l)),
        }),
      ],
    });
  };
function VO(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = VO(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function be() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = VO(e)) && (r && (r += " "), (r += t));
  return r;
}
var $M = Array.isArray,
  qt = $M,
  CM = typeof ku == "object" && ku && ku.Object === Object && ku,
  qO = CM,
  jM = qO,
  kM = typeof self == "object" && self && self.Object === Object && self,
  MM = jM || kM || Function("return this")(),
  Zn = MM,
  NM = Zn,
  IM = NM.Symbol,
  yu = IM,
  z0 = yu,
  GO = Object.prototype,
  DM = GO.hasOwnProperty,
  RM = GO.toString,
  Ao = z0 ? z0.toStringTag : void 0;
function LM(e) {
  var t = DM.call(e, Ao),
    n = e[Ao];
  try {
    e[Ao] = void 0;
    var r = !0;
  } catch {}
  var i = RM.call(e);
  return r && (t ? (e[Ao] = n) : delete e[Ao]), i;
}
var BM = LM,
  zM = Object.prototype,
  FM = zM.toString;
function UM(e) {
  return FM.call(e);
}
var WM = UM,
  F0 = yu,
  HM = BM,
  KM = WM,
  VM = "[object Null]",
  qM = "[object Undefined]",
  U0 = F0 ? F0.toStringTag : void 0;
function GM(e) {
  return e == null
    ? e === void 0
      ? qM
      : VM
    : U0 && U0 in Object(e)
    ? HM(e)
    : KM(e);
}
var Or = GM;
function XM(e) {
  return e != null && typeof e == "object";
}
var Pr = XM,
  YM = Or,
  QM = Pr,
  ZM = "[object Symbol]";
function JM(e) {
  return typeof e == "symbol" || (QM(e) && YM(e) == ZM);
}
var Za = JM,
  eN = qt,
  tN = Za,
  nN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  rN = /^\w*$/;
function iN(e, t) {
  if (eN(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || tN(e)
    ? !0
    : rN.test(e) || !nN.test(e) || (t != null && e in Object(t));
}
var Jy = iN;
function aN(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ri = aN;
const Ja = Te(ri);
var oN = Or,
  lN = ri,
  uN = "[object AsyncFunction]",
  sN = "[object Function]",
  cN = "[object GeneratorFunction]",
  fN = "[object Proxy]";
function dN(e) {
  if (!lN(e)) return !1;
  var t = oN(e);
  return t == sN || t == cN || t == uN || t == fN;
}
var em = dN;
const he = Te(em);
var pN = Zn,
  hN = pN["__core-js_shared__"],
  vN = hN,
  Gd = vN,
  W0 = (function () {
    var e = /[^.]+$/.exec((Gd && Gd.keys && Gd.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function yN(e) {
  return !!W0 && W0 in e;
}
var mN = yN,
  gN = Function.prototype,
  bN = gN.toString;
function wN(e) {
  if (e != null) {
    try {
      return bN.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var XO = wN,
  xN = em,
  SN = mN,
  _N = ri,
  ON = XO,
  PN = /[\\^$.*+?()[\]{}|]/g,
  EN = /^\[object .+?Constructor\]$/,
  AN = Function.prototype,
  TN = Object.prototype,
  $N = AN.toString,
  CN = TN.hasOwnProperty,
  jN = RegExp(
    "^" +
      $N
        .call(CN)
        .replace(PN, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function kN(e) {
  if (!_N(e) || SN(e)) return !1;
  var t = xN(e) ? jN : EN;
  return t.test(ON(e));
}
var MN = kN;
function NN(e, t) {
  return e == null ? void 0 : e[t];
}
var IN = NN,
  DN = MN,
  RN = IN;
function LN(e, t) {
  var n = RN(e, t);
  return DN(n) ? n : void 0;
}
var zi = LN,
  BN = zi,
  zN = BN(Object, "create"),
  Rf = zN,
  H0 = Rf;
function FN() {
  (this.__data__ = H0 ? H0(null) : {}), (this.size = 0);
}
var UN = FN;
function WN(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var HN = WN,
  KN = Rf,
  VN = "__lodash_hash_undefined__",
  qN = Object.prototype,
  GN = qN.hasOwnProperty;
function XN(e) {
  var t = this.__data__;
  if (KN) {
    var n = t[e];
    return n === VN ? void 0 : n;
  }
  return GN.call(t, e) ? t[e] : void 0;
}
var YN = XN,
  QN = Rf,
  ZN = Object.prototype,
  JN = ZN.hasOwnProperty;
function eI(e) {
  var t = this.__data__;
  return QN ? t[e] !== void 0 : JN.call(t, e);
}
var tI = eI,
  nI = Rf,
  rI = "__lodash_hash_undefined__";
function iI(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = nI && t === void 0 ? rI : t),
    this
  );
}
var aI = iI,
  oI = UN,
  lI = HN,
  uI = YN,
  sI = tI,
  cI = aI;
function eo(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
eo.prototype.clear = oI;
eo.prototype.delete = lI;
eo.prototype.get = uI;
eo.prototype.has = sI;
eo.prototype.set = cI;
var fI = eo;
function dI() {
  (this.__data__ = []), (this.size = 0);
}
var pI = dI;
function hI(e, t) {
  return e === t || (e !== e && t !== t);
}
var tm = hI,
  vI = tm;
function yI(e, t) {
  for (var n = e.length; n--; ) if (vI(e[n][0], t)) return n;
  return -1;
}
var Lf = yI,
  mI = Lf,
  gI = Array.prototype,
  bI = gI.splice;
function wI(e) {
  var t = this.__data__,
    n = mI(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : bI.call(t, n, 1), --this.size, !0;
}
var xI = wI,
  SI = Lf;
function _I(e) {
  var t = this.__data__,
    n = SI(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var OI = _I,
  PI = Lf;
function EI(e) {
  return PI(this.__data__, e) > -1;
}
var AI = EI,
  TI = Lf;
function $I(e, t) {
  var n = this.__data__,
    r = TI(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var CI = $I,
  jI = pI,
  kI = xI,
  MI = OI,
  NI = AI,
  II = CI;
function to(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
to.prototype.clear = jI;
to.prototype.delete = kI;
to.prototype.get = MI;
to.prototype.has = NI;
to.prototype.set = II;
var Bf = to,
  DI = zi,
  RI = Zn,
  LI = DI(RI, "Map"),
  nm = LI,
  K0 = fI,
  BI = Bf,
  zI = nm;
function FI() {
  (this.size = 0),
    (this.__data__ = {
      hash: new K0(),
      map: new (zI || BI)(),
      string: new K0(),
    });
}
var UI = FI;
function WI(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var HI = WI,
  KI = HI;
function VI(e, t) {
  var n = e.__data__;
  return KI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var zf = VI,
  qI = zf;
function GI(e) {
  var t = qI(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var XI = GI,
  YI = zf;
function QI(e) {
  return YI(this, e).get(e);
}
var ZI = QI,
  JI = zf;
function eD(e) {
  return JI(this, e).has(e);
}
var tD = eD,
  nD = zf;
function rD(e, t) {
  var n = nD(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var iD = rD,
  aD = UI,
  oD = XI,
  lD = ZI,
  uD = tD,
  sD = iD;
function no(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
no.prototype.clear = aD;
no.prototype.delete = oD;
no.prototype.get = lD;
no.prototype.has = uD;
no.prototype.set = sD;
var rm = no,
  YO = rm,
  cD = "Expected a function";
function im(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(cD);
  var n = function () {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      a = n.cache;
    if (a.has(i)) return a.get(i);
    var o = e.apply(this, r);
    return (n.cache = a.set(i, o) || a), o;
  };
  return (n.cache = new (im.Cache || YO)()), n;
}
im.Cache = YO;
var QO = im;
const fD = Te(QO);
var dD = QO,
  pD = 500;
function hD(e) {
  var t = dD(e, function (r) {
      return n.size === pD && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var vD = hD,
  yD = vD,
  mD =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  gD = /\\(\\)?/g,
  bD = yD(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(mD, function (n, r, i, a) {
        t.push(i ? a.replace(gD, "$1") : r || n);
      }),
      t
    );
  }),
  wD = bD;
function xD(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var am = xD,
  V0 = yu,
  SD = am,
  _D = qt,
  OD = Za,
  PD = 1 / 0,
  q0 = V0 ? V0.prototype : void 0,
  G0 = q0 ? q0.toString : void 0;
function ZO(e) {
  if (typeof e == "string") return e;
  if (_D(e)) return SD(e, ZO) + "";
  if (OD(e)) return G0 ? G0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -PD ? "-0" : t;
}
var ED = ZO,
  AD = ED;
function TD(e) {
  return e == null ? "" : AD(e);
}
var JO = TD,
  $D = qt,
  CD = Jy,
  jD = wD,
  kD = JO;
function MD(e, t) {
  return $D(e) ? e : CD(e, t) ? [e] : jD(kD(e));
}
var eP = MD,
  ND = Za,
  ID = 1 / 0;
function DD(e) {
  if (typeof e == "string" || ND(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -ID ? "-0" : t;
}
var Ff = DD,
  RD = eP,
  LD = Ff;
function BD(e, t) {
  t = RD(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[LD(t[n++])];
  return n && n == r ? e : void 0;
}
var om = BD,
  zD = om;
function FD(e, t, n) {
  var r = e == null ? void 0 : zD(e, t);
  return r === void 0 ? n : r;
}
var tP = FD;
const mn = Te(tP);
function UD(e) {
  return e == null;
}
var WD = UD;
const fe = Te(WD);
var HD = Or,
  KD = qt,
  VD = Pr,
  qD = "[object String]";
function GD(e) {
  return typeof e == "string" || (!KD(e) && VD(e) && HD(e) == qD);
}
var XD = GD;
const mu = Te(XD);
var YD = Or,
  QD = Pr,
  ZD = "[object Number]";
function JD(e) {
  return typeof e == "number" || (QD(e) && YD(e) == ZD);
}
var nP = JD;
const eR = Te(nP);
var tR = nP;
function nR(e) {
  return tR(e) && e != +e;
}
var rR = nR;
const gu = Te(rR);
var In = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  xi = function (t) {
    return mu(t) && t.indexOf("%") === t.length - 1;
  },
  q = function (t) {
    return eR(t) && !gu(t);
  },
  ot = function (t) {
    return q(t) || mu(t);
  },
  iR = 0,
  bu = function (t) {
    var n = ++iR;
    return "".concat(t || "").concat(n);
  },
  Ii = function (t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!q(t) && !mu(t)) return r;
    var a;
    if (xi(t)) {
      var o = t.indexOf("%");
      a = (n * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return gu(a) && (a = r), i && a > n && (a = n), a;
  },
  Yi = function (t) {
    if (!t) return null;
    var n = Object.keys(t);
    return n && n.length ? t[n[0]] : null;
  },
  aR = function (t) {
    if (!Array.isArray(t)) return !1;
    for (var n = t.length, r = {}, i = 0; i < n; i++)
      if (!r[t[i]]) r[t[i]] = !0;
      else return !0;
    return !1;
  },
  Mn = function (t, n) {
    return q(t) && q(n)
      ? function (r) {
          return t + r * (n - t);
        }
      : function () {
          return n;
        };
  };
function ec(e, t, n) {
  return !e || !e.length
    ? null
    : e.find(function (r) {
        return r && (typeof t == "function" ? t(r) : mn(r, t)) === n;
      });
}
function wa(e, t) {
  for (var n in e)
    if (
      {}.hasOwnProperty.call(e, n) &&
      (!{}.hasOwnProperty.call(t, n) || e[n] !== t[n])
    )
      return !1;
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r) && !{}.hasOwnProperty.call(e, r))
      return !1;
  return !0;
}
function Ph(e) {
  "@babel/helpers - typeof";
  return (
    (Ph =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ph(e)
  );
}
var oR = ["viewBox", "children"],
  lR = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  X0 = ["points", "pathLength"],
  Xd = { svg: oR, polygon: X0, polyline: X0 },
  lm = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  tc = function (t, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var r = t;
    if ((E.isValidElement(t) && (r = t.props), !Ja(r))) return null;
    var i = {};
    return (
      Object.keys(r).forEach(function (a) {
        lm.includes(a) &&
          (i[a] =
            n ||
            function (o) {
              return r[a](r, o);
            });
      }),
      i
    );
  },
  uR = function (t, n, r) {
    return function (i) {
      return t(n, r, i), null;
    };
  },
  nc = function (t, n, r) {
    if (!Ja(t) || Ph(t) !== "object") return null;
    var i = null;
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a];
        lm.includes(a) &&
          typeof o == "function" &&
          (i || (i = {}), (i[a] = uR(o, n, r)));
      }),
      i
    );
  },
  sR = ["children"],
  cR = ["children"];
function Y0(e, t) {
  if (e == null) return {};
  var n = fR(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function fR(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Eh(e) {
  "@babel/helpers - typeof";
  return (
    (Eh =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Eh(e)
  );
}
var Q0 = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
  },
  sr = function (t) {
    return typeof t == "string"
      ? t
      : t
      ? t.displayName || t.name || "Component"
      : "";
  },
  Z0 = null,
  Yd = null,
  um = function e(t) {
    if (t === Z0 && Array.isArray(Yd)) return Yd;
    var n = [];
    return (
      E.Children.forEach(t, function (r) {
        fe(r) ||
          (Gs.isFragment(r) ? (n = n.concat(e(r.props.children))) : n.push(r));
      }),
      (Yd = n),
      (Z0 = t),
      n
    );
  };
function gn(e, t) {
  var n = [],
    r = [];
  return (
    Array.isArray(t)
      ? (r = t.map(function (i) {
          return sr(i);
        }))
      : (r = [sr(t)]),
    um(e).forEach(function (i) {
      var a = mn(i, "type.displayName") || mn(i, "type.name");
      r.indexOf(a) !== -1 && n.push(i);
    }),
    n
  );
}
function Qt(e, t) {
  var n = gn(e, t);
  return n && n[0];
}
var J0 = function (t) {
    if (!t || !t.props) return !1;
    var n = t.props,
      r = n.width,
      i = n.height;
    return !(!q(r) || r <= 0 || !q(i) || i <= 0);
  },
  dR = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  pR = function (t) {
    return t && t.type && mu(t.type) && dR.indexOf(t.type) >= 0;
  },
  hR = function (t) {
    return t && Eh(t) === "object" && "cx" in t && "cy" in t && "r" in t;
  },
  vR = function (t, n, r, i) {
    var a,
      o = (a = Xd == null ? void 0 : Xd[i]) !== null && a !== void 0 ? a : [];
    return (
      (!he(t) && ((i && o.includes(n)) || lR.includes(n))) ||
      (r && lm.includes(n))
    );
  },
  ve = function (t, n, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var i = t;
    if ((E.isValidElement(t) && (i = t.props), !Ja(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        var l;
        vR((l = i) === null || l === void 0 ? void 0 : l[o], o, n, r) &&
          (a[o] = i[o]);
      }),
      a
    );
  },
  Ah = function e(t, n) {
    if (t === n) return !0;
    var r = E.Children.count(t);
    if (r !== E.Children.count(n)) return !1;
    if (r === 0) return !0;
    if (r === 1)
      return e1(Array.isArray(t) ? t[0] : t, Array.isArray(n) ? n[0] : n);
    for (var i = 0; i < r; i++) {
      var a = t[i],
        o = n[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1;
      } else if (!e1(a, o)) return !1;
    }
    return !0;
  },
  e1 = function (t, n) {
    if (fe(t) && fe(n)) return !0;
    if (!fe(t) && !fe(n)) {
      var r = t.props || {},
        i = r.children,
        a = Y0(r, sR),
        o = n.props || {},
        l = o.children,
        u = Y0(o, cR);
      return i && l ? wa(a, u) && Ah(i, l) : !i && !l ? wa(a, u) : !1;
    }
    return !1;
  },
  t1 = function (t, n) {
    var r = [],
      i = {};
    return (
      um(t).forEach(function (a, o) {
        if (pR(a)) r.push(a);
        else if (a) {
          var l = sr(a.type),
            u = n[l] || {},
            s = u.handler,
            f = u.once;
          if (s && (!f || !i[l])) {
            var c = s(a, l, o);
            r.push(c), (i[l] = !0);
          }
        }
      }),
      r
    );
  },
  yR = function (t) {
    var n = t && t.type;
    return n && Q0[n] ? Q0[n] : null;
  },
  mR = function (t, n) {
    return um(n).indexOf(t);
  },
  gR = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];
function Th() {
  return (
    (Th = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Th.apply(this, arguments)
  );
}
function bR(e, t) {
  if (e == null) return {};
  var n = wR(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function wR(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function $h(e) {
  var t = e.children,
    n = e.width,
    r = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    l = e.title,
    u = e.desc,
    s = bR(e, gR),
    f = i || { width: n, height: r, x: 0, y: 0 },
    c = be("recharts-surface", a);
  return T.createElement(
    "svg",
    Th({}, ve(s, !0, "svg"), {
      className: c,
      width: n,
      height: r,
      style: o,
      viewBox: ""
        .concat(f.x, " ")
        .concat(f.y, " ")
        .concat(f.width, " ")
        .concat(f.height),
    }),
    T.createElement("title", null, l),
    T.createElement("desc", null, u),
    t
  );
}
var xR = ["children", "className"];
function Ch() {
  return (
    (Ch = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ch.apply(this, arguments)
  );
}
function SR(e, t) {
  if (e == null) return {};
  var n = _R(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function _R(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Qe = T.forwardRef(function (e, t) {
    var n = e.children,
      r = e.className,
      i = SR(e, xR),
      a = be("recharts-layer", r);
    return T.createElement("g", Ch({ className: a }, ve(i, !0), { ref: t }), n);
  }),
  Ai = function (t, n) {
    for (
      var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), a = 2;
      a < r;
      a++
    )
      i[a - 2] = arguments[a];
  };
function OR(e, t, n) {
  var r = -1,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t),
    (n = n > i ? i : n),
    n < 0 && (n += i),
    (i = t > n ? 0 : (n - t) >>> 0),
    (t >>>= 0);
  for (var a = Array(i); ++r < i; ) a[r] = e[r + t];
  return a;
}
var PR = OR,
  ER = PR;
function AR(e, t, n) {
  var r = e.length;
  return (n = n === void 0 ? r : n), !t && n >= r ? e : ER(e, t, n);
}
var TR = AR,
  $R = "\\ud800-\\udfff",
  CR = "\\u0300-\\u036f",
  jR = "\\ufe20-\\ufe2f",
  kR = "\\u20d0-\\u20ff",
  MR = CR + jR + kR,
  NR = "\\ufe0e\\ufe0f",
  IR = "\\u200d",
  DR = RegExp("[" + IR + $R + MR + NR + "]");
function RR(e) {
  return DR.test(e);
}
var rP = RR;
function LR(e) {
  return e.split("");
}
var BR = LR,
  iP = "\\ud800-\\udfff",
  zR = "\\u0300-\\u036f",
  FR = "\\ufe20-\\ufe2f",
  UR = "\\u20d0-\\u20ff",
  WR = zR + FR + UR,
  HR = "\\ufe0e\\ufe0f",
  KR = "[" + iP + "]",
  jh = "[" + WR + "]",
  kh = "\\ud83c[\\udffb-\\udfff]",
  VR = "(?:" + jh + "|" + kh + ")",
  aP = "[^" + iP + "]",
  oP = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  lP = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  qR = "\\u200d",
  uP = VR + "?",
  sP = "[" + HR + "]?",
  GR = "(?:" + qR + "(?:" + [aP, oP, lP].join("|") + ")" + sP + uP + ")*",
  XR = sP + uP + GR,
  YR = "(?:" + [aP + jh + "?", jh, oP, lP, KR].join("|") + ")",
  QR = RegExp(kh + "(?=" + kh + ")|" + YR + XR, "g");
function ZR(e) {
  return e.match(QR) || [];
}
var JR = ZR,
  eL = BR,
  tL = rP,
  nL = JR;
function rL(e) {
  return tL(e) ? nL(e) : eL(e);
}
var iL = rL,
  aL = TR,
  oL = rP,
  lL = iL,
  uL = JO;
function sL(e) {
  return function (t) {
    t = uL(t);
    var n = oL(t) ? lL(t) : void 0,
      r = n ? n[0] : t.charAt(0),
      i = n ? aL(n, 1).join("") : t.slice(1);
    return r[e]() + i;
  };
}
var cL = sL,
  fL = cL,
  dL = fL("toUpperCase"),
  pL = dL;
const Uf = Te(pL);
function $e(e) {
  return function () {
    return e;
  };
}
const cP = Math.cos,
  rc = Math.sin,
  Bn = Math.sqrt,
  ic = Math.PI,
  Wf = 2 * ic,
  Mh = Math.PI,
  Nh = 2 * Mh,
  hi = 1e-6,
  hL = Nh - hi;
function fP(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function vL(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return fP;
  const n = 10 ** t;
  return function (r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class yL {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? fP : vL(t));
  }
  moveTo(t, n) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
  }
  quadraticCurveTo(t, n, r, i) {
    this._append`Q${+t},${+n},${(this._x1 = +r)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, n, r, i, a, o) {
    this._append`C${+t},${+n},${+r},${+i},${(this._x1 = +a)},${(this._y1 =
      +o)}`;
  }
  arcTo(t, n, r, i, a) {
    if (((t = +t), (n = +n), (r = +r), (i = +i), (a = +a), a < 0))
      throw new Error(`negative radius: ${a}`);
    let o = this._x1,
      l = this._y1,
      u = r - t,
      s = i - n,
      f = o - t,
      c = l - n,
      d = f * f + c * c;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
    else if (d > hi)
      if (!(Math.abs(c * u - s * f) > hi) || !a)
        this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
      else {
        let p = r - o,
          m = i - l,
          v = u * u + s * s,
          b = p * p + m * m,
          g = Math.sqrt(v),
          y = Math.sqrt(d),
          w = a * Math.tan((Mh - Math.acos((v + d - b) / (2 * g * y))) / 2),
          h = w / y,
          x = w / g;
        Math.abs(h - 1) > hi && this._append`L${t + h * f},${n + h * c}`,
          this._append`A${a},${a},0,0,${+(c * p > f * m)},${(this._x1 =
            t + x * u)},${(this._y1 = n + x * s)}`;
      }
  }
  arc(t, n, r, i, a, o) {
    if (((t = +t), (n = +n), (r = +r), (o = !!o), r < 0))
      throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i),
      u = r * Math.sin(i),
      s = t + l,
      f = n + u,
      c = 1 ^ o,
      d = o ? i - a : a - i;
    this._x1 === null
      ? this._append`M${s},${f}`
      : (Math.abs(this._x1 - s) > hi || Math.abs(this._y1 - f) > hi) &&
        this._append`L${s},${f}`,
      r &&
        (d < 0 && (d = (d % Nh) + Nh),
        d > hL
          ? this._append`A${r},${r},0,1,${c},${t - l},${
              n - u
            }A${r},${r},0,1,${c},${(this._x1 = s)},${(this._y1 = f)}`
          : d > hi &&
            this._append`A${r},${r},0,${+(d >= Mh)},${c},${(this._x1 =
              t + r * Math.cos(a))},${(this._y1 = n + r * Math.sin(a))}`);
  }
  rect(t, n, r, i) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
      +n)}h${(r = +r)}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function sm(e) {
  let t = 3;
  return (
    (e.digits = function (n) {
      if (!arguments.length) return t;
      if (n == null) t = null;
      else {
        const r = Math.floor(n);
        if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
        t = r;
      }
      return e;
    }),
    () => new yL(t)
  );
}
function cm(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function dP(e) {
  this._context = e;
}
dP.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function Hf(e) {
  return new dP(e);
}
function pP(e) {
  return e[0];
}
function hP(e) {
  return e[1];
}
function vP(e, t) {
  var n = $e(!0),
    r = null,
    i = Hf,
    a = null,
    o = sm(l);
  (e = typeof e == "function" ? e : e === void 0 ? pP : $e(e)),
    (t = typeof t == "function" ? t : t === void 0 ? hP : $e(t));
  function l(u) {
    var s,
      f = (u = cm(u)).length,
      c,
      d = !1,
      p;
    for (r == null && (a = i((p = o()))), s = 0; s <= f; ++s)
      !(s < f && n((c = u[s]), s, u)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(c, s, u), +t(c, s, u));
    if (p) return (a = null), p + "" || null;
  }
  return (
    (l.x = function (u) {
      return arguments.length
        ? ((e = typeof u == "function" ? u : $e(+u)), l)
        : e;
    }),
    (l.y = function (u) {
      return arguments.length
        ? ((t = typeof u == "function" ? u : $e(+u)), l)
        : t;
    }),
    (l.defined = function (u) {
      return arguments.length
        ? ((n = typeof u == "function" ? u : $e(!!u)), l)
        : n;
    }),
    (l.curve = function (u) {
      return arguments.length ? ((i = u), r != null && (a = i(r)), l) : i;
    }),
    (l.context = function (u) {
      return arguments.length
        ? (u == null ? (r = a = null) : (a = i((r = u))), l)
        : r;
    }),
    l
  );
}
function Qu(e, t, n) {
  var r = null,
    i = $e(!0),
    a = null,
    o = Hf,
    l = null,
    u = sm(s);
  (e = typeof e == "function" ? e : e === void 0 ? pP : $e(+e)),
    (t = typeof t == "function" ? t : $e(t === void 0 ? 0 : +t)),
    (n = typeof n == "function" ? n : n === void 0 ? hP : $e(+n));
  function s(c) {
    var d,
      p,
      m,
      v = (c = cm(c)).length,
      b,
      g = !1,
      y,
      w = new Array(v),
      h = new Array(v);
    for (a == null && (l = o((y = u()))), d = 0; d <= v; ++d) {
      if (!(d < v && i((b = c[d]), d, c)) === g)
        if ((g = !g)) (p = d), l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), m = d - 1; m >= p; --m)
            l.point(w[m], h[m]);
          l.lineEnd(), l.areaEnd();
        }
      g &&
        ((w[d] = +e(b, d, c)),
        (h[d] = +t(b, d, c)),
        l.point(r ? +r(b, d, c) : w[d], n ? +n(b, d, c) : h[d]));
    }
    if (y) return (l = null), y + "" || null;
  }
  function f() {
    return vP().defined(i).curve(o).context(a);
  }
  return (
    (s.x = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : $e(+c)), (r = null), s)
        : e;
    }),
    (s.x0 = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : $e(+c)), s)
        : e;
    }),
    (s.x1 = function (c) {
      return arguments.length
        ? ((r = c == null ? null : typeof c == "function" ? c : $e(+c)), s)
        : r;
    }),
    (s.y = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : $e(+c)), (n = null), s)
        : t;
    }),
    (s.y0 = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : $e(+c)), s)
        : t;
    }),
    (s.y1 = function (c) {
      return arguments.length
        ? ((n = c == null ? null : typeof c == "function" ? c : $e(+c)), s)
        : n;
    }),
    (s.lineX0 = s.lineY0 =
      function () {
        return f().x(e).y(t);
      }),
    (s.lineY1 = function () {
      return f().x(e).y(n);
    }),
    (s.lineX1 = function () {
      return f().x(r).y(t);
    }),
    (s.defined = function (c) {
      return arguments.length
        ? ((i = typeof c == "function" ? c : $e(!!c)), s)
        : i;
    }),
    (s.curve = function (c) {
      return arguments.length ? ((o = c), a != null && (l = o(a)), s) : o;
    }),
    (s.context = function (c) {
      return arguments.length
        ? (c == null ? (a = l = null) : (l = o((a = c))), s)
        : a;
    }),
    s
  );
}
class yP {
  constructor(t, n) {
    (this._context = t), (this._x = n);
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0: {
        (this._point = 1),
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              n,
              t,
              n
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + n) / 2),
              t,
              this._y0,
              t,
              n
            );
        break;
      }
    }
    (this._x0 = t), (this._y0 = n);
  }
}
function mL(e) {
  return new yP(e, !0);
}
function gL(e) {
  return new yP(e, !1);
}
const fm = {
    draw(e, t) {
      const n = Bn(t / ic);
      e.moveTo(n, 0), e.arc(0, 0, n, 0, Wf);
    },
  },
  bL = {
    draw(e, t) {
      const n = Bn(t / 5) / 2;
      e.moveTo(-3 * n, -n),
        e.lineTo(-n, -n),
        e.lineTo(-n, -3 * n),
        e.lineTo(n, -3 * n),
        e.lineTo(n, -n),
        e.lineTo(3 * n, -n),
        e.lineTo(3 * n, n),
        e.lineTo(n, n),
        e.lineTo(n, 3 * n),
        e.lineTo(-n, 3 * n),
        e.lineTo(-n, n),
        e.lineTo(-3 * n, n),
        e.closePath();
    },
  },
  mP = Bn(1 / 3),
  wL = mP * 2,
  xL = {
    draw(e, t) {
      const n = Bn(t / wL),
        r = n * mP;
      e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath();
    },
  },
  SL = {
    draw(e, t) {
      const n = Bn(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  _L = 0.8908130915292852,
  gP = rc(ic / 10) / rc((7 * ic) / 10),
  OL = rc(Wf / 10) * gP,
  PL = -cP(Wf / 10) * gP,
  EL = {
    draw(e, t) {
      const n = Bn(t * _L),
        r = OL * n,
        i = PL * n;
      e.moveTo(0, -n), e.lineTo(r, i);
      for (let a = 1; a < 5; ++a) {
        const o = (Wf * a) / 5,
          l = cP(o),
          u = rc(o);
        e.lineTo(u * n, -l * n), e.lineTo(l * r - u * i, u * r + l * i);
      }
      e.closePath();
    },
  },
  Qd = Bn(3),
  AL = {
    draw(e, t) {
      const n = -Bn(t / (Qd * 3));
      e.moveTo(0, n * 2),
        e.lineTo(-Qd * n, -n),
        e.lineTo(Qd * n, -n),
        e.closePath();
    },
  },
  ln = -0.5,
  un = Bn(3) / 2,
  Ih = 1 / Bn(12),
  TL = (Ih / 2 + 1) * 3,
  $L = {
    draw(e, t) {
      const n = Bn(t / TL),
        r = n / 2,
        i = n * Ih,
        a = r,
        o = n * Ih + n,
        l = -a,
        u = o;
      e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(l, u),
        e.lineTo(ln * r - un * i, un * r + ln * i),
        e.lineTo(ln * a - un * o, un * a + ln * o),
        e.lineTo(ln * l - un * u, un * l + ln * u),
        e.lineTo(ln * r + un * i, ln * i - un * r),
        e.lineTo(ln * a + un * o, ln * o - un * a),
        e.lineTo(ln * l + un * u, ln * u - un * l),
        e.closePath();
    },
  };
function CL(e, t) {
  let n = null,
    r = sm(i);
  (e = typeof e == "function" ? e : $e(e || fm)),
    (t = typeof t == "function" ? t : $e(t === void 0 ? 64 : +t));
  function i() {
    let a;
    if (
      (n || (n = a = r()),
      e.apply(this, arguments).draw(n, +t.apply(this, arguments)),
      a)
    )
      return (n = null), a + "" || null;
  }
  return (
    (i.type = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : $e(a)), i)
        : e;
    }),
    (i.size = function (a) {
      return arguments.length
        ? ((t = typeof a == "function" ? a : $e(+a)), i)
        : t;
    }),
    (i.context = function (a) {
      return arguments.length ? ((n = a ?? null), i) : n;
    }),
    i
  );
}
function ac() {}
function oc(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function bP(e) {
  this._context = e;
}
bP.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        oc(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6
          );
      default:
        oc(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function jL(e) {
  return new bP(e);
}
function wP(e) {
  this._context = e;
}
wP.prototype = {
  areaStart: ac,
  areaEnd: ac,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3
          ),
          this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = e), (this._y2 = t);
        break;
      case 1:
        (this._point = 2), (this._x3 = e), (this._y3 = t);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6
          );
        break;
      default:
        oc(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function kL(e) {
  return new wP(e);
}
function xP(e) {
  this._context = e;
}
xP.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + e) / 6,
          r = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
        break;
      case 3:
        this._point = 4;
      default:
        oc(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function ML(e) {
  return new xP(e);
}
function SP(e) {
  this._context = e;
}
SP.prototype = {
  areaStart: ac,
  areaEnd: ac,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    (e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t));
  },
};
function NL(e) {
  return new SP(e);
}
function n1(e) {
  return e < 0 ? -1 : 1;
}
function r1(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    l = (a * i + o * r) / (r + i);
  return (
    (n1(a) + n1(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(l)) || 0
  );
}
function i1(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function Zd(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    l = (a - r) / 3;
  e._context.bezierCurveTo(r + l, i + l * t, a - l, o - l * n, a, o);
}
function lc(e) {
  this._context = e;
}
lc.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Zd(this, this._t0, i1(this, this._t0));
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    var n = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), Zd(this, i1(this, (n = r1(this, e, t))), n);
          break;
        default:
          Zd(this, this._t0, (n = r1(this, e, t)));
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n);
    }
  },
};
function _P(e) {
  this._context = new OP(e);
}
(_P.prototype = Object.create(lc.prototype)).point = function (e, t) {
  lc.prototype.point.call(this, t, e);
};
function OP(e) {
  this._context = e;
}
OP.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, n, r, i, a) {
    this._context.bezierCurveTo(t, e, r, n, a, i);
  },
};
function IL(e) {
  return new lc(e);
}
function DL(e) {
  return new _P(e);
}
function PP(e) {
  this._context = e;
}
PP.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      n = e.length;
    if (n)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        n === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var r = a1(e), i = a1(t), a = 0, o = 1; o < n; ++a, ++o)
          this._context.bezierCurveTo(
            r[0][a],
            i[0][a],
            r[1][a],
            i[1][a],
            e[o],
            t[o]
          );
    (this._line || (this._line !== 0 && n === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t);
  },
};
function a1(e) {
  var t,
    n = e.length - 1,
    r,
    i = new Array(n),
    a = new Array(n),
    o = new Array(n);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
  for (
    i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1;
    t < n;
    ++t
  )
    (r = i[t] / a[t - 1]), (a[t] -= r), (o[t] -= r * o[t - 1]);
  for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function RL(e) {
  return new PP(e);
}
function Kf(e, t) {
  (this._context = e), (this._t = t);
}
Kf.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, t);
        }
        break;
      }
    }
    (this._x = e), (this._y = t);
  },
};
function LL(e) {
  return new Kf(e, 0.5);
}
function BL(e) {
  return new Kf(e, 0);
}
function zL(e) {
  return new Kf(e, 1);
}
function ka(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, l = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < l; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function Dh(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; ) n[t] = t;
  return n;
}
function FL(e, t) {
  return e[t];
}
function UL(e) {
  const t = [];
  return (t.key = e), t;
}
function WL() {
  var e = $e([]),
    t = Dh,
    n = ka,
    r = FL;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), UL),
      l,
      u = o.length,
      s = -1,
      f;
    for (const c of a)
      for (l = 0, ++s; l < u; ++l)
        (o[l][s] = [0, +r(c, o[l].key, s, a)]).data = c;
    for (l = 0, f = cm(t(o)); l < u; ++l) o[f[l]].index = l;
    return n(o, f), o;
  }
  return (
    (i.keys = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : $e(Array.from(a))), i)
        : e;
    }),
    (i.value = function (a) {
      return arguments.length
        ? ((r = typeof a == "function" ? a : $e(+a)), i)
        : r;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t =
            a == null ? Dh : typeof a == "function" ? a : $e(Array.from(a))),
          i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((n = a ?? ka), i) : n;
    }),
    i
  );
}
function HL(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    ka(e, t);
  }
}
function KL(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, l = 0; o < i; ++o) l += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -l / 2;
    }
    ka(e, t);
  }
}
function VL(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var n = 0, r = 1, i, a, o; r < a; ++r) {
      for (var l = 0, u = 0, s = 0; l < o; ++l) {
        for (
          var f = e[t[l]],
            c = f[r][1] || 0,
            d = f[r - 1][1] || 0,
            p = (c - d) / 2,
            m = 0;
          m < l;
          ++m
        ) {
          var v = e[t[m]],
            b = v[r][1] || 0,
            g = v[r - 1][1] || 0;
          p += b - g;
        }
        (u += c), (s += p * c);
      }
      (i[r - 1][1] += i[r - 1][0] = n), u && (n -= s / u);
    }
    (i[r - 1][1] += i[r - 1][0] = n), ka(e, t);
  }
}
function _l(e) {
  "@babel/helpers - typeof";
  return (
    (_l =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _l(e)
  );
}
var qL = ["type", "size", "sizeType"];
function Rh() {
  return (
    (Rh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rh.apply(this, arguments)
  );
}
function o1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function l1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? o1(Object(n), !0).forEach(function (r) {
          GL(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : o1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function GL(e, t, n) {
  return (
    (t = XL(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function XL(e) {
  var t = YL(e, "string");
  return _l(t) == "symbol" ? t : String(t);
}
function YL(e, t) {
  if (_l(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (_l(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QL(e, t) {
  if (e == null) return {};
  var n = ZL(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function ZL(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var EP = {
    symbolCircle: fm,
    symbolCross: bL,
    symbolDiamond: xL,
    symbolSquare: SL,
    symbolStar: EL,
    symbolTriangle: AL,
    symbolWye: $L,
  },
  JL = Math.PI / 180,
  e3 = function (t) {
    var n = "symbol".concat(Uf(t));
    return EP[n] || fm;
  },
  t3 = function (t, n, r) {
    if (n === "area") return t;
    switch (r) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * JL;
        return (
          1.25 *
          t *
          t *
          (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  n3 = function (t, n) {
    EP["symbol".concat(Uf(t))] = n;
  },
  dm = function (t) {
    var n = t.type,
      r = n === void 0 ? "circle" : n,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      l = o === void 0 ? "area" : o,
      u = QL(t, qL),
      s = l1(l1({}, u), {}, { type: r, size: a, sizeType: l }),
      f = function () {
        var b = e3(r),
          g = CL().type(b).size(t3(a, l, r));
        return g();
      },
      c = s.className,
      d = s.cx,
      p = s.cy,
      m = ve(s, !0);
    return d === +d && p === +p && a === +a
      ? T.createElement(
          "path",
          Rh({}, m, {
            className: be("recharts-symbols", c),
            transform: "translate(".concat(d, ", ").concat(p, ")"),
            d: f(),
          })
        )
      : null;
  };
dm.registerSymbol = n3;
function Ma(e) {
  "@babel/helpers - typeof";
  return (
    (Ma =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ma(e)
  );
}
function Lh() {
  return (
    (Lh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Lh.apply(this, arguments)
  );
}
function u1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function r3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? u1(Object(n), !0).forEach(function (r) {
          Ol(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : u1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function i3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function s1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, TP(r.key), r);
  }
}
function a3(e, t, n) {
  return (
    t && s1(e.prototype, t),
    n && s1(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function o3(e, t, n) {
  return (
    (t = uc(t)),
    l3(
      e,
      AP() ? Reflect.construct(t, n || [], uc(e).constructor) : t.apply(e, n)
    )
  );
}
function l3(e, t) {
  if (t && (Ma(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return u3(e);
}
function u3(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function AP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (AP = function () {
    return !!e;
  })();
}
function uc(e) {
  return (
    (uc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    uc(e)
  );
}
function s3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Bh(e, t);
}
function Bh(e, t) {
  return (
    (Bh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Bh(e, t)
  );
}
function Ol(e, t, n) {
  return (
    (t = TP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function TP(e) {
  var t = c3(e, "string");
  return Ma(t) == "symbol" ? t : String(t);
}
function c3(e, t) {
  if (Ma(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ma(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sn = 32,
  pm = (function (e) {
    s3(t, e);
    function t() {
      return i3(this, t), o3(this, t, arguments);
    }
    return (
      a3(t, [
        {
          key: "renderIcon",
          value: function (r) {
            var i = this.props.inactiveColor,
              a = sn / 2,
              o = sn / 6,
              l = sn / 3,
              u = r.inactive ? i : r.color;
            if (r.type === "plainline")
              return T.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: u,
                strokeDasharray: r.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: sn,
                y2: a,
                className: "recharts-legend-icon",
              });
            if (r.type === "line")
              return T.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: u,
                d: "M0,"
                  .concat(a, "h")
                  .concat(
                    l,
                    `
            A`
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(2 * l, ",")
                  .concat(
                    a,
                    `
            H`
                  )
                  .concat(sn, "M")
                  .concat(2 * l, ",")
                  .concat(
                    a,
                    `
            A`
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(l, ",")
                  .concat(a),
                className: "recharts-legend-icon",
              });
            if (r.type === "rect")
              return T.createElement("path", {
                stroke: "none",
                fill: u,
                d: "M0,"
                  .concat(sn / 8, "h")
                  .concat(sn, "v")
                  .concat((sn * 3) / 4, "h")
                  .concat(-sn, "z"),
                className: "recharts-legend-icon",
              });
            if (T.isValidElement(r.legendIcon)) {
              var s = r3({}, r);
              return delete s.legendIcon, T.cloneElement(r.legendIcon, s);
            }
            return T.createElement(dm, {
              fill: u,
              cx: a,
              cy: a,
              size: sn,
              sizeType: "diameter",
              type: r.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var r = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              l = i.layout,
              u = i.formatter,
              s = i.inactiveColor,
              f = { x: 0, y: 0, width: sn, height: sn },
              c = {
                display: l === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              d = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return a.map(function (p, m) {
              var v = p.formatter || u,
                b = be(
                  Ol(
                    Ol(
                      { "recharts-legend-item": !0 },
                      "legend-item-".concat(m),
                      !0
                    ),
                    "inactive",
                    p.inactive
                  )
                );
              if (p.type === "none") return null;
              var g = he(p.value) ? null : p.value;
              Ai(
                !he(p.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
              );
              var y = p.inactive ? s : p.color;
              return T.createElement(
                "li",
                Lh(
                  { className: b, style: c, key: "legend-item-".concat(m) },
                  nc(r.props, p, m)
                ),
                T.createElement(
                  $h,
                  { width: o, height: o, viewBox: f, style: d },
                  r.renderIcon(p)
                ),
                T.createElement(
                  "span",
                  {
                    className: "recharts-legend-item-text",
                    style: { color: y },
                  },
                  v ? v(g, p, m) : g
                )
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var r = this.props,
              i = r.payload,
              a = r.layout,
              o = r.align;
            if (!i || !i.length) return null;
            var l = {
              padding: 0,
              margin: 0,
              textAlign: a === "horizontal" ? o : "left",
            };
            return T.createElement(
              "ul",
              { className: "recharts-default-legend", style: l },
              this.renderItems()
            );
          },
        },
      ]),
      t
    );
  })(E.PureComponent);
Ol(pm, "displayName", "Legend");
Ol(pm, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
var f3 = Bf;
function d3() {
  (this.__data__ = new f3()), (this.size = 0);
}
var p3 = d3;
function h3(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var v3 = h3;
function y3(e) {
  return this.__data__.get(e);
}
var m3 = y3;
function g3(e) {
  return this.__data__.has(e);
}
var b3 = g3,
  w3 = Bf,
  x3 = nm,
  S3 = rm,
  _3 = 200;
function O3(e, t) {
  var n = this.__data__;
  if (n instanceof w3) {
    var r = n.__data__;
    if (!x3 || r.length < _3 - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new S3(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var P3 = O3,
  E3 = Bf,
  A3 = p3,
  T3 = v3,
  $3 = m3,
  C3 = b3,
  j3 = P3;
function ro(e) {
  var t = (this.__data__ = new E3(e));
  this.size = t.size;
}
ro.prototype.clear = A3;
ro.prototype.delete = T3;
ro.prototype.get = $3;
ro.prototype.has = C3;
ro.prototype.set = j3;
var $P = ro,
  k3 = "__lodash_hash_undefined__";
function M3(e) {
  return this.__data__.set(e, k3), this;
}
var N3 = M3;
function I3(e) {
  return this.__data__.has(e);
}
var D3 = I3,
  R3 = rm,
  L3 = N3,
  B3 = D3;
function sc(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new R3(); ++t < n; ) this.add(e[t]);
}
sc.prototype.add = sc.prototype.push = L3;
sc.prototype.has = B3;
var CP = sc;
function z3(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
var jP = z3;
function F3(e, t) {
  return e.has(t);
}
var kP = F3,
  U3 = CP,
  W3 = jP,
  H3 = kP,
  K3 = 1,
  V3 = 2;
function q3(e, t, n, r, i, a) {
  var o = n & K3,
    l = e.length,
    u = t.length;
  if (l != u && !(o && u > l)) return !1;
  var s = a.get(e),
    f = a.get(t);
  if (s && f) return s == t && f == e;
  var c = -1,
    d = !0,
    p = n & V3 ? new U3() : void 0;
  for (a.set(e, t), a.set(t, e); ++c < l; ) {
    var m = e[c],
      v = t[c];
    if (r) var b = o ? r(v, m, c, t, e, a) : r(m, v, c, e, t, a);
    if (b !== void 0) {
      if (b) continue;
      d = !1;
      break;
    }
    if (p) {
      if (
        !W3(t, function (g, y) {
          if (!H3(p, y) && (m === g || i(m, g, n, r, a))) return p.push(y);
        })
      ) {
        d = !1;
        break;
      }
    } else if (!(m === v || i(m, v, n, r, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var MP = q3,
  G3 = Zn,
  X3 = G3.Uint8Array,
  Y3 = X3;
function Q3(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, i) {
      n[++t] = [i, r];
    }),
    n
  );
}
var Z3 = Q3;
function J3(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var hm = J3,
  c1 = yu,
  f1 = Y3,
  e4 = tm,
  t4 = MP,
  n4 = Z3,
  r4 = hm,
  i4 = 1,
  a4 = 2,
  o4 = "[object Boolean]",
  l4 = "[object Date]",
  u4 = "[object Error]",
  s4 = "[object Map]",
  c4 = "[object Number]",
  f4 = "[object RegExp]",
  d4 = "[object Set]",
  p4 = "[object String]",
  h4 = "[object Symbol]",
  v4 = "[object ArrayBuffer]",
  y4 = "[object DataView]",
  d1 = c1 ? c1.prototype : void 0,
  Jd = d1 ? d1.valueOf : void 0;
function m4(e, t, n, r, i, a, o) {
  switch (n) {
    case y4:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case v4:
      return !(e.byteLength != t.byteLength || !a(new f1(e), new f1(t)));
    case o4:
    case l4:
    case c4:
      return e4(+e, +t);
    case u4:
      return e.name == t.name && e.message == t.message;
    case f4:
    case p4:
      return e == t + "";
    case s4:
      var l = n4;
    case d4:
      var u = r & i4;
      if ((l || (l = r4), e.size != t.size && !u)) return !1;
      var s = o.get(e);
      if (s) return s == t;
      (r |= a4), o.set(e, t);
      var f = t4(l(e), l(t), r, i, a, o);
      return o.delete(e), f;
    case h4:
      if (Jd) return Jd.call(e) == Jd.call(t);
  }
  return !1;
}
var g4 = m4;
function b4(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
  return e;
}
var NP = b4,
  w4 = NP,
  x4 = qt;
function S4(e, t, n) {
  var r = t(e);
  return x4(e) ? r : w4(r, n(e));
}
var _4 = S4;
function O4(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (a[i++] = o);
  }
  return a;
}
var P4 = O4;
function E4() {
  return [];
}
var A4 = E4,
  T4 = P4,
  $4 = A4,
  C4 = Object.prototype,
  j4 = C4.propertyIsEnumerable,
  p1 = Object.getOwnPropertySymbols,
  k4 = p1
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            T4(p1(e), function (t) {
              return j4.call(e, t);
            }));
      }
    : $4,
  M4 = k4;
function N4(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var I4 = N4,
  D4 = Or,
  R4 = Pr,
  L4 = "[object Arguments]";
function B4(e) {
  return R4(e) && D4(e) == L4;
}
var z4 = B4,
  h1 = z4,
  F4 = Pr,
  IP = Object.prototype,
  U4 = IP.hasOwnProperty,
  W4 = IP.propertyIsEnumerable,
  H4 = h1(
    (function () {
      return arguments;
    })()
  )
    ? h1
    : function (e) {
        return F4(e) && U4.call(e, "callee") && !W4.call(e, "callee");
      },
  vm = H4,
  cc = { exports: {} };
function K4() {
  return !1;
}
var V4 = K4;
cc.exports;
(function (e, t) {
  var n = Zn,
    r = V4,
    i = t && !t.nodeType && t,
    a = i && !0 && e && !e.nodeType && e,
    o = a && a.exports === i,
    l = o ? n.Buffer : void 0,
    u = l ? l.isBuffer : void 0,
    s = u || r;
  e.exports = s;
})(cc, cc.exports);
var DP = cc.exports,
  q4 = 9007199254740991,
  G4 = /^(?:0|[1-9]\d*)$/;
function X4(e, t) {
  var n = typeof e;
  return (
    (t = t ?? q4),
    !!t &&
      (n == "number" || (n != "symbol" && G4.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var ym = X4,
  Y4 = 9007199254740991;
function Q4(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Y4;
}
var mm = Q4,
  Z4 = Or,
  J4 = mm,
  eB = Pr,
  tB = "[object Arguments]",
  nB = "[object Array]",
  rB = "[object Boolean]",
  iB = "[object Date]",
  aB = "[object Error]",
  oB = "[object Function]",
  lB = "[object Map]",
  uB = "[object Number]",
  sB = "[object Object]",
  cB = "[object RegExp]",
  fB = "[object Set]",
  dB = "[object String]",
  pB = "[object WeakMap]",
  hB = "[object ArrayBuffer]",
  vB = "[object DataView]",
  yB = "[object Float32Array]",
  mB = "[object Float64Array]",
  gB = "[object Int8Array]",
  bB = "[object Int16Array]",
  wB = "[object Int32Array]",
  xB = "[object Uint8Array]",
  SB = "[object Uint8ClampedArray]",
  _B = "[object Uint16Array]",
  OB = "[object Uint32Array]",
  Me = {};
Me[yB] =
  Me[mB] =
  Me[gB] =
  Me[bB] =
  Me[wB] =
  Me[xB] =
  Me[SB] =
  Me[_B] =
  Me[OB] =
    !0;
Me[tB] =
  Me[nB] =
  Me[hB] =
  Me[rB] =
  Me[vB] =
  Me[iB] =
  Me[aB] =
  Me[oB] =
  Me[lB] =
  Me[uB] =
  Me[sB] =
  Me[cB] =
  Me[fB] =
  Me[dB] =
  Me[pB] =
    !1;
function PB(e) {
  return eB(e) && J4(e.length) && !!Me[Z4(e)];
}
var EB = PB;
function AB(e) {
  return function (t) {
    return e(t);
  };
}
var RP = AB,
  fc = { exports: {} };
fc.exports;
(function (e, t) {
  var n = qO,
    r = t && !t.nodeType && t,
    i = r && !0 && e && !e.nodeType && e,
    a = i && i.exports === r,
    o = a && n.process,
    l = (function () {
      try {
        var u = i && i.require && i.require("util").types;
        return u || (o && o.binding && o.binding("util"));
      } catch {}
    })();
  e.exports = l;
})(fc, fc.exports);
var TB = fc.exports,
  $B = EB,
  CB = RP,
  v1 = TB,
  y1 = v1 && v1.isTypedArray,
  jB = y1 ? CB(y1) : $B,
  LP = jB,
  kB = I4,
  MB = vm,
  NB = qt,
  IB = DP,
  DB = ym,
  RB = LP,
  LB = Object.prototype,
  BB = LB.hasOwnProperty;
function zB(e, t) {
  var n = NB(e),
    r = !n && MB(e),
    i = !n && !r && IB(e),
    a = !n && !r && !i && RB(e),
    o = n || r || i || a,
    l = o ? kB(e.length, String) : [],
    u = l.length;
  for (var s in e)
    (t || BB.call(e, s)) &&
      !(
        o &&
        (s == "length" ||
          (i && (s == "offset" || s == "parent")) ||
          (a && (s == "buffer" || s == "byteLength" || s == "byteOffset")) ||
          DB(s, u))
      ) &&
      l.push(s);
  return l;
}
var FB = zB,
  UB = Object.prototype;
function WB(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || UB;
  return e === n;
}
var HB = WB;
function KB(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var BP = KB,
  VB = BP,
  qB = VB(Object.keys, Object),
  GB = qB,
  XB = HB,
  YB = GB,
  QB = Object.prototype,
  ZB = QB.hasOwnProperty;
function JB(e) {
  if (!XB(e)) return YB(e);
  var t = [];
  for (var n in Object(e)) ZB.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var e8 = JB,
  t8 = em,
  n8 = mm;
function r8(e) {
  return e != null && n8(e.length) && !t8(e);
}
var Vf = r8,
  i8 = FB,
  a8 = e8,
  o8 = Vf;
function l8(e) {
  return o8(e) ? i8(e) : a8(e);
}
var gm = l8,
  u8 = _4,
  s8 = M4,
  c8 = gm;
function f8(e) {
  return u8(e, c8, s8);
}
var d8 = f8,
  m1 = d8,
  p8 = 1,
  h8 = Object.prototype,
  v8 = h8.hasOwnProperty;
function y8(e, t, n, r, i, a) {
  var o = n & p8,
    l = m1(e),
    u = l.length,
    s = m1(t),
    f = s.length;
  if (u != f && !o) return !1;
  for (var c = u; c--; ) {
    var d = l[c];
    if (!(o ? d in t : v8.call(t, d))) return !1;
  }
  var p = a.get(e),
    m = a.get(t);
  if (p && m) return p == t && m == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var b = o; ++c < u; ) {
    d = l[c];
    var g = e[d],
      y = t[d];
    if (r) var w = o ? r(y, g, d, t, e, a) : r(g, y, d, e, t, a);
    if (!(w === void 0 ? g === y || i(g, y, n, r, a) : w)) {
      v = !1;
      break;
    }
    b || (b = d == "constructor");
  }
  if (v && !b) {
    var h = e.constructor,
      x = t.constructor;
    h != x &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof h == "function" &&
        h instanceof h &&
        typeof x == "function" &&
        x instanceof x
      ) &&
      (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var m8 = y8,
  g8 = zi,
  b8 = Zn,
  w8 = g8(b8, "DataView"),
  x8 = w8,
  S8 = zi,
  _8 = Zn,
  O8 = S8(_8, "Promise"),
  P8 = O8,
  E8 = zi,
  A8 = Zn,
  T8 = E8(A8, "Set"),
  zP = T8,
  $8 = zi,
  C8 = Zn,
  j8 = $8(C8, "WeakMap"),
  k8 = j8,
  zh = x8,
  Fh = nm,
  Uh = P8,
  Wh = zP,
  Hh = k8,
  FP = Or,
  io = XO,
  g1 = "[object Map]",
  M8 = "[object Object]",
  b1 = "[object Promise]",
  w1 = "[object Set]",
  x1 = "[object WeakMap]",
  S1 = "[object DataView]",
  N8 = io(zh),
  I8 = io(Fh),
  D8 = io(Uh),
  R8 = io(Wh),
  L8 = io(Hh),
  vi = FP;
((zh && vi(new zh(new ArrayBuffer(1))) != S1) ||
  (Fh && vi(new Fh()) != g1) ||
  (Uh && vi(Uh.resolve()) != b1) ||
  (Wh && vi(new Wh()) != w1) ||
  (Hh && vi(new Hh()) != x1)) &&
  (vi = function (e) {
    var t = FP(e),
      n = t == M8 ? e.constructor : void 0,
      r = n ? io(n) : "";
    if (r)
      switch (r) {
        case N8:
          return S1;
        case I8:
          return g1;
        case D8:
          return b1;
        case R8:
          return w1;
        case L8:
          return x1;
      }
    return t;
  });
var B8 = vi,
  ep = $P,
  z8 = MP,
  F8 = g4,
  U8 = m8,
  _1 = B8,
  O1 = qt,
  P1 = DP,
  W8 = LP,
  H8 = 1,
  E1 = "[object Arguments]",
  A1 = "[object Array]",
  Zu = "[object Object]",
  K8 = Object.prototype,
  T1 = K8.hasOwnProperty;
function V8(e, t, n, r, i, a) {
  var o = O1(e),
    l = O1(t),
    u = o ? A1 : _1(e),
    s = l ? A1 : _1(t);
  (u = u == E1 ? Zu : u), (s = s == E1 ? Zu : s);
  var f = u == Zu,
    c = s == Zu,
    d = u == s;
  if (d && P1(e)) {
    if (!P1(t)) return !1;
    (o = !0), (f = !1);
  }
  if (d && !f)
    return (
      a || (a = new ep()),
      o || W8(e) ? z8(e, t, n, r, i, a) : F8(e, t, u, n, r, i, a)
    );
  if (!(n & H8)) {
    var p = f && T1.call(e, "__wrapped__"),
      m = c && T1.call(t, "__wrapped__");
    if (p || m) {
      var v = p ? e.value() : e,
        b = m ? t.value() : t;
      return a || (a = new ep()), i(v, b, n, r, a);
    }
  }
  return d ? (a || (a = new ep()), U8(e, t, n, r, i, a)) : !1;
}
var q8 = V8,
  G8 = q8,
  $1 = Pr;
function UP(e, t, n, r, i) {
  return e === t
    ? !0
    : e == null || t == null || (!$1(e) && !$1(t))
    ? e !== e && t !== t
    : G8(e, t, n, r, UP, i);
}
var bm = UP,
  X8 = $P,
  Y8 = bm,
  Q8 = 1,
  Z8 = 2;
function J8(e, t, n, r) {
  var i = n.length,
    a = i,
    o = !r;
  if (e == null) return !a;
  for (e = Object(e); i--; ) {
    var l = n[i];
    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
  }
  for (; ++i < a; ) {
    l = n[i];
    var u = l[0],
      s = e[u],
      f = l[1];
    if (o && l[2]) {
      if (s === void 0 && !(u in e)) return !1;
    } else {
      var c = new X8();
      if (r) var d = r(s, f, u, e, t, c);
      if (!(d === void 0 ? Y8(f, s, Q8 | Z8, r, c) : d)) return !1;
    }
  }
  return !0;
}
var e6 = J8,
  t6 = ri;
function n6(e) {
  return e === e && !t6(e);
}
var WP = n6,
  r6 = WP,
  i6 = gm;
function a6(e) {
  for (var t = i6(e), n = t.length; n--; ) {
    var r = t[n],
      i = e[r];
    t[n] = [r, i, r6(i)];
  }
  return t;
}
var o6 = a6;
function l6(e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var HP = l6,
  u6 = e6,
  s6 = o6,
  c6 = HP;
function f6(e) {
  var t = s6(e);
  return t.length == 1 && t[0][2]
    ? c6(t[0][0], t[0][1])
    : function (n) {
        return n === e || u6(n, e, t);
      };
}
var d6 = f6;
function p6(e, t) {
  return e != null && t in Object(e);
}
var h6 = p6,
  v6 = eP,
  y6 = vm,
  m6 = qt,
  g6 = ym,
  b6 = mm,
  w6 = Ff;
function x6(e, t, n) {
  t = v6(t, e);
  for (var r = -1, i = t.length, a = !1; ++r < i; ) {
    var o = w6(t[r]);
    if (!(a = e != null && n(e, o))) break;
    e = e[o];
  }
  return a || ++r != i
    ? a
    : ((i = e == null ? 0 : e.length),
      !!i && b6(i) && g6(o, i) && (m6(e) || y6(e)));
}
var S6 = x6,
  _6 = h6,
  O6 = S6;
function P6(e, t) {
  return e != null && O6(e, t, _6);
}
var E6 = P6,
  A6 = bm,
  T6 = tP,
  $6 = E6,
  C6 = Jy,
  j6 = WP,
  k6 = HP,
  M6 = Ff,
  N6 = 1,
  I6 = 2;
function D6(e, t) {
  return C6(e) && j6(t)
    ? k6(M6(e), t)
    : function (n) {
        var r = T6(n, e);
        return r === void 0 && r === t ? $6(n, e) : A6(t, r, N6 | I6);
      };
}
var R6 = D6;
function L6(e) {
  return e;
}
var ao = L6;
function B6(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var z6 = B6,
  F6 = om;
function U6(e) {
  return function (t) {
    return F6(t, e);
  };
}
var W6 = U6,
  H6 = z6,
  K6 = W6,
  V6 = Jy,
  q6 = Ff;
function G6(e) {
  return V6(e) ? H6(q6(e)) : K6(e);
}
var X6 = G6,
  Y6 = d6,
  Q6 = R6,
  Z6 = ao,
  J6 = qt,
  e5 = X6;
function t5(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? Z6
    : typeof e == "object"
    ? J6(e)
      ? Q6(e[0], e[1])
      : Y6(e)
    : e5(e);
}
var oo = t5;
function n5(e, t, n, r) {
  for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i; )
    if (t(e[a], a, e)) return a;
  return -1;
}
var r5 = n5;
function i5(e) {
  return e !== e;
}
var a5 = i5;
function o5(e, t, n) {
  for (var r = n - 1, i = e.length; ++r < i; ) if (e[r] === t) return r;
  return -1;
}
var l5 = o5,
  u5 = r5,
  s5 = a5,
  c5 = l5;
function f5(e, t, n) {
  return t === t ? c5(e, t, n) : u5(e, s5, n);
}
var d5 = f5,
  p5 = d5;
function h5(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && p5(e, t, 0) > -1;
}
var v5 = h5;
function y5(e, t, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (n(t, e[r])) return !0;
  return !1;
}
var m5 = y5;
function g5() {}
var b5 = g5,
  tp = zP,
  w5 = b5,
  x5 = hm,
  S5 = 1 / 0,
  _5 =
    tp && 1 / x5(new tp([, -0]))[1] == S5
      ? function (e) {
          return new tp(e);
        }
      : w5,
  O5 = _5,
  P5 = CP,
  E5 = v5,
  A5 = m5,
  T5 = kP,
  $5 = O5,
  C5 = hm,
  j5 = 200;
function k5(e, t, n) {
  var r = -1,
    i = E5,
    a = e.length,
    o = !0,
    l = [],
    u = l;
  if (n) (o = !1), (i = A5);
  else if (a >= j5) {
    var s = t ? null : $5(e);
    if (s) return C5(s);
    (o = !1), (i = T5), (u = new P5());
  } else u = t ? [] : l;
  e: for (; ++r < a; ) {
    var f = e[r],
      c = t ? t(f) : f;
    if (((f = n || f !== 0 ? f : 0), o && c === c)) {
      for (var d = u.length; d--; ) if (u[d] === c) continue e;
      t && u.push(c), l.push(f);
    } else i(u, c, n) || (u !== l && u.push(c), l.push(f));
  }
  return l;
}
var M5 = k5,
  N5 = oo,
  I5 = M5;
function D5(e, t) {
  return e && e.length ? I5(e, N5(t)) : [];
}
var R5 = D5;
const C1 = Te(R5);
function KP(e, t, n) {
  return t === !0 ? C1(e, n) : he(t) ? C1(e, t) : e;
}
function Na(e) {
  "@babel/helpers - typeof";
  return (
    (Na =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Na(e)
  );
}
var L5 = ["ref"];
function j1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ci(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? j1(Object(n), !0).forEach(function (r) {
          qf(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : j1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function B5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function k1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, GP(r.key), r);
  }
}
function z5(e, t, n) {
  return (
    t && k1(e.prototype, t),
    n && k1(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function F5(e, t, n) {
  return (
    (t = dc(t)),
    U5(
      e,
      VP() ? Reflect.construct(t, n || [], dc(e).constructor) : t.apply(e, n)
    )
  );
}
function U5(e, t) {
  if (t && (Na(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return qP(e);
}
function VP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (VP = function () {
    return !!e;
  })();
}
function dc(e) {
  return (
    (dc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    dc(e)
  );
}
function qP(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function W5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Kh(e, t);
}
function Kh(e, t) {
  return (
    (Kh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Kh(e, t)
  );
}
function qf(e, t, n) {
  return (
    (t = GP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function GP(e) {
  var t = H5(e, "string");
  return Na(t) == "symbol" ? t : String(t);
}
function H5(e, t) {
  if (Na(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Na(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function K5(e, t) {
  if (e == null) return {};
  var n = V5(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function V5(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function q5(e) {
  return e.value;
}
function G5(e, t) {
  if (T.isValidElement(e)) return T.cloneElement(e, t);
  if (typeof e == "function") return T.createElement(e, t);
  t.ref;
  var n = K5(t, L5);
  return T.createElement(pm, n);
}
var M1 = 1,
  Pl = (function (e) {
    W5(t, e);
    function t() {
      var n;
      B5(this, t);
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      return (
        (n = F5(this, t, [].concat(i))),
        qf(qP(n), "lastBoundingBox", { width: -1, height: -1 }),
        n
      );
    }
    return (
      z5(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var r = this.wrapperNode.getBoundingClientRect();
                return (
                  (r.height = this.wrapperNode.offsetHeight),
                  (r.width = this.wrapperNode.offsetWidth),
                  r
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var r = this.props.onBBoxUpdate,
                i = this.getBBox();
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > M1 ||
                    Math.abs(i.height - this.lastBoundingBox.height) > M1) &&
                  ((this.lastBoundingBox.width = i.width),
                  (this.lastBoundingBox.height = i.height),
                  r && r(i))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  r && r(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? ci({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (r) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                l = i.verticalAlign,
                u = i.margin,
                s = i.chartWidth,
                f = i.chartHeight,
                c,
                d;
              if (
                !r ||
                ((r.left === void 0 || r.left === null) &&
                  (r.right === void 0 || r.right === null))
              )
                if (o === "center" && a === "vertical") {
                  var p = this.getBBoxSnapshot();
                  c = { left: ((s || 0) - p.width) / 2 };
                } else
                  c =
                    o === "right"
                      ? { right: (u && u.right) || 0 }
                      : { left: (u && u.left) || 0 };
              if (
                !r ||
                ((r.top === void 0 || r.top === null) &&
                  (r.bottom === void 0 || r.bottom === null))
              )
                if (l === "middle") {
                  var m = this.getBBoxSnapshot();
                  d = { top: ((f || 0) - m.height) / 2 };
                } else
                  d =
                    l === "bottom"
                      ? { bottom: (u && u.bottom) || 0 }
                      : { top: (u && u.top) || 0 };
              return ci(ci({}, c), d);
            },
          },
          {
            key: "render",
            value: function () {
              var r = this,
                i = this.props,
                a = i.content,
                o = i.width,
                l = i.height,
                u = i.wrapperStyle,
                s = i.payloadUniqBy,
                f = i.payload,
                c = ci(
                  ci(
                    {
                      position: "absolute",
                      width: o || "auto",
                      height: l || "auto",
                    },
                    this.getDefaultPosition(u)
                  ),
                  u
                );
              return T.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: c,
                  ref: function (p) {
                    r.wrapperNode = p;
                  },
                },
                G5(a, ci(ci({}, this.props), {}, { payload: KP(f, s, q5) }))
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (r, i) {
              var a = r.props.layout;
              return a === "vertical" && q(r.props.height)
                ? { height: r.props.height }
                : a === "horizontal"
                ? { width: r.props.width || i }
                : null;
            },
          },
        ]
      ),
      t
    );
  })(E.PureComponent);
qf(Pl, "displayName", "Legend");
qf(Pl, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
var N1 = yu,
  X5 = vm,
  Y5 = qt,
  I1 = N1 ? N1.isConcatSpreadable : void 0;
function Q5(e) {
  return Y5(e) || X5(e) || !!(I1 && e && e[I1]);
}
var Z5 = Q5,
  J5 = NP,
  ez = Z5;
function XP(e, t, n, r, i) {
  var a = -1,
    o = e.length;
  for (n || (n = ez), i || (i = []); ++a < o; ) {
    var l = e[a];
    t > 0 && n(l)
      ? t > 1
        ? XP(l, t - 1, n, r, i)
        : J5(i, l)
      : r || (i[i.length] = l);
  }
  return i;
}
var YP = XP;
function tz(e) {
  return function (t, n, r) {
    for (var i = -1, a = Object(t), o = r(t), l = o.length; l--; ) {
      var u = o[e ? l : ++i];
      if (n(a[u], u, a) === !1) break;
    }
    return t;
  };
}
var nz = tz,
  rz = nz,
  iz = rz(),
  az = iz,
  oz = az,
  lz = gm;
function uz(e, t) {
  return e && oz(e, t, lz);
}
var QP = uz,
  sz = Vf;
function cz(e, t) {
  return function (n, r) {
    if (n == null) return n;
    if (!sz(n)) return e(n, r);
    for (
      var i = n.length, a = t ? i : -1, o = Object(n);
      (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;

    );
    return n;
  };
}
var fz = cz,
  dz = QP,
  pz = fz,
  hz = pz(dz),
  wm = hz,
  vz = wm,
  yz = Vf;
function mz(e, t) {
  var n = -1,
    r = yz(e) ? Array(e.length) : [];
  return (
    vz(e, function (i, a, o) {
      r[++n] = t(i, a, o);
    }),
    r
  );
}
var ZP = mz;
function gz(e, t) {
  var n = e.length;
  for (e.sort(t); n--; ) e[n] = e[n].value;
  return e;
}
var bz = gz,
  D1 = Za;
function wz(e, t) {
  if (e !== t) {
    var n = e !== void 0,
      r = e === null,
      i = e === e,
      a = D1(e),
      o = t !== void 0,
      l = t === null,
      u = t === t,
      s = D1(t);
    if (
      (!l && !s && !a && e > t) ||
      (a && o && u && !l && !s) ||
      (r && o && u) ||
      (!n && u) ||
      !i
    )
      return 1;
    if (
      (!r && !a && !s && e < t) ||
      (s && n && i && !r && !a) ||
      (l && n && i) ||
      (!o && i) ||
      !u
    )
      return -1;
  }
  return 0;
}
var xz = wz,
  Sz = xz;
function _z(e, t, n) {
  for (
    var r = -1, i = e.criteria, a = t.criteria, o = i.length, l = n.length;
    ++r < o;

  ) {
    var u = Sz(i[r], a[r]);
    if (u) {
      if (r >= l) return u;
      var s = n[r];
      return u * (s == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var Oz = _z,
  np = am,
  Pz = om,
  Ez = oo,
  Az = ZP,
  Tz = bz,
  $z = RP,
  Cz = Oz,
  jz = ao,
  kz = qt;
function Mz(e, t, n) {
  t.length
    ? (t = np(t, function (a) {
        return kz(a)
          ? function (o) {
              return Pz(o, a.length === 1 ? a[0] : a);
            }
          : a;
      }))
    : (t = [jz]);
  var r = -1;
  t = np(t, $z(Ez));
  var i = Az(e, function (a, o, l) {
    var u = np(t, function (s) {
      return s(a);
    });
    return { criteria: u, index: ++r, value: a };
  });
  return Tz(i, function (a, o) {
    return Cz(a, o, n);
  });
}
var Nz = Mz;
function Iz(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Dz = Iz,
  Rz = Dz,
  R1 = Math.max;
function Lz(e, t, n) {
  return (
    (t = R1(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, i = -1, a = R1(r.length - t, 0), o = Array(a);
        ++i < a;

      )
        o[i] = r[t + i];
      i = -1;
      for (var l = Array(t + 1); ++i < t; ) l[i] = r[i];
      return (l[t] = n(o)), Rz(e, this, l);
    }
  );
}
var Bz = Lz;
function zz(e) {
  return function () {
    return e;
  };
}
var Fz = zz,
  Uz = zi,
  Wz = (function () {
    try {
      var e = Uz(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  JP = Wz,
  Hz = Fz,
  L1 = JP,
  Kz = ao,
  Vz = L1
    ? function (e, t) {
        return L1(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Hz(t),
          writable: !0,
        });
      }
    : Kz,
  qz = Vz,
  Gz = 800,
  Xz = 16,
  Yz = Date.now;
function Qz(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = Yz(),
      i = Xz - (r - n);
    if (((n = r), i > 0)) {
      if (++t >= Gz) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var Zz = Qz,
  Jz = qz,
  eF = Zz,
  tF = eF(Jz),
  nF = tF,
  rF = ao,
  iF = Bz,
  aF = nF;
function oF(e, t) {
  return aF(iF(e, t, rF), e + "");
}
var lF = oF,
  uF = tm,
  sF = Vf,
  cF = ym,
  fF = ri;
function dF(e, t, n) {
  if (!fF(n)) return !1;
  var r = typeof t;
  return (r == "number" ? sF(n) && cF(t, n.length) : r == "string" && t in n)
    ? uF(n[t], e)
    : !1;
}
var Gf = dF,
  pF = YP,
  hF = Nz,
  vF = lF,
  B1 = Gf,
  yF = vF(function (e, t) {
    if (e == null) return [];
    var n = t.length;
    return (
      n > 1 && B1(e, t[0], t[1])
        ? (t = [])
        : n > 2 && B1(t[0], t[1], t[2]) && (t = [t[0]]),
      hF(e, pF(t, 1), [])
    );
  }),
  mF = yF;
const xm = Te(mF);
function El(e) {
  "@babel/helpers - typeof";
  return (
    (El =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    El(e)
  );
}
function Vh() {
  return (
    (Vh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vh.apply(this, arguments)
  );
}
function gF(e, t) {
  return SF(e) || xF(e, t) || wF(e, t) || bF();
}
function bF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wF(e, t) {
  if (e) {
    if (typeof e == "string") return z1(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return z1(e, t);
  }
}
function z1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function xF(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function SF(e) {
  if (Array.isArray(e)) return e;
}
function F1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function rp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? F1(Object(n), !0).forEach(function (r) {
          _F(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : F1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _F(e, t, n) {
  return (
    (t = OF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function OF(e) {
  var t = PF(e, "string");
  return El(t) == "symbol" ? t : String(t);
}
function PF(e, t) {
  if (El(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (El(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EF(e) {
  return Array.isArray(e) && ot(e[0]) && ot(e[1]) ? e.join(" ~ ") : e;
}
var AF = function (t) {
  var n = t.separator,
    r = n === void 0 ? " : " : n,
    i = t.contentStyle,
    a = i === void 0 ? {} : i,
    o = t.itemStyle,
    l = o === void 0 ? {} : o,
    u = t.labelStyle,
    s = u === void 0 ? {} : u,
    f = t.payload,
    c = t.formatter,
    d = t.itemSorter,
    p = t.wrapperClassName,
    m = t.labelClassName,
    v = t.label,
    b = t.labelFormatter,
    g = t.accessibilityLayer,
    y = g === void 0 ? !1 : g,
    w = function () {
      if (f && f.length) {
        var $ = { padding: 0, margin: 0 },
          D = (d ? xm(f, d) : f).map(function (N, z) {
            if (N.type === "none") return null;
            var R = rp(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: N.color || "#000",
                },
                l
              ),
              W = N.formatter || c || EF,
              j = N.value,
              B = N.name,
              K = j,
              Z = B;
            if (W && K != null && Z != null) {
              var V = W(j, B, N, z, f);
              if (Array.isArray(V)) {
                var oe = gF(V, 2);
                (K = oe[0]), (Z = oe[1]);
              } else K = V;
            }
            return T.createElement(
              "li",
              {
                className: "recharts-tooltip-item",
                key: "tooltip-item-".concat(z),
                style: R,
              },
              ot(Z)
                ? T.createElement(
                    "span",
                    { className: "recharts-tooltip-item-name" },
                    Z
                  )
                : null,
              ot(Z)
                ? T.createElement(
                    "span",
                    { className: "recharts-tooltip-item-separator" },
                    r
                  )
                : null,
              T.createElement(
                "span",
                { className: "recharts-tooltip-item-value" },
                K
              ),
              T.createElement(
                "span",
                { className: "recharts-tooltip-item-unit" },
                N.unit || ""
              )
            );
          });
        return T.createElement(
          "ul",
          { className: "recharts-tooltip-item-list", style: $ },
          D
        );
      }
      return null;
    },
    h = rp(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      a
    ),
    x = rp({ margin: 0 }, s),
    S = !fe(v),
    _ = S ? v : "",
    O = be("recharts-default-tooltip", p),
    C = be("recharts-tooltip-label", m);
  S && b && f !== void 0 && f !== null && (_ = b(v, f));
  var A = y ? { role: "status", "aria-live": "assertive" } : {};
  return T.createElement(
    "div",
    Vh({ className: O, style: h }, A),
    T.createElement(
      "p",
      { className: C, style: x },
      T.isValidElement(_) ? _ : "".concat(_)
    ),
    w()
  );
};
function Al(e) {
  "@babel/helpers - typeof";
  return (
    (Al =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Al(e)
  );
}
function Ju(e, t, n) {
  return (
    (t = TF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function TF(e) {
  var t = $F(e, "string");
  return Al(t) == "symbol" ? t : String(t);
}
function $F(e, t) {
  if (Al(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Al(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var To = "recharts-tooltip-wrapper",
  CF = { visibility: "hidden" };
function jF(e) {
  var t = e.coordinate,
    n = e.translateX,
    r = e.translateY;
  return be(
    To,
    Ju(
      Ju(
        Ju(
          Ju({}, "".concat(To, "-right"), q(n) && t && q(t.x) && n >= t.x),
          "".concat(To, "-left"),
          q(n) && t && q(t.x) && n < t.x
        ),
        "".concat(To, "-bottom"),
        q(r) && t && q(t.y) && r >= t.y
      ),
      "".concat(To, "-top"),
      q(r) && t && q(t.y) && r < t.y
    )
  );
}
function U1(e) {
  var t = e.allowEscapeViewBox,
    n = e.coordinate,
    r = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    l = e.tooltipDimension,
    u = e.viewBox,
    s = e.viewBoxDimension;
  if (a && q(a[r])) return a[r];
  var f = n[r] - l - i,
    c = n[r] + i;
  if (t[r]) return o[r] ? f : c;
  if (o[r]) {
    var d = f,
      p = u[r];
    return d < p ? Math.max(c, u[r]) : Math.max(f, u[r]);
  }
  var m = c + l,
    v = u[r] + s;
  return m > v ? Math.max(f, u[r]) : Math.max(c, u[r]);
}
function kF(e) {
  var t = e.translateX,
    n = e.translateY,
    r = e.useTranslate3d;
  return {
    transform: r
      ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)")
      : "translate(".concat(t, "px, ").concat(n, "px)"),
  };
}
function MF(e) {
  var t = e.allowEscapeViewBox,
    n = e.coordinate,
    r = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    l = e.useTranslate3d,
    u = e.viewBox,
    s,
    f,
    c;
  return (
    o.height > 0 && o.width > 0 && n
      ? ((f = U1({
          allowEscapeViewBox: t,
          coordinate: n,
          key: "x",
          offsetTopLeft: r,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: u,
          viewBoxDimension: u.width,
        })),
        (c = U1({
          allowEscapeViewBox: t,
          coordinate: n,
          key: "y",
          offsetTopLeft: r,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: u,
          viewBoxDimension: u.height,
        })),
        (s = kF({ translateX: f, translateY: c, useTranslate3d: l })))
      : (s = CF),
    {
      cssProperties: s,
      cssClasses: jF({ translateX: f, translateY: c, coordinate: n }),
    }
  );
}
function Ia(e) {
  "@babel/helpers - typeof";
  return (
    (Ia =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ia(e)
  );
}
function W1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function H1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? W1(Object(n), !0).forEach(function (r) {
          Xh(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : W1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function NF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function K1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, tE(r.key), r);
  }
}
function IF(e, t, n) {
  return (
    t && K1(e.prototype, t),
    n && K1(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function DF(e, t, n) {
  return (
    (t = pc(t)),
    RF(
      e,
      eE() ? Reflect.construct(t, n || [], pc(e).constructor) : t.apply(e, n)
    )
  );
}
function RF(e, t) {
  if (t && (Ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return qh(e);
}
function eE() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (eE = function () {
    return !!e;
  })();
}
function pc(e) {
  return (
    (pc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    pc(e)
  );
}
function qh(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function LF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Gh(e, t);
}
function Gh(e, t) {
  return (
    (Gh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Gh(e, t)
  );
}
function Xh(e, t, n) {
  return (
    (t = tE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tE(e) {
  var t = BF(e, "string");
  return Ia(t) == "symbol" ? t : String(t);
}
function BF(e, t) {
  if (Ia(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ia(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var V1 = 1,
  zF = (function (e) {
    LF(t, e);
    function t() {
      var n;
      NF(this, t);
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      return (
        (n = DF(this, t, [].concat(i))),
        Xh(qh(n), "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Xh(qh(n), "handleKeyDown", function (o) {
          if (o.key === "Escape") {
            var l, u, s, f;
            n.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (l =
                    (u = n.props.coordinate) === null || u === void 0
                      ? void 0
                      : u.x) !== null && l !== void 0
                    ? l
                    : 0,
                y:
                  (s =
                    (f = n.props.coordinate) === null || f === void 0
                      ? void 0
                      : f.y) !== null && s !== void 0
                    ? s
                    : 0,
              },
            });
          }
        }),
        n
      );
    }
    return (
      IF(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var r = this.wrapperNode.getBoundingClientRect();
              (Math.abs(r.width - this.state.lastBoundingBox.width) > V1 ||
                Math.abs(r.height - this.state.lastBoundingBox.height) > V1) &&
                this.setState({
                  lastBoundingBox: { width: r.width, height: r.height },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            document.addEventListener("keydown", this.handleKeyDown),
              this.updateBBox();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var r, i;
            this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((r = this.props.coordinate) === null || r === void 0
                  ? void 0
                  : r.x) !== this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0
                    ? void 0
                    : i.y) !== this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1);
          },
        },
        {
          key: "render",
          value: function () {
            var r = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              l = i.animationDuration,
              u = i.animationEasing,
              s = i.children,
              f = i.coordinate,
              c = i.hasPayload,
              d = i.isAnimationActive,
              p = i.offset,
              m = i.position,
              v = i.reverseDirection,
              b = i.useTranslate3d,
              g = i.viewBox,
              y = i.wrapperStyle,
              w = MF({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: p,
                position: m,
                reverseDirection: v,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: b,
                viewBox: g,
              }),
              h = w.cssClasses,
              x = w.cssProperties,
              S = H1(
                H1(
                  {
                    transition:
                      d && a ? "transform ".concat(l, "ms ").concat(u) : void 0,
                  },
                  x
                ),
                {},
                {
                  pointerEvents: "none",
                  visibility:
                    !this.state.dismissed && a && c ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                y
              );
            return T.createElement(
              "div",
              {
                tabIndex: -1,
                className: h,
                style: S,
                ref: function (O) {
                  r.wrapperNode = O;
                },
              },
              s
            );
          },
        },
      ]),
      t
    );
  })(E.PureComponent),
  FF = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  cr = {
    isSsr: FF(),
    get: function (t) {
      return cr[t];
    },
    set: function (t, n) {
      if (typeof t == "string") cr[t] = n;
      else {
        var r = Object.keys(t);
        r &&
          r.length &&
          r.forEach(function (i) {
            cr[i] = t[i];
          });
      }
    },
  };
function Da(e) {
  "@babel/helpers - typeof";
  return (
    (Da =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Da(e)
  );
}
function q1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function G1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? q1(Object(n), !0).forEach(function (r) {
          Sm(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : q1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function UF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function X1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, rE(r.key), r);
  }
}
function WF(e, t, n) {
  return (
    t && X1(e.prototype, t),
    n && X1(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function HF(e, t, n) {
  return (
    (t = hc(t)),
    KF(
      e,
      nE() ? Reflect.construct(t, n || [], hc(e).constructor) : t.apply(e, n)
    )
  );
}
function KF(e, t) {
  if (t && (Da(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return VF(e);
}
function VF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function nE() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (nE = function () {
    return !!e;
  })();
}
function hc(e) {
  return (
    (hc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    hc(e)
  );
}
function qF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Yh(e, t);
}
function Yh(e, t) {
  return (
    (Yh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Yh(e, t)
  );
}
function Sm(e, t, n) {
  return (
    (t = rE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function rE(e) {
  var t = GF(e, "string");
  return Da(t) == "symbol" ? t : String(t);
}
function GF(e, t) {
  if (Da(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Da(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XF(e) {
  return e.dataKey;
}
function YF(e, t) {
  return T.isValidElement(e)
    ? T.cloneElement(e, t)
    : typeof e == "function"
    ? T.createElement(e, t)
    : T.createElement(AF, t);
}
var nr = (function (e) {
  qF(t, e);
  function t() {
    return UF(this, t), HF(this, t, arguments);
  }
  return (
    WF(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            l = i.animationDuration,
            u = i.animationEasing,
            s = i.content,
            f = i.coordinate,
            c = i.filterNull,
            d = i.isAnimationActive,
            p = i.offset,
            m = i.payload,
            v = i.payloadUniqBy,
            b = i.position,
            g = i.reverseDirection,
            y = i.useTranslate3d,
            w = i.viewBox,
            h = i.wrapperStyle,
            x = m ?? [];
          c &&
            x.length &&
            (x = KP(
              m.filter(function (_) {
                return (
                  _.value != null && (_.hide !== !0 || r.props.includeHidden)
                );
              }),
              v,
              XF
            ));
          var S = x.length > 0;
          return T.createElement(
            zF,
            {
              allowEscapeViewBox: o,
              animationDuration: l,
              animationEasing: u,
              isAnimationActive: d,
              active: a,
              coordinate: f,
              hasPayload: S,
              offset: p,
              position: b,
              reverseDirection: g,
              useTranslate3d: y,
              viewBox: w,
              wrapperStyle: h,
            },
            YF(s, G1(G1({}, this.props), {}, { payload: x }))
          );
        },
      },
    ]),
    t
  );
})(E.PureComponent);
Sm(nr, "displayName", "Tooltip");
Sm(nr, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !cr.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
var QF = Zn,
  ZF = function () {
    return QF.Date.now();
  },
  JF = ZF,
  eU = /\s/;
function tU(e) {
  for (var t = e.length; t-- && eU.test(e.charAt(t)); );
  return t;
}
var nU = tU,
  rU = nU,
  iU = /^\s+/;
function aU(e) {
  return e && e.slice(0, rU(e) + 1).replace(iU, "");
}
var oU = aU,
  lU = oU,
  Y1 = ri,
  uU = Za,
  Q1 = 0 / 0,
  sU = /^[-+]0x[0-9a-f]+$/i,
  cU = /^0b[01]+$/i,
  fU = /^0o[0-7]+$/i,
  dU = parseInt;
function pU(e) {
  if (typeof e == "number") return e;
  if (uU(e)) return Q1;
  if (Y1(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Y1(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = lU(e);
  var n = cU.test(e);
  return n || fU.test(e) ? dU(e.slice(2), n ? 2 : 8) : sU.test(e) ? Q1 : +e;
}
var iE = pU,
  hU = ri,
  ip = JF,
  Z1 = iE,
  vU = "Expected a function",
  yU = Math.max,
  mU = Math.min;
function gU(e, t, n) {
  var r,
    i,
    a,
    o,
    l,
    u,
    s = 0,
    f = !1,
    c = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(vU);
  (t = Z1(t) || 0),
    hU(n) &&
      ((f = !!n.leading),
      (c = "maxWait" in n),
      (a = c ? yU(Z1(n.maxWait) || 0, t) : a),
      (d = "trailing" in n ? !!n.trailing : d));
  function p(S) {
    var _ = r,
      O = i;
    return (r = i = void 0), (s = S), (o = e.apply(O, _)), o;
  }
  function m(S) {
    return (s = S), (l = setTimeout(g, t)), f ? p(S) : o;
  }
  function v(S) {
    var _ = S - u,
      O = S - s,
      C = t - _;
    return c ? mU(C, a - O) : C;
  }
  function b(S) {
    var _ = S - u,
      O = S - s;
    return u === void 0 || _ >= t || _ < 0 || (c && O >= a);
  }
  function g() {
    var S = ip();
    if (b(S)) return y(S);
    l = setTimeout(g, v(S));
  }
  function y(S) {
    return (l = void 0), d && r ? p(S) : ((r = i = void 0), o);
  }
  function w() {
    l !== void 0 && clearTimeout(l), (s = 0), (r = u = i = l = void 0);
  }
  function h() {
    return l === void 0 ? o : y(ip());
  }
  function x() {
    var S = ip(),
      _ = b(S);
    if (((r = arguments), (i = this), (u = S), _)) {
      if (l === void 0) return m(u);
      if (c) return clearTimeout(l), (l = setTimeout(g, t)), p(u);
    }
    return l === void 0 && (l = setTimeout(g, t)), o;
  }
  return (x.cancel = w), (x.flush = h), x;
}
var bU = gU,
  wU = bU,
  xU = ri,
  SU = "Expected a function";
function _U(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(SU);
  return (
    xU(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    wU(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
var OU = _U;
const aE = Te(OU);
function Tl(e) {
  "@babel/helpers - typeof";
  return (
    (Tl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tl(e)
  );
}
function J1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? J1(Object(n), !0).forEach(function (r) {
          PU(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : J1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function PU(e, t, n) {
  return (
    (t = EU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function EU(e) {
  var t = AU(e, "string");
  return Tl(t) == "symbol" ? t : String(t);
}
function AU(e, t) {
  if (Tl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Tl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TU(e, t) {
  return kU(e) || jU(e, t) || CU(e, t) || $U();
}
function $U() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CU(e, t) {
  if (e) {
    if (typeof e == "string") return eb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return eb(e, t);
  }
}
function eb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function jU(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function kU(e) {
  if (Array.isArray(e)) return e;
}
var MU = E.forwardRef(function (e, t) {
    var n = e.aspect,
      r = e.initialDimension,
      i = r === void 0 ? { width: -1, height: -1 } : r,
      a = e.width,
      o = a === void 0 ? "100%" : a,
      l = e.height,
      u = l === void 0 ? "100%" : l,
      s = e.minWidth,
      f = s === void 0 ? 0 : s,
      c = e.minHeight,
      d = e.maxHeight,
      p = e.children,
      m = e.debounce,
      v = m === void 0 ? 0 : m,
      b = e.id,
      g = e.className,
      y = e.onResize,
      w = e.style,
      h = w === void 0 ? {} : w,
      x = E.useRef(null),
      S = E.useRef();
    (S.current = y),
      E.useImperativeHandle(t, function () {
        return Object.defineProperty(x.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported."
              ),
              x.current
            );
          },
          configurable: !0,
        });
      });
    var _ = E.useState({ containerWidth: i.width, containerHeight: i.height }),
      O = TU(_, 2),
      C = O[0],
      A = O[1],
      k = E.useCallback(function (D, N) {
        A(function (z) {
          var R = Math.round(D),
            W = Math.round(N);
          return z.containerWidth === R && z.containerHeight === W
            ? z
            : { containerWidth: R, containerHeight: W };
        });
      }, []);
    E.useEffect(
      function () {
        var D = function (B) {
          var K,
            Z = B[0].contentRect,
            V = Z.width,
            oe = Z.height;
          k(V, oe),
            (K = S.current) === null || K === void 0 || K.call(S, V, oe);
        };
        v > 0 && (D = aE(D, v, { trailing: !0, leading: !1 }));
        var N = new ResizeObserver(D),
          z = x.current.getBoundingClientRect(),
          R = z.width,
          W = z.height;
        return (
          k(R, W),
          N.observe(x.current),
          function () {
            N.disconnect();
          }
        );
      },
      [k, v]
    );
    var $ = E.useMemo(
      function () {
        var D = C.containerWidth,
          N = C.containerHeight;
        if (D < 0 || N < 0) return null;
        Ai(
          xi(o) || xi(u),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          u
        ),
          Ai(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
        var z = xi(o) ? D : o,
          R = xi(u) ? N : u;
        n &&
          n > 0 &&
          (z ? (R = z / n) : R && (z = R * n), d && R > d && (R = d)),
          Ai(
            z > 0 || R > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            z,
            R,
            o,
            u,
            f,
            c,
            n
          );
        var W =
          !Array.isArray(p) && Gs.isElement(p) && sr(p.type).endsWith("Chart");
        return T.Children.map(p, function (j) {
          return Gs.isElement(j)
            ? E.cloneElement(
                j,
                es(
                  { width: z, height: R },
                  W
                    ? {
                        style: es(
                          {
                            height: "100%",
                            width: "100%",
                            maxHeight: R,
                            maxWidth: z,
                          },
                          j.props.style
                        ),
                      }
                    : {}
                )
              )
            : j;
        });
      },
      [n, p, u, d, c, f, C, o]
    );
    return T.createElement(
      "div",
      {
        id: b ? "".concat(b) : void 0,
        className: be("recharts-responsive-container", g),
        style: es(
          es({}, h),
          {},
          { width: o, height: u, minWidth: f, minHeight: c, maxHeight: d }
        ),
        ref: x,
      },
      $
    );
  }),
  oE = function (t) {
    return null;
  };
oE.displayName = "Cell";
function $l(e) {
  "@babel/helpers - typeof";
  return (
    ($l =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $l(e)
  );
}
function tb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Qh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tb(Object(n), !0).forEach(function (r) {
          NU(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tb(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function NU(e, t, n) {
  return (
    (t = IU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function IU(e) {
  var t = DU(e, "string");
  return $l(t) == "symbol" ? t : String(t);
}
function DU(e, t) {
  if ($l(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if ($l(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ki = { widthCache: {}, cacheCount: 0 },
  RU = 2e3,
  LU = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  nb = "recharts_measurement_span";
function BU(e) {
  var t = Qh({}, e);
  return (
    Object.keys(t).forEach(function (n) {
      t[n] || delete t[n];
    }),
    t
  );
}
var Jo = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || cr.isSsr) return { width: 0, height: 0 };
    var r = BU(n),
      i = JSON.stringify({ text: t, copyStyle: r });
    if (Ki.widthCache[i]) return Ki.widthCache[i];
    try {
      var a = document.getElementById(nb);
      a ||
        ((a = document.createElement("span")),
        a.setAttribute("id", nb),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
      var o = Qh(Qh({}, LU), r);
      Object.assign(a.style, o), (a.textContent = "".concat(t));
      var l = a.getBoundingClientRect(),
        u = { width: l.width, height: l.height };
      return (
        (Ki.widthCache[i] = u),
        ++Ki.cacheCount > RU && ((Ki.cacheCount = 0), (Ki.widthCache = {})),
        u
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  zU = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function Cl(e) {
  "@babel/helpers - typeof";
  return (
    (Cl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cl(e)
  );
}
function vc(e, t) {
  return HU(e) || WU(e, t) || UU(e, t) || FU();
}
function FU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UU(e, t) {
  if (e) {
    if (typeof e == "string") return rb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return rb(e, t);
  }
}
function rb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function WU(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function HU(e) {
  if (Array.isArray(e)) return e;
}
function KU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ib(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, qU(r.key), r);
  }
}
function VU(e, t, n) {
  return (
    t && ib(e.prototype, t),
    n && ib(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function qU(e) {
  var t = GU(e, "string");
  return Cl(t) == "symbol" ? t : String(t);
}
function GU(e, t) {
  if (Cl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Cl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ab = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  ob = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  XU = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  YU = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  lE = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  QU = Object.keys(lE),
  fa = "NaN";
function ZU(e, t) {
  return e * lE[t];
}
var ts = (function () {
  function e(t, n) {
    KU(this, e),
      (this.num = t),
      (this.unit = n),
      (this.num = t),
      (this.unit = n),
      Number.isNaN(t) && (this.unit = ""),
      n !== "" && !XU.test(n) && ((this.num = NaN), (this.unit = "")),
      QU.includes(n) && ((this.num = ZU(t, n)), (this.unit = "px"));
  }
  return (
    VU(
      e,
      [
        {
          key: "add",
          value: function (n) {
            return this.unit !== n.unit
              ? new e(NaN, "")
              : new e(this.num + n.num, this.unit);
          },
        },
        {
          key: "subtract",
          value: function (n) {
            return this.unit !== n.unit
              ? new e(NaN, "")
              : new e(this.num - n.num, this.unit);
          },
        },
        {
          key: "multiply",
          value: function (n) {
            return this.unit !== "" && n.unit !== "" && this.unit !== n.unit
              ? new e(NaN, "")
              : new e(this.num * n.num, this.unit || n.unit);
          },
        },
        {
          key: "divide",
          value: function (n) {
            return this.unit !== "" && n.unit !== "" && this.unit !== n.unit
              ? new e(NaN, "")
              : new e(this.num / n.num, this.unit || n.unit);
          },
        },
        {
          key: "toString",
          value: function () {
            return "".concat(this.num).concat(this.unit);
          },
        },
        {
          key: "isNaN",
          value: function () {
            return Number.isNaN(this.num);
          },
        },
      ],
      [
        {
          key: "parse",
          value: function (n) {
            var r,
              i = (r = YU.exec(n)) !== null && r !== void 0 ? r : [],
              a = vc(i, 3),
              o = a[1],
              l = a[2];
            return new e(parseFloat(o), l ?? "");
          },
        },
      ]
    ),
    e
  );
})();
function uE(e) {
  if (e.includes(fa)) return fa;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var n,
      r = (n = ab.exec(t)) !== null && n !== void 0 ? n : [],
      i = vc(r, 4),
      a = i[1],
      o = i[2],
      l = i[3],
      u = ts.parse(a ?? ""),
      s = ts.parse(l ?? ""),
      f = o === "*" ? u.multiply(s) : u.divide(s);
    if (f.isNaN()) return fa;
    t = t.replace(ab, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c,
      d = (c = ob.exec(t)) !== null && c !== void 0 ? c : [],
      p = vc(d, 4),
      m = p[1],
      v = p[2],
      b = p[3],
      g = ts.parse(m ?? ""),
      y = ts.parse(b ?? ""),
      w = v === "+" ? g.add(y) : g.subtract(y);
    if (w.isNaN()) return fa;
    t = t.replace(ob, w.toString());
  }
  return t;
}
var lb = /\(([^()]*)\)/;
function JU(e) {
  for (var t = e; t.includes("("); ) {
    var n = lb.exec(t),
      r = vc(n, 2),
      i = r[1];
    t = t.replace(lb, uE(i));
  }
  return t;
}
function e7(e) {
  var t = e.replace(/\s+/g, "");
  return (t = JU(t)), (t = uE(t)), t;
}
function t7(e) {
  try {
    return e7(e);
  } catch {
    return fa;
  }
}
function ap(e) {
  var t = t7(e.slice(5, -1));
  return t === fa ? "" : t;
}
var n7 = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  r7 = ["dx", "dy", "angle", "className", "breakAll"];
function Zh() {
  return (
    (Zh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zh.apply(this, arguments)
  );
}
function ub(e, t) {
  if (e == null) return {};
  var n = i7(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function i7(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function sb(e, t) {
  return u7(e) || l7(e, t) || o7(e, t) || a7();
}
function a7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o7(e, t) {
  if (e) {
    if (typeof e == "string") return cb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return cb(e, t);
  }
}
function cb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function l7(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function u7(e) {
  if (Array.isArray(e)) return e;
}
var sE = /[ \f\n\r\t\v\u2028\u2029]+/,
  cE = function (t) {
    var n = t.children,
      r = t.breakAll,
      i = t.style;
    try {
      var a = [];
      fe(n) ||
        (r ? (a = n.toString().split("")) : (a = n.toString().split(sE)));
      var o = a.map(function (u) {
          return { word: u, width: Jo(u, i).width };
        }),
        l = r ? 0 : Jo(" ", i).width;
      return { wordsWithComputedWidth: o, spaceWidth: l };
    } catch {
      return null;
    }
  },
  s7 = function (t, n, r, i, a) {
    var o = t.maxLines,
      l = t.children,
      u = t.style,
      s = t.breakAll,
      f = q(o),
      c = l,
      d = function () {
        var z =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return z.reduce(function (R, W) {
          var j = W.word,
            B = W.width,
            K = R[R.length - 1];
          if (K && (i == null || a || K.width + B + r < Number(i)))
            K.words.push(j), (K.width += B + r);
          else {
            var Z = { words: [j], width: B };
            R.push(Z);
          }
          return R;
        }, []);
      },
      p = d(n),
      m = function (z) {
        return z.reduce(function (R, W) {
          return R.width > W.width ? R : W;
        });
      };
    if (!f) return p;
    for (
      var v = "…",
        b = function (z) {
          var R = c.slice(0, z),
            W = cE({
              breakAll: s,
              style: u,
              children: R + v,
            }).wordsWithComputedWidth,
            j = d(W),
            B = j.length > o || m(j).width > Number(i);
          return [B, j];
        },
        g = 0,
        y = c.length - 1,
        w = 0,
        h;
      g <= y && w <= c.length - 1;

    ) {
      var x = Math.floor((g + y) / 2),
        S = x - 1,
        _ = b(S),
        O = sb(_, 2),
        C = O[0],
        A = O[1],
        k = b(x),
        $ = sb(k, 1),
        D = $[0];
      if ((!C && !D && (g = x + 1), C && D && (y = x - 1), !C && D)) {
        h = A;
        break;
      }
      w++;
    }
    return h || p;
  },
  fb = function (t) {
    var n = fe(t) ? [] : t.toString().split(sE);
    return [{ words: n }];
  },
  c7 = function (t) {
    var n = t.width,
      r = t.scaleToFit,
      i = t.children,
      a = t.style,
      o = t.breakAll,
      l = t.maxLines;
    if ((n || r) && !cr.isSsr) {
      var u,
        s,
        f = cE({ breakAll: o, children: i, style: a });
      if (f) {
        var c = f.wordsWithComputedWidth,
          d = f.spaceWidth;
        (u = c), (s = d);
      } else return fb(i);
      return s7(
        { breakAll: o, children: i, maxLines: l, style: a },
        u,
        s,
        n,
        r
      );
    }
    return fb(i);
  },
  db = "#808080",
  yc = function (t) {
    var n = t.x,
      r = n === void 0 ? 0 : n,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.lineHeight,
      l = o === void 0 ? "1em" : o,
      u = t.capHeight,
      s = u === void 0 ? "0.71em" : u,
      f = t.scaleToFit,
      c = f === void 0 ? !1 : f,
      d = t.textAnchor,
      p = d === void 0 ? "start" : d,
      m = t.verticalAnchor,
      v = m === void 0 ? "end" : m,
      b = t.fill,
      g = b === void 0 ? db : b,
      y = ub(t, n7),
      w = E.useMemo(
        function () {
          return c7({
            breakAll: y.breakAll,
            children: y.children,
            maxLines: y.maxLines,
            scaleToFit: c,
            style: y.style,
            width: y.width,
          });
        },
        [y.breakAll, y.children, y.maxLines, c, y.style, y.width]
      ),
      h = y.dx,
      x = y.dy,
      S = y.angle,
      _ = y.className,
      O = y.breakAll,
      C = ub(y, r7);
    if (!ot(r) || !ot(a)) return null;
    var A = r + (q(h) ? h : 0),
      k = a + (q(x) ? x : 0),
      $;
    switch (v) {
      case "start":
        $ = ap("calc(".concat(s, ")"));
        break;
      case "middle":
        $ = ap(
          "calc("
            .concat((w.length - 1) / 2, " * -")
            .concat(l, " + (")
            .concat(s, " / 2))")
        );
        break;
      default:
        $ = ap("calc(".concat(w.length - 1, " * -").concat(l, ")"));
        break;
    }
    var D = [];
    if (c) {
      var N = w[0].width,
        z = y.width;
      D.push("scale(".concat((q(z) ? z / N : 1) / N, ")"));
    }
    return (
      S && D.push("rotate(".concat(S, ", ").concat(A, ", ").concat(k, ")")),
      D.length && (C.transform = D.join(" ")),
      T.createElement(
        "text",
        Zh({}, ve(C, !0), {
          x: A,
          y: k,
          className: be("recharts-text", _),
          textAnchor: p,
          fill: g.includes("url") ? db : g,
        }),
        w.map(function (R, W) {
          var j = R.words.join(O ? "" : " ");
          return T.createElement(
            "tspan",
            { x: A, dy: W === 0 ? $ : l, key: j },
            j
          );
        })
      )
    );
  };
function Gr(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
    ? -1
    : e > t
    ? 1
    : e >= t
    ? 0
    : NaN;
}
function f7(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
    ? -1
    : t > e
    ? 1
    : t >= e
    ? 0
    : NaN;
}
function _m(e) {
  let t, n, r;
  e.length !== 2
    ? ((t = Gr), (n = (l, u) => Gr(e(l), u)), (r = (l, u) => e(l) - u))
    : ((t = e === Gr || e === f7 ? e : d7), (n = e), (r = e));
  function i(l, u, s = 0, f = l.length) {
    if (s < f) {
      if (t(u, u) !== 0) return f;
      do {
        const c = (s + f) >>> 1;
        n(l[c], u) < 0 ? (s = c + 1) : (f = c);
      } while (s < f);
    }
    return s;
  }
  function a(l, u, s = 0, f = l.length) {
    if (s < f) {
      if (t(u, u) !== 0) return f;
      do {
        const c = (s + f) >>> 1;
        n(l[c], u) <= 0 ? (s = c + 1) : (f = c);
      } while (s < f);
    }
    return s;
  }
  function o(l, u, s = 0, f = l.length) {
    const c = i(l, u, s, f - 1);
    return c > s && r(l[c - 1], u) > -r(l[c], u) ? c - 1 : c;
  }
  return { left: i, center: o, right: a };
}
function d7() {
  return 0;
}
function fE(e) {
  return e === null ? NaN : +e;
}
function* p7(e, t) {
  if (t === void 0) for (let n of e) n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
const h7 = _m(Gr),
  v7 = h7.right;
_m(fE).center;
const wu = v7;
class pb extends Map {
  constructor(t, n = g7) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: n },
      }),
      t != null)
    )
      for (const [r, i] of t) this.set(r, i);
  }
  get(t) {
    return super.get(hb(this, t));
  }
  has(t) {
    return super.has(hb(this, t));
  }
  set(t, n) {
    return super.set(y7(this, t), n);
  }
  delete(t) {
    return super.delete(m7(this, t));
  }
}
function hb({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function y7({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function m7({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && ((n = e.get(r)), e.delete(r)), n;
}
function g7(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function b7(e = Gr) {
  if (e === Gr) return dE;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, n) => {
    const r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function dE(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const w7 = Math.sqrt(50),
  x7 = Math.sqrt(10),
  S7 = Math.sqrt(2);
function mc(e, t, n) {
  const r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / Math.pow(10, i),
    o = a >= w7 ? 10 : a >= x7 ? 5 : a >= S7 ? 2 : 1;
  let l, u, s;
  return (
    i < 0
      ? ((s = Math.pow(10, -i) / o),
        (l = Math.round(e * s)),
        (u = Math.round(t * s)),
        l / s < e && ++l,
        u / s > t && --u,
        (s = -s))
      : ((s = Math.pow(10, i) * o),
        (l = Math.round(e / s)),
        (u = Math.round(t / s)),
        l * s < e && ++l,
        u * s > t && --u),
    u < l && 0.5 <= n && n < 2 ? mc(e, t, n * 2) : [l, u, s]
  );
}
function Jh(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  const r = t < e,
    [i, a, o] = r ? mc(t, e, n) : mc(e, t, n);
  if (!(a >= i)) return [];
  const l = a - i + 1,
    u = new Array(l);
  if (r)
    if (o < 0) for (let s = 0; s < l; ++s) u[s] = (a - s) / -o;
    else for (let s = 0; s < l; ++s) u[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < l; ++s) u[s] = (i + s) / -o;
  else for (let s = 0; s < l; ++s) u[s] = (i + s) * o;
  return u;
}
function ev(e, t, n) {
  return (t = +t), (e = +e), (n = +n), mc(e, t, n)[2];
}
function tv(e, t, n) {
  (t = +t), (e = +e), (n = +n);
  const r = t < e,
    i = r ? ev(t, e, n) : ev(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function vb(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n < r || (n === void 0 && r >= r)) && (n = r);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n < i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function yb(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n > r || (n === void 0 && r >= r)) && (n = r);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n > i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function pE(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? dE : b7(i); r > n; ) {
    if (r - n > 600) {
      const u = r - n + 1,
        s = t - n + 1,
        f = Math.log(u),
        c = 0.5 * Math.exp((2 * f) / 3),
        d = 0.5 * Math.sqrt((f * c * (u - c)) / u) * (s - u / 2 < 0 ? -1 : 1),
        p = Math.max(n, Math.floor(t - (s * c) / u + d)),
        m = Math.min(r, Math.floor(t + ((u - s) * c) / u + d));
      pE(e, t, p, m, i);
    }
    const a = e[t];
    let o = n,
      l = r;
    for ($o(e, n, t), i(e[r], a) > 0 && $o(e, n, r); o < l; ) {
      for ($o(e, o, l), ++o, --l; i(e[o], a) < 0; ) ++o;
      for (; i(e[l], a) > 0; ) --l;
    }
    i(e[n], a) === 0 ? $o(e, n, l) : (++l, $o(e, l, r)),
      l <= t && (n = l + 1),
      t <= l && (r = l - 1);
  }
  return e;
}
function $o(e, t, n) {
  const r = e[t];
  (e[t] = e[n]), (e[n] = r);
}
function _7(e, t, n) {
  if (
    ((e = Float64Array.from(p7(e, n))), !(!(r = e.length) || isNaN((t = +t))))
  ) {
    if (t <= 0 || r < 2) return yb(e);
    if (t >= 1) return vb(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = vb(pE(e, a).subarray(0, a + 1)),
      l = yb(e.subarray(a + 1));
    return o + (l - o) * (i - a);
  }
}
function O7(e, t, n = fE) {
  if (!(!(r = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[r - 1], r - 1, e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = +n(e[a], a, e),
      l = +n(e[a + 1], a + 1, e);
    return o + (l - o) * (i - a);
  }
}
function P7(e, t, n) {
  (e = +e),
    (t = +t),
    (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n);
  for (
    var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = new Array(i);
    ++r < i;

  )
    a[r] = e + r * n;
  return a;
}
function _n(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Er(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const nv = Symbol("implicit");
function Om() {
  var e = new pb(),
    t = [],
    n = [],
    r = nv;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (r !== nv) return r;
      e.set(a, (o = t.push(a) - 1));
    }
    return n[o % n.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new pb());
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((n = Array.from(a)), i) : n.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return Om(t, n).unknown(r);
    }),
    _n.apply(i, arguments),
    i
  );
}
function jl() {
  var e = Om().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    i = 1,
    a,
    o,
    l = !1,
    u = 0,
    s = 0,
    f = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length,
      p = i < r,
      m = p ? i : r,
      v = p ? r : i;
    (a = (v - m) / Math.max(1, d - u + s * 2)),
      l && (a = Math.floor(a)),
      (m += (v - m - a * (d - u)) * f),
      (o = a * (1 - u)),
      l && ((m = Math.round(m)), (o = Math.round(o)));
    var b = P7(d).map(function (g) {
      return m + a * g;
    });
    return n(p ? b.reverse() : b);
  }
  return (
    (e.domain = function (d) {
      return arguments.length ? (t(d), c()) : t();
    }),
    (e.range = function (d) {
      return arguments.length
        ? (([r, i] = d), (r = +r), (i = +i), c())
        : [r, i];
    }),
    (e.rangeRound = function (d) {
      return ([r, i] = d), (r = +r), (i = +i), (l = !0), c();
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (d) {
      return arguments.length ? ((l = !!d), c()) : l;
    }),
    (e.padding = function (d) {
      return arguments.length ? ((u = Math.min(1, (s = +d))), c()) : u;
    }),
    (e.paddingInner = function (d) {
      return arguments.length ? ((u = Math.min(1, d)), c()) : u;
    }),
    (e.paddingOuter = function (d) {
      return arguments.length ? ((s = +d), c()) : s;
    }),
    (e.align = function (d) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, d))), c()) : f;
    }),
    (e.copy = function () {
      return jl(t(), [r, i]).round(l).paddingInner(u).paddingOuter(s).align(f);
    }),
    _n.apply(c(), arguments)
  );
}
function hE(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return hE(t());
    }),
    e
  );
}
function el() {
  return hE(jl.apply(null, arguments).paddingInner(1));
}
function Pm(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function vE(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function xu() {}
var kl = 0.7,
  gc = 1 / kl,
  xa = "\\s*([+-]?\\d+)\\s*",
  Ml = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Gn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  E7 = /^#([0-9a-f]{3,8})$/,
  A7 = new RegExp(`^rgb\\(${xa},${xa},${xa}\\)$`),
  T7 = new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`),
  $7 = new RegExp(`^rgba\\(${xa},${xa},${xa},${Ml}\\)$`),
  C7 = new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${Ml}\\)$`),
  j7 = new RegExp(`^hsl\\(${Ml},${Gn},${Gn}\\)$`),
  k7 = new RegExp(`^hsla\\(${Ml},${Gn},${Gn},${Ml}\\)$`),
  mb = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Pm(xu, Nl, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: gb,
  formatHex: gb,
  formatHex8: M7,
  formatHsl: N7,
  formatRgb: bb,
  toString: bb,
});
function gb() {
  return this.rgb().formatHex();
}
function M7() {
  return this.rgb().formatHex8();
}
function N7() {
  return yE(this).formatHsl();
}
function bb() {
  return this.rgb().formatRgb();
}
function Nl(e) {
  var t, n;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = E7.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? wb(t)
          : n === 3
          ? new Wt(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : n === 8
          ? ns(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : n === 4
          ? ns(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = A7.exec(e))
      ? new Wt(t[1], t[2], t[3], 1)
      : (t = T7.exec(e))
      ? new Wt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = $7.exec(e))
      ? ns(t[1], t[2], t[3], t[4])
      : (t = C7.exec(e))
      ? ns((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = j7.exec(e))
      ? _b(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = k7.exec(e))
      ? _b(t[1], t[2] / 100, t[3] / 100, t[4])
      : mb.hasOwnProperty(e)
      ? wb(mb[e])
      : e === "transparent"
      ? new Wt(NaN, NaN, NaN, 0)
      : null
  );
}
function wb(e) {
  return new Wt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function ns(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Wt(e, t, n, r);
}
function I7(e) {
  return (
    e instanceof xu || (e = Nl(e)),
    e ? ((e = e.rgb()), new Wt(e.r, e.g, e.b, e.opacity)) : new Wt()
  );
}
function rv(e, t, n, r) {
  return arguments.length === 1 ? I7(e) : new Wt(e, t, n, r ?? 1);
}
function Wt(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
Pm(
  Wt,
  rv,
  vE(xu, {
    brighter(e) {
      return (
        (e = e == null ? gc : Math.pow(gc, e)),
        new Wt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? kl : Math.pow(kl, e)),
        new Wt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Wt(Ti(this.r), Ti(this.g), Ti(this.b), bc(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: xb,
    formatHex: xb,
    formatHex8: D7,
    formatRgb: Sb,
    toString: Sb,
  })
);
function xb() {
  return `#${Si(this.r)}${Si(this.g)}${Si(this.b)}`;
}
function D7() {
  return `#${Si(this.r)}${Si(this.g)}${Si(this.b)}${Si(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function Sb() {
  const e = bc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ti(this.r)}, ${Ti(this.g)}, ${Ti(
    this.b
  )}${e === 1 ? ")" : `, ${e})`}`;
}
function bc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ti(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Si(e) {
  return (e = Ti(e)), (e < 16 ? "0" : "") + e.toString(16);
}
function _b(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new Nn(e, t, n, r)
  );
}
function yE(e) {
  if (e instanceof Nn) return new Nn(e.h, e.s, e.l, e.opacity);
  if ((e instanceof xu || (e = Nl(e)), !e)) return new Nn();
  if (e instanceof Nn) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    a = Math.max(t, n, r),
    o = NaN,
    l = a - i,
    u = (a + i) / 2;
  return (
    l
      ? (t === a
          ? (o = (n - r) / l + (n < r) * 6)
          : n === a
          ? (o = (r - t) / l + 2)
          : (o = (t - n) / l + 4),
        (l /= u < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (l = u > 0 && u < 1 ? 0 : o),
    new Nn(o, l, u, e.opacity)
  );
}
function R7(e, t, n, r) {
  return arguments.length === 1 ? yE(e) : new Nn(e, t, n, r ?? 1);
}
function Nn(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
Pm(
  Nn,
  R7,
  vE(xu, {
    brighter(e) {
      return (
        (e = e == null ? gc : Math.pow(gc, e)),
        new Nn(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? kl : Math.pow(kl, e)),
        new Nn(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new Wt(
        op(e >= 240 ? e - 240 : e + 120, i, r),
        op(e, i, r),
        op(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity
      );
    },
    clamp() {
      return new Nn(Ob(this.h), rs(this.s), rs(this.l), bc(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = bc(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${Ob(this.h)}, ${
        rs(this.s) * 100
      }%, ${rs(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  })
);
function Ob(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function rs(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function op(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
      ? n
      : e < 240
      ? t + ((n - t) * (240 - e)) / 60
      : t) * 255
  );
}
const Em = (e) => () => e;
function L7(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function B7(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function z7(e) {
  return (e = +e) == 1
    ? mE
    : function (t, n) {
        return n - t ? B7(t, n, e) : Em(isNaN(t) ? n : t);
      };
}
function mE(e, t) {
  var n = t - e;
  return n ? L7(e, n) : Em(isNaN(e) ? t : e);
}
const Pb = (function e(t) {
  var n = z7(t);
  function r(i, a) {
    var o = n((i = rv(i)).r, (a = rv(a)).r),
      l = n(i.g, a.g),
      u = n(i.b, a.b),
      s = mE(i.opacity, a.opacity);
    return function (f) {
      return (
        (i.r = o(f)), (i.g = l(f)), (i.b = u(f)), (i.opacity = s(f)), i + ""
      );
    };
  }
  return (r.gamma = e), r;
})(1);
function F7(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function U7(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function W7(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = new Array(r),
    a = new Array(n),
    o;
  for (o = 0; o < r; ++o) i[o] = lo(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (l) {
    for (o = 0; o < r; ++o) a[o] = i[o](l);
    return a;
  };
}
function H7(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return n.setTime(e * (1 - r) + t * r), n;
    }
  );
}
function wc(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function K7(e, t) {
  var n = {},
    r = {},
    i;
  (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e ? (n[i] = lo(e[i], t[i])) : (r[i] = t[i]);
  return function (a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var iv = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  lp = new RegExp(iv.source, "g");
function V7(e) {
  return function () {
    return e;
  };
}
function q7(e) {
  return function (t) {
    return e(t) + "";
  };
}
function G7(e, t) {
  var n = (iv.lastIndex = lp.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    l = [],
    u = [];
  for (e = e + "", t = t + ""; (r = iv.exec(e)) && (i = lp.exec(t)); )
    (a = i.index) > n &&
      ((a = t.slice(n, a)), l[o] ? (l[o] += a) : (l[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? l[o]
          ? (l[o] += i)
          : (l[++o] = i)
        : ((l[++o] = null), u.push({ i: o, x: wc(r, i) })),
      (n = lp.lastIndex);
  return (
    n < t.length && ((a = t.slice(n)), l[o] ? (l[o] += a) : (l[++o] = a)),
    l.length < 2
      ? u[0]
        ? q7(u[0].x)
        : V7(t)
      : ((t = u.length),
        function (s) {
          for (var f = 0, c; f < t; ++f) l[(c = u[f]).i] = c.x(s);
          return l.join("");
        })
  );
}
function lo(e, t) {
  var n = typeof t,
    r;
  return t == null || n === "boolean"
    ? Em(t)
    : (n === "number"
        ? wc
        : n === "string"
        ? (r = Nl(t))
          ? ((t = r), Pb)
          : G7
        : t instanceof Nl
        ? Pb
        : t instanceof Date
        ? H7
        : U7(t)
        ? F7
        : Array.isArray(t)
        ? W7
        : (typeof t.valueOf != "function" && typeof t.toString != "function") ||
          isNaN(t)
        ? K7
        : wc)(e, t);
}
function Am(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function X7(e, t) {
  t === void 0 && ((t = e), (e = lo));
  for (
    var n = 0, r = t.length - 1, i = t[0], a = new Array(r < 0 ? 0 : r);
    n < r;

  )
    a[n] = e(i, (i = t[++n]));
  return function (o) {
    var l = Math.max(0, Math.min(r - 1, Math.floor((o *= r))));
    return a[l](o - l);
  };
}
function Y7(e) {
  return function () {
    return e;
  };
}
function xc(e) {
  return +e;
}
var Eb = [0, 1];
function Dt(e) {
  return e;
}
function av(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : Y7(isNaN(t) ? NaN : 0.5);
}
function Q7(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (r) {
      return Math.max(e, Math.min(t, r));
    }
  );
}
function Z7(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = av(i, r)), (a = n(o, a))) : ((r = av(r, i)), (a = n(a, o))),
    function (l) {
      return a(r(l));
    }
  );
}
function J7(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = new Array(r),
    a = new Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;

  )
    (i[o] = av(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1]));
  return function (l) {
    var u = wu(e, l, 1, r) - 1;
    return a[u](i[u](l));
  };
}
function Su(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Xf() {
  var e = Eb,
    t = Eb,
    n = lo,
    r,
    i,
    a,
    o = Dt,
    l,
    u,
    s;
  function f() {
    var d = Math.min(e.length, t.length);
    return (
      o !== Dt && (o = Q7(e[0], e[d - 1])),
      (l = d > 2 ? J7 : Z7),
      (u = s = null),
      c
    );
  }
  function c(d) {
    return d == null || isNaN((d = +d))
      ? a
      : (u || (u = l(e.map(r), t, n)))(r(o(d)));
  }
  return (
    (c.invert = function (d) {
      return o(i((s || (s = l(t, e.map(r), wc)))(d)));
    }),
    (c.domain = function (d) {
      return arguments.length ? ((e = Array.from(d, xc)), f()) : e.slice();
    }),
    (c.range = function (d) {
      return arguments.length ? ((t = Array.from(d)), f()) : t.slice();
    }),
    (c.rangeRound = function (d) {
      return (t = Array.from(d)), (n = Am), f();
    }),
    (c.clamp = function (d) {
      return arguments.length ? ((o = d ? !0 : Dt), f()) : o !== Dt;
    }),
    (c.interpolate = function (d) {
      return arguments.length ? ((n = d), f()) : n;
    }),
    (c.unknown = function (d) {
      return arguments.length ? ((a = d), c) : a;
    }),
    function (d, p) {
      return (r = d), (i = p), f();
    }
  );
}
function Tm() {
  return Xf()(Dt, Dt);
}
function eW(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function Sc(e, t) {
  if (
    (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var n,
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function Ra(e) {
  return (e = Sc(Math.abs(e))), e ? e[1] : NaN;
}
function tW(e, t) {
  return function (n, r) {
    for (
      var i = n.length, a = [], o = 0, l = e[0], u = 0;
      i > 0 &&
      l > 0 &&
      (u + l + 1 > r && (l = Math.max(1, r - u)),
      a.push(n.substring((i -= l), i + l)),
      !((u += l + 1) > r));

    )
      l = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function nW(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (n) {
      return e[+n];
    });
  };
}
var rW =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Il(e) {
  if (!(t = rW.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new $m({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
Il.prototype = $m.prototype;
function $m(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
$m.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function iW(e) {
  e: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), (i = n);
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var gE;
function aW(e, t) {
  var n = Sc(e, t);
  if (!n) return e + "";
  var r = n[0],
    i = n[1],
    a = i - (gE = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
    ? r + new Array(a - o + 1).join("0")
    : a > 0
    ? r.slice(0, a) + "." + r.slice(a)
    : "0." + new Array(1 - a).join("0") + Sc(e, Math.max(0, t + a - 1))[0];
}
function Ab(e, t) {
  var n = Sc(e, t);
  if (!n) return e + "";
  var r = n[0],
    i = n[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + r
    : r.length > i + 1
    ? r.slice(0, i + 1) + "." + r.slice(i + 1)
    : r + new Array(i - r.length + 2).join("0");
}
const Tb = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: eW,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ab(e * 100, t),
  r: Ab,
  s: aW,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function $b(e) {
  return e;
}
var Cb = Array.prototype.map,
  jb = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function oW(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? $b
        : tW(Cb.call(e.grouping, Number), e.thousands + ""),
    n = e.currency === void 0 ? "" : e.currency[0] + "",
    r = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? $b : nW(Cb.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    l = e.minus === void 0 ? "−" : e.minus + "",
    u = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(c) {
    c = Il(c);
    var d = c.fill,
      p = c.align,
      m = c.sign,
      v = c.symbol,
      b = c.zero,
      g = c.width,
      y = c.comma,
      w = c.precision,
      h = c.trim,
      x = c.type;
    x === "n"
      ? ((y = !0), (x = "g"))
      : Tb[x] || (w === void 0 && (w = 12), (h = !0), (x = "g")),
      (b || (d === "0" && p === "=")) && ((b = !0), (d = "0"), (p = "="));
    var S =
        v === "$"
          ? n
          : v === "#" && /[boxX]/.test(x)
          ? "0" + x.toLowerCase()
          : "",
      _ = v === "$" ? r : /[%p]/.test(x) ? o : "",
      O = Tb[x],
      C = /[defgprs%]/.test(x);
    w =
      w === void 0
        ? 6
        : /[gprs]/.test(x)
        ? Math.max(1, Math.min(21, w))
        : Math.max(0, Math.min(20, w));
    function A(k) {
      var $ = S,
        D = _,
        N,
        z,
        R;
      if (x === "c") (D = O(k) + D), (k = "");
      else {
        k = +k;
        var W = k < 0 || 1 / k < 0;
        if (
          ((k = isNaN(k) ? u : O(Math.abs(k), w)),
          h && (k = iW(k)),
          W && +k == 0 && m !== "+" && (W = !1),
          ($ = (W ? (m === "(" ? m : l) : m === "-" || m === "(" ? "" : m) + $),
          (D =
            (x === "s" ? jb[8 + gE / 3] : "") +
            D +
            (W && m === "(" ? ")" : "")),
          C)
        ) {
          for (N = -1, z = k.length; ++N < z; )
            if (((R = k.charCodeAt(N)), 48 > R || R > 57)) {
              (D = (R === 46 ? i + k.slice(N + 1) : k.slice(N)) + D),
                (k = k.slice(0, N));
              break;
            }
        }
      }
      y && !b && (k = t(k, 1 / 0));
      var j = $.length + k.length + D.length,
        B = j < g ? new Array(g - j + 1).join(d) : "";
      switch (
        (y && b && ((k = t(B + k, B.length ? g - D.length : 1 / 0)), (B = "")),
        p)
      ) {
        case "<":
          k = $ + k + D + B;
          break;
        case "=":
          k = $ + B + k + D;
          break;
        case "^":
          k = B.slice(0, (j = B.length >> 1)) + $ + k + D + B.slice(j);
          break;
        default:
          k = B + $ + k + D;
          break;
      }
      return a(k);
    }
    return (
      (A.toString = function () {
        return c + "";
      }),
      A
    );
  }
  function f(c, d) {
    var p = s(((c = Il(c)), (c.type = "f"), c)),
      m = Math.max(-8, Math.min(8, Math.floor(Ra(d) / 3))) * 3,
      v = Math.pow(10, -m),
      b = jb[8 + m / 3];
    return function (g) {
      return p(v * g) + b;
    };
  }
  return { format: s, formatPrefix: f };
}
var is, Cm, bE;
lW({ thousands: ",", grouping: [3], currency: ["$", ""] });
function lW(e) {
  return (is = oW(e)), (Cm = is.format), (bE = is.formatPrefix), is;
}
function uW(e) {
  return Math.max(0, -Ra(Math.abs(e)));
}
function sW(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Ra(t) / 3))) * 3 - Ra(Math.abs(e))
  );
}
function cW(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Ra(t) - Ra(e)) + 1
  );
}
function wE(e, t, n, r) {
  var i = tv(e, t, n),
    a;
  switch (((r = Il(r ?? ",f")), r.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = sW(i, o))) && (r.precision = a),
        bE(r, o)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null &&
        !isNaN((a = cW(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null &&
        !isNaN((a = uW(i))) &&
        (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Cm(r);
}
function ii(e) {
  var t = e.domain;
  return (
    (e.ticks = function (n) {
      var r = t();
      return Jh(r[0], r[r.length - 1], n ?? 10);
    }),
    (e.tickFormat = function (n, r) {
      var i = t();
      return wE(i[0], i[i.length - 1], n ?? 10, r);
    }),
    (e.nice = function (n) {
      n == null && (n = 10);
      var r = t(),
        i = 0,
        a = r.length - 1,
        o = r[i],
        l = r[a],
        u,
        s,
        f = 10;
      for (
        l < o && ((s = o), (o = l), (l = s), (s = i), (i = a), (a = s));
        f-- > 0;

      ) {
        if (((s = ev(o, l, n)), s === u)) return (r[i] = o), (r[a] = l), t(r);
        if (s > 0) (o = Math.floor(o / s) * s), (l = Math.ceil(l / s) * s);
        else if (s < 0) (o = Math.ceil(o * s) / s), (l = Math.floor(l * s) / s);
        else break;
        u = s;
      }
      return e;
    }),
    e
  );
}
function _c() {
  var e = Tm();
  return (
    (e.copy = function () {
      return Su(e, _c());
    }),
    _n.apply(e, arguments),
    ii(e)
  );
}
function xE(e) {
  var t;
  function n(r) {
    return r == null || isNaN((r = +r)) ? t : r;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (r) {
        return arguments.length ? ((e = Array.from(r, xc)), n) : e.slice();
      }),
    (n.unknown = function (r) {
      return arguments.length ? ((t = r), n) : t;
    }),
    (n.copy = function () {
      return xE(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, xc) : [0, 1]),
    ii(n)
  );
}
function SE(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    i = e[n],
    a = e[r],
    o;
  return (
    a < i && ((o = n), (n = r), (r = o), (o = i), (i = a), (a = o)),
    (e[n] = t.floor(i)),
    (e[r] = t.ceil(a)),
    e
  );
}
function kb(e) {
  return Math.log(e);
}
function Mb(e) {
  return Math.exp(e);
}
function fW(e) {
  return -Math.log(-e);
}
function dW(e) {
  return -Math.exp(-e);
}
function pW(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function hW(e) {
  return e === 10 ? pW : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function vW(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Nb(e) {
  return (t, n) => -e(-t, n);
}
function jm(e) {
  const t = e(kb, Mb),
    n = t.domain;
  let r = 10,
    i,
    a;
  function o() {
    return (
      (i = vW(r)),
      (a = hW(r)),
      n()[0] < 0 ? ((i = Nb(i)), (a = Nb(a)), e(fW, dW)) : e(kb, Mb),
      t
    );
  }
  return (
    (t.base = function (l) {
      return arguments.length ? ((r = +l), o()) : r;
    }),
    (t.domain = function (l) {
      return arguments.length ? (n(l), o()) : n();
    }),
    (t.ticks = (l) => {
      const u = n();
      let s = u[0],
        f = u[u.length - 1];
      const c = f < s;
      c && ([s, f] = [f, s]);
      let d = i(s),
        p = i(f),
        m,
        v;
      const b = l == null ? 10 : +l;
      let g = [];
      if (!(r % 1) && p - d < b) {
        if (((d = Math.floor(d)), (p = Math.ceil(p)), s > 0)) {
          for (; d <= p; ++d)
            for (m = 1; m < r; ++m)
              if (((v = d < 0 ? m / a(-d) : m * a(d)), !(v < s))) {
                if (v > f) break;
                g.push(v);
              }
        } else
          for (; d <= p; ++d)
            for (m = r - 1; m >= 1; --m)
              if (((v = d > 0 ? m / a(-d) : m * a(d)), !(v < s))) {
                if (v > f) break;
                g.push(v);
              }
        g.length * 2 < b && (g = Jh(s, f, b));
      } else g = Jh(d, p, Math.min(p - d, b)).map(a);
      return c ? g.reverse() : g;
    }),
    (t.tickFormat = (l, u) => {
      if (
        (l == null && (l = 10),
        u == null && (u = r === 10 ? "s" : ","),
        typeof u != "function" &&
          (!(r % 1) && (u = Il(u)).precision == null && (u.trim = !0),
          (u = Cm(u))),
        l === 1 / 0)
      )
        return u;
      const s = Math.max(1, (r * l) / t.ticks().length);
      return (f) => {
        let c = f / a(Math.round(i(f)));
        return c * r < r - 0.5 && (c *= r), c <= s ? u(f) : "";
      };
    }),
    (t.nice = () =>
      n(
        SE(n(), {
          floor: (l) => a(Math.floor(i(l))),
          ceil: (l) => a(Math.ceil(i(l))),
        })
      )),
    t
  );
}
function _E() {
  const e = jm(Xf()).domain([1, 10]);
  return (e.copy = () => Su(e, _E()).base(e.base())), _n.apply(e, arguments), e;
}
function Ib(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Db(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function km(e) {
  var t = 1,
    n = e(Ib(t), Db(t));
  return (
    (n.constant = function (r) {
      return arguments.length ? e(Ib((t = +r)), Db(t)) : t;
    }),
    ii(n)
  );
}
function OE() {
  var e = km(Xf());
  return (
    (e.copy = function () {
      return Su(e, OE()).constant(e.constant());
    }),
    _n.apply(e, arguments)
  );
}
function Rb(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function yW(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function mW(e) {
  return e < 0 ? -e * e : e * e;
}
function Mm(e) {
  var t = e(Dt, Dt),
    n = 1;
  function r() {
    return n === 1 ? e(Dt, Dt) : n === 0.5 ? e(yW, mW) : e(Rb(n), Rb(1 / n));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((n = +i), r()) : n;
    }),
    ii(t)
  );
}
function Nm() {
  var e = Mm(Xf());
  return (
    (e.copy = function () {
      return Su(e, Nm()).exponent(e.exponent());
    }),
    _n.apply(e, arguments),
    e
  );
}
function gW() {
  return Nm.apply(null, arguments).exponent(0.5);
}
function Lb(e) {
  return Math.sign(e) * e * e;
}
function bW(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function PE() {
  var e = Tm(),
    t = [0, 1],
    n = !1,
    r;
  function i(a) {
    var o = bW(e(a));
    return isNaN(o) ? r : n ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(Lb(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length
        ? (e.range((t = Array.from(a, xc)).map(Lb)), i)
        : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((n = !!a), i) : n;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return PE(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    _n.apply(i, arguments),
    ii(i)
  );
}
function EE() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var o = 0,
      l = Math.max(1, t.length);
    for (n = new Array(l - 1); ++o < l; ) n[o - 1] = O7(e, o / l);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? r : t[wu(n, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var l = t.indexOf(o);
      return l < 0
        ? [NaN, NaN]
        : [l > 0 ? n[l - 1] : e[0], l < n.length ? n[l] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let l of o) l != null && !isNaN((l = +l)) && e.push(l);
      return e.sort(Gr), i();
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((r = o), a) : r;
    }),
    (a.quantiles = function () {
      return n.slice();
    }),
    (a.copy = function () {
      return EE().domain(e).range(t).unknown(r);
    }),
    _n.apply(a, arguments)
  );
}
function AE() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(u) {
    return u != null && u <= u ? i[wu(r, u, 0, n)] : a;
  }
  function l() {
    var u = -1;
    for (r = new Array(n); ++u < n; )
      r[u] = ((u + 1) * t - (u - n) * e) / (n + 1);
    return o;
  }
  return (
    (o.domain = function (u) {
      return arguments.length
        ? (([e, t] = u), (e = +e), (t = +t), l())
        : [e, t];
    }),
    (o.range = function (u) {
      return arguments.length
        ? ((n = (i = Array.from(u)).length - 1), l())
        : i.slice();
    }),
    (o.invertExtent = function (u) {
      var s = i.indexOf(u);
      return s < 0
        ? [NaN, NaN]
        : s < 1
        ? [e, r[0]]
        : s >= n
        ? [r[n - 1], t]
        : [r[s - 1], r[s]];
    }),
    (o.unknown = function (u) {
      return arguments.length && (a = u), o;
    }),
    (o.thresholds = function () {
      return r.slice();
    }),
    (o.copy = function () {
      return AE().domain([e, t]).range(i).unknown(a);
    }),
    _n.apply(ii(o), arguments)
  );
}
function TE() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(a) {
    return a != null && a <= a ? t[wu(e, a, 0, r)] : n;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (r = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (r = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return TE().domain(e).range(t).unknown(n);
    }),
    _n.apply(i, arguments)
  );
}
const up = new Date(),
  sp = new Date();
function lt(e, t, n, r) {
  function i(a) {
    return e((a = arguments.length === 0 ? new Date() : new Date(+a))), a;
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        l = i.ceil(a);
      return a - o < l - a ? o : l;
    }),
    (i.offset = (a, o) => (
      t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a
    )),
    (i.range = (a, o, l) => {
      const u = [];
      if (
        ((a = i.ceil(a)),
        (l = l == null ? 1 : Math.floor(l)),
        !(a < o) || !(l > 0))
      )
        return u;
      let s;
      do u.push((s = new Date(+a))), t(a, l), e(a);
      while (s < a && a < o);
      return u;
    }),
    (i.filter = (a) =>
      lt(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        (o, l) => {
          if (o >= o)
            if (l < 0) for (; ++l <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --l >= 0; ) for (; t(o, 1), !a(o); );
        }
      )),
    n &&
      ((i.count = (a, o) => (
        up.setTime(+a), sp.setTime(+o), e(up), e(sp), Math.floor(n(up, sp))
      )),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
          ? i.filter(r ? (o) => r(o) % a === 0 : (o) => i.count(0, o) % a === 0)
          : i
      ))),
    i
  );
}
const Oc = lt(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e
);
Oc.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
    ? lt(
        (t) => {
          t.setTime(Math.floor(t / e) * e);
        },
        (t, n) => {
          t.setTime(+t + n * e);
        },
        (t, n) => (n - t) / e
      )
    : Oc
);
Oc.range;
const or = 1e3,
  vn = or * 60,
  lr = vn * 60,
  mr = lr * 24,
  Im = mr * 7,
  Bb = mr * 30,
  cp = mr * 365,
  _i = lt(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * or);
    },
    (e, t) => (t - e) / or,
    (e) => e.getUTCSeconds()
  );
_i.range;
const Dm = lt(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * or);
  },
  (e, t) => {
    e.setTime(+e + t * vn);
  },
  (e, t) => (t - e) / vn,
  (e) => e.getMinutes()
);
Dm.range;
const Rm = lt(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * vn);
  },
  (e, t) => (t - e) / vn,
  (e) => e.getUTCMinutes()
);
Rm.range;
const Lm = lt(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * or - e.getMinutes() * vn
    );
  },
  (e, t) => {
    e.setTime(+e + t * lr);
  },
  (e, t) => (t - e) / lr,
  (e) => e.getHours()
);
Lm.range;
const Bm = lt(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * lr);
  },
  (e, t) => (t - e) / lr,
  (e) => e.getUTCHours()
);
Bm.range;
const _u = lt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * vn) / mr,
  (e) => e.getDate() - 1
);
_u.range;
const Yf = lt(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / mr,
  (e) => e.getUTCDate() - 1
);
Yf.range;
const $E = lt(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / mr,
  (e) => Math.floor(e / mr)
);
$E.range;
function Fi(e) {
  return lt(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setDate(t.getDate() + n * 7);
    },
    (t, n) =>
      (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * vn) / Im
  );
}
const Qf = Fi(0),
  Pc = Fi(1),
  wW = Fi(2),
  xW = Fi(3),
  La = Fi(4),
  SW = Fi(5),
  _W = Fi(6);
Qf.range;
Pc.range;
wW.range;
xW.range;
La.range;
SW.range;
_W.range;
function Ui(e) {
  return lt(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setUTCDate(t.getUTCDate() + n * 7);
    },
    (t, n) => (n - t) / Im
  );
}
const Zf = Ui(0),
  Ec = Ui(1),
  OW = Ui(2),
  PW = Ui(3),
  Ba = Ui(4),
  EW = Ui(5),
  AW = Ui(6);
Zf.range;
Ec.range;
OW.range;
PW.range;
Ba.range;
EW.range;
AW.range;
const zm = lt(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth()
);
zm.range;
const Fm = lt(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth()
);
Fm.range;
const gr = lt(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear()
);
gr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : lt(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        }
      );
gr.range;
const br = lt(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear()
);
br.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : lt(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        }
      );
br.range;
function CE(e, t, n, r, i, a) {
  const o = [
    [_i, 1, or],
    [_i, 5, 5 * or],
    [_i, 15, 15 * or],
    [_i, 30, 30 * or],
    [a, 1, vn],
    [a, 5, 5 * vn],
    [a, 15, 15 * vn],
    [a, 30, 30 * vn],
    [i, 1, lr],
    [i, 3, 3 * lr],
    [i, 6, 6 * lr],
    [i, 12, 12 * lr],
    [r, 1, mr],
    [r, 2, 2 * mr],
    [n, 1, Im],
    [t, 1, Bb],
    [t, 3, 3 * Bb],
    [e, 1, cp],
  ];
  function l(s, f, c) {
    const d = f < s;
    d && ([s, f] = [f, s]);
    const p = c && typeof c.range == "function" ? c : u(s, f, c),
      m = p ? p.range(s, +f + 1) : [];
    return d ? m.reverse() : m;
  }
  function u(s, f, c) {
    const d = Math.abs(f - s) / c,
      p = _m(([, , b]) => b).right(o, d);
    if (p === o.length) return e.every(tv(s / cp, f / cp, c));
    if (p === 0) return Oc.every(Math.max(tv(s, f, c), 1));
    const [m, v] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return m.every(v);
  }
  return [l, u];
}
const [TW, $W] = CE(br, Fm, Zf, $E, Bm, Rm),
  [CW, jW] = CE(gr, zm, Qf, _u, Lm, Dm);
function fp(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function dp(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Co(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function kW(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    l = e.months,
    u = e.shortMonths,
    s = jo(i),
    f = ko(i),
    c = jo(a),
    d = ko(a),
    p = jo(o),
    m = ko(o),
    v = jo(l),
    b = ko(l),
    g = jo(u),
    y = ko(u),
    w = {
      a: W,
      A: j,
      b: B,
      B: K,
      c: null,
      d: Kb,
      e: Kb,
      f: t9,
      g: f9,
      G: p9,
      H: ZW,
      I: JW,
      j: e9,
      L: jE,
      m: n9,
      M: r9,
      p: Z,
      q: V,
      Q: Gb,
      s: Xb,
      S: i9,
      u: a9,
      U: o9,
      V: l9,
      w: u9,
      W: s9,
      x: null,
      X: null,
      y: c9,
      Y: d9,
      Z: h9,
      "%": qb,
    },
    h = {
      a: oe,
      A: ie,
      b: De,
      B: ut,
      c: null,
      d: Vb,
      e: Vb,
      f: g9,
      g: T9,
      G: C9,
      H: v9,
      I: y9,
      j: m9,
      L: ME,
      m: b9,
      M: w9,
      p: qe,
      q: vt,
      Q: Gb,
      s: Xb,
      S: x9,
      u: S9,
      U: _9,
      V: O9,
      w: P9,
      W: E9,
      x: null,
      X: null,
      y: A9,
      Y: $9,
      Z: j9,
      "%": qb,
    },
    x = {
      a: A,
      A: k,
      b: $,
      B: D,
      c: N,
      d: Wb,
      e: Wb,
      f: GW,
      g: Ub,
      G: Fb,
      H: Hb,
      I: Hb,
      j: HW,
      L: qW,
      m: WW,
      M: KW,
      p: C,
      q: UW,
      Q: YW,
      s: QW,
      S: VW,
      u: RW,
      U: LW,
      V: BW,
      w: DW,
      W: zW,
      x: z,
      X: R,
      y: Ub,
      Y: Fb,
      Z: FW,
      "%": XW,
    };
  (w.x = S(n, w)),
    (w.X = S(r, w)),
    (w.c = S(t, w)),
    (h.x = S(n, h)),
    (h.X = S(r, h)),
    (h.c = S(t, h));
  function S(G, ne) {
    return function (ue) {
      var F = [],
        Be = -1,
        pe = 0,
        je = G.length,
        ze,
        yt,
        zt;
      for (ue instanceof Date || (ue = new Date(+ue)); ++Be < je; )
        G.charCodeAt(Be) === 37 &&
          (F.push(G.slice(pe, Be)),
          (yt = zb[(ze = G.charAt(++Be))]) != null
            ? (ze = G.charAt(++Be))
            : (yt = ze === "e" ? " " : "0"),
          (zt = ne[ze]) && (ze = zt(ue, yt)),
          F.push(ze),
          (pe = Be + 1));
      return F.push(G.slice(pe, Be)), F.join("");
    };
  }
  function _(G, ne) {
    return function (ue) {
      var F = Co(1900, void 0, 1),
        Be = O(F, G, (ue += ""), 0),
        pe,
        je;
      if (Be != ue.length) return null;
      if ("Q" in F) return new Date(F.Q);
      if ("s" in F) return new Date(F.s * 1e3 + ("L" in F ? F.L : 0));
      if (
        (ne && !("Z" in F) && (F.Z = 0),
        "p" in F && (F.H = (F.H % 12) + F.p * 12),
        F.m === void 0 && (F.m = "q" in F ? F.q : 0),
        "V" in F)
      ) {
        if (F.V < 1 || F.V > 53) return null;
        "w" in F || (F.w = 1),
          "Z" in F
            ? ((pe = dp(Co(F.y, 0, 1))),
              (je = pe.getUTCDay()),
              (pe = je > 4 || je === 0 ? Ec.ceil(pe) : Ec(pe)),
              (pe = Yf.offset(pe, (F.V - 1) * 7)),
              (F.y = pe.getUTCFullYear()),
              (F.m = pe.getUTCMonth()),
              (F.d = pe.getUTCDate() + ((F.w + 6) % 7)))
            : ((pe = fp(Co(F.y, 0, 1))),
              (je = pe.getDay()),
              (pe = je > 4 || je === 0 ? Pc.ceil(pe) : Pc(pe)),
              (pe = _u.offset(pe, (F.V - 1) * 7)),
              (F.y = pe.getFullYear()),
              (F.m = pe.getMonth()),
              (F.d = pe.getDate() + ((F.w + 6) % 7)));
      } else
        ("W" in F || "U" in F) &&
          ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0),
          (je =
            "Z" in F
              ? dp(Co(F.y, 0, 1)).getUTCDay()
              : fp(Co(F.y, 0, 1)).getDay()),
          (F.m = 0),
          (F.d =
            "W" in F
              ? ((F.w + 6) % 7) + F.W * 7 - ((je + 5) % 7)
              : F.w + F.U * 7 - ((je + 6) % 7)));
      return "Z" in F
        ? ((F.H += (F.Z / 100) | 0), (F.M += F.Z % 100), dp(F))
        : fp(F);
    };
  }
  function O(G, ne, ue, F) {
    for (var Be = 0, pe = ne.length, je = ue.length, ze, yt; Be < pe; ) {
      if (F >= je) return -1;
      if (((ze = ne.charCodeAt(Be++)), ze === 37)) {
        if (
          ((ze = ne.charAt(Be++)),
          (yt = x[ze in zb ? ne.charAt(Be++) : ze]),
          !yt || (F = yt(G, ue, F)) < 0)
        )
          return -1;
      } else if (ze != ue.charCodeAt(F++)) return -1;
    }
    return F;
  }
  function C(G, ne, ue) {
    var F = s.exec(ne.slice(ue));
    return F ? ((G.p = f.get(F[0].toLowerCase())), ue + F[0].length) : -1;
  }
  function A(G, ne, ue) {
    var F = p.exec(ne.slice(ue));
    return F ? ((G.w = m.get(F[0].toLowerCase())), ue + F[0].length) : -1;
  }
  function k(G, ne, ue) {
    var F = c.exec(ne.slice(ue));
    return F ? ((G.w = d.get(F[0].toLowerCase())), ue + F[0].length) : -1;
  }
  function $(G, ne, ue) {
    var F = g.exec(ne.slice(ue));
    return F ? ((G.m = y.get(F[0].toLowerCase())), ue + F[0].length) : -1;
  }
  function D(G, ne, ue) {
    var F = v.exec(ne.slice(ue));
    return F ? ((G.m = b.get(F[0].toLowerCase())), ue + F[0].length) : -1;
  }
  function N(G, ne, ue) {
    return O(G, t, ne, ue);
  }
  function z(G, ne, ue) {
    return O(G, n, ne, ue);
  }
  function R(G, ne, ue) {
    return O(G, r, ne, ue);
  }
  function W(G) {
    return o[G.getDay()];
  }
  function j(G) {
    return a[G.getDay()];
  }
  function B(G) {
    return u[G.getMonth()];
  }
  function K(G) {
    return l[G.getMonth()];
  }
  function Z(G) {
    return i[+(G.getHours() >= 12)];
  }
  function V(G) {
    return 1 + ~~(G.getMonth() / 3);
  }
  function oe(G) {
    return o[G.getUTCDay()];
  }
  function ie(G) {
    return a[G.getUTCDay()];
  }
  function De(G) {
    return u[G.getUTCMonth()];
  }
  function ut(G) {
    return l[G.getUTCMonth()];
  }
  function qe(G) {
    return i[+(G.getUTCHours() >= 12)];
  }
  function vt(G) {
    return 1 + ~~(G.getUTCMonth() / 3);
  }
  return {
    format: function (G) {
      var ne = S((G += ""), w);
      return (
        (ne.toString = function () {
          return G;
        }),
        ne
      );
    },
    parse: function (G) {
      var ne = _((G += ""), !1);
      return (
        (ne.toString = function () {
          return G;
        }),
        ne
      );
    },
    utcFormat: function (G) {
      var ne = S((G += ""), h);
      return (
        (ne.toString = function () {
          return G;
        }),
        ne
      );
    },
    utcParse: function (G) {
      var ne = _((G += ""), !0);
      return (
        (ne.toString = function () {
          return G;
        }),
        ne
      );
    },
  };
}
var zb = { "-": "", _: " ", 0: "0" },
  ht = /^\s*\d+/,
  MW = /^%/,
  NW = /[\\^$*+?|[\]().{}]/g;
function we(e, t, n) {
  var r = e < 0 ? "-" : "",
    i = (r ? -e : e) + "",
    a = i.length;
  return r + (a < n ? new Array(n - a + 1).join(t) + i : i);
}
function IW(e) {
  return e.replace(NW, "\\$&");
}
function jo(e) {
  return new RegExp("^(?:" + e.map(IW).join("|") + ")", "i");
}
function ko(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function DW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function RW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function LW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function BW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function zW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function Fb(e, t, n) {
  var r = ht.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function Ub(e, t, n) {
  var r = ht.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function FW(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
    : -1;
}
function UW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function WW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function Wb(e, t, n) {
  var r = ht.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function HW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function Hb(e, t, n) {
  var r = ht.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function KW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function VW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function qW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function GW(e, t, n) {
  var r = ht.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function XW(e, t, n) {
  var r = MW.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function YW(e, t, n) {
  var r = ht.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function QW(e, t, n) {
  var r = ht.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function Kb(e, t) {
  return we(e.getDate(), t, 2);
}
function ZW(e, t) {
  return we(e.getHours(), t, 2);
}
function JW(e, t) {
  return we(e.getHours() % 12 || 12, t, 2);
}
function e9(e, t) {
  return we(1 + _u.count(gr(e), e), t, 3);
}
function jE(e, t) {
  return we(e.getMilliseconds(), t, 3);
}
function t9(e, t) {
  return jE(e, t) + "000";
}
function n9(e, t) {
  return we(e.getMonth() + 1, t, 2);
}
function r9(e, t) {
  return we(e.getMinutes(), t, 2);
}
function i9(e, t) {
  return we(e.getSeconds(), t, 2);
}
function a9(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function o9(e, t) {
  return we(Qf.count(gr(e) - 1, e), t, 2);
}
function kE(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? La(e) : La.ceil(e);
}
function l9(e, t) {
  return (e = kE(e)), we(La.count(gr(e), e) + (gr(e).getDay() === 4), t, 2);
}
function u9(e) {
  return e.getDay();
}
function s9(e, t) {
  return we(Pc.count(gr(e) - 1, e), t, 2);
}
function c9(e, t) {
  return we(e.getFullYear() % 100, t, 2);
}
function f9(e, t) {
  return (e = kE(e)), we(e.getFullYear() % 100, t, 2);
}
function d9(e, t) {
  return we(e.getFullYear() % 1e4, t, 4);
}
function p9(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? La(e) : La.ceil(e)),
    we(e.getFullYear() % 1e4, t, 4)
  );
}
function h9(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    we((t / 60) | 0, "0", 2) +
    we(t % 60, "0", 2)
  );
}
function Vb(e, t) {
  return we(e.getUTCDate(), t, 2);
}
function v9(e, t) {
  return we(e.getUTCHours(), t, 2);
}
function y9(e, t) {
  return we(e.getUTCHours() % 12 || 12, t, 2);
}
function m9(e, t) {
  return we(1 + Yf.count(br(e), e), t, 3);
}
function ME(e, t) {
  return we(e.getUTCMilliseconds(), t, 3);
}
function g9(e, t) {
  return ME(e, t) + "000";
}
function b9(e, t) {
  return we(e.getUTCMonth() + 1, t, 2);
}
function w9(e, t) {
  return we(e.getUTCMinutes(), t, 2);
}
function x9(e, t) {
  return we(e.getUTCSeconds(), t, 2);
}
function S9(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function _9(e, t) {
  return we(Zf.count(br(e) - 1, e), t, 2);
}
function NE(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ba(e) : Ba.ceil(e);
}
function O9(e, t) {
  return (e = NE(e)), we(Ba.count(br(e), e) + (br(e).getUTCDay() === 4), t, 2);
}
function P9(e) {
  return e.getUTCDay();
}
function E9(e, t) {
  return we(Ec.count(br(e) - 1, e), t, 2);
}
function A9(e, t) {
  return we(e.getUTCFullYear() % 100, t, 2);
}
function T9(e, t) {
  return (e = NE(e)), we(e.getUTCFullYear() % 100, t, 2);
}
function $9(e, t) {
  return we(e.getUTCFullYear() % 1e4, t, 4);
}
function C9(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? Ba(e) : Ba.ceil(e)),
    we(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function j9() {
  return "+0000";
}
function qb() {
  return "%";
}
function Gb(e) {
  return +e;
}
function Xb(e) {
  return Math.floor(+e / 1e3);
}
var Vi, IE, DE;
k9({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function k9(e) {
  return (
    (Vi = kW(e)),
    (IE = Vi.format),
    Vi.parse,
    (DE = Vi.utcFormat),
    Vi.utcParse,
    Vi
  );
}
function M9(e) {
  return new Date(e);
}
function N9(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Um(e, t, n, r, i, a, o, l, u, s) {
  var f = Tm(),
    c = f.invert,
    d = f.domain,
    p = s(".%L"),
    m = s(":%S"),
    v = s("%I:%M"),
    b = s("%I %p"),
    g = s("%a %d"),
    y = s("%b %d"),
    w = s("%B"),
    h = s("%Y");
  function x(S) {
    return (
      u(S) < S
        ? p
        : l(S) < S
        ? m
        : o(S) < S
        ? v
        : a(S) < S
        ? b
        : r(S) < S
        ? i(S) < S
          ? g
          : y
        : n(S) < S
        ? w
        : h
    )(S);
  }
  return (
    (f.invert = function (S) {
      return new Date(c(S));
    }),
    (f.domain = function (S) {
      return arguments.length ? d(Array.from(S, N9)) : d().map(M9);
    }),
    (f.ticks = function (S) {
      var _ = d();
      return e(_[0], _[_.length - 1], S ?? 10);
    }),
    (f.tickFormat = function (S, _) {
      return _ == null ? x : s(_);
    }),
    (f.nice = function (S) {
      var _ = d();
      return (
        (!S || typeof S.range != "function") &&
          (S = t(_[0], _[_.length - 1], S ?? 10)),
        S ? d(SE(_, S)) : f
      );
    }),
    (f.copy = function () {
      return Su(f, Um(e, t, n, r, i, a, o, l, u, s));
    }),
    f
  );
}
function I9() {
  return _n.apply(
    Um(CW, jW, gr, zm, Qf, _u, Lm, Dm, _i, IE).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function D9() {
  return _n.apply(
    Um(TW, $W, br, Fm, Zf, Yf, Bm, Rm, _i, DE).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments
  );
}
function Jf() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = Dt,
    l = !1,
    u;
  function s(c) {
    return c == null || isNaN((c = +c))
      ? u
      : o(
          i === 0
            ? 0.5
            : ((c = (a(c) - n) * i), l ? Math.max(0, Math.min(1, c)) : c)
        );
  }
  (s.domain = function (c) {
    return arguments.length
      ? (([e, t] = c),
        (n = a((e = +e))),
        (r = a((t = +t))),
        (i = n === r ? 0 : 1 / (r - n)),
        s)
      : [e, t];
  }),
    (s.clamp = function (c) {
      return arguments.length ? ((l = !!c), s) : l;
    }),
    (s.interpolator = function (c) {
      return arguments.length ? ((o = c), s) : o;
    });
  function f(c) {
    return function (d) {
      var p, m;
      return arguments.length ? (([p, m] = d), (o = c(p, m)), s) : [o(0), o(1)];
    };
  }
  return (
    (s.range = f(lo)),
    (s.rangeRound = f(Am)),
    (s.unknown = function (c) {
      return arguments.length ? ((u = c), s) : u;
    }),
    function (c) {
      return (
        (a = c), (n = c(e)), (r = c(t)), (i = n === r ? 0 : 1 / (r - n)), s
      );
    }
  );
}
function ai(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function RE() {
  var e = ii(Jf()(Dt));
  return (
    (e.copy = function () {
      return ai(e, RE());
    }),
    Er.apply(e, arguments)
  );
}
function LE() {
  var e = jm(Jf()).domain([1, 10]);
  return (
    (e.copy = function () {
      return ai(e, LE()).base(e.base());
    }),
    Er.apply(e, arguments)
  );
}
function BE() {
  var e = km(Jf());
  return (
    (e.copy = function () {
      return ai(e, BE()).constant(e.constant());
    }),
    Er.apply(e, arguments)
  );
}
function Wm() {
  var e = Mm(Jf());
  return (
    (e.copy = function () {
      return ai(e, Wm()).exponent(e.exponent());
    }),
    Er.apply(e, arguments)
  );
}
function R9() {
  return Wm.apply(null, arguments).exponent(0.5);
}
function zE() {
  var e = [],
    t = Dt;
  function n(r) {
    if (r != null && !isNaN((r = +r)))
      return t((wu(e, r, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (r) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of r) i != null && !isNaN((i = +i)) && e.push(i);
      return e.sort(Gr), n;
    }),
    (n.interpolator = function (r) {
      return arguments.length ? ((t = r), n) : t;
    }),
    (n.range = function () {
      return e.map((r, i) => t(i / (e.length - 1)));
    }),
    (n.quantiles = function (r) {
      return Array.from({ length: r + 1 }, (i, a) => _7(e, a / r));
    }),
    (n.copy = function () {
      return zE(t).domain(e);
    }),
    Er.apply(n, arguments)
  );
}
function ed() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    l,
    u,
    s = Dt,
    f,
    c = !1,
    d;
  function p(v) {
    return isNaN((v = +v))
      ? d
      : ((v = 0.5 + ((v = +f(v)) - a) * (r * v < r * a ? l : u)),
        s(c ? Math.max(0, Math.min(1, v)) : v));
  }
  (p.domain = function (v) {
    return arguments.length
      ? (([e, t, n] = v),
        (i = f((e = +e))),
        (a = f((t = +t))),
        (o = f((n = +n))),
        (l = i === a ? 0 : 0.5 / (a - i)),
        (u = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p)
      : [e, t, n];
  }),
    (p.clamp = function (v) {
      return arguments.length ? ((c = !!v), p) : c;
    }),
    (p.interpolator = function (v) {
      return arguments.length ? ((s = v), p) : s;
    });
  function m(v) {
    return function (b) {
      var g, y, w;
      return arguments.length
        ? (([g, y, w] = b), (s = X7(v, [g, y, w])), p)
        : [s(0), s(0.5), s(1)];
    };
  }
  return (
    (p.range = m(lo)),
    (p.rangeRound = m(Am)),
    (p.unknown = function (v) {
      return arguments.length ? ((d = v), p) : d;
    }),
    function (v) {
      return (
        (f = v),
        (i = v(e)),
        (a = v(t)),
        (o = v(n)),
        (l = i === a ? 0 : 0.5 / (a - i)),
        (u = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p
      );
    }
  );
}
function FE() {
  var e = ii(ed()(Dt));
  return (
    (e.copy = function () {
      return ai(e, FE());
    }),
    Er.apply(e, arguments)
  );
}
function UE() {
  var e = jm(ed()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return ai(e, UE()).base(e.base());
    }),
    Er.apply(e, arguments)
  );
}
function WE() {
  var e = km(ed());
  return (
    (e.copy = function () {
      return ai(e, WE()).constant(e.constant());
    }),
    Er.apply(e, arguments)
  );
}
function Hm() {
  var e = Mm(ed());
  return (
    (e.copy = function () {
      return ai(e, Hm()).exponent(e.exponent());
    }),
    Er.apply(e, arguments)
  );
}
function L9() {
  return Hm.apply(null, arguments).exponent(0.5);
}
const Yb = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: jl,
      scaleDiverging: FE,
      scaleDivergingLog: UE,
      scaleDivergingPow: Hm,
      scaleDivergingSqrt: L9,
      scaleDivergingSymlog: WE,
      scaleIdentity: xE,
      scaleImplicit: nv,
      scaleLinear: _c,
      scaleLog: _E,
      scaleOrdinal: Om,
      scalePoint: el,
      scalePow: Nm,
      scaleQuantile: EE,
      scaleQuantize: AE,
      scaleRadial: PE,
      scaleSequential: RE,
      scaleSequentialLog: LE,
      scaleSequentialPow: Wm,
      scaleSequentialQuantile: zE,
      scaleSequentialSqrt: R9,
      scaleSequentialSymlog: BE,
      scaleSqrt: gW,
      scaleSymlog: OE,
      scaleThreshold: TE,
      scaleTime: I9,
      scaleUtc: D9,
      tickFormat: wE,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var B9 = Za;
function z9(e, t, n) {
  for (var r = -1, i = e.length; ++r < i; ) {
    var a = e[r],
      o = t(a);
    if (o != null && (l === void 0 ? o === o && !B9(o) : n(o, l)))
      var l = o,
        u = a;
  }
  return u;
}
var HE = z9;
function F9(e, t) {
  return e > t;
}
var U9 = F9,
  W9 = HE,
  H9 = U9,
  K9 = ao;
function V9(e) {
  return e && e.length ? W9(e, K9, H9) : void 0;
}
var q9 = V9;
const td = Te(q9);
function G9(e, t) {
  return e < t;
}
var X9 = G9,
  Y9 = HE,
  Q9 = X9,
  Z9 = ao;
function J9(e) {
  return e && e.length ? Y9(e, Z9, Q9) : void 0;
}
var eH = J9;
const nd = Te(eH);
var tH = am,
  nH = oo,
  rH = ZP,
  iH = qt;
function aH(e, t) {
  var n = iH(e) ? tH : rH;
  return n(e, nH(t));
}
var oH = aH,
  lH = YP,
  uH = oH;
function sH(e, t) {
  return lH(uH(e, t), 1);
}
var cH = sH;
const fH = Te(cH);
var dH = bm;
function pH(e, t) {
  return dH(e, t);
}
var hH = pH;
const rd = Te(hH);
var uo = 1e9,
  vH = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  Vm,
  Le = !0,
  xn = "[DecimalError] ",
  $i = xn + "Invalid argument: ",
  Km = xn + "Exponent out of range: ",
  so = Math.floor,
  yi = Math.pow,
  yH = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Zt,
  ct = 1e7,
  Ne = 7,
  KE = 9007199254740991,
  Ac = so(KE / Ne),
  Q = {};
Q.absoluteValue = Q.abs = function () {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
Q.comparedTo = Q.cmp = function (e) {
  var t,
    n,
    r,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (r = a.d.length, i = e.d.length, t = 0, n = r < i ? r : i; t < n; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return r === i ? 0 : (r > i) ^ (a.s < 0) ? 1 : -1;
};
Q.decimalPlaces = Q.dp = function () {
  var e = this,
    t = e.d.length - 1,
    n = (t - e.e) * Ne;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) n--;
  return n < 0 ? 0 : n;
};
Q.dividedBy = Q.div = function (e) {
  return fr(this, new this.constructor(e));
};
Q.dividedToIntegerBy = Q.idiv = function (e) {
  var t = this,
    n = t.constructor;
  return Ae(fr(t, new n(e), 0, 1), n.precision);
};
Q.equals = Q.eq = function (e) {
  return !this.cmp(e);
};
Q.exponent = function () {
  return tt(this);
};
Q.greaterThan = Q.gt = function (e) {
  return this.cmp(e) > 0;
};
Q.greaterThanOrEqualTo = Q.gte = function (e) {
  return this.cmp(e) >= 0;
};
Q.isInteger = Q.isint = function () {
  return this.e > this.d.length - 2;
};
Q.isNegative = Q.isneg = function () {
  return this.s < 0;
};
Q.isPositive = Q.ispos = function () {
  return this.s > 0;
};
Q.isZero = function () {
  return this.s === 0;
};
Q.lessThan = Q.lt = function (e) {
  return this.cmp(e) < 0;
};
Q.lessThanOrEqualTo = Q.lte = function (e) {
  return this.cmp(e) < 1;
};
Q.logarithm = Q.log = function (e) {
  var t,
    n = this,
    r = n.constructor,
    i = r.precision,
    a = i + 5;
  if (e === void 0) e = new r(10);
  else if (((e = new r(e)), e.s < 1 || e.eq(Zt))) throw Error(xn + "NaN");
  if (n.s < 1) throw Error(xn + (n.s ? "NaN" : "-Infinity"));
  return n.eq(Zt)
    ? new r(0)
    : ((Le = !1), (t = fr(Dl(n, a), Dl(e, a), a)), (Le = !0), Ae(t, i));
};
Q.minus = Q.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? GE(t, e) : VE(t, ((e.s = -e.s), e))
  );
};
Q.modulo = Q.mod = function (e) {
  var t,
    n = this,
    r = n.constructor,
    i = r.precision;
  if (((e = new r(e)), !e.s)) throw Error(xn + "NaN");
  return n.s
    ? ((Le = !1), (t = fr(n, e, 0, 1).times(e)), (Le = !0), n.minus(t))
    : Ae(new r(n), i);
};
Q.naturalExponential = Q.exp = function () {
  return qE(this);
};
Q.naturalLogarithm = Q.ln = function () {
  return Dl(this);
};
Q.negated = Q.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s || 0), e;
};
Q.plus = Q.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? VE(t, e) : GE(t, ((e.s = -e.s), e))
  );
};
Q.precision = Q.sd = function (e) {
  var t,
    n,
    r,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error($i + e);
  if (
    ((t = tt(i) + 1), (r = i.d.length - 1), (n = r * Ne + 1), (r = i.d[r]), r)
  ) {
    for (; r % 10 == 0; r /= 10) n--;
    for (r = i.d[0]; r >= 10; r /= 10) n++;
  }
  return e && t > n ? t : n;
};
Q.squareRoot = Q.sqrt = function () {
  var e,
    t,
    n,
    r,
    i,
    a,
    o,
    l = this,
    u = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new u(0);
    throw Error(xn + "NaN");
  }
  for (
    e = tt(l),
      Le = !1,
      i = Math.sqrt(+l),
      i == 0 || i == 1 / 0
        ? ((t = Kn(l.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = so((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (r = new u(t)))
        : (r = new u(i.toString())),
      n = u.precision,
      i = o = n + 3;
    ;

  )
    if (
      ((a = r),
      (r = a.plus(fr(l, a, o + 2)).times(0.5)),
      Kn(a.d).slice(0, o) === (t = Kn(r.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((Ae(a, n + 1, 0), a.times(a).eq(l))) {
          r = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return (Le = !0), Ae(r, n);
};
Q.times = Q.mul = function (e) {
  var t,
    n,
    r,
    i,
    a,
    o,
    l,
    u,
    s,
    f = this,
    c = f.constructor,
    d = f.d,
    p = (e = new c(e)).d;
  if (!f.s || !e.s) return new c(0);
  for (
    e.s *= f.s,
      n = f.e + e.e,
      u = d.length,
      s = p.length,
      u < s && ((a = d), (d = p), (p = a), (o = u), (u = s), (s = o)),
      a = [],
      o = u + s,
      r = o;
    r--;

  )
    a.push(0);
  for (r = s; --r >= 0; ) {
    for (t = 0, i = u + r; i > r; )
      (l = a[i] + p[r] * d[i - r - 1] + t),
        (a[i--] = l % ct | 0),
        (t = (l / ct) | 0);
    a[i] = (a[i] + t) % ct | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++n : a.shift(), (e.d = a), (e.e = n), Le ? Ae(e, c.precision) : e;
};
Q.toDecimalPlaces = Q.todp = function (e, t) {
  var n = this,
    r = n.constructor;
  return (
    (n = new r(n)),
    e === void 0
      ? n
      : (Qn(e, 0, uo),
        t === void 0 ? (t = r.rounding) : Qn(t, 0, 8),
        Ae(n, e + tt(n) + 1, t))
  );
};
Q.toExponential = function (e, t) {
  var n,
    r = this,
    i = r.constructor;
  return (
    e === void 0
      ? (n = Di(r, !0))
      : (Qn(e, 0, uo),
        t === void 0 ? (t = i.rounding) : Qn(t, 0, 8),
        (r = Ae(new i(r), e + 1, t)),
        (n = Di(r, !0, e + 1))),
    n
  );
};
Q.toFixed = function (e, t) {
  var n,
    r,
    i = this,
    a = i.constructor;
  return e === void 0
    ? Di(i)
    : (Qn(e, 0, uo),
      t === void 0 ? (t = a.rounding) : Qn(t, 0, 8),
      (r = Ae(new a(i), e + tt(i) + 1, t)),
      (n = Di(r.abs(), !1, e + tt(r) + 1)),
      i.isneg() && !i.isZero() ? "-" + n : n);
};
Q.toInteger = Q.toint = function () {
  var e = this,
    t = e.constructor;
  return Ae(new t(e), tt(e) + 1, t.rounding);
};
Q.toNumber = function () {
  return +this;
};
Q.toPower = Q.pow = function (e) {
  var t,
    n,
    r,
    i,
    a,
    o,
    l = this,
    u = l.constructor,
    s = 12,
    f = +(e = new u(e));
  if (!e.s) return new u(Zt);
  if (((l = new u(l)), !l.s)) {
    if (e.s < 1) throw Error(xn + "Infinity");
    return l;
  }
  if (l.eq(Zt)) return l;
  if (((r = u.precision), e.eq(Zt))) return Ae(l, r);
  if (((t = e.e), (n = e.d.length - 1), (o = t >= n), (a = l.s), o)) {
    if ((n = f < 0 ? -f : f) <= KE) {
      for (
        i = new u(Zt), t = Math.ceil(r / Ne + 4), Le = !1;
        n % 2 && ((i = i.times(l)), Zb(i.d, t)), (n = so(n / 2)), n !== 0;

      )
        (l = l.times(l)), Zb(l.d, t);
      return (Le = !0), e.s < 0 ? new u(Zt).div(i) : Ae(i, r);
    }
  } else if (a < 0) throw Error(xn + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, n)] & 1 ? -1 : 1),
    (l.s = 1),
    (Le = !1),
    (i = e.times(Dl(l, r + s))),
    (Le = !0),
    (i = qE(i)),
    (i.s = a),
    i
  );
};
Q.toPrecision = function (e, t) {
  var n,
    r,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((n = tt(i)), (r = Di(i, n <= a.toExpNeg || n >= a.toExpPos)))
      : (Qn(e, 1, uo),
        t === void 0 ? (t = a.rounding) : Qn(t, 0, 8),
        (i = Ae(new a(i), e, t)),
        (n = tt(i)),
        (r = Di(i, e <= n || n <= a.toExpNeg, e))),
    r
  );
};
Q.toSignificantDigits = Q.tosd = function (e, t) {
  var n = this,
    r = n.constructor;
  return (
    e === void 0
      ? ((e = r.precision), (t = r.rounding))
      : (Qn(e, 1, uo), t === void 0 ? (t = r.rounding) : Qn(t, 0, 8)),
    Ae(new r(n), e, t)
  );
};
Q.toString =
  Q.valueOf =
  Q.val =
  Q.toJSON =
  Q[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = tt(e),
        n = e.constructor;
      return Di(e, t <= n.toExpNeg || t >= n.toExpPos);
    };
function VE(e, t) {
  var n,
    r,
    i,
    a,
    o,
    l,
    u,
    s,
    f = e.constructor,
    c = f.precision;
  if (!e.s || !t.s) return t.s || (t = new f(e)), Le ? Ae(t, c) : t;
  if (
    ((u = e.d),
    (s = t.d),
    (o = e.e),
    (i = t.e),
    (u = u.slice()),
    (a = o - i),
    a)
  ) {
    for (
      a < 0
        ? ((r = u), (a = -a), (l = s.length))
        : ((r = s), (i = o), (l = u.length)),
        o = Math.ceil(c / Ne),
        l = o > l ? o + 1 : l + 1,
        a > l && ((a = l), (r.length = 1)),
        r.reverse();
      a--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    l = u.length,
      a = s.length,
      l - a < 0 && ((a = l), (r = s), (s = u), (u = r)),
      n = 0;
    a;

  )
    (n = ((u[--a] = u[a] + s[a] + n) / ct) | 0), (u[a] %= ct);
  for (n && (u.unshift(n), ++i), l = u.length; u[--l] == 0; ) u.pop();
  return (t.d = u), (t.e = i), Le ? Ae(t, c) : t;
}
function Qn(e, t, n) {
  if (e !== ~~e || e < t || e > n) throw Error($i + e);
}
function Kn(e) {
  var t,
    n,
    r,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      (r = e[t] + ""), (n = Ne - r.length), n && (a += Mr(n)), (a += r);
    (o = e[t]), (r = o + ""), (n = Ne - r.length), n && (a += Mr(n));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var fr = (function () {
  function e(r, i) {
    var a,
      o = 0,
      l = r.length;
    for (r = r.slice(); l--; )
      (a = r[l] * i + o), (r[l] = a % ct | 0), (o = (a / ct) | 0);
    return o && r.unshift(o), r;
  }
  function t(r, i, a, o) {
    var l, u;
    if (a != o) u = a > o ? 1 : -1;
    else
      for (l = u = 0; l < a; l++)
        if (r[l] != i[l]) {
          u = r[l] > i[l] ? 1 : -1;
          break;
        }
    return u;
  }
  function n(r, i, a) {
    for (var o = 0; a--; )
      (r[a] -= o), (o = r[a] < i[a] ? 1 : 0), (r[a] = o * ct + r[a] - i[a]);
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function (r, i, a, o) {
    var l,
      u,
      s,
      f,
      c,
      d,
      p,
      m,
      v,
      b,
      g,
      y,
      w,
      h,
      x,
      S,
      _,
      O,
      C = r.constructor,
      A = r.s == i.s ? 1 : -1,
      k = r.d,
      $ = i.d;
    if (!r.s) return new C(r);
    if (!i.s) throw Error(xn + "Division by zero");
    for (
      u = r.e - i.e,
        _ = $.length,
        x = k.length,
        p = new C(A),
        m = p.d = [],
        s = 0;
      $[s] == (k[s] || 0);

    )
      ++s;
    if (
      ($[s] > (k[s] || 0) && --u,
      a == null
        ? (y = a = C.precision)
        : o
        ? (y = a + (tt(r) - tt(i)) + 1)
        : (y = a),
      y < 0)
    )
      return new C(0);
    if (((y = (y / Ne + 2) | 0), (s = 0), _ == 1))
      for (f = 0, $ = $[0], y++; (s < x || f) && y--; s++)
        (w = f * ct + (k[s] || 0)), (m[s] = (w / $) | 0), (f = w % $ | 0);
    else {
      for (
        f = (ct / ($[0] + 1)) | 0,
          f > 1 &&
            (($ = e($, f)), (k = e(k, f)), (_ = $.length), (x = k.length)),
          h = _,
          v = k.slice(0, _),
          b = v.length;
        b < _;

      )
        v[b++] = 0;
      (O = $.slice()), O.unshift(0), (S = $[0]), $[1] >= ct / 2 && ++S;
      do
        (f = 0),
          (l = t($, v, _, b)),
          l < 0
            ? ((g = v[0]),
              _ != b && (g = g * ct + (v[1] || 0)),
              (f = (g / S) | 0),
              f > 1
                ? (f >= ct && (f = ct - 1),
                  (c = e($, f)),
                  (d = c.length),
                  (b = v.length),
                  (l = t(c, v, d, b)),
                  l == 1 && (f--, n(c, _ < d ? O : $, d)))
                : (f == 0 && (l = f = 1), (c = $.slice())),
              (d = c.length),
              d < b && c.unshift(0),
              n(v, c, b),
              l == -1 &&
                ((b = v.length),
                (l = t($, v, _, b)),
                l < 1 && (f++, n(v, _ < b ? O : $, b))),
              (b = v.length))
            : l === 0 && (f++, (v = [0])),
          (m[s++] = f),
          l && v[0] ? (v[b++] = k[h] || 0) : ((v = [k[h]]), (b = 1));
      while ((h++ < x || v[0] !== void 0) && y--);
    }
    return m[0] || m.shift(), (p.e = u), Ae(p, o ? a + tt(p) + 1 : a);
  };
})();
function qE(e, t) {
  var n,
    r,
    i,
    a,
    o,
    l,
    u = 0,
    s = 0,
    f = e.constructor,
    c = f.precision;
  if (tt(e) > 16) throw Error(Km + tt(e));
  if (!e.s) return new f(Zt);
  for (
    t == null ? ((Le = !1), (l = c)) : (l = t), o = new f(0.03125);
    e.abs().gte(0.1);

  )
    (e = e.times(o)), (s += 5);
  for (
    r = ((Math.log(yi(2, s)) / Math.LN10) * 2 + 5) | 0,
      l += r,
      n = i = a = new f(Zt),
      f.precision = l;
    ;

  ) {
    if (
      ((i = Ae(i.times(e), l)),
      (n = n.times(++u)),
      (o = a.plus(fr(i, n, l))),
      Kn(o.d).slice(0, l) === Kn(a.d).slice(0, l))
    ) {
      for (; s--; ) a = Ae(a.times(a), l);
      return (f.precision = c), t == null ? ((Le = !0), Ae(a, c)) : a;
    }
    a = o;
  }
}
function tt(e) {
  for (var t = e.e * Ne, n = e.d[0]; n >= 10; n /= 10) t++;
  return t;
}
function pp(e, t, n) {
  if (t > e.LN10.sd())
    throw (
      ((Le = !0),
      n && (e.precision = n),
      Error(xn + "LN10 precision limit exceeded"))
    );
  return Ae(new e(e.LN10), t);
}
function Mr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Dl(e, t) {
  var n,
    r,
    i,
    a,
    o,
    l,
    u,
    s,
    f,
    c = 1,
    d = 10,
    p = e,
    m = p.d,
    v = p.constructor,
    b = v.precision;
  if (p.s < 1) throw Error(xn + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Zt)) return new v(0);
  if ((t == null ? ((Le = !1), (s = b)) : (s = t), p.eq(10)))
    return t == null && (Le = !0), pp(v, s);
  if (
    ((s += d),
    (v.precision = s),
    (n = Kn(m)),
    (r = n.charAt(0)),
    (a = tt(p)),
    Math.abs(a) < 15e14)
  ) {
    for (; (r < 7 && r != 1) || (r == 1 && n.charAt(1) > 3); )
      (p = p.times(e)), (n = Kn(p.d)), (r = n.charAt(0)), c++;
    (a = tt(p)),
      r > 1 ? ((p = new v("0." + n)), a++) : (p = new v(r + "." + n.slice(1)));
  } else
    return (
      (u = pp(v, s + 2, b).times(a + "")),
      (p = Dl(new v(r + "." + n.slice(1)), s - d).plus(u)),
      (v.precision = b),
      t == null ? ((Le = !0), Ae(p, b)) : p
    );
  for (
    l = o = p = fr(p.minus(Zt), p.plus(Zt), s), f = Ae(p.times(p), s), i = 3;
    ;

  ) {
    if (
      ((o = Ae(o.times(f), s)),
      (u = l.plus(fr(o, new v(i), s))),
      Kn(u.d).slice(0, s) === Kn(l.d).slice(0, s))
    )
      return (
        (l = l.times(2)),
        a !== 0 && (l = l.plus(pp(v, s + 2, b).times(a + ""))),
        (l = fr(l, new v(c), s)),
        (v.precision = b),
        t == null ? ((Le = !0), Ae(l, b)) : l
      );
    (l = u), (i += 2);
  }
}
function Qb(e, t) {
  var n, r, i;
  for (
    (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (r = t.search(/e/i)) > 0
        ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
        : n < 0 && (n = t.length),
      r = 0;
    t.charCodeAt(r) === 48;

  )
    ++r;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(r, i)), t)) {
    if (
      ((i -= r),
      (n = n - r - 1),
      (e.e = so(n / Ne)),
      (e.d = []),
      (r = (n + 1) % Ne),
      n < 0 && (r += Ne),
      r < i)
    ) {
      for (r && e.d.push(+t.slice(0, r)), i -= Ne; r < i; )
        e.d.push(+t.slice(r, (r += Ne)));
      (t = t.slice(r)), (r = Ne - t.length);
    } else r -= i;
    for (; r--; ) t += "0";
    if ((e.d.push(+t), Le && (e.e > Ac || e.e < -Ac))) throw Error(Km + n);
  } else (e.s = 0), (e.e = 0), (e.d = [0]);
  return e;
}
function Ae(e, t, n) {
  var r,
    i,
    a,
    o,
    l,
    u,
    s,
    f,
    c = e.d;
  for (o = 1, a = c[0]; a >= 10; a /= 10) o++;
  if (((r = t - o), r < 0)) (r += Ne), (i = t), (s = c[(f = 0)]);
  else {
    if (((f = Math.ceil((r + 1) / Ne)), (a = c.length), f >= a)) return e;
    for (s = a = c[f], o = 1; a >= 10; a /= 10) o++;
    (r %= Ne), (i = r - Ne + o);
  }
  if (
    (n !== void 0 &&
      ((a = yi(10, o - i - 1)),
      (l = (s / a) % 10 | 0),
      (u = t < 0 || c[f + 1] !== void 0 || s % a),
      (u =
        n < 4
          ? (l || u) && (n == 0 || n == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (n == 4 ||
                u ||
                (n == 6 &&
                  (r > 0 ? (i > 0 ? s / yi(10, o - i) : 0) : c[f - 1]) % 10 &
                    1) ||
                n == (e.s < 0 ? 8 : 7))))),
    t < 1 || !c[0])
  )
    return (
      u
        ? ((a = tt(e)),
          (c.length = 1),
          (t = t - a - 1),
          (c[0] = yi(10, (Ne - (t % Ne)) % Ne)),
          (e.e = so(-t / Ne) || 0))
        : ((c.length = 1), (c[0] = e.e = e.s = 0)),
      e
    );
  if (
    (r == 0
      ? ((c.length = f), (a = 1), f--)
      : ((c.length = f + 1),
        (a = yi(10, Ne - r)),
        (c[f] = i > 0 ? ((s / yi(10, o - i)) % yi(10, i) | 0) * a : 0)),
    u)
  )
    for (;;)
      if (f == 0) {
        (c[0] += a) == ct && ((c[0] = 1), ++e.e);
        break;
      } else {
        if (((c[f] += a), c[f] != ct)) break;
        (c[f--] = 0), (a = 1);
      }
  for (r = c.length; c[--r] === 0; ) c.pop();
  if (Le && (e.e > Ac || e.e < -Ac)) throw Error(Km + tt(e));
  return e;
}
function GE(e, t) {
  var n,
    r,
    i,
    a,
    o,
    l,
    u,
    s,
    f,
    c,
    d = e.constructor,
    p = d.precision;
  if (!e.s || !t.s)
    return t.s ? (t.s = -t.s) : (t = new d(e)), Le ? Ae(t, p) : t;
  if (
    ((u = e.d),
    (c = t.d),
    (r = t.e),
    (s = e.e),
    (u = u.slice()),
    (o = s - r),
    o)
  ) {
    for (
      f = o < 0,
        f
          ? ((n = u), (o = -o), (l = c.length))
          : ((n = c), (r = s), (l = u.length)),
        i = Math.max(Math.ceil(p / Ne), l) + 2,
        o > i && ((o = i), (n.length = 1)),
        n.reverse(),
        i = o;
      i--;

    )
      n.push(0);
    n.reverse();
  } else {
    for (i = u.length, l = c.length, f = i < l, f && (l = i), i = 0; i < l; i++)
      if (u[i] != c[i]) {
        f = u[i] < c[i];
        break;
      }
    o = 0;
  }
  for (
    f && ((n = u), (u = c), (c = n), (t.s = -t.s)),
      l = u.length,
      i = c.length - l;
    i > 0;
    --i
  )
    u[l++] = 0;
  for (i = c.length; i > o; ) {
    if (u[--i] < c[i]) {
      for (a = i; a && u[--a] === 0; ) u[a] = ct - 1;
      --u[a], (u[i] += ct);
    }
    u[i] -= c[i];
  }
  for (; u[--l] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0] ? ((t.d = u), (t.e = r), Le ? Ae(t, p) : t) : new d(0);
}
function Di(e, t, n) {
  var r,
    i = tt(e),
    a = Kn(e.d),
    o = a.length;
  return (
    t
      ? (n && (r = n - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + Mr(r))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
      ? ((a = "0." + Mr(-i - 1) + a), n && (r = n - o) > 0 && (a += Mr(r)))
      : i >= o
      ? ((a += Mr(i + 1 - o)),
        n && (r = n - i - 1) > 0 && (a = a + "." + Mr(r)))
      : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)),
        n && (r = n - o) > 0 && (i + 1 === o && (a += "."), (a += Mr(r)))),
    e.s < 0 ? "-" + a : a
  );
}
function Zb(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function XE(e) {
  var t, n, r;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      (o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a);
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error($i + a);
      if (a > 0) o.s = 1;
      else if (a < 0) (a = -a), (o.s = -1);
      else {
        (o.s = 0), (o.e = 0), (o.d = [0]);
        return;
      }
      if (a === ~~a && a < 1e7) {
        (o.e = 0), (o.d = [a]);
        return;
      }
      return Qb(o, a.toString());
    } else if (typeof a != "string") throw Error($i + a);
    if (
      (a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1),
      yH.test(a))
    )
      Qb(o, a);
    else throw Error($i + a);
  }
  if (
    ((i.prototype = Q),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = XE),
    (i.config = i.set = mH),
    e === void 0 && (e = {}),
    e)
  )
    for (
      r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < r.length;

    )
      e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
  return i.config(e), i;
}
function mH(e) {
  if (!e || typeof e != "object") throw Error(xn + "Object expected");
  var t,
    n,
    r,
    i = [
      "precision",
      1,
      uo,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < i.length; t += 3)
    if ((r = e[(n = i[t])]) !== void 0)
      if (so(r) === r && r >= i[t + 1] && r <= i[t + 2]) this[n] = r;
      else throw Error($i + n + ": " + r);
  if ((r = e[(n = "LN10")]) !== void 0)
    if (r == Math.LN10) this[n] = new this(r);
    else throw Error($i + n + ": " + r);
  return this;
}
var Vm = XE(vH);
Zt = new Vm(1);
const Oe = Vm;
function gH(e) {
  return SH(e) || xH(e) || wH(e) || bH();
}
function bH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wH(e, t) {
  if (e) {
    if (typeof e == "string") return ov(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ov(e, t);
  }
}
function xH(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function SH(e) {
  if (Array.isArray(e)) return ov(e);
}
function ov(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var _H = function (t) {
    return t;
  },
  YE = { "@@functional/placeholder": !0 },
  QE = function (t) {
    return t === YE;
  },
  Jb = function (t) {
    return function n() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          QE(arguments.length <= 0 ? void 0 : arguments[0]))
        ? n
        : t.apply(void 0, arguments);
    };
  },
  OH = function e(t, n) {
    return t === 1
      ? n
      : Jb(function () {
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
            i[a] = arguments[a];
          var o = i.filter(function (l) {
            return l !== YE;
          }).length;
          return o >= t
            ? n.apply(void 0, i)
            : e(
                t - o,
                Jb(function () {
                  for (
                    var l = arguments.length, u = new Array(l), s = 0;
                    s < l;
                    s++
                  )
                    u[s] = arguments[s];
                  var f = i.map(function (c) {
                    return QE(c) ? u.shift() : c;
                  });
                  return n.apply(void 0, gH(f).concat(u));
                })
              );
        });
  },
  id = function (t) {
    return OH(t.length, t);
  },
  lv = function (t, n) {
    for (var r = [], i = t; i < n; ++i) r[i - t] = i;
    return r;
  },
  PH = id(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (n) {
            return t[n];
          })
          .map(e);
  }),
  EH = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    if (!n.length) return _H;
    var i = n.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(function (l, u) {
        return u(l);
      }, a.apply(void 0, arguments));
    };
  },
  uv = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  ZE = function (t) {
    var n = null,
      r = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        (n &&
          a.every(function (l, u) {
            return l === n[u];
          })) ||
          ((n = a), (r = t.apply(void 0, a))),
        r
      );
    };
  };
function AH(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new Oe(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function TH(e, t, n) {
  for (var r = new Oe(e), i = 0, a = []; r.lt(t) && i < 1e5; )
    a.push(r.toNumber()), (r = r.add(n)), i++;
  return a;
}
var $H = id(function (e, t, n) {
    var r = +e,
      i = +t;
    return r + n * (i - r);
  }),
  CH = id(function (e, t, n) {
    var r = t - +e;
    return (r = r || 1 / 0), (n - e) / r;
  }),
  jH = id(function (e, t, n) {
    var r = t - +e;
    return (r = r || 1 / 0), Math.max(0, Math.min(1, (n - e) / r));
  });
const ad = {
  rangeStep: TH,
  getDigitCount: AH,
  interpolateNumber: $H,
  uninterpolateNumber: CH,
  uninterpolateTruncation: jH,
};
function sv(e) {
  return NH(e) || MH(e) || JE(e) || kH();
}
function kH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MH(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function NH(e) {
  if (Array.isArray(e)) return cv(e);
}
function Rl(e, t) {
  return RH(e) || DH(e, t) || JE(e, t) || IH();
}
function IH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JE(e, t) {
  if (e) {
    if (typeof e == "string") return cv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return cv(e, t);
  }
}
function cv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function DH(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [],
      r = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), l;
        !(r = (l = o.next()).done) && (n.push(l.value), !(t && n.length === t));
        r = !0
      );
    } catch (u) {
      (i = !0), (a = u);
    } finally {
      try {
        !r && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
  }
}
function RH(e) {
  if (Array.isArray(e)) return e;
}
function eA(e) {
  var t = Rl(e, 2),
    n = t[0],
    r = t[1],
    i = n,
    a = r;
  return n > r && ((i = r), (a = n)), [i, a];
}
function tA(e, t, n) {
  if (e.lte(0)) return new Oe(0);
  var r = ad.getDigitCount(e.toNumber()),
    i = new Oe(10).pow(r),
    a = e.div(i),
    o = r !== 1 ? 0.05 : 0.1,
    l = new Oe(Math.ceil(a.div(o).toNumber())).add(n).mul(o),
    u = l.mul(i);
  return t ? u : new Oe(Math.ceil(u));
}
function LH(e, t, n) {
  var r = 1,
    i = new Oe(e);
  if (!i.isint() && n) {
    var a = Math.abs(e);
    a < 1
      ? ((r = new Oe(10).pow(ad.getDigitCount(e) - 1)),
        (i = new Oe(Math.floor(i.div(r).toNumber())).mul(r)))
      : a > 1 && (i = new Oe(Math.floor(e)));
  } else
    e === 0
      ? (i = new Oe(Math.floor((t - 1) / 2)))
      : n || (i = new Oe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    l = EH(
      PH(function (u) {
        return i.add(new Oe(u - o).mul(r)).toNumber();
      }),
      lv
    );
  return l(0, t);
}
function nA(e, t, n, r) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (n - 1)))
    return { step: new Oe(0), tickMin: new Oe(0), tickMax: new Oe(0) };
  var a = tA(new Oe(t).sub(e).div(n - 1), r, i),
    o;
  e <= 0 && t >= 0
    ? (o = new Oe(0))
    : ((o = new Oe(e).add(t).div(2)), (o = o.sub(new Oe(o).mod(a))));
  var l = Math.ceil(o.sub(e).div(a).toNumber()),
    u = Math.ceil(new Oe(t).sub(o).div(a).toNumber()),
    s = l + u + 1;
  return s > n
    ? nA(e, t, n, r, i + 1)
    : (s < n && ((u = t > 0 ? u + (n - s) : u), (l = t > 0 ? l : l + (n - s))),
      {
        step: a,
        tickMin: o.sub(new Oe(l).mul(a)),
        tickMax: o.add(new Oe(u).mul(a)),
      });
}
function BH(e) {
  var t = Rl(e, 2),
    n = t[0],
    r = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    l = eA([n, r]),
    u = Rl(l, 2),
    s = u[0],
    f = u[1];
  if (s === -1 / 0 || f === 1 / 0) {
    var c =
      f === 1 / 0
        ? [s].concat(
            sv(
              lv(0, i - 1).map(function () {
                return 1 / 0;
              })
            )
          )
        : [].concat(
            sv(
              lv(0, i - 1).map(function () {
                return -1 / 0;
              })
            ),
            [f]
          );
    return n > r ? uv(c) : c;
  }
  if (s === f) return LH(s, i, a);
  var d = nA(s, f, o, a),
    p = d.step,
    m = d.tickMin,
    v = d.tickMax,
    b = ad.rangeStep(m, v.add(new Oe(0.1).mul(p)), p);
  return n > r ? uv(b) : b;
}
function zH(e, t) {
  var n = Rl(e, 2),
    r = n[0],
    i = n[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = eA([r, i]),
    l = Rl(o, 2),
    u = l[0],
    s = l[1];
  if (u === -1 / 0 || s === 1 / 0) return [r, i];
  if (u === s) return [u];
  var f = Math.max(t, 2),
    c = tA(new Oe(s).sub(u).div(f - 1), a, 0),
    d = [].concat(
      sv(ad.rangeStep(new Oe(u), new Oe(s).sub(new Oe(0.99).mul(c)), c)),
      [s]
    );
  return r > i ? uv(d) : d;
}
var FH = ZE(BH),
  UH = ZE(zH),
  WH = !0,
  hp = "Invariant failed";
function Ri(e, t) {
  if (!e) {
    if (WH) throw new Error(hp);
    var n = typeof t == "function" ? t() : t,
      r = n ? "".concat(hp, ": ").concat(n) : hp;
    throw new Error(r);
  }
}
var HH = [
  "offset",
  "layout",
  "width",
  "dataKey",
  "data",
  "dataPointFormatter",
  "xAxis",
  "yAxis",
];
function Tc() {
  return (
    (Tc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tc.apply(this, arguments)
  );
}
function KH(e, t) {
  return XH(e) || GH(e, t) || qH(e, t) || VH();
}
function VH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qH(e, t) {
  if (e) {
    if (typeof e == "string") return ew(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ew(e, t);
  }
}
function ew(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function GH(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function XH(e) {
  if (Array.isArray(e)) return e;
}
function YH(e, t) {
  if (e == null) return {};
  var n = QH(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function QH(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ou(e) {
  var t = e.offset,
    n = e.layout,
    r = e.width,
    i = e.dataKey,
    a = e.data,
    o = e.dataPointFormatter,
    l = e.xAxis,
    u = e.yAxis,
    s = YH(e, HH),
    f = ve(s, !1);
  e.direction === "x" && l.type !== "number" && Ri(!1);
  var c = a.map(function (d) {
    var p = o(d, i),
      m = p.x,
      v = p.y,
      b = p.value,
      g = p.errorVal;
    if (!g) return null;
    var y = [],
      w,
      h;
    if (Array.isArray(g)) {
      var x = KH(g, 2);
      (w = x[0]), (h = x[1]);
    } else w = h = g;
    if (n === "vertical") {
      var S = l.scale,
        _ = v + t,
        O = _ + r,
        C = _ - r,
        A = S(b - w),
        k = S(b + h);
      y.push({ x1: k, y1: O, x2: k, y2: C }),
        y.push({ x1: A, y1: _, x2: k, y2: _ }),
        y.push({ x1: A, y1: O, x2: A, y2: C });
    } else if (n === "horizontal") {
      var $ = u.scale,
        D = m + t,
        N = D - r,
        z = D + r,
        R = $(b - w),
        W = $(b + h);
      y.push({ x1: N, y1: W, x2: z, y2: W }),
        y.push({ x1: D, y1: R, x2: D, y2: W }),
        y.push({ x1: N, y1: R, x2: z, y2: R });
    }
    return T.createElement(
      Qe,
      Tc(
        {
          className: "recharts-errorBar",
          key: "bar-".concat(
            y.map(function (j) {
              return ""
                .concat(j.x1, "-")
                .concat(j.x2, "-")
                .concat(j.y1, "-")
                .concat(j.y2);
            })
          ),
        },
        f
      ),
      y.map(function (j) {
        return T.createElement(
          "line",
          Tc({}, j, {
            key: "line-"
              .concat(j.x1, "-")
              .concat(j.x2, "-")
              .concat(j.y1, "-")
              .concat(j.y2),
          })
        );
      })
    );
  });
  return T.createElement(Qe, { className: "recharts-errorBars" }, c);
}
Ou.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
};
Ou.displayName = "ErrorBar";
function Ll(e) {
  "@babel/helpers - typeof";
  return (
    (Ll =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ll(e)
  );
}
function tw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function vp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tw(Object(n), !0).forEach(function (r) {
          ZH(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ZH(e, t, n) {
  return (
    (t = JH(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function JH(e) {
  var t = eK(e, "string");
  return Ll(t) == "symbol" ? t : String(t);
}
function eK(e, t) {
  if (Ll(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ll(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rA = function (t) {
  var n = t.children,
    r = t.formattedGraphicalItems,
    i = t.legendWidth,
    a = t.legendContent,
    o = Qt(n, Pl);
  if (!o) return null;
  var l;
  return (
    o.props && o.props.payload
      ? (l = o.props && o.props.payload)
      : a === "children"
      ? (l = (r || []).reduce(function (u, s) {
          var f = s.item,
            c = s.props,
            d = c.sectors || c.data || [];
          return u.concat(
            d.map(function (p) {
              return {
                type: o.props.iconType || f.props.legendType,
                value: p.name,
                color: p.fill,
                payload: p,
              };
            })
          );
        }, []))
      : (l = (r || []).map(function (u) {
          var s = u.item,
            f = s.props,
            c = f.dataKey,
            d = f.name,
            p = f.legendType,
            m = f.hide;
          return {
            inactive: m,
            dataKey: c,
            type: o.props.iconType || p || "square",
            color: qm(s),
            value: d || c,
            payload: s.props,
          };
        })),
    vp(vp(vp({}, o.props), Pl.getWithHeight(o, i)), {}, { payload: l, item: o })
  );
};
function Bl(e) {
  "@babel/helpers - typeof";
  return (
    (Bl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Bl(e)
  );
}
function nw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nw(Object(n), !0).forEach(function (r) {
          Sa(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : nw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Sa(e, t, n) {
  return (
    (t = tK(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tK(e) {
  var t = nK(e, "string");
  return Bl(t) == "symbol" ? t : String(t);
}
function nK(e, t) {
  if (Bl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Bl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rw(e) {
  return oK(e) || aK(e) || iK(e) || rK();
}
function rK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iK(e, t) {
  if (e) {
    if (typeof e == "string") return fv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fv(e, t);
  }
}
function aK(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function oK(e) {
  if (Array.isArray(e)) return fv(e);
}
function fv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function nn(e, t, n) {
  return fe(e) || fe(t) ? n : ot(t) ? mn(e, t, n) : he(t) ? t(e) : n;
}
function tl(e, t, n, r) {
  var i = fH(e, function (l) {
    return nn(l, t);
  });
  if (n === "number") {
    var a = i.filter(function (l) {
      return q(l) || parseFloat(l);
    });
    return a.length ? [nd(a), td(a)] : [1 / 0, -1 / 0];
  }
  var o = r
    ? i.filter(function (l) {
        return !fe(l);
      })
    : i;
  return o.map(function (l) {
    return ot(l) || l instanceof Date ? l : "";
  });
}
var lK = function (t) {
    var n,
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      l = (n = r == null ? void 0 : r.length) !== null && n !== void 0 ? n : 0;
    if (l <= 1) return 0;
    if (
      a &&
      a.axisType === "angleAxis" &&
      Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
    )
      for (var u = a.range, s = 0; s < l; s++) {
        var f = s > 0 ? i[s - 1].coordinate : i[l - 1].coordinate,
          c = i[s].coordinate,
          d = s >= l - 1 ? i[0].coordinate : i[s + 1].coordinate,
          p = void 0;
        if (In(c - f) !== In(d - c)) {
          var m = [];
          if (In(d - c) === In(u[1] - u[0])) {
            p = d;
            var v = c + u[1] - u[0];
            (m[0] = Math.min(v, (v + f) / 2)),
              (m[1] = Math.max(v, (v + f) / 2));
          } else {
            p = f;
            var b = d + u[1] - u[0];
            (m[0] = Math.min(c, (b + c) / 2)),
              (m[1] = Math.max(c, (b + c) / 2));
          }
          var g = [Math.min(c, (p + c) / 2), Math.max(c, (p + c) / 2)];
          if ((t > g[0] && t <= g[1]) || (t >= m[0] && t <= m[1])) {
            o = i[s].index;
            break;
          }
        } else {
          var y = Math.min(f, d),
            w = Math.max(f, d);
          if (t > (y + c) / 2 && t <= (w + c) / 2) {
            o = i[s].index;
            break;
          }
        }
      }
    else
      for (var h = 0; h < l; h++)
        if (
          (h === 0 && t <= (r[h].coordinate + r[h + 1].coordinate) / 2) ||
          (h > 0 &&
            h < l - 1 &&
            t > (r[h].coordinate + r[h - 1].coordinate) / 2 &&
            t <= (r[h].coordinate + r[h + 1].coordinate) / 2) ||
          (h === l - 1 && t > (r[h].coordinate + r[h - 1].coordinate) / 2)
        ) {
          o = r[h].index;
          break;
        }
    return o;
  },
  qm = function (t) {
    var n = t,
      r = n.type.displayName,
      i = t.props,
      a = i.stroke,
      o = i.fill,
      l;
    switch (r) {
      case "Line":
        l = a;
        break;
      case "Area":
      case "Radar":
        l = a && a !== "none" ? a : o;
        break;
      default:
        l = o;
        break;
    }
    return l;
  },
  uK = function (t) {
    var n = t.barSize,
      r = t.totalSize,
      i = t.stackGroups,
      a = i === void 0 ? {} : i;
    if (!a) return {};
    for (var o = {}, l = Object.keys(a), u = 0, s = l.length; u < s; u++)
      for (
        var f = a[l[u]].stackGroups, c = Object.keys(f), d = 0, p = c.length;
        d < p;
        d++
      ) {
        var m = f[c[d]],
          v = m.items,
          b = m.cateAxisId,
          g = v.filter(function (x) {
            return sr(x.type).indexOf("Bar") >= 0;
          });
        if (g && g.length) {
          var y = g[0].props.barSize,
            w = g[0].props[b];
          o[w] || (o[w] = []);
          var h = fe(y) ? n : y;
          o[w].push({
            item: g[0],
            stackList: g.slice(1),
            barSize: fe(h) ? void 0 : Ii(h, r, 0),
          });
        }
      }
    return o;
  },
  sK = function (t) {
    var n = t.barGap,
      r = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      l = t.maxBarSize,
      u = o.length;
    if (u < 1) return null;
    var s = Ii(n, i, 0, !0),
      f,
      c = [];
    if (o[0].barSize === +o[0].barSize) {
      var d = !1,
        p = i / u,
        m = o.reduce(function (h, x) {
          return h + x.barSize || 0;
        }, 0);
      (m += (u - 1) * s),
        m >= i && ((m -= (u - 1) * s), (s = 0)),
        m >= i && p > 0 && ((d = !0), (p *= 0.9), (m = u * p));
      var v = ((i - m) / 2) >> 0,
        b = { offset: v - s, size: 0 };
      f = o.reduce(function (h, x) {
        var S = {
            item: x.item,
            position: {
              offset: b.offset + b.size + s,
              size: d ? p : x.barSize,
            },
          },
          _ = [].concat(rw(h), [S]);
        return (
          (b = _[_.length - 1].position),
          x.stackList &&
            x.stackList.length &&
            x.stackList.forEach(function (O) {
              _.push({ item: O, position: b });
            }),
          _
        );
      }, c);
    } else {
      var g = Ii(r, i, 0, !0);
      i - 2 * g - (u - 1) * s <= 0 && (s = 0);
      var y = (i - 2 * g - (u - 1) * s) / u;
      y > 1 && (y >>= 0);
      var w = l === +l ? Math.min(y, l) : y;
      f = o.reduce(function (h, x, S) {
        var _ = [].concat(rw(h), [
          {
            item: x.item,
            position: { offset: g + (y + s) * S + (y - w) / 2, size: w },
          },
        ]);
        return (
          x.stackList &&
            x.stackList.length &&
            x.stackList.forEach(function (O) {
              _.push({ item: O, position: _[_.length - 1].position });
            }),
          _
        );
      }, c);
    }
    return f;
  },
  cK = function (t, n, r, i) {
    var a = r.children,
      o = r.width,
      l = r.margin,
      u = o - (l.left || 0) - (l.right || 0),
      s = rA({ children: a, legendWidth: u });
    if (s) {
      var f = i || {},
        c = f.width,
        d = f.height,
        p = s.align,
        m = s.verticalAlign,
        v = s.layout;
      if (
        (v === "vertical" || (v === "horizontal" && m === "middle")) &&
        p !== "center" &&
        q(t[p])
      )
        return pn(pn({}, t), {}, Sa({}, p, t[p] + (c || 0)));
      if (
        (v === "horizontal" || (v === "vertical" && p === "center")) &&
        m !== "middle" &&
        q(t[m])
      )
        return pn(pn({}, t), {}, Sa({}, m, t[m] + (d || 0)));
    }
    return t;
  },
  fK = function (t, n, r) {
    return fe(n)
      ? !0
      : t === "horizontal"
      ? n === "yAxis"
      : t === "vertical" || r === "x"
      ? n === "xAxis"
      : r === "y"
      ? n === "yAxis"
      : !0;
  },
  iA = function (t, n, r, i, a) {
    var o = n.props.children,
      l = gn(o, Ou).filter(function (s) {
        return fK(i, a, s.props.direction);
      });
    if (l && l.length) {
      var u = l.map(function (s) {
        return s.props.dataKey;
      });
      return t.reduce(
        function (s, f) {
          var c = nn(f, r);
          if (fe(c)) return s;
          var d = Array.isArray(c) ? [nd(c), td(c)] : [c, c],
            p = u.reduce(
              function (m, v) {
                var b = nn(f, v, 0),
                  g = d[0] - Math.abs(Array.isArray(b) ? b[0] : b),
                  y = d[1] + Math.abs(Array.isArray(b) ? b[1] : b);
                return [Math.min(g, m[0]), Math.max(y, m[1])];
              },
              [1 / 0, -1 / 0]
            );
          return [Math.min(p[0], s[0]), Math.max(p[1], s[1])];
        },
        [1 / 0, -1 / 0]
      );
    }
    return null;
  },
  dK = function (t, n, r, i, a) {
    var o = n
      .map(function (l) {
        return iA(t, l, r, a, i);
      })
      .filter(function (l) {
        return !fe(l);
      });
    return o && o.length
      ? o.reduce(
          function (l, u) {
            return [Math.min(l[0], u[0]), Math.max(l[1], u[1])];
          },
          [1 / 0, -1 / 0]
        )
      : null;
  },
  aA = function (t, n, r, i, a) {
    var o = n.map(function (u) {
      var s = u.props.dataKey;
      return (r === "number" && s && iA(t, u, s, i)) || tl(t, s, r, a);
    });
    if (r === "number")
      return o.reduce(
        function (u, s) {
          return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
        },
        [1 / 0, -1 / 0]
      );
    var l = {};
    return o.reduce(function (u, s) {
      for (var f = 0, c = s.length; f < c; f++)
        l[s[f]] || ((l[s[f]] = !0), u.push(s[f]));
      return u;
    }, []);
  },
  oA = function (t, n) {
    return (
      (t === "horizontal" && n === "xAxis") ||
      (t === "vertical" && n === "yAxis") ||
      (t === "centric" && n === "angleAxis") ||
      (t === "radial" && n === "radiusAxis")
    );
  },
  Oi = function (t, n, r) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      l = t.range,
      u = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
      s = (n || r) && o === "category" && i.bandwidth ? i.bandwidth() / u : 0;
    if (
      ((s =
        t.axisType === "angleAxis" && (l == null ? void 0 : l.length) >= 2
          ? In(l[0] - l[1]) * 2 * s
          : s),
      n && (t.ticks || t.niceTicks))
    ) {
      var f = (t.ticks || t.niceTicks).map(function (c) {
        var d = a ? a.indexOf(c) : c;
        return { coordinate: i(d) + s, value: c, offset: s };
      });
      return f.filter(function (c) {
        return !gu(c.coordinate);
      });
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (c, d) {
          return { coordinate: i(c) + s, value: c, index: d, offset: s };
        })
      : i.ticks && !r
      ? i.ticks(t.tickCount).map(function (c) {
          return { coordinate: i(c) + s, value: c, offset: s };
        })
      : i.domain().map(function (c, d) {
          return {
            coordinate: i(c) + s,
            value: a ? a[c] : c,
            index: d,
            offset: s,
          };
        });
  },
  yp = new WeakMap(),
  as = function (t, n) {
    if (typeof n != "function") return t;
    yp.has(t) || yp.set(t, new WeakMap());
    var r = yp.get(t);
    if (r.has(n)) return r.get(n);
    var i = function () {
      t.apply(void 0, arguments), n.apply(void 0, arguments);
    };
    return r.set(n, i), i;
  },
  pK = function (t, n, r) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      l = t.axisType;
    if (i === "auto")
      return o === "radial" && l === "radiusAxis"
        ? { scale: jl(), realScaleType: "band" }
        : o === "radial" && l === "angleAxis"
        ? { scale: _c(), realScaleType: "linear" }
        : a === "category" &&
          n &&
          (n.indexOf("LineChart") >= 0 ||
            n.indexOf("AreaChart") >= 0 ||
            (n.indexOf("ComposedChart") >= 0 && !r))
        ? { scale: el(), realScaleType: "point" }
        : a === "category"
        ? { scale: jl(), realScaleType: "band" }
        : { scale: _c(), realScaleType: "linear" };
    if (mu(i)) {
      var u = "scale".concat(Uf(i));
      return { scale: (Yb[u] || el)(), realScaleType: Yb[u] ? u : "point" };
    }
    return he(i) ? { scale: i } : { scale: el(), realScaleType: "point" };
  },
  iw = 1e-4,
  hK = function (t) {
    var n = t.domain();
    if (!(!n || n.length <= 2)) {
      var r = n.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - iw,
        o = Math.max(i[0], i[1]) + iw,
        l = t(n[0]),
        u = t(n[r - 1]);
      (l < a || l > o || u < a || u > o) && t.domain([n[0], n[r - 1]]);
    }
  },
  vK = function (t, n) {
    if (!t) return null;
    for (var r = 0, i = t.length; r < i; r++)
      if (t[r].item === n) return t[r].position;
    return null;
  },
  yK = function (t, n) {
    if (!n || n.length !== 2 || !q(n[0]) || !q(n[1])) return t;
    var r = Math.min(n[0], n[1]),
      i = Math.max(n[0], n[1]),
      a = [t[0], t[1]];
    return (
      (!q(t[0]) || t[0] < r) && (a[0] = r),
      (!q(t[1]) || t[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < r && (a[1] = r),
      a
    );
  },
  mK = function (t) {
    var n = t.length;
    if (!(n <= 0))
      for (var r = 0, i = t[0].length; r < i; ++r)
        for (var a = 0, o = 0, l = 0; l < n; ++l) {
          var u = gu(t[l][r][1]) ? t[l][r][0] : t[l][r][1];
          u >= 0
            ? ((t[l][r][0] = a), (t[l][r][1] = a + u), (a = t[l][r][1]))
            : ((t[l][r][0] = o), (t[l][r][1] = o + u), (o = t[l][r][1]));
        }
  },
  gK = function (t) {
    var n = t.length;
    if (!(n <= 0))
      for (var r = 0, i = t[0].length; r < i; ++r)
        for (var a = 0, o = 0; o < n; ++o) {
          var l = gu(t[o][r][1]) ? t[o][r][0] : t[o][r][1];
          l >= 0
            ? ((t[o][r][0] = a), (t[o][r][1] = a + l), (a = t[o][r][1]))
            : ((t[o][r][0] = 0), (t[o][r][1] = 0));
        }
  },
  bK = {
    sign: mK,
    expand: HL,
    none: ka,
    silhouette: KL,
    wiggle: VL,
    positive: gK,
  },
  wK = function (t, n, r) {
    var i = n.map(function (l) {
        return l.props.dataKey;
      }),
      a = bK[r],
      o = WL()
        .keys(i)
        .value(function (l, u) {
          return +nn(l, u, 0);
        })
        .order(Dh)
        .offset(a);
    return o(t);
  },
  xK = function (t, n, r, i, a, o) {
    if (!t) return null;
    var l = o ? n.reverse() : n,
      u = {},
      s = l.reduce(function (c, d) {
        var p = d.props,
          m = p.stackId,
          v = p.hide;
        if (v) return c;
        var b = d.props[r],
          g = c[b] || { hasStack: !1, stackGroups: {} };
        if (ot(m)) {
          var y = g.stackGroups[m] || {
            numericAxisId: r,
            cateAxisId: i,
            items: [],
          };
          y.items.push(d), (g.hasStack = !0), (g.stackGroups[m] = y);
        } else g.stackGroups[bu("_stackId_")] = { numericAxisId: r, cateAxisId: i, items: [d] };
        return pn(pn({}, c), {}, Sa({}, b, g));
      }, u),
      f = {};
    return Object.keys(s).reduce(function (c, d) {
      var p = s[d];
      if (p.hasStack) {
        var m = {};
        p.stackGroups = Object.keys(p.stackGroups).reduce(function (v, b) {
          var g = p.stackGroups[b];
          return pn(
            pn({}, v),
            {},
            Sa({}, b, {
              numericAxisId: r,
              cateAxisId: i,
              items: g.items,
              stackedData: wK(t, g.items, a),
            })
          );
        }, m);
      }
      return pn(pn({}, c), {}, Sa({}, d, p));
    }, f);
  },
  SK = function (t, n) {
    var r = n.realScaleType,
      i = n.type,
      a = n.tickCount,
      o = n.originalDomain,
      l = n.allowDecimals,
      u = r || n.scale;
    if (u !== "auto" && u !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var s = t.domain();
      if (!s.length) return null;
      var f = FH(s, a, l);
      return t.domain([nd(f), td(f)]), { niceTicks: f };
    }
    if (a && i === "number") {
      var c = t.domain(),
        d = UH(c, a, l);
      return { niceTicks: d };
    }
    return null;
  };
function aw(e) {
  var t = e.axis,
    n = e.ticks,
    r = e.bandSize,
    i = e.entry,
    a = e.index,
    o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !fe(i[t.dataKey])) {
      var l = ec(n, "value", i[t.dataKey]);
      if (l) return l.coordinate + r / 2;
    }
    return n[a] ? n[a].coordinate + r / 2 : null;
  }
  var u = nn(i, fe(o) ? t.dataKey : o);
  return fe(u) ? null : t.scale(u);
}
var ow = function (t) {
    var n = t.axis,
      r = t.ticks,
      i = t.offset,
      a = t.bandSize,
      o = t.entry,
      l = t.index;
    if (n.type === "category") return r[l] ? r[l].coordinate + i : null;
    var u = nn(o, n.dataKey, n.domain[l]);
    return fe(u) ? null : n.scale(u) - a / 2 + i;
  },
  _K = function (t) {
    var n = t.numericAxis,
      r = n.scale.domain();
    if (n.type === "number") {
      var i = Math.min(r[0], r[1]),
        a = Math.max(r[0], r[1]);
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
    }
    return r[0];
  },
  OK = function (t, n) {
    var r = t.props.stackId;
    if (ot(r)) {
      var i = n[r];
      if (i) {
        var a = i.items.indexOf(t);
        return a >= 0 ? i.stackedData[a] : null;
      }
    }
    return null;
  },
  PK = function (t) {
    return t.reduce(
      function (n, r) {
        return [nd(r.concat([n[0]]).filter(q)), td(r.concat([n[1]]).filter(q))];
      },
      [1 / 0, -1 / 0]
    );
  },
  lA = function (t, n, r) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            l = o.stackedData,
            u = l.reduce(
              function (s, f) {
                var c = PK(f.slice(n, r + 1));
                return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
              },
              [1 / 0, -1 / 0]
            );
          return [Math.min(u[0], i[0]), Math.max(u[1], i[1])];
        },
        [1 / 0, -1 / 0]
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  lw = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  uw = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  dv = function (t, n, r) {
    if (he(t)) return t(n, r);
    if (!Array.isArray(t)) return n;
    var i = [];
    if (q(t[0])) i[0] = r ? t[0] : Math.min(t[0], n[0]);
    else if (lw.test(t[0])) {
      var a = +lw.exec(t[0])[1];
      i[0] = n[0] - a;
    } else he(t[0]) ? (i[0] = t[0](n[0])) : (i[0] = n[0]);
    if (q(t[1])) i[1] = r ? t[1] : Math.max(t[1], n[1]);
    else if (uw.test(t[1])) {
      var o = +uw.exec(t[1])[1];
      i[1] = n[1] + o;
    } else he(t[1]) ? (i[1] = t[1](n[1])) : (i[1] = n[1]);
    return i;
  },
  $c = function (t, n, r) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!r || i > 0) return i;
    }
    if (t && n && n.length >= 2) {
      for (
        var a = xm(n, function (c) {
            return c.coordinate;
          }),
          o = 1 / 0,
          l = 1,
          u = a.length;
        l < u;
        l++
      ) {
        var s = a[l],
          f = a[l - 1];
        o = Math.min((s.coordinate || 0) - (f.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return r ? void 0 : 0;
  },
  sw = function (t, n, r) {
    return !t || !t.length || rd(t, mn(r, "type.defaultProps.domain")) ? n : t;
  },
  uA = function (t, n) {
    var r = t.props,
      i = r.dataKey,
      a = r.name,
      o = r.unit,
      l = r.formatter,
      u = r.tooltipType,
      s = r.chartType,
      f = r.hide;
    return pn(
      pn({}, ve(t, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: l,
        name: a || i,
        color: qm(t),
        value: nn(n, i),
        type: u,
        payload: n,
        chartType: s,
        hide: f,
      }
    );
  };
function zl(e) {
  "@babel/helpers - typeof";
  return (
    (zl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zl(e)
  );
}
function cw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function fw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cw(Object(n), !0).forEach(function (r) {
          EK(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : cw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function EK(e, t, n) {
  return (
    (t = AK(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function AK(e) {
  var t = TK(e, "string");
  return zl(t) == "symbol" ? t : String(t);
}
function TK(e, t) {
  if (zl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (zl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cc = Math.PI / 180,
  $K = function (t) {
    return (t * 180) / Math.PI;
  },
  wt = function (t, n, r, i) {
    return { x: t + Math.cos(-Cc * i) * r, y: n + Math.sin(-Cc * i) * r };
  },
  CK = function (t, n) {
    var r = t.x,
      i = t.y,
      a = n.x,
      o = n.y;
    return Math.sqrt(Math.pow(r - a, 2) + Math.pow(i - o, 2));
  },
  jK = function (t, n) {
    var r = t.x,
      i = t.y,
      a = n.cx,
      o = n.cy,
      l = CK({ x: r, y: i }, { x: a, y: o });
    if (l <= 0) return { radius: l };
    var u = (r - a) / l,
      s = Math.acos(u);
    return (
      i > o && (s = 2 * Math.PI - s),
      { radius: l, angle: $K(s), angleInRadian: s }
    );
  },
  kK = function (t) {
    var n = t.startAngle,
      r = t.endAngle,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360),
      o = Math.min(i, a);
    return { startAngle: n - o * 360, endAngle: r - o * 360 };
  },
  MK = function (t, n) {
    var r = n.startAngle,
      i = n.endAngle,
      a = Math.floor(r / 360),
      o = Math.floor(i / 360),
      l = Math.min(a, o);
    return t + l * 360;
  },
  dw = function (t, n) {
    var r = t.x,
      i = t.y,
      a = jK({ x: r, y: i }, n),
      o = a.radius,
      l = a.angle,
      u = n.innerRadius,
      s = n.outerRadius;
    if (o < u || o > s) return !1;
    if (o === 0) return !0;
    var f = kK(n),
      c = f.startAngle,
      d = f.endAngle,
      p = l,
      m;
    if (c <= d) {
      for (; p > d; ) p -= 360;
      for (; p < c; ) p += 360;
      m = p >= c && p <= d;
    } else {
      for (; p > c; ) p -= 360;
      for (; p < d; ) p += 360;
      m = p >= d && p <= c;
    }
    return m ? fw(fw({}, n), {}, { radius: o, angle: MK(p, n) }) : null;
  };
function Fl(e) {
  "@babel/helpers - typeof";
  return (
    (Fl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fl(e)
  );
}
var NK = ["offset"];
function IK(e) {
  return BK(e) || LK(e) || RK(e) || DK();
}
function DK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RK(e, t) {
  if (e) {
    if (typeof e == "string") return pv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return pv(e, t);
  }
}
function LK(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function BK(e) {
  if (Array.isArray(e)) return pv(e);
}
function pv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zK(e, t) {
  if (e == null) return {};
  var n = FK(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function FK(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function pw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pw(Object(n), !0).forEach(function (r) {
          UK(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : pw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function UK(e, t, n) {
  return (
    (t = WK(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function WK(e) {
  var t = HK(e, "string");
  return Fl(t) == "symbol" ? t : String(t);
}
function HK(e, t) {
  if (Fl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Fl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ul() {
  return (
    (Ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ul.apply(this, arguments)
  );
}
var KK = function (t) {
    var n = t.value,
      r = t.formatter,
      i = fe(t.children) ? n : t.children;
    return he(r) ? r(i) : i;
  },
  VK = function (t, n) {
    var r = In(n - t),
      i = Math.min(Math.abs(n - t), 360);
    return r * i;
  },
  qK = function (t, n, r) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      l = t.className,
      u = a,
      s = u.cx,
      f = u.cy,
      c = u.innerRadius,
      d = u.outerRadius,
      p = u.startAngle,
      m = u.endAngle,
      v = u.clockWise,
      b = (c + d) / 2,
      g = VK(p, m),
      y = g >= 0 ? 1 : -1,
      w,
      h;
    i === "insideStart"
      ? ((w = p + y * o), (h = v))
      : i === "insideEnd"
      ? ((w = m - y * o), (h = !v))
      : i === "end" && ((w = m + y * o), (h = v)),
      (h = g <= 0 ? h : !h);
    var x = wt(s, f, b, w),
      S = wt(s, f, b, w + (h ? 1 : -1) * 359),
      _ = "M"
        .concat(x.x, ",")
        .concat(
          x.y,
          `
    A`
        )
        .concat(b, ",")
        .concat(b, ",0,1,")
        .concat(
          h ? 0 : 1,
          `,
    `
        )
        .concat(S.x, ",")
        .concat(S.y),
      O = fe(t.id) ? bu("recharts-radial-line-") : t.id;
    return T.createElement(
      "text",
      Ul({}, r, {
        dominantBaseline: "central",
        className: be("recharts-radial-bar-label", l),
      }),
      T.createElement("defs", null, T.createElement("path", { id: O, d: _ })),
      T.createElement("textPath", { xlinkHref: "#".concat(O) }, n)
    );
  },
  GK = function (t) {
    var n = t.viewBox,
      r = t.offset,
      i = t.position,
      a = n,
      o = a.cx,
      l = a.cy,
      u = a.innerRadius,
      s = a.outerRadius,
      f = a.startAngle,
      c = a.endAngle,
      d = (f + c) / 2;
    if (i === "outside") {
      var p = wt(o, l, s + r, d),
        m = p.x,
        v = p.y;
      return {
        x: m,
        y: v,
        textAnchor: m >= o ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (i === "center")
      return { x: o, y: l, textAnchor: "middle", verticalAnchor: "middle" };
    if (i === "centerTop")
      return { x: o, y: l, textAnchor: "middle", verticalAnchor: "start" };
    if (i === "centerBottom")
      return { x: o, y: l, textAnchor: "middle", verticalAnchor: "end" };
    var b = (u + s) / 2,
      g = wt(o, l, b, d),
      y = g.x,
      w = g.y;
    return { x: y, y: w, textAnchor: "middle", verticalAnchor: "middle" };
  },
  XK = function (t) {
    var n = t.viewBox,
      r = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = n,
      l = o.x,
      u = o.y,
      s = o.width,
      f = o.height,
      c = f >= 0 ? 1 : -1,
      d = c * i,
      p = c > 0 ? "end" : "start",
      m = c > 0 ? "start" : "end",
      v = s >= 0 ? 1 : -1,
      b = v * i,
      g = v > 0 ? "end" : "start",
      y = v > 0 ? "start" : "end";
    if (a === "top") {
      var w = {
        x: l + s / 2,
        y: u - c * i,
        textAnchor: "middle",
        verticalAnchor: p,
      };
      return rt(rt({}, w), r ? { height: Math.max(u - r.y, 0), width: s } : {});
    }
    if (a === "bottom") {
      var h = {
        x: l + s / 2,
        y: u + f + d,
        textAnchor: "middle",
        verticalAnchor: m,
      };
      return rt(
        rt({}, h),
        r ? { height: Math.max(r.y + r.height - (u + f), 0), width: s } : {}
      );
    }
    if (a === "left") {
      var x = {
        x: l - b,
        y: u + f / 2,
        textAnchor: g,
        verticalAnchor: "middle",
      };
      return rt(
        rt({}, x),
        r ? { width: Math.max(x.x - r.x, 0), height: f } : {}
      );
    }
    if (a === "right") {
      var S = {
        x: l + s + b,
        y: u + f / 2,
        textAnchor: y,
        verticalAnchor: "middle",
      };
      return rt(
        rt({}, S),
        r ? { width: Math.max(r.x + r.width - S.x, 0), height: f } : {}
      );
    }
    var _ = r ? { width: s, height: f } : {};
    return a === "insideLeft"
      ? rt(
          { x: l + b, y: u + f / 2, textAnchor: y, verticalAnchor: "middle" },
          _
        )
      : a === "insideRight"
      ? rt(
          {
            x: l + s - b,
            y: u + f / 2,
            textAnchor: g,
            verticalAnchor: "middle",
          },
          _
        )
      : a === "insideTop"
      ? rt(
          { x: l + s / 2, y: u + d, textAnchor: "middle", verticalAnchor: m },
          _
        )
      : a === "insideBottom"
      ? rt(
          {
            x: l + s / 2,
            y: u + f - d,
            textAnchor: "middle",
            verticalAnchor: p,
          },
          _
        )
      : a === "insideTopLeft"
      ? rt({ x: l + b, y: u + d, textAnchor: y, verticalAnchor: m }, _)
      : a === "insideTopRight"
      ? rt({ x: l + s - b, y: u + d, textAnchor: g, verticalAnchor: m }, _)
      : a === "insideBottomLeft"
      ? rt({ x: l + b, y: u + f - d, textAnchor: y, verticalAnchor: p }, _)
      : a === "insideBottomRight"
      ? rt({ x: l + s - b, y: u + f - d, textAnchor: g, verticalAnchor: p }, _)
      : Ja(a) && (q(a.x) || xi(a.x)) && (q(a.y) || xi(a.y))
      ? rt(
          {
            x: l + Ii(a.x, s),
            y: u + Ii(a.y, f),
            textAnchor: "end",
            verticalAnchor: "end",
          },
          _
        )
      : rt(
          {
            x: l + s / 2,
            y: u + f / 2,
            textAnchor: "middle",
            verticalAnchor: "middle",
          },
          _
        );
  },
  YK = function (t) {
    return "cx" in t && q(t.cx);
  };
function Ct(e) {
  var t = e.offset,
    n = t === void 0 ? 5 : t,
    r = zK(e, NK),
    i = rt({ offset: n }, r),
    a = i.viewBox,
    o = i.position,
    l = i.value,
    u = i.children,
    s = i.content,
    f = i.className,
    c = f === void 0 ? "" : f,
    d = i.textBreakAll;
  if (!a || (fe(l) && fe(u) && !E.isValidElement(s) && !he(s))) return null;
  if (E.isValidElement(s)) return E.cloneElement(s, i);
  var p;
  if (he(s)) {
    if (((p = E.createElement(s, i)), E.isValidElement(p))) return p;
  } else p = KK(i);
  var m = YK(a),
    v = ve(i, !0);
  if (m && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return qK(i, p, v);
  var b = m ? GK(i) : XK(i);
  return T.createElement(
    yc,
    Ul({ className: be("recharts-label", c) }, v, b, { breakAll: d }),
    p
  );
}
Ct.displayName = "Label";
var sA = function (t) {
    var n = t.cx,
      r = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      l = t.r,
      u = t.radius,
      s = t.innerRadius,
      f = t.outerRadius,
      c = t.x,
      d = t.y,
      p = t.top,
      m = t.left,
      v = t.width,
      b = t.height,
      g = t.clockWise,
      y = t.labelViewBox;
    if (y) return y;
    if (q(v) && q(b)) {
      if (q(c) && q(d)) return { x: c, y: d, width: v, height: b };
      if (q(p) && q(m)) return { x: p, y: m, width: v, height: b };
    }
    return q(c) && q(d)
      ? { x: c, y: d, width: 0, height: 0 }
      : q(n) && q(r)
      ? {
          cx: n,
          cy: r,
          startAngle: a || i || 0,
          endAngle: o || i || 0,
          innerRadius: s || 0,
          outerRadius: f || u || l || 0,
          clockWise: g,
        }
      : t.viewBox
      ? t.viewBox
      : {};
  },
  QK = function (t, n) {
    return t
      ? t === !0
        ? T.createElement(Ct, { key: "label-implicit", viewBox: n })
        : ot(t)
        ? T.createElement(Ct, { key: "label-implicit", viewBox: n, value: t })
        : E.isValidElement(t)
        ? t.type === Ct
          ? E.cloneElement(t, { key: "label-implicit", viewBox: n })
          : T.createElement(Ct, {
              key: "label-implicit",
              content: t,
              viewBox: n,
            })
        : he(t)
        ? T.createElement(Ct, { key: "label-implicit", content: t, viewBox: n })
        : Ja(t)
        ? T.createElement(Ct, Ul({ viewBox: n }, t, { key: "label-implicit" }))
        : null
      : null;
  },
  ZK = function (t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && r && !t.label)) return null;
    var i = t.children,
      a = sA(t),
      o = gn(i, Ct).map(function (u, s) {
        return E.cloneElement(u, { viewBox: n || a, key: "label-".concat(s) });
      });
    if (!r) return o;
    var l = QK(t.label, n || a);
    return [l].concat(IK(o));
  };
Ct.parseViewBox = sA;
Ct.renderCallByParent = ZK;
function JK(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var eV = JK;
const tV = Te(eV);
function Wl(e) {
  "@babel/helpers - typeof";
  return (
    (Wl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wl(e)
  );
}
var nV = ["valueAccessor"],
  rV = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function iV(e) {
  return uV(e) || lV(e) || oV(e) || aV();
}
function aV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oV(e, t) {
  if (e) {
    if (typeof e == "string") return hv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return hv(e, t);
  }
}
function lV(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function uV(e) {
  if (Array.isArray(e)) return hv(e);
}
function hv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function jc() {
  return (
    (jc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jc.apply(this, arguments)
  );
}
function hw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function vw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hw(Object(n), !0).forEach(function (r) {
          sV(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : hw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function sV(e, t, n) {
  return (
    (t = cV(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cV(e) {
  var t = fV(e, "string");
  return Wl(t) == "symbol" ? t : String(t);
}
function fV(e, t) {
  if (Wl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Wl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yw(e, t) {
  if (e == null) return {};
  var n = dV(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function dV(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var pV = function (t) {
  return Array.isArray(t.value) ? tV(t.value) : t.value;
};
function Xr(e) {
  var t = e.valueAccessor,
    n = t === void 0 ? pV : t,
    r = yw(e, nV),
    i = r.data,
    a = r.dataKey,
    o = r.clockWise,
    l = r.id,
    u = r.textBreakAll,
    s = yw(r, rV);
  return !i || !i.length
    ? null
    : T.createElement(
        Qe,
        { className: "recharts-label-list" },
        i.map(function (f, c) {
          var d = fe(a) ? n(f, c) : nn(f && f.payload, a),
            p = fe(l) ? {} : { id: "".concat(l, "-").concat(c) };
          return T.createElement(
            Ct,
            jc({}, ve(f, !0), s, p, {
              parentViewBox: f.parentViewBox,
              value: d,
              textBreakAll: u,
              viewBox: Ct.parseViewBox(
                fe(o) ? f : vw(vw({}, f), {}, { clockWise: o })
              ),
              key: "label-".concat(c),
              index: c,
            })
          );
        })
      );
}
Xr.displayName = "LabelList";
function hV(e, t) {
  return e
    ? e === !0
      ? T.createElement(Xr, { key: "labelList-implicit", data: t })
      : T.isValidElement(e) || he(e)
      ? T.createElement(Xr, { key: "labelList-implicit", data: t, content: e })
      : Ja(e)
      ? T.createElement(Xr, jc({ data: t }, e, { key: "labelList-implicit" }))
      : null
    : null;
}
function vV(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && n && !e.label)) return null;
  var r = e.children,
    i = gn(r, Xr).map(function (o, l) {
      return E.cloneElement(o, { data: t, key: "labelList-".concat(l) });
    });
  if (!n) return i;
  var a = hV(e.label, t);
  return [a].concat(iV(i));
}
Xr.renderCallByParent = vV;
function Hl(e) {
  "@babel/helpers - typeof";
  return (
    (Hl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hl(e)
  );
}
function vv() {
  return (
    (vv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vv.apply(this, arguments)
  );
}
function mw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function gw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mw(Object(n), !0).forEach(function (r) {
          yV(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : mw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function yV(e, t, n) {
  return (
    (t = mV(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function mV(e) {
  var t = gV(e, "string");
  return Hl(t) == "symbol" ? t : String(t);
}
function gV(e, t) {
  if (Hl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Hl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bV = function (t, n) {
    var r = In(n - t),
      i = Math.min(Math.abs(n - t), 359.999);
    return r * i;
  },
  os = function (t) {
    var n = t.cx,
      r = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      l = t.isExternal,
      u = t.cornerRadius,
      s = t.cornerIsExternal,
      f = u * (l ? 1 : -1) + i,
      c = Math.asin(u / f) / Cc,
      d = s ? a : a + o * c,
      p = wt(n, r, f, d),
      m = wt(n, r, i, d),
      v = s ? a - o * c : a,
      b = wt(n, r, f * Math.cos(c * Cc), v);
    return { center: p, circleTangency: m, lineTangency: b, theta: c };
  },
  cA = function (t) {
    var n = t.cx,
      r = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      l = t.endAngle,
      u = bV(o, l),
      s = o + u,
      f = wt(n, r, a, o),
      c = wt(n, r, a, s),
      d = "M "
        .concat(f.x, ",")
        .concat(
          f.y,
          `
    A `
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `
        )
        .concat(+(Math.abs(u) > 180), ",")
        .concat(
          +(o > s),
          `,
    `
        )
        .concat(c.x, ",")
        .concat(
          c.y,
          `
  `
        );
    if (i > 0) {
      var p = wt(n, r, i, o),
        m = wt(n, r, i, s);
      d += "L "
        .concat(m.x, ",")
        .concat(
          m.y,
          `
            A `
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `
        )
        .concat(+(Math.abs(u) > 180), ",")
        .concat(
          +(o <= s),
          `,
            `
        )
        .concat(p.x, ",")
        .concat(p.y, " Z");
    } else d += "L ".concat(n, ",").concat(r, " Z");
    return d;
  },
  wV = function (t) {
    var n = t.cx,
      r = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      l = t.forceCornerRadius,
      u = t.cornerIsExternal,
      s = t.startAngle,
      f = t.endAngle,
      c = In(f - s),
      d = os({
        cx: n,
        cy: r,
        radius: a,
        angle: s,
        sign: c,
        cornerRadius: o,
        cornerIsExternal: u,
      }),
      p = d.circleTangency,
      m = d.lineTangency,
      v = d.theta,
      b = os({
        cx: n,
        cy: r,
        radius: a,
        angle: f,
        sign: -c,
        cornerRadius: o,
        cornerIsExternal: u,
      }),
      g = b.circleTangency,
      y = b.lineTangency,
      w = b.theta,
      h = u ? Math.abs(s - f) : Math.abs(s - f) - v - w;
    if (h < 0)
      return l
        ? "M "
            .concat(m.x, ",")
            .concat(
              m.y,
              `
        a`
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `
            )
        : cA({
            cx: n,
            cy: r,
            innerRadius: i,
            outerRadius: a,
            startAngle: s,
            endAngle: f,
          });
    var x = "M "
      .concat(m.x, ",")
      .concat(
        m.y,
        `
    A`
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(p.x, ",")
      .concat(
        p.y,
        `
    A`
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(h > 180), ",")
      .concat(+(c < 0), ",")
      .concat(g.x, ",")
      .concat(
        g.y,
        `
    A`
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(y.x, ",")
      .concat(
        y.y,
        `
  `
      );
    if (i > 0) {
      var S = os({
          cx: n,
          cy: r,
          radius: i,
          angle: s,
          sign: c,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: u,
        }),
        _ = S.circleTangency,
        O = S.lineTangency,
        C = S.theta,
        A = os({
          cx: n,
          cy: r,
          radius: i,
          angle: f,
          sign: -c,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: u,
        }),
        k = A.circleTangency,
        $ = A.lineTangency,
        D = A.theta,
        N = u ? Math.abs(s - f) : Math.abs(s - f) - C - D;
      if (N < 0 && o === 0)
        return "".concat(x, "L").concat(n, ",").concat(r, "Z");
      x += "L"
        .concat($.x, ",")
        .concat(
          $.y,
          `
      A`
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(k.x, ",")
        .concat(
          k.y,
          `
      A`
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(N > 180), ",")
        .concat(+(c > 0), ",")
        .concat(_.x, ",")
        .concat(
          _.y,
          `
      A`
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(O.x, ",")
        .concat(O.y, "Z");
    } else x += "L".concat(n, ",").concat(r, "Z");
    return x;
  },
  xV = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  fA = function (t) {
    var n = gw(gw({}, xV), t),
      r = n.cx,
      i = n.cy,
      a = n.innerRadius,
      o = n.outerRadius,
      l = n.cornerRadius,
      u = n.forceCornerRadius,
      s = n.cornerIsExternal,
      f = n.startAngle,
      c = n.endAngle,
      d = n.className;
    if (o < a || f === c) return null;
    var p = be("recharts-sector", d),
      m = o - a,
      v = Ii(l, m, 0, !0),
      b;
    return (
      v > 0 && Math.abs(f - c) < 360
        ? (b = wV({
            cx: r,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(v, m / 2),
            forceCornerRadius: u,
            cornerIsExternal: s,
            startAngle: f,
            endAngle: c,
          }))
        : (b = cA({
            cx: r,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            startAngle: f,
            endAngle: c,
          })),
      T.createElement(
        "path",
        vv({}, ve(n, !0), { className: p, d: b, role: "img" })
      )
    );
  };
function Kl(e) {
  "@babel/helpers - typeof";
  return (
    (Kl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Kl(e)
  );
}
function yv() {
  return (
    (yv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yv.apply(this, arguments)
  );
}
function bw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bw(Object(n), !0).forEach(function (r) {
          SV(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : bw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function SV(e, t, n) {
  return (
    (t = _V(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _V(e) {
  var t = OV(e, "string");
  return Kl(t) == "symbol" ? t : String(t);
}
function OV(e, t) {
  if (Kl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Kl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xw = {
    curveBasisClosed: kL,
    curveBasisOpen: ML,
    curveBasis: jL,
    curveBumpX: mL,
    curveBumpY: gL,
    curveLinearClosed: NL,
    curveLinear: Hf,
    curveMonotoneX: IL,
    curveMonotoneY: DL,
    curveNatural: RL,
    curveStep: LL,
    curveStepAfter: zL,
    curveStepBefore: BL,
  },
  ls = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  Mo = function (t) {
    return t.x;
  },
  No = function (t) {
    return t.y;
  },
  PV = function (t, n) {
    if (he(t)) return t;
    var r = "curve".concat(Uf(t));
    return (r === "curveMonotone" || r === "curveBump") && n
      ? xw["".concat(r).concat(n === "vertical" ? "Y" : "X")]
      : xw[r] || Hf;
  },
  EV = function (t) {
    var n = t.type,
      r = n === void 0 ? "linear" : n,
      i = t.points,
      a = i === void 0 ? [] : i,
      o = t.baseLine,
      l = t.layout,
      u = t.connectNulls,
      s = u === void 0 ? !1 : u,
      f = PV(r, l),
      c = s
        ? a.filter(function (v) {
            return ls(v);
          })
        : a,
      d;
    if (Array.isArray(o)) {
      var p = s
          ? o.filter(function (v) {
              return ls(v);
            })
          : o,
        m = c.map(function (v, b) {
          return ww(ww({}, v), {}, { base: p[b] });
        });
      return (
        l === "vertical"
          ? (d = Qu()
              .y(No)
              .x1(Mo)
              .x0(function (v) {
                return v.base.x;
              }))
          : (d = Qu()
              .x(Mo)
              .y1(No)
              .y0(function (v) {
                return v.base.y;
              })),
        d.defined(ls).curve(f),
        d(m)
      );
    }
    return (
      l === "vertical" && q(o)
        ? (d = Qu().y(No).x1(Mo).x0(o))
        : q(o)
        ? (d = Qu().x(Mo).y1(No).y0(o))
        : (d = vP().x(Mo).y(No)),
      d.defined(ls).curve(f),
      d(c)
    );
  },
  mv = function (t) {
    var n = t.className,
      r = t.points,
      i = t.path,
      a = t.pathRef;
    if ((!r || !r.length) && !i) return null;
    var o = r && r.length ? EV(t) : i;
    return T.createElement(
      "path",
      yv({}, ve(t, !1), tc(t), {
        className: be("recharts-curve", n),
        d: o,
        ref: a,
      })
    );
  },
  dA = { exports: {} },
  AV = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  TV = AV,
  $V = TV;
function pA() {}
function hA() {}
hA.resetWarningCache = pA;
var CV = function () {
  function e(r, i, a, o, l, u) {
    if (u !== $V) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: hA,
    resetWarningCache: pA,
  };
  return (n.PropTypes = n), n;
};
dA.exports = CV();
var jV = dA.exports;
const se = Te(jV);
var kV = Object.getOwnPropertyNames,
  MV = Object.getOwnPropertySymbols,
  NV = Object.prototype.hasOwnProperty;
function Sw(e, t) {
  return function (r, i, a) {
    return e(r, i, a) && t(r, i, a);
  };
}
function us(e) {
  return function (n, r, i) {
    if (!n || !r || typeof n != "object" || typeof r != "object")
      return e(n, r, i);
    var a = i.cache,
      o = a.get(n),
      l = a.get(r);
    if (o && l) return o === r && l === n;
    a.set(n, r), a.set(r, n);
    var u = e(n, r, i);
    return a.delete(n), a.delete(r), u;
  };
}
function _w(e) {
  return kV(e).concat(MV(e));
}
var vA =
  Object.hasOwn ||
  function (e, t) {
    return NV.call(e, t);
  };
function co(e, t) {
  return e || t ? e === t : e === t || (e !== e && t !== t);
}
var yA = "_owner",
  Ow = Object.getOwnPropertyDescriptor,
  Pw = Object.keys;
function IV(e, t, n) {
  var r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0; ) if (!n.equals(e[r], t[r], r, r, e, t, n)) return !1;
  return !0;
}
function DV(e, t) {
  return co(e.getTime(), t.getTime());
}
function Ew(e, t, n) {
  if (e.size !== t.size) return !1;
  for (var r = {}, i = e.entries(), a = 0, o, l; (o = i.next()) && !o.done; ) {
    for (var u = t.entries(), s = !1, f = 0; (l = u.next()) && !l.done; ) {
      var c = o.value,
        d = c[0],
        p = c[1],
        m = l.value,
        v = m[0],
        b = m[1];
      !s &&
        !r[f] &&
        (s = n.equals(d, v, a, f, e, t, n) && n.equals(p, b, d, v, e, t, n)) &&
        (r[f] = !0),
        f++;
    }
    if (!s) return !1;
    a++;
  }
  return !0;
}
function RV(e, t, n) {
  var r = Pw(e),
    i = r.length;
  if (Pw(t).length !== i) return !1;
  for (var a; i-- > 0; )
    if (
      ((a = r[i]),
      (a === yA && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !vA(t, a) ||
        !n.equals(e[a], t[a], a, a, e, t, n))
    )
      return !1;
  return !0;
}
function Io(e, t, n) {
  var r = _w(e),
    i = r.length;
  if (_w(t).length !== i) return !1;
  for (var a, o, l; i-- > 0; )
    if (
      ((a = r[i]),
      (a === yA && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !vA(t, a) ||
        !n.equals(e[a], t[a], a, a, e, t, n) ||
        ((o = Ow(e, a)),
        (l = Ow(t, a)),
        (o || l) &&
          (!o ||
            !l ||
            o.configurable !== l.configurable ||
            o.enumerable !== l.enumerable ||
            o.writable !== l.writable)))
    )
      return !1;
  return !0;
}
function LV(e, t) {
  return co(e.valueOf(), t.valueOf());
}
function BV(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Aw(e, t, n) {
  if (e.size !== t.size) return !1;
  for (var r = {}, i = e.values(), a, o; (a = i.next()) && !a.done; ) {
    for (var l = t.values(), u = !1, s = 0; (o = l.next()) && !o.done; )
      !u &&
        !r[s] &&
        (u = n.equals(a.value, o.value, a.value, o.value, e, t, n)) &&
        (r[s] = !0),
        s++;
    if (!u) return !1;
  }
  return !0;
}
function zV(e, t) {
  var n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (e[n] !== t[n]) return !1;
  return !0;
}
var FV = "[object Arguments]",
  UV = "[object Boolean]",
  WV = "[object Date]",
  HV = "[object Map]",
  KV = "[object Number]",
  VV = "[object Object]",
  qV = "[object RegExp]",
  GV = "[object Set]",
  XV = "[object String]",
  YV = Array.isArray,
  Tw =
    typeof ArrayBuffer == "function" && ArrayBuffer.isView
      ? ArrayBuffer.isView
      : null,
  $w = Object.assign,
  QV = Object.prototype.toString.call.bind(Object.prototype.toString);
function ZV(e) {
  var t = e.areArraysEqual,
    n = e.areDatesEqual,
    r = e.areMapsEqual,
    i = e.areObjectsEqual,
    a = e.arePrimitiveWrappersEqual,
    o = e.areRegExpsEqual,
    l = e.areSetsEqual,
    u = e.areTypedArraysEqual;
  return function (f, c, d) {
    if (f === c) return !0;
    if (f == null || c == null || typeof f != "object" || typeof c != "object")
      return f !== f && c !== c;
    var p = f.constructor;
    if (p !== c.constructor) return !1;
    if (p === Object) return i(f, c, d);
    if (YV(f)) return t(f, c, d);
    if (Tw != null && Tw(f)) return u(f, c, d);
    if (p === Date) return n(f, c, d);
    if (p === RegExp) return o(f, c, d);
    if (p === Map) return r(f, c, d);
    if (p === Set) return l(f, c, d);
    var m = QV(f);
    return m === WV
      ? n(f, c, d)
      : m === qV
      ? o(f, c, d)
      : m === HV
      ? r(f, c, d)
      : m === GV
      ? l(f, c, d)
      : m === VV
      ? typeof f.then != "function" && typeof c.then != "function" && i(f, c, d)
      : m === FV
      ? i(f, c, d)
      : m === UV || m === KV || m === XV
      ? a(f, c, d)
      : !1;
  };
}
function JV(e) {
  var t = e.circular,
    n = e.createCustomConfig,
    r = e.strict,
    i = {
      areArraysEqual: r ? Io : IV,
      areDatesEqual: DV,
      areMapsEqual: r ? Sw(Ew, Io) : Ew,
      areObjectsEqual: r ? Io : RV,
      arePrimitiveWrappersEqual: LV,
      areRegExpsEqual: BV,
      areSetsEqual: r ? Sw(Aw, Io) : Aw,
      areTypedArraysEqual: r ? Io : zV,
    };
  if ((n && (i = $w({}, i, n(i))), t)) {
    var a = us(i.areArraysEqual),
      o = us(i.areMapsEqual),
      l = us(i.areObjectsEqual),
      u = us(i.areSetsEqual);
    i = $w({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: l,
      areSetsEqual: u,
    });
  }
  return i;
}
function eq(e) {
  return function (t, n, r, i, a, o, l) {
    return e(t, n, l);
  };
}
function tq(e) {
  var t = e.circular,
    n = e.comparator,
    r = e.createState,
    i = e.equals,
    a = e.strict;
  if (r)
    return function (u, s) {
      var f = r(),
        c = f.cache,
        d = c === void 0 ? (t ? new WeakMap() : void 0) : c,
        p = f.meta;
      return n(u, s, { cache: d, equals: i, meta: p, strict: a });
    };
  if (t)
    return function (u, s) {
      return n(u, s, {
        cache: new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a,
      });
    };
  var o = { cache: void 0, equals: i, meta: void 0, strict: a };
  return function (u, s) {
    return n(u, s, o);
  };
}
var nq = oi();
oi({ strict: !0 });
oi({ circular: !0 });
oi({ circular: !0, strict: !0 });
oi({
  createInternalComparator: function () {
    return co;
  },
});
oi({
  strict: !0,
  createInternalComparator: function () {
    return co;
  },
});
oi({
  circular: !0,
  createInternalComparator: function () {
    return co;
  },
});
oi({
  circular: !0,
  createInternalComparator: function () {
    return co;
  },
  strict: !0,
});
function oi(e) {
  e === void 0 && (e = {});
  var t = e.circular,
    n = t === void 0 ? !1 : t,
    r = e.createInternalComparator,
    i = e.createState,
    a = e.strict,
    o = a === void 0 ? !1 : a,
    l = JV(e),
    u = ZV(l),
    s = r ? r(u) : eq(u);
  return tq({
    circular: n,
    comparator: u,
    createState: i,
    equals: s,
    strict: o,
  });
}
function rq(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Cw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = -1,
    r = function i(a) {
      n < 0 && (n = a), a - n > t ? (e(a), (n = -1)) : rq(i);
    };
  requestAnimationFrame(r);
}
function gv(e) {
  "@babel/helpers - typeof";
  return (
    (gv =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    gv(e)
  );
}
function iq(e) {
  return uq(e) || lq(e) || oq(e) || aq();
}
function aq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oq(e, t) {
  if (e) {
    if (typeof e == "string") return jw(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return jw(e, t);
  }
}
function jw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function lq(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function uq(e) {
  if (Array.isArray(e)) return e;
}
function sq() {
  var e = {},
    t = function () {
      return null;
    },
    n = !1,
    r = function i(a) {
      if (!n) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            l = iq(o),
            u = l[0],
            s = l.slice(1);
          if (typeof u == "number") {
            Cw(i.bind(null, s), u);
            return;
          }
          i(u), Cw(i.bind(null, s));
          return;
        }
        gv(a) === "object" && ((e = a), t(e)), typeof a == "function" && a();
      }
    };
  return {
    stop: function () {
      n = !0;
    },
    start: function (a) {
      (n = !1), r(a);
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Vl(e) {
  "@babel/helpers - typeof";
  return (
    (Vl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vl(e)
  );
}
function kw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Mw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kw(Object(n), !0).forEach(function (r) {
          mA(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : kw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function mA(e, t, n) {
  return (
    (t = cq(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cq(e) {
  var t = fq(e, "string");
  return Vl(t) === "symbol" ? t : String(t);
}
function fq(e, t) {
  if (Vl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Vl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dq = function (t, n) {
    return [Object.keys(t), Object.keys(n)].reduce(function (r, i) {
      return r.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  pq = function (t) {
    return t;
  },
  hq = function (t) {
    return t.replace(/([A-Z])/g, function (n) {
      return "-".concat(n.toLowerCase());
    });
  },
  nl = function (t, n) {
    return Object.keys(n).reduce(function (r, i) {
      return Mw(Mw({}, r), {}, mA({}, i, t(i, n[i])));
    }, {});
  },
  Nw = function (t, n, r) {
    return t
      .map(function (i) {
        return "".concat(hq(i), " ").concat(n, "ms ").concat(r);
      })
      .join(",");
  };
function vq(e, t) {
  return gq(e) || mq(e, t) || gA(e, t) || yq();
}
function yq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mq(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function gq(e) {
  if (Array.isArray(e)) return e;
}
function bq(e) {
  return Sq(e) || xq(e) || gA(e) || wq();
}
function wq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gA(e, t) {
  if (e) {
    if (typeof e == "string") return bv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bv(e, t);
  }
}
function xq(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Sq(e) {
  if (Array.isArray(e)) return bv(e);
}
function bv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var kc = 1e-4,
  bA = function (t, n) {
    return [0, 3 * t, 3 * n - 6 * t, 3 * t - 3 * n + 1];
  },
  wA = function (t, n) {
    return t
      .map(function (r, i) {
        return r * Math.pow(n, i);
      })
      .reduce(function (r, i) {
        return r + i;
      });
  },
  Iw = function (t, n) {
    return function (r) {
      var i = bA(t, n);
      return wA(i, r);
    };
  },
  _q = function (t, n) {
    return function (r) {
      var i = bA(t, n),
        a = [].concat(
          bq(
            i
              .map(function (o, l) {
                return o * l;
              })
              .slice(1)
          ),
          [0]
        );
      return wA(a, r);
    };
  },
  Dw = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var i = n[0],
      a = n[1],
      o = n[2],
      l = n[3];
    if (n.length === 1)
      switch (n[0]) {
        case "linear":
          (i = 0), (a = 0), (o = 1), (l = 1);
          break;
        case "ease":
          (i = 0.25), (a = 0.1), (o = 0.25), (l = 1);
          break;
        case "ease-in":
          (i = 0.42), (a = 0), (o = 1), (l = 1);
          break;
        case "ease-out":
          (i = 0.42), (a = 0), (o = 0.58), (l = 1);
          break;
        case "ease-in-out":
          (i = 0), (a = 0), (o = 0.58), (l = 1);
          break;
        default: {
          var u = n[0].split("(");
          if (
            u[0] === "cubic-bezier" &&
            u[1].split(")")[0].split(",").length === 4
          ) {
            var s = u[1]
                .split(")")[0]
                .split(",")
                .map(function (b) {
                  return parseFloat(b);
                }),
              f = vq(s, 4);
            (i = f[0]), (a = f[1]), (o = f[2]), (l = f[3]);
          }
        }
      }
    var c = Iw(i, o),
      d = Iw(a, l),
      p = _q(i, o),
      m = function (g) {
        return g > 1 ? 1 : g < 0 ? 0 : g;
      },
      v = function (g) {
        for (var y = g > 1 ? 1 : g, w = y, h = 0; h < 8; ++h) {
          var x = c(w) - y,
            S = p(w);
          if (Math.abs(x - y) < kc || S < kc) return d(w);
          w = m(w - x / S);
        }
        return d(w);
      };
    return (v.isStepper = !1), v;
  },
  Oq = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.stiff,
      r = n === void 0 ? 100 : n,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      l = o === void 0 ? 17 : o,
      u = function (f, c, d) {
        var p = -(f - c) * r,
          m = d * a,
          v = d + ((p - m) * l) / 1e3,
          b = (d * l) / 1e3 + f;
        return Math.abs(b - c) < kc && Math.abs(v) < kc ? [c, 0] : [b, v];
      };
    return (u.isStepper = !0), (u.dt = l), u;
  },
  Pq = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var i = n[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Dw(i);
        case "spring":
          return Oq();
        default:
          if (i.split("(")[0] === "cubic-bezier") return Dw(i);
      }
    return typeof i == "function" ? i : null;
  };
function ql(e) {
  "@babel/helpers - typeof";
  return (
    (ql =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ql(e)
  );
}
function Rw(e) {
  return Tq(e) || Aq(e) || xA(e) || Eq();
}
function Eq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Aq(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Tq(e) {
  if (Array.isArray(e)) return xv(e);
}
function Lw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lw(Object(n), !0).forEach(function (r) {
          wv(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Lw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function wv(e, t, n) {
  return (
    (t = $q(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $q(e) {
  var t = Cq(e, "string");
  return ql(t) === "symbol" ? t : String(t);
}
function Cq(e, t) {
  if (ql(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ql(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jq(e, t) {
  return Nq(e) || Mq(e, t) || xA(e, t) || kq();
}
function kq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xA(e, t) {
  if (e) {
    if (typeof e == "string") return xv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return xv(e, t);
  }
}
function xv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Mq(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function Nq(e) {
  if (Array.isArray(e)) return e;
}
var Mc = function (t, n, r) {
    return t + (n - t) * r;
  },
  Sv = function (t) {
    var n = t.from,
      r = t.to;
    return n !== r;
  },
  Iq = function e(t, n, r) {
    var i = nl(function (a, o) {
      if (Sv(o)) {
        var l = t(o.from, o.to, o.velocity),
          u = jq(l, 2),
          s = u[0],
          f = u[1];
        return mt(mt({}, o), {}, { from: s, velocity: f });
      }
      return o;
    }, n);
    return r < 1
      ? nl(function (a, o) {
          return Sv(o)
            ? mt(
                mt({}, o),
                {},
                {
                  velocity: Mc(o.velocity, i[a].velocity, r),
                  from: Mc(o.from, i[a].from, r),
                }
              )
            : o;
        }, n)
      : e(t, i, r - 1);
  };
const Dq = function (e, t, n, r, i) {
  var a = dq(e, t),
    o = a.reduce(function (b, g) {
      return mt(mt({}, b), {}, wv({}, g, [e[g], t[g]]));
    }, {}),
    l = a.reduce(function (b, g) {
      return mt(
        mt({}, b),
        {},
        wv({}, g, { from: e[g], velocity: 0, to: t[g] })
      );
    }, {}),
    u = -1,
    s,
    f,
    c = function () {
      return null;
    },
    d = function () {
      return nl(function (g, y) {
        return y.from;
      }, l);
    },
    p = function () {
      return !Object.values(l).filter(Sv).length;
    },
    m = function (g) {
      s || (s = g);
      var y = g - s,
        w = y / n.dt;
      (l = Iq(n, l, w)),
        i(mt(mt(mt({}, e), t), d())),
        (s = g),
        p() || (u = requestAnimationFrame(c));
    },
    v = function (g) {
      f || (f = g);
      var y = (g - f) / r,
        w = nl(function (x, S) {
          return Mc.apply(void 0, Rw(S).concat([n(y)]));
        }, o);
      if ((i(mt(mt(mt({}, e), t), w)), y < 1)) u = requestAnimationFrame(c);
      else {
        var h = nl(function (x, S) {
          return Mc.apply(void 0, Rw(S).concat([n(1)]));
        }, o);
        i(mt(mt(mt({}, e), t), h));
      }
    };
  return (
    (c = n.isStepper ? m : v),
    function () {
      return (
        requestAnimationFrame(c),
        function () {
          cancelAnimationFrame(u);
        }
      );
    }
  );
};
function za(e) {
  "@babel/helpers - typeof";
  return (
    (za =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    za(e)
  );
}
var Rq = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function Lq(e, t) {
  if (e == null) return {};
  var n = Bq(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Bq(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function mp(e) {
  return Wq(e) || Uq(e) || Fq(e) || zq();
}
function zq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fq(e, t) {
  if (e) {
    if (typeof e == "string") return _v(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _v(e, t);
  }
}
function Uq(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Wq(e) {
  if (Array.isArray(e)) return _v(e);
}
function _v(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Bw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function En(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bw(Object(n), !0).forEach(function (r) {
          Fo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Bw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Fo(e, t, n) {
  return (
    (t = SA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Hq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, SA(r.key), r);
  }
}
function Kq(e, t, n) {
  return (
    t && zw(e.prototype, t),
    n && zw(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function SA(e) {
  var t = Vq(e, "string");
  return za(t) === "symbol" ? t : String(t);
}
function Vq(e, t) {
  if (za(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (za(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ov(e, t);
}
function Ov(e, t) {
  return (
    (Ov = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Ov(e, t)
  );
}
function Gq(e) {
  var t = Xq();
  return function () {
    var r = Nc(e),
      i;
    if (t) {
      var a = Nc(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else i = r.apply(this, arguments);
    return Pv(this, i);
  };
}
function Pv(e, t) {
  if (t && (za(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Ev(e);
}
function Ev(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Xq() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Nc(e) {
  return (
    (Nc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Nc(e)
  );
}
var wr = (function (e) {
  qq(n, e);
  var t = Gq(n);
  function n(r, i) {
    var a;
    Hq(this, n), (a = t.call(this, r, i));
    var o = a.props,
      l = o.isActive,
      u = o.attributeName,
      s = o.from,
      f = o.to,
      c = o.steps,
      d = o.children,
      p = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(Ev(a))),
      (a.changeStyle = a.changeStyle.bind(Ev(a))),
      !l || p <= 0)
    )
      return (
        (a.state = { style: {} }),
        typeof d == "function" && (a.state = { style: f }),
        Pv(a)
      );
    if (c && c.length) a.state = { style: c[0].style };
    else if (s) {
      if (typeof d == "function") return (a.state = { style: s }), Pv(a);
      a.state = { style: u ? Fo({}, u, s) : s };
    } else a.state = { style: {} };
    return a;
  }
  return (
    Kq(n, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          (this.mounted = !0), !(!a || !o) && this.runAnimation(this.props);
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            l = a.canBegin,
            u = a.attributeName,
            s = a.shouldReAnimate,
            f = a.to,
            c = a.from,
            d = this.state.style;
          if (l) {
            if (!o) {
              var p = { style: u ? Fo({}, u, f) : f };
              this.state &&
                d &&
                ((u && d[u] !== f) || (!u && d !== f)) &&
                this.setState(p);
              return;
            }
            if (!(nq(i.to, f) && i.canBegin && i.isActive)) {
              var m = !i.canBegin || !i.isActive;
              this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var v = m || s ? c : i.to;
              if (this.state && d) {
                var b = { style: u ? Fo({}, u, v) : v };
                ((u && d[u] !== v) || (!u && d !== v)) && this.setState(b);
              }
              this.runAnimation(
                En(En({}, this.props), {}, { from: v, begin: 0 })
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var i = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i();
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            l = i.to,
            u = i.duration,
            s = i.easing,
            f = i.begin,
            c = i.onAnimationEnd,
            d = i.onAnimationStart,
            p = Dq(o, l, Pq(s), u, this.changeStyle),
            m = function () {
              a.stopJSAnimation = p();
            };
          this.manager.start([d, f, m, u, c]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            l = i.begin,
            u = i.onAnimationStart,
            s = o[0],
            f = s.style,
            c = s.duration,
            d = c === void 0 ? 0 : c,
            p = function (v, b, g) {
              if (g === 0) return v;
              var y = b.duration,
                w = b.easing,
                h = w === void 0 ? "ease" : w,
                x = b.style,
                S = b.properties,
                _ = b.onAnimationEnd,
                O = g > 0 ? o[g - 1] : b,
                C = S || Object.keys(x);
              if (typeof h == "function" || h === "spring")
                return [].concat(mp(v), [
                  a.runJSAnimation.bind(a, {
                    from: O.style,
                    to: x,
                    duration: y,
                    easing: h,
                  }),
                  y,
                ]);
              var A = Nw(C, y, h),
                k = En(En(En({}, O.style), x), {}, { transition: A });
              return [].concat(mp(v), [k, y, _]).filter(pq);
            };
          return this.manager.start(
            [u].concat(mp(o.reduce(p, [f, Math.max(d, l)])), [i.onAnimationEnd])
          );
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = sq());
          var a = i.begin,
            o = i.duration,
            l = i.attributeName,
            u = i.to,
            s = i.easing,
            f = i.onAnimationStart,
            c = i.onAnimationEnd,
            d = i.steps,
            p = i.children,
            m = this.manager;
          if (
            ((this.unSubscribe = m.subscribe(this.handleStyleChange)),
            typeof s == "function" || typeof p == "function" || s === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (d.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var v = l ? Fo({}, l, u) : u,
            b = Nw(Object.keys(v), o, s);
          m.start([f, a, En(En({}, v), {}, { transition: b }), o, c]);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          i.attributeName, i.easing;
          var l = i.isActive;
          i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart;
          var u = Lq(i, Rq),
            s = E.Children.count(a),
            f = this.state.style;
          if (typeof a == "function") return a(f);
          if (!l || s === 0 || o <= 0) return a;
          var c = function (p) {
            var m = p.props,
              v = m.style,
              b = v === void 0 ? {} : v,
              g = m.className,
              y = E.cloneElement(
                p,
                En(En({}, u), {}, { style: En(En({}, b), f), className: g })
              );
            return y;
          };
          return s === 1
            ? c(E.Children.only(a))
            : T.createElement(
                "div",
                null,
                E.Children.map(a, function (d) {
                  return c(d);
                })
              );
        },
      },
    ]),
    n
  );
})(E.PureComponent);
wr.displayName = "Animate";
wr.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
wr.propTypes = {
  from: se.oneOfType([se.object, se.string]),
  to: se.oneOfType([se.object, se.string]),
  attributeName: se.string,
  duration: se.number,
  begin: se.number,
  easing: se.oneOfType([se.string, se.func]),
  steps: se.arrayOf(
    se.shape({
      duration: se.number.isRequired,
      style: se.object.isRequired,
      easing: se.oneOfType([
        se.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        se.func,
      ]),
      properties: se.arrayOf("string"),
      onAnimationEnd: se.func,
    })
  ),
  children: se.oneOfType([se.node, se.func]),
  isActive: se.bool,
  canBegin: se.bool,
  onAnimationEnd: se.func,
  shouldReAnimate: se.bool,
  onAnimationStart: se.func,
  onAnimationReStart: se.func,
};
se.object, se.object, se.object, se.element;
se.object, se.object, se.object, se.oneOfType([se.array, se.element]), se.any;
function Gl(e) {
  "@babel/helpers - typeof";
  return (
    (Gl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Gl(e)
  );
}
function Ic() {
  return (
    (Ic = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ic.apply(this, arguments)
  );
}
function Yq(e, t) {
  return eG(e) || Jq(e, t) || Zq(e, t) || Qq();
}
function Qq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zq(e, t) {
  if (e) {
    if (typeof e == "string") return Fw(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Fw(e, t);
  }
}
function Fw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Jq(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function eG(e) {
  if (Array.isArray(e)) return e;
}
function Uw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Uw(Object(n), !0).forEach(function (r) {
          tG(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Uw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function tG(e, t, n) {
  return (
    (t = nG(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function nG(e) {
  var t = rG(e, "string");
  return Gl(t) == "symbol" ? t : String(t);
}
function rG(e, t) {
  if (Gl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Gl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Hw = function (t, n, r, i, a) {
    var o = Math.min(Math.abs(r) / 2, Math.abs(i) / 2),
      l = i >= 0 ? 1 : -1,
      u = r >= 0 ? 1 : -1,
      s = (i >= 0 && r >= 0) || (i < 0 && r < 0) ? 1 : 0,
      f;
    if (o > 0 && a instanceof Array) {
      for (var c = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
        c[d] = a[d] > o ? o : a[d];
      (f = "M".concat(t, ",").concat(n + l * c[0])),
        c[0] > 0 &&
          (f += "A "
            .concat(c[0], ",")
            .concat(c[0], ",0,0,")
            .concat(s, ",")
            .concat(t + u * c[0], ",")
            .concat(n)),
        (f += "L ".concat(t + r - u * c[1], ",").concat(n)),
        c[1] > 0 &&
          (f += "A "
            .concat(c[1], ",")
            .concat(c[1], ",0,0,")
            .concat(
              s,
              `,
        `
            )
            .concat(t + r, ",")
            .concat(n + l * c[1])),
        (f += "L ".concat(t + r, ",").concat(n + i - l * c[2])),
        c[2] > 0 &&
          (f += "A "
            .concat(c[2], ",")
            .concat(c[2], ",0,0,")
            .concat(
              s,
              `,
        `
            )
            .concat(t + r - u * c[2], ",")
            .concat(n + i)),
        (f += "L ".concat(t + u * c[3], ",").concat(n + i)),
        c[3] > 0 &&
          (f += "A "
            .concat(c[3], ",")
            .concat(c[3], ",0,0,")
            .concat(
              s,
              `,
        `
            )
            .concat(t, ",")
            .concat(n + i - l * c[3])),
        (f += "Z");
    } else if (o > 0 && a === +a && a > 0) {
      var m = Math.min(o, a);
      f = "M "
        .concat(t, ",")
        .concat(
          n + l * m,
          `
            A `
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t + u * m, ",")
        .concat(
          n,
          `
            L `
        )
        .concat(t + r - u * m, ",")
        .concat(
          n,
          `
            A `
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t + r, ",")
        .concat(
          n + l * m,
          `
            L `
        )
        .concat(t + r, ",")
        .concat(
          n + i - l * m,
          `
            A `
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t + r - u * m, ",")
        .concat(
          n + i,
          `
            L `
        )
        .concat(t + u * m, ",")
        .concat(
          n + i,
          `
            A `
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t, ",")
        .concat(n + i - l * m, " Z");
    } else
      f = "M "
        .concat(t, ",")
        .concat(n, " h ")
        .concat(r, " v ")
        .concat(i, " h ")
        .concat(-r, " Z");
    return f;
  },
  iG = function (t, n) {
    if (!t || !n) return !1;
    var r = t.x,
      i = t.y,
      a = n.x,
      o = n.y,
      l = n.width,
      u = n.height;
    if (Math.abs(l) > 0 && Math.abs(u) > 0) {
      var s = Math.min(a, a + l),
        f = Math.max(a, a + l),
        c = Math.min(o, o + u),
        d = Math.max(o, o + u);
      return r >= s && r <= f && i >= c && i <= d;
    }
    return !1;
  },
  aG = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  Gm = function (t) {
    var n = Ww(Ww({}, aG), t),
      r = E.useRef(),
      i = E.useState(-1),
      a = Yq(i, 2),
      o = a[0],
      l = a[1];
    E.useEffect(function () {
      if (r.current && r.current.getTotalLength)
        try {
          var h = r.current.getTotalLength();
          h && l(h);
        } catch {}
    }, []);
    var u = n.x,
      s = n.y,
      f = n.width,
      c = n.height,
      d = n.radius,
      p = n.className,
      m = n.animationEasing,
      v = n.animationDuration,
      b = n.animationBegin,
      g = n.isAnimationActive,
      y = n.isUpdateAnimationActive;
    if (u !== +u || s !== +s || f !== +f || c !== +c || f === 0 || c === 0)
      return null;
    var w = be("recharts-rectangle", p);
    return y
      ? T.createElement(
          wr,
          {
            canBegin: o > 0,
            from: { width: f, height: c, x: u, y: s },
            to: { width: f, height: c, x: u, y: s },
            duration: v,
            animationEasing: m,
            isActive: y,
          },
          function (h) {
            var x = h.width,
              S = h.height,
              _ = h.x,
              O = h.y;
            return T.createElement(
              wr,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: b,
                duration: v,
                isActive: g,
                easing: m,
              },
              T.createElement(
                "path",
                Ic({}, ve(n, !0), {
                  className: w,
                  d: Hw(_, O, x, S, d),
                  ref: r,
                })
              )
            );
          }
        )
      : T.createElement(
          "path",
          Ic({}, ve(n, !0), { className: w, d: Hw(u, s, f, c, d) })
        );
  };
function Av() {
  return (
    (Av = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Av.apply(this, arguments)
  );
}
var Xm = function (t) {
  var n = t.cx,
    r = t.cy,
    i = t.r,
    a = t.className,
    o = be("recharts-dot", a);
  return n === +n && r === +r && i === +i
    ? T.createElement(
        "circle",
        Av({}, ve(t, !1), tc(t), { className: o, cx: n, cy: r, r: i })
      )
    : null;
};
function Xl(e) {
  "@babel/helpers - typeof";
  return (
    (Xl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Xl(e)
  );
}
var oG = ["x", "y", "top", "left", "width", "height", "className"];
function Tv() {
  return (
    (Tv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tv.apply(this, arguments)
  );
}
function Kw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function lG(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kw(Object(n), !0).forEach(function (r) {
          uG(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Kw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function uG(e, t, n) {
  return (
    (t = sG(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function sG(e) {
  var t = cG(e, "string");
  return Xl(t) == "symbol" ? t : String(t);
}
function cG(e, t) {
  if (Xl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Xl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fG(e, t) {
  if (e == null) return {};
  var n = dG(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function dG(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var pG = function (t, n, r, i, a, o) {
    return "M"
      .concat(t, ",")
      .concat(a, "v")
      .concat(i, "M")
      .concat(o, ",")
      .concat(n, "h")
      .concat(r);
  },
  hG = function (t) {
    var n = t.x,
      r = n === void 0 ? 0 : n,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      l = o === void 0 ? 0 : o,
      u = t.left,
      s = u === void 0 ? 0 : u,
      f = t.width,
      c = f === void 0 ? 0 : f,
      d = t.height,
      p = d === void 0 ? 0 : d,
      m = t.className,
      v = fG(t, oG),
      b = lG({ x: r, y: a, top: l, left: s, width: c, height: p }, v);
    return !q(r) || !q(a) || !q(c) || !q(p) || !q(l) || !q(s)
      ? null
      : T.createElement(
          "path",
          Tv({}, ve(b, !0), {
            className: be("recharts-cross", m),
            d: pG(r, a, c, p, l, s),
          })
        );
  },
  vG = BP,
  yG = vG(Object.getPrototypeOf, Object),
  mG = yG,
  gG = Or,
  bG = mG,
  wG = Pr,
  xG = "[object Object]",
  SG = Function.prototype,
  _G = Object.prototype,
  _A = SG.toString,
  OG = _G.hasOwnProperty,
  PG = _A.call(Object);
function EG(e) {
  if (!wG(e) || gG(e) != xG) return !1;
  var t = bG(e);
  if (t === null) return !0;
  var n = OG.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && _A.call(n) == PG;
}
var AG = EG;
const TG = Te(AG);
var $G = Or,
  CG = Pr,
  jG = "[object Boolean]";
function kG(e) {
  return e === !0 || e === !1 || (CG(e) && $G(e) == jG);
}
var MG = kG;
const NG = Te(MG);
function Yl(e) {
  "@babel/helpers - typeof";
  return (
    (Yl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yl(e)
  );
}
function Dc() {
  return (
    (Dc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Dc.apply(this, arguments)
  );
}
function IG(e, t) {
  return BG(e) || LG(e, t) || RG(e, t) || DG();
}
function DG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RG(e, t) {
  if (e) {
    if (typeof e == "string") return Vw(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Vw(e, t);
  }
}
function Vw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function LG(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function BG(e) {
  if (Array.isArray(e)) return e;
}
function qw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Gw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qw(Object(n), !0).forEach(function (r) {
          zG(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function zG(e, t, n) {
  return (
    (t = FG(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function FG(e) {
  var t = UG(e, "string");
  return Yl(t) == "symbol" ? t : String(t);
}
function UG(e, t) {
  if (Yl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Yl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xw = function (t, n, r, i, a) {
    var o = r - i,
      l;
    return (
      (l = "M ".concat(t, ",").concat(n)),
      (l += "L ".concat(t + r, ",").concat(n)),
      (l += "L ".concat(t + r - o / 2, ",").concat(n + a)),
      (l += "L ".concat(t + r - o / 2 - i, ",").concat(n + a)),
      (l += "L ".concat(t, ",").concat(n, " Z")),
      l
    );
  },
  WG = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  HG = function (t) {
    var n = Gw(Gw({}, WG), t),
      r = E.useRef(),
      i = E.useState(-1),
      a = IG(i, 2),
      o = a[0],
      l = a[1];
    E.useEffect(function () {
      if (r.current && r.current.getTotalLength)
        try {
          var w = r.current.getTotalLength();
          w && l(w);
        } catch {}
    }, []);
    var u = n.x,
      s = n.y,
      f = n.upperWidth,
      c = n.lowerWidth,
      d = n.height,
      p = n.className,
      m = n.animationEasing,
      v = n.animationDuration,
      b = n.animationBegin,
      g = n.isUpdateAnimationActive;
    if (
      u !== +u ||
      s !== +s ||
      f !== +f ||
      c !== +c ||
      d !== +d ||
      (f === 0 && c === 0) ||
      d === 0
    )
      return null;
    var y = be("recharts-trapezoid", p);
    return g
      ? T.createElement(
          wr,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: d, x: u, y: s },
            to: { upperWidth: f, lowerWidth: c, height: d, x: u, y: s },
            duration: v,
            animationEasing: m,
            isActive: g,
          },
          function (w) {
            var h = w.upperWidth,
              x = w.lowerWidth,
              S = w.height,
              _ = w.x,
              O = w.y;
            return T.createElement(
              wr,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: b,
                duration: v,
                easing: m,
              },
              T.createElement(
                "path",
                Dc({}, ve(n, !0), {
                  className: y,
                  d: Xw(_, O, h, x, S),
                  ref: r,
                })
              )
            );
          }
        )
      : T.createElement(
          "g",
          null,
          T.createElement(
            "path",
            Dc({}, ve(n, !0), { className: y, d: Xw(u, s, f, c, d) })
          )
        );
  },
  KG = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];
function Ql(e) {
  "@babel/helpers - typeof";
  return (
    (Ql =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ql(e)
  );
}
function VG(e, t) {
  if (e == null) return {};
  var n = qG(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function qG(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Yw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Rc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yw(Object(n), !0).forEach(function (r) {
          GG(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Yw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function GG(e, t, n) {
  return (
    (t = XG(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function XG(e) {
  var t = YG(e, "string");
  return Ql(t) == "symbol" ? t : String(t);
}
function YG(e, t) {
  if (Ql(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ql(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QG(e, t) {
  return Rc(Rc({}, t), e);
}
function ZG(e, t) {
  return e === "symbols";
}
function Qw(e) {
  var t = e.shapeType,
    n = e.elementProps;
  switch (t) {
    case "rectangle":
      return T.createElement(Gm, n);
    case "trapezoid":
      return T.createElement(HG, n);
    case "sector":
      return T.createElement(fA, n);
    case "symbols":
      if (ZG(t)) return T.createElement(dm, n);
      break;
    default:
      return null;
  }
}
function JG(e) {
  return E.isValidElement(e) ? e.props : e;
}
function eX(e) {
  var t = e.option,
    n = e.shapeType,
    r = e.propTransformer,
    i = r === void 0 ? QG : r,
    a = e.activeClassName,
    o = a === void 0 ? "recharts-active-shape" : a,
    l = e.isActive,
    u = VG(e, KG),
    s;
  if (E.isValidElement(t)) s = E.cloneElement(t, Rc(Rc({}, u), JG(t)));
  else if (he(t)) s = t(u);
  else if (TG(t) && !NG(t)) {
    var f = i(t, u);
    s = T.createElement(Qw, { shapeType: n, elementProps: f });
  } else {
    var c = u;
    s = T.createElement(Qw, { shapeType: n, elementProps: c });
  }
  return l ? T.createElement(Qe, { className: o }, s) : s;
}
function od(e, t) {
  return t != null && "trapezoids" in e.props;
}
function ld(e, t) {
  return t != null && "sectors" in e.props;
}
function Zl(e, t) {
  return t != null && "points" in e.props;
}
function tX(e, t) {
  var n,
    r,
    i =
      e.x ===
        (t == null || (n = t.labelViewBox) === null || n === void 0
          ? void 0
          : n.x) || e.x === t.x,
    a =
      e.y ===
        (t == null || (r = t.labelViewBox) === null || r === void 0
          ? void 0
          : r.y) || e.y === t.y;
  return i && a;
}
function nX(e, t) {
  var n = e.endAngle === t.endAngle,
    r = e.startAngle === t.startAngle;
  return n && r;
}
function rX(e, t) {
  var n = e.x === t.x,
    r = e.y === t.y,
    i = e.z === t.z;
  return n && r && i;
}
function iX(e, t) {
  var n;
  return od(e, t) ? (n = tX) : ld(e, t) ? (n = nX) : Zl(e, t) && (n = rX), n;
}
function aX(e, t) {
  var n;
  return (
    od(e, t)
      ? (n = "trapezoids")
      : ld(e, t)
      ? (n = "sectors")
      : Zl(e, t) && (n = "points"),
    n
  );
}
function oX(e, t) {
  if (od(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  if (ld(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  return Zl(e, t) ? t.payload : {};
}
function lX(e) {
  var t = e.activeTooltipItem,
    n = e.graphicalItem,
    r = e.itemData,
    i = aX(n, t),
    a = oX(n, t),
    o = r.filter(function (u, s) {
      var f = rd(a, u),
        c = n.props[i].filter(function (m) {
          var v = iX(n, t);
          return v(m, t);
        }),
        d = n.props[i].indexOf(c[c.length - 1]),
        p = s === d;
      return f && p;
    }),
    l = r.indexOf(o[o.length - 1]);
  return l;
}
var uX = Math.ceil,
  sX = Math.max;
function cX(e, t, n, r) {
  for (var i = -1, a = sX(uX((t - e) / (n || 1)), 0), o = Array(a); a--; )
    (o[r ? a : ++i] = e), (e += n);
  return o;
}
var fX = cX,
  dX = iE,
  Zw = 1 / 0,
  pX = 17976931348623157e292;
function hX(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = dX(e)), e === Zw || e === -Zw)) {
    var t = e < 0 ? -1 : 1;
    return t * pX;
  }
  return e === e ? e : 0;
}
var vX = hX,
  yX = fX,
  mX = Gf,
  gp = vX;
function gX(e) {
  return function (t, n, r) {
    return (
      r && typeof r != "number" && mX(t, n, r) && (n = r = void 0),
      (t = gp(t)),
      n === void 0 ? ((n = t), (t = 0)) : (n = gp(n)),
      (r = r === void 0 ? (t < n ? 1 : -1) : gp(r)),
      yX(t, n, r, e)
    );
  };
}
var bX = gX,
  wX = bX,
  xX = wX(),
  SX = xX;
const Lc = Te(SX);
function Jl(e) {
  "@babel/helpers - typeof";
  return (
    (Jl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Jl(e)
  );
}
function Jw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ex(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jw(Object(n), !0).forEach(function (r) {
          OA(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Jw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function OA(e, t, n) {
  return (
    (t = _X(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _X(e) {
  var t = OX(e, "string");
  return Jl(t) == "symbol" ? t : String(t);
}
function OX(e, t) {
  if (Jl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Jl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var PX = ["Webkit", "Moz", "O", "ms"],
  EX = function (t, n) {
    if (!t) return null;
    var r = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = PX.reduce(function (a, o) {
        return ex(ex({}, a), {}, OA({}, o + r, n));
      }, {});
    return (i[t] = n), i;
  };
function Fa(e) {
  "@babel/helpers - typeof";
  return (
    (Fa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fa(e)
  );
}
function Bc() {
  return (
    (Bc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bc.apply(this, arguments)
  );
}
function tx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function bp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tx(Object(n), !0).forEach(function (r) {
          Xt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function AX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nx(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, EA(r.key), r);
  }
}
function TX(e, t, n) {
  return (
    t && nx(e.prototype, t),
    n && nx(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function $X(e, t, n) {
  return (
    (t = zc(t)),
    CX(
      e,
      PA() ? Reflect.construct(t, n || [], zc(e).constructor) : t.apply(e, n)
    )
  );
}
function CX(e, t) {
  if (t && (Fa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Un(e);
}
function PA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (PA = function () {
    return !!e;
  })();
}
function zc(e) {
  return (
    (zc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    zc(e)
  );
}
function Un(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function jX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && $v(e, t);
}
function $v(e, t) {
  return (
    ($v = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    $v(e, t)
  );
}
function Xt(e, t, n) {
  return (
    (t = EA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function EA(e) {
  var t = kX(e, "string");
  return Fa(t) == "symbol" ? t : String(t);
}
function kX(e, t) {
  if (Fa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Fa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var MX = function (t) {
    var n = t.data,
      r = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      l = t.travellerWidth;
    if (!n || !n.length) return {};
    var u = n.length,
      s = el()
        .domain(Lc(0, u))
        .range([a, a + o - l]),
      f = s.domain().map(function (c) {
        return s(c);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: s(r),
      endX: s(i),
      scale: s,
      scaleValues: f,
    };
  },
  rx = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  Ua = (function (e) {
    jX(t, e);
    function t(n) {
      var r;
      return (
        AX(this, t),
        (r = $X(this, t, [n])),
        Xt(Un(r), "handleDrag", function (i) {
          r.leaveTimer && (clearTimeout(r.leaveTimer), (r.leaveTimer = null)),
            r.state.isTravellerMoving
              ? r.handleTravellerMove(i)
              : r.state.isSlideMoving && r.handleSlideDrag(i);
        }),
        Xt(Un(r), "handleTouchMove", function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            r.handleDrag(i.changedTouches[0]);
        }),
        Xt(Un(r), "handleDragEnd", function () {
          r.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var i = r.props,
              a = i.endIndex,
              o = i.onDragEnd,
              l = i.startIndex;
            o == null || o({ endIndex: a, startIndex: l });
          }),
            r.detachDragEndListener();
        }),
        Xt(Un(r), "handleLeaveWrapper", function () {
          (r.state.isTravellerMoving || r.state.isSlideMoving) &&
            (r.leaveTimer = window.setTimeout(
              r.handleDragEnd,
              r.props.leaveTimeOut
            ));
        }),
        Xt(Un(r), "handleEnterSlideOrTraveller", function () {
          r.setState({ isTextActive: !0 });
        }),
        Xt(Un(r), "handleLeaveSlideOrTraveller", function () {
          r.setState({ isTextActive: !1 });
        }),
        Xt(Un(r), "handleSlideDragStart", function (i) {
          var a = rx(i) ? i.changedTouches[0] : i;
          r.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: a.pageX,
          }),
            r.attachDragEndListener();
        }),
        (r.travellerDragStartHandlers = {
          startX: r.handleTravellerDragStart.bind(Un(r), "startX"),
          endX: r.handleTravellerDragStart.bind(Un(r), "endX"),
        }),
        (r.state = {}),
        r
      );
    }
    return (
      TX(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener();
            },
          },
          {
            key: "getIndex",
            value: function (r) {
              var i = r.startX,
                a = r.endX,
                o = this.state.scaleValues,
                l = this.props,
                u = l.gap,
                s = l.data,
                f = s.length - 1,
                c = Math.min(i, a),
                d = Math.max(i, a),
                p = t.getIndexInRange(o, c),
                m = t.getIndexInRange(o, d);
              return {
                startIndex: p - (p % u),
                endIndex: m === f ? f : m - (m % u),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (r) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                l = i.dataKey,
                u = nn(a[r], l, r);
              return he(o) ? o(u, r) : u;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "handleSlideDrag",
            value: function (r) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                l = i.endX,
                u = this.props,
                s = u.x,
                f = u.width,
                c = u.travellerWidth,
                d = u.startIndex,
                p = u.endIndex,
                m = u.onChange,
                v = r.pageX - a;
              v > 0
                ? (v = Math.min(v, s + f - c - l, s + f - c - o))
                : v < 0 && (v = Math.max(v, s - o, s - l));
              var b = this.getIndex({ startX: o + v, endX: l + v });
              (b.startIndex !== d || b.endIndex !== p) && m && m(b),
                this.setState({
                  startX: o + v,
                  endX: l + v,
                  slideMoveStartX: r.pageX,
                });
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (r, i) {
              var a = rx(i) ? i.changedTouches[0] : i;
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: r,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener();
            },
          },
          {
            key: "handleTravellerMove",
            value: function (r) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                l = i.endX,
                u = i.startX,
                s = this.state[o],
                f = this.props,
                c = f.x,
                d = f.width,
                p = f.travellerWidth,
                m = f.onChange,
                v = f.gap,
                b = f.data,
                g = { startX: this.state.startX, endX: this.state.endX },
                y = r.pageX - a;
              y > 0
                ? (y = Math.min(y, c + d - p - s))
                : y < 0 && (y = Math.max(y, c - s)),
                (g[o] = s + y);
              var w = this.getIndex(g),
                h = w.startIndex,
                x = w.endIndex,
                S = function () {
                  var O = b.length - 1;
                  return (
                    (o === "startX" && (l > u ? h % v === 0 : x % v === 0)) ||
                    (l < u && x === O) ||
                    (o === "endX" && (l > u ? x % v === 0 : h % v === 0)) ||
                    (l > u && x === O)
                  );
                };
              this.setState(
                Xt(Xt({}, o, s + y), "brushMoveStartX", r.pageX),
                function () {
                  m && S() && m(w);
                }
              );
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (r, i) {
              var a = this,
                o = this.state,
                l = o.scaleValues,
                u = o.startX,
                s = o.endX,
                f = this.state[i],
                c = l.indexOf(f);
              if (c !== -1) {
                var d = c + r;
                if (!(d === -1 || d >= l.length)) {
                  var p = l[d];
                  (i === "startX" && p >= s) ||
                    (i === "endX" && p <= u) ||
                    this.setState(Xt({}, i, p), function () {
                      a.props.onChange(
                        a.getIndex({
                          startX: a.state.startX,
                          endX: a.state.endX,
                        })
                      );
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var r = this.props,
                i = r.x,
                a = r.y,
                o = r.width,
                l = r.height,
                u = r.fill,
                s = r.stroke;
              return T.createElement("rect", {
                stroke: s,
                fill: u,
                x: i,
                y: a,
                width: o,
                height: l,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var r = this.props,
                i = r.x,
                a = r.y,
                o = r.width,
                l = r.height,
                u = r.data,
                s = r.children,
                f = r.padding,
                c = E.Children.only(s);
              return c
                ? T.cloneElement(c, {
                    x: i,
                    y: a,
                    width: o,
                    height: l,
                    margin: f,
                    compact: !0,
                    data: u,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (r, i) {
              var a,
                o,
                l = this,
                u = this.props,
                s = u.y,
                f = u.travellerWidth,
                c = u.height,
                d = u.traveller,
                p = u.ariaLabel,
                m = u.data,
                v = u.startIndex,
                b = u.endIndex,
                g = Math.max(r, this.props.x),
                y = bp(
                  bp({}, ve(this.props, !1)),
                  {},
                  { x: g, y: s, width: f, height: c }
                ),
                w =
                  p ||
                  "Min value: "
                    .concat(
                      (a = m[v]) === null || a === void 0 ? void 0 : a.name,
                      ", Max value: "
                    )
                    .concat(
                      (o = m[b]) === null || o === void 0 ? void 0 : o.name
                    );
              return T.createElement(
                Qe,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": w,
                  "aria-valuenow": r,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  onKeyDown: function (x) {
                    ["ArrowLeft", "ArrowRight"].includes(x.key) &&
                      (x.preventDefault(),
                      x.stopPropagation(),
                      l.handleTravellerMoveKeyboard(
                        x.key === "ArrowRight" ? 1 : -1,
                        i
                      ));
                  },
                  onFocus: function () {
                    l.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    l.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                t.renderTraveller(d, y)
              );
            },
          },
          {
            key: "renderSlide",
            value: function (r, i) {
              var a = this.props,
                o = a.y,
                l = a.height,
                u = a.stroke,
                s = a.travellerWidth,
                f = Math.min(r, i) + s,
                c = Math.max(Math.abs(i - r) - s, 0);
              return T.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: u,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: c,
                height: l,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var r = this.props,
                i = r.startIndex,
                a = r.endIndex,
                o = r.y,
                l = r.height,
                u = r.travellerWidth,
                s = r.stroke,
                f = this.state,
                c = f.startX,
                d = f.endX,
                p = 5,
                m = { pointerEvents: "none", fill: s };
              return T.createElement(
                Qe,
                { className: "recharts-brush-texts" },
                T.createElement(
                  yc,
                  Bc(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(c, d) - p,
                      y: o + l / 2,
                    },
                    m
                  ),
                  this.getTextOfTick(i)
                ),
                T.createElement(
                  yc,
                  Bc(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(c, d) + u + p,
                      y: o + l / 2,
                    },
                    m
                  ),
                  this.getTextOfTick(a)
                )
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = r.data,
                a = r.className,
                o = r.children,
                l = r.x,
                u = r.y,
                s = r.width,
                f = r.height,
                c = r.alwaysShowText,
                d = this.state,
                p = d.startX,
                m = d.endX,
                v = d.isTextActive,
                b = d.isSlideMoving,
                g = d.isTravellerMoving,
                y = d.isTravellerFocused;
              if (
                !i ||
                !i.length ||
                !q(l) ||
                !q(u) ||
                !q(s) ||
                !q(f) ||
                s <= 0 ||
                f <= 0
              )
                return null;
              var w = be("recharts-brush", a),
                h = T.Children.count(o) === 1,
                x = EX("userSelect", "none");
              return T.createElement(
                Qe,
                {
                  className: w,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: x,
                },
                this.renderBackground(),
                h && this.renderPanorama(),
                this.renderSlide(p, m),
                this.renderTravellerLayer(p, "startX"),
                this.renderTravellerLayer(m, "endX"),
                (v || b || g || y || c) && this.renderText()
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (r) {
              var i = r.x,
                a = r.y,
                o = r.width,
                l = r.height,
                u = r.stroke,
                s = Math.floor(a + l / 2) - 1;
              return T.createElement(
                T.Fragment,
                null,
                T.createElement("rect", {
                  x: i,
                  y: a,
                  width: o,
                  height: l,
                  fill: u,
                  stroke: "none",
                }),
                T.createElement("line", {
                  x1: i + 1,
                  y1: s,
                  x2: i + o - 1,
                  y2: s,
                  fill: "none",
                  stroke: "#fff",
                }),
                T.createElement("line", {
                  x1: i + 1,
                  y1: s + 2,
                  x2: i + o - 1,
                  y2: s + 2,
                  fill: "none",
                  stroke: "#fff",
                })
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (r, i) {
              var a;
              return (
                T.isValidElement(r)
                  ? (a = T.cloneElement(r, i))
                  : he(r)
                  ? (a = r(i))
                  : (a = t.renderDefaultTraveller(i)),
                a
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (r, i) {
              var a = r.data,
                o = r.width,
                l = r.x,
                u = r.travellerWidth,
                s = r.updateId,
                f = r.startIndex,
                c = r.endIndex;
              if (a !== i.prevData || s !== i.prevUpdateId)
                return bp(
                  {
                    prevData: a,
                    prevTravellerWidth: u,
                    prevUpdateId: s,
                    prevX: l,
                    prevWidth: o,
                  },
                  a && a.length
                    ? MX({
                        data: a,
                        width: o,
                        x: l,
                        travellerWidth: u,
                        startIndex: f,
                        endIndex: c,
                      })
                    : { scale: null, scaleValues: null }
                );
              if (
                i.scale &&
                (o !== i.prevWidth ||
                  l !== i.prevX ||
                  u !== i.prevTravellerWidth)
              ) {
                i.scale.range([l, l + o - u]);
                var d = i.scale.domain().map(function (p) {
                  return i.scale(p);
                });
                return {
                  prevData: a,
                  prevTravellerWidth: u,
                  prevUpdateId: s,
                  prevX: l,
                  prevWidth: o,
                  startX: i.scale(r.startIndex),
                  endX: i.scale(r.endIndex),
                  scaleValues: d,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (r, i) {
              for (var a = r.length, o = 0, l = a - 1; l - o > 1; ) {
                var u = Math.floor((o + l) / 2);
                r[u] > i ? (l = u) : (o = u);
              }
              return i >= r[l] ? l : o;
            },
          },
        ]
      ),
      t
    );
  })(E.PureComponent);
Xt(Ua, "displayName", "Brush");
Xt(Ua, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var NX = wm;
function IX(e, t) {
  var n;
  return (
    NX(e, function (r, i, a) {
      return (n = t(r, i, a)), !n;
    }),
    !!n
  );
}
var DX = IX,
  RX = jP,
  LX = oo,
  BX = DX,
  zX = qt,
  FX = Gf;
function UX(e, t, n) {
  var r = zX(e) ? RX : BX;
  return n && FX(e, t, n) && (t = void 0), r(e, LX(t));
}
var WX = UX;
const HX = Te(WX);
var Xn = function (t, n) {
    var r = t.alwaysShow,
      i = t.ifOverflow;
    return r && (i = "extendDomain"), i === n;
  },
  ix = JP;
function KX(e, t, n) {
  t == "__proto__" && ix
    ? ix(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var VX = KX,
  qX = VX,
  GX = QP,
  XX = oo;
function YX(e, t) {
  var n = {};
  return (
    (t = XX(t)),
    GX(e, function (r, i, a) {
      qX(n, i, t(r, i, a));
    }),
    n
  );
}
var QX = YX;
const ZX = Te(QX);
function JX(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (!t(e[n], n, e)) return !1;
  return !0;
}
var eY = JX,
  tY = wm;
function nY(e, t) {
  var n = !0;
  return (
    tY(e, function (r, i, a) {
      return (n = !!t(r, i, a)), n;
    }),
    n
  );
}
var rY = nY,
  iY = eY,
  aY = rY,
  oY = oo,
  lY = qt,
  uY = Gf;
function sY(e, t, n) {
  var r = lY(e) ? iY : aY;
  return n && uY(e, t, n) && (t = void 0), r(e, oY(t));
}
var cY = sY;
const fY = Te(cY);
var dY = ["x", "y"];
function eu(e) {
  "@babel/helpers - typeof";
  return (
    (eu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    eu(e)
  );
}
function Cv() {
  return (
    (Cv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cv.apply(this, arguments)
  );
}
function ax(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Do(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ax(Object(n), !0).forEach(function (r) {
          pY(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ax(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function pY(e, t, n) {
  return (
    (t = hY(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function hY(e) {
  var t = vY(e, "string");
  return eu(t) == "symbol" ? t : String(t);
}
function vY(e, t) {
  if (eu(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (eu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yY(e, t) {
  if (e == null) return {};
  var n = mY(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function mY(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function gY(e, t) {
  var n = e.x,
    r = e.y,
    i = yY(e, dY),
    a = "".concat(n),
    o = parseInt(a, 10),
    l = "".concat(r),
    u = parseInt(l, 10),
    s = "".concat(t.height || i.height),
    f = parseInt(s, 10),
    c = "".concat(t.width || i.width),
    d = parseInt(c, 10);
  return Do(
    Do(Do(Do(Do({}, t), i), o ? { x: o } : {}), u ? { y: u } : {}),
    {},
    { height: f, width: d, name: t.name, radius: t.radius }
  );
}
function ox(e) {
  return T.createElement(
    eX,
    Cv(
      {
        shapeType: "rectangle",
        propTransformer: gY,
        activeClassName: "recharts-active-bar",
      },
      e
    )
  );
}
var bY = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (r, i) {
      if (typeof t == "number") return t;
      var a = typeof r == "number";
      return a ? t(r, i) : (a || Ri(!1), n);
    };
  },
  wY = ["value", "background"],
  AA;
function Wa(e) {
  "@babel/helpers - typeof";
  return (
    (Wa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wa(e)
  );
}
function xY(e, t) {
  if (e == null) return {};
  var n = SY(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function SY(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Fc() {
  return (
    (Fc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fc.apply(this, arguments)
  );
}
function lx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lx(Object(n), !0).forEach(function (r) {
          Lr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : lx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _Y(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ux(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, $A(r.key), r);
  }
}
function OY(e, t, n) {
  return (
    t && ux(e.prototype, t),
    n && ux(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function PY(e, t, n) {
  return (
    (t = Uc(t)),
    EY(
      e,
      TA() ? Reflect.construct(t, n || [], Uc(e).constructor) : t.apply(e, n)
    )
  );
}
function EY(e, t) {
  if (t && (Wa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Uo(e);
}
function TA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (TA = function () {
    return !!e;
  })();
}
function Uc(e) {
  return (
    (Uc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Uc(e)
  );
}
function Uo(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function AY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && jv(e, t);
}
function jv(e, t) {
  return (
    (jv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    jv(e, t)
  );
}
function Lr(e, t, n) {
  return (
    (t = $A(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $A(e) {
  var t = TY(e, "string");
  return Wa(t) == "symbol" ? t : String(t);
}
function TY(e, t) {
  if (Wa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Wa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pu = (function (e) {
  AY(t, e);
  function t() {
    var n;
    _Y(this, t);
    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
      i[a] = arguments[a];
    return (
      (n = PY(this, t, [].concat(i))),
      Lr(Uo(n), "state", { isAnimationFinished: !1 }),
      Lr(Uo(n), "id", bu("recharts-bar-")),
      Lr(Uo(n), "handleAnimationEnd", function () {
        var o = n.props.onAnimationEnd;
        n.setState({ isAnimationFinished: !0 }), o && o();
      }),
      Lr(Uo(n), "handleAnimationStart", function () {
        var o = n.props.onAnimationStart;
        n.setState({ isAnimationFinished: !1 }), o && o();
      }),
      n
    );
  }
  return (
    OY(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (r) {
            var i = this,
              a = this.props,
              o = a.shape,
              l = a.dataKey,
              u = a.activeIndex,
              s = a.activeBar,
              f = ve(this.props, !1);
            return (
              r &&
              r.map(function (c, d) {
                var p = d === u,
                  m = p ? s : o,
                  v = st(
                    st(st({}, f), c),
                    {},
                    {
                      isActive: p,
                      option: m,
                      index: d,
                      dataKey: l,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    }
                  );
                return T.createElement(
                  Qe,
                  Fc(
                    { className: "recharts-bar-rectangle" },
                    nc(i.props, c, d),
                    {
                      key: "rectangle-"
                        .concat(c == null ? void 0 : c.x, "-")
                        .concat(c == null ? void 0 : c.y, "-")
                        .concat(c == null ? void 0 : c.value),
                    }
                  ),
                  T.createElement(ox, v)
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var r = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              l = i.isAnimationActive,
              u = i.animationBegin,
              s = i.animationDuration,
              f = i.animationEasing,
              c = i.animationId,
              d = this.state.prevData;
            return T.createElement(
              wr,
              {
                begin: u,
                duration: s,
                isActive: l,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(c),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (p) {
                var m = p.t,
                  v = a.map(function (b, g) {
                    var y = d && d[g];
                    if (y) {
                      var w = Mn(y.x, b.x),
                        h = Mn(y.y, b.y),
                        x = Mn(y.width, b.width),
                        S = Mn(y.height, b.height);
                      return st(
                        st({}, b),
                        {},
                        { x: w(m), y: h(m), width: x(m), height: S(m) }
                      );
                    }
                    if (o === "horizontal") {
                      var _ = Mn(0, b.height),
                        O = _(m);
                      return st(
                        st({}, b),
                        {},
                        { y: b.y + b.height - O, height: O }
                      );
                    }
                    var C = Mn(0, b.width),
                      A = C(m);
                    return st(st({}, b), {}, { width: A });
                  });
                return T.createElement(
                  Qe,
                  null,
                  r.renderRectanglesStatically(v)
                );
              }
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var r = this.props,
              i = r.data,
              a = r.isAnimationActive,
              o = this.state.prevData;
            return a && i && i.length && (!o || !rd(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var r = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              l = i.activeIndex,
              u = ve(this.props.background, !1);
            return a.map(function (s, f) {
              s.value;
              var c = s.background,
                d = xY(s, wY);
              if (!c) return null;
              var p = st(
                st(
                  st(st(st({}, d), {}, { fill: "#eee" }, c), u),
                  nc(r.props, s, f)
                ),
                {},
                {
                  onAnimationStart: r.handleAnimationStart,
                  onAnimationEnd: r.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  key: "background-bar-".concat(f),
                  className: "recharts-bar-background-rectangle",
                }
              );
              return T.createElement(
                ox,
                Fc({ option: r.props.background, isActive: f === l }, p)
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (r, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var a = this.props,
              o = a.data,
              l = a.xAxis,
              u = a.yAxis,
              s = a.layout,
              f = a.children,
              c = gn(f, Ou);
            if (!c) return null;
            var d = s === "vertical" ? o[0].height / 2 : o[0].width / 2,
              p = function (b, g) {
                var y = Array.isArray(b.value) ? b.value[1] : b.value;
                return { x: b.x, y: b.y, value: y, errorVal: nn(b, g) };
              },
              m = { clipPath: r ? "url(#clipPath-".concat(i, ")") : null };
            return T.createElement(
              Qe,
              m,
              c.map(function (v) {
                return T.cloneElement(v, {
                  key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
                  data: o,
                  xAxis: l,
                  yAxis: u,
                  layout: s,
                  offset: d,
                  dataPointFormatter: p,
                });
              })
            );
          },
        },
        {
          key: "render",
          value: function () {
            var r = this.props,
              i = r.hide,
              a = r.data,
              o = r.className,
              l = r.xAxis,
              u = r.yAxis,
              s = r.left,
              f = r.top,
              c = r.width,
              d = r.height,
              p = r.isAnimationActive,
              m = r.background,
              v = r.id;
            if (i || !a || !a.length) return null;
            var b = this.state.isAnimationFinished,
              g = be("recharts-bar", o),
              y = l && l.allowDataOverflow,
              w = u && u.allowDataOverflow,
              h = y || w,
              x = fe(v) ? this.id : v;
            return T.createElement(
              Qe,
              { className: g },
              y || w
                ? T.createElement(
                    "defs",
                    null,
                    T.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(x) },
                      T.createElement("rect", {
                        x: y ? s : s - c / 2,
                        y: w ? f : f - d / 2,
                        width: y ? c : c * 2,
                        height: w ? d : d * 2,
                      })
                    )
                  )
                : null,
              T.createElement(
                Qe,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: h ? "url(#clipPath-".concat(x, ")") : null,
                },
                m ? this.renderBackground() : null,
                this.renderRectangles()
              ),
              this.renderErrorBar(h, x),
              (!p || b) && Xr.renderCallByParent(this.props, a)
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (r, i) {
            return r.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: r.animationId,
                  curData: r.data,
                  prevData: i.curData,
                }
              : r.data !== i.curData
              ? { curData: r.data }
              : null;
          },
        },
      ]
    ),
    t
  );
})(E.PureComponent);
AA = Pu;
Lr(Pu, "displayName", "Bar");
Lr(Pu, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !cr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
Lr(Pu, "getComposedData", function (e) {
  var t = e.props,
    n = e.item,
    r = e.barPosition,
    i = e.bandSize,
    a = e.xAxis,
    o = e.yAxis,
    l = e.xAxisTicks,
    u = e.yAxisTicks,
    s = e.stackedData,
    f = e.dataStartIndex,
    c = e.displayedData,
    d = e.offset,
    p = vK(r, n);
  if (!p) return null;
  var m = t.layout,
    v = n.props,
    b = v.dataKey,
    g = v.children,
    y = v.minPointSize,
    w = m === "horizontal" ? o : a,
    h = s ? w.scale.domain() : null,
    x = _K({ numericAxis: w }),
    S = gn(g, oE),
    _ = c.map(function (O, C) {
      var A, k, $, D, N, z;
      s
        ? (A = yK(s[f + C], h))
        : ((A = nn(O, b)), Array.isArray(A) || (A = [x, A]));
      var R = bY(y, AA.defaultProps.minPointSize)(A[1], C);
      if (m === "horizontal") {
        var W,
          j = [o.scale(A[0]), o.scale(A[1])],
          B = j[0],
          K = j[1];
        (k = ow({
          axis: a,
          ticks: l,
          bandSize: i,
          offset: p.offset,
          entry: O,
          index: C,
        })),
          ($ = (W = K ?? B) !== null && W !== void 0 ? W : void 0),
          (D = p.size);
        var Z = B - K;
        if (
          ((N = Number.isNaN(Z) ? 0 : Z),
          (z = { x: k, y: o.y, width: D, height: o.height }),
          Math.abs(R) > 0 && Math.abs(N) < Math.abs(R))
        ) {
          var V = In(N || R) * (Math.abs(R) - Math.abs(N));
          ($ -= V), (N += V);
        }
      } else {
        var oe = [a.scale(A[0]), a.scale(A[1])],
          ie = oe[0],
          De = oe[1];
        if (
          ((k = ie),
          ($ = ow({
            axis: o,
            ticks: u,
            bandSize: i,
            offset: p.offset,
            entry: O,
            index: C,
          })),
          (D = De - ie),
          (N = p.size),
          (z = { x: a.x, y: $, width: a.width, height: N }),
          Math.abs(R) > 0 && Math.abs(D) < Math.abs(R))
        ) {
          var ut = In(D || R) * (Math.abs(R) - Math.abs(D));
          D += ut;
        }
      }
      return st(
        st(
          st({}, O),
          {},
          {
            x: k,
            y: $,
            width: D,
            height: N,
            value: s ? A : A[1],
            payload: O,
            background: z,
          },
          S && S[C] && S[C].props
        ),
        {},
        {
          tooltipPayload: [uA(n, O)],
          tooltipPosition: { x: k + D / 2, y: $ + N / 2 },
        }
      );
    });
  return st({ data: _, layout: m }, d);
});
function tu(e) {
  "@babel/helpers - typeof";
  return (
    (tu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    tu(e)
  );
}
function $Y(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sx(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, CA(r.key), r);
  }
}
function CY(e, t, n) {
  return (
    t && sx(e.prototype, t),
    n && sx(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function cx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cx(Object(n), !0).forEach(function (r) {
          ud(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : cx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ud(e, t, n) {
  return (
    (t = CA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function CA(e) {
  var t = jY(e, "string");
  return tu(t) == "symbol" ? t : String(t);
}
function jY(e, t) {
  if (tu(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (tu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kY = function (t, n, r, i, a) {
    var o = t.width,
      l = t.height,
      u = t.layout,
      s = t.children,
      f = Object.keys(n),
      c = {
        left: r.left,
        leftMirror: r.left,
        right: o - r.right,
        rightMirror: o - r.right,
        top: r.top,
        topMirror: r.top,
        bottom: l - r.bottom,
        bottomMirror: l - r.bottom,
      },
      d = !!Qt(s, Pu);
    return f.reduce(function (p, m) {
      var v = n[m],
        b = v.orientation,
        g = v.domain,
        y = v.padding,
        w = y === void 0 ? {} : y,
        h = v.mirror,
        x = v.reversed,
        S = "".concat(b).concat(h ? "Mirror" : ""),
        _,
        O,
        C,
        A,
        k;
      if (
        v.type === "number" &&
        (v.padding === "gap" || v.padding === "no-gap")
      ) {
        var $ = g[1] - g[0],
          D = 1 / 0,
          N = v.categoricalDomain.sort();
        if (
          (N.forEach(function (ie, De) {
            De > 0 && (D = Math.min((ie || 0) - (N[De - 1] || 0), D));
          }),
          Number.isFinite(D))
        ) {
          var z = D / $,
            R = v.layout === "vertical" ? r.height : r.width;
          if (
            (v.padding === "gap" && (_ = (z * R) / 2), v.padding === "no-gap")
          ) {
            var W = Ii(t.barCategoryGap, z * R),
              j = (z * R) / 2;
            _ = j - W - ((j - W) / R) * W;
          }
        }
      }
      i === "xAxis"
        ? (O = [
            r.left + (w.left || 0) + (_ || 0),
            r.left + r.width - (w.right || 0) - (_ || 0),
          ])
        : i === "yAxis"
        ? (O =
            u === "horizontal"
              ? [r.top + r.height - (w.bottom || 0), r.top + (w.top || 0)]
              : [
                  r.top + (w.top || 0) + (_ || 0),
                  r.top + r.height - (w.bottom || 0) - (_ || 0),
                ])
        : (O = v.range),
        x && (O = [O[1], O[0]]);
      var B = pK(v, a, d),
        K = B.scale,
        Z = B.realScaleType;
      K.domain(g).range(O), hK(K);
      var V = SK(K, Cn(Cn({}, v), {}, { realScaleType: Z }));
      i === "xAxis"
        ? ((k = (b === "top" && !h) || (b === "bottom" && h)),
          (C = r.left),
          (A = c[S] - k * v.height))
        : i === "yAxis" &&
          ((k = (b === "left" && !h) || (b === "right" && h)),
          (C = c[S] - k * v.width),
          (A = r.top));
      var oe = Cn(
        Cn(Cn({}, v), V),
        {},
        {
          realScaleType: Z,
          x: C,
          y: A,
          scale: K,
          width: i === "xAxis" ? r.width : v.width,
          height: i === "yAxis" ? r.height : v.height,
        }
      );
      return (
        (oe.bandSize = $c(oe, V)),
        !v.hide && i === "xAxis"
          ? (c[S] += (k ? -1 : 1) * oe.height)
          : v.hide || (c[S] += (k ? -1 : 1) * oe.width),
        Cn(Cn({}, p), {}, ud({}, m, oe))
      );
    }, {});
  },
  jA = function (t, n) {
    var r = t.x,
      i = t.y,
      a = n.x,
      o = n.y;
    return {
      x: Math.min(r, a),
      y: Math.min(i, o),
      width: Math.abs(a - r),
      height: Math.abs(o - i),
    };
  },
  MY = function (t) {
    var n = t.x1,
      r = t.y1,
      i = t.x2,
      a = t.y2;
    return jA({ x: n, y: r }, { x: i, y: a });
  },
  kA = (function () {
    function e(t) {
      $Y(this, e), (this.scale = t);
    }
    return (
      CY(
        e,
        [
          {
            key: "domain",
            get: function () {
              return this.scale.domain;
            },
          },
          {
            key: "range",
            get: function () {
              return this.scale.range;
            },
          },
          {
            key: "rangeMin",
            get: function () {
              return this.range()[0];
            },
          },
          {
            key: "rangeMax",
            get: function () {
              return this.range()[1];
            },
          },
          {
            key: "bandwidth",
            get: function () {
              return this.scale.bandwidth;
            },
          },
          {
            key: "apply",
            value: function (n) {
              var r =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                i = r.bandAware,
                a = r.position;
              if (n !== void 0) {
                if (a)
                  switch (a) {
                    case "start":
                      return this.scale(n);
                    case "middle": {
                      var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(n) + o;
                    }
                    case "end": {
                      var l = this.bandwidth ? this.bandwidth() : 0;
                      return this.scale(n) + l;
                    }
                    default:
                      return this.scale(n);
                  }
                if (i) {
                  var u = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(n) + u;
                }
                return this.scale(n);
              }
            },
          },
          {
            key: "isInRange",
            value: function (n) {
              var r = this.range(),
                i = r[0],
                a = r[r.length - 1];
              return i <= a ? n >= i && n <= a : n >= a && n <= i;
            },
          },
        ],
        [
          {
            key: "create",
            value: function (n) {
              return new e(n);
            },
          },
        ]
      ),
      e
    );
  })();
ud(kA, "EPS", 1e-4);
var Ym = function (t) {
  var n = Object.keys(t).reduce(function (r, i) {
    return Cn(Cn({}, r), {}, ud({}, i, kA.create(t[i])));
  }, {});
  return Cn(
    Cn({}, n),
    {},
    {
      apply: function (i) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          l = a.position;
        return ZX(i, function (u, s) {
          return n[s].apply(u, { bandAware: o, position: l });
        });
      },
      isInRange: function (i) {
        return fY(i, function (a, o) {
          return n[o].isInRange(a);
        });
      },
    }
  );
};
function NY(e) {
  return ((e % 180) + 180) % 180;
}
var IY = function (t) {
    var n = t.width,
      r = t.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = NY(i),
      o = (a * Math.PI) / 180,
      l = Math.atan(r / n),
      u = o > l && o < Math.PI - l ? r / Math.sin(o) : n / Math.cos(o);
    return Math.abs(u);
  },
  DY = fD(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    }
  ),
  MA = E.createContext(void 0),
  NA = E.createContext(void 0),
  IA = E.createContext(void 0),
  RY = E.createContext({}),
  DA = E.createContext(void 0),
  RA = E.createContext(0),
  LA = E.createContext(0),
  fx = function (t) {
    var n = t.state,
      r = n.xAxisMap,
      i = n.yAxisMap,
      a = n.offset,
      o = t.clipPathId,
      l = t.children,
      u = t.width,
      s = t.height,
      f = DY(a);
    return T.createElement(
      MA.Provider,
      { value: r },
      T.createElement(
        NA.Provider,
        { value: i },
        T.createElement(
          RY.Provider,
          { value: a },
          T.createElement(
            IA.Provider,
            { value: f },
            T.createElement(
              DA.Provider,
              { value: o },
              T.createElement(
                RA.Provider,
                { value: s },
                T.createElement(LA.Provider, { value: u }, l)
              )
            )
          )
        )
      )
    );
  },
  LY = function () {
    return E.useContext(DA);
  },
  BA = function (t) {
    var n = E.useContext(MA);
    n == null && Ri(!1);
    var r = n[t];
    return r == null && Ri(!1), r;
  },
  zA = function (t) {
    var n = E.useContext(NA);
    n == null && Ri(!1);
    var r = n[t];
    return r == null && Ri(!1), r;
  },
  BY = function () {
    var t = E.useContext(IA);
    return t;
  },
  FA = function () {
    return E.useContext(LA);
  },
  UA = function () {
    return E.useContext(RA);
  };
function nu(e) {
  "@babel/helpers - typeof";
  return (
    (nu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    nu(e)
  );
}
function dx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function px(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dx(Object(n), !0).forEach(function (r) {
          zY(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : dx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function zY(e, t, n) {
  return (
    (t = FY(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function FY(e) {
  var t = UY(e, "string");
  return nu(t) == "symbol" ? t : String(t);
}
function UY(e, t) {
  if (nu(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (nu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WY(e, t) {
  return qY(e) || VY(e, t) || KY(e, t) || HY();
}
function HY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KY(e, t) {
  if (e) {
    if (typeof e == "string") return hx(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return hx(e, t);
  }
}
function hx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function VY(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function qY(e) {
  if (Array.isArray(e)) return e;
}
function kv() {
  return (
    (kv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kv.apply(this, arguments)
  );
}
var GY = function (t, n) {
    var r;
    return (
      T.isValidElement(t)
        ? (r = T.cloneElement(t, n))
        : he(t)
        ? (r = t(n))
        : (r = T.createElement(
            "line",
            kv({}, n, { className: "recharts-reference-line-line" })
          )),
      r
    );
  },
  XY = function (t, n, r, i, a, o, l, u, s) {
    var f = a.x,
      c = a.y,
      d = a.width,
      p = a.height;
    if (r) {
      var m = s.y,
        v = t.y.apply(m, { position: o });
      if (Xn(s, "discard") && !t.y.isInRange(v)) return null;
      var b = [
        { x: f + d, y: v },
        { x: f, y: v },
      ];
      return u === "left" ? b.reverse() : b;
    }
    if (n) {
      var g = s.x,
        y = t.x.apply(g, { position: o });
      if (Xn(s, "discard") && !t.x.isInRange(y)) return null;
      var w = [
        { x: y, y: c + p },
        { x: y, y: c },
      ];
      return l === "top" ? w.reverse() : w;
    }
    if (i) {
      var h = s.segment,
        x = h.map(function (S) {
          return t.apply(S, { position: o });
        });
      return Xn(s, "discard") &&
        HX(x, function (S) {
          return !t.isInRange(S);
        })
        ? null
        : x;
    }
    return null;
  };
function Qm(e) {
  var t = e.x,
    n = e.y,
    r = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    l = e.className,
    u = e.alwaysShow,
    s = LY(),
    f = BA(i),
    c = zA(a),
    d = BY();
  if (!s || !d) return null;
  Ai(
    u === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
  );
  var p = Ym({ x: f.scale, y: c.scale }),
    m = ot(t),
    v = ot(n),
    b = r && r.length === 2,
    g = XY(p, m, v, b, d, e.position, f.orientation, c.orientation, e);
  if (!g) return null;
  var y = WY(g, 2),
    w = y[0],
    h = w.x,
    x = w.y,
    S = y[1],
    _ = S.x,
    O = S.y,
    C = Xn(e, "hidden") ? "url(#".concat(s, ")") : void 0,
    A = px(px({ clipPath: C }, ve(e, !0)), {}, { x1: h, y1: x, x2: _, y2: O });
  return T.createElement(
    Qe,
    { className: be("recharts-reference-line", l) },
    GY(o, A),
    Ct.renderCallByParent(e, MY({ x1: h, y1: x, x2: _, y2: O }))
  );
}
Qm.displayName = "ReferenceLine";
Qm.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
};
function ru(e) {
  "@babel/helpers - typeof";
  return (
    (ru =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ru(e)
  );
}
function Mv() {
  return (
    (Mv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mv.apply(this, arguments)
  );
}
function vx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function yx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vx(Object(n), !0).forEach(function (r) {
          YY(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function YY(e, t, n) {
  return (
    (t = QY(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function QY(e) {
  var t = ZY(e, "string");
  return ru(t) == "symbol" ? t : String(t);
}
function ZY(e, t) {
  if (ru(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ru(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var JY = function (t) {
  var n = t.x,
    r = t.y,
    i = t.xAxis,
    a = t.yAxis,
    o = Ym({ x: i.scale, y: a.scale }),
    l = o.apply({ x: n, y: r }, { bandAware: !0 });
  return Xn(t, "discard") && !o.isInRange(l) ? null : l;
};
function Eu(e) {
  var t = e.x,
    n = e.y,
    r = e.r,
    i = e.alwaysShow,
    a = e.clipPathId,
    o = ot(t),
    l = ot(n);
  if (
    (Ai(
      i === void 0,
      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
    ),
    !o || !l)
  )
    return null;
  var u = JY(e);
  if (!u) return null;
  var s = u.x,
    f = u.y,
    c = e.shape,
    d = e.className,
    p = Xn(e, "hidden") ? "url(#".concat(a, ")") : void 0,
    m = yx(yx({ clipPath: p }, ve(e, !0)), {}, { cx: s, cy: f });
  return T.createElement(
    Qe,
    { className: be("recharts-reference-dot", d) },
    Eu.renderDot(c, m),
    Ct.renderCallByParent(e, {
      x: s - r,
      y: f - r,
      width: 2 * r,
      height: 2 * r,
    })
  );
}
Eu.displayName = "ReferenceDot";
Eu.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
};
Eu.renderDot = function (e, t) {
  var n;
  return (
    T.isValidElement(e)
      ? (n = T.cloneElement(e, t))
      : he(e)
      ? (n = e(t))
      : (n = T.createElement(
          Xm,
          Mv({}, t, {
            cx: t.cx,
            cy: t.cy,
            className: "recharts-reference-dot-dot",
          })
        )),
    n
  );
};
function iu(e) {
  "@babel/helpers - typeof";
  return (
    (iu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    iu(e)
  );
}
function Nv() {
  return (
    (Nv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nv.apply(this, arguments)
  );
}
function mx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function gx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mx(Object(n), !0).forEach(function (r) {
          eQ(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : mx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function eQ(e, t, n) {
  return (
    (t = tQ(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tQ(e) {
  var t = nQ(e, "string");
  return iu(t) == "symbol" ? t : String(t);
}
function nQ(e, t) {
  if (iu(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (iu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rQ = function (t, n, r, i, a) {
  var o = a.x1,
    l = a.x2,
    u = a.y1,
    s = a.y2,
    f = a.xAxis,
    c = a.yAxis;
  if (!f || !c) return null;
  var d = Ym({ x: f.scale, y: c.scale }),
    p = {
      x: t ? d.x.apply(o, { position: "start" }) : d.x.rangeMin,
      y: r ? d.y.apply(u, { position: "start" }) : d.y.rangeMin,
    },
    m = {
      x: n ? d.x.apply(l, { position: "end" }) : d.x.rangeMax,
      y: i ? d.y.apply(s, { position: "end" }) : d.y.rangeMax,
    };
  return Xn(a, "discard") && (!d.isInRange(p) || !d.isInRange(m))
    ? null
    : jA(p, m);
};
function Au(e) {
  var t = e.x1,
    n = e.x2,
    r = e.y1,
    i = e.y2,
    a = e.className,
    o = e.alwaysShow,
    l = e.clipPathId;
  Ai(
    o === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
  );
  var u = ot(t),
    s = ot(n),
    f = ot(r),
    c = ot(i),
    d = e.shape;
  if (!u && !s && !f && !c && !d) return null;
  var p = rQ(u, s, f, c, e);
  if (!p && !d) return null;
  var m = Xn(e, "hidden") ? "url(#".concat(l, ")") : void 0;
  return T.createElement(
    Qe,
    { className: be("recharts-reference-area", a) },
    Au.renderRect(d, gx(gx({ clipPath: m }, ve(e, !0)), p)),
    Ct.renderCallByParent(e, p)
  );
}
Au.displayName = "ReferenceArea";
Au.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
};
Au.renderRect = function (e, t) {
  var n;
  return (
    T.isValidElement(e)
      ? (n = T.cloneElement(e, t))
      : he(e)
      ? (n = e(t))
      : (n = T.createElement(
          Gm,
          Nv({}, t, { className: "recharts-reference-area-rect" })
        )),
    n
  );
};
function WA(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function iQ(e, t, n) {
  var r = { width: e.width + t.width, height: e.height + t.height };
  return IY(r, n);
}
function aQ(e, t, n) {
  var r = n === "width",
    i = e.x,
    a = e.y,
    o = e.width,
    l = e.height;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + l }
    : { start: r ? i + o : a + l, end: r ? i : a };
}
function Wc(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function oQ(e, t) {
  return WA(e, t + 1);
}
function lQ(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      o = t.start,
      l = t.end,
      u = 0,
      s = 1,
      f = o,
      c = function () {
        var m = r == null ? void 0 : r[u];
        if (m === void 0) return { v: WA(r, s) };
        var v = u,
          b,
          g = function () {
            return b === void 0 && (b = n(m, v)), b;
          },
          y = m.coordinate,
          w = u === 0 || Wc(e, y, g, f, l);
        w || ((u = 0), (f = o), (s += 1)),
          w && ((f = y + e * (g() / 2 + i)), (u += s));
      },
      d;
    s <= a.length;

  )
    if (((d = c()), d)) return d.v;
  return [];
}
function au(e) {
  "@babel/helpers - typeof";
  return (
    (au =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    au(e)
  );
}
function bx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bx(Object(n), !0).forEach(function (r) {
          uQ(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : bx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function uQ(e, t, n) {
  return (
    (t = sQ(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function sQ(e) {
  var t = cQ(e, "string");
  return au(t) == "symbol" ? t : String(t);
}
function cQ(e, t) {
  if (au(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (au(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fQ(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      o = a.length,
      l = t.start,
      u = t.end,
      s = function (d) {
        var p = a[d],
          m,
          v = function () {
            return m === void 0 && (m = n(p, d)), m;
          };
        if (d === o - 1) {
          var b = e * (p.coordinate + (e * v()) / 2 - u);
          a[d] = p = Tt(
            Tt({}, p),
            {},
            { tickCoord: b > 0 ? p.coordinate - b * e : p.coordinate }
          );
        } else a[d] = p = Tt(Tt({}, p), {}, { tickCoord: p.coordinate });
        var g = Wc(e, p.tickCoord, v, l, u);
        g &&
          ((u = p.tickCoord - e * (v() / 2 + i)),
          (a[d] = Tt(Tt({}, p), {}, { isShow: !0 })));
      },
      f = o - 1;
    f >= 0;
    f--
  )
    s(f);
  return a;
}
function dQ(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    l = o.length,
    u = t.start,
    s = t.end;
  if (a) {
    var f = r[l - 1],
      c = n(f, l - 1),
      d = e * (f.coordinate + (e * c) / 2 - s);
    o[l - 1] = f = Tt(
      Tt({}, f),
      {},
      { tickCoord: d > 0 ? f.coordinate - d * e : f.coordinate }
    );
    var p = Wc(
      e,
      f.tickCoord,
      function () {
        return c;
      },
      u,
      s
    );
    p &&
      ((s = f.tickCoord - e * (c / 2 + i)),
      (o[l - 1] = Tt(Tt({}, f), {}, { isShow: !0 })));
  }
  for (
    var m = a ? l - 1 : l,
      v = function (y) {
        var w = o[y],
          h,
          x = function () {
            return h === void 0 && (h = n(w, y)), h;
          };
        if (y === 0) {
          var S = e * (w.coordinate - (e * x()) / 2 - u);
          o[y] = w = Tt(
            Tt({}, w),
            {},
            { tickCoord: S < 0 ? w.coordinate - S * e : w.coordinate }
          );
        } else o[y] = w = Tt(Tt({}, w), {}, { tickCoord: w.coordinate });
        var _ = Wc(e, w.tickCoord, x, u, s);
        _ &&
          ((u = w.tickCoord + e * (x() / 2 + i)),
          (o[y] = Tt(Tt({}, w), {}, { isShow: !0 })));
      },
      b = 0;
    b < m;
    b++
  )
    v(b);
  return o;
}
function pQ(e, t, n) {
  var r = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    l = e.orientation,
    u = e.interval,
    s = e.tickFormatter,
    f = e.unit,
    c = e.angle;
  if (!i || !i.length || !r) return [];
  if (q(u) || cr.isSsr) return oQ(i, typeof u == "number" && q(u) ? u : 0);
  var d = [],
    p = l === "top" || l === "bottom" ? "width" : "height",
    m =
      f && p === "width"
        ? Jo(f, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    v = function (w, h) {
      var x = he(s) ? s(w.value, h) : w.value;
      return p === "width"
        ? iQ(Jo(x, { fontSize: t, letterSpacing: n }), m, c)
        : Jo(x, { fontSize: t, letterSpacing: n })[p];
    },
    b = i.length >= 2 ? In(i[1].coordinate - i[0].coordinate) : 1,
    g = aQ(a, b, p);
  return u === "equidistantPreserveStart"
    ? lQ(b, g, v, i, o)
    : (u === "preserveStart" || u === "preserveStartEnd"
        ? (d = dQ(b, g, v, i, o, u === "preserveStartEnd"))
        : (d = fQ(b, g, v, i, o)),
      d.filter(function (y) {
        return y.isShow;
      }));
}
var hQ = ["viewBox"],
  vQ = ["viewBox"],
  yQ = ["ticks"];
function Ha(e) {
  "@babel/helpers - typeof";
  return (
    (Ha =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ha(e)
  );
}
function da() {
  return (
    (da = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    da.apply(this, arguments)
  );
}
function wx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wx(Object(n), !0).forEach(function (r) {
          Zm(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : wx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function wp(e, t) {
  if (e == null) return {};
  var n = mQ(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function mQ(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function gQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xx(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, KA(r.key), r);
  }
}
function bQ(e, t, n) {
  return (
    t && xx(e.prototype, t),
    n && xx(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function wQ(e, t, n) {
  return (
    (t = Hc(t)),
    xQ(
      e,
      HA() ? Reflect.construct(t, n || [], Hc(e).constructor) : t.apply(e, n)
    )
  );
}
function xQ(e, t) {
  if (t && (Ha(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return SQ(e);
}
function SQ(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function HA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (HA = function () {
    return !!e;
  })();
}
function Hc(e) {
  return (
    (Hc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Hc(e)
  );
}
function _Q(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Iv(e, t);
}
function Iv(e, t) {
  return (
    (Iv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Iv(e, t)
  );
}
function Zm(e, t, n) {
  return (
    (t = KA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function KA(e) {
  var t = OQ(e, "string");
  return Ha(t) == "symbol" ? t : String(t);
}
function OQ(e, t) {
  if (Ha(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ha(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sd = (function (e) {
  _Q(t, e);
  function t(n) {
    var r;
    return (
      gQ(this, t),
      (r = wQ(this, t, [n])),
      (r.state = { fontSize: "", letterSpacing: "" }),
      r
    );
  }
  return (
    bQ(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (r, i) {
            var a = r.viewBox,
              o = wp(r, hQ),
              l = this.props,
              u = l.viewBox,
              s = wp(l, vQ);
            return !wa(a, u) || !wa(o, s) || !wa(i, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var r = this.layerReference;
            if (r) {
              var i = r.getElementsByClassName(
                "recharts-cartesian-axis-tick-value"
              )[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (r) {
            var i = this.props,
              a = i.x,
              o = i.y,
              l = i.width,
              u = i.height,
              s = i.orientation,
              f = i.tickSize,
              c = i.mirror,
              d = i.tickMargin,
              p,
              m,
              v,
              b,
              g,
              y,
              w = c ? -1 : 1,
              h = r.tickSize || f,
              x = q(r.tickCoord) ? r.tickCoord : r.coordinate;
            switch (s) {
              case "top":
                (p = m = r.coordinate),
                  (b = o + +!c * u),
                  (v = b - w * h),
                  (y = v - w * d),
                  (g = x);
                break;
              case "left":
                (v = b = r.coordinate),
                  (m = a + +!c * l),
                  (p = m - w * h),
                  (g = p - w * d),
                  (y = x);
                break;
              case "right":
                (v = b = r.coordinate),
                  (m = a + +c * l),
                  (p = m + w * h),
                  (g = p + w * d),
                  (y = x);
                break;
              default:
                (p = m = r.coordinate),
                  (b = o + +c * u),
                  (v = b + w * h),
                  (y = v + w * d),
                  (g = x);
                break;
            }
            return { line: { x1: p, y1: v, x2: m, y2: b }, tick: { x: g, y } };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var r = this.props,
              i = r.orientation,
              a = r.mirror,
              o;
            switch (i) {
              case "left":
                o = a ? "start" : "end";
                break;
              case "right":
                o = a ? "end" : "start";
                break;
              default:
                o = "middle";
                break;
            }
            return o;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var r = this.props,
              i = r.orientation,
              a = r.mirror,
              o = "end";
            switch (i) {
              case "left":
              case "right":
                o = "middle";
                break;
              case "top":
                o = a ? "start" : "end";
                break;
              default:
                o = a ? "end" : "start";
                break;
            }
            return o;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var r = this.props,
              i = r.x,
              a = r.y,
              o = r.width,
              l = r.height,
              u = r.orientation,
              s = r.mirror,
              f = r.axisLine,
              c = Mt(
                Mt(Mt({}, ve(this.props, !1)), ve(f, !1)),
                {},
                { fill: "none" }
              );
            if (u === "top" || u === "bottom") {
              var d = +((u === "top" && !s) || (u === "bottom" && s));
              c = Mt(
                Mt({}, c),
                {},
                { x1: i, y1: a + d * l, x2: i + o, y2: a + d * l }
              );
            } else {
              var p = +((u === "left" && !s) || (u === "right" && s));
              c = Mt(
                Mt({}, c),
                {},
                { x1: i + p * o, y1: a, x2: i + p * o, y2: a + l }
              );
            }
            return T.createElement(
              "line",
              da({}, c, {
                className: be(
                  "recharts-cartesian-axis-line",
                  mn(f, "className")
                ),
              })
            );
          },
        },
        {
          key: "renderTicks",
          value: function (r, i, a) {
            var o = this,
              l = this.props,
              u = l.tickLine,
              s = l.stroke,
              f = l.tick,
              c = l.tickFormatter,
              d = l.unit,
              p = pQ(Mt(Mt({}, this.props), {}, { ticks: r }), i, a),
              m = this.getTickTextAnchor(),
              v = this.getTickVerticalAnchor(),
              b = ve(this.props, !1),
              g = ve(f, !1),
              y = Mt(Mt({}, b), {}, { fill: "none" }, ve(u, !1)),
              w = p.map(function (h, x) {
                var S = o.getTickLineCoord(h),
                  _ = S.line,
                  O = S.tick,
                  C = Mt(
                    Mt(
                      Mt(
                        Mt({ textAnchor: m, verticalAnchor: v }, b),
                        {},
                        { stroke: "none", fill: s },
                        g
                      ),
                      O
                    ),
                    {},
                    {
                      index: x,
                      payload: h,
                      visibleTicksCount: p.length,
                      tickFormatter: c,
                    }
                  );
                return T.createElement(
                  Qe,
                  da(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(h.value, "-")
                        .concat(h.coordinate, "-")
                        .concat(h.tickCoord),
                    },
                    nc(o.props, h, x)
                  ),
                  u &&
                    T.createElement(
                      "line",
                      da({}, y, _, {
                        className: be(
                          "recharts-cartesian-axis-tick-line",
                          mn(u, "className")
                        ),
                      })
                    ),
                  f &&
                    t.renderTickItem(
                      f,
                      C,
                      "".concat(he(c) ? c(h.value, x) : h.value).concat(d || "")
                    )
                );
              });
            return T.createElement(
              "g",
              { className: "recharts-cartesian-axis-ticks" },
              w
            );
          },
        },
        {
          key: "render",
          value: function () {
            var r = this,
              i = this.props,
              a = i.axisLine,
              o = i.width,
              l = i.height,
              u = i.ticksGenerator,
              s = i.className,
              f = i.hide;
            if (f) return null;
            var c = this.props,
              d = c.ticks,
              p = wp(c, yQ),
              m = d;
            return (
              he(u) && (m = d && d.length > 0 ? u(this.props) : u(p)),
              o <= 0 || l <= 0 || !m || !m.length
                ? null
                : T.createElement(
                    Qe,
                    {
                      className: be("recharts-cartesian-axis", s),
                      ref: function (b) {
                        r.layerReference = b;
                      },
                    },
                    a && this.renderAxisLine(),
                    this.renderTicks(
                      m,
                      this.state.fontSize,
                      this.state.letterSpacing
                    ),
                    Ct.renderCallByParent(this.props)
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (r, i, a) {
            var o;
            return (
              T.isValidElement(r)
                ? (o = T.cloneElement(r, i))
                : he(r)
                ? (o = r(i))
                : (o = T.createElement(
                    yc,
                    da({}, i, {
                      className: "recharts-cartesian-axis-tick-value",
                    }),
                    a
                  )),
              o
            );
          },
        },
      ]
    ),
    t
  );
})(E.Component);
Zm(sd, "displayName", "CartesianAxis");
Zm(sd, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
var PQ = ["type", "layout", "connectNulls", "ref"];
function Ka(e) {
  "@babel/helpers - typeof";
  return (
    (Ka =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ka(e)
  );
}
function EQ(e, t) {
  if (e == null) return {};
  var n = AQ(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function AQ(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function rl() {
  return (
    (rl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rl.apply(this, arguments)
  );
}
function Sx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sx(Object(n), !0).forEach(function (r) {
          jn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Sx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function qi(e) {
  return jQ(e) || CQ(e) || $Q(e) || TQ();
}
function TQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $Q(e, t) {
  if (e) {
    if (typeof e == "string") return Dv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Dv(e, t);
  }
}
function CQ(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function jQ(e) {
  if (Array.isArray(e)) return Dv(e);
}
function Dv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _x(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, qA(r.key), r);
  }
}
function MQ(e, t, n) {
  return (
    t && _x(e.prototype, t),
    n && _x(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function NQ(e, t, n) {
  return (
    (t = Kc(t)),
    IQ(
      e,
      VA() ? Reflect.construct(t, n || [], Kc(e).constructor) : t.apply(e, n)
    )
  );
}
function IQ(e, t) {
  if (t && (Ka(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Cr(e);
}
function VA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (VA = function () {
    return !!e;
  })();
}
function Kc(e) {
  return (
    (Kc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Kc(e)
  );
}
function Cr(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function DQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Rv(e, t);
}
function Rv(e, t) {
  return (
    (Rv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Rv(e, t)
  );
}
function jn(e, t, n) {
  return (
    (t = qA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function qA(e) {
  var t = RQ(e, "string");
  return Ka(t) == "symbol" ? t : String(t);
}
function RQ(e, t) {
  if (Ka(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ka(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tu = (function (e) {
  DQ(t, e);
  function t() {
    var n;
    kQ(this, t);
    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
      i[a] = arguments[a];
    return (
      (n = NQ(this, t, [].concat(i))),
      jn(Cr(n), "state", { isAnimationFinished: !0, totalLength: 0 }),
      jn(Cr(n), "generateSimpleStrokeDasharray", function (o, l) {
        return "".concat(l, "px ").concat(o - l, "px");
      }),
      jn(Cr(n), "getStrokeDasharray", function (o, l, u) {
        var s = u.reduce(function (g, y) {
          return g + y;
        });
        if (!s) return n.generateSimpleStrokeDasharray(l, o);
        for (
          var f = Math.floor(o / s), c = o % s, d = l - o, p = [], m = 0, v = 0;
          m < u.length;
          v += u[m], ++m
        )
          if (v + u[m] > c) {
            p = [].concat(qi(u.slice(0, m)), [c - v]);
            break;
          }
        var b = p.length % 2 === 0 ? [0, d] : [d];
        return []
          .concat(qi(t.repeat(u, f)), qi(p), b)
          .map(function (g) {
            return "".concat(g, "px");
          })
          .join(", ");
      }),
      jn(Cr(n), "id", bu("recharts-line-")),
      jn(Cr(n), "pathRef", function (o) {
        n.mainCurve = o;
      }),
      jn(Cr(n), "handleAnimationEnd", function () {
        n.setState({ isAnimationFinished: !0 }),
          n.props.onAnimationEnd && n.props.onAnimationEnd();
      }),
      jn(Cr(n), "handleAnimationStart", function () {
        n.setState({ isAnimationFinished: !1 }),
          n.props.onAnimationStart && n.props.onAnimationStart();
      }),
      n
    );
  }
  return (
    MQ(
      t,
      [
        {
          key: "componentDidMount",
          value: function () {
            if (this.props.isAnimationActive) {
              var r = this.getTotalLength();
              this.setState({ totalLength: r });
            }
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            if (this.props.isAnimationActive) {
              var r = this.getTotalLength();
              r !== this.state.totalLength && this.setState({ totalLength: r });
            }
          },
        },
        {
          key: "getTotalLength",
          value: function () {
            var r = this.mainCurve;
            try {
              return (r && r.getTotalLength && r.getTotalLength()) || 0;
            } catch {
              return 0;
            }
          },
        },
        {
          key: "renderErrorBar",
          value: function (r, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var a = this.props,
              o = a.points,
              l = a.xAxis,
              u = a.yAxis,
              s = a.layout,
              f = a.children,
              c = gn(f, Ou);
            if (!c) return null;
            var d = function (v, b) {
                return {
                  x: v.x,
                  y: v.y,
                  value: v.value,
                  errorVal: nn(v.payload, b),
                };
              },
              p = { clipPath: r ? "url(#clipPath-".concat(i, ")") : null };
            return T.createElement(
              Qe,
              p,
              c.map(function (m) {
                return T.cloneElement(m, {
                  key: "bar-".concat(m.props.dataKey),
                  data: o,
                  xAxis: l,
                  yAxis: u,
                  layout: s,
                  dataPointFormatter: d,
                });
              })
            );
          },
        },
        {
          key: "renderDots",
          value: function (r, i, a) {
            var o = this.props.isAnimationActive;
            if (o && !this.state.isAnimationFinished) return null;
            var l = this.props,
              u = l.dot,
              s = l.points,
              f = l.dataKey,
              c = ve(this.props, !1),
              d = ve(u, !0),
              p = s.map(function (v, b) {
                var g = Gt(
                  Gt(Gt({ key: "dot-".concat(b), r: 3 }, c), d),
                  {},
                  {
                    value: v.value,
                    dataKey: f,
                    cx: v.x,
                    cy: v.y,
                    index: b,
                    payload: v.payload,
                  }
                );
                return t.renderDotItem(u, g);
              }),
              m = {
                clipPath: r
                  ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")")
                  : null,
              };
            return T.createElement(
              Qe,
              rl({ className: "recharts-line-dots", key: "dots" }, m),
              p
            );
          },
        },
        {
          key: "renderCurveStatically",
          value: function (r, i, a, o) {
            var l = this.props,
              u = l.type,
              s = l.layout,
              f = l.connectNulls;
            l.ref;
            var c = EQ(l, PQ),
              d = Gt(
                Gt(
                  Gt({}, ve(c, !0)),
                  {},
                  {
                    fill: "none",
                    className: "recharts-line-curve",
                    clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
                    points: r,
                  },
                  o
                ),
                {},
                { type: u, layout: s, connectNulls: f }
              );
            return T.createElement(mv, rl({}, d, { pathRef: this.pathRef }));
          },
        },
        {
          key: "renderCurveWithAnimation",
          value: function (r, i) {
            var a = this,
              o = this.props,
              l = o.points,
              u = o.strokeDasharray,
              s = o.isAnimationActive,
              f = o.animationBegin,
              c = o.animationDuration,
              d = o.animationEasing,
              p = o.animationId,
              m = o.animateNewValues,
              v = o.width,
              b = o.height,
              g = this.state,
              y = g.prevPoints,
              w = g.totalLength;
            return T.createElement(
              wr,
              {
                begin: f,
                duration: c,
                isActive: s,
                easing: d,
                from: { t: 0 },
                to: { t: 1 },
                key: "line-".concat(p),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (h) {
                var x = h.t;
                if (y) {
                  var S = y.length / l.length,
                    _ = l.map(function ($, D) {
                      var N = Math.floor(D * S);
                      if (y[N]) {
                        var z = y[N],
                          R = Mn(z.x, $.x),
                          W = Mn(z.y, $.y);
                        return Gt(Gt({}, $), {}, { x: R(x), y: W(x) });
                      }
                      if (m) {
                        var j = Mn(v * 2, $.x),
                          B = Mn(b / 2, $.y);
                        return Gt(Gt({}, $), {}, { x: j(x), y: B(x) });
                      }
                      return Gt(Gt({}, $), {}, { x: $.x, y: $.y });
                    });
                  return a.renderCurveStatically(_, r, i);
                }
                var O = Mn(0, w),
                  C = O(x),
                  A;
                if (u) {
                  var k = ""
                    .concat(u)
                    .split(/[,\s]+/gim)
                    .map(function ($) {
                      return parseFloat($);
                    });
                  A = a.getStrokeDasharray(C, w, k);
                } else A = a.generateSimpleStrokeDasharray(w, C);
                return a.renderCurveStatically(l, r, i, { strokeDasharray: A });
              }
            );
          },
        },
        {
          key: "renderCurve",
          value: function (r, i) {
            var a = this.props,
              o = a.points,
              l = a.isAnimationActive,
              u = this.state,
              s = u.prevPoints,
              f = u.totalLength;
            return l && o && o.length && ((!s && f > 0) || !rd(s, o))
              ? this.renderCurveWithAnimation(r, i)
              : this.renderCurveStatically(o, r, i);
          },
        },
        {
          key: "render",
          value: function () {
            var r,
              i = this.props,
              a = i.hide,
              o = i.dot,
              l = i.points,
              u = i.className,
              s = i.xAxis,
              f = i.yAxis,
              c = i.top,
              d = i.left,
              p = i.width,
              m = i.height,
              v = i.isAnimationActive,
              b = i.id;
            if (a || !l || !l.length) return null;
            var g = this.state.isAnimationFinished,
              y = l.length === 1,
              w = be("recharts-line", u),
              h = s && s.allowDataOverflow,
              x = f && f.allowDataOverflow,
              S = h || x,
              _ = fe(b) ? this.id : b,
              O =
                (r = ve(o, !1)) !== null && r !== void 0
                  ? r
                  : { r: 3, strokeWidth: 2 },
              C = O.r,
              A = C === void 0 ? 3 : C,
              k = O.strokeWidth,
              $ = k === void 0 ? 2 : k,
              D = hR(o) ? o : {},
              N = D.clipDot,
              z = N === void 0 ? !0 : N,
              R = A * 2 + $;
            return T.createElement(
              Qe,
              { className: w },
              h || x
                ? T.createElement(
                    "defs",
                    null,
                    T.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(_) },
                      T.createElement("rect", {
                        x: h ? d : d - p / 2,
                        y: x ? c : c - m / 2,
                        width: h ? p : p * 2,
                        height: x ? m : m * 2,
                      })
                    ),
                    !z &&
                      T.createElement(
                        "clipPath",
                        { id: "clipPath-dots-".concat(_) },
                        T.createElement("rect", {
                          x: d - R / 2,
                          y: c - R / 2,
                          width: p + R,
                          height: m + R,
                        })
                      )
                  )
                : null,
              !y && this.renderCurve(S, _),
              this.renderErrorBar(S, _),
              (y || o) && this.renderDots(S, z, _),
              (!v || g) && Xr.renderCallByParent(this.props, l)
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (r, i) {
            return r.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: r.animationId,
                  curPoints: r.points,
                  prevPoints: i.curPoints,
                }
              : r.points !== i.curPoints
              ? { curPoints: r.points }
              : null;
          },
        },
        {
          key: "repeat",
          value: function (r, i) {
            for (
              var a = r.length % 2 !== 0 ? [].concat(qi(r), [0]) : r,
                o = [],
                l = 0;
              l < i;
              ++l
            )
              o = [].concat(qi(o), qi(a));
            return o;
          },
        },
        {
          key: "renderDotItem",
          value: function (r, i) {
            var a;
            if (T.isValidElement(r)) a = T.cloneElement(r, i);
            else if (he(r)) a = r(i);
            else {
              var o = be(
                "recharts-line-dot",
                typeof r != "boolean" ? r.className : ""
              );
              a = T.createElement(Xm, rl({}, i, { className: o }));
            }
            return a;
          },
        },
      ]
    ),
    t
  );
})(E.PureComponent);
jn(Tu, "displayName", "Line");
jn(Tu, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !cr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1,
});
jn(Tu, "getComposedData", function (e) {
  var t = e.props,
    n = e.xAxis,
    r = e.yAxis,
    i = e.xAxisTicks,
    a = e.yAxisTicks,
    o = e.dataKey,
    l = e.bandSize,
    u = e.displayedData,
    s = e.offset,
    f = t.layout,
    c = u.map(function (d, p) {
      var m = nn(d, o);
      return f === "horizontal"
        ? {
            x: aw({ axis: n, ticks: i, bandSize: l, entry: d, index: p }),
            y: fe(m) ? null : r.scale(m),
            value: m,
            payload: d,
          }
        : {
            x: fe(m) ? null : n.scale(m),
            y: aw({ axis: r, ticks: a, bandSize: l, entry: d, index: p }),
            value: m,
            payload: d,
          };
    });
  return Gt({ points: c, layout: f }, s);
});
function Lv() {
  return (
    (Lv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Lv.apply(this, arguments)
  );
}
var Jm = function (t) {
  var n = t.xAxisId,
    r = FA(),
    i = UA(),
    a = BA(n);
  return a == null
    ? null
    : T.createElement(
        sd,
        Lv({}, a, {
          className: be(
            "recharts-".concat(a.axisType, " ").concat(a.axisType),
            a.className
          ),
          viewBox: { x: 0, y: 0, width: r, height: i },
          ticksGenerator: function (l) {
            return Oi(l, !0);
          },
        })
      );
};
Jm.displayName = "XAxis";
Jm.defaultProps = {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
};
function Bv() {
  return (
    (Bv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bv.apply(this, arguments)
  );
}
var eg = function (t) {
  var n = t.yAxisId,
    r = FA(),
    i = UA(),
    a = zA(n);
  return a == null
    ? null
    : T.createElement(
        sd,
        Bv({}, a, {
          className: be(
            "recharts-".concat(a.axisType, " ").concat(a.axisType),
            a.className
          ),
          viewBox: { x: 0, y: 0, width: r, height: i },
          ticksGenerator: function (l) {
            return Oi(l, !0);
          },
        })
      );
};
eg.displayName = "YAxis";
eg.defaultProps = {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
};
function Ox(e) {
  return FQ(e) || zQ(e) || BQ(e) || LQ();
}
function LQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BQ(e, t) {
  if (e) {
    if (typeof e == "string") return zv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return zv(e, t);
  }
}
function zQ(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function FQ(e) {
  if (Array.isArray(e)) return zv(e);
}
function zv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Fv = function (t, n, r, i, a) {
    var o = gn(t, Qm),
      l = gn(t, Eu),
      u = [].concat(Ox(o), Ox(l)),
      s = gn(t, Au),
      f = "".concat(i, "Id"),
      c = i[0],
      d = n;
    if (
      (u.length &&
        (d = u.reduce(function (v, b) {
          if (
            b.props[f] === r &&
            Xn(b.props, "extendDomain") &&
            q(b.props[c])
          ) {
            var g = b.props[c];
            return [Math.min(v[0], g), Math.max(v[1], g)];
          }
          return v;
        }, d)),
      s.length)
    ) {
      var p = "".concat(c, "1"),
        m = "".concat(c, "2");
      d = s.reduce(function (v, b) {
        if (
          b.props[f] === r &&
          Xn(b.props, "extendDomain") &&
          q(b.props[p]) &&
          q(b.props[m])
        ) {
          var g = b.props[p],
            y = b.props[m];
          return [Math.min(v[0], g, y), Math.max(v[1], g, y)];
        }
        return v;
      }, d);
    }
    return (
      a &&
        a.length &&
        (d = a.reduce(function (v, b) {
          return q(b) ? [Math.min(v[0], b), Math.max(v[1], b)] : v;
        }, d)),
      d
    );
  },
  GA = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    n = "~";
  function r() {}
  Object.create &&
    ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1));
  function i(u, s, f) {
    (this.fn = u), (this.context = s), (this.once = f || !1);
  }
  function a(u, s, f, c, d) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var p = new i(f, c || u, d),
      m = n ? n + s : s;
    return (
      u._events[m]
        ? u._events[m].fn
          ? (u._events[m] = [u._events[m], p])
          : u._events[m].push(p)
        : ((u._events[m] = p), u._eventsCount++),
      u
    );
  }
  function o(u, s) {
    --u._eventsCount === 0 ? (u._events = new r()) : delete u._events[s];
  }
  function l() {
    (this._events = new r()), (this._eventsCount = 0);
  }
  (l.prototype.eventNames = function () {
    var s = [],
      f,
      c;
    if (this._eventsCount === 0) return s;
    for (c in (f = this._events)) t.call(f, c) && s.push(n ? c.slice(1) : c);
    return Object.getOwnPropertySymbols
      ? s.concat(Object.getOwnPropertySymbols(f))
      : s;
  }),
    (l.prototype.listeners = function (s) {
      var f = n ? n + s : s,
        c = this._events[f];
      if (!c) return [];
      if (c.fn) return [c.fn];
      for (var d = 0, p = c.length, m = new Array(p); d < p; d++)
        m[d] = c[d].fn;
      return m;
    }),
    (l.prototype.listenerCount = function (s) {
      var f = n ? n + s : s,
        c = this._events[f];
      return c ? (c.fn ? 1 : c.length) : 0;
    }),
    (l.prototype.emit = function (s, f, c, d, p, m) {
      var v = n ? n + s : s;
      if (!this._events[v]) return !1;
      var b = this._events[v],
        g = arguments.length,
        y,
        w;
      if (b.fn) {
        switch ((b.once && this.removeListener(s, b.fn, void 0, !0), g)) {
          case 1:
            return b.fn.call(b.context), !0;
          case 2:
            return b.fn.call(b.context, f), !0;
          case 3:
            return b.fn.call(b.context, f, c), !0;
          case 4:
            return b.fn.call(b.context, f, c, d), !0;
          case 5:
            return b.fn.call(b.context, f, c, d, p), !0;
          case 6:
            return b.fn.call(b.context, f, c, d, p, m), !0;
        }
        for (w = 1, y = new Array(g - 1); w < g; w++) y[w - 1] = arguments[w];
        b.fn.apply(b.context, y);
      } else {
        var h = b.length,
          x;
        for (w = 0; w < h; w++)
          switch (
            (b[w].once && this.removeListener(s, b[w].fn, void 0, !0), g)
          ) {
            case 1:
              b[w].fn.call(b[w].context);
              break;
            case 2:
              b[w].fn.call(b[w].context, f);
              break;
            case 3:
              b[w].fn.call(b[w].context, f, c);
              break;
            case 4:
              b[w].fn.call(b[w].context, f, c, d);
              break;
            default:
              if (!y)
                for (x = 1, y = new Array(g - 1); x < g; x++)
                  y[x - 1] = arguments[x];
              b[w].fn.apply(b[w].context, y);
          }
      }
      return !0;
    }),
    (l.prototype.on = function (s, f, c) {
      return a(this, s, f, c, !1);
    }),
    (l.prototype.once = function (s, f, c) {
      return a(this, s, f, c, !0);
    }),
    (l.prototype.removeListener = function (s, f, c, d) {
      var p = n ? n + s : s;
      if (!this._events[p]) return this;
      if (!f) return o(this, p), this;
      var m = this._events[p];
      if (m.fn)
        m.fn === f && (!d || m.once) && (!c || m.context === c) && o(this, p);
      else {
        for (var v = 0, b = [], g = m.length; v < g; v++)
          (m[v].fn !== f || (d && !m[v].once) || (c && m[v].context !== c)) &&
            b.push(m[v]);
        b.length ? (this._events[p] = b.length === 1 ? b[0] : b) : o(this, p);
      }
      return this;
    }),
    (l.prototype.removeAllListeners = function (s) {
      var f;
      return (
        s
          ? ((f = n ? n + s : s), this._events[f] && o(this, f))
          : ((this._events = new r()), (this._eventsCount = 0)),
        this
      );
    }),
    (l.prototype.off = l.prototype.removeListener),
    (l.prototype.addListener = l.prototype.on),
    (l.prefixed = n),
    (l.EventEmitter = l),
    (e.exports = l);
})(GA);
var UQ = GA.exports;
const WQ = Te(UQ);
var xp = new WQ(),
  Sp = "recharts.syncMouseEvents";
function ou(e) {
  "@babel/helpers - typeof";
  return (
    (ou =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ou(e)
  );
}
function HQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Px(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, XA(r.key), r);
  }
}
function KQ(e, t, n) {
  return (
    t && Px(e.prototype, t),
    n && Px(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _p(e, t, n) {
  return (
    (t = XA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function XA(e) {
  var t = VQ(e, "string");
  return ou(t) == "symbol" ? t : String(t);
}
function VQ(e, t) {
  if (ou(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ou(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qQ = (function () {
  function e() {
    HQ(this, e),
      _p(this, "activeIndex", 0),
      _p(this, "coordinateList", []),
      _p(this, "layout", "horizontal");
  }
  return (
    KQ(e, [
      {
        key: "setDetails",
        value: function (n) {
          var r,
            i = n.coordinateList,
            a = i === void 0 ? null : i,
            o = n.container,
            l = o === void 0 ? null : o,
            u = n.layout,
            s = u === void 0 ? null : u,
            f = n.offset,
            c = f === void 0 ? null : f,
            d = n.mouseHandlerCallback,
            p = d === void 0 ? null : d;
          (this.coordinateList =
            (r = a ?? this.coordinateList) !== null && r !== void 0 ? r : []),
            (this.container = l ?? this.container),
            (this.layout = s ?? this.layout),
            (this.offset = c ?? this.offset),
            (this.mouseHandlerCallback = p ?? this.mouseHandlerCallback),
            (this.activeIndex = Math.min(
              Math.max(this.activeIndex, 0),
              this.coordinateList.length - 1
            ));
        },
      },
      {
        key: "focus",
        value: function () {
          this.spoofMouse();
        },
      },
      {
        key: "keyboardEvent",
        value: function (n) {
          if (this.coordinateList.length !== 0)
            switch (n.key) {
              case "ArrowRight": {
                if (this.layout !== "horizontal") return;
                (this.activeIndex = Math.min(
                  this.activeIndex + 1,
                  this.coordinateList.length - 1
                )),
                  this.spoofMouse();
                break;
              }
              case "ArrowLeft": {
                if (this.layout !== "horizontal") return;
                (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                  this.spoofMouse();
                break;
              }
            }
        },
      },
      {
        key: "setIndex",
        value: function (n) {
          this.activeIndex = n;
        },
      },
      {
        key: "spoofMouse",
        value: function () {
          var n, r;
          if (
            this.layout === "horizontal" &&
            this.coordinateList.length !== 0
          ) {
            var i = this.container.getBoundingClientRect(),
              a = i.x,
              o = i.y,
              l = i.height,
              u = this.coordinateList[this.activeIndex].coordinate,
              s =
                ((n = window) === null || n === void 0 ? void 0 : n.scrollX) ||
                0,
              f =
                ((r = window) === null || r === void 0 ? void 0 : r.scrollY) ||
                0,
              c = a + u + s,
              d = o + this.offset.top + l / 2 + f;
            this.mouseHandlerCallback({ pageX: c, pageY: d });
          }
        },
      },
    ]),
    e
  );
})();
function GQ(e, t, n) {
  if (n === "number" && t === !0 && Array.isArray(e)) {
    var r = e == null ? void 0 : e[0],
      i = e == null ? void 0 : e[1];
    if (r && i && q(r) && q(i)) return !0;
  }
  return !1;
}
function XQ(e, t, n, r) {
  var i = r / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : n.left + 0.5,
    y: e === "horizontal" ? n.top + 0.5 : t.y - i,
    width: e === "horizontal" ? r : n.width - 1,
    height: e === "horizontal" ? n.height - 1 : r,
  };
}
function YA(e) {
  var t = e.cx,
    n = e.cy,
    r = e.radius,
    i = e.startAngle,
    a = e.endAngle,
    o = wt(t, n, r, i),
    l = wt(t, n, r, a);
  return {
    points: [o, l],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function YQ(e, t, n) {
  var r, i, a, o;
  if (e === "horizontal")
    (r = t.x), (a = r), (i = n.top), (o = n.top + n.height);
  else if (e === "vertical")
    (i = t.y), (o = i), (r = n.left), (a = n.left + n.width);
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var l = t.cx,
        u = t.cy,
        s = t.innerRadius,
        f = t.outerRadius,
        c = t.angle,
        d = wt(l, u, s, c),
        p = wt(l, u, f, c);
      (r = d.x), (i = d.y), (a = p.x), (o = p.y);
    } else return YA(t);
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
function lu(e) {
  "@babel/helpers - typeof";
  return (
    (lu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    lu(e)
  );
}
function Ex(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ex(Object(n), !0).forEach(function (r) {
          QQ(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ex(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function QQ(e, t, n) {
  return (
    (t = ZQ(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ZQ(e) {
  var t = JQ(e, "string");
  return lu(t) == "symbol" ? t : String(t);
}
function JQ(e, t) {
  if (lu(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (lu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eZ(e) {
  var t = e.element,
    n = e.tooltipEventType,
    r = e.isActive,
    i = e.activeCoordinate,
    a = e.activePayload,
    o = e.offset,
    l = e.activeTooltipIndex,
    u = e.tooltipAxisBandSize,
    s = e.layout,
    f = e.chartName;
  if (
    !t ||
    !t.props.cursor ||
    !r ||
    !i ||
    (f !== "ScatterChart" && n !== "axis")
  )
    return null;
  var c,
    d = mv;
  if (f === "ScatterChart") (c = i), (d = hG);
  else if (f === "BarChart") (c = XQ(s, i, o, u)), (d = Gm);
  else if (s === "radial") {
    var p = YA(i),
      m = p.cx,
      v = p.cy,
      b = p.radius,
      g = p.startAngle,
      y = p.endAngle;
    (c = {
      cx: m,
      cy: v,
      startAngle: g,
      endAngle: y,
      innerRadius: b,
      outerRadius: b,
    }),
      (d = fA);
  } else (c = { points: YQ(s, i, o) }), (d = mv);
  var w = ss(
    ss(
      ss(ss({ stroke: "#ccc", pointerEvents: "none" }, o), c),
      ve(t.props.cursor, !1)
    ),
    {},
    {
      payload: a,
      payloadIndex: l,
      className: be("recharts-tooltip-cursor", t.props.cursor.className),
    }
  );
  return E.isValidElement(t.props.cursor)
    ? E.cloneElement(t.props.cursor, w)
    : E.createElement(d, w);
}
var tZ = ["item"],
  nZ = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function Va(e) {
  "@babel/helpers - typeof";
  return (
    (Va =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Va(e)
  );
}
function il() {
  return (
    (il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    il.apply(this, arguments)
  );
}
function Ax(e, t) {
  return aZ(e) || iZ(e, t) || ZA(e, t) || rZ();
}
function rZ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iZ(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function aZ(e) {
  if (Array.isArray(e)) return e;
}
function Tx(e, t) {
  if (e == null) return {};
  var n = oZ(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function oZ(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function lZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $x(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, JA(r.key), r);
  }
}
function uZ(e, t, n) {
  return (
    t && $x(e.prototype, t),
    n && $x(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function sZ(e, t, n) {
  return (
    (t = Vc(t)),
    cZ(
      e,
      QA() ? Reflect.construct(t, n || [], Vc(e).constructor) : t.apply(e, n)
    )
  );
}
function cZ(e, t) {
  if (t && (Va(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return ye(e);
}
function QA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (QA = function () {
    return !!e;
  })();
}
function Vc(e) {
  return (
    (Vc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Vc(e)
  );
}
function ye(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function fZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Uv(e, t);
}
function Uv(e, t) {
  return (
    (Uv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Uv(e, t)
  );
}
function qa(e) {
  return hZ(e) || pZ(e) || ZA(e) || dZ();
}
function dZ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZA(e, t) {
  if (e) {
    if (typeof e == "string") return Wv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Wv(e, t);
  }
}
function pZ(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function hZ(e) {
  if (Array.isArray(e)) return Wv(e);
}
function Wv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Cx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cx(Object(n), !0).forEach(function (r) {
          te(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Cx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function te(e, t, n) {
  return (
    (t = JA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function JA(e) {
  var t = vZ(e, "string");
  return Va(t) == "symbol" ? t : String(t);
}
function vZ(e, t) {
  if (Va(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Va(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yZ = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  mZ = { width: "100%", height: "100%" },
  eT = { x: 0, y: 0 };
function cs(e) {
  return e;
}
var gZ = function (t, n) {
    return n === "horizontal"
      ? t.x
      : n === "vertical"
      ? t.y
      : n === "centric"
      ? t.angle
      : t.radius;
  },
  bZ = function (t, n, r, i) {
    var a = n.find(function (f) {
      return f && f.index === r;
    });
    if (a) {
      if (t === "horizontal") return { x: a.coordinate, y: i.y };
      if (t === "vertical") return { x: i.x, y: a.coordinate };
      if (t === "centric") {
        var o = a.coordinate,
          l = i.radius;
        return L(
          L(L({}, i), wt(i.cx, i.cy, l, o)),
          {},
          { angle: o, radius: l }
        );
      }
      var u = a.coordinate,
        s = i.angle;
      return L(L(L({}, i), wt(i.cx, i.cy, u, s)), {}, { angle: s, radius: u });
    }
    return eT;
  },
  cd = function (t, n) {
    var r = n.graphicalItems,
      i = n.dataStartIndex,
      a = n.dataEndIndex,
      o = (r ?? []).reduce(function (l, u) {
        var s = u.props.data;
        return s && s.length ? [].concat(qa(l), qa(s)) : l;
      }, []);
    return o.length > 0
      ? o
      : t && t.length && q(i) && q(a)
      ? t.slice(i, a + 1)
      : [];
  };
function tT(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Hv = function (t, n, r, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      l = cd(n, t);
    return r < 0 || !a || !a.length || r >= l.length
      ? null
      : a.reduce(function (u, s) {
          var f,
            c = (f = s.props.data) !== null && f !== void 0 ? f : n;
          c &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            (c = c.slice(t.dataStartIndex, t.dataEndIndex + 1));
          var d;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var p = c === void 0 ? l : c;
            d = ec(p, o.dataKey, i);
          } else d = (c && c[r]) || l[r];
          return d ? [].concat(qa(u), [uA(s, d)]) : u;
        }, []);
  },
  jx = function (t, n, r, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = gZ(a, r),
      l = t.orderedTooltipTicks,
      u = t.tooltipAxis,
      s = t.tooltipTicks,
      f = lK(o, l, s, u);
    if (f >= 0 && s) {
      var c = s[f] && s[f].value,
        d = Hv(t, n, f, c),
        p = bZ(r, l, f, a);
      return {
        activeTooltipIndex: f,
        activeLabel: c,
        activePayload: d,
        activeCoordinate: p,
      };
    }
    return null;
  },
  wZ = function (t, n) {
    var r = n.axes,
      i = n.graphicalItems,
      a = n.axisType,
      o = n.axisIdKey,
      l = n.stackGroups,
      u = n.dataStartIndex,
      s = n.dataEndIndex,
      f = t.layout,
      c = t.children,
      d = t.stackOffset,
      p = oA(f, a);
    return r.reduce(function (m, v) {
      var b,
        g = v.props,
        y = g.type,
        w = g.dataKey,
        h = g.allowDataOverflow,
        x = g.allowDuplicatedCategory,
        S = g.scale,
        _ = g.ticks,
        O = g.includeHidden,
        C = v.props[o];
      if (m[C]) return m;
      var A = cd(t.data, {
          graphicalItems: i.filter(function (V) {
            return V.props[o] === C;
          }),
          dataStartIndex: u,
          dataEndIndex: s,
        }),
        k = A.length,
        $,
        D,
        N;
      GQ(v.props.domain, h, y) &&
        (($ = dv(v.props.domain, null, h)),
        p && (y === "number" || S !== "auto") && (N = tl(A, w, "category")));
      var z = tT(y);
      if (!$ || $.length === 0) {
        var R,
          W = (R = v.props.domain) !== null && R !== void 0 ? R : z;
        if (w) {
          if ((($ = tl(A, w, y)), y === "category" && p)) {
            var j = aR($);
            x && j
              ? ((D = $), ($ = Lc(0, k)))
              : x ||
                ($ = sw(W, $, v).reduce(function (V, oe) {
                  return V.indexOf(oe) >= 0 ? V : [].concat(qa(V), [oe]);
                }, []));
          } else if (y === "category")
            x
              ? ($ = $.filter(function (V) {
                  return V !== "" && !fe(V);
                }))
              : ($ = sw(W, $, v).reduce(function (V, oe) {
                  return V.indexOf(oe) >= 0 || oe === "" || fe(oe)
                    ? V
                    : [].concat(qa(V), [oe]);
                }, []));
          else if (y === "number") {
            var B = dK(
              A,
              i.filter(function (V) {
                return V.props[o] === C && (O || !V.props.hide);
              }),
              w,
              a,
              f
            );
            B && ($ = B);
          }
          p && (y === "number" || S !== "auto") && (N = tl(A, w, "category"));
        } else
          p
            ? ($ = Lc(0, k))
            : l && l[C] && l[C].hasStack && y === "number"
            ? ($ = d === "expand" ? [0, 1] : lA(l[C].stackGroups, u, s))
            : ($ = aA(
                A,
                i.filter(function (V) {
                  return V.props[o] === C && (O || !V.props.hide);
                }),
                y,
                f,
                !0
              ));
        if (y === "number") ($ = Fv(c, $, C, a, _)), W && ($ = dv(W, $, h));
        else if (y === "category" && W) {
          var K = W,
            Z = $.every(function (V) {
              return K.indexOf(V) >= 0;
            });
          Z && ($ = K);
        }
      }
      return L(
        L({}, m),
        {},
        te(
          {},
          C,
          L(
            L({}, v.props),
            {},
            {
              axisType: a,
              domain: $,
              categoricalDomain: N,
              duplicateDomain: D,
              originalDomain:
                (b = v.props.domain) !== null && b !== void 0 ? b : z,
              isCategorical: p,
              layout: f,
            }
          )
        )
      );
    }, {});
  },
  xZ = function (t, n) {
    var r = n.graphicalItems,
      i = n.Axis,
      a = n.axisType,
      o = n.axisIdKey,
      l = n.stackGroups,
      u = n.dataStartIndex,
      s = n.dataEndIndex,
      f = t.layout,
      c = t.children,
      d = cd(t.data, { graphicalItems: r, dataStartIndex: u, dataEndIndex: s }),
      p = d.length,
      m = oA(f, a),
      v = -1;
    return r.reduce(function (b, g) {
      var y = g.props[o],
        w = tT("number");
      if (!b[y]) {
        v++;
        var h;
        return (
          m
            ? (h = Lc(0, p))
            : l && l[y] && l[y].hasStack
            ? ((h = lA(l[y].stackGroups, u, s)), (h = Fv(c, h, y, a)))
            : ((h = dv(
                w,
                aA(
                  d,
                  r.filter(function (x) {
                    return x.props[o] === y && !x.props.hide;
                  }),
                  "number",
                  f
                ),
                i.defaultProps.allowDataOverflow
              )),
              (h = Fv(c, h, y, a))),
          L(
            L({}, b),
            {},
            te(
              {},
              y,
              L(
                L({ axisType: a }, i.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: mn(yZ, "".concat(a, ".").concat(v % 2), null),
                  domain: h,
                  originalDomain: w,
                  isCategorical: m,
                  layout: f,
                }
              )
            )
          )
        );
      }
      return b;
    }, {});
  },
  SZ = function (t, n) {
    var r = n.axisType,
      i = r === void 0 ? "xAxis" : r,
      a = n.AxisComp,
      o = n.graphicalItems,
      l = n.stackGroups,
      u = n.dataStartIndex,
      s = n.dataEndIndex,
      f = t.children,
      c = "".concat(i, "Id"),
      d = gn(f, a),
      p = {};
    return (
      d && d.length
        ? (p = wZ(t, {
            axes: d,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: l,
            dataStartIndex: u,
            dataEndIndex: s,
          }))
        : o &&
          o.length &&
          (p = xZ(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: l,
            dataStartIndex: u,
            dataEndIndex: s,
          })),
      p
    );
  },
  _Z = function (t) {
    var n = Yi(t),
      r = Oi(n, !1, !0);
    return {
      tooltipTicks: r,
      orderedTooltipTicks: xm(r, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: n,
      tooltipAxisBandSize: $c(n, r),
    };
  },
  kx = function (t) {
    var n = t.children,
      r = t.defaultShowTooltip,
      i = Qt(n, Ua),
      a = 0,
      o = 0;
    return (
      t.data && t.data.length !== 0 && (o = t.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex),
        i.props.endIndex >= 0 && (o = i.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!r,
      }
    );
  },
  OZ = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (n) {
          var r = sr(n && n.type);
          return r && r.indexOf("Bar") >= 0;
        });
  },
  Mx = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
      ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
      : t === "centric"
      ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
      : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  PZ = function (t, n) {
    var r = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      l = t.yAxisMap,
      u = l === void 0 ? {} : l,
      s = r.width,
      f = r.height,
      c = r.children,
      d = r.margin || {},
      p = Qt(c, Ua),
      m = Qt(c, Pl),
      v = Object.keys(u).reduce(
        function (x, S) {
          var _ = u[S],
            O = _.orientation;
          return !_.mirror && !_.hide
            ? L(L({}, x), {}, te({}, O, x[O] + _.width))
            : x;
        },
        { left: d.left || 0, right: d.right || 0 }
      ),
      b = Object.keys(o).reduce(
        function (x, S) {
          var _ = o[S],
            O = _.orientation;
          return !_.mirror && !_.hide
            ? L(L({}, x), {}, te({}, O, mn(x, "".concat(O)) + _.height))
            : x;
        },
        { top: d.top || 0, bottom: d.bottom || 0 }
      ),
      g = L(L({}, b), v),
      y = g.bottom;
    p && (g.bottom += p.props.height || Ua.defaultProps.height),
      m && n && (g = cK(g, i, r, n));
    var w = s - g.left - g.right,
      h = f - g.top - g.bottom;
    return L(
      L({ brushBottom: y }, g),
      {},
      { width: Math.max(w, 0), height: Math.max(h, 0) }
    );
  },
  EZ = function (t, n) {
    if (n === "xAxis") return t[n].width;
    if (n === "yAxis") return t[n].height;
  },
  AZ = function (t) {
    var n,
      r = t.chartName,
      i = t.GraphicalChild,
      a = t.defaultTooltipEventType,
      o = a === void 0 ? "axis" : a,
      l = t.validateTooltipEventTypes,
      u = l === void 0 ? ["axis"] : l,
      s = t.axisComponents,
      f = t.legendContent,
      c = t.formatAxisMap,
      d = t.defaultProps,
      p = function (b, g) {
        var y = g.graphicalItems,
          w = g.stackGroups,
          h = g.offset,
          x = g.updateId,
          S = g.dataStartIndex,
          _ = g.dataEndIndex,
          O = b.barSize,
          C = b.layout,
          A = b.barGap,
          k = b.barCategoryGap,
          $ = b.maxBarSize,
          D = Mx(C),
          N = D.numericAxisName,
          z = D.cateAxisName,
          R = OZ(y),
          W = [];
        return (
          y.forEach(function (j, B) {
            var K = cd(b.data, {
                graphicalItems: [j],
                dataStartIndex: S,
                dataEndIndex: _,
              }),
              Z = j.props,
              V = Z.dataKey,
              oe = Z.maxBarSize,
              ie = j.props["".concat(N, "Id")],
              De = j.props["".concat(z, "Id")],
              ut = {},
              qe = s.reduce(function (_t, zn) {
                var Wi = g["".concat(zn.axisType, "Map")],
                  fo = j.props["".concat(zn.axisType, "Id")];
                (Wi && Wi[fo]) || zn.axisType === "zAxis" || Ri(!1);
                var $u = Wi[fo];
                return L(
                  L({}, _t),
                  {},
                  te(
                    te({}, zn.axisType, $u),
                    "".concat(zn.axisType, "Ticks"),
                    Oi($u)
                  )
                );
              }, ut),
              vt = qe[z],
              G = qe["".concat(z, "Ticks")],
              ne = w && w[ie] && w[ie].hasStack && OK(j, w[ie].stackGroups),
              ue = sr(j.type).indexOf("Bar") >= 0,
              F = $c(vt, G),
              Be = [],
              pe =
                R && uK({ barSize: O, stackGroups: w, totalSize: EZ(qe, z) });
            if (ue) {
              var je,
                ze,
                yt = fe(oe) ? $ : oe,
                zt =
                  (je =
                    (ze = $c(vt, G, !0)) !== null && ze !== void 0
                      ? ze
                      : yt) !== null && je !== void 0
                    ? je
                    : 0;
              (Be = sK({
                barGap: A,
                barCategoryGap: k,
                bandSize: zt !== F ? zt : F,
                sizeList: pe[De],
                maxBarSize: yt,
              })),
                zt !== F &&
                  (Be = Be.map(function (_t) {
                    return L(
                      L({}, _t),
                      {},
                      {
                        position: L(
                          L({}, _t.position),
                          {},
                          { offset: _t.position.offset - zt / 2 }
                        ),
                      }
                    );
                  }));
            }
            var Ar = j && j.type && j.type.getComposedData;
            Ar &&
              W.push({
                props: L(
                  L(
                    {},
                    Ar(
                      L(
                        L({}, qe),
                        {},
                        {
                          displayedData: K,
                          props: b,
                          dataKey: V,
                          item: j,
                          bandSize: F,
                          barPosition: Be,
                          offset: h,
                          stackedData: ne,
                          layout: C,
                          dataStartIndex: S,
                          dataEndIndex: _,
                        }
                      )
                    )
                  ),
                  {},
                  te(
                    te(
                      te({ key: j.key || "item-".concat(B) }, N, qe[N]),
                      z,
                      qe[z]
                    ),
                    "animationId",
                    x
                  )
                ),
                childIndex: mR(j, b.children),
                item: j,
              });
          }),
          W
        );
      },
      m = function (b, g) {
        var y = b.props,
          w = b.dataStartIndex,
          h = b.dataEndIndex,
          x = b.updateId;
        if (!J0({ props: y })) return null;
        var S = y.children,
          _ = y.layout,
          O = y.stackOffset,
          C = y.data,
          A = y.reverseStackOrder,
          k = Mx(_),
          $ = k.numericAxisName,
          D = k.cateAxisName,
          N = gn(S, i),
          z = xK(C, N, "".concat($, "Id"), "".concat(D, "Id"), O, A),
          R = s.reduce(function (Z, V) {
            var oe = "".concat(V.axisType, "Map");
            return L(
              L({}, Z),
              {},
              te(
                {},
                oe,
                SZ(
                  y,
                  L(
                    L({}, V),
                    {},
                    {
                      graphicalItems: N,
                      stackGroups: V.axisType === $ && z,
                      dataStartIndex: w,
                      dataEndIndex: h,
                    }
                  )
                )
              )
            );
          }, {}),
          W = PZ(
            L(L({}, R), {}, { props: y, graphicalItems: N }),
            g == null ? void 0 : g.legendBBox
          );
        Object.keys(R).forEach(function (Z) {
          R[Z] = c(y, R[Z], W, Z.replace("Map", ""), r);
        });
        var j = R["".concat(D, "Map")],
          B = _Z(j),
          K = p(
            y,
            L(
              L({}, R),
              {},
              {
                dataStartIndex: w,
                dataEndIndex: h,
                updateId: x,
                graphicalItems: N,
                stackGroups: z,
                offset: W,
              }
            )
          );
        return L(
          L(
            {
              formattedGraphicalItems: K,
              graphicalItems: N,
              offset: W,
              stackGroups: z,
            },
            B
          ),
          R
        );
      };
    return (
      (n = (function (v) {
        fZ(b, v);
        function b(g) {
          var y, w, h;
          return (
            lZ(this, b),
            (h = sZ(this, b, [g])),
            te(ye(h), "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            te(ye(h), "accessibilityManager", new qQ()),
            te(ye(h), "handleLegendBBoxUpdate", function (x) {
              if (x) {
                var S = h.state,
                  _ = S.dataStartIndex,
                  O = S.dataEndIndex,
                  C = S.updateId;
                h.setState(
                  L(
                    { legendBBox: x },
                    m(
                      {
                        props: h.props,
                        dataStartIndex: _,
                        dataEndIndex: O,
                        updateId: C,
                      },
                      L(L({}, h.state), {}, { legendBBox: x })
                    )
                  )
                );
              }
            }),
            te(ye(h), "handleReceiveSyncEvent", function (x, S, _) {
              if (h.props.syncId === x) {
                if (
                  _ === h.eventEmitterSymbol &&
                  typeof h.props.syncMethod != "function"
                )
                  return;
                h.applySyncEvent(S);
              }
            }),
            te(ye(h), "handleBrushChange", function (x) {
              var S = x.startIndex,
                _ = x.endIndex;
              if (S !== h.state.dataStartIndex || _ !== h.state.dataEndIndex) {
                var O = h.state.updateId;
                h.setState(function () {
                  return L(
                    { dataStartIndex: S, dataEndIndex: _ },
                    m(
                      {
                        props: h.props,
                        dataStartIndex: S,
                        dataEndIndex: _,
                        updateId: O,
                      },
                      h.state
                    )
                  );
                }),
                  h.triggerSyncEvent({ dataStartIndex: S, dataEndIndex: _ });
              }
            }),
            te(ye(h), "handleMouseEnter", function (x) {
              var S = h.getMouseInfo(x);
              if (S) {
                var _ = L(L({}, S), {}, { isTooltipActive: !0 });
                h.setState(_), h.triggerSyncEvent(_);
                var O = h.props.onMouseEnter;
                he(O) && O(_, x);
              }
            }),
            te(ye(h), "triggeredAfterMouseMove", function (x) {
              var S = h.getMouseInfo(x),
                _ = S
                  ? L(L({}, S), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              h.setState(_), h.triggerSyncEvent(_);
              var O = h.props.onMouseMove;
              he(O) && O(_, x);
            }),
            te(ye(h), "handleItemMouseEnter", function (x) {
              h.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: x,
                  activePayload: x.tooltipPayload,
                  activeCoordinate: x.tooltipPosition || { x: x.cx, y: x.cy },
                };
              });
            }),
            te(ye(h), "handleItemMouseLeave", function () {
              h.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            te(ye(h), "handleMouseMove", function (x) {
              x.persist(), h.throttleTriggeredAfterMouseMove(x);
            }),
            te(ye(h), "handleMouseLeave", function (x) {
              h.throttleTriggeredAfterMouseMove.cancel();
              var S = { isTooltipActive: !1 };
              h.setState(S), h.triggerSyncEvent(S);
              var _ = h.props.onMouseLeave;
              he(_) && _(S, x);
            }),
            te(ye(h), "handleOuterEvent", function (x) {
              var S = yR(x),
                _ = mn(h.props, "".concat(S));
              if (S && he(_)) {
                var O, C;
                /.*touch.*/i.test(S)
                  ? (C = h.getMouseInfo(x.changedTouches[0]))
                  : (C = h.getMouseInfo(x)),
                  _((O = C) !== null && O !== void 0 ? O : {}, x);
              }
            }),
            te(ye(h), "handleClick", function (x) {
              var S = h.getMouseInfo(x);
              if (S) {
                var _ = L(L({}, S), {}, { isTooltipActive: !0 });
                h.setState(_), h.triggerSyncEvent(_);
                var O = h.props.onClick;
                he(O) && O(_, x);
              }
            }),
            te(ye(h), "handleMouseDown", function (x) {
              var S = h.props.onMouseDown;
              if (he(S)) {
                var _ = h.getMouseInfo(x);
                S(_, x);
              }
            }),
            te(ye(h), "handleMouseUp", function (x) {
              var S = h.props.onMouseUp;
              if (he(S)) {
                var _ = h.getMouseInfo(x);
                S(_, x);
              }
            }),
            te(ye(h), "handleTouchMove", function (x) {
              x.changedTouches != null &&
                x.changedTouches.length > 0 &&
                h.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
            }),
            te(ye(h), "handleTouchStart", function (x) {
              x.changedTouches != null &&
                x.changedTouches.length > 0 &&
                h.handleMouseDown(x.changedTouches[0]);
            }),
            te(ye(h), "handleTouchEnd", function (x) {
              x.changedTouches != null &&
                x.changedTouches.length > 0 &&
                h.handleMouseUp(x.changedTouches[0]);
            }),
            te(ye(h), "triggerSyncEvent", function (x) {
              h.props.syncId !== void 0 &&
                xp.emit(Sp, h.props.syncId, x, h.eventEmitterSymbol);
            }),
            te(ye(h), "applySyncEvent", function (x) {
              var S = h.props,
                _ = S.layout,
                O = S.syncMethod,
                C = h.state.updateId,
                A = x.dataStartIndex,
                k = x.dataEndIndex;
              if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
                h.setState(
                  L(
                    { dataStartIndex: A, dataEndIndex: k },
                    m(
                      {
                        props: h.props,
                        dataStartIndex: A,
                        dataEndIndex: k,
                        updateId: C,
                      },
                      h.state
                    )
                  )
                );
              else if (x.activeTooltipIndex !== void 0) {
                var $ = x.chartX,
                  D = x.chartY,
                  N = x.activeTooltipIndex,
                  z = h.state,
                  R = z.offset,
                  W = z.tooltipTicks;
                if (!R) return;
                if (typeof O == "function") N = O(W, x);
                else if (O === "value") {
                  N = -1;
                  for (var j = 0; j < W.length; j++)
                    if (W[j].value === x.activeLabel) {
                      N = j;
                      break;
                    }
                }
                var B = L(L({}, R), {}, { x: R.left, y: R.top }),
                  K = Math.min($, B.x + B.width),
                  Z = Math.min(D, B.y + B.height),
                  V = W[N] && W[N].value,
                  oe = Hv(h.state, h.props.data, N),
                  ie = W[N]
                    ? {
                        x: _ === "horizontal" ? W[N].coordinate : K,
                        y: _ === "horizontal" ? Z : W[N].coordinate,
                      }
                    : eT;
                h.setState(
                  L(
                    L({}, x),
                    {},
                    {
                      activeLabel: V,
                      activeCoordinate: ie,
                      activePayload: oe,
                      activeTooltipIndex: N,
                    }
                  )
                );
              } else h.setState(x);
            }),
            te(ye(h), "renderCursor", function (x) {
              var S,
                _ = h.state,
                O = _.isTooltipActive,
                C = _.activeCoordinate,
                A = _.activePayload,
                k = _.offset,
                $ = _.activeTooltipIndex,
                D = _.tooltipAxisBandSize,
                N = h.getTooltipEventType(),
                z = (S = x.props.active) !== null && S !== void 0 ? S : O,
                R = h.props.layout,
                W = x.key || "_recharts-cursor";
              return T.createElement(eZ, {
                key: W,
                activeCoordinate: C,
                activePayload: A,
                activeTooltipIndex: $,
                chartName: r,
                element: x,
                isActive: z,
                layout: R,
                offset: k,
                tooltipAxisBandSize: D,
                tooltipEventType: N,
              });
            }),
            te(ye(h), "renderPolarAxis", function (x, S, _) {
              var O = mn(x, "type.axisType"),
                C = mn(h.state, "".concat(O, "Map")),
                A = C && C[x.props["".concat(O, "Id")]];
              return E.cloneElement(
                x,
                L(
                  L({}, A),
                  {},
                  {
                    className: be(O, A.className),
                    key: x.key || "".concat(S, "-").concat(_),
                    ticks: Oi(A, !0),
                  }
                )
              );
            }),
            te(ye(h), "renderPolarGrid", function (x) {
              var S = x.props,
                _ = S.radialLines,
                O = S.polarAngles,
                C = S.polarRadius,
                A = h.state,
                k = A.radiusAxisMap,
                $ = A.angleAxisMap,
                D = Yi(k),
                N = Yi($),
                z = N.cx,
                R = N.cy,
                W = N.innerRadius,
                j = N.outerRadius;
              return E.cloneElement(x, {
                polarAngles: Array.isArray(O)
                  ? O
                  : Oi(N, !0).map(function (B) {
                      return B.coordinate;
                    }),
                polarRadius: Array.isArray(C)
                  ? C
                  : Oi(D, !0).map(function (B) {
                      return B.coordinate;
                    }),
                cx: z,
                cy: R,
                innerRadius: W,
                outerRadius: j,
                key: x.key || "polar-grid",
                radialLines: _,
              });
            }),
            te(ye(h), "renderLegend", function () {
              var x = h.state.formattedGraphicalItems,
                S = h.props,
                _ = S.children,
                O = S.width,
                C = S.height,
                A = h.props.margin || {},
                k = O - (A.left || 0) - (A.right || 0),
                $ = rA({
                  children: _,
                  formattedGraphicalItems: x,
                  legendWidth: k,
                  legendContent: f,
                });
              if (!$) return null;
              var D = $.item,
                N = Tx($, tZ);
              return E.cloneElement(
                D,
                L(
                  L({}, N),
                  {},
                  {
                    chartWidth: O,
                    chartHeight: C,
                    margin: A,
                    onBBoxUpdate: h.handleLegendBBoxUpdate,
                  }
                )
              );
            }),
            te(ye(h), "renderTooltip", function () {
              var x,
                S = h.props,
                _ = S.children,
                O = S.accessibilityLayer,
                C = Qt(_, nr);
              if (!C) return null;
              var A = h.state,
                k = A.isTooltipActive,
                $ = A.activeCoordinate,
                D = A.activePayload,
                N = A.activeLabel,
                z = A.offset,
                R = (x = C.props.active) !== null && x !== void 0 ? x : k;
              return E.cloneElement(C, {
                viewBox: L(L({}, z), {}, { x: z.left, y: z.top }),
                active: R,
                label: N,
                payload: R ? D : [],
                coordinate: $,
                accessibilityLayer: O,
              });
            }),
            te(ye(h), "renderBrush", function (x) {
              var S = h.props,
                _ = S.margin,
                O = S.data,
                C = h.state,
                A = C.offset,
                k = C.dataStartIndex,
                $ = C.dataEndIndex,
                D = C.updateId;
              return E.cloneElement(x, {
                key: x.key || "_recharts-brush",
                onChange: as(h.handleBrushChange, x.props.onChange),
                data: O,
                x: q(x.props.x) ? x.props.x : A.left,
                y: q(x.props.y)
                  ? x.props.y
                  : A.top + A.height + A.brushBottom - (_.bottom || 0),
                width: q(x.props.width) ? x.props.width : A.width,
                startIndex: k,
                endIndex: $,
                updateId: "brush-".concat(D),
              });
            }),
            te(ye(h), "renderReferenceElement", function (x, S, _) {
              if (!x) return null;
              var O = ye(h),
                C = O.clipPathId,
                A = h.state,
                k = A.xAxisMap,
                $ = A.yAxisMap,
                D = A.offset,
                N = x.props,
                z = N.xAxisId,
                R = N.yAxisId;
              return E.cloneElement(x, {
                key: x.key || "".concat(S, "-").concat(_),
                xAxis: k[z],
                yAxis: $[R],
                viewBox: {
                  x: D.left,
                  y: D.top,
                  width: D.width,
                  height: D.height,
                },
                clipPathId: C,
              });
            }),
            te(ye(h), "renderActivePoints", function (x) {
              var S = x.item,
                _ = x.activePoint,
                O = x.basePoint,
                C = x.childIndex,
                A = x.isRange,
                k = [],
                $ = S.props.key,
                D = S.item.props,
                N = D.activeDot,
                z = D.dataKey,
                R = L(
                  L(
                    {
                      index: C,
                      dataKey: z,
                      cx: _.x,
                      cy: _.y,
                      r: 4,
                      fill: qm(S.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: _.payload,
                      value: _.value,
                      key: "".concat($, "-activePoint-").concat(C),
                    },
                    ve(N, !1)
                  ),
                  tc(N)
                );
              return (
                k.push(b.renderActiveDot(N, R)),
                O
                  ? k.push(
                      b.renderActiveDot(
                        N,
                        L(
                          L({}, R),
                          {},
                          {
                            cx: O.x,
                            cy: O.y,
                            key: "".concat($, "-basePoint-").concat(C),
                          }
                        )
                      )
                    )
                  : A && k.push(null),
                k
              );
            }),
            te(ye(h), "renderGraphicChild", function (x, S, _) {
              var O = h.filterFormatItem(x, S, _);
              if (!O) return null;
              var C = h.getTooltipEventType(),
                A = h.state,
                k = A.isTooltipActive,
                $ = A.tooltipAxis,
                D = A.activeTooltipIndex,
                N = A.activeLabel,
                z = h.props.children,
                R = Qt(z, nr),
                W = O.props,
                j = W.points,
                B = W.isRange,
                K = W.baseLine,
                Z = O.item.props,
                V = Z.activeDot,
                oe = Z.hide,
                ie = Z.activeBar,
                De = Z.activeShape,
                ut = !!(!oe && k && R && (V || ie || De)),
                qe = {};
              C !== "axis" && R && R.props.trigger === "click"
                ? (qe = {
                    onClick: as(h.handleItemMouseEnter, x.props.onClick),
                  })
                : C !== "axis" &&
                  (qe = {
                    onMouseLeave: as(
                      h.handleItemMouseLeave,
                      x.props.onMouseLeave
                    ),
                    onMouseEnter: as(
                      h.handleItemMouseEnter,
                      x.props.onMouseEnter
                    ),
                  });
              var vt = E.cloneElement(x, L(L({}, O.props), qe));
              function G(zn) {
                return typeof $.dataKey == "function"
                  ? $.dataKey(zn.payload)
                  : null;
              }
              if (ut)
                if (D >= 0) {
                  var ne, ue;
                  if ($.dataKey && !$.allowDuplicatedCategory) {
                    var F =
                      typeof $.dataKey == "function"
                        ? G
                        : "payload.".concat($.dataKey.toString());
                    (ne = ec(j, F, N)), (ue = B && K && ec(K, F, N));
                  } else
                    (ne = j == null ? void 0 : j[D]), (ue = B && K && K[D]);
                  if (De || ie) {
                    var Be =
                      x.props.activeIndex !== void 0 ? x.props.activeIndex : D;
                    return [
                      E.cloneElement(
                        x,
                        L(L(L({}, O.props), qe), {}, { activeIndex: Be })
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!fe(ne))
                    return [vt].concat(
                      qa(
                        h.renderActivePoints({
                          item: O,
                          activePoint: ne,
                          basePoint: ue,
                          childIndex: D,
                          isRange: B,
                        })
                      )
                    );
                } else {
                  var pe,
                    je =
                      (pe = h.getItemByXY(h.state.activeCoordinate)) !== null &&
                      pe !== void 0
                        ? pe
                        : { graphicalItem: vt },
                    ze = je.graphicalItem,
                    yt = ze.item,
                    zt = yt === void 0 ? x : yt,
                    Ar = ze.childIndex,
                    _t = L(L(L({}, O.props), qe), {}, { activeIndex: Ar });
                  return [E.cloneElement(zt, _t), null, null];
                }
              return B ? [vt, null, null] : [vt, null];
            }),
            te(ye(h), "renderCustomized", function (x, S, _) {
              return E.cloneElement(
                x,
                L(
                  L({ key: "recharts-customized-".concat(_) }, h.props),
                  h.state
                )
              );
            }),
            te(ye(h), "renderMap", {
              CartesianGrid: { handler: cs, once: !0 },
              ReferenceArea: { handler: h.renderReferenceElement },
              ReferenceLine: { handler: cs },
              ReferenceDot: { handler: h.renderReferenceElement },
              XAxis: { handler: cs },
              YAxis: { handler: cs },
              Brush: { handler: h.renderBrush, once: !0 },
              Bar: { handler: h.renderGraphicChild },
              Line: { handler: h.renderGraphicChild },
              Area: { handler: h.renderGraphicChild },
              Radar: { handler: h.renderGraphicChild },
              RadialBar: { handler: h.renderGraphicChild },
              Scatter: { handler: h.renderGraphicChild },
              Pie: { handler: h.renderGraphicChild },
              Funnel: { handler: h.renderGraphicChild },
              Tooltip: { handler: h.renderCursor, once: !0 },
              PolarGrid: { handler: h.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: h.renderPolarAxis },
              PolarRadiusAxis: { handler: h.renderPolarAxis },
              Customized: { handler: h.renderCustomized },
            }),
            (h.clipPathId = "".concat(
              (y = g.id) !== null && y !== void 0 ? y : bu("recharts"),
              "-clip"
            )),
            (h.throttleTriggeredAfterMouseMove = aE(
              h.triggeredAfterMouseMove,
              (w = g.throttleDelay) !== null && w !== void 0 ? w : 1e3 / 60
            )),
            (h.state = {}),
            h
          );
        }
        return (
          uZ(b, [
            {
              key: "componentDidMount",
              value: function () {
                var y, w;
                this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        (y = this.props.margin.left) !== null && y !== void 0
                          ? y
                          : 0,
                      top:
                        (w = this.props.margin.top) !== null && w !== void 0
                          ? w
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var y = this.props,
                  w = y.children,
                  h = y.data,
                  x = y.height,
                  S = y.layout,
                  _ = Qt(w, nr);
                if (_) {
                  var O = _.props.defaultIndex;
                  if (
                    !(
                      typeof O != "number" ||
                      O < 0 ||
                      O > this.state.tooltipTicks.length
                    )
                  ) {
                    var C =
                        this.state.tooltipTicks[O] &&
                        this.state.tooltipTicks[O].value,
                      A = Hv(this.state, h, O, C),
                      k = this.state.tooltipTicks[O].coordinate,
                      $ = (this.state.offset.top + x) / 2,
                      D = S === "horizontal",
                      N = D ? { x: k, y: $ } : { y: k, x: $ },
                      z = this.state.formattedGraphicalItems.find(function (W) {
                        var j = W.item;
                        return j.type.name === "Scatter";
                      });
                    z &&
                      ((N = L(L({}, N), z.props.points[O].tooltipPosition)),
                      (A = z.props.points[O].tooltipPayload));
                    var R = {
                      activeTooltipIndex: O,
                      isTooltipActive: !0,
                      activeLabel: C,
                      activePayload: A,
                      activeCoordinate: N,
                    };
                    this.setState(R),
                      this.renderCursor(_),
                      this.accessibilityManager.setIndex(O);
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (y, w) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== w.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== y.layout &&
                    this.accessibilityManager.setDetails({
                      layout: this.props.layout,
                    }),
                  this.props.margin !== y.margin)
                ) {
                  var h, x;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left:
                        (h = this.props.margin.left) !== null && h !== void 0
                          ? h
                          : 0,
                      top:
                        (x = this.props.margin.top) !== null && x !== void 0
                          ? x
                          : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (y) {
                Ah([Qt(y.children, nr)], [Qt(this.props.children, nr)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel();
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var y = Qt(this.props.children, nr);
                if (y && typeof y.props.shared == "boolean") {
                  var w = y.props.shared ? "axis" : "item";
                  return u.indexOf(w) >= 0 ? w : o;
                }
                return o;
              },
            },
            {
              key: "getMouseInfo",
              value: function (y) {
                if (!this.container) return null;
                var w = this.container,
                  h = w.getBoundingClientRect(),
                  x = zU(h),
                  S = {
                    chartX: Math.round(y.pageX - x.left),
                    chartY: Math.round(y.pageY - x.top),
                  },
                  _ = h.width / w.offsetWidth || 1,
                  O = this.inRange(S.chartX, S.chartY, _);
                if (!O) return null;
                var C = this.state,
                  A = C.xAxisMap,
                  k = C.yAxisMap,
                  $ = this.getTooltipEventType();
                if ($ !== "axis" && A && k) {
                  var D = Yi(A).scale,
                    N = Yi(k).scale,
                    z = D && D.invert ? D.invert(S.chartX) : null,
                    R = N && N.invert ? N.invert(S.chartY) : null;
                  return L(L({}, S), {}, { xValue: z, yValue: R });
                }
                var W = jx(this.state, this.props.data, this.props.layout, O);
                return W ? L(L({}, S), W) : null;
              },
            },
            {
              key: "inRange",
              value: function (y, w) {
                var h =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  x = this.props.layout,
                  S = y / h,
                  _ = w / h;
                if (x === "horizontal" || x === "vertical") {
                  var O = this.state.offset,
                    C =
                      S >= O.left &&
                      S <= O.left + O.width &&
                      _ >= O.top &&
                      _ <= O.top + O.height;
                  return C ? { x: S, y: _ } : null;
                }
                var A = this.state,
                  k = A.angleAxisMap,
                  $ = A.radiusAxisMap;
                if (k && $) {
                  var D = Yi(k);
                  return dw({ x: S, y: _ }, D);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var y = this.props.children,
                  w = this.getTooltipEventType(),
                  h = Qt(y, nr),
                  x = {};
                h &&
                  w === "axis" &&
                  (h.props.trigger === "click"
                    ? (x = { onClick: this.handleClick })
                    : (x = {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                      }));
                var S = tc(this.props, this.handleOuterEvent);
                return L(L({}, S), x);
              },
            },
            {
              key: "addListener",
              value: function () {
                xp.on(Sp, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                xp.removeListener(Sp, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (y, w, h) {
                for (
                  var x = this.state.formattedGraphicalItems,
                    S = 0,
                    _ = x.length;
                  S < _;
                  S++
                ) {
                  var O = x[S];
                  if (
                    O.item === y ||
                    O.props.key === y.key ||
                    (w === sr(O.item.type) && h === O.childIndex)
                  )
                    return O;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var y = this.clipPathId,
                  w = this.state.offset,
                  h = w.left,
                  x = w.top,
                  S = w.height,
                  _ = w.width;
                return T.createElement(
                  "defs",
                  null,
                  T.createElement(
                    "clipPath",
                    { id: y },
                    T.createElement("rect", { x: h, y: x, height: S, width: _ })
                  )
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var y = this.state.xAxisMap;
                return y
                  ? Object.entries(y).reduce(function (w, h) {
                      var x = Ax(h, 2),
                        S = x[0],
                        _ = x[1];
                      return L(L({}, w), {}, te({}, S, _.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var y = this.state.yAxisMap;
                return y
                  ? Object.entries(y).reduce(function (w, h) {
                      var x = Ax(h, 2),
                        S = x[0],
                        _ = x[1];
                      return L(L({}, w), {}, te({}, S, _.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (y) {
                var w;
                return (w = this.state.xAxisMap) === null ||
                  w === void 0 ||
                  (w = w[y]) === null ||
                  w === void 0
                  ? void 0
                  : w.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (y) {
                var w;
                return (w = this.state.yAxisMap) === null ||
                  w === void 0 ||
                  (w = w[y]) === null ||
                  w === void 0
                  ? void 0
                  : w.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (y) {
                var w = this.state,
                  h = w.formattedGraphicalItems,
                  x = w.activeItem;
                if (h && h.length)
                  for (var S = 0, _ = h.length; S < _; S++) {
                    var O = h[S],
                      C = O.props,
                      A = O.item,
                      k = sr(A.type);
                    if (k === "Bar") {
                      var $ = (C.data || []).find(function (R) {
                        return iG(y, R);
                      });
                      if ($) return { graphicalItem: O, payload: $ };
                    } else if (k === "RadialBar") {
                      var D = (C.data || []).find(function (R) {
                        return dw(y, R);
                      });
                      if (D) return { graphicalItem: O, payload: D };
                    } else if (od(O, x) || ld(O, x) || Zl(O, x)) {
                      var N = lX({
                          graphicalItem: O,
                          activeTooltipItem: x,
                          itemData: A.props.data,
                        }),
                        z =
                          A.props.activeIndex === void 0
                            ? N
                            : A.props.activeIndex;
                      return {
                        graphicalItem: L(L({}, O), {}, { childIndex: z }),
                        payload: Zl(O, x) ? A.props.data[N] : O.props.data[N],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var y = this;
                if (!J0(this)) return null;
                var w = this.props,
                  h = w.children,
                  x = w.className,
                  S = w.width,
                  _ = w.height,
                  O = w.style,
                  C = w.compact,
                  A = w.title,
                  k = w.desc,
                  $ = Tx(w, nZ),
                  D = ve($, !1);
                if (C)
                  return T.createElement(
                    fx,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    T.createElement(
                      $h,
                      il({}, D, { width: S, height: _, title: A, desc: k }),
                      this.renderClipPath(),
                      t1(h, this.renderMap)
                    )
                  );
                if (this.props.accessibilityLayer) {
                  var N, z;
                  (D.tabIndex =
                    (N = this.props.tabIndex) !== null && N !== void 0 ? N : 0),
                    (D.role =
                      (z = this.props.role) !== null && z !== void 0
                        ? z
                        : "application"),
                    (D.onKeyDown = function (W) {
                      y.accessibilityManager.keyboardEvent(W);
                    }),
                    (D.onFocus = function () {
                      y.accessibilityManager.focus();
                    });
                }
                var R = this.parseEventsOfWrapper();
                return T.createElement(
                  fx,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  T.createElement(
                    "div",
                    il(
                      {
                        className: be("recharts-wrapper", x),
                        style: L(
                          {
                            position: "relative",
                            cursor: "default",
                            width: S,
                            height: _,
                          },
                          O
                        ),
                      },
                      R,
                      {
                        ref: function (j) {
                          y.container = j;
                        },
                      }
                    ),
                    T.createElement(
                      $h,
                      il({}, D, {
                        width: S,
                        height: _,
                        title: A,
                        desc: k,
                        style: mZ,
                      }),
                      this.renderClipPath(),
                      t1(h, this.renderMap)
                    ),
                    this.renderLegend(),
                    this.renderTooltip()
                  )
                );
              },
            },
          ]),
          b
        );
      })(E.Component)),
      te(n, "displayName", r),
      te(
        n,
        "defaultProps",
        L(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          d
        )
      ),
      te(n, "getDerivedStateFromProps", function (v, b) {
        var g = v.dataKey,
          y = v.data,
          w = v.children,
          h = v.width,
          x = v.height,
          S = v.layout,
          _ = v.stackOffset,
          O = v.margin,
          C = b.dataStartIndex,
          A = b.dataEndIndex;
        if (b.updateId === void 0) {
          var k = kx(v);
          return L(
            L(
              L({}, k),
              {},
              { updateId: 0 },
              m(L(L({ props: v }, k), {}, { updateId: 0 }), b)
            ),
            {},
            {
              prevDataKey: g,
              prevData: y,
              prevWidth: h,
              prevHeight: x,
              prevLayout: S,
              prevStackOffset: _,
              prevMargin: O,
              prevChildren: w,
            }
          );
        }
        if (
          g !== b.prevDataKey ||
          y !== b.prevData ||
          h !== b.prevWidth ||
          x !== b.prevHeight ||
          S !== b.prevLayout ||
          _ !== b.prevStackOffset ||
          !wa(O, b.prevMargin)
        ) {
          var $ = kx(v),
            D = {
              chartX: b.chartX,
              chartY: b.chartY,
              isTooltipActive: b.isTooltipActive,
            },
            N = L(L({}, jx(b, y, S)), {}, { updateId: b.updateId + 1 }),
            z = L(L(L({}, $), D), N);
          return L(
            L(L({}, z), m(L({ props: v }, z), b)),
            {},
            {
              prevDataKey: g,
              prevData: y,
              prevWidth: h,
              prevHeight: x,
              prevLayout: S,
              prevStackOffset: _,
              prevMargin: O,
              prevChildren: w,
            }
          );
        }
        if (!Ah(w, b.prevChildren)) {
          var R,
            W,
            j,
            B,
            K = Qt(w, Ua),
            Z =
              K &&
              (R =
                (W = K.props) === null || W === void 0
                  ? void 0
                  : W.startIndex) !== null &&
              R !== void 0
                ? R
                : C,
            V =
              K &&
              (j =
                (B = K.props) === null || B === void 0
                  ? void 0
                  : B.endIndex) !== null &&
              j !== void 0
                ? j
                : A,
            oe = Z !== C || V !== A,
            ie = !fe(y),
            De = ie && !oe ? b.updateId : b.updateId + 1;
          return L(
            L(
              { updateId: De },
              m(
                L(
                  L({ props: v }, b),
                  {},
                  { updateId: De, dataStartIndex: Z, dataEndIndex: V }
                ),
                b
              )
            ),
            {},
            { prevChildren: w, dataStartIndex: Z, dataEndIndex: V }
          );
        }
        return null;
      }),
      te(n, "renderActiveDot", function (v, b) {
        var g;
        return (
          E.isValidElement(v)
            ? (g = E.cloneElement(v, b))
            : he(v)
            ? (g = v(b))
            : (g = T.createElement(Xm, b)),
          T.createElement(
            Qe,
            { className: "recharts-active-dot", key: b.key },
            g
          )
        );
      }),
      n
    );
  },
  TZ = AZ({
    chartName: "LineChart",
    GraphicalChild: Tu,
    axisComponents: [
      { axisType: "xAxis", AxisComp: Jm },
      { axisType: "yAxis", AxisComp: eg },
    ],
    formatAxisMap: kY,
  });
const $Z = "_graph_container_12mer_1",
  nT = { graph_container: $Z },
  CZ = ({ graphData: e }) => (
    console.log(e),
    P.jsx("div", {
      className: nT.graph_container,
      children: P.jsx(MU, {
        width: "100%",
        aspect: 2,
        children: P.jsx(TZ, {
          data: e,
          children: P.jsx(Tu, {
            type: "monotone",
            dataKey: "value",
            stroke: "#8884d8",
            strokeWidth: 2,
          }),
        }),
      }),
    })
  ),
  jZ = () => {
    const { stockId: e } = bk(),
      t = kt(),
      n = yr((v) => v.stocks.allStocks[e] || {}),
      r = yr((v) => {
        if (v.stocks.graphData)
          return v.stocks.graphData.sort(
            (b, g) => new Date(b.date) - new Date(g.date)
          );
      });
    E.useEffect(() => {
      t(Zy()), t(P2(e));
    }, []);
    const {
      name: i,
      symbol: a,
      price: o,
      currency: l,
      exchange: u,
      country: s,
      type: f,
      industry: c,
      ipo: d,
      marketCap: p,
      outstandingShares: m,
    } = n;
    return P.jsxs("div", {
      className: nT.stock_page_container,
      children: [
        P.jsx("h3", { children: i }),
        r && P.jsx(CZ, { graphData: r }),
        P.jsx("h4", { children: a }),
        P.jsxs("ul", {
          children: [
            P.jsxs("li", { children: ["Price: ", o] }),
            P.jsxs("li", { children: ["Currency: ", l] }),
            P.jsxs("li", { children: ["Exchange: ", u] }),
            P.jsxs("li", { children: ["Country: ", s] }),
            P.jsxs("li", { children: ["Type: ", f] }),
            P.jsxs("li", { children: ["Industry: ", c] }),
            P.jsxs("li", { children: ["IPO: ", d] }),
            P.jsxs("li", { children: ["Market Cap: ", p] }),
            P.jsxs("li", { children: ["Outstanding Shares: ", m] }),
          ],
        }),
        P.jsx("button", {
          onClick: (v) => {
            v.preventDefault(), t(RO(e));
          },
          children: "Add to Watchlist!",
        }),
      ],
    });
  },
  kZ = () => {
    const e = kt(),
      t = Df(),
      n = yr((r) => r.watchlist.stocks);
    return (
      E.useEffect(() => {
        e(Zy()), e(H2());
      }, []),
      console.log(n),
      Object.keys(n).length
        ? P.jsx("div", {
            children: Object.keys(n).map((r) => {
              const i = n[r];
              if (i) {
                const {
                  id: a,
                  name: o,
                  symbol: l,
                  price: u,
                  currency: s,
                  exchange: f,
                  country: c,
                  type: d,
                  industry: p,
                  ipo: m,
                  marketCap: v,
                  outstandingShares: b,
                } = i;
                return P.jsxs(
                  "div",
                  {
                    children: [
                      P.jsx("h3", {
                        onClick: (g) => {
                          g.preventDefault(), t(`/stocks/${a}`);
                        },
                        children: o,
                      }),
                      P.jsx("h4", { children: l }),
                      P.jsxs("ul", {
                        children: [
                          P.jsxs("li", { children: ["Price: ", u] }),
                          P.jsxs("li", { children: ["Currency: ", s] }),
                          P.jsxs("li", { children: ["Exchange: ", f] }),
                          P.jsxs("li", { children: ["Country: ", c] }),
                          P.jsxs("li", { children: ["Type: ", d] }),
                          P.jsxs("li", { children: ["Industry: ", p] }),
                          P.jsxs("li", { children: ["IPO: ", m] }),
                          P.jsxs("li", { children: ["Market Cap: ", v] }),
                          P.jsxs("li", {
                            children: ["Outstanding Shares: ", b],
                          }),
                        ],
                      }),
                      P.jsx("button", {
                        onClick: (g) => {
                          g.preventDefault(), e(K2(a));
                        },
                        children: "Remove from watchlist",
                      }),
                    ],
                  },
                  a
                );
              }
              return P.jsx(P.Fragment, {});
            }),
          })
        : P.jsx("h1", { children: "You have nothing in your watchlist" })
    );
  },
  MZ = () => P.jsx("div", { children: "ProfilePage!!!" }),
  NZ = "_create_portfolio_modal_container_1v1aj_1",
  IZ = "_error_1v1aj_11",
  Op = { create_portfolio_modal_container: NZ, error: IZ };
function DZ() {
  const e = kt(),
    { closeModal: t } = _r(),
    [n, r] = E.useState(""),
    [i, a] = E.useState(""),
    [o, l] = E.useState({}),
    [u, s] = E.useState(!1);
  E.useEffect(() => {
    const c = (p) => {
        if (p.length === 0) return !0;
        for (const m of p) if (m !== " ") return !1;
        return !0;
      },
      d = {};
    c(n) && (d.name = "Portfolio name is required"),
      c(i) && (d.balance = "Balance is required"),
      l(d);
  }, [n, i]);
  const f = async (c) => {
    c.preventDefault(),
      s(!0),
      Object.keys(o).length ||
        ((await e(Q2({ name: n, balance: i }))).status === "success" && t());
  };
  return P.jsxs("form", {
    className: Op.create_portfolio_modal_container,
    onSubmit: f,
    children: [
      P.jsxs("label", {
        children: [
          "Enter a name for your new portfolio.",
          P.jsx("input", {
            type: "text",
            value: n,
            onChange: (c) => {
              c.preventDefault(), r(c.target.value);
            },
          }),
        ],
      }),
      u && o.name && P.jsx("p", { className: Op.error, children: o.name }),
      P.jsxs("label", {
        children: [
          "Set a balance for your portfolio.",
          P.jsx("input", {
            type: "number",
            defaultValue: 0,
            value: i,
            onChange: (c) => {
              c.preventDefault(), c.target.value >= 0 && a(c.target.value);
            },
          }),
        ],
      }),
      u &&
        o.balance &&
        P.jsx("p", { className: Op.error, children: o.balance }),
      P.jsx("button", {
        type: "submit",
        disabled: u && Object.keys(o).length,
        children: "Update Portfolio",
      }),
    ],
  });
}
function RZ() {
  const [e, t] = E.useState(!1),
    n = (i) => {
      i.stopPropagation(), t(!e);
    };
  E.useEffect(() => {
    if (e)
      return (
        document.addEventListener("click", r),
        () => document.removeEventListener("click", r)
      );
  }, [e]);
  const r = () => t(!1);
  return P.jsx("button", {
    onClick: n,
    children: P.jsx(Yn, {
      itemText: "Create Portfolio",
      onItemClick: r,
      modalComponent: P.jsx(DZ, {}),
    }),
  });
}
const LZ = "_update_portfolio_modal_container_1v19o_1",
  BZ = "_error_1v19o_11",
  Pp = { update_portfolio_modal_container: LZ, error: BZ };
function zZ({ currentPortfolio: e }) {
  const t = kt(),
    { closeModal: n } = _r(),
    [r, i] = E.useState(e.name),
    [a, o] = E.useState(e.balance),
    [l, u] = E.useState({}),
    [s, f] = E.useState(!1);
  E.useEffect(() => {
    const d = (m) => {
        if (m.length === 0) return !0;
        for (const v of m) if (v !== " ") return !1;
        return !0;
      },
      p = {};
    d(r) && (p.name = "Portfolio name is required"),
      d(a) && (p.balance = "Balance is required"),
      u(p);
  }, [r, a]);
  const c = async (d) => {
    if ((d.preventDefault(), f(!0), !Object.keys(l).length)) {
      const p = { name: r, balance: a };
      (await t(Z2(e.id, p))).status === "success" && n();
    }
  };
  return P.jsxs("form", {
    className: Pp.update_portfolio_modal_container,
    onSubmit: c,
    children: [
      P.jsxs("label", {
        children: [
          "Enter a name for your new portfolio.",
          P.jsx("input", {
            type: "text",
            value: r,
            onChange: (d) => {
              d.preventDefault(), i(d.target.value);
            },
          }),
        ],
      }),
      s && l.name && P.jsx("p", { className: Pp.error, children: l.name }),
      P.jsxs("label", {
        children: [
          "Set a balance for your portfolio.",
          P.jsx("input", {
            type: "number",
            defaultValue: 0,
            value: a,
            onChange: (d) => {
              d.preventDefault(), d.target.value >= 0 && o(d.target.value);
            },
          }),
        ],
      }),
      s &&
        l.balance &&
        P.jsx("p", { className: Pp.error, children: l.balance }),
      P.jsx("button", {
        type: "submit",
        disabled: s && Object.keys(l).length,
        children: "Update Portfolio",
      }),
    ],
  });
}
function FZ({ currentPortfolio: e, className: t }) {
  const [n, r] = E.useState(!1),
    i = (o) => {
      o.stopPropagation(), r(!n);
    };
  E.useEffect(() => {
    if (n)
      return (
        document.addEventListener("click", a),
        () => document.removeEventListener("click", a)
      );
  }, [n]);
  const a = () => r(!1);
  return P.jsx("button", {
    onClick: i,
    className: t || "",
    children: P.jsx(Yn, {
      itemText: "Update Portfolio",
      onItemClick: a,
      modalComponent: P.jsx(zZ, { currentPortfolio: e }),
    }),
  });
}
function UZ({ portfolioId: e, setSelectedPortfolio: t }) {
  const n = kt(),
    { closeModal: r } = _r(),
    i = async (a) => {
      a.preventDefault(), t(!1), (await n(J2(e))).status === "success" && r();
    };
  return P.jsxs("form", {
    onSubmit: i,
    children: [
      "Are you sure you want to delete this portfolio?",
      P.jsx("button", { onClick: r, children: "Back" }),
      P.jsx("button", { type: "submit", children: "Yes" }),
    ],
  });
}
function WZ({ portfolioId: e, setSelectedPortfolio: t }) {
  const [n, r] = E.useState(!1),
    i = (o) => {
      o.stopPropagation(), r(!n);
    };
  E.useEffect(() => {
    if (n)
      return (
        document.addEventListener("click", a),
        () => document.removeEventListener("click", a)
      );
  }, [n]);
  const a = () => r(!1);
  return P.jsx("button", {
    onClick: i,
    children: P.jsx(Yn, {
      itemText: "Delete Portfolio",
      onItemClick: a,
      modalComponent: P.jsx(UZ, { portfolioId: e, setSelectedPortfolio: t }),
    }),
  });
}
const HZ = {};
function KZ({ portfolioId: e, stock: t }) {
  const n = kt(),
    { closeModal: r } = _r(),
    [i, a] = E.useState(0),
    o = async (l) => {
      l.preventDefault(), await n(eM(e, t.id, i)), r();
    };
  return P.jsxs("form", {
    className: HZ.review_form,
    onSubmit: o,
    children: [
      P.jsxs("label", {
        children: [
          "How much ",
          t.name,
          " would you like to sell?",
          P.jsx("input", {
            type: "number",
            value: i,
            onChange: (l) => {
              l.preventDefault(),
                Number(l.target.value) < 0
                  ? a(0)
                  : Number(l.target.value) > t.amount
                  ? a(t.amount)
                  : a(Number(l.target.value));
            },
          }),
        ],
      }),
      P.jsx("button", { type: "submit", disabled: !i, children: "Sell stock" }),
    ],
  });
}
function VZ({ portfolioId: e, stock: t }) {
  const [n, r] = E.useState(!1),
    i = (o) => {
      o.stopPropagation(), r(!n);
    };
  E.useEffect(() => {
    if (n)
      return (
        document.addEventListener("click", a),
        () => document.removeEventListener("click", a)
      );
  }, [n]);
  const a = () => r(!1);
  return P.jsx("button", {
    onClick: i,
    children: P.jsx(Yn, {
      itemText: "Sell",
      onItemClick: a,
      modalComponent: P.jsx(KZ, { portfolioId: e, stock: t }),
    }),
  });
}
const qZ = "_portfolio_page_container_p7605_1",
  GZ = "_portfolio_navigation_container_p7605_11",
  XZ = "_portfolio_name_selected_p7605_21",
  YZ = "_stock_container_p7605_29",
  Gi = {
    portfolio_page_container: qZ,
    portfolio_navigation_container: GZ,
    portfolio_name_selected: XZ,
    stock_container: YZ,
  },
  QZ = () => {
    const e = kt(),
      t = yr((i) => i.portfolios.userPortfolios),
      [n, r] = E.useState(!1);
    return (
      E.useEffect(() => {
        e(Qa());
      }, []),
      P.jsxs("div", {
        className: Gi.portfolio_page_container,
        children: [
          P.jsxs("div", {
            className: Gi.portfolio_navigation_container,
            children: [
              Object.values(t).map((i) => {
                const { id: a, name: o } = i;
                return P.jsx(
                  "div",
                  {
                    className:
                      a === n ? Gi.portfolio_name_selected : Gi.portfolio_name,
                    onClick: (l) => {
                      l.preventDefault(), r(a);
                    },
                    children: o,
                  },
                  a
                );
              }),
              P.jsx(RZ, {}),
            ],
          }),
          n &&
            P.jsxs("ul", {
              children: [
                P.jsx(FZ, {
                  currentPortfolio: t[n],
                  className: Gi.update_portfolio_button,
                }),
                P.jsxs("li", { children: ["Balance: $", t[n].balance] }),
                t[n].stocks.map((i) =>
                  P.jsxs(
                    "li",
                    {
                      className: Gi.stock_container,
                      children: [
                        P.jsx("span", { children: i.name }),
                        P.jsx("span", { children: i.amount }),
                        P.jsx(VZ, { portfolioId: n, stock: i }),
                      ],
                    },
                    i.id
                  )
                ),
                P.jsx(WZ, { portfolioId: n, setSelectedPortfolio: r }),
              ],
            }),
        ],
      })
    );
  },
  ZZ = "_cart_container_1fqnw_1",
  JZ = "_cart_header_container_1fqnw_19",
  eJ = "_order_item_container_1fqnw_31",
  fs = {
    cart_container: ZZ,
    cart_header_container: JZ,
    order_item_container: eJ,
  },
  fi = {};
function tJ({ stock: e }) {
  const t = kt(),
    { closeModal: n } = _r(),
    [r, i] = E.useState(e.amount),
    [a, o] = E.useState(Number(e.amount) * Number(e.price)),
    l = async (f) => {
      f.preventDefault(), (await t(cM(e.id, r))).status === "success" && n();
    },
    u = (f, c) => Math.round(Number(f) * c) / c,
    s = (f) => !isNaN(f) && f >= 0;
  return P.jsxs("form", {
    className: fi.modal_container,
    onSubmit: l,
    children: [
      P.jsxs("label", {
        className: fi.input_label,
        children: ["How much ", e.symbol, " would you like to purchase?"],
      }),
      P.jsxs("div", {
        className: fi.input_area,
        children: [
          P.jsx("input", {
            className: fi.amount_input,
            type: "number",
            value: r,
            onChange: (f) => {
              f.preventDefault();
              const c = Number(f.target.value);
              if (f.target.value === "") {
                i(""), o("");
                return;
              }
              s(f.target.value) &&
                (i(u(c, 1e3)), o(u(c * Number(e.price), 100)));
            },
          }),
          P.jsx("span", { className: fi.units_for, children: " Units for $ " }),
          P.jsx("input", {
            className: fi.price_input,
            type: "number",
            value: a,
            onChange: (f) => {
              f.preventDefault();
              const c = Number(f.target.value);
              if (f.target.value === "") {
                i(""), o("");
                return;
              }
              s(f.target.value) &&
                (i(u(c / Number(e.price), 1e3)), o(u(c, 100)));
            },
          }),
        ],
      }),
      P.jsx("button", {
        className: fi.submit_button,
        type: "submit",
        disabled: !r,
        children: "Add to Cart",
      }),
    ],
  });
}
function nJ({ stock: e }) {
  const [t, n] = E.useState(!1),
    r = (a) => {
      a.stopPropagation(), n(!t);
    };
  E.useEffect(() => {
    if (t)
      return (
        document.addEventListener("click", i),
        () => document.removeEventListener("click", i)
      );
  }, [t]);
  const i = () => n(!1);
  return P.jsx("button", {
    onClick: r,
    children: P.jsx(Yn, {
      itemText: "Edit",
      onItemClick: i,
      modalComponent: P.jsx(tJ, { stock: e }),
    }),
  });
}
const rJ = ({ setShowCart: e }) => {
    const t = kt(),
      n = yr((u) => u.orders.userOrders),
      r = yr((u) => u.portfolios.userPortfolios),
      [i, a] = E.useState(),
      o = (u) => {
        let s = 0;
        for (const f of Object.values(u))
          s += Number(f.price) * Number(f.amount);
        return s;
      },
      l = (u, s) => !(!s || !Object.keys(u).length || Number(s.balance) < o(u));
    return (
      E.useEffect(() => {
        t(lM()), t(Qa());
      }, []),
      E.useEffect(() => {
        i || a(Object.keys(r)[0]);
      }, [r]),
      P.jsxs("div", {
        className: fs.cart_container,
        children: [
          P.jsxs("div", {
            className: fs.cart_header_container,
            children: [
              P.jsx("span", { children: "Cart" }),
              P.jsx("button", {
                onClick: (u) => {
                  u.preventDefault(), e(!1);
                },
                children: "X",
              }),
            ],
          }),
          P.jsxs("ul", {
            children: [
              "Portfolio",
              i &&
                P.jsx("select", {
                  onChange: (u) => {
                    u.preventDefault(), a(u.target.value);
                  },
                  children: Object.values(r).map(({ id: u, name: s }) =>
                    P.jsx("option", { value: u, children: s }, u)
                  ),
                }),
              Object.values(n).map((u) =>
                P.jsxs(
                  "li",
                  {
                    className: fs.order_item_container,
                    children: [
                      P.jsx("span", { children: u.name }),
                      P.jsx("span", { children: u.symbol }),
                      P.jsxs("span", { children: [u.amount, " units"] }),
                      P.jsxs("span", {
                        children: ["$", Number(u.amount) * Number(u.price)],
                      }),
                      P.jsx(nJ, { stock: u }),
                      P.jsx("button", {
                        onClick: (s) => {
                          s.preventDefault(), t(sM(u.id));
                        },
                        children: "Remove from cart.",
                      }),
                    ],
                  },
                  u.id
                )
              ),
              P.jsx("button", {
                onClick: (u) => {
                  u.preventDefault(), t(fM());
                },
                children: "Clear Cart",
              }),
              P.jsx("button", {
                onClick: (u) => {
                  u.preventDefault(), t(dM(i));
                },
                disabled: !l(n, r[i]),
                children: "Check Out",
              }),
              r[i] &&
                Number(r[i].balance) < o(n) &&
                P.jsx("p", {
                  className: fs.error,
                  style: { color: "red" },
                  children: "Cart total is greater then portfolio balance.",
                }),
            ],
          }),
        ],
      })
    );
  },
  iJ = "_page_layout_container_9rzs4_1",
  aJ = "_main_page_container_9rzs4_11",
  Nx = { page_layout_container: iJ, main_page_container: aJ };
function oJ() {
  const e = kt(),
    [t, n] = E.useState(!1),
    [r, i] = E.useState(!1);
  return (
    E.useEffect(() => {
      e(Hk()).then(() => {
        n(!0);
      });
    }, [e]),
    P.jsxs("div", {
      className: Nx.page_layout_container,
      children: [
        P.jsx(w2, { isLoaded: t, setShowCart: i }),
        P.jsxs("div", {
          className: Nx.main_page_container,
          children: [
            t && P.jsx(Nk, {}),
            t && r && P.jsx(rJ, { setShowCart: i }),
          ],
        }),
      ],
    })
  );
}
const lJ = Rk([
  {
    element: P.jsx(oJ, {}),
    children: [
      { path: "/", element: P.jsx(TM, {}) },
      { path: "/stocks/:stockId", element: P.jsx(jZ, {}) },
      { path: "/watchlist", element: P.jsx(kZ, {}) },
      { path: "/profile", element: P.jsx(MZ, {}) },
      { path: "/portfolios", element: P.jsx(QZ, {}) },
    ],
  },
]);
function uJ() {
  return P.jsx(kk, { router: lJ });
}
function uu(e) {
  "@babel/helpers - typeof";
  return (
    (uu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    uu(e)
  );
}
function sJ(e, t) {
  if (uu(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (uu(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cJ(e) {
  var t = sJ(e, "string");
  return uu(t) === "symbol" ? t : String(t);
}
function fJ(e, t, n) {
  return (
    (t = cJ(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ix(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Dx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ix(Object(n), !0).forEach(function (r) {
          fJ(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ix(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function At(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Rx = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Ep = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  qc = {
    INIT: "@@redux/INIT" + Ep(),
    REPLACE: "@@redux/REPLACE" + Ep(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Ep();
    },
  };
function dJ(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function rT(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(At(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(At(1));
    return n(rT)(e, t);
  }
  if (typeof e != "function") throw new Error(At(2));
  var i = e,
    a = t,
    o = [],
    l = o,
    u = !1;
  function s() {
    l === o && (l = o.slice());
  }
  function f() {
    if (u) throw new Error(At(3));
    return a;
  }
  function c(v) {
    if (typeof v != "function") throw new Error(At(4));
    if (u) throw new Error(At(5));
    var b = !0;
    return (
      s(),
      l.push(v),
      function () {
        if (b) {
          if (u) throw new Error(At(6));
          (b = !1), s();
          var y = l.indexOf(v);
          l.splice(y, 1), (o = null);
        }
      }
    );
  }
  function d(v) {
    if (!dJ(v)) throw new Error(At(7));
    if (typeof v.type > "u") throw new Error(At(8));
    if (u) throw new Error(At(9));
    try {
      (u = !0), (a = i(a, v));
    } finally {
      u = !1;
    }
    for (var b = (o = l), g = 0; g < b.length; g++) {
      var y = b[g];
      y();
    }
    return v;
  }
  function p(v) {
    if (typeof v != "function") throw new Error(At(10));
    (i = v), d({ type: qc.REPLACE });
  }
  function m() {
    var v,
      b = c;
    return (
      (v = {
        subscribe: function (y) {
          if (typeof y != "object" || y === null) throw new Error(At(11));
          function w() {
            y.next && y.next(f());
          }
          w();
          var h = b(w);
          return { unsubscribe: h };
        },
      }),
      (v[Rx] = function () {
        return this;
      }),
      v
    );
  }
  return (
    d({ type: qc.INIT }),
    (r = { dispatch: d, subscribe: c, getState: f, replaceReducer: p }),
    (r[Rx] = m),
    r
  );
}
function pJ(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: qc.INIT });
    if (typeof r > "u") throw new Error(At(12));
    if (typeof n(void 0, { type: qc.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(At(13));
  });
}
function hJ(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var a = Object.keys(n),
    o;
  try {
    pJ(n);
  } catch (l) {
    o = l;
  }
  return function (u, s) {
    if ((u === void 0 && (u = {}), o)) throw o;
    for (var f = !1, c = {}, d = 0; d < a.length; d++) {
      var p = a[d],
        m = n[p],
        v = u[p],
        b = m(v, s);
      if (typeof b > "u") throw (s && s.type, new Error(At(14)));
      (c[p] = b), (f = f || b !== v);
    }
    return (f = f || a.length !== Object.keys(u).length), f ? c : u;
  };
}
function vJ() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function yJ() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        a = function () {
          throw new Error(At(15));
        },
        o = {
          getState: i.getState,
          dispatch: function () {
            return a.apply(void 0, arguments);
          },
        },
        l = t.map(function (u) {
          return u(o);
        });
      return (
        (a = vJ.apply(void 0, l)(i.dispatch)),
        Dx(Dx({}, i), {}, { dispatch: a })
      );
    };
  };
}
function iT(e) {
  var t = function (r) {
    var i = r.dispatch,
      a = r.getState;
    return function (o) {
      return function (l) {
        return typeof l == "function" ? l(i, a, e) : o(l);
      };
    };
  };
  return t;
}
var aT = iT();
aT.withExtraArgument = iT;
const mJ = aT,
  gJ = hJ({
    session: qk,
    stocks: A2,
    watchlist: q2,
    portfolios: nM,
    orders: hM,
  });
let oT;
oT = yJ(mJ);
const bJ = (e) => rT(gJ, e, oT),
  wJ = bJ();
Ap.createRoot(document.getElementById("root")).render(
  P.jsx(T.StrictMode, {
    children: P.jsx(Qk, {
      children: P.jsxs(Oj, {
        store: wJ,
        children: [P.jsx(uJ, {}), P.jsx(Zk, {})],
      }),
    }),
  })
);
