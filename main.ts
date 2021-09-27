scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 2 2 . 2 2 . 2 2 . . .
    . . . . . 2 2 . 2 2 . 2 2 . . .
    . . . . . 2 2 2 2 2 2 2 2 . . .
    . . . . . 2 2 2 2 2 2 2 2 . . .
    . . . . . . 2 2 2 2 2 2 . . . .
    . . . . . . 7 2 2 2 2 7 . . . .
    . . . . . . . 7 7 7 7 . . . . .
    . . . . . . . . 7 7 . . . . . .
    . . . . . . 7 7 7 7 7 7 . . . .
    . . . . . . . 7 7 7 7 . . . . .
    . . . . . . . . 7 7 . . . . . .
    . . . . . . . . 7 7 . . . . . .
    . . . . . . . . . . . . . . . .
`)
SpriteKind.Player
game.onUpdateInterval(1000, function on_update_interval() {
    let projectile = sprites.createProjectileFromSprite(img`
        . . . . . . f f . f f . . . . .
        . . . . . . f . . f . . . . . .
        . . . . . . f e e f . . . . . .
        . . . . . . e 5 5 e . . . . . .
        . . . . . . 5 f 5 f . . . . . .
        . . . . 1 . 5 5 1 5 . 1 . . . .
        . . . . 1 1 5 5 5 5 1 1 . . . .
        . . . . . 1 f f f f 1 . . . . .
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . . . f f f f f f . . . . .
        . . . . . 5 5 5 5 5 5 . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . f . . f . . . . . .
        . . . . . . f . . f . . . . . .
        . . . . . . f . . f . . . . . .
        . . . . 5 f f . . f f 5 . . . .
    `, mySprite, randint(-25, 25), 0)
    randint(-25, 25)
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
    
})
