import Phaser from "phaser";

export default class Hole extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "hole");
        scene.add.existing(this);
        scene.physics.add.existing(this, false);
    }
}
