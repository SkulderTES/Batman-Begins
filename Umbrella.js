class Umbrella
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
            }
            
        this.r=50
        this.image = loadImage("images/Walking Frame/walking_1.png");
		this.body=Bodies.circle(x, y, 50, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var umbrellapos=this.body.position;		
            imageMode(CENTER);
            image(this.image,umbrellapos.x,umbrellapos.y + 70,300,300);
	}

}