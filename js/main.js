(function($){
	'use strict';

// Menu
$('span.veer-menu-bar').on('click', function(){
	$('.veer-nav').slideDown();
	$('span.veer-menu-close').show();
	$(this).hide();
});

$('span.veer-menu-close').on('click', function(){
	$('.veer-nav').slideUp();
	$('span.veer-menu-bar').show();
	$(this).hide();
});

$(window).resize(function(){

	var screenSize = $(window).width();
	if (screenSize > 991) {
		$('.veer-nav').removeAttr('style');
	}
});

// venobox
new VenoBox();

// isotope
$(document).ready(function ($) {
setTimeout(function(){ 
          // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
});
     }, 1000);
});

$('.veer-work-buttons button').on('click', function(){
	$('.veer-work-buttons button').removeClass('active');
	$(this).addClass('active');
});

// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



}) (jQuery);