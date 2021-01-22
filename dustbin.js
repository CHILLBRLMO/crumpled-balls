class Dustbin{

constructor(x,y){

    var options = {
        isStatic: true
    }   
this.dustbinwidth=200;
this.dustbinheight = 100;
this.wallthicknes = 20;
this.angle = 0;


this.bottomBody = Bodies.rectangle(x,y,this.dustbinwidth,this.wallthicknes,options)
this.leftWallBody = Bodies.rectangle(x-this.dustbinwidth/2,y-this.dustbinheight/2,
    this.wallthicknes,this.dustbinheight,options);

this.rightWallBody = Bodies.rectangle(x+this.dustbinwidth/2,y-this.dustbinheight/2,
    this.wallthicknes,this.dustbinheight,options);

    World.add(world,this.bottomBody);
    World.add(world,this.leftWallBody);
    World.add(world,this.rightWallBody);

    this.x = x;
    this.y = y;

}

display(){

var posLeft = this.leftWallBody.position;
var posRight = this.rightWallBody.position;
var posBottom = this.bottomBody.position;

push()
translate(posLeft.x, posLeft.y);
rectMode(CENTER)
//strokeWeight(4);
angleMode(RADIANS)
fill(255)
stroke(255)
rotate(this.angle)
rect(0,0,this.wallthicknes, this.dustbinheight);
pop();

push()
translate(posRight.x, posRight.y);
rectMode(CENTER)
//strokeWeight(4);
angleMode(RADIANS)
fill(255)
stroke(255)
rotate(this.angle)
rect(0,0,this.wallthicknes, this.dustbinheight);
pop();

push()
translate(posBottom.x, posBottom.y);
rectMode(CENTER)
//strokeWeight(4);
angleMode(RADIANS)
fill(255)
stroke(255)
rotate(this.angle)
rect(0,0,this.dustbinwidth, this.wallthicknes);
pop();


}
}