

const fibbonacci = (number) => {
    let newArray = [0, 1]
  
    while (newArray.length < number) {
        newArray.push(newArray[newArray.length -1] + newArray[newArray.length -2])
    }
    return newArray
}


const alsoFibbonacci = (number) => {
    let newArray = [0, 1]
  
    for (let i =2; i < number; i++){
        newArray[i]= newArray[i-1]+ newArray[i-2]
    }
    return newArray
}
console.log(fibbonacci(7))
console.log(alsoFibbonacci(7))