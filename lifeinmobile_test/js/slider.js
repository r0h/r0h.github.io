var slideNum = 1;
showSlides(slideNum);

function plusSlide(n) {
	showSlides(slideNum += n);
}
function current(n) {
	showSlides(slideNum = n);
}
function showSlides(n) {
	var i,
		slides = document.getElementsByClassName("slider"),
		mini = document.getElementsByClassName("mini");

	if (n > slides.length) {
		slideNum = 1
	}
	if (n < 1 ) {
		slideNum = slides.length
	}
	for (i=0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i=0; i < slides.length; i++) {
		mini[i].className = mini[i].className.replace("active", "");
	}
	slides[slideNum -1].style.display = "block";
	mini[slideNum -1].className+= " active";
}
