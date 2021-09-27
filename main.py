scene.set_background_color(9)
mySprite = sprites.create(img("""
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
""")),
SpriteKind.player
def on_update_interval():
    projectile = sprites.create_projectile_from_sprite(img("""
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
    """),
    mySprite,
    randint (-25, 25), 0)
    randint (-25, 25)
    projectile.lifespan = 3000
    if projectile.vx < 0:
        projectile.image.flip_x()
game.on_update_interval(1000, on_update_interval)


