export default class FileUploader {
  constructor(selector) {
    this.container = document.querySelector(selector);
    if (!this.container) return;

    this.fileInput = this.container.querySelector('.js-file-upload-input');
    this.fileList = this.container.querySelector('.js-file-upload-list');

    this.init();
  }

  init() {
    if (!this.fileInput || !this.fileList) return;
    
    this.fileInput.addEventListener('change', (event) => this.handleFiles(event));
    this.fileList.addEventListener('click', (event) => this.handleRemove(event));
  }

  handleFiles(event) {
    const files = Array.from(event.target.files);
    files.forEach(file => this.addFile(file));
    this.fileInput.value = '';
  }

  addFile(file) {
    const fileCard = document.createElement('span');
    fileCard.classList.add('file-attach', 'file-upload__list-card');
    fileCard.innerHTML = `
      <span class="file-attach__icon">
        <svg class="u-icon"><use xlink:href="images/icons/icons.svg#file-attach"></use></svg>
      </span>
      <span class="file-attach__name">${file.name}</span>
      <button type="button" class="js-file-attach-btn-remove file-attach__btn-remove">
        <svg class="u-icon"><use xlink:href="images/icons/icons.svg#close"></use></svg>
      </button>
    `;
    this.fileList.appendChild(fileCard);
  }

  handleRemove(event) {
    if (event.target.closest('.js-file-attach-btn-remove')) {
      const fileCard = event.target.closest('.file-attach');
      fileCard.remove();
    }
  }
}