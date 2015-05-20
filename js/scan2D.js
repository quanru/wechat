$(function  () {
	$("#gobackBtn, #menuBtn, #slideMenu").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#gobackBtn, #menuBtn, #slideMenu").bind("mouseup", "#212A2A", backgroundColor2);
	$("#gobackBtn").bind("click", goBack);//返回按钮
	$("#menuBtn").bind("click", slideMenu);//点击右上角菜单
	$("#botBar").bind("click", changeImg);
	cycleScan();//循环扫描动画
});
function cycleScan () {
	$("#scrollBar").css("bottom", "100%");
	$("#scrollBar").animate({bottom:'0'}, 1500, cycleScan);
}
function changeImg (e) {
	var src = e.target,
		srcParent = $("#botBar img");
	if(src.nodeName != "IMG"){
		return;
	}
	srcParent.each(function  () {
		this.setAttribute("src", './img/' + this.id + '.jpg');
	});
	$("#scrollBar").show();
	switch(src.id){
		case '2Dcode':
			$("#scanFrame").animate({width:'220px', height:'200px'}, 1500);
			break;
		case 'cover':
		case 'street':
			$("#scanFrame").animate({width:'280px', height:'320px'}, 1500);
			break;
		case 'translate':
			$("#scanFrame").animate({width:'200px', height:'50px'}, 1500);
			$("#scrollBar").hide();
			break;
		default:
			break;
	}
	src.setAttribute("src", './img/' + src.id + '2.jpg');
	$("#toolBar h4").html(src.getAttribute('alt'));
	$("#middleFrame h2").html(src.getAttribute('tip'));
}