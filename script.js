window.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(data => {
                // Get the USD price
                const btcPrice = parseFloat(data.bpi.USD.rate_float);
                const formattedPrice = btcPrice.toFixed(2);

                // Select the btc-price element
                const btcPriceElement = document.querySelector('#btc-price');
                // Update the element's text content
                btcPriceElement.textContent = `$${formattedPrice}`;
                console.log(btcPrice);
                console.log(formattedPrice);
            });
    }, 1000); // Update every 5 seconds
});

