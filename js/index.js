window.onload = function () {
  var liList = ul.children;
  var liListLength = liList.length;
  var count = 0;
  setInterval(() => {
    if (count + 1 == liListLength) {
      ul.scrollTop = 0;
      count = 0;
    } else {
      count++;
      let top = count * 780;
      var coutBanner = 0;

      //   for (let i = (count - 1) * 780 + 10; i <= top; i++) {
      //     coutBanner++;
      //     setTimeout(() => {
      //       ul.scrollTop = i;
      //     }, coutBanner * 10);
      //   }
      ul.scrollTop = top;
    }
  }, 1000);
  lis[0].style.display = "block";
  imgs[0].style.display = "block";


};


window.alert = function (title) {
  var box = document.getElementById("alert_box");
  var html = `<dl>
  <dd></dd>
   <span>${title}</span> 
  </dl>`;
  // if(box){//如果窗口中已存在对话框，则直接显示内容
  //     box.innerHTML=html;
  //     box.style.display="block";
  // }
  //如果不存在对话框，则创建对话框并显示内容
  var div = document.createElement("div");
  div.id = "alert_box";
  div.style.display = "block";
  document.body.appendChild(div);
  div.innerHTML = html;
  setTimeout(()=>{
    div.style.display='none'
  },1500)
};
// alert("重写alert方法","设计思路！");

//新闻增加 减少
const lis = document.getElementsByClassName("lis");
var count1 = 1;
function add() {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.display = "none";
  }
  if (count1 < lis.length) {
    lis[count1].style.display = "block";
    count1++;
  } else {
    lis[lis.length - 1].style.display = "block";
    alert("已经是最后一页了!");
  }
}

function down() {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.display = "none";
  }
  if (count1 > 1) {
    count1--;
    lis[count1 - 1].style.display = "block";
  } else {
    lis[0].style.display = "block";
    alert("已经是第一页了!");
  }
}


// 增加减少图片
var imgs = document.getElementsByClassName("imglis");
var count2=1
function addimg() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  if (count2 < imgs.length) {
    imgs[count1].style.display = "block";
    count2++;
  } else {
    imgs[imgs.length - 1].style.display = "block";
    alert("已经是最后一页了!");
  }
}

function downimg(){
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  if (count2 > 1) {
    count2--;
    imgs[count2 - 1].style.display = "block";
  } else {
    imgs[0].style.display = "block";
    alert("已经是第一页了!");
  }
}