//Object methods example
myObj = {
    name: "Opeyemi",
    greet: function(){
        console.log("Boker tov "+this.name)
    }
}
myObj.greet()


//Object methods example
myObj = {
    name: "Opeyemi",
    greet: function(){
        console.log("Boker tov "+this.name)
    }
}
myObj.greet()


// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        console.log("The length of this object is: "+ this.name.length)
    }
  }

  employee.nameLength();


  ///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    //SOLUTION
    myMethod: function(){
    alert('Name is '+employee.name + 'Job is '+ employee.job+'Age is '+ employee.age );
    alert("Job is "+ this.job);
    alert('Age is '+this.age);
      
  }
  }
  
  // Write program that will create an Alert in the browser of each of the
  // object's values for the key value pairs. For example, it should alert:
  
  // Name is John Smith, Job is Programmer, Age is 31.

 
  
///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName: function(){

        var res = this.name.split(" ");
        console.log(res[1]);
    }
  }
  
  // Add a method called lastName that prints
  // out the employee's last name to the console.
  
  // You will need to figure out how to split a string to an array.
  // Hint: http://www.w3schools.com/jsref/jsref_split.asp
  

