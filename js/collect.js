$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown touchstart", backgroundColor1);//点击添加与搜索按钮后变色
	$("#toolBar, #slideMenu").bind("mouseup touchend", "#212A2A", backgroundColor2);//还原颜色
	$("#gobackBtn").bind("click touchend", goBack);//返回按钮
	$("#searchBtn").bind("click touchend", function  () {//跳转到添加好友页面
		window.location = "search.html";
	});
	$("#addBtn").bind("click", slideMenu); //点击右上角菜单
});