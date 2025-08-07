/**
 * 画像ギャラリースライダー
 */
export const initializeCultureGallery = () => {
    const sliderElement = document.querySelector(".js-recruit-culture-gallery");

    // 要素が存在しない場合return
    if (!sliderElement) return;

    // Splideの初期化
    const splide = new Splide(sliderElement, {
        type: "loop", // ループ再生
        perPage: 3, // スライド表示数
        perMove: 1, // スライド移動数
        gap: "32rem", // スライド間の間隔
        padding: { left: "112rem", right: "140rem" }, // 左右の余白
        arrows: false, // 矢印非表示
        pagination: false, // ページネーション非表示
        autoScroll: {
            speed: 1, // スクロール速度
            pauseOnHover: false, // ホバーで止めない
            pauseOnFocus: false, // フォーカスで止めない
        },
        breakpoints: {
            899: {
                perPage: 1,
                gap: "10rem",
                padding: { left: "10rem", right: "132rem" },
                autoScroll: {
                    speed: 0.6,
                },
            },
        },
    });

    splide.mount(window.splide.Extensions);
};
