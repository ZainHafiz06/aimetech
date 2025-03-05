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

            navList.setAttribute("style", "display: flex");
        } else {
            isUpperNavToggled = true;

            navList.setAttribute("style", "display: none");
        }
    });

    /* Directory Toggle */
    let isHeaderListToggled = true;

    var header = document.querySelector('.header');
    var headerList = document.querySelector('.headerList');

    header.addEventListener('click', () => {
        if (isHeaderListToggled) {
            isHeaderListToggled = false;

            headerList.setAttribute("style", "display: flex;");
        } else {
            isHeaderListToggled = true;

            headerList.setAttribute("style", "display: none;");
        }
    });

    /* Character Limit */
    document.querySelectorAll('.contentInput').forEach(input => {
        const maxChars = 100;
    
        input.addEventListener('input', function () {
            if (this.textContent.length > maxChars) {
                this.textContent = this.textContent.substring(0, maxChars);
                alert(`Maximum character limit of ${maxChars} reached.`);
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

    /* Adding Links */
    const addButton = document.querySelector('.add');
    const contentInputItems = document.querySelector('.contentInputItems');
    let inputContainerExists = false;

    addButton.addEventListener('click', () => {
        if (inputContainerExists) return;
        inputContainerExists = true;

        const inputContainer = document.createElement('div');
        inputContainer.classList.add('inputLink');

        const label = document.createElement('span');
        label.textContent = 'Enter a link: ';

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('linkInput');
        input.placeholder = 'Paste your link here';

        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
        document.querySelector('.add').appendChild(inputContainer);

        input.focus();

        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' && input.value.trim() !== '') {
                const linkItem = document.createElement('div');
                linkItem.classList.add('inputItem');
                linkItem.textContent = input.value;
                contentInputItems.appendChild(linkItem);
                inputContainer.remove();
                inputContainerExists = false;
            }
        });
    });
});