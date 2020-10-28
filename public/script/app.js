// JavaScript source code


/* --- full screen nav --- */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("buttonOpen").style.display = "none";
    document.getElementById("buttonClose").style.display = "block";

}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("buttonOpen").style.display = "block";
    document.getElementById("buttonClose").style.display = "none";

}

function scrollAppear() {
    var mynav = document.getElementById('myNav');
    var introText = document.querySelector('.intro-text');
    var timelineText = document.querySelector('.timelinetext');
    var navPosition = mynav.getBoundingClientRect().top;
    var introPosition = introText.getBoundingClientRect().top;
    var timelinePosition = timelineText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    
    if (screenition = screenPosition) {
        introText.classList.add('intro-appear');
        document.getElementById("svg").style.fill = "black";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    /*if (introPosition > screenPosition) {
        introText.classList.remove('intro-appear');
        document.getElementById("svg").style.fill = "white";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }*/

    if (timelinePosition < screenPosition/2) {
        document.getElementById("svg").style.fill = "white";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

    }
}

window.addEventListener('scroll', scrollAppear);

/* population growth */
google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Year');
    data.addColumn('number', 'Population');

    data.addRows([
        [new Date(1951, 0, 1), 379278124],
        [new Date(1956, 0, 1), 413025849],
        [new Date(1961, 0, 1), 454176666],
        [new Date(1966, 0, 1), 503161589],
        [new Date(1971, 0, 1), 560274314],
        [new Date(1976, 0, 1), 628943226],
        [new Date(1981, 0, 1), 705395576],
        [new Date(1986, 0, 1), 790846181],
        [new Date(1991, 0, 1), 879557823],
        [new Date(1996, 0, 1), 970082707],
        [new Date(2001, 0, 1), 1062684631],
        [new Date(2006, 0, 1), 1153207299],
        [new Date(2011, 0, 1), 1239215258],
        [new Date(2016, 0, 1), 1319577958],
        [new Date(2020, 0, 1), 1387297452]
    ]);

    var options = {
        title: 'Indian Population Since 1951',
        hAxis: {
            format: ' ',
            title: 'year',
            titleTextStyle: {
                color: 'white'
            }
        },
        vAxis: {
            title: 'Population( in millions)',
            titleTextStyle: {
                color: 'white'
            }
        },
        backgroundColor: 'black',
        annotations: {
            textStyle: {
                color: 'white',
            }
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
