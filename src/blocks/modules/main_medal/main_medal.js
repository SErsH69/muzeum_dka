import $ from 'jquery';
import 'slick-carousel';

const MainMedal = class MainMedal {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_medal').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                dots: false,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 2,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    }
                ]
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainMedal;