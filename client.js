'use strict';

const rp = require('request-promise');

module.exports = class ReweClient {

    constructor() {
        this._options = {
            uri: 'https://mobile-api.rewe.de/products/offer-search',
            json: true
        }
    }

    fetchOffers() {
        return rp(this._options);
    }
}
