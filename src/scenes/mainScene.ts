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
        this.hole = new Hole(
            this,
            this.cameras.main.width - 1000,
            this.cameras.main.height / 2
        );
        this.ball = new Ball(this, 100, this.cameras.main.height / 2);

        this.physics.overlap(
            this.hole,
            this.ball,
            this.nextStage,
            undefined,
            null
        );
    }

    nextStage() {
        console.log("gooooooo");
    }

    update() {}
}
