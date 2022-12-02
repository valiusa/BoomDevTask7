//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    let productElements = document.getElementsByClassName("product");
    let price = document.getElementsByClassName("price")[0].innerHTML;

    productElements[0].setAttribute("data-price", price);
});
