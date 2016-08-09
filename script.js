
$(document).ready(function(){
	$('.header').slideDown(3000);
	$('.wrapper').slideDown(3000);
	

	$('.picture').on('click', function(event){
		$('.header').slideToggle(1000);
		$('.wrapper').slideToggle(1000);
	});
});