 $(function(){
 	
 	$(".xuong,.kn").click(function(){
 		$('body,html').animate({scrollTop:$('#khoiedu').offset().top},800);
 		return false;
 	})

 	$(".xuongnua,.slide").click(function(){
 		$('body,html').animate({scrollTop:$('#sl').offset().top},1000);
 		return false;
 	})
 })
