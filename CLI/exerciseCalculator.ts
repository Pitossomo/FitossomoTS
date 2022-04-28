import { calculateExercise, parseExerciseArgs } from "../exercises";

try {

  const { target, exercises } = parseExerciseArgs(process.argv)

  console.log(calculateExercise(exercises, target))

} catch (error: unknown) {

  let errorMessage = 'Something bad happened.'

  if (error instanceof Error) {
    errorMessage += ' Error ' + error.message;
  }

  console.log(errorMessage)
}