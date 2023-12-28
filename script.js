const themeDots = document.querySelectorAll('.theme-dot');
const theme = localStorage.getItem('theme') || 'light';
const readabilityBtn = document.querySelector('.readability-btn');
let readability = localStorage.getItem('readability') || 'stylized';

setTheme(theme);
setReadability(readability);

for (const themeDot of themeDots) {
	themeDot.addEventListener('click', () => {
		const mode = themeDot.dataset.mode;
		setTheme(mode);
	});
}

readabilityBtn.addEventListener('click', () => {
	readabilityBtn.classList.toggle('easy-read');
	readability = readabilityBtn.classList.contains('easy-read')
		? 'readability'
		: 'stylized';
	setReadability(readability);
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

function setReadability(readability) {
	let fontFamily = document.getElementById('font-family');
	let stylizedFont = getStylesheetUrl('stylized');

	if (readability === 'readability') {
		fontFamily.href = getStylesheetUrl('readability');
		readabilityBtn.innerHTML = 'Fancy Font';
	} else {
		fontFamily.href = stylizedFont;
		readabilityBtn.innerHTML = 'Easy Read';
	}
	localStorage.setItem('readability', readability);
}
