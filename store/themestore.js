export const mutations = {
  setTheme(state, theme) {
    console.log('Setting theme ', theme)
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.theme = theme
  },
  toggleTheme(state) {
    let currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
    console.log(currentTheme);
    if (currentTheme === 'light') {
      this.commit('themestore/setTheme', 'dark')
    } else {
      this.commit('themestore/setTheme', 'light')
    }
  },
  setThemeOnPageVisit(state) {
    // function called whenever a page is visited
    // should find and set theme from localStraoge
    let theme = localStorage.theme
    this.commit('themestore/setTheme', theme)
  }
}