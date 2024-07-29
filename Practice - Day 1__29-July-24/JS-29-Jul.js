// Q1. Write a program to calculate area of triangle
// Q2. Write a program to calculate sum of all natural numbers
// Q3. Write a program to calculate root of quadratic equation
// Q4. Write a program to calculate distance distance = (final velocity - initial velocity )/2 * acceleration
// Q5. Write a program to calculate Simple interest
// Q6. Write a program to calculate volume of a cylinder
// Q7. Write a program to calculate distance between 2 point (d=√((x2 – x1)² + (y2 – y1)²))


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q1. Write a program to calculate area of triangle

    let base = 10

    let height = 20

    if (base !== 0 && height !== 0) {
        let areaOfTriangle = 0.5 * base * height
        console.log("Area Of Triangle: " + areaOfTriangle);
    } else {
        console.log("base & height cannot be zero");
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q2. Write a program to calculate sum of all natural numbers

    let x = 0 

    if (x !== 0) {
        console.log("This is a Whole Number " + x);
    } else {
        console.log("This is Not a Whole Nubmer " + x);
    }

//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************

// Q3. Write a program to calculate root of quadratic equation --------------- #*#

    let a = 5
    let b = 10
    let c = 15

    let discriminent = b * b - 4 * a * c;

    if (discriminent > 0) {

    let root1 = (-b + Math.sqrt(discriminent)) / (2 * a)
    let root2 = (-b - Math.sqrt(discriminent)) / (2 * a)

    console.log("The Roots are Real and Diffrent: root1 = " + root1 + ", root2 = " + root2);

    } else if (discriminent === 0) {
        let root = -b / (2 * a)

    } else {
        let realPart = -b / (2 * a)
        let imaginaryPart = Math.sqrt(- discriminent) / (2*a);
        console.log("The Roots are complex: root1 = " + realPart + " + " + imaginaryPart + "i, root2 = " + realPart + " - " + imaginaryPart + "i");
    }

//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************

// Q4. Write a program to calculate distance distance = (final velocity - initial velocity )/2 * acceleration

    let finalVelocity = 5

    let initialVelocity = 10

    let acceleration = 15

    if (finalVelocity !== 0 && initialVelocity !== 0 && acceleration != 0) {
        let distance = (finalVelocity - initialVelocity) / 2 * acceleration
        console.log("Total distance is = " + distance);

    } else {
        console.log("There is something wrong value you putting");
    }
    
//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q5. Write a program to calculate Simple interest

    let principal = 5

    let rateOfIntrest = 10

    let time = 15

    if (principal !== 0 && rateOfIntrest !== 0 && time != 0) {
        
        let simpleIntrest = (principal * rateOfIntrest * time) / 100
        console.log("Simple Intrest: " + simpleIntrest);
    } else {
        console.log("Values are Should Not Be Zero");
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q6. Write a program to calculate volume of a cylinder


    let radius = 5

    let height = 10

    if (radius !== 0 && height !== 0) {
        
        let volume = 3.141 * radius * height
        console.log("The Total Volume is: " + volume);

    } else {
        console.log("Values are should not be zero");
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// Q7. Write a program to calculate distance between 2 point (d=√((x2 – x1)² + (y2 – y1)²))


    let x1 = 3;
    let y1 = 4;
    let x2 = 7;
    let y2 = 1;

    let distance;

    let dx = x2 - x1;
    let dy = y2 - y1;

    if (dx !== 0 || dy !== 0) {
        distance = Math.sqrt(dx * dx + dy * dy);
        console.log("The distance between the two points is: " + distance);
    } else {
        console.log("The points are the same.");
    }


//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************
