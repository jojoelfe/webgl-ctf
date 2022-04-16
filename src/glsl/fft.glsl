const float TWOPI = 6.283185307179586;

vec4 fft (
  sampler2D src,
  vec2 resolution,
  float subtransformSize,
  bool horizontal,
  bool forward,
  float normalization
) {
  vec2 evenPos, oddPos, twiddle, outputA, outputB;
  vec4 even, odd;
  float index, evenIndex, twiddleArgument;

  index = (horizontal ? gl_FragCoord.x : gl_FragCoord.y) - 0.5;

  evenIndex = floor(index / subtransformSize) *
    (subtransformSize * 0.5) +
    mod(index, subtransformSize * 0.5) +
    0.5;

  if (horizontal) {
    evenPos = vec2(evenIndex, gl_FragCoord.y);
    oddPos = vec2(evenIndex, gl_FragCoord.y);
  } else {
    evenPos = vec2(gl_FragCoord.x, evenIndex);
    oddPos = vec2(gl_FragCoord.x, evenIndex);
  }

  evenPos *= resolution;
  oddPos *= resolution;

  if (horizontal) {
    oddPos.x += 0.5;
  } else {
    oddPos.y += 0.5;
  }

  even = texture2D(src, evenPos);
  odd = texture2D(src, oddPos);

  twiddleArgument = (forward ? TWOPI : -TWOPI) * (index / subtransformSize);
  twiddle = vec2(cos(twiddleArgument), sin(twiddleArgument));

  return (even.rgba + vec4(
    twiddle.x * odd.xz - twiddle.y * odd.yw,
    twiddle.y * odd.xz + twiddle.x * odd.yw
  ).xzyw) * normalization;
}

#pragma glslif: export(fft)



void main(void){
    vec2 vUV = gl_FragCoord.xy / u_transformSize;
    #ifdef HORIZONTAL
        float index = vUV.x * u_transformSize - 0.5;
    #else
        float index = vUV.y * u_transformSize - 0.5;
    #endif

    float evenIndex = floor(index / u_subtransformSize) * (u_subtransformSize * 0.5) + mod(index, u_subtransformSize * 0.5);

    //transform two complex sequences simultaneously
    #ifdef HORIZONTAL
        vec4 even = texture2D(u_texture0, vec2(evenIndex + 0.5, gl_FragCoord.y) / u_transformSize).rgba;
        vec4 odd = texture2D(u_texture0, vec2(evenIndex + u_transformSize * 0.5 + 0.5, gl_FragCoord.y) / u_transformSize).rgba;
    #else
        vec4 even = texture2D(u_texture0, vec2(gl_FragCoord.x, evenIndex + 0.5) / u_transformSize).rgba;
        vec4 odd = texture2D(u_texture0, vec2(gl_FragCoord.x, evenIndex + u_transformSize * 0.5 + 0.5) / u_transformSize).rgba;
    #endif

    float twiddleArgument1D = -2.0 * PI * (index / u_subtransformSize);
    vec2 twiddle1D = vec2(cos(twiddleArgument1D), sin(twiddleArgument1D));

    vec2 outputA = even.xy + multiplyComplex(twiddle1D, odd.xy);  //even.xy
    vec2 outputB = even.zw + multiplyComplex(twiddle1D, odd.zw); //even.zw

    gl_FragColor = vec4(outputA,outputB);
}
