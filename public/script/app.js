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
    var introText = document.querySelector('.intro-text');
    var timelineText = document.querySelector('.timelinetext');
    var introPosition = introText.getBoundingClientRect().top;
    var timelinePosition = timelineText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (introPosition < screenPosition) {
        introText.classList.add('intro-appear');
        document.getElementById("svg").style.fill = "black";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    if (introPosition > screenPosition) {
        introText.classList.remove('intro-appear');
        document.getElementById("svg").style.fill = "white";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

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
    data.addColumn('number', 'X');
    data.addColumn('number', 'Population');

    data.addRows([
        [1951, 379278124],
        [1956, 413025849],
        [1961, 454176666],
        [1966, 503161589],
        [1971, 560274314],
        [1976, 628943226],
        [1981, 705395576],
        [1986, 790846181],
        [1991, 879557823],
        [1996, 970082707],
        [2001, 1062684631],
        [2006, 1153207299],
        [2011, 1239215258],
        [2016, 1319577958],
        [2020, 1387297452]
    ]);

    var options = {
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
