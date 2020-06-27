// JavaScript Document

//棣栭〉蹇€熸寕鍙烽€夋嫨鍖婚櫌涓嬫媺鑿滃崟

$(function () {

	$(".nav p").click(function () {
		var ul = $(".new");
		if (ul.css("display") == "none") {
			ul.slideDown();
		} else {
			ul.slideUp();
		}
	});

	$(".set").click(function () {
		var _name = $(this).attr("name");
		if ($("[name=" + _name + "]").length > 1) {
			$("[name=" + _name + "]").removeClass("select");
			$(this).addClass("select");
		} else {
			if ($(this).hasClass("select")) {
				$(this).removeClass("select");
			} else {
				$(this).addClass("select");
			}
		}
	});

	$(".nav li").click(function () {
		var li = $(this).text();
		var li2 = $(this).attr('rel');
		$(".nav p").html(li).attr('rel', li2);
		$(".new").hide();
		/*$(".set").css({background:'none'});*/
		$("p").removeClass("select");
	});
})

//棣栭〉蹇€熸寕鍙烽€夋嫨绉戝涓嬫媺鑿滃崟

$(function () {

	$(".nav1 p").click(function () {
		var ul = $(".new1");
		if (ul.css("display") == "none") {
			ul.slideDown();
		} else {
			ul.slideUp();
		}
	});

	$(".set1").click(function () {
		var _name = $(this).attr("name");
		if ($("[name=" + _name + "]").length > 1) {
			$("[name=" + _name + "]").removeClass("select1");
			$(this).addClass("select1");
		} else {
			if ($(this).hasClass("select1")) {
				$(this).removeClass("select1");
			} else {
				$(this).addClass("select1");
			}
		}
	});

	$(".nav1 li").click(function () {
		var li = $(this).text();
		$(".nav1 p").html(li);
		$(".new1").hide();
		/*$(".set").css({background:'none'});*/
		$("p").removeClass("select1");
	});
})

//棣栭〉蹇€熸寕鍙烽€夋嫨鍖荤敓涓嬫媺鑿滃崟

$(function () {

	$(".nav2 p").click(function () {
		var ul = $(".new2");
		if (ul.css("display") == "none") {
			ul.slideDown();
		} else {
			ul.slideUp();
		}
	});

	$(".set2").click(function () {
		var _name = $(this).attr("name");
		if ($("[name=" + _name + "]").length > 1) {
			$("[name=" + _name + "]").removeClass("select2");
			$(this).addClass("select2");
		} else {
			if ($(this).hasClass("select2")) {
				$(this).removeClass("select2");
			} else {
				$(this).addClass("select2");
			}
		}
	});

	$(".nav2 li").click(function () {
		var li = $(this).text();
		$(".nav2 p").html(li);
		$(".new2").hide();
		/*$(".set").css({background:'none'});*/
		$("p").removeClass("select2");
	});
})


//棣栭〉澶撮儴鍒囨崲鍩庡競涓嬫媺鑿滃崟


//棣栭〉瀵艰埅棰勭害鎸傚彿涓嬫媺鑿滃崟

$(function () {

	$(".yuyuenav p").mouseover(function () {
		var ul = $(".yuyuenew");
		if (ul.css("display") == "none") {
			ul.slideDown();
		}
	});

	$(".yuyueset").click(function () {
		var _name = $(this).attr("name");
		if ($("[name=" + _name + "]").length > 1) {
			$("[name=" + _name + "]").removeClass("yuyueselect");
			$(this).addClass("yuyueselect");
		} else {
			if ($(this).hasClass("yuyueselect")) {
				$(this).removeClass("yuyueselect");
			} else {
				$(this).addClass("yuyueselect");
			}
		}
	});

	$(".yuyuenav li").click(function () {
		var li = $(this).text();
		$(".yuyuenew").hide();
		/*$(".set").css({background:'none'});*/
		$("p").removeClass("yuyueselect");
	});
	$(".yuyuenav").mouseover(function () {
		$('.yuyuenew').show();
	});
	// $(".yuyuenav").mouseout(function(){
	// 	$('.yuyuenew').hide();
	// });
	$(".yuyuenew").mouseout(function () {
		$(this).hide();
	});
	$(".yuyueset").mouseout(function () {
		$('.yuyuenew').hide();
	});
})

//棣栭〉澶撮儴鎴戠殑棰勭害涓嬫媺鑿滃崟

$(function () {

	$(".menuregnav p").mouseover(function () {
		$(".menuregnew").slideDown();
		$(this).removeClass('menuregset').addClass('menuregselect');
	}).mouseout(function () {
		$(".menuregnew").hide();
		$(this).removeClass('menuregselect').addClass('menuregset');
	});

	$(".menureglist").mouseover(function () {
		$(".menuregnew").show();
		$(".menuregnav p").removeClass('menuregset').addClass('menuregselect');
	}).mouseout(function () {
		$(".menuregnew").hide();
		$(".menuregnav p").removeClass('menuregselect').addClass('menuregset');
	});

	$(".menuregset").click(function () {
		var _name = $(this).attr("name");
		if ($("[name=" + _name + "]").length > 1) {
			$("[name=" + _name + "]").removeClass("menuregselect");
			$(this).addClass("menuregselect");
		} else {
			if ($(this).hasClass("menuregselect")) {
				$(this).removeClass("menuregselect");
			} else {
				$(this).addClass("menuregselect");
			}
		}
	});

	$(".menuregnav li").click(function () {
		var li = $(this).text();
		$(".menuregnew").hide();
		/*$(".set").css({background:'none'});*/
		$("p").removeClass("menuregselect");
	});
})