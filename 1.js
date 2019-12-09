 $(function(){
 	
 	$(".xuong,.kn").click(function(){
 		$('body,html').animate({scrollTop:$('#khoiedu').offset().top},800);
 		return false;
 	})

 	$(".xuongnua,.slide").click(function(){
 		$('body,html').animate({scrollTop:$('#sl').offset().top},1400);
 		return false;
 	})
 })

 document.addEventListener("DOMContentLoaded",function(){
	//Hiệu ứng scroll
	var trangthai = 'tren100';
	var mauden = document.querySelector('.navbar');
	// console.log(mauden.offsetTop);
	window.addEventListener('scroll',function(){
		if (window.pageYOffset > 100) {
			if (trangthai == 'tren100') {
				trangthai = 'duoi100';
				mauden.classList.add('mauden');
			}
		}
		else if(window.pageYOffset < 100){
			if (trangthai == 'duoi100') {
				trangthai = 'tren100';
				mauden.classList.remove('mauden');
			}
		}
	})


	var  nut = document.querySelectorAll('.chuyenslide ul li');
	var slide = document.querySelectorAll('.cacslide ul li');
	var thoigian = setInterval(function(){ autoSlide()},4000);
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			clearInterval(thoigian);
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			var vitri = 0;
			var nutkichhoat = this;
			for (vitri = 0;nutkichhoat = nutkichhoat.previousElementSibling; vitri++) {}
			// Sau khi biết được vị trí thì mún hiển thị slide nào thì dựa vào vị trí
		for (var i = 0; i < slide.length; i++) {
			slide[i].classList.remove('active');
			slide[vitri].classList.add('active');
		}

	})
	}
	// Tự động chuyển slide
	function autoSlide(){
		var slideHienthi = document.querySelector('.cacslide ul li.active');
		var vitrislide = 0;
		for (vitrislide = 0;slideHienthi = slideHienthi.previousElementSibling;vitrislide++) {}
			// Check tới điểm cuối chưa nếu rồi thì hiển thị sldie đầu tiên
		if (vitrislide < (slide.length-1)) {
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			slide[vitrislide].nextElementSibling.classList.add('active');
			nut[vitrislide].nextElementSibling.classList.add('kichhoat');
		}
		else{
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			slide[0].classList.add('active');
			nut[0].classList.add('kichhoat');
		}
	}



},false);