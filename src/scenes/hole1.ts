import Phaser from "phaser";
import Ball from "../objects/ball";
import Hole from "../objects/hole";
import Gui from "./gui";

export default class Hole1 extends Phaser.Scene {
    ball: Ball;
    hole: Hole;
    gui: Gui;
    prevStrokes: number = 0;

    constructor() {
        super({ key: "Hole1" });
    }

    init() {
        this.scene.launch("Gui");
    }

    create(sceneData: { totalStrokes: number }) {
        this.prevStrokes = sceneData.totalStrokes;
        this.gui = this.scene.get("Gui") as Gui;
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

        this.physics.add.overlap(
            this.ball,
            this.hole,
            () => {
                this.nextStage(sceneData.totalStrokes);
            },
            undefined,
            this
        );
    }

    nextStage(totalStrokes: number) {
        totalStrokes += this.ball.strokes;
        this.scene.start("Hole2", {
            totalStrokes: totalStrokes,
        });
    }

    update() {
        this.gui.updateStrokes(
            this.ball.strokes,
            this.ball.strokes + this.prevStrokes
        );
    }
}
