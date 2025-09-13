let cards = document.querySelectorAll(".card");
let total_price = 0
let total_count = 0;
localStorage.setItem("count", total_count);
localStorage.setItem("price", total_price);

let btns = [];
cards.forEach((element) => {
  element
    .querySelector(".buttonplus")
    .addEventListener("click", function (e) {
      e.preventDefault();
        let price = parseInt(element.querySelector(".price").innerHTML)
        total_price += price
        localStorage.setItem("price", total_price);
        total_count++
        localStorage.setItem("count", total_count);
    });
});
