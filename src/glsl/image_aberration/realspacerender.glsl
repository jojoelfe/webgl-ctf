precision highp float;
varying vec2 uv;
uniform sampler2D src;

void main () {
  vec4 col = texture2D(src, uv);
  
  gl_FragColor = vec4((col.x+0.5)*vec3(1.0,1.0,1.0), 1.0);
}