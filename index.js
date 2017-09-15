const ReweClient = require('./client')

let client = new ReweClient();

client.fetchOffers().then((data) => {
    console.log(data);
});