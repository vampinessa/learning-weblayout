const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });


document.querySelectorAll('.stages-tabs__btn').forEach(tabsBtn =>
    tabsBtn.addEventListener('click', (e) => {
            const path = e.currentTarget.dataset.path;

            document.querySelectorAll('.stages-tabs__btn').forEach((btn) => {
                btn.classList.remove('stages-tabs__btn--active');
            });
            e.currentTarget.classList.add('stages-tabs__btn--active');

            document.querySelectorAll('.stages__tab-item').forEach((tabsBtn) => {
                tabsBtn.classList.remove('stages__tab-item--active');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('stages__tab-item--active');
        })
);


$(".faq-accordion").accordion ({
    heightStyle: "content",
    collapsible: true,
    active: false
});


$(".faq-accordion__border").hover(
    function(){ $(this).addClass("faq-accordion__border--active"); },
    function(){ $(this).removeClass("faq-accordion__border--active"); }
);

