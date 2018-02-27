'use-strict';

module.exports = function (app) {
    const braviaCommands = require('../controllers/braviaController')

    app.route('/power-status')
        .get(braviaCommands.powerStatus)

    app.route('/turn-on-tv')
        .post(braviaCommands.turnOnTv)

    app.route('/turn-off-tv')
        .post(braviaCommands.turnOffTv)

    app.route('/antenna-in')
        .post(braviaCommands.antennaIn)

    app.route('/audio-mode')
        .post(braviaCommands.audioMode)

    app.route('/blue-button')
        .post(braviaCommands.blueButton)

    app.route('/decrease-channel')
        .post(braviaCommands.decreaseChannel)

    app.route('/increase-channel')
        .post(braviaCommands.increaseChannel)

    app.route('/ok-button')
        .post(braviaCommands.okButton)

    app.route('/display')
        .post(braviaCommands.display)

    app.route('/directional-down')
        .post(braviaCommands.directionalDown)

    app.route('/epg')
        .post(braviaCommands.epg)

    app.route('/exit-button')
        .post(braviaCommands.exitButton)

    app.route('/foward-button')
        .post(braviaCommands.forwardButton)

    app.route('/green-button')
        .post(braviaCommands.greenButton)

    app.route('/home')
        .post(braviaCommands.home)

    app.route('/input')
        .post(braviaCommands.input)

    app.route('/directional-left')
        .post(braviaCommands.directionalLeft)

    app.route('/mute')
        .post(braviaCommands.mute)

    app.route('/next-button')
        .post(braviaCommands.nextButton)

    app.route('/number-zero')
        .post(braviaCommands.numberZero)

    app.route('/number-one')
        .post(braviaCommands.numberOne)

    app.route('/number-two')
        .post(braviaCommands.numberTwo)

    app.route('/number-three')
        .post(braviaCommands.numberThree)

    app.route('/number-four')
        .post(braviaCommands.numberFour)

    app.route('/number-five')
        .post(braviaCommands.numberFive)

    app.route('/number-six')
        .post(braviaCommands.numberSix)

    app.route('/number-seven')
        .post(braviaCommands.numberSeven)

    app.route('/number-eight')
        .post(braviaCommands.numberEight)

    app.route('/number-nine')
        .post(braviaCommands.numberNine)

    app.route('/options')
        .post(braviaCommands.options)

    app.route('/pap')
        .post(braviaCommands.pap)

    app.route('/pause')
        .post(braviaCommands.pause)

    app.route('/play')
        .post(braviaCommands.play)

    app.route('/previus-button')
        .post(braviaCommands.previousButton)

    app.route('/red-button')
        .post(braviaCommands.redButton)

    app.route('/return')
        .post(braviaCommands.return)

    app.route('/rewind-button')
        .post(braviaCommands.rewindButton)

    app.route('/directional-right')
        .post(braviaCommands.directionalRight)

    app.route('/stop')
        .post(braviaCommands.stop)

    app.route('/subtittle')
        .post(braviaCommands.subtittle)

    app.route('/sync-menu')
        .post(braviaCommands.syncMenu)

    app.route('/directional-up')
        .post(braviaCommands.directionalUp)

    app.route('/decrease-volume')
        .post(braviaCommands.decreaseVolume)

    app.route('/increase-volume')
        .post(braviaCommands.increaseVolume)

    app.route('/wide')
        .post(braviaCommands.wide)

    app.route('/yellow-button')
        .post(braviaCommands.yellowButton)

    app.route('/hdmi-1')
        .post(braviaCommands.hdmi1)

    app.route('/hdmi-2')
        .post(braviaCommands.hdmi2)

    app.route('/hdmi-3')
        .post(braviaCommands.hdmi3)

    app.route('/hdmi-4')
        .post(braviaCommands.hdmi4)

    app.route('/social')
        .post(braviaCommands.social)

    app.route('/football')
        .post(braviaCommands.football)

    app.route('/dux')
        .post(braviaCommands.dux)

    app.route('/antenna-cable')
        .post(braviaCommands.antennaCable)

    app.route('/keypad')
        .post(braviaCommands.keypad)

    app.route('/track-id')
        .post(braviaCommands.trackId)

    app.route('/i-manual')
        .post(braviaCommands.iManual)

    app.route('/netflix')
        .post(braviaCommands.netflix)
}