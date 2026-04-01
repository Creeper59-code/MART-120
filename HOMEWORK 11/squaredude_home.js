
var xd = 250
var yd = 250

function setup()
{
    createCanvas (500,500);
}

function draw()
{
    background(50)
    fill(250,0,0)
    square(xd,yd,25)    
}

function keyPressed()
{
   if (key == 'd')
   {
    xd += 25;
   }
   else if (key == 'a')
   {
    xd -= 25;
   }
   else if (key == 'w')
   {
    yd -= 25;
   }
   else if (key == 's')
   {
    yd += 25;
   }
}
