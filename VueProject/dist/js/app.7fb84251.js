(function(e) {
    function t(t) {
        for (var s, o, l = t[0], n = t[1], c = t[2], d = 0, u = []; d < l.length; d++) o = l[d], Object.prototype.hasOwnProperty.call(r, o) && r[o] && u.push(r[o][0]), r[o] = 0;
        for (s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
        h && h(t);
        while (u.length) u.shift()();
        return a.push.apply(a, c || []), i()
    }

    function i() {
        for (var e, t = 0; t < a.length; t++) {
            for (var i = a[t], s = !0, l = 1; l < i.length; l++) {
                var n = i[l];
                0 !== r[n] && (s = !1)
            }
            s && (a.splice(t--, 1), e = o(o.s = i[0]))
        }
        return e
    }
    var s = {},
        r = {
            app: 0
        },
        a = [];

    function o(t) {
        if (s[t]) return s[t].exports;
        var i = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.m = e, o.c = s, o.d = function(e, t, i) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) o.d(i, s, function(t) {
                return e[t]
            }.bind(null, s));
        return i
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/VueProject/dist/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        n = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var c = 0; c < l.length; c++) t(l[c]);
    var h = n;
    a.push([0, "chunk-vendors"]), i()
})({
    0: function(e, t, i) {
        e.exports = i("56d7")
    },
    "2a29": function(e, t, i) {
        e.exports = i.p + "img/arrow-right.b9c76fcd.svg"
    },
    3709: function(e, t, i) {},
    4678: function(e, t, i) {
        var s = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function r(e) {
            var t = a(e);
            return i(t)
        }

        function a(e) {
            if (!i.o(s, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return s[e]
        }
        r.keys = function() {
            return Object.keys(s)
        }, r.resolve = a, e.exports = r, r.id = "4678"
    },
    "56d7": function(e, t, i) {
        "use strict";
        i.r(t);
        i("e260"), i("e6cf"), i("cca6"), i("a79d"), i("d3b7");
        var s = i("2b0e"),
            r = i("2f62"),
            a = i("1da1"),
            o = (i("96cf"), {
                actions: {
                    receiveIntroStatus: function(e, t) {
                        return Object(a["a"])(regeneratorRuntime.mark((function i() {
                            return regeneratorRuntime.wrap((function(i) {
                                while (1) switch (i.prev = i.next) {
                                    case 0:
                                        e.commit("updateIntroStatus", t);
                                    case 1:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }
                },
                mutations: {
                    updateIntroStatus: function(e, t) {
                        e.progressAxios.countRequestAxios += t, t > 0 ? (e.progressAxios.maxRequestAxios += t, clearTimeout(e.timerLoadedContent), clearTimeout(e.timerLeaveIntro)) : e.progressAxios.loadedResponseAxios -= t, 0 === e.progressAxios.countRequestAxios ? (clearTimeout(e.timerDelayLoaded), e.timerLoadedContent = window.setTimeout((function() {
                            e.progressAxios.statusResponseAxios = !0, e.progressAxios.introSPA = !1
                        }), 400), e.timerLeaveIntro = window.setTimeout((function() {
                            e.intro = !1
                        }), 900)) : (e.progressAxios.statusResponseAxios = !1, 1 === e.progressAxios.countRequestAxios && (e.timerDelayLoaded = window.setTimeout((function() {
                            0 !== e.progressAxios.countRequestAxios && (e.progressAxios.introSPA = !0)
                        }), 2e3)))
                    }
                },
                state: {
                    intro: !0,
                    progressAxios: {
                        countRequestAxios: 0,
                        maxRequestAxios: 0,
                        loadedResponseAxios: 0,
                        statusResponseAxios: !1,
                        introSPA: !1
                    },
                    timerLoadedContent: {},
                    timerLeaveIntro: {},
                    timerDelayLoaded: {}
                },
                getters: {
                    getIntroStatus: function(e) {
                        return e.intro
                    },
                    getProgressAxios: function(e) {
                        return e.progressAxios
                    }
                }
            }),
            l = {
                actions: {
                    receiveAppClass: function(e, t) {
                        return Object(a["a"])(regeneratorRuntime.mark((function i() {
                            var s, r, a;
                            return regeneratorRuntime.wrap((function(i) {
                                while (1) switch (i.prev = i.next) {
                                    case 0:
                                        s = t.appClass, r = t.showSeparator, "undefined" === typeof r && (r = !0), "undefined" === typeof s && (s = ""), a = {
                                            appClass: s,
                                            showSeparator: r
                                        }, e.commit("updateAppClass", a);
                                    case 5:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }
                },
                mutations: {
                    updateAppClass: function(e, t) {
                        e.arStyle = t
                    }
                },
                state: {
                    arStyle: {
                        appClass: {},
                        showSeparator: !0
                    }
                },
                getters: {
                    getAppClass: function(e) {
                        return e.arStyle
                    }
                }
            },
            n = {
                actions: {
                    receiveCheckPosition: function(e) {
                        return Object(a["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.commit("updateCheckPosition");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                mutations: {
                    updateCheckPosition: function(e) {
                        e.checkPosition = !e.checkPosition
                    }
                },
                state: {
                    checkPosition: !1
                },
                getters: {
                    startCheckPosition: function(e) {
                        return e.checkPosition
                    }
                }
            },
            c = {
                actions: {
                    receiveArSrcImg: function(e, t) {
                        return Object(a["a"])(regeneratorRuntime.mark((function i() {
                            var s, r, a, o;
                            return regeneratorRuntime.wrap((function(i) {
                                while (1) switch (i.prev = i.next) {
                                    case 0:
                                        s = t.src, r = t.title, a = t.ind, o = [], "undefined" === typeof a && (a = 0), "undefined" === typeof r && (r = ""), o.push({
                                            src: s,
                                            title: r,
                                            ind: a
                                        }), e.commit("updateArSrcImg", o);
                                    case 6:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }
                },
                mutations: {
                    updateArSrcImg: function(e, t) {
                        e.arImg = t
                    }
                },
                state: {
                    arImg: {}
                },
                getters: {
                    getImgGallery: function(e) {
                        return e.arImg
                    }
                }
            },
            h = (i("4e82"), {
                actions: {
                    receiveParamForm: function(e, t) {
                        return Object(a["a"])(regeneratorRuntime.mark((function i() {
                            var s, r, a, o, l, n, c;
                            return regeneratorRuntime.wrap((function(i) {
                                while (1) switch (i.prev = i.next) {
                                    case 0:
                                        s = t.id, r = t.getOnlyFields, a = t.sort, o = t.order, l = t.arFilter, n = t.title, "undefined" === typeof s && (s = 0), "undefined" === typeof n && (n = "консультация"), c = {
                                            id: s,
                                            getOnlyFields: r,
                                            sort: a,
                                            order: o,
                                            arFilter: l,
                                            title: n
                                        }, e.commit("updateParamForm", c);
                                    case 5:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }
                },
                mutations: {
                    updateParamForm: function(e, t) {
                        e.paramForm = t
                    }
                },
                state: {
                    paramForm: 0
                },
                getters: {
                    getParamForm: function(e) {
                        return e.paramForm
                    }
                }
            }),
            d = {
                actions: {
                    receiveParamScroll: function(e, t) {
                        return Object(a["a"])(regeneratorRuntime.mark((function i() {
                            var s;
                            return regeneratorRuntime.wrap((function(i) {
                                while (1) switch (i.prev = i.next) {
                                    case 0:
                                        s = t.pathRoute, e.commit("updateParamScroll", s);
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }
                },
                mutations: {
                    updateParamScroll: function(e, t) {
                        e.paramScroll[t] = window.pageYOffset
                    }
                },
                state: {
                    paramScroll: {}
                },
                getters: {
                    getParamScroll: function(e) {
                        return e.paramScroll
                    }
                }
            },
            u = {
                actions: {
                    receiveCacheData: function(e, t) {
                        var i = t.id,
                            s = t.cacheData;
                        e.commit("setCacheData", {
                            cacheData: s,
                            id: i
                        })
                    }
                },
                mutations: {
                    setCacheData: function(e, t) {
                        var i = t.cacheData,
                            s = t.id;
                        e.cacheData[s] = i
                    }
                },
                state: {
                    cacheData: {}
                },
                getters: {
                    cacheData: function(e) {
                        return e.cacheData
                    }
                }
            };
        s["default"].use(r["a"]);
        var m = new r["a"].Store({
                modules: {
                    introStatus: o,
                    appStyle: l,
                    updatePositionFooter: n,
                    lightBoxStore: c,
                    callFormStore: h,
                    saveScrollPosition: d,
                    bitrixStore: u
                }
            }),
            p = i("8c4f"),
            v = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "main-wrap",
                    style: e.paddingAppTop,
                    attrs: {
                        id: "app"
                    }
                }, [i("intro", {
                    attrs: {
                        "height-header": e.heightHeader
                    }
                }), i("header-bar", {
                    attrs: {
                        showSeparator: e.getAppClass.showSeparator
                    }
                }), i("transition", {
                    attrs: {
                        name: "change-page",
                        mode: "out-in",
                        duration: {
                            leave: 900
                        }
                    }
                }, [i("router-view")], 1), e.disableFooter ? e._e() : i("footer-bar", {
                    attrs: {
                        "show-contacts": !0
                    }
                })], 1)
            },
            S = [],
            f = (i("159b"), i("ac1f"), i("466d"), function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "header container",
                    class: [{
                        stopAnimation: e.getIntroStatus
                    }],
                    style: e.widthStyle
                }, [i("div", {
                    staticClass: "header-bar row"
                }, [i("logo", {
                    staticClass: "header-logo col-xxl-4 col-5 col-auto"
                }), i("menu-link", {
                    staticClass: "top-menu animation-show-move-down-head-bar col-xxl-12 col-11",
                    attrs: {
                        arMenu: e.$topMenu
                    },
                    on: {
                        openSelectedMenu: function(t) {
                            return e.openSelectedMenu(t)
                        }
                    }
                }), i("div", {
                    staticClass: "right-side-bar animation-show-move-down-head-bar col-xl-7 col-auto offset-auto",
                    attrs: {
                        itemscope: "",
                        itemtype: "http://schema.org/Organization"
                    }
                }, [i("phone", {
                    staticClass: "phone hide-line"
                }), i("div", {
                    staticClass: "btn-burger animation-show-deformation-burg",
                    class: {
                        open: e.showRightMenu
                    },
                    on: {
                        click: function(t) {
                            return e.openRightMenu()
                        }
                    }
                }, [i("span")])], 1)], 1), i("separator", {
                    attrs: {
                        show: e.statusSeparator,
                        "static-separator": !0
                    }
                }), i("selected-menu", {
                    attrs: {
                        "id-block": this.idBlock
                    },
                    on: {
                        closeSelectedMenu: function(t) {
                            return e.closeSelectedMenu()
                        }
                    }
                }), i("right-menu", {
                    class: {
                        "show-right-menu": e.showRightMenu
                    },
                    attrs: {
                        "count-favourite": e.countFavourite,
                        "active-line-btn": e.activeLineBtn
                    },
                    on: {
                        closeRightMenu: function(t) {
                            return e.closeRightMenu()
                        }
                    }
                })], 1)
            }),
            E = [],
            C = (i("1276"), function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return e.arResult.arProperty ? i("a", {
                    attrs: {
                        itemprop: "telephone",
                        href: "tel:" + this.phoneLink
                    }
                }, [e._v(e._s(e.arResult.arProperty.CONTACT_PHONE.VALUE))]) : e._e()
            }),
            g = [],
            b = (i("5319"), i("caad"), i("2532"), i("b0c0"), i("9154"));
        s["default"].use(b["a"]);
        var T = i("bc3a"),
            P = {
                methods: {
                    GetList: function(e, t, i, r, a) {
                        var o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
                            l = s["default"].prototype.$device,
                            n = "";
                        l.isDesktop ? n = "desktop" : l.isTablet || l.client.name.toLowerCase().includes("mobile") && window.innerWidth >= 769 ? n = "tablet" : (l.isMobile || l.client.name.toLowerCase().includes("mobile") && window.innerWidth <= 768) && (n = "mobile"), o && m.dispatch("receiveIntroStatus", 1);
                        var c = s["default"].prototype.$hostname + "/backComponents/CallToServer.php";
                        return T.post(c, {
                            arSort: e,
                            arFilter: t,
                            arGroupBy: i,
                            arNavStartParams: r,
                            arSelect: a,
                            device: n
                        }).then((function(e) {
                            return o && m.dispatch("receiveIntroStatus", -1), e.data
                        })).catch((function(e) {
                            return console.log(e), null
                        }))
                    },
                    getFieldsForm: function(e, t, i, r, a) {
                        var o = s["default"].prototype.$hostname + "/backComponents/GetFormFields.php";
                        return T.post(o, {
                            formId: e,
                            getOnlyFields: t,
                            sort: i,
                            order: r,
                            arFilter: a
                        }).then((function(e) {
                            return e.data
                        })).catch((function(e) {
                            return console.log(e), null
                        }))
                    }
                }
            },
            w = {
                name: "Phone",
                mixins: [P],
                data: function() {
                    return {
                        phoneLink: "",
                        arResult: {}
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                created: function() {
                    var e = this,
                        t = {
                            SORT: "ASC"
                        },
                        i = {
                            IBLOCK_ID: 6,
                            ACTIVE: "Y"
                        },
                        s = ["ID", "IBLOCK_ID", "NAME", "CONTACT_PHONE"];
                    this.bitrixStore[i.IBLOCK_ID] ? (this.arResult = this.bitrixStore[i.IBLOCK_ID].ITEMS[0], this.phoneLink = this.arResult.arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, "")) : P.methods.GetList(t, i, !1, !1, s).then((function(t) {
                        e.arResult = t.ITEMS[0], e.phoneLink = e.arResult.arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, ""), e.$store.dispatch("receiveCacheData", {
                            id: i.IBLOCK_ID,
                            cacheData: t
                        })
                    }))
                }
            },
            _ = w,
            A = i("2877"),
            I = Object(A["a"])(_, C, g, !1, null, "0b9aa595", null),
            R = I.exports,
            L = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("router-link", {
                    attrs: {
                        "active-class": "is-active",
                        to: "/"
                    }
                }, [s("img", {
                    staticClass: "logo-img animation-show-move-down",
                    attrs: {
                        width: "78",
                        height: "47",
                        src: i("9b19")
                    }
                }), s("img", {
                    staticClass: "animation-show-move-down-head-bar",
                    attrs: {
                        width: "109",
                        height: "48",
                        src: i("f989")
                    }
                })])
            },
            O = [],
            y = {
                name: "Logo",
                data: function() {
                    return {}
                },
                mounted: function() {}
            },
            x = y,
            V = Object(A["a"])(x, L, O, !1, null, null, null),
            k = V.exports,
            F = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", e._l(e.arMenu, (function(t, s) {
                    return i("div", {
                        key: s
                    }, [t.path.includes(":code") ? i("div", {
                        staticClass: "selected-menu",
                        on: {
                            click: function(i) {
                                return e.$emit("openSelectedMenu", t.idBlock)
                            }
                        }
                    }, [i("a", {
                        staticClass: "link-menu"
                    }, [e._v(" " + e._s(t.name) + " ")])]) : i("a", {
                        staticClass: "link-menu",
                        class: [{
                            active: t.path === e.$route.path
                        }],
                        attrs: {
                            href: t.path
                        },
                        on: {
                            click: function(t) {
                                return e.changePage(s)
                            }
                        }
                    }, [e._v(" " + e._s(t.name) + " ")])])
                })), 0)
            },
            D = [],
            M = {
                name: "MenuLink",
                props: ["arMenu"],
                data: function() {
                    return {
                        positionMenu: [],
                        nextMenu: null
                    }
                },
                watch: {
                    "$route.path": function() {
                        this.nextMenu = null
                    }
                },
                methods: {
                    changePage: function(e) {
                        event.preventDefault(), this.arMenu[e].path !== this.$route.path && this.$router.push(this.arMenu[e].path)
                    }
                }
            },
            N = M,
            B = Object(A["a"])(N, F, D, !1, null, "4284a5ff", null),
            j = B.exports,
            U = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "separator"
                }, [i("transition", {
                    attrs: {
                        name: "show-separator"
                    }
                }, [(e.getProgressAxios.statusResponseAxios || e.staticSeparator) && e.show ? i("i") : e._e()])], 1)
            },
            $ = [],
            W = {
                name: "Separator",
                props: ["show", "staticSeparator"],
                computed: {
                    getIntroStatus: function() {
                        return this.$store.getters.getIntroStatus
                    },
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                }
            },
            G = W,
            H = Object(A["a"])(G, U, $, !1, null, "7a8feb72", null),
            z = H.exports,
            K = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("transition", {
                    attrs: {
                        name: "popUpMenu"
                    }
                }, [this.idBlock > 0 && null != this.idBlock && e.arResult && e.arResult.length > 0 ? i("div", {
                    staticClass: "menu-sections container"
                }, [i("div", {
                    staticClass: "row"
                }, e._l(e.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "link-block",
                        class: [{
                            active: t.arFields.DETAIL_PAGE_URL === e.$route.path
                        }],
                        on: {
                            mouseover: function(i) {
                                return e.hoverMenuCell(t.arFields.CODE)
                            },
                            mouseout: function(t) {
                                return e.mouseoutMenuCell()
                            },
                            click: function(i) {
                                return e.routeDetailPage(t.arFields.DETAIL_PAGE_URL)
                            }
                        }
                    }, [t.arFields && t.arFields.PREVIEW_PICTURE_INFO.SRC ? i("div", {
                        staticClass: "bg-service-menu",
                        style: "background-image: url(" + e.$hostname + (t.arProperty.IMG_MENU.FILE_INFO.SRC && t.arProperty.IMG_MENU ? t.arProperty.IMG_MENU.FILE_INFO.SRC : t.arFields.PREVIEW_PICTURE_INFO.SRC) + ");"
                    }) : e._e(), t.arFields ? i("base-button", {
                        attrs: {
                            text: t.arFields.NAME,
                            link: "",
                            typeBtn: "link-arrow-right"
                        }
                    }) : e._e(), t.arFields && t.arFields.SECTION_INFO ? i("span", {
                        staticClass: "name-section"
                    }, [e._v(e._s(t.arFields.SECTION_INFO.NAME))]) : e._e()], 1)
                })), 0), i("div", {
                    staticClass: "line-close",
                    class: {
                        active: e.hoverLineClose
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("closeSelectedMenu")
                        }
                    }
                }, [i("span")])]) : e._e()])
            },
            Y = [],
            X = (i("a9e3"), function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("a", {
                    class: e.typeBtn,
                    attrs: {
                        href: e.link
                    },
                    on: {
                        click: function(t) {
                            e.$emit("clickBtn"), e.routeDetailPage()
                        }
                    }
                }, ["link-arrow-right" === e.typeBtn ? i("span", {
                    domProps: {
                        innerHTML: e._s(e.arrowInText)
                    }
                }) : i("span", {
                    domProps: {
                        innerHTML: e._s(e.text)
                    }
                })])
            }),
            q = [],
            J = (i("9911"), {
                name: "BaseButton",
                props: ["text", "link", "typeBtn"],
                data: function() {
                    return {
                        arrowInText: ""
                    }
                },
                watch: {
                    text: function() {
                        "link-arrow-right" === this.typeBtn && (this.arrowInText = "", this.pushArrowInText())
                    }
                },
                methods: {
                    routeDetailPage: function() {
                        "" !== this.link && "javascript:void(0);" !== this.link && (event.preventDefault(), this.$router.push(this.link))
                    },
                    pushArrowInText: function() {
                        var e = this.text.split(" ");
                        if (e.length > 1) {
                            for (var t = 0; t < e.length - 1; t++) " " !== e[t] && "" !== e[t] && (this.arrowInText += e[t] + " ");
                            this.arrowInText += '<span class="arrowWithText">' + e[e.length - 1] + '<svg width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 12.336H43.5992L33.5683 2.35308L35.9327 0L50 14L35.9327 28L33.5683 25.6469L43.5994 15.6638H0V12.336Z" fill="#383838"/>\n</svg>\n </span>'
                        } else this.arrowInText += '<span class="arrowWithText">' + this.text + '<svg width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 12.336H43.5992L33.5683 2.35308L35.9327 0L50 14L35.9327 28L33.5683 25.6469L43.5994 15.6638H0V12.336Z" fill="#383838"/>\n</svg>\n </span>'
                    }
                },
                mounted: function() {
                    "link-arrow-right" === this.typeBtn && this.pushArrowInText()
                },
                updated: function() {}
            }),
            Z = J,
            Q = Object(A["a"])(Z, X, q, !1, null, "6968ebdf", null),
            ee = Q.exports,
            te = {
                name: "selected-menu",
                components: {
                    BaseButton: ee
                },
                props: {
                    idBlock: Number
                },
                watch: {
                    idBlock: function(e) {
                        var t = this;
                        this.arFilter.IBLOCK_ID = e, this.bitrixStore[e] ? this.arResult = this.bitrixStore[e].ITEMS : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect, !1).then((function(i) {
                            t.arResult = i.ITEMS, t.$store.dispatch("receiveCacheData", {
                                id: e,
                                cacheData: i
                            })
                        }))
                    }
                },
                data: function() {
                    return {
                        arResult: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: this.idBlock,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {},
                        hoverLineClose: !1
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    routeDetailPage: function(e) {
                        "" !== e && "javascript:void(0);" !== e && (event.preventDefault(), this.$router.push(e))
                    },
                    hoverMenuCell: function(e) {
                        window.innerWidth >= 768 && "derevyannye-doma" === e && (this.hoverLineClose = !0), window.innerWidth < 768 && "kirpichnye-doma" === e && (this.hoverLineClose = !0)
                    },
                    mouseoutMenuCell: function() {
                        this.hoverLineClose = !1
                    },
                    handleResize: function() {
                        this.$emit("closeSelectedMenu")
                    }
                },
                created: function() {
                    window.addEventListener("resize", this.handleResize)
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.handleResize)
                }
            },
            ie = te,
            se = Object(A["a"])(ie, K, Y, !1, null, "3bb1fc6a", null),
            re = se.exports,
            ae = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "container right-menu"
                }, [i("div", {
                    staticClass: "menu-wrap"
                }, [i("menu-cell", {
                    staticClass: "first-line",
                    attrs: {
                        path: "/projects/"
                    },
                    on: {
                        mouseover: function(t) {
                            return e.hoverMenuCell("projects")
                        },
                        mouseout: function(t) {
                            return e.mouseoutMenuCell()
                        }
                    }
                }, [i("menu-cell-project", {
                    on: {
                        closeRightMenu: function(t) {
                            return e.$emit("closeRightMenu")
                        }
                    }
                })], 1), i("menu-cell", {
                    staticClass: "blueBg first-line",
                    attrs: {
                        path: "/works/"
                    }
                }, [i("menu-cell-work", {
                    on: {
                        closeRightMenu: function(t) {
                            return e.$emit("closeRightMenu")
                        }
                    }
                })], 1), i("menu-cell", {
                    staticClass: "greenBg first-line",
                    attrs: {
                        path: ""
                    },
                    on: {
                        mouseover: function(t) {
                            return e.hoverMenuCell("service")
                        },
                        click: function(t) {
                            return e.triggerToggleAccordion("toggleServiceAccordion")
                        },
                        mouseout: function(t) {
                            return e.mouseoutMenuCell()
                        }
                    }
                }, [i("menu-cell-service", {
                    attrs: {
                        "toggle-accordion": e.toggleServiceAccordion
                    },
                    on: {
                        closeRightMenu: function(t) {
                            return e.$emit("closeRightMenu")
                        }
                    }
                })], 1), i("menu-cell", {
                    staticClass: "second-line",
                    attrs: {
                        path: "/company/"
                    }
                }, [i("h3", [e._v("О компании")])]), i("menu-cell", {
                    staticClass: "second-line",
                    attrs: {
                        path: ""
                    },
                    on: {
                        click: function(t) {
                            return e.triggerToggleAccordion("togglePartnerAccordion")
                        }
                    }
                }, [i("menu-cell-partner", {
                    attrs: {
                        "toggle-accordion": e.togglePartnerAccordion
                    }
                })], 1), i("menu-cell", {
                    staticClass: "second-line",
                    attrs: {
                        path: "/price/"
                    }
                }, [i("h3", [e._v("Цены")])]), i("menu-cell", {
                    staticClass: "third-line",
                    attrs: {
                        path: "/contacts/"
                    }
                }, [i("h4", [e._v("Контакты")])]), i("menu-cell", {
                    staticClass: "third-line",
                    attrs: {
                        path: "/favourites/"
                    }
                }, [i("div", {
                    staticClass: "title-wrap-menu"
                }, [i("h4", [e._v("Избранное")]), 0 !== e.countFavourite ? i("span", [e._v(e._s(e.countFavourite))]) : e._e()])]), i("menu-cell", {
                    staticClass: "third-line",
                    attrs: {
                        path: "/blog/"
                    }
                }, [i("h4", [e._v("Блог")])]), i("div", {
                    staticClass: "line-close",
                    class: {
                        active: e.hoverLineClose || e.activeLineBtn
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("closeRightMenu")
                        }
                    }
                }, [i("span")])], 1)])
            },
            oe = [],
            le = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "menu-cell",
                    class: [{
                        selected: this.$route.path === e.path
                    }],
                    on: {
                        mouseover: function(t) {
                            return e.$emit("mouseover")
                        },
                        mouseout: function(t) {
                            return e.$emit("mouseout")
                        },
                        click: function(t) {
                            e.changePage(e.path), e.$emit("click")
                        }
                    }
                }, [e._t("default")], 2)
            },
            ne = [],
            ce = {
                name: "MenuCell",
                props: {
                    path: String
                },
                methods: {
                    changePage: function(e) {
                        e !== this.$route.path && "" !== e && (this.$router.push(e), this.$emit("closeRightMenu"))
                    }
                }
            },
            he = ce,
            de = Object(A["a"])(he, le, ne, !1, null, "88de2400", null),
            ue = de.exports,
            me = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "project-cell-menu"
                }, [i("div", {
                    staticClass: "title-wrap-menu"
                }, [i("h2", [e._v("Проекты")]), i("span", [e._v(e._s(e.countAll))])]), i("div", {
                    staticClass: "link-list"
                }, e._l(e.filterArea, (function(t, s) {
                    return i("a", {
                        key: s,
                        staticClass: "hide-line",
                        attrs: {
                            href: "/projects/?&PROPERTY_AREA_FILTER=" + t.ID
                        },
                        domProps: {
                            innerHTML: e._s(t.VALUE)
                        },
                        on: {
                            click: function(i) {
                                return e.changePage("/projects/?&PROPERTY_AREA_FILTER=" + t.ID)
                            }
                        }
                    })
                })), 0)])
            },
            pe = [],
            ve = {
                name: "MenuCellProject",
                data: function() {
                    return {
                        filterArea: [],
                        countAll: "",
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 9,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL", "GET_FILTER"],
                        arNuvParam: {
                            iNumPage: 1,
                            nPageSize: 1,
                            realPageSize: 1
                        },
                        lazyLoadPage: {
                            iNumPage: 1,
                            nPageSize: 4
                        }
                    }
                },
                methods: {
                    changePage: function(e) {
                        event.preventDefault(), e !== this.$route.path && "" !== e && (this.$router.push(e), this.$emit("closeRightMenu"))
                    }
                },
                created: function() {
                    var e = this;
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.filterArea = t.infoBlock.FILTERS.AREA_FILTER.arProperty, e.countAll = t.infoBlock.ALL_COUNT_ITEM
                    }))
                }
            },
            Se = ve,
            fe = Object(A["a"])(Se, me, pe, !1, null, "5fb94232", null),
            Ee = fe.exports,
            Ce = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "work-cell-menu"
                }, [i("div", {
                    staticClass: "title-wrap-menu"
                }, [i("h2", [e._v("Наши работы")]), i("span", [e._v(e._s(e.countAll))])]), i("div", {
                    staticClass: "link-list"
                }, [i("a", {
                    staticClass: "hide-line",
                    attrs: {
                        href: "works/?gallery=video&sort=desc"
                    },
                    on: {
                        click: function(t) {
                            return e.changePage("/works/?gallery=video&sort=desc")
                        }
                    }
                }, [e._v(" видео ")]), i("a", {
                    staticClass: "hide-line",
                    attrs: {
                        href: "works/?gallery=photo&sort=desc"
                    },
                    on: {
                        click: function(t) {
                            return e.changePage("/works/?gallery=photo&sort=desc")
                        }
                    }
                }, [e._v(" фотогалереи ")])])])
            },
            ge = [],
            be = {
                name: "MenuCellWork",
                data: function() {
                    return {
                        filterArea: [],
                        countAll: "",
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 10,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL", "GET_FILTER"],
                        arNuvParam: {
                            iNumPage: 1,
                            nPageSize: 1,
                            realPageSize: 1
                        }
                    }
                },
                methods: {
                    changePage: function(e) {
                        event.preventDefault(), e !== this.$route.path && "" !== e && (this.$router.push(e), this.$emit("closeRightMenu"))
                    }
                },
                created: function() {
                    var e = this;
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.countAll = t.infoBlock.ALL_COUNT_ITEM
                    }))
                }
            },
            Te = be,
            Pe = Object(A["a"])(Te, Ce, ge, !1, null, "6298381b", null),
            we = Pe.exports,
            _e = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "service-cell-menu",
                    class: {
                        open: e.toggleAccordion
                    }
                }, [i("div", {
                    staticClass: "title-wrap-menu"
                }, [i("h2", [e._v("Услуги")]), i("span", [e._v(e._s(e.countAll))]), i("icon-base", {
                    class: "triangle-toggle-btn",
                    attrs: {
                        width: 14,
                        height: 12
                    }
                }, [i("triangle-down")], 1)], 1), i("div", {
                    staticClass: "accordion-body",
                    style: e.styleAccordion
                }, [i("div", {
                    staticClass: "section-list"
                }, e._l(e.arSection, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "link-list"
                    }, [i("p", [e._v(e._s(t.NAME))]), e._l(t.ITEMS, (function(t, s) {
                        return i("a", {
                            key: s,
                            staticClass: "hide-line",
                            class: [{
                                active: t.DETAIL_PAGE_URL === e.$route.path
                            }],
                            attrs: {
                                href: t.DETAIL_PAGE_URL
                            },
                            on: {
                                click: function(i) {
                                    return e.changePage(t.DETAIL_PAGE_URL)
                                }
                            }
                        }, [e._v(" " + e._s(t.NAME) + " ")])
                    }))], 2)
                })), 0)])])
            },
            Ae = [],
            Ie = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        type: "image/svg+xml",
                        width: e.width,
                        height: e.height,
                        viewBox: e.setViewBox,
                        role: "presentation",
                        id: e.iconName,
                        fill: "none"
                    }
                }, [i("g", [e._t("default")], 2)])
            },
            Re = [],
            Le = {
                name: "IconBase",
                props: {
                    iconName: {
                        type: String,
                        default: "icon"
                    },
                    width: {
                        type: [Number, String],
                        default: 26
                    },
                    height: {
                        type: [Number, String],
                        default: 26
                    }
                },
                computed: {
                    setViewBox: function() {
                        return "0 0 " + this.width + " " + this.height
                    }
                }
            },
            Oe = Le,
            ye = Object(A["a"])(Oe, Ie, Re, !1, null, "2f572ed2", null),
            xe = ye.exports,
            Ve = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("path", {
                    attrs: {
                        d: "M14 0L0 0L7 12L14 0Z",
                        fill: "#383838"
                    }
                })
            },
            ke = [],
            Fe = {
                name: "TriangleDown"
            },
            De = Fe,
            Me = Object(A["a"])(De, Ve, ke, !1, null, "5ae34ae6", null),
            Ne = Me.exports,
            Be = {
                name: "MenuCellService",
                components: {
                    TriangleDown: Ne,
                    IconBase: xe
                },
                props: ["toggleAccordion"],
                data: function() {
                    return {
                        arResult: [],
                        arSection: {},
                        countAll: 0,
                        styleAccordion: "",
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 11,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "DETAIL_PAGE_URL", "PREVIEW_PICTURE"],
                        arNuvParam: {
                            iNumPage: 1,
                            nPageSize: 30,
                            realPageSize: 30
                        }
                    }
                },
                watch: {
                    toggleAccordion: function(e) {
                        e ? this.openAccordion() : this.closeAccordion()
                    }
                },
                methods: {
                    changePage: function(e) {
                        event.preventDefault(), e !== this.$route.path && "" !== e && (this.$router.push(e), this.$emit("closeRightMenu"))
                    },
                    openAccordion: function() {
                        var e = document.querySelectorAll(".service-cell-menu .section-list")[0].clientHeight;
                        this.styleAccordion = "height:" + e + "px;"
                    },
                    closeAccordion: function() {
                        this.styleAccordion = ""
                    }
                },
                created: function() {
                    var e = this;
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        for (var i in e.arResult = t.ITEMS, e.countAll = t.infoBlock.ALL_COUNT_ITEM, e.arSection = {}, e.arResult) {
                            var s = e.arResult[i].arFields;
                            "undefined" === typeof e.arSection[s.SECTION_INFO.CODE] ? (e.arSection[s.SECTION_INFO.CODE] = s.SECTION_INFO, e.arSection[s.SECTION_INFO.CODE]["ITEMS"] = [{
                                NAME: s.NAME,
                                CODE: s.CODE,
                                DETAIL_PAGE_URL: s.DETAIL_PAGE_URL
                            }]) : e.arSection[s.SECTION_INFO.CODE]["ITEMS"].push({
                                NAME: s.NAME,
                                CODE: s.CODE,
                                DETAIL_PAGE_URL: s.DETAIL_PAGE_URL
                            })
                        }
                        e.$store.dispatch("receiveCacheData", {
                            id: e.arFilter.IBLOCK_ID,
                            cacheData: t
                        })
                    }))
                }
            },
            je = Be,
            Ue = Object(A["a"])(je, _e, Ae, !1, null, "0a06659a", null),
            $e = Ue.exports,
            We = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "partner-cell-menu",
                    class: {
                        open: e.toggleAccordion
                    }
                }, [i("div", {
                    staticClass: "title-wrap-menu"
                }, [i("h3", [e._v("Партнеры")]), i("icon-base", {
                    class: "triangle-toggle-btn",
                    attrs: {
                        width: 14,
                        height: 12
                    }
                }, [i("triangle-down")], 1)], 1), i("div", {
                    staticClass: "accordion-body",
                    style: e.styleAccordion
                }, [i("div", {
                    staticClass: "section-list"
                }, e._l(e.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "link-list"
                    }, [i("a", {
                        key: s,
                        staticClass: "hide-line",
                        class: [{
                            active: t.arFields.DETAIL_PAGE_URL === e.$route.path
                        }],
                        attrs: {
                            href: t.arFields.DETAIL_PAGE_URL
                        },
                        on: {
                            click: function(i) {
                                return e.changePage(t.arFields.DETAIL_PAGE_URL)
                            }
                        }
                    }, [e._v(" " + e._s(t.arFields.NAME) + " ")])])
                })), 0)])])
            },
            Ge = [],
            He = {
                name: "MenuCellPartner",
                components: {
                    TriangleDown: Ne,
                    IconBase: xe
                },
                props: ["toggleAccordion"],
                data: function() {
                    return {
                        arResult: [],
                        arSection: {},
                        styleAccordion: "",
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 12,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "DETAIL_PAGE_URL"],
                        arNuvParam: {}
                    }
                },
                watch: {
                    toggleAccordion: function(e) {
                        e ? this.openAccordion() : this.closeAccordion()
                    }
                },
                methods: {
                    changePage: function(e) {
                        event.preventDefault(), event.stopPropagation(), e !== this.$route.path && "" !== e && (this.$router.push(e), this.$emit("closeRightMenu"))
                    },
                    openAccordion: function() {
                        var e = document.querySelectorAll(".partner-cell-menu .section-list")[0].clientHeight;
                        this.styleAccordion = "height:" + e + "px;"
                    },
                    closeAccordion: function() {
                        this.styleAccordion = ""
                    }
                },
                created: function() {
                    var e = this;
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS
                    }))
                }
            },
            ze = He,
            Ke = Object(A["a"])(ze, We, Ge, !1, null, "51af4f3e", null),
            Ye = Ke.exports,
            Xe = {
                name: "RightMenu",
                components: {
                    MenuCellPartner: Ye,
                    MenuCellService: $e,
                    MenuCellWork: we,
                    MenuCellProject: Ee,
                    MenuCell: ue
                },
                props: {
                    show: Boolean,
                    countFavourite: Number,
                    activeLineBtn: Boolean
                },
                data: function() {
                    return {
                        toggleServiceAccordion: !1,
                        togglePartnerAccordion: !1,
                        hoverLineClose: !1
                    }
                },
                methods: {
                    triggerToggleAccordion: function(e) {
                        this[e] = !this[e]
                    },
                    hoverMenuCell: function(e) {
                        (window.innerWidth >= 768 && "service" === e || window.innerWidth < 768 && "projects" === e) && (this.hoverLineClose = !0)
                    },
                    mouseoutMenuCell: function() {
                        this.hoverLineClose = !1
                    }
                }
            },
            qe = Xe,
            Je = Object(A["a"])(qe, ae, oe, !1, null, "fae4c04c", null),
            Ze = Je.exports,
            Qe = {
                methods: {
                    set: function(e, t, i) {
                        var s = new Date;
                        s.setDate(s.getDate() + i);
                        var r = escape(t) + (null == i ? "" : "; expires=" + s.toUTCString());
                        document.cookie = e + "=" + r
                    },
                    get: function(e) {
                        var t = document.cookie,
                            i = t.indexOf(" " + e + "=");
                        if (-1 === i && (i = t.indexOf(e + "=")), -1 === i) t = null;
                        else {
                            i = t.indexOf("=", i) + 1;
                            var s = t.indexOf(";", i); - 1 === s && (s = t.length), t = unescape(t.substring(i, s))
                        }
                        return t
                    }
                }
            },
            et = {
                data: function() {
                    return {
                        timerStyle: null
                    }
                },
                methods: {
                    hidden: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = document.getElementsByTagName("body")[0],
                            s = 0,
                            r = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
                        window.innerWidth > 1199 && !r && t && (s = 8), i.style = "overflow: hidden; padding-right: " + s + "px;", e > 0 && "undefined" !== typeof e && (clearTimeout(this.timerStyle), this.timerStyle = setTimeout((function() {
                            i.style = ""
                        }), e))
                    },
                    show: function() {
                        var e = document.getElementsByTagName("body")[0];
                        e.style = ""
                    }
                }
            },
            tt = {
                name: "HeaderBar",
                components: {
                    RightMenu: Ze,
                    SelectedMenu: re,
                    Phone: R,
                    Logo: k,
                    MenuLink: j,
                    Separator: z
                },
                data: function() {
                    return {
                        statusSeparator: !0,
                        idBlock: 0,
                        showRightMenu: !1,
                        countFavourite: 0,
                        widthStyle: "",
                        activeLineBtn: !1
                    }
                },
                props: {
                    showSeparator: Boolean
                },
                watch: {
                    showSeparator: function(e) {
                        this.statusSeparator = e
                    },
                    "$route.path": function() {
                        this.closeSelectedMenu(), this.closeRightMenu()
                    }
                },
                computed: {
                    getIntroStatus: function() {
                        return this.$store.getters.getIntroStatus
                    }
                },
                methods: {
                    openSelectedMenu: function(e) {
                        this.idBlock = e, et.methods.hidden(!1, !0)
                    },
                    closeSelectedMenu: function() {
                        this.idBlock = 0, et.methods.show()
                    },
                    openRightMenu: function() {
                        var e = this;
                        document.querySelectorAll(".right-menu")[0].style.display = "block", setTimeout((function() {
                            return e.showRightMenu = !0
                        }), 100), et.methods.hidden(!1, !0);
                        var t = Qe.methods.get("favouriteId");
                        null !== t && "" !== t && (this.countFavourite = t.split(",").length), window.innerWidth < 768 && "/projects/" === this.$route.path ? this.activeLineBtn = !0 : this.activeLineBtn = !1
                    },
                    closeRightMenu: function() {
                        this.showRightMenu = !1, setTimeout((function() {
                            return document.querySelectorAll(".right-menu")[0].style.display = "none"
                        }), 500), et.methods.show()
                    }
                }
            },
            it = tt,
            st = Object(A["a"])(it, f, E, !1, null, "6e41b6f8", null),
            rt = st.exports,
            at = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return e.arProperty ? s("div", {
                    staticClass: "footer",
                    class: [{
                        container: !e.mainPage
                    }, {
                        stopAnimation: e.getIntroStatus
                    }, {
                        "change-page": e.changeScreen
                    }],
                    attrs: {
                        itemscope: "",
                        itemtype: "http://schema.org/Organization"
                    }
                }, [e.showContacts ? s("div", {
                    staticClass: "row contact-bar"
                }, [s("div", {
                    staticClass: "col-xl-7 col-md-11 order-1 contact",
                    class: [{
                        moveTop: e.elementVisibleScroll && e.elementVisibleScroll.contact.visible
                    }],
                    attrs: {
                        showScroll: "contact"
                    }
                }, [s("p", [e._v("контакты для связи:")]), s("div", [e.arProperty.CONTACT_PHONE.VALUE ? s("a", {
                    staticClass: "hide-line",
                    attrs: {
                        href: "tel:" + e.phoneLink,
                        itemprop: "telephone"
                    }
                }, [e._v(" " + e._s(e.arProperty.CONTACT_PHONE.VALUE) + " ")]) : e._e(), e.arProperty.CONTACT_MAIL.VALUE ? s("a", {
                    staticClass: "hide-line",
                    attrs: {
                        href: "mail:" + e.arProperty.CONTACT_MAIL.VALUE,
                        itemprop: "email"
                    }
                }, [e._v(" " + e._s(e.arProperty.CONTACT_MAIL.VALUE) + " ")]) : e._e()])]), s("div", {
                    staticClass: "col-xl-5 col-md-11 order-xl-2 order-md-3 order-4 social-link"
                }, [s("p", {
                    class: [{
                        moveTop: e.elementVisibleScroll.social.visible
                    }],
                    attrs: {
                        showScroll: "social"
                    }
                }, [e._v(" соцсети: ")]), s("div", {
                    class: [{
                        "opacity-animate": e.elementVisibleScroll.socialLink.visible
                    }],
                    attrs: {
                        showScroll: "socialLink"
                    }
                }, [e.arProperty.CONTACT_YOUTUBE.VALUE ? s("a", {
                    staticClass: "logo-social",
                    attrs: {
                        href: e.arProperty.CONTACT_YOUTUBE.VALUE
                    }
                }, [s("icon-base", {
                    attrs: {
                        "icon-name": "youtube-icon"
                    }
                }, [s("youtube-icon")], 1)], 1) : e._e(), e.arProperty.CONTACT_FACEBOOK.VALUE ? s("a", {
                    staticClass: "logo-social",
                    attrs: {
                        href: e.arProperty.CONTACT_FACEBOOK.VALUE
                    }
                }, [s("icon-base", {
                    attrs: {
                        "icon-name": "facebook-icon"
                    }
                }, [s("facebook-icon")], 1)], 1) : e._e(), e.arProperty.CONTACT_INSTAGRAM.VALUE ? s("a", {
                    staticClass: "logo-social",
                    attrs: {
                        href: e.arProperty.CONTACT_INSTAGRAM.VALUE
                    }
                }, [s("icon-base", {
                    attrs: {
                        "icon-name": "instagram-icon"
                    }
                }, [s("insta-icon")], 1)], 1) : e._e(), e.arProperty.CONTACT_VK.VALUE ? s("a", {
                    staticClass: "logo-social",
                    attrs: {
                        href: e.arProperty.CONTACT_VK.VALUE
                    }
                }, [s("icon-base", {
                    attrs: {
                        "icon-name": "vk-icon"
                    }
                }, [s("vk-icon")], 1)], 1) : e._e()])]), s("div", {
                    staticClass: "col-xl-6 col-md-12 order-xl-3 order-2 address",
                    class: [{
                        moveTop: e.elementVisibleScroll.address.visible
                    }],
                    attrs: {
                        showScroll: "address",
                        itemscope: "",
                        itemtype: "http://schema.org/PostalAddress"
                    }
                }, [s("p", [e._v("работаем:")]), s("div", [e.arProperty.CONTACT_CITY.VALUE ? s("span", {
                    attrs: {
                        itemprop: "addressLocality"
                    }
                }, [e._v(e._s(e.arProperty.CONTACT_CITY.VALUE))]) : e._e(), e._v(", "), e.arProperty.CONTACT_ADDRESS.VALUE ? s("span", {
                    attrs: {
                        itemprop: "streetAddress"
                    }
                }, [e._v(e._s(e.arProperty.CONTACT_ADDRESS.VALUE))]) : e._e(), e._v(" "), s("br"), e.arProperty.CONTACT_OFFICE.VALUE ? s("span", {
                    attrs: {
                        itemprop: "streetAddress"
                    }
                }, [e._v(" " + e._s(e.arProperty.CONTACT_OFFICE.VALUE))]) : e._e()])]), e.arProperty.CONTACT_TIME_WORK.VALUE ? s("div", {
                    staticClass: "col-xl-5 col-md-12 order-md-4 order-3 time-work",
                    class: [{
                        moveTop: e.elementVisibleScroll.timeWork.visible
                    }],
                    attrs: {
                        itemprop: "openingHours",
                        showScroll: "timeWork"
                    },
                    domProps: {
                        innerHTML: e._s(e.arProperty.CONTACT_TIME_WORK["~VALUE"].TEXT)
                    }
                }) : e._e()]) : e._e(), s("separator", {
                    attrs: {
                        show: !e.changeScreen && e.elementVisibleScroll.footer_separator.visible,
                        showScroll: "footer_separator",
                        "delay-animation": "600"
                    }
                }), s("div", {
                    staticClass: "copyright-bar row"
                }, [s("div", {
                    staticClass: "col-xl-7 col-md-11 hidden-mobile",
                    class: [{
                        moveTop: e.elementVisibleScroll.domvaVeka1.visible
                    }],
                    attrs: {
                        showScroll: "domvaVeka1"
                    }
                }, [s("p", [e._v("doma-veka.ru©" + e._s(e.fullYear))])]), s("div", {
                    staticClass: "col-xl-7 col-md-8 col-16 copyright-site",
                    class: [{
                        moveTop: e.elementVisibleScroll.copyright.visible
                    }],
                    attrs: {
                        showScroll: "copyright"
                    }
                }, [s("p", {
                    staticClass: "show-mobile"
                }, [e._v("doma-veka.ru©" + e._s(e.fullYear))]), s("base-button", {
                    attrs: {
                        link: "/privacy-policy/",
                        text: "политика конфиденциальности"
                    }
                })], 1), s("a", {
                    staticClass: "logo-sagirov col-auto offset-auto ",
                    attrs: {
                        target: "_blank",
                        href: "https://sagirov.com/"
                    }
                }, [s("p", {
                    class: [{
                        moveTop: e.elementVisibleScroll.made.visible
                    }],
                    attrs: {
                        showScroll: "made"
                    }
                }, [e._v("made in")]), s("div", {
                    class: [{
                        "animation-show-move-down": e.elementVisibleScroll.logoMr.visible
                    }],
                    attrs: {
                        showScroll: "logoMr"
                    }
                }, [s("img", {
                    attrs: {
                        width: "102",
                        height: "18",
                        src: i("dc76")
                    }
                })])])]), s("call-back-form")], 1) : e._e()
            },
            ot = [],
            lt = {
                methods: {
                    GetElements: function(e) {
                        for (var t = document.querySelectorAll(e + " [showScroll]"), i = [], s = 0; s < t.length; s++) {
                            var r = t[s].attributes["showScroll"].value,
                                a = e + " [showScroll ='" + r + "']",
                                o = document.querySelector(a).getBoundingClientRect().top + window.pageYOffset + document.body.clientTop,
                                l = t[s].attributes["delay-animation"] ? Number(t[s].attributes["delay-animation"].value) : 0,
                                n = t[s].attributes["delay-animation-width"] ? Number(t[s].attributes["delay-animation-width"].value) : 0;
                            (isNaN(l) || window.innerWidth > n && 0 !== n) && (l = 0), i[r] = {
                                nameId: r,
                                selectID: a,
                                elementPos: o,
                                visible: !1,
                                delayAnimation: l
                            }
                        }
                        return i
                    },
                    comparisonPosition: function(e) {
                        var t = window.pageYOffset,
                            i = function(i) {
                                if (null !== document.querySelector(e[i].selectID)) {
                                    var r = document.querySelector(e[i].selectID).offsetHeight;
                                    e[i].elementPos - (window.innerHeight - 10) < t && t < e[i].elementPos + r + 10 ? e[i].delayAnimation > 0 ? setTimeout((function() {
                                        s["default"].set(e[i], "visible", !0)
                                    }), e[i].delayAnimation) : s["default"].set(e[i], "visible", !0) : s["default"].set(e[i], "visible", !1)
                                }
                            };
                        for (var r in e) i(r);
                        return e
                    }
                }
            },
            nt = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("g", [i("circle", {
                    attrs: {
                        cx: "13.1582",
                        cy: "13",
                        r: "12.5",
                        stroke: "#383838",
                        fill: "#383838"
                    }
                }), i("circle", {
                    staticClass: "hover",
                    attrs: {
                        cx: "13.1582",
                        cy: "13",
                        r: "12.5",
                        stroke: "#383838",
                        fill: "#fff"
                    }
                }), i("path", {
                    attrs: {
                        d: "M17.3141 24.5359V15.6531H19.9016L20.2906 12.6484H17.3141V10.7359C17.3141 9.86874 17.5578 9.27811 18.8 9.27811H20.375V6.59686C20.1031 6.55936 19.1609 6.47968 18.0641 6.47968C15.7766 6.47968 14.2109 7.87655 14.2109 10.4406V12.6531H11.6328V15.6578H14.2109V24.9953L17.3141 24.5359Z",
                        fill: "#fff"
                    }
                })])
            },
            ct = [],
            ht = {
                name: "FacebookIcon"
            },
            dt = ht,
            ut = Object(A["a"])(dt, nt, ct, !1, null, "9f41fb68", null),
            mt = ut.exports,
            pt = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("g", [i("circle", {
                    attrs: {
                        cx: "13",
                        cy: "13",
                        r: "12.5",
                        stroke: "#383838",
                        fill: "#383838"
                    }
                }), i("circle", {
                    staticClass: "hover",
                    attrs: {
                        cx: "13",
                        cy: "13",
                        r: "12.5",
                        stroke: "#383838",
                        fill: "#fff"
                    }
                }), i("path", {
                    attrs: {
                        d: "M19.5378 14.7284C19.3868 14.5854 19.2358 14.4424 19.087 14.2971C18.5822 13.8046 18.5501 13.5191 18.9566 12.9519C19.1924 12.6214 19.4378 12.2977 19.6832 11.974C19.8984 11.6901 20.1137 11.4062 20.3225 11.1176C20.3372 11.0972 20.352 11.0768 20.3667 11.0564C20.7693 10.4998 21.1736 9.94068 21.3854 9.2742C21.5248 8.83446 21.4013 8.6405 20.9505 8.56341C20.8725 8.5499 20.7924 8.54916 20.7136 8.54916L18.0389 8.54597C17.7094 8.54106 17.5277 8.68469 17.4108 8.97662C17.2537 9.37143 17.0919 9.76549 16.9043 10.1463C16.4793 11.0098 16.0047 11.8441 15.3386 12.551C15.3292 12.5609 15.3197 12.5711 15.3101 12.5813C15.1706 12.7305 15.014 12.8981 14.7842 12.8223C14.4778 12.7106 14.3869 12.2048 14.3921 12.0341L14.3896 8.94741C14.3302 8.50644 14.232 8.31002 13.7942 8.22409L11.0166 8.22458C10.6456 8.22458 10.46 8.36797 10.2619 8.59974C10.1477 8.7338 10.1133 8.82071 10.3481 8.86515C10.8089 8.95256 11.0689 9.25112 11.1377 9.71344C11.2482 10.4522 11.2405 11.1937 11.1767 11.9354C11.1581 12.152 11.121 12.368 11.035 12.5701C10.9007 12.8881 10.6837 12.9526 10.3989 12.7572C10.1408 12.5802 9.95965 12.3302 9.78213 12.0796C9.11603 11.1382 8.58447 10.1232 8.15087 9.05642C8.02541 8.74829 7.80935 8.56144 7.4828 8.55628C6.68042 8.54352 5.87805 8.54155 5.07568 8.55702C4.59273 8.56611 4.44885 8.80034 4.64552 9.23811C5.51934 11.1819 6.49186 13.0715 7.76171 14.7931C8.41383 15.6762 9.16218 16.4563 10.1291 17.009C11.2251 17.6355 12.4043 17.8241 13.6472 17.7659C14.2288 17.7386 14.4036 17.5872 14.4304 17.0075C14.4491 16.611 14.4937 16.2162 14.6894 15.8599C14.8814 15.5098 15.1726 15.443 15.5078 15.661C15.6757 15.7698 15.8166 15.908 15.9504 16.0548C16.0588 16.1732 16.1659 16.2929 16.273 16.4126C16.4895 16.6545 16.706 16.8966 16.9335 17.128C17.3595 17.5621 17.8648 17.8182 18.4997 17.7657L20.9582 17.7661C21.3539 17.7399 21.5597 17.255 21.3318 16.8128C21.1723 16.5027 20.9626 16.227 20.7401 15.9603C20.3716 15.5178 19.9547 15.1231 19.5378 14.7284Z",
                        fill: "#fff"
                    }
                })])
            },
            vt = [],
            St = {
                name: "VkIcon"
            },
            ft = St,
            Et = Object(A["a"])(ft, pt, vt, !1, null, "be64cde0", null),
            Ct = Et.exports,
            gt = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("g", [i("circle", {
                    attrs: {
                        cx: "13",
                        cy: "13",
                        r: "12.5",
                        stroke: "#383838",
                        fill: "#383838"
                    }
                }), i("circle", {
                    staticClass: "hover",
                    attrs: {
                        cx: "13",
                        cy: "13",
                        r: "12.5",
                        stroke: "#383838",
                        fill: "#fff"
                    }
                }), i("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M13 16.5383C11.0457 16.5383 9.46149 14.9543 9.46149 13C9.46149 11.0457 11.0457 9.46167 13 9.46167C14.9541 9.46167 16.5383 11.0457 16.5383 13C16.5383 14.9543 14.9541 16.5383 13 16.5383ZM15.2969 13C15.2969 14.2686 14.2686 15.2969 13 15.2969C11.7314 15.2969 10.7031 14.2686 10.7031 13C10.7031 11.7314 11.7314 10.7031 13 10.7031C14.2686 10.7031 15.2969 11.7314 15.2969 13Z",
                        fill: "#fff"
                    }
                }), i("path", {
                    attrs: {
                        d: "M16.6782 10.1487C16.2216 10.1487 15.8513 9.77844 15.8513 9.32178C15.8513 8.86511 16.2216 8.49487 16.6782 8.49487C17.1349 8.49487 17.5051 8.86511 17.5051 9.32178C17.5049 9.77844 17.1349 10.1487 16.6782 10.1487Z",
                        fill: "#fff"
                    }
                }), i("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M19.5288 17.5135C19.6991 17.0752 19.8157 16.5744 19.8491 15.8409C19.8828 15.1061 19.8906 14.8713 19.8906 13C19.8906 11.1287 19.8828 10.8939 19.8492 10.1591C19.8157 9.4256 19.6993 8.9248 19.5288 8.48645C19.356 8.02667 19.0846 7.61029 18.7341 7.26605C18.3899 6.91541 17.9733 6.64404 17.5135 6.47101C17.0752 6.3009 16.5744 6.18445 15.8409 6.15112C15.1061 6.11743 14.8713 6.10938 13 6.10938C11.1287 6.10938 10.8939 6.11743 10.1591 6.15094C9.4256 6.18445 8.9248 6.3009 8.48645 6.47119C8.02667 6.64423 7.61011 6.91541 7.26605 7.26605C6.91541 7.61011 6.64404 8.02667 6.47101 8.48645C6.30072 8.9248 6.18427 9.4256 6.15094 10.1591C6.11725 10.8939 6.10938 11.1287 6.10938 13C6.10938 14.8713 6.11725 15.1061 6.15112 15.8411C6.18445 16.5744 6.30109 17.0754 6.47137 17.5135C6.64441 17.9733 6.91559 18.3899 7.26605 18.7339C7.61029 19.0846 8.02667 19.3558 8.48663 19.5288C8.9248 19.6991 9.42578 19.8156 10.1591 19.8491C10.8941 19.8826 11.1287 19.8906 13.0002 19.8906C14.8715 19.8906 15.1063 19.8826 15.8411 19.8491C16.5744 19.8156 17.0754 19.6991 17.5135 19.5288C18.4391 19.1708 19.1708 18.4391 19.5288 17.5135ZM18.3716 8.93616C18.2612 8.63696 18.085 8.36615 17.8561 8.14386C17.6339 7.91498 17.3632 7.73883 17.0638 7.62842C16.821 7.53412 16.4563 7.42188 15.7845 7.3913C15.0577 7.35815 14.8398 7.35101 13 7.35101C11.16 7.35101 10.9421 7.35797 10.2155 7.39111C9.5437 7.42188 9.17877 7.53412 8.93616 7.62842C8.63678 7.73883 8.36597 7.91498 8.14386 8.14386C7.91498 8.36615 7.73883 8.63678 7.62823 8.93616C7.53394 9.17896 7.42169 9.54388 7.39111 10.2157C7.35797 10.9423 7.35083 11.1602 7.35083 13.0002C7.35083 14.84 7.35797 15.0579 7.39111 15.7847C7.42169 16.4565 7.53394 16.8212 7.62823 17.064C7.73883 17.3634 7.91479 17.634 8.14368 17.8563C8.36597 18.0852 8.6366 18.2614 8.93597 18.3718C9.17877 18.4662 9.5437 18.5785 10.2155 18.6091C10.9421 18.6422 11.1598 18.6492 12.9998 18.6492C14.84 18.6492 15.0579 18.6422 15.7843 18.6091C16.4561 18.5785 16.821 18.4662 17.0638 18.3718C17.6648 18.14 18.1398 17.665 18.3716 17.064C18.4659 16.8212 18.5781 16.4565 18.6089 15.7847C18.642 15.0579 18.649 14.84 18.649 13.0002C18.649 11.1602 18.642 10.9423 18.6089 10.2157C18.5783 9.54388 18.4661 9.17896 18.3716 8.93616Z",
                        fill: "#fff"
                    }
                })])
            },
            bt = [],
            Tt = {
                name: "InstaIcon"
            },
            Pt = Tt,
            wt = Object(A["a"])(Pt, gt, bt, !1, null, "dfb3789e", null),
            _t = wt.exports,
            At = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("g", [i("circle", {
                    attrs: {
                        cx: "13",
                        cy: "13",
                        r: "12.5",
                        stroke: "#383838",
                        fill: "#383838"
                    }
                }), i("circle", {
                    staticClass: "hover",
                    attrs: {
                        cx: "13",
                        cy: "13",
                        r: "12.5",
                        stroke: "#383838",
                        fill: "#fff"
                    }
                }), i("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M20.1895 16.6194C20.4982 15.4459 20.4982 13.0123 20.4982 13.0123C20.4982 13.0123 20.5107 10.5665 20.1895 9.39301C20.0165 8.75067 19.51 8.24402 18.8677 8.07117C17.6942 7.75 13.0001 7.75 13.0001 7.75C13.0001 7.75 8.30597 7.75 7.13245 8.0589C6.50238 8.23175 5.98346 8.75067 5.81061 9.39301C5.50171 10.5665 5.50171 13 5.50171 13C5.50171 13 5.50171 15.4459 5.81061 16.607C5.98364 17.2493 6.49011 17.756 7.13245 17.9288C8.31824 18.25 13.0001 18.25 13.0001 18.25C13.0001 18.25 17.6942 18.25 18.8677 17.9411C19.51 17.7682 20.0165 17.2618 20.1895 16.6194ZM15.4088 13L11.5054 15.2482V10.7518L15.4088 13Z",
                        fill: "#fff"
                    }
                })])
            },
            It = [],
            Rt = {
                name: "YoutubeIcon"
            },
            Lt = Rt,
            Ot = Object(A["a"])(Lt, At, It, !1, null, "9587e9e6", null),
            yt = Ot.exports,
            xt = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("transition", {
                    attrs: {
                        name: "pop-up-form"
                    }
                }, [e.show ? i("div", {
                    staticClass: "pop-up-wrap",
                    on: {
                        click: function(t) {
                            return e.closeForm()
                        }
                    }
                }, [i("div", {
                    staticClass: "form-call-back",
                    on: {
                        click: function(t) {
                            return e.stopPropagation()
                        }
                    }
                }, [i("div", {
                    staticClass: "block-from"
                }, [i("div", {
                    staticClass: "title-wrap"
                }, [i("h1", [e._v(e._s(e.getParamForm.title))]), i("p", {
                    staticClass: "subtitle"
                }, [e._v("Оставьте свои контактные данные и мы обязательно с вами свяжемся")])]), i("form", [i("div", {
                    staticClass: "list-fields",
                    class: [{
                        hidden: e.sendSuccess || e.sendCheck
                    }]
                }, e._l(e.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "field-form",
                        class: [{
                            hiddenField: t.COMMENTS
                        }]
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.arValues["form_" + t.FIELD_TYPE + "_" + t.ANSWER_ID],
                            expression: "arValues['form_' + field.FIELD_TYPE + '_' + field.ANSWER_ID]"
                        }],
                        class: [{
                            error: t.error
                        }],
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: e.arValues["form_" + t.FIELD_TYPE + "_" + t.ANSWER_ID]
                        },
                        on: {
                            input: function(i) {
                                i.target.composing || e.$set(e.arValues, "form_" + t.FIELD_TYPE + "_" + t.ANSWER_ID, i.target.value)
                            }
                        }
                    }), i("span", [e._v(e._s(t.TITLE)), "Y" === t.REQUIRED ? i("i", [e._v("*")]) : e._e()])])
                })), 0), i("transition", {
                    attrs: {
                        name: "pop-up-form"
                    }
                }, [e.sendSuccess ? i("h2", {
                    staticClass: "success-form"
                }, [e._v("Ваше сообщение отправленно")]) : e._e()]), i("transition", {
                    attrs: {
                        name: "pop-up-form"
                    }
                }, [e.sendCheck ? i("h2", {
                    staticClass: "success-form"
                }, [e._v("Ваше сообщение проверяется")]) : e._e()]), i("div", {
                    staticClass: "send-block"
                }, [i("p", [e._v("нажимая на кнопку «Отправить» вы даете согласие на "), i("base-button", {
                    attrs: {
                        link: "/privacy-policy/",
                        text: "обработку персональных данных"
                    }
                })], 1), i("base-button", {
                    class: [{
                        disabled: e.disableButton
                    }],
                    attrs: {
                        text: "отправить",
                        link: "javascript:void(0);",
                        "type-btn": e.typeBtn
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.sendMail(e.getParamForm.id, e.arValues)
                        }
                    }
                })], 1)], 1)]), i("div", {
                    staticClass: "line-close",
                    on: {
                        click: function(t) {
                            return e.closeForm()
                        }
                    }
                })])]) : e._e()])
            },
            Vt = [],
            kt = i("760d");
        s["default"].use(kt["VueReCaptcha"], {
            siteKey: "6LcZhfUaAAAAAIvhXgSqeq80yPDE2Mp5VU21_S71"
        });
        var Ft = i("bc3a"),
            Dt = {
                name: "CallBackForm",
                components: {
                    BaseButton: ee
                },
                data: function() {
                    return {
                        show: !1,
                        arResult: [],
                        arValues: {},
                        checkErrorInput: 0,
                        disableButton: !1,
                        sendSuccess: !1,
                        sendCheck: !1,
                        typeBtn: "secondary-button",
                        reCaptcha: {}
                    }
                },
                watch: {
                    getParamForm: function(e) {
                        0 !== e.id && (this.updateFieldsForm(e), et.methods.hidden(!1, !0))
                    }
                },
                computed: {
                    getParamForm: function() {
                        return this.$store.getters.getParamForm
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    createFieldsForm: function(e) {
                        for (var t in this.arResult = e, this.arResult) "hidden" === this.arResult[t].COMMENTS ? this.$set(this.arValues, ["form_" + this.arResult[t].FIELD_TYPE + "_" + this.arResult[t].ANSWER_ID], window.location.href) : this.$set(this.arValues, ["form_" + this.arResult[t].FIELD_TYPE + "_" + this.arResult[t].ANSWER_ID], "");
                        this.show = !0
                    },
                    updateFieldsForm: function(e) {
                        var t = this;
                        this.arValues = {};
                        var i = "Form_" + e.id;
                        this.bitrixStore[i] ? this.createFieldsForm(this.bitrixStore[i]) : P.methods.getFieldsForm(e.id, e.getOnlyFields, e.sort, e.order, e.arFilter).then((function(e) {
                            t.createFieldsForm(e), t.$store.dispatch("receiveCacheData", {
                                id: i,
                                cacheData: e
                            })
                        }))
                    },
                    recaptcha: function() {
                        var e = this;
                        return Object(a["a"])(regeneratorRuntime.mark((function t() {
                            var i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$recaptchaLoaded();
                                    case 2:
                                        return t.next = 4, e.$recaptcha("sendMail");
                                    case 4:
                                        return i = t.sent, t.abrupt("return", i);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    sendMail: function(e, t) {
                        var i = this;
                        for (var r in this.checkErrorInput = 0, t) {
                            var a = r.replace(/[^+\d]/g, "");
                            if (t[r].length <= 1)
                                for (var o in this.arResult) this.arResult[o].ANSWER_ID === a && "Y" === this.arResult[o].REQUIRED && (this.$set(this.arResult[o], "error", !0), this.checkErrorInput++);
                            else
                                for (var l in this.arResult) this.arResult[l].ANSWER_ID === a && "Y" === this.arResult[l].REQUIRED && (this.$set(this.arResult[l], "error", !1), this.checkErrorInput--)
                        }
                        this.checkErrorInput < 0 && (this.sendCheck = !0, this.$metrika.reachGoal("ZVONOK"), this.recaptcha().then((function(r) {
                            i.disableButton = !0;
                            var a = s["default"].prototype.$hostname + "/backComponents/WriteWebForm.php";
                            return Ft.post(a, {
                                formId: e,
                                arValues: t,
                                token: r
                            }).then((function(e) {
                                return setTimeout((function() {
                                    i.sendSuccess = !0, i.sendCheck = !1
                                }), 500), setTimeout((function() {
                                    return i.activeForm()
                                }), 6e3), e.data
                            })).catch((function(e) {
                                return console.log(e), null
                            }))
                        })))
                    },
                    closeForm: function() {
                        this.show = !1, et.methods.show()
                    },
                    stopPropagation: function() {
                        event.stopPropagation()
                    },
                    activeForm: function() {
                        this.sendSuccess = !1, this.disableButton = !1
                    },
                    handleResize: function() {
                        window.innerWidth < 768 ? this.typeBtn = "base-btn revers" : this.typeBtn = "secondary-button"
                    }
                },
                created: function() {
                    window.addEventListener("resize", this.handleResize), window.innerWidth < 768 ? this.typeBtn = "base-btn revers" : this.typeBtn = "secondary-button"
                }
            },
            Mt = Dt,
            Nt = Object(A["a"])(Mt, xt, Vt, !1, null, "213d7ce2", null),
            Bt = Nt.exports,
            jt = {
                name: "FooterBar",
                mixins: [P, lt],
                components: {
                    BaseButton: ee,
                    CallBackForm: Bt,
                    Separator: z,
                    IconBase: xe,
                    FacebookIcon: mt,
                    VkIcon: Ct,
                    InstaIcon: _t,
                    YoutubeIcon: yt
                },
                props: {
                    mainPage: Boolean,
                    checkPosition: Boolean,
                    showContacts: Boolean
                },
                computed: {
                    getIntroStatus: function() {
                        return this.$store.getters.getIntroStatus
                    },
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    startCheckPosition: function() {
                        return this.$store.getters.startCheckPosition
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                watch: {
                    mainPage: function(e) {
                        var t = this;
                        !0 === e && setTimeout((function() {
                            t.startAnimation()
                        }), 200)
                    },
                    startCheckPosition: function() {
                        this.startAnimation()
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        var t = this;
                        this.changeAxios = !0, this.changeScreen = !0, e && (setTimeout((function() {
                            t.changeScreen = !1
                        }), 400), this.startAnimation())
                    },
                    $route: function() {
                        var e = this;
                        this.changeAxios = !1, this.changeScreen = !0, setTimeout((function() {
                            e.changeAxios || (e.changeScreen = !1, e.startAnimation())
                        }), 1500)
                    }
                },
                data: function() {
                    return {
                        changeAxios: !1,
                        fullYear: (new Date).getFullYear(),
                        phoneLink: "",
                        arProperty: {
                            CONTACT_PHONE: {},
                            CONTACT_MAIL: {},
                            CONTACT_YOUTUBE: {},
                            CONTACT_FACEBOOK: {},
                            CONTACT_INSTAGRAM: {},
                            CONTACT_VK: {},
                            CONTACT_CITY: {},
                            CONTACT_ADDRESS: {},
                            CONTACT_OFFICE: {},
                            CONTACT_TIME_WORK: {}
                        },
                        elementVisibleScroll: {
                            contact: {},
                            social: {},
                            socialLink: {},
                            address: {},
                            timeWork: {},
                            domvaVeka1: {},
                            copyright: {},
                            made: {},
                            logoMr: {},
                            footer: {},
                            footer_separator: {}
                        },
                        changeScreen: !1,
                        arElementsShow: []
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".footer");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation()
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize);
                    var t = {
                            SORT: "ASC"
                        },
                        i = {
                            IBLOCK_ID: 6,
                            ACTIVE: "Y"
                        },
                        s = ["ID", "IBLOCK_ID", "NAME", "CONTACT_PHONE"];
                    this.bitrixStore[i.IBLOCK_ID] ? (this.arProperty = this.bitrixStore[i.IBLOCK_ID].ITEMS[0].arProperty, this.phoneLink = this.arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, "")) : P.methods.GetList(t, i, !1, !1, s).then((function(t) {
                        e.arProperty = t.ITEMS[0].arProperty, e.phoneLink = e.arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, ""), e.$store.dispatch("receiveCacheData", {
                            id: i.IBLOCK_ID,
                            cacheData: t
                        })
                    }))
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            Ut = jt,
            $t = Object(A["a"])(Ut, at, ot, !1, null, "be2d9a1c", null),
            Wt = $t.exports,
            Gt = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("transition", {
                    attrs: {
                        name: "show-intro"
                    }
                }, [e.getIntroStatus && !e.getProgressAxios.statusResponseAxios || e.firstVisit || e.getProgressAxios.introSPA ? i("div", {
                    staticClass: "intro"
                }, [!e.getProgressAxios.introSPA || e.getIntroStatus ? i("img", {
                    class: {
                        flash: !e.getProgressAxios.statusResponseAxios && !e.firstVisit
                    },
                    attrs: {
                        src: e.$hostname + "/preloader/preloader.svg?" + e.random
                    }
                }) : e._e(), e.getIntroStatus || e.firstVisit ? e._e() : i("img", {
                    attrs: {
                        src: e.$hostname + "/preloader/preloader-spa.svg?" + e.random
                    }
                })]) : e._e()])
            },
            Ht = [],
            zt = {
                name: "intro",
                props: {
                    heightHeader: Number
                },
                data: function() {
                    return {
                        firstVisit: !0,
                        random: 0,
                        styleIntro: ""
                    }
                },
                computed: {
                    getIntroStatus: function() {
                        return this.$store.getters.getIntroStatus
                    },
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                watch: {
                    getIntroStatus: function(e) {
                        var t = document.location.hash.replace("#", ""),
                            i = document.location.pathname;
                        !e && ("/" !== i || "" !== t || window.innerWidth <= 1199) && et.methods.show()
                    }
                },
                created: function() {
                    "" === document.getElementsByTagName("body")[0].style.overflow && et.methods.hidden(!1, !0), this.random = 100 * Math.random()
                },
                mounted: function() {
                    var e = this;
                    setTimeout((function() {
                        e.firstVisit = !1
                    }), 1800)
                }
            },
            Kt = zt,
            Yt = (i("90ed"), Object(A["a"])(Kt, Gt, Ht, !1, null, "25c97363", null)),
            Xt = Yt.exports,
            qt = {
                name: "App",
                components: {
                    intro: Xt,
                    HeaderBar: rt,
                    FooterBar: Wt
                },
                data: function() {
                    return {
                        disableFooter: !1,
                        paddingAppTop: "",
                        heightHeader: 0,
                        bodyClass: "",
                        onpopstateStatus: !1,
                        tmpRoutePath: this.$route.path,
                        timerLoadedContent: null
                    }
                },
                computed: {
                    getAppClass: function() {
                        return this.$store.getters.getAppClass
                    },
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    getParamScroll: function() {
                        return this.$store.getters.getParamScroll
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e ? this.updatePaddingTop() : this.tmpRoutePath !== this.$route.path && (window.scrollTo(0, 0), this.tmpRoutePath = this.$route.path)
                    },
                    "getProgressAxios.countRequestAxios": function(e) {
                        var t = this;
                        0 === e && (clearTimeout(this.timerDelayLoaded), this.timerLoadedContent = window.setTimeout((function() {
                            t.onpopstateStatus && (t.onpopstateStatus = !1, window.scrollTo(0, t.getParamScroll[t.$route.path]))
                        }), 200))
                    },
                    "getAppClass.appClass": function(e) {
                        var t = document.getElementsByTagName("body")[0];
                        e ? ("" !== this.bodyClass && t.classList.remove(this.bodyClass), t.classList.add(e), this.bodyClass = e) : "" !== this.bodyClass && t.classList.remove(this.bodyClass)
                    },
                    $route: function(e, t) {
                        this.$store.dispatch("receiveParamScroll", {
                            pathRoute: t.path
                        })
                    }
                },
                methods: {
                    updatePaddingTop: function() {
                        var e = document.querySelectorAll(".header"),
                            t = 0,
                            i = "";
                        e.forEach((function(e) {
                            t += e.offsetHeight;
                            var s = window.getComputedStyle(e).marginBottom,
                                r = window.getComputedStyle(e).marginTop;
                            parseInt(s.match(/\d+/)) > 0 && (i += " + " + s), parseInt(r.match(/\d+/)) > 0 && (i += " + " + r)
                        })), this.heightHeader = t, this.paddingAppTop = "padding-top: calc(" + t + "px" + i + ");"
                    },
                    handleResize: function() {
                        this.updatePaddingTop();
                        var e = document.getElementsByTagName("html")[0],
                            t = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
                        window.innerWidth > 1199 && !t ? e.classList.add("scroll-style") : e.classList.remove("scroll-style")
                    }
                },
                created: function() {
                    window.addEventListener("resize", this.handleResize), this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorLightGray",
                        showSeparator: !0
                    });
                    var e = document.getElementsByTagName("html")[0],
                        t = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
                    window.innerWidth > 1199 && !t && e.classList.add("scroll-style");
                    var i = this;
                    window.onpopstate = function() {
                        i.onpopstateStatus = !0
                    }
                },
                mounted: function() {
                    "/" !== document.location.pathname && "/contacts/" !== document.location.pathname || (this.disableFooter = !0)
                },
                updated: function() {
                    var e = this;
                    "/" === document.location.pathname || "/contacts/" === document.location.pathname ? this.disableFooter = !0 : setTimeout((function() {
                        e.disableFooter = !1
                    }), 1e3)
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.handleResize)
                }
            },
            Jt = qt,
            Zt = Object(A["a"])(Jt, v, S, !1, null, null, null),
            Qt = Zt.exports,
            ei = i("932e"),
            ti = i.n(ei),
            ii = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "projects-page container ",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios && !e.changeProjectList
                    }]
                }, [s("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(e._s(e.$route.name))]), s("separator", {
                    attrs: {
                        show: !0,
                        "static-separator": e.changeProjectList
                    }
                }), s("div", {
                    staticClass: "wrap-filter",
                    class: [{
                        "opacity-animate": e.elementVisibleScroll.wrapFilter.visible || "" !== e.fixedFilterStyle
                    }],
                    attrs: {
                        showScroll: "wrapFilter"
                    }
                }, [s("div", {
                    staticClass: "imaginary-filter",
                    style: e.imaginaryHeightFilter
                }, [s("div", {
                    staticClass: "row filter-search-bar",
                    class: [{
                        disableCheck: e.changeFilter
                    }],
                    style: e.fixedFilterStyle
                }, [s("p", {
                    staticClass: "mobile-title-filter col-23 titleAccordion",
                    class: [{
                        moveTop: e.elementVisibleScroll.wrapFilter.visible || "" !== e.fixedFilterStyle
                    }],
                    on: {
                        click: function(t) {
                            return e.accordion()
                        }
                    }
                }, [e._v(" Фильтры ")]), s("div", {
                    staticClass: "col-xxl-12 filters-wrap",
                    class: {
                        active: e.searchBarAccordion.status
                    },
                    style: e.searchBarAccordion.style
                }, e._l(this.arFilters, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "filter-type",
                        class: [{
                            "col-lg-6": "MATERIAL_FILTER" !== i
                        }, {
                            "col-lg-5": "MATERIAL_FILTER" === i
                        }]
                    }, [s("p", {
                        class: [{
                            moveTop: e.elementVisibleScroll.wrapFilter.visible || "" !== e.fixedFilterStyle
                        }, {
                            active: i === e.activeAccordion && "" !== e.filtersAccordion.style
                        }],
                        on: {
                            click: function(t) {
                                return e.accordionMobile(i)
                            }
                        }
                    }, [e._v(" " + e._s(t.NAME) + " ")]), s("div", {
                        staticClass: "accordion-mobile-hidden",
                        style: i === e.activeAccordion ? e.filtersAccordion.style : ""
                    }, [s("div", {
                        staticClass: "filer-list"
                    }, e._l(t.arProperty, (function(t, i) {
                        return s("span", {
                            key: i,
                            class: [{
                                active: e.arFilter["PROPERTY_" + t.PROPERTY_CODE] && e.arFilter["PROPERTY_" + t.PROPERTY_CODE].indexOf(t.ID) >= 0
                            }, {
                                moveTop: e.elementVisibleScroll.wrapFilter.visible || "" !== e.fixedFilterStyle
                            }, {
                                disable: t.disable
                            }],
                            domProps: {
                                innerHTML: e._s(t.VALUE)
                            },
                            on: {
                                click: function(i) {
                                    e.updateListProjects(["PROPERTY_" + t.PROPERTY_CODE, t.ID]), t.active = !t.active
                                }
                            }
                        })
                    })), 0)])])
                })), 0), s("div", {
                    staticClass: "col-xxl-11 search-wrap"
                }, [s("div", {
                    staticClass: "search-bar",
                    class: {
                        "error-found": e.projectNameNotFound
                    }
                }, [s("img", {
                    attrs: {
                        width: "19",
                        height: "19",
                        src: i("e770")
                    },
                    on: {
                        click: function(t) {
                            return e.updateListProjects(["%NAME", e.message])
                        }
                    }
                }), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.message,
                        expression: "message"
                    }],
                    staticClass: "search-input",
                    attrs: {
                        size: "26",
                        placeholder: "поиск по номеру проекта..."
                    },
                    domProps: {
                        value: e.message
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.updateListProjects(["%NAME", e.message])
                        },
                        input: function(t) {
                            t.target.composing || (e.message = t.target.value)
                        }
                    }
                }), s("div", {
                    staticClass: "search-btn",
                    on: {
                        click: function(t) {
                            return e.updateListProjects(["%NAME", e.message])
                        }
                    }
                }, [s("icon-base", {
                    attrs: {
                        width: "18",
                        height: "18"
                    }
                }, [s("search-icon")], 1)], 1)])]), s("div", {
                    staticClass: "triangle-toggle-btn",
                    class: {
                        active: e.searchBarAccordion.status
                    },
                    on: {
                        click: function(t) {
                            return e.accordion()
                        }
                    }
                }, [s("img", {
                    attrs: {
                        width: "14",
                        height: "12",
                        src: i("d565")
                    }
                })]), s("separator", {
                    staticClass: "col-23",
                    attrs: {
                        show: !0,
                        "static-separator": e.changeProjectList
                    }
                })], 1)])]), s("div", {
                    class: [{
                        "change-screen": e.changeFilter
                    }]
                }, [e.arResult && e.elementVisibleScroll ? s("listing-projects", {
                    attrs: {
                        "ar-result": e.arResult,
                        "width-order": e.widthOrder,
                        "element-visible-scroll": e.elementVisibleScroll
                    },
                    on: {
                        imgLoaded: function(t) {
                            return e.startAnimation()
                        }
                    }
                }) : e.arResult ? e._e() : s("div", {
                    staticClass: "error-project"
                }, ["" === e.projectNameNotFound ? s("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.errorFilter.visible
                    }],
                    attrs: {
                        showScroll: "errorFilter"
                    }
                }, [e._v(" по вашему запросу отсутствует проект ")]) : s("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.errorFilter.visible
                    }],
                    attrs: {
                        showScroll: "errorFilter"
                    }
                }, [e._v(" проект №" + e._s(e.projectNameNotFound) + " отсутствует ")])])], 1), e.countPage > e.lazyLoadPage.iNumPage && e.contentLoaded ? s("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.linkProjectsWork1.visible
                    }],
                    attrs: {
                        text: "показать еще",
                        link: "javascript:void(0);",
                        typeBtn: "show-more",
                        showScroll: "linkProjectsWork1"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.lazyLoad()
                        }
                    }
                }) : e._e()], 1)
            },
            si = [],
            ri = i("ade3"),
            ai = (i("a434"), i("99af"), i("841c"), {
                methods: {
                    set: function(e, t) {
                        e.arFields["SEO_VALUES"] ? ("detail" === t && (e.arFields["SEO_VALUES"]["ELEMENT_META_DESCRIPTION"] ? document.querySelector('meta[name="description"]').setAttribute("content", e.arFields["SEO_VALUES"]["ELEMENT_META_DESCRIPTION"]) : e.arFields["SEO_VALUES"]["SECTION_META_DESCRIPTION"] ? document.querySelector('meta[name="description"]').setAttribute("content", e.arFields["SEO_VALUES"]["SECTION_META_DESCRIPTION"]) : document.querySelector('meta[name="description"]').setAttribute("content", ""), e.arFields["SEO_VALUES"]["ELEMENT_META_KEYWORDS"] ? document.querySelector('meta[name="keywords"]').setAttribute("content", e.arFields["SEO_VALUES"]["ELEMENT_META_KEYWORDS"]) : e.arFields["SEO_VALUES"]["SECTION_META_KEYWORDS"] ? document.querySelector('meta[name="keywords"]').setAttribute("content", e.arFields["SEO_VALUES"]["SECTION_META_KEYWORDS"]) : document.querySelector('meta[name="keywords"]').setAttribute("content", ""), e.arFields["SEO_VALUES"]["ELEMENT_META_TITLE"] ? document.title = e.arFields["SEO_VALUES"]["ELEMENT_META_TITLE"] : document.title = e.arFields["NAME"]), "section" === t && (e.arFields["SEO_VALUES"]["SECTION_META_DESCRIPTION"] && document.querySelector('meta[name="description"]').setAttribute("content", e.arFields["SEO_VALUES"]["SECTION_META_DESCRIPTION"]), e.arFields["SEO_VALUES"]["SECTION_META_KEYWORDS"] && document.querySelector('meta[name="keywords"]').setAttribute("content", e.arFields["SEO_VALUES"]["SECTION_META_KEYWORDS"]), e.arFields["SEO_VALUES"]["SECTION_META_TITLE"] ? document.title = e.arFields["SEO_VALUES"]["SECTION_META_TITLE"] : document.title = e["SECTION_NAME"])) : document.title = e["SECTION_NAME"]
                    }
                }
            }),
            oi = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "project-block"
                }, e._l(this.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "project",
                        class: [e.getWidthOrder(s), {
                            "show-border": e.elementVisibleScroll["border-bottom" + s] && e.elementVisibleScroll["border-bottom" + s].visible
                        }],
                        attrs: {
                            showScroll: "border-bottom" + s
                        }
                    }, [t ? i("base-button", {
                        class: [{
                            "show-link-arrow": e.elementVisibleScroll["toProject" + s] && e.elementVisibleScroll["toProject" + s].visible
                        }],
                        attrs: {
                            text: t.arFields.NAME,
                            link: t.arFields.DETAIL_PAGE_URL,
                            typeBtn: "link-arrow-right",
                            showScroll: "toProject" + s
                        }
                    }) : e._e(), i("div", {
                        staticClass: "specifications",
                        class: [{
                            "work-spec": t.arProperty.YEAR_WORK
                        }, {
                            "specifications-show-move-top": e.elementVisibleScroll["specifications" + s] && e.elementVisibleScroll["specifications" + s].visible
                        }],
                        attrs: {
                            showScroll: "specifications" + s
                        }
                    }, [t.arProperty.AREA_PROJECT ? i("p", [e._v(" " + e._s(t.arProperty.AREA_PROJECT.VALUE) + " м"), i("sup", [e._v("2")])]) : t.arProperty.AREA_WORK && "" !== t.arProperty.AREA_WORK.VALUE ? i("p", [e._v(" " + e._s(t.arProperty.AREA_WORK.VALUE) + " м"), i("sup", [e._v("2")])]) : e._e(), t.arProperty.ROOM_PROJECT ? i("span", [e._v(e._s(t.arProperty.ROOM_PROJECT.VALUE) + " " + e._s(e.roomCount(t.arProperty.ROOM_PROJECT.VALUE)))]) : t.arProperty.YEAR_WORK ? i("span", [e._v(e._s(t.arProperty.YEAR_WORK.VALUE))]) : e._e()]), t.arFields.PREVIEW_PICTURE_INFO.SRC ? i("div", {
                        staticClass: "project-img",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["projectImg" + s] && e.elementVisibleScroll["projectImg" + s].visible && t.arFields.PREVIEW_PICTURE_INFO.LOADED
                        }, {
                            watermark: t.arFields.PREVIEW_PICTURE_INFO.WATERMARK
                        }],
                        style: t.arFields.PREVIEW_PICTURE_INFO.LOADED ? "" : "opacity: 1 !important;",
                        attrs: {
                            showScroll: "projectImg" + s
                        },
                        on: {
                            click: function(t) {
                                return e.triggerLink()
                            }
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.arFields.PREVIEW_PICTURE_INFO.SRC,
                            width: t.arFields.PREVIEW_PICTURE_INFO.WIDTH,
                            height: t.arFields.PREVIEW_PICTURE_INFO.HEIGHT
                        },
                        on: {
                            load: function(i) {
                                e.backWatermark(s, t.arFields.PREVIEW_PICTURE_INFO), t.arFields.PREVIEW_PICTURE_INFO.LOADED = !0
                            }
                        }
                    }), i("div", {
                        staticClass: "wrap-backWatermark"
                    }, [e.styleBackWatermark[s] ? i("div", {
                        staticClass: "backWatermark",
                        style: e.styleBackWatermark[s]
                    }) : e._e()])]) : e._e()], 1)
                })), 0)
            },
            li = [],
            ni = {
                methods: {
                    order: function(e, t) {
                        if (e + 1 > t.length) {
                            var i = (e + 1) % t.length;
                            return e + 1 >= 2 * t.length ? (i = e % t.length, t[i]) : t[i - 1]
                        }
                        return t[e]
                    }
                }
            },
            ci = {
                methods: {
                    parent: function(e, t) {
                        var i = e.parentElement;
                        if ("body" === i.localName) return "BODY";
                        for (var s = 0; s <= i.classList.length; s++) {
                            if (i.classList[s] === t && "body" !== i.localName) return i;
                            if (i.classList.length <= s) return this.parent(i, t)
                        }
                    }
                }
            },
            hi = {
                methods: {
                    set: function(e, t, i) {
                        var s = 0,
                            r = 0,
                            a = 2500,
                            o = 1827;
                        document.querySelectorAll(i + " > img")[e] && (s = document.querySelectorAll(i + "> img")[e].getBoundingClientRect().width, r = document.querySelectorAll(i + "> img")[e].getBoundingClientRect().height);
                        var l = t.WIDTH / t.HEIGHT,
                            n = r - s / l,
                            c = n * l + s,
                            h = c / t.WIDTH;
                        t.WIDTH < o && (a = t.WIDTH / o * a);
                        var d = h * a,
                            u = (d - s) / 2 * -1,
                            m = (d - r) / 2 * -1;
                        return "width:" + d + "px; height:" + d + "px; left:" + u + "px; top:" + m + "px;"
                    }
                }
            },
            di = {
                name: "ListingProjects",
                mixins: [ni],
                components: {
                    BaseButton: ee
                },
                props: {
                    arResult: Array,
                    widthOrder: Array,
                    elementVisibleScroll: Object,
                    pathListPage: String,
                    checkPositionWatermark: Boolean
                },
                data: function() {
                    return {
                        styleBackWatermark: []
                    }
                },
                watch: {
                    checkPositionWatermark: function(e) {
                        if (e)
                            for (var t in this.arResult) this.pathListPage ? this.styleBackWatermark[t] = hi.methods.set(t, this.arResult[t].arFields.PREVIEW_PICTURE_INFO, this.pathListPage + " .project-img") : this.styleBackWatermark[t] = hi.methods.set(t, this.arResult[t].arFields.PREVIEW_PICTURE_INFO, ".project-img")
                    }
                },
                methods: {
                    getWidthOrder: function(e) {
                        return ni.methods.order(e, this.widthOrder)
                    },
                    backWatermark: function(e, t) {
                        this.pathListPage ? this.$set(this.styleBackWatermark, e, hi.methods.set(e, t, this.pathListPage + " .project-img")) : this.$set(this.styleBackWatermark, e, hi.methods.set(e, t, ".project-img"))
                    },
                    handleResize: function() {
                        for (var e in this.arResult) this.backWatermark(e, this.arResult[e].arFields.PREVIEW_PICTURE_INFO)
                    },
                    triggerLink: function() {
                        var e = ci.methods.parent(event.target, "project");
                        e.querySelectorAll(".link-arrow-right")[0].click()
                    },
                    roomCount: function(e) {
                        var t = Number(e);
                        return 1 === Number(t) ? "спальня" : Number(t) >= 2 && Number(t) <= 4 ? "спальни" : Number(t) >= 5 ? "спален" : ""
                    }
                },
                created: function() {
                    window.addEventListener("resize", this.handleResize)
                },
                mounted: function() {
                    for (var e in this.arResult) this.backWatermark(e, this.arResult[e].arFields.PREVIEW_PICTURE_INFO)
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.handleResize)
                }
            },
            ui = di,
            mi = Object(A["a"])(ui, oi, li, !1, null, "1647d631", null),
            pi = mi.exports,
            vi = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("path", {
                    attrs: {
                        d: "M18.0017 16.0017L12.8477 10.8477C13.8005 9.39959 14.1821 7.64945 13.9187 5.93613C13.6552 4.22281 12.7654 2.66819 11.4216 1.57324C10.0777 0.478302 8.37537 -0.0790643 6.64416 0.00905735C4.91294 0.0971789 3.276 0.82452 2.05026 2.05026C0.82452 3.276 0.0971789 4.91294 0.00905735 6.64416C-0.0790643 8.37537 0.478302 10.0777 1.57324 11.4216C2.66819 12.7654 4.22281 13.6552 5.93613 13.9187C7.64945 14.1821 9.39959 13.8005 10.8477 12.8477L16.0017 18.0017L18.0017 16.0017ZM2.00169 7.00169C2.00169 4.24469 4.24469 2.00169 7.00169 2.00169C9.75869 2.00169 12.0017 4.24469 12.0017 7.00169C12.0017 9.75869 9.75869 12.0017 7.00169 12.0017C4.24469 12.0017 2.00169 9.75869 2.00169 7.00169Z",
                        fill: "#FFF"
                    }
                })
            },
            Si = [],
            fi = {
                name: "SearchIcon"
            },
            Ei = fi,
            Ci = Object(A["a"])(Ei, vi, Si, !1, null, "1d1318c9", null),
            gi = Ci.exports,
            bi = {
                name: "ProjectPage",
                components: {
                    SearchIcon: gi,
                    IconBase: xe,
                    BaseButton: ee,
                    ListingProjects: pi,
                    Separator: z
                },
                mixins: [P, lt],
                data: function() {
                    return {
                        arResult: [],
                        device: {},
                        elementVisibleScroll: {
                            title: {},
                            titleFilter: {},
                            wrapFilter: {},
                            filerList: {},
                            linkProjectsWork1: {},
                            mobileTitleFilter: {},
                            separator1: {},
                            errorFilter: {}
                        },
                        arFilters: {},
                        showAfterIntro: !0,
                        arElementsShow: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 9,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL", "PROPERTY_PRICE_DOC_PROJECT", "GET_FILTER"],
                        arNuvParam: {
                            iNumPage: 1,
                            nPageSize: 10,
                            realPageSize: 10
                        },
                        lazyLoadPage: {
                            iNumPage: 1,
                            nPageSize: 10
                        },
                        message: "",
                        countActiveElement: 0,
                        countPage: 0,
                        widthOrder: ["col-xl-12 col-md-10", "col-xl-11 col-md-13 heightSecondImg", "col-xl-7 col-md-13", "col-xl-16 col-md-10", "col-xl-12 col-md-10", "col-xl-11 col-md-13 heightSecondImg", "col-xl-16  col-md-13", "col-xl-7  col-md-10"],
                        searchBarAccordion: {
                            status: !0,
                            style: ""
                        },
                        fixedFilterStyle: "",
                        imaginaryHeightFilter: "",
                        activeAccordion: "",
                        filtersAccordion: {
                            status: !0,
                            style: ""
                        },
                        tmpHeightAccordionMobile: 0,
                        changeFilter: !1,
                        changeProjectList: !1,
                        projectNameNotFound: "",
                        contentLoaded: !1
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e ? (this.startAnimation(), this.observer(), this.contentLoaded = !0) : this.contentLoaded = !1
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.fixedFilterBar()
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".projects-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.$store.dispatch("receiveCheckPosition")
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation(), this.updateHeightAccordion(), this.searchBarAccordion.status && this.accordion(), this.tmpHeightAccordionMobile = 0, this.filtersAccordion.style = ""
                    },
                    updateListProjects: function(e) {
                        var t = this;
                        if (this.changeFilter = !0, this.changeProjectList = !0, this.lazyLoadPage.iNumPage = 1, "%NAME" === e[0]) this.arFilter = Object(ri["a"])({
                            IBLOCK_ID: 9,
                            ACTIVE: "Y"
                        }, e[0], e[1]);
                        else {
                            this.arFilter["%NAME"] = "", this.message = "";
                            var i = 0;
                            for (var s in this.arFilter) s === e[0] && i++;
                            if (0 === i) this.arFilter[e[0]] = [e[1]];
                            else if (i > 0) {
                                var r = this.arFilter[e[0]].indexOf(e[1]); - 1 === r ? this.arFilter[e[0]].push(e[1]) : this.arFilter[e[0]].splice(r, 1)
                            }
                        }
                        this.updateUlr(), setTimeout((function() {
                            P.methods.GetList(t.arSort, t.arFilter, !1, t.arNuvParam, t.arSelect).then((function(e) {
                                t.arResult = e.ITEMS, t.$store.dispatch("receiveCheckPosition"), e.infoBlock && (t.countPage = e.infoBlock.COUNT_PAGE), t.arFilters = e.infoBlock.FILTERS, t.changeFilter = !1, t.projectNameNotFound = "", e.ITEMS || "" === t.arFilter["%NAME"] || (t.projectNameNotFound = t.message)
                            }))
                        }), 1e3)
                    },
                    lazyLoad: function() {
                        var e = this;
                        this.lazyLoadPage.iNumPage++, this.changeProjectList = !0, this.updateUlr(), P.methods.GetList(this.arSort, this.arFilter, !1, this.lazyLoadPage, this.arSelect).then((function(t) {
                            e.arResult = e.arResult.concat(t.ITEMS), e.$store.dispatch("receiveCheckPosition")
                        }))
                    },
                    observer: function() {
                        var e = this,
                            t = this;
                        this.observerShowMore = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                e.isIntersecting && t.lazyLoad()
                            }))
                        }), {
                            threshold: [.1],
                            rootMargin: window.innerHeight + "px 0px 0px 0px"
                        }), setTimeout((function() {
                            document.querySelector(".show-more") ? e.observerShowMore.observe(document.querySelector(".show-more")) : e.observerShowMore.disconnect()
                        }), 300)
                    },
                    updateUlr: function() {
                        var e = "?";
                        for (var t in this.arFilter)(t.includes("FILTER") || t.includes("%NAME")) && 0 !== this.arFilter[t].length && (e += "&" + t.replace("%", "") + "=" + this.arFilter[t]);
                        this.lazyLoadPage.iNumPage > 1 && (e += "&Page=" + this.lazyLoadPage.iNumPage), window.history.replaceState("", "", window.location.pathname + e)
                    },
                    accordion: function() {
                        var e = this;
                        this.searchBarAccordion.status = !this.searchBarAccordion.status, this.updateHeightAccordion(), "" === this.fixedFilterStyle && (window.setTimeout((function() {
                            return e.startAnimation()
                        }), 500), window.setTimeout((function() {
                            return e.$store.dispatch("receiveCheckPosition")
                        }), 500))
                    },
                    updateHeightAccordion: function() {
                        var e = 0,
                            t = "",
                            i = "",
                            s = document.querySelectorAll(".search-wrap")[0].getBoundingClientRect().height,
                            r = document.querySelectorAll(".filter-type")[0].scrollHeight;
                        if (window.innerWidth <= 991) {
                            var a = document.querySelectorAll(".filter-type");
                            r = 0, a.forEach((function(e) {
                                r += e.offsetHeight
                            })), i = ".titleAccordion"
                        } else i = ".filters-wrap p";
                        var o = document.querySelectorAll(i)[0],
                            l = window.getComputedStyle(o).marginBottom,
                            n = window.getComputedStyle(o).marginTop;
                        t += " + " + l, t += " + " + n, e = document.querySelectorAll(i)[0].offsetHeight, !1 === this.searchBarAccordion.status ? (window.innerWidth <= 991 ? this.searchBarAccordion.style = "height:0px" : this.searchBarAccordion.style = "height:calc(" + e + "px " + t + ")", "" === this.fixedFilterStyle && (window.innerWidth <= 1399 ? this.imaginaryHeightFilter = "height:calc(" + s + "px + " + e + "px " + t + ")" : this.imaginaryHeightFilter = "height:calc(" + e + "px " + t + ")")) : (this.searchBarAccordion.style = "height:" + r + "px", "" === this.fixedFilterStyle && (window.innerWidth <= 991 ? this.imaginaryHeightFilter = "height: calc(" + e + "px + " + r + "px + " + s + "px " + t + ")" : window.innerWidth <= 1399 ? this.imaginaryHeightFilter = "height: calc(" + r + "px + " + s + "px)" : this.imaginaryHeightFilter = "height:" + r + "px"))
                    },
                    fixedFilterBar: function() {
                        var e = this,
                            t = document.querySelectorAll(".header")[0].offsetHeight;
                        window.pageYOffset + t >= this.elementVisibleScroll.wrapFilter.elementPos ? (this.searchBarAccordion.status && this.accordion(), this.fixedFilterStyle = "width: 100%; z-index: 999; position: fixed; top:" + t + "px") : (this.searchBarAccordion.status || "" === this.fixedFilterStyle || setTimeout((function() {
                            e.accordion()
                        }), 10), this.fixedFilterStyle = "")
                    },
                    accordionMobile: function(e) {
                        if (window.innerWidth <= 991) {
                            var t = event.target,
                                i = t.offsetParent.querySelector(".filer-list").offsetHeight,
                                s = document.querySelector(".imaginary-filter").offsetHeight,
                                r = document.querySelector(".filters-wrap").offsetHeight;
                            if (this.activeAccordion !== e || "" === this.filtersAccordion.style) {
                                if (this.activeAccordion = e, this.filtersAccordion.style = "height: " + i + "px;", 0 !== this.tmpHeightAccordionMobile) {
                                    var a = i;
                                    i -= this.tmpHeightAccordionMobile, this.tmpHeightAccordionMobile = a
                                } else this.tmpHeightAccordionMobile = i;
                                "" === this.fixedFilterStyle && (this.imaginaryHeightFilter = "height: calc(" + s + "px + " + i + "px);"), this.searchBarAccordion.style = "height: calc(" + r + "px + " + i + "px);"
                            } else this.tmpHeightAccordionMobile = 0, this.filtersAccordion.style = "", "" === this.fixedFilterStyle && (this.imaginaryHeightFilter = "height: calc(" + s + "px - " + i + "px);"), this.searchBarAccordion.style = "height: calc(" + r + "px - " + i + "px);"
                        } else this.accordion()
                    },
                    setProjects: function() {
                        var e, t = this,
                            i = document.location.search.replace("?", "").split("&");
                        if ("" !== i[0])
                            for (var s in i) e = i[s].split("="), "NAME" === e[0] ? (this.arFilter["%" + e[0]] = [e[1]], this.message = e[1]) : "Page" === e[0] ? (this.arNuvParam.nPageSize *= e[1], this.lazyLoadPage.iNumPage = e[1]) : this.arFilter[e[0]] = e[1].split(",");
                        P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(e) {
                            t.arResult = e.ITEMS, t.arFilters = e.infoBlock.FILTERS, t.countPage = e.infoBlock.COUNT_PAGE, e.ITEMS || "" === t.arFilter["%NAME"] || (t.projectNameNotFound = t.message), t.arResult[0]["SECTION_NAME"] = e.infoBlock.IBLOCK_NAME, ai.methods.set(t.arResult[0], "section"), window.setTimeout((function() {
                                return t.searchBarAccordion.style = "height:" + document.querySelectorAll(".filters-wrap")[0].offsetHeight + "px"
                            }), 500), window.setTimeout((function() {
                                return t.imaginaryHeightFilter = "height:" + document.querySelectorAll(".filter-search-bar")[0].offsetHeight + "px"
                            }), 500)
                        }))
                    }
                },
                created: function() {
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorLightGray",
                        showSeparator: !0
                    }), this.setProjects()
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            Ti = bi,
            Pi = Object(A["a"])(Ti, ii, si, !1, null, "2aeaf5a1", null),
            wi = Pi.exports,
            _i = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return e.arResult.arProperty ? i("div", {
                    staticClass: "main-page container"
                }, [i("swiper-main-page", {
                    class: e.arStatusComponents.display[0],
                    attrs: {
                        "active-screen": e.activeScreen
                    }
                }), i("project-main-page", {
                    class: e.arStatusComponents.display[1],
                    attrs: {
                        "active-screen": e.activeScreen,
                        "result-main-page": e.arResult
                    }
                }), i("work-main-page", {
                    class: e.arStatusComponents.display[2],
                    attrs: {
                        "active-screen": e.activeScreen,
                        "result-main-page": e.arResult
                    }
                }), i("service-main-page", {
                    class: e.arStatusComponents.display[3],
                    attrs: {
                        "active-screen": e.activeScreen,
                        "result-main-page": e.arResult
                    }
                }), i("partner-main-page", {
                    class: e.arStatusComponents.display[4],
                    attrs: {
                        "active-screen": e.activeScreen,
                        "result-main-page": e.arResult
                    }
                })], 1) : e._e()
            },
            Ai = [],
            Ii = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "main-swiper",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }, {
                        "change-screen": e.ChangeScreen
                    }],
                    style: e.heightSwiper,
                    attrs: {
                        id: "SwiperMainPage"
                    }
                }, [i("div", {
                    staticClass: "swiper-wrap",
                    style: e.heightSlidePicture
                }, [i("div", {
                    staticClass: "show-scale-swiper"
                }, [i("swiper", {
                    ref: "SwiperMainPage",
                    staticClass: "animation-overlap",
                    class: e.animationClass,
                    attrs: {
                        options: e.swiperOption
                    },
                    on: {
                        slideChange: e.onSlideChange
                    }
                }, e._l(this.arResult, (function(t, s) {
                    return i("swiper-slide", {
                        key: s,
                        class: [{
                            "prev-prev": e.prevSlide === s
                        }]
                    }, [i("div", {
                        staticClass: "img-slide"
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.arFields.PREVIEW_PICTURE_INFO.SRC,
                            width: t.arFields.PREVIEW_PICTURE_INFO.WIDTH,
                            height: t.arFields.PREVIEW_PICTURE_INFO.HEIGHT
                        },
                        on: {
                            load: function(t) {
                                return e.imgLoaded()
                            }
                        }
                    })])])
                })), 1)], 1)]), i("separator", {
                    attrs: {
                        show: !e.ChangeScreen && e.separatorShow,
                        "header-show": !1
                    }
                }), i("div", {
                    staticClass: "slide-text-wrap"
                }, e._l(this.arResult, (function(t, s) {
                    return i("transition", {
                        key: s,
                        attrs: {
                            name: "text-slide-show"
                        }
                    }, [e.show === t.arFields.CODE ? i("div", {
                        staticClass: "slide-info",
                        class: [{
                            active: e.show === t.arFields.CODE
                        }]
                    }, [i("div", {
                        staticClass: "wrap-title-slide"
                    }, [i("h2", {
                        staticClass: "title-slide",
                        style: e.titleSlideSize
                    }, [e._v(e._s(t.arFields.NAME))]), t.arProperty.SUB_TITLE["~VALUE"].TEXT ? i("div", {
                        staticClass: "subtitle",
                        domProps: {
                            innerHTML: e._s(t.arProperty.SUB_TITLE["~VALUE"].TEXT)
                        }
                    }) : e._e()]), i("div", {
                        staticClass: "pagination offset-auto"
                    }, [e._v(e._s("0" + (s + 1)))]), t.arProperty.LIST_SLIDE["~VALUE"][0] ? i("div", {
                        staticClass: "list-title"
                    }, e._l(t.arProperty.LIST_SLIDE["~VALUE"], (function(t, s) {
                        return i("div", {
                            key: s,
                            domProps: {
                                innerHTML: e._s(t.TEXT)
                            }
                        })
                    })), 0) : e._e()]) : e._e()])
                })), 1), e._m(0)], 1)
            },
            Ri = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "nav-btn animation-show-nav-btn"
                }, [i("div", {
                    staticClass: "button-prev"
                }), i("div", {
                    staticClass: "button-next"
                })])
            }],
            Li = (i("a630"), i("3ca3"), i("b680"), i("7212")),
            Oi = i("4da1");
        i("e25d");
        Oi["default"].use([Oi["Navigation"], Oi["EffectFade"]]);
        var yi = "SwiperMainPage",
            xi = {
                name: yi,
                mixins: [P],
                components: {
                    Swiper: Li["Swiper"],
                    SwiperSlide: Li["SwiperSlide"],
                    Separator: z
                },
                props: ["activeScreen"],
                data: function() {
                    return {
                        changeAxios: !1,
                        activeSlideMoveLeft: !1,
                        activeSlideMoveRight: !1,
                        arResult: [],
                        show: "",
                        activeSlide: 0,
                        prevSlide: 100,
                        sizeX: 0,
                        heightSlidePicture: 0,
                        heightSwiper: 0,
                        titleSlide: "",
                        titleSlideSize: 0,
                        timerOverflow: [],
                        ChangeScreen: !1,
                        showAfterIntro: !0,
                        SwiperMainPage: null,
                        swiperOption: {
                            grabCursor: !0,
                            speed: 500,
                            effect: "fade",
                            navigation: {
                                nextEl: ".main-swiper .button-next",
                                prevEl: ".main-swiper .button-prev"
                            }
                        },
                        separatorShow: !0,
                        tmpWidthWindow: window.innerWidth,
                        countImgLoaded: 0
                    }
                },
                watch: {
                    activeScreen: function(e) {
                        var t = this;
                        e !== yi && window.innerWidth > 767 ? (this.show = "", this.ChangeScreen = !0, this.separatorShow = !1, et.methods.hidden(1200, !0)) : (this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorLightGray",
                            showSeparator: !0
                        }), window.innerWidth > 767 ? (window.setTimeout((function() {
                            return t.ChangeScreen = !1
                        }), 1150), window.setTimeout((function() {
                            t.separatorShow = !0
                        }), 1200), window.setTimeout((function() {
                            t.show = t.arResult[t.activeSlide].arFields.CODE
                        }), 1900), window.setTimeout((function() {
                            window.innerWidth > 768 && (t.updateSwiperHeight(), t.updateSlideHeight()), window.innerWidth <= 1199 ? t.updateTitleSize(t.titleSlide) : t.titleSlideSize = ""
                        }), 2e3)) : (this.separatorShow = !0, this.show = this.arResult[this.activeSlide].arFields.CODE, setTimeout((function() {
                            t.updateSwiperHeight(), t.updateSlideHeight(), t.updateTitleSize(t.titleSlide)
                        }), 500)), window.innerWidth > 1199 && et.methods.hidden(!1, !0))
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        this.changeAxios = !0, e && this.startAnimation()
                    }
                },
                computed: {
                    animationClass: function() {
                        return {
                            "active-slide-move-left": this.activeSlideMoveLeft,
                            "active-slide-move-right": this.activeSlideMoveRight
                        }
                    },
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    onSlideChange: function(e) {
                        var t = this;
                        this.prevSlide = this.activeSlide, this.show = this.arResult[e.activeIndex].arFields.CODE, this.titleSlide = this.arResult[e.activeIndex].arFields.NAME, this.activeSlide < e.activeIndex ? (this.activeSlideMoveRight = !1, this.activeSlideMoveLeft = !0) : (this.activeSlideMoveLeft = !1, this.activeSlideMoveRight = !0), this.activeSlide = e.activeIndex, window.setTimeout((function() {
                            return t.updateSlideHeight("onSlideChange")
                        }), 10), window.innerWidth <= 1199 && this.updateTitleSize(this.titleSlide)
                    },
                    resizeWindow: function() {
                        window.innerWidth <= 767 && (this.ChangeScreen = !1, this.separatorShow = !0), this.activeScreen === yi && (window.innerWidth <= 767 ? this.show = this.arResult[this.activeSlide].arFields.CODE : (this.updateSwiperHeight(), this.updateSlideHeight()), window.innerWidth <= 1199 ? this.updateTitleSize(this.titleSlide) : this.titleSlideSize = "", window.innerWidth <= 991 && this.tmpWidthWindow !== window.innerWidth && (this.updateSwiperHeight(), this.updateSlideHeight(), this.tmpWidthWindow = window.innerWidth))
                    },
                    getHeightItemClass: function(e) {
                        var t = document.querySelectorAll(e),
                            i = 0;
                        return t.forEach((function(e) {
                            i += e.offsetHeight
                        })), i
                    },
                    getMarginItemClass: function(e) {
                        var t = document.querySelectorAll(e),
                            i = "";
                        return t.forEach((function(e) {
                            var t = window.getComputedStyle(e).marginBottom,
                                s = window.getComputedStyle(e).marginTop;
                            parseInt(t.match(/\d+/)) > 0 && (i += " - " + t), parseInt(s.match(/\d+/)) > 0 && (i += " - " + s)
                        })), i
                    },
                    updateSlideHeight: function(e) {
                        var t = "";
                        t = "undefined" != typeof e && "onSlideChange" === e ? ".slide-text-wrap .text-slide-show-enter-active" : ".slide-info";
                        var i = this.getMarginItemClass(".header") + this.getMarginItemClass(".swiper-wrap") + this.getMarginItemClass(".slide-text-wrap") + this.getMarginItemClass(".main-swiper .separator"),
                            s = this.getHeightItemClass(t) + this.getHeightItemClass(".main-swiper .separator") + this.getHeightItemClass(".header"),
                            r = .01 * window.innerHeight;
                        this.heightSlidePicture = "height: calc( " + r + "px * 100 - " + s + "px " + i + ");"
                    },
                    updateSwiperHeight: function() {
                        var e = this.getMarginItemClass(".header"),
                            t = this.getHeightItemClass(".header"),
                            i = .01 * window.innerHeight;
                        this.heightSwiper = "height: calc( " + i + "px * 100 - " + t + "px " + e + ");"
                    },
                    updateTitleSize: function(e) {
                        var t = .81,
                            i = .35,
                            s = document.getElementsByClassName("slide-text-wrap")[0].offsetWidth,
                            r = 0,
                            a = 0;
                        if (Array.from(e).forEach((function(e) {
                                if (" " === e) a++;
                                else {
                                    switch (e) {
                                        case "ш":
                                            r += .455;
                                            break;
                                        case "ы":
                                            r += .46;
                                            break;
                                        case "ф":
                                            r += .35;
                                            break
                                    }
                                    r++
                                }
                            })), r > 15) {
                            var o = .0035 * (r - 15);
                            t += o
                        }
                        var l = s / r / t;
                        if (a > 0) {
                            var n = (s - l * (i * a)) / r / t;
                            this.titleSlideSize = "font-size: " + n.toFixed(2) + "px"
                        } else this.titleSlideSize = "font-size: " + l.toFixed(2) + "px"
                    },
                    startAnimation: function() {
                        var e = this,
                            t = document.location.hash.replace("#", "");
                        this.getProgressAxios.statusResponseAxios && "" === t && (this.showAfterIntro = !1, window.setTimeout((function() {
                            e.show = e.arResult[0].arFields.CODE
                        }), 1e3), window.setTimeout((function() {
                            return e.updateSlideHeight()
                        }), 1200), this.updateSwiperHeight())
                    },
                    imgLoaded: function() {
                        this.countImgLoaded < 3 && (this.$store.dispatch("receiveIntroStatus", -1), this.countImgLoaded++)
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("resize", this.resizeWindow), this.$store.dispatch("receiveIntroStatus", 3), this.activeScreen === yi && window.innerWidth > 767 && et.methods.hidden(!1, !0);
                    var t = {
                            SORT: "ASC"
                        },
                        i = {
                            IBLOCK_ID: 7,
                            ACTIVE: "Y"
                        },
                        s = ["ID", "IBLOCK_ID", "NAME", "CODE", "PREVIEW_PICTURE"];
                    this.bitrixStore[i.IBLOCK_ID] ? (this.arResult = this.bitrixStore[i.IBLOCK_ID].ITEMS, this.titleSlide = this.arResult[0].arFields.NAME, window.innerWidth <= 1199 && this.updateTitleSize(this.titleSlide)) : P.methods.GetList(t, i, !1, !1, s).then((function(t) {
                        e.arResult = t.ITEMS, e.titleSlide = e.arResult[0].arFields.NAME, window.innerWidth <= 1199 && e.updateTitleSize(e.titleSlide), e.$store.dispatch("receiveCacheData", {
                            id: i.IBLOCK_ID,
                            cacheData: t
                        })
                    }))
                },
                mounted: function() {
                    this.SwiperMainPage = this.$refs.SwiperMainPage.$swiper, this.changeAxios || this.startAnimation();
                    var e = document.location.hash.replace("#", "");
                    "" === e && this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorLightGray",
                        showSeparator: !0
                    })
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.resizeWindow), this.SwiperMainPage.destroy(!1, !1)
                }
            },
            Vi = xi,
            ki = Object(A["a"])(Vi, Ii, Ri, !1, null, "a48d4dde", null),
            Fi = ki.exports,
            Di = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "project-main-page project-scroll",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }, {
                        "change-screen": e.ChangeScreen
                    }],
                    attrs: {
                        id: "ProjectMainPage"
                    }
                }, [e.resultMainPage.arProperty.TITLE_MAIN_PROJECTS.VALUE ? i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(" " + e._s(e.resultMainPage.arProperty.TITLE_MAIN_PROJECTS.VALUE) + " ")]) : e._e(), i("separator", {
                    attrs: {
                        show: !e.ChangeScreen
                    }
                }), i("div", {
                    staticClass: "count-project row"
                }, [e.resultMainPage.arProperty.ADD_INFO_PROJECTS.VALUE ? i("div", {
                    staticClass: "col-md-12",
                    class: [{
                        moveTop: e.elementVisibleScroll.text.visible
                    }],
                    attrs: {
                        showScroll: "text"
                    },
                    domProps: {
                        innerHTML: e._s(e.resultMainPage.arProperty.ADD_INFO_PROJECTS["~VALUE"].TEXT)
                    }
                }) : e._e(), i("div", {
                    staticClass: "col-xl-11 col-md-auto"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.linkProjects1.visible
                    }],
                    attrs: {
                        text: "все проекты",
                        link: "/projects/",
                        typeBtn: "base-btn",
                        showScroll: "linkProjects1"
                    }
                })], 1)]), e.arResult && e.elementVisibleScroll ? i("listing-projects", {
                    attrs: {
                        "ar-result": e.arResult,
                        "width-order": e.widthOrder,
                        "element-visible-scroll": e.elementVisibleScroll,
                        "check-position-watermark": e.checkPositionWatermark
                    }
                }) : e._e(), i("div", {
                    staticClass: "text-under-projects row"
                }, [e.resultMainPage.arProperty.TEXT_UNDER_PROJECTS.VALUE ? i("p", {
                    staticClass: "col-xxl-8 offset-xxl-7 col-md-auto",
                    class: [{
                        moveTop: e.elementVisibleScroll.textUnderProjects.visible
                    }],
                    attrs: {
                        showScroll: "textUnderProjects"
                    },
                    domProps: {
                        innerHTML: e._s(e.resultMainPage.arProperty.TEXT_UNDER_PROJECTS["~VALUE"].TEXT)
                    }
                }) : e._e(), i("div", {
                    staticClass: "col-xxl-8 col-md-auto"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.linkProjects2.visible
                    }],
                    attrs: {
                        text: "все проекты",
                        link: "/projects/",
                        typeBtn: "base-btn",
                        showScroll: "linkProjects2"
                    }
                })], 1)])], 1)
            },
            Mi = [],
            Ni = "ProjectMainPage",
            Bi = {
                name: Ni,
                mixins: [P, lt],
                components: {
                    ListingProjects: pi,
                    BaseButton: ee,
                    Separator: z
                },
                props: ["activeScreen", "resultMainPage"],
                data: function() {
                    return {
                        changeAxios: !1,
                        ChangeScreen: !0,
                        showAfterIntro: !0,
                        checkPositionWatermark: !1,
                        arElementsShow: {},
                        elementVisibleScroll: {
                            title: {},
                            linkProjects1: {},
                            linkProjects2: {},
                            textUnderProjects: {},
                            text: {}
                        },
                        activeScreenMobile: "",
                        arResult: [],
                        widthOrder: ["col-xl-12 col-md-10", "col-xl-11 col-md-13 heightSecondImg", "col-xl-7 col-md-13", "col-xl-16 col-md-10"]
                    }
                },
                watch: {
                    activeScreen: function(e) {
                        var t = this;
                        this.activeScreenMobile = e, e !== Ni && window.innerWidth > 767 ? (this.ChangeScreen = !0, window.removeEventListener("scroll", this.handleScroll), window.setTimeout((function() {
                            return t.setObjectAnimation(!1)
                        }), 1200), this.checkPositionWatermark = !1) : (window.addEventListener("scroll", this.handleScroll), window.setTimeout((function() {
                            t.startAnimation(), t.checkPositionWatermark = !0
                        }), 1200), e === Ni && this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorLightGray",
                            showSeparator: !0
                        }))
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        this.changeAxios = !0, e && this.startAnimation()
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".project-scroll");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.ChangeScreen = !1
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.activeScreenMobile === Ni && this.startAnimation()
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize);
                    var t = {
                            SORT: "ASC"
                        },
                        i = {
                            IBLOCK_ID: 9,
                            ACTIVE: "Y",
                            ID: this.resultMainPage.arProperty.POJECTS_ON_MAIN.VALUE
                        },
                        s = ["ID", "IBLOCK_ID", "NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        r = i.IBLOCK_ID + "_main";
                    this.bitrixStore[r] ? this.arResult = this.bitrixStore[r].ITEMS : P.methods.GetList(t, i, !1, !1, s).then((function(t) {
                        e.arResult = t.ITEMS, e.$store.dispatch("receiveCacheData", {
                            id: r,
                            cacheData: t
                        })
                    }))
                },
                mounted: function() {
                    this.changeAxios || this.startAnimation();
                    var e = document.location.hash.replace("#", "");
                    e === Ni && this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorLightGray",
                        showSeparator: !0
                    })
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            ji = Bi,
            Ui = Object(A["a"])(ji, Di, Mi, !1, null, "7f903974", null),
            $i = Ui.exports,
            Wi = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "project-main-page work-main-page",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }, {
                        "change-screen": e.ChangeScreen
                    }],
                    attrs: {
                        id: "WorkMainPage"
                    }
                }, [e.resultMainPage.arProperty.TITLE_MAIN_WORKS.VALUE ? i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.titleWork.visible
                    }],
                    attrs: {
                        showScroll: "titleWork"
                    }
                }, [e._v(" " + e._s(e.resultMainPage.arProperty.TITLE_MAIN_WORKS.VALUE) + " ")]) : e._e(), i("separator", {
                    attrs: {
                        show: !e.ChangeScreen
                    }
                }), i("div", {
                    staticClass: "count-project row"
                }, [e.resultMainPage.arProperty.ADD_INFO_WORKS.VALUE ? i("div", {
                    staticClass: "col-xl-12 col-md-auto",
                    class: [{
                        moveTop: e.elementVisibleScroll.textWork.visible
                    }],
                    attrs: {
                        showScroll: "textWork"
                    },
                    domProps: {
                        innerHTML: e._s(e.resultMainPage.arProperty.ADD_INFO_WORKS["~VALUE"].TEXT)
                    }
                }) : e._e(), i("div", {
                    staticClass: "col-xl-11 col-md-auto"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.linkProjectsWork1.visible
                    }],
                    attrs: {
                        text: "все дома",
                        link: "/projects/",
                        typeBtn: "base-btn",
                        showScroll: "linkProjectsWork1"
                    }
                })], 1)]), e.arResult && e.elementVisibleScroll ? i("listing-projects", {
                    attrs: {
                        "ar-result": e.arResult,
                        "width-order": e.widthOrder,
                        "element-visible-scroll": e.elementVisibleScroll,
                        "path-list-page": ".work-main-page",
                        "check-position-watermark": e.checkPositionWatermark
                    }
                }) : e._e(), i("div", {
                    staticClass: "text-under-projects row"
                }, [e.resultMainPage.arProperty.TEXT_UNDER_WORKS.VALUE ? i("p", {
                    staticClass: "col-xxl-8 offset-xxl-7 col-md-auto",
                    class: [{
                        moveTop: e.elementVisibleScroll.textUnderProjectsWork.visible
                    }],
                    attrs: {
                        showScroll: "textUnderProjectsWork"
                    },
                    domProps: {
                        innerHTML: e._s(e.resultMainPage.arProperty.TEXT_UNDER_WORKS["~VALUE"].TEXT)
                    }
                }) : e._e(), i("div", {
                    staticClass: "col-xxl-8 col-md-auto"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.linkProjectsWork2.visible
                    }],
                    attrs: {
                        text: "все дома",
                        link: "/projects/",
                        typeBtn: "base-btn",
                        showScroll: "linkProjectsWork2"
                    }
                })], 1)])], 1)
            },
            Gi = [],
            Hi = "WorkMainPage",
            zi = {
                name: Hi,
                mixins: [P, lt],
                components: {
                    ListingProjects: pi,
                    BaseButton: ee,
                    Separator: z
                },
                props: ["activeScreen", "resultMainPage"],
                data: function() {
                    return {
                        changeAxios: !1,
                        ChangeScreen: !1,
                        showAfterIntro: !0,
                        checkPositionWatermark: !1,
                        arElementsShow: {},
                        elementVisibleScroll: {
                            titleWork: {},
                            linkProjectsWork1: {},
                            linkProjectsWork2: {},
                            textUnderProjectsWork: {},
                            textWork: {}
                        },
                        arResult: [],
                        widthOrder: ["col-xl-16 col-md-13", "col-xl-7 col-md-10", "col-xl-7 col-md-10", "col-xl-16 col-md-13"]
                    }
                },
                watch: {
                    activeScreen: function(e) {
                        var t = this;
                        e !== Hi && window.innerWidth > 767 ? (this.ChangeScreen = !0, window.removeEventListener("scroll", this.handleScroll), window.setTimeout((function() {
                            return t.setObjectAnimation(!1)
                        }), 1200), this.checkPositionWatermark = !1) : (window.addEventListener("scroll", this.handleScroll), window.setTimeout((function() {
                            t.startAnimation(), t.checkPositionWatermark = !0
                        }), 1200), e === Hi && this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorGray"
                        }))
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        this.changeAxios = !0, e && this.startAnimation()
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".work-main-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.ChangeScreen = !1
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation()
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize);
                    var t = {
                            SORT: "ASC"
                        },
                        i = {
                            IBLOCK_ID: 10,
                            ACTIVE: "Y",
                            ID: this.resultMainPage.arProperty.WORKS_ON_MAIN.VALUE
                        },
                        s = ["ID", "IBLOCK_ID", "NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        r = i.IBLOCK_ID + "_main";
                    this.bitrixStore[r] ? this.arResult = this.bitrixStore[r].ITEMS : P.methods.GetList(t, i, !1, !1, s).then((function(t) {
                        e.arResult = t.ITEMS, e.$store.dispatch("receiveCacheData", {
                            id: r,
                            cacheData: t
                        })
                    }))
                },
                mounted: function() {
                    this.changeAxios || this.startAnimation();
                    var e = document.location.hash.replace("#", "");
                    e === Hi && this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorGray"
                    })
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            Ki = zi,
            Yi = Object(A["a"])(Ki, Wi, Gi, !1, null, "d336bdfc", null),
            Xi = Yi.exports,
            qi = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "service-main-page",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }, {
                        "change-screen": e.ChangeScreen
                    }],
                    attrs: {
                        id: "ServiceMainPage"
                    }
                }, [i("separator", {
                    attrs: {
                        show: !e.ChangeScreen
                    }
                }), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "col-xxl-10"
                }, [e.resultMainPage.arProperty.ADD_INFO_SERVICE.VALUE ? i("div", {
                    staticClass: "info-text",
                    class: [{
                        moveTop: e.elementVisibleScroll.text.visible
                    }],
                    attrs: {
                        showScroll: "text"
                    },
                    domProps: {
                        innerHTML: e._s(e.resultMainPage.arProperty.ADD_INFO_SERVICE["~VALUE"].TEXT)
                    }
                }) : e._e()]), i("div", {
                    staticClass: "col-xxl-13"
                }, [i("div", {
                    staticClass: "listing-services"
                }, e._l(this.arResult, (function(t, s) {
                    return i("div", {
                        key: s
                    }, [i("separator", {
                        attrs: {
                            show: !e.ChangeScreen
                        }
                    }), i("div", {
                        staticClass: "service-block row"
                    }, [i("div", {
                        staticClass: "title-service col-xxl-11 col-xl-13 col-md-15"
                    }, [i("h2", {
                        class: [{
                            moveTop: e.elementVisibleScroll["title" + s] && e.elementVisibleScroll["title" + s].visible
                        }],
                        attrs: {
                            showScroll: "title" + s
                        }
                    }, [e._v(" " + e._s(t.arFields.NAME) + " ")]), i("base-button", {
                        class: [{
                            "show-button": e.elementVisibleScroll["linkProjects" + s] && e.elementVisibleScroll["linkProjects" + s].visible
                        }],
                        attrs: {
                            text: "подробнее",
                            link: t.arFields.DETAIL_PAGE_URL,
                            typeBtn: "secondary-button",
                            showScroll: "linkProjects" + s
                        }
                    })], 1), t.arFields.PREVIEW_PICTURE ? i("div", {
                        staticClass: "img-service col-xxl-12 col-xl-10 col-md-8",
                        class: [{
                            "show-img-scale": e.elementVisibleScroll["projectImg" + s] && e.elementVisibleScroll["projectImg" + s].visible
                        }],
                        attrs: {
                            showScroll: "projectImg" + s
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.arFields.PREVIEW_PICTURE_INFO.SRC
                        }
                    })]) : e._e()])], 1)
                })), 0)])])], 1)
            },
            Ji = [],
            Zi = "ServiceMainPage",
            Qi = {
                name: Zi,
                mixins: [P, lt],
                components: {
                    BaseButton: ee,
                    Separator: z
                },
                props: ["activeScreen", "resultMainPage"],
                data: function() {
                    return {
                        changeAxios: !1,
                        ChangeScreen: !1,
                        showAfterIntro: !0,
                        arElementsShow: {},
                        elementVisibleScroll: {
                            text: {}
                        },
                        arResult: []
                    }
                },
                watch: {
                    activeScreen: function(e) {
                        var t = this;
                        e !== Zi && window.innerWidth > 767 ? (this.ChangeScreen = !0, window.removeEventListener("scroll", this.handleScroll), window.setTimeout((function() {
                            return t.setObjectAnimation(!1)
                        }), 1200)) : (window.addEventListener("scroll", this.handleScroll), window.setTimeout((function() {
                            return t.startAnimation()
                        }), 1200), e === Zi && window.innerWidth > 767 && this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorGreen",
                            showSeparator: !1
                        }), e === Zi && window.innerWidth < 768 && this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorGreen",
                            showSeparator: !0
                        }))
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        this.changeAxios = !0, e && this.startAnimation()
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".service-main-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.ChangeScreen = !1
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation()
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize);
                    var t = {
                            SORT: "ASC"
                        },
                        i = {
                            IBLOCK_ID: 11,
                            ACTIVE: "Y",
                            ID: this.resultMainPage.arProperty.SERVICE_ON_MAIN.VALUE
                        },
                        s = ["ID", "IBLOCK_ID", "NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        r = i.IBLOCK_ID + "_main";
                    this.bitrixStore[r] ? this.arResult = this.bitrixStore[r].ITEMS : P.methods.GetList(t, i, !1, !1, s).then((function(t) {
                        e.arResult = t.ITEMS, e.$store.dispatch("receiveCacheData", {
                            id: r,
                            cacheData: t
                        })
                    }))
                },
                mounted: function() {
                    this.changeAxios || this.startAnimation();
                    var e = document.location.hash.replace("#", "");
                    e === Zi && this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorGreen",
                        showSeparator: !1
                    })
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            es = Qi,
            ts = Object(A["a"])(es, qi, Ji, !1, null, "76bd7312", null),
            is = ts.exports,
            ss = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "partner-main-page",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }, {
                        "change-screen": e.ChangeScreen
                    }],
                    attrs: {
                        id: "PartnerMainPage"
                    }
                }, [i("separator", {
                    attrs: {
                        show: !e.ChangeScreen && e.getProgressAxios.statusResponseAxios
                    }
                }), i("div", {
                    staticClass: "partner-scroll"
                }, [i("div", {
                    staticClass: "text-wrap row "
                }, [i("div", {
                    staticClass: "col-xxl-12"
                }, [e.resultMainPage.arProperty && e.resultMainPage.arProperty.TITLE_MAIN_PARTNER ? i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(" " + e._s(e.resultMainPage.arProperty.TITLE_MAIN_PARTNER.VALUE) + " ")]) : e._e()]), i("div", {
                    staticClass: "text-partner col-xxl-11"
                }, [i("p", [i("span", {
                    class: [{
                        "move-top-inline": e.elementVisibleScroll.text.visible
                    }],
                    attrs: {
                        showScroll: "text"
                    }
                }, [e._v("мы — авторизованные партнеры заводов-производителей: все специалисты аттестованы и регулярно проходят повышение квалификации")]), i("i", {
                    class: [{
                        moveTop: e.elementVisibleScroll.text2.visible
                    }],
                    style: e.styleHeadText,
                    attrs: {
                        showScroll: "text2"
                    }
                }, [e._v("наши сотрудники знают особенности всех материалов, с которыми они работают")])]), i("i", {
                    staticClass: "text-execution",
                    class: [{
                        "specifications-show-move-top": e.elementVisibleScroll.text3.visible
                    }],
                    style: e.positionBodyText,
                    attrs: {
                        showScroll: "text3"
                    }
                }, [e._v(" помимо ГОСТов и наших внутренних стандартов, наши объекты посещают представители компаний-партнеров и контролируют соблюдение технологий строительства ")]), i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll["linkProjects"] && e.elementVisibleScroll["linkProjects"].visible
                    }],
                    style: e.styleBtn,
                    attrs: {
                        text: "наши дома",
                        link: "/works/",
                        typeBtn: "base-btn",
                        showScroll: "linkProjects"
                    }
                })], 1)]), i("div", {
                    staticClass: "partners-wrap row"
                }, e._l(this.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "partner-block col-xl-11",
                        class: [{
                            "offset-xl-1": s % 2
                        }]
                    }, [i("separator", {
                        attrs: {
                            show: !e.ChangeScreen && e.getProgressAxios.statusResponseAxios
                        }
                    }), i("div", {
                        staticClass: "row"
                    }, [i("div", {
                        staticClass: "partner-name col-14",
                        class: [{
                            moveTop: e.elementVisibleScroll["namePartner" + s] && e.elementVisibleScroll["namePartner" + s].visible
                        }],
                        attrs: {
                            showScroll: "namePartner" + s
                        }
                    }, [i("p", [e._v(e._s(t.arFields.NAME))]), t.arProperty.COUNTRY_PARTNER ? i("span", [e._v(" " + e._s(t.arProperty.COUNTRY_PARTNER.VALUE) + " ")]) : e._e()]), i("div", {
                        staticClass: "partner-logo col-9",
                        class: [{
                            "opacity-animate": e.elementVisibleScroll["logoPartner" + s] && e.elementVisibleScroll["logoPartner" + s].visible
                        }],
                        attrs: {
                            showScroll: "logoPartner" + s
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.arFields.PREVIEW_PICTURE_INFO.SRC,
                            width: t.arFields.PREVIEW_PICTURE_INFO.WIDTH,
                            height: t.arFields.PREVIEW_PICTURE_INFO.HEIGHT
                        }
                    })])]), i("div", {
                        staticClass: "row certificate-row"
                    }, [i("div", {
                        staticClass: "partner-certificate col-md-14"
                    }, [i("a", {
                        staticClass: "img-certificate",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["certPartner" + s] && e.elementVisibleScroll["certPartner" + s].visible
                        }],
                        attrs: {
                            showScroll: "certPartner" + s
                        },
                        on: {
                            click: function(t) {
                                return e.openLightBox(s)
                            }
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.arProperty.IMG_CERTIFICATE.FILE_INFO.SRC,
                            width: t.arProperty.IMG_CERTIFICATE.FILE_INFO.WIDTH,
                            height: t.arProperty.IMG_CERTIFICATE.FILE_INFO.HEIGHT
                        }
                    })]), i("div", {
                        class: [{
                            moveTop: e.elementVisibleScroll["nameSert" + s] && e.elementVisibleScroll["nameSert" + s].visible
                        }],
                        attrs: {
                            showScroll: "nameSert" + s
                        }
                    }, [i("p", [e._v(e._s(t.arProperty.TITLE_CERTIFICATE.VALUE))]), i("span", [e._v(e._s(t.arProperty.SUBTITLE_CERTIFICATE.VALUE))])])]), i("div", {
                        staticClass: "col-md-9 btn-partner"
                    }, [i("base-button", {
                        class: [{
                            "show-button": e.elementVisibleScroll["linkPartner" + s] && e.elementVisibleScroll["linkPartner" + s].visible
                        }],
                        attrs: {
                            text: "подробнее",
                            link: t.arFields.DETAIL_PAGE_URL,
                            typeBtn: "secondary-button",
                            showScroll: "linkPartner" + s,
                            "delay-animation": "500",
                            "delay-animation-width": "413"
                        }
                    })], 1)])], 1)
                })), 0)]), e.arSrc ? i("popup-cool-light-box", {
                    attrs: {
                        elems: e.arSrc
                    }
                }) : e._e(), "undefined" !== typeof e.activeScreen ? i("footer-bar", {
                    attrs: {
                        "show-contacts": !0,
                        mainPage: e.footerStartAnimation
                    }
                }) : e._e()], 1)
            },
            rs = [],
            as = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "popup-cool-block"
                }, [e.elems ? i("CoolLightBox", {
                    attrs: {
                        items: e.elems,
                        index: e.index,
                        slideshow: !1,
                        effect: "fade",
                        overlayColor: "#000",
                        gallery: !1
                    },
                    on: {
                        close: function(t) {
                            e.index = null
                        }
                    }
                }, [i("div", {
                    staticClass: "line-close",
                    attrs: {
                        slot: "close"
                    },
                    slot: "close"
                }), i("icon-base", {
                    attrs: {
                        slot: "icon-next",
                        "icon-name": "arrow-right",
                        width: 50,
                        height: 28
                    },
                    slot: "icon-next"
                }, [i("arrow-right")], 1), i("icon-base", {
                    attrs: {
                        slot: "icon-previous",
                        "icon-name": "arrow-left",
                        width: 50,
                        height: 28
                    },
                    slot: "icon-previous"
                }, [i("arrow-left")], 1)], 1) : e._e()], 1)
            },
            os = [],
            ls = i("5547"),
            ns = (i("2223"), function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("path", {
                    attrs: {
                        d: "M50 12.336H6.40079L16.4317 2.35308L14.0673 0L0 14L14.0673 28L16.4317 25.6469L6.40058 15.6638H50V12.336Z",
                        fill: "#383838"
                    }
                })
            }),
            cs = [],
            hs = {
                name: "ArrowLeft"
            },
            ds = hs,
            us = Object(A["a"])(ds, ns, cs, !1, null, "db40e5dc", null),
            ms = us.exports,
            ps = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("path", {
                    attrs: {
                        d: "M0 12.336H43.5992L33.5683 2.35308L35.9327 0L50 14L35.9327 28L33.5683 25.6469L43.5994 15.6638H0V12.336Z",
                        fill: "#383838"
                    }
                })
            },
            vs = [],
            Ss = {
                name: "ArrowRight"
            },
            fs = Ss,
            Es = Object(A["a"])(fs, ps, vs, !1, null, "75c1430c", null),
            Cs = Es.exports,
            gs = {
                name: "PopupCoolLightBox",
                components: {
                    ArrowRight: Cs,
                    ArrowLeft: ms,
                    IconBase: xe,
                    CoolLightBox: ls["a"]
                },
                props: {
                    elems: Array
                },
                data: function() {
                    return {
                        index: null
                    }
                },
                watch: {
                    getArImg: function(e) {
                        this.index = e[0].ind
                    }
                },
                computed: {
                    getArImg: function() {
                        return this.$store.getters.getImgGallery
                    }
                }
            },
            bs = gs,
            Ts = Object(A["a"])(bs, as, os, !1, null, "8412d31e", null),
            Ps = Ts.exports,
            ws = "PartnerMainPage",
            _s = {
                name: ws,
                mixins: [P, lt],
                components: {
                    PopupCoolLightBox: Ps,
                    BaseButton: ee,
                    Separator: z,
                    FooterBar: Wt
                },
                props: ["activeScreen", "resultMainPage"],
                data: function() {
                    return {
                        changeAxios: !1,
                        ChangeScreen: !1,
                        showAfterIntro: !0,
                        arElementsShow: {},
                        elementVisibleScroll: {
                            title: {},
                            text: {},
                            text2: {},
                            text3: {}
                        },
                        arResult: [],
                        positionBodyText: "",
                        styleBtn: "",
                        styleHeadText: "",
                        footerStartAnimation: !1,
                        arSrc: []
                    }
                },
                watch: {
                    activeScreen: function(e) {
                        var t = this;
                        e !== ws && window.innerWidth > 767 ? (this.ChangeScreen = !0, window.removeEventListener("scroll", this.handleScroll), window.setTimeout((function() {
                            return t.setObjectAnimation(!1)
                        }), 1200), this.footerStartAnimation = !1) : (window.addEventListener("scroll", this.handleScroll), window.setTimeout((function() {
                            t.$store.dispatch("receiveCheckPosition"), t.startAnimation()
                        }), 1200), e === ws && window.innerWidth > 767 && this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorLightGray",
                            showSeparator: !1
                        }), e === ws && window.innerWidth < 768 && this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorLightGray",
                            showSeparator: !0
                        }))
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        this.changeAxios = !0, e && this.startAnimation()
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    openLightBox: function(e, t) {
                        "undefined" !== typeof t && this.includeHostName(this[t]), this.$store.dispatch("receiveArSrcImg", {
                            ind: e
                        }), console.log(t)
                    },
                    includeHostName: function(e) {
                        for (var t in this.arSrc = [], e) this.arSrc[t] = {
                            src: this.$hostname + e[t],
                            title: ""
                        }
                    },
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".partner-scroll");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.ChangeScreen = !1, this.footerStartAnimation = !0
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.upadatePositionBodyText(), this.startAnimation()
                    },
                    upadatePositionBodyText: function() {
                        var e = document.querySelectorAll(".text-partner p i")[0].offsetLeft - document.querySelectorAll(".text-partner p")[0].offsetLeft + 10;
                        e < 220 ? (this.styleBtn = "float: none; margin-left: auto;", this.positionBodyText = "position: static", this.positionBodyText = e > 100 ? "left:" + e + "px;" : "position: static", this.styleHeadText = 10 === e ? "margin-top: 25px;" : "") : (this.styleBtn = "", this.positionBodyText = "left:" + e + "px;", this.styleHeadText = "")
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize);
                    var t = {
                            SORT: "ASC"
                        },
                        i = {
                            IBLOCK_ID: 12,
                            ACTIVE: "Y",
                            ID: this.resultMainPage.arProperty.PARTNER_ON_MAIN.VALUE
                        },
                        s = ["ID", "IBLOCK_ID", "NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        r = i.IBLOCK_ID + "_main";
                    if (this.bitrixStore[r])
                        for (var a in this.arResult = this.bitrixStore[r].ITEMS, this.arResult) this.arSrc[a] = this.$hostname + this.arResult[a].arProperty.IMG_CERTIFICATE.FILE_INFO.SRC;
                    else P.methods.GetList(t, i, !1, !1, s).then((function(t) {
                        for (var i in e.arResult = t.ITEMS, e.arResult) e.arSrc[i] = e.$hostname + e.arResult[i].arProperty.IMG_CERTIFICATE.FILE_INFO.SRC;
                        e.$store.dispatch("receiveCacheData", {
                            id: r,
                            cacheData: t
                        })
                    }))
                },
                mounted: function() {
                    this.upadatePositionBodyText(), this.changeAxios || this.startAnimation();
                    var e = document.location.hash.replace("#", "");
                    "PartnerMainPage" === e && this.$store.dispatch("receiveAppClass")
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            As = _s,
            Is = Object(A["a"])(As, ss, rs, !1, null, "82e52adc", null),
            Rs = Is.exports,
            Ls = i("f13c"),
            Os = i.n(Ls),
            ys = {
                name: "MainPage",
                components: {
                    SwiperMainPage: Fi,
                    ProjectMainPage: $i,
                    WorkMainPage: Xi,
                    ServiceMainPage: is,
                    PartnerMainPage: Rs
                },
                data: function() {
                    return {
                        activeScreen: "",
                        arChildComponent: ["SwiperMainPage", "ProjectMainPage", "WorkMainPage", "ServiceMainPage", "PartnerMainPage"],
                        arStatusComponents: {
                            name: [],
                            display: []
                        },
                        timeChangeScreen: {},
                        arResult: [],
                        seo: [],
                        touchStart: 0,
                        disableScrollScreen: !1,
                        disableOverScroll: !1,
                        counterWheel: 0,
                        timeDisableChangeScreen: "",
                        timeOverScrollChangeScreen: ""
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    handleWheel: function(e) {
                        var t = this,
                            i = !1;
                        e.changedTouches && (i = !(this.touchStart - e.changedTouches[0].pageY > 0)), this.counterWheel += e.deltaY, this.counterWheel / e.deltaY > 4 && (this.disableOverScroll = !0, clearTimeout(this.timeDisableChangeScreen), this.timeDisableChangeScreen = window.setTimeout((function() {
                            t.fixedOverScroll()
                        }), 500), (window.pageYOffset <= 0 || window.pageYOffset >= document.body.offsetHeight - window.innerHeight) && (this.timeOverScrollChangeScreen = window.setTimeout((function() {
                            t.fixedOverScroll()
                        }), 1e3)));
                        var s = this.arStatusComponents.name.indexOf(this.activeScreen);
                        e.deltaY < 0 || i ? 0 === s || 0 !== window.pageYOffset || this.disableScrollScreen || this.disableOverScroll || (this.activeScreen = this.arStatusComponents.name[s - 1], this.disableScrollScreen = !0, this.timeChangeScreen = window.setTimeout((function() {
                            return t.changeDisplayScreen(s, -1)
                        }), 1200)) : window.pageYOffset >= document.body.offsetHeight - window.innerHeight && !this.disableScrollScreen && !this.disableOverScroll && (s === this.arStatusComponents.name.length - 1 || (this.activeScreen = this.arStatusComponents.name[s + 1], this.disableScrollScreen = !0, this.timeChangeScreen = window.setTimeout((function() {
                            return t.changeDisplayScreen(s, 1)
                        }), 1200)))
                    },
                    handleTouchStart: function(e) {
                        this.touchStart = e.changedTouches[0].pageY
                    },
                    changeDisplayScreen: function(e, t) {
                        e + t === 0 ? history.pushState("", "", window.location.pathname) : history.pushState("", "", window.location.pathname + "#" + this.arStatusComponents.name[e + t]), this.$set(this.arStatusComponents.display, e + t, ""), this.$set(this.arStatusComponents.display, e, "disableScreen"), this.disableScrollScreen = !1, window.scrollTo(0, 0)
                    },
                    handleScroll: function() {
                        var e = [],
                            t = [];
                        for (var i in this.arChildComponent) t = document.querySelectorAll("#" + this.arChildComponent[i])[0], t && (e[i] = {
                            name: this.arChildComponent[i],
                            elementPos: t.getBoundingClientRect().top + window.pageYOffset + document.body.clientTop,
                            heightElement: t.offsetHeight
                        });
                        var s = window.pageYOffset;
                        for (var r in e) e[r].elementPos - (window.innerHeight - 10) < s && s < e[r].elementPos + e[r].heightElement + 10 && (this.activeScreen = e[r].name, 0 == r ? history.pushState("", "", window.location.pathname) : window.innerWidth > 767 && history.pushState("", "", window.location.pathname + "#" + e[r].name))
                    },
                    normalScroll: function() {
                        if (window.innerWidth <= 767)
                            for (var e in window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchmove", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.addEventListener("scroll", this.handleScroll), this.arStatusComponents.display) this.$set(this.arStatusComponents.display, e, "");
                        else
                            for (var t in window.addEventListener("wheel", this.handleWheel), window.addEventListener("touchmove", this.handleWheel), window.addEventListener("touchstart", this.handleTouchStart), window.removeEventListener("scroll", this.handleScroll), this.arChildComponent) this.activeScreen === this.arChildComponent[t] ? this.$set(this.arStatusComponents.display, t, "") : this.$set(this.arStatusComponents.display, t, "disableScreen")
                    },
                    fixedOverScroll: function() {
                        clearTimeout(this.timeOverScrollChangeScreen), this.disableOverScroll = !1, this.counterWheel = 0
                    },
                    resizeWindow: function() {
                        this.normalScroll()
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("wheel", this.handleWheel), window.addEventListener("touchmove", this.handleWheel), window.addEventListener("touchstart", this.handleTouchStart), window.addEventListener("resize", this.resizeWindow);
                    var t = document.location.hash.replace("#", "");
                    for (var i in this.activeScreen = "" === t ? "SwiperMainPage" : t, this.arChildComponent) this.$set(this.arStatusComponents.name, i, this.arChildComponent[i]), this.activeScreen === this.arChildComponent[i] ? this.$set(this.arStatusComponents.display, i, "") : this.$set(this.arStatusComponents.display, i, "disableScreen");
                    var s = {
                            SORT: "ASC"
                        },
                        r = {
                            IBLOCK_ID: 5,
                            ACTIVE: "Y"
                        },
                        a = ["ID", "IBLOCK_ID", "NAME", "CODE"],
                        o = r.IBLOCK_ID + "_main";
                    if (this.bitrixStore[o]) {
                        this.arResult = this.bitrixStore[o].ITEMS[0], ai.methods.set(this.arResult, "detail");
                        var l = document.location.hash.replace("#", "");
                        "" !== l && window.innerWidth <= 768 && setTimeout((function() {
                            Os.a.scrollTo("#" + l, 0, {
                                container: "body",
                                offset: -60
                            })
                        }), 1e3)
                    } else P.methods.GetList(s, r, !1, !1, a).then((function(t) {
                        e.arResult = t.ITEMS[0], ai.methods.set(e.arResult, "detail");
                        var i = document.location.hash.replace("#", "");
                        "" !== i && window.innerWidth <= 768 && setTimeout((function() {
                            Os.a.scrollTo("#" + i, 0, {
                                container: "body",
                                offset: -60
                            })
                        }), 1e3), e.$store.dispatch("receiveCacheData", {
                            id: o,
                            cacheData: t
                        })
                    }))
                },
                mounted: function() {
                    this.normalScroll()
                },
                destroyed: function() {
                    window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchmove", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("resize", this.resizeWindow), window.removeEventListener("scroll", this.handleScroll), this.$store.dispatch("receiveAppClass", {
                        appClass: "",
                        showSeparator: !0
                    })
                }
            },
            xs = ys,
            Vs = Object(A["a"])(xs, _i, Ai, !1, null, "aa9d0e02", null),
            ks = Vs.exports,
            Fs = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "project-detailed-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios && !e.changeCode
                    }, {
                        "change-screen": e.changeCode
                    }],
                    attrs: {
                        itemscope: "",
                        itemtype: "http://schema.org/Product"
                    }
                }, [i("div", {
                    staticClass: "row preview-info"
                }, [i("h1", {
                    staticClass: "col-xl-13 col-md-19 col-17 order-1",
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        itemprop: "name",
                        showScroll: "title"
                    }
                }, [e._v(" " + e._s(e.arResult.arFields.NAME) + " ")]), i("div", {
                    staticClass: "col-btn fixed-mobile-btn col-xl-6 col-md-auto col-23 order-xl-2 order-6 offset-xl-0 offset-md-auto"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.consultationBtn1.visible || e.fixedBtn
                    }],
                    attrs: {
                        text: "консультация",
                        link: "javascript:void(0);",
                        typeBtn: "base-btn",
                        showScroll: "consultationBtn1"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.openCallBackForm(2, "консультация")
                        }
                    }
                })], 1), i("div", {
                    staticClass: "col-auto offset-auto order-xl-3 order-2 favourite-btn-block"
                }, [i("div", {
                    staticClass: "favourite-btn",
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }, {
                        selected: e.checkFavourite
                    }],
                    attrs: {
                        showScroll: "like"
                    },
                    on: {
                        click: function(t) {
                            return e.setFavourite()
                        }
                    }
                }, [i("icon-base", {
                    attrs: {
                        width: "23",
                        height: "20",
                        "icon-name": "favourite-icon"
                    }
                }, [i("favourite-icon")], 1)], 1)]), e.arResult.arProperty.ARCHITECTURAL_STYLE.VALUE ? i("div", {
                    staticClass: "col-xl-7 col-23 architectural-style order-xl-4 order-3",
                    class: [{
                        moveTop: e.elementVisibleScroll.architectural.visible
                    }],
                    attrs: {
                        showScroll: "architectural"
                    }
                }, [i("span", {
                    staticClass: "title-info"
                }, [e._v("архитектурный стиль")]), i("p", [e._v(e._s(e.arResult.arProperty.ARCHITECTURAL_STYLE.VALUE))])]) : e._e(), e.arResult.arProperty.AREA_PROJECT.VALUE ? i("div", {
                    staticClass: "col-md-6 col-auto area-project order-xl-5 order-5",
                    class: [{
                        moveTop: e.elementVisibleScroll.area.visible
                    }],
                    attrs: {
                        showScroll: "area"
                    }
                }, [i("div", [i("span", {
                    staticClass: "title-info"
                }, [e._v("общая площадь")]), i("p", [e._v(e._s(e.arResult.arProperty.AREA_PROJECT.VALUE) + "М"), i("sup", [e._v("2")])])])]) : e._e(), e.arResult.arProperty.PRICE_BUILDING.VALUE ? i("div", {
                    staticClass: "col-xl-6 col-md-7 col-14 price-build order-xl-6 order-4",
                    class: [{
                        moveTop: e.elementVisibleScroll.priceBuild.visible
                    }],
                    attrs: {
                        showScroll: "priceBuild",
                        itemprop: "offers",
                        itemscope: "",
                        itemtype: "http://schema.org/Offer"
                    }
                }, [i("span", {
                    staticClass: "title-info"
                }, [e._v("цена строительства")]), i("p", {
                    attrs: {
                        itemprop: "price"
                    }
                }, [e._v(e._s(e.arResult.arProperty.PRICE_BUILDING.VALUE) + " "), i("b", {
                    attrs: {
                        itemprop: "priceCurrency"
                    }
                }, [e._v("₽")])])]) : e._e()]), i("swiper-detailed-projects", {
                    attrs: {
                        "ar-slide": e.arSlidePicture,
                        "element-visible-scroll": e.elementVisibleScroll
                    },
                    on: {
                        click: function(t) {
                            return e.openLightBox(t, "arSlidePicture")
                        },
                        slideChange: e.startAnimation
                    }
                }), i("div", {
                    staticClass: "specifications-block"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.specificationsTitle.visible
                    }],
                    attrs: {
                        showScroll: "specificationsTitle"
                    }
                }, [e._v(" Характеристики ")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "col-xl-7 col-md-11 order-1"
                }, [e.arResult.arProperty.PRICE_PROJECT.VALUE ? i("div", {
                    staticClass: "price-project",
                    class: [{
                        moveTop: e.elementVisibleScroll.priceProject.visible
                    }],
                    attrs: {
                        showScroll: "priceProject"
                    }
                }, [i("p", [e._v("цена проекта")]), i("span", [e._v(e._s(e.arResult.arProperty.PRICE_PROJECT.VALUE) + " ₽")])]) : e._e(), i("div", {
                    staticClass: "print-project",
                    class: [{
                        moveTop: e.elementVisibleScroll.printProject.visible
                    }],
                    attrs: {
                        showScroll: "printProject"
                    }
                }, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: e.$hostname + "/upload/pdf/" + e.arResult.arFields.CODE + ".pdf"
                    }
                }, [e._v("распечатать проект")])])]), i("div", {
                    staticClass: "row col-xl-10 order-xl-2 order-3"
                }, [e.arResult.arProperty.PRICE_BUILDING.VALUE ? i("div", {
                    staticClass: "price-build col-xl-23 col-11",
                    class: [{
                        moveTop: e.elementVisibleScroll.priceBuild2.visible
                    }],
                    attrs: {
                        showScroll: "priceBuild2"
                    }
                }, [i("span", {
                    staticClass: "title-info"
                }, [e._v("цена строительства")]), i("p", [e._v(e._s(e.arResult.arProperty.PRICE_BUILDING.VALUE) + " ₽")])]) : e._e(), i("div", {
                    staticClass: "specifications-detail col-xl-23 col-md-12",
                    class: [{
                        moveTop: e.elementVisibleScroll.specificationsDetail.visible
                    }],
                    attrs: {
                        showScroll: "specificationsDetail"
                    }
                }, [e.arResult.arProperty.AREA_PROJECT.VALUE ? i("div", {
                    attrs: {
                        itemprop: "description"
                    }
                }, [i("p", {
                    staticClass: "title-specification"
                }, [e._v("площадь")]), i("span", {
                    staticClass: "value-specification"
                }, [e._v(e._s(e.arResult.arProperty.AREA_PROJECT.VALUE) + "м"), i("sup", [e._v("2")])])]) : e._e(), e.arResult.arProperty.SIZE_PROJECT.VALUE ? i("div", {
                    attrs: {
                        itemprop: "description"
                    }
                }, [i("p", {
                    staticClass: "title-specification"
                }, [e._v("габариты ")]), i("span", {
                    staticClass: "value-specification"
                }, [e._v(e._s(e.arResult.arProperty.SIZE_PROJECT.VALUE) + "м")])]) : e._e(), e.arResult.arProperty.ROOM_PROJECT.VALUE ? i("div", {
                    attrs: {
                        itemprop: "description"
                    }
                }, [i("p", {
                    staticClass: "title-specification"
                }, [e._v("спальни")]), i("span", {
                    staticClass: "value-specification"
                }, [e._v(e._s(e.arResult.arProperty.ROOM_PROJECT.VALUE.replace(/\D+/g, "")))])]) : e._e(), e.arResult.arProperty.BATHROOMS_PROJECT.VALUE ? i("div", {
                    attrs: {
                        itemprop: "description"
                    }
                }, [i("p", {
                    staticClass: "title-specification"
                }, [e._v("санузлы")]), i("span", {
                    staticClass: "value-specification"
                }, [e._v(e._s(e.arResult.arProperty.BATHROOMS_PROJECT.VALUE))])]) : e._e(), e.arResult.arProperty.WALL_PROJECT.VALUE ? i("div", {
                    attrs: {
                        itemprop: "description"
                    }
                }, [i("p", {
                    staticClass: "title-specification"
                }, [e._v("стены")]), i("span", {
                    staticClass: "value-specification"
                }, [e._v(e._s(e.arResult.arProperty.WALL_PROJECT.VALUE))])]) : e._e(), e.arResult.arProperty.ROOF_PROJECT.VALUE ? i("div", {
                    attrs: {
                        itemprop: "description"
                    }
                }, [i("p", {
                    staticClass: "title-specification"
                }, [e._v("кровля")]), i("span", {
                    staticClass: "value-specification"
                }, [e._v(e._s(e.arResult.arProperty.ROOF_PROJECT.VALUE))])]) : e._e(), e.arResult.arProperty.OVERLAPS_PROJECT.VALUE ? i("div", {
                    attrs: {
                        itemprop: "description"
                    }
                }, [i("p", {
                    staticClass: "title-specification"
                }, [e._v("перекрытия")]), i("span", {
                    staticClass: "value-specification"
                }, [e._v(e._s(e.arResult.arProperty.OVERLAPS_PROJECT.VALUE))])]) : e._e(), e.arResult.arProperty.EXTERIOR_FINISH.VALUE ? i("div", {
                    attrs: {
                        itemprop: "description"
                    }
                }, [i("p", {
                    staticClass: "title-specification"
                }, [e._v("наружная отделка")]), i("span", {
                    staticClass: "value-specification"
                }, [e._v(e._s(e.arResult.arProperty.EXTERIOR_FINISH.VALUE))])]) : e._e()])]), i("div", {
                    staticClass: "col-auto order-xl-3 order-2 btn-mobile-hidden"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.consultationBtn2.visible
                    }],
                    attrs: {
                        text: "консультация",
                        link: "javascript:void(0);",
                        typeBtn: "base-btn ",
                        showScroll: "consultationBtn2"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.openCallBackForm(2, "консультация")
                        }
                    }
                })], 1)])], 1), i("div", {
                    staticClass: "plans-and-facades"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.titleFacades.visible
                    }],
                    attrs: {
                        showScroll: "titleFacades"
                    }
                }, [e._v(" Планировки и фасады ")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "col-xl-4 facade-col"
                }, [i("div", {
                    staticClass: "text-square",
                    class: [{
                        moveTop: e.elementVisibleScroll.textFacades.visible
                    }],
                    attrs: {
                        showScroll: "textFacades"
                    }
                }, [i("span", [e._v("фасады")])]), i("div", {
                    staticClass: "facade-img-wrap"
                }, e._l(this.arResult.arProperty.FACADES_PICTURE.FILE_INFO, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "facade-img",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["facadeImg" + s] && e.elementVisibleScroll["facadeImg" + s].visible
                        }],
                        attrs: {
                            showScroll: "facadeImg" + s
                        },
                        on: {
                            click: function(t) {
                                return e.openLightBox(s, "arFacadesSrc")
                            }
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.SRC,
                            width: t.WEIGHT,
                            height: t.HEIGHT
                        },
                        on: {
                            load: e.startAnimation
                        }
                    })])
                })), 0)]), i("div", {
                    staticClass: "col-xl-14 offset-xl-3 col-plans"
                }, [e.arResult.arProperty.PLAN_FIRST_FLOOR.FILE_INFO.SRC ? i("div", {
                    staticClass: "plan-block",
                    class: [{
                        multiply: e.elementVisibleScroll.titlePlan1.visible
                    }]
                }, [i("div", {
                    staticClass: "text-square",
                    class: [{
                        moveTop: e.elementVisibleScroll.titlePlan1.visible
                    }],
                    attrs: {
                        showScroll: "titlePlan1"
                    }
                }, [e._m(0)]), i("div", {
                    staticClass: "mirror-plan",
                    class: [{
                        moveTop: e.elementVisibleScroll.mirrorBtn1.visible
                    }],
                    attrs: {
                        showScroll: "mirrorBtn1"
                    },
                    on: {
                        click: function(t) {
                            return e.mirrorPlan("mirrorPlan1")
                        }
                    }
                }, [e._v(" показать зеркальный вариант ")]), i("div", {
                    staticClass: "img-plan",
                    class: [{
                        "show-img-project": e.elementVisibleScroll.planImg1.visible
                    }, {
                        "mirror-active": e.mirrorPlan1
                    }],
                    attrs: {
                        showScroll: "planImg1"
                    },
                    on: {
                        click: function(t) {
                            return e.openLightBox(0, "arPlansSrc")
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e.$hostname + e.arResult.arProperty.PLAN_FIRST_FLOOR.FILE_INFO.SRC,
                        width: e.arResult.arProperty.PLAN_FIRST_FLOOR.FILE_INFO.WIDTH,
                        height: e.arResult.arProperty.PLAN_FIRST_FLOOR.FILE_INFO.HEIGHT
                    }
                })])]) : e._e(), e.arResult.arProperty.PLAN_SECOND_FLOOR.FILE_INFO.SRC ? i("div", {
                    staticClass: "plan-block",
                    class: [{
                        multiply: e.elementVisibleScroll.titlePlan1.visible
                    }]
                }, [i("div", {
                    staticClass: "text-square",
                    class: [{
                        moveTop: e.elementVisibleScroll.titlePlan2.visible
                    }],
                    attrs: {
                        showScroll: "titlePlan2"
                    }
                }, [e._m(1)]), i("div", {
                    staticClass: "mirror-plan",
                    class: [{
                        moveTop: e.elementVisibleScroll.mirrorBtn2.visible
                    }],
                    attrs: {
                        showScroll: "mirrorBtn2"
                    },
                    on: {
                        click: function(t) {
                            return e.mirrorPlan("mirrorPlan2")
                        }
                    }
                }, [e._v(" показать зеркальный вариант ")]), i("div", {
                    staticClass: "img-plan",
                    class: [{
                        "show-img-project": e.elementVisibleScroll.planImg2.visible
                    }, {
                        "mirror-active": e.mirrorPlan2
                    }],
                    attrs: {
                        showScroll: "planImg2"
                    },
                    on: {
                        click: function(t) {
                            return e.openLightBox(1, "arPlansSrc")
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e.$hostname + e.arResult.arProperty.PLAN_SECOND_FLOOR.FILE_INFO.SRC
                    }
                })])]) : e._e()])])], 1), i("div", {
                    staticClass: "project-adjustment"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "col-xxl-7"
                }, [e.arInfoBlock.arProperty.ADJUSTMENT_TITLE.VALUE ? i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.adjustmentProject.visible
                    }],
                    attrs: {
                        showScroll: "adjustmentProject"
                    }
                }, [e._v(" " + e._s(e.arInfoBlock.arProperty.ADJUSTMENT_TITLE.VALUE) + " ")]) : e._e()]), e.arInfoBlock.arProperty.ADJUSTMENT_TEXT["~VALUE"].TEXT ? i("div", {
                    staticClass: "text-info-project col-xxl-7 col-md-19 offset-xxl-0 offset-md-2",
                    class: [{
                        moveTop: e.elementVisibleScroll.adjustmentText.visible
                    }],
                    attrs: {
                        showScroll: "adjustmentText"
                    },
                    domProps: {
                        innerHTML: e._s(e.arInfoBlock.arProperty.ADJUSTMENT_TEXT["~VALUE"].TEXT)
                    }
                }) : e._e(), i("div", {
                    staticClass: "col-auto offset-xxl-3 offset-md-2"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.projectAdjustment.visible
                    }],
                    attrs: {
                        text: "Подробнее",
                        link: "/services/individualnoe-proektirovanie",
                        typeBtn: "base-btn",
                        showScroll: "projectAdjustment"
                    }
                })], 1)])], 1), e.arInfoBlock.arProperty.SERVICES_ID.VALUE ? i("listing-services", {
                    attrs: {
                        servicesId: e.arInfoBlock.arProperty.SERVICES_ID.VALUE,
                        "result-parent": e.arInfoBlock.arProperty,
                        "width-order": e.widthOrderService,
                        "element-visible-scroll": e.elementVisibleScroll
                    }
                }) : e._e(), e.arResult.arProperty.SIMILAR_PROJECTS.VALUE ? i("similar-project", {
                    attrs: {
                        "title-component": "похожие проекты",
                        "result-parent": e.arResult.arProperty.SIMILAR_PROJECTS.VALUE,
                        "width-order": e.widthOrderSimilar,
                        "element-visible-scroll": e.elementVisibleScroll
                    }
                }) : e._e(), i("popup-cool-light-box", {
                    attrs: {
                        elems: e.arSrc
                    }
                })], 1)
            },
            Ds = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("span", [e._v("план "), i("i", [e._v("первого этажа")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("span", [e._v("план "), i("i", [e._v("второго этажа")])])
            }],
            Ms = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "project-services"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "row text-block"
                }, [i("div", {
                    staticClass: "col-xxl-7"
                }, [e.resultParent.SERVICES_TITLE.VALUE ? i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.servicesProject.visible
                    }],
                    attrs: {
                        showScroll: "servicesProject"
                    }
                }, [e._v(" " + e._s(e.resultParent.SERVICES_TITLE.VALUE) + " ")]) : e._e()]), e.resultParent.SERVICES_TEXT["~VALUE"].TEXT ? i("div", {
                    staticClass: "text-info-project col-xxl-7 col-md-19 offset-xxl-0 offset-md-2",
                    class: [{
                        moveTop: e.elementVisibleScroll.servicesText.visible
                    }],
                    attrs: {
                        showScroll: "servicesText"
                    },
                    domProps: {
                        innerHTML: e._s(e.resultParent.SERVICES_TEXT["~VALUE"].TEXT)
                    }
                }) : e._e()]), i("div", {
                    staticClass: "list-service row"
                }, e._l(this.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        class: [e.getWidthOrder(s)]
                    }, [i("div", {
                        staticClass: "service-block"
                    }, [t ? i("base-button", {
                        class: [{
                            "show-link-arrow": e.elementVisibleScroll["toService" + s] && e.elementVisibleScroll["toService" + s].visible
                        }],
                        attrs: {
                            text: t.arFields.NAME,
                            link: t.arFields.DETAIL_PAGE_URL,
                            typeBtn: "link-arrow-right",
                            showScroll: "toService" + s
                        }
                    }) : e._e(), i("div", {
                        staticClass: "img-service",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["serviceImg" + s] && e.elementVisibleScroll["serviceImg" + s].visible
                        }],
                        attrs: {
                            showScroll: "serviceImg" + s
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.arProperty.IMAGE_FOR_PROJECT.FILE_INFO.SRC,
                            width: t.arProperty.IMAGE_FOR_PROJECT.FILE_INFO.WIDTH,
                            height: t.arProperty.IMAGE_FOR_PROJECT.FILE_INFO.HEIGHT
                        }
                    })])], 1)])
                })), 0)], 1)
            },
            Ns = [],
            Bs = {
                name: "ListingServices",
                components: {
                    BaseButton: ee,
                    Separator: z
                },
                mixins: [ni, P],
                props: {
                    resultParent: Object,
                    servicesId: [Array, String],
                    widthOrder: Array,
                    elementVisibleScroll: Object
                },
                data: function() {
                    return {
                        arResult: {},
                        arSort: {
                            PROPERTY_SORT_FOR_PROJECT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 11,
                            ACTIVE: "Y",
                            ID: this.servicesId
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {}
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                watch: {
                    servicesId: function(e) {
                        var t = this;
                        this.arFilter.ID = e;
                        var i = this.arFilter.IBLOCK_ID + "_" + e;
                        this.bitrixStore[i] ? this.arResult = this.bitrixStore[i].ITEMS : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(e) {
                            t.arResult = e.ITEMS, t.$store.dispatch("receiveCacheData", {
                                id: i,
                                cacheData: e
                            })
                        }))
                    }
                },
                methods: {
                    getWidthOrder: function(e) {
                        return ni.methods.order(e, this.widthOrder)
                    }
                },
                created: function() {
                    var e = this,
                        t = this.arFilter.IBLOCK_ID + "_" + this.servicesId;
                    this.bitrixStore[t] ? this.arResult = this.bitrixStore[t].ITEMS : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(i) {
                        e.arResult = i.ITEMS, e.$store.dispatch("receiveCacheData", {
                            id: t,
                            cacheData: i
                        })
                    }))
                }
            },
            js = Bs,
            Us = Object(A["a"])(js, Ms, Ns, !1, null, "7c48b9cb", null),
            $s = Us.exports,
            Ws = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "similar-project"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "row title-block"
                }, [i("h2", {
                    staticClass: "col-xxl-12 col-md-15",
                    class: [{
                        moveTop: e.elementVisibleScroll.similarTitle.visible
                    }],
                    attrs: {
                        showScroll: "similarTitle"
                    }
                }, [e._v(" " + e._s(e.titleComponent) + " ")]), i("div", {
                    staticClass: "col-auto offset-xxl-0 offset-md-auto"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.projectsBtn1.visible
                    }],
                    attrs: {
                        text: "все проекты",
                        link: "/projects/",
                        typeBtn: "base-btn",
                        showScroll: "projectsBtn1"
                    }
                })], 1)]), i("div", {
                    staticClass: "row similar-listing"
                }, e._l(this.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        class: [e.getWidthOrder(s)]
                    }, [i("div", {
                        staticClass: "similar-block"
                    }, [t ? i("base-button", {
                        class: [{
                            "show-link-arrow": e.elementVisibleScroll["toProject" + s] && e.elementVisibleScroll["toProject" + s].visible
                        }],
                        attrs: {
                            text: t.arFields.NAME,
                            link: "/projects/" + t.arFields.CODE,
                            typeBtn: "link-arrow-right",
                            showScroll: "toProject" + s
                        }
                    }) : e._e(), i("div", {
                        staticClass: "specifications",
                        class: [{
                            "specifications-show-move-top": e.elementVisibleScroll["specifications" + s] && e.elementVisibleScroll["specifications" + s].visible
                        }],
                        attrs: {
                            showScroll: "specifications" + s
                        }
                    }, [t.arProperty.AREA_PROJECT ? i("p", [e._v(e._s(t.arProperty.AREA_PROJECT.VALUE) + " м"), i("sup", [e._v("2")])]) : e._e(), t.arProperty.ROOM_PROJECT ? i("span", [e._v(e._s(t.arProperty.ROOM_PROJECT.VALUE) + " " + e._s(e.roomCount(t.arProperty.ROOM_PROJECT.VALUE)))]) : e._e()]), i("div", {
                        staticClass: "img-project",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["projectSimilarImg" + s] && e.elementVisibleScroll["projectSimilarImg" + s].visible
                        }, {
                            watermark: t.arFields.PREVIEW_PICTURE_INFO.WATERMARK
                        }],
                        attrs: {
                            showScroll: "projectSimilarImg" + s
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.arFields.PREVIEW_PICTURE_INFO.SRC,
                            width: t.arFields.PREVIEW_PICTURE_INFO.WIDTH,
                            height: t.arFields.PREVIEW_PICTURE_INFO.HEIGHT
                        },
                        on: {
                            load: function(i) {
                                return e.backWatermark(s, t.arFields.PREVIEW_PICTURE_INFO)
                            }
                        }
                    }), i("div", {
                        staticClass: "wrap-backWatermark"
                    }, [e.styleBackWatermark[s] ? i("div", {
                        staticClass: "backWatermark",
                        style: e.styleBackWatermark[s]
                    }) : e._e()])])], 1)])
                })), 0)], 1)
            },
            Gs = [],
            Hs = {
                name: "SimilarProject",
                components: {
                    BaseButton: ee,
                    Separator: z
                },
                mixins: [ni, P],
                props: {
                    resultParent: Array,
                    widthOrder: Array,
                    elementVisibleScroll: Object,
                    titleComponent: String
                },
                data: function() {
                    return {
                        arResult: {},
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 9,
                            ACTIVE: "Y",
                            ID: this.resultParent
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {},
                        styleBackWatermark: []
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    getWidthOrder: function(e) {
                        return ni.methods.order(e, this.widthOrder)
                    },
                    backWatermark: function(e, t) {
                        this.styleBackWatermark[e] = hi.methods.set(e, t, ".img-project")
                    },
                    handleResize: function() {
                        for (var e in this.arResult) this.styleBackWatermark[e] = hi.methods.set(e, this.arResult[e].arFields.PREVIEW_PICTURE_INFO, ".img-project")
                    },
                    roomCount: function(e) {
                        var t = Number(e);
                        return 1 === Number(t) ? "спальня" : Number(t) >= 2 && Number(t) <= 4 ? "спальни" : Number(t) >= 5 ? "спален" : ""
                    }
                },
                watch: {
                    resultParent: function(e) {
                        var t = this;
                        this.arFilter.ID = e;
                        var i = this.arFilter.IBLOCK_ID + "_" + e;
                        this.bitrixStore[i] ? this.arResult = this.bitrixStore[i].ITEMS : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(e) {
                            t.arResult = e.ITEMS, t.$store.dispatch("receiveCacheData", {
                                id: i,
                                cacheData: e
                            })
                        }))
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("resize", this.handleResize);
                    var t = this.arFilter.IBLOCK_ID + "_" + this.resultParent;
                    this.bitrixStore[t] ? this.arResult = this.bitrixStore[t].ITEMS : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(i) {
                        e.arResult = i.ITEMS, e.$store.dispatch("receiveCacheData", {
                            id: t,
                            cacheData: i
                        })
                    }))
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.handleResize)
                }
            },
            zs = Hs,
            Ks = Object(A["a"])(zs, Ws, Gs, !1, null, "08860f2c", null),
            Ys = Ks.exports,
            Xs = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "swiper-project row",
                    class: [{
                        "opacity-animate": e.elementVisibleScroll.activeImgSlide.visible
                    }],
                    attrs: {
                        showScroll: "activeImgSlide"
                    }
                }, [i("separator", {
                    staticClass: "col-23",
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "active-img col-lg-19"
                }, [i("swiper", {
                    ref: "SwiperActiveImg",
                    staticClass: "animation-overlap",
                    class: [e.activeSlideAnimation],
                    attrs: {
                        options: e.swiperOption
                    },
                    on: {
                        slideChange: e.onSlideChange
                    }
                }, e._l(this.arSlide, (function(t, s) {
                    return i("swiper-slide", {
                        key: s,
                        class: [{
                            "prev-prev": e.prevSlide === s
                        }, "slide-index-" + s]
                    }, ["V" === t.type ? i("div", {
                        staticClass: "img-slide"
                    }, [i("iframe", {
                        attrs: {
                            src: "https://www.youtube.com/embed/" + t.ID + "?enablejsapi=1",
                            frameborder: "0",
                            allowfullscreen: "",
                            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        }
                    })]) : i("div", {
                        staticClass: "img-slide",
                        class: {
                            watermark: t.WATERMARK
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("click", s)
                            }
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.SRC,
                            width: t.WIDTH,
                            height: t.HEIGHT,
                            itemprop: "image"
                        },
                        on: {
                            load: function(i) {
                                return e.backWatermark(s, t)
                            }
                        }
                    }), i("div", {
                        staticClass: "wrap-backWatermark"
                    }, [e.styleBackWatermark[s] ? i("div", {
                        staticClass: "backWatermark",
                        style: e.styleBackWatermark[s]
                    }) : e._e()])])])
                })), 1)], 1), i("div", {
                    staticClass: "thumb-swiper col-lg-4"
                }, [i("div", {
                    staticClass: "list-img"
                }, [i("swiper", {
                    ref: "thumbSwiper",
                    attrs: {
                        options: e.swiperOptionVertical
                    }
                }, e._l(this.arSlide, (function(t, s) {
                    return i("swiper-slide", {
                        key: s,
                        class: [{
                            "active-active": e.activeSlide === s
                        }, {
                            "show-img-scale": e.elementVisibleScroll["projectImg" + s] && e.elementVisibleScroll["projectImg" + s].visible
                        }, {
                            "video-prev": "V" === t.type
                        }],
                        attrs: {
                            showScroll: "projectImg" + s
                        }
                    }, ["V" === t.type ? i("div", {
                        staticClass: "video-icon",
                        on: {
                            click: function(t) {
                                return e.changeSlide(s)
                            }
                        }
                    }, [i("img", {
                        attrs: {
                            src: "https://i.ytimg.com/vi/" + t.ID + "/hqdefault.jpg"
                        }
                    }), i("icon-base", {
                        attrs: {
                            width: "16",
                            height: "12",
                            name: "video-icon"
                        }
                    }, [i("video-icon")], 1)], 1) : "undefined" !== typeof t.SRC ? i("div", {
                        staticClass: "img-wrap",
                        on: {
                            click: function(t) {
                                return e.changeSlide(s)
                            }
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.SRC,
                            width: t.WIDTH,
                            height: t.HEIGHT
                        }
                    })]) : e._e()])
                })), 1)], 1)])], 1)
            },
            qs = [],
            Js = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("path", {
                    attrs: {
                        d: "M0 0.662C0.00146404 0.486919 0.0855202 0.319345 0.23401 0.195478C0.3825 0.071612 0.583504 0.00139643 0.7936 0H15.2064C15.6448 0 16 0.296667 16 0.662V11.338C15.9985 11.5131 15.9145 11.6807 15.766 11.8045C15.6175 11.9284 15.4165 11.9986 15.2064 12H0.7936C0.583051 11.9998 0.381197 11.93 0.232392 11.8059C0.0835856 11.6817 -1.06764e-07 11.5135 0 11.338V0.662ZM6.8976 3.61C6.84945 3.58323 6.79349 3.56785 6.73568 3.56548C6.67788 3.56312 6.62038 3.57386 6.56932 3.59657C6.51826 3.61929 6.47554 3.65311 6.44573 3.69445C6.41591 3.73579 6.40011 3.7831 6.4 3.83133V8.16867C6.40011 8.2169 6.41591 8.26421 6.44573 8.30555C6.47554 8.34689 6.51826 8.38071 6.56932 8.40343C6.62038 8.42614 6.67788 8.43688 6.73568 8.43452C6.79349 8.43216 6.84945 8.41677 6.8976 8.39L10.8008 6.222C10.8447 6.19766 10.8807 6.16465 10.9056 6.12592C10.9305 6.08719 10.9435 6.04394 10.9435 6C10.9435 5.95606 10.9305 5.91281 10.9056 5.87408C10.8807 5.83535 10.8447 5.80234 10.8008 5.778L6.8976 3.61Z",
                        fill: "white"
                    }
                })
            },
            Zs = [],
            Qs = {
                name: "VideoIcon"
            },
            er = Qs,
            tr = Object(A["a"])(er, Js, Zs, !1, null, "1f40e038", null),
            ir = tr.exports;
        Oi["default"].use([Oi["Navigation"], Oi["EffectFade"], Oi["Controller"]]);
        var sr = {
                name: "SwiperDetailedProjects",
                components: {
                    VideoIcon: ir,
                    IconBase: xe,
                    Separator: z,
                    Swiper: Li["Swiper"],
                    SwiperSlide: Li["SwiperSlide"]
                },
                props: {
                    arSlide: Array,
                    elementVisibleScroll: Object
                },
                data: function() {
                    return {
                        prevSlide: 0,
                        activeSlide: 0,
                        activeSlideAnimation: "",
                        SwiperActiveImg: null,
                        thumbSwiper: null,
                        swiperOption: {
                            grabCursor: !1,
                            speed: 500,
                            effect: "fade"
                        },
                        swiperOptionVertical: {
                            direction: "vertical",
                            slidesPerView: 5,
                            spaceBetween: 15,
                            speed: 500,
                            slideToClickedSlide: !0,
                            breakpoints: {
                                20: {
                                    direction: "horizontal",
                                    slidesPerView: 2.6,
                                    spaceBetween: 10
                                },
                                992: {
                                    direction: "vertical",
                                    slidesPerView: 5,
                                    spaceBetween: 15
                                }
                            }
                        },
                        tmpSlideVideo: !1,
                        styleBackWatermark: [],
                        timerPrevSlide: null
                    }
                },
                watch: {
                    arSlide: function() {
                        this.checkTypeField()
                    }
                },
                methods: {
                    onSlideChange: function(e) {
                        var t = this;
                        this.prevSlide = this.activeSlide, this.activeSlide < e.activeIndex ? this.activeSlideAnimation = "active-slide-move-left" : this.activeSlideAnimation = "active-slide-move-right", this.activeSlide = e.activeIndex, this.toggleVideo(e.activeIndex), clearTimeout(this.timerPrevSlide), this.timerPrevSlide = setTimeout((function() {
                            t.prevSlide = -1, t.$emit("slideChange")
                        }), 1e3)
                    },
                    changeSlide: function(e) {
                        var t = this;
                        this.prevSlide = this.activeSlide, this.SwiperActiveImg.slideTo(e), this.activeSlide = e, clearTimeout(this.timerPrevSlide), this.timerPrevSlide = setTimeout((function() {
                            t.prevSlide = -1, t.$emit("slideChange")
                        }), 1e3)
                    },
                    checkTypeField: function() {
                        for (var e in this.arSlide)
                            if ("string" === typeof this.arSlide[e] && this.arSlide[e].includes("youtube")) {
                                var t = this.arSlide[e].split("?")[1];
                                for (var i in t = t.split("&"), t) "v" === t[i].split("=")[0] && (this.arSlide[e] = {}, this.arSlide[e]["type"] = "V", this.arSlide[e]["ID"] = t[i].split("=")[1])
                            }
                    },
                    toggleVideo: function() {
                        var e = document.querySelectorAll(".slide-index-" + this.activeSlide)[0];
                        if ("undefined" !== typeof e.getElementsByTagName("iframe")[0]) {
                            var t = e.getElementsByTagName("iframe")[0].contentWindow;
                            this.controlVideo(t, "playVideo"), this.controlVideo(t, "mute")
                        } else if (this.tmpSlideVideo && "undefined" !== typeof this.tmpSlideVideo.getElementsByTagName("iframe")[0]) {
                            var i = this.tmpSlideVideo.getElementsByTagName("iframe")[0].contentWindow;
                            this.controlVideo(i, "pauseVideo")
                        }
                    },
                    controlVideo: function(e, t) {
                        e.postMessage('{"event":"command","func":"' + t + '" ,"args":""}', "*"), this.tmpSlideVideo = document.querySelectorAll(".slide-index-" + this.activeSlide)[0]
                    },
                    backWatermark: function(e, t) {
                        this.$set(this.styleBackWatermark, e, hi.methods.set(e, t, ".img-slide"))
                    },
                    handleResize: function() {
                        for (var e in this.arSlide) "V" !== this.arSlide[e].type && this.backWatermark(e, this.arSlide[e])
                    }
                },
                created: function() {
                    window.addEventListener("resize", this.handleResize)
                },
                mounted: function() {
                    for (var e in this.SwiperActiveImg = this.$refs.SwiperActiveImg.$swiper, this.thumbSwiper = this.$refs.thumbSwiper.$swiper, this.arSlide) "V" !== this.arSlide[e].type && this.backWatermark(e, this.arSlide[e])
                },
                destroyed: function() {
                    this.SwiperActiveImg.destroy(!1, !1), this.thumbSwiper.destroy(!1, !1), window.removeEventListener("resize", this.handleResize)
                }
            },
            rr = sr,
            ar = Object(A["a"])(rr, Xs, qs, !1, null, "d1927d2c", null),
            or = ar.exports,
            lr = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("g", [i("path", {
                    attrs: {
                        d: "M20.7987 1.9461C21.4381 2.55301 21.9495 3.27508 22.3041 4.07191C22.6719 4.90117 22.8598 5.78179 22.8571 6.68808C22.8571 7.54302 22.6772 8.43391 22.32 9.3402C22.0237 10.0976 21.5924 10.8832 21.0447 11.6765C20.1769 12.932 18.9837 14.2414 17.502 15.5687C15.0441 17.769 12.6152 19.2863 12.512 19.3505L11.4034 20L10.3451 19.3505C10.2419 19.2889 7.81042 17.769 5.35511 15.5687C3.87346 14.2414 2.6802 12.932 1.81238 11.6765C1.2647 10.8832 0.836075 10.0976 0.537099 9.3402C0.179915 8.43391 0 7.54302 0 6.68808C0 5.78179 0.187852 4.90117 0.555619 4.07191C0.909305 3.27457 1.42079 2.55232 2.06108 1.9461C2.70401 1.33506 3.45278 0.85496 4.28356 0.521199C5.14345 0.174601 6.0536 1.80459e-05 6.99286 1.80459e-05C8.29725 1.80459e-05 9.56988 0.346616 10.6758 1.0013C10.9404 1.15791 11.1918 1.32993 11.4299 1.51735C11.668 1.32993 11.9194 1.15791 12.1839 1.0013C13.2899 0.346616 14.5625 1.80459e-05 15.8669 1.80459e-05C16.7967 -0.0020585 17.7176 0.175097 18.5762 0.521199C19.4042 0.853653 20.1587 1.33739 20.7987 1.9461Z",
                        fill: "#383838"
                    }
                })])
            },
            nr = [],
            cr = {
                name: "FavouriteIcon"
            },
            hr = cr,
            dr = Object(A["a"])(hr, lr, nr, !1, null, "48627305", null),
            ur = dr.exports,
            mr = {
                name: "ProjectDetailedPage",
                mixins: [P, lt],
                components: {
                    PopupCoolLightBox: Ps,
                    SwiperDetailedProjects: or,
                    SimilarProject: Ys,
                    ListingServices: $s,
                    Separator: z,
                    BaseButton: ee,
                    IconBase: xe,
                    FavouriteIcon: ur
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                watch: {
                    $route: function(e) {
                        var t = this;
                        this.changeCode = !0, this.changeAxios = !1, window.setTimeout((function() {
                            t.changeScreen(e)
                        }), 1e3)
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        var t = this;
                        this.changeAxios = !0, e && window.setTimeout((function() {
                            t.startAnimation()
                        }), 300)
                    }
                },
                data: function() {
                    return {
                        changeAxios: !1,
                        arResult: {
                            arFields: {
                                NAME: {}
                            },
                            arProperty: {
                                ARCHITECTURAL_STYLE: [],
                                AREA_PROJECT: [],
                                PRICE_BUILDING: [],
                                PRICE_PROJECT: [],
                                SIZE_PROJECT: [],
                                ROOM_PROJECT: [],
                                BATHROOMS_PROJECT: [],
                                WALL_PROJECT: [],
                                ROOF_PROJECT: [],
                                OVERLAPS_PROJECT: [],
                                EXTERIOR_FINISH: [],
                                FACADES_PICTURE: [],
                                PLAN_FIRST_FLOOR: {
                                    FILE_INFO: {}
                                },
                                PLAN_SECOND_FLOOR: {
                                    FILE_INFO: {}
                                },
                                SIMILAR_PROJECTS: []
                            }
                        },
                        arInfoBlock: {
                            arProperty: {
                                ADJUSTMENT_TITLE: {},
                                ADJUSTMENT_TEXT: {
                                    "~VALUE": ""
                                },
                                SERVICES_ID: {},
                                SERVICES_TITLE: {},
                                SERVICES_TEXT: {
                                    "~VALUE": ""
                                }
                            }
                        },
                        arSlidePicture: [],
                        arFacadesSrc: [],
                        arPlansSrc: [],
                        elementVisibleScroll: {
                            title: {},
                            consultationBtn1: {},
                            consultationBtn2: {},
                            projectAdjustment: {},
                            projectsBtn1: {},
                            like: {},
                            architectural: {},
                            area: {},
                            priceBuild: {},
                            specificationsTitle: {},
                            priceProject: {},
                            printProject: {},
                            priceBuild2: {},
                            specificationsDetail: {},
                            titleFacades: {},
                            textFacades: {},
                            activeImgSlide: {},
                            titlePlan1: {},
                            mirrorBtn1: {},
                            planImg1: {},
                            titlePlan2: {},
                            mirrorBtn2: {},
                            planImg2: {},
                            adjustmentProject: {},
                            adjustmentText: {},
                            servicesProject: {},
                            servicesText: {},
                            similarTitle: {}
                        },
                        arFilters: {},
                        arElementsShow: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 9,
                            ACTIVE: "Y",
                            CODE: this.$route.params.code
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {},
                        widthOrderService: ["col-xxl-7 col-md-11 left-side", "col-xxl-10 col-md-12 right-side", "col-xxl-6 col-md-11 right-side offset-right-1"],
                        widthOrderSimilar: ["col-xxl-7 ", "col-xxl-5 col-md-12", "col-md-11"],
                        mirrorPlan1: !1,
                        mirrorPlan2: !1,
                        fixedBtn: !1,
                        checkFavourite: !1,
                        changeCode: !1,
                        arSrc: []
                    }
                },
                methods: {
                    openLightBox: function(e, t) {
                        this.includeHostName(this[t]), this.$store.dispatch("receiveArSrcImg", {
                            ind: e
                        })
                    },
                    includeHostName: function(e) {
                        for (var t in this.arSrc = [], e) this.arSrc[t] = {
                            src: this.$hostname + e[t].SRC,
                            title: ""
                        };
                        return this.arSrc
                    },
                    changeScreen: function(e) {
                        var t = this;
                        this.arFilter.CODE = e.params.code, window.scrollTo(0, 0), this.changeCode = !1;
                        var i = this.arFilter.IBLOCK_ID + "_" + e.params.code;
                        this.bitrixStore[i] ? (this.setProject(this.bitrixStore[i]), this.arResult.arFields.NAME = this.arResult.arFields.NAME.replace("проект", "№"), setTimeout((function() {
                            t.$store.dispatch("receiveCheckPosition"), t.startAnimation()
                        }), 200)) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(e) {
                            t.setProject(e), t.arResult.arFields.NAME = t.arResult.arFields.NAME.replace("проект", "№"), t.$store.dispatch("receiveCheckPosition"), t.$store.dispatch("receiveCacheData", {
                                id: i,
                                cacheData: e
                            })
                        }))
                    },
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), window.innerWidth <= 768 ? this.fixedBtn = !0 : this.fixedBtn = !1
                    },
                    startAnimation: function() {
                        var e = this;
                        this.arElementsShow = lt.methods.GetElements(".project-detailed-page");
                        var t = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(t), setTimeout((function() {
                            e.$store.dispatch("receiveCheckPosition")
                        }), 200)
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation()
                    },
                    mirrorPlan: function(e) {
                        !0 === this[e] ? this[e] = !1 : this[e] = !0
                    },
                    setFavourite: function() {
                        var e = [],
                            t = Qe.methods.get("favouriteId");
                        if (null === t || "" === t) e[0] = this.arResult.arFields.ID, this.checkFavourite = !0;
                        else {
                            e = t.split(",");
                            var i = e.indexOf(this.arResult.arFields.ID); - 1 !== i ? (e.splice(i, 1), this.checkFavourite = !1) : (e.push(this.arResult.arFields.ID), this.checkFavourite = !0)
                        }
                        Qe.methods.set("favouriteId", e, 45)
                    },
                    checkFavouriteId: function() {
                        var e = [];
                        if (null === Qe.methods.get("favouriteId") || "" === Qe.methods.get("favouriteId")) this.checkFavourite = !1;
                        else {
                            e = Qe.methods.get("favouriteId").split(",");
                            var t = e.indexOf(this.arResult.arFields.ID);
                            this.checkFavourite = -1 !== t
                        }
                    },
                    openCallBackForm: function(e, t) {
                        var i = "ALL",
                            s = "s_sort",
                            r = "asc",
                            a = {
                                ACTIVE: "Y"
                            };
                        this.$store.dispatch("receiveParamForm", {
                            id: e,
                            getOnlyFields: i,
                            sort: s,
                            order: r,
                            arFilter: a,
                            title: t
                        }), this.$metrika.reachGoal("PROEKT")
                    },
                    setProject: function(e) {
                        "undefined" != typeof e.ITEMS ? (this.arResult = e.ITEMS[0], ai.methods.set(this.arResult, "detail"), this.arInfoBlock = e.infoBlock.GENERAL_INFORMATION, this.arSlidePicture = [e.ITEMS[0].arFields.PREVIEW_PICTURE_INFO], this.arSlidePicture = this.arSlidePicture.concat(e.ITEMS[0].arProperty.FACADES_PICTURE.FILE_INFO), this.arFacadesSrc = e.ITEMS[0].arProperty.FACADES_PICTURE.FILE_INFO, this.arPlansSrc[0] = e.ITEMS[0].arProperty.PLAN_FIRST_FLOOR.FILE_INFO, this.arPlansSrc[1] = e.ITEMS[0].arProperty.PLAN_SECOND_FLOOR.FILE_INFO, this.arResult.arFields.NAME = this.arResult.arFields.NAME.replace("проект", "№"), this.checkFavouriteId()) : this.$router.push("/404")
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize);
                    var t = this.arFilter.IBLOCK_ID + "_" + this.$route.params.code;
                    this.bitrixStore[t] ? this.setProject(this.bitrixStore[t]) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(i) {
                        e.setProject(i), e.$store.dispatch("receiveCacheData", {
                            id: t,
                            cacheData: i
                        })
                    }))
                },
                mounted: function() {
                    this.changeAxios || this.startAnimation()
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            pr = mr,
            vr = Object(A["a"])(pr, Fs, Ds, !1, null, "1104dd9c", null),
            Sr = vr.exports,
            fr = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "works-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios && !e.changeProjectList
                    }]
                }, [i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(e._s(e.$route.name))]), i("separator", {
                    attrs: {
                        show: !0,
                        "static-separator": e.changeProjectList
                    }
                }), i("div", {
                    staticClass: "gallery-filter"
                }, [i("div", {
                    staticClass: "col-xl-12 gallery-type-row"
                }, [i("div", {
                    staticClass: "gallery-type",
                    class: [{
                        active: 0 === e.activeFilter
                    }, {
                        moveTop: e.elementVisibleScroll.allWork.visible
                    }],
                    attrs: {
                        showScroll: "allWork"
                    },
                    on: {
                        click: function(t) {
                            return e.updateListProjects("")
                        }
                    }
                }, [e._v("Все "), i("span", [e._v(e._s(e.countAll))])]), i("div", {
                    staticClass: "gallery-type",
                    class: [{
                        active: 1 == e.activeFilter
                    }, {
                        moveTop: e.elementVisibleScroll.onlyVideo.visible
                    }],
                    attrs: {
                        showScroll: "onlyVideo"
                    },
                    on: {
                        click: function(t) {
                            return e.updateListProjects("PROPERTY_VIDEOGALLERY")
                        }
                    }
                }, [e._v("Видео "), i("span", [e._v(e._s(e.countVideo))])]), i("div", {
                    staticClass: "gallery-type",
                    class: [{
                        active: 2 == e.activeFilter
                    }, {
                        moveTop: e.elementVisibleScroll.onlyPicture.visible
                    }],
                    attrs: {
                        showScroll: "onlyPicture"
                    },
                    on: {
                        click: function(t) {
                            return e.updateListProjects("PROPERTY_PHOTOGALLERY")
                        }
                    }
                }, [e._v("Фотогалереи "), i("span", [e._v(e._s(e.countImages))])])]), i("div", {
                    staticClass: "col-xl-11 gallery-sort col-md-23",
                    class: [{
                        moveTop: e.elementVisibleScroll.sortBtn.visible
                    }],
                    attrs: {
                        showScroll: "sortBtn"
                    }
                }, [e._v("Сортировать по дате: "), i("div", {
                    staticClass: "gallery-sort-value",
                    class: {
                        up: !this.sortArrow.status
                    },
                    on: {
                        click: function(t) {
                            return e.updateSortListProjects()
                        }
                    }
                }, [e._m(0)])])]), i("separator", {
                    attrs: {
                        show: !0,
                        "static-separator": e.changeProjectList
                    }
                }), e.arResult && e.elementVisibleScroll ? i("listing-projects", {
                    class: [{
                        "change-screen": e.changeFilter
                    }],
                    attrs: {
                        "ar-result": e.arResult,
                        "width-order": e.widthOrder,
                        "element-visible-scroll": e.elementVisibleScroll
                    }
                }) : e._e(), e.countPage > e.lazyLoadPage.iNumPage && e.contentLoaded ? i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.linkProjectsWork1.visible
                    }],
                    attrs: {
                        text: "показать еще",
                        link: "javascript:void(0);",
                        typeBtn: "show-more",
                        showScroll: "linkProjectsWork1"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.lazyLoad()
                        }
                    }
                }) : e._e()], 1)
            },
            Er = [function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "gallery-sort-value-container"
                }, [s("div", {
                    staticClass: "new-value"
                }, [s("span", [e._v("сначала новые")]), s("div", {
                    staticClass: "triangle-toggle-btn"
                }, [s("img", {
                    attrs: {
                        src: i("d565")
                    }
                })])]), s("div", {
                    staticClass: "old-value"
                }, [s("span", [e._v("сначала старые")]), s("div", {
                    staticClass: "triangle-toggle-btn"
                }, [s("img", {
                    attrs: {
                        src: i("d565")
                    }
                })])])])
            }],
            Cr = {
                name: "WorksPage",
                components: {
                    BaseButton: ee,
                    ListingProjects: pi,
                    Separator: z
                },
                mixins: [P, lt],
                data: function() {
                    return {
                        arResult: [],
                        elementVisibleScroll: {
                            title: {},
                            titleFilter: {},
                            wrapFilter: {},
                            filerList: {},
                            linkProjectsWork1: {},
                            allWork: {},
                            onlyVideo: {},
                            onlyPicture: {},
                            sortBtn: {}
                        },
                        arFilters: {},
                        showAfterIntro: !0,
                        arElementsShow: [],
                        arSort: {
                            CREATED_DATE: "DESC",
                            TIMESTAMP_X: "DESC"
                        },
                        arFilter: {
                            IBLOCK_ID: 10,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {
                            iNumPage: 1,
                            nPageSize: 4,
                            realPageSize: 4
                        },
                        lazyLoadPage: {
                            iNumPage: 1,
                            nPageSize: 4
                        },
                        countActiveElement: 0,
                        countPage: 0,
                        countVideo: 0,
                        countImages: 0,
                        countAll: 0,
                        activeFilter: 0,
                        widthOrder: ["col-xl-12 col-md-10", "col-xl-11 col-md-13 heightSecondImg", "col-xl-7 col-md-13", "col-xl-16 col-md-10", "col-xl-12 col-md-10", "col-xl-11 col-md-13 heightSecondImg", "col-xl-16 col-md-10 ", "col-xl-7 col-md-13"],
                        sortArrow: {
                            status: !0,
                            style: ""
                        },
                        changeFilter: !1,
                        changeProjectList: !1,
                        contentLoaded: !1
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e ? (this.startAnimation(), this.observer(), this.contentLoaded = !0) : this.contentLoaded = !1
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".works-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.$store.dispatch("receiveCheckPosition")
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation()
                    },
                    updateListProjects: function(e) {
                        var t = this;
                        switch (this.changeFilter = !0, this.changeProjectList = !0, this.lazyLoadPage.iNumPage = 1, e) {
                            case "PROPERTY_VIDEOGALLERY":
                                this.activeFilter = 1, this.arFilter = {
                                    IBLOCK_ID: 10,
                                    ACTIVE: "Y",
                                    "!PROPERTY_VIDEOGALLERY": !1
                                };
                                break;
                            case "PROPERTY_PHOTOGALLERY":
                                this.activeFilter = 2, this.arFilter = {
                                    IBLOCK_ID: 10,
                                    ACTIVE: "Y",
                                    "!PROPERTY_PHOTOGALLERY": !1
                                };
                                break;
                            case "":
                                this.activeFilter = 0, this.arFilter = {
                                    IBLOCK_ID: 10,
                                    ACTIVE: "Y"
                                };
                                break;
                            default:
                                break
                        }
                        this.updateUlr(), setTimeout((function() {
                            P.methods.GetList(t.arSort, t.arFilter, !1, t.arNuvParam, t.arSelect).then((function(e) {
                                t.arResult = e.ITEMS, t.$store.dispatch("receiveCheckPosition"), e.infoBlock && (t.countPage = e.infoBlock.COUNT_PAGE), t.changeFilter = !1
                            }))
                        }), 1e3)
                    },
                    updateSortListProjects: function() {
                        var e = this;
                        this.changeFilter = !0, this.changeProjectList = !0, this.sortArrow.status = !this.sortArrow.status, "ASC" === this.arSort["CREATED_DATE"] ? this.arSort = {
                            CREATED_DATE: "DESC",
                            TIMESTAMP_X: "DESC"
                        } : this.arSort = {
                            CREATED_DATE: "ASC",
                            TIMESTAMP_X: "ASC"
                        }, this.updateUlr(), P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                            setTimeout((function() {
                                e.arResult = t.ITEMS, e.$store.dispatch("receiveCheckPosition"), t.infoBlock && (e.countPage = t.infoBlock.COUNT_PAGE), e.changeFilter = !1
                            }), 1e3)
                        }))
                    },
                    lazyLoad: function() {
                        var e = this;
                        this.lazyLoadPage.iNumPage++, this.changeProjectList = !0, this.updateUlr(), P.methods.GetList(this.arSort, this.arFilter, !1, this.lazyLoadPage, this.arSelect).then((function(t) {
                            e.arResult = e.arResult.concat(t.ITEMS), e.$store.dispatch("receiveCheckPosition", e.lazyLoadPage.iNumPage)
                        }))
                    },
                    observer: function() {
                        var e = this,
                            t = this;
                        this.observerShowMore = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                e.isIntersecting && t.lazyLoad()
                            }))
                        }), {
                            threshold: [.1],
                            rootMargin: window.innerHeight + "px 0px 0px 0px"
                        }), setTimeout((function() {
                            document.querySelector(".show-more") ? e.observerShowMore.observe(document.querySelector(".show-more")) : e.observerShowMore.disconnect()
                        }), 300)
                    },
                    updateUlr: function() {
                        var e = "?";
                        for (var t in this.arFilter) t.includes("PROPERTY_VIDEOGALLERY") && (e = "?gallery=video"), t.includes("PROPERTY_PHOTOGALLERY") && (e = "?gallery=photo");
                        e += "&sort=" + this.arSort["CREATED_DATE"].toLowerCase(), this.lazyLoadPage.iNumPage > 1 && (e += "&Page=" + this.lazyLoadPage.iNumPage), window.history.replaceState("", "", window.location.pathname + e)
                    }
                },
                created: function() {
                    var e = this;
                    this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorGray"
                    }), window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), this.activeFilter = 0;
                    var t = document.location.search.replace("?", "").split("&");
                    if ("" !== t[0])
                        for (var i in t) {
                            var s = t[i].split("=");
                            switch (s[0]) {
                                case "gallery":
                                    "video" === s[1] ? (this.activeFilter = 1, this.arFilter["!PROPERTY_VIDEOGALLERY"] = !1) : "photo" === s[1] && (this.activeFilter = 2, this.arFilter["!PROPERTY_PHOTOGALLERY"] = !1);
                                    break;
                                case "sort":
                                    "asc" === s[1] ? this.sortArrow.status = !1 : this.sortArrow.status = !0, this.arSort = {
                                        CREATED_DATE: s[1].toUpperCase(),
                                        TIMESTAMP_X: s[1].toUpperCase()
                                    };
                                    break;
                                case "Page":
                                    this.arNuvParam.nPageSize *= s[1], this.lazyLoadPage.iNumPage = s[1];
                                    break
                            }
                        }
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS, e.arResult[0]["SECTION_NAME"] = t.infoBlock.IBLOCK_NAME, ai.methods.set(e.arResult[0], "section"), e.countPage = t.infoBlock.COUNT_PAGE, e.countAll = t.infoBlock.ALL_COUNT_ITEM, e.countVideo = t.infoBlock.ALL_COUNT_ITEM_VIDEO, e.countImages = t.infoBlock.ALL_COUNT_ITEM_PICTURE
                    }))
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize), this.$store.dispatch("receiveAppClass", {
                        appClass: ""
                    })
                }
            },
            gr = Cr,
            br = Object(A["a"])(gr, fr, Er, !1, null, "af78d4fa", null),
            Tr = br.exports,
            Pr = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "work-detailed-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }]
                }, [i("div", {
                    staticClass: "row preview-info"
                }, [e.arResult.arFields.NAME ? i("h1", {
                    staticClass: "col-xl-12 order-1 col-md-20 col-23",
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(" " + e._s(e.arResult.arFields.NAME) + " ")]) : e._e(), i("div", {
                    staticClass: "fixed-mobile-btn col-xl-11 order-xl-2 order-md-6 col-md-13"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.consultationBtn1.visible || e.fixedBtn
                    }],
                    attrs: {
                        text: "консультация",
                        link: "javascript:void(0);",
                        typeBtn: "base-btn",
                        showScroll: "consultationBtn1"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.openCallBackForm(3, "консультация")
                        }
                    }
                })], 1), i("div", {
                    staticClass: "col-23 order-xl-3 order-md-3 order-2"
                }, [i("div", {
                    staticClass: "go-to-project"
                }, [i("go-to-project", {
                    attrs: {
                        id: e.arResult.arProperty.PROJECT.VALUE,
                        "element-visible-scroll": e.elementVisibleScroll
                    }
                })], 1)]), i("div", {
                    staticClass: "col-xl-12 go-to-map order-xl-4 order-md-2 col-md-3 col-auto order-5"
                }, [e.arResult.arProperty.MAP.VALUE ? i("span", {
                    directives: [{
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: {
                            element: "#map",
                            duration: 500,
                            offset: -e.headerHeight
                        },
                        expression: "{\n                    element: '#map', \n                    duration: 500, \n                    offset: -headerHeight }"
                    }],
                    class: [{
                        moveTop: e.elementVisibleScroll.linkMap.visible
                    }],
                    attrs: {
                        showScroll: "linkMap"
                    }
                }, [e._v("на карте")]) : e._e()]), e.arResult.arProperty.BEDROOMS.VALUE ? i("div", {
                    staticClass: "prev-info-block col-xl-2 order-xl-5 order-md-4 col-md-5 col-auto order-3"
                }, [i("div", {
                    class: [{
                        moveTop: e.elementVisibleScroll.room.visible
                    }],
                    attrs: {
                        showScroll: "room"
                    }
                }, [i("span", {
                    staticClass: "title-info"
                }, [e._v("спальни")]), i("p", [e._v(e._s(e.arResult.arProperty.BEDROOMS.VALUE))])])]) : e._e(), e.arResult.arProperty.AREA_WORK.VALUE ? i("div", {
                    staticClass: "prev-info-block col-xl-4 order-xl-6 order-md-5 col-md-5 col-auto order-4"
                }, [i("div", {
                    class: [{
                        moveTop: e.elementVisibleScroll.area.visible
                    }],
                    attrs: {
                        showScroll: "area"
                    }
                }, [i("span", {
                    staticClass: "title-info"
                }, [e._v("общая площадь")]), i("p", [e._v(e._s(e.arResult.arProperty.AREA_WORK.VALUE) + "м"), i("sup", [e._v("2")])])])]) : e._e()]), i("swiper-detailed-projects", {
                    attrs: {
                        "ar-slide": e.arSlidePicture,
                        "element-visible-scroll": e.elementVisibleScroll
                    },
                    on: {
                        click: function(t) {
                            return e.openLightBox(t, "arPicture")
                        },
                        slideChange: e.startAnimation
                    }
                }), i("separator", {
                    attrs: {
                        show: !0
                    }
                }), e.arResult.arProperty.MAP.VALUE ? i("GoogleMapLoader", {
                    class: [{
                        "opacity-animate": e.elementVisibleScroll.map.visible
                    }],
                    attrs: {
                        id: "map",
                        apiKey: "AIzaSyDzzESXOO5htMqy5-fnRMp9DwRqxPaPxto",
                        zoom: 14,
                        markers: e.arResult.arProperty.MAP.VALUE,
                        showScroll: "map"
                    }
                }) : e._e(), i("popup-cool-light-box", {
                    attrs: {
                        elems: e.arSrc
                    }
                })], 1)
            },
            wr = [],
            _r = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", [i("div", {
                    ref: "googleMap",
                    staticClass: "google-map",
                    attrs: {
                        google: e.google,
                        map: e.map
                    }
                })])
            },
            Ar = [],
            Ir = i("5530"),
            Rr = (i("d81d"), i("f464")),
            Lr = i.n(Rr),
            Or = {
                clickableIcons: !1,
                streetViewControl: !1,
                panControlOptions: !1,
                gestureHandling: "cooperative",
                mapTypeControl: !1,
                zoomControlOptions: {
                    style: "SMALL"
                },
                scrollwheel: !1,
                minZoom: 9,
                maxZoom: 17,
                styles: [{
                    featureType: "all",
                    elementType: "labels.text.fill",
                    stylers: [{
                        saturation: 36
                    }, {
                        color: "#000000"
                    }, {
                        lightness: 40
                    }]
                }, {
                    featureType: "all",
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#000000"
                    }, {
                        lightness: 16
                    }]
                }, {
                    featureType: "all",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 17
                    }, {
                        weight: 1.2
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 21
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 29
                    }, {
                        weight: .2
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 18
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 16
                    }]
                }, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 19
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 17
                    }]
                }]
            },
            yr = i("c23d"),
            xr = i.n(yr),
            Vr = {
                name: "GoogleMapLoader",
                props: {
                    apiKey: String,
                    zoom: Number,
                    markers: [String, Array]
                },
                data: function() {
                    return {
                        google: null,
                        map: null,
                        points: []
                    }
                },
                methods: {
                    initializeMap: function() {
                        var e = this.$refs.googleMap;
                        if (this.map = new this.google.maps.Map(e, this.mapConfig), this.points.length > 1) {
                            var t = this.google.maps.Marker;
                            for (var i in this.points) new t({
                                position: this.points[i],
                                map: this.map,
                                icon: xr.a
                            })
                        } else {
                            var s = this.google.maps.Marker;
                            new s({
                                position: this.map.getCenter(),
                                map: this.map,
                                icon: xr.a
                            })
                        }
                    },
                    setConfig: function() {
                        var e = [],
                            t = !1;
                        return Array.isArray(this.markers) ? (e = this.markers[0].split(","), this.markers.length > 1 && (t = !0)) : e = this.markers.split(","), Object(Ir["a"])(Object(Ir["a"])({}, Or), {}, {
                            center: new this.google.maps.LatLng(e[0], e[1]),
                            zoom: this.zoom,
                            draggable: t
                        })
                    }
                },
                created: function() {
                    if (this.$store.dispatch("receiveIntroStatus", 1), Array.isArray(this.markers))
                        if (this.markers.length > 1)
                            for (var e in this.markers) {
                                var t = this.markers[e].split(",");
                                this.points[e] = {
                                    lat: parseFloat(t[0]),
                                    lng: parseFloat(t[1])
                                }
                            } else {
                                var i = this.markers[0].split(",");
                                this.points = [{
                                    lat: i[0],
                                    lng: i[1]
                                }]
                            } else {
                                var s = this.markers.split(",");
                                this.points = [{
                                    lat: s[0],
                                    lng: s[1]
                                }]
                            }
                },
                mounted: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Lr()({
                                        apiKey: e.apiKey
                                    });
                                case 2:
                                    i = t.sent, e.google = i, e.mapConfig = e.setConfig(), e.initializeMap(), e.$store.dispatch("receiveIntroStatus", -1);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            },
            kr = Vr,
            Fr = Object(A["a"])(kr, _r, Ar, !1, null, "2c03af23", null),
            Dr = Fr.exports,
            Mr = i("2e22"),
            Nr = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.viewProject.visible
                    }],
                    attrs: {
                        text: "Посмотреть проект",
                        link: "/projects/" + this.code,
                        typeBtn: "secondary-button",
                        showScroll: "viewProject"
                    }
                })
            },
            Br = [],
            jr = {
                name: "GoToProject",
                mixins: [P],
                components: {
                    BaseButton: ee
                },
                props: ["id", "elementVisibleScroll"],
                data: function() {
                    return {
                        code: "",
                        arResult: {}
                    }
                },
                created: function() {
                    var e = this,
                        t = {
                            SORT: "ASC"
                        },
                        i = {
                            IBLOCK_ID: 9,
                            ID: this.id,
                            ACTIVE: "Y"
                        },
                        s = ["ID", "IBLOCK_ID", "NAME", "CODE"];
                    P.methods.GetList(t, i, !1, !1, s).then((function(t) {
                        e.arResult = t.ITEMS[0], e.code = t.ITEMS[0].arFields.CODE
                    }))
                },
                mounted: function() {}
            },
            Ur = jr,
            $r = Object(A["a"])(Ur, Nr, Br, !1, null, "4c4d1604", null),
            Wr = $r.exports;
        s["default"].use(Os.a, {
            container: "body",
            duration: 500,
            easing: "ease-in-out",
            onStart: function(e) {
                window.history.replaceState("", "", window.location.pathname + "#" + e.id)
            }
        });
        var Gr = {
                name: "WorksDetailedPage",
                mixins: [P, lt],
                components: {
                    PopupCoolLightBox: Ps,
                    SwiperDetailedProjects: or,
                    BaseButton: ee,
                    GoogleMapLoader: Dr,
                    Separator: z,
                    GoToProject: Wr
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e && (this.startAnimation(), this.getHeaderHeight())
                    }
                },
                data: function() {
                    return {
                        arResult: {
                            arFields: {
                                NAME: {}
                            },
                            arProperty: {
                                MAP: [],
                                PROJECT: [],
                                BEDROOMS: [],
                                PHOTOGALLERY: [],
                                VIDEOGALLERY: [],
                                AREA_WORK: []
                            }
                        },
                        arInfoBlock: {
                            arProperty: {
                                ADJUSTMENT_TITLE: {},
                                ADJUSTMENT_TEXT: {
                                    "~VALUE": ""
                                },
                                SERVICES_TITLE: {},
                                SERVICES_TEXT: {
                                    "~VALUE": ""
                                }
                            }
                        },
                        arSlidePicture: [],
                        arPicture: [],
                        arSrc: [],
                        elementVisibleScroll: {
                            title: {},
                            consultationBtn1: {},
                            consultationBtn2: {},
                            viewProject: {},
                            area: {},
                            linkMap: {},
                            activeImgSlide: {},
                            room: {},
                            map: {}
                        },
                        arFilters: {},
                        showAfterIntro: !0,
                        arElementsShow: [],
                        markers: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 10,
                            ACTIVE: "Y",
                            CODE: this.$route.params.code
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {},
                        headerHeight: 0,
                        fixedBtn: !1
                    }
                },
                methods: {
                    openLightBox: function(e, t) {
                        this.includeHostName(this[t]), this.$store.dispatch("receiveArSrcImg", {
                            ind: e
                        })
                    },
                    includeHostName: function(e) {
                        for (var t in this.arSrc = [], console.log(e), e) this.arSrc[t] = {
                            src: this.$hostname + e[t].SRC,
                            title: ""
                        };
                        return this.arSrc
                    },
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), window.innerWidth <= 768 ? this.fixedBtn = !0 : this.fixedBtn = !1
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".work-detailed-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.$store.dispatch("receiveCheckPosition")
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation(), this.getHeaderHeight()
                    },
                    scrollTo: function(e) {
                        var t = document.querySelector("#" + e),
                            i = document.getElementsByClassName("header");
                        window.scrollTo({
                            top: t.offsetTop - i[0].clientHeight,
                            behavior: "smooth"
                        })
                    },
                    getHeaderHeight: function() {
                        var e = document.getElementsByClassName("header");
                        this.headerHeight = e[0].clientHeight
                    },
                    openCallBackForm: function(e, t) {
                        var i = "ALL",
                            s = "s_sort",
                            r = "asc",
                            a = {
                                ACTIVE: "Y"
                            };
                        this.$store.dispatch("receiveParamForm", {
                            id: e,
                            getOnlyFields: i,
                            sort: s,
                            order: r,
                            arFilter: a,
                            title: t
                        })
                    }
                },
                created: function() {
                    var e = this;
                    this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorGray"
                    }), window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        if ("undefined" != typeof t.ITEMS) {
                            if (e.arResult = t.ITEMS[0], ai.methods.set(e.arResult, "detail"), e.arSlidePicture = [t.ITEMS[0].arFields.PREVIEW_PICTURE_INFO], e.arSlidePicture = e.arSlidePicture.concat(t.ITEMS[0].arProperty.PHOTOGALLERY.FILE_INFO), e.arSlidePicture = e.arSlidePicture.concat(t.ITEMS[0].arProperty.VIDEOGALLERY.VALUE), e.arPicture = [e.arResult.arFields.PREVIEW_PICTURE_INFO], e.arPicture = e.arPicture.concat(e.arResult.arProperty.PHOTOGALLERY.FILE_INFO), document.location.hash) {
                                var i = Object(Mr["a"])();
                                i(document.location.hash)
                            }
                        } else e.$router.push("/404")
                    }))
                },
                destroyed: function() {
                    this.$store.dispatch("receiveAppClass", {
                        appClass: ""
                    }), window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            Hr = Gr,
            zr = Object(A["a"])(Hr, Pr, wr, !1, null, "6e561eaa", null),
            Kr = zr.exports,
            Yr = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "price-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }]
                }, [i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(e._s(e.$route.name))]), e.arResult.arProperty.MATERIAL_WALL.VALUE ? i("swiper-table", {
                    attrs: {
                        "id-item": e.arResult.arProperty.MATERIAL_WALL.VALUE,
                        "element-visible-scroll": e.elementVisibleScroll,
                        "table-property": e.tableProperty,
                        "table-price": e.priceProperty,
                        "id-block": 15
                    }
                }) : e._e(), i("div", {
                    staticClass: "payment-methods-block"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "col-xxl-10 col-xl-11 col-md-16"
                }, [i("h3", {
                    class: [{
                        moveTop: e.elementVisibleScroll.titlePayment.visible
                    }],
                    attrs: {
                        showScroll: "titlePayment"
                    }
                }, [e._v(" " + e._s(e.arResult.arProperty.TITLE_PAYMENT_METHODS.VALUE) + " ")])]), i("div", {
                    staticClass: "list-methods col-xl-7 col-md-16"
                }, e._l(e.arResult.arProperty.LIST_PAYMENT_METHODS["~VALUE"], (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "text-square",
                        class: [{
                            moveTop: e.elementVisibleScroll["listPayment" + s] && e.elementVisibleScroll["listPayment" + s].visible
                        }],
                        attrs: {
                            showScroll: "listPayment" + s
                        },
                        domProps: {
                            innerHTML: e._s(t.TEXT)
                        }
                    }, [e._v(" " + e._s(t) + " ")])
                })), 0)])], 1), e.arResult.arProperty.MATERIAL_ID_SECTION.VALUE ? i("home-configurator", {
                    attrs: {
                        "parent-result": e.arResult.arProperty.MATERIAL_ID_SECTION,
                        "element-visible-scroll": e.elementVisibleScroll
                    },
                    on: {
                        created: e.startAnimation
                    }
                }) : e._e(), i("div", {
                    staticClass: "working-scheme"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.titleScheme.visible
                    }],
                    attrs: {
                        showScroll: "titleScheme"
                    }
                }, [e._v(" схема работы ")]), e.arResult.arProperty.WORKING_SCHEME["~VALUE"] ? i("snake-diagram", {
                    attrs: {
                        "list-value": e.arResult.arProperty.WORKING_SCHEME["~VALUE"],
                        "element-visible-scroll": e.elementVisibleScroll
                    }
                }) : e._e()], 1), e.arResult.arProperty.PROJECT_ID.VALUE ? i("similar-project", {
                    attrs: {
                        "title-component": "наши проекты",
                        "result-parent": e.arResult.arProperty.PROJECT_ID.VALUE,
                        "element-visible-scroll": e.elementVisibleScroll,
                        "width-order": e.widthOrder
                    }
                }) : e._e()], 1)
            },
            Xr = [],
            qr = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "swiper-table",
                    class: [{
                        "slide-effect": e.scrollTable.activeSlideEffect
                    }, {
                        "single-project": 1 === e.arResult.length
                    }]
                }, [s("div", {
                    staticClass: "nav-btn-table",
                    class: [{
                        "animation-show-nav-btn": e.elementVisibleScroll.navBtn.visible
                    }],
                    attrs: {
                        showScroll: "navBtn"
                    }
                }, [s("div", {
                    staticClass: "arrow-left",
                    class: [{
                        disable: e.scrollTable.leftArrowDisable
                    }],
                    on: {
                        click: function(t) {
                            return e.slideTable(-1)
                        }
                    }
                }, [s("img", {
                    attrs: {
                        width: "50",
                        height: "28",
                        src: i("c633")
                    }
                })]), s("div", {
                    staticClass: "arrow-right",
                    class: [{
                        disable: e.scrollTable.rightArrowDisable
                    }],
                    on: {
                        click: function(t) {
                            return e.slideTable(1)
                        }
                    }
                }, [s("img", {
                    attrs: {
                        width: "50",
                        height: "28",
                        src: i("2a29")
                    }
                })])]), 9 === e.idBlock && e.arResult.length > 1 ? s("separator", {
                    attrs: {
                        show: !0
                    }
                }) : e._e(), 9 === e.idBlock && e.arResult.length > 1 ? s("div", {
                    staticClass: "filter-param"
                }, [s("div", {
                    class: [{
                        selected: !e.scrollTable.activeDiffElement
                    }],
                    on: {
                        click: function(t) {
                            return e.showAllParam()
                        }
                    }
                }, [s("span", [e._v("Все параметры")])]), s("div", {
                    class: [{
                        selected: e.scrollTable.activeDiffElement
                    }],
                    on: {
                        click: function(t) {
                            return e.showDifferencesParam()
                        }
                    }
                }, [s("span", [e._v("Различающиеся")])])]) : e._e(), s("separator", {
                    attrs: {
                        show: !0
                    }
                }), s("div", {
                    staticClass: "table-wrap",
                    style: this.scrollTable.styleContent,
                    on: {
                        mousedown: function(t) {
                            return e.startScrollTable()
                        },
                        mousemove: function(t) {
                            return e.horizontalScrollTable()
                        },
                        mouseup: function(t) {
                            return e.endScrollTable()
                        },
                        touchstart: function(t) {
                            return e.startScrollTable()
                        },
                        touchmove: function(t) {
                            return e.horizontalScrollTable()
                        },
                        touchend: function(t) {
                            return e.endScrollTable()
                        }
                    }
                }, [s("div", {
                    staticClass: "row row-img"
                }, [s("div", {
                    staticClass: "col-xxl-4 col-md-5 fixed-col",
                    style: e.scrollTable.styleFixedCol
                }, [15 === e.idBlock ? s("p", {
                    staticClass: "text-price-table",
                    class: [{
                        moveTop: e.elementVisibleScroll.textTable.visible
                    }],
                    attrs: {
                        showScroll: "textTable"
                    }
                }, [e._v(" стоимость указана за материалы и работы ")]) : e._e(), 15 === e.idBlock ? s("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.btnConsul.visible
                    }],
                    attrs: {
                        text: "консультация",
                        link: "javascript:void(0);",
                        typeBtn: "base-btn",
                        showScroll: "btnConsul"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.openCallBackForm(4, "консультация")
                        }
                    }
                }) : e._e()], 1), e._l(this.arResult, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "value-col",
                        class: [{
                            "col-6": i !== e.arResult.length - 1
                        }, {
                            "col-xxl-7 col-6": i === e.arResult.length - 1
                        }]
                    }, [9 === e.idBlock ? s("base-button", {
                        class: [{
                            "show-link-arrow": e.elementVisibleScroll["linkProject" + i] && e.elementVisibleScroll["linkProject" + i].visible
                        }],
                        attrs: {
                            text: t.arFields.NAME.replace("проект", "№"),
                            link: "/projects/" + t.arFields.CODE,
                            typeBtn: "link-arrow-right",
                            showScroll: "linkProject" + i
                        }
                    }) : e._e(), s("div", {
                        staticClass: "img-wall",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["materialImg" + i] && e.elementVisibleScroll["materialImg" + i].visible
                        }],
                        attrs: {
                            showScroll: "materialImg" + i
                        }
                    }, [s("img", {
                        attrs: {
                            src: e.$hostname + t.arFields.PREVIEW_PICTURE_INFO.SRC,
                            width: t.arFields.PREVIEW_PICTURE_INFO.WIDTH,
                            height: t.arFields.PREVIEW_PICTURE_INFO.HEIGHT
                        }
                    })])], 1)
                }))], 2), s("div", {
                    staticClass: "row",
                    class: [{
                        "opacity-animate": e.elementVisibleScroll.rowTable.visible
                    }],
                    attrs: {
                        showScroll: "rowTable"
                    }
                }, [s("div", {
                    staticClass: "col-xxl-4 col-md-5 fixed-col",
                    style: e.scrollTable.styleFixedCol
                }, [s("p", {
                    class: [{
                        moveTop: e.elementVisibleScroll.priceTextMaterial.visible
                    }],
                    attrs: {
                        showScroll: "priceTextMaterial"
                    }
                }, [e._v(" цена строительства ")])]), e._l(this.arResult, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "value-col",
                        class: [{
                            "col-6": i !== e.arResult.length - 1
                        }, {
                            "col-xxl-7 col-6": i === e.arResult.length - 1
                        }]
                    }, [15 === e.idBlock ? s("div", {
                        staticClass: "price-item",
                        class: [{
                            moveTop: e.elementVisibleScroll.priceMaterial.visible
                        }],
                        attrs: {
                            showScroll: "priceMaterial"
                        }
                    }, [s("p", [e._v(e._s(t.arFields.NAME))]), "" !== t.arProperty[e.tablePrice].VALUE ? s("span", [e._v(e._s(t.arProperty[e.tablePrice].VALUE) + " ₽/м"), s("sup", [e._v("2")])]) : s("span", [e._v("—")])]) : 9 === e.idBlock ? s("div", {
                        staticClass: "price-item",
                        class: [{
                            moveTop: e.elementVisibleScroll.priceMaterial.visible
                        }],
                        attrs: {
                            showScroll: "priceMaterial"
                        }
                    }, ["" !== t.arProperty[e.tablePrice].VALUE ? s("span", [e._v(e._s(t.arProperty[e.tablePrice].VALUE) + " ₽")]) : s("span", [e._v("—")])]) : e._e()])
                }))], 2), e._l(this.rowTable, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "row",
                        class: [{
                            "opacity-animate": e.elementVisibleScroll["rowTable" + i] && e.elementVisibleScroll["rowTable" + i].visible
                        }],
                        style: e.scrollTable.widthBorderValue,
                        attrs: {
                            showScroll: "rowTable" + i
                        }
                    }, [s("div", {
                        staticClass: "col-xxl-4 col-md-5 fixed-col",
                        style: e.scrollTable.styleFixedCol
                    }, [s("p", {
                        class: [{
                            moveTop: e.elementVisibleScroll["rowTitle" + i] && e.elementVisibleScroll["rowTitle" + i].visible
                        }],
                        attrs: {
                            showScroll: "rowTitle" + i
                        }
                    }, [e._v(" " + e._s(t.NAME) + " ")])]), e._l(e.arResult, (function(r, a) {
                        return s("div", {
                            key: a,
                            staticClass: "value-col",
                            class: [{
                                "col-6": a !== e.arResult.length - 1
                            }, {
                                "col-xxl-7 col-6": a === e.arResult.length - 1
                            }]
                        }, [s("div", ["" !== r.arProperty[t.CODE].VALUE ? s("p", {
                            class: [{
                                moveTop: e.elementVisibleScroll["rowValue" + i + a] && e.elementVisibleScroll["rowValue" + i + a].visible
                            }],
                            attrs: {
                                showScroll: "rowValue" + i + a
                            }
                        }, [e._v(" " + e._s(r.arProperty[t.CODE].VALUE) + " "), "AREA_PROJECT" === t.CODE ? s("span", [e._v(" м"), s("sup", [e._v("2")])]) : "SIZE_PROJECT" === t.CODE ? s("span", [e._v(" м")]) : "PRICE_PROJECT" === t.CODE ? s("span", [e._v(" ₽")]) : e._e()]) : s("p", [e._v("—")])])])
                    }))], 2)
                }))], 2)], 1)
            },
            Jr = [];
        Oi["default"].use([Oi["Navigation"], Oi["EffectFade"], Oi["Controller"]]);
        var Zr = {
                name: "SwiperTable",
                components: {
                    BaseButton: ee,
                    Separator: z
                },
                props: {
                    elementVisibleScroll: Object,
                    idItem: [Object, Array],
                    idBlock: Number,
                    tableProperty: Array,
                    tablePrice: String
                },
                data: function() {
                    return {
                        arResult: [],
                        showAfterIntro: !0,
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: this.idBlock,
                            ACTIVE: "Y",
                            ID: this.idItem
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {},
                        ColTable: [],
                        rowTable: [],
                        scrollTable: {
                            widthContent: 0,
                            borderRight: 0,
                            positionContent: 0,
                            newPositionContent: 0,
                            clickCoordX: 0,
                            moveCoordX: 0,
                            styleContent: "",
                            styleFixedCol: "",
                            activeEventMove: !1,
                            activeEventClick: !0,
                            widthSlide: 0,
                            widthFixedCol: 0,
                            leftArrowDisable: !0,
                            rightArrowDisable: !1,
                            activeSlideEffect: !1,
                            widthBorderValue: "",
                            activeDiffElement: !1
                        }
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                watch: {
                    "scrollTable.styleContent": function() {
                        this.scrollTable.newPositionContent + 15 > 0 ? this.scrollTable.leftArrowDisable = !0 : this.scrollTable.leftArrowDisable = !1, this.scrollTable.borderRight > this.scrollTable.newPositionContent - 15 ? this.scrollTable.rightArrowDisable = !0 : this.scrollTable.rightArrowDisable = !1
                    }
                },
                methods: {
                    propertyWrap: function() {
                        var e = 20;
                        window.innerWidth <= 767 && (e = 10), this.checkWidthContent(), this.scrollTable.borderRight = window.innerWidth - this.scrollTable.widthContent - (window.innerWidth - this.scrollTable.widthSlide * Math.floor((window.innerWidth - this.scrollTable.widthFixedCol) / this.scrollTable.widthSlide) - this.scrollTable.widthFixedCol), this.scrollTable.positionContent = document.querySelectorAll(".table-wrap")[0].offsetLeft - e, this.scrollTable.widthSlide = document.querySelectorAll(".table-wrap .value-col")[0].scrollWidth
                    },
                    startScrollTable: function() {
                        !0 === this.scrollTable.activeEventClick && !0 === this.scrollTable.activeSlideEffect && (this.propertyWrap(), event.pageX ? this.scrollTable.clickCoordX = event.pageX : this.scrollTable.clickCoordX = event.changedTouches[0].pageX, this.scrollTable.activeEventMove = !0)
                    },
                    horizontalScrollTable: function() {
                        !0 === this.scrollTable.activeEventMove && (event.pageX ? this.scrollTable.moveCoordX = event.pageX : this.scrollTable.moveCoordX = event.changedTouches[0].pageX, this.scrollTable.newPositionContent = this.scrollTable.moveCoordX - this.scrollTable.clickCoordX + this.scrollTable.positionContent, this.scrollTable.newPositionContent > 0 ? this.scrollTable.newPositionContent = 0 : this.scrollTable.borderRight - this.scrollTable.widthSlide / 2 > this.scrollTable.newPositionContent && (this.scrollTable.newPositionContent = this.scrollTable.borderRight - this.scrollTable.widthSlide / 2), this.scrollTable.styleContent = "left: " + this.scrollTable.newPositionContent + "px", this.scrollTable.styleFixedCol = "left: " + -1 * this.scrollTable.newPositionContent + "px")
                    },
                    endScrollTable: function() {
                        var e = this;
                        this.scrollTable.activeEventClick = !1, this.scrollTable.activeEventMove = !1;
                        var t = this.scrollTable.clickCoordX - this.scrollTable.moveCoordX,
                            i = 0,
                            s = -1,
                            r = 1;
                        t > 0 ? s = 1 : t < 0 && (s = -1), r += Math.floor(Math.abs(t) / this.scrollTable.widthSlide), i = Math.abs(this.scrollTable.widthSlide * r - Math.abs(t)) * s, this.scrollTable.newPositionContent = this.scrollTable.newPositionContent - i, this.scrollTable.newPositionContent > 0 ? this.scrollTable.newPositionContent = 0 : this.scrollTable.borderRight > this.scrollTable.newPositionContent && (this.scrollTable.newPositionContent = this.scrollTable.borderRight), this.scrollTable.styleContent = "left: " + this.scrollTable.newPositionContent + "px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)", this.scrollTable.styleFixedCol = "left: " + -1 * this.scrollTable.newPositionContent + "px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)", this.scrollTable.clickCoordX = 0, this.scrollTable.moveCoordX = 0, window.setTimeout((function() {
                            return e.scrollTable.activeEventClick = !0
                        }), 300)
                    },
                    slideTable: function(e) {
                        this.propertyWrap();
                        var t = this.scrollTable.widthSlide * e;
                        this.scrollTable.newPositionContent = this.scrollTable.positionContent - t, this.scrollTable.newPositionContent > 0 ? this.scrollTable.newPositionContent = 0 : this.scrollTable.borderRight - this.scrollTable.widthSlide > this.scrollTable.newPositionContent && (this.scrollTable.newPositionContent = this.scrollTable.borderRight - this.scrollTable.widthSlide), this.scrollTable.styleContent = "left: " + this.scrollTable.newPositionContent + "px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)", this.scrollTable.styleFixedCol = "left: " + -1 * this.scrollTable.newPositionContent + "px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)"
                    },
                    checkWidthContent: function() {
                        this.scrollTable.widthFixedCol = document.querySelectorAll(".table-wrap .fixed-col")[0].scrollWidth, window.innerWidth <= 767 && (this.scrollTable.widthFixedCol = 0);
                        var e = document.querySelectorAll(".table-wrap .row")[0],
                            t = 0;
                        e.querySelectorAll(".value-col").forEach((function(e) {
                            t += e.offsetWidth
                        })), this.scrollTable.widthContent = t + this.scrollTable.widthFixedCol, this.scrollTable.widthContent > window.innerWidth ? (this.scrollTable.activeSlideEffect = !0, this.scrollTable.widthBorderValue = "width: " + (this.scrollTable.widthContent + this.scrollTable.widthSlide) + "px;") : this.scrollTable.widthContent + 40 < window.innerWidth && (this.scrollTable.activeSlideEffect = !1, this.scrollTable.widthBorderValue = "")
                    },
                    resizeWindow: function() {
                        this.scrollTable.styleContent = "left: 0px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)", this.scrollTable.styleFixedCol = "left: 0px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)", this.checkWidthContent()
                    },
                    showDifferencesParam: function() {
                        var e = this;
                        for (var t in this.arResult)
                            for (var i in this.ColTable[t] = {}, this.tableProperty) {
                                var s = this.tableProperty[i];
                                if ("undefined" !== typeof this.arResult[t].arProperty[s])
                                    for (var r = 1; r < this.arResult.length; r++)
                                        if (this.arResult[0].arProperty[s].VALUE !== this.arResult[r].arProperty[s].VALUE) {
                                            this.ColTable[t][s] = this.arResult[t].arProperty[s];
                                            break
                                        }
                            }
                        this.scrollTable.activeDiffElement = !0, this.rowTable = this.ColTable[0], window.setTimeout((function() {
                            e.$emit("loadGetList"), e.$store.dispatch("receiveCheckPosition")
                        }), 200)
                    },
                    showAllParam: function() {
                        var e = this;
                        for (var t in this.arResult)
                            for (var i in this.ColTable[t] = {}, this.tableProperty) {
                                var s = this.tableProperty[i];
                                "undefined" !== typeof this.arResult[t].arProperty[s] && (this.ColTable[t][s] = this.arResult[t].arProperty[s])
                            }
                        this.scrollTable.activeDiffElement = !1, this.rowTable = this.ColTable[0], window.setTimeout((function() {
                            e.$emit("loadGetList"), e.$store.dispatch("receiveCheckPosition")
                        }), 200)
                    },
                    openCallBackForm: function(e, t) {
                        var i = "ALL",
                            s = "s_sort",
                            r = "asc",
                            a = {
                                ACTIVE: "Y"
                            };
                        this.$store.dispatch("receiveParamForm", {
                            id: e,
                            getOnlyFields: i,
                            sort: s,
                            order: r,
                            arFilter: a,
                            title: t
                        })
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("resize", this.resizeWindow);
                    var t = this.arFilter.IBLOCK_ID + "_table_" + this.idItem;
                    this.bitrixStore[t] ? (this.arResult = this.bitrixStore[t].ITEMS, this.showAllParam(), window.setTimeout((function() {
                        return e.checkWidthContent()
                    }), 200)) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(i) {
                        e.arResult = i.ITEMS, e.showAllParam(), window.setTimeout((function() {
                            return e.checkWidthContent()
                        }), 200), e.$store.dispatch("receiveCacheData", {
                            id: t,
                            cacheData: i
                        })
                    }))
                },
                mounted: function() {},
                destroyed: function() {
                    window.removeEventListener("resize", this.resizeWindow)
                }
            },
            Qr = Zr,
            ea = Object(A["a"])(Qr, qr, Jr, !1, null, "7b433e41", null),
            ta = ea.exports,
            ia = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "configurator-price"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.titleConfigurator.visible
                    }],
                    attrs: {
                        showScroll: "titleConfigurator"
                    }
                }, [e._v(" Конфигуратор дома ")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "col-xl-11 input-col order-1"
                }, [i("div", {
                    staticClass: "input-calculator col-md-auto col-11",
                    class: [{
                        moveTop: e.elementVisibleScroll.inputCalculator.visible
                    }],
                    attrs: {
                        showScroll: "inputCalculator"
                    }
                }, [i("div", {
                    staticClass: "input"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.areaValue,
                        expression: "areaValue"
                    }],
                    domProps: {
                        value: e.areaValue
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.areaValue = t.target.value)
                        }
                    }
                }), e._v(" "), e._m(0)]), i("span", [e._v("площадь дома*")])]), i("div", {
                    staticClass: "input-calculator col-md-auto col-12",
                    class: [{
                        moveTop: e.elementVisibleScroll.inputCalculator.visible
                    }]
                }, [i("div", {
                    staticClass: "input"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.floorValue,
                        expression: "floorValue"
                    }],
                    domProps: {
                        value: e.floorValue
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.floorValue = t.target.value)
                        }
                    }
                })]), i("span", [e._v("количество этажей*")])])]), i("div", {
                    staticClass: "col-xl-auto offset-xl-1 result-price order-xl-2 order-md-3 order-2"
                }, [i("p", {
                    class: [{
                        moveTop: e.elementVisibleScroll.resultPrice.visible
                    }],
                    attrs: {
                        showScroll: "resultPrice"
                    }
                }, [e._v(" " + e._s(e.resultPrice.toLocaleString()) + " ₽* ")])]), i("div", {
                    staticClass: "text-result-price col-xl-auto offset-xl-12 order-xl-3 order-4"
                }, [i("p", {
                    class: [{
                        moveTop: e.elementVisibleScroll.textResultPrice.visible
                    }],
                    attrs: {
                        showScroll: "textResultPrice"
                    }
                }, [e._v(" *рассчитанная стоимость является предварительной. для уточнения окончательной стоимости обратитесь к нашим менеджерам ")])]), i("div", {
                    staticClass: "material-wrap col-xl-11 col-md-19 order-xl-4 order-md-2 order-3",
                    class: [{
                        moveTop: e.elementVisibleScroll["materialBlock"].visible
                    }],
                    attrs: {
                        showScroll: "materialBlock"
                    }
                }, e._l(this.arMaterial, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "material-block",
                        class: [{
                            overlap: "" !== t.styleList
                        }],
                        style: t.styleWrapMaterial
                    }, [i("div", {
                        staticClass: "material-list",
                        class: [{
                            "open-list": "" !== t.styleWrapMaterial
                        }, {
                            "toggle-list": "" !== t.styleList
                        }]
                    }, [null !== t.imgSelectedMaterial && "" !== t.imgSelectedMaterial ? i("div", {
                        staticClass: "img-material"
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.imgSelectedMaterial
                        }
                    })]) : e._e(), i("div", {
                        staticClass: "wrap-material",
                        class: [{
                            "no-img": null === t.imgSelectedMaterial || "" === t.imgSelectedMaterial
                        }]
                    }, [i("div", {
                        staticClass: "name-material"
                    }, [e._v(e._s(t.nameSelectedMaterial))]), i("div", {
                        staticClass: "list-overflow-wrap",
                        style: t.styleList
                    }, [i("div", {
                        staticClass: "list"
                    }, e._l(t.ITEMS, (function(s, r) {
                        return i("p", {
                            key: r,
                            on: {
                                click: function(i) {
                                    return e.changeMaterial(t.CODE, s)
                                }
                            }
                        }, [e._v(" " + e._s(s.NAME) + " ")])
                    })), 0)])]), i("div", {
                        staticClass: "plus-icon",
                        on: {
                            click: function(i) {
                                return e.openListMaterial(t.CODE)
                            }
                        }
                    })])])
                })), 0), i("div", {
                    staticClass: "col-xl-auto offset-xl-1 btn-col order-5"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.btnConsul2.visible
                    }],
                    attrs: {
                        text: "консультация",
                        link: "javascript:void(0);",
                        typeBtn: "base-btn revers",
                        showScroll: "btnConsul2"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.openCallBackForm(5, "консультация")
                        }
                    }
                })], 1)])], 1)
            },
            sa = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [e._v("м"), i("sup", [e._v("2")])])
            }],
            ra = {
                name: "HomeConfigurator",
                components: {
                    BaseButton: ee,
                    Separator: z
                },
                props: {
                    parentResult: [Object, Array],
                    elementVisibleScroll: Object
                },
                data: function() {
                    return {
                        arResult: [],
                        showAfterIntro: !0,
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 15,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {},
                        arMaterial: {},
                        resultPrice: 0,
                        areaValue: 200,
                        floorValue: 2
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                watch: {
                    areaValue: function() {
                        this.calculationFormula()
                    },
                    floorValue: function() {
                        this.calculationFormula()
                    }
                },
                methods: {
                    openListMaterial: function(e) {
                        var t = event.target.offsetParent;
                        if ("" === this.arMaterial[e].styleList) {
                            this.closeAllListMaterial(e);
                            var i = t.querySelectorAll(".list")[0];
                            this.arMaterial[e].styleList = "width:" + i.offsetWidth + "px; height: " + (i.offsetHeight + 25) + "px; opacity: 1", this.arMaterial[e].styleWrapMaterial = "width:" + (t.offsetWidth + 10) + "px;", this.arMaterial[e].nameSelectedMaterial = this.arMaterial[e].NAME + ":", this.arMaterial[e].tmpTextWidth = t.querySelectorAll(".name-material")[0].offsetWidth, this.arMaterial[e].tmpWrapWidth = t.offsetWidth + 10
                        } else {
                            var s = t.querySelectorAll(".name-material")[0].offsetWidth - this.arMaterial[e].tmpTextWidth - 4;
                            this.arMaterial[e].styleWrapMaterial = "width:" + (this.arMaterial[e].tmpWrapWidth + s) + "px;", this.closeListMaterial(e)
                        }
                    },
                    closeAllListMaterial: function(e) {
                        for (var t in this.arMaterial) e !== t && this.closeListMaterial(t)
                    },
                    closeListMaterial: function(e) {
                        var t = this;
                        this.arMaterial[e].styleList = "", this.arMaterial[e].nameSelectedMaterial = this.arMaterial[e].nameSelectedMaterial.replace(":", ""), setTimeout((function() {
                            return t.arMaterial[e].styleWrapMaterial = ""
                        }), 400)
                    },
                    changeMaterial: function(e, t) {
                        var i = this;
                        this.arMaterial[e].nameSelectedMaterial = t.NAME, this.arMaterial[e].imgSelectedMaterial = t.PICTURE, this.arMaterial[e].priceSelectedMaterial = t.PRICE;
                        var s = event.target.offsetWidth - this.arMaterial[e].tmpTextWidth;
                        this.arMaterial[e].styleWrapMaterial = "width:" + (this.arMaterial[e].tmpWrapWidth + s) + "px;", this.closeListMaterial(e), this.calculationFormula(), setTimeout((function() {
                            i.$emit("created")
                        }), 200)
                    },
                    openCallBackForm: function(e, t) {
                        var i = "ALL",
                            s = "s_sort",
                            r = "asc",
                            a = {
                                ACTIVE: "Y"
                            };
                        this.$store.dispatch("receiveParamForm", {
                            id: e,
                            getOnlyFields: i,
                            sort: s,
                            order: r,
                            arFilter: a,
                            title: t
                        })
                    },
                    created: function(e) {
                        var t = this;
                        for (var i in this.arResult = e.ITEMS, this.arResult) {
                            var s = this.arResult[i].arFields,
                                r = this.arResult[i].arProperty;
                            "undefined" === typeof this.arMaterial[s.SECTION_INFO.CODE] ? (this.arMaterial[s.SECTION_INFO.CODE] = s.SECTION_INFO, this.arMaterial[s.SECTION_INFO.CODE]["ITEMS"] = [{
                                NAME: s.NAME,
                                CODE: s.CODE,
                                PICTURE: s.PREVIEW_PICTURE_INFO ? s.PREVIEW_PICTURE_INFO.SRC : "",
                                PRICE: r.PRICE_MATERIAL.VALUE
                            }], this.$set(this.arMaterial[s.SECTION_INFO.CODE], "imgSelectedMaterial", s.PREVIEW_PICTURE_INFO ? s.PREVIEW_PICTURE_INFO.SRC : ""), this.$set(this.arMaterial[s.SECTION_INFO.CODE], "nameSelectedMaterial", s.SECTION_INFO.NAME), this.$set(this.arMaterial[s.SECTION_INFO.CODE], "priceSelectedMaterial", "0"), this.$set(this.arMaterial[s.SECTION_INFO.CODE], "styleList", ""), this.$set(this.arMaterial[s.SECTION_INFO.CODE], "styleWrapMaterial", "")) : this.arMaterial[s.SECTION_INFO.CODE]["ITEMS"].push({
                                NAME: s.NAME,
                                CODE: s.CODE,
                                PICTURE: s.PREVIEW_PICTURE_INFO ? s.PREVIEW_PICTURE_INFO.SRC : "",
                                PRICE: r.PRICE_MATERIAL.VALUE
                            })
                        }
                        this.calculationFormula(), setTimeout((function() {
                            t.$emit("created")
                        }), 200)
                    },
                    calculationFormula: function() {
                        this.resultPrice = 0, this.resultPrice += this.areaValue * (Number(this.arMaterial["wall_material"].priceSelectedMaterial.replace(" ", "")) / 2), this.floorValue > 1 && (this.resultPrice += this.areaValue * (.3 * this.floorValue) * (Number(this.arMaterial["wall_material"].priceSelectedMaterial.replace(" ", "")) / 2)), this.resultPrice += this.areaValue * Number(this.arMaterial["foundation"].priceSelectedMaterial.replace(" ", "")), this.resultPrice += this.areaValue * this.floorValue * Number(this.arMaterial["facade"].priceSelectedMaterial.replace(" ", "")), this.resultPrice += this.areaValue * Number(this.arMaterial["roof"].priceSelectedMaterial.replace(" ", ""))
                    }
                },
                created: function() {
                    var e = this;
                    this.bitrixStore[this.arFilter.IBLOCK_ID] ? this.created(this.bitrixStore[this.arFilter.IBLOCK_ID]) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.created(t), e.$store.dispatch("receiveCacheData", {
                            id: e.arFilter.IBLOCK_ID,
                            cacheData: t
                        })
                    }))
                }
            },
            aa = ra,
            oa = Object(A["a"])(aa, ia, sa, !1, null, "9755fa7e", null),
            la = oa.exports,
            na = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "row snake-diagram"
                }, [e.snakePartInfo.length > 0 ? i("icon-base", {
                    attrs: {
                        width: e.parametersSvgMask.width,
                        height: e.parametersSvgMask.height
                    }
                }, e._l(e.snakePartInfo, (function(t, s) {
                    return i("g", {
                        key: s
                    }, [i("rect", {
                        staticClass: "separator-snake",
                        style: t.styleSeparator,
                        attrs: {
                            x: t.separatorPos.left,
                            y: t.separatorPos.top - 1,
                            height: "5",
                            width: t.width,
                            fill: "#FFF"
                        }
                    }), !1 !== t.rightBorder ? i("rect", {
                        staticClass: "border-snake",
                        style: t.styleBorder,
                        attrs: {
                            x: t.rightBorder,
                            y: t.positionBorder,
                            height: t.heightBorder,
                            width: "5",
                            fill: "#FFF"
                        }
                    }) : e._e(), !1 !== t.leftBorder ? i("rect", {
                        staticClass: "border-snake",
                        style: t.styleBorder,
                        attrs: {
                            x: t.leftBorder,
                            y: t.positionBorder,
                            height: t.heightBorder,
                            width: "5.5",
                            fill: "#FFF"
                        }
                    }) : e._e()])
                })), 0) : e._e(), e._l(e.listValue, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "part-snake",
                        class: [e.snakePart[s], "part-snake-" + s],
                        attrs: {
                            showScroll: "partSnake" + s
                        }
                    }, [s < 9 ? i("div", [i("div", {
                        staticClass: "number-part",
                        class: [{
                            "border-show": e.elementVisibleScroll["partSnake" + s] && e.elementVisibleScroll["partSnake" + s].visible
                        }]
                    }, [i("span", {
                        class: [{
                            moveTop: e.elementVisibleScroll["numberPart" + s] && e.elementVisibleScroll["numberPart" + s].visible
                        }],
                        attrs: {
                            showScroll: "numberPart" + s
                        }
                    }, [e._v(" " + e._s([s > 10 ? "" : "0"] + (s + 1)) + " ")])]), i("separator", {
                        attrs: {
                            show: !0
                        }
                    }), i("div", {
                        staticClass: "info-block",
                        class: [{
                            "border-show": e.elementVisibleScroll["partSnake" + s] && e.elementVisibleScroll["partSnake" + s].visible
                        }]
                    }, [i("div", {
                        class: [{
                            moveTop: e.elementVisibleScroll["blockPart" + s] && e.elementVisibleScroll["blockPart" + s].visible
                        }],
                        attrs: {
                            showScroll: "blockPart" + s
                        },
                        domProps: {
                            innerHTML: e._s(t.TEXT)
                        }
                    })])], 1) : e._e()])
                }))], 2)
            },
            ca = [],
            ha = {
                name: "SnakeDiagram",
                components: {
                    IconBase: xe,
                    Separator: z
                },
                props: {
                    listValue: [Object, Array],
                    elementVisibleScroll: [Object, Array]
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                data: function() {
                    return {
                        snakePart: ["col-xl-13 offset-xl-7 tail-body-right", "col-xl-18 offset-xl-2 part-right tail-body-left tail-head-right", "col-xl-10 offset-xl-2 tail-head-left part-left-inside ", "col-xl-8 tail-body-right part-xl-center", "col-xl-13 offset-xl-7 part-right tail-body-left tail-head-right", "col-xl-8 offset-xl-7 part-left-inside tail-head-left part-xl-center", "col-xl-5 part-right tail-body-right", "col-xl-18 offset-xl-2 part-left tail-head-right"],
                        snakePartInfo: [],
                        parametersSvgMask: {
                            width: 0,
                            height: 0
                        },
                        animatedPart: [],
                        touchStart: 0,
                        scrollPos: 0,
                        moveTouchTop: !1,
                        scrollMoveTop: !1,
                        visibleSnake: !1
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e && this.listValue && (this.snakePartSearch(), this.animateSnake(1))
                    },
                    animatedPart: function() {
                        this.scrollMoveTop ? this.animateSnake(-1) : this.animateSnake(1)
                    }
                },
                methods: {
                    snakePartSearch: function() {
                        var e = document.querySelectorAll(".part-snake");
                        this.parametersSvgMask = {
                            width: document.querySelectorAll(".snake-diagram")[0].getBoundingClientRect().width,
                            height: document.querySelectorAll(".snake-diagram")[0].getBoundingClientRect().height
                        };
                        for (var t = 0; t < e.length; t++) this.$set(this.snakePartInfo, t, {
                            element: e[t],
                            width: e[t].clientWidth + 1,
                            separatorPos: {
                                left: e[t].querySelectorAll(".separator")[0].offsetLeft - 1,
                                top: e[t].querySelectorAll(".separator")[0].offsetTop
                            },
                            rightBorder: (-1 !== e[t].classList.value.indexOf("tail-body-right") && window.innerWidth > 1199 || window.innerWidth < 1200 && (t + 1) % 2 !== 0) && e[t].querySelectorAll(".separator")[0].offsetLeft + e[t].getBoundingClientRect().width - 4,
                            leftBorder: (-1 !== e[t].classList.value.indexOf("tail-body-left") && window.innerWidth > 1199 || window.innerWidth < 1200 && (t + 1) % 2 === 0) && e[t].querySelectorAll(".separator")[0].offsetLeft - 2,
                            heightBorder: e[t].getBoundingClientRect().height - 3,
                            positionBorder: e[t].querySelectorAll(".separator")[0].offsetTop + 3,
                            animatedPart: !1,
                            startAnimatePart: !1
                        }), this.$set(this.animatedPart, t, !1)
                    },
                    handleScroll: function(e) {
                        e.changedTouches && (this.touchStart - e.changedTouches[0].pageY > 0 ? this.moveTouchTop = !1 : this.moveTouchTop = !0);
                        var t = window.pageYOffset;
                        t < this.scrollPos || this.moveTouchTop ? (this.animateSnake(-1), this.scrollMoveTop = !0) : (this.animateSnake(1), this.scrollMoveTop = !1), this.scrollPos = t, this.visibleSnake || this.snakePartSearch()
                    },
                    animateSnake: function(e) {
                        for (var t = 0; t < this.snakePartInfo.length; t++) {
                            var i = t - 1 * e,
                                s = "";
                            s = e > 0 ? "blockPart" : "numberPart", this.elementVisibleScroll[s + t].visible ? (this.visibleSnake = !0, this.snakePartInfo[t].startAnimatePart || (this.snakePartInfo[i] ? this.animatedPart[i] && !this.animatedPart[t] ? e > 0 ? this.animatePartDown(t) : this.animatePartUp(t) : !this.elementVisibleScroll[s + i] || this.elementVisibleScroll[s + i].visible || this.animatedPart[t] || (e > 0 ? this.animatePartDown(t) : this.animatePartUp(t)) : this.animatedPart[t] || (e > 0 ? this.animatePartDown(t) : this.animatePartUp(t)))) : (this.elementVisibleScroll[s + 0] && !this.elementVisibleScroll[s + 0].visible && this.elementVisibleScroll[s + 0].elementPos > window.pageYOffset || this.elementVisibleScroll[s + (this.snakePartInfo.length - 1)].elementPos < window.pageYOffset) && (this.$set(this.snakePartInfo[t], "styleSeparator", "transition: transform 0.1s linear, width 0.1s linear; transform: translateX(0px);"), this.$set(this.snakePartInfo[t], "styleBorder", "transition: transform 0.1s linear; transform: translateY(0px);"), this.animatedPart[t] = !1, this.$set(this.snakePartInfo[t], "startAnimatePart", !1), this.visibleSnake = !1)
                        }
                    },
                    animatePartDown: function(e) {
                        var t = this,
                            i = this.snakePartInfo[e].element.getBoundingClientRect().top + document.body.clientTop,
                            s = window.innerHeight,
                            r = "linear",
                            a = i / s;
                        a < .2 ? a = .2 : a > .5 && (a = .5);
                        var o = 1e3 * a,
                            l = "transition: transform " + a + "s " + r + ", width " + a + "s " + r + "; transform: translateX(" + this.snakePartInfo[e].width + "px); width: 0; ",
                            n = "transition: width " + a + "s " + r + "; width: 0; ";
                        this.snakePartInfo[e].rightBorder ? (this.$set(this.snakePartInfo[e], "styleSeparator", l), this.$set(this.snakePartInfo[e], "startAnimatePart", !0), setTimeout((function() {
                            t.$set(t.animatedPart, e, !0)
                        }), 2 * o)) : !1 !== this.snakePartInfo[e].leftBorder ? (this.$set(this.snakePartInfo[e], "startAnimatePart", !0), this.$set(this.snakePartInfo[e], "styleSeparator", n), setTimeout((function() {
                            t.$set(t.animatedPart, e, !0)
                        }), 2 * o)) : this.snakePartInfo[e - 1] && this.snakePartInfo[e - 1].leftBorder ? (this.$set(this.snakePartInfo[e], "startAnimatePart", !0), this.$set(this.snakePartInfo[e], "styleSeparator", l), setTimeout((function() {
                            t.$set(t.animatedPart, e, !0)
                        }), o)) : this.snakePartInfo[e - 1] && this.snakePartInfo[e - 1].rightBorder && (this.$set(this.snakePartInfo[e], "startAnimatePart", !0), this.$set(this.snakePartInfo[e], "styleSeparator", n), setTimeout((function() {
                            t.$set(t.animatedPart, e, !0)
                        }), o)), this.$set(this.snakePartInfo[e], "styleBorder", "transition: transform " + a + "s " + a + "s " + r + ", height " + a + "s " + a + "s " + r + "; transform: translateY(" + (this.snakePartInfo[e].heightBorder + 3) + "px); height: 0;")
                    },
                    animatePartUp: function(e) {
                        var t = this,
                            i = this.snakePartInfo[e].element.getBoundingClientRect().top + this.snakePartInfo[e].element.getBoundingClientRect().height + document.body.clientTop,
                            s = window.innerHeight,
                            r = "linear",
                            a = 1 - i / s;
                        a < .2 ? a = .2 : a > .5 && (a = .5);
                        var o = 1e3 * a,
                            l = "transition: transform " + a + "s " + a + "s " + r + "; transform: translateX(" + this.snakePartInfo[e].width + "px);",
                            n = "transition: transform " + a + "s " + r + ", width " + a + "s " + r + "; transform: translateX(" + this.snakePartInfo[e].width + "px); width: 0;",
                            c = "transition: width " + a + "s " + a + "s " + r + "; width: 0; ",
                            h = "transition: transform " + a + "s " + r + ", width " + a + "s " + r + "; transform: translateX(" + -this.snakePartInfo[e].width + "px); width: 0; ";
                        this.snakePartInfo[e].rightBorder ? (this.$set(this.snakePartInfo[e], "styleSeparator", c), this.$set(this.snakePartInfo[e], "startAnimatePart", !0), setTimeout((function() {
                            t.$set(t.animatedPart, e, !0)
                        }), 2 * o)) : !1 !== this.snakePartInfo[e].leftBorder ? (this.$set(this.snakePartInfo[e], "styleSeparator", l), this.$set(this.snakePartInfo[e], "startAnimatePart", !0), setTimeout((function() {
                            t.$set(t.animatedPart, e, !0)
                        }), 2 * o)) : this.snakePartInfo[e - 1] && this.snakePartInfo[e - 1].leftBorder ? (this.$set(this.snakePartInfo[e], "styleSeparator", h), this.$set(this.snakePartInfo[e], "startAnimatePart", !0), setTimeout((function() {
                            t.$set(t.animatedPart, e, !0)
                        }), o)) : this.snakePartInfo[e - 1] && this.snakePartInfo[e - 1].rightBorder && (this.$set(this.snakePartInfo[e], "styleSeparator", n), this.$set(this.snakePartInfo[e], "startAnimatePart", !0), setTimeout((function() {
                            t.$set(t.animatedPart, e, !0)
                        }), o)), this.$set(this.snakePartInfo[e], "styleBorder", "transition: transform " + a + "s " + r + "; transform: translateY(" + (-this.snakePartInfo[e].heightBorder - 3) + "px);")
                    },
                    handleResize: function() {
                        this.visibleSnake || this.snakePartSearch()
                    },
                    handleTouchStart: function(e) {
                        this.touchStart = e.changedTouches[0].pageY
                    }
                },
                created: function() {
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("touchmove", this.handleScroll), window.addEventListener("touchstart", this.handleTouchStart), window.addEventListener("resize", this.handleResize)
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("touchmove", this.handleScroll), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("resize", this.handleResize)
                }
            },
            da = ha,
            ua = Object(A["a"])(da, na, ca, !1, null, "cacfd638", null),
            ma = ua.exports,
            pa = {
                name: "PricePage",
                components: {
                    SimilarProject: Ys,
                    SnakeDiagram: ma,
                    HomeConfigurator: la,
                    Separator: z,
                    SwiperTable: ta
                },
                mixins: [P, lt],
                data: function() {
                    return {
                        changeAxios: !1,
                        arResult: {
                            arProperty: {
                                MATERIAL_WALL: [],
                                MATERIAL_ID_SECTION: [],
                                TITLE_PAYMENT_METHODS: [],
                                LIST_PAYMENT_METHODS: [],
                                WORKING_SCHEME: [],
                                PROJECT_ID: []
                            }
                        },
                        elementVisibleScroll: {
                            title: {},
                            titleFilter: {},
                            wrapFilter: {},
                            filerList: {},
                            linkProjectsWork1: {},
                            mobileTitleFilter: {},
                            btnConsul: {},
                            btnConsul2: {},
                            similarTitle: {},
                            projectsBtn1: {},
                            navBtn: {},
                            textTable: {},
                            priceTextMaterial: {},
                            rowTable: {},
                            priceMaterial: {},
                            titlePayment: {},
                            titleConfigurator: {},
                            inputCalculator: {},
                            resultPrice: {},
                            textResultPrice: {},
                            materialBlock: {},
                            titleScheme: {}
                        },
                        arElementsShow: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 14,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {},
                        snakePart: ["col-13 offset-7 tail-body-right", "col-18 offset-2 part-right tail-body-left tail-head-right", "col-10 offset-2 tail-head-left part-left-inside", "col-8 tail-body-right", "col-13 offset-7 part-right tail-body-left tail-head-right", "col-8 offset-7 part-left-inside tail-head-left", "col-5 part-right tail-body-right", "col-18 offset-2 part-left tail-head-right"],
                        widthOrder: ["col-xxl-7 ", "col-xxl-5 col-md-12", "col-md-11"],
                        tableProperty: ["ANALYSIS_SECTION_TABLE", "FOUNDATION_TABLE", "COMMUNICATION_TABLE", "PARTITIONS_TABLE", "JUMPERS_TABLE", "OVERLAP_TABLE", "STAIRS_TABLE", "ROOF_TABLE"],
                        priceProperty: "PRICE_MATERIAL"
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".price-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.$store.dispatch("receiveCheckPosition")
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        var e = this;
                        window.setTimeout((function() {
                            e.startAnimation()
                        }), 100)
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        this.changeAxios = !0, e && this.startAnimation()
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorLightGray",
                        showSeparator: !0
                    }), this.bitrixStore[this.arFilter.IBLOCK_ID] ? (this.arResult = this.bitrixStore[this.arFilter.IBLOCK_ID].ITEMS[0], ai.methods.set(this.arResult, "detail")) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS[0], ai.methods.set(e.arResult, "detail"), e.$store.dispatch("receiveCacheData", {
                            id: e.arFilter.IBLOCK_ID,
                            cacheData: t
                        })
                    }))
                },
                mounted: function() {
                    this.changeAxios || this.startAnimation()
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            va = pa,
            Sa = Object(A["a"])(va, Yr, Xr, !1, null, "b7496368", null),
            fa = Sa.exports,
            Ea = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "service-detailed-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios && !e.changeCode
                    }, {
                        "change-screen": e.changeCode
                    }]
                }, [i("div", {
                    staticClass: "preview-block row"
                }, [i("div", {
                    staticClass: "col-xxl-3 col-md-23 col-11 order-xxl-1 order-2 left-side"
                }, e._l(e.arrayInHalf(e.arResult.arProperty.ADD_PICTURE.FILE_INFO, !0), (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "added-img-service ",
                        class: [{
                            "switch-picture": e.flagSwitchPicture && e.activeAddPicture === s
                        }]
                    }, [i("div", {
                        staticClass: "wrap-added-img"
                    }, [i("div", {
                        staticClass: "prev-picture"
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + e.fakeAddPicture
                        }
                    })]), i("div", {
                        staticClass: "next-picture",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["leftSideImg" + s] && e.elementVisibleScroll["leftSideImg" + s].visible
                        }],
                        attrs: {
                            showScroll: "leftSideImg" + s
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.SRC,
                            width: t.WIDTH,
                            height: t.HEIGHT
                        },
                        on: {
                            click: function(t) {
                                return e.switchImg(s)
                            }
                        }
                    })])])])
                })), 0), i("div", {
                    staticClass: "col-xxl-4 col-md-23 col-12 order-xxl-2 order-3 right-side"
                }, e._l(e.arrayInHalf(e.arResult.arProperty.ADD_PICTURE.FILE_INFO, !1), (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "added-img-service",
                        class: [{
                            "switch-picture": e.flagSwitchPicture && e.activeAddPicture === s + 3
                        }]
                    }, [i("div", {
                        staticClass: "wrap-added-img"
                    }, [i("div", {
                        staticClass: "prev-picture"
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + e.fakeAddPicture
                        }
                    })]), i("div", {
                        staticClass: "next-picture",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["rightSideImg" + s] && e.elementVisibleScroll["rightSideImg" + s].visible
                        }],
                        attrs: {
                            showScroll: "rightSideImg" + s
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.SRC,
                            width: t.WIDTH,
                            height: t.HEIGHT
                        },
                        on: {
                            click: function(t) {
                                return e.switchImg(s + 3)
                            }
                        }
                    })])])])
                })), 0), i("div", {
                    staticClass: "col-xxl-16 order-xxl-3 order-1 preview-info"
                }, [i("div", {
                    staticClass: "preview-picture",
                    class: [{
                        "switch-picture": e.flagSwitchPicture
                    }],
                    on: {
                        click: function(t) {
                            return e.openLightBox(0, "arPicture")
                        }
                    }
                }, [i("div", {
                    staticClass: "prev-picture"
                }, [i("img", {
                    attrs: {
                        src: e.$hostname + e.fakePreview
                    }
                })]), i("div", {
                    staticClass: "next-picture",
                    class: {
                        "show-img-project": e.elementVisibleScroll.previewPicture.visible
                    },
                    attrs: {
                        showScroll: "previewPicture"
                    }
                }, [i("img", {
                    attrs: {
                        src: e.$hostname + e.arResult.arFields.PREVIEW_PICTURE_INFO.SRC,
                        width: e.arResult.arFields.PREVIEW_PICTURE_INFO.WIDTH,
                        height: e.arResult.arFields.PREVIEW_PICTURE_INFO.HEIGHT
                    }
                })])]), i("div", {
                    staticClass: "preview-text"
                }, [i("div", {
                    staticClass: "title-wrap"
                }, [i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(e._s(e.arResult.arFields.NAME))])]), i("div", {
                    staticClass: "text-preview",
                    class: [{
                        moveTop: e.elementVisibleScroll.subtitle.visible
                    }],
                    attrs: {
                        showScroll: "subtitle"
                    },
                    domProps: {
                        innerHTML: e._s(e.arResult.arFields["~DETAIL_TEXT"])
                    }
                }), i("div", {
                    staticClass: "btn-service fixed-mobile-btn"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.consultationBtn1.visible || e.fixedBtn
                    }],
                    attrs: {
                        text: "консультация",
                        link: "javascript:void(0);",
                        typeBtn: "base-btn",
                        showScroll: "consultationBtn1"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.openCallBackForm(8, "консультация")
                        }
                    }
                })], 1)])])]), e.arResult.arProperty.ID_PROJECT_DESIGN.VALUE ? i("div", {
                    staticClass: "composition-project"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.compositionTitle.visible
                    }],
                    attrs: {
                        showScroll: "compositionTitle"
                    }
                }, [e._v(e._s(e.arResult.arProperty.PROJECT_DESIGN_TITLE.VALUE))]), i("div", {
                    staticClass: "row"
                }, [i("separator", {
                    staticClass: "col-18 offset-5",
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "subtitle-section col-xxl-5 col-md-auto order-xxl-1 order-2"
                }, [i("p", {
                    class: [{
                        moveTop: e.elementVisibleScroll.compositionTitle.visible
                    }],
                    attrs: {
                        showScroll: "compositionSubtitle"
                    }
                }, [e._v(e._s(e.arResult.arProperty.PROJECT_DESIGN_SUBTITLE.VALUE))])]), i("div", {
                    staticClass: "title-composition col-xxl-7 col-md-auto offset-md-auto  order-xxl-2 order-1"
                }, [i("h3", {
                    class: [{
                        moveTop: e.elementVisibleScroll.compositionTitleH3.visible
                    }],
                    attrs: {
                        showScroll: "compositionTitleH3"
                    }
                }, [e._v("Варианты проектов")])]), i("composition-service-project", {
                    staticClass: " col-xxl-11 col-md-auto offset-md-auto  order-3",
                    attrs: {
                        "ar-parent": e.arResult.arProperty.ID_PROJECT_DESIGN.VALUE,
                        "element-visible-scroll": e.elementVisibleScroll
                    },
                    on: {
                        clickAccordion: function(t) {
                            return e.startAnimation()
                        }
                    }
                })], 1)], 1) : e._e(), e.arResult.arProperty.DESIGN_STAGES["~VALUE"] ? i("div", {
                    staticClass: "design-stages"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "row title-block"
                }, [i("div", {
                    staticClass: "col-xxl-7"
                }, [i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.titleScheme.visible
                    }],
                    attrs: {
                        showScroll: "titleScheme"
                    }
                }, [e._v(" этапы проектирования ")])]), i("div", {
                    staticClass: "col-auto offset-xxl-0 offset-xl-7 offset-md-11",
                    class: [{
                        moveTop: e.elementVisibleScroll.textScheme.visible
                    }],
                    attrs: {
                        showScroll: "textScheme"
                    }
                }, [i("p", [e._v("Поможем сделать пространство вашего дома удобным и реализовать ваши пожелания по оформлению.")])])]), i("snake-diagram", {
                    attrs: {
                        "list-value": e.arResult.arProperty.DESIGN_STAGES["~VALUE"],
                        "element-visible-scroll": e.elementVisibleScroll
                    }
                })], 1) : e._e(), e.arResult.arProperty.ID_GALLERY.VALUE ? i("div", {
                    staticClass: "portfolio-service"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.titlePortfolio.visible
                    }],
                    attrs: {
                        showScroll: "titlePortfolio"
                    }
                }, [e._v("Наши проекты")]), i("gallery-service-project", {
                    attrs: {
                        "ar-parent": e.arResult.arProperty.ID_GALLERY.VALUE,
                        "element-visible-scroll": e.elementVisibleScroll
                    },
                    on: {
                        click: function(t) {
                            e.includeHostName(t), e.openLightBox(0)
                        }
                    }
                })], 1) : e._e(), i("popup-cool-light-box", {
                    attrs: {
                        elems: e.arSrc
                    }
                })], 1)
            },
            Ca = [],
            ga = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "list-item-design"
                }, e._l(this.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "project-design-item accordion-item",
                        class: [{
                            active: e.activeAccordion === s
                        }]
                    }, [i("div", {
                        staticClass: "head-accordion"
                    }, [i("div", {
                        staticClass: "head-info"
                    }, [i("div", {
                        staticClass: "title-design",
                        class: [{
                            moveTop: e.elementVisibleScroll["titleDesign" + s] && e.elementVisibleScroll["titleDesign" + s].visible
                        }],
                        attrs: {
                            showScroll: "titleDesign" + s
                        },
                        domProps: {
                            innerHTML: e._s(t.arFields.NAME)
                        }
                    }), t.arProperty.DESIGN_PRICE.VALUE ? i("div", {
                        staticClass: "price-design"
                    }, [i("p", {
                        class: [{
                            moveTop: e.elementVisibleScroll["priceDesign" + s] && e.elementVisibleScroll["priceDesign" + s].visible
                        }],
                        attrs: {
                            showScroll: "priceDesign" + s
                        }
                    }, [i("span", [e._v("от")]), e._v(" " + e._s(t.arProperty.DESIGN_PRICE.VALUE) + " ₽/м"), i("sup", [e._v("2")])])]) : e._e(), t.arProperty.DESIGN_PERIOD.VALUE ? i("div", {
                        staticClass: "period-design"
                    }, [i("p", {
                        class: [{
                            moveTop: e.elementVisibleScroll["periodDesign" + s] && e.elementVisibleScroll["periodDesign" + s].visible
                        }],
                        attrs: {
                            showScroll: "periodDesign" + s
                        }
                    }, [i("span", [e._v("примерные сроки")]), e._v(" " + e._s(t.arProperty.DESIGN_PERIOD.VALUE) + " ")])]) : e._e()]), i("div", {
                        staticClass: "circle-plus",
                        on: {
                            click: function(t) {
                                return e.openAccordion(s)
                            }
                        }
                    })]), i("div", {
                        staticClass: "body-accordion",
                        style: s === e.activeAccordion ? e.styleHeightContent : ""
                    }, [i("div", {
                        staticClass: "hidden-content",
                        domProps: {
                            innerHTML: e._s(t.arFields["~DETAIL_TEXT"])
                        }
                    })])])
                })), 0)
            },
            ba = [],
            Ta = {
                name: "CompositionServiceProject",
                props: {
                    arParent: [Number, String],
                    elementVisibleScroll: [Array, Object]
                },
                data: function() {
                    return {
                        arResult: {},
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 16,
                            ACTIVE: "Y",
                            IBLOCK_SECTION_ID: this.arParent
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL", "DETAIL_TEXT"],
                        arNuvParam: {},
                        styleHeightContent: "",
                        activeAccordion: -1
                    }
                },
                watch: {
                    arParent: function(e) {
                        var t = this;
                        this.arFilter.IBLOCK_SECTION_ID = e, P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(e) {
                            t.arResult = e.ITEMS
                        }))
                    }
                },
                methods: {
                    openAccordion: function(e) {
                        var t = this;
                        if (e !== this.activeAccordion) {
                            this.activeAccordion = e;
                            var i = ci.methods.parent(event.target, "accordion-item").querySelectorAll(".hidden-content")[0].offsetHeight;
                            this.styleHeightContent = "height:" + i + "px"
                        } else this.activeAccordion = -1;
                        setTimeout((function() {
                            t.$emit("clickAccordion")
                        }), 610)
                    }
                },
                created: function() {
                    var e = this;
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS
                    }))
                }
            },
            Pa = Ta,
            wa = Object(A["a"])(Pa, ga, ba, !1, null, "dbabff5c", null),
            _a = wa.exports,
            Aa = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "row listing-gallery"
                }, e._l(e.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "item-gallery",
                        class: [e.getWidthOrder(s)],
                        on: {
                            click: function(i) {
                                return e.$emit("click", t.arProperty.PHOTOGALLERY.FILE_INFO)
                            }
                        }
                    }, [t ? i("base-button", {
                        class: [{
                            "show-link-arrow": e.elementVisibleScroll["toProject" + s] && e.elementVisibleScroll["toProject" + s].visible
                        }],
                        attrs: {
                            text: t.arFields.NAME,
                            link: "javascript:void(0);",
                            typeBtn: "link-arrow-right",
                            showScroll: "toProject" + s
                        }
                    }) : e._e(), t.arProperty.SUBTITLE ? i("span", {
                        staticClass: "subtitle",
                        class: [{
                            moveTop: e.elementVisibleScroll["subtitlePortfolio" + s] && e.elementVisibleScroll["subtitlePortfolio" + s].visible
                        }],
                        attrs: {
                            showScroll: "subtitlePortfolio" + s
                        }
                    }, [e._v(" " + e._s(t.arProperty.SUBTITLE.VALUE) + " ")]) : e._e(), i("div", {
                        staticClass: "text-gallery",
                        class: [{
                            moveTop: e.elementVisibleScroll["textPortfolio" + s] && e.elementVisibleScroll["textPortfolio" + s].visible
                        }],
                        attrs: {
                            showScroll: "textPortfolio" + s
                        },
                        domProps: {
                            innerHTML: e._s(t.arFields["PREVIEW_TEXT"])
                        }
                    }), i("div", {
                        staticClass: "preview-img",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["previewPictureGallery" + s] && e.elementVisibleScroll["previewPictureGallery" + s].visible
                        }],
                        attrs: {
                            showScroll: "previewPictureGallery" + s
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.arFields.PREVIEW_PICTURE_INFO.SRC,
                            width: t.arFields.PREVIEW_PICTURE_INFO.WIDTH,
                            height: t.arFields.PREVIEW_PICTURE_INFO.HEIGHT
                        }
                    })])], 1)
                })), 0)
            },
            Ia = [],
            Ra = {
                name: "GalleryServiceProject",
                components: {
                    BaseButton: ee
                },
                props: {
                    arParent: [Array, Object],
                    elementVisibleScroll: Object
                },
                data: function() {
                    return {
                        arResult: {},
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 17,
                            ACTIVE: "Y",
                            ID: this.arParent
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL", "DETAIL_TEXT", "PREVIEW_TEXT"],
                        arNuvParam: {},
                        widthOrder: ["col-xl-8", "col-xl-12 offset-xl-3", "col-xl-12", "col-xl-8 offset-xl-3"]
                    }
                },
                watch: {
                    arParent: function(e) {
                        var t = this;
                        this.arFilter.ID = e, P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(e) {
                            t.arResult = e.ITEMS
                        }))
                    }
                },
                methods: {
                    getWidthOrder: function(e) {
                        return ni.methods.order(e, this.widthOrder)
                    }
                },
                created: function() {
                    var e = this;
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS
                    }))
                }
            },
            La = Ra,
            Oa = Object(A["a"])(La, Aa, Ia, !1, null, "bd15f398", null),
            ya = Oa.exports,
            xa = {
                name: "ServiceDetailedPage",
                components: {
                    PopupCoolLightBox: Ps,
                    GalleryServiceProject: ya,
                    SnakeDiagram: ma,
                    CompositionServiceProject: _a,
                    BaseButton: ee,
                    Separator: z
                },
                data: function() {
                    return {
                        changeAxios: !1,
                        elementVisibleScroll: {
                            titleScheme: "",
                            title: "",
                            subtitle: "",
                            consultationBtn1: "",
                            previewPicture: "",
                            compositionTitle: "",
                            compositionSubtitle: "",
                            compositionTitleH3: "",
                            textScheme: "",
                            titlePortfolio: "",
                            subtitlePortfolio: "",
                            textPortfolio: "",
                            previewPictureGallery: ""
                        },
                        showAfterIntro: !0,
                        arElementsShow: [],
                        arSrc: [],
                        arPicture: [],
                        arResult: {
                            arProperty: {
                                ADD_PICTURE: [],
                                ID_PROJECT_DESIGN: [],
                                PROJECT_DESIGN_TITLE: "",
                                PROJECT_DESIGN_SUBTITLE: "",
                                DESIGN_STAGES: "",
                                ID_GALLERY: []
                            },
                            arFields: {
                                PREVIEW_PICTURE: [],
                                DETAIL_TEXT: "",
                                NAME: "",
                                PREVIEW_PICTURE_INFO: []
                            }
                        },
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 11,
                            ACTIVE: "Y",
                            CODE: this.$route.params.code
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL", "DETAIL_TEXT"],
                        arNuvParam: {},
                        fixedBtn: !1,
                        changeCode: !1,
                        fakePreview: "",
                        fakeAddPicture: "",
                        activeAddPicture: -1,
                        flagSwitchPicture: !1
                    }
                },
                watch: {
                    $route: function(e) {
                        var t = this;
                        this.changeCode = !0, this.arFilter.CODE = e.params.code, window.setTimeout((function() {
                            var i = t.arFilter.IBLOCK_ID + "_" + e.params.code;
                            t.bitrixStore[i] ? (t.arResult = t.bitrixStore[i].ITEMS[0], t.arPicture = [t.arResult.arFields.PREVIEW_PICTURE_INFO], t.arPicture = t.arPicture.concat(t.arResult.arProperty.ADD_PICTURE.FILE_INFO), ai.methods.set(t.arResult, "detail"), t.$store.dispatch("receiveCheckPosition")) : P.methods.GetList(t.arSort, t.arFilter, !1, t.arNuvParam, t.arSelect).then((function(e) {
                                t.arResult = e.ITEMS[0], t.arPicture = [e.ITEMS[0].arFields.PREVIEW_PICTURE_INFO], t.arPicture = t.arPicture.concat(e.ITEMS[0].arProperty.ADD_PICTURE.FILE_INFO), ai.methods.set(t.arResult, "detail"), t.$store.dispatch("receiveCheckPosition")
                            })), t.changeCode = !1
                        }), 1e3)
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        this.changeAxios = !0, e && this.startAnimation()
                    }
                },
                methods: {
                    switchImg: function(e) {
                        var t = this;
                        if (!this.flagSwitchPicture && window.innerWidth >= 1400) {
                            var i = this.arResult.arProperty.ADD_PICTURE;
                            this.activeAddPicture = e;
                            var s = i.FILE_INFO[e].SRC,
                                r = this.arResult.arFields.PREVIEW_PICTURE_INFO.SRC;
                            this.fakePreview = r, this.fakeAddPicture = s, this.arResult.arFields.PREVIEW_PICTURE_INFO.SRC = s, this.arResult.arProperty.ADD_PICTURE.FILE_INFO[e].SRC = r, this.flagSwitchPicture = !0, this.arPicture = [this.arResult.arFields.PREVIEW_PICTURE_INFO], this.arPicture = this.arPicture.concat(this.arResult.arProperty.ADD_PICTURE.FILE_INFO), setTimeout((function() {
                                t.flagSwitchPicture = !1
                            }), 1350)
                        } else this.openLightBox(e + 1, "arPicture")
                    },
                    openLightBox: function(e, t) {
                        "undefined" !== typeof t && this.includeHostName(this[t]), this.$store.dispatch("receiveArSrcImg", {
                            ind: e
                        })
                    },
                    includeHostName: function(e) {
                        for (var t in this.arSrc = [], e) this.arSrc[t] = {
                            src: this.$hostname + e[t].SRC,
                            title: ""
                        }
                    },
                    arrayInHalf: function(e, t) {
                        var i = [0],
                            s = 0;
                        for (var r in e)(t && r < 3 || !t && r >= 3 && r < 6) && (i[s] = e[r], s++);
                        return i
                    },
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), window.innerWidth <= 768 ? this.fixedBtn = !0 : this.fixedBtn = !1
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".service-detailed-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation()
                    },
                    openCallBackForm: function(e, t) {
                        var i = "ALL",
                            s = "s_sort",
                            r = "asc",
                            a = {
                                ACTIVE: "Y"
                            };
                        this.$store.dispatch("receiveParamForm", {
                            id: e,
                            getOnlyFields: i,
                            sort: s,
                            order: r,
                            arFilter: a,
                            title: t
                        })
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize);
                    var t = this.arFilter.IBLOCK_ID + "_" + this.$route.params.code;
                    this.bitrixStore[t] ? (this.arResult = this.bitrixStore[t].ITEMS[0], ai.methods.set(this.arResult, "detail"), this.arPicture = [this.arResult.arFields.PREVIEW_PICTURE_INFO], this.arPicture = this.arPicture.concat(this.arResult.arProperty.ADD_PICTURE.FILE_INFO), this.$store.dispatch("receiveCheckPosition")) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        "undefined" != typeof t.ITEMS ? (e.arResult = t.ITEMS[0], ai.methods.set(e.arResult, "detail"), e.arPicture = [e.arResult.arFields.PREVIEW_PICTURE_INFO], e.arPicture = e.arPicture.concat(t.ITEMS[0].arProperty.ADD_PICTURE.FILE_INFO), e.$store.dispatch("receiveCheckPosition")) : e.$router.push("/404")
                    }))
                },
                mounted: function() {
                    this.changeAxios || this.startAnimation(), this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorGreen",
                        showSeparator: !0
                    })
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize), this.$store.dispatch("receiveAppClass", {
                        appClass: "",
                        showSeparator: !0
                    })
                }
            },
            Va = xa,
            ka = Object(A["a"])(Va, Ea, Ca, !1, null, "2e0530a4", null),
            Fa = ka.exports,
            Da = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "contacts-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }],
                    attrs: {
                        itemscope: "",
                        itemtype: "http://schema.org/Organization"
                    }
                }, [e.arResult.arFields.NAME ? i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(" " + e._s(e.arResult.arFields.NAME) + " ")]) : e._e(), i("div", {
                    staticClass: "row"
                }, [i("separator", {
                    staticClass: "col-23",
                    attrs: {
                        show: !0
                    }
                })], 1), i("div", {
                    staticClass: "row contacts-block"
                }, [i("div", {
                    staticClass: "col-xl-6 col-md-11 bold-contact order-xl-1 order-md-1 order-1",
                    class: [{
                        moveTop: e.elementVisibleScroll.phone.visible
                    }],
                    attrs: {
                        showScroll: "phone"
                    }
                }, [e.arProperty.CONTACT_PHONE.VALUE ? i("a", {
                    staticClass: "hide-line",
                    attrs: {
                        href: "tel:" + e.arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, ""),
                        itemprop: "telephone"
                    }
                }, [e._v(" " + e._s(e.arProperty.CONTACT_PHONE.VALUE) + " ")]) : e._e()]), i("div", {
                    staticClass: "col-xl-10 col-md-12 bold-contact order-xl-2 order-md-2 order-2",
                    class: [{
                        moveTop: e.elementVisibleScroll.email.visible
                    }],
                    attrs: {
                        showScroll: "email"
                    }
                }, [e.arProperty.CONTACT_MAIL.VALUE ? i("a", {
                    staticClass: "hide-line",
                    attrs: {
                        href: "mail:" + e.arProperty.CONTACT_MAIL.VALUE,
                        itemprop: "email"
                    }
                }, [e._v(" " + e._s(e.arProperty.CONTACT_MAIL.VALUE) + " ")]) : e._e()]), i("div", {
                    staticClass: "col-xl-7 col-md-11 address order-xl-3 order-md-5 order-4",
                    attrs: {
                        itemscope: "",
                        itemtype: "http://schema.org/PostalAddress"
                    }
                }, [i("div", {
                    class: [{
                        moveTop: e.elementVisibleScroll.address.visible
                    }],
                    attrs: {
                        showScroll: "address"
                    }
                }, [e.arProperty.CONTACT_CITY.VALUE ? i("span", {
                    attrs: {
                        itemprop: "addressLocality"
                    }
                }, [e._v(e._s(e.arProperty.CONTACT_CITY.VALUE))]) : e._e(), e._v(", "), e.arProperty.CONTACT_ADDRESS.VALUE ? i("span", {
                    attrs: {
                        itemprop: "streetAddress"
                    }
                }, [e._v(e._s(e.arProperty.CONTACT_ADDRESS.VALUE))]) : e._e(), e._v(" "), i("br"), e.arProperty.CONTACT_OFFICE.VALUE ? i("span", {
                    attrs: {
                        itemprop: "streetAddress"
                    }
                }, [e._v(" " + e._s(e.arProperty.CONTACT_OFFICE.VALUE))]) : e._e()])]), i("div", {
                    staticClass: "col-xl-6 col-md-11 order-xl-4 order-md-3 social-block order-3"
                }, [i("div", {
                    class: [{
                        "opacity-animate": e.elementVisibleScroll.social.visible
                    }],
                    attrs: {
                        showScroll: "social"
                    }
                }, [e.arProperty.CONTACT_YOUTUBE.VALUE ? i("a", {
                    staticClass: "logo-social",
                    attrs: {
                        href: e.arProperty.CONTACT_YOUTUBE.VALUE
                    }
                }, [i("icon-base", {
                    attrs: {
                        "icon-name": "youtube-icon"
                    }
                }, [i("youtube-icon")], 1)], 1) : e._e(), e.arProperty.CONTACT_FACEBOOK.VALUE ? i("a", {
                    staticClass: "logo-social",
                    attrs: {
                        href: e.arProperty.CONTACT_FACEBOOK.VALUE
                    }
                }, [i("icon-base", {
                    attrs: {
                        "icon-name": "facebook-icon"
                    }
                }, [i("facebook-icon")], 1)], 1) : e._e(), e.arProperty.CONTACT_INSTAGRAM.VALUE ? i("a", {
                    staticClass: "logo-social",
                    attrs: {
                        href: e.arProperty.CONTACT_INSTAGRAM.VALUE
                    }
                }, [i("icon-base", {
                    attrs: {
                        "icon-name": "instagram-icon"
                    }
                }, [i("insta-icon")], 1)], 1) : e._e(), e.arProperty.CONTACT_VK.VALUE ? i("a", {
                    staticClass: "logo-social",
                    attrs: {
                        href: e.arProperty.CONTACT_VK.VALUE
                    }
                }, [i("icon-base", {
                    attrs: {
                        "icon-name": "vk-icon"
                    }
                }, [i("vk-icon")], 1)], 1) : e._e()])]), i("div", {
                    staticClass: "fixed-mobile-btn col-xl-10 col-md-12 order-xl-5 order-md-4 order-5",
                    class: [{
                        "over-map": e.elementVisibleScroll.map.visible
                    }]
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.btnConsul.visible || e.fixedBtn
                    }],
                    attrs: {
                        text: "написать нам",
                        link: "javascript:void(0);",
                        typeBtn: "base-btn",
                        showScroll: "btnConsul"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.openCallBackForm(1, "написать нам")
                        }
                    }
                })], 1), e.arProperty.CONTACT_TIME_WORK.VALUE ? i("div", {
                    staticClass: "col-xl-7 col-md-12 time-work order-xl-6 order-6",
                    class: [{
                        moveTop: e.elementVisibleScroll.timeWork.visible
                    }],
                    attrs: {
                        showScroll: "timeWork",
                        itemprop: "openingHours"
                    },
                    domProps: {
                        innerHTML: e._s(e.arProperty.CONTACT_TIME_WORK["~VALUE"].TEXT)
                    }
                }) : e._e(), i("div", {
                    staticClass: "offset-xl-6 col-xl-10 col-md-11 project-contacts order-xl-7 order-7",
                    class: [{
                        moveTop: e.elementVisibleScroll.project.visible
                    }],
                    attrs: {
                        showScroll: "project"
                    }
                }, [e.arProperty.CONTACT_PROJECT_PHONE.VALUE || e.arProperty.CONTACT_PROJECT_EMAIL.VALUE ? i("div", [e._v(e._s(e.arProperty.CONTACT_PROJECT_EMAIL.NAME) + ":")]) : e._e(), e.arProperty.CONTACT_PROJECT_EMAIL.VALUE ? i("a", {
                    staticClass: "hide-line",
                    attrs: {
                        href: "mailto:" + e.arProperty.CONTACT_PROJECT_EMAIL.VALUE
                    }
                }, [e._v(e._s(e.arProperty.CONTACT_PROJECT_EMAIL.VALUE))]) : e._e(), e.arProperty.CONTACT_PROJECT_PHONE.VALUE ? i("a", {
                    staticClass: "hide-line",
                    attrs: {
                        href: "tel:" + e.arProperty.CONTACT_PROJECT_PHONE.VALUE.replace(/\D/g, "")
                    }
                }, [e._v(e._s(e.arProperty.CONTACT_PROJECT_PHONE.VALUE))]) : e._e()]), e.arProperty.CONTACT_COMMERCIAL.VALUE ? i("div", {
                    staticClass: "col-xl-7 col-md-12 project-contacts order-xl-8 order-8",
                    class: [{
                        moveTop: e.elementVisibleScroll.commercial.visible
                    }],
                    attrs: {
                        showScroll: "commercial"
                    }
                }, [i("div", [e._v(e._s(e.arProperty.CONTACT_COMMERCIAL.NAME) + ":")]), e.arProperty.CONTACT_COMMERCIAL.VALUE ? i("a", {
                    staticClass: "hide-line",
                    attrs: {
                        href: "mailto:" + e.arProperty.CONTACT_COMMERCIAL.VALUE
                    }
                }, [e._v(e._s(e.arProperty.CONTACT_COMMERCIAL.VALUE))]) : e._e()]) : e._e()]), i("div", {
                    staticClass: "row"
                }, [i("separator", {
                    staticClass: "col-23",
                    attrs: {
                        show: !0
                    }
                })], 1), e.arProperty.CONTACTS_MAP.VALUE ? i("GoogleMapLoader", {
                    class: [{
                        "opacity-animate": e.elementVisibleScroll.map.visible
                    }],
                    attrs: {
                        id: "map",
                        apiKey: e.arProperty.CONTACTS_MAP.USER_TYPE_SETTINGS.API_KEY,
                        zoom: 22,
                        markers: e.arProperty.CONTACTS_MAP.VALUE,
                        showScroll: "map"
                    }
                }) : e._e(), i("footer-bar", {
                    attrs: {
                        "show-contacts": !1,
                        "check-position": e.startCheckPosition
                    }
                })], 1)
            },
            Ma = [],
            Na = {
                name: "ContactsPage",
                mixins: [P, lt],
                components: {
                    GoogleMapLoader: Dr,
                    Separator: z,
                    BaseButton: ee,
                    FooterBar: Wt,
                    IconBase: xe,
                    FacebookIcon: mt,
                    VkIcon: Ct,
                    InstaIcon: _t,
                    YoutubeIcon: yt
                },
                data: function() {
                    return {
                        changeAxios: !1,
                        arResult: {
                            arFields: {
                                NAME: {}
                            }
                        },
                        arProperty: {
                            CONTACT_PHONE: {},
                            CONTACT_MAIL: {},
                            CONTACT_YOUTUBE: {},
                            CONTACT_FACEBOOK: {},
                            CONTACT_INSTAGRAM: {},
                            CONTACT_VK: {},
                            CONTACT_CITY: {},
                            CONTACT_ADDRESS: {},
                            CONTACT_OFFICE: {},
                            CONTACT_TIME_WORK: {},
                            CONTACTS_MAP: {},
                            CONTACT_PROJECT_PHONE: {},
                            CONTACT_PROJECT_EMAIL: {},
                            CONTACT_COMMERCIAL: {}
                        },
                        elementVisibleScroll: {
                            title: {},
                            phone: {},
                            email: {},
                            social: {},
                            socialLink: {},
                            address: {},
                            timeWork: {},
                            map: {},
                            office: {},
                            commercial: {},
                            project: {},
                            button: {},
                            btnConsul: {}
                        },
                        showAfterIntro: !0,
                        arElementsShow: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 6,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {},
                        fixedBtn: !1
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), window.innerWidth <= 768 ? this.fixedBtn = !0 : this.fixedBtn = !1
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".contacts-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.$store.dispatch("receiveCheckPosition")
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation()
                    },
                    openCallBackForm: function(e, t) {
                        var i = "ALL",
                            s = "s_sort",
                            r = "asc",
                            a = {
                                ACTIVE: "Y"
                            };
                        this.$store.dispatch("receiveParamForm", {
                            id: e,
                            getOnlyFields: i,
                            sort: s,
                            order: r,
                            arFilter: a,
                            title: t
                        })
                    }
                },
                computed: {
                    startCheckPosition: function() {
                        return this.$store.getters.startCheckPosition
                    },
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        this.changeAxios = !0, e && (this.startAnimation(), this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorLightGray",
                            showSeparator: !0
                        }))
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), this.bitrixStore[this.arFilter.IBLOCK_ID] ? (this.arResult = this.bitrixStore[this.arFilter.IBLOCK_ID].ITEMS[0], this.arProperty = this.bitrixStore[this.arFilter.IBLOCK_ID].ITEMS[0].arProperty, ai.methods.set(this.arResult, "detail")) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS[0], e.arProperty = t.ITEMS[0].arProperty, ai.methods.set(e.arResult, "detail"), e.$store.dispatch("receiveCacheData", {
                            id: e.arFilter.IBLOCK_ID,
                            cacheData: t
                        })
                    })), window.innerWidth <= 768 ? this.fixedBtn = !0 : this.fixedBtn = !1
                },
                mounted: function() {
                    this.changeAxios || (this.startAnimation(), this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorLightGray",
                        showSeparator: !0
                    }))
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize), this.$store.dispatch("receiveAppClass", {
                        appClass: "",
                        showSeparator: !0
                    })
                }
            },
            Ba = Na,
            ja = Object(A["a"])(Ba, Da, Ma, !1, null, "ed27e00a", null),
            Ua = ja.exports,
            $a = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "blog-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios && !e.changeProjectList
                    }]
                }, [i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(e._s(e.$route.name))]), i("div", {}, [i("separator", {
                    attrs: {
                        show: !0,
                        "static-separator": e.changeProjectList
                    }
                }), i("div", {
                    staticClass: "gallery-filter"
                }, [i("div", {
                    staticClass: "col-xl-12 gallery-type-row"
                }, [i("div", {
                    staticClass: "col-md-auto col-11 gallery-type",
                    class: [{
                        active: 0 === e.activeFilter
                    }, {
                        moveTop: e.elementVisibleScroll.allBlog.visible
                    }],
                    attrs: {
                        showScroll: "allBlog"
                    },
                    on: {
                        click: function(t) {
                            return e.updateListProjects("")
                        }
                    }
                }, [e._v("Все "), i("span", [e._v(e._s(e.countAll))])]), e.sectionInfo[0] ? i("div", {
                    staticClass: "col-md-auto col-12 gallery-type",
                    class: [{
                        active: 1 === e.activeFilter
                    }, {
                        moveTop: e.elementVisibleScroll.countNews.visible
                    }],
                    attrs: {
                        showScroll: "countNews"
                    },
                    on: {
                        click: function(t) {
                            return e.updateListProjects(e.sectionInfo[0]["ID"])
                        }
                    }
                }, [e._v(e._s(e.sectionInfo[0]["NAME"]) + " "), i("span", [e._v(e._s(e.countNews))])]) : e._e(), e.sectionInfo[1] ? i("div", {
                    staticClass: "col-md-auto col-23 gallery-type",
                    class: [{
                        active: 2 === e.activeFilter
                    }, {
                        moveTop: e.elementVisibleScroll.countArticles.visible
                    }],
                    attrs: {
                        showScroll: "countArticles"
                    },
                    on: {
                        click: function(t) {
                            return e.updateListProjects(e.sectionInfo[1]["ID"])
                        }
                    }
                }, [e._v(e._s(e.sectionInfo[1]["NAME"]) + " "), i("span", [e._v(e._s(e.countArticles))])]) : e._e()]), i("div", {
                    staticClass: "col-xl-11 gallery-sort col-md-23",
                    class: [{
                        moveTop: e.elementVisibleScroll.sortNews.visible
                    }],
                    attrs: {
                        showScroll: "sortNews"
                    }
                }, [e._v("Сортировать по дате: "), i("div", {
                    staticClass: "gallery-sort-value",
                    class: {
                        up: !this.sortArrow.status
                    },
                    on: {
                        click: function(t) {
                            return e.updateSortListProjects()
                        }
                    }
                }, [e._m(0)])])]), i("separator", {
                    attrs: {
                        show: !0,
                        "static-separator": e.changeProjectList
                    }
                }), 0 !== e.arResult.length && e.elementVisibleScroll ? i("listing-blog", {
                    class: [{
                        "change-screen": e.changeFilter
                    }],
                    attrs: {
                        "ar-result": e.arResult,
                        "width-order": e.widthOrder,
                        "element-visible-scroll": e.elementVisibleScroll,
                        "path-list-page": e.$route.path,
                        "ar-result-length": e.arResult.length
                    },
                    on: {
                        triggerUpdateUrl: function(t) {
                            return e.updateListProjects(t)
                        }
                    }
                }) : e._e(), e.countPage > e.lazyLoadPage.iNumPage ? i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.linkProjectsWork1.visible
                    }],
                    attrs: {
                        text: "показать еще",
                        link: "javascript:void(0);",
                        typeBtn: "base-btn",
                        showScroll: "linkProjectsWork1"
                    },
                    on: {
                        clickBtn: function(t) {
                            return e.lazyLoad()
                        }
                    }
                }) : e._e()], 1)])
            },
            Wa = [function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "gallery-sort-value-container"
                }, [s("div", {
                    staticClass: "new-value"
                }, [s("span", [e._v("сначала новые")]), s("div", {
                    staticClass: "triangle-toggle-btn"
                }, [s("img", {
                    attrs: {
                        src: i("d565")
                    }
                })])]), s("div", {
                    staticClass: "old-value"
                }, [s("span", [e._v("сначала старые")]), s("div", {
                    staticClass: "triangle-toggle-btn"
                }, [s("img", {
                    attrs: {
                        src: i("d565")
                    }
                })])])])
            }],
            Ga = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "article-block"
                }, [e._l(this.arResult, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "article",
                        class: [e.getWidthOrder(s), {
                            "last-article": s === e.arResultLength - 1 && e.arResultLength % 2 === 1
                        }, {
                            "opacity-animate": e.elementVisibleScroll["fullPage" + s] && e.elementVisibleScroll["fullPage" + s].visible
                        }],
                        attrs: {
                            showScroll: "fullPage" + s
                        }
                    }, [i("div", {
                        staticClass: "top-block"
                    }, [t.arFields.CREATED_DATE ? i("div", {
                        staticClass: "date",
                        class: [{
                            moveTop: e.elementVisibleScroll["specifications" + s] && e.elementVisibleScroll["specifications" + s].visible
                        }],
                        attrs: {
                            showScroll: "specifications" + s
                        }
                    }, [e._v(e._s(e.format_date(t.arFields.CREATED_DATE)))]) : e._e(), t ? i("base-button", {
                        class: [{
                            "show-link-arrow": e.elementVisibleScroll["toArticle" + s] && e.elementVisibleScroll["toArticle" + s].visible
                        }],
                        attrs: {
                            text: t.arFields.NAME,
                            link: e.pathListPage + t.arFields.CODE,
                            typeBtn: "link-arrow-right",
                            showScroll: "toArticle" + s
                        }
                    }) : e._e()], 1), t.arFields.PREVIEW_PICTURE || t.arFields.PREVIEW_TEXT ? i("div", {
                        staticClass: "bottom-block"
                    }, [t.arFields.SECTION_INFO.NAME ? i("div", [i("span", {
                        staticClass: "section-name",
                        class: [{
                            moveTop: e.elementVisibleScroll["showSection" + s] && e.elementVisibleScroll["showSection" + s].visible
                        }, e.setTagColor(t.arFields.IBLOCK_SECTION_ID)],
                        attrs: {
                            showScroll: "showSection" + s
                        },
                        on: {
                            click: function(i) {
                                return e.triggerUpdateUrl(t.arFields.SECTION_INFO.ID)
                            }
                        }
                    }, [i("span", [e._v(e._s(t.arFields.SECTION_INFO.NAME))])])]) : e._e(), t.arFields.PREVIEW_PICTURE ? i("div", {
                        staticClass: "image",
                        class: [{
                            "show-img-project": e.elementVisibleScroll["articleImg" + s] && e.elementVisibleScroll["articleImg" + s].visible
                        }],
                        attrs: {
                            showScroll: "articleImg" + s
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.$hostname + t.arFields.PREVIEW_PICTURE_INFO.SRC
                        }
                    })]) : t.arFields.PREVIEW_TEXT ? i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        class: [{
                            moveTop: e.elementVisibleScroll["showText" + s] && e.elementVisibleScroll["showText" + s].visible
                        }],
                        attrs: {
                            showScroll: "showText" + s
                        }
                    }, [i("div", {
                        staticClass: "prev-text",
                        domProps: {
                            innerHTML: e._s(t.arFields.PREVIEW_TEXT)
                        }
                    }), t ? i("base-button", {
                        attrs: {
                            text: "читать далее",
                            link: e.pathListPage + t.arFields.CODE,
                            typeBtn: "article-more"
                        }
                    }) : e._e()], 1)]) : e._e()]) : e._e()])
                })), i("div", {
                    staticStyle: {
                        clear: "both"
                    }
                })], 2)
            },
            Ha = [],
            za = i("c1df"),
            Ka = i.n(za),
            Ya = {
                name: "ListingBlog",
                mixins: [ni],
                components: {
                    BaseButton: ee
                },
                props: {
                    arResult: Array,
                    arResultLength: Number,
                    widthOrder: Array,
                    elementVisibleScroll: Object,
                    pathListPage: String
                },
                methods: {
                    getWidthOrder: function(e) {
                        return ni.methods.order(e, this.widthOrder)
                    },
                    format_date: function(e) {
                        if (e) {
                            var t = e.split("."),
                                i = Number(t[1]) - 1,
                                s = new Date(t[0], i, t[2]);
                            return Ka.a.locale("ru"), Ka()(String(s)).format("DD MMMM YYYY")
                        }
                    },
                    setTagColor: function(e) {
                        return {
                            "tag-green": 16 == e,
                            "tag-blue": 15 == e
                        }
                    },
                    triggerUpdateUrl: function(e) {
                        this.$emit("triggerUpdateUrl", e)
                    }
                }
            },
            Xa = Ya,
            qa = Object(A["a"])(Xa, Ga, Ha, !1, null, "dc7c7fb4", null),
            Ja = qa.exports,
            Za = {
                name: "BlogPage",
                components: {
                    ListingBlog: Ja,
                    Separator: z,
                    BaseButton: ee
                },
                mixins: [P, lt],
                data: function() {
                    return {
                        arResult: [],
                        elementVisibleScroll: {
                            title: {},
                            titleFilter: {},
                            linkProjectsWork1: {},
                            allBlog: {},
                            countArticles: {},
                            countNews: {},
                            sortNews: {},
                            galleryFilter: {},
                            fullPage: {}
                        },
                        arFilters: {},
                        changeProjectList: !1,
                        changeFilter: !1,
                        arElementsShow: [],
                        arSort: {
                            CREATED_DATE: "DESC",
                            TIMESTAMP_X: "DESC"
                        },
                        arFilter: {
                            IBLOCK_ID: 18,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_TEXT", "PREVIEW_PICTURE", "DETAIL_PAGE_URL", "IBLOCK_SECTION_ID"],
                        arNuvParam: {
                            iNumPage: 1,
                            nPageSize: 6,
                            realPageSize: 6
                        },
                        lazyLoadPage: {
                            iNumPage: 1,
                            nPageSize: 6
                        },
                        countActiveElement: 0,
                        countPage: 0,
                        countNews: 0,
                        countArticles: 0,
                        countAll: 0,
                        activeFilter: 0,
                        sectionInfo: [],
                        widthOrder: ["col-xl-12 col-md-23 uneven large first", "col-xl-11 col-md-23 even large right", "col-xl-7 col-md-11 uneven small middle left", "col-xl-16 col-md-12 even large md-small right middle", "col-xl-7 col-md-23 uneven small md-large", "col-xl-16 col-md-23 even large last right", "col-xl-11 col-md-23 uneven large left first", "col-xl-12 col-md-23 even large", "col-xl-16 col-md-12 uneven large md-small left middle", "col-xl-7 col-md-11 even small middle", "col-xl-7 col-md-23 even small md-large", "col-xl-16 col-md-23 uneven large left last"],
                        sortArrow: {
                            status: !0,
                            style: ""
                        }
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        var t = this;
                        e && setTimeout((function() {
                            t.startAnimation()
                        }), 600)
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".blog-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.$store.dispatch("receiveCheckPosition")
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation()
                    },
                    updateListProjects: function(e) {
                        var t = this;
                        this.changeFilter = !0, this.changeProjectList = !0, this.lazyLoadPage.iNumPage = 1, "" !== e ? (this.arFilter = {
                            IBLOCK_ID: 18,
                            ACTIVE: "Y",
                            IBLOCK_SECTION_ID: e
                        }, 15 == e ? this.activeFilter = 1 : 16 == e && (this.activeFilter = 2)) : (this.activeFilter = 0, this.arFilter = {
                            IBLOCK_ID: 18,
                            ACTIVE: "Y"
                        }), this.updateUlr(), setTimeout((function() {
                            P.methods.GetList(t.arSort, t.arFilter, !1, t.arNuvParam, t.arSelect).then((function(e) {
                                t.arResult = e.ITEMS, e.infoBlock && (t.countPage = e.infoBlock.COUNT_PAGE), t.changeFilter = !1, t.$store.dispatch("receiveCheckPosition")
                            }))
                        }), 1e3)
                    },
                    updateSortListProjects: function() {
                        var e = this;
                        this.changeFilter = !0, this.changeProjectList = !0, this.sortArrow.status = !this.sortArrow.status, "ASC" === this.arSort["CREATED_DATE"] ? this.arSort = {
                            CREATED_DATE: "DESC",
                            TIMESTAMP_X: "DESC"
                        } : this.arSort = {
                            CREATED_DATE: "ASC",
                            TIMESTAMP_X: "ASC"
                        }, this.updateUlr(), P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                            setTimeout((function() {
                                e.arResult = t.ITEMS, t.infoBlock && (e.countPage = t.infoBlock.COUNT_PAGE), e.changeFilter = !1, e.$store.dispatch("receiveCheckPosition")
                            }), 1e3)
                        }))
                    },
                    lazyLoad: function() {
                        var e = this;
                        this.lazyLoadPage.iNumPage++, this.changeProjectList = !0, this.updateUlr(), P.methods.GetList(this.arSort, this.arFilter, !1, this.lazyLoadPage, this.arSelect).then((function(t) {
                            e.arResult = e.arResult.concat(t.ITEMS), e.$store.dispatch("receiveCheckPosition")
                        }))
                    },
                    updateUlr: function() {
                        var e = "?";
                        for (var t in this.arFilter)
                            if (t.includes("IBLOCK_SECTION_ID"))
                                for (var i in this.sectionInfo) this.sectionInfo[i]["ID"] === this.arFilter["IBLOCK_SECTION_ID"] && (e = "?blog=" + this.sectionInfo[i]["CODE"]);
                        e += "&sort=" + this.arSort["CREATED_DATE"].toLowerCase(), this.lazyLoadPage.iNumPage > 1 && (e += "&Page=" + this.lazyLoadPage.iNumPage), window.history.replaceState("", "", window.location.pathname + e)
                    }
                },
                created: function() {
                    var e = this;
                    this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorGray"
                    }), window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), this.activeFilter = 0;
                    var t = document.location.search.replace("?", "").split("&");
                    if ("" !== t[0])
                        for (var i in t) {
                            var s = t[i].split("=");
                            switch (s[0]) {
                                case "blog":
                                    "novosti" === s[1] ? (this.activeFilter = 1, this.arFilter["IBLOCK_SECTION_ID"] = 15) : "poleznye-stati" === s[1] && (this.activeFilter = 2, this.arFilter["IBLOCK_SECTION_ID"] = 16);
                                    break;
                                case "sort":
                                    "asc" === s[1] ? this.sortArrow.status = !1 : this.sortArrow.status = !0, this.arSort = {
                                        CREATED_DATE: s[1].toUpperCase(),
                                        TIMESTAMP_X: s[1].toUpperCase()
                                    };
                                    break;
                                case "Page":
                                    this.arNuvParam.nPageSize *= s[1], this.lazyLoadPage.iNumPage = s[1];
                                    break
                            }
                        }
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS, e.arResult[0]["SECTION_NAME"] = t.infoBlock.IBLOCK_NAME, ai.methods.set(e.arResult[0], "section"), e.sectionInfo = t.infoBlock.SECTION_LIST, e.countPage = t.infoBlock.COUNT_PAGE, e.countAll = t.infoBlock.ALL_COUNT_ITEM, e.countNews = t.infoBlock.ALL_COUNT_NEWS, e.countArticles = t.infoBlock.ALL_COUNT_ARTICLES
                    }))
                },
                destroyed: function() {
                    this.$store.dispatch("receiveAppClass", {
                        appClass: ""
                    }), window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            Qa = Za,
            eo = Object(A["a"])(Qa, $a, Wa, !1, null, "2829be68", null),
            to = eo.exports,
            io = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "container favourite-page",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }]
                }, [i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(e._s(e.$route.name))]), e.idItems.length > 0 && "" !== e.idItems[0] ? i("swiper-table", {
                    attrs: {
                        "id-item": e.idItems,
                        "element-visible-scroll": e.elementVisibleScroll,
                        "table-property": e.tableProperty,
                        "table-price": e.priceProperty,
                        "id-block": 9
                    }
                }) : i("div", [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "error-container"
                }, [i("div", {
                    staticClass: "text-block col-xl-9"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "title",
                    class: [{
                        moveTop: e.elementVisibleScroll.underTitle.visible
                    }],
                    attrs: {
                        showScroll: "underTitle"
                    }
                }, [e._v("в избранном пока ничего нет")]), i("p", {
                    class: [{
                        moveTop: e.elementVisibleScroll.textUnderTitle.visible
                    }],
                    attrs: {
                        showScroll: "textUnderTitle"
                    }
                }, [e._v(" жмите "), i("icon-base", {
                    attrs: {
                        width: "22",
                        height: "20"
                    }
                }, [i("favourite-icon")], 1), e._v(" на странице проекта, чтобы добавлять проекты в избранное ")], 1)]), i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.button.visible
                    }],
                    attrs: {
                        text: "проекты",
                        link: "/projects/",
                        typeBtn: "base-btn",
                        showScroll: "button"
                    }
                })], 1), 1200 === e.windowWidth ? i("div", {
                    staticClass: "offset-7 col-16 "
                }, [i("icon-base", {
                    staticClass: "svg-plan",
                    attrs: {
                        width: 1304,
                        height: 709
                    }
                }, [i("error-desc", {
                    on: {
                        clickPath: function(t) {
                            return e.routeDetailPage(t)
                        }
                    }
                })], 1)], 1) : e._e(), 768 === e.windowWidth ? i("icon-base", {
                    staticClass: "svg-plan",
                    attrs: {
                        width: 729,
                        height: 531
                    }
                }, [i("error-tablet", {
                    on: {
                        clickPath: function(t) {
                            return e.routeDetailPage(t)
                        }
                    }
                })], 1) : e._e(), 414 === e.windowWidth ? i("icon-base", {
                    staticClass: "svg-plan",
                    attrs: {
                        width: 396,
                        height: 610
                    }
                }, [i("error-mobile", {
                    on: {
                        clickPath: function(t) {
                            return e.routeDetailPage(t)
                        }
                    }
                })], 1) : e._e()], 1)], 1)], 1)
            },
            so = [],
            ro = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("g", {
                    staticClass: "error-svg",
                    domProps: {
                        innerHTML: e._s(e.arResult.arFields.DETAIL_TEXT)
                    },
                    on: {
                        click: function(t) {
                            return e.clickPath(t)
                        }
                    }
                })
            },
            ao = [],
            oo = {
                name: "ErrorDesc",
                data: function() {
                    return {
                        arResult: {
                            arFields: {
                                DETAIL_TEXT: ""
                            }
                        },
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 21,
                            ACTIVE: "Y",
                            ID: 119
                        },
                        arSelect: ["NAME", "CODE", "DETAIL_TEXT", "DETAIL_PAGE_URL"],
                        arNuvParam: {}
                    }
                },
                methods: {
                    clickPath: function(e) {
                        var t = ci.methods.parent(e.target, "pointer");
                        this.$emit("clickPath", t.attributes.clickpath.nodeValue)
                    }
                },
                created: function() {
                    var e = this;
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS[0]
                    }))
                }
            },
            lo = oo,
            no = Object(A["a"])(lo, ro, ao, !1, null, "a495fe78", null),
            co = no.exports,
            ho = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("g", {
                    staticClass: "error-svg",
                    domProps: {
                        innerHTML: e._s(e.arResult.arFields.DETAIL_TEXT)
                    },
                    on: {
                        click: function(t) {
                            return e.clickPath(t)
                        }
                    }
                })
            },
            uo = [],
            mo = {
                name: "ErrorMobile",
                data: function() {
                    return {
                        arResult: {
                            arFields: {
                                DETAIL_TEXT: ""
                            }
                        },
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 21,
                            ACTIVE: "Y",
                            ID: 121
                        },
                        arSelect: ["NAME", "CODE", "DETAIL_TEXT", "DETAIL_PAGE_URL"],
                        arNuvParam: {}
                    }
                },
                methods: {
                    clickPath: function(e) {
                        var t = ci.methods.parent(e.target, "pointer");
                        this.$emit("clickPath", t.attributes.clickpath.nodeValue)
                    }
                },
                created: function() {
                    var e = this;
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS[0]
                    }))
                }
            },
            po = mo,
            vo = Object(A["a"])(po, ho, uo, !1, null, "6d11610a", null),
            So = vo.exports,
            fo = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("g", {
                    staticClass: "error-svg",
                    domProps: {
                        innerHTML: e._s(e.arResult.arFields.DETAIL_TEXT)
                    },
                    on: {
                        click: function(t) {
                            return e.clickPath(t)
                        }
                    }
                })
            },
            Eo = [],
            Co = {
                name: "ErrorTablet",
                data: function() {
                    return {
                        arResult: {
                            arFields: {
                                DETAIL_TEXT: ""
                            }
                        },
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 21,
                            ACTIVE: "Y",
                            ID: 120
                        },
                        arSelect: ["NAME", "CODE", "DETAIL_TEXT", "DETAIL_PAGE_URL"],
                        arNuvParam: {}
                    }
                },
                methods: {
                    clickPath: function(e) {
                        var t = ci.methods.parent(e.target, "pointer");
                        this.$emit("clickPath", t.attributes.clickpath.nodeValue)
                    }
                },
                created: function() {
                    var e = this;
                    P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS[0]
                    }))
                }
            },
            go = Co,
            bo = Object(A["a"])(go, fo, Eo, !1, null, "1fb7e30c", null),
            To = bo.exports,
            Po = {
                name: "FavouritesPage",
                components: {
                    FavouriteIcon: ur,
                    ErrorTablet: To,
                    ErrorMobile: So,
                    ErrorDesc: co,
                    IconBase: xe,
                    Separator: z,
                    BaseButton: ee,
                    SwiperTable: ta
                },
                data: function() {
                    return {
                        elementVisibleScroll: {
                            title: {},
                            titleFilter: {},
                            wrapFilter: {},
                            filerList: {},
                            linkProjectsWork1: {},
                            mobileTitleFilter: {},
                            btnConsul: {},
                            btnConsul2: {},
                            similarTitle: {},
                            projectsBtn1: {},
                            navBtn: {},
                            textTable: {},
                            priceTextMaterial: {},
                            rowTable: {},
                            priceMaterial: {},
                            titlePayment: {},
                            titleConfigurator: {},
                            inputCalculator: {},
                            resultPrice: {},
                            textResultPrice: {},
                            materialBlock: {},
                            titleScheme: {},
                            underTitle: {},
                            textUnderTitle: {},
                            button: {}
                        },
                        idItems: [],
                        tableProperty: ["AREA_PROJECT", "SIZE_PROJECT", "ROOM_PROJECT", "BATHROOMS_PROJECT", "WALL_PROJECT", "ROOF_PROJECT", "OVERLAPS_PROJECT", "EXTERIOR_FINISH", "ARCHITECTURAL_STYLE", "PRICE_PROJECT"],
                        priceProperty: "PRICE_BUILDING",
                        windowWidth: 1200
                    }
                },
                computed: {
                    getIntroStatus: function() {
                        return this.$store.getters.getIntroStatus
                    },
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e && this.startAnimation()
                    }
                },
                methods: {
                    routeDetailPage: function(e) {
                        "" !== e && "javascript:void(0);" !== e && this.$router.push(e)
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".favourite-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.$store.dispatch("receiveCheckPosition")
                    },
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    handleResize: function() {
                        window.innerWidth > 1199 ? this.windowWidth = 1200 : window.innerWidth > 767 ? this.windowWidth = 768 : this.windowWidth = 414, this.startAnimation()
                    }
                },
                created: function() {
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), document.title = "Избранное", document.querySelector('meta[name="description"]').setAttribute("content", ""), document.querySelector('meta[name="keywords"]').setAttribute("content", ""), null !== Qe.methods.get("favouriteId") && (this.idItems = Qe.methods.get("favouriteId").split(",")), window.innerWidth > 1199 ? this.windowWidth = 1200 : window.innerWidth > 767 ? this.windowWidth = 768 : this.windowWidth = 414
                },
                mounted: function() {
                    this.startAnimation(), this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorLightGray",
                        showSeparator: !0
                    })
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            wo = Po,
            _o = Object(A["a"])(wo, io, so, !1, null, "37210eb2", null),
            Ao = _o.exports,
            Io = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "company-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }]
                }, [i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v("О компании")]), i("div", {
                    staticClass: "row prev-info"
                }, [i("div", {
                    staticClass: "slogan col-auto offset-xl-7 offset-md-11 order-1",
                    class: [{
                        moveTop: e.elementVisibleScroll.slogan.visible
                    }],
                    attrs: {
                        showScroll: "slogan"
                    }
                }, [e._v(e._s(e.arResult.arProperty.SLOGAN_COMPANY.VALUE))]), i("separator", {
                    staticClass: "col-23 order-2",
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "subtitle col-xl-7 col-md-11 order-md-3 order-4",
                    class: [{
                        moveTop: e.elementVisibleScroll.subtitle.visible
                    }],
                    attrs: {
                        showScroll: "subtitle"
                    },
                    domProps: {
                        innerHTML: e._s(e.arResult.arProperty.SUBTITLE_COMPANY["~VALUE"].TEXT)
                    }
                }), i("div", {
                    staticClass: "list-info col-xl-16 col-md-12 order-md-4 order-5"
                }, [i("ul", {
                    staticClass: "row"
                }, e._l(e.arResult.arProperty.ADVANTAGES_COMPANY.VALUE, (function(t, s) {
                    return i("li", {
                        key: s,
                        class: [{
                            moveTop: e.elementVisibleScroll["listInfo" + s] && e.elementVisibleScroll["listInfo" + s].visible
                        }],
                        attrs: {
                            showScroll: "listInfo" + s
                        }
                    }, [e._v(" " + e._s(t) + " ")])
                })), 0)]), i("div", {
                    staticClass: "img-prev col-23 order-md-5 order-3"
                }, [e.arResult.arProperty.LINK_FOR_IMG.VALUE ? i("base-button", {
                    class: [{
                        moveTop: e.elementVisibleScroll.imgPrev.visible
                    }],
                    attrs: {
                        text: e.arResult.arProperty.LINK_FOR_IMG.DESCRIPTION,
                        link: e.arResult.arProperty.LINK_FOR_IMG.VALUE,
                        showScroll: "imgPrev"
                    }
                }) : e._e(), i("div", {
                    class: [{
                        "show-img-project": e.elementVisibleScroll.previewPicture.visible
                    }],
                    attrs: {
                        showScroll: "previewPicture"
                    }
                }, [i("img", {
                    attrs: {
                        src: e.$hostname + e.arResult.arFields.PREVIEW_PICTURE_INFO.SRC,
                        width: e.arResult.arFields.PREVIEW_PICTURE_INFO.WIDTH,
                        height: e.arResult.arFields.PREVIEW_PICTURE_INFO.HEIGHT
                    }
                })])], 1)], 1), i("quality-assurance"), i("div", {
                    staticClass: "mix-projects"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "row info-block-projects"
                }, [i("div", {
                    staticClass: "col-xl-7 title-wrap"
                }, [i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.titleProjects.visible
                    }],
                    attrs: {
                        showScroll: "titleProjects"
                    }
                }, [e._v(" " + e._s(e.arResult.arProperty.TITLE_PROJECTS_BLOCK.VALUE) + " ")])]), i("div", {
                    staticClass: "col-xxl-9 col-xl-7 subtitle",
                    class: [{
                        moveTop: e.elementVisibleScroll.subtitleMix.visible
                    }],
                    attrs: {
                        showScroll: "subtitleMix"
                    }
                }, [i("p", {
                    domProps: {
                        innerHTML: e._s(e.arResult.arProperty.SUBTITLE_PROJECTS_BLOCK["~VALUE"])
                    }
                })]), i("div", {
                    staticClass: "col-auto btn-col"
                }, [i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll["linkPortfolio"].visible
                    }],
                    attrs: {
                        text: "все дома",
                        link: "/works/",
                        typeBtn: "base-btn",
                        showScroll: "linkPortfolio"
                    }
                }), i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll["linkProjects1"].visible
                    }],
                    attrs: {
                        text: "все проекты",
                        link: "/projects/",
                        typeBtn: "base-btn revers",
                        showScroll: "linkProjects1"
                    }
                })], 1)]), e.arResult.arProperty.PORTFOLIO_ID.VALUE ? i("mix-projects", {
                    attrs: {
                        "portfolio-id": e.arResult.arProperty.PORTFOLIO_ID.VALUE,
                        "element-visible-scroll": e.elementVisibleScroll
                    }
                }) : e._e(), i("div", {
                    staticClass: "service-company"
                }, [i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.titleService.visible
                    }],
                    attrs: {
                        showScroll: "titleService"
                    }
                }, [e._v(" " + e._s(e.arResult.arProperty.TITLE_SERVICE.VALUE) + " ")]), i("service-company-page", {
                    attrs: {
                        "element-visible-scroll": e.elementVisibleScroll
                    },
                    on: {
                        load: e.startAnimation
                    }
                })], 1)], 1)], 1)
            },
            Ro = [],
            Lo = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return e.arResult.arProperty.PARTNER_ON_MAIN ? i("partner-main-page", {
                    attrs: {
                        "result-main-page": e.arResult
                    }
                }) : e._e()
            },
            Oo = [],
            yo = {
                name: "QualityAssurance",
                components: {
                    PartnerMainPage: Rs
                },
                data: function() {
                    return {
                        arResult: {
                            arProperty: {
                                PARTNER_ON_MAIN: {}
                            }
                        }
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                created: function() {
                    var e = this,
                        t = {
                            SORT: "ASC"
                        },
                        i = {
                            IBLOCK_ID: 5,
                            ACTIVE: "Y"
                        },
                        s = ["ID", "IBLOCK_ID", "NAME", "CODE"];
                    this.bitrixStore[i.IBLOCK_ID] ? this.arResult = this.bitrixStore[i.IBLOCK_ID].ITEMS[0] : P.methods.GetList(t, i, !1, !1, s).then((function(t) {
                        e.arResult = t.ITEMS[0], e.$store.dispatch("receiveCacheData", {
                            id: i.IBLOCK_ID,
                            cacheData: t
                        })
                    }))
                }
            },
            xo = yo,
            Vo = Object(A["a"])(xo, Lo, Oo, !1, null, "bdf92f66", null),
            ko = Vo.exports,
            Fo = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", [e.mixResult && e.elementVisibleScroll ? i("listing-projects", {
                    attrs: {
                        "ar-result": e.mixResult,
                        "width-order": e.widthOrder,
                        "element-visible-scroll": e.elementVisibleScroll
                    }
                }) : e._e()], 1)
            },
            Do = [],
            Mo = {
                name: "MixProjects",
                components: {
                    ListingProjects: pi
                },
                props: ["portfolioId", "elementVisibleScroll"],
                data: function() {
                    return {
                        arResult: [],
                        mixResult: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 10,
                            ACTIVE: "Y",
                            ID: this.portfolioId
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {},
                        widthOrder: ["col-xl-16 col-md-10 order-1", "col-xl-7 col-md-13 col-15 offset-md-0 offset-8 order-2 project-cell", "col-xl-7 col-md-13 col-15 offset-md-0 offset-8 order-md-3 order-4 project-cell", "col-xl-16 col-md-10 order-md-4 order-3"]
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    mixProject: function(e, t, i, s) {
                        var r = this,
                            a = {
                                SORT: "ASC"
                            },
                            o = {
                                IBLOCK_ID: 9,
                                ACTIVE: "Y",
                                ID: e
                            },
                            l = {},
                            n = ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                            c = o.IBLOCK_ID + "_" + e;
                        this.bitrixStore[c] ? t ? (this.$set(this.mixResult, s++, this.arResult[i]), this.$set(this.mixResult, s, this.bitrixStore[c].ITEMS[0])) : (this.$set(this.mixResult, s++, this.bitrixStore[c].ITEMS[0]), this.$set(this.mixResult, s, this.arResult[i])) : P.methods.GetList(a, o, !1, l, n).then((function(e) {
                            t ? (r.$set(r.mixResult, s++, r.arResult[i]), r.$set(r.mixResult, s, e.ITEMS[0])) : (r.$set(r.mixResult, s++, e.ITEMS[0]), r.$set(r.mixResult, s, r.arResult[i])), r.$store.dispatch("receiveCacheData", {
                                id: c,
                                cacheData: e
                            })
                        }))
                    },
                    createdMixProjects: function(e) {
                        this.arResult = e.ITEMS;
                        var t = 0,
                            i = !0;
                        for (var s in this.arResult) s < 2 && (this.mixProject(this.arResult[s].arProperty.PROJECT.VALUE, i, s, t), i = !i, t += 2)
                    }
                },
                created: function() {
                    var e = this,
                        t = this.arFilter.IBLOCK_ID + "_mixProjects";
                    this.bitrixStore[t] ? this.createdMixProjects(this.bitrixStore[t]) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(i) {
                        e.createdMixProjects(i), e.$store.dispatch("receiveCacheData", {
                            id: t,
                            cacheData: i
                        })
                    }))
                }
            },
            No = Mo,
            Bo = Object(A["a"])(No, Fo, Do, !1, null, "775a8ce8", null),
            jo = Bo.exports,
            Uo = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "wrap-section"
                }, e._l(e.arSection, (function(t, s) {
                    return i("div", {
                        key: s,
                        staticClass: "service-section row"
                    }, [i("separator", {
                        staticClass: "offset-xl-7 col-xl-16 order-1",
                        attrs: {
                            show: !0
                        }
                    }), i("div", {
                        staticClass: "section-description col-xl-7 col-md-12 order-xl-2 order-3"
                    }, [i("p", {
                        class: [{
                            moveTop: e.elementVisibleScroll["descriptionSection" + s] && e.elementVisibleScroll["descriptionSection" + s].visible
                        }],
                        attrs: {
                            showScroll: "descriptionSection" + s
                        }
                    }, [e._v(" " + e._s(t.DESCRIPTION) + " ")])]), i("div", {
                        staticClass: "col-xl-16 col-md-11 order-xl-3 order-2 section-name"
                    }, [i("p", {
                        class: [{
                            moveTop: e.elementVisibleScroll["nameSection" + s] && e.elementVisibleScroll["nameSection" + s].visible
                        }],
                        attrs: {
                            showScroll: "nameSection" + s
                        }
                    }, [e._v(" " + e._s(t.NAME) + " ")])]), i("div", {
                        staticClass: "service-list offset-xl-12 col-xl-8 order-4"
                    }, e._l(t.ITEMS, (function(t, r) {
                        return i("div", {
                            key: r,
                            staticClass: "service-wrap ",
                            on: {
                                click: function(i) {
                                    return e.$router.push(t.arFields.DETAIL_PAGE_URL)
                                }
                            }
                        }, [i("p", {
                            staticClass: "name-service",
                            class: [{
                                moveTop: e.elementVisibleScroll["nameService" + s + r] && e.elementVisibleScroll["nameService" + s + r].visible
                            }],
                            attrs: {
                                showScroll: "nameService" + s + r
                            }
                        }, [e._v(" " + e._s(t.arFields.NAME) + " ")]), i("div", {
                            staticClass: "link-service"
                        }, [i("base-button", {
                            class: [{
                                "show-button": e.elementVisibleScroll["nameService" + s + r] && e.elementVisibleScroll["nameService" + s + r].visible
                            }],
                            attrs: {
                                text: "подробнее",
                                link: t.arFields.DETAIL_PAGE_URL,
                                "type-btn": "secondary-button",
                                showScroll: "nameService" + s + r
                            }
                        })], 1), t.arProperty.PRICE_SERVICE.VALUE ? i("div", {
                            staticClass: "price-service",
                            class: [{
                                moveTop: e.elementVisibleScroll["priceService" + s + r] && e.elementVisibleScroll["priceService" + s + r].visible
                            }],
                            attrs: {
                                showScroll: "priceService" + s + r
                            }
                        }, [i("p", [e._v("стоимость от")]), e._v(" "), i("span", [e._v(e._s(t.arProperty.PRICE_SERVICE.VALUE) + " ₽/м"), i("sup", [e._v("2")])])]) : e._e(), i("div", {
                            staticClass: "img-service",
                            class: [{
                                "show-img-project": e.elementVisibleScroll["servicePicture" + s + r] && e.elementVisibleScroll["servicePicture" + s + r].visible
                            }],
                            attrs: {
                                showScroll: "servicePicture" + s + r
                            }
                        }, [i("img", {
                            attrs: {
                                src: e.$hostname + t.arFields.PREVIEW_PICTURE_INFO.SRC,
                                width: t.arFields.PREVIEW_PICTURE_INFO.WIDTH,
                                height: t.arFields.PREVIEW_PICTURE_INFO.HEIGHT
                            }
                        }), i("separator", {
                            attrs: {
                                show: !0
                            }
                        })], 1)])
                    })), 0)], 1)
                })), 0)
            },
            $o = [],
            Wo = {
                name: "ServiceCompanyPage",
                components: {
                    BaseButton: ee,
                    Separator: z
                },
                props: {
                    elementVisibleScroll: [Array, Object]
                },
                data: function() {
                    return {
                        changeAxios: !1,
                        arResult: {},
                        arSection: {},
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 11,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {}
                    }
                },
                computed: {
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                methods: {
                    createdService: function(e) {
                        for (var t in this.arResult = e.ITEMS, this.arSection = e.infoBlock.SECTION_LIST, this.arSection) {
                            var i = 0;
                            for (var s in this.arSection[t]["ITEMS"] = {}, this.arResult) this.arSection[t].ID === this.arResult[s].arFields.IBLOCK_SECTION_ID && (this.arSection[t]["ITEMS"][i] = this.arResult[s], i++)
                        }
                    }
                },
                created: function() {
                    var e = this;
                    this.bitrixStore[this.arFilter.IBLOCK_ID] ? this.createdService(this.bitrixStore[this.arFilter.IBLOCK_ID]) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.createdService(t), e.$store.dispatch("receiveCacheData", {
                            id: e.arFilter.IBLOCK_ID,
                            cacheData: t
                        })
                    }))
                },
                mounted: function() {
                    this.$emit("load")
                }
            },
            Go = Wo,
            Ho = Object(A["a"])(Go, Uo, $o, !1, null, "01d0f885", null),
            zo = Ho.exports,
            Ko = {
                name: "CompanyPage",
                components: {
                    ServiceCompanyPage: zo,
                    MixProjects: jo,
                    QualityAssurance: ko,
                    BaseButton: ee,
                    Separator: z
                },
                data: function() {
                    return {
                        changeAxios: !1,
                        elementVisibleScroll: {
                            title: {},
                            titleProjects: {},
                            linkProjects1: {},
                            linkPortfolio: {},
                            slogan: {},
                            subtitle: {},
                            listInfo: {},
                            imgPrev: {},
                            previewPicture: {},
                            subtitleMix: {},
                            titleService: {}
                        },
                        arResult: {
                            arProperty: {
                                SLOGAN_COMPANY: {},
                                SUBTITLE_COMPANY: {
                                    "~VALUE": ""
                                },
                                ADVANTAGES_COMPANY: {},
                                LINK_FOR_IMG: {},
                                TITLE_PROJECTS_BLOCK: {},
                                SUBTITLE_PROJECTS_BLOCK: {},
                                PORTFOLIO_ID: {},
                                TITLE_SERVICE: {},
                                SUBTITLE_SERVICE: {}
                            },
                            arFields: {
                                PREVIEW_PICTURE: "",
                                PREVIEW_PICTURE_INFO: {}
                            }
                        },
                        showAfterIntro: !0,
                        arElementsShow: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 19,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {}
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        var e = this;
                        this.arElementsShow = lt.methods.GetElements(".company-page");
                        var t = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(t), setTimeout((function() {
                            e.$store.dispatch("receiveCheckPosition")
                        }), 200)
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        this.startAnimation()
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    },
                    bitrixStore: function() {
                        return this.$store.getters.cacheData
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        this.changeAxios = !0, e && this.startAnimation()
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), this.bitrixStore[this.arFilter.IBLOCK_ID] ? (this.arResult = this.bitrixStore[this.arFilter.IBLOCK_ID].ITEMS[0], ai.methods.set(this.arResult, "detail")) : P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS[0], ai.methods.set(e.arResult, "detail"), e.$store.dispatch("receiveCacheData", {
                            id: e.arFilter.IBLOCK_ID,
                            cacheData: t
                        })
                    }))
                },
                mounted: function() {
                    this.changeAxios || this.startAnimation(), this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorLightGray",
                        showSeparator: !0
                    })
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            Yo = Ko,
            Xo = Object(A["a"])(Yo, Io, Ro, !1, null, "712a73d6", null),
            qo = Xo.exports,
            Jo = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", {
                    staticClass: "blog-detail-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios && !e.changeCode
                    }]
                }, [i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "col-23 buttons-panel"
                }, [e.arResult.arFields.SECTION_INFO.ID ? i("go-to-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.prev.visible
                    }],
                    attrs: {
                        id: e.arResult.arFields.ID,
                        sort: "DESC",
                        sectionId: e.arResult.arFields.SECTION_INFO.ID,
                        elem: "<ID",
                        showScroll: "prev"
                    }
                }) : e._e(), e.arResult.arFields.SECTION_INFO.ID ? i("go-to-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.next.visible
                    }],
                    attrs: {
                        id: e.arResult.arFields.ID,
                        sort: "ASC",
                        sectionId: e.arResult.arFields.SECTION_INFO.ID,
                        elem: ">ID",
                        showScroll: "next"
                    }
                }) : e._e()], 1), i("separator", {
                    staticClass: "col-23",
                    attrs: {
                        show: !0,
                        "static-separator": !0
                    }
                }), i("div", {
                    staticClass: "col-xl-7 col-23 title-block",
                    class: {
                        "change-screen": e.animateBlogInfo
                    }
                }, [e.arResult.arFields.CREATED_DATE ? i("div", {
                    staticClass: "date",
                    class: [{
                        moveTop: e.elementVisibleScroll.date.visible
                    }],
                    attrs: {
                        showScroll: "date"
                    }
                }, [e._v(e._s(e.format_date(e.arResult.arFields.CREATED_DATE)))]) : e._e(), e.arResult.arFields.NAME ? i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(e._s(e.arResult.arFields.NAME))]) : e._e(), i("div", e._l(e.sectionInfo, (function(t, s) {
                    return i("div", {
                        key: s
                    }, [t.ID === e.arResult.arFields.SECTION_INFO.ID ? i("base-button", {
                        staticClass: "section-name",
                        class: [e.setTagColor(e.arResult.arFields.IBLOCK_SECTION_ID), {
                            moveTop: e.elementVisibleScroll.title.visible
                        }],
                        attrs: {
                            text: t.NAME,
                            link: "/blog/?blog=" + t.CODE,
                            typeBtn: "section-name",
                            showScroll: "section"
                        }
                    }) : e._e()], 1)
                })), 0)]), i("div", {
                    staticClass: "col-xl-16 offset-xl-0 offset-md-5 col-md-18 col-23 article",
                    class: {
                        "change-screen": e.animateBlogInfo
                    }
                }, [i("div", {
                    staticClass: "block-text-container"
                }, [e.arResult.arFields.DETAIL_TEXT ? i("div", {
                    staticClass: "blog-text",
                    domProps: {
                        innerHTML: e._s(e.arResult.arFields.DETAIL_TEXT)
                    },
                    on: {
                        click: e.handleClicks
                    }
                }) : e._e()])]), e.gallery ? i("popup-cool-light-box", {
                    attrs: {
                        elems: e.gallery
                    }
                }) : e._e()], 1)])
            },
            Zo = [],
            Qo = (i("00b4"), i("ddb0"), i("2b3d"), i("9861"), function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", [i("base-button", {
                    class: [{
                        "right-inverse": "<ID" === e.elem
                    }, {
                        disable: !e.arResult.arFields.CODE
                    }],
                    attrs: {
                        link: "/blog/" + e.arResult.arFields.CODE,
                        typeBtn: e.className,
                        text: e.text
                    }
                })], 1)
            }),
            el = [],
            tl = {
                name: "GoToButton",
                props: {
                    id: String,
                    sectionId: String,
                    sort: String,
                    elem: String
                },
                components: {
                    BaseButton: ee
                },
                watch: {
                    id: function(e) {
                        var t = this;
                        this.arFilter[this.elem] = e, ">ID" === this.elem ? this.text = '<span>Следующая <span class="btn-mobile-hidden">статья</span></span>' : this.text = '<span>Предыдущая <span class="btn-mobile-hidden">статья</span></span>', P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(e) {
                            e.ITEMS ? t.arResult = e.ITEMS[0] : t.arResult.arFields.CODE = ""
                        }))
                    }
                },
                data: function() {
                    return {
                        arResult: {
                            arFields: {
                                CODE: {},
                                IBLOCK_SECTION_ID: {}
                            }
                        },
                        text: {},
                        sectionInfo: [],
                        arSort: {
                            SORT: this.sort
                        },
                        className: {},
                        arFilter: {
                            IBLOCK_ID: 18,
                            IBLOCK_SECTION_ID: this.sectionId,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"],
                        arNuvParam: {
                            nTopCount: 1
                        }
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("resize", this.handleResize), this.arFilter[this.elem] = this.id, ">ID" === this.elem ? this.text = '<span>Следующая <span class="btn-mobile-hidden">статья</span></span>' : this.text = '<span>Предыдущая <span class="btn-mobile-hidden">статья</span></span>', P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        t.ITEMS ? e.arResult = t.ITEMS[0] : e.arResult.arFields.CODE = null
                    }))
                },
                methods: {
                    changeButton: function() {
                        window.innerWidth <= 768 ? this.className = "secondary-button" : this.className = "base-btn"
                    },
                    handleResize: function() {
                        this.changeButton()
                    }
                },
                mounted: function() {
                    this.changeButton()
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.handleResize)
                }
            },
            il = tl,
            sl = Object(A["a"])(il, Qo, el, !1, null, "74aa55e8", null),
            rl = sl.exports,
            al = {
                name: "BlogDetailedPage",
                mixins: [P, lt],
                components: {
                    Separator: z,
                    BaseButton: ee,
                    GoToButton: rl,
                    PopupCoolLightBox: Ps
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                watch: {
                    $route: function(e) {
                        var t = this;
                        this.changeCode = !0, this.animateBlogInfo = !0, window.setTimeout((function() {
                            return t.leavePage(e)
                        }), 1e3)
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e && this.startAnimation()
                    }
                },
                data: function() {
                    return {
                        arResult: {
                            arFields: {
                                NAME: {},
                                SECTION_INFO: {}
                            },
                            arProperty: {}
                        },
                        arInfoBlock: {
                            arProperty: {}
                        },
                        sectionInfo: [],
                        elementVisibleScroll: {
                            title: {},
                            date: {},
                            detailText: {},
                            section: {},
                            next: {},
                            prev: {}
                        },
                        arFilters: {},
                        gallery: [],
                        className: {},
                        showAfterIntro: !0,
                        arElementsShow: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 18,
                            ACTIVE: "Y",
                            CODE: this.$route.params.code
                        },
                        arSelect: ["ID", "NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL", "DETAIL_TEXT", "CREATED_DATE", "IBLOCK_SECTION_ID"],
                        arNuvParam: {},
                        fixedBtn: !1,
                        changeCode: !1,
                        animateBlogInfo: !1
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".blog-detail-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible);
                        for (var i in this.elementVisibleScroll)
                            if (this.elementVisibleScroll[i].visible) {
                                if (this.elementVisibleScroll[i].selectID.indexOf("selectorText") > -1) {
                                    var s = document.querySelector(this.elementVisibleScroll[i].selectID);
                                    s && s.classList.add("moveTop")
                                } else if (this.elementVisibleScroll[i].selectID.indexOf("selectorImg") > -1) {
                                    var r = document.querySelector(this.elementVisibleScroll[i].selectID);
                                    r && r.classList.add("show-img-project")
                                }
                            } else if (this.elementVisibleScroll[i].selectID)
                            if (this.elementVisibleScroll[i].selectID.indexOf("selectorText") > -1) {
                                var a = document.querySelector(this.elementVisibleScroll[i].selectID);
                                a && a.classList.remove("moveTop")
                            } else if (this.elementVisibleScroll[i].selectID.indexOf("selectorImg") > -1) {
                            var o = document.querySelector(this.elementVisibleScroll[i].selectID);
                            o && o.classList.remove("show-img-project")
                        }
                    },
                    setTagColor: function(e) {
                        return {
                            "tag-green": 16 == e,
                            "tag-blue": 15 == e
                        }
                    },
                    handleResize: function() {
                        this.startAnimation()
                    },
                    format_date: function(e) {
                        if (e) {
                            var t = e.split("."),
                                i = Number(t[1]) - 1,
                                s = new Date(t[0], i, t[2]);
                            return Ka.a.locale("ru"), Ka()(String(s)).format("DD MMMM YYYY")
                        }
                    },
                    leavePage: function(e) {
                        var t = this;
                        this.arFilter.CODE = e.params.code, window.scrollTo(0, 0), P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(e) {
                            t.arResult = e.ITEMS[0], ai.methods.set(t.arResult, "detail"), t.sectionInfo = e.infoBlock.SECTION_LIST, e.ITEMS[0].arFields.DETAIL_TEXT.length > 0 && (t.getGalleryFromText(e.ITEMS[0].arFields.DETAIL_TEXT), t.getHTMLChildren(e.ITEMS[0].arFields.DETAIL_TEXT)), t.animateBlogInfo = !1
                        }))
                    },
                    openLightBox: function(e) {
                        for (var t in this.gallery) this.gallery[t]["src"] === e && this.$store.dispatch("receiveArSrcImg", {
                            ind: Number(t)
                        })
                    },
                    getHTMLChildren: function(e) {
                        var t = document.createElement("div");
                        t.innerHTML = e;
                        for (var i = t.querySelectorAll("p, li, div.list-item, h2, h3, h4, h5"), s = t.querySelectorAll("div.preview-img"), r = 0, a = i.length; r < a; r++) i[r].setAttribute("showScroll", "selectorText" + r), this.$set(this.elementVisibleScroll, "selectorText" + r, {});
                        for (var o = 0, l = s.length; o < l; o++) s[o].setAttribute("showScroll", "selectorImg" + o), this.$set(this.elementVisibleScroll, "selectorImg" + o, {});
                        this.arResult.arFields.DETAIL_TEXT = t.innerHTML, this.startAnimation()
                    },
                    getGalleryFromText: function(e) {
                        var t = /<img[^>]+>/gi,
                            i = /title=(\\"|'|")(.*)\1/i,
                            s = /(src)=(\\"|'|")([^"]*)\2/i,
                            r = e.match(t);
                        if (r)
                            for (var a in r) {
                                var o = r[a].match(s),
                                    l = r[a].match(i),
                                    n = parseInt(a) + 1,
                                    c = "";
                                c = l ? l[2] + "<span class='index-counter'>" + n + "/" + r.length + "</span>" : "<span class='index-counter'>" + n + "/" + r.length + "</span>", this.gallery[a] = {
                                    src: o[3],
                                    title: c
                                }
                            }
                    },
                    handleClicks: function(e) {
                        var t = e.target;
                        while (t && "A" !== t.tagName) t = t.parentNode;
                        if (t && t.matches(".blog-text a:not([href*='://'])") && t.href) {
                            var i = e.altKey,
                                s = e.ctrlKey,
                                r = e.metaKey,
                                a = e.shiftKey,
                                o = e.button,
                                l = e.defaultPrevented;
                            if (r || i || s || a) return;
                            if (l) return;
                            if (void 0 !== o && 0 !== o) return;
                            if (t && t.getAttribute) {
                                var n = t.getAttribute("target");
                                if (/\b_blank\b/i.test(n)) return
                            }
                            var c = new URL(t.href),
                                h = c.pathname;
                            window.location.pathname !== h && e.preventDefault && (e.preventDefault(), this.$router.push(h))
                        }
                        this.openLightBox(e.target.src)
                    }
                },
                created: function() {
                    var e = this;
                    this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorGray"
                    }), window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        "undefined" != typeof t.ITEMS ? (e.arResult = t.ITEMS[0], ai.methods.set(e.arResult, "detail"), e.sectionInfo = t.infoBlock.SECTION_LIST, t.ITEMS[0].arFields.DETAIL_TEXT.length > 0 && (e.getGalleryFromText(t.ITEMS[0].arFields.DETAIL_TEXT), e.getHTMLChildren(t.ITEMS[0].arFields.DETAIL_TEXT))) : e.$router.push("/404")
                    }))
                },
                destroyed: function() {
                    this.$store.dispatch("receiveAppClass", {
                        appClass: ""
                    }), window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                }
            },
            ol = al,
            ll = Object(A["a"])(ol, Jo, Zo, !1, null, "d6c91e88", null),
            nl = ll.exports,
            cl = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "partner-detail-page container",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios && !e.changeCode
                    }, {
                        "change-screen": e.changeCode
                    }]
                }, [i("div", {
                    staticClass: "main-title-block"
                }, [e.arResult.arProperty.FULL_NAME ? i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(e._s(e.arResult.arProperty.FULL_NAME.VALUE))]) : e._e(), e.arResult.arFields.PREVIEW_PICTURE ? i("div", {
                    staticClass: "main-logo",
                    class: [{
                        moveTop: e.elementVisibleScroll.logo.visible
                    }],
                    attrs: {
                        showScroll: "logo"
                    }
                }, [i("img", {
                    attrs: {
                        src: e.$hostname + e.arResult.arFields.PREVIEW_PICTURE_INFO.SRC
                    }
                })]) : e._e()]), i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "col-xl-7 col-23 title-block"
                }, [e.arResult.arProperty.PRODUCT_LOGO ? i("div", {
                    staticClass: "product-logo",
                    class: [{
                        moveTop: e.elementVisibleScroll.productLogo.visible
                    }],
                    attrs: {
                        showScroll: "productLogo"
                    }
                }, [i("img", {
                    attrs: {
                        src: e.$hostname + e.arResult.arProperty.PRODUCT_LOGO.FILE_INFO.SRC,
                        alt: ""
                    }
                })]) : e._e(), e.arResult.arProperty.TAGLINE ? i("div", {
                    staticClass: "tagline",
                    class: [{
                        moveTop: e.elementVisibleScroll.tagline.visible
                    }],
                    attrs: {
                        showScroll: "tagline"
                    }
                }, [i("span", [e._v(e._s(e.arResult.arProperty.TAGLINE.VALUE))])]) : e._e()]), i("div", {
                    staticClass: "col-xl-16 offset-xl-0 offset-md-5 col-md-18 col-23 article"
                }, [i("div", {
                    staticClass: "block-text-container"
                }, [e.arResult.arFields.DETAIL_TEXT ? i("div", {
                    staticClass: "blog-text",
                    domProps: {
                        innerHTML: e._s(e.arResult.arFields.DETAIL_TEXT)
                    },
                    on: {
                        click: e.handleClicks
                    }
                }) : e._e()])])]), e.gallery ? i("popup-cool-light-box", {
                    attrs: {
                        elems: e.gallery
                    }
                }) : e._e()], 1)
            },
            hl = [],
            dl = {
                name: "PartnerDetail",
                mixins: [P],
                components: {
                    Separator: z,
                    PopupCoolLightBox: Ps
                },
                data: function() {
                    return {
                        elementVisibleScroll: {
                            title: {},
                            logo: {},
                            detailText: {},
                            productLogo: {},
                            tagline: {}
                        },
                        showAfterIntro: !0,
                        arElementsShow: [],
                        arResult: {
                            arProperty: {},
                            arFields: {
                                PREVIEW_PICTURE: [],
                                DETAIL_TEXT: "",
                                NAME: "",
                                PREVIEW_PICTURE_INFO: {}
                            }
                        },
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 12,
                            ACTIVE: "Y",
                            CODE: this.$route.params.code
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_PAGE_URL", "DETAIL_TEXT"],
                        arNuvParam: {},
                        gallery: [],
                        changeCode: !1
                    }
                },
                watch: {
                    $route: function(e) {
                        var t = this;
                        this.changeCode = !0, this.arFilter.CODE = e.params.code, window.setTimeout((function() {
                            P.methods.GetList(t.arSort, t.arFilter, !1, t.arNuvParam, t.arSelect).then((function(e) {
                                t.arResult = e.ITEMS[0], ai.methods.set(t.arResult, "detail"), t.$store.dispatch("receiveCheckPosition")
                            })), t.changeCode = !1
                        }), 1e3)
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e && this.startAnimation()
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".partner-detail-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible);
                        for (var i in this.elementVisibleScroll)
                            if (this.elementVisibleScroll[i].visible) {
                                if (this.elementVisibleScroll[i].selectID.indexOf("selectorText") > -1) {
                                    var s = document.querySelector(this.elementVisibleScroll[i].selectID);
                                    s && s.classList.add("moveTop")
                                } else if (this.elementVisibleScroll[i].selectID.indexOf("selectorImg") > -1) {
                                    var r = document.querySelector(this.elementVisibleScroll[i].selectID);
                                    r && r.classList.add("show-img-project")
                                } else if (this.elementVisibleScroll[i].selectID.indexOf("selectorVid") > -1) {
                                    var a = document.querySelector(this.elementVisibleScroll[i].selectID);
                                    a && a.classList.add("opacity-animate")
                                }
                            } else if (this.elementVisibleScroll[i].selectID)
                            if (this.elementVisibleScroll[i].selectID.indexOf("selectorText") > -1) {
                                var o = document.querySelector(this.elementVisibleScroll[i].selectID);
                                o && o.classList.remove("moveTop")
                            } else if (this.elementVisibleScroll[i].selectID.indexOf("selectorImg") > -1) {
                            var l = document.querySelector(this.elementVisibleScroll[i].selectID);
                            l && l.classList.remove("show-img-project")
                        } else if (this.elementVisibleScroll[i].selectID.indexOf("selectorVid") > -1) {
                            var n = document.querySelector(this.elementVisibleScroll[i].selectID);
                            n && n.classList.remove("opacity-animate")
                        }
                    },
                    handleResize: function() {
                        this.startAnimation()
                    },
                    openLightBox: function(e) {
                        for (var t in this.gallery) this.gallery[t]["src"] === e && this.$store.dispatch("receiveArSrcImg", {
                            ind: Number(t)
                        })
                    },
                    getHTMLChildren: function(e) {
                        var t = document.createElement("div");
                        t.innerHTML = e;
                        for (var i = t.querySelectorAll("p, li, div.list-item, h2, h3, h4, h5"), s = t.querySelectorAll("div.preview-img"), r = t.querySelectorAll("div.video-block"), a = 0, o = i.length; a < o; a++) i[a].setAttribute("showScroll", "selectorText" + a), this.$set(this.elementVisibleScroll, "selectorText" + a, {});
                        for (var l = 0, n = s.length; l < n; l++) s[l].setAttribute("showScroll", "selectorImg" + l), this.$set(this.elementVisibleScroll, "selectorImg" + l, {});
                        for (var c = 0, h = r.length; c < h; c++) r[c].setAttribute("showScroll", "selectorVid" + c), this.$set(this.elementVisibleScroll, "selectorVid" + c, {});
                        this.arResult.arFields.DETAIL_TEXT = t.innerHTML, this.startAnimation()
                    },
                    getGalleryFromText: function(e) {
                        var t = {},
                            i = /<img[^>]+>/gi,
                            s = /title=(\\"|'|")(.*)\1/i,
                            r = /(src)=(\\"|'|")([^"]*)\2/i,
                            a = e.match(i);
                        if (a.length > 0)
                            for (var o in a) {
                                var l = a[o].match(r),
                                    n = a[o].match(s),
                                    c = parseInt(o) + 1;
                                t["title"] = n ? n[2] + "<span class='index-counter'>" + c + "/" + a.length + "</span>" : "<span class='index-counter'>" + c + "/" + a.length + "</span>", t["src"] = l[3], this.$set(this.gallery, o, t), t = {}
                            }
                    },
                    handleClicks: function(e) {
                        var t = e.target;
                        while (t && "A" !== t.tagName) t = t.parentNode;
                        if (t && t.matches(".blog-text a:not([href*='://'])") && t.href) {
                            var i = e.altKey,
                                s = e.ctrlKey,
                                r = e.metaKey,
                                a = e.shiftKey,
                                o = e.button,
                                l = e.defaultPrevented;
                            if (r || i || s || a) return;
                            if (l) return;
                            if (void 0 !== o && 0 !== o) return;
                            if (t && t.getAttribute) {
                                var n = t.getAttribute("target");
                                if (/\b_blank\b/i.test(n)) return
                            }
                            var c = new URL(t.href),
                                h = c.pathname;
                            window.location.pathname !== h && e.preventDefault && (e.preventDefault(), this.$router.push(h))
                        }
                        this.openLightBox(e.target.src)
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        "undefined" != typeof t.ITEMS ? (e.arResult = t.ITEMS[0], e.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorLightGray",
                            showSeparator: !0
                        }), e.$store.dispatch("receiveCheckPosition"), ai.methods.set(e.arResult, "detail"), t.ITEMS[0].arFields.DETAIL_TEXT.length > 0 && (e.getGalleryFromText(t.ITEMS[0].arFields.DETAIL_TEXT), e.getHTMLChildren(t.ITEMS[0].arFields.DETAIL_TEXT))) : e.$router.push("/404")
                    }))
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize), this.$store.dispatch("receiveAppClass", {
                        appClass: "",
                        showSeparator: !0
                    })
                }
            },
            ul = dl,
            ml = Object(A["a"])(ul, cl, hl, !1, null, "113fcd25", null),
            pl = ml.exports,
            vl = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "container error-page",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios
                    }]
                }, [i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v("Страница не найдена")]), i("separator", {
                    attrs: {
                        show: !0
                    }
                }), i("div", {
                    staticClass: "error-container"
                }, [i("div", {
                    staticClass: "text-block col-xl-8"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "title",
                    class: [{
                        moveTop: e.elementVisibleScroll.underTitle.visible
                    }],
                    attrs: {
                        showScroll: "underTitle"
                    }
                }, [e._v("кажется, вы потерялись")]), i("p", {
                    class: [{
                        moveTop: e.elementVisibleScroll.textUnderTitle.visible
                    }],
                    attrs: {
                        showScroll: "textUnderTitle"
                    }
                }, [e._v("используйте карту, чтобы найти нужную страницу, или вернитесь на главную")])]), i("base-button", {
                    class: [{
                        "show-button": e.elementVisibleScroll.button.visible
                    }],
                    attrs: {
                        text: "на главную",
                        link: "/",
                        typeBtn: "base-btn",
                        showScroll: "button"
                    }
                })], 1), 1200 === e.windowWidth ? i("div", {
                    staticClass: "offset-7 col-16"
                }, [i("icon-base", {
                    attrs: {
                        width: 1304,
                        height: 709
                    }
                }, [i("error-desc", {
                    on: {
                        clickPath: function(t) {
                            return e.routeDetailPage(t)
                        }
                    }
                })], 1)], 1) : e._e(), 768 === e.windowWidth ? i("icon-base", {
                    attrs: {
                        width: 729,
                        height: 531
                    }
                }, [i("error-tablet", {
                    on: {
                        clickPath: function(t) {
                            return e.routeDetailPage(t)
                        }
                    }
                })], 1) : e._e(), 414 === e.windowWidth ? i("icon-base", {
                    attrs: {
                        width: 396,
                        height: 610
                    }
                }, [i("error-mobile", {
                    on: {
                        clickPath: function(t) {
                            return e.routeDetailPage(t)
                        }
                    }
                })], 1) : e._e()], 1)], 1)
            },
            Sl = [],
            fl = {
                name: "NotFound",
                mixins: [lt],
                components: {
                    BaseButton: ee,
                    Separator: z,
                    ErrorMobile: So,
                    ErrorDesc: co,
                    IconBase: xe,
                    ErrorTablet: To
                },
                data: function() {
                    return {
                        elementVisibleScroll: {
                            title: {},
                            button: {},
                            underTitle: {},
                            textUnderTitle: {},
                            text: {}
                        },
                        showAfterIntro: !0,
                        arElementsShow: [],
                        windowWidth: 1200
                    }
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                watch: {
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e && (this.startAnimation(), this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorLightGray",
                            showSeparator: !0
                        }))
                    }
                },
                methods: {
                    routeDetailPage: function(e) {
                        "" !== e && "javascript:void(0);" !== e && this.$router.push(e)
                    },
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".error-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e), this.$store.dispatch("receiveCheckPosition")
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible)
                    },
                    handleResize: function() {
                        window.innerWidth > 1199 ? this.windowWidth = 1200 : window.innerWidth > 767 ? this.windowWidth = 768 : this.windowWidth = 414, this.startAnimation()
                    }
                },
                created: function() {
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), window.innerWidth > 1199 ? this.windowWidth = 1200 : window.innerWidth > 767 ? this.windowWidth = 768 : this.windowWidth = 414
                },
                mounted: function() {
                    this.getProgressAxios.statusResponseAxios && (this.startAnimation(), this.$store.dispatch("receiveAppClass", {
                        appClass: "bgColorLightGray",
                        showSeparator: !0
                    }))
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize), this.$store.dispatch("receiveAppClass", {
                        appClass: "",
                        showSeparator: !0
                    })
                }
            },
            El = fl,
            Cl = Object(A["a"])(El, vl, Sl, !1, null, "7360060a", null),
            gl = Cl.exports,
            bl = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "privacy-policy-page container article",
                    class: [{
                        stopAnimation: !e.getProgressAxios.statusResponseAxios && !e.changeCode
                    }]
                }, [i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "col-23 title-block"
                }, [i("h1", {
                    class: [{
                        moveTop: e.elementVisibleScroll.title.visible
                    }],
                    attrs: {
                        showScroll: "title"
                    }
                }, [e._v(e._s(e.$route.name))])]), i("separator", {
                    staticClass: "col-23",
                    attrs: {
                        show: !0,
                        "static-separator": !0
                    }
                }), i("div", {
                    staticClass: "col-xl-7 col-23 title-block",
                    class: {
                        "change-screen": e.animateText
                    }
                }, [e.arResult.arFields.NAME ? i("h2", {
                    class: [{
                        moveTop: e.elementVisibleScroll.name.visible
                    }],
                    attrs: {
                        showScroll: "name"
                    }
                }, [e._v(e._s(e.arResult.arFields.NAME))]) : e._e()]), i("div", {
                    staticClass: "col-xl-16 offset-xl-0 offset-md-5 col-md-18 col-23 article"
                }, [i("div", {
                    staticClass: "blog-text",
                    domProps: {
                        innerHTML: e._s(e.arResult.arFields.DETAIL_TEXT)
                    }
                })])], 1)])
            },
            Tl = [],
            Pl = {
                name: "PrivacyPolicyPage",
                mixins: [P, lt],
                components: {
                    Separator: z
                },
                computed: {
                    getProgressAxios: function() {
                        return this.$store.getters.getProgressAxios
                    }
                },
                watch: {
                    $route: function(e) {
                        var t = this;
                        this.changeCode = !0, this.animateText = !0, window.setTimeout((function() {
                            return t.leavePage(e)
                        }), 1e3)
                    },
                    "getProgressAxios.statusResponseAxios": function(e) {
                        e && (this.startAnimation(), this.$store.dispatch("receiveAppClass", {
                            appClass: "bgColorLightGray",
                            showSeparator: !0
                        }))
                    }
                },
                data: function() {
                    return {
                        arResult: {
                            arFields: {
                                NAME: {}
                            }
                        },
                        elementVisibleScroll: {
                            title: {},
                            name: {}
                        },
                        showAfterIntro: !0,
                        arElementsShow: [],
                        arSort: {
                            SORT: "ASC"
                        },
                        arFilter: {
                            IBLOCK_ID: 20,
                            ACTIVE: "Y"
                        },
                        arSelect: ["NAME", "CODE", "PREVIEW_PICTURE", "DETAIL_TEXT"],
                        arNuvParam: {},
                        changeCode: !1,
                        animateText: !1
                    }
                },
                methods: {
                    handleScroll: function() {
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    startAnimation: function() {
                        this.arElementsShow = lt.methods.GetElements(".privacy-policy-page");
                        var e = lt.methods.comparisonPosition(this.arElementsShow);
                        this.setObjectAnimation(e)
                    },
                    setObjectAnimation: function(e) {
                        for (var t in this.arElementsShow) this.$set(this.elementVisibleScroll, t, this.arElementsShow[t]), "boolean" === typeof e ? this.$set(this.elementVisibleScroll[t], "visible", e) : this.$set(this.elementVisibleScroll[t], "visible", e[t].visible);
                        for (var i in this.elementVisibleScroll)
                            if (this.elementVisibleScroll[i].visible) {
                                if (this.elementVisibleScroll[i].selectID.indexOf("selectorText") > -1) {
                                    var s = document.querySelector(this.elementVisibleScroll[i].selectID);
                                    s && s.classList.add("moveTop")
                                }
                            } else if (this.elementVisibleScroll[i].selectID && this.elementVisibleScroll[i].selectID.indexOf("selectorText") > -1) {
                            var r = document.querySelector(this.elementVisibleScroll[i].selectID);
                            r && r.classList.remove("moveTop")
                        }
                    },
                    handleResize: function() {
                        this.startAnimation()
                    },
                    leavePage: function(e) {
                        var t = this;
                        this.arFilter.CODE = e.params.code, window.scrollTo(0, 0), P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(e) {
                            t.arResult = e.ITEMS[0], t.sectionInfo = e.infoBlock.SECTION_LIST, e.ITEMS[0].arFields.DETAIL_TEXT.length > 0 && t.getHTMLChildren(e.ITEMS[0].arFields.DETAIL_TEXT), t.animateText = !1
                        }))
                    },
                    getHTMLChildren: function(e) {
                        var t = document.createElement("div");
                        t.innerHTML = e;
                        for (var i = t.querySelectorAll("p, li, div.list-item, h2, h3, h4, h5"), s = 0, r = i.length; s < r; s++) i[s].setAttribute("showScroll", "selectorText" + s), this.$set(this.elementVisibleScroll, "selectorText" + s, {});
                        this.arResult.arFields.DETAIL_TEXT = t.innerHTML, this.startAnimation()
                    },
                    handleClicks: function(e) {
                        var t = e.target;
                        while (t && "A" !== t.tagName) t = t.parentNode;
                        if (t && t.matches(".blog-text a:not([href*='://'])") && t.href) {
                            var i = e.altKey,
                                s = e.ctrlKey,
                                r = e.metaKey,
                                a = e.shiftKey,
                                o = e.button,
                                l = e.defaultPrevented;
                            if (r || i || s || a) return;
                            if (l) return;
                            if (void 0 !== o && 0 !== o) return;
                            if (t && t.getAttribute) {
                                var n = t.getAttribute("target");
                                if (/\b_blank\b/i.test(n)) return
                            }
                            var c = new URL(t.href),
                                h = c.pathname;
                            window.location.pathname !== h && e.preventDefault && (e.preventDefault(), this.$router.push(h))
                        }
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), P.methods.GetList(this.arSort, this.arFilter, !1, this.arNuvParam, this.arSelect).then((function(t) {
                        e.arResult = t.ITEMS[0], t.ITEMS[0].arFields.DETAIL_TEXT.length > 0 && e.getHTMLChildren(t.ITEMS[0].arFields.DETAIL_TEXT)
                    }))
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize), this.$store.dispatch("receiveAppClass", {
                        appClass: "",
                        showSeparator: !0
                    })
                }
            },
            wl = Pl,
            _l = Object(A["a"])(wl, bl, Tl, !1, null, "417dcaa3", null),
            Al = _l.exports;
        i("b144"), i("3709");
        s["default"].use(p["a"], m), s["default"].config.productionTip = !1;
        var Il = {
            main: {
                path: "/",
                component: ks,
                name: "Главная"
            },
            projects: {
                path: "/projects/",
                component: wi,
                name: "Проекты",
                meta: {
                    title: "Проекты",
                    keywords: "тестовые проекты"
                }
            },
            projectDetailed: {
                path: "/projects/:code",
                component: Sr,
                name: "detail_project"
            },
            works: {
                path: "/works/",
                component: Tr,
                name: "Наши работы"
            },
            worksDetailed: {
                path: "/works/:code",
                component: Kr,
                name: "detail_work"
            },
            price: {
                path: "/price/",
                component: fa,
                name: "Цены"
            },
            contacts: {
                path: "/contacts/",
                component: Ua,
                name: "Контакты"
            },
            blog: {
                path: "/blog/",
                component: to,
                name: "Блог"
            },
            blogDetailed: {
                path: "/blog/:code",
                component: nl,
                name: "detail_blog"
            },
            favourites: {
                path: "/favourites/",
                component: Ao,
                name: "Избранное"
            },
            privacyPolicy: {
                path: "/privacy-policy",
                component: Al,
                name: "Политика конфиденциальности"
            },
            partnerDetail: {
                path: "/partners/:code",
                component: pl,
                name: "Партнеры"
            },
            partnerRed: {
                path: "/partners/",
                redirect: "/#PartnerMainPage",
                component: ks
            },
            company: {
                path: "/company/",
                component: qo,
                name: "О нас"
            },
            service: {
                path: "/services/:code",
                component: Fa,
                name: "Услуги",
                idBlock: 11
            },
            error: {
                path: "*",
                component: gl,
                name: "404"
            }
        };
        s["default"].prototype.$topMenu = [Il.projects, Il.works, Il.service, Il.price, Il.company, Il.contacts];
        var Rl = [],
            Ll = 0;
        for (var Ol in Il) Rl[Ll++] = Il[Ol];
        var yl = new p["a"]({
            mode: "history",
            routes: Rl,
            scrollBehavior: function(e, t, i) {
                if (i) return new Promise((function(e) {
                    setTimeout((function() {
                        e(i)
                    }), 1e3)
                }))
            }
        });
        s["default"].use(ti.a, {
            id: 40301710,
            router: yl,
            env: "production",
            options: {
                webvisor: !0,
                clickmap: !0
            }
        }), s["default"].prototype.$hostname = "https://doma-veka.ru";
        var xl = document.location.protocol + "//" + document.location.host;
        xl === s["default"].prototype.$hostname && (s["default"].prototype.$hostname = ""), new s["default"]({
            store: m,
            router: yl,
            render: function(e) {
                return e(Qt)
            }
        }).$mount("#app")
    },
    5825: function(e, t, i) {},
    "90ed": function(e, t, i) {
        "use strict";
        i("5825")
    },
    "9b19": function(e, t, i) {
        e.exports = i.p + "img/logo.057820d7.svg"
    },
    b144: function(e, t, i) {},
    c23d: function(e, t, i) {
        e.exports = i.p + "img/map-marker.4ef5f7f8.svg"
    },
    c633: function(e, t, i) {
        e.exports = i.p + "img/arrow-left.a4fc74cf.svg"
    },
    d565: function(e, t, i) {
        e.exports = i.p + "img/triangle-down.9466b13b.svg"
    },
    dc76: function(e, t, i) {
        e.exports = i.p + "img/logo-sagirov.5198b523.svg"
    },
    e770: function(e, t, i) {
        e.exports = i.p + "img/search-btn.d8fda301.svg"
    },
    f989: function(e, t, i) {
        e.exports = i.p + "img/logoText.c7397a91.svg"
    }
});
//# sourceMappingURL=app.7fb84251.js.map