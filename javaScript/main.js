/* dark mode */
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

/* on and off the ul change color */
{
  changecolor.addEventListener("mousemove", (eo) => {
    hiddenul.style.display = "block";
  });

  changecolor.addEventListener("mouseout", (eo) => {
    hiddenul.style.display = "none";
  });
}

// chnage header back ground color when we click on HeaderBG
headerbg.addEventListener("click", (eo) => {
  const random = Math.round(Math.random() * 360);
  header.style.backgroundColor = `hsl(${random}, 64%, 50%)`;

  const websiteTitle = document.querySelector("#header > h1");
  websiteTitle.style.backgroundColor = `hsl(${random}, 64%, 50%)`;

  dark.style.backgroundColor = `hsl(${Math.round(
    Math.random() * 360
  )}, 64%, 50%)`;
});

// change titles back ground color whne we click on titleBG
titlebg.addEventListener("click", (eo) => {
  const titles = document.querySelectorAll("h1:not(#header > h1)");
  const random = Math.round(Math.random() * 360);
  titles.forEach((item) => {
    item.style.backgroundColor = `hsl(${random}, 64%, 50%)`;
  });
});

// change titles color when we click on Title color
const changeColor = () => {
  return Math.round(Math.random() * 360);
};

titlecolor.addEventListener("click", (eo) => {
  const titles = document.querySelectorAll("h1:not(#header > h1)");

  titles.forEach((item) => {
    item.style.color = `hsl(${changeColor()}, 64%, 50%)`;
  });
});









