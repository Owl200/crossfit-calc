import { useState } from 'react';

const useCalculateWeights =() => {
  const [weight, setWeight] = useState()
  const [barWeight, setBarWeight] = useState(45)


  const handleChangeWeight = (e) => setWeight(e.target.value != 0 ? Number(Number(e.target.value).toFixed(2)) : '' ) 
  const handleChangeBar = (e) => setBarWeight(parseFloat(e.target.value)) 
  
  const getWeightPerSide = () => {
    let valuesToPrint = []
    for(let i = 40; i <= 110; i += 5){
      let lbsPerSide = (((weight * i * .01) - barWeight) / 2)
      let lbs45 = 0
      let lbs35 = 0
      let lbs25 = 0
      let lbs15 = 0
      let lbs10 = 0
      let lbs5 = 0
      let lbs2 = 0

      valuesToPrint.push({})
      valuesToPrint[valuesToPrint.length - 1] = {...valuesToPrint[valuesToPrint.length - 1], percentage: i, lbsPerSide}

      while(lbsPerSide > 0){
        if(lbsPerSide - 45 >= 0){
          lbs45 += 1
          lbsPerSide -= 45
        } else if(lbsPerSide - 35 >= 0){
          lbs35 += 1
          lbsPerSide -= 35
        } else if(lbsPerSide - 25 >= 0){
          lbs25 += 1
          lbsPerSide -= 25
        } else if(lbsPerSide - 15 >= 0){
          lbs15 += 1
          lbsPerSide -= 15
        } else if(lbsPerSide - 10 >= 0){
          lbs10 += 1
          lbsPerSide -= 10 
        } else if(lbsPerSide - 5 >= 0){
          lbs5 += 1
          lbsPerSide -= 5
        } else if(lbsPerSide - 2.5 >= 0){
          lbs2 += 1
          lbsPerSide -= 2.5
        } else {
          lbsPerSide = 0
        }
      }

      valuesToPrint[valuesToPrint.length - 1] = {...valuesToPrint[valuesToPrint.length - 1], lbs45, lbs35, lbs25, lbs15, lbs10, lbs5, lbs2}
    }

    return valuesToPrint
  }

  return { handleChangeWeight, handleChangeBar, getWeightPerSide, weight, barWeight }
}

export default useCalculateWeights
