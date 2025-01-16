"use strict";

// *** SECTION 01 --- BUTTON 02 ***

const btnDark02 = document.querySelector(".btn--dark-02");
const removeClass = 1000;
let isClicked = false;

btnDark02.addEventListener("click", toggleButton);

function toggleButton() {
	if (!isClicked) {
		btnDark02.classList.add("active");
		isClicked = true;
	}
	setTimeout(() => {
		btnDark02.classList.remove("active");

		isClicked = false;
	}, removeClass);
}

// **** ARROW ****

const arrow = document.getElementById("arrow");
const arrowOpacity = [
	() => (arrow.style.opacity = 1),
	() => (arrow.style.opacity = 0),
];

arrow.addEventListener("click", scrollTopArrow);
window.addEventListener("scroll", triggerArrow);

function scrollTopArrow() {
	window.scrollTo({
		top: 10,
		behavior: "smooth",
	});
}

function triggerArrow() {
	const addHeight = 850;
	const windowHeight = document.body.offsetHeight / 2 + addHeight;

	setTimeout(() => {
		window.scrollY > windowHeight ? arrowOpacity[0]() : arrowOpacity[1]();
	}, 250);
}

//-----------------------------------------------------------------
// *** Calc for me, need correct half whole website ***
// const windowHeight = document.body.offsetHeight / 2 - 371;
// console.log(document.body.offsetHeight / 2 + 300);
// console.log(window.innerHeight / 2);

// console.log("window.scrollY:", window.scrollY);
// console.log("windowHeight:", windowHeight);
//-----------------------------------------------------------------
