window.onload=function() {
  //head下拉框
  //银泰首页
    var ytsy=$(".ytsy")[0];
    var ytfirst=$(".ytfirst")[0];
    var bjtp=$(".bjtp")[0]; 
    var ytwx=$(".ytwx")[0];
    var bjtp1=$(".bjtp1")[0];
    var wx=$(".wx");
    var syjt=$(".syjt");
    var syjt1=$(".syjt1");
    var headph=$(".headph");
    var ytsj=$(".ytsj")[0]
    var sjyt=$(".sjyt");
    var myyt=$(".myyt");
    var wdyt=$(".wdyt");
    var syjt2=$(".syjt2");
    headph[1].style.display="none";
    ytfirst.onmouseover=function(){
      bjtp.style.backgroundPosition="-225px -27px";
    }
    ytfirst.onmouseout=function(){
      bjtp.style.backgroundPosition="-225px 0px";
    }
    ytwx.onmouseover=function(){
      bjtp1.style.backgroundPosition="-225px -87px";
      wx[0].style.display="block";
      syjt[0].style.backgroundPosition="-175px -128px";
    }
    ytwx.onmouseout=function(){
      bjtp1.style.backgroundPosition="-225px -57px";
      wx[0].style.display="none";
      syjt[0].style.backgroundPosition="-175px -111px";
    }
    ytsj.onmouseover=function(){
      headph[1].style.display="block";
      headph[0].style.display="none";
      sjyt[0].style.display="block";
      syjt1[0].style.backgroundPosition="-175px -128px";
    }
    ytsj.onmouseout=function(){
      headph[1].style.display="none";
      headph[0].style.display="block";
      sjyt[0].style.display="none";
      syjt1[0].style.backgroundPosition="-175px -111px";
    }
    myyt[0].onmouseover=function(){
      wdyt[0].style.display="block";
      syjt2[0].style.backgroundPosition="-175px -128px";
    }
    myyt[0].onmouseout=function(){
      wdyt[0].style.display="none";
      syjt2[0].style.backgroundPosition="-175px -111px";
    }
//购物袋
    var gwd=$(".gwd");
    var kk=$(".kk");
    gwd[0].onmouseover=function(){
      kk[0].style.display="block";
    }
    gwd[0].onmouseout=function(){
      kk[0].style.display="none";
    }
//banner
    var rect=$(".rect");
    var imgs=$("img",$(".bannermain")[0]);
    var bimgs=$("img",$(".bannerzy")[0]);
    var bannermiddle=$(".bannermiddle");
    rect[0].classList.add("hot");
    var anniuL=$(".anniuL");
    var anniuR=$(".anniuR");
    var flag=true;
    var t=setInterval(move,2000);
    
    bannermiddle[0].onmouseover=function(){
        clearInterval(t);
        anniuL[0].style.display="block";
      anniuR[0].style.display="block";
    }
    bannermiddle[0].onmouseout=function(){
        t=setInterval(move,2000);
        anniuL[0].style.display="none";
      anniuR[0].style.display="none";
    }
    // 记录当前窗口中的下标
    var now=0;
    function move(){
        now++;
        if (now==imgs.length) {
           now=0;
      }
      for (var i = 0; i < imgs.length; i++) {
        animate(imgs[i],{opacity:0},function(){
          flag=true;
        });
        animate(bimgs[i],{opacity:0},function(){
          flag=true;
        });
        rect[i].classList.remove("hot");
      };
        animate(imgs[now],{opacity:1});
        animate(bimgs[now],{opacity:1});
        rect[now].classList.add("hot");
      }
       function moveL(){
        now--;
        if (now<0) {
           now=imgs.length-1;
      }
      for (var i = 0; i < imgs.length; i++) {
        animate(imgs[i],{opacity:0},function(){
          flag=true;
        });
        animate(bimgs[i],{opacity:0},function(){
          flag=true;
        });
        rect[i].classList.remove("hot");
      };
        animate(imgs[now],{opacity:1});
        animate(bimgs[now],{opacity:1});
        rect[now].classList.add("hot");
      }
      anniuL[0].onclick=function(){
        if (flag) {
         moveL();
         flag=false;
       }
      }
      anniuR[0].onclick=function(){
        if(flag){
        move();
        flag=false;
      }
      }
    for (var i = 0; i < rect.length; i++) {
      rect[i].index=i;
    
    rect[i].onmouseover=function(){
      if (parseInt(getStyle(imgs[this.index],"opacity"))==0) {
      for (var i = 0; i < imgs.length; i++) {
        animate(imgs[i],{opacity:0});
        animate(bimgs[i],{opacity:0});
        rect[i].classList.remove("hot");
      }
      animate(imgs[this.index],{opacity:1});
      animate(bimgs[this.index],{opacity:1});
      rect[this.index].classList.add("hot");
       now=this.index;
    }
  }
  }
  // 超值特卖
  var cztm=$(".cztm");
  var zuox=$(".zuox");
  var triangle=$(".triangle");
  zuox[0].style.zIndex=100;
  zuox[1].style.background="none";
  zuox[2].style.background="none";
  cztm[0].style.borderBottom="5px solid #df0046";
  triangle[0].style.display="block";
      cztm[0].onmouseover=function(){
        zuox[0].style.display="block";
        cztm[0].style.borderBottom="5px solid #df0046";
        cztm[0].style.fontWeight="bold";
        zuox[1].style.display="none";
        zuox[2].style.display="none";
        cztm[1].style.borderBottom="5px solid #272727";
        cztm[2].style.borderBottom="5px solid #272727";
        cztm[1].style.fontWeight="normal";
        cztm[2].style.fontWeight="normal";
        triangle[0].style.display="block";
        triangle[1].style.display="none";
        triangle[1].style.display="none";
      }
      cztm[1].onmouseover=function(){
        zuox[1].style.display="block";
        cztm[1].style.borderBottom="5px solid #df0046";
        cztm[1].style.fontWeight="bold";
        zuox[0].style.display="none";
        zuox[2].style.display="none";
        cztm[0].style.borderBottom="5px solid #272727";
        cztm[2].style.borderBottom="5px solid #272727";
        cztm[0].style.fontWeight="normal";
        cztm[2].style.fontWeight="normal";
        triangle[0].style.display="none";
        triangle[1].style.display="block";
        triangle[2].style.display="none";

      }
      cztm[2].onmouseover=function(){
        zuox[2].style.display="block";
        cztm[2].style.borderBottom="5px solid #df0046";
        cztm[2].style.fontWeight="bold";
        zuox[0].style.display="none";
        zuox[1].style.display="none";
        cztm[0].style.borderBottom="5px solid #272727";
        cztm[1].style.borderBottom="5px solid #272727";
        cztm[0].style.fontWeight="normal";
        cztm[1].style.fontWeight="normal";
        triangle[0].style.display="none";
        triangle[1].style.display="none";
        triangle[2].style.display="block";
      }
// 超值特卖框线
var zuox=$(".zuox");
var zuox11=$(".zuox11");
var zuox1=$(".zuox1");
var zuox2=$(".zuox2");
czkx(zuox1[0]);
czkx(zuox2[0]);
czkx(zuox2[1]);
czkx(zuox2[2]);
czkx(zuox1[1]);
czkx(zuox2[3]);
czkx(zuox2[4]);
czkx(zuox2[5]);
czkx(zuox1[2]);
czkx(zuox2[6]);
czkx(zuox2[7]);
czkx(zuox2[8]);
function czkx(obj){
var bleft=$(".bleft",obj)[0];
var bright=$(".bright",obj)[0];
var btop=$(".btop",obj)[0];
var bbottom=$(".bbottom",obj)[0];
hover(obj,function(){
   animate(bleft,{height:262})
   animate(bright,{height:262})
   animate(btop,{width:222})
   animate(bbottom,{width:222})
},function(){
   animate(bleft,{height:0})
   animate(bright,{height:0})
   animate(btop,{width:0})
   animate(bbottom,{width:0})
})
}
// 银泰百货
var zero=$(".zero");
var triangle1=$(".triangle1");
var wire=$(".wire");
var ytbhtkmainrightx=$(".ytbhtkmainrightx");
ytbhtkmainrightx[1].style.display="none";
zero[0].onmouseover=function(){
  ytbhtkmainrightx[0].style.display="block";
  triangle1[0].style.display="block";
  wire[0].style.display="block";
  triangle1[1].style.display="none";
  wire[1].style.display="none";
  zero[0].style.fontWeight="bold";
  zero[1].style.fontWeight="normal";
  ytbhtkmainrightx[1].style.display="none";
}
zero[1].onmouseover=function(){
  ytbhtkmainrightx[1].style.display="block";
  ytbhtkmainrightx[0].style.display="none";
  zero[1].style.fontWeight="bold";
  zero[0].style.fontWeight="normal";
  triangle1[0].style.display="none";
  wire[0].style.display="none";
  triangle1[1].style.display="block";
  wire[1].style.display="block";
}
// 银泰百货框线
var bzk=$(".bzk");
for (var i = 0; i < bzk.length; i++) {
  ytbhkx(bzk[i]);
  }
  function ytbhkx(obj){
  var bleft=$(".bleft",obj)[0];
  var bright=$(".bright",obj)[0];
  var btop=$(".btop",obj)[0];
  var bbottom=$(".bbottom",obj)[0];
  obj.onmouseover=function(){
     animate(bleft,{height:250})
     animate(bright,{height:250})
     animate(btop,{width:200})
     animate(bbottom,{width:200})
  }
  obj.onmouseout=function(){
    animate(bleft,{height:0})
     animate(bright,{height:0})
     animate(btop,{width:0})
     animate(bbottom,{width:0})
  }
}



// main轮播图
var ssmpmiddle=$(".ssmpmiddle");
mainlb(ssmpmiddle[0]);
mainlb(ssmpmiddle[3]);
mainlb(ssmpmiddle[4]);
mainlb(ssmpmiddle[5]);
mainlb(ssmpmiddle[6]);
mainlb(ssmpmiddle[7]);
function mainlb(obj){
var mainimg=$("img",obj);
var anL=$(".anL",obj)[0];
var anR=$(".anR",obj)[0];
var xanniu11=$(".xanniu11",obj);
var nowx=0;
var nextx=0;
var flagx=true;
var mw=mainimg[0].offsetWidth;
xanniu11[0].style.background="#ca1a83";
mainimg[0].style.zIndex=20;
obj.onmouseover=function(){
  anL.style.display="block";
  anR.style.display="block";
}
obj.onmouseout=function(){
  anL.style.display="none";
  anR.style.display="none";
}
for (var i = 0; i < mainimg.length; i++) {
  if (i==0) {
    continue;
  }
  else{
     mainimg[i].style.left=mw+"px";
  }
}
function mainlunbo(){
  nextx++;
  if (nextx==mainimg.length) {
     nextx=0; 
  }
  mainimg[nextx].style.left=mw+"px";
  xanniu11[nowx].style.background="#272727";
  animate(mainimg[nowx],{left:-mw},500);
  animate(mainimg[nextx],{left:0},500,function(){
    flagx=true;
  });
  xanniu11[nextx].style.background="#df0046";
  nowx=nextx;
}
function mainlunboL(){
  nextx--;
  if (nextx<0) {
    nextx=mainimg.length-1;
  }
  mainimg[nextx].style.left=-mw+"px";
  xanniu11[nowx].style.background="#272727";
  animate(mainimg[nowx],{left:mw},500);
  animate(mainimg[nextx],{left:0},500,function(){
    flagx=true;
  });
  xanniu11[nextx].style.background="#df0046";
  nowx=nextx;
}
anR.onclick=function(){
  if (flagx) {
    flagx=false;
    mainlunbo();
}
}
anL.onclick=function(){
  if (flagx) {
    flagx=false;
    mainlunboL();
}
}
for (var i = 0; i < xanniu11.length; i++) {
  xanniu11[i].index=i;
  xanniu11[i].onclick=function(){
         //next this.index
     if(parseInt(getStyle(mainimg[nextx],"left"))==0){
     if(nowx<this.index){
     mainimg[this.index].style.left=mw+"px";
     animate(mainimg[nowx],{left:-mw});
     animate(mainimg[this.index],{left:0});
     }
     else if(nowx>this.index){
     mainimg[this.index].style.left=-mw+"px";
     animate(mainimg[nowx],{left:mw});
     animate(mainimg[this.index],{left:0});
     }
     else{
        return;
     }
     xanniu11[nowx].style.background="#b3c3c8";
     xanniu11[this.index].style.background="#ca1a83";
     nowx=this.index;
     nextx=this.index;
     }  
     }
  }
}
// main节点轮播
var x=$(".x");
jdmain(x[0]);
jdmain(x[1]);
jdmain(x[2]);
jdmain(x[3]);
jdmain(x[4]);
jdmain(x[5]);
jdmain(x[6]);
jdmain(x[7]);
jdmain(x[8]);
function jdmain(obj){
var zuo=$(".zuo",obj)[0];
console.log(zuo);
var you=$(".you",obj)[0];
var xxx=$(".xxx",obj);
var xx=$(".xx",obj);
var xw=xxx[0].offsetWidth;
xx[0].style.width=xw*xxx.length+"px";
// var wq=setInterval(mainjd,2000);
function mainjd(){
  animate(xx[0],{left:-xw},function(){
   var first=firstChild(xx[0]);
   xx[0].appendChild(first);
   xx[0].style.left=0;
  })
}
function mainjdL(){
  var first=firstChild(xx[0]);
  var last=lastChild(xx[0]);
  xx[0].insertBefore(last,first);
  xx[0].style.left=-xw+"px";
  animate(xx[0],{left:0});
}
zuo.onclick=function(){
  mainjdL();
}
you.onclick=function(){
  mainjd();
}
}
// 固定定位
  var floor=$(".ssmpmain");
  var guding=$(".guding")[0];
  var img=$(".imggd");
  var guding11=$(".guding11");
  var guding10=$(".guding10");
  var s;
  var flag=true;
  var flag1=true;
  var flag2=true;
  for (var i = 0; i < floor.length; i++) {
    floor[i].h=floor[i].offsetTop;
  }
  window.onscroll=function(){
    if (flag2) {
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var Top=obj.scrollTop;
    if (Top>=floor[0].h-300) {
          guding.style.display="block";
    }
    else{
      guding.style.display="none";
    }
        for (var i = 0; i < floor.length; i++) {
          if (Top>=floor[i].h-66) {
            for (var j = 0; j < floor.length; j++) {
              img[j].style.display="block";
            }
             img[i].style.display="none";
             s=i;
        }
        if (Top<floor[i].h-66) {
             img[i].style.display="block";
        }
    }    
  }
}
  guding10[0].onclick=function(){
        animate(document.body,{scrollTop:0},500);
        animate(document.documentElement,{scrollTop:0},500);
    }
  for (var i = 0; i < guding11.length; i++) {
    guding11[i].index=i;   
    guding11[i].onmouseover=function(){
        img[this.index].style.display="none";
    }
    guding11[i].onmouseout=function(){
       if (this.index==s) {
        return;
       }
        img[this.index].style.display="block";
    }
  }
    for (var i = 0; i < guding11.length; i++) {
      guding11[i].index=i;
      guding11[i].onclick=function(){
        flag2=false;
      animate(document.body,{scrollTop:floor[this.index].h},500,function(){
        flag2=true;
      });
      animate(document.documentElement,{scrollTop:floor[this.index].h},500,function(){
        flag2=true;
      });
      s=this.index;

      }
    }
// 框线
var kuang1=$(".kuang1");
var kuang2=$(".kuang2");
var kuang3=$(".kuang3");
var kuang4=$(".kuang4");
kx(kuang1[0]);
kx(kuang1[1]);
kx(kuang1[2]);
kx(kuang1[3]);
kx(kuang1[4]);
kx(kuang1[5]);
kx(kuang1[6]);
kx(kuang1[7]);
kx(kuang1[8]);

kx(kuang2[0]);
kx(kuang2[1]);
kx(kuang2[2]);
kx(kuang2[3]);
kx(kuang2[4]);
kx(kuang2[5]);
kx(kuang2[6]);
kx(kuang2[7]);
kx(kuang2[8]);

kx(kuang3[0]);
kx(kuang3[1]);
kx(kuang3[2]);
kx(kuang3[3]);
kx(kuang3[4]);
kx(kuang3[5]);
kx(kuang3[6]);
kx(kuang3[7]);
kx(kuang3[8]);

kx(kuang4[0]);
kx(kuang4[1]);
kx(kuang4[2]);
kx(kuang4[3]);
kx(kuang4[4]);
kx(kuang4[5]);
kx(kuang4[6]);
kx(kuang4[7]);
kx(kuang4[8]);
function kx(obj){
var bleft=$(".bleft",obj)[0];
var bright=$(".bright",obj)[0];
var btop=$(".btop",obj)[0];
var bbottom=$(".bbottom",obj)[0];
hover(obj,function(){
   animate(bleft,{height:182})
   animate(bright,{height:182})
   animate(btop,{width:272})
   animate(bbottom,{width:272})
},function(){
   animate(bleft,{height:0})
   animate(bright,{height:0})
   animate(btop,{width:0})
   animate(bbottom,{width:0})
})
}

// 书导航
 var dh1=$(".dh1");
  var dp=$(".dp");
  var dp1=$(".dp1");
  var dp2=$(".dp2");
  var dp3=$(".dp3");
  var dp4=$(".dp4");
  var dp5=$(".dp5");
  var dp6=$(".dp6");
  var dp7=$(".dp7");
  var dp8=$(".dp8");
  var dp9=$(".dp9");
  var dhbj=$(".dhbj");
  var dhbj1=$(".dhbj1");
  var dhbj2=$(".dhbj2");
  var dhbj3=$(".dhbj3");
  var dhbj4=$(".dhbj4");
  var dhbj5=$(".dhbj5");
  var dhbj6=$(".dhbj6");
  var dhbj7=$(".dhbj7");
  var dhbj8=$(".dhbj8");
  var dhbj9=$(".dhbj9");
  var xs=$(".xs");
    dh1[0].onmouseover=function(){
      dp[0].style.display="block";
      dhbj[0].style.backgroundPosition="0px -126px";
      xs[0].style.display="none";
    }
    dh1[0].onmouseout=function(){
      dp[0].style.display="none";
      xs[0].style.display="block";
      dhbj[0].style.backgroundPosition="0px -108px";
    }
    dh1[1].onmouseover=function(){
      dp1[0].style.display="block";
      xs[1].style.display="none";
      dhbj1[0].style.backgroundPosition="-17px -128px";
    }
    dh1[1].onmouseout=function(){
      dp1[0].style.display="none";
      xs[1].style.display="block";
      dhbj1[0].style.backgroundPosition="-17px -110px";
    }
    dh1[2].onmouseover=function(){
      xs[2].style.display="none";
      dhbj2[0].style.backgroundPosition="-34px -128px";
      dp2[0].style.display="block";
    }
    dh1[2].onmouseout=function(){
      xs[2].style.display="block";
      dhbj2[0].style.backgroundPosition="-34px -110px";
      dp2[0].style.display="none";
    }
     dh1[3].onmouseover=function(){
      xs[3].style.display="none";
      dhbj3[0].style.backgroundPosition="-51px -129px";
      dp3[0].style.display="block";
    }
    dh1[3].onmouseout=function(){
      xs[3].style.display="block";
      dhbj3[0].style.backgroundPosition="-51px -111px";
      dp3[0].style.display="none";
    }
     dh1[4].onmouseover=function(){
      xs[4].style.display="none";
      dhbj4[0].style.backgroundPosition="-68px -129px";
      dp4[0].style.display="block";
    }
    dh1[4].onmouseout=function(){
      xs[4].style.display="block";
      dhbj4[0].style.backgroundPosition="-68px -111px";
      dp4[0].style.display="none";
    }
     dh1[5].onmouseover=function(){
      xs[5].style.display="none";
      dhbj5[0].style.backgroundPosition="-85px -128px";
      dp5[0].style.display="block";
    }
    dh1[5].onmouseout=function(){
      xs[5].style.display="block";
      dhbj5[0].style.backgroundPosition="-85px -110px";
      dp5[0].style.display="none";
    }
     dh1[6].onmouseover=function(){
      xs[6].style.display="none";
      dhbj6[0].style.backgroundPosition="-102px -129px";
      dp6[0].style.display="block";
    }
    dh1[6].onmouseout=function(){
      xs[6].style.display="block";
      dhbj6[0].style.backgroundPosition="-102px -111px";
      dp6[0].style.display="none";
    }
     dh1[7].onmouseover=function(){
      xs[7].style.display="none";
      dhbj7[0].style.backgroundPosition="-119px -129px";
      dp7[0].style.display="block";
    }
    dh1[7].onmouseout=function(){
      xs[7].style.display="block";
      dhbj7[0].style.backgroundPosition="-119px -111px";
      dp7[0].style.display="none";
    }
     dh1[8].onmouseover=function(){
      xs[8].style.display="none";
      dhbj8[0].style.backgroundPosition="-136px -129px";
      dp8[0].style.display="block";
    }
    dh1[8].onmouseout=function(){
      xs[8].style.display="block";
      dhbj8[0].style.backgroundPosition="-136px -111px";
      dp8[0].style.display="none";
    }
     dh1[9].onmouseover=function(){
      xs[9].style.display="none";
      dhbj9[0].style.backgroundPosition="-153px -129px";
      dp9[0].style.display="block";
    }
    dh1[9].onmouseout=function(){
      xs[9].style.display="block";
      dhbj9[0].style.backgroundPosition="-153px -111px";
      dp9[0].style.display="none";
    }











}
