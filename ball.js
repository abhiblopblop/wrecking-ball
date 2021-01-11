class Ball {

    constructor(x,y,w,h){
    
    var options = {isStatic: false, density:1, frictionAir: 0.001}
    this.body = Bodies.rectangle(x,y,w,h,options)
    World.add(world, this.body)
    this.w = w, this.h = h
    }
    
    display(){
    fill("green")
    ellipseMode(RADIUS)
    ellipse(this.body.position.x, this.body.position.y, this.w, this.h)
    }
    
    }