'use strict';

let a = 1;
document.write(`<svg width="4400" height="100%">`);

document.write("<polyline id='pol' points=' ' fill='#b6bbc2' stroke='red' stroke-width='2'/>");

for (let i = 0; i < 8; i++) {
	if (i == 4) document.write("<line x1='50' y1='" + (i * 50) + "' x2='4370' y2='" + (i * 50) + "' stroke='black' stroke-width='" + (2.5) + "'/>");
	else document.write("<line x1='50' y1='" + (i * 50) + "' x2='4370' y2='" + (i * 50) + "' stroke='black' stroke-width='" + (1) + "'/>"); // горизонтальные

}

document.write("<line x1='50' y1='1' x2='50' y2='350' stroke='black' stroke-width='1.5'/>'");
for (let i = 0; i < 144; i++) {
	if ((i == 5) || (i == 11) || (i == 17) || (i == 23) || (i == 29) || (i == 35) || (i == 41) || (i == 47) || (i == 53) || (i == 59) || (i == 65) || (i == 71) || (i == 77) || (i == 83) || (i == 89) || (i == 95) || (i == 101) || (i == 107) || (i == 113) || (i == 119) || (i == 125) || (i == 131) || (i == 137) || (i == 143))
		document.write("<line x1='" + (80 + i * 30) + "' y1='1' x2='" + (80 + i * 30) + "' y2='350' stroke='black' stroke-width='2.5'/>");
	else document.write("<line x1='" + (80 + i * 30) + "' y1='1' x2='" + (80 + i * 30) + "' y2='350' stroke='black' stroke-width='1'/>"); // вертикальные
}



/**
 * Graphic container of temp
 */
document.write("<text x='20' y='207'>0</text>");
document.write("<text x='13' y='157'>10</text>");
document.write("<text x='13' y='107'>20</text>");
document.write("<text x='13' y='57'>30</text>");
document.write("<text x='5' y='257'>-10</text>")
document.write("<text x='5' y='307'>-20</text>");

/**
 * Graphic container of time
 */
for (let i = 1; i < 25; i++) {
	if (i == 1) document.write("<text x='" + 222 + "' y='375'>" + i + "</text>");
	else document.write("<text x='" + (222 + (180 * i - 180)) + "' y='375'>" + i + "</text>");
}

document.write(`</svg>`);