

const axios = require('axios');



export function getCoinHistoricalPrice(coinId) {
  const apiHistorical = "https://api.coingecko.com/api/v3/coins/" + coinId + "/market_chart?vs_currency=usd&days=30"

  const api = apiHistorical

  try {
    let response = axios.get(api, {});
    return response;
  } catch(ex) {
    // error
    console.warn(ex);
  }
}