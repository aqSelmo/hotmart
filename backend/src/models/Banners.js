module.exports.getBanner = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.findOne('banners', opts);

    return data;
}

module.exports.getBanners = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.find('banners', opts);

    return data;
}

module.exports.saveBanner = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.insert('banners', opts);

    return data;
}

module.exports.removeBanner = async (application, opts) => {
    const Mongo = new application.src.config.db.index;
    const data = await Mongo.deleteOne('banners', opts);

    return data;
}