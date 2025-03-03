document.addEventListener('DOMContentLoaded', () => {
    /* Sidebar Toggle */
    let isSidebarExapanded = true;

    var menu = document.querySelector('.menuToggle');
    var sidebarWidth = document.querySelector(':root');

    var logo = document.querySelector('.logo');
    var banner = document.querySelector('.bannerContainer');

    var listContainer = document.querySelectorAll('.listContainer .list li');
    var listText = document.querySelectorAll('.listContainer .list .listText');
    var collapse = document.querySelectorAll('.collapse');

    var credits = document.querySelector('.credits');

    menu.addEventListener('click', () => {
        if (isSidebarExapanded) {
            isSidebarExapanded = false;

            sidebarWidth.style.setProperty('--sidebar-width', '70px');

            logo.setAttribute("style", "transform: translateY(20px);");
            banner.setAttribute("style", "transform: translateY(100px);");

            for (let i = 0; i < listContainer.length; i++) {
                listContainer[i].setAttribute("style", "justify-content: center");
            }

            for (let j = 0; j < listText.length; j++) {
                listText[j].setAttribute("style", "margin: 0;")
            }

            for (let k = 0; k < collapse.length; k++) {
                collapse[k].setAttribute("style", "display: none;");
            }

            credits.setAttribute("style", "transform: translateX(-150px)");
        } else {
            isSidebarExapanded = true;

            sidebarWidth.style.setProperty('--sidebar-width', '260px');

            logo.setAttribute("style", "transform: translateY(-100px);");
            banner.setAttribute("style", "transform: translateY(0px);");

            for (let i = 0; i < listContainer.length; i++) {
                listContainer[i].setAttribute("style", "justify-content: space-between;");
            }

            for (let j = 0; j < listText.length; j++) {
                listText[j].setAttribute("style", "margin: 6px 0 6px 16px;")
            }

            for (let k = 0; k < collapse.length; k++) {
                collapse[k].setAttribute("style", "display: flex;");
            }

            credits.setAttribute("style", "transform: translateX(0px);");
        }
    });

    /* Navigation Dropdown Toggle */
    let isUpperNavToggled = true;

    var navToggle = document.querySelector('.navToggle');
    var navList = document.querySelector('.navList');

    navToggle.addEventListener('click', () => {
        if (isUpperNavToggled) {
            isUpperNavToggled = false;

            navList.setAttribute("style", "filter: opacity(1);");
        } else {
            isUpperNavToggled = true;

            navList.setAttribute("style", "filter: opacity(0);");
        }
    });

    /* Directory Toggle */
    let isHeaderListToggled = true;

    var header = document.querySelector('.header');
    var headerList = document.querySelector('.headerList');

    header.addEventListener('click', () => {
        if (isHeaderListToggled) {
            isHeaderListToggled = false;

            headerList.setAttribute("style",
                "filter: opacity(1);" +
                "transform: translateX(0);"
            );
        } else {
            isHeaderListToggled = true;

            headerList.setAttribute("style",
                "filter: opacity(0);" +
                "transform: translateX(-10px);"
            );
        }
    });

    /* Flagged Messages Toggle */
    let isFlagToggled = true;

    var flagged = document.querySelectorAll('.flag-toggle');

    flagged.forEach((flag, index) => {
        flag.addEventListener('click', () => {
            let flaggedIcon = flag.querySelector('.flagged h1');

            if (flaggedIcon) {
                if (isFlagToggled) {
                    isFlagToggled = false;

                    flaggedIcon.setAttribute("style", "color: rgba(255, 255, 255, 0.2);");
                } else {
                    isFlagToggled = true;

                    flaggedIcon.setAttribute("style", "color: #FFA500;")
                }
            }
        });
    });

    /* Theme Toggle */
    let isThemeToggled = true;

    var allElements = document.querySelectorAll('*');

    var themeToggle = document.querySelector('.theme-toggle');

    themeToggle.addEventListener('click', () => {
        if (isThemeToggled) {
            isThemeToggled = false;

            allElements.forEach((element) => {
                const computedStyle = window.getComputedStyle(element);

                var backgroundColor = computedStyle.backgroundColor;
                var foregroundColor = computedStyle.backgroundColor;
                var textColor = computedStyle.color;

                var sidebarText = computedStyle.color;

                var checkbox = computedStyle.backgroundColor;

                if (backgroundColor === 'rgb(24, 27, 30)') {
                    element.style.backgroundColor = 'rgb(239, 241, 243)';
                }

                if (foregroundColor === 'rgb(33, 36, 40)') {
                    element.style.backgroundColor = 'rgb(255, 255, 255)';
                }

                if (textColor === 'rgb(222, 226, 230)') {
                    element.style.color = 'rgb(85, 85, 85)';
                }

                if (sidebarText === 'rgb(167, 172, 177)') {
                    element.style.color = 'rgb(125, 125, 125)';
                }

                if (checkbox === 'rgb(45, 49, 54)') {
                    element.style.color = 'rgb(169, 169, 169)'
                }
            });

        } else {
            isThemeToggled = true;

            allElements.forEach((element) => {
                const computedStyle = window.getComputedStyle(element);

                var backgroundColor = computedStyle.backgroundColor;
                var foregroundColor = computedStyle.backgroundColor;
                var textColor = computedStyle.color;

                var sidebarText = computedStyle.color;

                if (backgroundColor === 'rgb(239, 241, 243)') {
                    element.style.backgroundColor = 'rgb(24, 27, 30)';
                }

                if (foregroundColor === 'rgb(255, 255, 255)') {
                    element.style.backgroundColor = 'rgb(33, 36, 40)';
                }

                if (textColor === 'rgb(85, 85, 85)') {
                    element.style.color = 'rgb(222, 226, 230)';
                }

                if (sidebarText === 'rgb(125, 125, 125)') {
                    element.style.color = 'rgb(167, 172, 177)';
                }
            });
        }
    });

    /* Analytics Visuals */
    // Stacked Line Graph
    var series = [10];

    for (let i = 0; i < series.length; i++) {
        series[i] = i;
    }

    var stxLineOptions = {
        chart: {
            type: 'line',

            toolbar: {
                show: false,
            },

            height: '100%', /* 190 */
            width: '100%', /* 300 */

            sparkline: {
                enabled: true
            },
        },

        series: [{
            name: 'series-1',
            data: [1, 3, 2, 7, 8, 2],
        },

        {
            name: 'series-2',
            data: [5, 3, 10, 2, 4, 11],
        }],

        stroke: {
            curve: 'smooth'
        },

        tooltip: {
            enabled: true,

            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex];

                if (seriesIndex === 0) {
                    return `
                        <div style="
                            background: #DEE2E6;
              
                            color: #181B1E;
              
                            padding: 7px 11px;
              
                            border-radius: 5px;
  
                            font-family: 'Noto Sans', sans-serif;
                            font-weight: 500;
                        ">
                            ${value}
                        </div>
                    `;
                } else if (seriesIndex === 1) {
                    return `
                        <div style="
                            background: #DEE2E6;
              
                            color: #181B1E;
              
                            padding: 7px 11px;
              
                            border-radius: 5px;
  
                            font-family: 'Noto Sans', sans-serif;
                            font-weight: 500;
                        ">
                            ${value}
                        </div>
                    `;
                }
            },
        },

        xaxis: {
            labels: {
                show: false,
            },

            axisBorder: {
                show: false
            },

            axisTicks: {
                show: false
            }
        },

        yaxis: {
            labels: {
                show: false,
            },

            axisBorder: {
                show: false
            },

            axisTicks: {
                show: false
            }
        },

        legend: {
            show: false,
        },
    }

    var stxLineGraph = new ApexCharts(document.querySelector("#stxLineGraph"), stxLineOptions);
    stxLineGraph.render();

    /* Isolated Tile Visuals */
    // Closing Rate Visual
    var piePos = 80;
    document.getElementById("closing-rate").innerText = piePos + "%";

    let pieOptions = {
        series: [piePos],
        chart: {
            type: 'radialBar',

            toolbar: {
                show: false
            },

            sparkline: {
                enabled: true
            },

            height: "100%",
        },

        plotOptions: {
            radialBar: {
                startAngle: -130,
                endAngle: 130,

                hollow: {
                    margin: 0,

                    size: '80%',

                    background: 'transparent',

                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,

                    position: 'front',
                },

                track: {
                    background: '#181B1E',
                    strokeWidth: '67%',
                    margin: 0,
                },

                dataLabels: {
                    name: {
                        show: false,
                    },

                    show: true,

                    value: {
                        show: true,
                        formatter: function (val) {
                            return parseInt(val) + '%';
                        },

                        fontFamily: 'Noto Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '25px',
                        color: '#DEE2E6',

                        offsetY: 10,
                    }
                }
            },
        },

        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientFromColors: ['#007BFF'],
                gradientToColors: ['#00FF99'],
                stops: [0, 100],
            },
        },

        stroke: {
            lineCap: 'round'
        },

        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },

            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                },
            },
        },
    }

    let pieChart = new ApexCharts(document.querySelector("#pieChart"), pieOptions);
    pieChart.render();

    // Reply Rate Visual
    let lineOptions = {
        chart: {
            type: 'area',
            toolbar: {
                show: false
            },

            sparkline: {
                enabled: true
            },

            height: "69%",
        },

        grid: {
            show: false,
        },

        legend: {
            show: false
        },

        series: [
            {
                name: 'series-1',
                data: [1, 3, 2, 7, 8, 2],
            }
        ],

        stroke: {
            curve: 'smooth',

            width: 5,

            colors: ["#41C27A"],
        },

        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.5,
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: '#00FF99',
                        opacity: 0.2,
                    },

                    {
                        offset: 100,
                        color: '#FFF',
                        opacity: 0,
                    },
                ],
            },
        },

        tooltip: {
            enabled: true,

            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex];
                return `
            <div style="
              background: #DEE2E6;
              
              color: #181B1E;
              
              padding: 7px 11px;
              
              border-radius: 5px;
  
              font-family: 'Noto Sans', sans-serif;
              font-weight: 500;
            ">
              ${value}
            </div>
          `;
            },
        },

        markers: {
            colors: "#41C27A",
        },

        plotOptions: {
            area: {
                fill: {
                    colors: '#41C27A',
                    opacity: 0.9,
                    type: 'gradient',
                    fillTo: -20,
                },
            },
        },

        xaxis: {
            labels: {
                show: false
            },

            axisBorder: {
                show: false
            },

            axisTicks: {
                show: false
            },
        },

        yaxis: {
            labels: {
                show: false
            },

            axisBorder: {
                show: false
            },

            axisTicks: {
                show: false
            }
        },
    }

    let lineGraph = new ApexCharts(document.querySelector("#lineGraph"), lineOptions);
    lineGraph.render();

    // Active Conversations Visual
    let barOptions = {
        chart: {
            type: 'bar',

            toolbar: {
                show: false
            },

            sparkline: {
                enabled: true
            },

            height: "93%",
            width: "70%",
        },

        grid: {
            show: false,
        },

        legend: {
            show: false
        },

        plotOptions: {
            bar: {
                columnWidth: '50%',
                borderRadius: 3,
            },
        },

        series: [
            {
                name: 'series-1',
                data: [1, 3, 2, 7, 8, 2, 4, 6],
            }
        ],

        tooltip: {
            enabled: true,

            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex];
                return `
            <div style="
              background: #DEE2E6;
              
              color: #181B1E;
              
              padding: 7px 11px;
              
              border-radius: 5px;
  
              font-family: 'Noto Sans', sans-serif;
              font-weight: 500;
            ">
              ${value}
            </div>
          `;
            },
        },

        xaxis: {
            labels: {
                show: false
            },

            axisBorder: {
                show: false
            },

            axisTicks: {
                show: false
            }
        },

        yaxis: {
            labels: {
                show: false
            },

            axisBorder: {
                show: false
            },

            axisTicks: {
                show: false
            }
        },
    }

    let barGraph = new ApexCharts(document.querySelector("#barGraph"), barOptions);
    barGraph.render();

    // Total Conversations Visual
    let stagLineOptions = {
        chart: {
            type: 'area',

            toolbar: {
                show: false
            },

            sparkline: {
                enabled: true
            },

            height: "67%"
        },

        grid: {
            show: false,
        },

        legend: {
            show: false
        },

        markers: {
            size: 5,
            strokeColors: '#fff',
            colors: ["#FFC107"],
            strokeWidth: 2,
            hover: {
                size: undefined,
                sizeOffset: 3
            }
        },

        series: [
            {
                name: 'series-1',
                data: [1, 5, 2, 6, 8, 9],
            }
        ],

        stroke: {
            curve: 'straight',

            width: 5,

            colors: ["#FFC107"],
        },

        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.5,
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: '#FFC107',
                        opacity: 0.3,
                    },

                    {
                        offset: 100,
                        color: '#FFF',
                        opacity: 0,
                    },
                ],
            },
        },

        tooltip: {
            enabled: true,

            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex];
                return `
            <div style="
              background: #DEE2E6;
              
              color: #181B1E;
              
              padding: 7px 11px;
              
              border-radius: 5px;
  
              font-family: 'Noto Sans', sans-serif;
              font-weight: 500;
            ">
              ${value}
            </div>
          `;
            },
        },

        xaxis: {
            labels: {
                show: false
            },

            axisBorder: {
                show: false
            },

            axisTicks: {
                show: false
            }
        },

        yaxis: {
            labels: {
                show: false
            },

            axisBorder: {
                show: false
            },

            axisTicks: {
                show: false
            }
        },
    }

    let stagLineGraph = new ApexCharts(document.querySelector("#stagLineGraph"), stagLineOptions);
    stagLineGraph.render();

    // Gantt Chart Visual (Chart.js)
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [
                ['2024-04', '2024-05'],
                ['2024-07', '2024-08'],
                ['2024-09', '2024-11'],
                ['2024-12', '2025-02'],
                ['2025-03', '2025-04'],
                ['2025-05', '2025-06'],
                ['2025-06', '2025-07'],
            ],

            backgroundColor: [
                'rgba(255, 255, 255, 0.1)',
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.3)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.8)',
                'rgba(255, 255, 255, 1)'
            ],

            borderSkipped: false,
            borderRadius: 10,

            barPercentage: 0.3,
        }]
    };

    // Gantt Chart: Current Date
    const todayLine = {
        id: 'todayLine',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const {
                ctx, data,
                chartArea: {
                    top, bottom, left, right
                },

                scales: {
                    x, y
                }
            } = chart;

            ctx.save();

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.moveTo(x.getPixelForValue(new Date()), top);
            ctx.lineTo(x.getPixelForValue(new Date()), bottom);
            ctx.stroke();
        }
    }

    const config = {
        type: 'bar',
        data,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            indexAxis: 'y',
            scales: {
                x: {
                    min: '2024-04-01',
                    max: '2025-07-31',

                    type: 'time',

                    time: {
                        unit: 'month',
                    },

                    grid: {
                        display: false,

                        color: 'rgba(72, 79, 86, 0.2)',
                    },

                    ticks: {
                        display: false
                    },
                },

                y: {
                    beginAtZero: true,

                    grid: {
                        display: false,
                    },

                    ticks: {
                        display: false
                    },
                }
            },

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    enabled: true,

                    backgroundColor: '#DEE2E6',

                    titleColor: '#181B1E',
                    bodyColor: '#181B1E',

                    borderWidth: 1,

                    padding: 10,

                    callbacks: {
                        title: (tooltipItems) => {
                            const date = tooltipItems[0].raw.x;
                            const options = { month: 'long', year: 'numeric' };
                            return new Date(date).toLocaleDateString('en-US', options);
                        },

                        label: (tooltipItem) => {
                            return `Value: ${tooltipItem.raw.y}`;
                        }
                    }
                }
            }
        },

        plugins: [todayLine]
    };

    const myChart = new Chart(
        document.getElementById('ganttChart'), config
    );

    // For Chart.js Version
    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;
});