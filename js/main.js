$(document).ready(function () {
  const tab = $(".tab");

  tab.on("click", function () {
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
    breakpoints: {
      320: {
        pagination: false,
        slidesPerView: 1,
        spaceBetween: 10,
        // width: 350,
      },
      576: {
        // slidesPerView: 2,
        // spaceBetween: 10,
        // width: 350,
      },
    },
  });
  var storySlider = new Swiper(".story-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".story-content__button--next",
      prevEl: ".story-content__button--prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        // width: 350,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
        // width: 350,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
        // width: 350,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
        width: 700,
      },
      1140: {
        slidesPerView: 2,
        spaceBetween: 0,
        width: 670,
      },
    },
  });
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "Please enter your email",
          email: "Your email address format of name@domain.com",
        },
      },
    });
  });
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-menu__item").toggleClass("navbar-menu__item--mobile");
    $(".navbar-menu").toggleClass("navbar-menu--visible");
    $("body").toggleClass("lock");
  });
});
