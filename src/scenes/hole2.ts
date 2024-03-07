import Phaser from "phaser";
import Ball from "../objects/ball";
import Hole from "../objects/hole";

export default class Hole2 extends Phaser.Scene {
    ball: Ball;
    hole: Hole;

    constructor() {
        super({ key: "Hole2" });
    }

    init() {
        this.scene.launch("Gui");
    }

    create() {
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "grass2"
        );

        this.hole = new Hole(this, 300, this.cameras.main.height / 2);
        this.ball = new Ball(this, 100, this.cameras.main.height / 2);

        this.physics.add.overlap(
            this.ball,
            this.hole,
            this.nextStage,
            undefined,
            this
        );
    }

    nextStage() {
        this.scene.start("Hole3");
    }
}
