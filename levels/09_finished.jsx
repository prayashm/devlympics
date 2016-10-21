#BEGIN_PROPERTIES#
{
    "version": "1.2.1",
    "music": "Brazil"
}
#END_PROPERTIES#
/**************
 * Finished.js *
 *************
 *
 * Congratulations! You have finished this test.
 * Give yourself a pat on the back. You are one clever hacker.
 *
 *
 *
 * Hungry for more?
 *
 * Check out the full game at:
 *      https://alexnisnevich.github.io/untrusted
 */

function startLevel(map) {
#START_OF_START_LEVEL#
    var credits = [
        [16, 2, "D E V L Y M P I C S"],
        [20, 4, "F I N A L E"],
        [1, 6, "{"],
        [2, 8, "based_on: 'Untrusted'"],
        [2, 10, "a_game_by: 'Alex Nisnevich and Greg Shuflin',"],
        [2, 14, "link: 'https://alexnisnevich.github.io/untrusted'"],
        [1, 16, "}"]
    ];

    function drawCredits(i) {
        if (i >= credits.length) {
            return;
        }

        // redraw lines bottom to top to avoid cutting off letters
        for (var j = i; j >= 0; j--) {
            var line = credits[j];
            map._display.drawText(line[0], line[1], line[2]);
        }

        map.timeout(function () {drawCredits(i+1);}, 2000)
    }

    map.timeout(function () {drawCredits(0);}, 4000);

#END_OF_START_LEVEL#
}
