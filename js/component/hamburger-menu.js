/**
 * ハンバーガーメニュー
 */
export const initializeHamburgerMenu = () => {
    const menu = document.querySelector(".js-header-menu");
    const openButton = document.querySelector(".js-header-menu-open-button");
    const closeButton = document.querySelector(".js-header-menu-close-button");

    // 要素が存在しない場合return
    if (!menu || !openButton || !closeButton) return;

    // メニューopenする関数
    const openMenu = () => {
        // 背景固定
        document.body.style.overflow = "hidden";

        menu.showModal();

        gsap.fromTo(
            menu,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
            },
        );
    };

    // メニューcloseする関数
    const closeMenu = () => {
        gsap.to(menu, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                menu.close();
                // 背景固定解除
                document.body.style.overflow = "";
            },
        });
    };

    // ハンバーガーボタンクリックでopen
    openButton.addEventListener("click", () => {
        openMenu();
    });

    // クローズボタンクリックでclose
    closeButton.addEventListener("click", () => {
        closeMenu();
    });

    // Escapeキーを押すとclose
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closeMenu();
        }
    });

    // ウィンドウリサイズ時の処理
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 900) {
            gsap.set(menu, { opacity: 1 });
            // メニューが開いている場合は閉じる
            menu.close();
            // 背景固定解除
            document.body.style.overflow = "";
        }
    });
};
