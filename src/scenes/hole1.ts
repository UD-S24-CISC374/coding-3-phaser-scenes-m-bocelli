import Phaser from "phaser";
import Ball from "../objects/ball";
import Hole from "../objects/hole";
import LocalScore from "../objects/localScore";

export default class Hole1 extends Phaser.Scene {
    ball: Ball;
    hole: Hole;
    localScore: LocalScore;
    constructor() {
        super({ key: "Hole1" });
    }

    init() {
        this.scene.launch("Gui");
    }

    create() {
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "grass1"
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

        this.localScore = new LocalScore(
            this,
            this.cameras.main.centerX,
            this.cameras.main.centerY
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
        this.scene.start("Hole2");
    }

    update() {
        this.localScore.update(this.ball.strokes);
    }
}
