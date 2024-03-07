import Phaser from "phaser";
import Ball from "../objects/ball";

export default class MainScene extends Phaser.Scene {
    ball: Ball;

    constructor() {
        super({ key: "MainScene" });
    }

    create() {
        this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "grass"
        );
        this.ball = new Ball(this, 100, this.cameras.main.height / 2);

        const message = "PUSH THE BALL WITH YOUR MOUSE";
        this.add
            .text(this.cameras.main.width / 2, 15, message, {
                color: "white",
                fontSize: "24px",
                backgroundColor: "black",
            })
            .setOrigin(0.5, 0);
    }

    update() {
        if (this.ball.x > 800) {
            console.log(this.game.getFrame());
        }
    }
}
