def on_on_overlap(sprite, otherSprite):
    sprites.destroy(mySprite2)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

mySprite2: Sprite = None
mySprite = sprites.create(img("""
        . . . . f f f f f . . . . . . . 
            . . . f e e e e e f f f . . . . 
            . . f d d d e e e e d d f . . . 
            . c d d d d d e e e b d c . . . 
            . c d d d d d d e e b d c . . . 
            c d d f d d f d e e f c . f f . 
            c d d f d d f d e e f . . f e f 
            c d e e d d d d e e f . . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f d e e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . . . f f e e e e e b f f . . 
            . . . f e f f e e c d d f f . . 
            . . f d d b d d c f f f . . . . 
            . . f d d c d d d f f . . . . . 
            . . . f f f f f f f . . . . . .
    """),
    SpriteKind.player)
mySprite2 = sprites.create(img("""
        . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . .
    """),
    SpriteKind.food)
controller.move_sprite(mySprite)
mySprite.set_stay_in_screen(True)
scene.set_background_color(7)
mySprite2.set_position(randint(0, 40), randint(0, 40))