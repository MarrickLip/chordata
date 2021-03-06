import { Collection, MongoClient } from 'mongodb';

const uri = `mongodb+srv://admin:${process.env.DB_PASSWORD}@chordata.v9yqd.mongodb.net/chordata?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	loggerLevel: 'debug',
});

let connection = undefined;

async function getCollection(name: string) {
	connection = connection ?? (await client.connect());
	return client.db('chordata').collection(name);
}

export const db = {
	projects: async (): Promise<Collection> => getCollection('projects'),
	deployments: async (): Promise<Collection> => getCollection('deployments'),
};
