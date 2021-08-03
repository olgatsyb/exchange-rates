'use strict';

function refreshRates() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9999/api/hw13', false);
    xhr.send();
    const data = JSON.parse(xhr.responseText);
    dateEl.textContent = data.date;
    usdBuyRateEl.textContent = data.usd.buyRate;
    usdSellRateEl.textContent = data.usd.sellRate;
    eurBuyRateEl.textContent = data.eur.buyRate;
    eurSellRateEl.textContent = data.eur.sellRate;
}

const dateEl = document.getElementById('date');
const usdBuyRateEl = document.getElementById('usd-buy-rate');
const usdSellRateEl = document.getElementById('usd-sell-rate');
const eurBuyRateEl = document.getElementById('eur-buy-rate');
const eurSellRateEl = document.getElementById('eur-sell-rate');

refreshRates()