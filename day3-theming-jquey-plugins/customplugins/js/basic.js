(function ($) {

    /* plugin scope */

    $.fn.highlight = function (options) {

        var settings = $.extend({
            color: 'yellow',
            decoration: 'underline'
        }, options);

        $(this)
            .css('color', settings.color)
            .css('text-decoration', settings.decoration);
        return this;
    };

})(jQuery);


$(function () {
    /* other codes */

    $('span')
        .highlight({
            color: 'red' /* still has underline text */
        });
});