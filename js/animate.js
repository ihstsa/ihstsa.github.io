var words = 'technology engineering mathematics science'.split(' ');
var charIndex = 0;
var wordIndex = 0;
var delta = 1;
var div;

function runner()
{
	var word = words[wordIndex];
	charIndex += delta;
	div.textContent = word.substring(0, charIndex);
	if(charIndex == word.length && delta == 1)
	{
		delta = -1;
		setTimeout(runner, 5000);
		return;
	}
	if(charIndex == 0 && delta == -1)
	{
		wordIndex = (wordIndex + 1) % words.length;
		delta = 1;
		if(wordIndex <= words.length)
		{
			setTimeout(runner, 500);
		}
		return;
	}
	setTimeout(runner, 100);
}
window.addEventListener('load', function(){
	div = document.getElementById('change');
	runner();
});