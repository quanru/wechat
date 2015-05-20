$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown", backgroundColor1);//点击添加与搜索按钮后变色
	$("#toolBar, #slideMenu").bind("mouseup", "#212A2A", backgroundColor2);//还原颜色
	$("#gobackBtn").bind("click", goBack);//返回按钮
	$("#searchBtn").bind("click", function  () {//跳转到添加好友页面
		window.location = "search.html";
	});
	$("#addBtn").bind("click", slideMenu); //点击右上角菜单
});