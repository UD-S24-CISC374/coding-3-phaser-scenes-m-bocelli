import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    totalStrokes: number;

    constructor() {
        super({ key: "MainScene" });
    }

    create() {
        this.add
            .image(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "grass1"
            )
            .setAlpha(0.5);
        this.add
            .text(this.cameras.main.centerX, this.cameras.main.centerY, "start")
            .setInteractive()
            .on("pointerdown", () => this.scene.start("Hole1"));
    }
}
