
let list = document.querySelector(".fa-solid");
let unorder_list = document.querySelector(".list-style");

list.addEventListener("click", () => {
  unorder_list.classList.toggle("active");
});

