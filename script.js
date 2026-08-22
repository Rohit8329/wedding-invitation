/* =========================================================
   ROHAN & NIKITA
   PREMIUM ENGAGEMENT INVITATION
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let musicPlaying = false;

let revealObserver = null;


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            `${WEDDING.groom} & ${WEDDING.bride} invitation loaded.`
        );


        populateCoupleNames();

        populateDates();

        populateFamilies();

        populatePhotos();

        populateStory();

        populateHashtag();

        populateRSVP();

        renderEvents();

        renderGallery();

        renderGuestInfo();

        initCountdown();

        initMusic();

        initOpeningScreen();

        initModals();

        initRevealAnimations();

    }
);


/* =========================================================
   COUPLE NAMES
   ========================================================= */

function populateCoupleNames() {

    const groomElements = [

        document.getElementById(
            "opening-groom"
        ),

        document.getElementById(
            "hero-groom"
        ),

        document.getElementById(
            "footer-groom"
        )

    ];


    groomElements.forEach(
        (element) => {

            if (element) {

                element.textContent =
                    WEDDING.groom;

            }

        }
    );


    const brideElements = [

        document.getElementById(
            "opening-bride"
        ),

        document.getElementById(
            "hero-bride"
        ),

        document.getElementById(
            "footer-bride"
        )

    ];


    brideElements.forEach(
        (element) => {

            if (element) {

                element.textContent =
                    WEDDING.bride;

            }

        }
    );

}


/* =========================================================
   DATES
   ========================================================= */

function populateDates() {

    const openingDate =
        document.getElementById(
            "opening-date"
        );


    const heroDate =
        document.getElementById(
            "hero-date"
        );


    if (openingDate) {

        openingDate.textContent =
            WEDDING.engagementDateDisplay;

    }


    if (heroDate) {

        heroDate.textContent =
            WEDDING.engagementDateDisplay;

    }

}


/* =========================================================
   FAMILY NAMES
   ========================================================= */

function populateFamilies() {

    const groomParents =
        document.getElementById(
            "groom-parents"
        );


    const brideParents =
        document.getElementById(
            "bride-parents"
        );


    if (groomParents) {

        groomParents.innerHTML =
            escapeHTML(
                WEDDING.groomParents
            ).replace(
                " &amp; ",
                "<br>&<br>"
            );

    }


    if (brideParents) {

        brideParents.innerHTML =
            escapeHTML(
                WEDDING.brideParents
            ).replace(
                " &amp; ",
                "<br>&<br>"
            );

    }

}


/* =========================================================
   PHOTOS
   ========================================================= */

function populatePhotos() {

    const couplePhoto =
        document.getElementById(
            "couple-photo"
        );


    const storyImage =
        document.getElementById(
            "story-image"
        );


    if (couplePhoto) {

        couplePhoto.src =
            WEDDING.couplePhoto;

        couplePhoto.alt =
            `${WEDDING.groom} & ${WEDDING.bride}`;

    }


    if (storyImage) {

        storyImage.src =
            WEDDING.storyImage;

        storyImage.alt =
            `${WEDDING.groom} & ${WEDDING.bride} story`;

    }

}


/* =========================================================
   STORY
   ========================================================= */

function populateStory() {

    const storyText =
        document.getElementById(
            "story-text-content"
        );


    if (storyText) {

        storyText.textContent =
            WEDDING.storyText;

    }

}


/* =========================================================
   HASHTAG
   ========================================================= */

function populateHashtag() {

    const hashtag =
        document.getElementById(
            "hashtag"
        );


    if (hashtag) {

        hashtag.textContent =
            WEDDING.hashtag;

    }

}


/* =========================================================
   RSVP LINKS
   ========================================================= */

function populateRSVP() {

    const whatsappButton =
        document.getElementById(
            "btn-whatsapp"
        );


    const callButton =
        document.getElementById(
            "btn-call"
        );


    if (whatsappButton) {

        const whatsappURL =
            `https://wa.me/${WEDDING.whatsappNumber}?text=${encodeURIComponent(
                WEDDING.rsvpMessage
            )}`;


        whatsappButton.href =
            whatsappURL;

        whatsappButton.target =
            "_blank";

        whatsappButton.rel =
            "noopener noreferrer";

    }


    if (callButton) {

        callButton.href =
            WEDDING.callNumber;

    }

}


/* =========================================================
   EVENTS
   ========================================================= */

function renderEvents() {

    const container =
        document.getElementById(
            "events-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    WEDDING.events.forEach(
        (event) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "event-card reveal";


            card.innerHTML = `

                <h3>
                    ${escapeHTML(event.name)}
                </h3>

                <p class="event-date">
                    ${escapeHTML(event.date)}
                </p>

                <p class="event-time">
                    ${escapeHTML(event.time)}
                </p>

                <p class="event-action">
                    View complete details →
                </p>

            `;


            card.setAttribute(
                "role",
                "button"
            );


            card.setAttribute(
                "tabindex",
                "0"
            );


            card.addEventListener(
                "click",
                () => {

                    openEventModal(event);

                }
            );


            card.addEventListener(
                "keydown",
                (keyboardEvent) => {

                    if (
                        keyboardEvent.key === "Enter" ||
                        keyboardEvent.key === " "
                    ) {

                        keyboardEvent.preventDefault();

                        openEventModal(event);

                    }

                }
            );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   GALLERY
   ========================================================= */

function renderGallery() {

    const container =
        document.getElementById(
            "gallery-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    WEDDING.gallery.forEach(
        (src, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "gallery-item reveal";


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                src;

            image.alt =
                `${WEDDING.groom} & ${WEDDING.bride} - Memory ${index + 1}`;

            image.loading =
                "lazy";


            image.addEventListener(
                "error",
                () => {

                    console.warn(
                        `Gallery image could not be loaded: ${src}`
                    );

                }
            );


            const overlay =
                document.createElement(
                    "div"
                );


            overlay.className =
                "gallery-overlay";

            overlay.innerHTML =
                "⊕";


            item.appendChild(
                image
            );

            item.appendChild(
                overlay
            );


            item.addEventListener(
                "click",
                () => {

                    openLightbox(src);

                }
            );


            container.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   GUEST INFORMATION
   ========================================================= */

function renderGuestInfo() {

    const container =
        document.getElementById(
            "info-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    WEDDING.guestInfo.forEach(
        (info) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "info-card reveal";


            card.innerHTML = `

                <span>
                    ${escapeHTML(info.icon)}
                </span>

                <h3>
                    ${escapeHTML(info.title)}
                </h3>

                <p>
                    ${escapeHTML(info.desc)}
                </p>

            `;


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   COUNTDOWN
   ========================================================= */

function initCountdown() {

    const targetDate =
        new Date(
            WEDDING.engagementDateISO
        ).getTime();


    const days =
        document.getElementById(
            "cd-days"
        );


    const hours =
        document.getElementById(
            "cd-hours"
        );


    const minutes =
        document.getElementById(
            "cd-minutes"
        );


    const seconds =
        document.getElementById(
            "cd-seconds"
        );


    const countdown =
        document.getElementById(
            "countdown"
        );


    const expired =
        document.getElementById(
            "countdown-expired"
        );


    if (
        Number.isNaN(targetDate)
    ) {

        console.error(
            "Invalid engagement date."
        );

        return;

    }


    function update() {

        const now =
            Date.now();


        const distance =
            targetDate - now;


        if (distance <= 0) {

            if (countdown) {

                countdown.classList.add(
                    "hidden"
                );

            }


            if (expired) {

                expired.classList.remove(
                    "hidden"
                );

            }


            return;

        }


        const totalSeconds =
            Math.floor(
                distance / 1000
            );


        const dayValue =
            Math.floor(
                totalSeconds / 86400
            );


        const hourValue =
            Math.floor(
                (totalSeconds % 86400) / 3600
            );


        const minuteValue =
            Math.floor(
                (totalSeconds % 3600) / 60
            );


        const secondValue =
            totalSeconds % 60;


        if (days) {

            days.textContent =
                String(
                    dayValue
                ).padStart(
                    2,
                    "0"
                );

        }


        if (hours) {

            hours.textContent =
                String(
                    hourValue
                ).padStart(
                    2,
                    "0"
                );

        }


        if (minutes) {

            minutes.textContent =
                String(
                    minuteValue
                ).padStart(
                    2,
                    "0"
                );

        }


        if (seconds) {

            seconds.textContent =
                String(
                    secondValue
                ).padStart(
                    2,
                    "0"
                );

        }

    }


    update();


    setInterval(
        update,
        1000
    );

}


/* =========================================================
   OPENING SCREEN
   ========================================================= */

function initOpeningScreen() {

    const button =
        document.getElementById(
            "btn-enter"
        );


    const opening =
        document.getElementById(
            "opening-screen"
        );


    const main =
        document.getElementById(
            "main-content"
        );


    const musicButton =
        document.getElementById(
            "music-toggle"
        );


    if (!button) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            if (button.disabled) {

                return;

            }


            button.disabled =
                true;


            if (opening) {

                opening.style.opacity =
                    "0";

                opening.style.visibility =
                    "hidden";

            }


            setTimeout(
                () => {

                    if (opening) {

                        opening.classList.add(
                            "hidden"
                        );

                    }


                    if (main) {

                        main.classList.remove(
                            "hidden"
                        );

                    }


                    if (musicButton) {

                        musicButton.classList.remove(
                            "hidden"
                        );

                    }


                    startMusic();


                    initRevealAnimations();

                },
                900
            );

        }
    );

}


/* =========================================================
   MUSIC
   ========================================================= */

function initMusic() {

    const audio =
        document.getElementById(
            "bg-music"
        );


    const button =
        document.getElementById(
            "music-toggle"
        );


    if (!audio || !button) {

        return;

    }


    if (WEDDING.musicUrl) {

        audio.src =
            WEDDING.musicUrl;

        audio.loop =
            true;

        audio.preload =
            "auto";

    }


    updateMusicButton(
        button,
        false
    );


    button.addEventListener(
        "click",
        () => {

            if (!WEDDING.musicUrl) {

                console.warn(
                    "No music file configured."
                );

                return;

            }


            if (musicPlaying) {

                audio.pause();

                musicPlaying =
                    false;

                button.classList.remove(
                    "playing"
                );

                updateMusicButton(
                    button,
                    false
                );

            } else {

                startMusic();

            }

        }
    );

}


/* =========================================================
   START MUSIC
   ========================================================= */

function startMusic() {

    const audio =
        document.getElementById(
            "bg-music"
        );


    const button =
        document.getElementById(
            "music-toggle"
        );


    if (
        !audio ||
        !WEDDING.musicUrl
    ) {

        return;

    }


    audio.play()
        .then(
            () => {

                musicPlaying =
                    true;


                if (button) {

                    button.classList.add(
                        "playing"
                    );


                    updateMusicButton(
                        button,
                        true
                    );

                }

            }
        )
        .catch(
            (error) => {

                console.log(
                    "Music playback was blocked:",
                    error
                );

            }
        );

}


/* =========================================================
   MUSIC BUTTON ACCESSIBILITY
   ========================================================= */

function updateMusicButton(
    button,
    playing
) {

    if (!button) {

        return;

    }


    button.setAttribute(
        "aria-label",
        playing
            ? "Pause background music"
            : "Play background music"
    );


    button.setAttribute(
        "aria-pressed",
        String(playing)
    );

}


/* =========================================================
   EVENT MODAL
   ========================================================= */

function openEventModal(event) {

    const modal =
        document.getElementById(
            "event-modal"
        );


    const body =
        document.getElementById(
            "modal-body"
        );


    if (!modal || !body) {

        return;

    }


    body.innerHTML = `

        <span class="section-kicker">
            Save the date
        </span>

        <h3>
            ${escapeHTML(event.name)}
        </h3>

        <p class="modal-label">
            Date & Time
        </p>

        <p>
            ${escapeHTML(event.date)}
            <br>
            ${escapeHTML(event.time)}
        </p>

        <p class="modal-label">
            Venue
        </p>

        <p>
            ${escapeHTML(event.venue)}
            <br>
            ${escapeHTML(event.address)}
        </p>

        <p class="modal-label">
            Dress Code
        </p>

        <p>
            ${escapeHTML(event.dressCode)}
        </p>

        <a
            href="${escapeAttribute(event.mapUrl)}"
            target="_blank"
            rel="noopener noreferrer"
            class="button button-dark"
            style="margin-top:25px;"
        >
            Open in Google Maps
        </a>

    `;


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   LIGHTBOX
   ========================================================= */

function openLightbox(src) {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const image =
        document.getElementById(
            "lightbox-img"
        );


    if (!lightbox || !image) {

        return;

    }


    image.src =
        src;


    image.alt =
        `${WEDDING.groom} & ${WEDDING.bride}`;


    lightbox.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE MODALS
   ========================================================= */

function closeAllOverlays() {

    const modal =
        document.getElementById(
            "event-modal"
        );


    const lightbox =
        document.getElementById(
            "lightbox"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }


    if (lightbox) {

        lightbox.classList.remove(
            "active"
        );

    }


    document.body.style.overflow =
        "";

}


/* =========================================================
   MODALS INITIALIZATION
   ========================================================= */

function initModals() {

    const modal =
        document.getElementById(
            "event-modal"
        );


    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const modalClose =
        document.querySelector(
            ".modal-close"
        );


    const lightboxClose =
        document.querySelector(
            ".lightbox-close"
        );


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeAllOverlays
        );

    }


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeAllOverlays
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === modal
                ) {

                    closeAllOverlays();

                }

            }
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === lightbox
                ) {

                    closeAllOverlays();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeAllOverlays();

            }

        }
    );

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.visible)"
        );


    if (!elements.length) {

        return;

    }


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );


        return;

    }


    if (!revealObserver) {

        revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );

    }


    elements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

}


/* =========================================================
   HTML ESCAPING
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   ATTRIBUTE ESCAPING
   ========================================================= */

function escapeAttribute(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        );

}