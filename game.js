var gameSettings = {
  playerSpeed: 200,
  maxMonsters: 7,
  monsterVel: 50,
};

var config = {
  width: 1000,
  height: 900,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      debugShowVelocity: false,
    },
  },
};

var game = new Phaser.Game(config);