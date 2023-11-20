const themeDots = document.querySelectorAll('.theme-dot');
const theme = localStorage.getItem('theme') || 'light';

setTheme(theme);

for (const themeDot of themeDots) {
	themeDot.addEventListener('click', () => {
		const mode = themeDot.dataset.mode;
		setTheme(mode);
	});
}

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
