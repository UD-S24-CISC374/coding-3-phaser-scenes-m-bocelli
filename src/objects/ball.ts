import Phaser from "phaser";

export default class Ball extends Phaser.Physics.Arcade.Sprite {
    strokes: number;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "ball");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.strokes = 0;
        this.setCollideWorldBounds(true)
            .setBounce(0.6)
            .setInteractive()
            .on("pointermove", this.pointerPush);
        this.setDamping(true);
        this.setDrag(0.5);
    }

    pointerPush(pointer: Phaser.Input.Pointer) {
        if (pointer.x < this.x) {
            this.setVelocityX(300);
        } else if (pointer.x > this.x + this.width / 0.25 - 10) {
            this.setVelocityX(-300);
        }

        if (pointer.y > this.y) {
            this.setVelocityY(-300);
        }
    }
}
