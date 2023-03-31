const factorial = (number)=>{
    let factorial_value = 1
    for(let i=number; i> 0; i--){
        factorial_value = factorial_value * i
    }
    return factorial_value
}

console.log(factorial(7))