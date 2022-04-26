interface Exercises {
  totalDays: number,
  trainingDays: number,
  dailyTarget: number,
  averageTraining: number,
  reachedTarget: boolean,
  rating: number,
  description: string
}

const ratingDescription = (rating:number) => {
  if (rating > 2) ""
}

const calculateExercise = (dailyExercises: Array<number>, dailyTarget: number): Exercises => {
  const averageTraining = dailyExercises.reduce((sum, h) => sum+h,0)/dailyExercises.length
  const rating = 2*Math.min(averageTraining, dailyTarget)/dailyTarget + 1
  const shortDescription = rating > 2 ? "GOOD" : "NOT ENOUGH"

  return {
    totalDays: dailyExercises.length,
    trainingDays: dailyExercises.filter(h => h > 0).length,
    dailyTarget,
    averageTraining,
    reachedTarget: averageTraining > dailyTarget, 
    rating,
    description: `Your rating of ${rating.toFixed(2)}/3 was ${shortDescription}` 
  }
}

console.log(calculateExercise([1,2,1.5,2,1,3,2],2))