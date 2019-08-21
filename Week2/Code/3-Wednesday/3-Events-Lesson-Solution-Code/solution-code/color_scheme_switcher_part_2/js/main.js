const switcherButtons = document.querySelectorAll('li');

for (let i = 0; i < switcherButtons.length; i++) {
	switcherButtons[i].addEventListener('click', switchTheme);
}

function switchTheme () {
	let newTheme = this.className;
	document.querySelector('body').className = newTheme;
}
