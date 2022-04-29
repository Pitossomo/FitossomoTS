import { calculateBMI, parseCLIArgs } from "../bmi";

try {

  const { height, weight } = parseCLIArgs(process.argv)

  console.log(calculateBMI(height, weight))

} catch (error: unknown) {

  let errorMessage = 'Something bad happened.'

  if (error instanceof Error) {
    errorMessage += ' Error ' + error.message;
  }

  console.log(errorMessage)
}