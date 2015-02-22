var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

var mainState = {

	preload: function(){
		game.load.spritesheet('ene', 'assets/Enemy.png', 128, 128);
        game.stage.backgroundColor = '#2e628e';
	},

	create: function(){
		this.enemy = this.game.add.sprite(300, 200, 'ene');

        this.enemy.animations.add('fire');
        this.enemy.animations.play('fire', 10, true);
	},

	update: function(){

	}

}

game.state.add('main', mainState);
game.state.start('main');
