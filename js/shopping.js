$(function  () {
	$("#trunOffBtn, #menuBtn, #turnOff, #later").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#turnOff, #later").bind("mousedown", backgroundColor2);//点返回加与个人资料按钮后变色
	$("#menuBtn").bind("mouseup", function  () {
		this.style.backgroundColor = "#212A2A";
	});
	$("#turnOff").bind("click", function  (e) {//返回按钮
		history.go(-1);
	});
	$("#trunOffBtn").bind("click", turnOff);//点击关闭按钮
	$("#later").bind("click", function  () {//点击再逛逛按钮
		$("#shade").fadeOut("slow");
		this.style.backgroundColor = "#fff";
	});
	$("#menuBtn").bind("click", slideMenu);//点击右上角菜单
});

function turnOff (event) {
	$("#trunOffBtn").css("backgroundColor","#212A2A");
	$("#shade").css("backgroundColor", "rgba(0,0,0,0.5)");
	$("#shade").fadeIn("slow");
	$("#popMenu").fadeIn("slow");
}
function slideMenu (event) {
	$("#slideMenu").slideToggle("slow");
}