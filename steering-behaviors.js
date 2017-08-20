var balls = [];
var font;
var scramble = false;

function preload()
{
    font = loadFont('Asimov.otf');
}
function setup()
{
    createCanvas(600, 600);
    background(0);
    textSize(200);
    fill(255);
    //text("Test", 100, 300)

    var points = font.textToPoints('Test', 100,300);
    points.forEach(function(p)
    {
	var ball = new Ball(p.x, p.y);
	balls.push(ball);
    });
}

function draw()
{
    background(0);
    balls.forEach(function(ball)
    {
	if(!scramble)
	{
	    ball.applyBehaviors();
	}
	else
	{
	    ball.scramble();
	}
	ball.update();
	ball.show();
    });
}

function mousePressed()
{
    if(scramble)
    {
	scramble = false;
    }
    else
    {
	scramble = true;
    }
}
