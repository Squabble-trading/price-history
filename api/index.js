const { fmpapiV3,fmpapiV4 } = require("../services/axios");

export const getHistoricalPrices = async (params) => {
    try{
        const response = await fmpapiV3.get("historical-chart/"+ params.timeframe +'/'+ params.symbol, {
            params: {
                from: params.from,
                to: params.to,
                extended: params.extended || false
            }
        });
        return response.data;

    }catch(err){
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err })
        };
    }
};