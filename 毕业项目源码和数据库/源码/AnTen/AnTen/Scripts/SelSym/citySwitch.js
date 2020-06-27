$(function () {
	$(".citynav p").mouseover(function () {
		$(".citynew").slideDown();
	}).mouseout(function () {
		$(".citynew").hide();
	});

	$(".citylist").mouseover(function () {
		$('.citynew').hide();
	}).mouseout(function () {
		$(".citynew").hide();
	});

	$(".cityset").click(function () {
		var _name = $(this).attr("name");
		if ($("[name=" + _name + "]").length > 1) {
			$("[name=" + _name + "]").removeClass("cityselect");
			$(this).addClass("cityselect");
		} else {
			if ($(this).hasClass("cityselect")) {
				$(this).removeClass("cityselect");
			} else {
				$(this).addClass("cityselect");
			}
		}
	});
	$(".citynav li").click(function () {
		var li = $(this).text();
		var cid = $(this).attr("id");
		$(".citynew").hide();
		$("#cityname").html(li);
		$("p").removeClass("cityselect");
		$.getJSON(ROOT + "/Home/index/unsetcookie1.html?cityid=" + $(this).attr("id"), function (json) {
			if (json == '1') {
				location.href = ROOT + "/Home/Index/index/cityid/" + cid + ".html";
			}
		});


	});
})
