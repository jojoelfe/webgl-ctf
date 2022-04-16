precision highp float;
varying vec2 uv;
uniform sampler2D src;

void main () {
    vec4 col = texture2D(src, uv);
    // transform rgb to black and white
    float gray = (col.r + col.g + col.b) / 3.0;
    gl_FragColor = vec4(gray*-1.0+0.5,0.0,0.0,0.0);
}