var srcEle;//保存被长按的元素
$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown", backgroundColor1);//点击添加与搜索按钮后变色
	$("#popMenu").bind("mousedown", "#D6D6D6", backgroundColor2);//点击变色
	$("#toolBar, #slideMenu").bind("mouseup", "#212A2A", backgroundColor2);//颜色还原
	$("#chatList, #popMenu").bind("mouseup", "#fff", backgroundColor2);//颜色还原
	$("#addBtn").bind("click", slideMenu); //点击右上角菜单
	$("#addFriends").bind("click", function  () {//跳转到添加好友页面
		window.location = "addFriends.html";
	});
	$("#searchBtn").bind("click", function  () {//跳转到搜索页面
		window.location = "search.html";
	});
	$("#bottomBar").bind("click", bottomHref);//底栏导航
	$("#chatList").bind("mousedown touchstart", longClick);//长按列表弹出菜单
	$("#shade").bind("click", getOut);//点击背景退出菜单
	$("#chatList").bind("click", enterChat);//单击进入聊天窗口
	
	$("#delChat").bind("click", function  (event) {//删除聊天
		$(srcEle).remove();
		$("#popMenu").fadeOut("slow");//菜单
		$("#shade").fadeOut("slow");//背景图层
	});
	$("#setTop").bind("click", function  () {//置顶聊天
		$(srcEle.parentElement).prepend(srcEle);
		$(srcEle).addClass("setTop");
		$("#popMenu").fadeOut("slow");//弹出菜单
		$("#shade").fadeOut("slow");//背景图层
		srcEle.style.backgroundColor = "#F4FFEF";//设置置顶背景色
	});
	$("#unread").bind("click", function  () {//标为未读
		$('<img >', {
			class:'unreadTag',
			src:'./img/jiaobiao.jpg',
			width:'1em',
			height:'1em'
		}).appendTo($(srcEle));
		$("#popMenu").fadeOut("slow");//弹出菜单
		$("#shade").fadeOut("slow");//背景图层
	});
});