const createMongoClient = require("../shared/mongo");

module.exports = async (context, req) => {
  const { db, connection } = await createMongoClient();
  console.log("All");
  const Dishes = db.collection("dishes");
  const res = await Dishes.find({});
  const body = await res.toArray();

  connection.close();

  context.res = {
    status: 200,
    body,
  };
};
