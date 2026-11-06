moisture = 0

def on_forever():
    global moisture
    moisture = pins.analog_read_pin(AnalogReadWritePin.P1)
    if moisture <= 300:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
    else:
        if moisture <= 600:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                """)
        else:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                """)
        basic.pause(2500)
basic.forever(on_forever)
