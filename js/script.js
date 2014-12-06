window.addEventListener('load', function(){
	var el = document.getElementById('links');
	var title = document.getElementById('title');
	var spacer = document.getElementById('spacer');
	var h;
	var cs = document.defaultView.getComputedStyle(title, '');
	h = el.offsetHeight + parseFloat(cs.getPropertyValue('margin-top')) + parseFloat(cs.getPropertyValue('margin-bottom'))
	window.addEventListener('scroll', function(){
		if(window.scrollY > h){
			spacer.style.height = el.offsetHeight + 'px';
			el.style.position = 'fixed';
			el.style.width = '100%';
		}else{
			spacer.style.height = '';
			el.style.position = '';
			el.style.width = '';
		}
	});
});