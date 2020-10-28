class Box{
    constructor(x, y, width, height) {
        var options = {
            restitution:0.8,
            friction:0.8,
            density:0.1       
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("box2.png")
        this.Visiblity = 255;
        World.add(world, this.body);

      }

    
      score(){
        if(this.Visiblity<0 && this.Visiblity > -105){
          score++
        }
      } 
      
      display(){
        if(this.body.speed < 3){
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

        } else {
          
          push();
          World.remove(world, this.body); 
          this.Visiblity = this.Visiblity - 6;
          tint(255, this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
          pop();
          
        }
     }
    }

    