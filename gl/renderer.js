let canvas = {}; /* WebGL Canvas */
let gl = {}; /* OpenGL Context */

function SGR_clear(r, g, b, a) {
	gl.clearColor(r, g, b, a);
	gl.clear(gl.COLOR_BUFFER_BIT);
}
function SGR_draw(triangleCount) {
	gl.drawArrays(gl.TRIANGLES, 0, triangleCount);
}
