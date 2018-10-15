$(function(){
	//图片添加点击事件，点击后隐藏
	$("#img1").click(function(){
    	$(this).fadeOut("slow");
    }).click(function(){
    	// 点击大图显示图片展示后，小图片开始轮换
    	time = window.setInterval("picUpdate()",2500);
    });

    $("#img2").click(function(){
    	$(this).fadeOut("slow");
    });
    $("#img3").click(function(){
    	$(this).fadeOut("slow");
    });
    $("#img4").click(function(){
    	$(this).fadeOut("slow");
    });

    // 四个内容中的显示按钮都添加对应的显示图片事件
    $("#p").click(function(){
    	$("#img1").fadeIn("slow");
    }).click(function(){
    	window.clearInterval(time);
    });

	$("#p1").click(function(){
    	$("#img2").fadeIn("slow");
    });
	$("#p2").click(function(){
    	$("#img3").fadeIn("slow");
    });
	$("#p3").click(function(){
    	$("#img4").fadeIn("slow");
    });

    // 取消所有超链接的默认事件，即页面的跳转
    $("a").click(function(){
    	event.preventDefault();
    });

    //按钮添加事件
    $("#btn1").click(function(){
    	window.clearInterval(time);
    })
    $("#btn2").click(function(){
    	window.clearInterval(time);
    	time = window.setInterval("picUpdate()",2500);
    })
});

var time = null;
var index = 0;

function picUpdate(){
	if (index < 7) {
		$("#picBank").animate({left:"-=600px"},"slow");
	}else{
		index = 0;
		$("#picBank").animate({left:"+=4200px"},"fast");
		return;
	}
	index = index + 1;
}