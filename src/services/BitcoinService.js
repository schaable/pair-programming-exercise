import axios from 'axios';

const mapToPrice = (bpiPrice) => {
    return {
        code: bpiPrice.code,
        description: bpiPrice.description,
        currentRate: bpiPrice.rate_float
    };
};

const BASE_URL = 'https://api.coindesk.com/v1/bpi';

export class BitcoinService {
    
    // https://www.coindesk.com/api/
    getPrice(currency) {
        // TODO: get bpi for given currency
    }    

    getPrices() {
        return new Promise((resolve, reject) => {
            axios.get(`${BASE_URL}/currentprice.json`)
                .then(response => {
                    if (response.data && response.data.bpi) {
                        resolve({   
                            EUR: mapToPrice(response.data.bpi.EUR),
                            GBP: mapToPrice(response.data.bpi.GBP),
                            USD: mapToPrice(response.data.bpi.USD)
                        });
                    } else {
                        reject('No Bitcoin prices available');
                    }
                });
        });
    }
}