const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(".stages-tabs__btn").on("click", e => {
  $('.stages-tabs__btn').removeClass('stages-tabs__btn--active');
  $(e.target).addClass('stages-tabs__btn--active');
  $('.stages__tab-item').removeClass('stages__tab-item--active');
  $(`[data-target="${e.target.dataset.path}"]`).addClass('stages__tab-item--active');
});

$(".faq-accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false
});

$(".faq-accordion__border").hover(function () {
  $(this).toggleClass("faq-accordion__border--active");
});

$(".search-form__btn--open").click(function () {
  $(this).removeClass("search-form__btn--open-ico");
  $(".search-form").addClass("search-form--active");
  $(".search-form__input").focus();
});

$(".search-form__btn--close").click(function () {
  $(".search-form__btn--open").addClass("search-form__btn--open-ico");
  $(".search-form").removeClass("search-form--active");
});

$(".search-ico--open").click(function () {
  $(this).removeClass("search-ico--open");
  $(".search-form").addClass("search-form--active");
  $(".search-form__input").focus();
});

$(".search-form__btn-close").click(function () {
  $(".search-ico").addClass("search-ico--open");
  $(".search-form").removeClass("search-form--active");
});
