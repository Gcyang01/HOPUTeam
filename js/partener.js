var lis; //点击的列表
var lis1; //显示列表
var scrollTop; //获取滚动条高度
var timer1; //定义定时器
var x = 10; //向上步长
window.onload = function () {
  lis = document.querySelectorAll(".partner_ul>li");
  lis1 = document.querySelectorAll(".partner_right>li");
  // console.log(lis1);
  lis1[0].style.display = "block";
  for (let i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis1[i].index = i;
  }

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

function click1(obj) {
  console.log(obj.index);
  for (let i = 0; i < lis.length; i++) {
    lis[i].className = "";
  }
  obj.className = "active";
  for (let j = 0; j < lis.length; j++) {
    lis1[j].style.display = "none";
  }
  lis1[obj.index].style.display = "block";
}
