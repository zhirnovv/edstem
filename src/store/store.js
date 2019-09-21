export const store = {
  state: {
    navbarOpen: false,
    searchbarOpen: false
  },
  openNavbar() {
    this.state.navbarOpen = true;
  },
  closeNavbar() {
    this.state.navbarOpen = false;
  },
  openSearchbar() {
    if (this.state.navbarOpen) {
      this.state.navbarOpen = false;
    }
    this.state.searchbarOpen = true;
  },
  closeSearchbar() {
    if (this.state.navbarOpen) {
      this.state.navbarOpen = false;
      this.state.searchbarOpen = true;
      return;
    }
    this.state.searchbarOpen = false;
  }
};
