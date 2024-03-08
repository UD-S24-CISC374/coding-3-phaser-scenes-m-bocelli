import Phaser from "phaser";
import Ball from "../objects/ball";
import Hole from "../objects/hole";
import Gui from "./gui";

export default class Hole3 extends Phaser.Scene {
    ball: Ball;
    hole: Hole;
    gui: Gui;
    prevStrokes: number = 0;

    constructor() {
        super({ key: "Hole3" });
    }

    init() {
        this.gui = this.scene.get("Gui") as Gui;
    }

    create(sceneData: { totalStrokes: number }) {
        this.prevStrokes = sceneData.totalStrokes;
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "grass3"
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
            this.nextStage,
            undefined,
            this
        );
    }

    nextStage() {
        this.scene.start("Hole4", {
            totalStrokes: this.ball.strokes + this.prevStrokes,
        });
    }

    update() {
        this.gui.updateHoleNumber(3);
        this.gui.updateStrokes(
            this.ball.strokes,
            this.ball.strokes + this.prevStrokes
        );
    }
}
