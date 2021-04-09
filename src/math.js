
// Calculate exponent of the given number

function pow(base, exponent = 2){
    return Math.pow(exponent,base)
}
export let p = pow(5,9);


// Calculate the hypotenuse using Pythagore's theorem

 function hypotenuse(adjacent, opposite){
    const hypotenuse = Math.sqrt(Math.pow(adjacent,2) + Math.pow(opposite,2));
     return {
        adjacent,
        opposite,
        hypotenuse
    }
   
}
export let h = hypotenuse(8,11);

// Calculate the area of a circle

function circleArea(radius){
    return (radius * radius) * Math.PI
}
export let c = circleArea(8);

// A constant that has the approximate value of PI

export const A = Math.PI


