# vue-odometer

> Vue.js(v2.x+) component wrap for Odometer.js


## Installation

``` bash
$ npm install --save odometer vue-odometer
```


## Usage

``` vue
<template>
  <IOdometer
    class="iOdometer"
    :value="num"
  />
</template>

<script type="text/babel">
  import IOdometer from 'vue-odometer';
  import 'odometer/themes/odometer-theme-default.css';

  export default {
    name: 'view',
    components: {
      IOdometer
    },
    data() {
      return {
        num: 999999
      };
    },
    mounted() {
      const that = this;
      setInterval(function() {
        that.num += 1;
      }, 3000);
    }
  };
</script>

<style scoped>
  .iOdometer {
    font-size: 2em;
    margin: 0;
  }
</style>
```

## Properties

* `value` **[Number]**

  Optional; `0` by defualt.

* `format` **[String]**

  Optional;

* `theme` **[String]**

  Optional; `default` by defualt.

* `duration` **[Number]**

  Optional;

* `animation` **[String]**

  Optional;

* `formatFunction` **[Function]**

  Optional;

See more [Odometer.js](http://github.hubspot.com/odometer/)


## Methods

* `renderInside`
* `watchForMutations`
* `startWatchingMutations`
* `stopWatchingMutations`
* `cleanValue`
* `bindTransitionEnd`
* `resetFormat`
* `renderDigit`
* `formatDigits`
* `insertDigit`
* `addDigit`
* `addSpacer`
* `animate`
* `animateCount`
* `getDigitCount`
* `getFractionalDigitCount`
* `resetDigits`
* `animateSlide`
* `render`
* `update`

Learn more [Odometer.js](http://github.hubspot.com/odometer/)


# License

MIT
