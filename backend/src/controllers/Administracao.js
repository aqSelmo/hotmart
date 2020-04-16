const assert = require('assert');
const crypto = require('crypto');

module.exports.getLogin = async (application, request, response) => {
    const data = await application.src.models.Administracao.getUsers(application, {
        "login" : request.body.login,
        "password" : crypto.createHash('md5').update(request.body.password).digest('hex')
    });

    try {
        assert(data.length);

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
module.exports.getUser = async (application, request, response) => {
    try {
        assert(request.headers.authorization);
        const data = await application.src.models.Administracao.getUser(application, request.params);

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

module.exports.getUsers = async (application, request, response) => {
    try {
        assert(request.headers.authorization);
        const data = await application.src.models.Administracao.getUsers(application, {});

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

module.exports.saveUser = async (application, request, response) => {
    const Data = new Date;
    try {
        assert(request.headers.authorization);

        const data = await application.src.models.Administracao.saveUser(application, {
            "name": request.body.name,
            "lastname" : request.body.lastname,
            "phone" : request.body.phone,
            "login" : request.body.login,
            "password" : crypto.createHash('md5').update(request.body.password).digest('hex'),
            "description" : request.body.description,
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

module.exports.updateUser = async (application, request, response) => {
    try {
        assert(request.headers.authorization);

        const data = await application.src.models.Administracao.updateUser(application, {
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

module.exports.removeUser = async (application, request, response) => {
    try {
        assert(request.headers.authorization);

        const data = await application.src.models.Administracao.removeUser(application, request.params);

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