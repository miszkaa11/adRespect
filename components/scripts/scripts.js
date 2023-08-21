
  $( document ).ready(function() {

    // Show Search
        $('#btn-search').on('click', function(e){
          $('#search').toggleClass("show-search");
          e.preventDefault();
      });

      // Offset
        jQuery(".nav-link").click(function () {
          jQuery('.navbar-nav').removeClass('toggled');
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = jQuery(this.hash);
              target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  jQuery('html,body').animate({
                      scrollTop: target.offset().top - 150
                  }, 0);
                  return false;
              }
          }
      });

    // AOS

    AOS.init();

    let $this = $('.grid');
    if ($this.find('div').length > 2) {
        $('.grid').append('<div class="realizations-cta"><a href="javascript:;" class="showMore btn click-more-btn">ROZWIŃ</a></div>');
    }
    
    $('.grid .grid-item').slice(0,9).addClass('shown');
    $('.grid .grid-item').not('.shown').hide();
    $('.grid .showMore').on('click',function(){
      $('.grid .grid-item').not('.shown').toggle(2000);
      $(this).toggleClass('showLess');
    });

  });


