var player;
var coins;
var monsters;
var powerUps;
var cursors;
var score = 0;
var scoreText;
var powerUpActive = false;

var resetSound;
var powerUpSound;
var coinCollectSound;
var gameOverSound;
var levelUpSound;
var buttonClickSound;
var enemyAttackSound;
var environmentInteractionSound;
var achievementUnlockSound;
var backgroundMusic;

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

function create() {
    // Create background
    var background = this.add.image(0, 0, 'background').setOrigin(0);

    // Create player sprite
    player = this.physics.add.sprite(100, 450, 'player');

    // Create groups for coins, monsters, and power-ups
    coins = this.physics.add.group();
    monsters = this.physics.add.group();
    powerUps = this.physics.add.group();

    // Set up player physics
    player.setCollideWorldBounds(true);

    // Create score text
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

    // Create keyboard cursors
    cursors = this.input.keyboard.createCursorKeys();

    // Spawn coins, monsters, and power-ups
    spawnCoins.call(this);
    spawnMonsters.call(this);
    spawnPowerUps.call(this);

    // Set up collisions
    this.physics.add.collider(player, coins, collectCoin, null, this);
    this.physics.add.collider(player, monsters, hitMonster, null, this);
    this.physics.add.collider(player, powerUps, activatePowerUp, null, this);

    // Load sound effects
    resetSound = this.sound.add('reset');
    powerUpSound = this.sound.add('powerUp');
    coinCollectSound = this.sound.add('coinCollect');
    gameOverSound = this.sound.add('gameOver');
    levelUpSound = this.sound.add('levelUp');
    buttonClickSound = this.sound.add('buttonClick');
    enemyAttackSound = this.sound.add('enemyAttack');
    environmentInteractionSound = this.sound.add('environmentInteraction');
    achievementUnlockSound = this.sound.add('achievementUnlock');
    
    // Play background music
    backgroundMusic = this.sound.add('backgroundMusic', { loop: true });
    backgroundMusic.play();
}

function update() {
    // Player movement
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }
}

function spawnCoins() {
    // Spawn coins randomly on the screen
    for (var i = 0; i < 10; i++) {
        var x = Phaser.Math.Between(100, 700);
        var y = Phaser.Math.Between(100, 300);
        var coin = coins.create(x, y, 'coin');
    }
}

function spawnMonsters() {
    // Spawn monsters randomly on the screen
    for (var i = 0; i < 3; i++) {
        var x = Phaser.Math.Between(100, 700);
        var y = Phaser.Math.Between(100, 300);
        var monster = monsters.create(x, y, 'monster');
    }
}

function spawnPowerUps() {
    // Spawn power-ups randomly on the screen
    for (var i = 0; i < 1; i++) { 
        var x = Phaser.Math.Between(100, 700);
        var y = Phaser.Math.Between(100, 300);
        var powerUp = powerUps.create(x, y, 'powerUp');
    }
}

function collectCoin(player, coin) {
    // Remove the coin and update score
    coin.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);

    // Play coin collect sound effect
    coinCollectSound.play();
}

function hitMonster(player, monster) {
    // Check if power-up is active
    if (!powerUpActive) {
        // Play reset sound effect
        resetSound.play();

        // Reset player position and score only if power-up is not active
        player.setX(100);
        player.setY(450);
        score = 0;
        scoreText.setText('Score: ' + score);

        // Play game over sound effect
        gameOverSound.play();
    }
}

function activatePowerUp(player, powerUp) {
    // Remove the power-up and activate its effect
    powerUp.disableBody(true, true);
    powerUpActive = true;

    // Play power-up sound effect
    powerUpSound.play();

    // Add additional power up effect here, such as iinvincibility
    // Increase player speed
    player.setVelocityX(player.body.velocity.x * 2);
    setTimeout(deactivatePowerUp, 5000);

    // Play level up sound effect
    levelUpSound.play();
}

function deactivatePowerUp() {
    // Deactivate power-up effect
    powerUpActive = false;

    // Reset player's velocity, or any other effects applied by the power-up
    player.setVelocityX(player.body.velocity.x / 2);
}
