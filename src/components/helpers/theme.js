export function getTheme() {
  return localStorage.getItem('color-theme')
}

export function setTheme(newTheme) {
  localStorage.setItem('color-theme', newTheme)
  document.documentElement.setAttribute('data-color-theme', newTheme)
}

export function fadeInAnimation() {
  const theme = document.getElementById('theme')

  theme.classList.remove('theme--animation')
  setTimeout(() => theme.classList.add('theme--animation'), 300)
}

export function toogleTheme() {
  const newTheme = getTheme() === 'dark' ? 'light' : 'dark'

  setTheme(newTheme)
  fadeInAnimation()
}

(function () {
  // default preferred browser theme
  const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches && 'light'

  // Set the theme between the chosen one, preferred browser one or "dark" by default
  setTheme(getTheme() || preferredTheme || 'dark')
})()