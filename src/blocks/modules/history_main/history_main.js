const HistoryMain = class HistoryMain {
    constructor(){}
    initTabs() {
        document.addEventListener("DOMContentLoaded", function () {
            const tabs = document.querySelectorAll(".history_main__tab");

            tabs.forEach(tab => {
                const name = tab.querySelector(".history_main__name");
                name.addEventListener("click", () => {
                    // Если этот таб уже активный — закрываем его
                    if (tab.classList.contains("isActive")) {
                        tab.classList.remove("isActive");
                        return;
                    }

                    // Убираем активность у всех
                    tabs.forEach(t => t.classList.remove("isActive"));

                    // Активируем выбранный
                    tab.classList.add("isActive");
                });
            });
        });
    }
    init() {
        this.initTabs();
    }
}

export default HistoryMain;