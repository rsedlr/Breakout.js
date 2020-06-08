import { Ball } from './ball.js'
import { Block } from './block.js'
import { Player } from './player.js'
import { HUD } from './HUD.js'

var ballSpeed = 4.5
// var player = new player()
var paused = false
var heldKeys = [false, false, false] // left, right, fire

function setup() {
  createCanvas(500, 700)
  frameRate(60)
  rectMode(CENTER)
  strokeWeight(0)
}

function draw() {
  if (!paused) {
    background(110)
    rect(width / 2, 500, width, 2)
    // if (player.alive) {
    if (true) {
      if (heldKeys[0]) {
        console.log('left')
        // player.left()
      }
      if (heldKeys[1]) {
        console.log('right')
        // player.right()
      }
      if (heldKeys[2]) {
        console.log('fire')
        // player.fire()
      }
      // player.move()
      // player.collisions()
      // player.draw()
    } else {
      // if (player.score > bestScore) bestScore = player.score
      // player = new Player()
    }
  } else {
    rect(width / 2, 10, width, 5)
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    heldKeys[0] = true
  } else if (keyCode === RIGHT_ARROW) {
    heldKeys[1] = true
  } else if (keyCode === UP_ARROW) {
    heldKeys[2] = true
  } else if (keyCode === 32) {
    // space bar
    paused = !paused
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    heldKeys[0] = false
  } else if (keyCode === RIGHT_ARROW) {
    heldKeys[1] = false
  } else if (keyCode === UP_ARROW) {
    heldKeys[2] = false
  }
}
