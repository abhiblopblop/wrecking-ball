class Chain {

    constructor(obj1, point1){
    
    var options = {bodyA: obj1, pointB: point1, stiffness: 1, length:500}
    this.body = Constraint.create(options)
    World.add(world, this.body)
    this.point = point1
    }
    
    display(){
    stroke("black")
    strokeWeight(10)
    line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.point.x, this.point.y)
    }
    
    }