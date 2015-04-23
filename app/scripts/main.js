$(document).ready(function(){
	$(window).on('resize', function(){
		var win = $(this);
		if (win.width()>768){
			$('.thumbnailTitle').css('display','none');
			$('.thumbnail').on('mouseover', function(){
				$(this).find('.thumbnailTitle').css('display','block');
			})
			$('.thumbnail').on('mouseout', function(){
				$(this).find('.thumbnailTitle').css('display','none');
			})
		}else if(win.width()<768){
			$('.thumbnailTitle').css('display','block');
			$('.thumbnail').off('mouseover');
			$('.thumbnail').off('mouseout');
		}
	})
		if ($(window).width()>768){
			$('.thumbnailTitle').css('display','none');
			$('.thumbnail').on('mouseover', function(){
				$(this).find('.thumbnailTitle').css('display','block');
			})
			$('.thumbnail').on('mouseout', function(){
				$(this).find('.thumbnailTitle').css('display','none');
			})
		}else if($(window).width()<768){
			$('.thumbnailTitle').css('display','block');
			$('.thumbnail').off('mouseover');
			$('.thumbnail').off('mouseout');
		}
})