class Cannonball {
    constructor(x, y) {
      var options = {
        isStatic: true,
    
        restitution:0.8,
        friction:1.0,
        density:1.0
      };
     
      this.radius = 40;
      this.body = Bodies.circle(x, y, this.radius, options);
    this.image = loadImage("assets/cannonball.png")

      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle= this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.radius, this.radius);
      pop();

    }
    shoot(){
    var v=p5.Vector.fromAngle( cannon.angle) 
    v.mult(20);
    Matter.Body.setStatic(this.body,false) 
    Matter.Body.setVelocity(this.body,{x:v.x,y:v.y});
    
        
    }
  }