canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;

car1_image="car1.jpg";
car2_image="car2.png";
background_image="background car.jpg";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
        console.log(up);
    }

    if(keyPressed=='40'){
        car1_down();
        console.log(down);
    }

    if(keyPressed=='37'){
        car1_left();
        console.log(left);
    }

    if(keyPressed=='39'){
        car1_right();
        console.log(right);
    }

    if(keyPressed=='87'){
        car2_up();
        console.log("key W");
    }

    if(keyPressed=='83'){
        car2_down();
        console.log("key S");
    }

    if(keyPressed=='65'){
        car2_left();
        console.log("key A");
    }

    if(keyPressed=='68'){
        car2_right();
        console.log("key D");
    }

    if(car1_x > 700){
        console.log("car1");
        document.getElementById('game_status').innerHTML = "Car 1 Won!!"; }
        else if(car2_x > 700) { 
        console.log("car2"); 
}
function car1up(){
if (car1_y >=0){
    car1_y=car1_y-10;
    console.log("when up arrow key is pressed, x = "+car1_x +"| y = "+car1_y);
    uploadbackground();
    upload_car1();
    upload_car2();                 
}
}

function car1_down(){
    if (car1_y <=500){
        car1_y=car1_y+10;
        console.log("when down arrow key is pressed, x = "+car1_x +"| y = "+car1_y);
        uploadbackground();
        upload_car1();
        upload_car2();                 
    }
    }

    function car1_left(){
        if (car1_x >=0){
            car1_x=car1_x-10;
            console.log("when left arrow key is pressed, x = "+car1_x +"| y = "+car1_y);
            uploadbackground();
            upload_car1();
            upload_car2();                 
        }
        }

        function car1_right(){
            if (car1_y <=700){
                car1_x=car1_x+10;
                console.log("when right arrow key is pressed, x = "+car1_x +"| y = "+car1_y);
                uploadbackground();
                upload_car1();
                upload_car2();                 
            }
        }