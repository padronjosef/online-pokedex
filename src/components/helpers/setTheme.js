export function getTheme() {
  return localStorage.getItem('color-theme');
};

export function setTheme(theme) {
  localStorage.setItem('color-theme', theme);
  document.documentElement.setAttribute('data-color-theme', theme)
};

export function toogleTheme() {
  const newTheme = getTheme() === 'dark' ? 'light' : 'dark'

  setTheme(newTheme)

  // fade in animation
  const theme = document.getElementById("theme");

  theme.classList.remove("theme--animation");
  setTimeout(() => theme.classList.add("theme--animation"), 300);
};

(function () {
  // the default preferred theme in the browser
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // choose the theme between the chosen one, preferred one or the default dark
  setTheme(getTheme() || preferredTheme || 'dark');
})()