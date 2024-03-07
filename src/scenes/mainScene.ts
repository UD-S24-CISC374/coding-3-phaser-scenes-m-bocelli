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
        console.log(this.scene.manager.keys);
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "grass1"
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
        console.log("weixin ma");
    }

    update() {
        /*
        Movement debugging
        console.log(
            `${this.input.mousePointer.x.toFixed(
                0
            )} : ${this.input.mousePointer.y.toFixed(0)}`
        );
        console.log(`${this.ball.x} : ${this.ball.y}`);
        */
    }
}
