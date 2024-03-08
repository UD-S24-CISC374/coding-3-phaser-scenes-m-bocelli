import Phaser from "phaser";
export default class LocalScore extends Phaser.GameObjects.Text {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "", {
            color: "white",
            fontSize: "24px",
            backgroundColor: "black",
        });
        scene.add.existing(this);
        this.setOrigin(0.5, 0);
    }

    public update(strokes: number) {
        this.setText(`Strokes: ${strokes}`);
    }
}
