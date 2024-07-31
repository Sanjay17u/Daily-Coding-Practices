// Q16. Calculate discounted bill ammount
// Q17. Display day name
// Q18. Display month name
// Q19. Display digit in words


// ************************************************************************************
// ************************************************************************************
// ************************************************************************************

// Q16. Calculate discounted bill ammount


let ammount = 1000

let discount = 20

if (ammount !== 0 && discount !== 0) {
    
    let discountedAmmount = (ammount / 100) * discount
    console.log("The Total Discount is: " + discountedAmmount)  

    if (discountedAmmount !== 0) {
        
        let afterDiscountAmmount = ammount - discountedAmmount
        console.log(`The Discounted Bill Ammount is: ${afterDiscountAmmount}`)
    } else {
        console.log("Some Values are Wrong Check Again")
    }
} 


// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// Q17. Display day name

    let day = 0

    if (day == 1) {
        
    console.log("Monday")

    } else if (day == 2) {
        
    console.log("Tuesday")

    } else if (day == 3) {
    
    console.log("Wednesday")

    } else if (day == 4) {
    
    console.log("Thrusday")

    } else if (day == 5) {

    console.log("Friday")

    } else if (day == 6) {

    console.log("Saturday")

    } else {

    console.log("Sunday")    
    }
    

// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// Q18. Display month name


    let month = 0

    if (month == 1) {
        
    console.log("January")

    } else if (month == 2) {
        
    console.log("February")

    } else if (month == 3) {
    
    console.log("March")

    } else if (month == 4) {
    
    console.log("April")

    } else if (month == 5) {

    console.log("May")

    } else if (month == 6) {

    console.log("June")

    } else if (month == 7) {

    console.log("July")    

    } else if (month == 8) {

    console.log("August")    

    } else if (month == 9) {

    console.log("September")

    } else if (month == 10) {

    console.log("October") 

    } else if (month == 11) {

    console.log("November")

    } else {

    console.log("December")

    }
    

// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// Q19. Display digit in words


    let numbers = 0

    if (numbers == 1) {
        
    console.log("One")

    } else if (numbers == 2) {
        
    console.log("Two")

    } else if (numbers == 3) {
    
    console.log("Three")

    } else if (numbers == 4) {
    
    console.log("Four")

    } else if (numbers == 5) {

    console.log("Five")

    } else if (numbers == 6) {

    console.log("Six")

    } else if (numbers == 7) {

    console.log("Seven")
    
    }