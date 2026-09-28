const prompt = require('prompt-sync')();

// Minimum Functions
function minimum(x, y, z = 0) {
    if (x > y && x > z) {
        return x
    } else if (y > x && y > z) {
        return y
    } else if (z > x && z > y) {
        return z
    }
}
// console.log(minimum(0,5))


// Even test
function isEven(x){
    x = Math.abs(x)

    if(x===0){
        return true
    }else if(x===1){
        return false
    }else{
        return isEven(x-2)
    }
}
// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))

//series functions
function series1(x){
    if(x<=0){
        return 0
    }else{
        return 2 * (x**2) - 2 * x + 2
    }
}

// console.log(series1(1))
// console.log(series1(2))
// console.log(series1(3))
// console.log(series1(4))
// console.log(series1(5))

function series2(x){
    let result = 1
    for(let i=1; i<=x; i++){
        result *= i
    }
    return result
}
// console.log(series2(1))

function series3(x){
    if(x === 1 || x === 2){
        return 1
    }else{
        return series3(x-1) + series3(x-2)
    }
}
// console.log(series3(3))

// HCF and LCM
function hcf(x,y){
    if(y===0){
        return x
    }
    return hcf(y,x%y)    
}

// console.log(hcf(100,25))

// ? can also be a shortcut for a if else statement
// Math.min/max gets the lowest/greatest number passed through
function lcm(a,b){
    if(a === 0 || b === 0){
        return 0
    }
    let huh = Math.max(a,b)

    while(huh % Math.min(a,b) !==0){
        huh += Math.max(a,b)
    }
    return huh
}

// console.log(lcm(15, 50))

function nthTerm(n){
    let stg = ""
    let x = 2
    for(let i = 0; i<n; i++){
        x += i*4
        stg += `${x}, `
    }
    return stg.substring(0, stg.length-2)
}
// console.log(nthTerm(4))

function series2(x){
    let wow = []
    let result = 1
    for(let i=1; i<=x; i++){
        result *= i
        wow.push(result)
    }
    return wow
}
// console.log(series2(4))

function bro(){
    let x = Number(prompt("X: "))
    let a = Number(prompt("A: "))
    let b = Number(prompt("B: "))
    for(let i = a; i<=b; i++){
        console.log("")
    }
}