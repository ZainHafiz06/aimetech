document.addEventListener('DOMContentLoaded', () => {
    // Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;")
    })

    // Navbar Transition
    const navEl = document.querySelector('.navBar');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 2) {
            navEl.classList.add('navBarScrolled');
        } else if (window.scrollY < 2) {
            navEl.classList.remove('navBarScrolled');
        }
    })
});
