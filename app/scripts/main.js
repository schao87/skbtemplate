$(document).ready(function(){
	$(window).on('resize', function(){
		var win = $(this);
		if (win.width()>768){
			$('.thumbnailTitle').css('opacity','0');
			$('.thumbnail').on('mouseover', function(){
				var tn = $(this).find($('.thumbnailTitle'));
				TweenMax.to(tn, .3, {opacity:1});
			})
			$('.thumbnail').on('mouseout', function(){
				var tn = $(this).find($('.thumbnailTitle'));
				TweenMax.to(tn, .3,{opacity:0});
			})
		}else if(win.width()<768){
			$('.thumbnailTitle').css('opacity','1');
			$('.thumbnail').off('mouseover');
			$('.thumbnail').off('mouseout');
		}
	})
	// if ($(window).width()>768){
	// 	$('.thumbnailTitle').css(opacity,0);
	// 	$('.thumbnail').on('mouseover', function(){
	// 		TweenMax.to($('.thumbnailTitle'), .3, {opacity:1});
	// 	})
	// 	$('.thumbnail').on('mouseout', function(){
	// 		TweenMax.to($('.thumbnailTitle'), .3,{opacit:0});
	// 	})
	// }else if($(window).width()<768){
	// 	$('.thumbnailTitle').css('opacity',1);
	// 	$('.thumbnail').off('mouseover');
	// 	$('.thumbnail').off('mouseout');
	// }
	var win = $(this);
		if (win.width()>768){
			$('.thumbnailTitle').css('opacity','0');
			$('.thumbnail').on('mouseover', function(){
				var tn = $(this).find($('.thumbnailTitle'));
				TweenMax.to(tn, .3, {opacity:1});
			})
			$('.thumbnail').on('mouseout', function(){
				var tn = $(this).find($('.thumbnailTitle'));
				TweenMax.to(tn, .3,{opacity:0});
			})
		}else if(win.width()<768){
			$('.thumbnailTitle').css('opacity','1');
			$('.thumbnail').off('mouseover');
		}
	
})