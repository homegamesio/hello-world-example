const { Game, GameNode, Colors, Shapes, ShapeUtils } = require('squish-0756');
const COLORS = Colors.COLORS;

class HelloWorld extends Game {

    static metadata() {
        return {
            squishVersion: '0756'
        }
    }

    constructor() {
        super();
        this.base = new GameNode.Shape({
            shapeType: Shapes.POLYGON,
            coordinates2d: ShapeUtils.rectangle(0, 0, 100, 100),
            fill: COLORS.WHITE
        });

        this.text = new GameNode.Text({
            textInfo: {
                x: 50,
                y: 50,
                align: 'center',
                size: 3,
                color: COLORS.BLACK,
                text: 'Hello, world!'
            }
        });

        this.base.addChild(this.text);
    }

    getLayers() {
        return [{
            root: this.base
        }];
    }

}

module.exports = HelloWorld;
