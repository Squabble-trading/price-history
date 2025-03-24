const { fmpapiV3,fmpapiV4 } = require("../services/axios");

exports.getHistoricalPrices = async (params) => {
    try{
        const date = new Date();
        const lastYear = new Date(date);
        lastYear.setFullYear(lastYear.getFullYear() - 1);
        const from = lastYear.toISOString().split('T')[0];
        const today = date.toISOString().split('T')[0];
        const timeframe = params.timeframe || '4hour';
        const symbol = params.symbol || "AAPL";
        const response = await fmpapiV3.get("historical-chart/"+ timeframe +'/'+ symbol, {
            params: {
                from: params.from || from,
                to: params.to || today,
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