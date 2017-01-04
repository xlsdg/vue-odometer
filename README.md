# vue-odometer

> Vue.js(v2.x+) component wrap for Odometer.js


## Installation

``` bash
$ npm install --save vue-odometer
```


## Usage

``` vue
<template>
  <div class="iOdometer">
    <i-odometer
      class="iOdometer"
      :value="num"
    ></i-odometer>
  </div>
</template>

<script type="text/babel">
  import IOdometer from 'vue-odometer';
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
        that.num = that.num + 1;
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


## Static Methods

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


## Development

``` bash
$ git clone https://github.com/xlsdg/vue-odometer.git vue-odometer
$ cd vue-odometer && npm i && npm run dev
```

Then open `http://localhost:8080/` to see the demo.

# License

MIT
