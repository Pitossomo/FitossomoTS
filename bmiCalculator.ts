const calculateBMI = (height: number, weight: number): string => {
  const bmi = weight/Math.pow(height/100,2)
  
  let category:string
  
  if (bmi < 18.4) category = 'Underweight'
  else if (bmi < 25.0) category = 'Normal'
  else if (bmi < 30) category = 'Overweight'
  else category = 'Obese'

  return category
}

console.log(calculateBMI(163, 80))