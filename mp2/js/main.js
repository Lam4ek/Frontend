$(function(){
		$('.menu__burger').on('click', function () {
				$('.menu__list').toggleClass('active');
				$('.header').toggleClass('active');
		});
})