// Function Context
// "Invocation Context"

// the context chnages depending upon how a fn is invoked

// 1. as a function (baseless function)
// this is the window

// 2. as a method
// a 'method' is a fn that is attached to an object
// this will be the object that the fn is attached to



// 3. via a method of the function object
// bind, call, apply
// BIND
// bind sets the context,
// chnages the value of this
// arrow fns implicitly bind the context




// 4. as a constructor
// with the new keyword
// this === self




function thisLogger() {
	console.log(this)
}

function locationLogger() {
	console.log(this.location)
}

// chipotle.listEmployees()
const listEmployees = function() {
	console.log('OUTSIDE THE LOOP this is', this);
	// const that = this

	this.employees.forEach((employee) => {
		// console.log('INSIDE THE LOOP this is', this);
	  console.log(`Employee: ${employee.name} works at ${this.name}`)
	})
}



const tgif = {
	name: "T.G.I. Friday's",
	location: "up the street",
	thisLogger: thisLogger,
	locationLogger: locationLogger,
	employees: [
	  {name: 'zach'},
	  {name: 'gabbie'},
	  {name: 'alex'},
	],
	listEmployees: listEmployees
}

const chipotle = {
	name: "Chipotle Mexican Grill",
	location: "down the street",
	thisLogger: thisLogger,
	locationLogger: locationLogger,
	employees: [
	  {name: 'dana'},
	  {name: 'evans'},
	  {name: 'ian'},
	],
	listEmployees: listEmployees
}


function dogFactory(name)  {
	return {
		name: name,
  	bark: function(){
    	console.log(`woof im ${this.name}`)
  	}
	}
}


// function Restaurant(name, location) {
// 	console.log(this)
// 	this.name = name
// 	console.log(this)
// 	this.location = location
// 	console.log(this)
// }
//
// Restaurant.prototype.open = function() {
// 	console.log(`${this.name} is open`);
// }

class Restuarant {
	constructor(name, location) {
		this.name = name
		// self.name = name
		this.location = location
	}

	open() {
		// "#{self.name} is open"
		console.log(`${this.name} is open`);
	}
}
