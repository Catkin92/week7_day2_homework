import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      exchangeRates: null
    },
    mounted(){
      this.exchangeRate();
    },
    methods: {
      exchangeRate: function() {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(info => this.exchangeRates = info.rates)
      }
    }

  });

})
