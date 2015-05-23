$(function  () {
	$("#gobackBtn, #settingBtn").bind("mousedown touchstart", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#gobackBtn, #settingBtn").bind("mouseup touchend", "#212A2A", backgroundColor2);//还原颜色
	$("#gobackBtn").bind("click touchend", goBack);//返回按钮
	$("#shakeBar").bind("click touchend", changeShake);//点击三个底部按钮切换
});