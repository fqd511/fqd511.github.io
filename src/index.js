import _data from "./data.js";

var vm = new Vue({
    el: '#app',
    data: {
        backgroundStyle: {
            background: `url("${ _data.baseUrl}background.png") no-repeat fixed center/cover`
        },
        ..._data
    },
    created() {},
    methods: {},
});