const modal = document.querySelector('.modal');
const modalBtnVer = document.querySelector('.ver');
const btnProbando = document.querySelector('#btn_cerrar');

modalBtnVer.addEventListener('click', function () {
	modal.style.display = 'flex';
	btnProbando.style.display = 'block';
});
btnProbando.addEventListener('click', function () {
	modal.style.display = 'none';
	btnProbando.style.display = 'none';
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('blogSlides');
	// var dots = document.getElementsByClassName("blogSlider__dots--dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	// for (i = 0; i < dots.length; i++) {
	//   dots[i].className = dots[i].className.replace(" active", "");
	// }
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}

function mostrarBanner() {
	let body = document.querySelector('body');
	// alert("hola")
	const scriptHTML = `<script>alert("Error")</script>`;
	body.innerHTML += scriptHTML;
	// body.innerHTML += `<script>alert("hola mundo")</script>`;

	// document.getElementsByTagName("body").innerHTML = `<script>alert("hola mundo")<script>`;
}