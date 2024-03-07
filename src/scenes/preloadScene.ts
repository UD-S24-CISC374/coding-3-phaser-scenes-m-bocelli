import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("ball", "assets/img/ball.png");
        this.load.image("hole", "assets/img/hole.png");
        this.load.image("grass", "assets/img/grass.png");
    }

    create() {
        this.scene.start("MainScene");
    }
}
