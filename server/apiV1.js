
const request = require("request");
const config = require('./config/config');

const HOST = 'https://api.unsplash.com/';
const { applicationId } = config.getUnsplashCredentials();

module.exports = (app) => {

    app.post('/api/v1/searchPhotos', (req, res) => {
        let { searchKey, activePage } = req.body;

        let url = `${HOST}/search/photos?page=${activePage || 1}&query=${searchKey}&client_id=${applicationId}`;
        let options = {
            method: 'GET',
            url: url
        };

        if (searchKey) {
            console.log(`Fetching Unsplash Data Using page: ${activePage} and query: ${searchKey}`);
            request(options, function (error, response, body) {
                if (error || response.statusCode !== 200) {
                    console.log(error);
                } else {
                    let data = JSON.parse(body);
                    res.status(200).send(data);
                }
            });
        }
         else {
            let error = new Error("Search Key is required!");
            res.status(400).send(error);
        }
    });
};