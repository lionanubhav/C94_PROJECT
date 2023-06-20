
// Create canvas variable

var canvas = new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.

ball_x=0;
ball_y=0;
holl_x=800;
holl_y=400;


block_image_width = 5;
block_image_height = 5;

function load_img()
{
	fabric.Image.fromURL("golf-h.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		top:holl_y,
		left:holl_x
		});
		canvas.add(ball_obj);
		});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_obj);
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	

	if((ball_x==holl_x)&&(ball_y==holl_y))
	{
		canvas.remove(ball_obj);

		document.getElementById('hd3').innerHTML="You have Hit the GOAL!!!";
		document.getElementById('myCanva').style.borderColor="red";	
	}
	
	else{
		if(keyPressed == '38')

			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	function up()
	{
		if(ball_y >=5)
		{
			
			ball_y = ball_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
    //Complete the code for the "down()" function
	function down()
	{
		
		{if(ball_x >450)
					
			ball_y = ball_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();

		}
	}


	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

    //Complete the code for the "right()" function
	function right()
	{

		if(ball_x >1050)
		{
			ball_x = ball_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}

	}