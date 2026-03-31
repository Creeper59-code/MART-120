 
var x1 = 150
var x2 = 175
var x3 = 100
var y1 = 200
var y2 = 200
var y3 = 240
var t = 20
var tg = 2
var number1 = Math.floor(Math.random() * 4) + 1;
var number2 = Math.floor(Math.random() * 4) + 1;
var number3 = Math.floor(Math.random() * 4) + 1;
var number4 = Math.floor(Math.random() * 4) + 1;
var number5 = Math.floor(Math.random() * 4) + 1;

 function setup()
            {
                createCanvas(300,600);
            }
            function draw()
            {
                background(220);
                fill(100,100,100);
                ellipse(x1,240,125,65);
                fill(210,180,140);
                circle(150,y1,75);
                fill(250,250,250);
                ellipse(125,y2,50,15);
                ellipse(x2,200,50,15);
                fill(0,0,250)
                circle(105,200,10)
                circle(155,200,10)
                fill(0,0,0);
                line(145,225,175,215);
                line(180,210,175,215);
                square(x3,y3,100);
                rect(115,175,70,10);
                point(105,200);
                point(155,200);
                textSize(t);
                text('Teenage hoodie master',0,50);
                textSize(20);
                text('Remington Licht',50,550);
                fill(150,75,0);
                triangle(115,200,120,155,145,145);
                triangle(125,200,130,155,155,145);
                triangle(175,200,185,155,155,145);
                triangle(155,200,165,155,135,145);

                x1 -= number1
                 if(x1 <= 100 || x1 >= 200 )
    {
        number1 *= -1;
    }

                x2 += number2
                 if(x2 <= 0 || x2 >= 300 )
    {
        number2 *= -1;
    }

                y1 -= number3
                 if(y1 <= 175 || y1 >= 225 )
    {
        number3 *= -1;
    }

                y2 += number4
                 if(y2 <= 100 || y2 >= 400 )
    {
        number4 *= -1;
    }

                x3 -= number5
                y3 -= number5
                 if(x3 && y3 <= 25 || x3 && y3 >= 250 )
    {
        number5 *= -1;
    }

                t += tg
                  if(t <= 5 || t >= 100)
                  {
                    tg *= -1;
                  }
            }