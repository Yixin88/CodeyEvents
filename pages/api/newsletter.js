import { MongoClient } from 'mongodb';

async function connectDatabase() {
  const client = await MongoClient.connect('mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/events?retryWrites=true&w=majority');

  return client
}

async function insectDocument(client, document) {
  const db = client.db();

  await db.collection('newsletter').insertOne(document)
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({message: 'Connecting to the database failed!'})
      return;
    }

    try {
      await insectDocument(client, {email: userEmail})
      client.close();
    } catch (error) {
      res.status(500).json({message: 'Inserting data failed!'})
      return;
    }


    res.status(201).json({ message: 'Signed Up!'})
  }
}