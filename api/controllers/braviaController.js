'use-strict';
const Bravia = require('bravia');
let bravia = new Bravia(process.env.BRAVIA_HOST, process.env.BRAVIA_PORT, process.env.BRAVIA_PSK_AUTH);

exports.powerStatus = function(req, res){
    bravia.system.invoke('getPowerStatus')
        .then(function(tvStatus){
            if('active' === tvStatus.status){
                res.send('Está ligada essa merda com uma negra gostosa pelada e presa na tela!')
            } else {
                res.send('Está desligada essa merda!')
            }
            res.json(tvStatus);
        })
        .catch(error => res.send(error));
}

exports.turnOnTv = function(req, res){
    bravia.system.invoke('setPowerStatus', '1.0', {'status': true});
    res.json({'status': 'ok'});
}

exports.turnOffTv = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAvAw==');
    res.json({'status': 'ok'});
}

exports.antennaIn = function(req, res) {
    bravia.send('AAAAAgAAAHcAAAANAw==');
    res.json({'status': 'ok'});
}

exports.audioMode = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAXAw==');
    res.json({'status': 'ok'});
}

exports.blueButton = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAkAw==');
    res.json({'status': 'ok'});
}

exports.decreaseChannel = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAARAw==');
    res.json({'status': 'ok'});
}

exports.increaseChannel = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAQAw==');
    res.json({'status': 'ok'});
}

exports.okButton = function(req, res) {
    bravia.send('AAAAAQAAAAEAAABlAw==');
    res.json({'status': 'ok'});
}

exports.display = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAA6Aw==');
    res.json({'status': 'ok'});
}

exports.directionalDown = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAB1Aw==');
    res.json({'status': 'ok'});
}

exports.epg = function(req, res) {
    bravia.send('AAAAAgAAAKQAAABbAw==');
    res.json({'status': 'ok'});
}

exports.exitButton = function(req, res) {
    bravia.send('AAAAAQAAAAEAAABjAw==');
    res.json({'status': 'ok'});
}

exports.forwardButton = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAcAw==');
    res.json({'status': 'ok'});
}

exports.greenButton = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAmAw==');
    res.json({'status': 'ok'});
}

exports.home = function(req, res) {
    bravia.send('AAAAAQAAAAEAAABgAw==');
    res.json({'status': 'ok'});
}

exports.input = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAlAw==');
    res.json({'status': 'ok'});
}

exports.directionalLeft = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAUAw==');
    res.json({'status': 'ok'});
}

exports.mute = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAvAw==');
    res.json({'status': 'ok'});
}

exports.nextButton = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAA9Aw==');
    res.json({'status': 'ok'});
}

exports.numberZero = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAJAw==');
    res.json({'status': 'ok'});
}

exports.numberOne = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAAAw==');
    res.json({'status': 'ok'});
}

exports.numberTwo = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAABAw==');
    res.json({'status': 'ok'});
}

exports.numberThree = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAACAw==');
    res.json({'status': 'ok'});
}

exports.numberFour = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAADAw==');
    res.json({'status': 'ok'});
}

exports.numberFive = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAEAw==');
    res.json({'status': 'ok'});
}

exports.numberSix = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAFAw==');
    res.json({'status': 'ok'});
}

exports.numberSeven = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAGAw==');
    res.json({'status': 'ok'});
}

exports.numberEight = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAHAw==');
    res.json({'status': 'ok'});
}

exports.numberNine = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAIAw==');
    res.json({'status': 'ok'});
}

exports.options = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAA2Aw==');
    res.json({'status': 'ok'});
}

exports.pap = function(req, res) {
    bravia.send('AAAAAgAAAKQAAAB3Aw==');
    res.json({'status': 'ok'});
}

exports.pause = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAZAw==');
    res.json({'status': 'ok'});
}

exports.play = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAaAw==');
    res.json({'status': 'ok'});
}

exports.previousButton = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAA8Aw==');
    res.json({'status': 'ok'});
}

exports.redButton = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAlAw==');
    res.json({'status': 'ok'});
}

exports.return = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAjAw==');
    res.json({'status': 'ok'});
}

exports.rewindButton = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAbAw==');
    res.json({'status': 'ok'});
}

exports.directionalRight = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAAzAw==');
    res.json({'status': 'ok'});
}

exports.stop = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAYAw==');
    res.json({'status': 'ok'});
}

exports.subtittle = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAoAw==');
    res.json({'status': 'ok'});
}

exports.syncMenu = function(req, res) {
    bravia.send('AAAAAgAAABoAAABYAw==');
    res.json({'status': 'ok'});
}

exports.directionalUp = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAB0Aw==');
    res.json({'status': 'ok'});
}

exports.decreaseVolume = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAATAw==');
    res.json({'status': 'ok'});
}

exports.increaseVolume = function(req, res) {
    bravia.send('AAAAAQAAAAEAAAASAw==');
    res.json({'status': 'ok'});
}

exports.wide = function(req, res) {
    bravia.send('AAAAAgAAAKQAAAA9Aw==');
    res.json({'status': 'ok'});
}

exports.yellowButton = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAAnAw==');
    res.json({'status': 'ok'});
}

exports.hdmi1 = function(req, res) {
    bravia.send('AAAAAgAAABoAAABaAw==');
    res.json({'status': 'ok'});
}

exports.hdmi2 = function(req, res) {
    bravia.send('AAAAAgAAABoAAABbAw==');
    res.json({'status': 'ok'});
}

exports.hdmi3 = function(req, res) {
    bravia.send('AAAAAgAAABoAAABcAw==');
    res.json({'status': 'ok'});
}

exports.hdmi4 = function(req, res) {
    bravia.send('AAAAAgAAABoAAABdAw==');
    res.json({'status': 'ok'});
}

exports.social = function(req, res) {
    bravia.send('AAAAAgAAABoAAAB0Aw==');
    res.json({'status': 'ok'});
}

exports.football = function(req, res) {
    bravia.send('AAAAAgAAABoAAAB2Aw==');
    res.json({'status': 'ok'});
}

exports.dux = function(req, res) {
    bravia.send('AAAAAgAAABoAAABzAw==');
    res.json({'status': 'ok'});
}

exports.antennaCable = function(req, res) {
    bravia.send('AAAAAgAAAJcAAAA4Aw==');
    res.json({'status': 'ok'});
}

exports.keypad = function(req, res) {
    bravia.send('AAAAAgAAABoAAAB1Aw==');
    res.json({'status': 'ok'});
}

exports.trackId = function(req, res) {
    bravia.send('AAAAAgAAABoAAAB+Aw==');
    res.json({'status': 'ok'});
}

exports.iManual = function(req, res) {
    bravia.send('AAAAAgAAABoAAAB7Aw==');
    res.json({'status': 'ok'});
}

exports.netflix = function(req, res) {
    bravia.send('AAAAAgAAABoAAAB8Aw==');
    res.json({'status': 'ok'});
}