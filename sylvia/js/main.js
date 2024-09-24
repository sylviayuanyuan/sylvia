//設定開關變數，設 0 為關閉狀態 / 設 1 為開啟狀態
let burger_toggle = 0;

//函數：要執行時，需在 HTML 中要點擊的元素上，設 onclick 事件來觸發函式執行
function menu_toggle() {
  //如果 開關變數 等於 0，就執行 if 大括號中的內容
  if (burger_toggle == 0) {
    //用 id 的方式抓元素 / 在元素上增加 class 屬性名稱
    document.getElementById("navbar").classList.add("rwd-open-navbar");
    //navbar 已經改為開啟狀態，將 開關變數 設為 1 即開啟狀態
    burger_toggle = 1;
  }
  //如果 開關變數 不等於 0，就執行 else 大括號中的內容
  else {
    //用 id 的方式抓元素 / 在元素上移除 class 屬性名稱
    document.getElementById("navbar").classList.remove("rwd-open-navbar");
    //navbar 已經改為關閉狀態，將 開關變數 設為 0 即關閉狀態
    burger_toggle = 0;
  }
}
