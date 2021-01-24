class Throw{
    constructor(BodyA,pointB){
        var option ={
            bodyA:BodyA,
            pointB:pointB,
            stiffness:0.01,
            length:10
        }
        this.pointB = pointB;
        this.throw = Matter.Constraint.create(option)
        World.add(world,this.throw)
    }
    fly(){
        this.throw.bodyA = null
    }
    pheko(){
        this.throw.bodyA = BodyA
    }
    display(){
        if(this.throw.bodyA){
            var posA = this.bodyA.position;
            var posB = this.pointB
            line(posA.x,posA.y,posB.x,posB.y)
        }
    }
}