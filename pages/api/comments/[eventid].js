import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection(eventId).insertOne(newComment);

    newComment.id = result.insertedId;

    const documents = await db
      .collection(eventId)
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(201).json({ message: "Added Comment.", comment: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();

    const documents = await db
      .collection(eventId)
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }

  client.close();
}
