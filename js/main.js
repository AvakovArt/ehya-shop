$(document).ready(function () {
  const tab = $(".tab");

  tab.on(".click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".trend__content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });
  var testimonialsSlider = new Swiper(".section-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    autoHover: true,
    autoplay: {
      delay: 7000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });
        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
  });
  var storySlider = new Swiper(".story__slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".story__slider-button--next",
      prevEl: ".story__slider-button--prev",
    },
  });
});
