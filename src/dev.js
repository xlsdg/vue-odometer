import Vue from 'vue';
import IOdometer from './iOdometer.vue';

import 'odometer/themes/odometer-theme-car.css';
import 'odometer/themes/odometer-theme-default.css';
import 'odometer/themes/odometer-theme-digital.css';
import 'odometer/themes/odometer-theme-minimal.css';
import 'odometer/themes/odometer-theme-plaza.css';
import 'odometer/themes/odometer-theme-slot-machine.css';
import 'odometer/themes/odometer-theme-train-station.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    IOdometer
  },
  data() {
    return {
      theme1: 'default',
      theme2: 'minimal',
      theme3: 'car',
      theme4: 'plaza',
      theme5: 'slot-machine',
      theme6: 'train-station',
      theme7: 'digital',
      num: 999999
    };
  },
  methods: {
  },
  mounted() {
    const that = this;
    setInterval(function() {
      that.num = that.num + 1;
    }, 3000);
  }
});
