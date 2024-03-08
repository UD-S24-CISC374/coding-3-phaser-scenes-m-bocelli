import Phaser from "phaser";

export default class Gui extends Phaser.Scene {
    localScore: Phaser.GameObjects.Text;
    totalScore: Phaser.GameObjects.Text;
    holeNumber: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "Gui" });
    }

    create() {
        this.add
            .text(
                this.cameras.main.width / 2,
                15,
                "Push the ball with your mouse",
                {
                    color: "white",
                    fontSize: "24px",
                    backgroundColor: "black",
                }
            )
            .setOrigin(0.5, 0);

        this.totalScore = this.add
            .text(this.cameras.main.width / 2 + 500, 50, "Total Strokes: 0", {
                color: "white",
                fontSize: "24px",
                backgroundColor: "black",
            })
            .setOrigin(0.5, 0);

        this.localScore = this.add
            .text(this.cameras.main.centerX, 50, "Strokes: 0", {
                color: "white",
                fontSize: "24px",
                backgroundColor: "black",
            })
            .setOrigin(0.5, 0);

        this.holeNumber = this.add
            .text(this.cameras.main.width / 2 - 500, 50, "Hole: 1", {
                color: "white",
                fontSize: "24px",
                backgroundColor: "black",
            })
            .setOrigin(0.5, 0);
    }

    updateStrokes(localStrokes: number, totalStrokes: number) {
        this.localScore.setText(`Strokes: ${localStrokes}`);
        this.totalScore.setText(`Total Strokes: ${totalStrokes}`);
    }

    updateHoleNumber(hole: number) {
        this.holeNumber.setText(`Hole: ${hole}`);
    }
}
