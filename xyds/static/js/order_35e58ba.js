nie.define("Order",function(){function t(t){var n,i=/^(13|14|15|17|18)\d{9}$/,e=/^[0-9]*$/,o={"\u4e2d\u56fd\u9999\u6e2f":8,"\u4e2d\u56fd\u6fb3\u95e8":8,"\u4e2d\u56fd\u53f0\u6e7e":10,"\u65e5\u672c":11,"\u97e9\u56fd":11,"\u65b0\u52a0\u5761":8,"\u9a6c\u6765\u897f\u4e9a":7,"\u6cf0\u56fd":9,"\u7f8e\u56fd":10,"\u52a0\u62ff\u5927":7,"\u82f1\u56fd":11,"\u6cd5\u56fd":10,"\u610f\u5927\u5229":10,"\u5fb7\u56fd":10,"\u4fc4\u7f57\u65af":10,"\u6fb3\u5927\u5229\u4e9a":10,"\u65b0\u897f\u5170":9},r=$(".order-pop .country p").html();return"\u4e2d\u56fd\u5927\u9646"==r?i.test(t):(n=o[r],e.test(t)&&t.length==n?!0:!1)}var n=nie.require("nie.util.PopDialog"),i=$(".js_yy"),e=$(".pop-layer"),o=$(".order-pop"),r=o.find(".yy_close"),a=o.find(".system"),l=a.find("p"),c=a.find("ul"),f=o.find(".type"),d=f.find("p"),u=f.find("ul"),s=o.find(".country"),h=s.find("p"),p=s.find("ul"),m=o.find(".mail-ipt"),v=o.find(".phone-ipt"),g=o.find(".verify-ipt"),y=o.find(".get-btn"),A=o.find(".btn-order"),k=$(".js_remind"),_=$(".order_live");k.on("click",function(){e.show(),_.fadeIn()}),_.find(".yy_close").on("click",function(){e.fadeOut(),_.fadeOut(),$("ify-ipt, .phone_input").val("")}),i.on("click",function(){e.show(),o.fadeIn()}),r.on("click",function(){e.fadeOut(),o.fadeOut(),$(".mail-ipt, .phone-ipt, .img-verify-input, .verify-ipt, .phone_input").val("")}),l.on("click",function(){return c.show(),!1}),c.find("li").on("click",function(){"iOS"==$(this).html()?(a.addClass("short"),f.show()):"\u5b89\u5353"==$(this).html()&&(a.removeClass("short"),f.hide()),c.hide(),l.html($(this).html())}),d.on("click",function(){return u.show(),!1}),u.find("li").on("click",function(){d.html($(this).attr("data-type")),u.hide()}),h.on("click",function(){return p.show(),!1}),p.find("li").on("click",function(){h.html($(this).html()),h.attr("data-value",$(this).attr("data-value")),p.hide()}),$(document).on("click",function(){c.hide(),u.hide(),p.hide()}),$(".img-verify").on("click",function(){return $(this).attr("src","https://gfw-act.webapp.163.com/get_imgauthcode?"+Math.random()),!1});var w=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,O=/^[0-9]{4}$/,j=/^[0-9]{3}$/;y.on("click",function(){var i=v.val(),e=$(".img-verify-input").val();if("\u8bf7\u9009\u62e9\u56fd\u5bb6\u548c\u5730\u533a"==h.html())return n.Alert("\u8bf7\u9009\u62e9\u6240\u5728\u56fd\u5bb6\u548c\u5730\u533a~"),!1;var o=h.attr("data-value");if(!i.length||!t(i))return n.Alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7~"),!1;if(!e||!j.test(e))return n.Alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u56fe\u7247\u9a8c\u8bc1\u7801~"),!1;var r="http://gfw-act.webapp.163.com/h38authcode2/g?phone="+i+"&img_authcode="+e;"86"!=o&&(r=r+"&ctcode="+o),$.ajax({url:r,type:"GET",dataType:"jsonp"}).success(function(t){n.Alert(t.status===!0?"\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\u5230\u60a8\u7684\u624b\u673a,\u8bf7\u67e5\u6536~":407==t.msg||406==t.msg?"\u624b\u673a\u77ed\u4fe1\u53d1\u9001\u8d85\u8fc7\u9650\u5236,\u8bf7\u8fc7\u4f1a\u518d\u8bd5\uff01":t.msg)}).fail(function(){console&&console.log("error")})}),A.on("click",function(){var i;if(i=$(".choice_andriod").hasClass("on")?"\u5b89\u5353":l.html(),"\u8bf7\u9009\u62e9\u7cfb\u7edf"==i)return n.Alert("\u8bf7\u9009\u62e9\u7cfb\u7edf~"),!1;var r="ios",a="\u5b89\u5353";if("\u5b89\u5353"==i&&(r="android"),"ios"==r&&(a=d.html(),"\u9009\u62e9\u673a\u578b"==a))return n.Alert("\u8bf7\u9009\u62e9\u673a\u578b~"),!1;var c=v.val(),f=m.val(),u=g.val();if(!f.length||!w.test(f))return n.Alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740~"),!1;if("\u8bf7\u9009\u62e9\u56fd\u5bb6\u548c\u5730\u533a"==h.html())return n.Alert("\u8bf7\u9009\u62e9\u6240\u5728\u56fd\u5bb6\u548c\u5730\u533a~"),!1;if(!c.length||!t(c))return n.Alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7~"),!1;if(!u.length||!O.test(u))return n.Alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9a8c\u8bc1\u7801~"),!1;var s={phone:c,verify_code:u,extra:encodeURI(f+"|"+a),os:r},p=h.attr("data-value");"86"!=p&&(s.ctcode=p),$.ajax({url:"http://gfw-act.webapp.163.com/h38verify/g",type:"GET",dataType:"jsonp",data:s}).success(function(t){t.status===!0?(n.Alert("\u606d\u559c\uff01\u60a8\u5df2\u6210\u529f\u9884\u7ea6~"),m.val(""),v.val(""),g.val(""),e.hide(),o.fadeOut()):n.Alert(201==t.msg?"\u60a8\u5df2\u9884\u7ea6\u8fc7\uff0c\u8bf7\u52ff\u91cd\u590d\u9884\u7ea6\uff01":404==t.msg||412==t.msg?"\u9a8c\u8bc1\u7801\u5df2\u8fc7\u671f\uff01":t.msg)}).fail(function(){console&&console.log("error")})})});