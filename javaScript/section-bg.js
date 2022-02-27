// change sections color when we click on sectionBG
//using array & i++
// level3 lesson2 #4
//   const arrColor = ["#b5179e", "#7209b7", "#f72585"];
// let i = 0;
// sectionbg.addEventListener("click", (eo) => {
//   const sections = document.querySelectorAll("section");

//   sections.forEach((item) => {
//     item.style.backgroundColor = arrColor[i];
//   });

//   i < arrColor.length - 1 ? i++ : (i = 0);
// });

// change sections color when we click on sectionBG
//using array & Math.random()
// level3 lesson2 #5
// const arrColor = ["#b5179e", "#7209b7", "#f72585"];

// sectionbg.addEventListener("click", (eo) => {
//   const sections = document.querySelectorAll("section");

//   const random = Math.floor(Math.random() * arrColor.length);
//   sections.forEach((item) => {
//     item.style.backgroundColor = arrColor[random];
//   });
// });

// change sections color when we click on sectionBG
//using rgb & Math.random() & return function
// level3 lesson2 #6
// const rgb255 = () => {
//     return Math.round(Math.random() *255)
//   }
//   sectionbg.addEventListener("click", (eo) => {
//     const sections = document.querySelectorAll("section");

//     const rgb1 = rgb255()
//     const rgb2 = rgb255()
//     const rgb3 = rgb255()

//     sections.forEach((item) => {
//       item.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`
//     });
//   });

// change sections color when we click on sectionBG
//using hex
// level3 lesson2 #7

// const randomhex = () => {
//     return `#${Math.random().toString(16).slice(2, 8)}`
// }

// sectionbg.addEventListener("click", (eo) => {
//     const sections = document.querySelectorAll("section");
//     const hex = randomhex()

//     sections.forEach((item) => {
//       item.style.backgroundColor = hex
//     });
//   });

// change sections color when we click on sectionBG
//using don't use forEach
// level3 lesson2 #8

// const randomhex = () => {
//   return `#${Math.random().toString(16).slice(2, 8)}`
// }

// sectionbg.addEventListener("click", (eo) => {
//   const sections = document.querySelectorAll("section");
//   const hex = randomhex()

//   for (let i = 0; i < sections.length; i++) {
//     const item = sections[i];
//     item.style.backgroundColor = hex
//   }
// });

// change sections color when we click on sectionBG
//using don't use forEach or loop
// level3 lesson2 #9

const randomhex = () => {
  return `#${Math.random().toString(16).slice(2, 8)}`;
};

sectionbg.addEventListener("click", (eo) => {
  const sections = document.querySelectorAll("section");
  const hex = randomhex();

  // for (const i in sections) {

  //   const item = sections[i];
  //   item.style.backgroundColor = hex;
  // }


  // for (const i of sections){
  //   const item = i;
  //   item.style.backgroundColor = hex;
  // }

// let i = 0
// while (i<sections.length) {
//   const item = sections[i]
//   item.style.backgroundColor = hex;
//   i++
// }

// let i = 0
// do {
//   const item = sections[i]
//   item.style.backgroundColor = hex;
//   i++
// } while (i<sections.length);

let i = 0
for (;;) {
  const item = sections[i];
  if (i < sections.length) {
    item.style.backgroundColor = hex;
    i++
  } else { break }
}

});
