import { calculateExercise, parseCLIArgs } from "../exercises"

try {

  const { target, exercises } = parseCLIArgs(process.argv)

  console.log(calculateExercise(exercises, target))

} catch (error: unknown) {

  let errorMessage = 'Something bad happened.'

  if (error instanceof Error) {
    errorMessage += ' Error ' + error.message
  }

  console.log(errorMessage)
}