input.onButtonPressed(Button.A, function () {
    if (moisture <= 300) {
        music.play(music.stringPlayable("C C5 D B C C5 D B ", 160), music.PlaybackMode.UntilDone)
    } else if (moisture <= 600) {
        music.play(music.stringPlayable("F A G F G A F G ", 120), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("B F D F D C5 D A ", 114), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("F A G F D F G A ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("- G A G D E G - ", 120), music.PlaybackMode.UntilDone)
})
let moisture = 0
basic.showString("MEDIA")
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogReadWritePin.P1)
    if (moisture <= 300) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        if (moisture <= 600) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
        basic.pause(2500)
    }
})
