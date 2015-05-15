function wechat () {
	$("#chatLists").bind("mousedown", longClickChat);//长按列表弹出菜单
	$("#shade").bind("click", getOut);//点击背景退出菜单
	$("#chatLists").bind("click", enterChat);//单击进入聊天窗口
	$("#addBtn").bind("click", clickDown);
	$("#searchBtn").bind("click", clickDown);
}
function longClickChat (event) {
	var srcEle = event.target;
	if( srcEle.nodeName != "LI" )
		srcEle = srcEle.parentElement;
	if( srcEle.className != "friends" && srcEle.className != "friend" )
		return;
	srcEle.style.backgroundColor = "#D6D6D6";
	timeout = setTimeout(function () {
		$("#popMenu h1").html(srcEle.children[1].innerHTML);
		$("#popMenu").fadeIn("slow");
		$("#shade").fadeIn("slow");
		srcEle.style.backgroundColor = "#fff";
	}, 1000);

	$("#delChat").bind("click", function  (event) {
		event.target.style.backgroundColor = "#D6D6D6";
		srcEle.remove();
		$("#popMenu").fadeOut("slow");
		$("#shade").fadeOut("slow");
	});//删除聊天
	$("#setTop").bind("click", function  () {
		event.target.style.backgroundColor = "#D6D6D6";
		$(srcEle.parentElement).prepend(srcEle);
		$(srcEle).addClass("setTop");
		$("#popMenu").fadeOut("slow");
		$("#shade").fadeOut("slow");
	});//置顶聊天
	$("#unread").bind("click", function  () {
		event.target.style.backgroundColor = "#D6D6D6";
		$('<img >', {
			class:'unreadTag',
			src:'./img/jiaobiao.jpg'
		}).appendTo($(srcEle));
		$("#popMenu").fadeOut("slow");
		$("#shade").fadeOut("slow");
	});//标为未读
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