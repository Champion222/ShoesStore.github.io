document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveNav() {
        let scrollPosition = window.scrollY;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 100;
            let sectionHeight = section.clientHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });
                document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveNav);
});