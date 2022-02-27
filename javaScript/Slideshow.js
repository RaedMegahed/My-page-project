const arrimg = [
  `<img src="img/1.png" class="img-slider">`,
  `<img src="img/2.png" class="img-slider">`,
  `<img src="img/3.png" class="img-slider">`,
  `<img src="img/4.png" class="img-slider">`,
  `<img src="img/5.png" class="img-slider">`,
];

let i = 0;
slidescontainer.innerHTML += arrimg[i];
pre.setAttribute("disabled", "");
slidescontainer.innerHTML += `<p>slide #${i + 1} of ${arrimg.length}</p>`;

next.addEventListener("click", (eo) => {
  pre.removeAttribute("disabled");
  i++;
  slidescontainer.innerHTML += arrimg[i];
  slidescontainer.innerHTML += `<p>slide #${i + 1} of ${arrimg.length}</p>`;

  if (i + 1 == arrimg.length) {
    next.setAttribute("disabled", "");
    pre.removeAttribute("disabled");
  }

  parentNumber
    .getElementsByClassName("active-num")[0]
    .classList.remove("active-num");
  parentNumber.getElementsByTagName("button")[i].classList.add("active-num");
});

pre.addEventListener("click", (eo) => {
  next.removeAttribute("disabled");
  i--;
  slidescontainer.innerHTML += arrimg[i];
  slidescontainer.innerHTML += `<p>slide #${i + 1} of ${arrimg.length}</p>`;

  if (i == 0) {
    pre.setAttribute("disabled", "");
    next.removeAttribute("disabled");
  }

  parentNumber
    .getElementsByClassName("active-num")[0]
    .classList.remove("active-num");
  parentNumber.getElementsByTagName("button")[i].classList.add("active-num");
});

const allButtons = document.querySelectorAll(".mynumber");
const parentNumber = document.getElementsByClassName("numbers")[0];

allButtons.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    parentNumber
      .getElementsByClassName("active-num")[0]
      .classList.remove("active-num");
    item.classList.add("active-num");

    i = index;
    slidescontainer.innerHTML += arrimg[index];
    slidescontainer.innerHTML += `<p>slide #${index + 1} of ${
      arrimg.length
    }</p>`;

    if (index == arrimg.length - 1) {
      next.setAttribute("disabled", "");
      pre.removeAttribute("disabled");
    } else if (index == 0) {
      pre.setAttribute("disabled", "");
      next.removeAttribute("disabled");
    } else {
      pre.removeAttribute("disabled");
      next.removeAttribute("disabled");
    }
  });
});
