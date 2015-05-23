$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown touchstart", backgroundColor1);//点击添加与菜单按钮后变色
	$("#toolBar, #slideMenu").bind("mouseup touchend", "#212A2A", backgroundColor2);//还原颜色
	$("#gobackBtn").bind("click touchend", goBack);//返回按钮
	$("#inputSearch").bind("click touchend", function  () {
		this.value = "";
	});
});