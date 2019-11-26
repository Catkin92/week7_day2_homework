import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      exchangeRates: null,
      selectedRate: null,
      selectedRate2: null,
      inputtedAmount: null,
      inputtedAmount2: null,
      exchanged: null
    },
    mounted(){
      this.exchangeRate();
    },
    methods: {
      exchangeRate: function() {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(info => this.exchangeRates = info.rates)
      },
      euroExchange: function() {
        const money = (this.inputtedAmount) * (this.selectedRate);
        this.exchanged = money.toFixed(2);

      },
      otherExchange: function() {
        const money = ((this.inputtedAmount2) / (this.selectedRate2));
        this.exchanged = `€${money.toFixed(2)}`;
      }
    }

  });

})
