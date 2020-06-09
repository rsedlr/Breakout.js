class Player {
  constructor() {
    this.score = 0
    this.x = width / 2
    this.y = 480
    this.w = 50
    this.h = 5
    this.speed = 7
    this.c = color('#fff')
    this.canFire = true
    this.alive = true
    this.ball = new Ball()
    this.blocks = []
    this.row = 9
    this.col = 14
    this.scores = [7, 5, 3, 1]
    this.colors = [
      color('#f00'),
      color('#ff7300'),
      color('#0f0'),
      color('#ff0'),
    ]

    this.makeBlocks()
  }

  draw() {
    fill(this.c)
    rect(this.x, this.y, this.w, this.h)
    this.drawBlocks()
    this.ball.draw()
  }

  drawBlocks() {
    for (var i = 0; i < this.blocks.length; i++) {
      this.blocks[i].draw()
    }
  }

  move() {
    if (this.ball.move()) this.alive = false
  }

  makeBlocks() {
    var spacingX = width / this.col
    var spacingY = 25
    var offset = 10
    var a = 0
    for (var j = 1; j < this.row; j++) {
      for (var i = spacingX / 2; i < width; i += spacingX) {
        // console.log(this.scores[a])
        this.blocks.push(
          new Block(i, j * spacingY + offset, this.colors[a], this.scores[a]) //
        )
      }
      if (j % 2 == 0) a++
    }
  }

  collisions() {
    // collisions with paddle
    if (
      this.ball.pos.x < this.x + this.w / 2 &&
      this.ball.pos.x > this.x - this.w / 2 &&
      this.ball.pos.y + this.ball.rad > this.y - this.h / 2 &&
      this.ball.pos.y < this.y
    ) {
      this.ball.vel.y = -Math.abs(this.ball.vel.y)
      if (!this.ball.touching) {
        this.ball.vel.rotate((this.ball.pos.x - this.x) / 50)
        if (this.ball.vel.heading() > -0.42) {
          this.ball.vel = p5.Vector.fromAngle(-0.42)
          this.ball.vel.mult(ballSpeed)
        } else if (this.ball.vel.heading() < -2.72) {
          this.ball.vel = p5.Vector.fromAngle(-2.72)
          this.ball.vel.mult(ballSpeed)
        }
      }
      this.ball.touching = true
    } else {
      this.ball.touching = false
    }

    // collisions with blocks
    for (var i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].hit(this.ball)) {
        this.score += this.blocks[i].points
        this.blocks.splice(i, 1)
        console.log(`score: ${this.score}`)
      }
    }
  }

  fire() {
    if (this.canFire) {
      this.ball.fire()
      this.canFire = false
    }
  }

  left() {
    if (!this.canFire) {
      if (this.x - this.speed > this.w / 2) {
        this.x -= this.speed
      } else if (this.x > this.w / 2) {
        this.x = this.w / 2
      }
    }
  }

  right() {
    if (!this.canFire) {
      if (this.x + this.speed < width - this.w / 2) {
        this.x += this.speed
      } else if (this.x < width - this.w / 2) {
        this.x = width - this.w / 2
      }
    }
  }
}
