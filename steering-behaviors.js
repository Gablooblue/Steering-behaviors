var balls = [];
var font;

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
	console.log(p);
	stroke(255);
	strokeWeight(8);
	point(p.x, p.y);
    });
}

function draw()
{

}
