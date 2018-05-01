$(function(){


	$('.menu-toggle').click(function(){
		$(".box-menu-sidebar").toggleClass("open")
	})
	$('.close-menu-sidebar').click(function(){
		$('.box-menu-sidebar').removeClass("open")
	})


var hf = function(){
	var h_header = $('header').height();
	var h_footer = $('footer').height();
	$('.content').css({
		'paddingTop': h_header,
		// 'paddingBottom': h_footer
	});

}

// $('.menu-tel-toggle').click(function(){
// 		$('.menu-tel').slideToggle(500)
// 	})

$(window).bind('load resize', hf);

});






