import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.getCookie = function (key) {
    if (document.cookie.length > 0) {
        var cStart = document.cookie.indexOf(key + "=");
        if (cStart !== -1) {
            cStart = cStart + key.length + 1;
            var cEnd = document.cookie.indexOf(";", cStart);
            if (cEnd === -1) cEnd = document.cookie.length;
            return unescape(document.cookie.substring(cStart, cEnd));
        }
    }
    return "";
};
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
