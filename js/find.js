$(function  () {
	$("#addBtn").bind("click", clickDown);
	$("#searchBtn").bind("click", clickDown);
	$("#friendCircle").bind("click", function  (event) {
		window.location = "friendCircle.html";
	});
});