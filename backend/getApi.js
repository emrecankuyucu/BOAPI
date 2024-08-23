const axios = require('axios');

class parityOne{
    constructor(parite,sonFiyat){
        this.parite = parite;
        this.sonFiyat = sonFiyat;

}};

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

    // const par1=new parityOne(data.symbol, data.priceChange)

    return data ;

  } catch (error) {
    console.error('Hata:', error.message);
  }
}
async function getAllPairs() {
    try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
        
        const data = response.data;

        data.forEach(pair => {
            console.log(`Symbol: ${pair.symbol}, Price: ${pair.price}`);
        });

        return data;

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

