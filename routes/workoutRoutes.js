const router = require("express").Router();
const { Workout } = require("../models");

// GET all workouts
router.get("/workouts", (req, res) => {
  Workout.find()
    .then((workout) => res.json(workout))
    .catch((err) => console.log(err));
});

// GET all workout on /range
router.get("/workouts/range", (req, res) => {
  Workout.find()
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => console.log(err));
});

// POST one workout
router.post("/workouts", (req, res) => {
  Workout.create(req.body)
    .then((workout) => res.json(workout))
    .catch((err) => console.log(err));
});

// PUT one workout
router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});

module.exports = router;
