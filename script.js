const themeDots = document.querySelectorAll('.theme-dot');
const theme = localStorage.getItem('theme') || 'light';

const readabilityBtn = document.querySelector('.readability-btn');

setTheme(theme);
setReadability();

for (const themeDot of themeDots) {
	themeDot.addEventListener('click', () => {
		const mode = themeDot.dataset.mode;
		setTheme(mode);
	});
}

readabilityBtn.addEventListener('click', () => {
	readabilityBtn.classList.toggle('easy-read');
	setReadability();
});

function getStylesheetUrl(mode) {
	return `css/${mode}.css`;
}

function setTheme(mode) {
	let themeStyle = document.getElementById('theme-style'),
		defaultTheme = getStylesheetUrl('light');

	switch (mode) {
		case 'light':
		case 'blue':
		case 'green':
		case 'purple':
			themeStyle.href = getStylesheetUrl(mode);
			break;
		default:
			themeStyle.href = defaultTheme;
			mode = 'light';
			break;
	}
	localStorage.setItem('theme', mode);
}

function setReadability() {
	let fontFamily = document.getElementById('font-family');
	let	stylizedFont = getStylesheetUrl('stylized');

	if (readabilityBtn.classList.contains('easy-read')) {
		fontFamily.href = getStylesheetUrl('readability');
		readabilityBtn.innerHTML = 'Fancy Font';
		console.log('easy-read');
	} else {
		fontFamily.href = stylizedFont;
		readabilityBtn.innerHTML = 'Easy Read';
		console.log('stylized');
	}
}
