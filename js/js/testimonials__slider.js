const sliderT = document.querySelector("#slider__testimonials");
let sliderSectionT = document.querySelectorAll(".slider__section__testimonials");
let sliderSectionLastT = sliderSectionT[sliderSectionT.length -1];

const btnLeftT = document.querySelector("#btn__left__testimonials");
const btnRightT = document.querySelector("#btn__right__testimonials");

sliderT.insertAdjacentElement('afterbegin', sliderSectionLastT);

function NextT() {
	let sliderSectionFirstT = document.querySelectorAll(".slider__section__testimonials")[0];
	sliderT.style.marginLeft = "-200%";
	sliderT.style.transition = "all 0.5s";
	setTimeout(function(){
		sliderT.style.transition = "none";
		sliderT.insertAdjacentElement('beforeend', sliderSectionFirstT);
		sliderT.style.marginLeft = "-100%";
	}, 500);
}

function PrevT() {
	let sliderSectionT = document.querySelectorAll(".slider__section__testimonials");
	let sliderSectionLastT = sliderSectionT[sliderSectionT.length -1];
	sliderT.style.marginLeft = "0";
	sliderT.style.transition = "all 0.5s";
	setTimeout(function(){
		sliderT.style.transition = "none";
		sliderT.insertAdjacentElement('afterbegin', sliderSectionLastT);
		sliderT.style.marginLeft = "-100%";
	}, 500);
}

btnRightT.addEventListener('click', function(){
	NextT();
});

btnLeftT.addEventListener('click', function(){
	PrevT();
});

setInterval(function(){
	NextT();
}, 5000);