// 异步串行动画
//    
Ametion.prototype.frameRate = function (arr=[{f:null,t:null}]) {
    var time=0;
    // 清除定时器
    for(var k in this.timerArr){
        clearInterval(this.timerArr[k]);
    }
    this.timeArr.length=0;
    // 计入定时器
    for(var i in arr){
        time += arr[i].t;
        this.timeArr[i]=setTimeout(arr[i].f,time*1000); 
    }
    return time;
}


// 全运动
//     参数一：属性表[name,value]或[[name,value],[name,value]... ...]
//     参数二：时间（秒）
//     参数三：是否连续
//     参数四：dom对象
Ametion.prototype.allMove = function (s,t,isCountinue,dom) {
    // 判断是否连续
    if(isCountinue){
        (!dom) && (dom = this.temp.dom);
        this.temp.timeArr[this.temp.timeArr.length] = setTimeout(function(){
            
            dom.style.transition="all "+t+"s";
            (t == 0) && (dom.style.transition="");
            if(s[0] && s[0].constructor == Array){

                for(var i in s){
                    dom.style[s[i][0]] = s[i][1];
                }
            } else {
                dom.style[s[0]] = s[1];
            }

            // 保险函数，理论上不用加
            // setTimeout(function(){dom.style.transition="";},this.temp.t*1000)

        },this.temp.t*1000);
        (t == 0) && (this.temp.t += 0.01);


    } else {
        // 如果不传参，则清空一切
        if(!s && !t && !isCountinue && !dom){
            for(var o in this.temp.timeArr){
                clearTimeout(this.temp.timeArr[o]);
            }
            this.temp.dom = null;
            this.temp.t = 0;
            this.temp.timeArr = [];
        } else {
            dom.style.transition="all "+t+"s";
            (t == 0) && (dom.style.transition="");
            if(s[0] && s[0].constructor == Array){

                for(var i in s){
                    dom.style[s[i][0]] = s[i][1];
                }
            } else {
                dom.style[s[0]] = s[1];
            }
        }
    }


    if(isCountinue){
        (dom) && (this.temp.dom = dom);
        this.temp.t += t;
    }

    return this;
}




function Ametion(){
    this.timer = null;
    this.timeArr = [];
    this.rate = 0; 
    this.temp = {
        dom:null,
        t:0,
        timeArr:[]
    };   
}





// a = new Ametion();
// mt.onclick = function(){
//     a.allMove().allMove([['width','100px'],['height','100px']],0,true,test).allMove(['width','10px'],1,true).allMove(['height','10px'],1,true)
//     // a.frameRate([
//     //     {f:function(){a.allMove([['width','100px'],['height','100px']],0,false,test)},t:0},
//     //     {f:function(){a.allMove(['width','10px'],1,false,test)},t:0.1},
//     //     {f:function(){a.allMove(['height','10px'],1,false,test)},t:1},

//     // ]);

//     // test.style.transition = '';
//     // test.style.width = '100px';
//     // test.style.height = '100px';
//     // test.style.transition = '1s';
//     // test.style.width = '10px';
//     // test.style.height = '10px';
// }