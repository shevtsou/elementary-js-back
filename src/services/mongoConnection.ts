import { Db, MongoClient } from "mongodb";

class MongoConnection {

    client: MongoClient;
    db: Db;

    async init() {
        const MONGO_DB = 'mongodb://127.0.0.1/elementary_db';
        this.client = await MongoClient.connect(MONGO_DB);
        console.log('MONGO CONNECTION ESTABLISHED')
        this.db = mongoConnection.client.db('elementary_db')
    }

}



export const mongoConnection = new MongoConnection();
