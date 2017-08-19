function Ball(x, y)
{
    this.max_speed = 0.5;
    this.max_force = 4;


    this.acceleration = createVector(0,0);
    this.velocity = createVector(0,0);
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
    }

    function update()
    {
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);
    }*/
}
