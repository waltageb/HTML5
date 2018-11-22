

class person{
	constructor(name,canDance){
		this.name = name;
		this.canDance = canDance;
		this.speak = function(){
			console.log('hello my name is ${this.name} and people say I can dance thats ${this.canDance}' ) ;
		}
	}
}

let davidObj = new person("David", true);
let wadeObj = new person("Wade", false);
wadeObj.canDance = true;
let leo = new person("Leonid", false);
let mike = new person(); 

davidObj.speak();
wadeObj.speak();
leo.speak();