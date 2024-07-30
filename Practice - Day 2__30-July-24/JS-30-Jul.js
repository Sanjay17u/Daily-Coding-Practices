// Q8. Write a program to calculate compound interest
// Q9. Finding maximun of two number
// Q10. Number is positive or negative
// Q11. Number is even or odd
// Q12. check age of a person
// Q13. check if a person is eligible for offer
// Q14. Finding maximum of 3 number
// Q15. Display grade for students marks



//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q8. Write a program to calculate compound interest

    let principal = 6250

    let rateOfIntrest = 8

    let numberOfYears = 2

    if (principal !== 0 && rateOfIntrest !== 0 && numberOfYears !== 0) {
        
        let ammount = principal * Math.pow((1 + rateOfIntrest / 100),numberOfYears) 
        console.log("The Total Ammount is = " + ammount);
        if (ammount !== 0) {
            
            let compoundIntrest = ammount - principal
            console.log("The Total Compound Intrest is = " + compoundIntrest);
        } 
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q9. Finding maximun of two number

    let x = 5

    let y = 10

    if (x>y) {
        
        console.log("x Is Greater than y = " + x);

    } else {
        console.log("y Is Greater Than x = " + y);
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q10. Number is positive or negative

    let x = -10

    if (x > 0 && x !== 0) {
        
        console.log("This Number is Positive = " + x);
    } else {
        console.log("This Number is Negative = " + x);
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q11. Number is even or odd


    let x = 7

    if (x % 2 == 0) {
        
        console.log("This is an Even Number = " + x);

    } else {
        console.log("This is an Odd Number = " + x);
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************

// Q12. check age of a person

    let x = 1999 

    let y = 2024

    if (x !== 0 && y !== 0) {
        
        let age = y-x
        console.log(age);
    } else {
        console.log("Put The Right Birth Year In Valiable x");
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q13. check if a person is eligible for offer


    let x = 17

    if (x > 18) {
        
        console.log("You are eligible for offer " + x);

    } else {
        console.log("You are not eligible for offer yet sorry " + x);
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************

// Q14. Finding maximum of 3 number

    let x = 5

    let y = 15

    let z = 10


    if (x > y && x > z) {
        console.log("x is the grater number of all of them " + x);
    } else if (y > x && y > z) {
        console.log("y is the greater number of all of them " + y);
    } else {
        console.log("z is the greater number of all of them " + z);
    }

//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q15. Display grade for students marks


    let marks = 17

    if (marks > 90) {
        console.log("A+ Grade Marks Obtained");
    } else if (marks > 80) {
        console.log("A Grade Marks Obtained");
    } else if (marks > 70) {
        console.log("B+ Grade Marks Obtained");
    } else if (marks > 60) {
        console.log("B Grade Marks Obtained");
    } else if (marks > 50) {
        console.log("C+ Grade Marks Obtained");
    } else if (marks > 40) {
        console.log("C Grade Marks Obtained");
    } else if (marks > 30) {
        console.log("D Grade Marks Obtained");
    } else if (marks > 20) {
        console.log("E Grade Marks Obtained");
    } else {
        console.log("You are Fail Go School Again");
    }
