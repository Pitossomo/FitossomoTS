interface Exercises {
  periodLength: number,
  trainingDays: number,
  dailyTarget: number,
  success: boolean,
  average: number,
  rating: number,
  description: string
}

export const calculateExercise = (dailyExercises: Array<number>, dailyTarget: number): Exercises => {
  const average = dailyExercises.reduce((sum, h) => sum + h, 0) / dailyExercises.length
  const rating = 2 * Math.min(average, dailyTarget) / dailyTarget + 1
  const shortDescription = rating > 2 ? "GOOD" : "NOT ENOUGH"

  return {
    periodLength: dailyExercises.length,
    trainingDays: dailyExercises.filter(h => h > 0).length,
    dailyTarget,
    average: average,
    success: average > dailyTarget,
    rating,
    description: `Your rating of ${rating.toFixed(2)}/3 was ${shortDescription}`
  }
}

interface ExerciseValues {
  target: number,
  daily_exercises: Array<number>
}

export const parseCLIArgs = (args: Array<string>): ExerciseValues => {
  if (args.length < 4) throw new Error('Not enough arguments')

  const target = Number(process.argv[2])
  const exercises: Array<number> = process.argv.slice(3).map(arg => Number(arg))

  if (isNaN(target) || exercises.some(val => isNaN(val))) {
    throw new Error("Provided arguments were not numbers")
  } else {
    return {
      target,
      daily_exercises: exercises
    }
  }
}

interface ErrorMessage {
  error: string
}

export const handlePOSTRequest = (body: ExerciseValues): Exercises | ErrorMessage => {
  try {
    if (!body.target || !body.daily_exercises) {
      throw new Error("parameters missing")
    }

    const target = Number(body.target)
    const exercises = body.daily_exercises

    if (isNaN(target) || exercises.some(ex => typeof ex !== "number")) {
      throw new Error("malformatted parameters")
    }

    return calculateExercise(exercises, target)

  } catch (error: unknown) {
    let errorMessage = ''

    if (error instanceof Error) {
      errorMessage += error.message
    }

    return { error: errorMessage }
  }
}