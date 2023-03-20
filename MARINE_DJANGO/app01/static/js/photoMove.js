var v_poctures = new Vue({
    el:"#pictures",
    data:{
        imgSrc:[
            "../statics/img/warp/封面_创立.png",
            "../statics/img/warp/1.png",
            "../statics/img/warp/2.png",
            "../statics/img/warp/3.png",
            "../statics/img/warp/GIS节封面.png"],
        imgIndex:0,
    },
    methods:{
        before:function(){
            //上一张
            this.imgIndex--;
            setCircles(this.imgIndex);
        },
        later:function(){
            //下一张
            this.imgIndex++;
            if(this.imgIndex==5){
                this.imgIndex=0;
            }
            setCircles(this.imgIndex);
        },
        circleClick:function(cIndex){
            // 点击圆点切换图片
            this.imgIndex=cIndex;
            setCircles(this.imgIndex);
        }
    }
})
// 设置小圆点的高亮
function setCircles(index){   
    // 获取五个小圆点
    var circles = document.querySelectorAll(".circle");
    for (var i = 0; i < circles.length; i++) {
        // 先把所有点都设置为默认样式
        circles[i].style.backgroundColor = "rgba( 245, 248, 245, 0.7)";
    }
    // 选中圆点样式
    circles[index].style.backgroundColor = "rgba(255, 84, 84,0.7)";
}

// 自动轮播  每隔5s
let autoplay = setInterval(v_poctures.later, 5000);
var oWrap = document.getElementById("pictures");

oWrap.addEventListener("mouseenter", () => {
    // 鼠标放在图上时停止轮播
    clearInterval(autoplay);
});

oWrap.addEventListener("mouseleave", () => {
    // 鼠标移开后继续轮播
    clearInterval(autoplay);
    autoplay = setInterval(v_poctures.later, 5000);
});