export default {
    isMobileScreen: function () {
        return ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) /
            (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)) <= .75;
    },
    isPageOverflowY: function () {
        return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
    }
}
