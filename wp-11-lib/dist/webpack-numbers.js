!function (e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r(require("lodash")) : "function" == typeof define && define.amd ? define(["lodash"], r) : "object" == typeof exports ? exports.webpackNumbers = r(require("lodash")) : e.webpackNumbers = r(e._)
}(window, function (e) {
    return function (e) {
        var r = {};

        function n(o) {
            if (r[o]) return r[o].exports;
            var t = r[o] = {i: o, l: !1, exports: {}};
            return e[o].call(t.exports, t, t.exports, n), t.l = !0, t.exports
        }

        return n.m = e, n.c = r, n.d = function (e, r, o) {
            n.o(e, r) || Object.defineProperty(e, r, {configurable: !1, enumerable: !0, get: o})
        }, n.r = function (e) {
            Object.defineProperty(e, "__esModule", {value: !0})
        }, n.n = function (e) {
            var r = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(r, "a", r), r
        }, n.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, n.p = "", n(n.s = 2)
    }([function (e) {
        e.exports = [{num: 1, word: "One"}, {num: 2, word: "Two"}, {num: 3, word: "Three"}, {
            num: 4,
            word: "Four"
        }, {num: 5, word: "Five"}, {num: 0, word: "Zero"}]
    }, function (r, n) {
        r.exports = e
    }, function (e, r, n) {
        "use strict";
        n.r(r), n.d(r, "numToWord", function () {
            return c
        }), n.d(r, "wordToNum", function () {
            return d
        });
        var o = n(1), t = n.n(o), u = n(0);

        function c(e) {
            return t.a.reduce(u, (r, n) => n.num === e ? n.word : r, "")
        }

        function d(e) {
            return t.a.reduce(u, (r, n) => n.word === e && e.toLowerCase() ? n.num : r, -1)
        }
    }])
});