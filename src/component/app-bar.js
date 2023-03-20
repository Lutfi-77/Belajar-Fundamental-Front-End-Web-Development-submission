class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <nav>
            <div class="nav-logo">
            <img
                src="https://images.squarespace-cdn.com/content/v1/59f050f4edaed8e2b6dc5a1e/1509044011018-UKR98VFRGVSE8MPHLFXX/FENIX+LOGO+transparent+vit-svart.png?format=1500w"
                alt="logo"
            />
            </div>
            <div class="nav-link">
            <a href="#landing">Home</a>
            <a href="#popular">Popular Movies</a>
            </div>
            <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            </div>
        </nav>
        `;
  }
}

customElements.define("app-bar", AppBar);

export default AppBar;
