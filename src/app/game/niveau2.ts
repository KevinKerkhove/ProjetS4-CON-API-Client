import {GameCreator} from './GameCreator';
import {Win2} from './win2';

export class Niveau2 extends Phaser.Scene {

    player: Phaser.Physics.Arcade.Sprite;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    map: Phaser.GameObjects.TileSprite;
    scrollSpeed = 5;
    mapSize = 6;
    bullets;
    enemies;
    enemyMaxY: number;
    enemyMinY: number;
    score: number;
    scoreText;
    music: Phaser.Loader.FileTypes.AudioFile;
    bonus;
    bonuses;

  constructor() {
    super('niveau2');
  }

  init() {
    GameCreator.init(this);
  }

  preload() {
    GameCreator.preload(this, 'assets/lvl2/map.png', 'map2', 'assets/lvl2/enemy.png', 'enemy2', 'obstacle2','assets/lvl2/obstacle.png', 'null','assets/lvl2/obstacle.png',
      'assets/music.mp3', 'win2', Win2);
  }

  create() {
    GameCreator.create(this, 'map2');
    GameCreator.createEnemies(this, 'enemy2');
    GameCreator.generateObstacle(this,'obstacle2','obstacle2');
  }

  update() {
    GameCreator.update(this, 'win2');
  }
}
