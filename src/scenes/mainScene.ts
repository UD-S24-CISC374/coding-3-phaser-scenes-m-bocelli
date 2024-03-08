import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    totalStrokes: number = 0;
    bestScore: string | null = "0";

    constructor() {
        super({ key: "MainScene" });
    }

    init() {
        if (localStorage.getItem("bestScore")) {
            this.bestScore = localStorage.getItem("bestScore");
        }
    }

    create() {
        this.add
            .image(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "grass1"
            )
            .setAlpha(0.5);

        this.add
            .text(
                this.cameras.main.centerX,
                this.cameras.main.centerY - 300,
                "BART GOLF",
                {
                    color: "#ffff",
                    fontSize: "5rem",
                    backgroundColor: "#afeeee",
                }
            )
            .setOrigin(0.5);

        this.bestScore
            ? this.add
                  .text(
                      this.cameras.main.centerX,
                      this.cameras.main.centerY - 200,
                      "Best Score: " + this.bestScore,
                      {
                          color: "#ffff",
                          fontSize: "3rem",
                          backgroundColor: "#afeeee",
                      }
                  )
                  .setOrigin(0.5)
            : null;

        this.add
            .text(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "PLAY",
                {
                    color: "#ffff",
                    fontSize: "4rem",
                    backgroundColor: "#afeeee",
                }
            )
            .setOrigin(0.5)
            .setInteractive()
            .on("pointerdown", () =>
                this.scene.start("Hole1", { totalStrokes: this.totalStrokes })
            );
    }
}
