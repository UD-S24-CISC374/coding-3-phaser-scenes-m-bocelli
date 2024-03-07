import Phaser from "phaser";

export default class Hole4 extends Phaser.Scene {
    constructor() {
        super({ key: "Hole4" });
    }

    create() {
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "grass4"
        );
    }
}
