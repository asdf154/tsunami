

const axios = require('axios');
const myKey = "2612eb41-4327-490e-8226-eee1729bf2dd"



export function getCoinHistoricalPrice(coinId) {
  const apiHistorical = "https://api.coingecko.com/api/v3/coins/" + coinId + "/market_chart?vs_currency=usd&days=30"

  const key = myKey
  const api = apiHistorical

  try {
    let response = axios.get(api, {});
    return response;
  } catch(ex) {
    // error
    console.warn(ex);
  }
}