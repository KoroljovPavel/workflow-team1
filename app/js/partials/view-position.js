$(function() {
		$('.view__item-one').click(function(event){
			event.preventDefault();
			console.log('первый вид')
			$('.view__item-one').addClass('active');
			$('.view__item-two').removeClass('active');
      		$('.manipulation__item_position-block--lines').show();
     		$('.manipulation__item_position-block--cells').hide();
    });
		$('.view__item-two').click(function(event){
			event.preventDefault();
			console.log('второй вид')
			$('.view__item-two').addClass('active');
			$('.view__item-one').removeClass('active');
			$('.manipulation__item_position-block--cells').show();
			$('.manipulation__item_position-block--lines').hide();
		});
});

