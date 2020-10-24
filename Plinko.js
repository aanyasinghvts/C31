class Plinko{
    constructor(x, y, radius) {
        var options = {
            'isStatic':true,
        }
        this.body = Bodies.circle(x, y, this.radius, options);
        this.radius = 10;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push(); 
        translate(this.body.position.x, this.body.position.y); 
        strokeWeight(4); 
        stroke("white"); 
        fill("white"); 
        ellipseMode(CENTER); 
        ellipse(this.x,this.y,this.radiusX,this.radiusY); 
        pop();
      }
}