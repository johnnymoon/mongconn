
const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://johnyisa55:o9rYjkOBBYAStQx1@cluster0.wt56q3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = "mongodb+srv://johnyisa55:o9rYjkOBBYAStQx1@cluster0.wt56q3k.mongodb.net/?retryWrites=true&w=majority&ssl=true&appName=Cluster0";
//const uri = "mongodb+srv://johnyisa55:o9rYjkOBBYAStQx1@cluster0.wt56q3k.mongodb.net/?retryWrites=true&w=majority&ssl=true&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

            await listDatabases(client);


  } finally {
    // Ensures that the client will close when you finish/error
  //  await client.close();

  //
  }
}
run().catch(console.dir);



/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};