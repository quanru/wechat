$(function  () {
	$("#toolBar").bind("mousedown touchstart", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#toolBar").bind("mouseup touchend", "#212A2A", backgroundColor2);
	$("#gobackBtn").bind("click touchend", goBack);//返回按钮
});