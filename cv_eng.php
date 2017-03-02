<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
</head>
<body>
	<div class="col-md-4 left_cv">
		<img src="img/cv/self.jpg" alt="">
		<div class="name_cv">
			Danylo<br />
			Pronin
		</div>
		<div class="contact_cv">
			<p>28 years old<br />
				(born on May 17, 1988),<br />
				Single. 
			</p>
			<p>Ukraine, Poltavska oblast, town of 
				Kremenchuk, vul. 1905 roku, 3</p>
				<p>davaypotom@ukr.net<br />
					<a href="http://facebook.com/yokko.odto" target="blank">Facebook-Yokko Odto</a><br />
					<a href="https://www.instagram.com/yoko6261" target="blank">Instagram-yoko6261</a>
				</p>
			</div>
			
		</div>
		<div class="col-md-8">
			<div class="flags">
				<img class="ua" src="img/cv/ua.png" alt="">
				<img class="pl" src="img/cv/pl.png" alt="">
			</div>
			<div class="cv name_cv">
				CV
			</div>
			<p>Non-confrontational, determined, hardy and tidy. Fan of my business. Searching for a working place of a dental ceramics technician which is suitable under the terms and salary. I guarantee the high quality and esthetics of performed work. Working experience - 5 years. I have an experience of working with ceramic masses Duceram Kiss, Ceramco 2/3, Ultropaline and trial works with Noritake. I definitely can cover metal, ZrO2 (zirconium dioxide), E-max and veneers with ceramics. I have an experience of founding metal ceramics, molding and its attachment. Fond of Wax-up! I also have art education.</p>
			<ul>
				<p class="block_name">WORK </p>
			</ul>
			<p class="date">MARCH 2012 - TODAY </p>
			Dental laboratory Da Vinci<br />
			Dental ceramics technician (town of Kremenchuk)<br />
			<p class="date">AUGUST 2011 - APRIL 2012</p>
			Clinic Mary dent <br />
			Dental ceramics technician.(Simferopol).<br />
			<p class="date">JULY 2010 - AUGUST 2011</p>
			Dental clinic Dinara.<br />
			Assistant of head dental technician (Simferopol).

			<ul><p class="block_name">EDUCATION </p></ul>
			<p class="date">SEPTEMBER 2009 - AUGUST 2011</p>
			Medical college of State Institution "Crimea State Medical University of S.N. Heorhiievskyi". Orthopedic dentistry. Dental technician.
			<p class="date">SEPTEMBER 2006 - AUGUST 2008 </p>
			Professional lyceum of service spheres. Design Graphics 
			<ul><p class="block_name">HOBBIES </p></ul>
			Jogging, boxing, cycling, drawing and painting 
		</div>		
		<div class="col-md-12">
			<div class="photos">
				<div class="slide"><a class="gallery" rel="group3" title="Wax. The Lower jaw" href="img/me/01.jpg"><img src="img/me/thumbs/01.jpg" alt=""></a></div>
				<div class="slide"><a class="gallery" rel="group3" title="Wax" href="img/me/02.jpg"><img src="img/me/thumbs/02.jpg" alt=""></a></div>
				<div class="slide"><a class="gallery" rel="group3" title="Wax. The Upper jaw" href="img/me/03.jpg"><img src="img/me/thumbs/03.jpg" alt=""></a></div>
				<div class="slide"><a class="gallery" rel="group3" title="No. No. Just" href="img/me/04.jpg"><img src="img/me/thumbs/04.jpg" alt=""></a></div>
				<div class="slide"><a class="gallery" rel="group3" title="Forms. Details. Lines" href="img/me/05.jpg"><img src="img/me/thumbs/05.jpg" alt=""></a></div>
				<div class="slide"><a class="gallery" rel="group3" title="ZrO2" href="img/me/06.jpg"><img src="img/me/thumbs/06.jpg" alt=""></a></div>
				<div class="slide"><a class="gallery" rel="group3" title="The Forms" href="img/me/07.jpg"><img src="img/me/thumbs/07.jpg" alt=""></a></div>
			</div>
		</div>
		<script>
			$('.ua').on('click', function(){
				$.fancybox({
					autoSize: false,
					href: 'cv_ua.php',
					type: 'ajax'
				});
			});
			$('.pl').on('click', function(){
				$.fancybox({
					autoSize: false,
					href: 'cv_pl.php',
					type: 'ajax'
				});
			});
			$(".gallery").fancybox({
				padding: 0
			});
		</script>
	</body>
	</html>