import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        const holes = 4;
        // I made these in GIMP
        this.load.image("ball", "assets/img/ball.png");
        this.load.image("hole", "assets/img/hole.png");
        for (let i = 1; i <= holes; i++) {
            this.load.image(`grass${i}`, `assets/img/grass${i}.png`);
        }
    }

    create() {
        this.scene.start("MainScene");
    }
}
