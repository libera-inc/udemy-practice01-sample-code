/**
 * ヘッダーの背景色変更
 */
export const initializeHeaderBackgroundToggle = () => {
    const headerElement = document.querySelector(".js-header");
    const triggerElement = document.querySelector(".js-header-trigger");
    const headerActiveClass = "is-active";

    // 要素が存在しない場合return
    if (!headerElement || !triggerElement) return;

    // ヘッダーの背景色を白にする関数
    const setWhiteBackground = () => {
        headerElement.classList.add(headerActiveClass);
        gsap.to(headerElement, {
            duration: 0.3,
            ease: "power2.out",
            backgroundColor: "#fff",
        });
    };

    // ヘッダーの背景色を透過にする関数
    const setTransparentBackground = () => {
        headerElement.classList.remove(headerActiveClass);
        gsap.to(headerElement, {
            duration: 0.3,
            ease: "power2.out",
            backgroundColor: "rgba(255, 255, 255, 0)",
        });
    };

    // ScrollTriggerを使用してヘッダーの背景色を変更
    ScrollTrigger.create({
        trigger: triggerElement,
        start: "bottom top+=250",
        onEnter: setWhiteBackground,
        onLeaveBack: setTransparentBackground,
    });
};
