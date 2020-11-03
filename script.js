var deleteButtons = document.querySelectorAll(".del");
Array.from(deleteButtons).map((el) => {
  el.addEventListener("click", () => {
    el.parentElement.parentElement.remove();
  });
});

var likeButtons = document.querySelectorAll(".photo");
Array.from(likeButtons).map((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("pink");
  });
});

var plusButtons = document.querySelectorAll(".plus");
Array.from(plusButtons).map((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.innerHTML =
      parseInt(el.nextElementSibling.innerHTML) + 1;
      var price= el.parentElement.parentElement.nextElementSibling.innerHTML.replace("€", "");
      total.innerHTML=parseInt(total.innerHTML.replace("€", "")) + parseInt(price) +"€" ;
  });
});

var moinsButtons = document.querySelectorAll(".moins");
Array.from(moinsButtons).map((el) => {
  el.addEventListener("click", () => {
    if (el.previousElementSibling.innerHTML > 0) {
      el.previousElementSibling.innerHTML =
        parseInt(el.previousElementSibling.innerHTML) - 1;
        var price= el.parentElement.parentElement.nextElementSibling.innerHTML.replace("€", "");
        total.innerHTML=parseInt(total.innerHTML.replace("€", "")) - parseInt(price) +"€" ;
    }
  });
});

var total = document.querySelector("#total");