class Box {
    constructor(x, y, width, height){

    var options = {
    
        'restitution':0.3,
        'friction':1.0,
        'density':1.0

    }
    this.body=Bodies.rectangle(x, y, width, height);
    this.width=width;
    this.height=height;

    World.add(world, this.body);
    }
     display(){
     push();
     rectMode(CENTER);
  
     pop();
     }
}