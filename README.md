# Vue 3 + TypeScript + Vite + Tailwind + TW Elements

## 目次
- [使用ライブラリ](#使用ライブラリ)
- [Setup](#setup)
- [注意事項](#注意事項)

## 使用ライブラリ
- Tailwind
- TW Elements

## Setup
TW Elements導入以前のsetup方法は、[こちら](https://github.com/moritanuki/vite-vue3-tailwind)を参考にしてください。

1. TW Elementsを導入する
```bash
npm install tw-elements
```

2. Tailwindのconfigファイルを編集
  - contentに `'./node_modules/tw-elements/js/**/*.js'` を追加
  - pluginsに `require('tw-elements/plugin.cjs')` を追加
```javascript
export default {
  content: [
    './src/**/*.{html,js,vue}',
    './node_modules/tw-elements/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/plugin.cjs')],
}
```

3. vueファイルのscriptは以下のように書く
```typescript
import { onMounted } from "vue";
import {
  Ripple,
  initTWE,
} from "tw-elements";

onMounted(() => {
  initTWE({ Ripple });
})
```

4. vueファイルのtemplateは以下のように書く
```typescript
<button type="button" data-twe-ripple-init data-twe-ripple-color="#ccc" class="rounded border px-7 pb-2.5 pt-3">Button</button>
```

## 注意事項
TW Elementsの[issue](https://github.com/mdbootstrap/TW-Elements/issues/1935)にもあるように、mount後にinitTWEを行う必要がある。
