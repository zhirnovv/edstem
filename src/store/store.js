export const store = {
  state: {
    navbarOpen: false,
    searchbarOpen: false,
    filtersOpen: false,
    currentFilter: "all"
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
    if (this.state.filtersOpen) {
      this.state.filtersOpen = false;
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
  },
  openFilters() {
    console.log("opening filters");
    if (this.state.searchbarOpen) {
      this.state.searchbarOpen = false;
    }
    this.state.filtersOpen = true;
  },
  closeFilters() {
    console.log("closing filters");
    this.state.filtersOpen = false;
  },
  selectFilter(filter) {
    this.state.currentFilter = filter;
  }
};
