# Vue 3 + TypeScript + Vite + Tailwind + Ripple

## 目次
- [使用ライブラリ](#使用ライブラリ)
- [Setup](#Setup)
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
<button type="button" data-twe-ripple-init data-twe-ripple-color="light"
  class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Button</button>
```

## 注意事項
TW Elementsの[issue](https://github.com/mdbootstrap/TW-Elements/issues/1935)にもあるように、mount後にinitTWEを行う必要がある。
