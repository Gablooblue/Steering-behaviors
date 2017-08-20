function Ball(x, y)
{
    this.max_speed = 0.5;
    this.max_force = 4;


    this.acceleration = createVector(0,0);
    this.velocity = createVector(0,0);
    this.target = createVector(x,y);
    this.position = createVector(x,y);


    /*Ball.prototype.seek = function(Vector target)
    {
	//PVector desired = PVector.sub(target,location);
	this.desired = createVector(0,0);
	this.steer = createVector(0,0);
	desired = location.sub(target);
	desired.normalize();
	desired.mult(max_speed);
	steer = velocity.sub(desired);

	steer.limit(max_force);
    }

    Ball.prototype.applyForce = function(Vector force)
    {
	acceleration.add(force);
    }*/

    Ball.prototype.update = function()
    {
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);
    }
    
    Ball.prototype.show = function()
    {
	stroke(255);
	strokeWeight(8)
	point(this.position.x, this.position.y);
    }
}
