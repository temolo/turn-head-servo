let IRRemoteValue = 0
basic.showIcon(IconNames.Rollerskate)
serial.redirectToUSB()
irRemote.connectInfrared(DigitalPin.P9)
basic.forever(function () {
    IRRemoteValue = irRemote.returnIrButton()
    serial.writeValue("IRRemote= ", IRRemoteValue)
    basic.pause(1000)
})
