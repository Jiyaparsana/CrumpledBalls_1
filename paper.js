class Paper {
    constructor(){
        var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
        }
 this.body= Bodies.circle(x,y,radius,options)
      
        this.radius=3
        World.add(world, this.body);
    }
    display(){
      ellipseMode(CENTER)
   var pos=this.body.position
     ellipse(pos.x,pos.y,this.radius)
    }
}