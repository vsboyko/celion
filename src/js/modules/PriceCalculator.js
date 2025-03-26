export default class PriceCalculator {
  constructor(formSelector, discountPercentage = 20) {
    this.form = document.querySelector(formSelector);
    if (!this.form) return;

    this.radioButtons = this.form.querySelectorAll('.js-calculation-radio');
    this.oldPriceElement = this.form.querySelector('.js-calculation-amount-oldprice');
    this.discountedPriceElement = this.form.querySelector('.js-calculation-amount-price');
    this.discountPercentage = discountPercentage;

    this.init();
  }

  init() {
    this.updatePrice();
    this.radioButtons.forEach(radio => {
      radio.addEventListener('change', () => this.updatePrice());
    });
  }

  updatePrice() {
    let totalPrice = 0;

    const selectedRadios = this.form.querySelectorAll('.js-calculation-radio:checked');
    selectedRadios.forEach(radio => {
      totalPrice += parseInt(radio.dataset.price, 10) || 0;
    });

    const discountedPrice = totalPrice - (totalPrice * this.discountPercentage / 100);

    this.oldPriceElement.textContent = this.formatPrice(totalPrice);
    this.discountedPriceElement.textContent = this.formatPrice(discountedPrice);
  }

  formatPrice(price) {
    return price.toLocaleString('ru-RU');
  }
}