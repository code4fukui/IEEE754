export const IEEE32 = {
  encode(f) {
    if (!(f instanceof Float32Array)) {
      if (!Array.isArray(f)) {
        f = [f];
      }
      f = new Float32Array(f);
    }
    return new Uint8Array(f.buffer);
  },
  decode(bin) {
    return new Float32Array(bin.buffer, 0, bin.length / 4);
  },
};
