//Declare a variable and assign the value to be an array
var dogBreeds = [];
console.log(dogBreeds);

dogBreeds[0] = 'American Bulldog';
dogBreeds[1] = 'Maltipoo';
dogBreeds[2] = 'Beagle';
dogBreeds[3] = 'Corgi';
dogBreeds[4] = 'Dalmation';

//Use .push() to add an value to the array
dogBreeds.push('Siberian Husky');

//Use an index reference to add a value to the array
dogBreeds.splice(5, 0);
//Use splice to take the first item off the array
dogBreeds.splice(0,1);

//Use $.each() to iterate your array and print the value at each index to the console.log
$.each(dogBreeds, function(index, value){
	$('#dogsArray').append('<li class="list-group-item">' + value + '</li>')
});

//BONUS: Create a <ul> in the HTML and use $.each() to add each value as a <li>

$('#addDogs').on('click', function(){
    var dog = $('#dog').val();

    if(dog != '')
    {
    	dogBreeds.push(dog);
	    $('#dogsArray').append('<li class="list-group-item">' + dog + '</li>');
	    $('#dog').val('');
    }

});