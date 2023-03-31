const power_of_two = (n) => {
        return (n & (n - 1)) === 0;
      
}

console.log(power_of_two(1))
console.log(power_of_two(2))
console.log(power_of_two(4))
console.log(power_of_two(5))
console.log(power_of_two(13))
console.log(power_of_two(14))
console.log(power_of_two(8))
console.log(power_of_two(24))

