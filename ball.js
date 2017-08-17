class Ball
{
    PVector location;
    PVector velocity;
    PVector acceleration;

    float maxspeed;
    float maxforce;


    Ball(float x, y)
    {
	acceleration = new PVector(0,0);
	velocity = new PVector(0,0);
	location = new PVector(x,y);

	maxspeed = 0.1;
	maxforce = 4;
    }

    void seek(PVector target)
    {
	PVector desired = PVector.sub(target,location);
	desired.normalize();
	desired.mult(maxspeed);
	PVector steer = PVector.sub(desired,velocity);

	steer.limit(maxforce);
    }

    void applyForce(PVector force)
    {
	acceleration.add(force);
    }
}
