var srcEle;//保存被长按的元素
function wechat () {
	$("#toolBar, #slideMenu").bind("mousedown", backgroundColor1);//点击添加与搜索按钮后变色
	$("#toolBar, #slideMenu").bind("mouseup", function  () {//颜色还原
	     event.target.style.backgroundColor = "#212A2A";
	});
	$("#addBtn").bind("click", function  () {//点击右上角菜单
		$("#slideMenu").slideToggle("slow");
	});
	$("#addFriends").bind("click", function  () {//跳转到添加好友页面
		window.location = "newFriends.html";
	});
	$("#chatLists").bind("mousedown touchstart", longClickChat);//长按列表弹出菜单
	$("#shade").bind("click", getOut);//点击背景退出菜单
	$("#chatLists").bind("click", enterChat);//单击进入聊天窗口
	$("#delChat, #setTop, #unread").bind("mousedown",backgroundColor2);
	$("#delChat").bind("click", function  (event) {//删除聊天
		srcEle.remove();
		$("#popMenu").fadeOut("slow");//菜单
		$("#shade").fadeOut("slow");//背景图层
		srcEle.style.backgroundColor = "#fff";//恢复背景色
		this.style.backgroundColor = "#fff";//恢复背景色
	});
	$("#setTop").bind("click", function  () {//置顶聊天
		$(srcEle.parentElement).prepend(srcEle);
		$(srcEle).addClass("setTop");
		$("#popMenu").fadeOut("slow");//弹出菜单
		$("#shade").fadeOut("slow");//背景图层
		srcEle.style.backgroundColor = "#F4FFEF";//设置置顶背景色
		this.style.backgroundColor = "#fff";//恢复背景色
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
		srcEle.style.backgroundColor = "#fff";//恢复背景色
		this.style.backgroundColor = "#fff";//恢复背景色
	});
}
function longClickChat (event) {
	srcEle = event.target;
	if( srcEle.nodeName != "LI" )
		srcEle = srcEle.parentElement;
	if( $(srcEle).hasClass("friends") === false && $(srcEle).hasClass("friend")  === false)
		return;
	srcEle.style.backgroundColor = "#D6D6D6";
	timeout = setTimeout(function () {
		$("#popMenu h1").html(srcEle.children[1].innerHTML);
		$("#popMenu").fadeIn("slow");
		$("#shade").fadeIn("slow");
		srcEle.style.backgroundColor = "#fff";
	}, 1000);
}
function getOut (event) {
	var srcEle = event.target;
	if( srcEle.id != "shade" )
		return;
	clearTimeout(timeout);
	$("#popMenu").fadeOut("slow");
	$("#shade").fadeOut("slow");
}
function enterChat (event) {
	var srcEle = event.target;
	if( srcEle.nodeName != "LI" )
		srcEle = srcEle.parentElement;
	srcEle.style.backgroundColor = "#D6D6D6";
		var url = "chatRoom.html?userName=" + encodeURIComponent($(srcEle).find(".user").html()) + "&imgSrc=" + encodeURIComponent($(srcEle).find("img").attr('src')) ; 
	window.location = url;
}
$(document).ready(wechat);