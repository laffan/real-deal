console.group("%c🚨 AMAZON", "color: black; background: yellow;");

function updateDOM() {
  console.log("updateDOM()");

  const priceEl = document.querySelector("#buybox .a-color-price");
  // const cartBtnEl = document.querySelector("#add-to-cart-button");
  const cartBtnPlacement = document.querySelector('#buybox');
  const cartBtnMessage = document.createElement('div');

  // Create message
  cartBtnMessage.classList.add("RealDeal__CartBtn")
  cartBtnMessage.innerHTML = `${priceEl.innerHTML} is 3.5% of your bank account.`

  // cartBtnMessage.parentNode.insertBefore(cartBtnMessage, cartBtnMessage);

  cartBtnPlacement.prepend(cartBtnMessage);

}

if (document.readyState !== 'loading') {
  updateDOM();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    updateDOM();
  });
}


console.groupEnd();
