/* =========================================================
   BAAZIGAR PHOTOGRAPHY
   JAVASCRIPT
========================================================= */


// ================= LOADER =================

const loader = document.getElementById("loader");

window.addEventListener("load", function () {

    setTimeout(function () {

        if (loader) {
            loader.classList.add("hide");
        }

    }, 1000);

});


// Safety: loader যেন কোনো কারণে আটকে না থাকে

setTimeout(function () {

    if (loader) {
        loader.classList.add("hide");
    }

}, 2500);


// ================= NAVBAR =================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ================= MOBILE MENU =================

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


function closeMenu() {

    if (menuBtn) {
        menuBtn.classList.remove("active");
    }

    if (mobileMenu) {
        mobileMenu.classList.remove("active");
    }

    document.body.classList.remove("no-scroll");

}


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener(
        "click",
        function () {

            const isOpen =
                mobileMenu.classList.toggle("active");

            menuBtn.classList.toggle(
                "active",
                isOpen
            );

            document.body.classList.toggle(
                "no-scroll",
                isOpen
            );

        }
    );

}


document
    .querySelectorAll(
        ".mobile-link, .mobile-book"
    )
    .forEach(function (link) {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target
                                .classList
                                .add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.08
            }

        );


    revealElements.forEach(
        function (element) {

            observer.observe(element);

        }
    );

} else {

    revealElements.forEach(
        function (element) {

            element.classList.add("visible");

        }
    );

}


// ================= CUSTOM CURSOR =================

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");

const mouseGlow =
    document.querySelector(".mouse-glow");


let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


if (
    cursorDot &&
    cursorRing &&
    mouseGlow
) {

    document.addEventListener(
        "mousemove",
        function (event) {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";

            mouseGlow.style.left =
                mouseX + "px";

            mouseGlow.style.top =
                mouseY + "px";

        }
    );


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * 0.15;

        ringY +=
            (mouseY - ringY) * 0.15;


        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    document
        .querySelectorAll(
            "a, button, .gallery-card, .tilt-card"
        )
        .forEach(function (element) {

            element.addEventListener(
                "mouseenter",
                function () {

                    cursorRing
                        .classList
                        .add("active");

                }
            );


            element.addEventListener(
                "mouseleave",
                function () {

                    cursorRing
                        .classList
                        .remove("active");

                }
            );

        });

}


// ================= HERO 3D EFFECT =================

const photoStage =
    document.getElementById("photoStage");


if (photoStage) {

    photoStage.addEventListener(
        "mousemove",
        function (event) {

            if (window.innerWidth <= 700) {
                return;
            }


            const rect =
                photoStage.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateY =
                (
                    (
                        x -
                        rect.width / 2
                    )
                    /
                    (
                        rect.width / 2
                    )
                )
                * 8;


            const rotateX =
                -
                (
                    (
                        y -
                        rect.height / 2
                    )
                    /
                    (
                        rect.height / 2
                    )
                )
                * 8;


            photoStage.style.transform =
                "rotateX(" +
                rotateX +
                "deg) rotateY(" +
                rotateY +
                "deg)";

        }
    );


    photoStage.addEventListener(
        "mouseleave",
        function () {

            photoStage.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        }
    );

}


// ================= 3D TILT CARDS =================

document
    .querySelectorAll(".tilt-card")
    .forEach(function (card) {


        card.addEventListener(
            "mousemove",
            function (event) {


                if (window.innerWidth <= 700) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateY =
                    (
                        (
                            x -
                            rect.width / 2
                        )
                        /
                        (
                            rect.width / 2
                        )
                    )
                    * 3;


                const rotateX =
                    -
                    (
                        (
                            y -
                            rect.height / 2
                        )
                        /
                        (
                            rect.height / 2
                        )
                    )
                    * 3;


                card.style.transform =
                    "perspective(1000px) " +
                    "rotateX(" +
                    rotateX +
                    "deg) " +
                    "rotateY(" +
                    rotateY +
                    "deg) " +
                    "translateY(-4px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "perspective(1000px) " +
                    "rotateX(0deg) " +
                    "rotateY(0deg) " +
                    "translateY(0)";

            }
        );


    });


// ================= MAGNETIC BUTTON =================

document
    .querySelectorAll(".magnetic")
    .forEach(function (button) {


        button.addEventListener(
            "mousemove",
            function (event) {


                if (window.innerWidth <= 700) {
                    return;
                }


                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    "translate(" +
                    x * 0.12 +
                    "px, " +
                    y * 0.12 +
                    "px)";

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.style.transform =
                    "translate(0,0)";

            }
        );


    });


// =========================================================
// IMAGE LIGHTBOX
// =========================================================

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxClose =
    document.getElementById("lightboxClose");


document
    .querySelectorAll(".gallery-card")
    .forEach(function (card) {


        card.addEventListener(
            "click",
            function () {


                if (
                    !lightbox ||
                    !lightboxImage
                ) {
                    return;
                }


                const image =
                    card.getAttribute(
                        "data-image"
                    );


                const title =
                    card.getAttribute(
                        "data-title"
                    );


                if (!image) {
                    return;
                }


                lightboxImage.src =
                    image;


                lightboxImage.alt =
                    title ||
                    "Baazigar Photography";


                if (lightboxTitle) {

                    lightboxTitle.textContent =
                        title ||
                        "Baazigar Photography";

                }


                lightbox.classList.add(
                    "active"
                );


                document.body
                    .classList
                    .add("no-scroll");

            }
        );


    });


function closeLightbox() {

    if (!lightbox) {
        return;
    }


    lightbox.classList.remove(
        "active"
    );


    document.body
        .classList
        .remove("no-scroll");


    setTimeout(
        function () {

            if (lightboxImage) {
                lightboxImage.src = "";
            }

        },
        300
    );

}


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


// ================= ESCAPE KEY =================

document.addEventListener(
    "keydown",
    function (event) {


        if (event.key === "Escape") {

            closeMenu();

            closeLightbox();

        }

    }
);


// ================= IMAGE ERROR CHECK =================
// ভুল filename থাকলে browser console-এ দেখাবে

document
    .querySelectorAll("img")
    .forEach(function (image) {


        image.addEventListener(
            "error",
            function () {

                console.error(
                    "Image not found:",
                    image.getAttribute("src")
                );

            }
        );


    });