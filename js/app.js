'use strict';
function updateExchangeRates(update) {
    const newDate = document.getElementById('date');
    newDate.textContent = update.date;
    const newUsdBuyRate = document.getElementById('usd-buy-rate');
    newUsdBuyRate.textContent = update.usd.buyRate;
    const newUsdSellRate = document.getElementById('usd-sell-rate');
    newUsdSellRate.textContent = update.usd.sellRate;
    const newEurBuyRate = document.getElementById('eur-buy-rate');
    newEurBuyRate.textContent = update.eur.buyRate;
    const newEurSellRate = document.getElementById('eur-sell-rate');
    newEurSellRate.textContent = update.eur.sellRate;
}
const update = {
    date: '26 июля',
    usd: {
        buyRate: '74,75',
        sellRate: '76,24',
    },
    eur: {
        buyRate: '87,70',
        sellRate: '89,74',
    },
};
updateExchangeRates(update);