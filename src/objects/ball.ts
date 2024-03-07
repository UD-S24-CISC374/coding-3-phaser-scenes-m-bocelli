import Phaser from "phaser";

export default class Ball extends Phaser.Physics.Arcade.Sprite {
    strokeForce: number = 500;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "ball");
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true)
            .setBounce(0.8)
            .setInteractive()
            .on("pointermove", this.pointerPush);
        this.setDamping(true);
        this.setDrag(0.5);
    }

    // Movement defined by where the user's pointer touches the ball
    pointerPush(pointer: Phaser.Input.Pointer) {
        const offset = 30; // 30px padding to hit the ball
        if (pointer.x < this.x - offset) {
            // hit left side
            this.setVelocityX(this.strokeForce);
        } else if (pointer.x > this.x + offset) {
            // hit right side
            this.setVelocityX(-this.strokeForce);
        }

        if (pointer.y < this.y - offset) {
            // hit down
            this.setVelocityY(this.strokeForce);
        } else if (pointer.y > this.y + offset) {
            // hit up
            this.setVelocityY(-this.strokeForce);
        }
    }

    stroke() {
        console.log("hit");
    }
}
