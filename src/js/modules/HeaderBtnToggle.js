class HeaderBtnToggle {
  constructor() {
    this.toggleButtons = document.querySelectorAll('.js-nav-toggle');
    this.body = document.body;
    this.dropdown = document.querySelector('.header__dropdown');

    if (this.toggleButtons.length) {
      this.toggleButtons.forEach((button) => {
        button.addEventListener('click', () => this.toggleMenu());
      });
    }

    document.addEventListener('click', (event) => this.handleOutsideClick(event));
  }

  toggleMenu() {
    if (this.body.classList.contains('is-menu-opened')) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    this.body.style.paddingRight = `${scrollbarWidth}px`;
    this.body.classList.add('is-menu-opened');
  }

  closeMenu() {
    this.body.classList.remove('is-menu-opened');
    this.body.style.paddingRight = '';
  }

  handleOutsideClick(event) {
    if (this.body.classList.contains('is-menu-opened') &&
        this.dropdown && !this.dropdown.contains(event.target) &&
        !event.target.closest('.js-nav-toggle')) {
      this.closeMenu();
    }
  }
}

export default HeaderBtnToggle;