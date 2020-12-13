class CrumpledPaper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        //this.height = height;
        World.add(world, this.body);

        this.paper = loadImage("image/paper.png")
      }
      display(){
        imageMode(CENTER)
        image(this.paper,200,200)
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate (this.body.angle)
        ellipseMode(RADIUS);
        fill("white");
        noStroke()
        ellipse(0, 0, this.radius,this.radius);
       pop ();
      }
    }