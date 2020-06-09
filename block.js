class Block {
  constructor(newX, newY, newC, newPoints) {
    this.w = width / 14
    this.h = 25
    this.x = newX
    this.y = newY
    this.c = newC
    this.points = newPoints
  }

  draw() {
    fill(this.c)
    rect(this.x, this.y, this.w, this.h)
  }

  hit(ball) {
    var a = false
    if (this.collides(ball.pos.x + ball.vel.x, ball.pos.y, ball.rad)) {
      ball.vel.x *= -1
      a = true
    }
    if (this.collides(ball.pos.x, ball.pos.y + ball.vel.y, ball.rad)) {
      ball.vel.y *= -1
      a = true
    }
    return a
  }

  collides(ballX, ballY, rad) {
    var closeX = ballX
    var closeY = ballY

    if (ballX < this.x - this.w / 2) closeX = this.x - this.w / 2
    else if (ballX > this.x + this.w / 2) closeX = this.x + this.w / 2
    if (ballY < this.y - this.h / 2) closeY = this.y - this.h / 2
    else if (ballY > this.y + this.h / 2) closeY = this.y + this.h / 2

    var dis = sqrt(sq(ballX - closeX) + sq(ballY - closeY))
    if (dis < rad) return true // if inside block
    return false
  }
}
