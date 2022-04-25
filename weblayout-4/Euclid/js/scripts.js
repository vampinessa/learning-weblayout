const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });


document.querySelectorAll('.stages-tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.stages-tabs__btn').forEach(function(btn) {
        btn.classList.remove('stages-tabs__btn--active')});
        e.currentTarget.classList.add('stages-tabs__btn--active');

    document.querySelectorAll('.stages__tab-item').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('stages__tab-item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('stages__tab-item--active');
    }); });
