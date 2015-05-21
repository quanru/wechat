function backgroundColor1 (event) {//设置背景色为#F2777A
	var src = event.target;
	if(src.className == "unChange"){
		src = src.parentElement;
	}
	else if(this.nodeName == "LI"){
		src = this;
	}
	src.style.backgroundColor = "#F2777A";
}
function backgroundColor2 (event) {//设置背景色为event.data
	var src = event.target;
	if(src.className == "nav"){
		return;
	}
	if(src.parentElement.nodeName == "LI" || src.className == "unChange"){
		src.parentElement.style.backgroundColor = event.data;
	}
	else{
		src.style.backgroundColor = event.data;
	}
}
function goBack (event) {//返回按钮
	window.history.go(-1);
}
function longClick (event) {//长按弹出菜单
	srcEle = event.target;
	if( srcEle.nodeName != "LI" )
		srcEle = srcEle.parentElement;
	if( $(srcEle).hasClass("friends") === false && $(srcEle).hasClass("friend")  === false)
		return;
	srcEle.style.backgroundColor = "#D6D6D6";
	timeout = setTimeout(function () {
		$("#popMenu h1").html(srcEle.children[1].innerHTML);
		$("#popMenu").fadeIn("slow");
		$("#shade").fadeIn("slow");
		srcEle.style.backgroundColor = "#fff";
		$("#contactsList").unbind("click");//解决Firefox下长按后会单击进入聊天窗口，原因是contactsList可滚动，此为折衷方案
		clearTimeout(timeout);
	}, 1000);
	$("#contactsList").bind("click", enterPerson);//单击进入聊天窗口，重新注册事件
}
function getOut (event) {//退出长按菜单
	var srcEle = event.target;
	if( srcEle.id != "shade" )
		return;
	$("#popMenu").fadeOut("slow");
	$("#shade").fadeOut("slow");
}
function enterChat (event) {//进入聊天页面
	var srcEle = event.target;
	if( srcEle.nodeName != "LI" )
		srcEle = srcEle.parentElement;
		var url = "chatRoom.html?userName=" + encodeURIComponent($(srcEle).find(".user").html()) + "&imgSrc=" + encodeURIComponent($(srcEle).find("img").attr('src')) ; 
	window.location = url;
}
function enterPerson (event) {//进入个人资料卡页面
	clearTimeout(timeout);
	var srcEle = event.target;
	if( srcEle.nodeName != "LI" )
		srcEle = srcEle.parentElement;
	if( srcEle.className != "friends" && srcEle.className != "friend" )
		return;
	var url = "person.html?userName=" + encodeURIComponent($(srcEle).find(".user").html()) + "&imgSrc=" + encodeURIComponent($(srcEle).find("img").attr('src')) ; 
	window.location = url;
}
function zoomIn (event) {//放大图片
    var srcEle = event.target;
    if(!$(srcEle).hasClass('zoomAble')){//如果该图片为不可放大的类，则返回
    	return;
    }
    var img = $(srcEle).clone();
    img.appendTo($("#shade"));
    img.attr('id', 'zoomImg');
    img.animate({
        width:'480px',
        height:'480px'
    });
    $("#shade").css("display", "block");
}
function zoomOut (event) {//缩小图片
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
function sendMessage (event) {//点击发消息按钮
	var url = "chatRoom.html?userName=" + encodeURIComponent(userName) + "&imgSrc=" + encodeURIComponent(imgSrc);
	window.location = url;
}
function visionChat (event) {//点击视频聊天
	$("#shade").css("backgroundColor", "rgba(0,0,0,0.5)");
	$("#shade").fadeIn("slow");
	$("#popMenu").fadeIn("slow");
}
function enterAlbum (event) {//进入相册
	this.style.backgroundColor = "#D6D6D6";
	window.location = "album.html";
}
function changeShake (event) {//切换摇一摇目标
	var src = event.target,
		srcParent = $("#botBar img");
	if(src.nodeName != "IMG"){
		return;
	}
	srcParent.each(function  () {
		this.setAttribute("src", './img/' + this.id + '.jpg');
	});
	src.setAttribute("src", './img/' + src.id + '2.jpg');
	$("#toolBar h4").html(src.getAttribute('alt'));
}
function slideMenu (event) {//弹出菜单
	$("#slideMenu").slideToggle("slow");
}
function slideMenu2 (event) {//针对person页面的弹出菜单，需要设置不同的头像
	$("#slideMenu li:last-child img").attr("src", imgSrc);
	$("#slideMenu").slideToggle("slow");
}
function turnOff (event) {//购物页面关闭按钮
	$("#trunOffBtn").css("backgroundColor","#212A2A");
	$("#shade").css("backgroundColor", "rgba(0,0,0,0.5)");
	$("#shade").fadeIn("slow");
	$("#popMenu").fadeIn("slow");
}
function bottomHref  (event) {//底栏导航
		var src = event.target;
		if( src.id == "wechat" || src.parentElement.id == "wechat"){//跳转到微信页面
			window.location = "wechat.html";
		}
		else if( src.id == "contacts" || src.parentElement.id == "contacts"){//跳转到联系人页面
			window.location = "contacts.html";
		}
		else if( src.id == "find" || src.parentElement.id == "find"){//跳转到发现页面
			window.location = "find.html";
		}
		else if( src.id == "me" || src.parentElement.id == "me"){//跳转到我页面
			window.location = "me.html";
		}
}
function meHref  (event) {//'我'页面导航
		var src = event.target;
		if( src.id == "personality" || src.parentElement.id == "personality"){//跳转到个人资料页面
			window.location = "personality.html";
		}
		else if( src.id == "album" || src.parentElement.id == "album"){//跳转到相册页面
			window.location = "album.html";
		}
		else if( src.id == "collect" || src.parentElement.id == "collect"){//跳转到收藏页面
			window.location = "collect.html";
		}
		else if( src.id == "wallet" || src.parentElement.id == "wallet"){//跳转到钱包页面
			window.location = "wallet.html";
		}
		else if( src.id == "cardBag" || src.parentElement.id == "cardBag"){//跳转到卡包页面
			window.location = "cardBag.html";
		}
		else if( src.id == "setting" || src.parentElement.id == "setting"){//跳转到设置页面
			window.location = "setting.html";
		}
		else if( src.id == "addFriends" || src.parentElement.id == "addFriends"){//跳转到添加好友页面
			window.location = "addFriends.html";
		}
		else if( src.id == "searchBtn" || src.parentElement.id == "searchBtn"){//跳转到添加好友页面
			window.location = "search.html";
		}
}
function findHref  (event) {//'发现'页面导航
		var src = event.target;
		if( src.id == "friendCircle" || src.parentElement.id == "friendCircle"){//跳转到朋友圈页面
			window.location = "friendCircle.html";
		}
		else if( src.id == "scan2D" || src.parentElement.id == "scan2D"){//跳转到扫一扫页面
			window.location = "scan2D.html";
		}
		else if( src.id == "shake" || src.parentElement.id == "shake"){//跳转到摇一摇页面
			window.location = "shake.html";
		}
		else if( src.id == "shopping" || src.parentElement.id == "shopping"){//跳转到购物页面
			window.location = "shopping.html";
		}
		else if( src.id == "addFriends" || src.parentElement.id == "addFriends"){//跳转到添加好友页面
			window.location = "addFriends.html";
		}
		else if( src.id == "searchBtn" || src.parentElement.id == "searchBtn"){//跳转到添加好友页面
			window.location = "search.html";
		}
}