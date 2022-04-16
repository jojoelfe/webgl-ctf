precision mediump float;
      varying vec2 uv;
      attribute vec2 xy;
      void main () {
        uv = 0.5 * xy + 0.5;
        gl_Position = vec4(xy, 0, 1);
      }