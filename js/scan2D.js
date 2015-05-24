$(function  () {
	$("#gobackBtn, #menuBtn, #slideMenu").bind("mousedown touchstart", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#gobackBtn, #menuBtn, #slideMenu").bind("mouseup touchend", "#212A2A", backgroundColor2);
	$("#gobackBtn").bind("click touchend", goBack);//返回按钮
	$("#menuBtn").bind("click", slideMenu);//点击右上角菜单
	$("#botBar").bind("click touchend", changeImg);//点击改变扫描框大小
});