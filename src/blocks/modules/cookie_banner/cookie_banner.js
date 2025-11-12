const CookieBanner = class CookieBanner {
    constructor(){}
    initBanner() {
        document.addEventListener('DOMContentLoaded', function () {
            const banner = document.getElementById('cookieBanner');
            const button = document.getElementById('acceptCookies');

            if (!localStorage.getItem('cookieAccepted')) {
                banner.classList.add('visible');
            }

            button.addEventListener('click', () => {
                localStorage.setItem('cookieAccepted', 'true');
                banner.classList.remove('visible');
            });
        });
    }
    init() {
        this.initBanner();
    }
}

export default CookieBanner;