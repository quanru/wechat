$(function  () {
	var search = window.location.search.split('&');
	var userName = decodeURIComponent(search[0].substring(10));
	var imgSrc = decodeURIComponent(search[1].substring(8));
	var wordsNum = 3;
	$("#userName").html(userName);
	$("#personBtn").bind("click", function  (event) {
		var url = "person.html?userName=" + encodeURIComponent(userName) + "&imgSrc=" + encodeURIComponent('.' + imgSrc) ; 
		window.location = url;
	});
	$("#inputBar input").focus();
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