module.exports.getUser = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.findOne('administration', opts);

    return data;
}

module.exports.getUsers = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.find('administration', opts);

    return data;
}

module.exports.saveUser = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.insert('administration', opts);

    return data;
}

module.exports.updateUser = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.update('administration', opts);

    return data;
}

module.exports.removeUser = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.deleteOne('administration', opts);

    return data;
}