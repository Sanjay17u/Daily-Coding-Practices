// Q26.  Right Pascal Star Pattern
// Q27.  Square Star Pattern
// Q28.  Hollow Square Pattern
// Q29.  Hollow Triangle Star Pattern
// Q30.  Diamond Pattern


// *******************************************************************************
// *******************************************************************************
// *******************************************************************************

// Q26.  Right Pascal Star Pattern

document.write("<hr/>")


for(let x = 1; x <= 5; x++) {
    
    for(let y = 1; y <= x; y++) {
        document.write("*")
    }
    document.write("<br/>")
}
for(let a = 4; a >= 1; a--) {
    
    for(let b = 1; b <= a; b++) {
        document.write("*")
    }
    document.write("<br/>")
}
document.write("<hr/>")

// *******************************************************************************
// *******************************************************************************
// *******************************************************************************

// Q27.  Square Star Pattern

for(let x = 1; x <=5; x++) {
    
    for(let y = 1; y <= 5; y++) {
        document.write("*")
    }
    document.write("<br/>")
}

document.write("<hr/>")


// *******************************************************************************
// *******************************************************************************
// *******************************************************************************

// Q28.  Hollow Square Pattern

for(let x = 1; x <= 5; x++) {
    
    for(let y = 1; y <= 5; y++) {
        if (x == 1 || y == 5 || x == 5 || y == 1) {
            document.write("*")
        } else {
            document.write("&nbsp;&nbsp;")
        }
    }
    document.write("<br/>")
}
document.write("<hr/>")


// *******************************************************************************
// *******************************************************************************
// *******************************************************************************

// Q29.  Hollow Triangle Star Pattern

    for(let x = 1; x <= 5; x++) {

        for(let z = 5; z > x; z--) {
            document.write("&nbsp;")
        }

        for(let y = 1; y <= x; y++) {
            if (x == 1 || x == 5 || y == 1 || y == x) {
                document.write("*")
            } else {
                document.write("&nbsp;&nbsp;")
            }
        }
        document.write("<br/>")
    }

    document.write("<hr/>")


// *******************************************************************************
// *******************************************************************************
// *******************************************************************************


// Q30.  Diamond Pattern

    for(let x = 1; x <= 5; x++) {

        for(let y = 5; y > x; y--) {
            document.write("&nbsp")
        }

        for(let z = 1; z <= x; z++) {
            document.write("*")
        }

        document.write("<br/>")
    }

    for(let a = 4; a >= 1; a--) {

        for(let b = 5; b > a; b--) {
            document.write("&nbsp;")
        }

        for(let c = 1; c <= a; c++) {
            document.write("*")
        }
        document.write("<br/>")
    }
    document.write("<hr/>")