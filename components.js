
class Nav extends HTMLElement {
  constructor() {
    super();
  }

	connectedCallback() {
		this.innerHTML = `
			<nav id="nav">
				<ul class="links">
					<li><a href="index.html">Home</a></li>
					<li><a href="portfolio.html">Illustration Portfolio</a>
					<li><a href="about.html">About</a></li>
				</ul>
			</nav>
		`;
	}
}

class MoreInStore extends HTMLElement {
  constructor() {
    super();
  }

	connectedCallback() {
		this.innerHTML = `
			<section id="three" class="wrapper style3 special">
				<div class="inner">
					<header class="major narrow	">
						<h2>There's more in store!</h2>
						<p>Browse books, zines, art prints, t-shirts and more!</p>
					</header>
					<ul class="actions">
						<li><a href="https://shop.sheriroloff.com/" class="button big alt" target="_blank" rel="noopener noreferrer">Shop Now</a></li>
					</ul>
				</div>
			</section>
		`;
	}
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

	connectedCallback() {
		this.innerHTML = `
			<footer id="footer">
				<div class="inner">
					<ul class="icons">
						<li><a href="https://www.facebook.com/SheriRoloff/" class="icon fa-facebook" target="_blank" rel="noopener noreferrer">
							<span class="label">Facebook</span>
						</a></li>
						<li><a href="https://twitter.com/SheriRoloff" class="icon fa-twitter" target="_blank" rel="noopener noreferrer">
							<span class="label">Twitter</span>
						</a></li>
						<li><a href="https://www.instagram.com/sheriroloff/" class="icon fa-instagram" target="_blank" rel="noopener noreferrer">
							<span class="label">Instagram</span>
						</a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; 2021 Sheri Roloff</li>
					</ul>
				</div>
			</footer>
		`;
	}
}

customElements.define('nav-component', Nav);
customElements.define('more_in_store-component', MoreInStore);
customElements.define('footer-component', Footer);
