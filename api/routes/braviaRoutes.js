'use-strict';
module.exports = function(app){
    var braviaCommands = require('../controllers/braviaController');
    
    app.route('/power-status')
        .get(braviaCommands.powerStatus);

    app.route('/turn-on')
        .put(braviaCommands.turnOnTv);
        
    app.route('/turn-off')
        .put(braviaCommands.turnOffTv);
    
    app.route('/antenna')
        .put(braviaCommands.antennaIn);
        
    app.route('/audio-mode')
        .put(braviaCommands.audioMode);
    
    app.route('/blue-button')
        .put(braviaCommands.blueButton);
        
    app.route('/channel-down')
        .put(braviaCommands.decreaseChannel);
    
    app.route('/channel-up')
        .put(braviaCommands.increaseChannel);
        
    app.route('/ok-button')
        .put(braviaCommands.okButton);
    
    app.route('/display')
        .put(braviaCommands.display);
        
    app.route('/down')
        .put(braviaCommands.directionalDown);
    
    app.route('/epg')
        .put(braviaCommands.epg);

    app.route('/exit')
        .put(braviaCommands.exitButton);
        
    app.route('/foward')
        .put(braviaCommands.forwardButton);
    
    app.route('/green')
        .put(braviaCommands.greenButton);
        
    app.route('/home')
        .put(braviaCommands.home);
    
    app.route('/input')
        .put(braviaCommands.input);
        
    app.route('/left')
        .put(braviaCommands.directionalLeft);
    
    app.route('/mute')
        .put(braviaCommands.mute);
        
    app.route('/next')
        .put(braviaCommands.nextButton);
    
    app.route('/zero')
        .put(braviaCommands.numberZero);
        
    app.route('/one')
        .put(braviaCommands.numberOne);
    
    app.route('/two')
        .put(braviaCommands.numberTwo);

    app.route('/three')
        .put(braviaCommands.numberThree);
        
    app.route('/four')
        .put(braviaCommands.numberFour);
    
    app.route('/five')
        .put(braviaCommands.numberFive);
        
    app.route('/six')
        .put(braviaCommands.numberSix);
    
    app.route('/seven')
        .put(braviaCommands.numberSeven);
        
    app.route('/eight')
        .put(braviaCommands.numberEight);
    
    app.route('/nine')
        .put(braviaCommands.numberNine);
        
    app.route('/options')
        .put(braviaCommands.options);
    
    app.route('/pap')
        .put(braviaCommands.pap);
        
    app.route('/pause')
        .put(braviaCommands.pause);
    
    app.route('/play')
        .put(braviaCommands.play);

    app.route('/previus')
        .put(braviaCommands.previousButton);
        
    app.route('/red')
        .put(braviaCommands.redButton);
    
    app.route('/return')
        .put(braviaCommands.return);
        
    app.route('/rewind')
        .put(braviaCommands.rewindButton);
    
    app.route('/right')
        .put(braviaCommands.directionalRight);
        
    app.route('/stop')
        .put(braviaCommands.stop);
    
    app.route('/subtittle')
        .put(braviaCommands.subtittle);
        
    app.route('/sync-menu')
        .put(braviaCommands.syncMenu);
    
    app.route('/up')
        .put(braviaCommands.directionalUp);
        
    app.route('/volume-down')
        .put(braviaCommands.decreaseVolume);
    
    app.route('/volume-up')
        .put(braviaCommands.increaseVolume);

    app.route('/wide')
        .put(braviaCommands.wide);
        
    app.route('/yellow')
        .put(braviaCommands.yellowButton);
    
    app.route('/hdmi1')
        .put(braviaCommands.hdmi1);
        
    app.route('/hdmi2')
        .put(braviaCommands.hdmi2);
    
    app.route('/hdmi3')
        .put(braviaCommands.hdmi3);
        
    app.route('/hdmi4')
        .put(braviaCommands.hdmi4);
    
    app.route('/social')
        .put(braviaCommands.social);
        
    app.route('/football')
        .put(braviaCommands.football);
    
    app.route('/dux')
        .put(braviaCommands.dux);
        
    app.route('/antenna-cable')
        .put(braviaCommands.antennaCable);

    app.route('/keypad')
        .put(braviaCommands.keypad);
        
    app.route('/track-id')
        .put(braviaCommands.trackId);
    
    app.route('/i-manual')
        .put(braviaCommands.iManual);
        
    app.route('/netflix')
        .put(braviaCommands.netflix);
}