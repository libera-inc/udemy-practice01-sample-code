/**
 * スタッフスライダー
 */
export const initializeAboutStaffSlider = () => {
    const sliderElement = document.querySelector(".js-about-staff-slider");

    // 要素が存在しない場合return
    if (!sliderElement) return;

    // Splideの初期化
    const splide = new Splide(sliderElement, {
        type: "loop", // ループ再生
        perPage: 3, // スライド表示数
        perMove: 1, // スライド移動数
        gap: "40rem", // スライド間の間隔
        padding: { left: "172rem", right: "259rem" }, // 左右の余白
        arrows: false, // 矢印非表示
        pagination: false, // ページネーション非表示
        autoplay: true, // 自動再生
        interval: 3000, // 自動再生の間隔（3秒）
        pauseOnHover: true, // ホバーで一時停止
        pauseOnFocus: true, // フォーカスで一時停止
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
