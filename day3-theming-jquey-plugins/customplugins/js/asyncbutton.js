(function ($) {
    $.fn.async = function (asyncText, promise) {
        var host = this;
        var originalHtml = $(host).html();
        $(host).html(asyncText).prop('disabled', true);
        promise.then(function (res) {
            $(host).html(originalHtml).prop('disabled', false);
        });
        return promise;
    };
})(jQuery);




$('#btnLoad').click(function () {
    var promise = $.get('https://jsonplaceholder.typicode.com/posts');
    $(this).async('<i class="fa fa-refresh fa-spin  fa-fw"></i> Loading', promise).then(function (result) {
        console.log(result);
    });
});