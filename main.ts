import knex from "knex";

const client = knex({
  client: "better-sqlite3",
  connection: {
    filename: "./db.sqlite",
  },
  useNullAsDefault: true,
});

client.client.acquireConnection().then((connection) => {
  console.log(connection.query);
});
