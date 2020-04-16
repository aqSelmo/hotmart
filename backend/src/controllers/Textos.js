const assert = require('assert');
const crypto = require('crypto');

module.exports.getText = async (application, request, response) => {
    try {
        assert(request.headers.authorization);
        const data = await application.src.models.Textos.getText(application, request.params);

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

module.exports.getTexts = async (application, request, response) => {
    try {
        assert(request.headers.authorization);
        const data = await application.src.models.Textos.getTexts(application, {});

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

module.exports.saveText = async (application, request, response) => {
    const Data = new Date;
    try {
        assert(request.headers.authorization);

        const data = await application.src.models.Textos.saveText(application, {
            "title": request.body.title,
            "subtitle" : request.body.subtitle,
            "author" : request.body.author,
            "text" : request.body.text,
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

module.exports.updateText = async (application, request, response) => {
    try {
        assert(request.headers.authorization);

        const data = await application.src.models.Textos.updateText(application, {
            _id : request.body._id,
            fields : request.body.fields
        });

        return response.json({
            "status" : "200",
            "result" : {
                "data" : data.value,
                "updatedId" : request.body._id
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

module.exports.removeText = async (application, request, response) => {
    try {
        assert(request.headers.authorization);

        const data = await application.src.models.Textos.removeText(application, request.params);

        return response.json({
            "status" : "200",
            "result" : {
                "removedId" : request.params._id
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