const assert = require('assert');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

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

module.exports.saveBanner = async (application, request, response) => {
    const Data = new Date;
    try {
        assert(request.headers.authorization);

        const file = request.files.file;
        const fileName = crypto.createHash('md5').update(file.name).digest('hex') + path.extname(file.name);

        file.mv(`./../public/uploads/${fileName}`, err => {});

        const data = await application.src.models.Banners.saveBanner(application, {
            "filename": file.name,
            "src" : fileName,
            "size" : file.size,
            "timestamp" : Data.toTimeString()
        });

        return response.json({
            "status" : "200",
            "result" : {
                "data" : data.ops,
                "insertedID" : data.insertedId
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

module.exports.removeBanner = async (application, request, response) => {
    try {
        assert(request.headers.authorization);

        const data = await application.src.models.Banners.getBanner(application, request.params);
        
        if(data.src) {
            fs.unlink(`./../public/uploads/${data.src}`, err => {});
            await application.src.models.Banners.removeBanner(application, request.params);
        }

        return response.json({
            "status" : "200",
            "result" : {
                "removedId" : request.params._id
            },
            "err" : {}
        })
    } catch (err) {
        console.log(err)
        return response.status(401).json({
            "status" : "401",
            "err" : {
                "msg" : "Unauthorized"
            }
        })
    }
    
}