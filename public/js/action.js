const WAIT_TIME = 600;
const SHOW_DELAY = 70;
let IS_SHOW = false;
let timeoutShow;
let timeoutHide;
const likeButtonElement = document.getElementById("likeBtn");
const reactionBoxElement = document.getElementById("reactionBox");
const reactionIconElemens = document.getElementsByClassName(
  "reaction-icon"
);
// chuyển tất cả thành mảng
const arrayReactionIcon = [...reactionIconElemens];
// hiển thị các icon gif
likeButtonElement.addEventListener("mouseenter", () => {
  // định nghĩa thời gian để giao diện kh bật lên
  if (timeoutHide) clearTimeout(timeoutHide);
  if (IS_SHOW) return;
  // thời gian đợi
  timeoutShow = setTimeout(() => {
    // khối hiển thị
    reactionBoxElement.style.display = "block";
    arrayReactionIcon.forEach((element, index) => {
      // thời gian trì hoãn
      setTimeout(function () {
        element.classList.add("show");
      }, index * SHOW_DELAY);
    });
    IS_SHOW = true; // show
  }, WAIT_TIME);
});
// ẩn khối reaction box
likeButtonElement.addEventListener("mouseleave", () => {
  if (timeoutShow) clearTimeout(timeoutShow);
  // chạy lại khi hết thời gian 
  if (!IS_SHOW) return;
  timeoutHide = setTimeout(() => {
    reactionBoxElement.style.display = "none";
    arrayReactionIcon.forEach((element, index) => {
      element.classList.remove("show");
    });
    IS_SHOW = false; // ẩn
  }, WAIT_TIME);
});