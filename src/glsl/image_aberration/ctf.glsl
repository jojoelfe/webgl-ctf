precision highp float;

#include ../common.frag;
varying vec2 uv;
uniform sampler2D src;

void main() {
      vec2 nuv =  0.5 - uv + 1.0 * floor(uv / 0.5);
      float amplitude = amplitude(phase_shift(squared_spatial_frequency(nuv),azimuth(nuv)));
      
      vec4 col = texture2D(src, uv);
  
      gl_FragColor = vec4(amplitude * col);
    }