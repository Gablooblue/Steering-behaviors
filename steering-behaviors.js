var balls = [];

function setup()
{
    createCanvas(1200, 550);
}

function draw()
{
    background(0);
    ball = new Ball;
    balls.add(ball);
    for(x = 0; x < balls.length; x++)
    {
	balls[x].update;
    }
}
