class Snow{
    constructor(x, y, r) {
        var options = {
            'restitution':0.4,
            isStatic:false
        }
        this.r=r
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}