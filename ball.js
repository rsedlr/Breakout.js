class Ball {
  constructor() {
    this.diam = 10
    this.rad = this.diam / 2
    this.col = color('#fff')
    this.pos = createVector(width / 2, 470)
    this.vel = createVector(0, 0)
    this.speed = 3.5
    this.touching = false
  }

  draw() {
    fill(this.col)
    ellipse(this.pos.x, this.pos.y, this.diam, this.diam)
  }

  move() {
    if (this.pos.x - this.rad < 0 || this.pos.x + this.rad > width) {
      this.vel.x = -this.vel.x
    }
    if (this.pos.y - this.rad < 0) {
      this.vel.y = -vel.y
    }

    if (this.pos.y + this.rad > 500) return true

    this.pos.add(this.vel)
    return false
  }

  fire() {
    var angle
    angle = random(3.94, 5.48)
    this.vel = p5.Vector.fromAngle(angle)
    this.vel.mult(ballSpeed)
  }
}
