import {MongoClient} from 'mongodb'
//     /api/new-meetup
//     POST /api/new-meetup


async function handler(req,res) {
 if(req.method === 'POST'){
  const data = req.body;
//   const {title,image,address, description} = data;
 const client = await MongoClient.connect('mongodb+srv://ahsansatti786:ahsansatti786@cluster0.uxswwop.mongodb.net/meetups?retryWrites=true&w=majority')
 const db = client.db();

 const meetupsCollection = db.collection('meetups')
 const result=await meetupsCollection.insertOne(data);
 console.log(result);
 client.close();

 res.status(201).json({message: "Meetup inseted"});
 }
}
export default handler