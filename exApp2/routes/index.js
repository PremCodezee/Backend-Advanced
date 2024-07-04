var express = require("express");
var router = express.Router();

const userModel = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  const userData = await userModel.create({
    name: "jatka Pan masala",
    nickname: "jatka Pan masala",
    description: "jatka Pan masala",
    categories: ["student", "student2"],
  });

  res.send(userData);
});

router.get("/read", async function (req, res) {
  const userData = await userModel.find();
  res.send(userData);
});

// find document by name
// router.get("/find", async function (req, res) {
//   const regex = new RegExp("jAt", "i")
//   const userData = await userModel.find({name: regex})
//   res.send(userData);
// })

// find document by array
// router.get("/find", async function (req, res) {
//   const userData = await userModel.find({categories: {$all: ["student"]}})
//   res.send(userData);
// })

// find document by date
// router.get("/find", async function (req, res) {
//   const date1 = new Date("2023-10-2");
//   const date2 = new Date("2024-10-3");
//   const userData = await userModel.find({
//     dateCreated: { $gte: date1, $lte: date2 },
//   });
//   res.send(userData);
// });

// find document by existence
// router.get("/find", async function (req, res) {
//   const userData = await userModel.find({ categories: { $exists: true } });
//   res.send(userData);
// });

// find document by specific field and length
// router.get("/find", async function (req, res) {
//   const userData = await userModel.find({
//     $expr: {
//       $and: [
//         { $gte: [{ $strLenCP: "$nickname" }, /* minimum fields => */ 0] },
//         { $lte: [{ $strLenCP: "$nickname" }, /* maximum fields => */ 10] },
//       ],
//     },
//   });
//   res.send(userData);
// });

router.get("/delete", async function (req, res) {
  const userData = await userModel.deleteMany();
  res.send(userData);
});

module.exports = router;
