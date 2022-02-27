const allButton = document.querySelectorAll(".btn-primary");
// to create div for show cart  icon
const cart = document.createElement("div");
allButton.forEach((item) => {
  item.addEventListener("click", (eo) => {
    // convert btn from 'buy' to 'done'
    item.setAttribute("disabled", "");
    item.innerHTML = "&#10004; Done";
    item.classList.remove("btn-primary");
    item.classList.add("btn-success");

    congratulationDiv();
    cartDiv();

    // get elements from dom
    const card = item.parentElement.parentElement.parentElement;
    const imgSrc = card.getElementsByClassName("card-img-top")[0].src;
    const elementName = card.getElementsByClassName("card-title")[0].innerText;
    const elementPrice = card.getElementsByClassName("price")[0].innerText;
    const addedProduct = `
    <div dir="rtl" class="item-container">
          <div class="img-title-parent">
            <img src="${imgSrc}" alt="" />
            <p class="product-name">${elementName}</p>
          </div>

          <div style="display: flex; align-items: center">
            <input
              type="number"
              min="1"
              value="1"
              id="input-quantity"
              dir="ltr"
              class="input-quantity"
            />
            <p>Quantity</p>
          </div>

          <div class="price">${elementPrice}</div>

          <div class="btn btn-secondary">Delete</div>
        </div>
    `;
    const allProduct = document.getElementById("allProduct");
    // add div of product to the article in html codes
    allProduct.innerHTML += addedProduct;
    UpdateTotalPrice();
  });
});
// to add the div of congratulation
const congratulationDiv = () => {
  const popUp = document.createElement("div");
  body.append(popUp);
  popUp.classList.add("done-pop-up");
  popUp.innerHTML = "Congratulations &#128525;";

  setTimeout(() => {
    popUp.style.transform = "translateX(-90vw)";
  }, 1500);

  setTimeout(() => {
    popUp.remove();
  }, 3000);
};
// to add show cart icon
const cartDiv = () => {
  body.append(cart);
  cart.classList.add("cart");
  cart.innerHTML = "Show Cart";
};

// when we click on cross icon
const cross = document.getElementById("close");
cross.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(-120vw)";
});
// when we click on show cart icon
cart.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(0)";
});
// compute total price
const totalPrice = document.getElementById("total-price");
const UpdateTotalPrice = () => {
  const produtBlackScreen = document.querySelectorAll(".item-container");
  let total = 0;
  produtBlackScreen.forEach((item) => {
    const price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    const quantity = Number(
      item.getElementsByClassName("input-quantity")[0].value
    );
    total = total + price * quantity;
  });
  totalPrice.innerText = `$${total}`;
};
allProduct.addEventListener("change", (eo) => {
  UpdateTotalPrice();
});

const blackScreen = document.getElementById("blackScreen");
// delete product and update total price
blackScreen.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("btn-secondary")) {
    eo.target.parentElement.remove();
    UpdateTotalPrice();
  }
});

blackScreen.addEventListener("click", (eo) => {
  const productDeleted =
    eo.target.parentElement.getElementsByClassName("product-name")[0].innerText;
  const allCards = document.querySelectorAll(".card");

  allCards.forEach((item) => {
    const nameOfProductInWeb =
      item.getElementsByClassName("card-title")[0].innerText;
    if (productDeleted == nameOfProductInWeb) {
      const doneButton = item.getElementsByClassName("btn-success")[0];
      doneButton.removeAttribute("disabled");
      doneButton.classList.remove("btn-success");
      doneButton.classList.add("btn-primary");
      doneButton.innerText = "Buy";
    }
  });
});
