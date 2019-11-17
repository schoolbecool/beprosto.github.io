let canvas = {}; /* WebGL Canvas */
let gl = {}; /* OpenGL Context */

let renderer = {
	clear: function(r, g, b, a) {
		gl.clearColor(r, g, b, a);
		gl.clear(gl.COLOR_BUFFER_BIT);
	},
	draw: function(triangleCount) {
		gl.drawArrays(gl.TRIANGLES, 0, triangleCount);
	}
};
