$(function  () {
	$("#gobackBtn, #settingBtn").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#gobackBtn, #settingBtn").bind("mouseup", "#212A2A", backgroundColor2);//还原颜色
	$("#gobackBtn").bind("click", goBack);//返回按钮
	$("#shakeBar").bind("click", changeShake);//点击三个底部按钮切换
});