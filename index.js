$(function(){
	
	$('#nav li').mouseover(function(e){
	var target=$(this).position().left;	
		$('#hua').stop(true).animate({
			'left': target+50+'px'
	},300,function(){
		$('#hua #sh').stop(true).animate({
				'left': -target+'px'
		});		
		if(e.target==$('#kon :nth-child(1)').get(0)) {
			$('#wo').hide();		
			$('#index').show();
			$('#ji').hide();
			$('#lian').hide();
			$('body').css('background','url(images/timg.jpg)');
		}
		else if(e.target==$('#kon :nth-child(2)').get(0)) {
			$('body').css('background','url(images/wo.png)');
			$('#index').hide();
			$('#wo').show();
			$('#ji').hide();
			$('#lian').hide();
		}
		else if(e.target==$('#kon :nth-child(3)').get(0)) {
			$('body').css('background','url(images/hong.jpg)');
			$('#index').hide();
			$('#wo').hide();
			$('#ji').show();
			$('#lian').hide();
		}
		else if(e.target==$('#kon :nth-child(4)').get(0)) {
			$('body').css('background','url(images/lian.jpg)');
			$('#index').hide();
			$('#wo').hide();
			$('#ji').hide();
			$('#lian').show();
		}
	}
	);	
	}	
	
	);
	$('#lian img').click(function(){
		$(this).next('span').fadeToggle();
	});
	
});