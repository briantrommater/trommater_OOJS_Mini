//Multiplier class with 2 methods

function Multiplier() {
    //initialize a current value of 1
    this.currentValue = 1;

    //method which you can reuse keep multiplying by (number)
    this.multiply = function (number) {
        this.currentValue = number * this.currentValue;
        return this.currentValue
    }
    //kinda a storage method
    this.getCurrentValue = function(number) {
        return this.currentValue;
    }    
    
}
//create an instance
var trial = new Multiplier ();

//try to call a fx
trial.multiply(5); 




//photo album problem 2

//first constructor
function Album() {
    
    // set up empty array
    this.photos = []
    
    //set up add photo fx
    this.addPhotos = function(pic) {
        this.photos.push(pic);
    }
    
    //set up list photo fx with add loop
    this.listPhotos = function(){
        for(let pic of this.photos)
        pic.info();

    }
}

//photo constructor
function Photo (file, location) {
    this.file = file;
    this.location = location;
    
    //info on indiv photo fx
    this.info = function() {
        console.log(this.file + this.location);
    }
}

//new instances
var foto = new Album();
foto.addPhotos(new Photo('pic1.jpeg', 'christmas'));
foto.addPhotos(new Photo('pic2.jpeg', 'christmas'));
foto.addPhotos(new Photo('pic3.jpeg', 'thanksgiving'));
foto.addPhotos(new Photo('pic4.jpeg', 'christmas'));
foto.addPhotos(new Photo('pic5.jpeg', 'christmas'));
foto.addPhotos(new Photo('pic6.jpeg', 'christmas'));

//try calling a fx
foto.listPhotos();




//problem 3 virtual school

//create a prototypical Person object
function Person(name, email) {
    this.name = name;
    this.email = email;
}

//extend 2 constructor objects from this Person obj
//get teacher info and get student info fxs
function Teacher(name, email, subject, age) {
    this.subject = subject;
    this.age = age;

    Person.call(this, name, email);

    this.get_Teainfo = function() {
        console.log(name + " ," + email + " ," + subject + " , " + age);
    }
}

Teacher.prototype = Object.create(Person.prototype);

function Student(name, email, grade, year, sport) {
    this.grade = grade;
    this.year = year;
    this.sport = sport;

    Person.call(this, name, email);

    this.get_Stuinfo = function() {
        console.log(name + " ," + email + " ," + grade + " , " + year + " ," + sport);
    }
}

Student.prototype = Object.create(Person.prototype);

//School constructor or class or blueprint
function School() {
    //empty array objects 
    this.students = [];
    this.teachers = [];

    //add & list fxs
    this.addTeacher = function(add) {
        this.teachers.push(add);
    }
    this.addStudent = function(plus) {
        this.students.push(plus);
    }
    this.listTeachers = function() {
    
    //two loops to add to above empty arrays
    for (let teachers of this.teachers) {
        console.log(teacher)
    }
    }
    
    this.listStudents = function() {
    
    for (let student of this.students) {
        console.log(student)
    }
    }
}

//create some instances
var phillySchool = new School();
phillySchool.addStudent(new Student("mike","mike@", "A", '11', 'hockey'));
phillySchool.addStudent(new Student("brian","brian@", "F", '12', 'raquetball'));
phillySchool.addStudent(new Student("angel","angel@", "B", '9', 'weightlifting'));
phillySchool.addStudent(new Student("joe","joe@", "C", '6', 'badmitten'));
phillySchool.addStudent(new Student("dan","dan@", "D", '5', 'football'));
phillySchool.addStudent(new Student("kim","kim@", "B", '7', 'lacross'));
phillySchool.addStudent(new Student("ski","ski@", "C", '8', 'basketball'));

phillySchool.addTeacher(new Teacher("eric","eric@", 'math', '31'));
phillySchool.addTeacher(new Teacher("damian","damian@", 'science', '34'));
phillySchool.addTeacher(new Teacher("devin","devin@", 'history', '33'));
phillySchool.addTeacher(new Teacher("tarana","tarana@", 'english', '31'));

//try calling a fx
phillySchool.listStudents();
