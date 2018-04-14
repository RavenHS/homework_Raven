var name = "Raven";
var age = 26;
console.log("My name is " + name + ". I'm " + age + " years old.");

age += 10;
console.log("In ten years I'll be " + age + "." );
age -= 10;
age --;
console.log("Last year, I was " + age + " years old.");

var dogs = {
  'bulldog': ['Roxanne','Babygirl'],
  'maltipoo': ['Fiona', 'Ona-bona']
};
console.log("My dog's name is " + dogs.bulldog[1] + ". And her sister's name is " + dogs.maltipoo[0] + ".");

var ravenIsDope = true;

if (ravenIsDope == 1)
{
    console.log("Yeah she is!")
}else {
  console.log("Why you hatin?")
}


var doMagic = function(){
  console.log("Omg! Coding is awesome!");
}
doMagic();
