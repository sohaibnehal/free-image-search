/**
 * Created by sohaibnehal on 21/10/2017.
 */

var config = require('./config/config');

module.exports = (app) => {

    app.get('/api/v1/UnsplashConfigs', (req, res) => {
        res.send({
            application_id : config.getUnsplashCredentials().application_id,
            secret : config.getUnsplashCredentials().secret
        }, 200);
    });


};