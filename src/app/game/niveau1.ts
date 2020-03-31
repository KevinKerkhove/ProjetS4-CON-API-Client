import {GameCreator} from './GameCreator';
import {Win1} from './win1';

export class Niveau1 extends Phaser.Scene {

    player: Phaser.Physics.Arcade.Sprite;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    map: Phaser.GameObjects.TileSprite;
    scrollSpeed = 4;
    mapSize = 6;
    bullets;
    enemies;
    enemyMaxY: number;
    enemyMinY: number;
    score = 0;
    scoreText;

    music: Phaser.Loader.FileTypes.AudioFile;

    constructor() {
      super('niveau1');
    }

    init() {
      GameCreator.init(this);
    }

    preload() {
      GameCreator.preload(this, 'assets/lvl1/map.png',
        'map1', 'assets/lvl1/enemy.png', 'enemy1',
        'assets/lvl1/obstacles3.png', 'assets/lvl1/obstacles4.png',
        'assets/music.mp3', 'win1', Win1);
    }

    create() {
      GameCreator.globalScore = 0;
      GameCreator.create(this, 'map1');
      GameCreator.createEnemies(this, 'enemy1');
      GameCreator.generateObstacle(this, 'obstacle1', 'obstacle2');
    }

    update() {
      GameCreator.update(this, 'niveau2');
    }
}
