import RandomDataGenerator = Phaser.Math.RandomDataGenerator;
import { Bullets } from './bullets';
import { Enemies } from './enemies';
import { Niveau4 } from './niveau4';
import {GameCreator} from "./GameCreator";
import {Niveau2} from "./niveau2";

export class Niveau3 extends Phaser.Scene {

    player: Phaser.Physics.Arcade.Sprite;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    map: Phaser.GameObjects.TileSprite;
    scrollSpeed = 6;
    mapSize = 6;
    bullets;
    enemies;
    enemyMaxY: number;
    enemyMinY: number;
    score: number;
    scoreText;

    music: Phaser.Loader.FileTypes.AudioFile;

    constructor() {
      super('niveau3');
    }

  init() {
    GameCreator.init(this);
  }

  preload() {
    GameCreator.preload(this, 'assets/lvl3/map.png', 'map3', 'assets/ship.png',
      'assets/shmup-bullet.png', 'assets/lvl3/enemy.png', 'enemy3',
      'assets/music.mp3', 'assets/music.mp3');
    this.scene.add('niveau4', Niveau4, false);
  }

  create() {
    GameCreator.create(this, 'map3');
    GameCreator.createEnemies(this, 'enemy3');
  }

  update() {
    GameCreator.update(this, 'niveau4');
  }
}