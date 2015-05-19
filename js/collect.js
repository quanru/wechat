$(function  () {
	$("#gobackBtn, #searchBtn, #addBtn").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#gobackBtn, #cameraBtn").bind("mouseup", function  () {
	    this.style.backgroundColor = "#212A2A";
	});
	$("#gobackBtn").bind("click", function  (e) {//返回按钮
	    history.go(-1);
	});
});