<template>
<div id='app' class="">
  <div class="container">
    <div class="col-lg-4">
      <m-card>
        <card-media class="bg-primary text-center">
          <img src="">
        </card-media>
        <card-title>
          <h4>Card Title</h4>
        </card-title>
        <card-body>
          <span>Some random text Some randrandom text Some randrandom
            text Some randrandom text Some randrandom text Some
            randrandom text Some randrandom text Some randrandom text
            Some randrandom text Some randrandom text Some randrandom
            text Some randrandom text Some randrandom text Some
            randrandom text Some randrandom text Some randrandom text
            Some randrandom text Some randrandom text Some randrandom
            text Some random text Some random text</span>
        </card-body>
        <card-actions class="bg-light border text-center">
          <button class="btn btn-outline-primary mt-3 mb-3">Click Me!</button>
        </card-actions>
      </m-card>

    </div>
    <div class="col-lg-4">
      <m-card>
        <card-media class="bg-primary text-center">
          <img src="">
        </card-media>
        <card-title>
          <h4>Card Title</h4>
        </card-title>
        <card-body>
          <span>asdas</span>
        </card-body>
        <card-actions class="bg-light border text-center">
          <button class="btn btn-outline-primary mt-3 mb-3">Click Me!</button>
        </card-actions>
      </m-card>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      governmentName: 'Ministerul Republicii Moldova',
      langJson: {
        ro: 'Română',
        en: 'Enlgish',
        ru: 'Руский'
      },
      langJson2: ['a', 'b'],
      currentCulture: localStorage['currentLanguage'] || 'ro'
    }
  },
  methods: {
    changeLanguage(language) {
      let values,
        output = {}
      for(values in this.langJson) {
        if(this.langJson.hasOwnProperty(values)) {
          output[this.langJson[values]] = values
        }
      }
      localStorage['currentLanguage'] = output[language]
      this.currentCulture = output[language]
    },
    goTo(path) {
      this.$router.push(path)
    }
  }
}
</script>
