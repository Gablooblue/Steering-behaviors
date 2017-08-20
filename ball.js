function Ball(x, y)
{
    this.max_speed = 6;
    this.max_force = 4;


    this.acceleration = createVector(0,0);
    this.velocity = createVector(0,0);
    this.velocity = p5.Vector.random2D();
    this.target = createVector(x,y);
    //this.position = createVector(x,y);
    this.position = createVector(random(width), random(height));


    Ball.prototype.applyBehaviors = function()
    {
	var seek = this.seek(this.target);
	this.applyForce(seek);

	var mouse = createVector(mouseX, mouseY);
	var flee = this.flee(mouse)
	this.applyForce(flee);
    }
    Ball.prototype.seek = function(target)
    {
	var desired = p5.Vector.sub(target, this.position);
	var d = desired.mag();
	var speed = this.max_speed;
	if(d < 100)
	{
	    speed = map(d, 0, 100, 0, this.max_speed);
	}
	desired.normalize();
	desired.setMag(speed);
	var steer = p5.Vector.sub(desired, this.velocity);
	steer.limit(this.max_force);

	return steer;
    }

    Ball.prototype.applyForce = function(force)
    {
	this.acceleration.add(force);
    }

    Ball.prototype.update = function()
    {
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);
	this.acceleration.mult(0);
    }
    
    Ball.prototype.show = function()
    {
	stroke(255);
	strokeWeight(8)
	point(this.position.x, this.position.y);
    }

    Ball.prototype.flee= function(target)
    {
	var desired = p5.Vector.sub(target, this.position);
	var d = desired.mag();
	var speed = this.max_speed;
	if(d < 50)
	{
	    desired.mult(-1);
	    desired.normalize();
	    desired.setMag(speed);
	    var steer = p5.Vector.sub(desired, this.velocity);
	    steer.limit(this.max_force);
	}
	else
	{
	    steer = createVector(0, 0);
	}


	return steer;
    }

    Ball.prototype.attract = function(multiplier)
    {
	var target = createVector(random(width), random(height))
	var desired = p5.Vector.sub(target, this.position);
	var d = desired.mag();
	desired.mult(multiplier);
	var speed = this.max_speed;
	desired.normalize();
	desired.setMag(speed);
	var steer = p5.Vector.sub(desired, this.velocity);
	steer.limit(this.max_force);

	this.applyForce(steer);

    }
    
    Ball.prototype.changeTarget = function(x, y)
    {
	this.target.x = x;
	this.target.y = y;
    }
    
}
