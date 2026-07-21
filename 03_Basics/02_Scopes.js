function one() {
    const username = "Ali"
    function two() {
        const website = "Youtube"
        console.log(username);        
    }
    // console.log(website);//will give error because "website" is not accessible outside of the function "two"
    two()    
}

one()

// ---- Different Waya of Function Declaration ---- 
function addOne(num) {
    return num + 1
}

addOne(4)

// Here "addTwo" is often called an Expression which is storing Function. As variables in JS has the capability to store Functions, value and JSON Values, etc.
const addTwo = function(num) {
    return num + 2
}

addTwo(5)
