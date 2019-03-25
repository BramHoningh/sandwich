import Vue from 'vue';

import VScrollLock from 'v-body-scroll-lock';

Vue.use(VScrollLock);

// Vue Config
Vue.config.productionTip = false;
Vue.prototype.$filters = Vue.options.filters;

// Vue Plugins
//
// Vue.use(MyPlugin);
