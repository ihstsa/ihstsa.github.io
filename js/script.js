window.addEventListener('load', function(){
	var el = document.getElementById('links');
	var title = document.getElementById('title');
	window.addEventListener('scroll', function(){
		el.style.position = window.scrollY > title.offsetHeight ? 'fixed' : 'initial';
	});
});