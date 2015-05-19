$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown", backgroundColor1);//点击添加与搜索按钮后变色
	$("#toolBar, #slideMenu").bind("mouseup", function  (e) {//颜色还原
	    event.target.style.backgroundColor = "#212A2A";
	});
	$("#addBtn").bind("click", function  () {//点击右上角菜单
		$("#slideMenu").slideToggle("slow");
	});
	$("#addFriends").bind("click", function  () {//跳转到添加好友页面
		window.location = "newFriends.html";
	});
	$("#userName, #photoAlbum, #collect").bind("mousedown", backgroundColor2);//鼠标点击改变背景色
	$("#addBtn").bind("mouseup", function  () {//颜色还原
	    this.style.backgroundColor = "#212A2A";
	});
	$("#addFriends").bind("click", function  () {//跳转到添加好友页面
		window.location = "newFriends.html";
	});
	$("#userName").bind("click", function  (e) {
		window.location = "personality.html";
	});
	$("#photoAlbum").bind("click", function  (e) {
		window.location = "album.html";
	});
	$("#collect").bind("click", function  (e) {
		window.location = "collect.html";
	});
});