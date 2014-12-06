window.addEventListener('load', function(){
	var el = document.getElementById('links');
	var title = document.getElementById('title');
	window.addEventListener('scroll', function(){
	//return;
		if(window.scrollY > title.offsetHeight){
			title.style.marginBottom = el.offsetHeight + 'px';
			el.style.position = 'fixed';
			el.style.width = '100%';
		}else{
			title.style.marginBottom = '';
			el.style.position = 'initial';
			el.style.width = '';
		}
	});
});