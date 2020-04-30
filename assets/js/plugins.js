// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


jQuery.noConflict();

    jQuery('.article-share').click(function(e){
        e.preventDefault();

        shareui = jQuery(this).parent().parent().children('.share-ui');
        shareui.fadeIn();

        cover = jQuery(this).parent().parent();

        shareui.mouseleave(function(){
            shareui.fadeOut();
        });
    });


jQuery('.slider-plugin').bjqs({
    'animation': 'slide',
    'width': 704,
    'height': 355,
    'rotationSpeed': 9000,
    'showMarkers': true,
    'showControls': false,
    'centerMarkers': true,
    'automatic': true
});


jQuery('.staffposts-plugin').bjqs({
    'animation': 'slide',
    'width': 625,
    'height': 30,
    'rotationSpeed': 9000,
    'showMarkers': false,
    'showControls': true,
    'centerMarkers': false,
    'automatic': true
});


jQuery('#top-link').click(function (e) {
    e.preventDefault();
    jQuery('html, body').animate({
        scrollTop: 0
    }, 'slow');
});

// form field scripts
jQuery('body').ready(function () {
    jQuery('.textInput').each(function () {
        jQuery(this).val(jQuery(this).attr('defaultVal'));
        jQuery(this).css({
            color: '#666'
        });
    });

    jQuery('.textInput').focus(function () {
        if (jQuery(this).val() == jQuery(this).attr('defaultVal')) {
            jQuery(this).val('');
            jQuery(this).css({
                color: '#696969'
            });
        }
    });

    jQuery('.textInput').blur(function () {
        if (jQuery(this).val() == '') {
            jQuery(this).val(jQuery(this).attr('defaultVal'));
            jQuery(this).css({
                color: '#999'
            });
        }
    });
});