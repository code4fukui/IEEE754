import * as t from "https://deno.land/std/testing/asserts.ts";
import { IEEE32 } from "./IEEE32.js";
import { Base2 } from "https://code4fukui.github.io/Base2/Base2.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

// https://tools.m-bsys.com/calculators/ieee754.php

Deno.test("encode", () => {
  t.assertEquals(Base2.encode(IEEE32.encode(3)), "00000000000000000100000001000000");
  t.assertEquals(Base2.encode(IEEE32.encode(.1)), "11001101110011001100110000111101");
  t.assertEquals(IEEE32.encode(.1), Base16.decode("cdcccc3d"));
});
Deno.test("decode", () => {
  t.assertEquals(IEEE32.decode(Base2.decode("00000000000000000100000001000000")), new Float32Array([3]));
});
Deno.test("array", () => {
  const f = [
    3, .1,
  ];
  const bin = IEEE32.encode(f);
  //console.log(bin);
  t.assertEquals(bin, Base2.decode(
    "00000000000000000100000001000000" +
    "11001101110011001100110000111101"
  ));
  const f2 = IEEE32.decode(bin);
  t.assertEquals(new Float32Array(f), f2);
});
