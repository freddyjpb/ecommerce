export function darkMode () {
  const themeButton = document.getElementById('theme-button')
  const darkMode = 'dark-theme'
  const iconTheme = 'bx-sun'

  const selectedTheme = window.localStorage.getItem('selected-theme')
  const selectedIcon = window.localStorage.getItem('selected-icon')

  const getCurrentTheme = () => document.body.classList.contains(darkMode) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkMode)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
  }

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkMode)
    themeButton.classList.toggle(iconTheme)
    window.localStorage.setItem('selected-theme', getCurrentTheme())
    window.localStorage.setItem('selected-icon', getCurrentIcon())
  })
}
