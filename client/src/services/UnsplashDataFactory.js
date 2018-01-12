const UnsplashDataFactory = {
    init() {
        return fetch('/api/v1/UnsplashConfigs')
            .then(response => response.json())
            .catch(e => {
                console.log(e);
            });
    }
};

export default UnsplashDataFactory;