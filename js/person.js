var search = window.location.search.split('&');
var userName = decodeURIComponent(search[0].substring(10));
var imgSrc = decodeURIComponent(search[1].substring(7));
$(function  () {
	$("#userName").html(userName);
	$("#userBox img").attr('src', imgSrc);
	$("#userBox img").bind("click", zoomIn);
	$("#shade, #zoomImg").bind("click", getOut);//点击背景退出菜单
	$("#sendBtn").bind("click", sendMessage);//点击发消息按钮
	$("#visionChat").bind("click", visionChat);//点击视频聊天
	$("#menuBtn").bind("click", slideMenu);//点击右上角菜单
});

function zoomIn (event) {
	var srcEle = event.target;
	var img = $(srcEle).clone();
	img.appendTo($("#shade"));
	img.attr('id', 'zoomImg');
	img.animate({
		width:'480px',
		height:'480px'
	});
	$("#shade").css("backgroundColor", "rgba(0,0,0,1)");
	$("#shade").css("display", "block");
}
function getOut (event) {
	var img = $("#zoomImg");
	img.animate({
		width:'0',
		height:'0'
	});
	$("#shade").fadeOut("slow");
	setTimeout(function  () {
		img.remove();
	}, 1000);
}
function sendMessage (event) {
	var url = "chatRoom.html?userName=" + encodeURIComponent(userName) + "&imgSrc=" + encodeURIComponent(imgSrc);
	window.location = url;
}
function visionChat (event) {
	$("#shade").css("backgroundColor", "rgba(0,0,0,0.5)");
	$("#shade").fadeIn("slow");
	$("#popMenu").fadeIn("slow");
}
function slideMenu (event) {
	$("#slideMenu ul li:last-child img").attr("src", imgSrc);
	$("#slideMenu").slideToggle("slow");
}