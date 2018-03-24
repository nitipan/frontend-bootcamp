$(function () {
    // setInterval(function () {
    //     $('#time').html(moment().format('hh:mm:ss'));
    // }, 1000);

    // $('#chart').realtimeChart(5000, {
    //     dataset: {
    //         label: 'Widget 1',
    //         borderColor: 'rgb(255, 99, 132)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)'
    //     }
    // });
    // $('#chart2').realtimeChart(1000, {
    //     dataset: {
    //         label: 'Widget 2',
    //         borderColor: 'rgb(255, 99, 132)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)'
    //     }
    // });

    var data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            label: "Prime and Fibonacci",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        }]
    };

    var lineChart = new Chart($('#chart'), {
        type: 'line',
        data: data
    });
});