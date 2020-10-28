class Polygon{
  constructor(x, y) {
  
      this.body = Bodies.circle(x, y, 30);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position; 
      ellipse(pos.x, pos.y, 30)
    }
  }