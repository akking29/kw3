function showIntro() {
    $('.JG2-landing-logo.jg.disabled').removeClass('disabled');
    $('#homeTitle').removeClass('top-shift');
    $('#home .JG2-text').each(function(i) {
        if ($(this).css('opacity') === '0') {
            //alert('yess');
            $(this).addClass('show');
        } else {
            $(this).delay(400 * i).fadeIn(1000);
        }

    })
    $('#home .fade').each(function(i) {
        $(this).delay(600 * i).fadeIn(1000);
    })
    setTimeout(function() {
        $('#oneLine').removeClass('bottom-shift');
    }, 2000)
}

function showSoftware() {
    $('.JG2-landing-feature.software').show();
    $('.JG2-landing-logo.soft.disabled').removeClass('disabled');
    $('.JG2-landing-subtitle.softFade.fade').fadeIn('slow');
    $('#softTitle').removeClass('top-shift');
    setTimeout(function() {
        $('#softLine').removeClass('bottom-shift');
        $('.JG2-landing-logo.ai').removeClass('logo-shift');
    }, 2000)
    setTimeout(function() {
        $('.JG2-landing-logo.plus.one').removeClass('plus-shift');
    }, 2100)
    setTimeout(function() {
        $('.JG2-landing-logo.dr').removeClass('logo-shift');
        $('.JG2-landing-logo.plus.two').removeClass('plus-shift');
    }, 2200)
    setTimeout(function() {
        $('.JG2-landing-logo.ps').removeClass('logo-shift');
        $('.JG2-landing-logo.plus.three').removeClass('plus-shift');
    }, 2400)
    setTimeout(function() {
        $('.JG2-landing-logo.id').removeClass('logo-shift');
        $('.JG2-landing-logo.plus.four').removeClass('plus-shift');
    }, 2600)
    setTimeout(function() {
        $('.JG2-landing-logo.lr').removeClass('logo-shift');
    }, 2800)
}

function showPub() {
    $('.JG2-landing-logo.pg.disabled').removeClass('disabled');
    $('.JG2-landing-subtitle.publications.fade').fadeIn('slow');
    $('#pubTitle').removeClass('top-shift');
    $('#pub .JG2-text').each(function(i) {
        if ($(this).css('opacity') === '0') {
            //alert('yess');
            $(this).addClass('show');
        } else {
            $(this).delay(300 * i).fadeIn(1000);
        }

    })
    setTimeout(function() {
        $('#pubLine').removeClass('bottom-shift');
    }, 2000)
}

function showSkills() {
    $('.JG2-landing-logo.sk.disabled').removeClass('disabled');
    $('#skillsTitle').removeClass('top-shift');
    $('#skills .JG2-text').each(function(i) {
        if ($(this).css('opacity') === '0') {
            //alert('yess');
            $(this).addClass('show');
        } else {
            $(this).delay(400 * i).fadeIn(1000);
        }

    })
    $('#skills .fade').each(function(i) {
        $(this).delay(300 * i).fadeIn(1000);
    });
    setTimeout(function() {
        $('#skillsLine').removeClass('bottom-shift');
    }, 2000)
}


function showLife() {
    $('.JG2-landing-logo.li.disabled').removeClass('disabled');
    $('#lifeTitle').removeClass('top-shift');
    $('#life .JG2-text').each(function(i) {
        if ($(this).css('opacity') === '0') {
            //alert('yess');
            $(this).addClass('show');
        } else {
            $(this).delay(400 * i).fadeIn(1000);
        }

    });
    $('#life .fade').each(function(i) {
        $(this).delay(300 * i).fadeIn(1000);
    })
    setTimeout(function() {
        $('#lifeLine').removeClass('bottom-shift');
    }, 2000)
}


function showContact() {
    $('.JG2-landing-logo.co.disabled').removeClass('disabled');
    $('#contactTitle').removeClass('top-shift');
    $('#contact .JG2-text').each(function(i) {
        if ($(this).css('opacity') === '0') {
            //alert('yess');
            $(this).addClass('show');
        } else {
            $(this).delay(400 * i).fadeIn(1000);
        }

    })
    $('#contact .fade').each(function(i) {
        $(this).delay(300 * i).fadeIn(1000);
    })
    setTimeout(function() {
        $('#contactLine').removeClass('bottom-shift');
    }, 2000)
}

function showScrollerSite() {
    $('.JG2-landing-logo.site.disabled').removeClass('disabled');
    $('.JG2-landing-subtitle.siteFade.fade').fadeIn('slow');
    $('#siteTitle').removeClass('top-shift');
    setTimeout(function() {
        $('#siteLine').removeClass('bottom-shift');
    }, 2000)
}

function showScrollerBrand() {
    $('.JG2-landing-logo.br.disabled').removeClass('disabled');
    $('.JG2-landing-subtitle.brandFade.fade').fadeIn('slow');
    $('#brandingTitle').removeClass('top-shift');
    setTimeout(function() {
        $('#brandingLine').removeClass('bottom-shift');
    }, 2000)
}

function showScrollerArt() {
    $('.JG2-landing-logo.ar.disabled').removeClass('disabled');
    $('.JG2-landing-subtitle.artFade.fade').fadeIn('slow');
    $('#artTitle').removeClass('top-shift');
    setTimeout(function() {
        $('#artLine').removeClass('bottom-shift');
    }, 2000)
}

function showScrollerPhoto() {
    $('.JG2-landing-logo.ph.disabled').removeClass('disabled');
    $('.JG2-landing-subtitle.photoFade.fade').fadeIn('slow');
    $('#photoTitle').removeClass('top-shift');
    setTimeout(function() {
        $('#photoLine').removeClass('bottom-shift');
    }, 2000)
}

function showSocial() {
    $('.JG2-landing-subtitle.social.fade').fadeIn('slow');
}

$(document).ready(function() {

    $('.JG2-spinner').hide();
    $('#siteScroller').unitegallery({
        gallery_theme: 'slider',
        gallery_width: 1480,
        gallery_height: 800,
        tile_enable_border: false,
        tile_enable_outline: false,
        gallery_autoplay: false,
        gallery_images_preload_type: "minimal",
        theme_enable_navigation: false,
        theme_navigation_type: "bullets",
        theme_navigation_position: "bottom", //top,bottom: the vertical position of the navigation reative to the carousel
        theme_navigation_enable_play: true, //enable / disable the play button of the navigation
        theme_navigation_align: "center", //the align of the navigation
        theme_navigation_offset_hor: 0, //horizontal offset of the navigation
        theme_navigation_margin: 20, //the space between the carousel and the navigation
        theme_space_between_arrows: 5,
        gallery_background_color: "transparent",
        gallery_min_width: 315,                     //gallery minimal width when resizing
        gallery_min_height: 275,
        slider_enable_text_panel: true,
        slider_textpanel_bg_opacity: 0,
        slider_enable_fullscreen_button: false, //true,false - enable fullscreen button onslider element
        slider_fullscreen_button_skin: "", //skin of the slider fullscreen button, if empty inherit from gallery skin
        slider_fullscreen_button_align_hor: "left", //left, center, right  - fullscreen button horizonatal align
        slider_fullscreen_button_align_vert: "top", //top, middle, bottom - fullscreen button vertical align
        slider_fullscreen_button_offset_hor: 11, //fullscreen button horizontal offset 
        slider_fullscreen_button_offset_vert: 9,
        slider_scale_mode: "fit", //fit: scale down and up the image to always fit the slider
        //down: scale down only, smaller images will be shown, don't enlarge images (scale up)
        //fill: fill the entire slider space by scaling, cropping and centering the image
        slider_scale_mode_media: "fill", //fit, down, full scale mode on media items
        slider_scale_mode_fullscreen: "down", //fit, down, full scale mode on fullscreen.
        slider_item_padding_top: 0, //padding top of the slider item
        slider_item_padding_bottom: 70, //padding bottom of the slider item
        slider_item_padding_left: 0, //padding left of the slider item
        slider_item_padding_right: 0,
        slider_control_zoom:false
    });
    $('#photoScroller').unitegallery({
        gallery_theme: 'slider',
        gallery_width: 1280,
        gallery_height: 700,
        gallery_min_width: 315,                     //gallery minimal width when resizing
        gallery_min_height: 250,
        tile_enable_border: false,
        tile_enable_outline: false,
        gallery_autoplay: false,
        gallery_images_preload_type: "minimal",
        theme_enable_navigation: false,
        theme_navigation_type: "bullets",
        theme_navigation_position: "bottom", //top,bottom: the vertical position of the navigation reative to the carousel
        theme_navigation_enable_play: true, //enable / disable the play button of the navigation
        theme_navigation_align: "center", //the align of the navigation
        theme_navigation_offset_hor: 0, //horizontal offset of the navigation
        theme_navigation_margin: 20, //the space between the carousel and the navigation
        theme_space_between_arrows: 5,
        gallery_background_color: "transparent",
        slider_enable_fullscreen_button: false, //true,false - enable fullscreen button onslider element
        slider_fullscreen_button_skin: "", //skin of the slider fullscreen button, if empty inherit from gallery skin
        slider_fullscreen_button_align_hor: "left", //left, center, right  - fullscreen button horizonatal align
        slider_fullscreen_button_align_vert: "top", //top, middle, bottom - fullscreen button vertical align
        slider_fullscreen_button_offset_hor: 11, //fullscreen button horizontal offset 
        slider_fullscreen_button_offset_vert: 9,
        slider_scale_mode: "fit", //fit: scale down and up the image to always fit the slider
        //down: scale down only, smaller images will be shown, don't enlarge images (scale up)
        //fill: fill the entire slider space by scaling, cropping and centering the image
        slider_scale_mode_media: "fill", //fit, down, full scale mode on media items
        slider_scale_mode_fullscreen: "down", //fit, down, full scale mode on fullscreen.
        slider_item_padding_top: 0, //padding top of the slider item
        slider_item_padding_bottom: 70, //padding bottom of the slider item
        slider_item_padding_left: 0, //padding left of the slider item
        slider_item_padding_right: 0,
        slider_control_zoom:false
    });
    $('#brandingScroller').unitegallery({
        gallery_theme: 'slider',
        gallery_width: 1480,
        gallery_height: 700,
        gallery_min_width: 315,                     //gallery minimal width when resizing
        gallery_min_height:325,
        tile_enable_border: false,
        tile_enable_outline: false,
        gallery_autoplay: false,
        gallery_images_preload_type: "minimal",
        slider_enable_text_panel: true,
        slider_textpanel_bg_opacity: 0,
        theme_enable_navigation: false,
        theme_navigation_type: "bullets",
        theme_navigation_position: "bottom", //top,bottom: the vertical position of the navigation reative to the carousel
        theme_navigation_enable_play: true, //enable / disable the play button of the navigation
        theme_navigation_align: "center", //the align of the navigation
        theme_navigation_offset_hor: 0, //horizontal offset of the navigation
        theme_navigation_margin: 20, //the space between the carousel and the navigation
        theme_space_between_arrows: 5,
        gallery_background_color: "transparent",
        slider_enable_fullscreen_button: false, //true,false - enable fullscreen button onslider element
        slider_fullscreen_button_skin: "", //skin of the slider fullscreen button, if empty inherit from gallery skin
        slider_fullscreen_button_align_hor: "left", //left, center, right  - fullscreen button horizonatal align
        slider_fullscreen_button_align_vert: "top", //top, middle, bottom - fullscreen button vertical align
        slider_fullscreen_button_offset_hor: 11, //fullscreen button horizontal offset 
        slider_fullscreen_button_offset_vert: 9,
        slider_scale_mode: "fit", //fit: scale down and up the image to always fit the slider
        //down: scale down only, smaller images will be shown, don't enlarge images (scale up)
        //fill: fill the entire slider space by scaling, cropping and centering the image
        slider_scale_mode_media: "fill", //fit, down, full scale mode on media items
        slider_scale_mode_fullscreen: "down", //fit, down, full scale mode on fullscreen.
        slider_item_padding_top: 0, //padding top of the slider item
        slider_item_padding_bottom: 70, //padding bottom of the slider item
        slider_item_padding_left: 0, //padding left of the slider item
        slider_item_padding_right: 0,
        slider_control_zoom:false
    });
    $('#artScroller').unitegallery({
        gallery_theme: 'slider',
        gallery_width: 1280,
        gallery_height: 700,
        gallery_min_width: 315,                     //gallery minimal width when resizing
        gallery_min_height: 250,
        tile_enable_border: false,
        tile_enable_outline: false,
        gallery_autoplay: false,
        gallery_images_preload_type: "minimal",
        theme_enable_navigation: false,
        theme_navigation_type: "bullets",
        theme_navigation_position: "bottom", //top,bottom: the vertical position of the navigation reative to the carousel
        theme_navigation_enable_play: true, //enable / disable the play button of the navigation
        theme_navigation_align: "center", //the align of the navigation
        theme_navigation_offset_hor: 0, //horizontal offset of the navigation
        theme_navigation_margin: 20, //the space between the carousel and the navigation
        theme_space_between_arrows: 5,
        gallery_background_color: "transparent",
        slider_enable_fullscreen_button: false, //true,false - enable fullscreen button onslider element
        slider_fullscreen_button_skin: "", //skin of the slider fullscreen button, if empty inherit from gallery skin
        slider_fullscreen_button_align_hor: "left", //left, center, right  - fullscreen button horizonatal align
        slider_fullscreen_button_align_vert: "top", //top, middle, bottom - fullscreen button vertical align
        slider_fullscreen_button_offset_hor: 11, //fullscreen button horizontal offset 
        slider_fullscreen_button_offset_vert: 9,
        slider_scale_mode: "fit", //fit: scale down and up the image to always fit the slider
        //down: scale down only, smaller images will be shown, don't enlarge images (scale up)
        //fill: fill the entire slider space by scaling, cropping and centering the image
        slider_scale_mode_media: "fill", //fit, down, full scale mode on media items
        slider_scale_mode_fullscreen: "down", //fit, down, full scale mode on fullscreen.
        slider_item_padding_top: 0, //padding top of the slider item
        slider_item_padding_bottom: 70, //padding bottom of the slider item
        slider_item_padding_left: 0, //padding left of the slider item
        slider_item_padding_right: 0,
        slider_control_zoom:false
    });

    showIntro();

    //$('.kw3-nav').fadeIn();

    /*var show = $('#showStuff').offset().top;

    $(document).scroll(function(){
        if ($(window).scrollTop() > show){
            $('.kw3-nav').fadeIn();
        }
    }) */

    $('.JG2-controller button').on('click', function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
    })

    $('#softwareJump').on('click', function() {
        location.hash = "#softwareFeature";
        showSoftware();
    });

    $('#publicationJump').on('click', function() {
        location.hash = "#publicationFeature";
        showPub();
    })

    $('#websiteJump').on('click', function() {
        location.hash = "#websiteFeature";
        showScrollerSite();
    })

    $('#photographyJump').on('click', function() {
        showScrollerPhoto();
        location.hash = "#photographyFeature";
    })

    $('#brandingJump').on('click', function() {
        showScrollerBrand();
        location.hash = "#brandingFeature";
    })

    $('#artJump').on('click', function() {
        showScrollerArt();
        location.hash = "#artFeature";
    })

    $('#skillsJump').on('click', function() {
        showSkills();
        location.hash = "#skillsFeature";
    })

    $('#lifeJump').on('click', function() {
        showLife();
        location.hash = "#lifeFeature";
    })

    $('#socialJump').on('click', function() {
        location.hash = "#socialFeature";
    })

    $('#contactJump').on('click', function() {
        showContact();
        location.hash = "#contactFeature";
    })

    $('#jGJump').on('click', function() {
        showSocial();
        location.hash = "#jG";
    })

    var jG = $('a[href="jG"]').offset().top;
    var softwareFeature = $('a[href="softwareFeature"]').offset().top;
    var publicationFeature = $('a[href="publicationFeature"]').offset().top;
    var websiteFeature = $('a[href="websiteFeature"]').offset().top;
    var photographyFeature = $('a[href="photographyFeature"]').offset().top;
    var brandingFeature = $('a[href="brandingFeature"]').offset().top;
    var artFeature = $('a[href="artFeature"]').offset().top;
    var skillsFeature = $('a[href="skillsFeature"]').offset().top;
    var lifeFeature = $('a[href="lifeFeature"]').offset().top;
    var socialFeature = $('a[href="socialFeature"]').offset().top;
    var contactFeature = $('a[href="contactFeature"]').offset().top;

    var scrollZone;

    if ($(window).width() > 2000){
         scrollZone = 700;
    } else {
        scrollZone = 400;
    }

    console.log(scrollZone);
    console.log($(window).width());

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > jG) {
            //  alert('software');
            $('.JG2-controller button.active').removeClass('active');
            $('#jGJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }
        if ($(window).scrollTop() > softwareFeature - scrollZone - 200) {
            //  alert('software');
            showSoftware();
            $('.JG2-controller button.active').removeClass('active');
            $('#softwareJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

        if ($(window).scrollTop() > publicationFeature - scrollZone) {
            //  alert('software');
            showPub();
            $('.JG2-controller button.active').removeClass('active');
            $('#publicationJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

        if ($(window).scrollTop() > websiteFeature - scrollZone) {
            //  alert('software');
            showScrollerSite();
            $('.JG2-controller button.active').removeClass('active');
            $('#websiteJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

        if ($(window).scrollTop() > photographyFeature - scrollZone) {
            showScrollerPhoto();
            //  alert('software');
            $('.JG2-controller button.active').removeClass('active');
            $('#photographyJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

        if ($(document).scrollTop() > brandingFeature - scrollZone) {
            showScrollerBrand();
            //  alert('software');
            
            $('.JG2-controller button.active').removeClass('active');
            $('#brandingJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

        if ($(window).scrollTop() > artFeature - scrollZone) {
            console.log('art');
            showScrollerArt();

            //  alert('software');
            $('.JG2-controller button.active').removeClass('active');
            $('#artJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

        if ($(window).scrollTop() > skillsFeature - scrollZone) {
            showSkills();
            //  alert('software');
            $('.JG2-controller button.active').removeClass('active');
            $('#skillsJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

        if ($(window).scrollTop() > lifeFeature - scrollZone) {
            showLife();
            //  alert('software');
            $('.JG2-controller button.active').removeClass('active');
            $('#lifeJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

        if ($(window).scrollTop() > socialFeature - scrollZone) {
            showSocial();
            //  alert('software');
            $('.JG2-controller button.active').removeClass('active');
            $('#socialJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

        if ($(window).scrollTop() > contactFeature - scrollZone -100) {
            showContact();
            //  alert('software');
            $('.JG2-controller button.active').removeClass('active');
            $('#contactJump').addClass('active');
            //$('.JG2-landing-feature.software').show();
        }

    });

    $('.d-button').each(function(i) {
        $(this).on('click', function() {

            console.log(i);
            console.log($(this).attr('id'));
            if ($(this).attr('id') === "D" + i + "C") {
                $('.kw3-feature-block.D').hide();
                $('.partner-image').hide();
                $('#D' + i).fadeIn('slow');
                $('#D' + i + 'I').fadeIn('slow');
            }
        })
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
                scrollTop: $("#post").offset().top - 90
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
    }

    var width = $(window).width();

    var resizeId;

    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 100);
    });

    function doneResizing() {
        showIntro();
      /*  if ($(window).width() != width && $(window).width < 767){
            showSoftware();
            showPub();
            showScrollerSite();
            showScrollerPhoto();
            showScrollerBrand();
            showScrollerArt();
            showSkills();
            showLife();
            showContact();
            showSocial();
        } */
    }

});