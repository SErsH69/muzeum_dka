import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';

import Header from '../blocks/modules/header/header.js';
import HistoryMain from '../blocks/modules/history_main/history_main.js';
import MainVideo from '../blocks/modules/main_video/main_video.js';
import MainMedal from '../blocks/modules/main_medal/main_medal.js';
import MainSingle from '../blocks/modules/main_single/main_single.js';
import FsliderBlock from '../blocks/modules/fslider_block/fslider_block.js';
import CookieBanner from '../blocks/modules/cookie_banner/cookie_banner.js';
import Modals from '../blocks/modules/modals/modals.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            window: window.innerWidth
        },
        header: new Header({
            isMobileMenuOpened: false,
        }),
        historyMain: new HistoryMain(),
        mainVideo: new MainVideo(),
        mainMedal: new MainMedal(),
        fsliderBlock: new FsliderBlock(),
        cookieBanner: new CookieBanner(),
        mainSingle: new MainSingle(),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        })
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.header.init();
        this.historyMain.init();
        this.mainVideo.init();
        this.mainMedal.init();
        this.fsliderBlock.init();
        this.cookieBanner.init();
        this.mainSingle.init();
        this.modals.init();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        }
    },
});