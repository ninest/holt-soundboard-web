export const state = () => ({
  drawerOpen: false,
  menuOpen: false 
})

export const mutations = {
  toggleMenu(state) {
    state.menuOpen = !state.menuOpen
  },
  toggleDrawer(state) {
    state.drawerOpen = !state.drawerOpen
  }
}