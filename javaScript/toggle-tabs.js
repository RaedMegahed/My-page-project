const allTaps = document.querySelectorAll(".mybtn");
const parentTabs = document.querySelector(".toggle-buttons");
const parentArticles = document.querySelector(".parent-articles");
allTaps.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    // toggle between buttons
    parentTabs
      .getElementsByClassName("active-btn")[0]
      .classList.remove("active-btn");
    item.classList.add("active-btn");

    // toggle between articles

    parentArticles
      .getElementsByClassName("active-article")[0]
      .classList.remove("active-article");
    parentArticles
      .getElementsByClassName("fun-facts")
      [index].classList.add("active-article");
  });
});
