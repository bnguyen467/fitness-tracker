const { model, Schema } = require("mongoose");

const Workout = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          require: true,
        },
        name: {
          type: String,
          trim: true,
          require: true,
        },
        duration: {
          type: Number,
          require: true,
        },
        weight: {
          type: Number,
          require: false,
        },
        reps: {
          type: Number,
          require: false,
        },
        sets: {
          type: Number,
          require: false,
        },
        distance: {
          type: Number,
          require: false,
        },
      },
    ],
  },
  { toJSON: { virtuals: true } }
);

Workout.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

module.exports = model("Workout", Workout);
