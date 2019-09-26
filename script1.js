// console.log('Good Morning India');
/*var firstName="sunny";
console.log(firstName);

var lastName="Goswami";

var age=28;

console.log(lastName+" "+age); 

var _kds="ndks";*/

/*
var john=35;
var smith=20;
var avgAge=(john+smith)/2;
console.log(avgAge);
*/

/*
var firstName='john';
var age=23;
age>=18?console.log(firstName+' allowed for voterid'):console.log(firstName+' come after your age is 18');
*/


// var taem1="john";
// var jCricket=89;
// var jVolleyball=120;
// var jBasketball=103;

// var team2="mike";
// var mCricket=116;
// var mVolleyball=94;
// var mBasketball=123;


// var jAvg=(jCricket+jVolleyball+jBasketball)/3;
// var mAvg=(mCricket+mVolleyball+mBasketball)/3;

// jAvg>=mAvg?console.log(team1+" has the highest avg"):console.log(team2+" has the highest avg");

// var temp;
// temp=jAvg;
// jAvg=mAvg;
// mAvg=jAvg;


// function

/*
function calculateAge(birthyear){
    return 2019-birthyear;
}
var ajohn=calculateAge(1967);

console.log(ajohn);

function yearsUntilRetirement(year,firstName){
    var age=calculateAge(year);
    var retirement=65-age;
    retirement>0?console.log(firstName+" retires "+retirement+" years"):
    console.log(firstName+"already retired");

}
yearsUntilRetirement(1995,'sunny');

*/

// var names=['john','mark','jane'];
// console.log(names);

// console.log(names.length);

/*
function tipCalculator(bill){
    var percentage;
    if(bill<50){
        percentage=.2;
    }else if(bill>=50 && bill<200){
        percentage=.15;
    }else{
        percentage=.1;
    }

    return percentage*bill;
}

var bill=[124,48,268];
var tips=[tipCalculator(bill[0]),
tipCalculator(bill[1]),
tipCalculator(bill[2]),];
 var findValues=[bill[0]+tips[0],
 bill[1]+tips[1],
 bill[2]+tips[2]]
console.log(tips,findValues);

*/

/*
var john={
        firstName:'john',
        lastName:'smith',
        birthyear:1990,
        family:['jane','mark','bob','emily'],
        job:'teacher',
        isMarried:false

};

//console.log(john.firstName);
//console.log(john['lastName']);
// var x='birthyear';
// console.log(john[x]);

john.job='designer';
 console.log(john);
 john['isMarried']=true;
 console.log(john);



 var jane=new Object();
 jane.firstName='jane';
 jane.lastName='smith';
 jane.birthyear='1995';
 

 console.log(jane);




 var sunny={
     firstName:'sunny',
     lastName:'goswami',
     birthyear:'1995',
     job:'softwareDeveloper',
     isMarried:false,
     calcAge: function(){
         this.age=2019-this.birthyear;
     }
 };

 sunny.calcAge();
 console.log(sunny);   
*/

/*
var john={
    fullName:'john smith',
    mass:72,
    height:1.75,

    clacBMI:function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}

var mark={
    fullName:'mark miller',
    mass:76,
    height:1.76,

    clacBMI:function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}

if(john.clacBMI()>mark.clacBMI()){
    console.log(john.fullName+' has a hogher BMI of '+john.bmi);
}else if(mark.bmi>john.bmi){
    console.log(mark.fullName+' has a higher BMI of '+mark.bmi);
}else{
    console.log('they both have same BMI');
}

*/


/*

var john=['john','miller','1990','designer','false','blue'];
for(var i=0;i<john.length;i++){
    console.log(john[i]);
}
*/


/*

var name='john';

function first(){
    var a='hi';
    second();
    var b=a+name;
    console.log(b);
}
function second(){
    var c='hey';
    third();
    var d=c+name;
    console.log(d);
}
function third(){
    var e='hello';
    var f=e+name;
    console.log(f);
}

first();
*/

/*
var a='hello';
var b;
var c;
var d;

function first(){
    b ='hii';
    second();
    function second(){
        c ='hey';
       third();
    }
    
}
function third(){
    d ='john';
    
    console.log(a + b + c + d);
}
first();


*/                                                                  
/*
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
*/

// Old compatibility code, no longer needed.

/*
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

*/
/*
function calcAge(year){
        console.log(2019-year);
        console.log(this);
}
calcAge(1995);
*/
/*
var john= {
        firstName:'john',
        birthyear:1990,
        calcAge:function(){
                console.log(this);
        }

}
john.calcAge();
*/




var john={
    name:'john',
    birthYear:1990,
    claculateAge:function(){
        console.log(2019-this.birthYear);
        console.log(this);
    }
}
    john.claculateAge();

var mike={
    name:'mike',
    birthYear:1995
};

    mike.claculateAge=john.claculateAge;
    mike.claculateAge();













































































