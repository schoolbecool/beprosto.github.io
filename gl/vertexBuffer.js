function createVertexBuffer() {
  const self = {};

  self.ID = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, self.ID);

  self.bind = function() {
    gl.bindBuffer(gl.ARRAY_BUFFER, self.ID);
    return self;
  }
  self.sendData = function(data) {
    gl.bindBuffer(gl.ARRAY_BUFFER, self.ID);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    return self;
  }

  return self;
}