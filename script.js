window.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(data => {
                // Get the USD price
                const btcPrice = data.bpi.USD.rate_float;
                // Select the btc-price element
                const btcPriceElement = document.querySelector('#btc-price');
                // Update the element's text content
                btcPriceElement.textContent = `$${btcPrice}`;
                console.log(btcPrice)
            });
    }, 5000); // Update every 5 seconds
});

