/* EASY: Write a function that would allow you to do this:
var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming" */


// function Exercise(a){

//     // let exercizes = ["running, hiking, zumba, yoga, cycling, hiking"];

//     console.log(`Todays' Exercise: ${a}`) };

// console.log(Exercise('jogging'));





/* MEDIUM: Write a function that would allow you to do this:
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza" */

// function cutPizzaSlices (a,b){
//     let sharePizza = (a/b);
//     console.log(sharePizza);
// }
// let x = Number(prompt(`How many people are eating pizza?`));
// let y = Number(prompt(`How many pieces are you cutting?`));

// console.log(`Each person gets ${cutPizzaSlices(x,y)} slices of pizza.`);

/* HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable
Information)that cannot be accessed directly. The object should have at least two properties: name and
ssn. Only the name property should be accessible, and it should be called through a public function.
The ssn property should not be accessible at all.
Creating private objects and private properties helps you control who has access to what data and
helps you prevent people who shouldn't see important info like social security numbers from getting
access to the data.
You can use 'getName' or other get methods to access data that people might need. For example,
people addressing a package or email may need a customer's name, but they definitely shouldn't have
access to their ssn. */

// var closure = (function(){
// var pii = {
//     Name: 'Suzy Bae',
//     SSN: 374948287449
// }
// return{
//     getName: function(){
//         return pii.Name;
//     },
// };
// })();

// console.log(closure.getName());

/* VERY HARD: Object prototype chain and prototypal inheritance exercise.
1. Create a Person constructor that has three properties: name, job, and age.
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is
fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad
is a back-end developer".
4. Create a Programmer constructor that inherits all the members from Person with an additional
'languages' property that is passed in and a busy property that is NOT passed in and is set to
true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that
programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the
busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the
programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't
accept any new tasks right now." and "Mark would love to take on a new responsibility." if the
programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages
to the programmer and list off all languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does
each programmer maintain their own properties properly and independently of the other
programmers?
Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or
properties to incorporate the syntax.
function Person(name, job, age) { }
function Programmer(name, job, age, languages) { } */

class Person{
   constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise(a){
        console.log(`${a}`);
    }
    fetchJob(){
        console.log(`${this.name} is a ${this.job}`);
    } 
}


const Jennie = new Person("Jennie", "Architect", 23);

//testing 
Jennie.fetchJob();
Jennie.exercise(`Bungee jumping is really neat!`);



 class Programmer extends Person {
    constructor(name, job, age, language){
       super(name, job, age);
        this.language = language;
        this.isBusy = true;
    }
    completeTask(){
        this.isBusy = false;
    }
    acceptNewTask(){
        this.isBusy = true;
    }
    offerNewTask(){
        if(this.isBusy == false){
            console.log(`${this.name} would love to accept new responsibilities`);
        }
        else if (this.isBusy == true){
            console.log(`${this.name} cannot accept any new tasks right now.`);
        }
    }
    learnLanguage(newLang){
        console.log(`${this.name} wants to learn ${newLang}`);
    }
    listLanguages(){
    
    console.log(`Languages:`)
    
    for (var i = 0; i < this.language.length; i++) {
        console.log(this.language[i])
    };
        }
    }


// Programmer.prototype.status = function (){
//     this.isBusy = true;
// }


const Mickey = new Programmer("Mickey", "Front-End Developer", 36, ["React", "Javascript", "Node"]);
Mickey.acceptNewTask();
Mickey.offerNewTask();
Mickey.fetchJob();
Mickey.listLanguages();


const Lisa = new Programmer("Lisa", "Apprentice", 19, ["HTML"]);
Lisa.exercise("Lisa loves playing volleyball but she also likes to watch tennis.");
Lisa.listLanguages();
Lisa.learnLanguage("SQL");

