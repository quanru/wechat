$(function  () {
	$("#gobackBtn, #menuBtn, #slideMenu").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#gobackBtn, #menuBtn, #slideMenu").bind("mouseup", "#212A2A", backgroundColor2);
	$("#gobackBtn").bind("click", goBack);//返回按钮
	$("#menuBtn").bind("click", slideMenu);//点击右上角菜单
});