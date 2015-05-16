$(function  () {
	var search = window.location.search.split('&');
	var userName = decodeURIComponent(search[0].substring(10));
	var imgSrc = decodeURIComponent(search[1].substring(8));
	$("#userName").html(userName);
	$("#personBtn").bind("click", function  (event) {
		var url = "person.html?userName=" + encodeURIComponent(userName) + "&imgSrc=" + encodeURIComponent('.' + imgSrc) ; 
		window.location = url;
	});
	$("#bottomBar input").focus();
});