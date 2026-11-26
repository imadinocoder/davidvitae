
document.addEventListener("DOMContentLoaded", () => {

    // AUTOMATIC COPYRIGHT YEAR

    document.querySelectorAll(".year").forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    // MOBILE NAVIGATION

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.textContent = isOpen ? "×" : "☰";

        });

    }

    // EDUCATION EXPANDABLE DETAILS

    const toggles = document.querySelectorAll(
        ".education-toggle"
    );

    toggles.forEach(button => {

        const panel = button.nextElementSibling;

        panel.hidden = true;

        button.addEventListener("click", () => {

            const willOpen =
                button.getAttribute("aria-expanded") !== "true";

            // Close all other school details.

            toggles.forEach(other => {

                other.setAttribute("aria-expanded", "false");

                other.nextElementSibling.hidden = true;

            });

            // Open selected school.

            if (willOpen) {

                button.setAttribute("aria-expanded", "true");

                panel.hidden = false;

            }

        });

    });

});