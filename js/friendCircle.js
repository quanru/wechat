$(function(){
    var dragging = false;
    var iX, iY;
    var updateNum = 3;
    $("#friendNews").mousedown(function(e) {
        dragging = true;
        iY = e.clientY - this.offsetTop;
        return false;
    });
    document.onmousemove = function(e) {
        if (dragging) {
        e = e || window.event;
        var oY = e.clientY - iY;
        $("#friendNews").css("marginTop", oY - 75 + "px");
        $("#spinner").css("display", "block");
        return false;
        }
    };
    $(document).mouseup(function(e) {
        if (dragging) {
            $("#friendNews").animate({"marginTop":"0"});
            $("#spinner").css("display", "none");
            var newUpdate;
            if(updateNum%2 === 0)
                newUpdate = $("#update1").clone();
            else
                newUpdate = $("#update2").clone();
            newUpdate.attr("id", "update" + updateNum);
            updateNum++;
            newUpdate.prependTo($("#friendUpdate"));
        }
        dragging = false;
        e.cancelBubble = true;
    });
    $(".newsImg").bind("click", zoomIn);
    $("#shade, #zoomImg").bind("click", getOut);//点击背景退出菜单
});
function zoomIn (event) {
    var srcEle = event.target;
    var img = $(srcEle).clone();
    img.appendTo($("#shade"));
    img.attr('id', 'zoomImg');
    img.animate({
        width:'480px',
        height:'480px'
    });
    $("#shade").css("display", "block");
}
function getOut (event) {
    var img = $("#zoomImg");
    img.animate({
        width:'0',
        height:'0'
    });
    $("#shade").fadeOut("slow");
    setTimeout(function  () {
        img.remove();
    }, 1000);
}