$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown", backgroundColor1);//点击添加与菜单按钮后变色
	$("#toolBar, #slideMenu").bind("mouseup", "#212A2A", backgroundColor2);//还原颜色
	$("#gobackBtn").bind("click", goBack);//返回按钮
	$("#inputSearch").click(function  () {
		this.value = "";
	});
});