$(document).ready(function() {

    //$('.kw3-nav').fadeIn();

    /*   var show = $('#showStuff').offset().top;

       $(document).scroll(function(){
           if ($(window).scrollTop() > show){
               $('.kw3-nav').fadeIn();
           }
       })

       $('#contact-button').on('click', function() {
           $('#contact-modal').dialog({
               resizable: false,
               width: 'auto',
               title: 'Talk to me!'
           });
       });

       $('#PP-btn').on('click', function() {
           $('#PP-modal').dialog({
               modal: true,
               draggable: false,
               width: 1000,
               height: 'auto',
               title: 'Privacy Policy',
               open: function() {
                   $('.ui-front').bind('click', function() {
                       $('#PP-modal').dialog('destroy');
                   });
               }
           });
       }); 

       $('#search-btn').on('click', function() {
           $('.kw3-search-bar').toggle('slide', { direction: 'right' }, 500);
       });

       $('#checkitBtn, .kw3-feature-image').on('click', function() {
           $('.kw3-post-container').slideDown(700);
           if ($('.kw3-post-container').is(':hidden')) {
               $('.kw3-post-container').slideDown(700);
           } else {
               $('html, body').animate({
                   scrollTop: $("#post").offset().top-90
               }, 1500);
           }
       });

       slider();

       $(window).scroll(function() {
           slider();
       });

       function slider() {
           if ($(window).height() >= 768) {
               if (document.body.scrollTop > 600)
                   $('.instagram-container').slideDown('slow');
               else
                   $('.instagram-container').slideUp('slow');
           } else {
               $('.instagram-container').show();
           }
       } */

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

    if ($('#ucaasImg').css('height') === '270px'){
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

    function doneResizing() {
        //if ($(this).width() != width){

        //}

        if ($('.location-bubble').css('height') === '200px' || $('.location-bubble').css('height') === '225px' || $('.location-bubble').css('height') === '125px' || $('.location-bubble').css('height') === '100px') {
          $('#ucaasImg').prependTo('#ucaas');
        } else {
          $('#ucaasImg').appendTo('#ucaas');
        }
    }

});