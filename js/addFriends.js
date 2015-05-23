$(function  () {
	$("#toolBar").bind("mousedown touchstart", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#toolBar").bind("mouseup touchend", "#212A2A", backgroundColor2);
	$("#inputSearch").bind("click touchend", function  () {//点击输入窗口，清空提示
		this.value = "";
	});
	$("#gobackBtn").bind("click touchend", goBack);//返回按钮
});