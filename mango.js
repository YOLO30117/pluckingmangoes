class mango{
    constructor(x,y,diametre){
        var option ={
            isStatic:true,
            restitution:0.5,
            friction:1
        }
        this.body = Bodies.circle(x,y,diametre,option)
        this.diametre = diametre
        this.image = loadImage("Plucking mangoes/mango.png")
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.diametre)
        pop()
    }
}