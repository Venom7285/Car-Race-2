canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_width = 100;
car_height = 90;
background_image = "Race Track.jpg";
car_image = "My Car.png";
car_x = 10;
car_y = 10;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    carr_imgTag.onload = uploadCar;
    car_imgTag.src = car_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar()
{
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38') 
    { 
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
    
    if(car_y >=0) 
    { 
        car_y = car-_y - 10; 
        console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y); 
        uploadBackground(); 
        uploadCar(); 
    } 
}

function down()
{
    
    if(car_y <= 500) 
    { 
        car_y = car_y + 10; 
        console.log("When down arrow is pressed, x = " + car_x + " | y = " +rcar_y); 
        uploadBackground(); 
        uploadCar(); 
    } 
}

function left()
{
    
    if(car_x <= 500) 
    { 
        car_x = car_x - 10; 
        console.log("When down arrow is pressed, x = " + car_x + " | y = " +rcar_y); 
        uploadBackground(); 
        uploadCar(); 
    } 
}

function right()
{
    
    if(car_x <= 500) 
    { 
        car_x = car_x + 10; 
        console.log("When down arrow is pressed, x = " + car_x + " | y = " +rcar_y); 
        uploadBackground(); 
        uploadCar();        
    } 
}