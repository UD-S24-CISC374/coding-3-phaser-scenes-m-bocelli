import Phaser from "phaser";

export default class Hole3 extends Phaser.Scene {
    constructor() {
        super({ key: "Hole3" });
    }

    create() {
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "grass3"
        );
    }
}
