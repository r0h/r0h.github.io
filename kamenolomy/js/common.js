$(document).ready(function(){

	
	$(".icon").animated("swing");
	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		$(".main_menu").slideToggle();
	});


	$(".main_menu ul li").click(function(){
		$("ul",this).slideToggle('slow');
		return false;
	});
	$(".footer_menu_3 ul li").click(function(){
		$("ul",this).slideToggle('slow');
		return false;
	});

	$('.main_menu ul li a').click(function(){
		$(".main_menu ul li a").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({
		type:"image",
		midClick: true,
		mainClass: "img_popup"
	});

	$(".carousel").owlCarousel({
		items:1,
		loop:true
	});

	$('.customNextBtn').click(function() {
		$(".carousel").trigger('next.owl.carousel');
	});
	$('.customPrevBtn').click(function() {
		$(".carousel").trigger('prev.owl.carousel', [700]);
	});


	$(".head_text a").mPageScroll2id();

});