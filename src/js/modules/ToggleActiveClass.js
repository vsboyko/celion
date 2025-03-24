export class ToggleActiveClass {
  constructor(selector, activeClass) {
    this.buttons = document.querySelectorAll(selector);
    this.activeClass = activeClass;
    this.init();
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => this.handleClick(button));
    });
  }

  handleClick(clickedButton) {
    this.buttons.forEach(button => {
      if (button === clickedButton) {
        button.classList.toggle(this.activeClass);
      } else {
        button.classList.remove(this.activeClass);
      }
    });
  }
}