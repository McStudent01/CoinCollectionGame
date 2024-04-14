function preload() {
    // Preload assets
    this.load.image('background', 'assets/images/background.png');
    this.load.image('player', 'assets/images/player.png');
    this.load.image('coin', 'assets/images/coin.png');
    this.load.image('monster', 'assets/images/monster.png');
    this.load.image('powerUp', 'assets/images/powerUp.png');
    
    // Preload sound effects
    this.load.audio('reset', 'assets/sound/reset.mp3');
    this.load.audio('powerUp', 'assets/sound/powerUp.mp3');
    this.load.audio('coinCollect', 'assets/sound/coinCollect.mp3');
    this.load.audio('gameOver', 'assets/sound/gameOver.mp3');
    this.load.audio('levelUp', 'assets/sound/levelUp.mp3');
    this.load.audio('buttonClick', 'assets/sound/buttonClick.mp3');
    this.load.audio('enemyAttack', 'assets/sound/enemyAttack.mp3');
    this.load.audio('environmentInteraction', 'assets/sound/environmentInteraction.mp3');
    this.load.audio('achievementUnlock', 'assets/sound/achievementUnlock.mp3');
    
    // Preload background music
    this.load.audio('backgroundMusic', 'assets/sound/backgroundMusic.mp3');
}
