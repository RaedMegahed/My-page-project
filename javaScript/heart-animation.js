

// level3 lesson5 v#3
//heart animation


const randomHerats = () => {
  const parentHerat = document.createElement("div");
  containerheart.append(parentHerat);
  const createRandomHeart = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = `&#129505;`;

    heart.style.left = `${Math.random() * 100}%`;
    parentHerat.append(heart);

    heart.style.animationDuration = `${(Math.random() + 0.5) * 2}s`;

    const heart2 = document.createElement("div");
    heart2.classList.add("heart");
    heart2.innerHTML = `&#128156;`;

    heart2.style.left = `${Math.random() * 100}%`;
    parentHerat.append(heart2);

    heart.style.animationDuration = `${(Math.random() + 0.5) * 2}s`;
  }, 50);

  setTimeout(() => {
    clearInterval(createRandomHeart);
  }, 2000);

  setTimeout(() => {
    parentHerat.remove();
  }, 4500);
};


randomhearts.addEventListener("click", (eo) => {
  randomHerats();
});
