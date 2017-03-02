<!DOCTYPE html>
<html lang="pl">
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
			<p>28 lat<br />
				(ur. 17 maja 1988 r.)<br />
				Nieżonaty.  
			</p>
			<p>ulica 1905 roku bud. 3, Krzemieńczuk, obwód połtawski, Ukraina</p>
				<p>davaypotom@ukr.net<br />
					<a href="http://facebook.com/yokko.odto" target="blank">Facebook-Yokko Odto</a><br />
					<a href="https://www.instagram.com/yoko6261" target="blank">Instagram-yoko6261</a>
				</p>
			</div>
		</div>
		<div class="col-md-8">
			<div class="flags">
				<img class="ua" src="img/cv/ua.png" alt="">
				<img class="en" src="img/cv/uk.png" alt="">
			</div>
			<div class="cv name_cv">
				CV
			</div>
			<p>Niekonfliktowy, dążący do celu, wytrwały i akuratny. Pasjonat swojej sprawy. Szukam godnego wg warunków i wynagrodzenia stanowiska technika dentystycznego ceramisty. Gwarantuję wysoką jakość i estetykę wykonanych robót. Staż pracy 5 lat. Mam doświadczenie pracy z mieszankami ceramicznymi: Duceram Kiss, Ceramco 2/3, Ultropaline i próbne roboty z Noritake. Zwykle umiem nanosić ceramikę na: metal, ZrO2 (tlenek cyrkonu), E-max, licówki. Mam doświadczenie wykonania odlewów pod metaloceramikę, odlewanie i osadzenie odlewów. Uwielbiam Wax-up! Mam wykształcenie artystyczne.</p>
			<ul>
				<p class="block_name">PRACA</p>
			</ul>
			<p class="date">MARZEC 2012 —DO DZIŚ</p>
			Laboratorium Techniczno-Dentystyczne Da Vinci<br />
			technik dentystyczny ceramista (Krzemieńczuk)<br />
			<p class="date">SIERPIEŃ 2011 — KWIECIEŃ 2012</p>
			Klinika Mary Dent<br />
			technik dentystyczny ceramista (Symferopol)<br />
			<p class="date">LIPIEC 2010 — SIERPIEŃ 2011</p>
			Klinika Stomatologiczna Dinara<br />
			pomocnik głównego technika dentystycznego (Symferopol)
			
			<ul><p class="block_name">WYKSZTAŁCENIE:</p></ul>
			<p class="date">WRZESIEŃ 2009 — SIERPIEŃ 2011</p>
			College Medyczny Państwowego Zakładu "Krymski Państwowy Uniwersytet Medyczny im. S.N. Georgijewskiego" Stomatologia ortopedyczna. Technik dentystyczny
			<p class="date">WRZESIEŃ 2006 — SIERPIEŃ 2008</p>
			Liceum zawodowe branży usługowej. Designer grafik
			<ul><p class="block_name">HOBBY</p></ul>
			Bieganie, boks, jazda na rowerze, malowanie
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
			$('.en').on('click', function(){
				$.fancybox({
					autoSize: false,
					href: 'cv_eng.php',
					type: 'ajax'
				});
			});
			$(".gallery").fancybox();
		</script>
	</body>
</html>