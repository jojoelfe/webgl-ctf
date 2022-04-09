#include common.frag;

void main() {
      vec2 st = (gl_FragCoord.xy / u_resolution.xy) ;
      vec3 color = absolute_amplitude(phase_shift(squared_spatial_frequency(st),azimuth(st))) * vec3(1.0, 1.0, 1.0);
      gl_FragColor = vec4(color, 1.0);
    }