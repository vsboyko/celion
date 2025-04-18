/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import { SetVH } from './modules/SetVH.js';
import BaseHelpers from './helpers/BaseHelpers.js';
import initWOW from './modules/WOW.js';
import { WowCounter } from './modules/wowCounter';
import StickyHeader from './modules/StickyHeader.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import { SmoothScroll } from './modules/SmoothScroll.js';
import { ToggleActiveClass } from './modules/toggleActiveClass.js';
import PopupManager from './modules/PopupManager.js';
import PhoneMask from './modules/PhoneMask.js';
import PriceCalculator from './modules/PriceCalculator.js';
import InitSliders from './modules/SwiperInit.js';
import PdfViewer from './modules/PdfViewer.js';
import FaqCard from './modules/FaqCard.js';
import FileUploader from './modules/FileUploader.js';
import { InputSelect } from './modules/InputSelect.js';

// set vh
SetVH();

// check webp/loaded page/device type
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // wow animation
  initWOW(190);
  WowCounter();
  // header sticky
  new StickyHeader('.js-header-sticky', 'is-sticky');
  // nav active anchor
  const smoothScroll = new SmoothScroll('.js-anchor', '--scroll-offset', 650);
  // nav toggle
  new ToggleActiveClass('.js-nav-submenu-toggle', 'is-active');
  // header nav mobile toggle
  new HeaderBtnToggle();
  // modal init
  new PopupManager();
  // mask phone
  new PhoneMask('.js-phone-mask');
  // price calculator
  new PriceCalculator('.js-calculation-form', 20);
  // slider init
  InitSliders();
  // pdf full screen
  new PdfViewer('.js-open-pdf', '#pdfViewer');
  // faq card
  new FaqCard();
  // FileUploader
  new FileUploader('.js-file-upload');

  InputSelect();
});