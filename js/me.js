$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown touchstart", backgroundColor1);//点击添加与搜索按钮后变色
	$("#meList").bind("mousedown touchstart", "#D6D6D6", backgroundColor2);//点击变色
	$("#toolBar, #addBtn").bind("mouseup touchend", "#212A2A", backgroundColor2);//颜色还原
	$("#meList").bind("mouseup touchend", "#fff", backgroundColor2);//颜色还原
	$("#addBtn").bind("click", slideMenu); //点击右上角菜单
	$("#userName, #photoAlbum, #collect, #wallet, #cardBag, #setting").bind("mousedown touchstart", backgroundColor2);//鼠标点击改变背景色
	$("#bottomBar").bind("click touchend", bottomHref);//底栏导航
	$("#main").bind("click touchend", meHref);//"我"页面导航
});