<template>
  <span class="odometer"></span>
</template>

<style scoped>
</style>

<script>
  import Odometer from 'odometer';
  import 'odometer/themes/odometer-theme-default.css';

  export default {
    name: 'IOdometer',
    props: {
      value: {
        type: Number,
        required: false,
        default: 0
      },
      format: {
        type: String,
        required: false
      },
      theme: {
        type: String,
        required: false,
        default: 'default'
      },
      duration: {
        type: Number,
        required: false
      },
      animation: {
        type: String,
        required: false
      },
      formatFunction: {
        type: Function,
        required: false
      }
    },
    data() {
      return {
        instance: null
      };
    },
    computed: {
    },
    watch: {
      value: {
        handler: function(value) {
          const that = this;
          if (that.instance && that.instance.update) {
            that.instance.update(value);
          }
        },
        deep: false
      }
    },
    methods: {
      initOdometer() {
        if (window.odometerOptions) {
          window.odometerOptions['auto'] = false;
        } else {
          window.odometerOptions = {
            auto: false
          };
        }
      },
      init() {
        const that = this;
        that.initOdometer();
        if (!that.instance) {
          const dom = that.$el;
          that.instance = new Odometer({
            el: dom,
            value: that.value,
            format: that.format,
            theme: that.theme,
            duration: that.duration,
            animation: that.animation,
            formatFunction: that.formatFunction
          });
          that.instance.render();
        }
      },
      destroy() {
        const that = this;
        that.instance = null;
      }
    },
    // beforeCreate() {
      // const that = this;
      // console.log('beforeCreate');
    // },
    // created() {
      // const that = this;
      // console.log('created');
    // },
    // beforeMount() {
      // const that = this;
      // console.log('beforeMount');
    // },
    mounted() {
      const that = this;
      // console.log('mounted');
      that.init();
    },
    // beforeUpdate() {
      // const that = this;
      // console.log('beforeUpdate');
    // },
    // updated() {
      // const that = this;
      // console.log('updated');
    // },
    // activated() {
      // const that = this;
      // console.log('activated');
    // },
    // deactivated() {
      // const that = this;
      // console.log('deactivated');
    // },
    beforeDestroy() {
      const that = this;
      // console.log('beforeDestroy');
      that.destroy();
    },
    // destroyed() {
      // const that = this;
      // console.log('destroyed');
    // },
    renderInside() {
      const that = this;
      if (that.instance && that.instance.renderInside) {
        that.instance.renderInside();
      }
    },
    watchForMutations() {
      const that = this;
      if (that.instance && that.instance.watchForMutations) {
        that.instance.watchForMutations();
      }
    },
    startWatchingMutations() {
      const that = this;
      if (that.instance && that.instance.startWatchingMutations) {
        that.instance.startWatchingMutations();
      }
    },
    stopWatchingMutations() {
      const that = this;
      if (that.instance && that.instance.stopWatchingMutations) {
        that.instance.stopWatchingMutations();
      }
    },
    cleanValue(val) {
      const that = this;
      if (that.instance && that.instance.cleanValue) {
        that.instance.cleanValue(val);
      }
    },
    bindTransitionEnd() {
      const that = this;
      if (that.instance && that.instance.bindTransitionEnd) {
        that.instance.bindTransitionEnd();
      }
    },
    resetFormat() {
      const that = this;
      if (that.instance && that.instance.resetFormat) {
        that.instance.resetFormat();
      }
    },
    renderDigit() {
      const that = this;
      if (that.instance && that.instance.renderDigit) {
        that.instance.renderDigit();
      }
    },
    formatDigits(value) {
      const that = this;
      if (that.instance && that.instance.formatDigits) {
        that.instance.formatDigits(value);
      }
    },
    insertDigit(digit, before) {
      const that = this;
      if (that.instance && that.instance.insertDigit) {
        that.instance.insertDigit(digit, before);
      }
    },
    addDigit(value, repeating) {
      const that = this;
      if (that.instance && that.instance.addDigit) {
        that.instance.addDigit(value, repeating);
      }
    },
    addSpacer(chr, before, extraClasses) {
      const that = this;
      if (that.instance && that.instance.addSpacer) {
        that.instance.addSpacer(chr, before, extraClasses);
      }
    },
    animate(newValue) {
      const that = this;
      if (that.instance && that.instance.animate) {
        that.instance.animate(newValue);
      }
    },
    animateCount(newValue) {
      const that = this;
      if (that.instance && that.instance.animateCount) {
        that.instance.animateCount(newValue);
      }
    },
    getDigitCount() {
      const that = this;
      if (that.instance && that.instance.getDigitCount) {
        that.instance.getDigitCount();
      }
    },
    getFractionalDigitCount() {
      const that = this;
      if (that.instance && that.instance.getFractionalDigitCount) {
        that.instance.getFractionalDigitCount();
      }
    },
    resetDigits() {
      const that = this;
      if (that.instance && that.instance.resetDigits) {
        that.instance.resetDigits();
      }
    },
    animateSlide(value) {
      const that = this;
      if (that.instance && that.instance.animateSlide) {
        that.instance.animateSlide(value);
      }
    },
    render(value) {
      const that = this;
      if (that.instance && that.instance.render) {
        that.instance.render(value);
      }
    },
    update(newVal) {
      const that = this;
      if (that.instance && that.instance.update) {
        that.instance.update(newVal);
      }
    }
  };
</script>
