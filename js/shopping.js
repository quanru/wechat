$(function  () {
	$("#toolBar, #slideMenu").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#turnOff, #later").bind("mousedown", "#EEE",backgroundColor2);//点关闭加与个人资料按钮后变色
	$("#menuBtn, #turnOffBtn, #slideMenu").bind("mouseup", "#212A2A", backgroundColor2);//还原颜色
	$("#turnOff").bind("click", goBack);//返回按钮
	$("#trunOffBtn").bind("click", turnOff);//点击关闭按钮
	$("#later").bind("click", function  () {//点击再逛逛按钮
		$("#shade").fadeOut("slow");
		this.style.backgroundColor = "#fff";
	});
	$("#menuBtn").bind("click", slideMenu);//点击右上角菜单
});