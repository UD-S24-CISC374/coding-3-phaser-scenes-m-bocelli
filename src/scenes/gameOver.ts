import Phaser from "phaser";
import Ball from "../objects/ball";

export default class Hole1 extends Phaser.Scene {
    ball: Ball;
    bestScore: string;

    constructor() {
        super({ key: "GameOver" });
    }

    init() {
        this.scene.stop("Gui");
        this.bestScore = localStorage.getItem("bestScore") || "999";
    }

    create(sceneData: { totalStrokes: number }) {
        if (parseInt(this.bestScore) > sceneData.totalStrokes) {
            this.bestScore = "" + sceneData.totalStrokes;
            localStorage.setItem("bestScore", `${sceneData.totalStrokes}`);
        }

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
                this.cameras.main.centerY - 200,
                "Best Strokes: " + this.bestScore,
                {
                    color: "#ffff",
                    fontSize: "4rem",
                    backgroundColor: "#afeeee",
                }
            )
            .setOrigin(0.5);

        this.add
            .text(
                this.cameras.main.centerX,
                50,
                `Round Strokes: ${sceneData.totalStrokes}`,
                {
                    color: "#ffff",
                    fontSize: "4rem",
                    backgroundColor: "#afeeee",
                }
            )
            .setOrigin(0.5);

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
                this.scene.start("MainScene");
            });
    }
}
