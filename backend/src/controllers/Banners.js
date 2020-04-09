const assert = require('assert');
const crypto = require('crypto');

module.exports.getBanner = async (application, request, response) => {
    try {
        assert(request.headers.authorization);
        const data = await application.src.models.Banners.getBanner(application, request.params);

        return response.json({
            "status" : "200",
            "result" : {
                "data" : data
            },
            "err" : {}
        })
    } catch (err) {
        return response.status(401).json({
            "status" : "401",
            "err" : {
                "msg" : "Unauthorized"
            }
        })
    }
}

module.exports.getBanners = async (application, request, response) => {
    try {
        assert(request.headers.authorization);
        const data = await application.src.models.Banners.getBanners(application, {});

        return response.json({
            "status" : "200",
            "result" : {
                "data" : data
            },
            "err" : {}
        })
    } catch (err) {
        return response.status(401).json({
            "status" : "401",
            "err" : {
                "msg" : "Unauthorized"
            }
        })
    }
    
}