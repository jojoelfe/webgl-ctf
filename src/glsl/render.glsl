uniform sampler2D u_dft_y;

//Size must be changed in each tab.
#define SIZE 512.0

//Display modes
#define MAGNITUDE 0
#define PHASE 1
#define COMPONENT 2

#define DISPLAY_MODE MAGNITUDE

//Scaling
#define LOG 0
#define LINEAR 1

#define MAG_SCALE LOG

float pi = atan(1.0)*4.0;
float tau = atan(1.0)*8.0;

vec3 rainbow(float x)
{
    vec3 col = vec3(0);
    col.r = cos(x * tau - (0.0/3.0)*tau);
    col.g = cos(x * tau - (1.0/3.0)*tau);
    col.b = cos(x * tau - (2.0/3.0)*tau);
    
    return col * 0.5 + 0.5;
}

void main( )
{
    vec2 pixel = gl_FragCoord.xy - u_resolution.xy/2.0 + (vec2(1,1)*SIZE)/2.0;
    
	vec2 uv = fract(pixel / SIZE);
    
   vec3 color = vec3(0.1);
    
    
        vec2 dft_out = texture2D(u_dft_y, uv * (SIZE / u_resolution.xy)).xy;
        
        #if DISPLAY_MODE == MAGNITUDE
        	#if MAG_SCALE == LOG
        		color = vec3(log(length(dft_out)) / log(SIZE*SIZE));
        	#elif MAG_SCALE == LINEAR
        		color = vec3(length(dft_out) / SIZE);
        	#endif
        #elif DISPLAY_MODE == PHASE
        	color = vec3(rainbow(atan(dft_out.y,dft_out.x) / pi + 0.5));        
        #elif DISPLAY_MODE == COMPONENT      
        	color = vec3((dft_out / SIZE) * 0.5 + 0.5, 0.0);        
        #endif
    
    
	gl_FragColor = vec4(color, 1.0);
}