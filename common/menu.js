document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navigationMenu = document.getElementById('navigation-menu');
    const overlay = document.getElementById('overlay');

    // ハンバーガーメニューボタンのクリックイベント
    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('is-active');
        navigationMenu.classList.toggle('is-active');
        overlay.classList.toggle('is-active');
    });

    // オーバーレイのクリックイベント
    overlay.addEventListener('click', function() {
        hamburgerMenu.classList.remove('is-active');
        navigationMenu.classList.remove('is-active');
        this.classList.remove('is-active');
    });
});
