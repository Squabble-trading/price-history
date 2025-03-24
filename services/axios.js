const axios = require("axios");
const apiURL = process.env.FMP_API_URL;

exports.fmpapiV3 = axios.create({
  baseURL: apiURL + "/v3/",
  params: {
    apikey: process.env.FMP_API_KEY
  }
});

exports.fmpapiV4 = axios.create({
    baseURL: apiURL + "/v4/",
    params: {
        apikey: process.env.FMP_API_KEY
    }
    });