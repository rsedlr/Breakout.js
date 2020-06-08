class Ball {
  constructor() {
    this.diam = 10
    this.rad = this.diam / 2
    this.col = color(255)
    // this.pos = PVector
    // this.vel = PVector
    this.touching = false
  }

  draw() {
    // fill(col)
    ellipse(this.pos.x, this.pos.y, this.diam, this.diam)
  }

  move() {
    if (this.pos.x - this.rad < 0 || this.pos.x + rad > width) {
      this.vel.x = -this.vel.x
    }
    if (this.pos.y - rad < 0) {
      this.vel.y = -vel.y
    }

    if (this.pos.y + rad > 500) return true

    this.pos.add(this.vel)
    return false
  }

  fire() {
    var angle
    angle = random(3.94, 5.48)
    this.vel = PVector.fromAngle(angle)
    this.vel.mult(ballSpeed)
  }
}
