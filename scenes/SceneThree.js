export default class SceneThree extends Phaser.Scene {
  constructor() {
    //Scene reference name
    super('sceneThree');
  }

  create() {
    this.add.text(100, 100, 'Hello from Ian');
    console.log('Hello from Scene Three');
  }
}
