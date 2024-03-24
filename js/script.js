// Concatenate Some Strings
document.getElementById("Concatenate").onclick = function () {
    let  massage  = "Have A Good Day"
    let firstname = prompt("Enter Your First name")
    let lasttname = prompt("Enter Your Last name")
    let  exclamation   = "!"
    let fullname = massage + " " + firstname + " " + lasttname + " " + exclamation
    alert(fullname)

    let Statement = ' let  massage  = "Have A Good Day" <br>  let firstname = prompt("Enter Your First name") <br> let lasttname = prompt("Enter Your Last name") <br> let  exclamation   = "!" <br>  let fullname = massage + " " + firstname + " " + lasttname + " " + exclamation '

    document.getElementById("Statement").innerHTML = Statement
    document.getElementById("Output").innerHTML = fullname
}


// Ask Name From User
document.getElementById("ask-name").onclick = function () {
    let name = prompt("Enter Your fullname")
    alert(name)
    let Statement = 'let name = prompt("Enter Your Name")'
    document.getElementById("Statement").innerHTML = Statement
    document.getElementById("Output").innerHTML = name
}

// Comparison Operators
document.getElementById("Comparison").onclick = function () {
    let num1 = +prompt("Enter Any number to check comparison between them!")
    let num2 = +prompt("Second value to check comparison between them!")
    let anss;
    if (num1 == num2) {
        anss = "is equal to"
    } else if (num1 > num2){
        anss= "is greater than"
    } else if (num1 < num2){
        anss = "is less than"
    } else {
        anss = "Please enter values again "
    }
    let ans = ' ' + num1 + ' ' + anss + ' ' + num2 + '';
    alert(ans)
    let statment = '<p style="text-align: center;">let num1 = +prompt("Enter Any number to check comparison between them!") <br> num1 = '+ num1 +' <br> let num2 = +prompt("Second value to check comparison between them!") <br> num1 = '+ num2 +' </p>'
    document.getElementById("Statement").innerHTML = statment
    document.getElementById("Output").innerHTML = ans
}


// if else if 
document.getElementById("ifelseif").onclick = function () {
    let food = prompt("Enter Your Favorite Food").toLowerCase();
    let message;
    if (food === "pizza") {
        message = "Excellent choice! Pizza is always a favorite."
    } else if (food === "sushi") {
        message = "Sushi is delicious! A great choice for seafood lovers."
    } else if (food === "burger") {
        message = "Burgers are a classic comfort food!"
    }else if (food === "tacos") {
        message = "Tacos are a tasty option, especially with all the toppings!"
    } else {
        message = "That sounds interesting! There are so many delicious foods to explore."
    }

    let statment = '<p style="text-align: center;">let food = prompt("Enter Your Favorite Food").toLowerCase(); <br> food = ' + food + '</p>'
    document.getElementById("Statement").innerHTML = statment;
    
    alert(message);
    document.getElementById("Output").innerHTML = message;
}


// Testing Sets of Conditions
document.getElementById("testingsets").onclick = function () {
    let age = +prompt("Enter Your Age");
    let weight = +prompt("Enter Your weight");
    let health;
    if (age >= 18 && weight <= 70) {
       health = "You are a smart Gentleman.";
    } else if (age >= 18 && weight > 70) {
        health = "You are a fat boy.";
    } else if (age < 18 && weight > 50) {
        health = "motu kam khaya kar"
    }else {
        health = "You are a baby boy.";
    }

    let statment = '<p style="text-align: center;">let age = +prompt("Enter Your Age"); <br> age = '+ age +' <br> let weight = +prompt("Enter Your weight"); <br> weight = '+ weight +' </p>'
    document.getElementById("Statement").innerHTML = statment;
    
    alert(health);
    document.getElementById("Output").innerHTML = health;
}


// if Statements Nested
document.getElementById("ifStatementsNested").onclick = function () {
    let age = +prompt("Enter your Age to check are you eligible to borrow the book or not.");
    let massage;
    if (age >= 18) {
        massage = "You are old enough to borrow books";
        // alert(massage)
        // Check membership code.
        let isMember = +prompt("Enter you three digit membership code.");
        
        if (isMember >= 100) {
            massage = "You are a member."
        // check book name
            let bookAvailable = prompt("Enter the book name Beloved , Annihilation , Atonement").toLowerCase();

            if (bookAvailable === "atonement" || bookAvailable === "annihilation") {
                massage = "The book is available. You can borrow it."
            }
            else {
                massage = "Sorry, the book is not available."
            }
        } else {
            massage = "You are not a member. Please sign up to borrow books"
        }
        
    } else {
        massage = "You must be at least 18 years old to borrow books."
    }
    alert(massage);
    
    document.getElementById("Output").innerHTML = massage ;
    
    let statment = `<p style="text-align: center;">Enter your Age to check are you eligible to borrow the book or not.<br> Enter you three digit membership code.  <br> Enter the book name Beloved , Annihilation , Atonement    </p>`
    
    document.getElementById("Statement").innerHTML = statment;
}

// Login
document.getElementById("Login").onclick = function () {

    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    

    let username = prompt("Enter Your username.")
    let loginusername = username;
    let massage
    if (loginusername !== "" && loginusername !== " " && username === loginusername ) {
        let password = +prompt("Enter password (at  least 5 Numeric Digit):")
        if (password >= 10000) {
            massage = "You are authorized to access this page."
        } else {
            massage = "Please enter your password."
        }
    } else {
        massage = "Invalid username. Please enter your username again."
    }

    alert(massage)
    document.getElementById("Output").innerHTML = massage;
    
    let statment = '  <p style="text-align: center;">Enter Your username <br> Enter password (at least 5 characters):</p> '
    document.getElementById("Statement").innerHTML = statment;

}

// Clear Statement
document.getElementById("Clear-statment").onclick = function () {
    document.getElementById("Statement").innerHTML = "";    
}
// Clear Output
document.getElementById("Clear-Output").onclick = function () {
    document.getElementById("Output").innerHTML = "";    
}