$(document).ready(function() {

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	// $(".fancybox").fancybox();

	$('.fancybox').on('click', function(){
		$.fancybox({
			padding: 0,
			autoSize: false,
			href: 'cv_eng.php',
			type: 'ajax'
		});
	});

	$(".mailme").fancybox({
		autoSize: false
	});
	$(".gallery").fancybox({
		padding: 0
	});
	$(".gallery2").fancybox({
		padding: 0
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/	
	// header-carousel
	$(".carousel").owlCarousel({
		loop:true,
		animateOut: 'fadeOut',
		responsiveClass:true,
		items:1,
		autoplay: true,
		dots: false
	});

	//gallery - carousels
	var owl = $(".details")
	var nextButton1 = $('.customNextBtn')
	var prevButton1 = $('.customPrevBtn')

	var owl2 = $(".look")
	var nextButton2 = $('.customNextBtn-2')
	var prevButton2 = $('.customPrevBtn-2')

	
	main_carousel(owl2);
	next(owl2, nextButton2);
	prev(owl2, prevButton2);
	
	main_carousel(owl);
	next(owl, nextButton1);
	prev(owl, prevButton1);

	function main_carousel(number){
		return number.owlCarousel({
		stagePadding: 50,
		loop:true,
		margin: 10,
		responsive:{

			0:{
				items:2
			},
			480:{
				items:4
			},
			630:{
				items:6
			},
			992:{
				items:10
			},
			1200:{
				items:13
			}
		}
	});

		};
	// Go to the next item
	function next(number_owl, nextButton){
		return  nextButton.click(function() {
			number_owl.trigger('next.owl.carousel');
		});
	};
	// Go to the previous item
	// With optional speed parameter
	// Parameters has to be in square bracket '[]'
	function prev(number_owl, prevButton){
		return prevButton.click(function() {
			number_owl.trigger('prev.owl.carousel', [700]);
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Thank you for message!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	//Анимация:
	//animateCss - function
	$.fn.extend({
		animateCss: function (animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			this.addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
			});
		}
	});

	//animate Circles whith animateCss
	$(function(){
		
		$('.menu_image_1').hover(function(){
			$('.fade').show(),
			$('.fade1').animateCss('zoomIn'),
			$('.fade2').animateCss('zoomIn')
		})
		$('.menu_image_2').hover(function(){
			$('.fade-m').show(),
			$('.fade-m1').animateCss('zoomIn')			
		})
		$('.menu_image_3').hover(function(){
			$('.fade-r').show(),
			$('.fade-r1').animateCss('zoomIn'),
			$('.fade-r2').animateCss('zoomIn')		
		})
	});

	//Ajax загрузка галереи
	$('.load_gallery').hide()
	$('.load_gallery_2').hide()

	$('.menu_image_1').click(function(){		
		$('.load_gallery_2').hide(1000);
		$('.load_gallery').slideToggle(1000);
	});

	$('.menu_image_3').click(function(){
		$('.load_gallery').hide(1000);

		$('.load_gallery_2').slideToggle(1000);
	});
});