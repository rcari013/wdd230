const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});


