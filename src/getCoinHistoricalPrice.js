const axios = require('axios');
// const fetch = require('node-fetch');
const cache = {}

function padZeroes(number) {
  return ('0' + number).slice(-2)
}

function toApiDate(date){
  return date.getFullYear() + "-" + padZeroes(date.getMonth()) + "-" + padZeroes(date.getDate()) + "T" + padZeroes(date.getHours()) + ":" + padZeroes(date.getMinutes()) + ":" + padZeroes(date.getSeconds())
}

export async function getCoinHistoricalPrice(coinId, date, resolution) {
  const coinapiKey = "399C7349-0751-4A35-ACD6-D595E4207A43"

  const url = "https://rest.coinapi.io/v1/ohlcv/" + coinId +"/history?period_id=" +resolution+ "&apikey=" + coinapiKey + "&time_end=" + toApiDate(date)
  
  if (cache[url]) { //this caching might have a problem if a user keeps a tab open and views it the a few days later. Improvement: cache expiry
    return cache[url]
  } else {
    try {
      console.log("getCoinHistoricalPrice.url", url);
      let response = await axios.get(url);
      console.log("getCoinHistoricalPrice.response.data", response.data);
      let data = response.data
      
      let priceData = data.map(t => {
        let u = [new Date(t.time_period_start).getTime(), t.price_open, t.price_high, t.price_low, t.price_close]
        return u
      }).sort(function(a, b) {
        return a[0] - b[0];
      });
      
      let volumeData = data.map(t => {
        let u = [new Date(t.time_period_start).getTime(), t.volume_traded]
        return u
      }).sort(function(a, b) {
        return a[0] - b[0];
      });
      
      
      
      cache[url] = {priceData: priceData, volumeData: volumeData}
      return cache[url];
    } catch(ex) {
      // error
      console.error(url);
      console.error(ex);
    }
  }
  
}