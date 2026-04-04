/**
 * =============================================================================
 *  HERO SCROLL ANIMATION (GSAP)
 * =============================================================================
 *
 *  WHAT THIS FILE DOES (plain English):
 *    When you scroll down the first screen, the video in the middle GROWS,
 *    the left/right headlines slide away, then the “about” text slides up.
 *
 *  WHEN TO TOUCH THIS FILE:
 *    • The scroll feels broken after you renamed a class in index.html
 *    • You want the video to grow BIGGER/SMALLER at the end of the scroll
 *    • You want scrolling to take LONGER/SHORTER (more or less finger scrolling)
 *
 *  WHEN NOT TO TOUCH THIS FILE:
 *    • Changing normal text or photos → use index.html instead
 *    • Changing colors or fonts → use css/site.css instead
 *
 *  NEEDS: index.html must load GSAP + ScrollTrigger BEFORE this script.
 * =============================================================================
 */

window.addEventListener("load", function () {
    // Tell GSAP we use the ScrollTrigger add-on (comes from the CDN in index.html).
    gsap.registerPlugin(ScrollTrigger);

    // The black box around the video — we measure its size so the animation
    // starts from what you styled in CSS (no “pop in”).
    var videoWindow = document.querySelector(".video-window");

    // Shortcut: read current margins from the browser (works on mobile too).
    var cs = function () {
        return window.getComputedStyle(videoWindow);
    };

    /**
     * HOW LONG THE “HERO” PART OF THE SCROLL LASTS
     * Bigger number in `end: "+=300%"` = more scrolling before the next section.
     * (Try small steps: 150%, 200%, 250%…)
     */
    var tl = gsap.timeline({
        scrollTrigger: {
            // Which part of the page triggers the pin — do not rename #main-sequence in HTML unless you change this too.
            trigger: "#main-sequence",
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            // If the user rotates the phone or resizes the window, re-measure sizes.
            invalidateOnRefresh: true
        }
    });

    // How long (in timeline seconds) the “grow video + move text” part runs.
    // Larger = same scroll distance but slower/smoother motion (experiment).
    var scrollDuration = 2;

    // LEFT headline (“SHOOT WITH”) — slides left and fades while you scroll.
    tl.fromTo(
        ".left-t",
        { xPercent: 0, opacity: 1 },
        { xPercent: -130, opacity: 0, ease: "none", duration: scrollDuration },
        0
    )
        // RIGHT headline (“INTENTION”) — slides right and fades.
        .fromTo(
            ".right-t",
            { xPercent: 0, opacity: 1 },
            { xPercent: 130, opacity: 0, ease: "none", duration: scrollDuration },
            0
        )
        // VIDEO BOX — grows from current CSS size → big cinematic frame.
        .fromTo(
            videoWindow,
            {
                width: function () {
                    return videoWindow.offsetWidth;
                },
                height: function () {
                    return videoWindow.offsetHeight;
                },
                marginLeft: function () {
                    return parseFloat(cs().marginLeft) || 0;
                },
                marginRight: function () {
                    return parseFloat(cs().marginRight) || 0;
                },
                maxWidth: "none",
                maxHeight: "none",
                opacity: 1
            },
            {
                // ▼▼▼ EDIT HERE: final size of the video after scrolling ▼▼▼
                width: "90vw",
                height: "55vw",
                maxWidth: 1100,
                maxHeight: 600,
                // ▲▲▲ END EDIT ▲▲▲
                marginLeft: 0,
                marginRight: 0,
                opacity: 1,
                ease: "none",
                duration: scrollDuration
            },
            0
        )
        // Whole hero panel moves up to reveal the “about” panel underneath.
        .to(".hero-panel", { yPercent: -100, duration: 1, ease: "none" });
});
