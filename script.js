const themeDots = document.querySelectorAll('.theme-dot');
const themeStyle = document.getElementById('theme-style');
const fontFamily = document.getElementById('font-family');
const readabilityBtn = document.querySelector('.readability-btn');

const DEFAULT_THEME = 'light';
const STYLIZED_FONT = 'stylized';
const READABILITY_FONT = 'readability';
const LOCAL_STORAGE_THEME_KEY = 'theme';
const LOCAL_STORAGE_READABILITY_KEY = 'readability';

function getStylesheetUrl(mode) {
  return `css/${mode}.css`;
}

function setTheme(mode) {
  const themeUrl = mode === DEFAULT_THEME ? getStylesheetUrl(DEFAULT_THEME) : getStylesheetUrl(mode);
  themeStyle.href = themeUrl;
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, mode);
}

function setReadability() {
  const isEasyRead = readabilityBtn.classList.toggle('easy-read');
  const fontUrl = isEasyRead ? getStylesheetUrl(READABILITY_FONT) : getStylesheetUrl(STYLIZED_FONT);
  const buttonText = isEasyRead ? 'Fancy Font' : 'Easy Read';

  fontFamily.href = fontUrl;
  readabilityBtn.innerHTML = buttonText;

  const readabilityMode = isEasyRead ? READABILITY_FONT : STYLIZED_FONT;
  localStorage.setItem(LOCAL_STORAGE_READABILITY_KEY, readabilityMode);
}

for (const themeDot of themeDots) {
  themeDot.addEventListener('click', () => {
    const mode = themeDot.dataset.mode;
    setTheme(mode);
  });
}

readabilityBtn.addEventListener('click', setReadability);

const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || DEFAULT_THEME;
const savedReadability = localStorage.getItem(LOCAL_STORAGE_READABILITY_KEY) || STYLIZED_FONT;

setTheme(savedTheme);
setReadability(savedReadability);