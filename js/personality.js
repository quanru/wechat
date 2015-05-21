$(function  () {
	$("#toolBar").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#toolBar").bind("mouseup", "#212A2A", backgroundColor2);
	$("#gobackBtn").bind("click", goBack);//返回按钮
});