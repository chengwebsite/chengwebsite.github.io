/*
作者:D.Young
主页：https://yyv.me/
github：https://github.com/5iux/sou
日期：2019-07-26
版权所有，请勿删除
*/

/*
编辑：Davis
日期：2020-3-25
主要目的是为了去掉谷歌，改为大陆可用的必应、搜狗。
*/


$(document).ready(function() {
    //判断窗口大小，添加输入框自动完成
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
        $(".wd").focus();
    }
    //按钮
    $(".sou li").click(function() {
        var dt = $(this).attr('data-s');
        wd = $(".wd").val();
        if (dt == "bing") {
            if (wd == "" || wd == null) {
                window.location.href = "https://cn.bing.com/?mkt=zh-CN";
            } else {
                $(".t").val("bing");
                $("form").submit();
            }
        } 
        if (dt == "baidu") {

            if (wd == "" || wd == null) {
                window.location.href = "https://www.baidu.com";
            } else {
                $(".t").val("baidu");
                $("form").submit();
            }
        	}
        if (dt == "sogou") {

            if (wd == "" || wd == null) {
                window.location.href = "https://www.sogou.com";
            } else {
                $(".t").val("sogou");
                $("form").submit();
            }
        	}

    });
    //菜单点击
    $("#menu").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".mywth").toggleClass('hidden');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".mywth").removeClass('hidden');
    });
    $(".mywth").click(function(event) {
        var wt = $("body").width();
        if (wt < 750 || wt == 750) {
            //window.location.href = "https://tianqi.qq.com/";
            window.location.href = "/weather/";
        }
    });
});

