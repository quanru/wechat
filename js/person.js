var search = window.location.search.split('&');
var userName = decodeURIComponent(search[0].substring(10));
var imgSrc = decodeURIComponent(search[1].substring(7));

$(function  () {
	$("#gobackBtn, #menuBtn, #slideMenu").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#menuBtn, #slideMenu").bind("mouseup", "#212A2A", backgroundColor2);//颜色还原
	$("#gobackBtn").bind("click", goBack);//返回按钮
	var search = window.location.search.split('&');
	var userName = decodeURIComponent(search[0].substring(10));
	var imgSrc = decodeURIComponent(search[1].substring(7));
	$("#userName").html(userName);
	$("#userBox img").attr('src', imgSrc);
	$("#userBox img").bind("click", zoomIn);//放大图片
	$("#shade, #zoomImg").bind("click", zoomOut);//点击缩小图片
	$("#sendBtn").bind("click", sendMessage);//点击发消息按钮
	$("#visionChat").bind("click", visionChat);//点击视频聊天
	$("#menuBtn").bind("click", slideMenu2);//点击右上角菜单
	$("#personAlbum").bind("click", enterAlbum);//进入相册
});