﻿!function () { try { var i = { init: function () { this.initEvent() }, initEvent: function () { this.addCur(".j-tab-wrap", ".tab-item"), this.addCur(".dropdown-wrap", ".slider-item") }, addCur: function (i, t) { 0 == $(i).find(t + ".cur").length && $(i).find(t).eq(0).addClass("cur") } }; i.init() } catch (t) { } }();