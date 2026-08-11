/* -------------------------
   MOUSE / TOUCH GLOW
------------------------- */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


/* -------------------------
   SOUND BUTTON
------------------------- */

const soundButton =
    document.getElementById("soundButton");

let soundOn = false;

soundButton.addEventListener("click", () => {

    soundOn = !soundOn;

    soundButton.textContent =
        soundOn ? "♫ ON" : "♫ OFF";

});


/* -------------------------
   SCROLL REVEAL
------------------------- */

const sections =
    document.querySelectorAll(
        ".bottom-section, .quote-section"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(50px)";

    section.style.transition =
        "all 1s ease";

    observer.observe(section);

});


/* -------------------------
   IMAGE PARALLAX
------------------------- */

const heroImage =
    document.querySelector(".hero-image");

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* =========================
   ITACHI SCENE SWITCHER
========================= */

const itachiImage =
    document.getElementById("itachiImage");

const sceneButtons =
    document.querySelectorAll(".scene-btn");


sceneButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const newImage =
            button.getAttribute("data-image");


        /* Fade image out */

        itachiImage.style.opacity = "0";

        itachiImage.style.transform =
            "scale(1.08)";


        setTimeout(() => {

            itachiImage.src = newImage;

            itachiImage.onload = () => {

                itachiImage.style.opacity = "1";

                itachiImage.style.transform =
                    "scale(1)";
            };

        }, 350);


        /* Change active button */

        sceneButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});