import { connect } from "mongoose";

const dbName = "bootcamp-midudev";

const conectionString = `mongodb+srv://toniidev:Madrona5.mongodb@cluster0.4y6oqse.mongodb.net/${dbName}`;

connect(conectionString)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });

// mongoose.connection.on("connected", () => {
//   console.log("Conexión establecida a MongoDB");
// });

// mongoose.connection.on("error", (error) => {
//   console.error("Error de conexión a MongoDB:", error);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("Conexión a MongoDB cerrada");
// });

async function connectToDatabase() {
  try {
    await connect(conectionString)
      .then(() => {
        console.log("Conexión a MongoDB exitosa");
      })
      .catch((error) => {
        console.error("Error al conectar a MongoDB:", error);
      });
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
}

export default connectToDatabase;
