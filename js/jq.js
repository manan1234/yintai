$(document).ready(function(){
// head
$(".headph").eq(1).hide();
$(".ytfirst").hover(function(){
	$(".bjtp").css("backgroundPosition","-225px -27px")},
	function(){
		$(".bjtp").css("backgroundPosition","-225px 0px")})
$(".ytwx").hover(function(){
	$(".bjtp1").css("backgroundPosition","-225px -87px");
	$(".syjt").css("backgroundPosition","-175px -128px");
	$(".wx").show();
},
	function(){
		$(".bjtp1").css("backgroundPosition","-225px -57px");
		$(".syjt").css("backgroundPosition","-175px -111px");
		$(".wx").hide();
	})
$(".ytsj").hover(function(){
	$(".syjt1").css("backgroundPosition","-175px -128px");
	$(".headph").eq(1).show().end().eq(0).hide();
	$(".sjyt").show();
},
	function(){
		$(".syjt1").css("backgroundPosition","-175px -111px");
	    $(".headph").eq(0).show().end().eq(1).hide();
	    $(".sjyt").hide();		
	})
$(".myyt").hover(function(){
	$(".syjt2").css("backgroundPosition","-175px -128px");
	$(".wdyt").show();
},
	function(){
		$(".syjt2").css("backgroundPosition","-175px -111px");
		$(".wdyt").hide();
	})
// 购物袋
$(".gwd").hover(function(){
	$(".kk").show();
},function(){
    $(".kk").hide();
})
// banner
var flag=true;
var now=0;
var next=0;
var t=setInterval(move,2000);
$(".rect").eq(0).addClass("hot");
$(".bannermain img").hide();
$(".bannermain img").eq(0).show();
$(".bannerzy img").hide();
$(".bannerzy img").eq(0).show();
$(".bannermiddle").hover(function(){
    	clearInterval(t);
    	$(".anniuL").show();
    	$(".anniuR").show();
    },function(){
        t=setInterval(move,2000);
        $(".anniuL").hide();
    	$(".anniuR").hide();
    })
function move(){
	next++;
	if (next==$(".bannermain img").length) {
       next=0;
	}
	$(".bannermain img").eq(now).fadeOut().end().eq(next).fadeIn(function(){flag=true});
	$(".bannerzy img").eq(now).fadeOut().end().eq(next).fadeIn();
	$(".rect").eq(now).removeClass("hot").end().eq(next).addClass("hot");
	now=next;
}
function moveL(){
	next--;
	if (next<0) {
       next=$(".bannermain img").length-1;
	}
	$(".bannermain img").eq(now).fadeOut().end().eq(next).fadeIn(function(){flag=true});
	$(".bannerzy img").eq(now).fadeOut().end().eq(next).fadeIn();
	$(".rect").eq(now).removeClass("hot").end().eq(next).addClass("hot");
	now=next;
}
$(".anniuL").click(function(){
	if (flag) {
       moveL();
       flag=false;
	}
})
$(".anniuR").click(function(){
	if (flag) {
       move();
       flag=false;
	}
})
$(".rect").mouseover(function(){
	var index=$(this).index();
    $(".bannermain img").eq(now).fadeOut().end().eq(index).fadeIn();
    $(".bannerzy img").eq(now).fadeOut().end().eq(index).fadeIn();
    $(".rect").eq(now).removeClass("hot").end().eq(index).addClass("hot");
    now=index;
    next=index;
})
// 超值特卖
$(".zuox").eq(0).css("zIndex",100);
$(".cztm").eq(0).css("borderBottom","5px solid #df0046");
$(".triangle").eq(0).show();
$(".cztm").mouseover(function(){
	var index=$(".cztm").index($(this));
	$(".zuox").css("display","none").eq(index).css("display","block");
	$(".triangle").css("display","none").eq(index).css("display","block");
	$(".cztm").css("borderBottom","5px solid #272727").eq(index).css("borderBottom","5px solid #df0046");
})
// 超值特卖框线
$(".jqk").hover(function(){
	var index=$(".jqk").index($(this));
    $(".bleft").eq(index).animate({"height":262});
    $(".bright").eq(index).animate({"height":262});
    $(".btop").eq(index).animate({"width":222});
    $(".bbottom").eq(index).animate({"width":222});
},function(){
	var index=$(".jqk").index($(this));
    $(".bleft").eq(index).animate({"height":0});
    $(".bright").eq(index).animate({"height":0});
    $(".btop").eq(index).animate({"width":0});
    $(".bbottom").eq(index).animate({"width":0});
})
// 银泰百货
$(".ytbhtkmainrightx").eq(1).css("display","none");
$(".triangle1").eq(0).css("display","block");
$(".wire").eq(0).css("display","block");
$(".zero").mouseover(function(){
	var index=$(".zero").index($(this));
	$(".ytbhtkmainrightx").css("display","none").eq(index).css("display","block");
	$(".triangle1").css("display","none").eq(index).css("display","block");
	$(".wire").css("display","none").eq(index).css("display","block");
	$(".zero").css("fontWeight","normal").eq(index).css("fontWeight","blod");

})
// 超值特卖框线
$(".bzk").hover(function(){
	var index=$(".bzk").index($(this));
    $(".bleft1").eq(index).animate({"height":250});
    $(".bright1").eq(index).animate({"height":250});
    $(".btop1").eq(index).animate({"width":200});
    $(".bbottom1").eq(index).animate({"width":200});
},function(){
	var index=$(".bzk").index($(this));
    $(".bleft1").eq(index).animate({"height":0});
    $(".bright1").eq(index).animate({"height":0});
    $(".btop1").eq(index).animate({"width":0});
    $(".bbottom1").eq(index).animate({"width":0});
})
// main轮播图
$(".ssmpmiddle").hover(function(){
    var index=$(".ssmpmiddle").index($(this));
    $(".anL").eq(index).css("display","block").end().eq(1).css("display","none").end().eq(2).css("display","none");
    $(".anR").eq(index).css("display","block").end().eq(1).css("display","none").end().eq(2).css("display","none");
},function(){
    var index=$(".ssmpmiddle").index($(this));
    $(".anL").eq(index).css("display","none");
    $(".anR").eq(index).css("display","none");
})
$(".ssmpmiddle").each(function(index,val){
	if(!(index==1||index==2)){
	mainlb($(".ssmpmiddle:eq("+index+") img"),$(".ssmpmiddle:eq("+index+") .xanniu11"),$(".ssmpmiddle:eq("+index+") .anR"),$(".ssmpmiddle:eq("+index+") .anL"))
 }
	})
function mainlb(x,y,z,m){ 
var flagx=true;
var nowx=0;
var nextx=0;
var width=$(".ssmpmiddle").width();
y.eq(0).css("background","#df0046");
x.eq(0).css("zIndex",1);
function mainlunbo(){
	nextx++;
	if (nextx==x.length) {
       nextx=0;
	}
    x.eq(nextx).css("left",width).end().eq(nowx).animate({"left":-width},function(){flagx=true}).end().eq(nextx).animate({"left":0});
    y.eq(nowx).css("background","#272727").end().eq(nextx).css("background","#df0046");
	nowx=nextx;
}
function mainlunboL(){
	nextx--;
	if (nextx<0) {
       nextx=x.length-1;
	}
    x.eq(nextx).css("left",-width).end().eq(nowx).animate({"left":width},function(){flagx=true}).end().eq(nextx).animate({"left":0});
    y.eq(nowx).css("background","#272727").end().eq(nextx).css("background","#df0046");
	nowx=nextx;
}
z.click(function(){
	if (flagx) {
       mainlunbo();
       flagx=false;
	}
})
m.click(function(){
	if (flagx) {
       mainlunboL();
       flagx=false;
	}
})
y.click(function(){
	var index=y.index($(this));
	 if(nowx<index){
         x.eq(index).css("left",width).end().eq(nowx).animate({"left":-width},function(){flagx=true}).end().eq(index).animate({"left":0});
     }
     else if(nowx>index){
         x.eq(index).css("left",-width).end().eq(nowx).animate({"left":width},function(){flagx=true}).end().eq(index).animate({"left":0});
     }
     else{
        return;
     }
     y.eq(nowx).css("background","#272727").end().eq(index).css("background","#df0046");
     nowx=index;
     nextx=index;
})
}
// main节点轮播
$(".x .xx").each(function(index,val){
jdmain(index,$(".x:eq("+index+") .xxx:first-child"),$(".x:eq("+index+") .xx"),$(".x:eq("+index+") .xxx:last-child"),$(".x:eq("+index+") .you"),$(".x:eq("+index+") .zuo"))

})
function jdmain(n,m,a,b,c,d,e){
var flag1=true;
var aw=$(".x:eq(0) .xxx").eq(0).outerWidth(true);
    function hh(){
    	a.eq(0).animate({left:-aw},function(){
                a.append($(".x:eq("+n+") .xxx:first-child")).css("left",0);
                flag1=true;
    	})
    }
    function hhL(){
        b.insertBefore(m);
        a.css("left",-aw).animate({left:0},function(){flag1=true});
    }
    c.click(function(){
         if (flag1) {
         	hh();
         	flag1=false;
         }
    })
    d.click(function(){
         if (flag1) {
         	hhL();
         	flag1=false;
         }
    })
}
// 固定定位
  var s;
  var flag_0=true;
  var flag_1=true;
  var flag_2=true;
  $(".ssmpmain").each(function(index,val){
  		$(".ssmpmain").eq(index).data("h",$(".ssmpmain").eq(index).offset().top);
  })
  $(window).on("scroll",function(){
  	if (flag_2) {
  		var obj=document.body.scrollTop?document.body:document.documentElement;
  		var Top=$(obj).scrollTop();
  		if (Top>=$(".ssmpmain").eq(0).data("h")-300) {
          $(".guding").css("display","block");
    }
    	else{
          $(".guding").css("display","none");
      		
    	}
    	$(".ssmpmain").each(function(index,val){
    		if (Top>=$(".ssmpmain").eq(index).data("h")-66) {
    			$(".ssmpmain").each(function(index1,val1){
                  $(".imggd").eq(index1).css("display","block");
    			})
                  $(".imggd").eq(index).css("display","none");
                  s=index;
    		}
    		if (Top<$(".ssmpmain").eq(index).data("h")-66) {
                  $(".imggd").eq(index).css("display","block");
        	}
    	})
   }
  })
  		jQuery.backTop($(".guding10"),1000);
  		$(".guding11").each(function(index,val){
  			$(".guding11").eq(index).data("x",index);

  			$(".guding11").eq(index).hover(function(){
                  $(".imggd").eq($(".guding11").eq(index).data("x")).css("display","none");
  			},function(){
  				if (index==s) {
		        return;
	       }
                  $(".imggd").eq($(".guding11").eq(index).data("x")).css("display","block");
                  
  			})
  		})
  		$(".guding11").each(function(index,val){
  			$(".guding11").eq(index).data("x",index);

  			$(".guding11").eq($(".guding11").eq(index).data("x")).click(function(){
  				flag_2=false;
  				$(document.body).animate({scrollTop:$(".ssmpmain").eq($(".guding11").eq(index).data("x")).data("h")},function(){flag_2=true})
  				$(document.documentElement).animate({scrollTop:$(".ssmpmain").eq($(".guding11").eq(index).data("x")).data("h")},function(){flag_2=true})
  				s=$(".guding11").eq(index).data("x");
  			})
  		})
// 框线

$(".jqmk").hover(function(){
	var index=$(".jqmk").index($(this));
    $(".bleft2").eq(index).animate({"height":182});
    $(".bright2").eq(index).animate({"height":182});
    $(".btop2").eq(index).animate({"width":272});
    $(".bbottom2").eq(index).animate({"width":272});
},function(){
	var index=$(".jqmk").index($(this));
    $(".bleft2").eq(index).animate({"height":0});
    $(".bright2").eq(index).animate({"height":0});
    $(".btop2").eq(index).animate({"width":0});
    $(".bbottom2").eq(index).animate({"width":0});
})
// 侧边全部分类
   $(".dh1").eq(0).hover(function(){
     $(".dp").css("display","block");
     $(".xs").eq(0).css("display","none");
     $(".dhbj").css("backgroundPosition","0px -126px");
   },function(){
     $(".dp").css("display","none");
     $(".xs").eq(0).css("display","block");
     $(".dhbj").css("backgroundPosition","0px -108px");  
   })
   $(".dh1").eq(1).hover(function(){
     $(".dp1").css("display","block");
     $(".xs").eq(1).css("display","none");
     $(".dhbj1").css("backgroundPosition","-17px -128px");
   },function(){
     $(".dp1").css("display","none");
     $(".xs").eq(1).css("display","block");
     $(".dhbj1").css("backgroundPosition","-17px -110px");  
   })
   $(".dh1").eq(2).hover(function(){
     $(".dp2").css("display","block");
     $(".xs").eq(2).css("display","none");
     $(".dhbj2").css("backgroundPosition","-34px -128px");
   },function(){
     $(".dp2").css("display","none");
     $(".xs").eq(2).css("display","block");
     $(".dhbj2").css("backgroundPosition","-34px -110px");  
   })
   $(".dh1").eq(3).hover(function(){
     $(".dp3").css("display","block");
     $(".xs").eq(3).css("display","none");
     $(".dhbj3").css("backgroundPosition","-51px -129px");
   },function(){
     $(".dp3").css("display","none");
     $(".xs").eq(3).css("display","block");
     $(".dhbj3").css("backgroundPosition","-51px -111px");  
   })
   $(".dh1").eq(4).hover(function(){
     $(".dp4").css("display","block");
     $(".xs").eq(4).css("display","none");
     $(".dhbj4").css("backgroundPosition","-68px -129px");
   },function(){
     $(".dp4").css("display","none");
     $(".xs").eq(4).css("display","block");
     $(".dhbj4").css("backgroundPosition","-68px -111px");  
   })
   $(".dh1").eq(5).hover(function(){
     $(".dp5").css("display","block");
     $(".xs").eq(5).css("display","none");
     $(".dhbj5").css("backgroundPosition","-85px -128px");
   },function(){
     $(".dp5").css("display","none");
     $(".xs").eq(5).css("display","block");
     $(".dhbj5").css("backgroundPosition","-85px -110px");  
   })
   $(".dh1").eq(6).hover(function(){
     $(".dp6").css("display","block");
     $(".xs").eq(6).css("display","none");
     $(".dhbj6").css("backgroundPosition","-102px -129px");
   },function(){
     $(".dp6").css("display","none");
     $(".xs").eq(6).css("display","block");
     $(".dhbj6").css("backgroundPosition","-102px -111px");  
   })
   $(".dh1").eq(7).hover(function(){
     $(".dp7").css("display","block");
     $(".xs").eq(7).css("display","none");
     $(".dhbj7").css("backgroundPosition","-119px -129px");
   },function(){
     $(".dp7").css("display","none");
     $(".xs").eq(7).css("display","block");
     $(".dhbj7").css("backgroundPosition","-119px -111px");  
   })
   $(".dh1").eq(8).hover(function(){
     $(".dp8").css("display","block");
     $(".xs").eq(8).css("display","none");
     $(".dhbj8").css("backgroundPosition","-136px -129px");
   },function(){
     $(".dp8").css("display","none");
     $(".xs").eq(8).css("display","block");
     $(".dhbj8").css("backgroundPosition","-136px -111px");  
   })
   $(".dh1").eq(9).hover(function(){
     $(".dp9").css("display","block");
     $(".xs").eq(9).css("display","none");
     $(".dhbj9").css("backgroundPosition","-153px -129px");
   },function(){
     $(".dp9").css("display","none");
     $(".xs").eq(9).css("display","block");
     $(".dhbj9").css("backgroundPosition","-153px -111px");  
   })
//懒加载
$("lazy").css({width:"100%",height:"100%"});
// $("img").addClass("lazy");
  $("img.lazy").lazyload({
  	threshold:200
  })
})
