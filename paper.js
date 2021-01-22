class Paper{
    constructor(x,y){
        var paper_options={
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.radius=10;
        this.image = loadImage("paper.png")
        this.body=Bodies.circle(x,y,this.radius, paper_options);
	    World.add(world, this.body);
    }
    
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 30, 30);
    }
}