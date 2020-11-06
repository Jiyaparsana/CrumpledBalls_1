class Dustbin{
    constructor(){

this.body = Bodies.rectangle(400,640,20,100);
this.width = 20;
this.height = 100;
World.add(world, this.body);

    }
    display(){
rectMode(CENTER)
var pos = this.body.position
rectangle(pos.x,pos.y,this.width,this.height)
this.body.shapeColor= "red"

    }
}