radio.onReceivedNumber(function (receivedNumber) {
    remote = receivedNumber
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    command = 5
    basic.showNumber(command)
})
input.onButtonPressed(Button.A, function () {
    command = 1
    basic.showNumber(command)
})
function displayStatus () {
    serial.writeLine("" + (status))
}
function alarm () {
    joystickbit.Vibration_Motor(500)
    basic.showNumber(remote)
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
    remote = 0
}
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    command = 2
    basic.showNumber(command)
})
input.onButtonPressed(Button.AB, function () {
    command = 32
    basic.showNumber(command)
})
radio.onReceivedString(function (receivedString) {
    status = receivedString
    displayStatus()
})
input.onButtonPressed(Button.B, function () {
    command = 4
    basic.showNumber(command)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    command = 1
    basic.showNumber(command)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    command = 6
    basic.showNumber(command)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    command = 33
    basic.showNumber(command)
})
let status = ""
let remote = 0
let command = 0
basic.showString("BPZC8AG5")
command = 0
radio.setGroup(5)
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(100)
basic.forever(function () {
    command = 0
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        command = 12
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
            command = 11
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else {
            if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
                command = 14
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
            } else {
                if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
                    command = 13
                    basic.showLeds(`
                        . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
                        `)
                }
            }
        }
    }
    if (command > 0) {
        radio.sendNumber(command)
        command = 0
    }
    if (remote > 0) {
        basic.showNumber(remote)
    }
})
loops.everyInterval(3600000, function () {
    command = 6
    basic.showNumber(command)
})
