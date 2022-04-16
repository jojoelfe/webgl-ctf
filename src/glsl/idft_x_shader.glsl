//Horizontal DFT of the input.
// Adapted from https://www.shadertoy.com/view/MscGWS

uniform sampler2D u_idft_y;
#define SIZE 512.0
float tau = atan(1.0)*8.0;

vec2 cmul (vec2 a,float b) { return mat2(a,-a.y,a.x)*vec2(cos(b), sin(b)); } 

void main() {
     vec2 uv = gl_FragCoord.xy;
      float w = uv.x;// - SIZE/2.0;
      vec2 xw = vec2(0);
    for(float n = 0.0;n < SIZE;n++)
    {
        
        vec2 yn = texture2D(u_idft_y, vec2((n+0.5) / u_resolution.x, (uv.y+0.5)/ u_resolution.y)).xy;
        float a =  6.2831853 *  w * n/SIZE;
        xw += cmul(yn,a);
    }
    
    gl_FragColor = vec4(xw.x/SIZE * vec3(1.0,1.0,1.0),1.0);
      
      
    }








