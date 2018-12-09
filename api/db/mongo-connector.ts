import { MongoClient, Db } from 'mongodb';
import config from 'config';

let mongoDB;
//change the mongo
const MONGO_URL: string = config.get("mongodb");

const initMongoClient = async (): Promise<Db> => {
  try {
    mongoDB = await MongoClient.connect(MONGO_URL);
  }
  catch (e) {
    console.error('cannot connect to db', e);
  }
  return mongoDB;
};


export const getMongoClient = async (): Promise<Db> => {
  if (!mongoDB) {
    await initMongoClient();
  }
  return mongoDB;
};

export const links = async () => {
  const db = await getMongoClient();
  return {
    restaurants: db.collection('restaurants'),
    geores: db.collection('geores'),
  }
}

export const setupDb = async() => {
  const db = await getMongoClient();
  const restaurant = db.collection('restaurants').createIndex({ 'geotag.coordinates': '2dsphere' });
  const geores = db.collection('geores').createIndex({ 'geotag.coordinates': '2dsphere' });
  return await Promise.all([restaurant, geores]);
}