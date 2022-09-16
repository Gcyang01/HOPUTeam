var scrollTop; //获取滚动条高度
var timer1; //定义定时器
var x = 10; //向上步长
window.onload = function () {


  var top = document.getElementById("top");
  setInterval(function () {
    scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 100 && scrollTop < 300) {
      top.className = "top_fixed";
    } else if (document.documentElement.scrollTop >= 300) {
      top.className = "top_abs";
    } else {
      top.className = "top1";
    }
  }, 10);
};
function top1() {
  timer1 = setInterval(() => {
      document.documentElement.scrollTop -= x;
      if (document.documentElement.scrollTop == 0) {
        clearInterval(timer1);
      }
  }, 1);
}


