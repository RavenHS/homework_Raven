//Declare a variable and assign a value
var reaction = "";

$('#run').on('click', runLap);
$('#stop').on('click', stopRunning);

function runLap()
{
    //use your variable here
    $('#roxy').attr('src','./images/roxy.gif');
    console.log("#run was clicked");

    if (run = true){
	reaction = "WOOF WOOF!!!"
	}
	//else {
	//reaction = "*sad whimper*"
	//}
	$('#result').html(reaction);
	$('#result').show();
}

function stopRunning()
{
	$('#roxy').attr('src','./images/roxystop.jpg');

    if (stop = true){
	reaction = "*sad whimper*"
	}
	$('#result').html(reaction);
	$('#result').show();
	
}


