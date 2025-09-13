
let things = document.querySelector(".things");

things.innerHTML = "Предметів в кошику: " + localStorage.getItem("count");

let summa = document.querySelector(".summa");

summa.innerHTML = "Додано на сумму: " + localStorage.getItem('price');