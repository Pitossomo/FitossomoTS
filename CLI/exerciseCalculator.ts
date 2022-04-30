import { calculateExercise, parseCLIArgs } from "../exercises"

try {

  // assign properties to variables (daily_exercises assigned to variable exercises, used as an alias)
  const { target, daily_exercises: exercises } = parseCLIArgs(process.argv)

  console.log(calculateExercise(exercises, target))

} catch (error: unknown) {

  let errorMessage = 'Something bad happened.'

  if (error instanceof Error) {
    errorMessage += ' Error ' + error.message
  }

  console.log(errorMessage)
}