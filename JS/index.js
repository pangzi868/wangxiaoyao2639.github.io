$(function(){
	$(".a").click(function(){
		if($(".id").val() == "王银彬" && $(".psw").val() == "07160833"){
			alert("登录成功");
			location.href="main.html";
		}else{
			alert("姓名或学号错误");
			location.href="index.html";
		}
	});
});
