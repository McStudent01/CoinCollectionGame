class Scene1 extends Phaser.Scene {
  
  constructor() {
    super("bootGame");
  }
    preload(){
    //asset preload
    this.load.image("background", "assets/images/background.png");
    this.load.image("coin", "assets/images/coin.png");
    this.load.image("monster", "assets/images/monster.png");
    this.load.image("player", "assets/images/player.webp");

    //Sound/bitmap preload
    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");
    this.load.audio("audio_damage", "assets/sounds/damage.mp3");
    this.load.audio("audio_pickup", ["assets/sounds/pickup.ogg", "assets/sounds/pickup.mp3"]);
    this.load.audio("music", "assets/sounds/oceanmusic.mp3");
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
    
  }
}
