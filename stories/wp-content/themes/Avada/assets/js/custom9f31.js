// jQuery(document).ready(function() {
	   
//     if (jQuery(window).width() >= 1200 && jQuery('.single').length) {
//         var positionLeft = jQuery('.smart_content_wrapper').offset().left;
//         jQuery('.fusion-page-title-wrapper').css('left', positionLeft);
//         jQuery('.fusion-page-category-wrapper').css('left', positionLeft);
//     }
    
//     jQuery(window).resize(function() {
//         if (jQuery(window).width() >= 1200 && jQuery('.single').length) {
//             var positionLeft = jQuery('.smart_content_wrapper').offset().left;
//             jQuery('.fusion-page-title-wrapper').css('left', positionLeft);
//             jQuery('.fusion-page-category-wrapper').css('left', positionLeft);
//         }
//         else if(jQuery('.single').length) {
//             jQuery('.fusion-page-title-wrapper').removeAttr('style');
//             jQuery('.fusion-page-category-wrapper').removeAttr('style');
//         }
//     })
    
     
//     if (jQuery(window).width() < 768 && jQuery('.single').length) {
//         jQuery(window).scroll(function() {
//             if (jQuery('.fusion-page-title-wrapper').text().length > 75) {
//                 var short_title = jQuery('.fusion-page-title-wrapper').text().substring(0, 72) + "...";
//                 jQuery('.fusion-page-title-wrapper .fusion-page-title').text(short_title);
//             }
//         })
//     }

jQuery(document).ready(function() {
	// jQuery(document).ready(function() {
	   
//     if (jQuery(window).width() >= 1200 && jQuery('.single').length) {
//         var positionLeft = jQuery('.smart_content_wrapper').offset().left;
//         jQuery('.fusion-page-title-wrapper').css('left', positionLeft);
//         jQuery('.fusion-page-category-wrapper').css('left', positionLeft);
//     }
    
//     jQuery(window).resize(function() {
//         if (jQuery(window).width() >= 1200 && jQuery('.single').length) {
//             var positionLeft = jQuery('.smart_content_wrapper').offset().left;
//             jQuery('.fusion-page-title-wrapper').css('left', positionLeft);
//             jQuery('.fusion-page-category-wrapper').css('left', positionLeft);
//         }
//         else if(jQuery('.single').length) {
//             jQuery('.fusion-page-title-wrapper').removeAttr('style');
//             jQuery('.fusion-page-category-wrapper').removeAttr('style');
//         }
//     })
    
     
//     if (jQuery(window).width() < 768 && jQuery('.single').length) {
//         jQuery(window).scroll(function() {
//             if (jQuery('.fusion-page-title-wrapper').text().length > 75) {
//                 var short_title = jQuery('.fusion-page-title-wrapper').text().substring(0, 72) + "...";
//                 jQuery('.fusion-page-title-wrapper .fusion-page-title').text(short_title);
//             }
//         })
//     }

jQuery(document).ready(function() {
    jQuery("#toTop").click (function () {
        jQuery('html, body').animate({   
                scrollTop: jQuery(".single-post-page ").offset().top
         }, 500);
    });
    jQuery(window).scroll(function(){
        var lastPost = jQuery(".smart_scroll_container .smart_ajax_container").length;
        if ( jQuery(window).scrollTop() < 60) {
            jQuery(".theiaStickySidebar").addClass("stickyTop");
        } else {
            jQuery(".theiaStickySidebar").removeClass("stickyTop");
        }
        for (var n = 3; n < lastPost+3 ; n++) {
            var nextN = n+1;
            if (nextN < lastPost+3) {
                if (0 < jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+n+")").offset().top && jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+nextN+")").offset().top < (-132 - jQuery('.smart_ajax_container:nth-child('+n+') .main_content .post-details .posted-date').height())){
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'fixed', transform: 'translateY(100px)', top: '0'});
                } else if (0 < jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+n+")").offset().top && jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+nextN+")").offset().top > (-132 - jQuery('.smart_ajax_container:nth-child('+n+') .main_content .post-details .posted-date').height())) {
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'absolute', top: '0'});
                    var m = (jQuery(".single-post .smart_ajax_container:nth-child("+n+") .main_content .custom-info").height() - jQuery('.single-post .smart_ajax_container:nth-child('+n+') .main_content .custom-info .posted-date').height() - 25);
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css('transform', 'translateY('+m+'px)' )
                } else {
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'absolute', transform: 'translateY(0px)', top: '0'});
                }
            } else {
                if (0 < jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+n+")").offset().top) {
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'fixed', transform: 'translateY(100px)', top: '0'});
                } else {
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'absolute', transform: 'translateY(0px)', top: '0'});
                }
                
            }
            
        }
        
    });
 });
    jQuery(window).scroll(function(){
        var lastPost = jQuery(".smart_scroll_container .smart_ajax_container").length;
        if ( jQuery(window).scrollTop() < 60) {
            jQuery(".theiaStickySidebar").addClass("stickyTop");
        } else {
            jQuery(".theiaStickySidebar").removeClass("stickyTop");
        }
        for (var n = 3; n < lastPost+3 ; n++) {
            var nextN = n+1;
            if (nextN < lastPost+3) {
                if (0 < jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+n+")").offset().top && jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+nextN+")").offset().top < (-132 - jQuery('.smart_ajax_container:nth-child('+n+') .main_content .post-details .posted-date').height())){
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'fixed', transform: 'translateY(100px)', top: '0'});
                } else if (0 < jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+n+")").offset().top && jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+nextN+")").offset().top > (-132 - jQuery('.smart_ajax_container:nth-child('+n+') .main_content .post-details .posted-date').height())) {
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'absolute', top: '0'});
                    var m = (jQuery(".single-post .smart_ajax_container:nth-child("+n+") .main_content .custom-info").height() - jQuery('.single-post .smart_ajax_container:nth-child('+n+') .main_content .custom-info .posted-date').height() - 25);
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css('transform', 'translateY('+m+'px)' )
                } else {
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'absolute', transform: 'translateY(0px)', top: '0'});
                }
            } else {
                if (0 < jQuery(window).scrollTop() + 100 - jQuery(".smart_ajax_container:nth-child("+n+")").offset().top) {
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'fixed', transform: 'translateY(100px)', top: '0'});
                } else {
                    jQuery(".smart_ajax_container:nth-child("+n+") .custom-info .posted-date").css({position: 'absolute', transform: 'translateY(0px)', top: '0'});
                }
                
            }
            
        }
        
    });
 });