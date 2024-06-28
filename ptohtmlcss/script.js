var settingsmenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
  settingsmenu.classList.toggle("setting-menu-height");
}
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
const number = [43,56,23,44,36,5];
const number2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange','Pear'];
const mixed = [22,'Hello',true,undefined,null, {a:1,b:1}, new Date()];

let val;
console.log(val);
