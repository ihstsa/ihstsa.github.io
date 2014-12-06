window.addEventListener('load', function(){
	var el = document.getElementById('links');
	var title = document.getElementById('title');
	var h;
	var cs = document.defaultView.getComputedStyle(title, '');
	h = el.offsetHeight + cs.getPropertyValue('margin-top') + cs.getPropertyValue('margin-bottom')
	window.addEventListener('scroll', function(){
		if(window.scrollY > h){
			title.style.marginBottom = el.offsetHeight + 'px';
			el.style.position = 'fixed';
			el.style.width = '100%';
		}else{
			title.style.marginBottom = '';
			el.style.position = '';
			el.style.width = '';
		}
	});
});