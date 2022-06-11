(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    47: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'store', function () {
          return y;
        }),
        n.d(t, 'Context', function () {
          return C;
        });
      var r = n(0),
        c = n(10),
        a = n.n(c),
        s = n(2),
        o = n(5),
        u = n(9),
        i = n(11),
        l = n(1),
        h = Object(i.a)(function () {
          var e = Object(r.useState)(''),
            t = Object(u.a)(e, 2),
            n = t[0],
            c = t[1],
            a = Object(r.useState)(''),
            s = Object(u.a)(a, 2),
            o = s[0],
            i = s[1],
            h = Object(r.useContext)(C).store;
          return Object(l.jsxs)('div', {
            children: [
              Object(l.jsx)('input', {
                onChange: function (e) {
                  return c(e.target.value);
                },
                value: n,
                type: 'text',
                placeholder: 'Email',
              }),
              Object(l.jsx)('input', {
                onChange: function (e) {
                  return i(e.target.value);
                },
                value: o,
                type: 'password',
                placeholder: '\u041f\u0430\u0440\u043e\u043b\u044c',
              }),
              Object(l.jsx)('button', {
                onClick: function () {
                  return h.login(n, o);
                },
                children: '\u041b\u043e\u0433\u0438\u043d',
              }),
              Object(l.jsx)('button', {
                onClick: function () {
                  return h.registration(n, o);
                },
                children:
                  '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
              }),
            ],
          });
        }),
        p = n(6),
        b = n(7),
        f = n(8),
        j = n.n(f),
        v = 'http://localhost:3001/api',
        d = j.a.create({ withCredentials: !0, baseURL: v });
      d.interceptors.request.use(function (e) {
        return (
          (e.headers.Authorization = 'Bearer '.concat(
            localStorage.getItem('token')
          )),
          e
        );
      }),
        d.interceptors.response.use(
          function (e) {
            return e;
          },
          (function () {
            var e = Object(o.a)(
              Object(s.a)().mark(function e(t) {
                var n, r;
                return Object(s.a)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = t.config),
                            401 != t.response.status ||
                              !t.config ||
                              t.config._isRetry)
                          ) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (n._isRetry = !0),
                            (e.prev = 3),
                            (e.next = 6),
                            j.a.get(''.concat(v, '/refresh'), {
                              withCredentials: !0,
                            })
                          );
                        case 6:
                          return (
                            (r = e.sent),
                            localStorage.setItem('token', r.data.accessToken),
                            e.abrupt('return', d.request(n))
                          );
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(3)),
                            console.log(
                              '\u041d\u0415 \u0410\u0412\u0422\u041e\u0420\u0418\u0417\u041e\u0412\u0410\u041d'
                            );
                        case 14:
                          throw t;
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 11]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        );
      var O = d,
        g = (function () {
          function e() {
            Object(p.a)(this, e);
          }
          return (
            Object(b.a)(e, null, [
              {
                key: 'fetchUsers',
                value: function () {
                  return O.get('/users');
                },
              },
            ]),
            e
          );
        })(),
        k = Object(i.a)(function () {
          var e = Object(r.useContext)(C).store,
            t = Object(r.useState)([]),
            n = Object(u.a)(t, 2),
            c = n[0],
            a = n[1];
          function i() {
            return p.apply(this, arguments);
          }
          function p() {
            return (p = Object(o.a)(
              Object(s.a)().mark(function e() {
                var t;
                return Object(s.a)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), g.fetchUsers();
                        case 3:
                          (t = e.sent), a(t.data), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            )).apply(this, arguments);
          }
          return (
            Object(r.useEffect)(function () {
              localStorage.getItem('token') && e.checkAuth();
            }, []),
            e.isLoading
              ? Object(l.jsx)('div', {
                  children: '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...',
                })
              : e.isAuth
              ? Object(l.jsxs)('div', {
                  children: [
                    Object(l.jsx)('h1', {
                      children: e.isAuth
                        ? '\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d '.concat(
                            e.user.email
                          )
                        : '\u0410\u0412\u0422\u041e\u0420\u0418\u0417\u0423\u0419\u0422\u0415\u0421\u042c',
                    }),
                    Object(l.jsx)('button', {
                      onClick: function () {
                        return e.logout();
                      },
                      children: '\u0412\u044b\u0439\u0442\u0438',
                    }),
                    Object(l.jsx)('div', {
                      children: Object(l.jsx)('button', {
                        onClick: i,
                        children:
                          '\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439',
                      }),
                    }),
                    c.map(function (e) {
                      return Object(l.jsx)('div', { children: e.email }, e.email);
                    }),
                  ],
                })
              : Object(l.jsxs)('div', {
                  children: [
                    Object(l.jsx)(h, {}),
                    Object(l.jsx)('button', {
                      onClick: i,
                      children:
                        '\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439',
                    }),
                  ],
                })
          );
        }),
        x = n(3),
        m = (function () {
          function e() {
            Object(p.a)(this, e);
          }
          return (
            Object(b.a)(e, null, [
              {
                key: 'login',
                value: (function () {
                  var e = Object(o.a)(
                    Object(s.a)().mark(function e(t, n) {
                      return Object(s.a)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                'return',
                                O.post('/login', { email: t, password: n })
                              );
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'registration',
                value: (function () {
                  var e = Object(o.a)(
                    Object(s.a)().mark(function e(t, n) {
                      return Object(s.a)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                'return',
                                O.post('/registration', { email: t, password: n })
                              );
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'logout',
                value: (function () {
                  var e = Object(o.a)(
                    Object(s.a)().mark(function e() {
                      return Object(s.a)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt('return', O.post('/logout'));
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        w = (function () {
          function e() {
            Object(p.a)(this, e),
              (this.user = {}),
              (this.isAuth = !1),
              (this.isLoading = !1),
              Object(x.d)(this);
          }
          return (
            Object(b.a)(e, [
              {
                key: 'setAuth',
                value: function (e) {
                  this.isAuth = e;
                },
              },
              {
                key: 'setUser',
                value: function (e) {
                  this.user = e;
                },
              },
              {
                key: 'setLoading',
                value: function (e) {
                  this.isLoading = e;
                },
              },
              {
                key: 'login',
                value: (function () {
                  var e = Object(o.a)(
                    Object(s.a)().mark(function e(t, n) {
                      var r, c, a;
                      return Object(s.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), m.login(t, n);
                              case 3:
                                (r = e.sent),
                                  console.log(r),
                                  localStorage.setItem('token', r.data.accessToken),
                                  this.setAuth(!0),
                                  this.setUser(r.data.user),
                                  (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(0)),
                                  console.log(
                                    null === (c = e.t0.response) ||
                                      void 0 === c ||
                                      null === (a = c.data) ||
                                      void 0 === a
                                      ? void 0
                                      : a.message
                                  );
                              case 13:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'registration',
                value: (function () {
                  var e = Object(o.a)(
                    Object(s.a)().mark(function e(t, n) {
                      var r, c, a;
                      return Object(s.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0), (e.next = 3), m.registration(t, n)
                                );
                              case 3:
                                (r = e.sent),
                                  localStorage.setItem('token', r.data.accessToken),
                                  this.setAuth(!0),
                                  this.setUser(r.data.user),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  console.log(
                                    null === (c = e.t0.response) ||
                                      void 0 === c ||
                                      null === (a = c.data) ||
                                      void 0 === a
                                      ? void 0
                                      : a.message
                                  );
                              case 12:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'logout',
                value: (function () {
                  var e = Object(o.a)(
                    Object(s.a)().mark(function e() {
                      var t, n;
                      return Object(s.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), m.logout();
                              case 3:
                                e.sent,
                                  localStorage.removeItem('token'),
                                  this.setAuth(!1),
                                  this.setUser({}),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  console.log(
                                    null === (t = e.t0.response) ||
                                      void 0 === t ||
                                      null === (n = t.data) ||
                                      void 0 === n
                                      ? void 0
                                      : n.message
                                  );
                              case 12:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 9]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'checkAuth',
                value: (function () {
                  var e = Object(o.a)(
                    Object(s.a)().mark(function e() {
                      var t, n, r;
                      return Object(s.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.setLoading(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  j.a.get(''.concat(v, '/refresh'), {
                                    withCredentials: !0,
                                  })
                                );
                              case 4:
                                (t = e.sent),
                                  console.log(t),
                                  localStorage.setItem('token', t.data.accessToken),
                                  this.setAuth(!0),
                                  this.setUser(t.data.user),
                                  (e.next = 14);
                                break;
                              case 11:
                                (e.prev = 11),
                                  (e.t0 = e.catch(1)),
                                  console.log(
                                    null === (n = e.t0.response) ||
                                      void 0 === n ||
                                      null === (r = n.data) ||
                                      void 0 === r
                                      ? void 0
                                      : r.message
                                  );
                              case 14:
                                return (
                                  (e.prev = 14), this.setLoading(!1), e.finish(14)
                                );
                              case 17:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 11, 14, 17]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        y = new w(),
        C = Object(r.createContext)({ store: y });
      a.a.render(
        Object(l.jsx)(C.Provider, {
          value: { store: y },
          children: Object(l.jsx)(k, {}),
        }),
        document.getElementById('root')
      );
    },
  },
  [[47, 1, 2]],
]);
//# sourceMappingURL=main.7f9ea1fb.chunk.js.map
