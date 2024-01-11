scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(2, 3), true)
    tiles.setWallAt(tiles.getTileLocation(3, 3), true)
    tiles.setWallAt(tiles.getTileLocation(6, 2), true)
    tiles.setWallAt(tiles.getTileLocation(7, 2), true)
    tiles.setWallAt(tiles.getTileLocation(8, 2), true)
    tiles.setWallAt(tiles.getTileLocation(3, 7), true)
    tiles.setWallAt(tiles.getTileLocation(4, 7), true)
    tiles.setWallAt(tiles.getTileLocation(3, 8), true)
    tiles.setWallAt(tiles.getTileLocation(4, 8), true)
    tiles.setWallAt(tiles.getTileLocation(7, 8), true)
    tiles.setWallAt(tiles.getTileLocation(4, 11), true)
    tiles.setWallAt(tiles.getTileLocation(4, 12), true)
    tiles.setWallAt(tiles.getTileLocation(11, 12), true)
    tiles.setWallAt(tiles.getTileLocation(12, 12), true)
    tiles.setWallAt(tiles.getTileLocation(13, 12), true)
    tiles.setWallAt(tiles.getTileLocation(11, 4), true)
    tiles.setWallAt(tiles.getTileLocation(11, 5), true)
    tiles.setWallAt(tiles.getTileLocation(12, 4), true)
    tiles.setWallAt(tiles.getTileLocation(12, 5), true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite.sayText(":)")
    sprites.destroy(mySprite2)
    scene.cameraShake(8, 600000)
    info.startCountdown(60)
    mySprite.startEffect(effects.halo)
    info.setLife(3)
    game.setGameOverMessage(true, "WIN!")
    mySprite3 = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite3.setVelocity(-100, -100)
    mySprite3.follow(mySprite, 70)
    mySprite.sayText(":0")
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . . b 1 1 b . . 
    . . b 5 5 b . . 
    . . b d d b . . 
    . . c d d c . . 
    . . c 3 3 c . . 
    . . . f f . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
scene.setBackgroundColor(8)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
mySprite2.setPosition(randint(10, 150), randint(10, 150))
info.startCountdown(25)
