let Zustand = 0
input.onGesture(Gesture.Shake, function () {
    Zustand = randint(1, 3)
})
basic.forever(function () {
    if (Zustand == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (Zustand == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Zustand == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
