let direction = 1
let x = 2
led.plot(x, 0)
basic.forever(function () {
    led.unplot(x, 0)
    x += direction
    led.plot(x, 0)
    if (x >= 4) {
        direction = -1
    } else if (x <= 0) {
        direction = 1
    }
    basic.pause(200)
})
