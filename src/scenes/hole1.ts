import Phaser from "phaser";

export default class Hole1 extends Phaser.Scene {
    constructor() {
        super({ key: "Hole1" });
    }

    create() {
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "grass1"
        );
    }
}
