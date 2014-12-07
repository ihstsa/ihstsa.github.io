window.addEventListener('load', function(){
	var el = document.getElementById('links');
	var title = document.getElementById('title');
	var spacer = document.getElementById('spacer');
	var h;
	var cs = document.defaultView.getComputedStyle(title, '');
	h = title.offsetHeight + parseFloat(cs.getPropertyValue('margin-top')) + parseFloat(cs.getPropertyValue('margin-bottom'))
	window.addEventListener('scroll', function(){
		if((window.pageYOffset || document.documentElement.scrollTop) > h){
			spacer.style.height = el.offsetHeight + 'px';
			el.style.position = 'fixed';
		}else{
			spacer.style.height = '';
			el.style.position = '';
		}
	});
});