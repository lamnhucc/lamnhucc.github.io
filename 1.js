document.addEventListener("DOMContentLoaded",function(){
	var nut = document.querySelector('.nut'),
		den = document.querySelector('.den'),
		menu = document.querySelector('.menutrai'),
		trang = document.querySelector('.mautrang');
	nut.onclick = function(){
		den.classList.toggle('hienraden');
		menu.classList.remove('vetrai');
		trang.classList.add('xoay');
	}
	den.onclick = function(){
		den.classList.remove('hienraden');
		menu.classList.add('vetrai');
		trang.classList.remove('xoay');
	}
},false);