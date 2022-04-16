//Horizontal DFT of the input.
// Adapted from https://www.shadertoy.com/view/MscGWS

uniform sampler2D u_texture0;
#define SIZE 512.0
float tau = atan(1.0)*8.0;

vec2 polar(float m, float a)
{
	return m*vec2(cos(a), sin(a));   
}

vec2 cmul(vec2 a,vec2 b)
{
	return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

void main() {
      vec2 uv = gl_FragCoord.xy;
      float w = uv.x - SIZE/2.0;
      vec2 xw = vec2(0);
    for(float n = 0.0;n < SIZE;n++)
    {
        float a = -(tau * w * n) / SIZE;
        
        vec2 xn = vec2(texture2D(u_texture0, vec2((n+0.5n) / u_resolution.x, (uv.y+0.5)/ u_resolution.y)).x,0.0);
        
        xw += cmul(xn, polar(1.0, a));
    }
    
    gl_FragColor = vec4(xw,0,1.0);
      
    }








