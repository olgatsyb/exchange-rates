'use strict';
function handleSubmit() {
//    evt.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9999/api/hw13', false);
    xhr.send();
    if (xhr.status !== 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        alert(xhr.responseText); // responseText -- текст ответа.
    }
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
handleSubmit()