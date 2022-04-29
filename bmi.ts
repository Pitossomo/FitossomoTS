import { ParsedQs } from "qs"

export const calculateBMI = (height: number, weight: number): string => {
  const bmi = weight / Math.pow(height / 100, 2)

  let category: string

  if (bmi < 18.4) category = 'Underweight'
  else if (bmi < 25.0) category = 'Normal'
  else if (bmi < 30) category = 'Overweight'
  else category = 'Obese'

  return category
}

interface BMIValues {
  height: number,
  weight: number
}

export const parseCLIArgs = (args: Array<string>): BMIValues => {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  const height = Number(args[2])
  const weight = Number(args[3])

  if (!isNaN(height) && !isNaN(weight)) {
    return {
      height,
      weight
    }

  } else {
    throw new Error("Provided arguments were not numbers")

  }
}

interface BMIResponse {
  height: number,
  weight: number,
  category: string
}

interface ErrorMessage {
  error: string
}

export const handleGETRequest = (query: ParsedQs): (BMIResponse | ErrorMessage) => {
  try {
    const height = Number(query.height)
    const weight = Number(query.weight)

    if (isNaN(height) || isNaN(weight)) throw new Error('malformatted parameters')

    const category: string = calculateBMI(height, weight)

    return { height, weight, category }

  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.'

    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message
    }

    return { error: errorMessage }
  }
}