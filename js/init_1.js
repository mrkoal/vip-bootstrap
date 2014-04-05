//初始化参数
var config={
	//左侧初始化参数
	left:{
		name:new Array("图标",new Array("基础控件","按钮","输入框","翻页","下拉菜单","数量控件","单选控件","复选控件"),"提示","表单","窗口","UI元素"),
		link:new Array("index-icon-font.html",new Array("index-btn.html","index-btn.html","index-input.html","index-page.html","index-menu.html","index-radio-count.html","index-radio.html","index-check.html"),"index-tips.html","index-form.html","index-window.html","index-ui.html")
	},
	//头部初始化参数
	top:{
		name:new Array("组件库","频道规范","运营规范","帮助"),
		link:new Array("index-icon-font.html","channel_name.html","operation_edm.html","#")
	},
	//底部初始化参数
	bot:{
		name:new Array("组件库","规范","关于我们","帮助"),
		link:new Array("index-icon-font.html","channel_name.html","#","#")
	}
	
}
$(function(){
	nsLefnav.init();
	nsTopnav.init()
	nsBotnav.init()
	nsTop.init();
})
//左侧链接函数
var nsLefnav={
	init:function(){
		var temp=""
		for(var i=0,len=config.left.name.length;i<len;i++){
			
			if(typeof(config.left.name[i])!="object"){
				temp+='<li>'+
					  '    <a  class="nav'+i+'_select'+i+' '+config.left.link[i].split(".")[0]+'" href="'+config.left.link[i]+'"  target="_blank">'+config.left.name[i]+'</a>'+
					  '</li>'
			} else {
	
				temp+='<li  class="nav'+i+'">'+
					  '    <a  class="nav'+i+'_select'+i+' '+config.left.link[i][0].split(".")[0]+'" href="'+config.left.link[i][0]+'"   target="_blank">'+config.left.name[i][0]+'</a>'+
					  '</li>'
				
				temp+='<li  class="son">'
					for(var j=1,len2=config.left.name[i].length;j<len2;j++){
						temp+='<a href="'+config.left.link[i][j]+'"    class="nav'+i+'_select'+j+' '+config.left.link[i][j].split(".")[0]+'"  target="_blank">'+config.left.name[i][j]+'</a>'
					}
				temp+='</li>'
			}
	
		}
		$("#left-nav").html(temp);
		this.selectHash();
	},
	
	checkurl:function(b){
		for(var i=0,len=$("#left-nav a").length;i<len;i++){
			if($("#left-nav a").eq(i).hasClass(b)){
				if($("#left-nav a").eq(i).parent().hasClass("son")){
		
					var t=$("#left-nav a").eq(i).attr("class").split("_");
					$("."+t[0]).addClass("active")
					$("#left-nav a").eq(i).addClass("act")
				} else {
					$("#left-nav a").eq(i).parent().addClass("active")
				}
			} 
		}
	},
	//检查文件名
	selectHash:function(){
		var l=(window.location).toString().split("/");
		var h=l[l.length-1].split(".html")
		this.checkurl(h[0])
	}
}
var nsTopnav={
	init:function(){
		
		var temp=""
		for(var i=0,len=config.top.name.length;i<len;i++){
			
			temp+='<li  class="topNav'+i+'_select'+i+' '+config.top.link[i].split(".")[0]+'" onclick="window.location=\''+config.top.link[i]+'\'">'+
				  '    <a   target="_blank">'+config.top.name[i]+'</a>'+
				  '</li>'
	
		}
		$(".navbar-nav").html(temp);
		this.selectHash();
	},
	
	checkurl:function(b){
		
		for(var i=0,len=$(".navbar-nav li").length;i<len;i++){
			if($(".navbar-nav li").eq(i).hasClass(b)){
				$(".navbar-nav li").eq(i).addClass("active")
				
			}

			
			
		}
	},
	//检查文件名
	selectHash:function(){
		
		var l=(window.location).toString().split("/");
		var h=l[l.length-1].split(".html")
		this.checkurl(h[0]);
		
		if(h[0].indexOf("index")!=-1){
			$(".navbar-nav li").eq(0).addClass("active")
		}
		if(h[0].indexOf("channel")!=-1){
			$(".navbar-nav li").eq(1).addClass("active")
		}
		if(h[0].indexOf("operation")!=-1){
			$(".navbar-nav li").eq(2).addClass("active")
		}
	}
}
var nsBotnav={
	init:function(){
		
		var temp=""
		for(var i=0,len=config.bot.name.length;i<len;i++){
			if(i==len-1){
				temp+=' <a   href="'+config.bot.link[i]+'"   target="_blank">'+config.bot.name[i]+'</a> '
			} else {
				temp+=' <a   href="'+config.bot.link[i]+'"   target="_blank">'+config.bot.name[i]+'</a>  |  '
			}

		}
		$(".f-link").html(temp);
		
	}
}
//返回到顶部
var nsTop={
	m:{x:82,y:-55},
	init:function(){
		var a="<a class='a_tops'></a>";
		$("body").append(a);
		nsTop.rest();
		
		$(".a_tops").click(function(){
			$("html, body").animate({scrollTop: 0},600)
		});
		
		
		$(window).scroll(function(){
			
			$(document).scrollTop()>0?nsTop.show():nsTop.hide();
		});
		
		$(window).resize(function(){
			nsTop.rest()
		});
	},
	show:function(){

		true?$(".a_tops").css({"bottom":this.m.x}):$(".a_tops").stop().animate({"bottom":this.m.x},500);

	},
	hide:function(){
		
		true?$(".a_tops").css({"bottom":this.m.y}):$(".a_tops").stop().animate({"bottom":this.m.y},500);
		$(".down").removeAttr("style");
	
	},
	rest:function(){
		var b1=($(window).width()-1000)/4<90;
		var b=($(window).width()-1000)/4-$(".a_tops").width()/2;
		b<0?b=10:"";
		b1?$(".a_tops").css({"right":b}):"";
		$(".a_tops").css({"right":b<10?10:b1?b:90});
	}
};
