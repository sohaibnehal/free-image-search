
exports.getUnsplashCredentials = () => {
    return {
        application_id : process.env.APPLICATION_ID,
        secret : process.env.SECRET
    };
};
