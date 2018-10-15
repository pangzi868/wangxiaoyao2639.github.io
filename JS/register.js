$(function(){
	$("#submit").click(function(){
		if (check()) {
			if ($("input[type=checkbox]").is(':checked')) {
				alert("注册成功");
				location.href = "index.html";
			}else{
				alert("未同意会员协议");
			}
		}
	});
});

// 总的检查函数
function check(){
	var n = document.getElementById("name").value;
	var num = document.getElementById("num").value;
	var b = document.getElementById("born").value;
	var e = document.getElementById("email").value;
	var a = document.getElementById("add").value;
	var t = document.getElementById("tel").value;
	//判断输入框的值是否为空
	if(n.length!=0 && num.length!=0 && b.length!=0 && e.length!=0 && a.length!=0 && t.length!=0){
		if (checkName()==true && checkNum()==true &&checkBorn()&&checkEmail()&&checkAdd()&&checkTel()) {
			return true;
		}else{
			return false;
		}
	}else{
		alert("带有红色星号的输入框不能为空");
		return false;
	}
	
}

// 注册页面的各个检查函数
//网名
function checkName(){
	var n = document.getElementById("name").value;
	var reg = /\s/;
	if(reg.test(n)){
		alert("网名不能包括空格");
		return false;
	}else{
		return true;
	}
}

//学号
function checkNum(){
	var num = document.getElementById("num").value;
	var reg = /^[0][0-9]{7}$/;
	if(!reg.test(num)){
		alert("学号必须是0开始的8位数字");
		return false;
	}else{
		return true;
	}
}

//出生年月
function checkBorn(){
	var b = document.getElementById("born").value;
	var reg = /^((19\d{2})|(200\d)|(201[0-7]))-(0?[1-9]|1[0-2])$/;
	if(!reg.test(b)){
		alert("请输入正确出生年月");
		return false;
	}else{
		return true;
	}
}

//电子邮箱
function checkEmail(){
	var e = document.getElementById("email").value;
	var reg = /^[a-zA-Z0-9]*@([a-zA-Z0-9]+\.)+(com)|(cn)$/;
	if(!reg.test(e)){
		alert("email地址必须是字母开始并且**@****.***.com或***@***.***.cn这种格式");
		return false;
	}else{
		return true;
	}
}


//地址
function checkAdd(){
	var a = document.getElementById("add").value;
	if(a.length<5){
		alert("地址必须为5个字");
		return false;
	}else{
		return true;
	}
}

//电话
function checkTel(){
	var t = document.getElementById("tel").value;
	var reg = /^[1][0-9]{10}$/;
	if(!reg.test(t)){
		alert("电话号码必须是1开始的11位数字");
		return false;
	}else{
		return true;
	}
}