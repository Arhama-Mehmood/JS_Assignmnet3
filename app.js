// Chapter 9-11 [PDF]

// Q1)
var cityName= prompt("Enter your city name: ");
if(cityName="Karachi"){
    alert("Welcome to city of lights.");
}

// Q2)
var gender= prompt("Enter your gender: ");
if(cityName="Male"){
    alert("Good Morning Sir.");
}
else{
    alert("Good Morning Ma'am.");
}

// Q3)
var trafficColor=prompt("Enter color of road traffic signal:");

// Q4)
var remainingFuel= prompt("Enter your remaining fuel in litres: ");
if(remainingFuel<0.25){
    alert("Please refill the fuel in your car");
}

// Q5)

// a
var a = 4;
if (++a === 5){
alert("Given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");}

// c
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");}

// e
if (true){
    alert("True");
    }
    if (false){
    alert("False");}

// f
if("car" < "cat"){
    alert("Car is smaller than cat");}

// Q6)
var maths,english,physics,obtMarks,percentage,grade,remarks;
maths=+prompt("Please enter maths marks:");
english=+prompt("Please enter english marks:");
physics=+prompt("Please enter physics marks:");
obtMarks=maths+english+physics;
percentage=(obtMarks/300)*100;
document.write("<h1>Marks Sheet<br></h1>");
document.write("Total Marks: 300<br>");
document.write("Marks Obtained: ",obtMarks);
document.write("<br>Percentage: ",percentage,"%");

if(percentage>=80){
    document.write("<br>Grade = A-one");
    document.write("<br>Remarks: Excellent");}
  else if(percentage>=70){
    document.write("<br>Grade = A");
    document.write("<br>Remarks: Good");}
  else if(percentage>=60){
    document.write("<br>Grade = B");
    document.write("<br>Remarks: You need to improve.");
  }  
else{
    document.write("<br>Grade = Fail");
    document.write("<br>Remarks: Sorry");
}

// Q7)Guess Game:
var secretNumber= 6;
guessNum=+prompt("Enter our secret number: ");
if(guessNum==secretNumber){
alert("Bingo! Correct Answer");
}
else if((guessNum+1)==secretNumber){
    alert("Close enough to correct answer.");
}

// Q8)
var num=+prompt("Enter any number: ");
if(num%3==0){
    alert("Yeahh! Your number is completely divisible by 3.");
}

// Q9)
var num=+prompt("Enter any number to check whether it is even or odd: ");
if(num%2==0){
    alert("The inputted number is even.");
}
else{
    alert("The inputted number is odd.");
}

// Q10)
var temp=+prompt("Please Enter Current temperature:");
if(temp>40){
    alert("It is too hot outside");
}
else if(temp>30){
    alert("The weather today is Normal.");
}
else if(temp>20){
    alert("Today's weather is Cool.");
}
else if(temp>10){
    alert("OMG! Today's weather is so Cool");
}

// Q11)
var firstNum=+prompt("Enter First Number:");
var secondNum=+prompt("Enter Second Number:");
var operattion=prompt("Enter the opertor which you want to apply on numbers:");
if(operattion=="+"){
    var add=firstNum+secondNum;
    document.write("The addition of both numbers are: ",add);}   
 else if(operattion=="-"){
    var subtract=firstNum-secondNum;
    document.write("The Subtraction of both numbers are: ",subtract);}
else if(operattion=="/"){
    var divide=firstNum/secondNum;
    document.write("The Division of both numbers are: ",divide);}
else if(operattion=="%"){
    var modulus=firstNum%secondNum;
    document.write("The Modulus of both numbers are: ",modulus);}
else if(operattion=="*"){
    var multilply=firstNum*secondNum;
    document.write("The Multiplication of both numbers are: ",multilply);}
else{
    alert("Invalid Operator!");
}

// X============================================================================================================================X

// Chapter 12-13 [PDF]

// Q1)
