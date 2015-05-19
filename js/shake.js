$(function  () {
	$("#gobackBtn, #settingBtn").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#gobackBtn, #settingBtn").bind("mouseup", function  () {
	    event.target.style.backgroundColor = "#212A2A";
	});
	$("#gobackBtn").bind("click", function  (e) {//返回按钮
	    history.go(-1);
	});
	$("#botBar").bind("click", changeImg);
});
function changeImg (e) {
	var src = e.target,
		srcParent = $("#botBar img");
	if(src.nodeName != "IMG"){
		return;
	}
	srcParent.each(function  () {
		this.setAttribute("src", './img/' + this.id + '.jpg');
	});
	src.setAttribute("src", './img/' + src.id + '2.jpg');
	$("#toolBar h4").html(src.getAttribute('alt'));
}