
'use strict';

function onReady(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
    });
}

onReady(function () {
    new Chart('graph', {
        type: 'bar',
        data: {
            labels: ['Naive', 'SSE', 'AVX', 'AVX + OpenMP'],
            datasets: [{
                label: 'sec/epoch',
                data: [270, 86, 44, 13],
                backgroundColor: [
                    '#FC5656',
                    '#56FCB4',
                    '#29E2FF',
                    '#E974FF'
                ]
            }]
        },
        options: {
            scales: {
                yAxis: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
