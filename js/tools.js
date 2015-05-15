function longClickChat (event) {
	var srcEle = event.target;
	if( srcEle.nodeName != "LI" )
		srcEle = srcEle.parentElement;
	if( srcEle.className != "friends" && srcEle.className != "friend" )
		return;
	timeout = setTimeout(function () {
		$("#popMenu h1").html(srcEle.children[1].innerHTML);
		$("#popMenu").fadeIn("slow");
		$("#shade").fadeIn("slow");
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