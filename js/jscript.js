	<!--Script to run JQuery SmoothScroll-->
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
	<!--End of SmoothScroll Script-->

	$(document).ready(function () {
		$("div#mobile-ul").hide();
		$("li#menu").click(function () {
			$("div#mobile-ul").slideToggle("slow");
		});
		$("a.mobile-link").click(function () {
			$("div#mobile-ul").slideUp("slow");
		});

	});

	<!--End of Mobile Toggle-->