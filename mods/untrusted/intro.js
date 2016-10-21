function playIntro(display, map, i) {
	if (i < 0) {
        display._intro = true;
    } else {
        if (typeof i === 'undefined') { i = map.getHeight(); }
        display.clear();
        display.drawText(0, i - 2, "%c{#0f0}> initialize");
        display.drawText(16, i + 3, "D E V L Y M P I C S");
        display.drawText(20, i + 5, "F I N A L E");
        display.drawText(18, i + 12, "GDG Bhubaneswar");
        display.drawText(2, i + 23, "Press any key to begin ...");
        setTimeout(function () {
            display.playIntro(map, i - 1);
        }, 100);
    }
}
