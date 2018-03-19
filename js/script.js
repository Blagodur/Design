$(document).ready(function() {
    var autoplaySlider = $('#autoplay').lightSlider({
        item:1,
        pager:false,
        controls:false,
        speed:300,
        pause:9000,
        auto:true,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
    $('a.next').click(function(e){
        e.preventDefault();
        autoplaySlider.goToNextSlide();

    });
    $('a.prev').click(function(e){
        e.preventDefault();
        autoplaySlider.goToPrevSlide();

    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
    $('a.next').click(function(e){
        e.preventDefault()
    });
    var autoplaySlider2 = $('#autoplay_1').lightSlider({
        item:1,
        pager:false,
        controls:false,
        speed:300,
        pause:9000,
        auto:false,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current_1').text(el.getCurrentSlideCount());
        }
    });
    $('a.next1').click(function(e){
        e.preventDefault();
        autoplaySlider2.goToNextSlide();

    });
    $('a.prev1').click(function(e){
        event.preventDefault();
        autoplaySlider2.goToPrevSlide();

    });
    $('#total_1').text(autoplaySlider.getTotalSlideCount());
    $('a.lSPrev').click(function(e){
        event.preventDefault()
    });
    //$(".scroll_site").niceScroll();

    $('.menu-mobile-btn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.main-menu').slideToggle("slow");
    });

    //$('.scroll_site').niceScroll({
    //    zindex : "10"
    //});
    //$(document).click(function(event) {
    //    if ($(event.target).closest(".mobile_menu").length) return;
    //    $(".main-menu").hide();
    //    event.stopPropagation();
    //});
});