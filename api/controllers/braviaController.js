'use-strict';

const Bravia = require('bravia');

let bravia = new Bravia(process.env.BRAVIA_HOST, process.env.BRAVIA_PORT, process.env.BRAVIA_PSK_AUTH);

exports.powerStatus = function (req, res) {
    bravia.system.invoke('getPowerStatus')
        .then(function (tvStatus) {
            if ('active' === tvStatus.status) {
                res.status(200).send('YES')
            } else {
                res.status(200).send('NO')
            }
            res.status(200).json(tvStatus);
        })
        .catch(error => res.status(500).send(error));
}

exports.turnOnTv = function (req, res) {
    bravia.system.invoke('setPowerStatus', '1.0', { status: true });
    res.status(200).json({ status: 'ok' });
}

exports.turnOffTv = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAvAw==');
    res.status(200).json({ status: 'ok' });
}

exports.antennaIn = function (req, res) {
    bravia.send('AAAAAgAAAHcAAAANAw==');
    res.status(200).json({ status: 'ok' });
}

exports.audioMode = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAXAw==');
    res.status(200).json({ status: 'ok' });
}

exports.blueButton = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAkAw==');
    res.status(200).json({ status: 'ok' });
}

exports.decreaseChannel = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAARAw==');
    res.status(200).json({ status: 'ok' });
}

exports.increaseChannel = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAQAw==');
    res.status(200).json({ status: 'ok' });
}

exports.okButton = function (req, res) {
    bravia.send('AAAAAQAAAAEAAABlAw==');
    res.status(200).json({ status: 'ok' });
}

exports.display = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAA6Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.directionalDown = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAB1Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.epg = function (req, res) {
    bravia.send('AAAAAgAAAKQAAABbAw==');
    res.status(200).json({ status: 'ok' });
}

exports.exitButton = function (req, res) {
    bravia.send('AAAAAQAAAAEAAABjAw==');
    res.status(200).json({ status: 'ok' });
}

exports.forwardButton = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAcAw==');
    res.status(200).json({ status: 'ok' });
}

exports.greenButton = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAmAw==');
    res.status(200).json({ status: 'ok' });
}

exports.home = function (req, res) {
    bravia.send('AAAAAQAAAAEAAABgAw==');
    res.status(200).json({ status: 'ok' });
}

exports.input = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAlAw==');
    res.status(200).json({ status: 'ok' });
}

exports.directionalLeft = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAUAw==');
    res.status(200).json({ status: 'ok' });
}

exports.mute = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAvAw==');
    res.status(200).json({ status: 'ok' });
}

exports.nextButton = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAA9Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberZero = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAJAw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberOne = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAAAw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberTwo = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAABAw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberThree = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAACAw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberFour = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAADAw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberFive = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAEAw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberSix = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAFAw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberSeven = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAGAw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberEight = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAHAw==');
    res.status(200).json({ status: 'ok' });
}

exports.numberNine = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAIAw==');
    res.status(200).json({ status: 'ok' });
}

exports.options = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAA2Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.pap = function (req, res) {
    bravia.send('AAAAAgAAAKQAAAB3Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.pause = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAZAw==');
    res.status(200).json({ status: 'ok' });
}

exports.play = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAaAw==');
    res.status(200).json({ status: 'ok' });
}

exports.previousButton = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAA8Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.redButton = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAlAw==');
    res.status(200).json({ status: 'ok' });
}

exports.return = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAjAw==');
    res.status(200).json({ status: 'ok' });
}

exports.rewindButton = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAbAw==');
    res.status(200).json({ status: 'ok' });
}

exports.directionalRight = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAAzAw==');
    res.status(200).json({ status: 'ok' });
}

exports.stop = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAYAw==');
    res.status(200).json({ status: 'ok' });
}

exports.subtittle = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAoAw==');
    res.status(200).json({ status: 'ok' });
}

exports.syncMenu = function (req, res) {
    bravia.send('AAAAAgAAABoAAABYAw==');
    res.status(200).json({ status: 'ok' });
}

exports.directionalUp = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAB0Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.decreaseVolume = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAATAw==');
    res.status(200).json({ status: 'ok' });
}

exports.increaseVolume = function (req, res) {
    bravia.send('AAAAAQAAAAEAAAASAw==');
    res.status(200).json({ status: 'ok' });
}

exports.wide = function (req, res) {
    bravia.send('AAAAAgAAAKQAAAA9Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.yellowButton = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAAnAw==');
    res.status(200).json({ status: 'ok' });
}

exports.hdmi1 = function (req, res) {
    bravia.send('AAAAAgAAABoAAABaAw==');
    res.status(200).json({ status: 'ok' });
}

exports.hdmi2 = function (req, res) {
    bravia.send('AAAAAgAAABoAAABbAw==');
    res.status(200).json({ status: 'ok' });
}

exports.hdmi3 = function (req, res) {
    bravia.send('AAAAAgAAABoAAABcAw==');
    res.status(200).json({ status: 'ok' });
}

exports.hdmi4 = function (req, res) {
    bravia.send('AAAAAgAAABoAAABdAw==');
    res.status(200).json({ status: 'ok' });
}

exports.social = function (req, res) {
    bravia.send('AAAAAgAAABoAAAB0Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.football = function (req, res) {
    bravia.send('AAAAAgAAABoAAAB2Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.dux = function (req, res) {
    bravia.send('AAAAAgAAABoAAABzAw==');
    res.status(200).json({ status: 'ok' });
}

exports.antennaCable = function (req, res) {
    bravia.send('AAAAAgAAAJcAAAA4Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.keypad = function (req, res) {
    bravia.send('AAAAAgAAABoAAAB1Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.trackId = function (req, res) {
    bravia.send('AAAAAgAAABoAAAB+Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.iManual = function (req, res) {
    bravia.send('AAAAAgAAABoAAAB7Aw==');
    res.status(200).json({ status: 'ok' });
}

exports.netflix = function (req, res) {
    bravia.send('AAAAAgAAABoAAAB8Aw==');
    res.status(200).json({ status: 'ok' });
}