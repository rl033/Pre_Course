$(document).ready(function() {
  console.log("Script included!");

	$("li#in").click(function(){
		$(this).toggleClass('bought');
	});

	$(".directions h2").click(function(){
		$('.directions').toggleClass('cook');

	});
/*
	$("li#dir").click(function(){
		if ($(this).hasClass('highlighted') {
			$(this).removeClass('highlighted');
		}
		else {
			$(this).addClass('highlighted');
			$('.highlighted').removeClass('highlighted');
		}		
	});*/
		
});