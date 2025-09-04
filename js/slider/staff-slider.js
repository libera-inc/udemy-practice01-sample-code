/**
 * スタッフスライダー
 */
export const initializeAboutStaffSlider = () => {
    const aboutStaffSlider = document.querySelector(".js-about-staff-slider");

    if (!aboutStaffSlider) return;

    const splide = new Splide(aboutStaffSlider, {
        type: "loop",
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: false,
        autoplay: true,
        interval: 3000,
        gap: "40rem",
        padding: { left: "172rem", right: "259rem" },
        breakpoints: {
            899: {
                perPage: 1,
                padding: { left: "20rem", right: "125rem" },
                gap: "32rem",
            },
        },
    });
    splide.mount();
};
