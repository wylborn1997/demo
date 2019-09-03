// 重启
Ametion3.prototype.reset = function () {
    for(var i in this.timer){
        clearTimeout(this.timer[i]);
    }

    this.timer.length = 0;
    this.t = 0;

    return this;
}



// 设置静态工作点

Ametion3.prototype.static = function (Oatrr, dom) {
        // 是否继承dom
        if(!dom){
            dom = this.dom;
        }else{
            this.dom = dom;
        }

    this.timer.push(setTimeout(function(){

        dom.style.transition = "";
        for(var name in Oatrr){
            dom.style[name] = Oatrr[name];
        }

    },this.t*1000));
    this.t+= 0.01;

    return this;
}
// 帧点
//     参数一：目标样式{样式名:值, 样式名:值... ...}
//     参数二：变化时间（s）
//     参数三：可操作的dom对象（不填写会继承上一个）
Ametion3.prototype.point = function (Oatrr, time, dom) {
    // 是否继承dom
    if(!dom){
        dom = this.dom;
    }else{
        this.dom = dom;
    }

    
    this.timer.push(setTimeout(function(){


        dom.style.transition = time + 's';
        (time == 0) && (dom.style.transition = "");
        for(var name in Oatrr){
            dom.style[name] = Oatrr[name];
        }

    },this.t*1000));
    this.t+=time;
    return this;
}











function Ametion3 () {
    this.dom = null;
    this.timer = [];
    this.t = 0;
}















var a = function (i) {
    var m = i;
    return function () {
        return m;
    }
}