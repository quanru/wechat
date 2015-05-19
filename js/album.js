$(function(){
    $("#gobackBtn, #cameraBtn").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
    $("#gobackBtn, #cameraBtn").bind("mouseup", function  () {
        this.style.backgroundColor = "#212A2A";
    });
    $("#gobackBtn").bind("click", function  (e) {//返回按钮
        history.go(-1);
    });
    var isClick = false, //判断是否单击
            isMove = false,//判断单击后是否移动
            iY;//标记单击时鼠标纵坐标位置
    $("#myAlbum").bind("mousedown touchstart",function(e) {
        isClick = true;
        iY = (e.pageY || e.originalEvent.targetTouches[0].pageY)  - this.offsetTop;
        return false;
    });
    $("#myAlbum").bind("mousemove touchmove", function(e) {
        if (isClick) {
            isMove = true;
            e = e || window.event;
            var oY = (e.pageY || e.originalEvent.targetTouches[0].pageY) - iY -75;//标记移动后容器所处在的纵坐标，减去75是顶栏加状态栏的宽度
            $("#myAlbum").css("marginTop", oY  + "px");
        }
    });
    $("#myAlbum").bind("mouseup touchend", function(e) {
        if (isClick && isMove) {//如果点击后并且移动了
            $("#myAlbum").animate({"marginTop":"0"});
        }
        isClick = false;
        isMove = false;
    });
    $("#photos").bind("click", zoomIn);
    $("#photos").bind("mousedown touchstart", function  (e) {
        e.stopPropagation();
    });
    $("#shade, #zoomImg").bind("click", getOut);//点击背景退出菜单
});
function zoomIn (event) {
    var srcEle = event.target;
    if(srcEle.className != "photo")
        return;
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