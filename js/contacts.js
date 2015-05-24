var srcEle;//保存被长按的元素
$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown touchstart", backgroundColor1);//点击添加与搜索按钮后变色
	$("#popMenu, #newFriends").bind("mousedown touchstart", "#D6D6D6", backgroundColor2);//点击变色
	$("#toolBar, #slideMenu").bind("mouseup", "#212A2A", backgroundColor2);//颜色还原
	$("#contactsList, #popMenu").bind("mouseup", "#fff", backgroundColor2);//颜色还原
	$("#addBtn").bind("click", slideMenu); //点击右上角菜单
	$("#addFriends, #newFriends").bind("click touchend", function  () {//跳转到添加好友页面
		window.location = "addFriends.html";
	});
	$("#searchBtn").bind("click touchend", function  () {//跳转到搜索页面
		window.location = "search.html";
	});
	$("#bottomBar").bind("click touchend", bottomHref);//底栏导航
	$("#contactsList").bind("mousedown touchstart", longClick);//长按列表弹出菜单
	$("#contactsList").bind("click", enterPerson);//单击进入聊天窗口
	$("#shade").bind("click touchend", getOut);//点击背景退出菜单
});