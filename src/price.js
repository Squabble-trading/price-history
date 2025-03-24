const { getHistoricalPrices } = require("../api");

exports.getPriceHistory = async (event) => {
  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' })
  };

};
