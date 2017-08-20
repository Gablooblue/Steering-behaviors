var balls = [];
var font;
var scramble = false;
var displayText = "Fag";

function preload()
{
    font = loadFont('Asimov.otf');
}
function setup()
{
    createCanvas(600, 450);
    background(0);
    fill(255);
    textSize(200);
    textAlign(CENTER);

    var points = font.textToPoints(displayText, 100, 300);
    points.forEach(function(p)
    {
	var ball = new Ball(p.x, p.y);
	balls.push(ball);
    });
}

function draw()
{
    background(0);
    if(!scramble)
    {
	balls.forEach(function(ball)
	{
	    ball.applyBehaviors();
	    ball.update();
	    ball.show();
	});
    }
    else
    {
	moveAll(-100);
    }
}

function mousePressed()
{
    /*if(scramble)
    {
	scramble = false;
    }
    else
    {
	scramble = true;
    }*/
    changeWord();
}

function changeWord()
{
    displayText= "T";
    var points = font.textToPoints(displayText, 100, 300);
    moveAll(1000);
    if(balls <= points)
    {
	for(i = 0; i < points.length; i++)
	{
	    var p = points[i];
	    if(balls[i] != undefined)
	    {
		balls[i].changeTarget(p.x, p.y);
	    }
	    else
	    {
		var ball = new Ball(p.x, p.y);
		balls.push(ball);
	    }
	}
    }
    else
    {
	var difference = balls.length - points.length;
	for(;difference > 0; difference--)
	{
	    balls.pop();
	}
	for(i = 0; i < points.length; i++)
	{
	    var p = points[i];
	    balls[i].changeTarget(p.x, p.y);
	}

    }
}

function moveAll(m)
{
   balls.forEach(function(ball)
   {
       ball.attract(m);
       ball.update();
       ball.show();
   });
}

