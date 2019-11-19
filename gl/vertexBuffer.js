function SGR_createVertexBuffer() {
  const self = {};

  self.ID = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, self.ID);

  self.i_VBL_stride = 0;
  self.i_VBL_fullStride = 0;
  self.i_VBL_elementCount = 0;
  
  self.i_VB_dataLength = 0;

  self.bind = function() {
    gl.bindBuffer(gl.ARRAY_BUFFER, self.ID);
    return self;
  }
  self.sendData = function(data) {
    gl.bindBuffer(gl.ARRAY_BUFFER, self.ID);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    self.i_VB_dataLength = data.length;
    return self;
  }
  self.vertexLayoutInit = function(vertexElementCount) {
    self.i_VBL_fullStride = vertexElementCount;
    return self;
  }
  self.vertexLayoutSplit = function(count) {
    gl.bindBuffer(gl.ARRAY_BUFFER, self.ID);
    gl.vertexAttribPointer(self.i_VBL_elementCount, count, gl.FLOAT, false, self.i_VBL_fullStride * 4, self.i_VBL_stride * 4); 
    gl.enableVertexAttribArray(self.i_VBL_elementCount);

    self.i_VBL_stride += count;
    self.i_VBL_elementCount++;
    return self;
  }

  return self;
}