$(function () {

    $('#exampleModal').on('hidden.bs.modal', function (e) {
        alert('Dialog closed');
    });

    $('#exampleModal').modal('show');

    $('#btnOpen').click(function () {

    });


    var images = [
        'https://foo.gallery/wp-content/uploads/2014/07/Barbed-Wire-Fence1.jpg',
        'https://foo.gallery/wp-content/uploads/2014/07/Wrecked-Car-By-Lake1.jpg'
    ];

    $.each(images, function (index, value) {
        $('#myCarousel .carousel-inner').append(`
            <div class="carousel-item">
                <img src="${value}" class="img-fluid">
            </div>
        `);

        if (index === 0) {
            $('#myCarousel .carousel-inner div.carousel-item').addClass('active');
        }
    });

    $('#myCarousel').carousel()

    $('#btnPrevious').click(function () {
        $('#myCarousel').carousel('prev');
    });
    $('#btnNext').click(function () {
        $('#myCarousel').carousel('next');
    });


    $('#datepicker').datepicker();
});