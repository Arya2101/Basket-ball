class ball{
    constructor(x, y) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.image = loadImage("ball.PNG");
        World.add(world, this.body);
      }
      display(){
          
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,80,80);
        pop();
      }
 }

 