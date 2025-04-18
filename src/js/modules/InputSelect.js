export function InputSelect() {
  const selects = document.querySelectorAll('.js-input-select');
  if (!selects.length) return;

  const closeAll = () => {
    selects.forEach(select => select.classList.remove('is-show'));
  };

  document.addEventListener('click', (e) => {
    if (![...selects].some(select => select.contains(e.target))) {
      closeAll();
    }
  });

  selects.forEach(select => {
    const toggleBtn = select.querySelector('.js-input-select-btn-toggle');
    const dropdownBtns = select.querySelectorAll('.js-input-select-btn-choose');
    const inputs = select.querySelectorAll('.js-input-select-el');

    const setToggleIcon = (sourceBtn) => {
      const svg = sourceBtn.querySelector('svg');
      if (!svg) return;
      const clone = svg.cloneNode(true);
      toggleBtn.innerHTML = '';
      toggleBtn.appendChild(clone);
    };

    const updateInputs = (activeIndex) => {
      inputs.forEach((input, i) => {
        input.classList.toggle('is-active', i === activeIndex);
        if (i === activeIndex) {
          input.setAttribute('required', '');
        } else {
          input.removeAttribute('required');
        }
      });
    };

    const activeBtn = select.querySelector('.js-input-select-btn-choose.is-active');
    if (activeBtn) {
      const index = Array.from(dropdownBtns).indexOf(activeBtn);
      setToggleIcon(activeBtn);
      updateInputs(index);
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = select.classList.contains('is-show');
      closeAll();
      if (!isOpen) {
        select.classList.add('is-show');
      }
    });

    dropdownBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        dropdownBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        updateInputs(index);
        setToggleIcon(btn);
        select.classList.remove('is-show');
      });
    });
  });
}