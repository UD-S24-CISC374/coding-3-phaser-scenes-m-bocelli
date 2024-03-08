import Phaser from "phaser";
import Ball from "../objects/ball";

export default class Hole1 extends Phaser.Scene {
    ball: Ball;

    constructor() {
        super({ key: "GameOver" });
    }

    init() {
        this.scene.stop("Gui");
    }

    create(globalState: { totalScore: number }) {
        this.add
            .image(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "grass1"
            )
            .setAlpha(0.5);
        this.ball = new Ball(
            this,
            this.cameras.main.centerX,
            this.cameras.main.centerY
        );

        this.add
            .text(
                this.cameras.main.centerX,
                this.cameras.main.centerY - 90,
                "REPLAY",
                {
                    color: "#ffff",
                    fontSize: "4rem",
                    backgroundColor: "#afeeee",
                }
            )
            .setOrigin(0.5)
            .setInteractive()
            .on("pointerdown", () => {
                globalState.totalScore >
                parseInt(localStorage.getItem("bestScore") || "0")
                    ? localStorage.setItem(
                          "bestScore",
                          `${globalState.totalScore}`
                      )
                    : null;
                globalState.totalScore = 0;
                this.scene.start("Hole1");
            });

        this.add
            .text(
                this.cameras.main.centerX,
                this.cameras.main.centerY + 90,
                "MENU",
                {
                    color: "#ffff",
                    fontSize: "4rem",
                    backgroundColor: "#afeeee",
                }
            )
            .setOrigin(0.5)
            .setInteractive()
            .on("pointerdown", () => {
                globalState.totalScore >
                parseInt(localStorage.getItem("bestScore") || "0")
                    ? localStorage.setItem(
                          "bestScore",
                          `${globalState.totalScore}`
                      )
                    : null;
                globalState.totalScore = 0;
                this.scene.start("MainScene");
            });
    }
}
