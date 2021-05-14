import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const COOKIE_ID = "k";
const COOKEY_ICON = "icon";
function request(url, type, data, success, error) {
    let d = Object.prototype.toString.call(data) === '[object String]' ? JSON.stringify(data) : data;
    let fun = undefined;
    switch (type.toLowerCase()) {
        case 'post':
            fun = axios.post(url, d)
            break;
        case 'get':
            fun = axios.get(url, d)
            break;
        default:
            fun = axios.get(url, d)
            break;
    }
    fun.then((v) => { success(v.data, v.status, v.headers); })
        .catch((err) => { error(err); });
}
export default {
    getCookieIdTag: function () {
        return COOKIE_ID;
    },
    getCookieIconTag: function () {
        return COOKEY_ICON;
    },
    eleSize: function (ele) {
        try {
            return {
                width: ele.offsetWidth,
                height: ele.offsetHeight,
                x: ele.offsetLeft,
                y: ele.offsetTop
            };
        } catch (error) {
            return {
                width: ele[0].offsetWidth,
                height: ele[0].offsetHeight,
                x: ele[0].offsetLeft,
                y: ele[0].offsetTop
            };
        }
    },
    isMobileScreen: function () {
        return ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) /
            (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)) <= .75;
    },
    isPageOverflowY: function () {
        return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
    },
    post: function (url, data = null, success = () => { }, error = () => { }) {
        request(url, 'post', data, success, error);
    },
    get: function (url, data = null, success = () => { }, error = () => { }) {
        request(url, 'get', data, success, error);
    }
}
