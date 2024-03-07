import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    holes: number;
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.holes = 4;
        this.load.image("ball", "assets/img/ball.png");
        this.load.image("hole", "assets/img/hole.png");
        for (let i = 1; i <= this.holes; i++) {
            this.load.image(`grass${i}`, `assets/img/grass${i}.png`);
        }
    }

    create() {
        this.scene.start("MainScene");
    }
}
