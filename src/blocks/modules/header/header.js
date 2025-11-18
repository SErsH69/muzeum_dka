const Header = class Header {
    constructor({ isMobileMenuOpened }) {
        this.isMobileMenuOpened = false;
        this.html = document.documentElement; // <html>
    }

    toogleMobileMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;

        if (this.isMobileMenuOpened) {
            this.html.classList.add('hidden');
        } else {
            this.html.classList.remove('hidden');
        }
    }

    closeMobileMenu() {
        this.isMobileMenuOpened = false;
        this.html.classList.remove('hidden');
    }

    setEventListener() {
        document.addEventListener('click', (event) => {
            if (event.target.closest('.header__burger--body') || event.target.closest('.header__burger')) return;
            this.closeMobileMenu();
        });
    }

    init() {
        this.setEventListener();
    }
}

export default Header;
