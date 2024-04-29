function switchTheme() {
  const getTheme = () => {
    const storedTheme    = localStorage.getItem('theme')
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    
    if (storedTheme) {
      return storedTheme
  
    } else {
      localStorage.setItem('theme', preferredTheme)
    }
    
    return preferredTheme
  }

  const currentTheme = getTheme()

  let newTheme
  switch (currentTheme) {
    case 'light':
      newTheme = 'dark'
      break;
    case 'dark':
      newTheme = 'light'
      break;
    default:
      newTheme = 'light'
      break; 
  }

  document.documentElement.setAttribute('data-bs-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}