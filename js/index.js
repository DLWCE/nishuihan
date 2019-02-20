/**
 * Created by samsung on 2018/12/6.
 */
var audio1 = document.getElementById("audio1");
window.onload = function(){
   audio1.play();
}

$(function(){
    //导航栏
    //for(var i = 0;i < $(".nav-wrap ul li").length;i++){
    //    $(".nav-wrap ul li")[i].style.backgroundImage = "url(./images/xy/nav_884f8a3.png)";
    //    $(".nav-wrap ul li")[i].style.backgroundPositionY = "-50px";
    //    if(i == 0){
    //        $(".nav-wrap ul li")[i].style.backgroundPositionX ="0px";
    //    }else if(i == 1){
    //        $(".nav-wrap ul li")[i].style.backgroundPositionX ="-95px";
    //    }else if(i == 2){
    //        $(".nav-wrap ul li")[i].style.backgroundPositionX ="-570px";
    //    }else if(i == 3){
    //        $(".nav-wrap ul li")[i].style.backgroundPositionX ="-194px";
    //    }else if(i == 4){
    //        $(".nav-wrap ul li")[i].style.backgroundPositionX ="-290px";
    //    }else if(i == 5){
    //        $(".nav-wrap ul li")[i].style.backgroundPositionX ="-390px";
    //    }else if(i == 6) {
    //        $(".nav-wrap ul li")[i].style.backgroundPositionX = "-477px";
    //    }
    //}
    //
    //$(".nav-wrap ul li")[0].style.backgroundImage = "url(./images/xy/nav_884f8a3.png)";
    //$(".nav-wrap ul li")[0].style.backgroundPositionY = "-0px";
    //$(".nav-wrap ul li")[0].style.backgroundPositionX ="0px";

     $(".nav-wrap>ul>li").on("mouseenter",function(){
         $(this).find("ul").css({opacity:1
      }).stop(true,false).fadeIn(500);
     })

    $(".nav-wrap>ul>li").on("mouseleave",function(){
        $(this).find("ul").css({display:"none",opacity:0
        })
    })

    var audioFlag = true;


    $("#audioBtn").on("click",function(){
        if(audioFlag){
            $("#audioBtn").css({backgroundPosition:"-709px -325px"});
            audio1.pause();
            audioFlag = false;
        }else{
            $("#audioBtn").css({backgroundPosition:"-700px -146px"});
            audio1.play();
            audioFlag = true;
        }
    });
    //audio1.play();



    //人物背景图片
     //update by 余凯 开始
    //1.定义变量，获取索引值 从第一张图片开始
    var idx = 1;
    var timeID = setInterval(function () {
        creatInterval();
    }, 3000);

    //2.鼠标移入事件
    $('.job-wrap .job-nav').mouseenter(function () {
        //清除定时器
        clearInterval(timeID);
    });

    //3.创建鼠标点击事件
    $('.job-wrap .job-nav ul li>a').click(function () {
        //当鼠标点击按钮时,给当前按钮对象添加活动样式active,并且清除其他按钮样式
        $(this).addClass('active').parent().siblings('li').children().removeClass('active');
        var index = $(this).parent().index();
        $('.job-wrap .jobs>div').eq(index).addClass('active').css('animation', 'enter .5s both');
        //先把前一张移除   idx表示无论是否开启定时器当前页面存在图片的索引值
        //索引找到前一个值
        $('.job-wrap .jobs>div').eq(index).siblings('.active').css('animation', 'leave .5s both');
    });

    //5.封装定时器中的方法,避免代码冗余
    function creatInterval() {
        //设置按钮活动动画
        $('.job-wrap .job-nav ul li>a').eq(idx).addClass('active').parent().siblings('li').children().removeClass('active');
        //2 创建人物动画
        //2.1获取人物对象 视频对象 姓名对象
        console.log($('.jobs-video li>.video').eq(idx));
        if (idx == 0) {
            //如果idx为0,那么判断为第一张图片,将第一张图添加进来,移除最后一张图
            //2.2人物对象
            $('.job-wrap .jobs>div').eq(idx).addClass('active').css('animation', 'enter .5s both');
            $('.job-wrap .jobs>div').eq(6).css('animation', 'leave .5s both');
            //2.3视频对象
            //$('.jobs-video li>.video').eq(idx).addClass('active').css('animation','enter .5s both');
            //$('.jobs-video li>.video').eq(6).css('animation', 'leave .5s both');
        } else {
            //由于再次循环时,animation属性一直都是离开的,所以只需要把当前对象的animation属性覆盖一次
            $('.job-wrap .jobs>div').eq(idx).addClass('active').css('animation', 'enter .5s both').prev().css('animation', 'leave .5s both');
            //$('.jobs-video li>.video').eq(idx).addClass('active').css('animation', 'enter .5s both').prev().css('animation', 'leave .5s both');
        }
        idx++;
        //设置按钮,重新变为第一个
        if (idx > 6) {
            idx = 0;
        }
    }

    //6.创建视频点击播放事件
    //创建视频触发事件
    $('.jobs .job-bg .video').click(function () {
        $('.pop_video_bg').css('display','block');
        $($('.pop_video')[0]).show('fast');
    });


    $('.cxd .play').click(function () {
        $('.pop_video_bg').css('display','block');
        $($('.pop_video')[1]).show('fast');
    });

    $('.tsy .play').click(function () {
        $('.pop_video_bg').css('display','block');
        $($('.pop_video')[2]).show('fast');
        //$(".pop_video").attr("muted","muted");
    });
    //创建视频关闭事件
    $('.close_pv').click(function () {
        $('.pop_video_bg').css('display','none');
        $('.pop_video').css('display','none');
        //for(var i = 0;i<)
        $(".pop_video").attr("muted","muted");
        //element.muted = "muted";
    });
     //update by 余凯 结束
    //
    ////人物选择
    //$(".job-nav li").on('click',function() {
    //    var bgOldValue = null;
    //    var nameOldValue = null;
    //    var videoOldValue = null;
    //    for(var i =0;i< $('.jobs .job-bg').length;i++){
    //        if($($('.jobs .job-bg')[i]).attr("class").indexOf("show") != -1){
    //            bgOldValue = $('.jobs .job-bg')[i];
    //        }
    //    }
    //
    //    for(var j =0;j< $('.jobs-name li .game-name').length;j++){
    //        if($($('.jobs-name li .game-name')[j]).attr("class").indexOf("show") != -1){
    //            nameOldValue = $('.jobs-name li .game-name')[j];
    //        }
    //    }
    //
    //    for(var k =0;k< $('.jobs-video div').length;k++){
    //        if($($('.jobs-video div')[k]).attr("class").indexOf("show") != -1){
    //            videoOldValue = $('.jobs-video div')[k];
    //        }
    //    }
    //
    //    $(bgOldValue).animate({
    //        left:'-100px',
    //        opacity: 0
    //      }, 1000, function () {
    //        $(bgOldValue).css({
    //            left:'0px'
    //        });
    //    });
    //
    //    $(nameOldValue).animate({
    //        left:'45%',
    //        opacity: 0
    //     }, 1000, function () {
    //        $(nameOldValue).css({
    //            left:'50%'
    //        });
    //    });
    //
    //    $(videoOldValue).animate({
    //        left:'100px',
    //        opacity: 0
    //    }, 1000, function () {
    //        $(nameOldValue).css({
    //            left:'0px'
    //        });
    //    });
    //
    //
    //    var index = $(this).index();
    //
    //    $(".job-wrap .job-bg").eq(index).animate({
    //        right:'20px',
    //        opacity: 1
    //    }, 600, function () {
    //    }).addClass("show").siblings('div').removeClass("show").addClass("hide");
    //
    //
    //    $(".jobs-name li .game-name").eq(index).animate({
    //        right:'20px',
    //        opacity: 1
    //    }, 600, function () {
    //    }).addClass("show").parent().siblings('li').find('.game-name').removeClass("show").addClass("hide");
    //
    //
    //    $(".jobs-video div").eq(index).animate({
    //        right:'20px',
    //        opacity: 1
    //    }, 600, function () {
    //    }).addClass("show").parent().siblings('li').find('div').removeClass("show").addClass("hide");
    //
    //
    //})

    //人物名称
    //$(".name-content").css({
    //    background:"url(./images/xy/index_z_fe0b4cf.png) -97px -148px no-repeat"
    //});

    //官方合作轮播
    $(".banners-tab a").on("click",function(){
        var index = $(this).index();
        if(index == 0){
            $(".gf-content").show();
            $(".hz-content").hide();
        }else{
            $(".gf-content").hide();
            $(".hz-content").show();
        }

        $(this).addClass("active").siblings('a').removeClass("active")
        return false;
    });

    //官方合作轮播-点击页码
     $(".gf-content .banners-icon li").on("click",function(){
         var idx = $(this).index();
         gfContentIdx = idx;
         $(".gf-content .banners-img li").eq(idx).fadeIn(800).siblings("li").fadeOut(200);
         $(".gf-content .banners-icon li").eq(idx).css({
             background: "url('./images/xy/icon-banner2_d60edf5.png') no-repeat"
         }).siblings("li").css({
             background: "url('./images/xy/icon-banner_15a65c5.png') no-repeat"
         })
     });

    $(".hz-content .banners-icon li").on("click",function(){
        var idx = $(this).index();
        hzContentIdx = idx;
        $(".hz-content .banners-img li").eq(idx).fadeIn(800).siblings("li").fadeOut(200);
        $(".hz-content .banners-icon li").eq(idx).css({
            background: "url('./images/xy/icon-banner2_d60edf5.png') no-repeat"
        }).siblings("li").css({
            background: "url('./images/xy/icon-banner_15a65c5.png') no-repeat"
        })
    });


    //官方合作轮播-定时器
    var gfContentIdx = 0;
    var hzContentIdx = 0;
    var gfContentTimeID = setInterval(function(){

        if(gfContentIdx == 6){
            gfContentIdx = 0;
        }

        $(".gf-content .banners-img li").eq(gfContentIdx).fadeIn(800).siblings("li").fadeOut(200);
        $(".gf-content .banners-icon li").eq(gfContentIdx).css({
            background: "url('./images/xy/icon-banner2_d60edf5.png') no-repeat"
        }).siblings("li").css({
            background: "url('./images/xy/icon-banner_15a65c5.png') no-repeat"
        })
        gfContentIdx ++;
    },2000)

    var hzContentTimeID = setInterval(function(){

        if(hzContentIdx == 6){
            hzContentIdx = 0;
        }
        $(".hz-content .banners-img li").eq(hzContentIdx).fadeIn(800).siblings("li").fadeOut(200);
        $(".hz-content .banners-icon li").eq(hzContentIdx).css({
            background: "url('./images/xy/icon-banner2_d60edf5.png') no-repeat"
        }).siblings("li").css({
            background: "url('./images/xy/icon-banner_15a65c5.png') no-repeat"
        })
        hzContentIdx ++;
    },2000)




    //下载游戏
    var gameValue = 0;
    for(var i =0 ;i< $(".top .btn-two a").length;i++){
        //$(".top .btn-two i")[i].style.backgroundImage = "url(./images/xy/index_z_fe0b4cf.png)";

        if(i == 0){
            $($(".top .btn-two a")[i]).css({
                "background":"url(./images/xy/btns_d790835.png) no-repeat  0px -155px"
            });
            $($(".top .btn-two i")[i]).css({
                "background":"url(./images/xy/index_z_fe0b4cf.png) no-repeat  -733px -288px"
            });
        }else if(i == 1){
            $($(".top .btn-two a")[i]).css({
                "background":"url(./images/xy/btns_d790835.png) no-repeat -187px -155px "
            });
            $($(".top .btn-two i")[i]).css({
                "background":"url(./images/xy/index_z_fe0b4cf.png) no-repeat  -727px -362px"
            });

        }else if(i == 2){
            $($(".top .btn-two a")[i]).css({
                "background":"url(./images/xy/btns_d790835.png) no-repeat  -371px -155px"
            });
            $($(".top .btn-two i")[i]).css({
                "background":"url(./images/xy/index_z_fe0b4cf.png) no-repeat  -702px -362px"
            });
        }
    }

    $(".download").mouseenter(function(){
        $(".download").css("background-image","url(./images/xy/btn2_968fc63.gif)");
    })
    $(".download").mouseout(function(){
        $(".download").css("background-image","url(./images/xy/btn1_031d704.gif)");
    })


    //下载游戏-二维码模块
    saowo();
    function saowo(){
        $(".wx-scanning").animate({
            top:100
        },3000,function(){
            $(".wx-scanning").animate({
                top:20
            },3000,function(){
                saowo();
            })
        })
    }


    //新闻模块
    for(var i = 0;i<$(".news-title li").length;i++){
        $(".news-title li")[i].style.backgroundImage = "url(./images/xy/news-tab-nav_1d4b638.png)";
        $(".news-title li")[i].style.backgroundRepeat = "no-repeat";
        $(".news-title li")[i].style.backgroundPositionY = "0px";
        if(i == 0){
            $(".news-title li")[i].style.backgroundPositionX = "-0px";
        }else if(i == 1){
            $(".news-title li")[i].style.backgroundPositionX = "-77px";
        }else if(i == 2){
            $(".news-title li")[i].style.backgroundPositionX = "-159px";
        }else if(i == 3){
            $(".news-title li")[i].style.backgroundPositionX = "-239px";
        }
    }

    //攻略切换模块
    for(var i = 0;i<$(".luntan-tab a").length;i++){
        $(".luntan-tab a")[i].style.backgroundImage = "url(./images/xy/tab1_46b4a71.png)";
        $(".luntan-tab a")[i].style.backgroundRepeat = "no-repeat";
        $(".luntan-tab a")[i].style.backgroundPositionY = "0px";

        if(i == 0){
            $(".luntan-tab a")[i].style.backgroundPositionX = "-0px";
        }else if(i == 1){
            $(".luntan-tab a")[i].style.backgroundPositionX = "-160px";
        }else if(i == 2){
            $(".luntan-tab a")[i].style.backgroundPositionX = "-317px";
        }else if(i == 3){
            $(".luntan-tab a")[i].style.backgroundPositionX = "-472px";
        }else if(i == 4){
            $(".luntan-tab a")[i].style.backgroundPositionX = "-634px";
        }
    }

    //捏脸站



    for(var i = 0 ;i<$(".gl-hotPlay li").length;i++){
        var a =  $(".gl-hotPlay li")[i].children[0];
        a.style.backgroundImage = "url(./images/xy/index_z_fe0b4cf.png)";
        a.style.backgroundRepeat = "no-repeat";
        if(i == 0){
            a.style.backgroundPositionY = "0px";
            a.style.backgroundPositionX = "-376px";
            a.style.width = "56px";
            a.style.marginLeft = "-28px";
        }else if(i == 1){
            a.style.backgroundPositionY = "-143px";
            a.style.backgroundPositionX = "-403px";
        }else if(i == 2){
            a.style.backgroundPositionY = "-147px";
            a.style.backgroundPositionX = "-279px";
        }else if(i == 3){
            a.style.backgroundPositionY = "-143px";
            a.style.backgroundPositionX = "-433px";
        }
    }


    //江湖知己
    var  zhiJiPlayIdx = 0;
    var zhiJiPlayTime = setInterval(function(){
        zhiJiPlayIdx +=1;
         $(".play").find("i").css("transform","rotate("+zhiJiPlayIdx+"deg)");
    },10);

    //var  zhiJiPlayIdx = 0;
    //var zhiJiPlayTime = setInterval(function(){
    //    zhiJiPlayIdx +=1;
    //    $(".play i")[0].style.transform ="rotate("+zhiJiPlayIdx+"deg)";
    //},10);
    $($(".zhiji-icon li")[0]).css({  background: "url('./images/xy/icon-banner2_d60edf5.png') no-repeat"});
    $(".zhiji-icon li").on("mouseenter",function(e){
        var index = $(this).index();
        $(this).css({
            background: "url('./images/xy/icon-banner2_d60edf5.png') no-repeat"
        }).siblings("li").css({
            background: "url('./images/xy/icon-banner_15a65c5.png') no-repeat"
        });
        if(index == 1){
            $(".zhiji-img .cxd video").css({display:"none"});
            $(".zhiji-img .cxd .zhaoze").css({display:"none"});
            $(".zhiji-img>div").eq(index).css({opacity:0});
            $(".zhiji-img>div").eq(index).width(800).fadeIn(500).animate({
                width:1362,
                opacity:1
            },200,function(){
                setTimeout(function(){
                    $(".zhiji-img .cxd video").fadeIn(1000);
                },500);

                $(".zhiji-img .cxd .zhaoze").fadeIn(1000);
            }).siblings("div").fadeOut(500);
        }else if(index == 2){
            $(".zhiji-img .tsy video").css({display:"none"});
            $(".zhiji-img .tsy .zhaoze").css({display:"none"});
            $(".zhiji-img>div").eq(index).css({opacity:0});
            $(".zhiji-img>div").eq(index).width(800).fadeIn(500).animate({
                width:1362,
                opacity:1
            },200,function(){
                setTimeout(function(){
                    $(".zhiji-img .tsy video").fadeIn(900);
                },500);

                $(".zhiji-img .tsy .zhaoze").fadeIn(1000);
            }).siblings("div").fadeOut(500);
        }else{
            $(".zhiji-img>div").eq(index).fadeIn(500).siblings("div").fadeOut(500);
        }

    });

    //$(".zhiji-icon li").on("mouseleave",function(){
    //    $(this).css({
    //        background: "url('./images/xy/icon-banner_15a65c5.png') no-repeat"
    //    }).siblings("a").css({
    //        background: "url('./images/xy/icon-banner2_d60edf5.png') no-repeat"
    //    })
    //
    //});



     //update by 冯新冉 开始
    //枫叶动画
    $(window).on('scroll',function () {
        if ($(window).scrollTop() > 2200) {
            //$('.icon').show().siblings('div').hide();
            //$('#caidan').hide();
            $('.fy_move').addClass('show');
            $('.fy_move').on('animationend',function () {
                $('#caidan').show();
                $('.icon').hide().siblings('div').show();
            })
        }
    });

    /*捏脸站*/
    //$('.gl-hotPlay li a').on('mouseenter',function () {
    //    $(this).css('marginTop','10px');
    //
    //});
    //
    //$('.gl-hotPlay li a').on('mouseleave',function () {
    //    $(this).css('marginTop','');
    //});


    //update by 彭光
    $('.gl-hotPlay li a').on('mouseenter',function () {
        $(this).stop(true,false).animate({
            top:8
        },200,"linear")
    }).on('mouseleave',function () {
        $(this).stop(true,false).animate({
            top:15
        },200,"linear")
    });


    //捏脸站轮播图

    setInterval(function () {
        var step =$('.gl-lunbo-content').width();
        var current = $('.gl-lunbo-content ul').position().left;
        current -= step;
        if (current < -  step) {
            current = 0;
            $('.gl-lunbo-content ul').css('left','0');
        }
        $('.gl-lunbo-content ul').animate({
            'left': current,
        },500)
    },2000);

    //论坛tab栏切换
    $('.luntan-tab a').on('mouseenter',function () {
        $(this).find('i').show().parent().siblings('a').find('i').hide();
        var idx =  $(this).index();
        $('.luntan-news div').eq(idx).show().siblings('div').hide();
    });

    //图赏与视频
    $('.pic-content').on('mouseenter',function () {
        $(this).css({
            overflow:'hidden',
        });
        $('.pic-title').find('img').toggleClass('pic-rotate');
        $('.pic-title').find('img').toggleClass('pic-rot');
        $(this).children('img').css({
            transform:'scale(1.2,1.2)',
            transition: 'all 0.8s',
        })
    });

    $('.pic-content').on('mouseleave',function () {
        $(this).children('img').css({
            transform:'scale(1,1)',
            transition: 'all 0.8s',
        });
        $('.pic-title').find('img').toggleClass('pic-rotate');
        $('.pic-title').find('img').toggleClass('pic-rot');
    });

    $('.video-content').on('mouseenter',function () {
        $(this).css({
            overflow:'hidden',
        });
        $('.video-title').find('img').toggleClass('pic-rotate');
        $('.video-title').find('img').toggleClass('pic-rot');
        $(this).children('img').css({
            transform:'scale(1.2,1.2)',
            transition: 'all 0.8s',
        })
    });
    $('.video-content').on('mouseleave',function () {
        $(this).children('img').css({
            transform:'scale(1,1)',
            transition: 'all 0.8s',
        });
        $('.video-title').find('img').toggleClass('pic-rotate');
        $('.video-title').find('img').toggleClass('pic-rot');
    })
    //update by 冯新冉

    //update by 彭光开始

    //更改的地方
    //1. 新闻栏
    $(".news-title li").on("mouseenter", function ( ) {
        $(this).css("backgroundPositionY","-29px");
        var newsidx = $(this).index();
        $(".news").eq(newsidx).addClass("newsact").siblings("ul").removeClass("newsact");
    });

    $(".news-title li").on("mouseleave", function ( ) {
        $(this).css("backgroundPositionY","0");
    })

    //update by 彭光结束




}(window))