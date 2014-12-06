window.addEventListener('load', function(){
	var el = document.getElementById('links');
	var title = document.getElementById('title');
	var header = document.getElementsByTagName('header')[0];
	var h;
	var cs = document.defaultView.getComputedStyle(title, '');
	h = title.offsetHeight + parseFloat(cs.getPropertyValue('margin-top')) + parseFloat(cs.getPropertyValue('margin-bottom'))
	window.addEventListener('scroll', function(){
		if((window.pageYOffset || document.documentElement.scrollTop) > h){
			header.style.marginBottom = el.offsetHeight + 'px';
			el.style.position = 'fixed';
			el.style.width = '100%';
		}else{
			header.style.marginBottom = '';
			el.style.position = '';
			el.style.width = '';
		}
	});
});