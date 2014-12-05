window.addEventListener('load', function(){
	var el = document.getElementById('links');
	var title = document.getElementById('title');
	window.addEventListener('scroll', function(){
		if(window.scrollY > title.offsetHeight){
			title.style.top = el.offsetHeight + 'px';
			el.style.position = 'fixed';
		}else{
			title.style.top = 0;
			el.style.position = 'initial';
		}
	});
});