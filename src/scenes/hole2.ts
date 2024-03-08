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

        this.hole = new Hole(
            this,
            Phaser.Math.Between(
                this.cameras.main.width - 400,
                this.cameras.main.width - 100
            ),
            Phaser.Math.Between(120, 600)
        );
        this.ball = new Ball(
            this,
            Phaser.Math.Between(100, 300),
            Phaser.Math.Between(120, 600)
        );

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
