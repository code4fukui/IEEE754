# IEEE754

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project provides a JavaScript library for encoding and decoding IEEE 754 floating-point numbers.

## Features

- Encode JavaScript `Float32Array` to binary representation
- Decode binary representation to `Float32Array`

## Usage

```js
import { IEEE32 } from "https://code4fukui.github.io/IEEE754/IEEE32.js";

const bin = IEEE32.encode([1, 0.5, 0.1]);
const f32array = IEEE32.decode(bin);
console.log(f32array);
```

## License

MIT License