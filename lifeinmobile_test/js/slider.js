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

var initialPoint;
var finalPoint;
document.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	initialPoint=event.changedTouches[0];
}, false);
document.addEventListener('touchend', function(event) {
	event.preventDefault();
	event.stopPropagation();
	finalPoint=event.changedTouches[0];
	var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
	var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
	if (xAbs > 20 || yAbs > 20) {
		if (xAbs > yAbs) {
			if (finalPoint.pageX < initialPoint.pageX){
				plusSlide(1);	}
				else{
					plusSlide(-1);	}
				}
			}
		}, false);

previous.addEventListener('touchstart', plusSlide(-1));