class SlingShot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.5
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
display(){
 var point1=this.sling.bodyA.position
 var point2=this.sling.bodyB.position
 strokeWeight(4)   
 line(point1.x,point1.y,point2.x,point2.y)
}
}