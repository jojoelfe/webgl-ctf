#include common.frag;
uniform sampler2D u_twilight;

void main() {
      vec2 st = (gl_FragCoord.xy / u_resolution.xy) ;
      
      float ps = phase_shift(squared_spatial_frequency(st),azimuth(st));
      //float ps_no = (ps - 2.0 * PI * floor( ps / (2.0 * PI ))) / (2.0 * PI) ;
      float ps_no = ps / (2.0 * PI);
      gl_FragColor = texture2D(u_twilight, vec2(0.0, ps_no));
      //gl_FragColor = vec4(color, 1.0);
    }