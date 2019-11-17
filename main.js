let theta = 0.0; /* A global variable */

let vertexBuffer = {};
let shader = {};

function main() {
  canvas = document.getElementById("myCanvas"); /* Getting a canvas */
  gl = canvas.getContext("experimental-webgl"); /* Getting an OpenGL context */
  if(!gl) {
    alert("Unable to initialize WebGL."); /* Error message if failed */
    return;
  }

  let vertices = [
    -0.5, -0.5, 0.0, 0.0, 0.0, 1.0, 1.0,
    0.0, 0.5, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.5, -0.5, 0.0, 0.0, 1.0, 0.0, 1.0
  ];
  let vertexShaderSource = 
  "precision mediump float;" +
  "" +
  "attribute vec3 coordinates;" +
  "attribute vec4 color;" +
  "varying vec4 vColor;" +
  "void main(void) {" +
    "vColor = color;" +
    "gl_Position = vec4(coordinates, 1.0);" +
  "}";
  let fragmentShaderSource = 
  "precision mediump float;" +
  "" +
  "varying vec4 vColor;" +
  "void main(void) {" +
    "gl_FragColor = vColor;" +
  "}";

  /* Creating, binding and initializing a vertex buffer with data */
  vertexBuffer = SGR_createVertexBuffer().sendData(vertices);

  /* Creating and compiling shaders */
  shader = SGR_createShader()
            .attachElement(SGR_createShaderElement(SGR_SHADER_ELEMENT_VERTEX, vertexShaderSource))
            .attachElement(SGR_createShaderElement(SGR_SHADER_ELEMENT_FRAGMENT, fragmentShaderSource))
            .compile();

  // Point an attribute to the currently bound VBO
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 7*4, 0); 
  gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 7*4, 3*4); 
  // Enable the attribute
  gl.enableVertexAttribArray(0);
  gl.enableVertexAttribArray(1);

  /* Clearing the canvas with color black. */ 
  SGR_clear(Math.cos(theta), Math.sin(theta), Math.tan(theta), 1.0);
  /* Drawing the bound data */
  SGR_draw(3);
}

function updateButtonFunction() {
  /* Clearing the canvas with different colors depending on the global variable */
  SGR_clear(Math.cos(theta), Math.sin(theta), Math.tan(theta), 1.0);
  /* Drawing the bound data */
  SGR_draw(3);

  /* Modifying the global variable */
  theta += 0.1;
}

window.onload = main; /* Pointing to main as a function for calling when the window is loaded */