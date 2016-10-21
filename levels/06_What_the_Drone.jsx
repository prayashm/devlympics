#BEGIN_PROPERTIES#
{
    "version": "1.2",
	"commandsIntroduced":
        ["object.type", "object.behavior", "object.findNearest",
         "object.getX", "object.getY", "object.canMove", "object.move"],
    "music": "GameScratch"
}
#END_PROPERTIES#

/*********************
 * What_the_Drone.js *
 *********************
 *
 * They are on the attacking mode now!
 * Do you know a thing about this drones?
 * It will follow you, and stick to your face to kill you.
 * Maybe ... you can fool it? 
 *
 */

function startLevel(map) {
#START_OF_START_LEVEL#
    map.displayChapter('Oops!\n They know you are here!');

    function moveToward(obj, type) {
        var target = obj.findNearest(type);
        var leftDist = obj.getX() - target.x;
        var upDist = obj.getY() - target.y;

        var direction;
        if (upDist == 0 && leftDist == 0) {
        	return;
        } if (upDist > 0 && upDist >= leftDist) {
            direction = 'up';
        } else if (upDist < 0 && upDist < leftDist) {
            direction = 'down';
        } else if (leftDist > 0 && leftDist >= upDist) {
            direction = 'left';
        } else {
            direction = 'right';
        }

        if (obj.canMove(direction)) {
            obj.move(direction);
        }
    }

    map.defineObject('attackDrone', {
        'type': 'dynamic',
        'symbol': 'd',
        'color': 'red',
        'onCollision': function (player) {
            player.killedBy('an attack drone');
        },
        'behavior': function (me) {
            moveToward(me, 'player');
        }
    });


    map.placePlayer(1, 1);
    map.placeObject(map.getWidth()-2, 12, 'attackDrone');
    map.placeObject(map.getWidth()-1, 12, 'exit');

    map.placeObject(map.getWidth()-1, 11, 'block');
    map.placeObject(map.getWidth()-2, 11, 'block');
    map.placeObject(map.getWidth()-1, 13, 'block');
    map.placeObject(map.getWidth()-2, 13, 'block');
#BEGIN_EDITABLE#




#END_EDITABLE#
#END_OF_START_LEVEL#
}

function validateLevel(map) {
    map.validateExactlyXManyObjects(1, 'exit');
}
