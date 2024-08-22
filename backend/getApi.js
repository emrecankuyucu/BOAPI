const axios = require('axios');

async function getBinancePairInfo(symbol) {
  try {
    const response = await axios.get('https://api.binance.com/api/v3/ticker/24hr', {
      params: { symbol: symbol }
    });

    const data = response.data;
    console.log(`Parite: ${data.symbol}`);
    console.log(`Son Fiyat: ${data.lastPrice}`);
    console.log(`24 Saatlik Değişim: ${data.priceChangePercent}%`);
    console.log(`24 Saatlik En Yüksek: ${data.highPrice}`);
    console.log(`24 Saatlik En Düşük: ${data.lowPrice}`);
    console.log(`24 Saatlik İşlem Hacmi: ${data.volume}`);

  } catch (error) {
    console.error('Hata:', error.message);
  }
}
async function getAllPairs() {
    try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
        
        const pairs = response.data;

        pairs.forEach(pair => {
            console.log(`Symbol: ${pair.symbol}, Price: ${pair.price}`);
        });
    } catch (error) {
        console.error('Error fetching pairs:', error.message);
    }
}

// Örnek kullanım
// getBinancePairInfo('BTCUSDT');

module.exports = {
    getBinancePairInfo,
    getAllPairs
};