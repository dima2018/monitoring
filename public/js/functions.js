(function () {

	var svgWidth = 4320;
	var svgHeight = 250;

	var h_linesCount = svgWidth / GRAPHICS_CONFIG.h_lineSpace;
	var v_linesCount = svgHeight / GRAPHICS_CONFIG.v_lineSpace;
	var h_lineSpace = GRAPHICS_CONFIG.h_lineSpace;
	var v_lineSpace = GRAPHICS_CONFIG.v_lineSpace;
	var boldLineInterval = 6;



	/**
	 * graphic's from GRAPHICS_JSON
	 * @return {string} "graphic's list"
	 */
	window.getGraphics = function () {
		var graphicsList = "";

		GRAPHICS_JSON.forEach( function(graphic, index) {

			graphicsList += '<div class="graphic-container">\n';
			graphicsList += '\t<div class="graphic-menu">\n';

			graphic.sensors.forEach( function(sensor, index) {
				graphicsList += '\t\t<div class="sensor">' + sensor.sensor_name + '</div>\n';
			} );

			graphicsList += '\t</div>\n';

			graphicsList += '\t<div class="svg-container_outer" style="height: ' + svgHeight + 'px;">';
			graphicsList += '\t\t<div class="svg-container_inner">';
			graphicsList += '\t\t\t<svg width="' + svgWidth + 'px" height="100%">';

			// горизонтальные линии
			for (let i = 0; i < v_linesCount; i++) {
				graphicsList += '<line x1="0" y1="' + (i * v_lineSpace) + '" x2="' + svgWidth + '" y2="' + (i * v_lineSpace) + '" class="line line_h" />';
			}

			// вертикальные линии
			for (var i = 0; i < h_linesCount; i++) {
				// жирные линии
				if ((i + 1) % boldLineInterval == 0) {
					graphicsList += '<line x1="' + (i * h_lineSpace) + '" y1="0" x2="' + (i * h_lineSpace) + '" y2="' + svgWidth + '" class="line line_v bold" />';
				} else graphicsList += '<line x1="' + (i * h_lineSpace) + '" y1="0" x2="' + (i * h_lineSpace) + '" y2="' + svgWidth + '" class="line line_v" />';
			}

			graphicsList += '\t\t\t</svg>';
			graphicsList += '\t\t</div>';
			graphicsList += '\t</div>';

			graphicsList += '</div>\n';

		} ); // forEach. GRAPHICS_CONFIG

		return graphicsList;
	}; // function. getGraphics

})();