#define PI 3.1415926538

float pixel_size = 1.0;
float voltage = 300.0;
float wavelength =   12.2639 / sqrt(1000.0 * voltage + 0.97845e-6 * pow(1000.0 *
voltage, 2.0));
float squared_wavelength = wavelength * wavelength;
float spherical_aberration = 2.7 * 1000.0 * 10000.0;
uniform float defocus;

void main() {
      vec2 st = (gl_FragCoord.xy / u_resolution.xy) ;
      vec2 dis = (st - 0.5);    
      float radius = length(dis);
      float frequency = 1.0 / (pixel_size / radius);
      float squared_spatial_frequency = pow(frequency, 2.0);
      float phase_shift = PI * wavelength * squared_spatial_frequency * (defocus - 0.5 * squared_wavelength * squared_spatial_frequency * spherical_aberration);
      vec3 color = -sin(phase_shift) * vec3(1.0, 1.0, 1.0);
      gl_FragColor = vec4(color, 1.0);
    }