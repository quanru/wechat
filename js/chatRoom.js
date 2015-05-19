$(function  () {
	$("#gobackBtn, #personBtn").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
	$("#gobackBtn").bind("click", function  (e) {//返回按钮
		history.go(-1);
	});
	var search = window.location.search.split('&'),
		userName = decodeURIComponent(search[0].substring(10)),
		imgSrc = decodeURIComponent(search[1].substring(8)),
		wordsNum = 3;//聊天信息起始索引
	$("#userName").html(userName);
	$("#personBtn").bind("click", function  (event) {
		var url = "person.html?userName=" + encodeURIComponent(userName) + "&imgSrc=" + encodeURIComponent('.' + imgSrc) ; 
		window.location = url;
	});
	$("#inputBar input").focus();//获取输入框焦点
	$("#inputBar input").bind("keypress", function  (e) {
		if(e.keyCode == 13){
			var newWords;
			if(wordsNum%2 === 0)
			    newWords = $("#words1").clone();
			else
			    newWords = $("#words2").clone();

			 newWords.attr("id", "words" + wordsNum);
			 newWords.find("p").text($("#inputBar input").val());
			 $("#inputBar input").val("");
			 wordsNum++;
			 newWords.appendTo($("#words"));
		}
	});
});