function contacts () {
	$("#contacts").bind("mousedown", longClickChat);//长按列表弹出菜单
	$("#shade").bind("click", getOut);
	$("#contacts").bind("click", enterPerson);
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
}
function getOut (event) {
	var srcEle = event.target;
	if( srcEle.id != "shade" )
		return;
	clearTimeout(timeout);
	$("#popMenu").fadeOut("slow");
	$("#shade").fadeOut("slow");
}
function enterPerson (event) {
	var srcEle = event.target;
	if( srcEle.nodeName != "LI" )
		srcEle = srcEle.parentElement;
	if( srcEle.className != "friends" && srcEle.className != "friend" )
		return;
	srcEle.style.backgroundColor = "#D6D6D6";
	var url = "person.html?userName=" + encodeURIComponent($(srcEle).find(".user").html()) + "&imgSrc=" + encodeURIComponent($(srcEle).find("img").attr('src')) ; 
	window.location = url;
}
$(document).ready(contacts);