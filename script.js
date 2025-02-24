// Function to fetch Bitcoin price
function fetchBitcoinPrice() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            document.getElementById('bitcoin-price').innerText = `$${data.bitcoin.usd}`;
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Fetch price on page load
fetchBitcoinPrice();

// Update price every 60 seconds
setInterval(fetchBitcoinPrice, 60000);
