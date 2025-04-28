document.addEventListener('DOMContentLoaded', () => {
    /* Navigation Bar: Scroll Effect */
    const navLogo = document.querySelector('.navLogo');
    const navOptions = document.querySelector('.navOptions');
    const navButtons = document.querySelector('.navButtons');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 10) {
            navLogo.setAttribute("style", 
                "opacity: 0;" +
                "transform: translateX(-30px);"
            );

            navOptions.setAttribute("style",
                "flex-grow: 1.5;" +
                "padding: 10px 0;" +
                "border: 1px solid #AEAEAE40;" +
                "border-radius: 10px;" +
                "background-color: rgba(207, 206, 206, 0.3);"
            );

            navButtons.setAttribute("style", 
                "opacity: 0;" +
                "transform: translateX(30px);"
            );
        } else if (scrollY < 10) {
            navLogo.setAttribute("style", 
                "opacity: 1;" +
                "transform: translateX(0);"
            );

            navOptions.setAttribute("style",
                "flex-grow: 3;" +
                "padding: 0;" +
                "border: 1px solid #AEAEAE00;" +
                "border-radius: 0;" +
                "background-color: transparent;"
            );

            navButtons.setAttribute("style", 
                "opacity: 1;" +
                "transform: translateX(0);"
            );
        }
    });

    // Typing Animation
    var typed = new Typed(".auto-type", {
        strings: ["conversation", "message"],
        typeSpeed: 50,
        backSpeed: 50,

        startDelay: 2000,
        endDelay: 3000,

        looped: true,

        showCursor: false,

        smartBackspace: false,
    });

    console.log("Website Built by Zain Hafiz 🧑🏻‍💻");

    // Container Plugin: Responsive Elements

});