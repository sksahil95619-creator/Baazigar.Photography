/* =========================================================
   BAAZIGAR PHOTOGRAPHY
   FINAL JAVASCRIPT
========================================================= */


// ================= LOADER =================

const loader = document.getElementById("loader");

window.addEventListener("load", function () {

    setTimeout(function () {

        if (loader) {
            loader.classList.add("hide");
        }

    }, 900);

});


// Loader safety

setTimeout(function () {

    if (loader) {
        loader.classList.add("hide");
    }

}, 2500);


// ================= NAVBAR =================

const navbar =
    document.getElementById("navbar");


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

    menuBtn.addEventListener("click", function () {

        const open =
            mobileMenu.classList.toggle("active");


        menuBtn.classList.toggle(
            "active",
            open
        );


        document.body.classList.toggle(
            "no-scroll",
            open
        );

    });

}


document
    .querySelectorAll(".mobile-link, .mobile-book")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


// ================= REVEAL =================

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target
                                .classList
                                .add("visible");

                            revealObserver.unobserve(
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

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "visible"
            );

        }
    );

}


// ================= CURSOR =================

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

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


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


    function cursorAnimation() {

        ringX +=
            (mouseX - ringX) * .15;

        ringY +=
            (mouseY - ringY) * .15;


        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";


        requestAnimationFrame(
            cursorAnimation
        );

    }


    cursorAnimation();

}


// ================= HERO 3D =================

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
                ((x - rect.width / 2) /
                (rect.width / 2)) * 8;


            const rotateX =
                -((y - rect.height / 2) /
                (rect.height / 2)) * 8;


            photoStage.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

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


// ================= TILT CARDS =================

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
                    ((x - rect.width / 2) /
                    (rect.width / 2)) * 2.5;


                const rotateX =
                    -((y - rect.height / 2) /
                    (rect.height / 2)) * 2.5;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform = "";

            }
        );

    });


// =========================================================
// COLLECTION INFORMATION
// =========================================================

const collections = {


    model: {

        title:
            "Models Pictures",

        number:
            "01 — MODEL COLLECTION",

        images: [

            "images/Model/model1.jpeg",
            "images/Model/model2.jpeg",
            "images/Model/model3.jpeg",
            "images/Model/model4.jpeg",
            "images/Model/model5.jpeg",
            "images/Model/model6.jpeg"

        ]

    },


    wedding: {

        title:
            "Wedding Pictures",

        number:
            "02 — WEDDING COLLECTION",

        images: [

            "images/Wedding/wedding1.png",
            "images/Wedding/wedding2.png",
            "images/Wedding/wedding3.png",
            "images/Wedding/wedding4.png",
            "images/Wedding/wedding5.png",
            "images/Wedding/wedding6.png"

        ]

    },


    birthday: {

        title:
            "Birthday Pictures",

        number:
            "03 — BIRTHDAY COLLECTION",

        images: [

            "images/Birthday/birthday1.jpeg",
            "images/Birthday/birthday2.jpeg",
            "images/Birthday/birthday3.jpeg",
            "images/Birthday/birthday4.jpeg",
            "images/Birthday/birthday5.jpeg",
            "images/Birthday/birthday6.jpeg",
            "images/Birthday/birthday7.jpeg"

        ]

    }

};


// ================= POPUP ELEMENTS =================

const galleryPopup =
    document.getElementById(
        "galleryPopup"
    );


const galleryPopupBody =
    document.getElementById(
        "galleryPopupBody"
    );


const galleryPopupTitle =
    document.getElementById(
        "galleryPopupTitle"
    );


const galleryNumber =
    document.getElementById(
        "galleryNumber"
    );


const galleryPopupClose =
    document.getElementById(
        "galleryPopupClose"
    );


// ================= LIGHTBOX =================

const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const lightboxTitle =
    document.getElementById(
        "lightboxTitle"
    );


const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );


// =========================================================
// OPEN COLLECTION
// =========================================================

function openGallery(type) {

    const collection =
        collections[type];


    if (!collection) {

        console.error(
            "Collection not found:",
            type
        );

        return;

    }


    if (
        !galleryPopup ||
        !galleryPopupBody
    ) {

        return;

    }


    galleryPopupTitle.textContent =
        collection.title;


    galleryNumber.textContent =
        collection.number;


    galleryPopupBody.innerHTML =
        "";


    collection.images.forEach(

        function (imagePath, index) {


            const photo =
                document.createElement(
                    "div"
                );


            photo.className =
                "popup-photo";


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                imagePath;


            image.alt =
                collection.title +
                " " +
                (index + 1);


            image.loading =
                "lazy";


            // Image missing হলে Console-এ দেখাবে

            image.addEventListener(
                "error",
                function () {

                    console.error(
                        "IMAGE NOT FOUND:",
                        imagePath
                    );

                }
            );


            photo.appendChild(
                image
            );


            // Individual photo fullscreen

            photo.addEventListener(
                "click",
                function () {

                    openLightbox(
                        imagePath,
                        collection.title +
                        " — Photo " +
                        (index + 1)
                    );

                }
            );


            galleryPopupBody.appendChild(
                photo
            );

        }

    );


    galleryPopup.classList.add(
        "active"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


// ================= COLLECTION CARD CLICK =================

document
    .querySelectorAll(
        ".collection-card"
    )
    .forEach(function (card) {


        card.addEventListener(
            "click",
            function () {


                const type =
                    card.getAttribute(
                        "data-gallery"
                    );


                openGallery(type);

            }
        );


    });


// ================= CLOSE GALLERY =================

function closeGallery() {

    if (!galleryPopup) {
        return;
    }


    galleryPopup.classList.remove(
        "active"
    );


    if (
        !lightbox ||
        !lightbox.classList.contains(
            "active"
        )
    ) {

        document.body.classList.remove(
            "no-scroll"
        );

    }

}


if (galleryPopupClose) {

    galleryPopupClose.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            closeGallery();

        }
    );

}


// =========================================================
// LIGHTBOX
// =========================================================

function openLightbox(
    imagePath,
    title
) {

    if (
        !lightbox ||
        !lightboxImage
    ) {

        return;

    }


    lightboxImage.src =
        imagePath;


    lightboxImage.alt =
        title;


    if (lightboxTitle) {

        lightboxTitle.textContent =
            title;

    }


    lightbox.classList.add(
        "active"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


// ================= CLOSE LIGHTBOX =================

function closeLightbox() {

    if (!lightbox) {
        return;
    }


    lightbox.classList.remove(
        "active"
    );


    setTimeout(
        function () {

            if (lightboxImage) {

                lightboxImage.src =
                    "";

            }

        },
        250
    );


    // Collection popup open থাকলে body locked থাকবে

    if (
        !galleryPopup ||
        !galleryPopup.classList.contains(
            "active"
        )
    ) {

        document.body.classList.remove(
            "no-scroll"
        );

    }

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


// ================= ESC KEY =================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        if (
            lightbox &&
            lightbox.classList.contains(
                "active"
            )
        ) {

            closeLightbox();

            return;

        }


        if (
            galleryPopup &&
            galleryPopup.classList.contains(
                "active"
            )
        ) {

            closeGallery();

            return;

        }


        closeMenu();

    }
);


// ================= IMAGE ERROR CHECK =================

document
    .querySelectorAll("img")
    .forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                console.error(
                    "Image not found:",
                    image.getAttribute(
                        "src"
                    )
                );

            }
        );

    });