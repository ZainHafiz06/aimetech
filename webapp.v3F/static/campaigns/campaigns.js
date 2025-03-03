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

    /* Progress Bar */
    var progress = document.querySelector('.progressBarPercentage');

    if (progress) {
        var computedWidth = parseFloat(window.getComputedStyle(progress).width);
        var parentWidth = parseFloat(window.getComputedStyle(progress.parentElement).width);

        var computedPercentage = (computedWidth / parentWidth) * 100;

        if (Math.abs(computedPercentage - 50) < 1) {
            progress.style.backgroundColor = "var(--yellow)";
        }
    };

    var status = document.querySelectorAll('.blockStatus');
    var statusArr = [];

    for (let i = 0; i < status.length; i++) {
        statusArr[i] = status[i].style.backgroundColor;
        console.log(statusArr[i]);
    }

    /* Pie Charts */
    var piePos = [80, 90, 100];

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

            height: "40%",
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
                    strokeWidth: '100%',
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
                            return parseInt(val);
                        },

                        fontFamily: 'Noto Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '12px',
                        color: '#DEE2E6',

                        offsetY: 6,
                    }
                }
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

    let pieChart = document.querySelectorAll("#pieChart");

    let gradFrom = ['#007BFF', '#F9CDC3', '#57EBDE'];
    let gradTo = ['#00FF99', '#FACEFB', '#AEFB2A'];

    pieChart.forEach((container, index) => {
        const chart = new ApexCharts(container, {
            ...pieOptions,
            series: [piePos[index]],
            fill: {
                type: 'gradient',
                gradient: {
                    gradientFromColors: [gradFrom[index]],
                    gradientToColors: [gradTo[index]],

                    shade: 'dark',
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    stops: [0, 100],
                }
            }
        });

        chart.render();
    });

    /* Draggable Blocks */
    const tileBlocks = document.querySelector('.tileBlocks');
    let draggedElement = null;
    let placeholder = document.createElement('div');
    placeholder.classList.add('tileBlockContainer', 'placeholder');
    placeholder.setAttribute("style", "height: 100px;");

    document.querySelectorAll('.tileBlockContainer').forEach(block => {
        block.setAttribute('draggable', true);

        block.addEventListener('dragstart', (e) => {
            draggedElement = block;
            block.classList.add('dragging');
            setTimeout(() => block.style.display = 'none', 0);
        });

        block.addEventListener('dragend', (e) => {
            block.classList.remove('dragging');
            block.style.display = '';
            draggedElement = null;
        });
    });

    tileBlocks.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(tileBlocks, e.clientY);
        if (afterElement == null) {
            tileBlocks.appendChild(placeholder);
        } else {
            tileBlocks.insertBefore(placeholder, afterElement);
        }
    });

    tileBlocks.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedElement) {
            tileBlocks.insertBefore(draggedElement, placeholder);
            placeholder.remove();
        }
    });

    function getDragAfterElement(container, y) {
        const elements = [...container.querySelectorAll('.tileBlockContainer:not(.dragging)')];
        return elements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return {
                    offset: offset, element: child
                };
            }

            else {
                return closest;
            }
        },

        { offset: Number.NEGATIVE_INFINITY }).element;
    }
});