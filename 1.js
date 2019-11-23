document.addEventListener("DOMContentLoaded",function(){
	var trangthai = "duoi300";
	var logo = document.querySelector('.logo');
	var trang = document.querySelector(".navbar");
	var nut = document.querySelector(".nutlen");
	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		if (window.pageYOffset > 60) {
			if (trangthai == "duoi300") {
				trangthai = "tren300";
				trang.classList.add('trang');
				logo.classList.add('maucam');
				nut.classList.add('hienthi');
			}
		}
		else if(window.pageYOffset <=60)
		{
			if (trangthai == "tren300") {
				logo.classList.remove('maucam');
				trang.classList.remove('trang');
				nut.classList.remove('hienthi');
				trangthai = "duoi300";
			}
		}
	})
},false);