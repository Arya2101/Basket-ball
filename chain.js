class chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(body){
        this.chain.bodyA = body;
        
    }
    display(){
        if(this.chain.bodyA){
            var pA = this.chain.bodyA.position;
            var pB = this.pointB;
            strokeWeight(0);
            line(pA.x,pA.y,pB.x,pB.y);   
            

     }
      }
}
