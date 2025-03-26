export default class PdfViewer {
  constructor(triggerSelector, iframeSelector) {
    this.trigger = document.querySelector(triggerSelector);
    this.iframe = document.querySelector(iframeSelector);

    if (!this.trigger || !this.iframe) return;

    this.init();
  }

  init() {
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.openPdf(this.trigger.href);
    });

    document.addEventListener('fullscreenchange', this.onFullscreenChange.bind(this));
  }

  openPdf(pdfUrl) {
    this.iframe.src = pdfUrl;
    this.iframe.style.display = 'block';

    if (this.iframe.requestFullscreen) {
      this.iframe.requestFullscreen();
    } else if (this.iframe.mozRequestFullScreen) {
      this.iframe.mozRequestFullScreen();
    } else if (this.iframe.webkitRequestFullscreen) {
      this.iframe.webkitRequestFullscreen();
    } else if (this.iframe.msRequestFullscreen) {
      this.iframe.msRequestFullscreen();
    }
  }

  onFullscreenChange() {
    if (!document.fullscreenElement) {
      this.iframe.style.display = 'none';
      this.iframe.src = '';
    }
  }
}