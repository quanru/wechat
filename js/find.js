$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown touchstart", backgroundColor1);//点击添加与搜索按钮后变色
	$("#findList").bind("mousedown touchstart", "#D6D6D6", backgroundColor2);//点击变色
	$("#toolBar, #slideMenu").bind("mouseup touchend", "#212A2A", backgroundColor2);//颜色还原
	$("#findList").bind("mouseup touchend", "#fff", backgroundColor2);//颜色还原
	$("#addBtn").bind("click", slideMenu); //点击右上角菜单
	$("#bottomBar").bind("click touchend", bottomHref);//底栏导航
	$("#main").bind("click touchend", findHref);//"发现"页面导航
});