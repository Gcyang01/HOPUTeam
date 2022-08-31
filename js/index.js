window.onload = function () {
  var ul = document.getElementsByClassName("lunbo1")[0];
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
};

