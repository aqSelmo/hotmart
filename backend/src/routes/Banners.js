module.exports = application => {
    application.get('/banners/listar', (request, response) => application.src.controllers.Banners.getBanners(application, request, response));
    application.get('/banners/listar/:_id', (request, response) => application.src.controllers.Banners.getBanner(application, request, response));
}