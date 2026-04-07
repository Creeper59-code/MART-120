
var xd = 0
var yd = 0
var i = 0
var x1 = 250
var x1s = Math.floor(Math.random() * 2) + 1;
var x2 = 250
var x2s = Math.floor(Math.random() * 2) + 1;
var y1 = 250
var y1s = Math.floor(Math.random() * 2) + 1;
var y2 = 250
var y2s = Math.floor(Math.random() * 2) + 1;
var mx = -50
var my = -50

function setup()
{
    createCanvas (500,500);
    

}

function draw()
{
    background(50);

    // square dude :)
    fill(0,250,0);
    square(xd,yd,25);
    
    // exit
    fill(250,250,250);
    rect(475,475,50,75);
     
    // obstacles
    fill(250,0,0);
    square(x1,y1,50);
    circle(x2,y2,35);

    //mouse obstacle
    fill(0,250,0);
    square(mx, my, 20);
    fill(0,0,250);
    square((mx+5), (my+5), 10);

    // obstacle movement
    x1 += x1s
    y1 += y1s
    x2 -= x2s
    y2 -= y2s

    // obstacles bounce
    if(x1 <= 0 || x1 >= 450)
        {
            x1s *= -1;
        }

    if(y1 <= 0 || y1 >= 450)
        {
            y1s *= -1;
        }

     if(x2 <= 17.5 || x2 >= 482.5)
        {
            x2s *= -1;
        }

    if(y2 <= 17.5 || y2 >= 482.5)
        {
            y2s *= -1;
        }

    //exit function
    if(xd >= 500 && yd >=500)
    {
        text("You Win!", width/2+25, height/2+25);
    }

}

function keyPressed()
{
   if (key == 'd')
   {
    xd += 12.5;
   }
   else if (key == 'a')
   {
    xd -= 12.5;
   }
   else if (key == 'w')
   {
    yd -= 12.5;
   }
   else if (key == 's')
   {
    yd += 12.5;
   }
}

function mousePressed()
{
    mx = mouseX - 10
    my = mouseY - 10
}


