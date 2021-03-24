import Vuex from 'vuex'
import Vue from 'vue'

//1.安装插件
Vue.use(Vuex)

const getters = {
    getScreenRatio: function () {
        return;
    }
}
const state = {

}

const mutations = {
}

//2.创建对象
const store = new Vuex.Store({
    state,
    getters,
    mutations
})

export default store;
