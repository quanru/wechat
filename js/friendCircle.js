$(function(){
    $("#gobackBtn, #cameraBtn").bind("mousedown", backgroundColor1);//点返回加与个人资料按钮后变色
    $("#gobackBtn, #cameraBtn").bind("mouseup", "#212A2A", backgroundColor2);//还原颜色
    $("#gobackBtn").bind("click", goBack);//返回按钮
    var isClick = false, //判断是否单击
            isMove = false,//判断单击后是否移动
            Y;//标记单击时鼠标纵坐标位置
    var updateNum = 7;
    $("#friendNews").bind("mousedown touchstart",function(e) {
        isClick = true;
        iY = (e.pageY || e.originalEvent.targetTouches[0].pageY)  - this.offsetTop;
        return false;
    });
    $("#friendNews").bind("mousemove touchmove", function(e) {
        if (isClick) {
            isMove = true;
            e = e || window.event;
            var oY = (e.pageY || e.originalEvent.targetTouches[0].pageY) - iY -75;//标记移动后容器所处在的纵坐标，减去75是顶栏加状态栏的宽度
            $("#friendNews").css("marginTop", oY  + "px");
            $("#spinner").css("display", "block");
            if(oY-75 > 30){
                $("#spinner").css("marginTop", 30 + "px");
            }
            else{
                $("#spinner").css("marginTop", oY + "px");
            }
        }
    });
    $("#friendNews").bind("mouseup touchend", function(e) {
        if (isClick && isMove) {//如果点击后并且移动了，则生成新状态
            $("#friendNews").animate({"marginTop":"0"});
            $("#spinner").fadeOut("slow");
            var newUpdate;
            if(updateNum%2 === 0)
                newUpdate = $("#update1").clone();
            else
                newUpdate = $("#update2").clone();
            newUpdate.attr("id", "update" + updateNum);
            updateNum++;
            newUpdate.prependTo($("#friendUpdate"));
        }
        isClick = false;
        isMove = false;
    });
    $("#friendUpdate").bind("click", zoomIn);//点击放大图片
    $("#friendUpdate").bind("mousedown touchstart", function  (e) {
        e.stopPropagation();
    });
    $("#shade, #zoomImg").bind("click", zoomOut);//点击缩小图片
});