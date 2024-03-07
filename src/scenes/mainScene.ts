import Phaser from "phaser";
import Ball from "../objects/ball";
import Hole from "../objects/hole";

export default class MainScene extends Phaser.Scene {
    ball: Ball;
    hole: Hole;
    localScore: number;

    constructor() {
        super({ key: "MainScene" });
        this.localScore = 0;
    }

    create() {
        this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "grass"
        );
        this.hole = new Hole(
            this,
            this.cameras.main.width - 1000,
            this.cameras.main.height / 2
        );
        this.ball = new Ball(this, 100, this.cameras.main.height / 2);
        this.physics.overlap(this.ball, this.hole, this.nextStage);

        const message = "PUSH THE BALL WITH YOUR MOUSE";
        this.add
            .text(this.cameras.main.width / 2, 15, message, {
                color: "white",
                fontSize: "24px",
                backgroundColor: "black",
            })
            .setOrigin(0.5, 0);

        this.add
            .text(
                this.cameras.main.width / 2 - 500,
                50,
                `Hole: ${this.localScore}`,
                {
                    color: "white",
                    fontSize: "24px",
                    backgroundColor: "black",
                }
            )
            .setOrigin(0.5, 0);

        this.add
            .text(
                this.cameras.main.width / 2,
                50,
                `Strokes: ${this.localScore}`,
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
                `Total Strokes: ${this.localScore}`,
                {
                    color: "white",
                    fontSize: "24px",
                    backgroundColor: "black",
                }
            )
            .setOrigin(0.5, 0);
    }

    nextStage() {
        console.log("go");
    }

    update() {}
}
