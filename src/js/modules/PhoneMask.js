import IMask from 'imask';

export default class PhoneMask {
  constructor(selector) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    this.masks = [];

    elements.forEach(element => {
      const maskOptions = {
        mask: '+{7} (000) 000 00 00',
        lazy: true,
      };

      const maskInstance = IMask(element, maskOptions);
      this.masks.push(maskInstance);

      element.addEventListener('focus', () => {
        maskInstance.updateOptions({ lazy: false });
      });

      element.addEventListener('blur', () => {
        maskInstance.updateOptions({ lazy: true });
      });
    });
  }
}