class Chain {
	constructor(){
		var options = {
			bodyA:bird.body,
			bodyB:log6.body,
			stiffness:0.1,
			length:200
		}
		this.chain=Matter.Constraint.create(options);
		World.add(world,this.chain)

	}
	display(){
		stroke("red")
		var pointA=this.chain.bodyA.position
		var pointB=this.chain.bodyB.position
		line(pointA.x,pointA.y,pointB.x,pointB.y)
			}
}