var search = window.location.search.split('&');
var userName = decodeURIComponent(search[0].substring(10));
var imgSrc = decodeURIComponent(search[1].substring(8));
$(function  () {
	$("#userName").html(userName);
	$("#userBox img").attr('src', '.' + imgSrc);
	$("#userBox img").bind("click", zoomIn);
	$("#shade, #zoomImg").bind("click", getOut);//点击背景退出菜单
	$("#sendBtn").bind("click",sendMessage);
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