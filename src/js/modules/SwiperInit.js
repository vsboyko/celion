import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

export default function InitSliders() {
  let workSchemeSwiper = null;
  let workSchemeNavSwiper = null;
  let reviewsSwiper = null;
  let howWeWorkSwiper = null;

  function initWorkSchemeSlider() {
    const workSchemeSlider = document.querySelector('.js-work-scheme-slider-init');
    const workSchemeNavSlider = document.querySelector('.js-work-scheme-slider-nav-init');

    if (!workSchemeSlider) return;

    if (workSchemeSwiper) {
      workSchemeSwiper.destroy();
      workSchemeSwiper = null;
    }

    workSchemeSwiper = new Swiper(workSchemeSlider, {
      allowTouchMove: true,
    });

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (workSchemeNavSlider) {
      if (isMobile) {
        if (!workSchemeNavSwiper) {
          workSchemeNavSwiper = new Swiper(workSchemeNavSlider, {
            slidesPerView: 1.4,
            spaceBetween: 16,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
          });

          workSchemeSwiper.on('slideChange', () => {
            updateActiveNavSlide(workSchemeSwiper.activeIndex);
          });

          workSchemeNavSlider.querySelectorAll('.swiper-slide').forEach((slide, index) => {
            slide.setAttribute('data-index', index);
            slide.addEventListener('click', () => {
              workSchemeSwiper.slideTo(index);
              updateActiveNavSlide(index);
            });
          });
        }
      } else {
        if (workSchemeNavSwiper) {
          workSchemeNavSwiper.destroy();
          workSchemeNavSwiper = null;
        }

        workSchemeNavSlider.querySelectorAll('.swiper-slide').forEach((slide, index) => {
          slide.setAttribute('data-index', index);
          slide.addEventListener('click', () => {
            workSchemeSwiper.slideTo(index);
            updateActiveNavSlide(index);
          });
        });

        workSchemeSwiper.on('slideChange', () => {
          updateActiveNavSlide(workSchemeSwiper.activeIndex);
        });
      }
    }
  }

  function initReviewsSlider() {
    const reviewsSlider = document.querySelector('.js-reviews-slider-init');

    if (!reviewsSlider) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile && !reviewsSwiper) {
      reviewsSwiper = new Swiper(reviewsSlider, {
        autoHeight: true,
        slidesPerView: 1.2,
        spaceBetween: 16,
        watchSlidesProgress: true
      });
    } else if (!isMobile && reviewsSwiper) {
      reviewsSwiper.destroy();
      reviewsSwiper = null;
    }
  }

  function initHowWeWorkSlider() {
    const howWeWorkSlider = document.querySelector('.js-how-we-work-slider-init');

    if (!howWeWorkSlider) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile && !howWeWorkSwiper) {
      howWeWorkSwiper = new Swiper(howWeWorkSlider, {
        slidesPerView: 1.4,
        spaceBetween: 16,
        watchSlidesProgress: true,
        breakpoints: {
          768: {
            slidesPerView: 1.4,
            spaceBetween: 16,
          },
        },
      });
    } else if (!isMobile && howWeWorkSwiper) {
      howWeWorkSwiper.destroy();
      howWeWorkSwiper = null;
    }
  }

  function updateActiveNavSlide(index) {
    const workSchemeNavSlider = document.querySelector('.js-work-scheme-slider-nav-init');

    if (!workSchemeNavSlider) return;

    const navSlides = workSchemeNavSlider.querySelectorAll('.swiper-slide');
    navSlides.forEach((slide) => {
      const servicesRadio = slide.querySelector('.services-radio');
      if (servicesRadio) {
        servicesRadio.classList.remove('is-active');
      }
    });

    const activeSlide = navSlides[index];
    if (activeSlide) {
      const servicesRadio = activeSlide.querySelector('.services-radio');
      if (servicesRadio) {
        servicesRadio.classList.add('is-active');
      }
    }
  }

  initWorkSchemeSlider();
  initReviewsSlider();
  initHowWeWorkSlider();

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  mediaQuery.addEventListener('change', () => {
    initWorkSchemeSlider();
    initReviewsSlider();
    initHowWeWorkSlider();
  });
}
