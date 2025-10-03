import $ from 'jquery';
import 'slick-carousel';

const MainVideo = class MainVideo {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_video_slider').slick({
                slidesToScroll: 1,
                arrows: true,
                infinite: false,
                dots: false,
                centerMode: true,
                slidesToShow: 2,
                initialSlide: 1,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 1,
                            initialSlide: 0,
                            centerMode: false,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
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

export default MainVideo;