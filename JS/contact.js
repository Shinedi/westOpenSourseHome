/**
 * Created by Administrator on 2016/7/17.
 */
window.onload=function()
{
    //rollpic();
    contact();
};
function rollpic(){
    var obox=document.getElementById("picbox");
    var oul=obox.getElementsByTagName("ul")[0];

    var aimg=oul.getElementsByTagName("img");
    //alert(aimg.length);
    //alert(aimg.length);
    var obtn=document.getElementById("btn");
    var abtn=obtn.getElementsByTagName("input");

    var leftBtn=document.getElementsByClassName('btn01')[0];
    var rightBtn=document.getElementsByClassName('btn02')[0];

    var timer1=null;
    var count=1;
    var m=2;
    var flag=1;
    //给每个按钮添加一个onclick事件（一并添加索引）
    for(var i=0;i<abtn.length;i++)
    {
        abtn[i].index=i;
        abtn[i].onclick=function()
        {
            //清除按钮中所有的样式
            for(var j=0;j<abtn.length;j++)
            {
                abtn[j].className='';
            }
            //给被点击的按钮添加样式
            abtn[this.index].className="active";
            //如果是逆向移动,则给m赋值
            if(flag==-1)
            {
                m=this.index;
            }
            //给count赋值
            count=this.index;
            //按照索引移动相应距离
            sport(oul,'left',-this.index*cssStyle(aimg[0],'width'));
        };
    }
    //左移按钮
    leftBtn.onclick=function(){
        //获取当前图片位置，并判断是第几个图片
        var t=Math.ceil(-cssStyle(oul,'left')/cssStyle(aimg[0],'width'));
        //判断是否为第一张图片
        if(t>0){
            for(var j=0;j<abtn.length;j++)
            {
                abtn[j].className='';
            }
            //给当前图片的前一个图片添加样式
            abtn[--t].className="active";
            //赋值
            if(flag==-1)
            {
                m=t;
            }
            count=t;
            //移动
            sport(oul,'left',-t*cssStyle(aimg[0],'width'));
        }
    };
    //右移按钮
    rightBtn.onclick=function(){
        //获取当前图片位置，并判断是第几个图片
        var t=Math.ceil(-cssStyle(oul,'left')/cssStyle(aimg[0],'width'));
        //判断是否为最后一张图片
        if(t<3){
            for(var j=0;j<abtn.length;j++)
            {
                abtn[j].className='';
            }
            //给当前图片的前一个图片添加样式
            abtn[++t].className="active";
            //赋值
            if(flag==-1)
            {
                m=t;
            }
            count=t;
            //移动
            sport(oul,'left',-t*cssStyle(aimg[0],'width'));
        }
    };
    //设置ul的长度
    //alert(cssStyle(aimg[0],'width'));
    cssStyle(oul,'width',cssStyle(aimg[0],'width')*aimg.length);
    //alert(cssStyle(oul,'width'));
    //定时器
    timer1=setInterval(function(){
        //向右移动
        if(flag==1 && count<aimg.length)
        {
            for(var i=0;i<abtn.length;i++)
            {
                abtn[i].className='';
            }
            abtn[count].className="active";
            sport(oul,'left',-(count++)*cssStyle(aimg[0],'width'));
            //移动到最后一张图片时，设置flag为-1
            if(count==4){flag=-1;}

        }
        else
        {
            //向左移动
            if(flag==-1 && m>=0)
            {

                for(var i=0;i<abtn.length;i++)
                {
                    abtn[i].className='';
                }

                abtn[m].className="active";
                sport(oul,'left',-(m--)*cssStyle(aimg[0],'width'));
                //如果移动到第一张图片时，设置count为1，flag为1，m为2
                if(m==-1) {
                    count=1;
                    flag=1;
                    m=2;}
            }
        }
    },3000);

}
function contact()
{

        var oImage1=document.getElementById('rr1');
        var oLeft1=document.getElementById('rr11');
        var timer=null;
        oImage1.onmouseover=oLeft1.onmouseover=function(){
            clearTimeout(timer);
            oImage1.src="images/float_bar_qq-over.png";
            oLeft1.style.display='block';
        };
        oImage1.onmouseout=oLeft1.onmouseout=function(){
            oImage1.src="images/float_bar_qq.png";
            timer=setTimeout(function(){
                oLeft1.style.display='none';
            },1000);
        };
        var oImage2=document.getElementById('rr2');
        var oLeft2=document.getElementById('rr22');
        var timer1=null;

        oImage2.onmouseover=oLeft2.onmouseover=function(){
            clearTimeout(timer1);
            oImage2.src="images/float_bar_phone-over.png";
            oLeft2.style.display='block';

        };
        oImage2.onmouseout=oLeft2.onmouseout=function(){
            oImage2.src="images/float_bar_phone.png";
            timer1=setTimeout(function(){
                oLeft2.style.display='none';
            },1000);
        };

}