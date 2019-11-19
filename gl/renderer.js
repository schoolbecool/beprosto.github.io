let canvas = {}; /* WebGL Canvas */
let gl = {}; /* OpenGL Context */

function SGR_clear(r, g, b, a) {
	gl.clearColor(r, g, b, a);
	gl.clear(gl.COLOR_BUFFER_BIT);
}
function SGR_draw(vertexBuffer, shader) {
	shader.bind();
	vertexBuffer.bind();
	gl.drawArrays(gl.TRIANGLES, 0, vertexBuffer.i_VB_dataLength / vertexBuffer.i_VBL_fullStride);
}
