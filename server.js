const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/machanicRoutes");
const routerCarBrand = require('./routes/carBrandRoutes')
const routerCarModel = require('./routes/carModelRoutes')
const app = express();

app.use(express.json());

app.use("/machanic", router);
app.use("/carmodel", routerCarModel);
app.use("/carbrand", routerCarBrand);

// app.get("/", async (req, res) => {
//   const machanic = await Machanic.find({});
//   res.status(200).json({
//     data: machanic,
//     count: machanic.length,
//   });
// });

mongoose.connect(
  "mongodb+srv://usman:1122@cluster0.wuqqy.mongodb.net/test",
  () => {
    console.log("db is connected");
  }
);

app.listen(3000, () => {
  console.log("server is listining on port 3000");
});

// const express = require("express");
// const mongoose = require("mongoose");
// const Machanic = require("./model/mechanic");
// const app = express();
// app.use(express.json());

// port = 3000;
// app.get("/", (req, res) => {
//   res.send("saas");
// });

// app.get("/machanic", async (req, res) => {
//   try {
//     const machanic = await Machanic.find({});
//     res.status(200).json({
//       data: " machanic",
//       count: " machanic.length",
//     });
//   } catch (error) {
//     res.send(error.message);
//   }
// });
// // app.post("/machanic", async (req, res) => {
// //   try {
// //     console.log(req.body);
// //     const { name } = req.body;
// //     const machanic = await Machanic.create({ name: req.body.name });
// //     res.status(200).json({
// //       success: true,
// //       machanic: machanic,
// //     });
// //   } catch (error) {
// //     res.send(error.message);
// //   }
// // });
// mongoose.connect(
//   "mongodb+srv://gill:gill@cluster0.wuqqy.mongodb.net/task",
//   () => {
//     console.log("db is connected");
//   }
// );

// app.listen(port, () => {
//   console.log("server is running fine");
// });
