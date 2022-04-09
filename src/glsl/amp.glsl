#include common.frag;

void main() {
      vec2 st = (gl_FragCoord.xy / u_resolution.xy) ;
      vec3 color = palette(((amplitude(phase_shift(squared_spatial_frequency(st),azimuth(st)))-1.0)/(-2.0)), 
      vec3(0.66,0.56,0.68), 
      vec3(0.718,0.438,0.72), 
      vec3(0.52,0.8,0.52),
      vec3(-0.43,-0.397,-0.083));

      gl_FragColor = vec4(color, 1.0);
    }