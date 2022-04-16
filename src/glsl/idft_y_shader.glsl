//Horizontal DFT of the input.
// Adapted from https://www.shadertoy.com/view/MscGWS

uniform sampler2D u_dft_y;
#define SIZE 512.0
float tau = atan(1.0)*8.0;

vec2 cmul (vec2 a,float b) { return mat2(a,-a.y,a.x)*vec2(cos(b), sin(b)); } 

void main() {
     vec2 uv = gl_FragCoord.xy ;
      float w = uv.y;// - SIZE/2.0;
      vec2 xw = vec2(0);
    for(float n = 0.0;n < SIZE;n++)
    {
        
        vec2 yn = texture2D(u_dft_y, vec2(uv.x / u_resolution.x+0.5, n/ u_resolution.y+0.5)).xy;
        float a =  6.2831853 *  w * n/SIZE;
        xw += cmul(yn,a);
    }
    
    gl_FragColor = vec4(xw/SIZE,0.0,1.0);
      
      
    }








