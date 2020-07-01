//left menu
$(function () {
    $(".pullDownList li").hover(function () {
        $(".yMenuListCon").show();
        var index = $(this).index(".pullDownList li");
        $(this).addClass("menulihover").siblings().removeClass("menulihover");
        $(this).addClass("menuliselected").siblings().removeClass("menuliselected");
        $($(".yMenuListConin")[index]).show().siblings().hide();
    });

    $(".pullDown").mouseleave(function () {
        $(".yMenuListCon").hide();
        $(".yMenuListConin").hide();
        $(".pullDownList li").removeClass("menulihover").removeClass("menuliselected");
    })

    $(".nav_black").hover(function () {
        $(this).find("div.yHeader").show();
    }, function () {
        $(this).find("div.yHeader").hide();
    });/* left end*/


    //nav hover
    $(".header_links ul li").hover(function () {
        $(this).addClass("hover").find(".hidebox").show();
    }, function () {
        $(this).removeClass("hover").find(".hidebox").hide();
    });


    $(".share_click").hover(function () {
        $(this).addClass("hover").find(".share_con").show();
    }, function () {
        $(this).removeClass("hover").find(".share_con").hide();
    });
    $(".dpfx").hover(function () {
        $(this).next(".share_con").show();
    });
    $(".dpfx").parents(".right_property dl").hover(function () {
        $(this).find(".share_con").hide();
    })
});

//right Menu
$(function () {
    $(".webnav").hover(function () {
        $(this).addClass("hover").find("div.hidebox").show();
    }, function () {
        $(this).removeClass("hover").find("div.hidebox").hide();
    });
    //login dialog
    $(".login_click").click(function () {
        $(".login_dialog").fadeIn();
    });
    $(".login_dialog h1 a").click(function () {
        $(".login_dialog").fadeOut();
    });


})


$(function () {

    $('.tbar-tab-erweima').hover(function () {
        $(this).find('.footer-erweima').addClass("tbar-tab-footer2-hover");
        $(this).addClass("hover").find(".qrcode").show();
    }, function () {
        $(this).find('.footer-tab-text').removeClass("tbar-tab-footer2-hover");
        $(this).removeClass("hover").find(".qrcode").hide();
    });


    $('.toolbar-tab').hover(function () {
        $(this).find('.tab-text').addClass("tbar-tab-hover");
        $(this).find('.footer-tab-text').addClass("tbar-tab-footer-hover");
        $(this).addClass("tbar-tab-selected");
    }, function () {
        $(this).find('.tab-text').removeClass("tbar-tab-hover");
        $(this).find('.footer-tab-text').removeClass("tbar-tab-footer-hover");
        $(this).removeClass("tbar-tab-selected");
    });

    //close btn
    $('.toolbar-panel h1 a').click(function () {
        var info1 = "<em class='tab-text'>鎴戠殑甯愬彿</em>";
        $('.tbar-tab-myAccount').append(info1);
        var info2 = "<em class='tab-text'>鎴戠殑鍏虫敞</em>";
        $('.tbar-tab-follow').append(info2);
        var info3 = "<em class='tab-text'>鏈€杩戞祻瑙�</em>";
        $('.tbar-tab-recentBrowsing').append(info3);
        $('.toolbar-wrap').removeClass('toolbar-open');
        $('.toolbar-tab').removeClass('tbar-tab-click-selected');
        $(this).parents(".toolbar-panel").css({ 'visibility': "hidden", "z-index": "-1" });
    });

    $('.tbar-tab-myAccount').click(function () {
        $(this).siblings().removeClass('tbar-tab-click-selected');

        if ($('.toolbar-wrap').hasClass('toolbar-open')) {
            if ($(this).find('.tab-text').length > 0) {

                if (!$('.tbar-tab-follow').find('.tab-text').length > 0) {
                    var info = "<em class='tab-text'>鎴戠殑鍏虫敞</em>";
                    $('.tbar-tab-follow').append(info);
                    $('.tbar-panel-follow').css({ 'visibility': "hidden", "z-index": "-1" });
                }

                $('.tbar-panel-cart').css({ 'visibility': "hidden", "z-index": "-1" });

                if (!$('.tbar-tab-recentBrowsing').find('.tab-text').length > 0) {
                    var info = "<em class='tab-text'>鏈€杩戞祻瑙�</em>";
                    $('.tbar-tab-recentBrowsing').append(info);
                    $('.tbar-panel-recentBrowsing').css({ 'visibility': "hidden", "z-index": "-1" });
                }

                $(this).addClass('tbar-tab-click-selected');
                $(this).find('.tab-text').remove();
                $('.tbar-panel-myAccount').css({ 'visibility': "visible", "z-index": "1" });
            } else {
                $('.toolbar-wrap').removeClass('toolbar-open');
                var info = "<em class='tab-text'>鎴戠殑甯愬彿</em>";
                $(this).append(info);
                $(this).removeClass('tbar-tab-click-selected');
                $('.tbar-panel-myAccount').css({ 'visibility': "hidden", "z-index": "-1" });
            }

        } else {
            $(this).addClass('tbar-tab-click-selected');
            $(this).find('.tab-text').remove();
            $('.tbar-panel-myAccount').css({ 'visibility': "visible", "z-index": "1" });
            $('.tbar-panel-cart').css('visibility', 'hidden');
            $('.tbar-panel-follow').css('visibility', 'hidden');
            $('.tbar-panel-recentBrowsing').css('visibility', 'hidden');
            $('.toolbar-wrap').addClass('toolbar-open');
        }
    });

    $('.tbar-tab-cart').click(function () {
        $(this).siblings().removeClass('tbar-tab-click-selected');

        if ($('.toolbar-wrap').hasClass('toolbar-open')) {
            if (!$('.tbar-tab-myAccount').find('.tab-text').length > 0) {
                var info = "<em class='tab-text'>鎴戠殑甯愭埛</em>";
                $('.tbar-tab-myAccount').append(info);
                $('.tbar-panel-myAccount').css({ 'visibility': "hidden", "z-index": "-1" });
            }
            if (!$('.tbar-tab-follow').find('.tab-text').length > 0) {
                var info = "<em class='tab-text'>鎴戠殑鍏虫敞</em>";
                $('.tbar-tab-follow').append(info);
                $('.tbar-panel-follow').css({ 'visibility': "hidden", "z-index": "-1" });
            }
            if (!$('.tbar-tab-recentBrowsing').find('.tab-text').length > 0) {
                var info = "<em class='tab-text'>鏈€杩戞祻瑙�</em>";
                $('.tbar-tab-recentBrowsing').append(info);
                $('.tbar-panel-recentBrowsing').css({ 'visibility': "hidden", "z-index": "-1" });
            }
            $(this).addClass('tbar-tab-click-selected');
            $('.tbar-panel-cart').css({ 'visibility': "visible", "z-index": "1" });
        } else {
            $(this).addClass('tbar-tab-click-selected');
            $('.tbar-panel-myAccount').css('visibility', 'hidden');
            $('.tbar-panel-cart').css({ 'visibility': "visible", "z-index": "1" });
            $('.tbar-panel-follow').css('visibility', 'hidden');
            $('.tbar-panel-recentBrowsing').css('visibility', 'hidden');
            $('.toolbar-wrap').addClass('toolbar-open');
        }
    });

    $('.tbar-tab-follow').click(function () {
        $(this).siblings().removeClass('tbar-tab-click-selected');

        if ($('.toolbar-wrap').hasClass('toolbar-open')) {
            if ($(this).find('.tab-text').length > 0) {
                if (!$('.tbar-tab-myAccount').find('.tab-text').length > 0) {
                    var info = "<em class='tab-text'>鎴戠殑甯愭埛</em>";
                    $('.tbar-tab-myAccount').append(info);
                    $('.tbar-panel-myAccount').css({ 'visibility': "hidden", "z-index": "-1" });
                }

                $('.tbar-panel-cart').css({ 'visibility': "hidden", "z-index": "-1" });

                if (!$('.tbar-tab-recentBrowsing').find('.tab-text').length > 0) {
                    var info = "<em class='tab-text'>鏈€杩戞祻瑙�</em>";
                    $('.tbar-tab-recentBrowsing').append(info);
                    $('.tbar-panel-recentBrowsing').css({ 'visibility': "hidden", "z-index": "-1" });
                }
                $(this).addClass('tbar-tab-click-selected');
                $(this).find('.tab-text').remove();
                $('.tbar-panel-follow').css({ 'visibility': "visible", "z-index": "1" });

            } else {
                var info = "<em class='tab-text'>鎴戠殑鍏虫敞</em>";
                $('.toolbar-wrap').removeClass('toolbar-open');
                $(this).append(info);
                $(this).removeClass('tbar-tab-click-selected');
                $('.tbar-panel-follow').css({ 'visibility': "hidden", "z-index": "-1" });
            }

        } else {
            $(this).addClass('tbar-tab-click-selected');
            $(this).find('.tab-text').remove();
            $('.tbar-panel-myAccount').css('visibility', 'hidden');
            $('.tbar-panel-cart').css('visibility', 'hidden');
            $('.tbar-panel-follow').css({ 'visibility': "visible", "z-index": "1" });
            $('.tbar-panel-recentBrowsing').css('visibility', 'hidden');
            $('.toolbar-wrap').addClass('toolbar-open');
        }
    });

    $('.tbar-tab-recentBrowsing').click(function () {
        $(this).siblings().removeClass('tbar-tab-click-selected');

        if ($('.toolbar-wrap').hasClass('toolbar-open')) {
            if ($(this).find('.tab-text').length > 0) {
                if (!$('.tbar-tab-myAccount').find('.tab-text').length > 0) {
                    var info = "<em class='tab-text'>鎴戠殑甯愭埛</em>";
                    $('.tbar-tab-myAccount').append(info);
                    $('.tbar-panel-myAccount').css({ 'visibility': "hidden", "z-index": "-1" });
                }

                if (!$('.tbar-tab-follow').find('.tab-text').length > 0) {
                    var info = "<em class='tab-text'>鎴戠殑鍏虫敞</em>";
                    $('.tbar-tab-follow').append(info);
                    $('.tbar-panel-follow').css({ 'visibility': "hidden", "z-index": "-1" });
                }

                $('.tbar-panel-cart').css({ 'visibility': "hidden", "z-index": "-1" });

                $(this).addClass('tbar-tab-click-selected');
                $(this).find('.tab-text').remove();
                $('.tbar-panel-recentBrowsing').css({ 'visibility': "visible", "z-index": "1" });

            } else {
                var info = "<em class='tab-text'>鏈€杩戞祻瑙�</em>";
                $('.toolbar-wrap').removeClass('toolbar-open');
                $(this).append(info);
                $(this).removeClass('tbar-tab-click-selected');
                $('.tbar-panel-recentBrowsing').css({ 'visibility': "hidden", "z-index": "-1" });
            }

        } else {
            $(this).addClass('tbar-tab-click-selected');
            $(this).find('.tab-text').remove();
            $('.tbar-panel-myAccount').css('visibility', 'hidden');
            $('.tbar-panel-cart').css('visibility', 'hidden');
            $('.tbar-panel-follow').css('visibility', 'hidden');
            $('.tbar-panel-recentBrowsing').css({ 'visibility': "visible", "z-index": "1" });
            $('.toolbar-wrap').addClass('toolbar-open');
        }
    });


    //璐墿杞︼紝鎴戠殑鍏虫敞锛屾渶杩戞祻瑙堝垹闄�
    $('.rihgtNav_Cart_delete,.right_follow_delete,.rightNav_recBro_delete').click(function () {
        $(this).parents("dl,.suit").remove();
    });

    //鎴戠殑鍏虫敞鏀惰棌
    $('.tbar-panel-recentBrowsing .icon-shoucang1').click(function () {
        if ($(this).hasClass('cur')) {
            $(this).removeClass('cur');
        } else {
            $(this).addClass('cur');
        }
    });



    //浠绘剰浣嶇疆鍏抽棴鍙充晶瀵艰埅
    //	$(".toolbar-wrap").siblings().on("click",function(){
    //		if($(".toolbar-tabs div").hasClass("tbar-tab-click-selected")){
    //			$(".toolbar-panels div").css({'visibility':"hidden","z-index":"-1"});
    //			var info1 = "<em class='tab-text'>鎴戠殑甯愬彿</em>";
    //	        $('.tbar-tab-myAccount').append(info1);
    //	        var info2 = "<em class='tab-text'>鎴戠殑鍏虫敞</em>";
    //	        $('.tbar-tab-follow').append(info2);
    //	        var info3 = "<em class='tab-text'>鏈€杩戞祻瑙�</em>";
    //	        $('.tbar-tab-recentBrowsing').append(info3);
    //	        $('.toolbar-wrap').removeClass('toolbar-open');
    //	        $('.toolbar-tab').removeClass('tbar-tab-click-selected');
    //		}
    //	});
});

//鍙嬫儏閾炬帴
$(function () {
    var friendship_links = $('.friendship_links');
    friendship_links.find('dl').each(function () {
        if ($(this).find('dd').height() > 25) {
            $(this).append('<a href="javascript:;" class="arrow_down"></a>');
        }
        $(this).find('dd').css('height', 25);
    })
    $('.arrow_down').click(function () {
        $(this).parents('dl').siblings('dl').find('dd').css({
            height: 25
        })
            .end().find('.arrow_down');
        $(this).parents('dl').siblings('dl').find('.arrow_down').removeClass('arrow_up');
        if ($(this).hasClass('arrow_up')) {
            $(this).removeClass('arrow_up');
            $(this).siblings('dd').css({
                height: 25
            })
        } else {
            $(this).addClass('arrow_up');
            $(this).siblings('dd').css({
                height: 'auto'
            })
        }
    })

})


