# IEEE754

このプロジェクトは、IEEE 754浮動小数点数のエンコードおよびデコードを行うJavaScriptライブラリを提供します。

## 機能

- JavaScriptの `Float32Array` をバイナリ表現にエンコード
- バイナリ表現を `Float32Array` にデコード

## 使い方

```js
import { IEEE32 } from "https://code4fukui.github.io/IEEE754/IEEE32.js";

const bin = IEEE32.encode([1, 0.5, 0.1]);
const f32array = IEEE32.decode(bin);
console.log(f32array);
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
