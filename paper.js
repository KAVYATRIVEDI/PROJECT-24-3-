class Paper{
    constructor(x,y,width,height){

        var options={

            isStatic :false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x, y, width, height);

        pos.x=750;
        pos.y=350;
        this.width=20;
        this.height=20;
        
       

    
        World.add(world, this.body);
        }
         display(){
         push();
         translate(this.body.position.x, this.body.position.y);
         rectMode(CENTER);
         circle(pos.x, pos.y, this.width, this.height);
         pop();
         }
    }
    
    
