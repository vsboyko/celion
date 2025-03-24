class StickyHeader {
  constructor(headerSelector, stickyClass) {
    this.header = document.querySelector(headerSelector);
    this.stickyClass = stickyClass;

    if (this.header) {
      this.createObserverElement();
      this.initObserver();
      this.checkInitialState();
    }
  }

  createObserverElement() {
    this.observerElement = document.createElement("div");
    this.observerElement.style.position = "absolute";
    this.observerElement.style.top = "calc(var(--header-gap, 78px) - 1px)";
    this.observerElement.style.left = "0";
    this.observerElement.style.width = "1px";
    this.observerElement.style.height = "1px";
    this.observerElement.style.visibility = "hidden";

    this.header.parentNode.insertBefore(this.observerElement, this.header);
  }

  initObserver() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio === 0) {
        this.header.classList.add(this.stickyClass);
      } else if (entries[0].intersectionRatio === 1) {
        this.header.classList.remove(this.stickyClass);
      }
    }, { threshold: [1] });

    this.observer.observe(this.observerElement);
  }

  checkInitialState() {
    const headerGap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-gap")) || 78;
    if (window.scrollY <= headerGap) {
      this.header.classList.add(this.stickyClass);
    }
  }
}

export default StickyHeader;