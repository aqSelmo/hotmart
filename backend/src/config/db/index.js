const config = require('./config');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://"+config.user+":"+config.password+"@postsdb01-apm8n.mongodb.net/test?retryWrites=true&w=majority";

function dbConn(){
    this.connect = async ()=>{
        const client = new MongoClient(uri, { useUnifiedTopology: true });

        await client.connect();
        return client;
    }

    this.insert = async (collName, opts)=>{
        let client = await this.connect();
        let db = await client.db(config.dbName);
        let data = await db.collection(collName).insertOne(opts);

        client.close();
        return data;
    }

    this.insertMany = async (collName, opts)=>{
        let client = await this.connect();
        let db = await client.db(config.dbName);
        let data = await db.collection(collName).insertMany(opts);

        client.close();
        return data;
    }

    this.aggregate = async (collName, opts)=>{
        let client = await this.connect();
        let db = await client.db(config.dbName);
        let data = await db.collection(collName).aggregate(opts).toArray();

        client.close();
        return data;
    }

    this.find = async (collName, opts)=>{
        let client = await this.connect();
        let db = await client.db(config.dbName);
        let data = await db.collection(collName).find(opts ? opts : "").toArray();

        client.close();
        return data;
    }

    this.findOne = async (collName, opts)=>{
        let client = await this.connect();
        let db = await client.db(config.dbName);
        let data = await db.collection(collName).findOne({_id : ObjectId(opts._id)});

        client.close();
        return data;
    }

    this.update = async (collName, opts)=>{
        let client = await this.connect();
        let db = await client.db(config.dbName);
        let data = await db.collection(collName).findOneAndUpdate({_id : ObjectId(opts._id)}, {$set : opts.fields});

        client.close();
        return data;
    }

    this.deleteOne = async (collName, opts)=>{
        let client = await this.connect();
        let db = await client.db(config.dbName);
        let data = await db.collection(collName).deleteOne({_id : ObjectId(opts._id)});

        client.close();
        return data;
    }

}

module.exports = ()=>{
    return dbConn;
}