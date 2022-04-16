 precision highp float;
#include ../../../node_modules/glsl-fft/index.glsl
uniform sampler2D src;
uniform vec2 resolution;
uniform float subtransformSize, normalization;
uniform bool horizontal, forward;
void main () {
gl_FragColor = fft(src, resolution, subtransformSize, horizontal, forward, normalization);
}