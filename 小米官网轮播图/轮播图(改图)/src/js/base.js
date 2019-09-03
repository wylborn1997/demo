// var a = new Ametion();
// var i = 1;
// setInterval(function(){
//     i++;
//     if(i == 4){
//         i = 1
//     }
//     a.allMove().allMove([],0,false,pic_lefts).allMove([['left','0px'],['top','0px'],['opacity','0'],['backgroundImage', 'url(./src/img/' + i +'.jpg)']],0,true,pic_lefts).allMove(
//         ['opacity','1'],0.5,true
//     ).allMove(
//         ['backgroundImage', 'url(./src/img/' + (((i + 1) % 3) +1) +'.jpg)'],0.1,true,pic_left
//     ).allMove(
//         ['backgroundImage', 'url(./src/img/' + (((i + 2) % 3) +1) +'.jpg)'],0.1,true,pic_right
//     ).allMove(
//         [['top', '60px'], ['left','80px']],1,true,pic_lefts
//     ).allMove(
//         ['backgroundImage', 'url(./src/img/' + i +'.jpg)'],0.1,true,pic_mid
//     ).allMove(
//         ['opacity', '0'],0,true,pic_lefts
//     );
//     // pic_lefts.style.opacity = '1';
// }, 2000);



// var i = 1;
// var timer = null;
//  var a = new Ametion();
//  timer = setInterval(function(){
//      i++;
//      if(i == 4){i = 1}
//      var li = 0;
//      var ri = 0;

//      li = i + 1;
//      (li == 4) && (li = 1);
//      ri = i - 1;
//      (ri == 0) && (ri = 3);

//     a.allMove().allMove( //设置初始状态
//         [['left','0px'],['top','0px'],['opacity','0'],['backgroundImage', 'url(./src/img/' + i +'.jpg)']],
//         0,
//         true,
//         pic_lefts
//     ).allMove( //显示出临时标签
//         ['opacity','1'],
//         0.5,
//         true
//     ).allMove(//更改左边的图片
//         ['backgroundImage', 'url(./src/img/' + li +'.jpg)'],
//         0.01,
//         true,
//         pic_left
//     ).allMove(//把临时标签移到中间
//         [['top', '60px'], ['left','80px']],
//         1,
//         true,
//         pic_lefts
//     ).allMove( //设置右边初始状态
//         ['opacity','0'],
//         0,
//         true,
//         pic_rights

//     ).allMove(//更改右边临时图片
//         ['backgroundImage', 'url(./src/img/' + ri +'.jpg)'],
//         0.01,
//         true
//     ).allMove(//显示右边临时图片
//         ['opacity','1'],
//         1,
//         true
//     ).allMove( //更改右边的图片
//         ['backgroundImage', 'url(./src/img/' + ri +'.jpg)'],
//         0.01,
//         true,
//         pic_right
//     )
//     .allMove( //更改中间的图片
//         ['backgroundImage', 'url(./src/img/' + i +'.jpg)'],
//         0.01,
//         true,
//         pic_mid
//     )
//  },5000)



var i = 1;
var li = 0;
var ri = 0;
var timer = null;
 var a = new Ametion3();
 function action () {
    a.reset().static({ //初始清零，并设置初始状态
        left:'0px',
        top:'0px',
        opacity:'0',
        backgroundImage:'url(./src/img/' + i +'.jpg)'
    },pic_lefts).point({ //显示临时图片
        opacity:'1'
    },0.5).static({
        backgroundImage:'url(./src/img/' + li +'.jpg)'
    },pic_left).point({ //移动临时图片到中心
        top:'60px',
        left:'80px'
    },1,pic_lefts).static({//设置临时右边初始状态
       opacity:'1'
    },pic_rights).static({//更改临时右边背景
       backgroundImage:'url(./src/img/' + ri +'.jpg)'
    }).point({//显示临时右边
        opacity:'1'
    },1).static({
        backgroundImage:'url(./src/img/' + ri +'.jpg)'
    },pic_right).static({
       backgroundImage:'url(./src/img/' + i +'.jpg)'
    },pic_mid);
 }
 timer = setInterval(function(){
     i++;
     if(i == 4){i = 1}


     li = i + 1;
     (li == 4) && (li = 1);
     ri = i - 1;
     (ri == 0) && (ri = 3);
     
    action();


 },5000)



 //去重
//  var str = 'aabbcdddzzssddjlk';
//  var e = /(.)\1{1,}/g;
//  str.match(e)

// console.log(str.replace(e, '$1'));

// 打点
// function reverse(str){
//     var temp = '';
//     for(var i in str){
//         temp = str[i] + temp;
//     }
//     return temp;
// }
// function change (str){
//     var e = /([0-9]{3})/g;
//     str = reverse(str);
//     str = str.replace(e, '$1.');
//     str = reverse(str);
//     return str;
// }
// var str = '10000000';
// console.log(change(str));



// 转驼峰
// var str = 'the-frist-name';
// var e = /-([a-z])/g;
// console.log(str.replace(e,function ($,$1) {
//     return $1.toUpperCase();
// }));




var str = '10000000';
var e = /<.{0,}?><.{0,}?>/g;
console.log(str.match(e));























