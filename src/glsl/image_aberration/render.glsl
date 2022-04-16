precision highp float;
varying vec2 uv;
uniform sampler2D src;

void main () {
  vec2 nuv = 0.5 - uv + 1.0 * floor(uv / 0.5);
  vec4 col = texture2D(src, nuv);
  
  gl_FragColor = vec4((log(length(vec2(col.x,col.z)*512.0))/log(512.0))*vec3(1.0,1.0,1.0), 1.0);
}