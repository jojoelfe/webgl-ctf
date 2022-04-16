import{_ as a}from"./CtfCanvas.b87697c3.js";import{d as t,o as e,c as n,a as i,u as s}from"./index.6ed4ddf2.js";var o=`#define PI 3.1415926538

uniform float pixel_size;
uniform float voltage;
float wavelength =   12.2639 / sqrt(1000.0 * voltage + 0.97845e-6 * pow(1000.0 *
voltage, 2.0));
float squared_wavelength = wavelength * wavelength;
uniform float defocus;
uniform float ac;
uniform float spherical_aberration_mm;
float precomputed_amplitude_contrast_term = atan(ac/sqrt(1.0-pow(ac,2.0)));
uniform float astigmatism;
float defocus_1 = - defocus - astigmatism/2.0;
float defocus_2 = - defocus + astigmatism/2.0;
uniform float astigmatism_angle;

float astigmatism_azimuth = astigmatism_angle / 180.0 * PI;

float spherical_aberration = spherical_aberration_mm * 1000.0 * 10000.0;

float defocus_given_azimuth(float azimuth) {
    return 0.5 * (defocus_1 + defocus_2 + cos(2.0 * (azimuth - astigmatism_azimuth)) * (defocus_1 - defocus_2));
}

float phase_shift(float squared_spatial_frequency, float azimuth) {
  return PI * wavelength * squared_spatial_frequency * (defocus_given_azimuth(azimuth) - 0.5 * squared_wavelength * squared_spatial_frequency * spherical_aberration) + precomputed_amplitude_contrast_term;
}

float absolute_amplitude(float phase_shift) {
  return abs(-sin(phase_shift));
}

float amplitude(float phase_shift) {
  return -sin(phase_shift);
}

float imaginary_amplitude(float phase_shift) {
  return -cos(phase_shift);
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

float azimuth(vec2 st) {
    vec2 dis = (st - 0.5);
    float radius = length(dis);
    float azimuth = atan(dis.y, dis.x);
    if (dis.x < 0.0) {
        azimuth += PI;
    }
    if (dis.y < 0.0) {
        azimuth += 2.0 * PI;
    }
    return azimuth;
}

void main() {
      vec2 st = (gl_FragCoord.xy / u_resolution.xy) ;
      vec3 color = palette(((imaginary_amplitude(phase_shift(squared_spatial_frequency(st),azimuth(st)))-1.0)/(-2.0)), 
      vec3(0.66,0.56,0.68), 
      vec3(0.718,0.438,0.72), 
      vec3(0.52,0.8,0.52),
      vec3(-0.43,-0.397,-0.083));
      float value = ((imaginary_amplitude(phase_shift(squared_spatial_frequency(st),azimuth(st)))-1.0)/(-2.0));
      
      gl_FragColor = vec4(color, 1.0);
    }`;const m=t({setup(r){return(l,u)=>(e(),n("main",null,[i(a,{shader:s(o)},null,8,["shader"])]))}});export{m as default};
