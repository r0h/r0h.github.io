var slideNum = 1;
showSlides(slideNum);

//Prev and Next function
function plusSlide(n) {
	showSlides(slideNum += n);
}

//Click small image
function current(n) {
	showSlides(slideNum = n);
}

//Main function moves slider
function showSlides(n) {
	var i,
	slides = document.getElementsByClassName("slider"),
	mini = document.getElementsByClassName("mini");

	//Infinitive loop
	if (n > slides.length) {
		slideNum = 1
	}
	if (n < 1 ) {
		slideNum = slides.length
	}

	//Hiding all slides
	for (i=0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	//Taking off the "active" from small images
	for (i=0; i < slides.length; i++) {
		mini[i].className = mini[i].className.replace("active", "");
	}

	//Showing current slide and adding "active" to current small image
	slides[slideNum -1].style.display = "block";
	mini[slideNum -1].className+= " active";
}

//Adding touch for mobile
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
