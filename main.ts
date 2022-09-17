let op_grond = false
let iets_gezien = false
input.onGesture(Gesture.LogoDown, function () {
    op_grond = false
})
input.onGesture(Gesture.LogoUp, function () {
    op_grond = true
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 30) {
        iets_gezien = true
    } else {
        iets_gezien = false
    }
})
basic.forever(function () {
    if (op_grond) {
        while (op_grond) {
            if (iets_gezien == true) {
                basic.showLeds(`
                    . # # # .
                    # # . . #
                    # . # . #
                    # . . # #
                    . # # # .
                    `)
                maqueen.motorStop(maqueen.Motors.All)
                basic.pause(500)
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 154)
                basic.pause(100)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            } else {
                while (iets_gezien == false) {
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
                    basic.showLeds(`
                        . # . . .
                        . # # . .
                        # # # # .
                        . # # . .
                        . # . . .
                        `)
                    basic.showLeds(`
                        . . # . .
                        . . # # .
                        . # # # #
                        . . # # .
                        . . # . .
                        `)
                    basic.showLeds(`
                        . . . # .
                        . . . # #
                        . . # # #
                        . . . # #
                        . . . # .
                        `)
                    basic.showLeds(`
                        . . . . #
                        . . . . #
                        # . . # #
                        . . . . #
                        . . . . #
                        `)
                    basic.showLeds(`
                        . . . . .
                        # . . . .
                        # # . . #
                        # . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        # . . . .
                        # # . . .
                        # # # . .
                        # # . . .
                        # . . . .
                        `)
                    break;
                }
            }
        }
    } else if (op_grond == false) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
