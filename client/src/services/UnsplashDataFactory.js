import Unsplash , { toJson } from 'unsplash-js';

exports.init = () =>
{
    fetch('/api/v1/UnsplashConfigs')
        .then(response => {
            console.log(response)
        })
        .catch(e => {
           console.log(e);
        });
};