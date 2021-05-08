import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default {
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
    request: function (url, data, success = () => { }, error = () => { }) {
        let d = Object.prototype.toString.call(data) === '[object String]' ? JSON.stringify(data) : data;
        axios.post(url, d)
            .then((v) => { success(v.data, v.status, v.headers); })
            .catch((err) => { error(err); });
    }
}
