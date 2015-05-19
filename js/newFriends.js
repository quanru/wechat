$(function  () {
	$("#gobackBtn").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#gobackBtn").bind("click", function  (e) {//返回按钮
	    window.location.go(-1);
	});
	$("#gobackBtn").bind("mouseup", function  () {
	    this.style.backgroundColor = "#212A2A";
	});
	$("#inputSearch").click(function  () {
		this.value = "";
	});
});