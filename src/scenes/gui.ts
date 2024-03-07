import Phaser from "phaser";

export default class Gui extends Phaser.Scene {
    constructor() {
        super({ key: "Gui" });
    }

    create() {
        this.add
            .text(
                this.cameras.main.width / 2,
                15,
                "PUSH THE BALL INTO THE HOLE W/ FEWEST STROKES",
                {
                    color: "white",
                    fontSize: "24px",
                    backgroundColor: "black",
                }
            )
            .setOrigin(0.5, 0);
        this.add
            .text(this.cameras.main.width / 2 - 500, 50, `Hole: ${1}`, {
                color: "white",
                fontSize: "24px",
                backgroundColor: "black",
            })
            .setOrigin(0.5, 0);

        this.add
            .text(
                this.cameras.main.width / 2 + 500,
                50,
                `Total Strokes: ${4}`,
                {
                    color: "white",
                    fontSize: "24px",
                    backgroundColor: "black",
                }
            )
            .setOrigin(0.5, 0);
    }
}
