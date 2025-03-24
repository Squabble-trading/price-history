const { getHistoricalPrices } = require("../api");

exports.getPriceHistory = async (event) => {
  
  try{
    const params = event.queryStringParameters;
    const response = await getHistoricalPrices(params);
    return {
      statusCode: 200,
      data: response
    };

  }catch(err){
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err })
    };
  }

};
