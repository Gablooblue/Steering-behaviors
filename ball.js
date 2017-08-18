function Ball(x, y)
{
    var max_speed = 0.5;
    var max_force = 4;


    this.acceleration = createVector(0,0);
    this.velocity = createVector(0,0);
    this.position = createVector(x,y);


    function seek(PVector target)
    {
	PVector desired = PVector.sub(target,location);
	desired.normalize();
	desired.mult(max_speed);
	PVector steer = PVector.sub(desired,velocity);

	steer.limit(max_force);
    }

    function applyForce(PVector force)
    {
	acceleration.add(force);
    }

    function update()
    {
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);
    }
}
