$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown", backgroundColor1);//点击添加与搜索按钮后变色
	$("#toolBar, #slideMenu").bind("mouseup", function  () {//颜色还原
	     event.target.style.backgroundColor = "#212A2A";
	});
	$("#addBtn").bind("click", function  () {//点击右上角菜单
		$("#slideMenu").slideToggle("slow");
	});
	$("#addFriends").bind("click", function  () {//跳转到添加好友页面
		window.location = "newFriends.html";
	});
	$("#saoyisao").bind("click", function  () {//跳转到扫一扫页面
		window.location = "scan2D.html";
	});
	$("#yaoyiyao").bind("click", function  () {//跳转到摇一摇页面
		window.location = "shake.html";
	});
	$("#shopping").bind("click", function  () {//跳转到摇一摇页面
		window.location = "shopping.html";
	});
	$("#toolBar, #slideMenu").bind("mouseup", function  () {//颜色还原
	    event.target.style.backgroundColor = "#212A2A";
	});
	$("#friendCircle, #saoyisao, #yaoyiyao, #shopping").bind("mousedown", backgroundColor2);//点击变色
	$("#friendCircle").bind("mouseup", function  (event) {
		window.location = "friendCircle.html";
	});
});