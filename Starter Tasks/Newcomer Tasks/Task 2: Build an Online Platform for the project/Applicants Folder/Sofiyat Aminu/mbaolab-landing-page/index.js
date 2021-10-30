const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const logo =document.querySelector("#logo");

const check = () => {
  burger.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      burger.classList.add('mb-96')
      logo.classList.add('mb-96')
      
    } else {
      menu.classList.add("hidden");
      burger.classList.remove('mb-96')
      logo.classList.remove('mb-96')
    }
  });
};
check();
