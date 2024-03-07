import Phaser from "phaser";
export default class LocalScore extends Phaser.GameObjects.Text {
    strokes: number = 0;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "", {
            color: "white",
            fontSize: "24px",
            backgroundColor: "black",
        });
        scene.add.existing(this);
        this.setOrigin(0.5, 0);
    }

    public update() {
        this.setText(`Strokes: ${this.strokes}`);
    }
}
