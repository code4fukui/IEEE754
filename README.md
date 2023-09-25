# IEEE754
 
## IEEE32.js

float value in binary encoding

```js
import { IEEE32 } from "https://code4fukui.github.io/IEEE754/IEEE32.js";

const bin = IEEE32.encode([1, .5, .1]);
const f32array = IEEE32.decode(bin);
console.log(f32array);
```
