#define PI 3.1415926538

uniform float pixel_size;
uniform float voltage;
float wavelength =   12.2639 / sqrt(1000.0 * voltage + 0.97845e-6 * pow(1000.0 *
voltage, 2.0));
float squared_wavelength = wavelength * wavelength;
uniform float defocus;
uniform float ac;
uniform float spherical_aberration_mm;
float precomputed_amplitude_contrast_term = atan(ac/sqrt(1.0-pow(ac,2.0)));

float spherical_aberration = spherical_aberration_mm * 1000.0 * 10000.0;

float phase_shift(float squared_spatial_frequency) {
  return PI * wavelength * squared_spatial_frequency * (defocus - 0.5 * squared_wavelength * squared_spatial_frequency * spherical_aberration) + precomputed_amplitude_contrast_term;
}

float absolute_amplitude(float phase_shift) {
  return abs(-sin(phase_shift));
}

float amplitude(float phase_shift) {
  return -sin(phase_shift);
}

vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

float squared_spatial_frequency(vec2 st) {
  vec2 dis = (st - 0.5);    
  float radius = length(dis);
  float frequency = 1.0 / (pixel_size / radius);
  return pow(frequency, 2.0);
}