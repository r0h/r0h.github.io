	var slideNum = 1;
	showSlides(slideNum);

	function plusSlide(n) {
		showSlides(slideNum += n);
	}
	function current(n) {
		showSlides(slideNum = n);
	}
	function showSlides(n) {

		if (n > $(".slider").length) {
			slideNum = 1
		}
		if (n < 1 ) {
			slideNum = $(".slider").length
		}
		for (i=0; i < $(".slider").length; i++) {
			$(".slider").css("display", "none");
		}
		for (i=0; i < $(".slider").length; i++) {
			$(".mini")[i].className = $(".mini")[i].className.replace("active", "");
		}
		$(".slider")[slideNum -1].style.display = "block";
		$(".mini")[slideNum -1].className+= " active";
	}

//Adding touch with "jquery.mobile"
	$(".container").on("swipeleft",function(){
		plusSlide(1);
	});
	$(".container").on("swiperight",function(){
		plusSlide(-1);
	});

//Removing unliked effects after adding "jquery.mobile"
$(document).ready(function(){	
	$(".ui-loader").hide();
	$(".ui-page").removeAttr("tabindex");
});