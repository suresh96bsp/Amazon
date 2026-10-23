// console.log("hellojs");

// let age = "20";
// console.log (age);


// let empname =("suresh");
// console.log(empname);


// let office =('tcs');
// console.log(office);

// let Address =(
//     `chennai
//     to
//     trichy`);
// console.log(typeof Address);


// let fruit1= (Symbol.apple);
// let fruit2=(Symbol.apple)
// console.log(fruit1==fruit2);

// let marks= [10,20,30,40,50];
// console.log(marks);
// console.log(marks[3]);

// let students={
//     tamil:10,
//     english:20,
//     maths:30,
// }
// console.log(typeof students);

// function detail(){

//     console.log("hello"); 
// }
// detail();
// detail();
// detail();
// detail();

// //arithmetic operator-addition

// let num1 = (100);
// let num2= (50);
// console.log(num1+num2);

// //arithmetic operator-subtraction

// let num3 = (100);
// let num4= (50);
// console.log(num3-num4);

// //arithmetic operator-Multiplication
// let num5 = (10);
// let num6= (3 );
// console.log(num5*num6);

// //arithmetic operator-Division

// let num7 = (10);
// let num8= (2 );
// console.log(num7/num8);

// //arithmetic operator-Modulus(%)

// let num9 = (15);
// let num10= (4 );
// console.log(num9%num10);

// //arithmetic operator-powerof

// let num11 = (3);
// let num12= (2);
// console.log(num11**num12);

// //Assignment operators addition

// let value =100;
// //value =value +=75;
// value +=75;
// console.log(value);

// //Assignment operators subtraction

// let values =100;
// //value =value -=75;
// values -=75;
// console.log(values);

// //Comparation operator 22>18= true

// let man =22;
// console.log(man<10);

// let mark= 100;
// console.log(mark>=50);

// let amount1 =1000;
// let amount2="1000";
// console.log(amount1==amount2);// its check only values
// console.log(amount1===amount2);// its check both value and data types

// //AND operator

//let course1 =100;
//let course2=50;

 //let course3=40;
 //let course4=30;
 //console.log(course1>course2&&course3>course4);


 // //OR operator

//let course5 =100;
//let course6=50;

 //let course7=40;
 //let course8=30;
 //console.log(course5>course6||course7>course8);

 //NOT(!)Reverse the value
 //let res = false;
 //console.log(! res);


//let numss1=100;
//let numss2=1001;
//console.log(numss1 !=numss2);

//Nullish Operator

//let course = null;
//let coures1="playwright"
//let courses4="java"
//let results = course ?? coures1 ?? courses4;
//console.log(results);

//Ternary Operator

//let ages =22;
//let vote =ages>=18 ? "can vote": "cannot vote";
//console.log(vote);


// let students ={
//     name: "suresh",
//     rollno: 1458,
//     marks:[87,85,75],
    //details: ()=>{
      //  console.log(this.name);
        //console.log(this.rollno);
        //console.log(this.marks);
    //},
// StudInfo:function(){
//     console.log(this.name);
//     console.log(this.rollno);
//     console.log(this.marks[0]+this.marks[1]+this.marks[2]);
// }}

// //students.details();
// students.StudInfo(); 

class emp{
    name='suresh';
    id=158;
    work =function(){
        console.log('to train the students');
    }
    detail(){
        console.log('name=${this.name} id =${this.id}');
}
}
let emp1=new emp();
console.log(emp1);
emp1.work()
emp1.detail()





    
































