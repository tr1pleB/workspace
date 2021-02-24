$(document).ready(function() {
	setInterval(function() {
		$(".slider").animate({bottom: "+=400"}, 10000)
		.animate({right: "+=400"}, 10000)
		.animate({bottom: "+=400"}, 10000)
		.animate({right: "-=400"}, 10000)
		.animate({bottom: "-=400"}, 10000)
		.animate({right: "+=400"}, 10000)
		.animate({bottom: "-=400"}, 10000)
		.animate({right: "-=400"}, 10000)
	}, 0);
});
