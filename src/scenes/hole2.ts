import Phaser from "phaser";

export default class Hole2 extends Phaser.Scene {
    constructor() {
        super({ key: "Hole2" });
    }

    create() {
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "grass2"
        );
    }
}
