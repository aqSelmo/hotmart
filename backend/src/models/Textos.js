module.exports.getText = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.findOne('texts', opts);

    return data;
}

module.exports.getTexts = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.find('texts', opts);

    return data;
}

module.exports.saveText = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.insert('texts', opts);

    return data;
}

module.exports.updateText = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.update('texts', opts);

    return data;
}

module.exports.removeText = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.deleteOne('texts', opts);

    return data;
}