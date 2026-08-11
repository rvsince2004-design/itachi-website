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
   CINEMATIC ITACHI SLIDER
========================= */

const itachiImage =
    document.getElementById("itachiImage");

const sceneButtons =
    document.querySelectorAll(".scene-btn");

const sceneEyebrow =
    document.getElementById("sceneEyebrow");

const sceneTitle =
    document.getElementById("sceneTitle");

const sceneDescription =
    document.getElementById("sceneDescription");

const sceneQuote =
    document.getElementById("sceneQuote");


/* =========================
   SCENE DATA
========================= */

const scenes = [

    {
        image: "images/itachi-main.jpg",

        eyebrow: "THE LAST UCHIHA",

        title: "其の眼に<br>宿る術",

        description:
            "Behind those crimson eyes lived a shinobi who carried an impossible burden.",

        quote:
            "「命を犠牲にして、里を守る。」"
    },


    {
        image: "images/itachi-eye.jpg",

        eyebrow: "THE MANGEKYO",

        title: "月読<br>TSUKUYOMI",

        description:
            "A single glance was enough to trap an enemy inside an illusion controlled by Itachi.",

        quote:
            "「幻術は、眼の力だけではない。」"
    },


    {
        image: "images/itachi-dark.jpg",

        eyebrow: "THE SACRIFICE",

        title: "暁<br>AKATSUKI",

        description:
            "He chose to carry hatred so that the people he loved could continue living in peace.",

        quote:
            "「俺はいつでも、お前を愛している。」"
    }

];


let currentScene = 0;


/* =========================
   CHANGE SCENE
========================= */

function changeScene(index) {

    if (index < 0) {
        index = scenes.length - 1;
    }

    if (index >= scenes.length) {
        index = 0;
    }

    currentScene = index;

    const scene = scenes[currentScene];


    /* Fade out */

    itachiImage.style.opacity = "0";

    sceneEyebrow.style.opacity = "0";
    sceneTitle.style.opacity = "0";
    sceneDescription.style.opacity = "0";
    sceneQuote.style.opacity = "0";


    setTimeout(() => {

        /* Change image */

        itachiImage.src =
            scene.image;


        /* Change text */

        sceneEyebrow.innerHTML =
            scene.eyebrow;

        sceneTitle.innerHTML =
            scene.title;

        sceneDescription.innerHTML =
            scene.description;

        sceneQuote.innerHTML =
            scene.quote;


        /* Fade in */

        itachiImage.style.opacity = "1";

        sceneEyebrow.style.opacity = "1";
        sceneTitle.style.opacity = "1";
        sceneDescription.style.opacity = "1";
        sceneQuote.style.opacity = "1";


        itachiImage.style.transform =
            "scale(1)";


    }, 350);


    /* Update buttons */

    sceneButtons.forEach((button, i) => {

        button.classList.toggle(
            "active",
            i === currentScene
        );

    });

}


/* =========================
   BUTTON CONTROLS
========================= */

sceneButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        changeScene(index);

    });

});


/* =========================
   MOBILE SWIPE
========================= */

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


document.addEventListener(
    "touchend",
    (event) => {

        touchEndX =
            event.changedTouches[0].screenX;

        const distance =
            touchEndX - touchStartX;


        if (Math.abs(distance) < 50) {
            return;
        }


        /* Swipe LEFT */

        if (distance < 0) {

            changeScene(
                currentScene + 1
            );

        }


        /* Swipe RIGHT */

        else {

            changeScene(
                currentScene - 1
            );

        }

    },
    { passive: true }
);