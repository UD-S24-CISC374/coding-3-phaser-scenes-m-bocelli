import Phaser from "phaser";
import Ball from "../objects/ball";
import Hole from "../objects/hole";
import LocalScore from "../objects/localScore";

export default class MainScene extends Phaser.Scene {
    ball: Ball;
    hole: Hole;
    localScore: LocalScore;
    holeNum: number = 1;
    localScoreText: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "MainScene" });
    }

    create() {
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "grass"
        );
        this.hole = new Hole(
            this,
            this.cameras.main.width - 1000,
            this.cameras.main.height / 2
        );
        this.ball = new Ball(this, 100, this.cameras.main.height / 2);

        this.physics.overlap(
            this.ball,
            this.hole,
            this.nextStage,
            undefined,
            null
        );
        this.add
            .text(
                this.cameras.main.width / 2,
                15,
                "PUSH THE BALL INTO THE HOLE W/ FEWEST STROKES",
                {
                    color: "white",
                    fontSize: "24px",
                    backgroundColor: "black",
                }
            )
            .setOrigin(0.5, 0);
        this.localScore = new LocalScore(this, this.cameras.main.width / 2, 50);
        this.add
            .text(
                this.cameras.main.width / 2 - 500,
                50,
                `Hole: ${this.holeNum}`,
                {
                    color: "white",
                    fontSize: "24px",
                    backgroundColor: "black",
                }
            )
            .setOrigin(0.5, 0);

        this.add
            .text(
                this.cameras.main.width / 2 + 500,
                50,
                `Total Strokes: ${this.ball.strokes}`,
                {
                    color: "white",
                    fontSize: "24px",
                    backgroundColor: "black",
                }
            )
            .setOrigin(0.5, 0);
    }

    nextStage() {
        console.log("gooooooo");
    }

    update() {
        this.localScore.update();
    }
}
