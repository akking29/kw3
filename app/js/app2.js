$(document).ready(function() {

    $("#kw3-title").click(function() {
        document.location.href = "#home";
    });

    $('.drawer-link').on('click',function(){
        console.log('click');
        $('#drawer').addClass('active');
        $('.kw3-nav-banner').addClass('open');
        $('.kw3-nav').addClass('open');
    })

    $('.close').on('click',function(){
        console.log('click');
        $('#drawer').removeClass('active');
        $('.kw3-nav-banner').removeClass('open');
        $('.kw3-nav').removeClass('open');
    })


    $("#recordsButton").click(function() {
        document.location.href = "#leagueRecords";
    });
    
    $("#vsButton").click(function() {
        document.location.href = "#featuredGame";
    });

    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 50) {
                $('.kw3-nav').addClass('scrolled');
            } else {
                $('.kw3-nav').removeClass('scrolled');
            }

        });
    });

    if ($('.location-bubble').css('height') === '225px' || $('.location-bubble').css('height') === '200px' || $('.location-bubble').css('height') === '125px' || $('.location-bubble').css('height') === '100px') {
      $('#ucaasImg').prependTo('#ucaas');
    } else {
      $('#ucaasImg').appendTo('#ucaas');
    }

    if ($('.mobile-icon').css('display') === 'block'){
      console.log('height');
      $('#drawer').prependTo('body');
    } else {
    }

    var width = $(window).width();

    var resizeId;

    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 10);
    });

    if ($('.kw3-landing-logo.text').css('width') === '300px') {
        $('.kw3-landing-logo.tri').addClass('stop');
        $('.kw3-landing-logo.text').addClass('active');
        setTimeout(function() {
            $('.kw3-landing-subtitle').fadeIn('slow');
            $('#landingSub').fadeIn('slow');
        }, 3000);
    } else {
        setTimeout(function() {
            $('.kw3-landing-logo.tri').addClass('stop');
            $('.kw3-landing-logo.text').addClass('active');
            $('.kw3-landing-subtitle').fadeIn('slow');
            $('#landingSub').fadeIn('slow');
        }, 00);
    }

    function doneResizing() {

        if ($('.location-bubble').css('height') === '200px' || $('.location-bubble').css('height') === '225px' || $('.location-bubble').css('height') === '125px' || $('.location-bubble').css('height') === '100px') {
          $('#ucaasImg').prependTo('#ucaas');
        } else {
          $('#ucaasImg').appendTo('#ucaas');
        }
    }

});