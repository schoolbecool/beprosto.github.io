const SHADER_ELEMENT_NONE = 0;
const SHADER_ELEMENT_VERTEX = 1;
const SHADER_ELEMENT_FRAGMENT = 2;

function createShaderElement(type, code) {
	const self = {};
	
	self.ID = gl.createShader((type == SHADER_ELEMENT_VERTEX ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER));
  	gl.shaderSource(self.ID, code); 
  	gl.compileShader(self.ID);

	let compiled = gl.getShaderParameter(self.ID, gl.COMPILE_STATUS);
	console.log((type == SHADER_ELEMENT_VERTEX ? "Vertex" : "Fragment") + " Shader Element compiled successfully: " + compiled);
	if(!compiled) {
		let compilationLog = gl.getShaderInfoLog(self.ID);
		console.warn((type == SHADER_ELEMENT_VERTEX ? "Vertex" : "Fragment") + " Shader compiler log: " + compilationLog);
	}

	return self;
}

function createShader() {
	const self = {};

	self.ID = gl.createProgram();

	self.bind = function() {
		gl.useProgram(self.ID);	
		return self;
	}
	self.attachElement = function(element) {
		gl.attachShader(self.ID, element.ID);
		return self;
	}
	self.compile = function() {
		gl.linkProgram(self.ID);
		gl.useProgram(self.ID);	
		return self;
	}

	return self;
}